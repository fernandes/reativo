class ApplicationController < ActionController::Base
  def theme_cell
    Theme::Cell::Layout
  end
end
