module Reativo::Migrations
  module General
    def self.included(base) # :nodoc:
      base.send(:include, InstanceMethods)
    end

    module InstanceMethods
      def cuid_index table, **options
        add_index table, :cuid, unique: true, **options
      end
    end
  end
end
