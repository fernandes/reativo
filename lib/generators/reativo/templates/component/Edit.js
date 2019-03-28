import { hot } from 'react-hot-loader/root'
import React from 'react'

import {
  Typography,
  Button,
} from '@material-ui/core'
import Form from './Form'
import { Form as FinalForm } from 'react-final-form'
import { validate } from './Form'
import { RailsForm } from 'reativo'
import { wrapper } from "reativo"

function Edit({model}) {
  <%- unless js_properties.empty? -%>
  const { <%= js_properties %> } = model
  <%- end -%>
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Edit <%= model_name_singular %>
      </Typography>
      <RailsForm
        component={FinalForm}
        action='update'
        url={`/<%= collection_path %>/${model.id}`}
        successUrl={`/<%= collection_path %>/${model.id}`}
        validate={validate}
        <%- unless js_properties.empty? -%>
        initialValues={{ <%= js_properties %> }}
        <%- end -%>
        render={(props) => (
          <Form {...props} />
        )}
      />
      <Button variant="contained" color="secondary" href="/<%= collection_path %>">
        Back to <%= model_name_plural %>
      </Button>
    </div>
  );
}

export default hot(wrapper(Edit))
