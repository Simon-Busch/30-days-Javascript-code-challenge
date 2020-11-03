const input = document.querySelectorAll('.controls input');
// return a NodeList ( not an array )

function handleUpdate () {
  // console.log(this.value);
  // console.log(this.dataset); // return everything which as "data-" on that element
  const suffix = this.dataset.sizing || ''; // color input doesn't have it, ||"" return nothing instead of undefined

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
};

input.forEach(input => input.addEventListener('change', handleUpdate));
input.forEach(input => input.addEventListener('mousemove', handleUpdate));