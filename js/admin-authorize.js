// Function to get cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Check if the user is authenticated and has admin role
function checkAdminRole() {
    const jwtToken = getCookie('accessToken');
    if (jwtToken) {
        try {
            const decodedToken = jwt_decode(jwtToken);
            const role = decodedToken.role;
            if (role === '1') {
                return true;
            } else {
                window.location.href = "error.html";
                return false;
            }
        } catch (e) {
            console.error('Invalid token:', e);
            window.location.href = "error.html";
            return false;
        }
    } else {
        window.location.href = "error.html";
        return false;
    }
}

// Run the admin check on page load
$(document).ready(function() {
    checkAdminRole();
});