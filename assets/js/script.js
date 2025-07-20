const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
// recuperare gli elemneti del dom che mi servono 

const teamContainer =document.querySelector(".teamContainer .row");

//definisco una variabile che mi servira per contenere tutte le colonne e le card da innietare nella pagina
let cards ='';
//ciclo larray 

for(let i=0; i<teamMembers.length; i++){
const member = teamMembers [i];
const {name, role, email, img} = member;
cards+= `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card mb-3 bg-dark">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start" alt="${name}">
          </div>
          <div class="col-md-8">
            <div class="card-body text-white">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text"><small>${email}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;}

  // Inietta le card nella pagina
  teamContainer.innerHTML = cards;
  //bonus:
 // recupero gli elemneti del dom che mi servono 
  const nameImput = document.getElementById("name");
  const roleImput = document.getElementById("role");
  const imageInput = document.getElementById("Image");

 //recupero elemento  button
 const form = document.querySelector("form")
 // Aggiungo un ascoltatore di eventi sul form per gestire il "submit"
 form.addEventListener("submit", function (event){
  // Impediamo il comportamento di default del form cioè il refresh de la pag.
 event.preventDefault();



 });