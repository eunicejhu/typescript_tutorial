import { Button, Col, Icon, Menu, Popover, Row } from "antd";
import { MenuMode } from "antd/lib/menu";
import { enquireScreen } from "enquire-js";
import React, { useEffect, useState } from "react";

const LOGO_URL =
  "https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuMode, setMenuMode] = useState<MenuMode>("horizontal");

  useEffect(() => {
    enquireScreen((b: boolean) => setMenuMode(b ? "inline" : "horizontal"));
  });

  const menu = (
    <Menu mode={menuMode} id="nav" key="nav">
      <Menu.Item key="home">
        <a>Home</a>
      </Menu.Item>
      <Menu.Item key="docs">
        <a>
          <span>Docs</span>
        </a>
      </Menu.Item>
      <Menu.Item key="components">
        <a>Components</a>
      </Menu.Item>
      {menuMode === "inline" && (
        <Menu.Item key="preview">
          <a
            target="_blank"
            href="http://preview.pro.ant.design/"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div id="header" className="header">
      {menuMode === "inline" ? (
        <Popover
          overlayClassName="popover-menu"
          placement="bottomRight"
          content={menu}
          trigger="click"
          visible={menuVisible}
          arrowPointAtCenter
          onVisibleChange={(visible: boolean) => setMenuVisible(visible)}
        >
          <Icon
            className="nav-phone-icon"
            type="menu"
            onClick={() => {
              setMenuVisible(true);
            }}
          />
        </Popover>
      ) : null}
      <Row>
        <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
          <div id="logo">
            <a href="/">
              <img src={LOGO_URL} alt="logo" />
              <span>ANT DESIGN PRO</span>
            </a>
          </div>
        </Col>
        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
          <div className="header-meta">
            <div id="preview">
              <a
                id="preview-button"
                target="_blank"
                href="http://preview.pro.ant.design"
                rel="noopener noreferrer"
              >
                <Button icon="eye-o">Preview</Button>
              </a>
            </div>
            {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
