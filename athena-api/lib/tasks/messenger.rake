namespace :messenger do
  desc "Messenger"
  task :send_message => :environment  do |t, args|
   attendaces = StudentAttendance.where(date: Date.today).joins(:user) 

    attendaces.each do |attendace|
      user = User.find(id: attendace.user_id)
      params = {
        message: "Student Absent- #{user.name}",
        sender: "School",
        number: user.number
      }
       #SmsMessenger.new(params).send
   end
   p params
  end
end
