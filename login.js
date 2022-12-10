let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let userEmail = document.querySelector("#email_input").value;
    let userPassword = document.querySelector("#password_input").value;
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    let index = allUsers.findIndex(item => item.email == userEmail && item.password == userPassword);
    if(index == -1){
        alert("Пользователь не найден или не верный пороль!");
    }else{
        localStorage.setItem("currentUserEmail", userEmail);
        location.href = "catalog.html";
    }
});