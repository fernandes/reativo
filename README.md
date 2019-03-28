# Reativo

It's my personal library, where I try to make Rails more Reactive (Reativo is the portuguese word for Reactive).

No, it's **NOT** a replaced for [react-rails](https://github.com/reactjs/react-rails/) or [webpacker](https://github.com/rails/webpacker) and will never be. Actually it heavily rely on both, built on shoulders of giants.

So what is it? I've been seen myself replicating code over some rails projects, with some _patterns_ I've been constantly using, so one day I decided, I'm over! I need a gem to make myself easier to use.

And here I am

This gem rely a lot on Trailblazer ecossystem, and make part of my workflow.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'reativo'
```

To use our npm package, also run:

```bash
yarn add reativo
npm install --save reativo
```

It has some [peerDependencies](https://github.com/fernandes/reativo/blob/d78b9ab4d88930178fd55267dfed2f32cb2ff2d2/reativo_js/package.json#L17-L31), check this out.

## Usage

The basic usage is include the concern on your controller and set the layout component.

```ruby
class TodosController < ApplicationController
  include Reativo::CrudController

  def theme_cell
    Theme::Cell::Layout
  end
end
```

Not sure about how to customize? check the [Reativo::CrudController](https://github.com/fernandes/reativo/blob/master/app/controllers/reativo/crud_controller.rb) and check how it works, I tried to split so make easier to overwrite, like normal Ruby 😉

A common problem is, if you are using trailblazer < 2.1, you can overwrite `result_model` to use a string key

```ruby
def result_model
  result['model']
end
```

### Snackbar

Reativo comes with a Snackbar based on [notistack](https://github.com/iamhosseindhv/notistack), if you'd like to use, create your own Snackbar, based on the library's one, like this:

```js
import React from 'react';
import { Snackbar as SnackbarOriginal } from "reativo"

function Snackbar({messages}) {
  return <SnackbarOriginal messages={messages} />
}

export default Snackbar
```

This is needed so the Notistack Context works correctly.

## JS

Reativo now bundles with a JS library! (this is my first one, so if you try and it's broken, please, don't blame me hahah)

The most complete example would be a form, that uses the `AppContainer`, and the `RailsForm` classes:

```js
import { hot } from 'react-hot-loader/root'
import { wrapper, RailsForm } from "reativo"
import { Form as FinalForm } from 'react-final-form'
import Form from './Form'

function New() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <RailsForm
        component={FinalForm}
        action='create'
        url='/todos'
        render={(props) => (
          <Form {...props} />
        )}
      />
    </div>
  )
}

export default hot(
  wrapper(New)
)
```

And to use a redux store and your own theme, don't forget to do the following on your pack:

```js
import store from '../src/store' // this is a normal redux store, check
// https://github.com/fernandes/reativo/blob/master/test/dummy/app/javascript/src/store.js
// for an example
window.store = store
// and keep on window.store, so during page changes (using Turbolinks), we don't loose
// the state of our store
// now that we have our own JS library, maybe this can change in the future

import theme from '../src/theme' // this is a normal, Material UI theme, check
// https://github.com/fernandes/reativo/blob/master/test/dummy/app/javascript/src/theme.js
// for an example

import { setTheme } from 'reativo'
setTheme(theme)
```

### Auto Complete

The JS library comes with a material-ui ready to use select using auto complete

I'm not sure if a trailblazer operation / macro could help here... thoughts?

```js
const loadOptions = (inputValue, callback) => {
  axios.get(`/todos.json?q=${inputValue}`)
  .then(function (response) {
    const results = response.data.map(x => {
      return { value: x.id, label: x.title}
    })
    callback(results)
  })
}

const handleChange = (value) => {
  console.log('Auto Compete Selected: ', value)
}

import { SelectAutoComplete } from 'reativo'

<SelectAutoComplete
  loadOptions={loadOptions}
  handleChange={this.handleChange}
/>
```

## Generator

It comes with a generator for Trailblazer, so, yeah!, you can generate the operations, contracts and representers!

```bash
rails g reativo
```

And check the [usage](https://github.com/fernandes/reativo/blob/master/lib/generators/reativo/USAGE)

## Contributing

Please, help contributing, try to fix more than you break and world will be a better place! 😉

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
