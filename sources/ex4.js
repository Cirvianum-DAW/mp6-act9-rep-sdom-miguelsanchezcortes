const divList = document.getElementById('list-app');
const inputText = document.createElement('input');
divList.appendChild(inputText)
const button = document.createElement('button');
button.innerHTML = "submit";
divList.appendChild(button);

const listElements = document.createElement('ul');
divList.appendChild(listElements);

button.addEventListener("click", createElement);

function createElement(){
    const element = document.createElement('li');
    listElements.appendChild(element);
    element.innerHTML = inputText.value;
    listElements.appendChild(element);

    element.addEventListener('click',function(){
        console.log(element.innerHTML)
        element.innerHTML = inputText.value;
    });
    
}

