/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO: configure jsx-a11y/label-has-associated-control for antd with RHF
import { useState } from 'react';
import { Row, Col, Input, Button, Typography, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';

import SampleLayout from '@layouts/SampleLayout';

const { Text } = Typography;

const RHFLoginForm = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = () => {
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

  return (
    <SampleLayout
      title="ورود"
      description="این فرم با استفاده از react-hook-form ساخته شده است."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row align="top" style={{ padding: '5px 0' }}>
          <Col span={4}>
            <label>نام کاربری:</label>
          </Col>
          <Col span={16}>
            <Controller
              control={control}
              name="username"
              rules={{ required: true }}
              render={({ value, onChange }) => (
                <Input
                  value={value}
                  onChange={(value) => {
                    onChange(value);
                  }}
                />
              )}
            />
            <Text
              type="danger"
              style={{ visibility: !errors.username && 'hidden' }}
            >
              نام کاربری الزامی‌ست.
            </Text>
          </Col>
        </Row>
        <Row align="top" style={{ padding: '5px 0' }}>
          <Col span={4}>
            <label>پسورد</label>
          </Col>
          <Col span={16}>
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ value, onChange }) => (
                <Input
                  value={value}
                  onChange={(value) => {
                    onChange(value);
                  }}
                />
              )}
            />
            <Text
              type="danger"
              style={{ visibility: !errors.password && 'hidden' }}
            >
              پسورد الزامی‌ست.
            </Text>
          </Col>
        </Row>
        <Row style={{ padding: '10px 0' }}>
          <Col offset={4}>
            <Button
              htmlType="submit"
              loading={formIsLoading}
              type="primary"
              size="large"
            >
              ورود
            </Button>
          </Col>
        </Row>
      </form>
    </SampleLayout>
  );
};

export default RHFLoginForm;
