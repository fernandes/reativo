require 'cells-erb'
require 'cells-rails'
require 'cuid'
require 'devise'
require 'friendly_id'
require 'jsonb_accessor'
require 'jwt'
require 'react-rails'
require 'reform'
require 'reform/rails'
require 'rolify'
require 'trailblazer'
require 'trailblazer/cells'
require 'trailblazer-rails'
require 'turbolinks'
require 'webpacker'
require 'multi_json'

module Reativo
  class Engine < ::Rails::Engine
    isolate_namespace Reativo

    initializer "reativo.migrations.cuid" do |app|
      require 'active_record'
      require 'active_record/migration'
      ActiveRecord::ConnectionAdapters::TableDefinition.send(:include, Reativo::Migrations::Table)
      ActiveRecord::Migration.send(:include, Reativo::Migrations::General)
    end
  end
end
