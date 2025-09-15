document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById('todoForm');
    const todoTitle = document.getElementById("title");
    const todoDescription = document.getElementById("description")
    const title_error = document.getElementById("title-error");
    const description_error = document.getElementById("description-error")


    todoTitle.addEventListener('input', function(){
        title_error.classList.remove("title-error");
        title_error.textContent = "";
    });

    todoDescription.addEventListener("input", function(){
        //

    });

    form.addEventListener("submit", function(event){
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const options = document.getElementsByName("option_group");

        

        if (title.trim() === ""){
            event.preventDefault();
            console.log("title is empty..");
            title_error.classList.add("title-error");
            title_error.textContent = "*Title cannot be empty.";
            return; 
        }

        if (description.trim() === ""){
            event.preventDefault();
            console.log("description is empty..")
            description_error.classList.add("description-error")
            description_error.textContent = "Description cannot be empty."
    
            return;
        }

        let isCompeltedSelected = false;
        for (let option of options){
            if (option.checked){
                isCompelted = true;
                break;
            }
        }

        if (!isCompeltedSelected){
            event.preventDefault();
            alert("Select whether a task is completed or not..");
        }

    });


});

