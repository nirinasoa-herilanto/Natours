/**
 * Use to avoid try/catch blocs, for catching error (to reusable code)
 * @param {Function} fn Asynchronous function
 */
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
