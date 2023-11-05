import React from 'react';
import {ErrorBoundary} from "./ErrorBoundary";

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
