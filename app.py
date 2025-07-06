
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = "your-openai-api-key-here"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    user_query = data.get("query", "")

    if not user_query:
        return jsonify({"answer": "No input provided."})

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": user_query}]
        )
        answer = response.choices[0].message["content"]
        return jsonify({"answer": answer.strip()})
    except Exception as e:
        return jsonify({"answer": f"Error: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True)
