import React from 'react';
import { Layout } from 'antd';
import LeftMenu from './LeftMenu'
import Myroute from '@/route'
const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <LeftMenu/>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Myroute/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {/* Ant Design ©2016 Created by Ant UED */}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
