module Todos::Operation
  class Update < Trailblazer::Operation
    class Present < Trailblazer::Operation
      step ->(options, params) { options["representer.render.class"] = Todos::Representer::Create }
      step ->(options, params) { options["representer.errors.class"] = Reativo::Representer::Errors }
      step Model( Todo , :find_cuid )
      step Contract::Build(constant: Todos::Contract::Update)
    end

    step Nested(Present)
    step Contract::Validate(key: 'todo')
    step Contract::Persist()
  end
end
