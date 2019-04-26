require "rubygems"
require "net/https"
require "uri"
require "json"
class SmsMessenger
  def initialize(params)
    @message = params[:message]
    @api_key = "/1/qjLnwx/4-Z525FaQNGTGliUIaBGd5xA3NW193lB" #Rails.application.credentials[Rails.env.to_sym][:text_local][:api_key]
    @uri = URI.parse("https://api.textlocal.in/send/")
    @params = params
  end

  def send
    res = Net::HTTP.post_form(@uri, 'apikey' => @api_key,
       'message' => @params[:message],
       'sender' => "Application",
       'numbers' => [@params[:numbers]])
    response = JSON.parse(res.body)
  end
end