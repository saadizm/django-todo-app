document.addEventListener("DOMContentLoaded", function(){
    console.log("Document is loading..");

    const model = document.getElementById("confirmModal");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    let targetHref = "";

    const logout = document.getElementById("account-logout");
    logout.addEventListener('click', function(event){
        event.preventDefault();
        targetHref = logout.href;
        model.style.display = "flex";
    });

    confirmYes.addEventListener("click", function(){
        window.location.href = targetHref;
    });

    confirmNo.addEventListener("click", function(){
        model.style.display = "none";
    });

});