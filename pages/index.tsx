import * as React from 'react';
import Container from '../components/book-managenment/Container';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';
import { Row, Col, Card, Button, Pagination, Tag } from 'antd';
import Header from '../components/admin-layout/Header/Header';
import * as jsCookie from 'js-cookie';
import config from '../configs';
import Router from 'next/router';
const { Meta } = Card;

class LandingPage extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    if (!props.req) {
      const bookPageState = props.store.getState().booksPageModel;
      await props.store.dispatch.booksPageModel.fetchActiveDataEffect({
        search: bookPageState.searchInput,
        pageNumber: bookPageState.pageNumber,
        pageSize: bookPageState.indexPageSize,
        sortBy: bookPageState.sortBy,
        asc: bookPageState.asc,
      });
    } else {
      props.store.dispatch.booksPageModel.fetchDataSuccess({ result: props.query.booksData });
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
    const renderBooks = this.props.bookPageState.data.map((value, index) => {
      return (
        <div>
        <Col span={6} key={index} style={{padding: '10px'}}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<div style={{background: `url(${value.coverUrl})`, backgroundSize: 'cover', width: '100%', height: '300px', backgroundPosition: 'center'}}></div>}
            actions={[<div>
              <a href={`/book/${value._id}`}><Button icon='folder-add' type='danger'>Thuê ngay</Button></a>
              </div>]}
          >
            <Meta
              title={value.title}
              description={(<div>
                <span>{value.description.length > 70 ? value.description.splice(0, 70) : value.description}<br/></span>
              <span>Còn <b>{value.quantity}</b> sản phẩm<br/></span>
              <span>Đơn giá: <b>{value.borrowPrice}</b> đ</span><br/><br/>
              {
                value.status === 'active' ? <Tag color='green'>Còn hàng</Tag> : <Tag color='red'>Hết hàng</Tag>
              }
              </div>)}
            />
          </Card>
        </Col>
        </div>
      );
    })
    return (
      <div>
        <Header userEmail={this.props.profileState.email} logOut={this.logOut} _id={this.props.profileState._id} roles={this.props.profileState.roles} />
        <Container>
          <Row>
            {renderBooks}
          </Row>
          <Row>
            <Pagination pageSize={12} total={this.props.bookPageState.data.total} onChange={(page, pageSize) => this.props.bookPageReducer.fetchDataEffect({
              search: '',
              pageNumber: page,
              pageSize: pageSize,
              sortBy: this.props.bookPageState.sortBy,
              asc: this.props.bookPageState.asc
            })}
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}/>
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

export default withRematch(initStore, mapState, mapDispatch)(LandingPage);