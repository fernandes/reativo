class ApplicationController < Reativo::ApplicationController
  def theme_cell
    Theme::Cell::Layout
  end
end
