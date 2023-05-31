export function SuccessResponse(data, { code = 0, message = "success" } = {}) {
  this.code = code;
  this.message = message;
  this.data = data;
}
