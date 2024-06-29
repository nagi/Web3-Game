class GameState < ApplicationRecord
  def goal!
    self.score += 1
    save!
  end

  def reset!
    update!(score: 0)
  end

  def self.instance
    first_or_create(name: 'all-in')
  end
end
