/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { DataStore } from 'aws-amplify';
import { PublicBlog, PublicPost, PrivateBlog, PrivatePost } from '../../models';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 6 },
    lg: { span: 6 },
    xl: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 2,
      offset: 0,
    },
    sm: {
      span: 2,
      offset: 2,
    },
    md: {
      span: 2,
      offset: 6,
    },
    lg: {
      span: 2,
      offset: 6,
    },
    xl: {
      span: 2,
      offset: 4,
    },
  },
};

export default function BlogForm() {
  async function onFinishPublic(values: any) {
    console.log('Received values of form: ', values);
    const blog = await DataStore.save(
      new PublicBlog({
        name: values.name,
      })
    );

    await DataStore.save(
      new PublicPost({
        blogID: blog.id,
        title: values.title,
        content: values.content,
      })
    );
  }

  async function onFinishPrivate(values: any) {
    console.log('Received values of form: ', values);
    const blog = await DataStore.save(
      new PrivateBlog({
        name: values.name,
      })
    );

    await DataStore.save(
      new PrivatePost({
        blogID: blog.id,
        title: values.title,
        content: values.content,
      })
    );
  }

  return (
    <Row gutter={32}>
      <Col span={12}>
        <h4 style={{ textAlign: 'center' }}>Public Blog</h4>
        <Form {...formItemLayout} onFinish={onFinishPublic} layout="horizontal" name="Public Blog">
          <Form.Item name="name" label="Nama Blog">
            <Input />
          </Form.Item>
          <Form.Item name="title" label="Judul">
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content">
            <TextArea rows={4} maxLength={600} />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        <h4 style={{ textAlign: 'center' }}>Private Blog</h4>
        <Form
          {...formItemLayout}
          onFinish={onFinishPrivate}
          layout="horizontal"
          name="Private Blog"
        >
          <Form.Item name="name" label="Nama Blog">
            <Input />
          </Form.Item>
          <Form.Item name="title" label="Judul">
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content">
            <TextArea rows={4} maxLength={600} />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
