import * as React from 'react';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';
import Container from '../components/book-managenment/Container';
import { Row, Col, Button } from 'antd';
import Header from '../components/admin-layout/Header/Header';
import * as jsCookie from 'js-cookie';
import config from '../configs';
import Router from 'next/router';
class BookDetail extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    if (!props.req) {
      await props.store.dispatch.booksPageModel.getBookByIdEffect({_id: props.query.id});
    }else {
      props.store.dispatch.booksPageModel.getBookByIdSuccess({ data: props.query.bookData });
    }
  }

  logOut = () => {
    this.props.profileReducer.logOut();

    // Clear Cookie
    jsCookie.remove('token', {domain: config.nextjs.cookieDomain});

    // Redirect
    Router.push('/admin/login');
  }
  render() {  
    return (
      <div>
              <Header userEmail={this.props.profileState.email} logOut={this.logOut} />
        <Container>
          <Row style={{marginTop: '20px'}}>
            <Col span={10} style={{padding: '5px'}}>
            <img src={this.props.bookPageState.data[0].coverUrl} width='100%'/>
            </Col>
            <Col span={14} style={{padding: '5px'}}>
            <h1>{this.props.bookPageState.data[0].title}</h1>
            <h3>{this.props.bookPageState.data[0].borrowPrice} đ<br/></h3>
            <span>Còn {this.props.bookPageState.data[0].quantity} sản phẩm<br/></span>
            <Button icon='folder-add' type='danger'>Thuê ngay</Button>
            </Col>
            </Row>
            <hr/>
            <Row>
              <Col span={24}>
              <h3>Mô tả</h3>
              <p>{this.props.bookPageState.data[0].description}</p>
              </Col>
            </Row>
        </Container>
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

export default withRematch(initStore, mapState, mapDispatch)(BookDetail);