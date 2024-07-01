document.addEventListener("DOMContentLoaded", function() {
  // Function to handle button click
  function handleButtonClick() {
    // Play button click sound
    var audio = document.getElementById('buttonAudio');
    audio.play();

    // Hide the button and show loading screen
    document.getElementById('customButton').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';

    // Simulate a delay (3 seconds in this case) before redirecting
    setTimeout(function() {
      window.location.href = "index.html"; // Replace with your desired URL
    }, 6000); // Adjust delay time as needed
  }

  // Attach event listener to the button
  document.getElementById('customButton').addEventListener('click', handleButtonClick);
});
