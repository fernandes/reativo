import { hot } from 'react-hot-loader/root'
import React from 'react'

import {
  Typography,
  Button,
} from '@material-ui/core'

import { wrapper } from "reativo"

function Show({model}) {
  const { id } = model

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        <%= model_name_singular %>
      </Typography>
      <%- options[:properties].each do |prop| -%>
      <p><%= prop.humanize %>: {model.<%= prop %>}</p>
      <%- end -%>
      <Button variant="contained" color="primary" href={`/<%= collection_path %>/${id}/edit`}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" href="/<%= collection_path %>">
        Back to <%= model_name_plural %>
      </Button>
    </div>
  );
}

export default hot(wrapper(Show))
