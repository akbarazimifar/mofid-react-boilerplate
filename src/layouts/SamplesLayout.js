import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const SamplesLayout = ({ children }) => (
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.SubMenu key="sub1" title="فرم‌ها">
          <Menu.Item key="1">ورود</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
    <Content style={{ padding: '50px' }}>{children}</Content>
  </Layout>
);

export default SamplesLayout;
