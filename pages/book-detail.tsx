import * as React from 'react';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';
import Container from '../components/book-managenment/Container';
import { Row, Col, DatePicker, Modal, message, Button, Form } from 'antd';
import Header from '../components/admin-layout/Header/Header';
import * as jsCookie from 'js-cookie';
import config from '../configs';
import Router from 'next/router';
import moment from 'moment';
const FormItem = Form.Item;
class BookDetail extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    if (!props.req) {
      await props.store.dispatch.booksPageModel.getBookByIdEffect({_id: props.query.id});
    }else {
      props.store.dispatch.booksPageModel.getBookByIdSuccess({ data: props.query.bookData });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  logOut = () => {
    this.props.profileReducer.logOut();

    // Clear Cookie
    jsCookie.remove('token', {domain: config.nextjs.cookieDomain});

    // Redirect
    Router.push('/login');
  }

  onConfirm = () => {
    message.success('Thuê sách thành công !')
  }
  render() {  
    const { getFieldDecorator } = this.props.form;
    const dateFormat = 'DD/MM/YYYY';
    return (
      <div>
        <Header userEmail={this.props.profileState.email} logOut={this.logOut} _id={this.props.profileState._id} />              
        <Container>
          <Row style={{marginTop: '20px'}}>
            <Col span={10} style={{padding: '5px'}}>
            <img src={this.props.bookPageState.data[0].coverUrl} width='100%'/>
            </Col>
            <Col span={14} style={{padding: '5px'}}>
            <h1>{this.props.bookPageState.data[0].title}</h1>
            <h3>{this.props.bookPageState.data[0].borrowPrice} đ<br/></h3>
            <span>Còn {this.props.bookPageState.data[0].quantity} sản phẩm<br/></span>
            <Button onClick={() => this.props.bookPageReducer.onOpenModal()} icon='folder-add' type='danger'>Thuê ngay</Button>
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
        <Form onSubmit={this.handleSubmit}>
        <Modal
          title="Chọn ngày trả sách"
          visible={this.props.bookPageState.modalVisible}
          onOk={() => this.props.bookPageReducer.onConfirmModal({
            bookId: this.props.bookPageState.data[0]._id,
            userId: this.props.profileState._id,
            dateBorrow: moment(new Date(), dateFormat),
            dateOfAppointment: this.props.bookPageState.dateOfAppointment,
            borrowPrice: this.props.bookPageState.data[0].borrowPrice,
            status: 'active',
          })}
          onCancel={() => this.props.bookPageReducer.onCancelModal()}
        > 
                 <FormItem>
             {getFieldDecorator('date', {
            rules: [{ required: true, message: 'Vui lòng chọn ngày trả sách!' }],
            initialValue: moment(new Date(), dateFormat)
          })(
           <DatePicker defaultValue={moment(new Date(), dateFormat)} format={dateFormat} onChange={(date) => this.props.bookPageReducer.handleDatePickerChange({date: date})} />
           )}
           </FormItem>
        </Modal>
        </Form>
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

export default withRematch(initStore, mapState, mapDispatch)(Form.create()(BookDetail));