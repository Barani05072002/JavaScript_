const canvas = document.querySelector('canvas')
const keys = document.querySelector('.keys')
const ctx = canvas.getContext('2d');
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const qus = document.querySelector('.qus')
const word = document.querySelector('.word')
const arr = [rleg,lleg,rHand,lHand,body,face,thred]
const end = document.querySelector('.result')
end.childNodes[1].addEventListener('click',retryfn)
let retry = '<i class="fa-solid fa-rotate-right"></i>'

let index;
let toWin;
let toLose;
const questions = [
    {animal:'LION'},
    {bird:'HEN'},
    {insect:'ANT'},
    {mobile:'OPPO'},
    {game:'HANGMAN'}]
ask()
function ask(){
    index = Math.floor(Math.random()*questions.length)
    let temp = questions[index]
    let h1 = document.createElement('h1')
    h1.innerHTML = Object.keys(temp)[0]
    qus.appendChild(h1)
    //answer
    Object.values(temp)[0].split('').forEach(ele => {
        b1 = document.createElement('p');
        b1.innerText = '_'
        word.appendChild(b1)
    })
}

function handleClick(e){
    const pArr = document.querySelectorAll('.word p')
    temp = Object.values(questions[index])[0]
    const {nodeName,textContent} = e.target;
    if(nodeName === 'BUTTON')
    {   
        if(temp.includes(textContent))
        {
            for(let i=0;i<temp.length;i++){
                if(temp[i]===textContent){
                    pArr[i].innerHTML = temp[i]
                    toWin++
                }
            }
        }
        else{
            toLose--
            run = arr[toLose]
            run()
        }
    }
    check()
}
function retryfn(e) {
    const{nodeName,textContent} = e.target;
    console.log(nodeName,textContent);
}
function check(){
    console.log('from check function')
    console.log(toWin)
    console.log(toLose)
    if(toWin>=(Object.values(questions[index])[0].length-1)){
        console.log('you win')
        end.childNodes[1].childNodes[3].innerHTML = 'You win'
        end.style.display = 'block'
    }
    if(toLose===0){
        console.log('You lose')
        end.childNodes[1].childNodes[3].innerHTML = `You lose \nans:${Object.values(questions[index])}`
        end.style.display = 'block'
    }
}
function start(){
    baseDesign()
    toLose = 7
    toWin = -1
    alphabet.split('').forEach(ele => {
        b1 = document.createElement('button');
        b1.innerText = ele;
        keys.appendChild(b1)
    })
    keys.addEventListener('click',handleClick,false)
}
function thred(){
    ctx.beginPath();
    ctx.moveTo(360,100);
    ctx.lineTo(360,180);
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
}
function face(){
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.arc(360,215,35,0,2*Math.PI);
    ctx.stroke();
}
function body(){
    ctx.beginPath();
    ctx.moveTo(360,255);
    ctx.lineTo(360,370);
    ctx.lineWidth = 20;
    ctx.lineCap = 'square';
    ctx.stroke();
    
}
function lHand(){
    ctx.beginPath();
    ctx.arc(320,250,35,0,2.5);
    ctx.lineWidth=10;
    ctx.lineCap = 'round';
    ctx.stroke();
}
function rHand(){
    ctx.beginPath();
    ctx.arc(398,250,35,0.3,2.7);
    ctx.lineWidth=10;
    ctx.lineCap = 'round';
    ctx.stroke();
}
function lleg(){
    ctx.beginPath();
    ctx.moveTo(360,375);
    ctx.lineTo(300,430);
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.stroke();
}
function rleg(){
    ctx.beginPath();
    ctx.moveTo(360,375);
    ctx.lineTo(420,430);
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.stroke();
    
}
function baseDesign(){
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(75,500);
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75,100);
    ctx.lineTo(420,100);
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(75,170);
    ctx.lineTo(150,100);
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.stroke();
}
start()