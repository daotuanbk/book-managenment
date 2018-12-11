import * as React from 'react';
import { Upload, Button, Icon, Form, Input, Row, InputNumber, Select } from 'antd';
import AdminLayout from '../../../components/admin-layout';
import withRematch from '../../../rematch/withRematch';
import { initStore } from '../../../rematch/store';

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;
class BookEdit extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    // if (!props.req) {
      await props.store.dispatch.booksPageModel.getBookByIdEffect({_id: props.query.id});
    // }else {
    //   props.store.dispatch.booksPageModel.getBookByIdSuccess({ data: props.query.bookData });
    // }
  }
  constructor(props: any) {
    super(props);
    this.state = {
      base64: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.bookPageReducer.updateBookEffect({ 
          _id: this.props.bookPageState.data[0]._id,
          title: values['title'],
          description: values['description'],
          author: values['author'],
          language: 'none',
          categories: [],
          quantity: values['quantity'],
          borrowPrice: values['borrow-price'],
          status: values['status'],
        })
      }
    });
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const uploadProps: any = {
      fileList: this.props.bookPageState.fileList,
      beforeUpload: (file) => {
        this.props.bookPageReducer.onChangeFileList({ file: file });
        this.getBase64(file, imageUrl =>
          this.setState({ base64: imageUrl }),
        );
        return false;
      },
    };
    return (
      <div>
        <AdminLayout profileState={this.props.profileState} profileReducer={this.props.profileReducer}>
          <div style={{ padding: '20px', background: '#fff' }}>
            <Form onSubmit={this.handleSubmit}>
              <h1>
                Book
            </h1>
              <p>
                Cover Image
              </p>
              <Row>
                {this.state.base64 ? 
                <img src={this.state.base64} width={'30%'} style={{ marginBottom: '20px' }} /> :
                <img src={this.props.bookPageState.data[0].coverUrl} width={'30%'} style={{ marginBottom: '20px' }} />
              }
              </Row>
              <Upload {...uploadProps}>
                <Button>
                  <Icon type='upload' />
                  Upload
          </Button>
              </Upload>
              <FormItem>
                {getFieldDecorator('title',
                  {
                    rules: [{ required: true, message: 'Please input your title!' }],
                  initialValue: this.props.bookPageState.data[0].title,
                  },
                )(
                  <Input style={{ marginTop: '40px' }} placeholder='Title' size='large' defaultValue={this.props.bookPageState.data[0].title} />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('description',
                  {
                    rules: [{ required: true, message: 'Please input your description!' }],
                  initialValue: this.props.bookPageState.data[0].description,
                  },
                )(
                  <TextArea placeholder='Description' rows={4} defaultValue={this.props.bookPageState.data[0].description} />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('author',
                  {
                    rules: [{ required: true, message: 'Please input your author!' }],
                  initialValue: this.props.bookPageState.data[0].author,
                  },
                )(
                  <Input placeholder='Author' defaultValue={this.props.bookPageState.data[0].author} />,
                )}
              </FormItem>
              <p>Quantity</p>
              <FormItem>
                {getFieldDecorator('quantity',
                  {
                    rules: [{ required: true, message: 'Please choose your quantity!' }],
                  initialValue: this.props.bookPageState.data[0].quantity,
                  },
                )(
                  <InputNumber min={0} placeholder='Quantity' size='default' defaultValue={this.props.bookPageState.data[0].quantity} />,
                )}
              </FormItem>
              <p>Borrow Price</p>
              <FormItem>
                {getFieldDecorator('borrow-price',
                  { 
                    rules: [{ required: true, message: 'Please choose your borrow price!' }],
                  initialValue: this.props.bookPageState.data[0].borrowPrice,
                  },
                )(
                  <InputNumber min={0} placeholder='Borrow Price' size='default' defaultValue={this.props.bookPageState.data[0].borrowPrice} />,
                )}
              </FormItem>
              <p>Status</p>
              <FormItem>
                {getFieldDecorator('status',
                  { 
                    rules: [{ required: true, message: 'Please choose book status!', }],
                  initialValue: this.props.bookPageState.data[0].status,
                  },
                )(
                  <Select style={{ width: 120 }}>
                  <Option value="active">Active</Option>
                  <Option value="deactive">Deactive</Option>
                  <Option value="disabled">Disabled</Option>
                </Select>
                )}
              </FormItem>
              <Button
                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                className='submitButton'
                type='default'
                htmlType='submit'
                loading={this.props.isBusy}
              >
                Publish
          </Button>
            </Form>
          </div>
        </AdminLayout>
      </div>
    )
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

export default withRematch(initStore, mapState, mapDispatch)(Form.create()(BookEdit));

