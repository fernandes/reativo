import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { SnackbarProvider, withSnackbar } from 'notistack'
import { createMuiTheme } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'

let theme = null;

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
  if(theme === null) {
    theme = createMuiTheme({})
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <Provider store={window.store}>
          <SnackbarProvider maxSnack={3}>
            {Component}
          </SnackbarProvider>
        </Provider>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

const wrapper = (component, mapStateToProps = null, mapDispatchToProps = null) => {
  const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(component)

  return ({...props}) => (
    React.createElement(AppContainer, {children: ConnectedComponent, ...props})
  );
}

const setTheme = (userTheme) => {
  theme = userTheme
}

export { wrapper, setTheme, withSnackbar }
