let history = [];

// Simulated LLM responses
function getAnswer() {
    const question = document.getElementById("question").value;

    if (!question) return;

    // Example answer (replace later with API)
    let answer = `
        LIME is an <span class="term" onclick="explain('Explainable AI')">Explainable AI</span> 
        technique that provides <span class="term" onclick="explain('Interpretable')">interpretable</span> 
        explanations for <span class="term" onclick="explain('Machine Learning Models')">machine learning models</span>.
    `;

    document.getElementById("answerBox").innerHTML = answer;
    document.getElementById("explanationBox").classList.add("hidden");
}

// Explanation database (can be replaced with API)
const explanations = {
    "Explainable AI": `
        Explainable AI is a field that helps humans understand how AI systems make decisions.
        It improves trust and transparency.
        <br><br>
        Related: 
        <span class="term" onclick="explain('AI Models')">AI Models</span>
    `,

    "Interpretable": `
        Interpretable means something that is easy to understand and explain.
    `,

    "Machine Learning Models": `
        Machine learning models are systems trained on data to make predictions.
        <br><br>
        Related:
        <span class="term" onclick="explain('Training Data')">Training Data</span>
    `,

    "AI Models": `
        AI models are programs designed to mimic human intelligence.
    `,

    "Training Data": `
        Training data is the dataset used to teach a machine learning model.
    `
};

// When user clicks a term
function explain(term) {

    // Add to history
    history.push(term);
    updateHistory();

    const explanationBox = document.getElementById("explanationBox");

    explanationBox.innerHTML = `<b>${term}</b><br><br>${explanations[term] || "No explanation available."}`;
    explanationBox.classList.remove("hidden");
}

// Update history UI
function updateHistory() {
    const historyBox = document.getElementById("historyBox");
    const historyList = document.getElementById("historyList");

    historyBox.classList.remove("hidden");

    historyList.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
} 