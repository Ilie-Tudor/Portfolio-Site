let phoneBtn = document.getElementById('Phone')
let emailBtn = document.getElementById('Email')



phoneBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(phoneBtn.innerHTML);
    alert("The phone number has been copied to clipboard")
})
emailBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(emailBtn.innerHTML);
    alert("The email has been copied to clipboard")
})