let clickCount = 0;

document.getElementById('scareButton').addEventListener('click', function() {
    clickCount++; // Increment click count each time the button is clicked

    this.style.fontSize = (16 + clickCount * 3) + 'px';
    this.style.padding = (10 + clickCount * 5) + 'px';

    if (clickCount === 5) { // Check if the button has been clicked three times
        document.getElementById('content').style.display = 'none';
        const jumpScareDiv = document.getElementById('jumpScare');
        jumpScareDiv.classList.remove('hidden');

        const audio = document.getElementById('scareSound');
        audio.volume = 1.0;
        audio.play();

        setTimeout(function() {
            jumpScareDiv.classList.add('hidden');
            document.getElementById('content').style.display = 'block';
            clickCount = 0; // Reset the click count after the scare
        }, 4000); // The jump scare will last for 4 seconds
    }
});

