const form = document.querySelector('form')
const inputs = document.querySelectorAll('.formInput')
const submitBtn = document.querySelector('.submitBtn')

// console.log(inputs);
console.log(inputs[0].nextElementSibling.nextElementSibling);

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    for(let i = 0;i < inputs.length;i++){
        if(inputs[i].value == ''){
            inputs[i].nextElementSibling.style.display = 'flex'
            inputs[i].nextElementSibling.nextElementSibling.style.display = 'flex'
        }
        else{
            inputs[i].nextElementSibling.style.display = 'none'
            inputs[i].nextElementSibling.nextElementSibling.style.display = 'none'
        }
    }
    
    console.log(inputs[3].value.length);
})