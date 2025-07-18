export async function apiRequest(path, options = {}) {
    const url = `http://localhost:5001/api/biosim/course/${path}`;
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

// Usage example:
// apiRequest('/some-endpoint').then(data => { ... });
