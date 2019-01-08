import * as React from 'react';
import { Row, Col, Table, Input, Checkbox, Button, Tooltip, Tag } from 'antd';
import Link from 'next/link';
import moment from 'moment';
class LentList extends React.Component<any, any> {
  render() {
    const columns = [{
      title: 'Action',
      key: 'action',
      fixed: 'left',
      width: 150,
      render: (item, _record) => (
        <div>
          <Link href={`/dashboard/book/edit/${item._id}`}>
            <Tooltip
              key={`${item.title}_edit`}
              title='Edit'
            >
              <Button
                key={`${item.title}_edit`}
                // onClick={(e) => this.onEditItemClick(item, e)}
                icon='edit'
                type='primary'
                style={{ marginRight: '5px' }}
              />
            </Tooltip>
          </Link>
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
      render: (item: any) => {
        return (
          <div><span>{moment(item, 'DD/MM/YYYY') as any}</span></div>
        )
      }
    }, 
    {
      title: 'Date Of Appointment',
      dataIndex: 'dateOfAppointment',
      key: 'dateOfAppointment',
      render: (item: any) => {
        return (
          <div><span>{moment(item, 'DD/MM/YYYY') as any}</span></div>
        )
      }
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
    }];
    console.log(this.props);
    return (
      <div style={{ background: '#fff' }}>
        <Row>
          <Col span={12}>
            <Input.Search
              placeholder='Search'
              style={{ width: 500 }}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.props.handleSearchChange((e.target as any).value.toLowerCase())
              }
            />
          </Col>
          <Col span={12}>
            <Checkbox
              // onChange={(e) => this.props.includeOrExcludeInactivePost(this.props.search, e.target.checked)}
              defaultChecked={true}
            >
              Include Inactive Post
          </Checkbox>
          </Col>
        </Row>
        <Row>
          <Link href='/dashboard/book/create'>
            <Button type='primary' icon='plus' style={{ marginTop: '20px' }}>
              Add New Book
        </Button>
          </Link>
        </Row>
        <Table columns={columns} dataSource={this.props.lentPageState.data} pagination={{
          total: this.props.lentPageState.total,
          current: this.props.lentPageState.pageNumber,
          showSizeChanger: true,
          pageSize: this.props.lentPageState.pageSize,
          pageSizeOptions: [10, 20, 50].map(item =>
            String(item),
          ),
          onChange: (page, pageSize) => {
            this.props.lentPageReducer.fetchDataEffect({
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
