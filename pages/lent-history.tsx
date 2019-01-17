import * as React from 'react';
import AdminLayout from '../components/admin-layout';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';
import { Spin, Row } from 'antd';
import LentList from '../components/lent-managenment/LentList';
class LentHistory extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    if (!props.req) {
      const profileState = props.store.getState().profileState;
      await props.store.dispatch.lentPageModel.getLentByIdEffect({_id: profileState._id});
    } else {
      props.store.dispatch.lentPageModel.getLentByIdSuccess({ result: props.query.lentsData });
    }
  }
  render() {
    return (
      <div>
        <AdminLayout profileState={this.props.profileState} profileReducer={this.props.profileReducer}>
          <Spin spinning={this.props.lentPageState.isBusy}>
            <div style={{ padding: '20px', background: '#fff' }}>
              <Row style={{ background: '#fff' }}>
                <h1>
                  Lent History
             </h1>
                <hr />
              </Row>
              <div style={{ background: '#fff' }}>
                {/* <LentList
                  handleSearchChange={this.handleSearchChange}
                  {...this.props}
                /> */}
              </div>
            </div>
          </Spin>
        </AdminLayout>
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
