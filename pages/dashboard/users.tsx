import * as React from 'react'
import _ from 'lodash';
import AdminLayout from '../../components/admin-layout';
import { UserPermissions } from '../../nextjs/constants/user-permissions.constant';
import { Row, Col, Input, Select, Button, Icon, Tooltip, Table, Modal, Form, Tree, Checkbox } from 'antd';
import { activeTag } from '../../components/commons/Tags';
import withRematch from '../../rematch/withRematch';
import initStore from '../../rematch/store';
import '../../static/css/admin/users.css';
import { getUsersService } from '../../service-proxies';
import config from '../../configs';

class UsersPage extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    const usersPageState = props.store.getState().usersPageModel;
    const rolesService = getUsersService();
    const result = await rolesService.findUsers(
      usersPageState.search,
      usersPageState.filter,
      undefined,
      undefined,
      usersPageState.pageNumber,
      usersPageState.pageSize,
      usersPageState.sortBy,
      usersPageState.asc
    );

    props.store.dispatch.usersPageModel.fetchDataSuccess({result});
  }

  componentDidMount() {
    this.props.fetchRoleList();
  }

  onCreateUserFormSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, _values) => {
      if (!error) {
        this.props.currentUser._id ? this.props.updateUser({userInfo: this.props.currentUser} as any) : this.props.createNewUser({userInfo: this.props.currentUser} as any);
      }
    });
  }

  render() {
    // Generate Permissions Tree for Filter
    const keys = Object.keys(UserPermissions);
    const allPermissions = keys.map(item => UserPermissions[item]);
    const typesOfPermissions: string[] = [];
    for (const item of allPermissions) {
      const typeOfPermissions = item.split('.')[0];
      if (typesOfPermissions.indexOf(typeOfPermissions) === -1) {
        typesOfPermissions.push(typeOfPermissions);
      }
    }
    const data: any[] = [];
    for (const item of typesOfPermissions) {
      data.push({
        key: item,
        title: `${item} Management`,
        value: allPermissions
          .filter(element => element.indexOf(item) === 0)
          .join(', '),
        children: allPermissions
          .filter(element => element.indexOf(item) === 0)
          .map((element2) => {
            return {
              title: `${element2.replace('.', ' ')}`,
              value: element2,
              key: element2,
            };
          }),
      });
    }

    const actionButtons = (record: any) => {
      return (
        <div className="action-buttons">
          <Tooltip title='Edit User Info'>
            <Button
              type="primary"
              icon="edit"
              className="button"
              onClick={(_event) => this.props.openAddUserModal({currentUser: record})}
              style={{marginRight: '12px'}}
            />
          </Tooltip>

          <Tooltip title={record.isActive ? 'Deactivate User' : 'Activate User'}>
            <Button
              type="primary"
              icon={this.props.currentUser.isActive ? 'lock' : 'unlock'}
              className="button"
              onClick={() => record.isActive ? this.props.deactivateUser({userId: record._id}) : this.props.activateUser({userId: record._id})}
              style={{marginRight: '12px'}}
            />
          </Tooltip>
        </div>
      );
    };

    const columns = [
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: true,
      },
      {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
        sorter: true,
      },
      {
        title: 'Roles',
        dataIndex: 'roles',
        key: 'roles',
        render: (value, _record, _index) => value.join(', '),
      },
      {
        title: 'Active Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render: (_value, record, _index) => activeTag(record.isActive),
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (_value, record, _index) => actionButtons(record),
      },
    ];

    const { getFieldDecorator } = this.props.form;
    return (
      <AdminLayout profileState={this.props.profileState} profileReducer={this.props.profileReducer}>
        <div className='users-page'>
          <div className="users-filter">
            <Row type="flex" gutter={24}>
              <Col lg={12} md={24} xs={24}>
                <div className="search">
                  <Input.Search
                    className="search-input"
                    style={{ width: '100%' }}
                    placeholder='Search By Full Name/Email ...'
                    defaultValue={this.props.search}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>{
                      this.props.searchChangeReducer({searchValue: (e.target as any).value.toLowerCase()});
                      this.props.searchChangeEffect({searchValue: (e.target as any).value.toLowerCase()});
                    }}
                  />
                </div>
              </Col>

              <Col lg={12} md={24} xs={24}>
                <div className="filter">
                  <Select
                    onChange={value => {
                      this.props.filterChangeReducer({filterValue: value});
                      this.props.filterChangeEffect({filterValue: value});
                    }}
                    className="select"
                    style={{ width: '100%' }}
                    placeholder='Filter By Roles'
                    allowClear={true}
                    defaultValue={this.props.role}
                  >
                    {this.props.roleList.map((item, index) => (
                      <Select.Option value={item} key={index}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24} className='button-flex'>
                <div className="add">
                  <Button type="primary" onClick={() => this.props.openAddUserModal({currentUser: {}})}>
                    <Icon type="plus" /> Create New User
                  </Button>
                </div>
                <div className="refresh">
                  <Button type="primary" onClick={() => {
                    this.props.fetchDataReducer({
                      search: this.props.search,
                      filter: this.props.filter,
                      pageNumber: this.props.pageNumber,
                      pageSize: this.props.pageSize,
                      sortBy: this.props.sortBy,
                      asc: this.props.asc
                    });
                    this.props.fetchDataEffect({
                      search: this.props.search,
                      filter: this.props.filter,
                      pageNumber: this.props.pageNumber,
                      pageSize: this.props.pageSize,
                      sortBy: this.props.sortBy,
                      asc: this.props.asc
                    });
                  }}>
                    <Icon type="sync" /> Refresh
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="users-table">
            <Table
              size="middle"
              loading={this.props.isBusy}
              columns={columns}
              dataSource={this.props.data}
              rowKey={record => (record as any)._id}
              onChange={(pagination, _filters, sorter) => {
                this.props.fetchDataReducer({
                  search: this.props.search,
                  pageNumber: pagination.current,
                  pageSize: pagination.pageSize,
                  sortBy: sorter.field ? sorter.field : this.props.sortBy,
                  asc: sorter.order ? sorter.order === 'ascend' ? true : false : this.props.asc,
                });
                this.props.fetchDataEffect({
                  search: this.props.search,
                  pageNumber: pagination.current,
                  pageSize: pagination.pageSize,
                  sortBy: sorter.field ? sorter.field : this.props.sortBy,
                  asc: sorter.order ? sorter.order === 'ascend' ? true : false : this.props.asc,
                });
              }}
              pagination={{
                total: this.props.total,
                current: this.props.pageNumber,
                showSizeChanger: true,
                pageSize: this.props.pageSize,
                pageSizeOptions: [10, 20, 50].map((item) => String(item)),
              }}
            />
          </div>

          <Modal
            title='Create New User'
            okText='Save'
            cancelText='Cancel'
            onOk={this.onCreateUserFormSubmit}
            onCancel={this.props.closeAddUserModal}
            visible={this.props.addUserModalVisible}
          >
            {this.props.errorMessage && (
              <div style={{height: '21px', lineHeight: '21px', color: '#f5222d', textAlign: 'center'}}>
                {this.props.errorMessage}
              </div>
            )}

            <div className="input-user-info">
              <div style={{ padding: '12px 0', fontWeight: 'bold', textAlign: 'center' }}>
                User Information
              </div>
              <Form>
                <Form.Item label='Email'>
                  {getFieldDecorator('email', {
                    rules: [
                      {required: true, message: 'Please Fill in Your Email Address'},
                      {type: 'email', message: 'Invalid Email Address'},
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                    initialValue: this.props.currentUser.email,
                  })(
                    <Input
                      name="email"
                      prefix={<Icon type="mail" />}
                      placeholder='Email Address'
                      disabled={this.props.currentUser._id ? true : false}
                      onChange={(e: any) => this.props.userInfoChange({email: e.target.value})}
                    />
                  )}
                </Form.Item>

                <Form.Item label='Password'>
                  {getFieldDecorator('password', {
                    rules: [
                      {required: this.props.currentUser._id ? false : true, message: 'Please input your Password!'},
                      {
                        pattern: config.usersModuleConfig.passwordRegex,
                        message:
                          'Password must be at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character',
                      },
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                  })(
                    <Input
                      prefix={<Icon type="lock" />}
                      type="password"
                      name="password"
                      placeholder='Password'
                      onChange={(e: any) => this.props.userInfoChange({password: e.target.value})}
                    />,
                  )}
                </Form.Item>

                <Form.Item label='First Name'>
                  {getFieldDecorator('firstName', {
                    rules: [
                      {required: true, message: 'Please Fill in Your First Name'},
                    ],
                    validateTrigger: 'onBlur',
                    validateFirst: true,
                    initialValue: this.props.currentUser.firstName,
                  })(
                    <Input
                      name="firstName"
                      prefix={<Icon type="user" />}
                      placeholder='First Name'
                      onChange={(e: any) => this.props.userInfoChange({firstName: e.target.value})}
                    />,
                  )}
                </Form.Item>

                <Form.Item label='Last Name'>
                  {getFieldDecorator('lastName', {
                    rules: [
                      {required: true, message: 'Please Fill in Your First Name'},
                    ],
                    initialValue: this.props.currentUser.lastName,
                  })(
                    <Input
                      name="lastName"
                      prefix={<Icon type="user" />}
                      placeholder='Last Name'
                      onChange={(e: any) => this.props.userInfoChange({lastName: e.target.value})}
                    />,
                  )}
                </Form.Item>

                <Form.Item label='Phone Number'>
                  {getFieldDecorator('phoneNumber', {
                    rules: [
                      {required: true, message: 'Please Fill in Your Phone Number'},
                    ],
                    initialValue: this.props.currentUser.phoneNumber,
                  })(
                    <Input
                      name="phoneNumber"
                      prefix={<Icon type="phone" />}
                      placeholder='Phone Number'
                      onChange={(e: any) => this.props.userInfoChange({phoneNumber: e.target.value})}
                    />,
                  )}
                </Form.Item>
              </Form>
            </div>
            <div className="select-roles">
              <div style={{ padding: '12px 0', fontWeight: 'bold', textAlign: 'center' }}>
                User Role
              </div>
              <div style={{margin: '0 24px'}}>
                <div className="checkbox-group">
                  <Checkbox.Group
                    value={this.props.currentUser.roles}
                    options={this.props.roleList.map(item => ({
                      value: item,
                      label: item,
                    }))}
                    onChange={(checkedValue) => this.props.userInfoChange({roles: checkedValue})}
                  />
                </div>
              </div>
            </div>
            <div className="select-permissions">
              <div style={{ padding: '12px 0', fontWeight: 'bold', textAlign: 'center' }}>
                Users Permissions
              </div>
              <div style={{margin: '0 24px'}}>
                <Tree
                  checkable={true}
                  multiple={true}
                  checkedKeys={this.props.currentUser.permissions}
                  onCheck={(checkedKeys, _e) => this.props.userInfoChange({permissions: checkedKeys})}
                >
                  {data.map((item, _index) => (
                    <Tree.TreeNode
                      title={item.title}
                      key={item.key}
                    >
                      {item.children.map((child) => (
                        <Tree.TreeNode
                          title={child.title}
                          key={child.value}
                        />
                      ))}
                    </Tree.TreeNode>
                  ))}
                </Tree>
              </div>
            </div>
          </Modal>
        </div>
      </AdminLayout>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    ...rootState.usersPageModel,
    profileState: rootState.profileModel
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    ...rootReducer.usersPageModel,
    profileReducer: rootReducer.profileModel
  };
};

export default withRematch(initStore, mapState, mapDispatch)(Form.create()(UsersPage));