import React from 'react';
import { Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';

export const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors;
};

function Form({ handleSubmit, reset, submitting, pristine, values }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={8}>
          <Grid item xs={12}>
            <Field
              fullWidth
              required
              name="title"
              component={TextField}
              type="text"
              label="Title"
            />
          </Grid>
          <Grid item style={{ marginTop: 16 }}>
            <Button
              type="button"
              variant="contained"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Reset
            </Button>
          </Grid>
          <Grid item style={{ marginTop: 16 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={submitting}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export default Form;