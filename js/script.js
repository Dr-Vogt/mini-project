function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
    let list = $('#list');
    list.append(li);    
    }

    function crossOut() {
        li.addClass('strike');
    }

    li.on('dblclick', crossOut);








}