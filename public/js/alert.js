export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

/**
 * Use to show alert window
 * @param {string} type success | error
 * @param {string} msg message
 */
export const showAlert = (type, msg) => {
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hideAlert, 5000);
};
