let score = 0;

const buttons = document.querySelectorAll(".point-button"); // this gets the button inputs

const forms = [
  document.getElementById('input-form1'),//0
  document.getElementById('input-form2'),//1
  document.getElementById('input-form3'),//2
  document.getElementById('input-form4'),//3
  document.getElementById('input-form5'),//4
  document.getElementById('input-form6'),//5
  document.getElementById('input-form7'),//6
  document.getElementById('input-form8'),//7
  document.getElementById('input-form9'),//8
  document.getElementById('input-form10'),//9
  document.getElementById('input-form11'),//10
  document.getElementById('input-form12'),//11
  document.getElementById('input-form13'),//12
  document.getElementById('input-form14'),//13
  document.getElementById('input-form15'),//14
  document.getElementById('input-form16'),//15
  document.getElementById('input-form17'),//16
  document.getElementById('input-form18'),//17
  document.getElementById('input-form19'),//18
  document.getElementById('input-form20'),//19
  document.getElementById('input-form21'),//20
  document.getElementById('input-form22'),//21
  document.getElementById('input-form23')
]; // this gets the forms 
const inputs = [
  document.getElementById('input3'),//0
  [document.getElementById('input4'),
   document.getElementById('input5'),
   document.getElementById('input6')], //1
  document.getElementById('input7'),//2
  document.getElementById('input8'),//3
  document.getElementById('input9'),//4
  document.getElementById('input10'),//5
  document.getElementById('input11'),//6
  document.getElementById('input12'),//7
  document.getElementById('input13'),//8
  document.getElementById('input14'),//9
  document.getElementById('input15'),//10
  document.getElementById('input16'),//11
  document.getElementById('input17'),//12
  document.getElementById('input18'),//13
  document.getElementById('input19'),//14
  document.getElementById('input20'),//15
  document.getElementById('input21'),//16
  document.getElementById('input22'),//17
  document.getElementById('input23'),//18
  [document.getElementById('input24'),
   document.getElementById('input25')],//19
  [document.getElementById('input26'),
   document.getElementById('input27')],//20
  document.getElementById('input28'),//21
  document.getElementById('input29')
]; // this gets the inputs 
const resultEl = document.getElementById('result'); // this lets me create a score value to print

forms.forEach((form, index) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // this stops the page from restarting
    handleFormSubmit(index);
  });
});

function handleFormSubmit(index) {
  let userInput;
  if (index === 1 || index === 19 || index === 20) { // add to this section for any multiple answer box forms
    userInput = inputs[index].map(input => input.value.trim()).join(' ').toLowerCase(); // concatinates the multiple inputs and makes them lowercase
  } else {
    userInput = inputs[index].value.toLowerCase().trim(); // makes inputs lowercase
  }
  forms[index].querySelector("button[type='submit']").disabled = true; // disables submit button by default
  if (index === 0 && (userInput.trim() === 'http' || userInput.trim() === 'https')) {
    score += 1;
  } else if (index === 1 && userInput === 'confidentiality integrity availability') {
    score += 3
  } else if (index === 2 && userInput.trim() === 'pan') {
    score += 1;
  } else if (index === 3 && userInput.trim() === 'lan') {
    score += 1;
  } else if (index === 4 && userInput.trim() === 'man') {
    score += 1;
  } else if (index === 5 && (userInput.trim() === 'equality act'|| userInput.trim() === 'the equality act')) {
    score += 1;
  } else if (index === 6 && (userInput.trim() === 'social engineering'|| userInput.trim() === 'pharming'|| userInput.trim() === 'phishing')) {
    score += 1;
  } else if (index === 7 && (userInput.trim() === 'batch'|| userInput.trim() === 'batch operating system'|| userInput.trim() === 'batch os')) {
    score += 1;
  } else if (index === 8 && (userInput.trim() === 'tree'|| userInput.trim() === 'tree topology')) {
    score += 1;
  } else if (index === 9 && userInput.trim() === 'emulation') {
    score += 1;
  } else if (index === 10 && (userInput.trim() === 'feasibility'|| userInput.trim() === 'feasibility of a project')) {
    score += 1;
  } else if (index === 11 && (userInput.trim() === 'data privacy'|| userInput.trim() === 'data privacy laws'|| userInput.trim() === 'data protection'|| userInput.trim() === 'data protection laws'|| userInput.trim() === 'data protection act')) {
    score += 1;
  } else if (index === 12 && (userInput.trim() === 'change'|| userInput.trim() === 'change in organisations'|| userInput.trim() === 'organisational change'|| userInput.trim() === 'change management')) {
    score += 1;
  } else if (index === 13 && userInput.trim() === 'application programming interface') {
    score += 1;
  } else if (index === 14 && userInput.trim() === 'application') {
    score += 1;
  } else if (index === 15 && userInput.trim() === 'transport') {
    score += 1;
  } else if (index === 16 && userInput.trim() === 'internet') {
    score += 1;
  } else if (index === 17 && (userInput === 'network access'|| userInput.trim() === 'network link'|| userInput.trim() === 'network')) {
    score += 1
  } else if (index === 18 && userInput.trim() === 'network time protocol') {
    score += 1;
  } else if (index === 19 && userInput.trim() === 'participant observation non-participant observation'||userInput.trim() === 'non-participant observation participant observation') {
    score += 1;
  } else if (index === 20 && userInput.trim() === 'nas san') {
    score += 1;
    score += 1;
  } else if (index === 21 && userInput.trim() === 'raid 1'||userInput.trim() === '1') {
    score += 1;
  } else if (index === 22 && userInput.trim() === 'raid 0'||userInput.trim() === '0') {
    score += 1;
  } else {
    score -= 1;
    forms[index].querySelector("button[type='submit']").disabled = false; // re-enable submit button if answer was incorrect
  }
  updateScore();
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);
    score += points; // changes the score by the value tied to the button
    updateScore();
    button.disabled = true;
  });
});

function updateScore() {
  resultEl.innerText = `Congratulations! You scored ${score}/34 points.`;
}


var submitButtons = document.querySelectorAll('button[type="submit"]');
  
  // Add click event listener to each submit button
  submitButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Add a CSS class to the button
      this.classList.add('clicked');
    });
  });