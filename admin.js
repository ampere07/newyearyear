function displayClicks() {
    const clicksList = document.getElementById('clicksList');
    const clicks = JSON.parse(localStorage.getItem('yesClicks') || '[]');
    
    clicksList.innerHTML = clicks.length === 0 
        ? '<p>No clicks yet</p>'
        : clicks.map(click => `
            <div class="click-entry">
                Someone clicked Yes on: ${new Date(click.timestamp).toLocaleString()}
            </div>
        `).join('');
}

// Update the display every 5 seconds
displayClicks();
setInterval(displayClicks, 5000);