const form = document.querySelector('form')
const inputs = document.querySelectorAll('.formInput')

function isEmpty(element){
    return element.value == ''
}
function validateInput(input){
    // if(isEmpty(input))
    console.log(isEmpty(input));
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInput(inputs[0])
})