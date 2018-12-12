import * as React from 'react';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';

class BookDetail extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    // if (!props.req) {
      await props.store.dispatch.booksPageModel.getBookByIdEffect({_id: props.query.id});
    // }else {
    //   props.store.dispatch.booksPageModel.getBookByIdSuccess({ data: props.query.bookData });
    // }
  }
  render() {
    return (
      <div>BookDetail</div>
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

export default withRematch(initStore, mapState, mapDispatch)(BookDetail);