from flask import Flask, request, jsonify
from transformers import pipeline
import torch

app = Flask(__name__)

# Initialize the model
generator = pipeline('text-generation', model='gpt2')

@app.route('/generate', methods=['POST'])
def generate_answer():
    try:
        data = request.get_json()
        user_input = data['user_input']
        context = data['context']
        
        prompt = f"質問: {user_input}\nコンテキスト: {context}"
        response = generator(prompt, max_length=100)
        
        return jsonify(response[0]['generated_text'])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)