import { Component } from 'react';
import './index.less';
import { Row, Col, Space, Collapse, DatePicker, Select } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import DashboardOperate from '@/component/dashboardOperate/index';

const { Panel } = Collapse;
const { Option } = Select;

class Home extends Component {
  componentDidMount() {
  }
  render() {
    return(
      <div>
        <Row>
          <Col span={16} className="h-left">
            <Row>
              <Col span={22}>
                我的任务
              </Col>
              <Col span={2} className="h-operate">
                <DashboardOperate />
              </Col>
            </Row>
            <div className="h-task">
              <Collapse bordered={false} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} style={{color: '#9eacc4'}}/>}>
                <Panel header="已延期" key="delay">
                  delay
                </Panel>
                <Panel header="其它" key="other">
                  other
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col span={8} className="h-right">
            <div className="h-date">
              <Row>
                <Col span={22}>
                  <Space>
                    <span>我的日程</span>
                    <DatePicker />
                  </Space>
                </Col>
                <Col span={2} className="h-operate">
                  <DashboardOperate />
                </Col>
              </Row>
            </div>
            <div className="h-total">
              <Row>
                <Col span={22}>
                  <Space>
                    <span>我的目标</span>
                    <Select style={{width: 120}} size="small">
                      <Option value="jack">Jack</Option>
                    </Select>
                  </Space>
                </Col>
                <Col span={2} className="h-operate">
                  <DashboardOperate />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
