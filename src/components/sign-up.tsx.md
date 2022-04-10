import { Form, Input, Button, Checkbox } from "antd";
import { Auth } from "aws-amplify";

async function signUp(username: string, password: string, tenant: string) {
try {
const { user } = await Auth.signUp({
username,
password,
attributes: {
email: username,
"custom:tenant": tenant,
},
});
console.log(user);
} catch (error) {
console.log("error signing up:", error);
}
}

export default function SignUp() {
const onFinish = (values) => {
console.log("Success:", values);
signUp(values.username, values.password, values.tenant);
};

const onFinishFailed = (errorInfo) => {
console.log("Failed:", errorInfo);
};

return (

<div style={{ marginTop: 24, padding: 24, maxWidth: 500 }}>
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
<Form.Item
label="Username"
name="username"
rules={[
{
required: true,
message: "Please input your username!",
},
]} >
<Input />
</Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Tenant" name="tenant">
          <Input />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
    </div>

);
}
