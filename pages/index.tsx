import * as React from 'react';
import Container from '../components/book-managenment/Container';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';
import { Row, Col, Card, Button } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

class LandingPage extends React.Component<any, any> {
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
    } else {
      props.store.dispatch.booksPageModel.fetchDataSuccess({ result: props.query.booksData });
    }
  }
  render() {
    const renderBooks = this.props.bookPageState.data.map((value, index) => {
      return (
        <Col span={6} key={index} style={{padding: '10px'}}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="bookCover" src={value.coverUrl} />}
            actions={[<div>
              <a href={`/book/${value._id}`}><Button icon='folder-add' type='danger'>Thuê ngay</Button></a>
              </div>]}
          >
            <Meta
              title={value.title}
              description={(<div>
                <span>{value.description.length > 70 ? value.description.splice(0, 70) : value.description}<br/></span>
              <span>Còn <b>{value.quantity}</b> sản phẩm<br/></span>
              <span>Đơn giá: <b>{value.borrowPrice}</b> đ</span>
              </div>)}
            />
          </Card>
        </Col>
      );
    })
    return (
      <div>
        <Container>
          <Row>
            {renderBooks}
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