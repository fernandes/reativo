module Todos::Operation
  class Edit < Trailblazer::Operation
    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Create }
    step Model( Todo , :find_cuid )
    step :cache_key!

    def cache_key!(opts, params:, **)
      opts[:cache_key] = nil
      true
    end
  end
end
