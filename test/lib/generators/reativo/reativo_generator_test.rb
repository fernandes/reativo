require 'test_helper'
require 'generators/reativo/reativo_generator'

module Reativo
  class ReativoGeneratorTest < Rails::Generators::TestCase
    tests ReativoGenerator
    destination Rails.root.join('tmp/generators')
    setup :prepare_destination

    # test "generator runs without errors" do
    #   assert_nothing_raised do
    #     run_generator ["arguments"]
    #   end
    # end
  end
end
