function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select/lib/Async';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { debounce } from 'lodash-es';

const styles = theme => ({
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

function NoOptionsMessage(props) {
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.noOptionsMessage
  }, props.innerProps), props.children);
}

function inputComponent({
  inputRef,
  ...props
}) {
  return React.createElement("div", _extends({
    ref: inputRef
  }, props));
}

function Control(props) {
  return React.createElement(TextField, _extends({
    fullWidth: true,
    InputProps: {
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps
      }
    }
  }, props.selectProps.textFieldProps));
}

function Option(props) {
  return React.createElement(MenuItem, _extends({
    buttonRef: props.innerRef,
    selected: props.isFocused,
    component: "div",
    style: {
      fontWeight: props.isSelected ? 500 : 400
    }
  }, props.innerProps), props.children);
}

function Placeholder(props) {
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.placeholder
  }, props.innerProps), props.children);
}

function SingleValue(props) {
  return React.createElement(Typography, _extends({
    className: props.selectProps.classes.singleValue
  }, props.innerProps), props.children);
}

function ValueContainer(props) {
  return React.createElement("div", {
    className: props.selectProps.classes.valueContainer
  }, props.children);
}

function MultiValue(props) {
  return React.createElement(Chip, {
    tabIndex: -1,
    label: props.children,
    className: classNames(props.selectProps.classes.chip, {
      [props.selectProps.classes.chipFocused]: props.isFocused
    }),
    onDelete: props.removeProps.onClick,
    deleteIcon: React.createElement(CancelIcon, props.removeProps)
  });
}

function Menu(props) {
  return React.createElement(Paper, _extends({
    square: true,
    className: props.selectProps.classes.paper
  }, props.innerProps), props.children);
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      single: value
    }, this.props.handleChange(value));
  }

  render() {
    const {
      classes,
      theme,
      loadOptions
    } = this.props;
    const selectStyles = {
      input: base => ({ ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit'
        }
      })
    };
    return React.createElement(ReactSelect, {
      classes: classes,
      styles: selectStyles,
      components: components,
      value: this.state.single,
      onChange: this.handleChange,
      cacheOptions: true,
      loadOptions: debounce(loadOptions, 250),
      placeholder: "Select a sensor module registry (xbee or label)...",
      isClearable: true
    });
  }

}

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  loadOptions: PropTypes.func.isRequired,
  handleChange: PropTypes.func
};
const SelectAutoComplete = withStyles(styles, {
  withTheme: true
})(Select);
export { SelectAutoComplete };