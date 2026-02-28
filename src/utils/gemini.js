// Shared Gemini helper for making requests with retry and quota handling
// no API key required when using mock data
// const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
import mockData from '../mock/data.json';

export async function fetchWithRetry(payload) {
    // always return local mock data; AI key removed per user's request
    return mockData;
}
