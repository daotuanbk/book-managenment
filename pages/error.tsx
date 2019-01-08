import * as React from 'react';
import initStore from '../rematch/store';
import withRematch from '../rematch/withRematch';
import Error from 'next/error';

class CustomError extends React.Component<any, any> {
  static async getInitialProps (props: any) {
    return props.query;
  }

  render() {
    return (
      <div className='error-page'>
          <Error statusCode={this.props.statusCode} />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducer: rootReducer.profileModel,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(CustomError);
