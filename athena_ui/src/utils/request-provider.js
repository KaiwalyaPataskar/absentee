
function Request() {
}

var _request = function (url, param) {
  debugger
  return fetch(url, param).then(response => response.json())
};

var _doGet = function (url, data, authHeader = '') {
  var param = {};
  return _request(url, param);
};

var _doPost = function (url, data = {'data': '123'}, authHeader) {
  debugger
  var param = {
    body: JSON.stringify(data),
    method: "POST",
    headers: {'Content-Type': 'application/json'}
  };
  return _request(url, param);
};

var _doPut = function (url, data, authData) {
  var param = {
    data: JSON.stringify(data),
    url: url,
    method: "PUT",
    headers: authData
  };
  return _request(param);
};

var _doDelete = function (url, data) {
  var param = {
    data: JSON.stringify(data),
    url: url,
    method: "DELETE",
  };
  return _request(param);
};

var _doUpload = function (url, data) {
  var param = {
    data: data,
    url: url,
    method: "POST",
    processData: false,
    contentType: false,
  };
  return _request(param);
};

Request.prototype.save = function (url, data, authData) {
  return _doPost(url, data, authData);
};

Request.prototype.fetch = function (url, data, authData) {
  return _doGet(url, data, authData);
};
Request.prototype.upload = function (url, data) {
  return _doUpload(url, data);
};

Request.prototype.update = function (url, data, authData) {
  return _doPut(url, data, authData);
};

Request.prototype.delete = function (url, data) {
  return _doDelete(url, data);
};

var request = new Request();

export default request;
