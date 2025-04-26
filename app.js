let inp = document.querySelector('input');
let textDisplay = document.querySelector('#displayText');
inp.addEventListener("input",(event)=>{
    console.log(inp.value);
    textDisplay.innerText=inp.value;
})