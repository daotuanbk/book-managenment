import * as React from 'react';
import { Menu, Icon, Dropdown, Avatar, Button } from 'antd';
import './Header.css';
import Link from 'next/link';

const Header = (props: any) => {
  const menu: JSX.Element = (
    <Menu className="user-menu" selectedKeys={[]}>
      <Menu.Item>
        <Link href=''>
          <a><Icon type="user" className="user-menu-item-icon" /> Profile</a>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link href=''>
          <a><Icon type="setting" className="user-menu-item-icon" /> Settings</a>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link href=''>
          <a><Icon type="close-circle" className="user-menu-item-icon" /> Report</a>
        </Link>
      </Menu.Item>
      {props.roles.indexOf('Administrator') !== -1 ?
        <Menu.Item>
          <Link href='/dashboard'>
            <a><Icon type="user" className="user-menu-item-icon" /> Admin</a>
          </Link>
        </Menu.Item> : <div></div>}

        <Menu.Item>
          <Link href={`/lent-history/${props._id}`}>
            <a><Icon type="user" className="user-menu-item-icon" /> Lent History</a>
          </Link>
        </Menu.Item>
      <Menu.Divider />

      <Menu.Item>
        <a onClick={props.logOut}>
          <Icon type="logout" className="user-menu-item-icon" /> Log Out
          </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <a href='/'>
        <img src='/static/images/logo.png' width='64px' style={{ marginLeft: '20px' }} />
      </a>
      <div className="header-right">
        {props._id ?
          <Dropdown overlay={menu}>
            <span className="avatar">
              <Avatar className="avatar-image" style={{ backgroundColor: '#87d068' }} icon="user" />
              <span className="avatar-name">{props.userEmail}</span>
            </span>
          </Dropdown> :
          <Link href='/login'><Button type='primary'>Đăng nhập</Button></Link>}
      </div>
    </div>
  );
};


export default Header;