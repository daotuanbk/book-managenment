import * as React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
import './Sidebar.css';
import sidebarItems from '../../../nextjs/constants/sidebar-items.constant';

interface SidebarProps {}

class Sidebar extends React.Component<SidebarProps, any> {
  renderSubmenu = (submenu: any) => {
    return (
      <Menu.SubMenu
        key={submenu.key}
        title={
          <span>
            <Icon type={submenu.icon} />
            <span>{submenu.title}</span>
          </span>
        }
        className="submenu"
      >
        {submenu.items.map(item => this.renderMenuItem(item))}
      </Menu.SubMenu>
    );
  };

  renderMenuItem = (menuitem: any) => {
    return (
      <Menu.Item key={`${menuitem.key}`} className="submenu-item">
        <Link href={menuitem.path}>
          <span>{menuitem.title}</span>
        </Link>
      </Menu.Item>
    );
  };

  render(): JSX.Element {
    return (
      <div className="sidebar-menu">
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          openKeys={sidebarItems.map((item) => item.key)}
          selectedKeys={[]}
          style={{ padding: '16px 0', width: '100%' }}
        >
          {sidebarItems.map(submenu => this.renderSubmenu(submenu))}
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
