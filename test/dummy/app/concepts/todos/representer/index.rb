module Todos::Representer
  module Index
    include Representable::JSON::Collection

    items class: Todo do
      include Representable::JSON
      include TodoModule
    end
  end
end
