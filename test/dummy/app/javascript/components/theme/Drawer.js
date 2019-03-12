import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'
import { hot } from 'react-hot-loader/root'
import { withStyles } from '@material-ui/core/styles';
import appWrapper from "../../support/AppContainer"
import Menu from "./Menu"

const styles = theme => ({
  root: {
    paddingBottom: 10
  },
})

class Drawer extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Menu />
      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => {
      dispatch({type: "INCREMENT"})
    },
    decrement: () => {
      dispatch({type: "DECREMENT"})
    }
  }
}

export default hot(
  withStyles(styles)(
    appWrapper(Drawer, mapStateToProps, mapDispatchToProps)
  )
)

