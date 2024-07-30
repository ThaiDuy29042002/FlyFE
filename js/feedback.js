document.addEventListener("DOMContentLoaded", function() {
    const feedbackList = document.getElementById('feedback-list');
    const feedbackForm = document.getElementById('feedback-form');

    // Example feedbacks (this would normally come from a server)
    const feedbacks = [
        {name: 'John Doe', rating: 5, comments: 'Great product!'},
        {name: 'Jane Smith', rating: 4, comments: 'Very good, but could be improved.'}
    ];

    // Function to display feedback
    function displayFeedback() {
        feedbackList.innerHTML = '';
        feedbacks.forEach(feedback => {
            const feedbackItem = document.createElement('div');
            feedbackItem.className = 'feedback-item';
            feedbackItem.innerHTML = `
                <strong>${feedback.name}</strong> (Rating: ${feedback.rating})<br>
                ${feedback.comments}
            `;
            feedbackList.appendChild(feedbackItem);
        });
    }

    // Display initial feedbacks
    displayFeedback();

    // Handle form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;
        const newFeedback = {name, rating, comments};
        
        // Add new feedback to the array and redisplay
        feedbacks.push(newFeedback);
        displayFeedback();

        // Clear the form
        feedbackForm.reset();
    });
});