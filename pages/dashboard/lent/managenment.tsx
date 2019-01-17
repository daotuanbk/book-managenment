import * as React from 'react';
import AdminLayout from '../../../components/admin-layout';
import withRematch from '../../../rematch/withRematch';
import { initStore } from '../../../rematch/store';
import { Spin, Row } from 'antd';
import LentList from '../../../components/lent-managenment/LentList';
class LentManagenment extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    if (!props.req) {
      const lentPageState = props.store.getState().lentPageModel;
      await props.store.dispatch.lentPageModel.fetchDataEffect({
        search: lentPageState.searchInput,
        pageNumber: lentPageState.pageNumber,
        pageSize: lentPageState.pageSize,
        sortBy: lentPageState.sortBy,
        asc: lentPageState.asc,
      });
    } else {
      props.store.dispatch.lentPageModel.fetchDataSuccess({ result: props.query.lentsData });
    }
  }
  handleSearchChange = (searchValue: string) => {
    this.props.lentPageReducer.onChangeSearchValue({ searchValue: searchValue });
    this.props.lentPageReducer.fetchDataEffect({
      search: searchValue,
      pageNumber: this.props.lentPageState.pageNumber,
      pageSize: this.props.lentPageState.pageSize,
      sortBy: this.props.lentPageState.sortBy,
      asc: this.props.lentPageState.asc,
    })
  }
  render() {
    return (
      <div>
        <AdminLayout profileState={this.props.profileState} profileReducer={this.props.profileReducer}>
          <Spin spinning={this.props.lentPageState.isBusy}>
            <div style={{ padding: '20px', background: '#fff' }}>
              <Row style={{ background: '#fff' }}>
                <h1>
                  Lent Managenment
             </h1>
                <hr />
              </Row>
              <div style={{ background: '#fff' }}>
                <LentList
                  handleSearchChange={this.handleSearchChange}
                  {...this.props}
                />
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

export default withRematch(initStore, mapState, mapDispatch)(LentManagenment);
