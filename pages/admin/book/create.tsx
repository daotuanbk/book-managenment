import * as React from 'react';
import { Upload, Button, Icon, Form, Input, Row, InputNumber, Select } from 'antd';
import AdminLayout from '../../../components/admin-layout';
import withRematch from '../../../rematch/withRematch';
import { initStore } from '../../../rematch/store';
import Router from 'next/router';
const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;
class BookCreate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      base64: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.bookPageReducer.createNewBookEffect({
          title: values['title'],
          description: values['description'],
          author: values['author'],
          language: 'none',
          categories: [],
          quantity: values['quantity'],
          borrowPrice: values['borrow-price'],
          status: values['status'],
        });
        Router.push('/admin/book/managenment');
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
                <img src={this.state.base64} width={'30%'} style={{ marginBottom: '20px' }} />
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
                  },
                )(
                  <Input style={{ marginTop: '40px' }} placeholder='Title' size='large' />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('description',
                  {
                    rules: [{ required: true, message: 'Please input your description!' }],
                  },
                )(
                  <TextArea placeholder='Description' rows={4} />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('author',
                  {
                    rules: [{ required: true, message: 'Please input your author!' }],
                  },
                )(
                  <Input placeholder='Author' />,
                )}
              </FormItem>
              <p>Quantity</p>
              <FormItem>
                {getFieldDecorator('quantity',
                  {
                    rules: [{ required: true, message: 'Please choose your quantity!' }],
                  },
                )(
                  <InputNumber min={0} placeholder='Quantity' size='default' />,
                )}
              </FormItem>
              <p>Borrow Price</p>
              <FormItem>
                {getFieldDecorator('borrow-price',
                  { 
                    rules: [{ required: true, message: 'Please choose your borrow price!' }],
                  },
                )(
                  <InputNumber min={0} placeholder='Borrow Price' size='default' />,
                )}
              </FormItem>
              <p>Status</p>
              <FormItem>
                {getFieldDecorator('status',
                  { 
                    rules: [{ required: true, message: 'Please choose book status!', }],
                  },
                )(
                  <Select defaultValue="active" style={{ width: 120 }}>
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

export default withRematch(initStore, mapState, mapDispatch)(Form.create()(BookCreate));

