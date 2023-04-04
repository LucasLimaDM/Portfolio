let i = 0;



liveType('#titulo-primario')

function liveType(selector){
    element = document.querySelector(selector);
    const text = element.innerText;
    console.log(text)
    element.innerText = '';
    console.log(element)
    letterWrite(selector, i, text)
    
    
}


function letterWrite(selector, i, text) {

    if( i <= text.length){
        document.querySelector(selector).innerText += text.charAt(i);
        i++
        console.log(i)
        setTimeout(letterWrite,120, selector, i, text)
    } 
    
}