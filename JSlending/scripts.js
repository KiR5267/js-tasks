document.querySelector('html').setAttribute('lang', 'en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);


let name1 = document.createElement('meta');
name1.setAttribute('name', 'author',
    'content', 'kirill maslov');
document.head.appendChild(name1);


let title = document.createElement('title');
title.innerHTML = 'DOM';
document.head.appendChild(title);



let links = document.createElement('link');
links.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Piazzolla:wght@100&display=swap" rel="stylesheet');
links.setAttribute('rel', 'stylesheet');
document.head.appendChild(links);


let links1 = document.createElement('link');
links1.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Piazzolla:wght@100&display=swap" rel="stylesheet');
links1.setAttribute('rel', 'stylesheet');
document.head.appendChild(links1);


let links2 = document.createElement('link');
links2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Piazzolla:wght@100&display=swap" rel="stylesheet');
links2.setAttribute('rel', 'stylesheet');
document.head.appendChild(links2);





//document.hody.appendChild('style');

let bigh1 = document.createElement('h1');
bigh1.innerHTML = 'Choose Your Option';
document.body.appendChild(bigh1);


let but1 = document.createElement('p');
but1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
document.body.appendChild(but1);

let cont = document.createElement('div');
cont.classList.add('big_block');
document.body.appendChild(cont);


let main1 = document.createElement('div');
main1.classList.add('square1');
cont.appendChild(main1);


//let free = document.createElement('h3');
//free.innerHTML = 'FREELANCER';
//free.classList.add('h3');
//main1.appendChild('h3');


let hp2 = document.createElement('h1');
hp1.innerHTML = 'Initially designed to';
main1.appendChild(h1);


let but2 = document.createAttribute('p');
but2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
main1.appendChild(but2);

let button1 = document.createElement('button');
button1.classList.add('button');
main1.appendChild('button1');


let div2 = document.createElement('div');
div2.innerHTML = 'START HERE';
div2.classList.add('div2_button');
button1.appendChild(div2);


let main2 = document.createElement('div');
main2.classList.add('square2');
cont.appendChild(main2);




let studio = document.createElement('h3');
studio.innerHTML = 'STUDIO';
studio.classList.add('studio');
main2.appendChild(studio);


let hp2_clones = document.createElement('h1');
hp2_clones.innerHTML = 'Initially designed to';
hp2_clones.classList.add('hp2_clones')
main2.appendChild(hp2_clones);


let but2_clones = document.createElement('p');
but2_clones.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
but2_clones.classList.add('but2_clones');
main2.appendChild(but2_clones);


let button2 = document.createElement('button');
button2.classList.add('button1');
main2.appendChild(button1);



let div3 = document.createElement('div');
div3.innerHTML = 'START HERE';
div3.classList.add('div3_button');
button2.appendChild(div3);



let style = document.createElement('style');
style.innerHTML = `

h1 {
    font-family: 'Arvo', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 45px;
    text-align: center;
    color: #212121;
    margin-top: 10%;
}


p {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #9FA3A7;
}
.big_block {
    display: flex;
    justify-content: center;
    padding: 5%;
}
.square1 {
    border: 1px solid #E8E9ED;
    text-align: center;
    padding: 5% 10%;
    border-radius: 10px 0 0 10px;
}
.square1 .h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2px;
    color: #9FA3A7;
}
.button {
    width: 145px;
    height: 45px;
    left: 14.5px;
    top: 8px;
    border-radius: 30px;
    border: 3px solid #FFC80A;  
    background: white;
    margin-top: 55px;
}
.div2_button {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3px;
    color: #212121;
}
.quare2 {
    background: #8F75BE;
    text-align: center;
    padding: 5% 10%;
    border-radius: 0 10px 10px 0;
}
.studio {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3px;
    color: #FFC80A;
}
.h1Clone {
    font-family: Arvo;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 45px;
         
    color: #FFFFFF;
     
}
.p2Clone {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    
    color: #FFFFFF;
}
.button1 {
    width: 145px;
    height: 45px;
    left: 14.5px;
    top: 8px;
    border-radius: 30px;
    border: 3px solid #FFC80A;  
    background: #8F75BE;
    margin-top: 55px;
}
.div3_button {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3px;
    color: #FFFFFF;
}


`;