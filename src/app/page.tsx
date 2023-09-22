"use client"
import React from 'react';
import { Card, Col, ConfigProvider, Row } from 'antd';
import theme from '@/config/AntdTheme';
import { Orientation } from "@/components/Orientation";
import { DateTimePicker } from "@/components/DateTimePicker";
import { Video } from "@/components/Video";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="w-screen h-screen">
      <div className='text-[30px] text-center m-2 font-bold'>Mobile Test</div>
      <div className='p-4'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Orientation/>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card>
              <DateTimePicker/>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Video/>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </ConfigProvider>
);

export default HomePage;
