function SuccessRes(data) {
  this.code = 0;
  this.data = data;
  this.message = "success";
}
function ErrorRes(errorMessage) {
  this.code = 1;
  this.errorMessage = errorMessage;
}
export const generateApi = (
  data,
  { delay = 100, isSuccess = true, errorMessage = "操作异常" } = {}
) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      isSuccess
        ? resolve(new SuccessRes(data))
        : reject(new ErrorRes(errorMessage));
    }, delay);
  });
};
