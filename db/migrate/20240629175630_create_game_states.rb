class CreateGameStates < ActiveRecord::Migration[7.1]
  def change
    create_table :game_states do |t|
      t.string :name
      t.integer :score, null: false, default: 0

      t.timestamps
    end
  end
end
