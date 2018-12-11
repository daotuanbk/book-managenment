import * as React from 'react';
import {Row, Col, Table, Input, Checkbox, Button, Tooltip} from 'antd';
import Link from 'next/link';
class BookList extends React.Component<any, any> {
  render () {
      const columns = [{
        title: 'Action',
        key: 'action',
        fixed: 'left',
        width: 150,
        render: (item, _record) => (
          <div>
            <Link href={`/admin/book/edit/${item._id}`}>
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
      }];
    return (
      <div style={{background: '#fff'}}>
      <Row>
      <Col span={12}>
        <Input.Search
          placeholder='Search'
          style={{ width: 500 }}
        // onChange={(e: React.FormEvent<HTMLInputElement>) =>
        //   this.props.handleSearchChange((e.target as any).value.toLowerCase())
        // }
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
      <Link href='/admin/book/create'>
        <Button type='primary' icon='plus' style={{ marginTop: '20px' }}>
          Add New Book
        </Button>
      </Link>
    </Row>
    <Table columns={columns} dataSource={this.props.data} />
    </div>
    );
  }
}

export default BookList;
