const fruitList = ['poma', 'plàtan', 'tomàquet'];

const list = document.querySelector('ul');

fruitList.forEach((fruita) =>{
    const li = document.createElement('li');
    li.innerHTML = fruita
    list.appendChild(li);
})