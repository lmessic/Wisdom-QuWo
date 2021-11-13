import { Component } from 'react';
import './index.less';
import {
  Row,
  Col,
  Space,
  Collapse,
  DatePicker,
  Select,
  Tag,
  Empty,
  Image,
} from 'antd';
import {
  CaretRightOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import DashboardOperate from '@/component/dashboardOperate';

const { Panel } = Collapse;
const { Option } = Select;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delayList: [
        { id: 1, status: 0, name: '张三的前端开发', date: '11月3日' },
        { id: 2, status: 1, name: '李四的前端开发', date: '11月11日' },
        { id: 3, status: 2, name: '王五的前端开发', date: '10月1日' },
      ],
      otherList: [],
      goalList: [
        { id: 1, title: '【示例】滕王阁序' },
        { id: 2, title: '【示例】团队成员具备OKR的基础知识' },
        { id: 3, title: '【示例】送东阳马生序' },
      ],
    };
  }
  componentDidMount() {}
  renderTask(type) {
    const { delayList, otherList } = this.state;
    const tagColors = ['warning', 'processing', 'success'];
    const statusText = ['未开始', '进行中', '已完成'];
    const statusIcons = [
      <ExclamationCircleOutlined />,
      <SyncOutlined />,
      <CheckCircleOutlined />,
    ];

    let data = type == 'delay' ? delayList : otherList;
    return data.length ? (
      data.map((item) => {
        return (
          <div key={item.id} className="h-task-item clearfix">
            <Tag icon={statusIcons[item.status]} color={tagColors[item.status]}>
              {statusText[item.status]}
            </Tag>
            <span className="mar-l15">{item.name}</span>
            <span className="h-task-date">
              <Tag color="orange">{item.date}</Tag>
            </span>
          </div>
        );
      })
    ) : (
      <Empty />
    );
  }
  render() {
    const { goalList } = this.state;
    return (
      <div>
        <Row>
          <Col span={16} className="h-left">
            <Row>
              <Col span={22}>我的任务</Col>
              <Col span={2} className="h-operate">
                <DashboardOperate />
              </Col>
            </Row>
            <div className="h-task">
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined
                    rotate={isActive ? 90 : 0}
                    style={{ color: '#9eacc4' }}
                  />
                )}
              >
                <Panel header="已延期" key="delay">
                  {this.renderTask('delay')}
                </Panel>
                <Panel header="其它" key="other">
                  {this.renderTask('other')}
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
              <div className="h-date-c">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src={require('@/assets/images/girl.jpg')}
                    preview={false}
                  />
                  <div>
                    当前暂无日程，点击<span className="create">创建日程</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-total">
              <Row>
                <Col span={22}>
                  <Space>
                    <span>我的目标</span>
                    <Select
                      style={{ width: 120 }}
                      size="small"
                      defaultValue="lisi"
                    >
                      <Option value="lisi">李四</Option>
                    </Select>
                  </Space>
                </Col>
                <Col span={2} className="h-operate">
                  <DashboardOperate />
                </Col>
              </Row>
              <div style={{ marginTop: 20 }}>
                {goalList.map((item) => {
                  return (
                    <div key={item.id} className="h-total-item">
                      {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
