import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

let openSnackbarFn;

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  successMsg: {
    backgroundColor: green[600],
  },
  errorMsg: {
    backgroundColor: theme.palette.error.dark,
  },
  infoMsg: {
    backgroundColor: theme.palette.primary.dark,
  },
  warningMsg: {
    backgroundColor: amber[700],
  },
  iconMsg: {
    fontSize: 20,
  },
  iconVariantMsg: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  messageMsg: {
    display: 'flex',
    alignItems: 'center',
  },
  marginMsg: {
    margin: theme.spacing.unit,
  },
});

class Msg extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      message: '',
      type: '',
    };
    this.openSnackbar = this.openSnackbar.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }


  componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }

  openSnackbar({ message,type }){
    this.setState({
      open: true,
      message,
      type
    });
  };

  handleSnackbarClose(){
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    const { message, type, open } = this.state;
    if(open===false){
      return ("");
    }
    /*
    const message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: this.state.message }}
      />
    );*/

    const Icon = variantIcon[type];
    const me = (<span id="client-snackbar" className={classes.messageMsg}>
        <Icon className={classNames(classes.iconMsg, classes.iconVariantMsg)} />
        {message}
      </span>);
    const ac = (<IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.closeMsg}
        onClick={this.handleSnackbarClose}
      >
        <CloseIcon className={classes.iconMsg} />
      </IconButton>
    );

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleSnackbarClose}
      >
        <SnackbarContent
          className = {classNames(classes[type+"Msg"], classes.marginMsg)}
          aria-describedby="client-snackbar"
          message={me}
          action={ac}
          onClose={this.handleSnackbarClose}
          open={this.state.open}
        />
      </Snackbar>

    );
  }
}

Msg.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles1, { withTheme: true })(Msg);

export function openSnackbar({ message,type }) {
  openSnackbarFn({ message,type });
}
