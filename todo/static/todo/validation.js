document.addEventListener("DOMContentLoaded", function(){

    console.log("Document is loaded...")

    const form = document.getElementById('todoForm');
    const todoTitle = document.getElementById("title");
    const todoDescription = document.getElementById("description")
    const todoOptions = document.getElementsByClassName("option_group");
    const title_error = document.getElementById("title-error");
    const description_error = document.getElementById("description-error");
    const option_group_error = document.getElementById("option-group-error");


    todoTitle.addEventListener('input', function(){
        title_error.classList.remove("title-error");
        title_error.textContent = "";
    });

    todoDescription.addEventListener("input", function(){
        //
        description_error.classList.remove("description-error");
        description_error.textContent = "";

    });

    form.addEventListener("submit", function(event){
        
        console.log("Submitting data...")

        if (title.value.trim() === ""){
            event.preventDefault();
            console.log("title is empty..");
            title_error.classList.add("title-error");
            title_error.textContent = "*Title cannot be empty.";
            return; 
        }

        if (description.value.trim() === ""){
            event.preventDefault();
            console.log("Description is empty..")
            description_error.classList.add("description-error")
            description_error.textContent = "Description cannot be empty."
    
            return;
        }

        let isCompeltedSelected = false;
        for (let option of todoOptions){
            if (option.checked){
                isCompelted = true;
                break;
            }
        }

        if (!isCompeltedSelected){
            event.preventDefault();
            option_group_error.classList.add("option-group-error");
            option_group_error.textContent = "Select whether a task is completed or not.";
            console.log("Select whether a task is completed or not.");

        }

    });

    for (let option of todoOptions){
        option.addEventListener("change", function(){
            option_group_error.classList.remove("option-group-error");
            option_group_error.textContent = "";
        });
    }


});

