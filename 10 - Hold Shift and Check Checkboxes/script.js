// console.log('test');
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

function handleCheck(e) {
  // check if shift key down
  // and check that they are checking it
  let inBetween = false;
  if (e.shiftKey === true && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach(checkBox => {
      if (checkBox === this || checkBox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkBox.checked = true;
      }

    })
  }

  lastChecked = this // ref to the currentTarget
}

let lastChecked;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck)
})

