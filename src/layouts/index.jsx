import { Component } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';
import './index.less';
import routes from '../../config/routes';
import { AppleOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: []
    }
  }
  componentDidMount() {
    this.setState({
      selectedKeys: [this.props.match.path]
    })
  }
  handleClick() {
    let path = arguments[1].path
    this.setState.defaultSelectedKeys = arguments[2]
    history.push(path)
  }
  render() {
    const menus = routes.filter(item => item.meta)
    const { selectedKeys } = this.state
    return(
      <Layout className="main">
        <Sider width={100} theme="light">
          <div className="logo"></div>
          <Menu theme="dark" selectedKeys={selectedKeys} className="base_menu">
            {
              menus.map((item) => {
                return(
                  <Menu.Item key={item.path} onClick={e => this.handleClick(e, item)} icon={<AppleOutlined />}>
                    {item.meta.title}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <div>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default BaseLayout 
