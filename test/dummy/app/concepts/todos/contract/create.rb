module Todos::Contract
  class Create < Reform::Form
    include Todos::Representer::TodoModule

    validates :title, presence: true, length: {minimum: 1}
  end
end
