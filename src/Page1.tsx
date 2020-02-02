import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import Parallax from "rc-scroll-anim/lib/ScrollParallax";
import TweenOne from "rc-tween-one";
import React from "react";

const { TweenOneGroup } = TweenOne;

const featuresCN = [
  {
    color: "#13C2C2",
    content: "Front End Developer",
    shadowColor: "rgba(19,194,194,.12)",
    src: "https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg",
    title: "5 years experienced"
  },
  {
    color: "#2F54EB",
    content: "My wanted working tech",
    shadowColor: "rgba(47,84,235,.12)",
    src: "https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg",
    title: "React"
  },
  {
    color: "#F5222D",
    content: "Fluent in English, French and Chinese",
    shadowColor: "rgba(245,34,45,.12)",
    src: "https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg",
    title: "Trilingual"
  },
  {
    color: "#1AC44D",
    content: "Lives in Paris",
    shadowColor: "rgba(26,196,77,.12)",
    src: "https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg",
    title: "Parisian"
  },
  {
    color: "#FAAD14",
    content: "Making tech videos",
    shadowColor: "rgba(250,173,20,.12)",
    src: "https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg",
    title: "Video maker"
  },
  {
    color: "#722ED1",
    content: "Performing in Théatre d'Herblay",
    shadowColor: "rgba(114,46,209,.12)",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg",
    title: "Amateur Dancer"
  }
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 }
];

interface IProps {
  isMobile: boolean;
}

interface IState {
  hoverNum: number | null;
}

class Page1 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hoverNum: null
    };
  }
  public render() {
    const { hoverNum } = this.state;
    const children: JSX.Element[][] = [[], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        "point-0 left",
        "point-0 right",
        "point-ring",
        "point-1",
        "point-2",
        "point-3"
      ].map((className: string) => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color
          }}
        />
      ));
      const child: JSX.Element = (
        <li key={i.toString()}>
          <div
            className="page1-box"
            onMouseEnter={() => {
              this.onMouseOver(i);
            }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                duration: 300,
                ease: "easeInBack",
                opacity: 0,
                x: 0,
                y: 30
              }}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? "0 12px 24px" : "0 6px 12px"} ${
                  item.shadowColor
                }`
              }}
            >
              <img
                src={item.src}
                alt="img"
                style={i === 4 ? { marginLeft: -15 } : {}}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 3)].push(child);
    });

    const queueAnimChildren = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="home-page page1">
        <div className="home-page-wrapper" id="page1-wrapper">
          {!this.props.isMobile && (
            <Parallax
              className="page1-bg"
              animation={{
                ease: "linear",
                playScale: [0, 1.65],
                translateY: 200
              }}
              location="page1-wrapper"
            >
              HU ZUOQIN
            </Parallax>
          )}
          <h2>
            About <span>Me</span>{" "}
          </h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          <OverPack>{queueAnimChildren}</OverPack>
        </div>
      </div>
    );
  }
  private onMouseOver = (i: number) => {
    this.setState({
      hoverNum: i
    });
  };
  private onMouseOut = () => {
    this.setState({
      hoverNum: null
    });
  };
  private getEnter = (e: { key: string; index: number }) => {
    const i = e.index;
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay,
        duration: 300,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: "easeOutBack"
      },
      {
        duration: Math.random() * 1000 + 2000,
        repeat: -1,
        y: r > 0 ? `+=${y}` : `-=${y}`,
        yoyo: true
      }
    ];
  };
}

export default Page1;
