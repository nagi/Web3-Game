class TablesController < ApplicationController
  def index
  end

  def update
    GameState.instance.goal!
  end

  def destroy
    GameState.instance.reset!
  end
end
