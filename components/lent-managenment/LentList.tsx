import * as React from 'react';
import { Row, Col, Table, Input, Button, Tooltip, Tag } from 'antd';
import moment from 'moment';
class LentList extends React.Component<any, any> {
  render() {
    const columns = [
      {
      title: 'Action',
      key: 'action',
      fixed: 'left',
      width: 150,
      render: (item, _record) => (
        <div>
          <Tooltip
              key={`${item.title}_lock`}
              title={item.status === 'deactive' ? 'Activate' : 'Deactivate'}
            >
              <Button
                key={`${item.title}_lock`}
                icon={item.status === 'deactive' ? 'unlock' : 'lock'}
                type='primary'
                style={{ marginRight: '5px' }}
                onClick={() => {
                  this.props.lentPageReducer.updateLentEffect({
                  _id: item._id,
                  status: item.status === 'deactive' ? 'active' : 'deactive', 
                })}}
              />
            </Tooltip>
        </div>
      ),
    }, {
      title: 'Title',
      dataIndex: 'bookId.title',
      key: 'title',
    }, {
      title: 'User Borrow',
      dataIndex: 'userId.fullName',
      key: 'user',
    }, 
    {
      title: 'Date Borrow',
      dataIndex: 'dateBorrow',
      key: 'dateBorrow',
      render: (item: any) => (
      moment(item).format('DD/MM/YYYY')
      )
    }, 
    {
      title: 'Date Of Appointment',
      dataIndex: 'dateOfAppointment',
      key: 'dateOfAppointment',
      render: (item: any) => (
        moment(item).format('DD/MM/YYYY')
      )
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (item: any) => {
        if (item === 'active') {
          return (
            <Tag color='green'>Active</Tag>
          )
        } else if (item === 'deactive') {
          return (
            <Tag color='red'>Deactive</Tag>
          )
        }
      }
    }
  ];
    return (
      <div style={{ background: '#fff' }}>
        <Row>
          <Col span={12}>
            <Input.Search
              placeholder='Search'
              style={{ width: 500 }}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.props.lentPageReducer.handleSearchChange((e.target as any).value.toLowerCase())
              }
            />
          </Col>
        </Row>
        <Table columns={columns as any} dataSource={this.props.lentPageState.data} pagination={{
          total: this.props.lentPageState.total,
          current: this.props.lentPageState.pageNumber,
          showSizeChanger: true,
          pageSize: this.props.lentPageState.pageSize,
          pageSizeOptions: [10, 20, 50].map(item =>
            String(item),
          ),
          onChange: (page, pageSize) => {
            this.props.lentPageReducer.fetch({
              search: this.props.lentPageState.searchInput,
              pageNumber: page,
              pageSize: pageSize,
              sortBy: this.props.lentPageState.sortBy,
              asc: this.props.lentPageState.asc
            });
            this.props.lentPageReducer.handlePaginationChange({ current: page, pageSize: pageSize });
          },
          onShowSizeChange: (current, size) => {
            this.props.lentPageReducer.fetchDataEffect({
              search: this.props.lentPageState.search,
              pageNumber: current,
              pageSize: size,
              sortBy: this.props.lentPageState.sortBy,
              asc: this.props.lentPageState.asc
            });
            this.props.lentPageReducer.handlePaginationChange({current: current, pageSize: size});
          }
        }} />
      </div>
    );
  }
}

export default LentList;
