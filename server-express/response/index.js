class Response {
  constructor(data = null, code = 0, message = "success") {
    this.code = code;
    this.data = data;
    this.message = message;
  }
}
const SuccessRes = (data) => new Response(data);
const ErrorRes = (message) => new Response(null, -1, message);

module.exports = { SuccessRes, ErrorRes };
