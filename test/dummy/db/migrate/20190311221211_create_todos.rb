class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.cuid

      t.string :title
      t.boolean :completed, default: false

      t.timestamps
    end

    cuid_index :todos
  end
end
