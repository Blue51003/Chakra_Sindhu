const input1 = document.getElementById('mainmc');
const input2 = document.getElementById('brake');

input1.addEventListener('change', function() {
  if (this.checked && input2.checked) {
    window.alert('Error: Brake is ON');
    input1.checked = false;
  }
});

input2.addEventListener('change', function() {
  if (this.checked && input1.checked) {
    window.alert('Error: Main M/C already ON');
    input2.checked = false;
  }
});
