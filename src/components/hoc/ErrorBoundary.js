import React from "react";
import { COMMON } from "../../constants/COMMON";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: COMMON.error });
  }

  render() {
    if (this.state.hasError) {
      return <span>{this.state.error}</span>;
    }
    return this.props.children;
  }
}
