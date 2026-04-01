let refLoader = document.querySelector("#loadingScreen");
function refreshLoader() {
    setTimeout(() => {
        refLoader.style.display = "none";
    }, 1500);
}
let userData = [
    { userID: "sxz123@in", password: "123" },
    { userID: "hsj123@in", password: "352" },
    { userID: "pop12@gin", password: "837" },
    { userID: "jashjeet99@gmail.com", password: "000" },
];
let email = document.querySelector(".email");
let pass = document.querySelector(".password");
let button = document.querySelector("button");
let i;
button.addEventListener("click", (e) => {
    if (email.value !== "" && pass.value !== "") {
        e.preventDefault();
        refLoader.style.display = "flex";
        setTimeout(() => {
            for (i = 0; i < userData.length; i++) {
                if (userData[i].userID === email.value &&
                    userData[i].password === pass.value) {
                    refLoader.style.display = "none";
                    window.location.assign("dashboard.html");
                    break;
                }
            }
            if (i === userData.length) {
                refLoader.style.display = "none";
                email.value = "";
                pass.value = "";
                alert("User Information is not available");
            }
        }, 2000);
    }
    else {
        alert("Please fill the details");
    }
});
//Done and Dusted
