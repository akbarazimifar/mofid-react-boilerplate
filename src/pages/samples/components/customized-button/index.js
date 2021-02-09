import { Space, Divider } from 'antd';

// Layouts
import SampleLayout from '@layouts/SampleLayout';

// Components
import Button from '@components/customized/Button';

const CustomizedButton = () => (
  <SampleLayout
    title="دکمه"
    description="این دکمه با styled-components شخصی‌سازی شده است."
  >
    <Space>
      <Button>دکمه شخصی‌سازی‌شده</Button>
    </Space>

    <Divider />
  </SampleLayout>
);

export default CustomizedButton;
