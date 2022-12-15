let items = document.getElementsByClassName('item');
for(let item of items){
   item.addEventListener('click', function(event){
      event.target.parentNode.removeChild(event.target);
   })
}

document.getElementById('add-item').addEventListener('click',  function(){
   let listContainer = document.getElementById('list-container');

   let li = document.createElement('li');
   let text = document.createTextNode("Add New Items");
   listContainer.appendChild(li);
})