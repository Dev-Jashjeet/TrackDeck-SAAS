(function userloggedIn() {
    try {
        let headerEmail = document.querySelector(".heading-text");
        let homePageEmail = document.querySelector(".email-head");
        headerEmail.innerText = `Welcome, ${homePageEmail.innerText}`;
    }
    catch (e) {
        console.log(e);
    }
    let dtsBox = document.querySelector(".details-box");
    let span = document.createElement("span");
    span.innerText = `• User jashjeet99 logged in.`; //when user entered the page it shows in activity section..
    span.classList.add("details");
    dtsBox.append(span);
    let loader = document.querySelector(".loader-container");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
    return;
})();
let logoutbtn = document.querySelector(".button-logout");
logoutbtn.addEventListener("click", () => {
    window.location.replace("index.html"); // logout funct....
    return;
});
let homePageName = document.querySelector(".name-head");
let homePageEmail = document.querySelector(".email-head");
let formPageName = document.querySelector(".form-name");
let formPageEmail = document.querySelector(".form-email");
let formPage = document.querySelector(".edit_form-container");
let editProfilebtn = document.querySelector(".home-btn");
let updateProfilebtn = document.querySelector(".form-btn");
let homePic = document.querySelector(".profile-logo");
let cancel = document.querySelector(".notUpdate");
editProfilebtn.addEventListener('click', () => {
    formPage.style.display = "flex";
    formPageName.placeholder = homePageName.innerText;
    formPageEmail.placeholder = homePageEmail.innerText; // When user click edit profile
    return;
});
cancel.addEventListener('click', () => {
    formPage.style.display = "none";
    return;
});
updateProfilebtn.addEventListener('click', () => {
    if (formPageName.value === "" && formPageEmail.value === "") {
        homePageName.innerText = formPageName.placeholder;
        homePageEmail.innerText = formPageEmail.placeholder; // When user click update profile
    }
    if (formPageName.value !== "" && formPageEmail.value !== "") {
        homePageName.innerText = formPageName.value;
        homePageEmail.innerText = formPageEmail.value;
    }
    if (formPageName.value === "" && formPageEmail.value !== "") {
        homePageName.innerText = formPageName.placeholder;
        homePageEmail.innerText = formPageEmail.value;
    }
    if (formPageEmail.value === "" && formPageName.value !== "") {
        homePageEmail.innerText = formPageEmail.placeholder;
        homePageName.innerText = formPageName.value;
    }
    formPageName.value = "";
    formPageEmail.value = "";
    let headerEmail = document.querySelector(".heading-text");
    headerEmail.innerText = `Welcome, ${homePageEmail.innerText}`;
    let dtsBox = document.querySelector(".details-box");
    let span = document.createElement("span");
    span.innerText = `• Profile Updated.`;
    span.classList.add("details");
    dtsBox.append(span);
    formPage.style.display = "none";
    updateLoader();
    return;
});
function updateLoader() {
    let loader = document.querySelector(".loader-container");
    loader.style.display = "flex";
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
    return;
}
let photo = document.getElementById("edit-photo");
let phtoDisplay = document.querySelector(".edit-pic");
photo.addEventListener('change', () => {
    const file = photo.files?.[0];
    if (file) {
        phtoDisplay.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        homePic.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
    return;
});
export {};
// Done and Dusted
//# sourceMappingURL=dashboard.js.map