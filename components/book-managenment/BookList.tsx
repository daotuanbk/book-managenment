import * as React from 'react';
import { Row, Col, Table, Input, Checkbox, Button, Tooltip, Tag } from 'antd';
import Link from 'next/link';
class BookList extends React.Component<any, any> {
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
                icon='edit'
                type='primary'
                style={{ marginRight: '5px' }}
              />
            </Tooltip>
          </Link>
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
                  this.props.bookPageReducer.updateBookEffect({
                  _id: item._id,
                  quantity: item.quantity,
                  status: item.status === 'deactive' ? 'active' : 'deactive', 
                })}}
              />
            </Tooltip>
        </div>
      ),
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
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
        } else if (item === 'outstock') {
          return (
            <Tag color='orange'>Out-of-stock</Tag>
          )
        }
      }
    }];
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
        </Row>
        <Row>
          <Link href='/dashboard/book/create'>
            <Button type='primary' icon='plus' style={{ marginTop: '20px' }}>
              Add New Book
        </Button>
          </Link>
        </Row>
        <Table columns={columns as any} dataSource={this.props.bookPageState.data} pagination={{
          total: this.props.bookPageState.total,
          current: this.props.bookPageState.pageNumber,
          showSizeChanger: true,
          pageSize: this.props.bookPageState.pageSize,
          pageSizeOptions: [10, 20, 50].map(item =>
            String(item),
          ),
          onChange: (page, pageSize) => {
            this.props.bookPageReducer.fetchDataEffect({
              search: this.props.bookPageState.searchInput,
              pageNumber: page,
              pageSize: pageSize,
              sortBy: this.props.bookPageState.sortBy,
              asc: this.props.bookPageState.asc
            });
            this.props.bookPageReducer.handlePaginationChange({ current: page, pageSize: pageSize });
          },
          onShowSizeChange: (current, size) => {
            this.props.bookPageReducer.fetchDataEffect({
              search: this.props.bookPageState.search,
              pageNumber: current,
              pageSize: size,
              sortBy: this.props.bookPageState.sortBy,
              asc: this.props.bookPageState.asc
            });
            this.props.bookPageReducer.handlePaginationChange({current: current, pageSize: size});
          }
        }} />
      </div>
    );
  }
}

export default BookList;
