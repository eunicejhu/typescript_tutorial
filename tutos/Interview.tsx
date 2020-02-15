import React from "react";

const setTitle = (title: string) => (
  WrappedComponent: React.ComponentClass<IProps>
) => {
  return class extends React.Component<IProps> {
    public componentDidMount() {
      document.title = title;
    }
    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
interface IProps {
  data: string[];
}
// tslint:disable-next-line: max-classes-per-file
@setTitle("Interview")
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

export default Interview;

// use prop destructuring
const ComA = () => <ComB display={true} className="highlight"></ComB>;
const ComB = ({ display, ...rest }: { [p: string]: string | boolean }) => (
  <div {...rest}></div>
);

// Error boundary Class

interface IErrorBoundaryProps {
  children: React.ComponentClass;
}

interface IErrorBoundaryState {
  hasError: boolean;
}
// tslint:disable-next-line: max-classes-per-file
class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public static getDerivedErrorFromState() {
    return { hasError: true };
  }
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public render() {
    return this.state.hasError ? <div>Error</div> : this.props.children;
  }
}
