const resultEl=document.getElementById('result')
const lengthEl=document.getElementById('length')
const upperCaseEl=document.getElementById('uppercase')
const lowerCaseEl=document.getElementById('lowercase')
const numbersEl=document.getElementById('numbers')
const symbolsEl=document.getElementById('symbols')
const generateEl=document.getElementById('generate')
const clipboardEl=document.getElementById('clipboard')

const randomFunction={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSpecialCharacters
}

clipboardEl.addEventListener('click',()=>{
    const textarea=document.createElement('textarea')
    const password=resultEl.innerText

    if (!password){
        return
    }else{
        navigator.clipboard.writeText(password)
        alert('Password added to clipboard')
    }
})

generateEl.addEventListener('click',()=>{
    const length= +lengthEl.value
    const hasLower=lowerCaseEl.checked
    const hasUpper=upperCaseEl.checked
    const hasNumber=numbersEl.checked
    const hasSymbol=symbolsEl.checked

    resultEl.innerText=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

function generatePassword(lower,upper,number,symbol,length){
    let genPassword=''
    const typesCount=lower+upper+number+symbol
    const types=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])
    
    if(typesCount==0){
        return ''
    }

    for(let i=0;i<length;i+=typesCount){
        types.forEach(type=>{
            const funcName=Object.keys(type)[0]
            genPassword+=randomFunction[funcName]()
        })
    }
    const finalPassword=genPassword.slice(0,length)
    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSpecialCharacters(){
    const symbols='!@#$%^&*()[]{}+;|/?.,'
    return symbols[Math.floor(Math.random()*symbols.length)]
}