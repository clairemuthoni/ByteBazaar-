import Swal from 'sweetalert2';

/**
 * Show a success alert
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 * @param {string} confirmButtonText - Confirm button text (default: 'OK')
 */
export const showSuccessAlert = (title, text, confirmButtonText = 'OK') => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: '#10b981',
    timer: 3000,
    timerProgressBar: true,
  });
};

/**
 * Show an error alert
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 */
export const showErrorAlert = (title, text) => {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    confirmButtonText: 'OK',
    confirmButtonColor: '#ef4444',
  });
};

/**
 * Show a warning alert
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 */
export const showWarningAlert = (title, text) => {
  return Swal.fire({
    icon: 'warning',
    title: title,
    text: text,
    confirmButtonText: 'OK',
    confirmButtonColor: '#f59e0b',
  });
};

/**
 * Show an info alert
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 */
export const showInfoAlert = (title, text) => {
  return Swal.fire({
    icon: 'info',
    title: title,
    text: text,
    confirmButtonText: 'Got it!',
    confirmButtonColor: '#3b82f6',
  });
};

/**
 * Show a confirmation dialog
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 * @param {string} confirmButtonText - Confirm button text (default: 'Yes')
 * @param {string} cancelButtonText - Cancel button text (default: 'No')
 */
export const showConfirmDialog = (title, text, confirmButtonText = 'Yes', cancelButtonText = 'No') => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#10b981',
    cancelButtonColor: '#6b7280',
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
  });
};

/**
 * Show a loading alert
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 */
export const showLoadingAlert = (title = 'Loading...', text = 'Please wait') => {
  Swal.fire({
    title: title,
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
};

/**
 * Show a toast notification
 * @param {string} icon - Toast icon (success, error, warning, info)
 * @param {string} title - Toast title
 */
export const showToast = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: icon,
    title: title,
  });
};

/**
 * Show a form submission success alert
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 */
export const showFormSubmissionSuccess = (title, text) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    confirmButtonText: 'Great!',
    confirmButtonColor: '#10b981',
    timer: 4000,
    timerProgressBar: true,
  });
};

/**
 * Show a delete confirmation dialog
 * @param {string} itemName - Name of the item to delete
 */
export const showDeleteConfirmation = (itemName) => {
  return Swal.fire({
    title: 'Are you sure?',
    text: `You won't be able to revert this! ${itemName} will be permanently deleted.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });
};

/**
 * Show success alert and redirect after
 * @param {string} title - Alert title
 * @param {string} text - Alert message
 * @param {string} path - Path to navigate to
 * @param {function} navigate - React Router navigate function
 */
export const showSuccessAndRedirect = (title, text, path, navigate) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    confirmButtonText: 'OK',
    confirmButtonColor: '#10b981',
    timer: 3000,
    timerProgressBar: true,
  }).then(() => {
    navigate(path);
  });
};

