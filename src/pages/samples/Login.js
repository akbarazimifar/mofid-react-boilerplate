import { Form, Input, Button, Checkbox } from 'antd';

import SampleLayout from '@layouts/SampleLayout';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
  },
};

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <SampleLayout title="ورود">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="نام کاربری"
          name="username"
          rules={[
            {
              required: true,
              message: 'لطفا نام کاربری را وارد کنید',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="گذرواژه"
          name="password"
          rules={[
            {
              required: true,
              message: 'لطفا گذرواژه را وارد کنید',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>قوانین و مقررات را میپذیرم</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" size="large">
            ورود
          </Button>
        </Form.Item>
      </Form>
    </SampleLayout>
  );
};

export default Login;
