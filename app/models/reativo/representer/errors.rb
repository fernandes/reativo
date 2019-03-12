require 'representable/json/hash'

module Reativo::Representer
  class Errors < Representable::Decorator
    include Representable::JSON::Hash
    self.representation_wrap = :errors
  end
end
