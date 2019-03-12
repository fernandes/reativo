import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from "./Theme"
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log('Shiiii', error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const AppContainer = ({...props}) => {
  const Component = React.createElement(props.children, {...props})
  return (
    <ErrorBoundary>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Provider store={window.store}>
            {Component}
          </Provider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </ErrorBoundary>
  );
}

const appWrapper = (component, mapStateToProps = null, mapDispatchToProps = null) => {
  const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(component)

  return ({...props}) => (
    React.createElement(AppContainer, {children: ConnectedComponent, ...props})
  );
}

export default appWrapper;