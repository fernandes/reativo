import React from 'react';
import { Form } from 'react-final-form';
import axios from 'axios'

function RailsForm({render, method, url, validate, action, initialValues, successUrl}) {
  const onSubmit = async values => {
    let form_method = ''
    if (method === undefined) {
      form_method = (action == 'create' ? 'POST' : 'PUT')
    } else {
      form_method = method
    }

    const meta_csrf = document.querySelector("meta[name=csrf-token]")
    axios({
      method: form_method, 
      url: `${url}.json`,
      data: values,
      dataType: "json",
      headers: {
        'X-CSRF-Token': (meta_csrf ? meta_csrf.content : null)
      }
    })
    .then(function(response) {
      Turbolinks.visit(successUrl ? successUrl : `${url}/${response.data.id}`)
    })
    .catch(function(error) {console.log('boom!', error)})
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        render({ handleSubmit, reset, submitting, pristine, values })
      )}
    />
  );
}

export default RailsForm;
