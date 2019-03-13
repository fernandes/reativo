module Reativo::Cell
  class Theme < Trailblazer::Cell
    include ActionView::Helpers::CsrfHelper
    include ActionView::Helpers::CspHelper
    include Webpacker::Helper
    include React::Rails::ViewHelper

    def protect_against_forgery?
      context[:controller].send(:protect_against_forgery?)
    end

    def content_security_policy?
      context[:controller].send(:content_security_policy?)
    end

    def form_authenticity_token
      context[:controller].send(:form_authenticity_token)
    end

    def flash_messages(opts = {})
      flash_messages = []
      controller.flash.each do |type, message|
        type = 'success' if type == 'notice'
        type = 'error'   if type == 'alert'
        flash_messages << {title: message, type: type} if message
      end
      flash_messages
    end

    def current_user
      context[:controller].current_user
    end
  end
end
