# SweetAlert2 Usage Guide

This project uses SweetAlert2 for beautiful, responsive alerts and notifications.

## Installation

SweetAlert2 is already installed in this project. If you need to reinstall:

```bash
npm install sweetalert2
```

## Available Functions

All functions are exported from `utils/sweetAlerts.js`

### 1. Success Alert
```javascript
import { showSuccessAlert } from '../utils/sweetAlerts';

showSuccessAlert('Success!', 'Your action was completed successfully');
```

### 2. Error Alert
```javascript
import { showErrorAlert } from '../utils/sweetAlerts';

showErrorAlert('Error!', 'Something went wrong');
```

### 3. Warning Alert
```javascript
import { showWarningAlert } from '../utils/sweetAlerts';

showWarningAlert('Warning!', 'Please review your input');
```

### 4. Info Alert
```javascript
import { showInfoAlert } from '../utils/sweetAlerts';

showInfoAlert('Did you know?', 'This is some useful information');
```

### 5. Confirmation Dialog
```javascript
import { showConfirmDialog } from '../utils/sweetAlerts';

showConfirmDialog(
  'Are you sure?',
  'This action cannot be undone',
  'Yes, proceed',
  'Cancel'
).then((result) => {
  if (result.isConfirmed) {
    // User clicked "Yes, proceed"
    console.log('Confirmed!');
  }
});
```

### 6. Toast Notification
```javascript
import { showToast } from '../utils/sweetAlerts';

// Success toast
showToast('success', 'Changes saved!');

// Error toast
showToast('error', 'Failed to save');

// Warning toast
showToast('warning', 'Please review');

// Info toast
showToast('info', 'New update available');
```

### 7. Form Submission Success
```javascript
import { showFormSubmissionSuccess } from '../utils/sweetAlerts';

showFormSubmissionSuccess(
  'Thank you!',
  'We will get back to you soon'
);
```

### 8. Loading Alert
```javascript
import { showLoadingAlert } from '../utils/sweetAlerts';

showLoadingAlert('Processing...', 'Please wait while we process your request');

// Close it when done
Swal.close();
```

### 9. Delete Confirmation
```javascript
import { showDeleteConfirmation } from '../utils/sweetAlerts';

showDeleteConfirmation('this item').then((result) => {
  if (result.isConfirmed) {
    // Delete the item
  }
});
```

### 10. Success with Redirect
```javascript
import { showSuccessAndRedirect } from '../utils/sweetAlerts';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

showSuccessAndRedirect(
  'Success!',
  'Redirecting you now...',
  '/home',
  navigate
);
```

## Implementation Examples

### Get Started Button
```javascript
const handleGetStarted = (e) => {
  e.preventDefault();
  showConfirmDialog(
    'Ready to Get Started?',
    'You will be redirected to the login page',
    'Continue',
    'Not yet'
  ).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'https://example.com/login';
    }
  });
};
```

### Form Submission with Redirect
```javascript
useEffect(() => {
  if (state.succeeded) {
    showFormSubmissionSuccess(
      'Thank you!',
      'We will contact you soon.'
    ).then(() => {
      navigate('/');
    });
  }
}, [state.succeeded, navigate]);
```

### Email Signup
```javascript
const handleEmailSignup = (e) => {
  e.preventDefault();
  const email = e.target.email?.value;
  if (email) {
    showToast('success', 'Thanks! We\'ll reach out soon!');
    setTimeout(() => {
      navigate('/request-demo');
    }, 1500);
  }
};
```

### Pricing Plan Selection
```javascript
const handleRequestDemo = (e, planName) => {
  e.preventDefault();
  showInfoAlert(
    `${planName} Plan Demo`,
    'Let us show you how our platform can transform your business!'
  ).then(() => {
    navigate('/request-demo');
  });
};
```

## Customization

All alert colors and styles are configured in `utils/sweetAlerts.js`. You can modify:
- Colors (confirmButtonColor, cancelButtonColor)
- Timers (timer, timerProgressBar)
- Positions (for toasts)
- Icons (success, error, warning, info, question)

## Documentation

For more advanced usage, see the official SweetAlert2 documentation:
https://sweetalert2.github.io/

