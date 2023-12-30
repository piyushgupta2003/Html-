// Sample reviews and suggestions
const reviews = [
    { name: 'Piyush', review: 'Great website!' },
    { name: 'Ayush', review: 'I love the content.' },
];

const suggestions = [
    { query: 'How to use feature of SKILL SHARP?', suggestion: 'You can find a tutorial in our documentation section.' },
    { query: 'Any upcoming events?', suggestion: 'Check our events page for the latest updates.' },
];

// Function to display reviews
function displayReviews() {
    const reviewsSection = document.getElementById('reviews');
    reviewsSection.innerHTML = '<h2>User Reviews</h2>';

    reviews.forEach((review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.innerHTML = `<strong>${review.name}:</strong> ${review.review}`;
        reviewsSection.appendChild(reviewDiv);
    });
}

// Function to submit user queries
function submitQuery() {
    const userName = document.getElementById('userName').value;
    const userQuery = document.getElementById('userQuery').value;

    // Perform actions with user query (e.g., send to server, process, etc.)

    // Display a confirmation message
    alert(`Query submitted!\nName: ${userName}\nQuery: ${userQuery}`);

    // Clear the form
    document.getElementById('queryForm').reset();
}

// Function to display suggestions
function displaySuggestions() {
    const suggestionsSection = document.getElementById('suggestions');
    suggestionsSection.innerHTML = '<h2>Suggestions</h2>';

    suggestions.forEach((suggestion) => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.innerHTML = `<strong>Q: ${suggestion.query}</strong><br>Suggestion: ${suggestion.suggestion}`;
        suggestionsSection.appendChild(suggestionDiv);
    });
}

// Display initial content
displayReviews();
displaySuggestions();
