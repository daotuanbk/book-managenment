import * as React from 'react';
import AdminLayout from '../../../components/admin-layout';
import withRematch from '../../../rematch/withRematch';
import { initStore } from '../../../rematch/store';
import { Spin, Row } from 'antd';
import BookList from '../../../components/book-managenment/BookList';
class BookManagenment extends React.Component<any, any> {
  static async getInitialProps(props: any) {
  if (!props.req) {
    const bookPageState = props.store.getState().booksPageModel;
    await props.store.dispatch.booksPageModel.fetchDataEffect({
      search: bookPageState.searchInput,
      pageNumber: bookPageState.pageNumber,
      pageSize: bookPageState.pageSize,
      sortBy: bookPageState.sortBy,
      asc: bookPageState.asc,
    });
  }else {
    props.store.dispatch.booksPageModel.fetchDataSuccess({ result: props.query.booksData });
  }
}
  render() {
    return (
      <div>
      <AdminLayout profileState={this.props.profileState} profileReducer={this.props.profileReducer}>
      <Spin spinning={this.props.bookPageState.isBusy}>
      <div style={{ padding: '20px', background: '#fff' }}>
            <Row style={{background: '#fff'}}>
              <h1>
                Book Managenment
             </h1>
              <hr />
            </Row>
            <div style={{background: '#fff'}}>
              <BookList
                data={this.props.bookPageState.data}
                // includeOrExcludeInactivePost={this.includeOrExcludeInactivePost}
                // deactivateOrActivatePost={this.deactivateOrActivatePost}
                // handleSearchChange={this.handleSearchChange}
                // handleEditFormSubmit={this.handleEditFormSubmit}
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
    bookPageState: rootState.booksPageModel
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducer: rootReducer.profileModel,
    bookPageReducer: rootReducer.booksPageModel
  };
};

export default withRematch(initStore, mapState, mapDispatch)(BookManagenment);
