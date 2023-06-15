function HealthBar(progression, end, length) {
    let color = "";
    if (progression <= end / 5) {
      color = "red";
    } else if (progression <= end / 2) {
      color = "yellow";
    } else {
      color = "green";
    }
  
    let progressBar = "";
    const fullBar = "▓";
    const emptyBar = "░";
    const percentage = (progression / end) * 100;
  
    for (let i = 0; i < length; i++) {
      const forPercentage = (i / length) * 100;
      if (forPercentage < percentage) {
        progressBar += fullBar;
      } else {
        progressBar += emptyBar;
      }
    }
    return `<span style="color: ${color};">${progressBar}</span>`;
  }
  
function updateHealthBars() {
    const p1healthTMP = parseInt(document.getElementById('input1').value);
    const p2healthTMP = parseInt(document.getElementById('input2').value);
  
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = HealthBar(p1healthTMP, 100, 40);
    const result2El = document.getElementById("result2");
    result2El.innerHTML = HealthBar(p2healthTMP, 100, 40);
  }
  
document.addEventListener("DOMContentLoaded", function() {
    updateHealthBars();

    const input1El = document.getElementById('input1');
    const input2El = document.getElementById('input2');

    input1El.addEventListener('input', updateHealthBars);
    input2El.addEventListener('input', updateHealthBars);
});