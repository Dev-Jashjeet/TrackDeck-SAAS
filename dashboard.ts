(function userloggedIn(): void {
    try {
    let headerEmail = document.querySelector(".heading-text")! as HTMLBodyElement;
    let homePageEmail = document.querySelector(".email-head")! as HTMLInputElement;
    headerEmail.innerText = `Welcome, ${homePageEmail.innerText}`;
    
    }
    catch(e) {
        console.log(e);    
    }

    let dtsBox = document.querySelector(".details-box")! as HTMLBodyElement;
    let span = document.createElement("span");
    span.innerText = `• User jashjeet99 logged in.`;   //when user entered the page it shows in activity section..
    span.classList.add("details");
    dtsBox.append(span);

    let loader = document.querySelector(".loader-container")! as HTMLBodyElement;
    setTimeout((): void => {
        loader.style.display = "none";
    }, 1000);

    return; 
}) ();

let logoutbtn = document.querySelector(".button-logout")! as HTMLBodyElement;
logoutbtn.addEventListener("click", (): void => {
    window.location.replace("index.html");    // logout funct....
    return;
});

let homePageName = document.querySelector(".name-head")! as HTMLBodyElement;
let homePageEmail = document.querySelector(".email-head")! as HTMLBodyElement;
let formPageName = document.querySelector(".form-name")! as HTMLInputElement;
let formPageEmail = document.querySelector(".form-email")! as HTMLInputElement;
let formPage = document.querySelector(".edit_form-container")! as HTMLBodyElement;
let editProfilebtn = document.querySelector(".home-btn")! as HTMLBodyElement;
let updateProfilebtn = document.querySelector(".form-btn")! as HTMLBodyElement;
let homePic = document.querySelector(".profile-logo")! as HTMLBodyElement;
let cancel = document.querySelector(".notUpdate")! as HTMLBodyElement;
let sideBarBtn = document.querySelector(".sidebar")! as HTMLBodyElement;
let sideBarCont = document.querySelector(".sidebar-container")! as HTMLBodyElement;
let sideCancel = document.querySelector(".cancel-logo")! as HTMLBodyElement;
let addContainer = document.querySelector(".sidebar-add-cont")! as HTMLBodyElement;
let addSecbg = document.querySelector(".add-sec")! as HTMLDivElement;
let bodyContainer = document.querySelector(".body-container")! as HTMLBodyElement;
let ChartsBg = document.querySelectorAll(".bgColor")! ;
let headingDivBg = document.querySelectorAll(".hDBg")! ;
let headerBg = document.querySelectorAll(".hBg")! ;
let sideBarClick = document.querySelectorAll(".sidebar-home")! ; // SideBar Home logo and button access
let sideBarMode = document.querySelectorAll(".sidebar-mode")! ;  // SideBar Theme Mode button access

let mode: string = "light";

// Side-bar Button Hover
sideBarBtn.addEventListener('mouseenter', ():void => {
    sideBarBtn.style.color = "#E0E6ED";
        sideBarCont.style.width = "78px";
    return;
});
sideBarCont.addEventListener('mouseenter', ():void => {
    sideBarBtn.style.color = "#E0E6ED";
    if (sideBarCont.style.width !== "270px") {
        sideBarCont.style.width = "78px";
    };
    return;
});
sideBarCont.addEventListener('mouseleave', (): void => {
    if (sideBarCont.style.width === "78px") {
        sideBarBtn.style.color = "#1a2530";
        sideBarCont.style.width = "0px";
    };
    return;
});

// Side-bar Button click
sideBarBtn.addEventListener('click', (): void => {
    sideBarBtn.style.color = "#E0E6ED";
    sideBarCont.style.width = "270px";
    document.body.style.overflow = "hidden";
    addContainer.style.display = "flex";
    sideBarBtn.style.display = "none";
    return;
});
sideCancel.addEventListener('click', (): void => {
    sideBarCont.style.width = "0px";
    document.body.style.overflow = "auto";
    setTimeout((): void => {
        addContainer.style.display = "none";
        sideBarBtn.style.color = "#1a2530";
        sideBarBtn.style.display = "flex";
        return;
    }, 300);
    return;
});

// Side-Bar button function closing

editProfilebtn.addEventListener('click', (): void => {
    formPage.style.display = "flex";
    formPageName.placeholder=homePageName.innerText;
    formPageEmail.placeholder=homePageEmail.innerText; // When user click edit profile
    return;
});

cancel.addEventListener('click', (): void => {
    formPage.style.display = "none";
    return;
});

updateProfilebtn.addEventListener('click', (): void => {
    if(formPageName.value ==="" && formPageEmail.value ==="") {
        homePageName.innerText = formPageName.placeholder;
        homePageEmail.innerText = formPageEmail.placeholder;  // When user click update profile
    }
    if(formPageName.value !== "" && formPageEmail.value !== "") {
        homePageName.innerText = formPageName.value;
        homePageEmail.innerText = formPageEmail.value;
    }
    if(formPageName.value === "" && formPageEmail.value !== "") {
        homePageName.innerText = formPageName.placeholder;
        homePageEmail.innerText = formPageEmail.value;
    }
    if(formPageEmail.value === "" && formPageName.value !== "") {
        homePageEmail.innerText = formPageEmail.placeholder;
        homePageName.innerText = formPageName.value;
    }

    formPageName.value = "";
    formPageEmail.value = "";

    let headerEmail = document.querySelector(".heading-text")! as HTMLBodyElement;
    headerEmail.innerText = `Welcome, ${homePageEmail.innerText}`;

    let dtsBox = document.querySelector(".details-box")! as HTMLBodyElement;
    let span = document.createElement("span");
    span.innerText = `• Profile Updated.`;
    span.classList.add("details");
    dtsBox.append(span);
    formPage.style.display = "none";
    updateLoader();
    return;
});

function updateLoader(): void {
    let loader = document.querySelector(".loader-container")! as HTMLBodyElement;
    loader.style.display = "flex";
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
    return;
}

let photo = document.getElementById("edit-photo")! as HTMLInputElement;
let phtoDisplay = document.querySelector(".edit-pic")! as HTMLBodyElement;

photo.addEventListener('change', (): void => {
    const file = photo.files?.[0];
    if(file) {
        phtoDisplay.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        homePic.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
    return;
});

// SideBar Buttons Section Starts
sideBarClick[0]!.addEventListener('click', (): void => {
        window.location.assign("dashboard.html");
    return;
});
sideBarClick[1]!.addEventListener('click', (): void => {
    window.location.assign("dashboard.html");
    return;
});

sideBarMode[0]!.addEventListener('click', (): void => {
    if(mode === "light") {
        bodyContainer.style.backgroundColor = "black";
        mode = "dark";
    }
    else {
        bodyContainer.style.backgroundColor = "#F4F6F9";
        mode = "light";
    }
    return ;
});
sideBarMode[1]!.addEventListener('click', (): void => {
    if(mode === "light") {
        bodyContainer.style.backgroundColor = "#000000de";
        sideBarCont.style.backgroundColor = "black";
        addSecbg.style.backgroundColor = "#041424";
        for(let i=0; i<=headerBg.length-2; i++) {
            (headerBg[i] as HTMLBodyElement)!.style.backgroundColor = "#393c40";
            (headerBg[i+1] as HTMLHeadingElement)!.style.color = "#eaedf0";
        }
        for(let i=0; i<ChartsBg.length; i++) {
            (ChartsBg[i] as HTMLElement)!.style.backgroundColor = "#000000";
        }
        for(let i=0; i<headingDivBg.length; i++) {
            (headingDivBg[i] as HTMLElement)!.classList.add("modeWhite");
        }
        mode = "dark";
    }
    else {
        bodyContainer.style.backgroundColor = "#F4F6F9";
        sideBarCont.style.backgroundColor = "#1c1c23";
        addSecbg.style.backgroundColor = "#333436";
        for(let i=0; i<=headerBg.length-2; i++) {
            (headerBg[i] as HTMLBodyElement)!.style.backgroundColor = "#E9EEF5";
            (headerBg[i+1] as HTMLHeadingElement)!.style.color = "#2C3E50";
        }
        for(let i=0; i<ChartsBg.length; i++) {
            (ChartsBg[i] as HTMLElement)!.style.backgroundColor = "#F8FAFC";
        }
        for(let i=0; i<headingDivBg.length; i++) {
            (headingDivBg[i] as HTMLElement)!.classList.remove("modeWhite");
        }
        mode = "light";
    }
    return ;
});
