class CreateUrls < ActiveRecord::Migration[7.2]
  def change
    create_table :urls do |t|
      t.references :course, null: false, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
