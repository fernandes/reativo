module Todos::Representer
  module Create
    include Representable::JSON
    include TodoModule
  end
end
