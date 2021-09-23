import { Component } from "react";
import { Space, Tooltip } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';

class DashboardOperate extends Component{
  render() {
    return(
      <Space size="middle">
        <Tooltip title="新建任务">
          <PlusOutlined />
        </Tooltip>
        <Tooltip title="查看更多">
          <EllipsisOutlined />
        </Tooltip>
      </Space>
    )
  }
}

export default DashboardOperate
