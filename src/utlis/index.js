export const generateApi = (data, delay = 500) =>
  new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve({
        status: "success",
        result: data,
      });
      clearTimeout(timer);
    }, delay);
  });
