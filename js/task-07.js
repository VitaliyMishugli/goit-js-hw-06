const range = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

range.addEventListener('input', ()=>{
  output.style.fontSize = `${range.value}px`;
})