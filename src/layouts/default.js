import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-commerce Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} lg={6} xl={4} className="mx-auto">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
