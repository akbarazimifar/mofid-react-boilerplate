import { Card, Col, Row, Divider } from 'antd';

const SamplesLayout = ({ children, title, description }) => (
  <Row>
    <Col xs={{ span: 22, offset: 1 }} sm={{ span: 16, offset: 4 }}>
      <Card size="small">
        <Card.Meta title={title} description={description} />
        <Divider />
        {children}
      </Card>
    </Col>
  </Row>
);

export default SamplesLayout;
