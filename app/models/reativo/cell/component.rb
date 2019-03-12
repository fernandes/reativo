module Reativo::Cell
  class Component < Trailblazer::Cell
    include React::Rails::ViewHelper
    include Cell::Caching::Notifications

    self.prefixes << File.join(File.dirname(File.expand_path(__FILE__)), '..', 'view')

    cache :show, if: :cache? do
      self.context[:result][:cache_key]
    end

    def datamodel
      operation[:model]
    end

    def component
      self.context[:component]
    end

    def props
      result = self.context[:result] || {}
      additional_props = result[:view] || {}
      self.context[:props].merge!(additional_props)
    end

    def operation
      model
    end

    def cache?(*args)
      return false if self.context[:result].nil?
      return true if self.context[:result][:cache_key]
      false
    end
  end
end
