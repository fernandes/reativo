module Reativo::Migrations
  module Table
    def self.included(base) # :nodoc:
      base.send(:include, InstanceMethods)
    end

    module InstanceMethods
      def cuid column_name = :cuid
        column(column_name, :string, limit: 25, null: false)
      end
    end
  end
end
