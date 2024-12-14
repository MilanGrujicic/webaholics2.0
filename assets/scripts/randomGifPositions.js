document.addEventListener("DOMContentLoaded", function() {
    // Function to generate random number within a given range
    function getRandomPosition(max) {
        return Math.floor(Math.random() * max);
    }

    // Select all random GIF divs
    const gifs = document.querySelectorAll('.random-gif');
    
    // Get the container element
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    gifs.forEach(gif => {
        let randomX, randomY;

        // Get the max width and height for positioning (window size)
        const maxWidth = window.innerWidth - gif.offsetWidth;
        const maxHeight = window.innerHeight - gif.offsetHeight;

        // Loop to ensure the GIF is outside the container boundaries
        do {
            randomX = getRandomPosition(maxWidth);
            randomY = getRandomPosition(maxHeight);
        } while (
            randomX > containerRect.left && randomX < containerRect.right &&
            randomY > containerRect.top && randomY < containerRect.bottom
        );

        // Apply random position
        gif.style.position = 'absolute';
        gif.style.left = randomX + 'px';
        gif.style.top = randomY + 'px';
    });
});
