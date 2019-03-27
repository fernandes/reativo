import React from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root'
import { wrapper } from "reativo"

function Show({model}) {
  const { title, completed } = model

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Todo
      </Typography>
      <p>Title: {title}</p>
      <p>Completed: {completed ? 'done' : 'pending'}</p>
      <Button variant="contained" color="secondary" href="/todos">
        Todos
      </Button>
    </div>
  );
}

export default hot(
  wrapper(Show)
);
