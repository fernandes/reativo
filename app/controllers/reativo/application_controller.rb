module Reativo
  class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    def theme_cell
      raise Exception.new('Please specify your theme cell here')
    end
  
    def trb(cell_constant, model, options: {}, rails_options: {})
      render(
        {
          html: cell(
            cell_constant,
            model,
            {
              layout: theme_cell,
              context: _run_options({ flash: flash, controller: self }),
            }.merge(options)
          )
        }.merge(rails_options)
      )
    end
  
    def component(component, options: {}, rails_options: {}, **props)
      component_options = options.merge!(
        context: _run_options({
          flash: flash, controller: self, component: component, props: props, result: result
        })
      )
      trb(Reativo::Cell::Component, nil, options: component_options, rails_options: rails_options)
    end
  end
end
