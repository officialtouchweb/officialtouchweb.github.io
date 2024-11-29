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

function gotoweb(website) {
    if (website == "Social Blog"){
        window.location.replace("/socialblog/socialBlog.html");
    }
}