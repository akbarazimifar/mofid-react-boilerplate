import { Card, Col, Row } from 'antd';

const SamplesLayout = ({ children, title }) => (
  <Row>
    <Col span={16} offset={4}>
      <Card title={title} size="small">
        {children}
      </Card>
    </Col>
  </Row>
);

export default SamplesLayout;
