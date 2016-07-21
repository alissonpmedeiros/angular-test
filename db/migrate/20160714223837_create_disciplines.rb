class CreateDisciplines < ActiveRecord::Migration
  def change
    create_table :disciplines do |t|
      t.string :name
      t.float :average
      t.integer :workload

      t.timestamps null: false
    end
  end
end
