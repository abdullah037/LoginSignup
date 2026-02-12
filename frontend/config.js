// ============================================
// Frontend Configuration
// ============================================
// This file loads environment variables from .env file
// 
// SETUP:
// 1. Copy .env.example to .env
// 2. Edit .env and set API_URL to your backend endpoint
// 3. This file will automatically use that URL
// ============================================

// Default API URL (fallback if .env is not loaded)
let API_URL = 'http://localhost:3000/api';

// Load environment variables from .env file
async function loadEnvConfig() {
    try {
        const response = await fetch('.env');
        const text = await response.text();
        
        // Parse .env file
        const lines = text.split('\n');
        for (const line of lines) {
            // Skip comments and empty lines
            if (line.trim().startsWith('#') || !line.trim()) continue;
            
            // Parse KEY=VALUE
            const [key, ...valueParts] = line.split('=');
            const value = valueParts.join('=').trim();
            
            if (key.trim() === 'API_URL') {
                API_URL = value.replace(/['"]/g, ''); // Remove quotes
                console.log('✅ Loaded API_URL from .env:', API_URL);
                break;
            }
        }
    } catch (error) {
        console.warn('⚠️ Could not load .env file, using default API_URL:', API_URL);
    }
}

// Load config when page loads
loadEnvConfig();