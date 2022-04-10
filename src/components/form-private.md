import { Form, Input, Button, DatePicker, Card, InputNumber } from "antd";
import { Auth, DataStore } from "aws-amplify";
import moment from "moment";
import { Candidate } from "../models";

export default function FormPrivate() {
async function onFinish(values) {
console.log("Success:", values);
console.log("Success:", moment(values.tanggal_masuk).format("DD-MM-YYYY"));

    const { attributes } = await Auth.currentAuthenticatedUser();
    console.log(attributes);
    await DataStore.save(
      new Candidate({
        tenant_code: attributes["custom:tenant"],
        score: parseInt(values.score),
        tanggal_masuk: moment(values.tanggal_masuk).format("YYYY-MM-DD"),
      })
    );

    // const data = await DataStore.query(PublicPost);
    // setPosts(data);

}

const onFinishFailed = (errorInfo) => {
console.log("Failed:", errorInfo);
};

return (
<Card style={{ marginTop: 20 }} title="Private Post">

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
<Form.Item label="Score" name="score">
<InputNumber />
</Form.Item>

        <Form.Item label="Tanggal Masuk" name="tanggal_masuk">
          <DatePicker />
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
    </Card>

);
}
