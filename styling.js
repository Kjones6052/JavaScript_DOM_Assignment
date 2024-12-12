// JavaScript file containing the code that completes all tasks under section 'Styling with JavaScript'.

// getting random color for change of background with color button
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Task 2 and 3: using button click to change background color of elements' container id 'box'
function handleColorButton() {
    const element = document.getElementById('box');
    element.style.backgroundColor = getRandomColor();
}

// Task 3: adding more stylings for user interactions on web page
function handleMouseOver() {
    const element = document.getElementById('div1');
    element.style.backgroundColor = "blue";
}

function handleMouseOut() {
    const element = document.getElementById('div1');
    element.style.backgroundColor = "white";
}

