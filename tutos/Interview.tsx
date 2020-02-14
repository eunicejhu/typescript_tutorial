import React from "react";

interface IProps {
  data: string[];
}
class Interview extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      list: []
    };
  }
  public render() {
    return (
      <>
        {this.props.data.map((item, index) => (
          <input type="text" value={item} />
        ))}
      </>
    );
  }
}

// use prop destructuring
const ComA = () => <ComB display={true} className="highlight"></ComB>;
const ComB = ({ display, ...rest }: { [p: string]: string | boolean }) => (
  <div {...rest}></div>
);
