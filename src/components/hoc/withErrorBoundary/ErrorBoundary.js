import React from 'react';
import { LogService } from '../../../services/LogService';
import {commonConst} from "../../../constants/commonConst";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: commonConst.error });
    LogService.showAndLogError('something went wrong...', error);
  }

  render() {
    if (this.state.hasError) {
      return <span>{this.state.error}</span>;
    }
    return this.props.children;
  }
}
