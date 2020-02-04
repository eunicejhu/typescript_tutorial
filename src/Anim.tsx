import Button from "antd/lib/button";
import QueueAnim from "rc-queue-anim";
import React from "react";

import "./static/anim.less";

export default class Anim extends React.Component<{}, { show: boolean }> {
  public state = {
    show: true
  };
  public render() {
    return (
      <div className="queue-demo">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>
            Switch
          </Button>
        </p>
        <QueueAnim className="demo-content">
          {this.state.show
            ? [
                <div className="demo-thead" key="a">
                  <ul>
                    <li />
                    <li />
                    <li />
                  </ul>
                </div>,
                <div className="demo-tbody" key="b">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              ]
            : null}
        </QueueAnim>
      </div>
    );
  }

  private onClick = () => {
    this.setState({
      show: !this.state.show
    });
  };
}
