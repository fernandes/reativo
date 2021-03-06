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

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "> 5"
  spec.add_dependency "cells-erb"
  spec.add_dependency "cells-rails", "> 0.0"
  spec.add_dependency "multi_json", "> 1"
  spec.add_dependency "react-rails", "> 2"
  spec.add_dependency "reform-rails"
  spec.add_dependency "reform", "> 2"
  spec.add_dependency "trailblazer-cells", "> 0.0"
  spec.add_dependency "trailblazer-rails", "> 1"
  spec.add_dependency "trailblazer", "> 2"
  spec.add_dependency "turbolinks", "> 5"
  spec.add_dependency "webpacker", "> 4"
  
  spec.add_development_dependency "pg"
  spec.add_development_dependency "pry"
end
