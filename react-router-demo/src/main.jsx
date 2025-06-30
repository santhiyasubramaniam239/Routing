import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function ErrorFallback({ error }) {
  return (
    <div style={{ color: 'red' }}>
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
