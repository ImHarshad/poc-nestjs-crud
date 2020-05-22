export function logger(req, res, next) {
  console.log(`Request: ${req.method} \t Path: ${req.originalUrl}`);
  next();
};