import * as React from 'react';

class LandingPageFooter extends React.Component<any, any> {
    createMarkup = (html) => { return { __html: html }; };
  render() {
    return (
       <footer id='footer'>
          <div className="footer-area">
            <div className="container" style={{ textAlign: 'center' }}>
              <div className='footer-content' dangerouslySetInnerHTML={this.createMarkup(this.props.data.footer)} />
              <div className="row" style={{ margin: '26px 0', display: 'flex' }}>
                <div className="col-md-6 col-sm-6" style={{ textAlign: 'right' }}>
                  <a href="https://itunes.apple.com/us/app/up-beat/id1415593536?ls=1&mt=8">
                    <img src="/static/images/landing-page/appstore.png" width="150px" />
                  </a>
                </div>
                <div className="col-md-6 col-sm-6" style={{ textAlign: 'left' }}>
                  <a href="https://play.google.com/store/apps/details?id=com.techkids.upbeat">
                    <img src="/static/images/landing-page/googleplay.png" width="150px" />
                  </a>
                </div>
              </div>
              <div className="social-media-icon">
                <a href={this.props.data.mailHyperlink}>
                  <img src="/static/images/landing-page/icon_trang-07.png" width="20px" />
                </a>
                <a href={this.props.data.instaHyperlink}>
                  <img src="/static/images/landing-page/icon_trang-09.png" width="20px" />
                </a>
                <a href={this.props.data.facebookHyperlink}>
                  <img src="/static/images/landing-page/icon_trang-08.png" width="13px" />
                </a>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default LandingPageFooter;