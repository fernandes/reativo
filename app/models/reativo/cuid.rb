module Reativo
  module Cuid
    extend ActiveSupport::Concern

    included do
      before_save :set_cuid, on: :create

      def self.find_cuid(id)
        self.find_by(cuid: id)
      end

      def set_cuid
        self.cuid = ::Cuid::generate if self.cuid.nil?
      end
    end
  end
end
