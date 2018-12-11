import * as React from 'react';
import { Icon, Input } from 'antd';
import './CustomSearch.css';

interface NestedCustomSearchProps {}

class CustomSearch extends React.Component<NestedCustomSearchProps, any> {
  state: any = {
    searchMode: false,
  };

  focus: any;

  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.focus) {
        this.focus.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
    });
  };

  render(): JSX.Element {
    return (
      <span className="custom-search" onClick={this.enterSearchMode}>
        <Icon type="search" />
        <Input
          className={this.state.searchMode ? 'show' : 'hide'}
          placeholder='Search ...'
          onBlur={this.leaveSearchMode}
          ref={element => (this.focus = element)}
        />
      </span>
    );
  }
}

export default CustomSearch;
