const search=document.getElementById("search")
const result=document.getElementById("result")
const list_items=[]

getUsers()

search.addEventListener('input',(e)=>filterUsers(e.target.value))

async function getUsers(){
    const res=await fetch("https://randomuser.me/api?results=25")
    const {results}=await res.json() 
    result.innerHTML=""

    results. forEach(user=>{
        const li=document.createElement("li")
        list_items.push(li)

        li.innerHTML=` <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div> `
        result.appendChild(li)
    })
}

function filterUsers(searchData){
    list_items.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchData.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}