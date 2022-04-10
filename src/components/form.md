import { Form, Input, Button } from "antd";
import { DataStore } from "aws-amplify";
import { PublicPost } from "../models";

export default function FormBlog() {
async function onFinish(values) {
console.log("Success:", values);
await DataStore.save(
new PublicPost({
title: values.title,
body: values.body,
Comments: [],
})
);

    // const data = await DataStore.query(PublicPost);
    // setPosts(data);

}

const onFinishFailed = (errorInfo) => {
console.log("Failed:", errorInfo);
};

return (

<Form
name="basic"
labelCol={{
        span: 8,
      }}
wrapperCol={{
        span: 16,
      }}
initialValues={{
        remember: true,
      }}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off" >
<Form.Item label="Title" name="title">
<Input />
</Form.Item>

      <Form.Item label="Post" name="body">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

);
}
