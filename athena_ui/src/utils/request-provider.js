
function Request() {
}

var _request = function (url, param) {
  return fetch(url, param).then(response => response.json())
};

var _doGet = function (url, data, authHeader = '') {
  var param = {};
  return _request(url, param);
};

var _doPost = function (url, data, authHeader) {
  var param = {
    body: JSON.stringify(data),
    method: "POST",
    headers: {'Content-Type': 'application/json'}
  };
  return _request(url, param);
};

var _doPut = function (url, data, authData) {
  var param = {
    body: JSON.stringify(data),
    method: "PUT",
    headers: {'Content-Type': 'application/json'}
  };
  return _request(url, param);
};

var _doDelete = function (url, data) {
  var param = {
    data: data,
    url: url,
    method: "DELETE",
  };
  return _request(param);
};

var _doUpload = function (url, data, authHeader) {
  var formdata = new FormData();
  formdata.append('file', data.file);

  var param = {
    body: formdata,
    method: "POST",
    mode: 'no-cors',
    headers: {"Content-Type": "form-data"}
  };
  fetch(url, param);
};

Request.prototype.save = function (url, data, authData={}) {
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
