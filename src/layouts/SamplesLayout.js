import { useLocation, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

// Constants
import { SampleRoutes } from '@constants/routes';

const { Sider, Content } = Layout;

const SamplesLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
        breakpoint="xl"
        collapsedWidth="0"
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={['forms']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {SampleRoutes.map((sampleRoute) => (
            <Menu.SubMenu key={sampleRoute.route} title={sampleRoute.title}>
              {sampleRoute.subRoutes.map((sampleSubRoute) => (
                <Menu.Item key={`/samples/${sampleSubRoute.route}`}>
                  <Link to={`/samples/${sampleSubRoute.route}`}>
                    {sampleSubRoute.title}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Content style={{ paddingTop: '30px' }}>{children}</Content>
    </Layout>
  );
};

export default SamplesLayout;
