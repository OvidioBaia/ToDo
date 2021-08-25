var form = document.getElementById('form');
var field = document.getElementById('new-task');
var listItem = document.getElementById('list');
const addItemToList = (item) => {
        /* console.log(field.value);
            var y = node.innerHTML = `<input type='checkbox'>`
            + `<label>${field.value}</lable>`
            var textnode = document.createTextNode(field.value);
            node.appendChild(textnode);
            document.getElementById("demo").appendChild(node);
            x.innerHTML = `<input type='checkbox'>`
            + `<label>${field.value}</lable>`
            list.innerText = node
            list.appendChild(node);
            document.querySelector('ul').appendChild(node);
            field.value = ''
            list.appendChild(node).focus();
        */ 
    //var inputItem = this.inputItem;
    var item = document.createElement("li");
    item.innerHTML = `<input type='checkbox'>`+ `<label>${field.value}</lable>`
    listItem.appendChild(item);
    field.value = ''
}
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if(field.value)
        addItemToList(field.value)
});

