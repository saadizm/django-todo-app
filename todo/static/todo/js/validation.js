document.addEventListener("DOMContentLoaded", function(){

    console.log("Document is loaded...")

    const form = document.getElementById('todoForm');
    const todoTitle = document.getElementById("title");
    const todoDescription = document.getElementById("description");
    const todoOptions = document.getElementsByName("option_group");
    const todoDueDate = document.getElementById("dueDate");
    const todoPriority = document.getElementById("priority");
    const title_error = document.getElementById("title-error");
    const description_error = document.getElementById("description-error");
    const option_group_error = document.getElementById("option-group-error");
    const due_date_error = document.getElementById("due-date-error");
    const priority_error = document.getElementById("priority-error")

    todoTitle.addEventListener('input', function(){
        title_error.classList.remove("title-error");
        title_error.textContent = "";
    });

    todoDescription.addEventListener("input", function(){
        //
        description_error.classList.remove("description-error");
        description_error.textContent = "";

    });

    todoDueDate.addEventListener("change", function(){
        due_date_error.classList.remove("due-date-error");
        due_date_error.textContent = "";
    });

    todoPriority.addEventListener("change", function(){
        priority_error.classList.remove("priority-error");
        priority_error.textContent = "";

    });

    form.addEventListener("submit", function(event){
        
        console.log("Submitting data...")

        if (title.value.trim() === ""){
            event.preventDefault();
            title_error.classList.add("title-error");
            title_error.textContent = "*Title cannot be empty.";
        }

        if (description.value.trim() === ""){
            event.preventDefault();
            description_error.classList.add("description-error")
            description_error.textContent = "Description cannot be empty."
        }

        let isCompeltedSelected = false;
        for (let option of todoOptions){
            if (option.checked){
                isCompeltedSelected = true;
                break;
            }
        }

        if (!isCompeltedSelected){
            event.preventDefault();
            option_group_error.classList.add("option-group-error");
            option_group_error.textContent = "Select whether a task is completed or not.";

        }

        if (todoDueDate.value === ""){
            event.preventDefault();
            due_date_error.classList.add("due-date-error");
            due_date_error.textContent = "Kindly Select due date.";
            
        }

        if (todoPriority.value === ""){
            event.preventDefault();
            priority_error.classList.add("priority-error");
            priority_error.textContent = "Kindly Select Priority Level.";
        }

    });

    for (let option of todoOptions){
        option.addEventListener("change", function(){
            console.log("In change option group..");
            option_group_error.classList.remove("option-group-error");
            option_group_error.textContent = "";
        });
    }

});