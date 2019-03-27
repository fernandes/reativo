import React from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root'
import { wrapper, RailsForm } from "reativo"
import { Form as FinalForm } from 'react-final-form'
import Form from './Form'
import { validate } from './Form'

function New() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        New Todo
      </Typography>
      <RailsForm
        component={FinalForm}
        action='create'
        url='/todos'
        validate={validate}
        render={(props) => (
          <Form {...props} />
        )}
      />
      <Button variant="contained" color="secondary" href="/todos">
        Todos
      </Button>
    </div>
  );
}

export default hot(
  wrapper(New)
);
