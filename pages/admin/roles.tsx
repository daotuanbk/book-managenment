import * as React from 'react';
import { Button, Input, Col, Row, TreeSelect, Icon, Table, Tooltip, Modal, Checkbox, Tree } from 'antd';
import moment from 'moment';
import { defaultTag, activeTag } from '../../components/commons/Tags';
import withRematch from '../../rematch/withRematch';
import { initStore } from '../../rematch/store';
import AdminLayout from '../../components/admin-layout';
import { UserPermissions } from '../../nextjs/constants/user-permissions.constant';
import '../../static/css/admin/roles.css';
import { getRolesService } from '../../service-proxies';

class RolesPage extends React.Component<any, any> {
  static async getInitialProps(props: any) {
    const rolesPageState = props.store.getState().rolesPageModel;
    const rolesService = getRolesService();
    const result = await rolesService.findRoles(
      rolesPageState.search,
      rolesPageState.permissions,
      undefined,
      rolesPageState.pageNumber,
      rolesPageState.pageSize,
      rolesPageState.sortBy,
      rolesPageState.asc
    );

    props.store.dispatch.rolesPageModel.fetchDataSuccess({result});
  }

  onCreateRoleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.props.currentRole.name || !this.props.currentRole.permissions || this.props.currentRole.permissions.length === 0) {
      this.props.errorHappen({errorMessage: `Please Fill In 'Role Name' And Select 'Permissions'.`});
    } else {
      this.props.currentRole._id ? this.props.updateRole({roleInfo: this.props.currentRole} as any) : this.props.createNewRole({roleInfo: this.props.currentRole} as any);
    }
  }

  render() {
    const actionButtons = (record: any) => {
      return (
        <div className="action-buttons">
          <Tooltip title='Edit Role'>
            <Button
              type="primary"
              icon="edit"
              className="button"
              onClick={(_event) => this.props.openAddRoleModal({currentRole: record})}
              style={{marginRight: '12px'}}
            />
          </Tooltip>

          <Tooltip title={record.isActive ? 'Deactivate Role' : 'Activate Role'}>
            <Button
              type="primary"
              icon={this.props.currentRole.isActive ? 'lock' : 'unlock'}
              className="button"
              onClick={() => record.isActive ? this.props.deactivateRole({roleId: record._id}) : this.props.activateRole({roleId: record._id})}
              style={{marginRight: '12px'}}
            />
          </Tooltip>
        </div>
      );
    };

    const columns = [
      {
        title: 'Role Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true,
      },
      {
        title: 'Default',
        dataIndex: 'isDefault',
        key: 'isDefault',
        className: 'isDefault',
        render: (_value, record, _index) => defaultTag(record.isDefault),
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (value, _record, _index) => value ? moment(value).format('YYYY-MM-DD') : '',
      },
      {
        title: 'Last Modified At',
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        sorter: true,
        render: (value, _record, _index) => value ? moment(value).format('YYYY-MM-DD') : '',
      },
      {
        title: 'Active Status',
        dataIndex: 'isActive',
        key: 'isActive',
        sorter: true,
        render: (_value, record, _index) => activeTag(record.isActive),
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (_value, record, _index) => actionButtons(record),
      },
    ];

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

    return (
      <AdminLayout profileState={this.props.profileState} profileReducer={this.props.profileReducer}>
        <div className="roles-page">
          <div className="roles-filter">
            <Row type="flex" gutter={24}>
              <Col lg={12} md={24} xs={24}>
                <div className="search">
                  <Input.Search
                    className="search-input"
                    style={{ width: '100%' }}
                    placeholder='Search By Role Name ...'
                    defaultValue={this.props.search}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      this.props.searchChangeReducer({searchValue: (e.target as any).value.toLowerCase()});
                      this.props.searchChangeEffect({searchValue: (e.target as any).value.toLowerCase()});
                    }}
                  />
                </div>
              </Col>

              <Col lg={12} md={24} xs={24}>
                <div className="filter">
                  <TreeSelect
                    treeData={data}
                    placeholder='Filter By Permissions'
                    style={{ width: '96%' }}
                    treeCheckable={true}
                    showCheckedStrategy={TreeSelect.SHOW_PARENT}
                    allowClear={true}
                    defaultValue={this.props.filter}
                    onChange={(value, _label) => {
                      if (value.length === 1) {
                        this.props.filterChangeReducer({filterValue: value[0].split(', ')});
                        this.props.filterChangeEffect({filterValue: value[0].split(', ')});
                      } else if (value.length === 2) {
                        const permissions = [
                          ...value[0].split(', '),
                          ...value[1].split(', '),
                        ];
                        this.props.filterChangeReducer({filterValue: permissions});
                        this.props.filterChangeEffect({filterValue: permissions});
                      } else {
                        this.props.filterChangeReducer({filterValue: value});
                        this.props.filterChangeEffect({filterValue: value});
                      }
                    }}
                  />
                </div>
              </Col>
            </Row>

            <Row type="flex">
              <Col span={24} className='button-flex'>
                <div className="add">
                  <Button
                    type="primary"
                    onClick={() => this.props.openAddRoleModal({currentRole: {}})}
                  >
                    <Icon type="plus" /> Create A New Role
                  </Button>
                </div>

                <div className="refresh">
                  <Button
                    type="primary"
                    onClick={() => {
                      this.props.fetchDataReducer({
                        search: this.props.search,
                        permissions: this.props.permissions,
                        pageNumber: this.props.pageNumber,
                        pageSize: this.props.pageSize,
                        sortBy: this.props.sortBy,
                        asc: this.props.asc
                      });
                      this.props.fetchDataEffect({
                        search: this.props.search,
                        permissions: this.props.permissions,
                        pageNumber: this.props.pageNumber,
                        pageSize: this.props.pageSize,
                        sortBy: this.props.sortBy,
                        asc: this.props.asc
                      });
                    }}
                  >
                    <Icon type="sync" /> Refresh
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="roles-table">
            <Table
              size="middle"
              loading={this.props.isBusy}
              rowKey={record => (record as any)._id}
              columns={columns}
              dataSource={this.props.data}
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
                showSizeChanger: true,
                pageSize: this.props.pageSize,
                current: this.props.pageNumber,
                pageSizeOptions: [10, 20, 50].map((item) => String(item)),
              }}
            />
          </div>

          <Modal
            className="role-modal"
            title='Create/Edit Role'
            okText='Save'
            cancelText='Cancel'
            onOk={this.onCreateRoleFormSubmit}
            onCancel={this.props.closeAddRoleModal}
            visible={this.props.addRoleModalVisible}
          >
            {this.props.errorMessage && (
              <div style={{ height: '21px', lineHeight: '21px', color: '#f5222d', textAlign: 'center' }}>
                {this.props.errorMessage}
              </div>
            )}

            <div className="input-role-name">
              <div style={{ padding: '12px 0' }}>
                <span style={{ color: 'red' }}>*</span> Role Name:
              </div>
              <div style={{margin: '0 24px'}}>
                <Input
                  placeholder='Role Name'
                  value={this.props.currentRole.name}
                  onChange={(e) => this.props.roleInfoChange({name: e.target.value})}
                />
                <Checkbox
                  checked={this.props.currentRole.isDefault}
                  onChange={(e: any) => this.props.roleInfoChange({isDefault: e.target.checked})}
                  style={{ padding: '24px 0' }}
                >
                  Set As Default
                </Checkbox>
              </div>
            </div>

            <div className="select-permissions">
              <div style={{ padding: '12px 0' }}>
                <span style={{ color: 'red' }}>*</span> Role Permissions:
              </div>
              <div style={{margin: '0 24px'}}>
                <Tree
                  checkable={true}
                  multiple={true}
                  checkedKeys={this.props.currentRole.permissions}
                  onCheck={(checkedKeys, _e) => this.props.roleInfoChange({permissions: checkedKeys})}
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
    ...rootState.rolesPageModel,
    profileState: rootState.profileModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    ...rootReducer.rolesPageModel,
    profileReducer: rootReducer.profileModel
  };
};

export default withRematch(initStore, mapState, mapDispatch)(RolesPage);