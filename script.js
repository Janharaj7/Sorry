const forgiveBtn = document.getElementById('forgive-btn');
const notForgiveBtn = document.getElementById('not-forgive-btn');

forgiveBtn.addEventListener('click', () => {
    // Redirect to a separate page where you can set a beautiful song for Tapaswini
    window.location.href = "your-song-page.html"; // Replace with your actual URL
});
notForgiveBtn.addEventListener('click', () => {
    // Redirect to a separate page where you can set a beautiful song for Tapaswini
    window.location.href = "sorry-again.html"; // Replace with your actual URL
});

notForgiveBtn.addEventListener('mouseover', () => {
    // Rotate the button slightly instead of randomly changing position
    notForgiveBtn.style.transform = 'rotate(5deg)';
});

notForgiveBtn.addEventListener('mouseout', () => {
    notForgiveBtn.style.transform = 'rotate(0)';
});
