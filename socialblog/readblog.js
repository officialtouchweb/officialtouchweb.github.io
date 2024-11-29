// Function to show the detailed description for the selected topic
function showDescription(topic) {
    // Hide all options and the search bar
    const optionsContainer = document.querySelector('.options-container');
    const searchBar = document.getElementById('search-bar');
    const topicDescription = document.getElementById('topic-description');
    const topicText = document.getElementById('topic-text');
    
    // Hide the options container and search bar
    optionsContainer.style.display = 'none';
    searchBar.style.display = 'none';
    
    // Show the topic description
    topicDescription.style.display = 'block';
    
    // Set the detailed text based on the selected topic
    if (topic === 'topic1') {
        topicText.innerHTML = "Here is the detailed description about Topic 1. It contains in-depth information about topic 1.";
    } else if (topic === 'topic2') {
        topicText.innerHTML = "Here is the detailed description about Topic 2. It contains in-depth information about topic 2.";
    } else if (topic === 'topic3') {
        topicText.innerHTML = "Here is the detailed description about Topic 3. It contains in-depth information about topic 3.";
    }
}


function filterTopics() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        const title = option.querySelector('h3').textContent.toLowerCase();
        
        if (title.includes(searchQuery)) {
            option.style.display = 'block';  // Show matching topics
        } else {
            option.style.display = 'none';  // Hide non-matching topics
        }
    });
}

// Function to show the description of the clicked topic
function showDescription(topicId) {
    const descriptionText = {
        topic1: 'Here is the detailed paragraph for Topic 1.',
        topic2: 'Here is the detailed paragraph for Topic 2.',
        topic3: 'Here is the detailed paragraph for Topic 3.'
    };
    
    const descriptionDiv = document.getElementById('topic-description');
    const topicText = document.getElementById('topic-text');
    
    topicText.textContent = descriptionText[topicId];
    descriptionDiv.classList.remove('hidden');
}

//toggle
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active'); // Toggle active class for menu
        overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // Show/Hide overlay
    });

    // Close menu if clicking outside of it
    overlay.addEventListener('click', () => {
       menu.classList.remove('active'); // Remove active class to hide menu
       overlay.style.display = 'none'; // Hide overlay
    });

    // Prevent clicks inside the menu from closing it
    menu.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from bubbling up to overlay
    });
});