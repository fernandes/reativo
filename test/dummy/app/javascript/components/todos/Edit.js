import React from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root'
import { wrapper, RailsForm } from "reativo"
import { Form as FinalForm } from 'react-final-form';
import Form from './Form'
import { validate } from './Form'

function Edit({model}) {
  const { completed, title, id } = model

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Edit Todo
      </Typography>
      <RailsForm
        component={FinalForm}
        action='update'
        url={`/todos/${model.id}`}
        successUrl={`/todos/${model.id}`}
        validate={validate}
        initialValues={{ completed, title, id }}
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
  wrapper(Edit)
);
