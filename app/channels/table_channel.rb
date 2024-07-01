class TableChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'goal_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
