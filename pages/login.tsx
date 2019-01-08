import * as React from 'react';
import { Row, Col, Form, Input, Icon, Checkbox, Button } from 'antd';
import '../static/css/admin/login.css';
import withRematch from '../rematch/withRematch';
import { initStore } from '../rematch/store';

class LoginPage extends React.Component<any, any> {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, _values) => {
      if (!error) {
        this.props.login({
          email: this.props.email,
          password: this.props.password,
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <Row>
          <Col xs={0} sm={4} lg={8} />
          <Col xs={24} sm={16} lg={8}>
            <div className="login-form">
              <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                  <h2>Log In</h2>
                </Form.Item>

                <Form.Item>
                  {this.props.errorMessage && (
                    <div style={{ height: '21px', lineHeight: '21px', color: '#f5222d', textAlign: 'center' }}>
                      {this.props.errorMessage}
                    </div>
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [
                      { required: true, message: 'Please Input Your Email' },
                      { type: 'email', message: 'Invalid Email Address' }
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                  })(
                    <Input
                      prefix={<Icon type="user" />}
                      type='email'
                      placeholder='Email Address'
                      onChange={(e) => this.props.loginInfoChange({ email: e.target.value })}
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please Input Your Password' }],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                  })(
                    <Input
                      prefix={<Icon type="lock" />}
                      type="password"
                      placeholder='Password'
                      onChange={(e) => this.props.loginInfoChange({ password: e.target.value })}
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator('rememberMe', {
                    valuePropName: 'checked',
                  })(
                    <Checkbox className="login-form-checkbox">
                      Remember Me !
                      </Checkbox>,
                  )}
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={this.props.isBusy}
                  >
                    Log In
                    </Button>
                </Form.Item>
              </Form>
            </div>

            <div className="login-footer">
              {/* <Row>
                  <Col span={12}>
                    <Link href="#">
                      <a>Forgot Password</a>
                    </Link>
                  </Col>
                  <Col span={12} style={{textAlign: 'right'}}>
                    <Link href="#">
                      <a>Register An Account</a>
                    </Link>
                  </Col>
                </Row> */}
              {/* <Row className="login-with">
                  <Col>
                    <span>Log In With: </span>
                    <a className="icon" href="">
                      <Icon type="facebook" />
                    </a>
                    <a className="icon" href="" style={{ color: 'red' }}>
                      <Icon type="google" />
                    </a>
                  </Col>
                </Row> */}
            </div>
          </Col>
          <Col xs={0} sm={4} lg={8} />
        </Row>
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    ...rootState.loginPageModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    ...rootReducer.loginPageModel,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(Form.create()(LoginPage));