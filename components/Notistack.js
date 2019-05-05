import React from 'react';
import {withSnackbar } from 'notistack';

class Notistack extends React.Component {
  render() {
      const {msg, type} = this.props
      if(type!==""){
        this.props.enqueueSnackbar(msg,{variant:type});
      }
    return ""
  }
}

export default withSnackbar(Notistack);