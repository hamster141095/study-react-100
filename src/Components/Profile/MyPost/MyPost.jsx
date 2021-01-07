import React from 'react'
import { Form, Input, Button,  } from 'antd';
import { SendOutlined } from '@ant-design/icons';


const MyPost = () => {
    const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
    };


    const onFinish = (values) => {
        console.log('Success:', values);
    };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:1', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="posts"
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Text post"
        name="post"
      >
        <Input.TextArea autoSize allowClear />
      </Form.Item>
      <Form.Item>
        <Button  htmlType="submit">
            <SendOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyPost
