import { hot } from 'react-hot-loader/root'
import React from 'react'

import {
  Typography,
  Button,
} from '@material-ui/core';
import Form from './Form'

import { Form as FinalForm } from 'react-final-form'
import { RailsForm } from 'reativo'
import { validate } from './Form'
import { wrapper } from "reativo"

function New() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        New <%= model_name_singular %>
      </Typography>
      <RailsForm
        component={FinalForm}
        action='create'
        url='/<%= collection_path %>'
        validate={validate}
        render={(props) => (
          <Form {...props} />
        )}
      />
      <Button variant="contained" color="secondary" href="/<%= collection_path %>">
        <%= model_name_plural %>
      </Button>
    </div>
  );
}

export default hot(wrapper(New))
