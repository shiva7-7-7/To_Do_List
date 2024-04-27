let ulElement=document.getElementById('list');
let textbox = document.querySelector('#inputBox');
let totalLI=0;
textbox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        createListItem(textbox.value); 
    }
});
let createListItem=(textvalue)=>{
    let listItem=document.createElement('li');
    let h4Element=document.createElement('h4');
    h4Element.textContent=textvalue;
    let checkedBTn=document.createElement('p');
    checkedBTn.classList.add('checked');
    let removeBTn=document.createElement('div');
    removeBTn.classList.add('remove');
    removeElement(listItem,removeBTn)
    doneTask(listItem,checkedBTn);
    listItem.appendChild(checkedBTn);
    listItem.appendChild(h4Element);
    listItem.appendChild(removeBTn);
    ulElement.appendChild(listItem)
    totalLI++;
    totalCountFunc();
}

const removeElement=function(listItem,removeBTn){
    removeBTn.addEventListener('click',()=>{
        ulElement.removeChild(listItem);
        totalLI--;
        totalCountFunc();    
    })
}

const doneTask = function(listItem, checkedBTn) {
    listItem.addEventListener('click', () => {
        checkedBTn.style.backgroundColor = 'green';
        listItem.style.opacity = 0.5;
    });
};

const totalCountFunc=()=>{
    let total=document.getElementById('total');
    total.innerHTML=`Total count ${totalLI}`;
}
