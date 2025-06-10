import React from "react";
import { COMMON } from "../constants/COMMON.js";
import { LogService } from "../services/LogService.js";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, info) {
    LogService.log("componentDidCatch catches an error", error);
    this.setState({ hasError: true, error: COMMON.ERROR });
  }

  render() {
    if (this.state.hasError) {
      return <span>{this.state.error}</span>;
    }
    return this.props.children;
  }
}
