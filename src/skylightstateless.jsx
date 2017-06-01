import React from 'react';
import PropTypes from 'prop-types';

export default class SkyLightStateless extends React.Component {

  onOverlayClicked() {
    if (this.props.onOverlayClicked) {
      this.props.onOverlayClicked();
    }
  }

  onCloseClicked() {
    if (this.props.onCloseClicked) {
      this.props.onCloseClicked();
    }
  }

  render() {
    const { isVisible, isClosable } = this.props;

    let overlay;
    if (this.props.showOverlay) {
      overlay = (
        <div
          className="skylight-overlay"
          onClick={() => this.onOverlayClicked()}
        />
      );
    }

    return isVisible ? (
      <section className="skylight-wrapper">
        {overlay}
        <div className="skylight-dialog">
          <div className="skylight-dialog-header">
            {isClosable && (
              <a
                role="button"
                className="skylight-close-button"
                onClick={() => this.onCloseClicked()}
              >
                &times;
              </a>
            )}
            <h2 className="skylight-title">{this.props.title}</h2>
          </div>
          {this.props.children}
        </div>
      </section>
    ) : <div />;
  }
}

SkyLightStateless.displayName = 'SkyLightStateless';

SkyLightStateless.sharedPropTypes = {
  isClosable: PropTypes.bool,
  onCloseClicked: PropTypes.func,
  onOverlayClicked: PropTypes.func,
  showOverlay: PropTypes.bool,
  title: PropTypes.string,
};

SkyLightStateless.propTypes = {
  ...SkyLightStateless.sharedPropTypes,
  isVisible: PropTypes.bool,
};

SkyLightStateless.defaultProps = {
  isClosable: true,
  showOverlay: true,
  title: '',
};
