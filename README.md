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
