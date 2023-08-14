class Response {
  constructor(data = null, code = 0, message = "success") {
    this.code = code;
    this.data = data;
    this.message = message;
  }
}
class ErrorResponse {
  constructor(message = "error", data = null) {
    this.code = -1;
    this.data = data;
    this.message = message;
  }
}
module.exports = { Response, ErrorResponse };
