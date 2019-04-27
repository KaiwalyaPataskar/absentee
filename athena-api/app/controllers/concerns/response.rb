module Response
  def json_response(object, status = :ok)
  	object = { value: object, status: status }
    render json: object
  end
end