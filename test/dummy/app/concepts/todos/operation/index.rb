module Todos::Operation
  class Index < Trailblazer::Operation
    ViewModel = Struct.new(:id, :title, :completed) do
      def cuid
        id
      end
    end

    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Index }
    step ->(options, params) { options["representer.errors.class"] = Reativo::Representer::Errors }
    step :model!

    def model!(ctx, params:, **)
      db_model = Todo.all.order(cuid: :asc).pluck(:cuid, :title, :completed)
      ctx[:model] = db_model.map { |x| ViewModel.new(*x) }
      ctx[:cache_key] = Todo.order(cuid: :asc).cache_key
    end
  end
end
