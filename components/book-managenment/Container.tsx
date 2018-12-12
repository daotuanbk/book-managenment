import * as React from 'react';
import './Container.css';

class Container extends React.Component<any, any> {
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

export default Container;