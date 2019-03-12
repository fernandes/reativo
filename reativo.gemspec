$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "reativo/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = "reativo"
  spec.version     = Reativo::VERSION
  spec.authors     = ["Celso Fernandes"]
  spec.email       = ["celso.fernandes@gmail.com"]
  spec.homepage    = "https://github.com/fernandes/reativo"
  spec.summary     = "Make Rails more reactive"
  spec.description = "Make Rails more reactive"
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "~> 5.2.2"
  spec.add_dependency "cells-erb", "~> 0.1"
  spec.add_dependency "cells-rails", "~> 0.0"
  spec.add_dependency "cuid", "~> 1.0"
  spec.add_dependency "devise", "~> 4.6"
  spec.add_dependency "friendly_id", "~> 5.2"
  spec.add_dependency "jsonb_accessor", "~> 1.0"
  spec.add_dependency "jwt", "~> 2.1"
  spec.add_dependency "multi_json", "~> 1.13"
  spec.add_dependency "react-rails", "~> 2.4"
  spec.add_dependency "reform-rails", "~> 0.2.0.rc1"
  spec.add_dependency "reform", "~> 2.3.0.rc1"
  spec.add_dependency "rolify", "~> 5.2"
  spec.add_dependency "trailblazer-cells", "~> 0.0"
  spec.add_dependency "trailblazer-rails", "~> 2.1"
  spec.add_dependency "trailblazer", "~> 2.1.0.rc1"
  spec.add_dependency "turbolinks", "~> 5"
  spec.add_dependency "webpacker", "~> 4.0"

  spec.add_development_dependency "pg"
end
