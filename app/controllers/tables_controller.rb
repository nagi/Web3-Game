class TablesController < ApplicationController
  before_action :get_instance

  def index
    @state
  end

  def create
    @state.goal!
    render json: @state.score
  end

  def destroy
    @state.reset!
  end

  private

  def get_instance
    @state = GameState.instance
  end
end
