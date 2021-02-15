import { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

import SampleLayout from '@layouts/sample-layout';

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

const LoginForm = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);

  const onFinish = () => {
    setFormIsLoading(true);
    const key = 'formSuccess';
    message.loading({ content: 'درحال ورود...', key });
    setTimeout(() => {
      setFormIsLoading(false);
      message.success({
        content: 'با موفقیت وارد شدید',
        key,
        duration: 2.5,
      });
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <SampleLayout
      title="ورود"
      description="این فرم بدون استفاده از react-hook-form ساخته شده است."
    >
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
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={formIsLoading}
          >
            ورود
          </Button>
        </Form.Item>
      </Form>
    </SampleLayout>
  );
};

export default LoginForm;
