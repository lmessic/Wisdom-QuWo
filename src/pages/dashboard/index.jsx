import { Component } from 'react';
import './index.less';
import { Layout, Row, Col, Space, Divider, Button, Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import Home from '../home/index';

const { Header, Content } = Layout;

class Dashboard extends Component{
  
  render() {
    const iconStyle = {
      cursor: 'pointer'
    }
    const contentStyle = {
      padding: '20px'
    }
    return(
      <div>
        <Header>
          <Row>
            <Col span={20}>
              我的工作台
            </Col>
            <Col span={4} className="d-tool">
              <Space>
                <Tooltip title="刷新" placement="bottom">
                  <SyncOutlined style={iconStyle} />
                </Tooltip>
                <Divider type="vertical" />
                <Button type="primary">管理卡片</Button>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content style={contentStyle}>
          <Home />
        </Content>
      </div>
    )
  }
}

export default Dashboard
