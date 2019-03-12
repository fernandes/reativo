module Todos::Operation
  class Create < Trailblazer::Operation
    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Create }
    step ->(options, params) { options["representer.errors.class"] = Reativo::Representer::Errors }
    step Model( Todo , :new )

    step Contract::Build(constant: Todos::Contract::Create)
    step Contract::Validate(key: 'todo')
    step Contract::Persist()
  end
end
