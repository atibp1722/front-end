const ratings=document.querySelectorAll('.rating')
const ratingsCont=document.querySelector('.ratings-container')
const send=document.querySelector('#send')
const panel=document.querySelector('#panel')

let sel_rating='Happy'

ratingsCont.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        remove_active()
        e.target.parentNode.classList.add('active')
        sel_rating=e.target.nextElementSibling.innerHTML
    }
})

send.addEventListener('click',(e)=>{
    panel.innerHTML=`<i class='fas fa-heart'></i>
                    <strong>Thank You<br></strong>
                    <strong>Your feedback ${sel_rating}</strong>
                    <p>Your feedback is highly appreicated, we hope to hear from you again</p>`
})

function remove_active(){
    for(let i=0; i<ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}