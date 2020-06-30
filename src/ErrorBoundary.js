/* eslint-disable react/prop-types */
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null } ;
    }
  
    static getDerivedStateFromError(error,errorInfo) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        errorInfo: errorInfo
      };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
          });
    }
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return (<h1>Something went wrong.</h1>);
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;