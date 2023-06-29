'use strict';

const images = [
    { 'id': '1', 'url':'./imagens/aurea.jpg!d' },
    { 'id': '2', 'url':'./imagens/ceu.jpg' },
    { 'id': '3', 'url':'./imagens/mato.jpeg' },
    { 'id': '4', 'url':'./imagens/lafo.jpg' },
    { 'id': '5', 'url':'./imagens/naturea.jpeg' },
    { 'id': '6', 'url':'./imagens/oi.jpg' },
    { 'id': '7', 'url':'./imagens/sol.jpg' },
    { 'id': '8', 'url':'./imagens/sakur.jpeg' },
    { 'id': '9', 'url':'./imagens/estrela.jpg' },
    { 'id': '10', 'url':'./imagens/verme.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);