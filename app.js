
async function askAI() {
    const input = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("response");

    if (!input) {
        responseDiv.innerHTML = "Please enter a query.";
        return;
    }

    responseDiv.innerHTML = "Thinking...";

    try {
        const response = await fetch("/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: input })
        });

        const data = await response.json();
        responseDiv.innerHTML = "<strong>AI:</strong> " + data.answer;
    } catch (error) {
        responseDiv.innerHTML = "Error connecting to AI.";
    }
}
