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
    // Reference documentation, pay attention to the order of parameters.
    // https://github.com/cycjimmy/jsmpeg-player#usage
    this.video = new JSMpeg.VideoElement(
      this.els.videoWrapper,
      this.props.videoUrl,
      this.props.options,
      this.props.overlayOptions
    );

    if (this.props.onRef) {
      this.props.onRef(this)
    }
  };

  play() {
    this.video.play();
  };

  pause() {
    this.video.pause();
  };

  stop() {
    this.video.stop();
  };

  destroy() {
    this.video.destroy();
  };
};

