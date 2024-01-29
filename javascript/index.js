const animatedText = document.getElementById('animated-text');
const textContent = "full Stack web developer!";

function animateText() {
  let index = 0;
  animatedText.textContent = ''; // Clear existing text

  function addChar() {
    if (index < textContent.length) {
      animatedText.textContent += textContent.charAt(index);
      animatedText.classList.add('char-animation');
      index++;
      setTimeout(addChar, 200); // Adjust the delay here (in milliseconds)
    }
  }

  addChar();
}
animateText(); // Start the animation
document.getElementById("text1").innerHTML="< "+"/";
document.getElementById("text2").innerHTML=">";

const button = document.getElementById('myButton');

// Add a click event listener to the button
function c() {
  // Code to execute when the button is clicked
// document.getElementById("link1").click();
};
c();