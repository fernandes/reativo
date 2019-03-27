import React from 'react';
import { Snackbar as SnackbarOriginal } from "reativo"

function Snackbar({messages}) {
  return <SnackbarOriginal messages={messages} />
}

export default Snackbar
