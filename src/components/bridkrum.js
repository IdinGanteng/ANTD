import { Breadcrumb } from 'antd';
import React from 'react';

const Bridkrum = () => (
  <Breadcrumb>
    <Breadcrumb.Item>ANTD</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="/">Dashboard</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="/table">Table</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

export default Bridkrum;