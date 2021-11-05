class RenameContextColumnToMicroposts < ActiveRecord::Migration[6.1]
  def change
    rename_column :microposts, :context, :content
  end
end
