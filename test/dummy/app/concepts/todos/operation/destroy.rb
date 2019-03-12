module Todos::Operation
  class Destroy < Trailblazer::Operation
    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Create }
    step Model( Todo , :find_cuid )
    step ->(options, params) { options[:model].destroy }
  end
end
