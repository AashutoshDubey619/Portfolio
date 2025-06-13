let headskill = document.querySelector("#skills");


// headskill.innerText = "Software Engineer";

let skills = ["Web Developer", "App Developer", "Software Engineer"];
let i = 0;

setInterval(() => {
    headskill.innerText = skills[i];
    i = (i + 1) % skills.length;
}, 2000);



let desc = document.querySelector(".desc");
let abtbtn1 = document.querySelector("#skil");
let abtbtn2 = document.querySelector("#exp");
let abtbtn3 = document.querySelector("#edu");

let allButtons = [abtbtn1, abtbtn2, abtbtn3];

setActive(abtbtn1);

abtbtn1.addEventListener("click", () => {
    setActive(abtbtn1);
});

abtbtn2.addEventListener("click", () => {
    setActive(abtbtn2);
});

abtbtn3.addEventListener("click", () => {
    setActive(abtbtn3);
});

function setActive(selectedBtn) {
    allButtons.forEach(btn => btn.classList.remove("active"));  // remove red from all
    selectedBtn.classList.add("active"); // add red to selected
}





abtbtn1.addEventListener("click", () => {
    desc.innerHTML = ""; // Clear old content safely

    let p1 = document.createElement("p");
    p1.innerText = "UI/UX";
    desc.appendChild(p1);
    p1.style.color = "red";

    let p2 = document.createElement("p");
    p2.innerText = "Designing Web/App interfaces"; 
    desc.appendChild(p2);

    let p3 = document.createElement("p");
    p3.innerText = "App Development";
    desc.appendChild(p3);
    p3.style.color = "red";

    let p4 = document.createElement("p");
    p4.innerText = "Building Android/iOS apps";
    desc.appendChild(p4);

    let p5 = document.createElement("p");
    p5.innerText = "Web Development";
    desc.appendChild(p5);
    p5.style.color = "red";

    let p6 = document.createElement("p");
    p6.innerText = "Web App Development";
    desc.appendChild(p6);
});


abtbtn2.addEventListener("click", () => {
    abtbtn2.classList.add("btnon");
    desc.innerHTML = "";
    

    let p1 = document.createElement("p");
    p1.innerText = "Frontend Developer @ ABC Corp";
    desc.appendChild(p1);
    p1.style.color = "red";

    let p2 = document.createElement("p");
    p2.innerText = "Developed responsive web interfaces using React.js";
    desc.appendChild(p2);

    let p3 = document.createElement("p");
    p3.innerText = "Intern @ XYZ Pvt Ltd";
    desc.appendChild(p3);
    p3.style.color = "red";

    let p4 = document.createElement("p");
    p4.innerText = "Worked on backend APIs and database integration";
    desc.appendChild(p4);
});


abtbtn3.addEventListener("click", () => {
    desc.innerHTML = "";

    let p1 = document.createElement("p");
    p1.innerText = "B.Tech in Computer Science";
    desc.appendChild(p1);
    p1.style.color = "red";

    let p2 = document.createElement("p");
    p2.innerText = "Ramdeobaba University, 2023 - current";
    desc.appendChild(p2);

    let p3 = document.createElement("p");
    p3.innerText = "12th Grade - 90%";
    desc.appendChild(p3);
    p3.style.color = "red";

    let p4 = document.createElement("p");
    p4.innerText = "Royal Gondwana Public School, CBSE Board";
    desc.appendChild(p4);

    let p5 = document.createElement("p");
    p5.innerText = "10th Grade - 76%";
    desc.appendChild(p5);
    p5.style.color = "red";

    let p6 = document.createElement("p");
    p6.innerText = "St.Xavier's High School, CBSE Board";
    desc.appendChild(p6);
});



let submit = document.querySelector("#sub");

submit.addEventListener("click" , ()=>{
    alert("Message Submitted!.... Thank You!");
})