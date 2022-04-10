import React from 'react';
import { List, Avatar, Space, PaginationProps } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function BlogList({ data, totalList, listPage, setPage }) {
  console.log(totalList, data);

  const pagination: PaginationProps = {
    // Pakai plus/minus 1 ini karena Datastore mulai dari page 0
    current: listPage.current + 1,
    defaultCurrent: listPage.default + 1,
    total: totalList.content,
    defaultPageSize: totalList.defaultPageSize,
    onChange: page => {
      console.log(page);
      setPage(prev => ({ ...prev, current: page - 1 }));
    },
    showTotal: (total: number) => <div style={{ textAlign: 'left' }}> Total {total} items</div>,
  };

  return (
    <List
      itemLayout="vertical"
      // size="large"
      dataSource={data}
      pagination={pagination}
      // footer={
      //   <div>
      //     <b>ant design</b> footer part
      //   </div>
      // }
      renderItem={(item: any) => (
        <List.Item
          key={item.id}
          actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>Nama blog: {item.name}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}
