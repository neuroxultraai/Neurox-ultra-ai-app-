
async function askAI() {
    const query = document.getElementById('query').value;
    const responseElement = document.getElementById('response');

    const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    const data = await res.json();
    responseElement.textContent = data.response || 'No response';
}
