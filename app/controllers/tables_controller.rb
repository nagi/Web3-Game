class TablesController < ApplicationController
  before_action :get_instance

  def index
    @state
  end

  def create
    @state.goal!
    ActionCable.server.broadcast('goal_channel', { body: 'Goaaaalll!!!', score: @state.score })
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
