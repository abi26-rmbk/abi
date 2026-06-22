const track = document.getElementById("sliderTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* ================= SCHÜLER ================= */

const members = [
{

  id: "greta",
  name: "Greta K.",

 img:"img/profiles/greta.jpeg",

  childImg: "img/profiles/greta_kind.jpeg",

  steckbrief: "img/steckbriefe/greta.jpg"
,
},
{
  id: "jawad",
  name: "Jawad E.",

  img: "img/profiles/jawad.jpeg",

  childImg: "img/profiles/jawad_kind.jpeg",

  steckbrief: "img/steckbriefe/jawad.jpg"
},

{
  id: "dilara",
  name: "Dilara Y.",

  img: "img/profiles/dilara.jpeg",

  childImg: "img/profiles/dilara_kind.jpg",

  steckbrief: "img/steckbriefe/dilara.jpg"
},

{
  id: "mayra",
  name: "Mayra K.",

  img: "img/profiles/mayra.jpg",

  childImg: "img/profiles/mayra_kind.jpg",

  steckbrief: "img/steckbriefe/mayra.jpg"
},

{
  id: "mateo",
  name: "Mateo R.",

  img: "img/profiles/mateo.jpeg",

  childImg: "img/profiles/mateo_kind.png",

  steckbrief: "img/steckbriefe/mateo.jpg"
},
{
  id: "selinay",
  name: "Selinay I.",

  img: "img/profiles/selinay.jpeg",

  childImg: "img/profiles/selinay_kind.jpeg",

  steckbrief: "img/steckbriefe/selinay.jpg"
},


];

/* ================= SLIDER ================= */

const itemWidth = 228;
let position = 0;

const repeated = [
  ...members,
  ...members,
  ...members
];

repeated.forEach(member => {

  const div = document.createElement("div");

  div.className = "profile";

  div.innerHTML = `
    <img src="${member.img}" alt="${member.name}">
    <div class="profile-name normal">
      ${member.name}
    </div>
  `;

  div.addEventListener("click", () => {
    openProfile(member);
  });

  track.appendChild(div);
});

/* mittig starten */

position = members.length * itemWidth;

track.style.transform =
`translateX(-${position}px)`;

/* ================= SLIDER BEWEGUNG ================= */

function move(dir = 1) {

  position += dir * itemWidth;

  track.style.transition =
  "transform 0.5s ease";

  track.style.transform =
  `translateX(-${position}px)`;

  const loopStart =
  members.length * itemWidth;

  const loopEnd =
  loopStart * 2;

  setTimeout(() => {

    if (position >= loopEnd) {

      track.style.transition = "none";

      position -= loopStart;

      track.style.transform =
      `translateX(-${position}px)`;
    }

    if (position <= 0) {

      track.style.transition = "none";

      position += loopStart;

      track.style.transform =
      `translateX(-${position}px)`;
    }

  }, 500);
}

nextBtn.addEventListener("click", () => move(1));

prevBtn.addEventListener("click", () => move(-1));

/* ================= MODAL ================= */

const modal =
document.getElementById("profileModal");

const adultImg =
document.getElementById("adultImg");

const childImg =
document.getElementById("childImg");

const steckbriefImg =
document.getElementById("steckbriefImg");

const closeBtn =
document.getElementById("closeModal");

/* ================= ÖFFNEN ================= */

function openProfile(person) {

  adultImg.src = person.img;

  childImg.src = person.childImg;

  steckbriefImg.src =
  person.steckbrief;

  modal.classList.add("active");

  document.body.style.overflow =
  "hidden";
}

/* ================= SCHLIESSEN ================= */

function closeProfile() {

  modal.classList.remove("active");

  document.body.style.overflow =
  "auto";
}

closeBtn.addEventListener(
  "click",
  closeProfile
);

/* Klick außerhalb */

modal.addEventListener("click", e => {

  if (e.target === modal) {
    closeProfile();
  }

});

/* ESC Taste */

document.addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape" &&
      modal.classList.contains("active")
    ) {
      closeProfile();
    }

  }
);