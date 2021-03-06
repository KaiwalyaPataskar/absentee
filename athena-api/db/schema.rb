# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_27_013917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "class_infos", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "school_id"
  end

  create_table "divisions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "school_id"
    t.integer "class_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "contact_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "student_attendances", force: :cascade do |t|
    t.integer "user_id"
    t.date "date"
    t.string "sms_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "attended"
  end

  create_table "user_infos", force: :cascade do |t|
    t.integer "roll_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "school_id"
    t.bigint "class_info_id"
    t.bigint "division_id"
    t.bigint "user_id"
    t.index ["class_info_id"], name: "index_user_infos_on_class_info_id"
    t.index ["division_id"], name: "index_user_infos_on_division_id"
    t.index ["school_id"], name: "index_user_infos_on_school_id"
    t.index ["user_id"], name: "index_user_infos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "registration_number"
    t.string "mobile_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_type"
    t.bigint "school_id"
    t.index ["school_id"], name: "index_users_on_school_id"
  end

  add_foreign_key "users", "schools"
end
