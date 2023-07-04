const textEl=document.getElementById('text')
const speedEl=document.getElementById('speed')

const text='Welcome to JS ...'

let index=1
let speed=300/speedEl.value

write()

function write(){
    textEl.innerText=text.slice(0,index)
    index++
    if(index>text.length){
        index=1
    }
    setTimeout(write, speed)
}

speedEl.addEventListener('input',(e)=>{
    speed=300/e.target.value
})