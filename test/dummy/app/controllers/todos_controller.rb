class TodosController < ApplicationController
  include Reativo::CrudController

  def theme_cell
    Theme::Cell::Layout
  end
end
