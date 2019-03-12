module Todos::Representer
  module TodoModule
    include Reform::Form::Module

    property :cuid, as: :id, writeable: false
    property :title
    property :completed
  end
end
