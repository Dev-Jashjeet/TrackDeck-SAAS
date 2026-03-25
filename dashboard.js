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
let sideBarBtn = document.querySelector(".sidebar");
let sideBarCont = document.querySelector(".sidebar-container");
let sideCancel = document.querySelector(".cancel-logo");
let addContainer = document.querySelector(".sidebar-add-cont");
let bodyContainer = document.querySelector(".body-container");
let sideBarClick = document.querySelectorAll(".sidebar-home"); // SideBar Home logo and button access
let sideBarMode = document.querySelectorAll(".sidebar-mode");
let mode = "light";
// Side-bar Button Hover
sideBarBtn.addEventListener('mouseenter', () => {
    sideBarBtn.style.color = "#E0E6ED";
    sideBarCont.style.width = "78px";
    return;
});
sideBarCont.addEventListener('mouseenter', () => {
    sideBarBtn.style.color = "#E0E6ED";
    if (sideBarCont.style.width !== "270px") {
        sideBarCont.style.width = "78px";
    }
    ;
    return;
});
sideBarCont.addEventListener('mouseleave', () => {
    if (sideBarCont.style.width === "78px") {
        sideBarBtn.style.color = "#1a2530";
        sideBarCont.style.width = "0px";
    }
    ;
    return;
});
// Side-bar Button click
sideBarBtn.addEventListener('click', () => {
    sideBarBtn.style.color = "#E0E6ED";
    sideBarCont.style.width = "270px";
    document.body.style.overflow = "hidden";
    addContainer.style.display = "flex";
    sideBarBtn.style.display = "none";
    return;
});
sideCancel.addEventListener('click', () => {
    sideBarCont.style.width = "0px";
    document.body.style.overflow = "auto";
    setTimeout(() => {
        addContainer.style.display = "none";
        sideBarBtn.style.color = "#1a2530";
        sideBarBtn.style.display = "flex";
        return;
    }, 300);
    return;
});
// Side-Bar button function closing
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
// SideBar Buttons Section Starts
sideBarClick[0].addEventListener('click', () => {
    window.location.assign("dashboard.html");
    return;
});
sideBarClick[1].addEventListener('click', () => {
    window.location.assign("dashboard.html");
    return;
});
sideBarMode[0].addEventListener('click', () => {
    if (mode === "light") {
        bodyContainer.style.backgroundColor = "black";
        mode = "dark";
    }
    else {
        bodyContainer.style.backgroundColor = "#F4F6F9";
        mode = "light";
    }
    return;
});
sideBarMode[1].addEventListener('click', () => {
    if (mode === "light") {
        bodyContainer.style.backgroundColor = "black";
        mode = "dark";
    }
    else {
        bodyContainer.style.backgroundColor = "#F4F6F9";
        mode = "light";
    }
    return;
});
export {};
// Done and Dusted
