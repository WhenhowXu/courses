export function getResponse(
  data = null,
  { code = 0, message = "success" } = {}
) {
  return {
    code,
    data,
    message,
  };
}
