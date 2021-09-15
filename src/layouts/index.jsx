import { Layout } from 'antd';
import { history } from 'umi';
import './index.less';
import routes from '../../config/routes';

const { Header, Footer, Sider, Content } = Layout;


export default (props) => {
  function changePage(e, item) {
    e.preventDefault()
    history.push(item.path)
  }

  const menus = routes.filter(item => item.meta)
  return(
    <Layout className="main">
      <Sider width={60} theme="light">
        <div className="logo">占位</div>
        {
          menus.map((item, index) => {
            return(
              <div key={index} onClick={e => changePage(e, item)} className="l-menu">
                <div>图标</div>
                <div>{item.meta?.title}</div>
              </div>
            )
          })
        }
      </Sider>
      <Layout>
        <Header>我的工作台</Header>
        <Content>
          <div>{props.children}</div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
