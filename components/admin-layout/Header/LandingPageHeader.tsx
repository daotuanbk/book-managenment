import * as React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import './LandingPageHeader.css';
import config from '../../../configs/default.config'
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;
class LandingPageHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const renderBigMenu = (
      Object.keys(this.props.menuBar).map((value, _index) => {
        if (this.props.menuBar[value].hyperlink.substring(0, 1) === '#' && this.props.isLandingPage === true) {
          return (
            <Menu.Item key={value}>
              <ScrollLink activeClass="active" className="" to={this.props.menuBar[value].hyperlink.substring(1, this.props.menuBar[value].hyperlink.length)} spy={true} smooth={true} duration={1000}>
                  <span className='menu-item' style={{color: '#000'}}>
                  {this.props.menuBar[value].name}
                  </span>
              </ScrollLink>
            </Menu.Item>
          );
        } else if (this.props.menuBar[value].hyperlink.substring(0, 1) === '#' && this.props.isLandingPage === false) {
          return (
            <Menu.Item key={value}>
                  <a className='menu-item' href={`${config.nextjs.hostUrl}${this.props.menuBar[value].hyperlink}`} style={{ color: '#000' }}>{this.props.menuBar[value].name}</a>
            </Menu.Item>
          );
        } else {
          return (
            <Menu.Item key={value}>
              <Link href={this.props.menuBar[value].hyperlink}>
                <a className='menu-item' href={this.props.menuBar[value].hyperlink} style={{ color: '#000' }}>{this.props.menuBar[value].name}</a>
              </Link>
            </Menu.Item>
          );
        }
      })
    );

    const renderSmallMenu = (
      Object.keys(this.props.menuBar).map((value, index) => {
        if (this.props.menuBar[value].hyperlink.substring(0, 1) === '#' && this.props.isLandingPage === true) {
          return (
            <ScrollLink key={index} activeClass="active" className="" to={this.props.menuBar[value].hyperlink.substring(1, this.props.menuBar[value].hyperlink.length)} spy={true} smooth={true} duration={1000}>
              <a href='' onClick={this.handleMenuClick}><li>{this.props.menuBar[value].name}</li></a>
              <hr />
            </ScrollLink>
          );
        } else if (this.props.menuBar[value].hyperlink.substring(0, 1) === '#' && this.props.menuBar.isLandingPage === false) {
          return (
            <div key={index}>
              <a href={`${config.nextjs.hostUrl}/${this.props.menuBar[value].hyperlink}`} onClick={this.handleMenuClick}><li>{this.props.menuBar[value].name}</li></a>
              <hr />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <a href={this.props.menuBar[value].hyperlink} target="_blank"><li>{this.props.menuBar[value].name}</li></a>
              <hr />
            </div>
          );
        }
      })
    );
    const { Header } = Layout;
    return (
      <Header
        className='header'
        style={{
          backgroundColor: '#fff',
          position: 'fixed',
          width: '100%',
          zIndex: 10,
          padding: 0
        }}
      >
          <div className='container'>
            <div className='logo' style={{ float: 'left' }}>
              <Link href='/'>
                <a>
                  <img
                    src={this.props.logo}
                    style={{
                      height: '42px',
                      width: 'auto',
                    }}
                  />
                </a>
              </Link>
            </div>

            <div style={{
              width: '70%',
              float: 'right',
              textAlign: 'right',
              height: '64px',
            }}>
              <Menu
                id='full-menu'
                theme='light'
                mode='horizontal'
                style={{
                  height: '64px',
                  lineHeight: '52px',
                  display: 'inline-block',
                  backgroundColor: '#fff',
                  borderBottom: 'none',
                  fontSize: '16px',
                  fontWeight: 1000,
                }}
              >
                {renderBigMenu}
              </Menu>
            </div>
          </div>
          <nav role="navigation">
            <div id="menuToggle">
              <input onChange={this.handleMenuClick} type="checkbox" {...this.state.toggle ? { checked: true, } : {}} />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                {renderSmallMenu}
              </ul>
            </div>
          </nav>
      </Header>
    );
  }
}

export default LandingPageHeader;
