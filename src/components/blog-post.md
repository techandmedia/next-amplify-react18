/_ eslint-disable @next/next/no-img-element _/
import React from "react";
import { List, Space } from "antd";
import { Button, Collection, Card, Heading, Text } from "@aws-amplify/ui-react";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { PublicPost } from "../API";

const IconText = ({ text, icon }) => (
<Space>
{React.createElement(icon)}
{text}
</Space>
);

export default function BlogPost({ data, deletePost }) {
return (
<Collection type="list" items={data} gap="1.5rem">
{(item: PublicPost, index) => (
<Card key={index} padding="1rem" variation="outlined">
<Heading level={4}>{item.title}</Heading>
<img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
<Text>{item.body}</Text>
<Button onClick={() => deletePost(item.id)} style={{ marginTop: 10 }}>
Delete Post
</Button>
</Card>
)}
</Collection>
// <List
// itemLayout="vertical"
// size="large"
// pagination={{
    //     onChange: (page) => {
    //       console.log(page);
    //     },
    //     pageSize: 5,
    //   }}
// // style={{ width: "100px" }}
// dataSource={data}
// footer={
// <div>
// <b>ant design</b> footer part
// </div>
// }
// renderItem={(item: PublicPost) => (
// <List.Item
// key={item.id}
// actions={[
// <IconText
// icon={StarOutlined}
// text="156"
// key="list-vertical-star-o"
// />,
// <IconText
// icon={LikeOutlined}
// text="156"
// key="list-vertical-like-o"
// />,
// <IconText
// icon={MessageOutlined}
// text="2"
// key="list-vertical-message"
// />,
// <Button
// onClick={() => deletePost(item.id)}
// type="primary"
// key="deletePost"
// style={{ marginTop: 10 }}
// >
// Delete Post
// </Button>,
// ]}
// extra={
// <img
// width={272}
// alt="logo"
// src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
// />
// }
// >
// <List.Item.Meta
// // avatar={<Avatar src={item.avatar} />}
// // title={<a href={item.href}>{item.title}</a>}
// title={<>{item.title}</>}
// // description={item.body}
// />
// {item.body}
// </List.Item>
// )}
// />
);
}
