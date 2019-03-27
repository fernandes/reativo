import React from "react";
import PropTypes from "prop-types";
import { withSnackbar } from 'notistack';
import { wrapper } from "./AppContainer";

class Snackbarz extends React.Component {
  componentWillMount() {
    this.props.messages.map(message => {
      this.props.enqueueSnackbar(message.title);
    });
  }

  render() {
    return React.createElement("div", {
      style: {
        display: "none"
      }
    });
  }

}

const Snackbar = wrapper(withSnackbar(Snackbarz));
export { Snackbar };