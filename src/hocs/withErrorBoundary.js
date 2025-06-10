import React from 'react';
import {ErrorBoundary} from "./ErrorBoundary.js";

export const withErrorBoundary = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <ErrorBoundary>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};
