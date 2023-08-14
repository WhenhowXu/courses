const importAll = (r) => r.keys().forEach(r);
const req = require.context("../icons", false, /.svg$/);

importAll(req);
