/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { PublicBlog, PrivateBlog } from '../../models';

// User Libraries
import BlogForm from './blog-form';
import BlogList from './blog-list';

export default function Page(props: any) {
  const [publicBlog, setPublicBlog] = useState([]);
  const [privateBlog, setPrivateBlog] = useState([]);
  const [totalPublic, setTotalPublic] = useState({ pages: 0, content: 0, defaultPageSize: 5 });
  const [totalPrivate, setTotalPrivate] = useState({ pages: 0, content: 0, defaultPageSize: 10 });
  const [publicPage, setPublicPage] = useState({ default: 0, current: 0 });
  const [privatePage, setPrivatePage] = useState({ default: 0, current: 0 });

  useEffect(() => {
    getDataPublic();
    getDataPrivate();

    async function getDataPublic() {
      const allData = await DataStore.query(PublicBlog, Predicates.ALL);
      const data = await DataStore.query(PublicBlog, Predicates.ALL, {
        page: publicPage.current,
        limit: totalPublic.defaultPageSize,
        sort: s => s.createdAt(SortDirection.DESCENDING),
      });
      setPublicBlog(data);
      setTotalPublic(prev => ({
        ...prev,
        content: allData.length,
        pages: Math.ceil(allData.length / totalPublic.defaultPageSize),
      }));
    }

    async function getDataPrivate() {
      if (props.user) {
        const allData = await DataStore.query(PrivateBlog, Predicates.ALL);
        const data = await DataStore.query(PrivateBlog, Predicates.ALL, {
          page: privatePage.current,
          limit: totalPrivate.defaultPageSize,
          sort: s => s.createdAt(SortDirection.DESCENDING),
        });
        setPrivateBlog(data);
        setTotalPrivate(prev => ({
          ...prev,
          content: allData.length,
          pages: Math.ceil(allData.length / totalPrivate.defaultPageSize),
        }));
      }
    }

    const subscriptionPublic = DataStore.observe(PublicBlog).subscribe(() => getDataPublic());
    const subscriptionPrivate = DataStore.observe(PrivateBlog).subscribe(() => getDataPrivate());

    return () => {
      subscriptionPublic.unsubscribe();
      subscriptionPrivate.unsubscribe();
    };
  }, [publicPage.current, privatePage.current, props.user]);

  return (
    <>
      BLOG
      <Divider />
      {props.user && <BlogForm />}
      <Divider />
      <Row gutter={32}>
        <Col span={12}>
          <h4 style={{ textAlign: 'center' }}>Public Blog</h4>
          <BlogList
            data={publicBlog}
            totalList={totalPublic}
            listPage={publicPage}
            setPage={setPublicPage}
          />
        </Col>
        <Col span={12}>
          <h4 style={{ textAlign: 'center' }}>Private Blog</h4>
          <BlogList
            data={privateBlog}
            totalList={totalPrivate}
            listPage={privatePage}
            setPage={setPrivatePage}
          />
        </Col>
      </Row>
    </>
  );
}
