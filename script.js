//DOM SELECTION
//getElementById() --> element
const judul = document.getElementById('judul');
judul.style.color = ('red');
judul.style.backgroundColor = ('#ccc');
judul.innerHTML = ('Muhammad irsan');


// document.getElementsByTagName() -->HTML colecction
const p = document.getElementsByTagName('p');
for ( let i = 0; i<p.length; i++ ){
    p[i].style.backgroundColor = ('lightblue');
}

const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = ('50px');

//getElementsByClassName() -->HTML collection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = ('ini di ubah di javascript');


//document.querySelector() --> element
const p4 = document.querySelector('#b p');
p4.style.color = ('green');
p4.style.fontSize = ('30px');

const li2 = document.querySelector('li:nth-child(2)');
li2.style.backgroundColor = ('orange');
