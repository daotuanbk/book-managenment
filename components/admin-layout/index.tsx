import * as React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './AdminLayout.css';
import { IProfileState } from 'rematch/models/profile/interface';
import * as jsCookie from 'js-cookie';
import config from '../../configs';
import Router from 'next/router';

interface MainPageProps {
  profileState: IProfileState;
  profileReducer: any;
}

class AdminLayout extends React.Component<MainPageProps, any> {
  logOut = () => {
    this.props.profileReducer.logOut();

    // Clear Cookie
    jsCookie.remove('token', {domain: config.nextjs.cookieDomain});

    // Redirect
    Router.push('/admin/login');
  }

  render() {
    return (
      <div className="admin-layout">
        <Layout>
          <Layout.Sider
            trigger={null}
            collapsible={true}
            breakpoint="lg"
            width={288}
            className="sider"
          >
            <Sidebar {...this.props} />
          </Layout.Sider>

          <Layout>
            <Layout.Header style={{ padding: 0 }}>
              <Header userEmail={this.props.profileState.email} logOut={this.logOut} />
            </Layout.Header>

            <Layout.Content>
              {this.props.children}
            </Layout.Content>

            <Layout.Footer style={{ padding: 0 }}>
              <Footer />
            </Layout.Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default AdminLayout;

