import { Space, Typography, DatePicker, Divider } from 'antd';

import SampleLayout from '@layouts/SampleLayout';

const { Paragraph, Text, Link } = Typography;

const DateForm = () => (
  <SampleLayout
    title="تاریخ"
    description="این فرم بدون استفاده از react-hook-form ساخته شده است."
  >
    <Space>
      <Text>تاریخ را از فرم مقابل انتخاب کنید.</Text>
      <DatePicker />
    </Space>

    <Divider />

    <Paragraph type="info">
      این تقویم شمسی نیست. پیاده‌سازی تقسیم شمسی با استفاده از پکیج
      <Text code>
        <Link to="https://www.npmjs.com/package/antd-jalali">antd-jalali</Link>
      </Text>
      امکان‌پذیر است.
    </Paragraph>
    <Paragraph>
      این پکیج کاملا با Boilerplate همخوانی دارد و از
      <Text code>dayjs</Text> به همراه
      <Text code>jalaliday</Text> استفاده میکند
    </Paragraph>
  </SampleLayout>
);

export default DateForm;
