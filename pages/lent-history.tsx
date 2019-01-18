import * as React from 'react';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';
import { Spin, Row } from 'antd';
import Header from '../components/admin-layout/Header/Header';
import Container from '../components/book-managenment/Container';
import * as jsCookie from 'js-cookie';
import config from '../configs';
import Router from 'next/router';
import LentHistoryList from '../components/lent-managenment/LentHistoryList';
class LentHistory extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    if (!props.req) {
      const profileState = props.store.getState().profileState;
      await props.store.dispatch.lentPageModel.getLentByUserIdEffect({userId: profileState._id, pageSize: 10, pageNumber: 1, sortBy: 'dateBorrow', asc: true});
    } else {
      props.store.dispatch.lentPageModel.fetchDataSuccess({ result: props.query.lentsData });
    }
  }
  logOut = () => {
    this.props.profileReducer.logOut();

    // Clear Cookie
    jsCookie.remove('token', {domain: config.nextjs.cookieDomain});

    // Redirect
    Router.push('/login');
  }
  render() {
    return (
      <div>
        <Header userEmail={this.props.profileState.email} logOut={this.logOut} _id={this.props.profileState._id} roles={this.props.profileState.roles} />  
        <Container> 
          <Spin spinning={this.props.lentPageState.isBusy}>
            <div style={{ padding: '20px', background: '#fff' }}>
              <Row style={{ background: '#fff' }}>
                <h1>
                  Lent History
             </h1>
                <hr />
              </Row>
              <div style={{ background: '#fff' }}>
                <LentHistoryList
                  {...this.props}
                />
              </div>
            </div>
          </Spin>
          </Container>       
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    lentPageState: rootState.lentPageModel
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducer: rootReducer.profileModel,
    lentPageReducer: rootReducer.lentPageModel
  };
};

export default withRematch(initStore, mapState, mapDispatch)(LentHistory);
