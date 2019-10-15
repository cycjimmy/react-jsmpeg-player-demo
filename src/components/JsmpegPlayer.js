import React, {Component} from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';

export default class JsmpegPlayer extends Component {
  constructor(props) {
    super(props);

    this.els = {
      videoWrapper: null,
    };
  };

  render() {
    return (
      <div
        className={this.props.wrapperClassName}
        ref={videoWrapper => this.els.videoWrapper = videoWrapper}>
      </div>
    );
  };

  componentDidMount() {
    new JSMpeg.VideoElement(this.els.videoWrapper, this.props.videoUrl, this.props.options, this.props.overlayOptions);
  };
};

