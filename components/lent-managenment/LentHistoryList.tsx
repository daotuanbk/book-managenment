import * as React from 'react';
import { Row, Table, Button, Tooltip, Tag } from 'antd';
import moment from 'moment';
class LentHistoryList extends React.Component<any, any> {
  render() {
    const columns = [
    {
      title: 'Tên sách',
      dataIndex: 'bookId.title',
      key: 'title',
    }, {
      title: 'Giá thuê',
      dataIndex: 'borrowPrice',
      key: 'borrowPrice',
    }, 
    {
      title: 'Ngày mượn',
      dataIndex: 'dateBorrow',
      key: 'dateBorrow',
      render: (item: any) => (
      moment(item).format('DD/MM/YYYY')
      )
    }, 
    {
      title: 'Ngày trả',
      dataIndex: 'dateOfAppointment',
      key: 'dateOfAppointment',
      render: (item: any) => (
        moment(item).format('DD/MM/YYYY')
      )
    }, {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (item: any) => {
        if (item === 'active') {
          return (
            <Tag color='green'>Đang mượn</Tag>
          )
        } else if (item === 'deactive') {
          return (
            <Tag color='red'>Đã trả</Tag>
          )
        }
      }
    }
  ];
    return (
      <div style={{ background: '#fff' }}>
        <Row>
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
            this.props.lentPageReducer.getLentByUserIdEffect({
              userId: this.props.profileState._id,
              pageNumber: page,
              pageSize: pageSize,
              sortBy: this.props.lentPageState.sortBy,
              asc: this.props.lentPageState.asc
            });
            this.props.lentPageReducer.handlePaginationChange({ current: page, pageSize: pageSize });
          },
          onShowSizeChange: (current, size) => {
            this.props.lentPageReducer.getLentByUserIdEffect({
              userId: this.props.profileState._id,           
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

export default LentHistoryList;
