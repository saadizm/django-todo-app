document.addEventListener("DOMContentLoaded", function(){
    console.log("Document is loading..");

    const logout = document.getElementById("account-logout");
    logout.addEventListener('click', function(event){

        event.preventDefault()

        const confirmed = confirm("Are you sure you want to logout?");

        if (confirmed){
            window.location.href = logout.href
        } else {
            console.log("User did not logout..")
        }

    });

});