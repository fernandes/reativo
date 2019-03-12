import React from "react"
import PropTypes from "prop-types"
import { withSnackbar } from 'notistack'
import appWrapper from "../support/AppContainer"

class Snackbar extends React.Component {
  componentWillMount() {
    this.props.messages.map(message => {
      this.props.enqueueSnackbar(message.title)
    })
  }

  render () {
    return <div style={{display: "none"}} />;
  }
}

export default appWrapper(withSnackbar(Snackbar))
