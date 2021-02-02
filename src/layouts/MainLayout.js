import { NavLink } from 'react-router-dom';
import { Row, Col, Layout, Menu, Typography } from 'antd';

const { Title } = Typography;
const { Header, Footer } = Layout;

const SamplesLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <Row align="middle">
        <Col span={4}>
          <Title level={4} type="secondary">
            مفید - نسخه نمایشی
          </Title>
        </Col>
        <Col span={20}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <a
                href="https://bitbucket.org/mofidapp/mofid-react-boilerplate/src/master/README.md"
                target="_blank"
                rel="noreferrer"
              >
                داکیومنت
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/samples">نمونه‌ها</NavLink>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
    {children}
    <Footer style={{ textAlign: 'center' }}>
      Mofid React Boilerplate ©2021
    </Footer>
  </Layout>
);

export default SamplesLayout;
