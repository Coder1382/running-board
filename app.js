const board=document.querySelector('#board');
const SQNUM=600;
const colorset=['coral', 'lightgreen', 'cadetblue', 'yellow', 'violet']

for (i=0; i<SQNUM; i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', ()=>{
        setcolor(square)
    })
    square.addEventListener('mouseleave', ()=>{
        removecolor(square)
    })
    board.append(square);
}
function setcolor(e){
    const color=getcolor()
    e.style.backgroundColor=color;
    e.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}
function removecolor(e){
    e.style.backgroundColor='#1d1d1d';
    e.style.boxShadow='0 0 2px #000'
}
function getcolor(){
    const index=Math.floor(Math.random()*colorset.length)
    return colorset[index]
}