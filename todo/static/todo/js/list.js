document.addEventListener("DOMContentLoaded", function(){

    const button_deletes = document.getElementsByClassName("button-delete");

    for (let btn_delete of button_deletes){

        btn_delete.addEventListener('click', function(event){

            event.preventDefault()
    
            const confirmed = confirm("You are about to delete a Todo Item.");
    
            if (confirmed){
                window.location.href = btn_delete.href;
            } else {
                console.log("User is not deleting the item..")
            }
    
        });

    }

    

});