// Platform Page JavaScript - Login Functionality

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]').checked;

            // TODO: Replace this with actual authentication
            // This is a placeholder for demonstration purposes
            authenticateUser(username, password, remember);
        });
    }
});

/**
 * Authenticate user credentials
 * @param {string} username - The username or email
 * @param {string} password - The password
 * @param {boolean} remember - Remember me checkbox state
 */
function authenticateUser(username, password, remember) {
    // Show loading state
    const submitBtn = document.querySelector('.btn-full');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing in...';
    submitBtn.disabled = true;

    // TODO: Replace this with actual API call to your authentication endpoint
    // Example:
    /*
    fetch('https://your-api-endpoint.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            remember: remember
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Store authentication token
            if (remember) {
                localStorage.setItem('auth_token', data.token);
            } else {
                sessionStorage.setItem('auth_token', data.token);
            }

            // Redirect to annotation platform
            window.location.href = data.redirectUrl || '/annotation-platform';
        } else {
            showError(data.message || 'Invalid credentials');
        }
    })
    .catch(error => {
        console.error('Authentication error:', error);
        showError('An error occurred during login. Please try again.');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
    */

    // Temporary placeholder - simulates authentication after 1 second
    setTimeout(() => {
        // For demo purposes - accept any credentials
        console.log('Login attempt:', { username, remember });

        // Example: Check for demo credentials
        if (username && password) {
            showSuccess('Login successful! Redirecting to PurePath platform...');

            // Store demo session
            if (remember) {
                localStorage.setItem('purepath_user', username);
            } else {
                sessionStorage.setItem('purepath_user', username);
            }

            // Redirect after 2 seconds
            setTimeout(() => {
                // TODO: Replace with actual annotation platform URL
                // window.location.href = '/annotation-platform';

                // For now, show an alert
                alert('This would redirect to the PurePath annotation platform.\n\nPlease configure the actual platform URL in js/platform.js');
            }, 2000);
        } else {
            showError('Please enter both username and password');
        }

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

/**
 * Display error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    const alert = document.createElement('div');
    alert.className = 'alert alert-error';
    alert.textContent = message;

    const loginCard = document.querySelector('.login-card');
    loginCard.insertBefore(alert, loginCard.firstChild);

    setTimeout(() => alert.remove(), 5000);
}

/**
 * Display success message
 * @param {string} message - Success message to display
 */
function showSuccess(message) {
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.textContent = message;

    const loginCard = document.querySelector('.login-card');
    loginCard.insertBefore(alert, loginCard.firstChild);
}

// Add alert styles
const style = document.createElement('style');
style.textContent = `
    .alert {
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
        animation: slideIn 0.3s ease;
    }

    .alert-error {
        background: #fee;
        color: #c33;
        border: 1px solid #fcc;
    }

    .alert-success {
        background: #efe;
        color: #3c3;
        border: 1px solid #cfc;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .btn-full:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

/**
 * Check if user is already logged in
 */
function checkExistingSession() {
    const user = localStorage.getItem('purepath_user') || sessionStorage.getItem('purepath_user');

    if (user) {
        // User has an existing session
        console.log('Existing session found for:', user);

        // You could auto-redirect or show a different UI
        // Uncomment the following to auto-redirect:
        // window.location.href = '/annotation-platform';
    }
}

// Check for existing session on page load
checkExistingSession();
