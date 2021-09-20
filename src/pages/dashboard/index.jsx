import { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class Dashboard extends Component{
  render() {
    return(
      <div>
        <Header>我的工作台</Header>
      </div>
    )
  }
}

export default Dashboard
