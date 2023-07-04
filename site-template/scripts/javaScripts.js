//function for portfolio page
(function()
 {
    const buttons = document.querySelectorAll('.btn')
    const storeImg = document.querySelectorAll('.store-item')
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter= e.target.dataset.filter
            
            storeImg.forEach((item) => {
                if(filter==='all')
                {
                    item.style.display='block';
                }else
                {
                    if(item.classList.contains(filter))
                    {
                        item.style.display='block';
                    }else
                    {
                        item.style.display='none'
                    }
                }
            })
        })
    })
})();

//function for contact form
const inputs = document.querySelectorAll('.input')

function focusFunction()
{
    let parent = this.parentNode
    parent.classList.add('focus')
}

function blurFunction()
{
    let parent = this.parentNode
    if(this.value==""){
        parent.classList.remove('focus')
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunction);
    input.addEventListener('blur', blurFunction)
})

//video player
const videoPlayer = document.getElementById("videoPlayer")
const video = document.getElementById("video")

function closeVideo()
{
    videoPlayer.style.display='none'
}
