/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { DataStore } from 'aws-amplify';
import { PublicBlog, PublicPost, PrivateBlog } from '../../models';

// User Libraries
import BlogForm from './blog-form';
import BlogList from './blog-list';

export default function Page(props: any) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const subscriptionPublic = DataStore.observe(PublicBlog).subscribe(msg => {
      console.log(msg.model, msg.opType, msg.element);
      // setBlog()
      // const posts = (await DataStore.query(Comment)).filter(c => c.postID === '123');
    });

    const subscriptionPublic2 = DataStore.observeQuery(PublicBlog).subscribe(snapshot => {
      const { items, isSynced } = snapshot;
      console.log('subscriptionPublic2', snapshot);
      // console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
    });

    const subscriptionPrivate = DataStore.observe(PrivateBlog).subscribe(msg => {
      console.log(msg.model, msg.opType, msg.element);
      // setBlog()
      // const posts = (await DataStore.query(Comment)).filter(c => c.postID === '123');
    });

    const subscriptionPrivate2 = DataStore.observeQuery(PrivateBlog).subscribe(snapshot => {
      const { items, isSynced } = snapshot;
      console.log('subscriptionPrivate2', snapshot);
      // console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
    });

    // async function getBlog() {
    //   const blogs = await DataStore.query(PublicBlog);
    //   // const posts = await DataStore.query(PublicPost).filter(c => c.postID === '123');
    //   console.log(blogs);
    // }

    // getBlog();

    return () => {
      subscriptionPublic.unsubscribe();
      subscriptionPublic2.unsubscribe();
      subscriptionPrivate.unsubscribe();
      subscriptionPrivate2.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <>
      BLOG
      <Divider />
      {props.user && <BlogForm />}
      <Divider />
      <BlogList />
    </>
  );
}
