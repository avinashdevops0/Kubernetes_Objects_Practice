// Configuration from ConfigMap (environment variables)
const config = {
    APP_NAME: "Welcome Message App",
    WELCOME_TITLE: "Hello from Kubernetes!",
    WELCOME_MESSAGE: "This application uses ConfigMap for configuration.",
    MESSAGE_AUTHOR: "K8s Admin",
    ENVIRONMENT: "production",
    APP_VERSION: "2.0.0",
    MAX_USERS: "100",
    DEBUG_MODE: "false"
};

// Update UI with config values
function updateUI() {
    document.getElementById('app-title').textContent = config.APP_NAME;
    document.getElementById('welcome-title').textContent = config.WELCOME_TITLE;
    document.getElementById('welcome-message').textContent = config.WELCOME_MESSAGE;
    document.getElementById('message-author').textContent = `- ${config.MESSAGE_AUTHOR}`;
    document.getElementById('environment').textContent = `Environment: ${config.ENVIRONMENT}`;
    document.getElementById('app-version').textContent = config.APP_VERSION;
    
    // Update config table
    document.getElementById('config-name').textContent = config.APP_NAME;
    document.getElementById('config-title').textContent = config.WELCOME_TITLE;
    document.getElementById('config-env').textContent = config.ENVIRONMENT;
    document.getElementById('config-users').textContent = config.MAX_USERS;
    document.getElementById('config-debug').textContent = config.DEBUG_MODE;
    
    // Color code environment
    const envBadge = document.getElementById('environment');
    if (config.ENVIRONMENT === 'production') {
        envBadge.style.background = '#ffebee';
        envBadge.style.color = '#c62828';
    } else if (config.ENVIRONMENT === 'staging') {
        envBadge.style.background = '#fff3e0';
        envBadge.style.color = '#ef6c00';
    } else {
        envBadge.style.background = '#e8f5e9';
        envBadge.style.color = '#2e7d32';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', updateUI);