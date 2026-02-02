const track = document.getElementById("sliderTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const members = [
  { name: "Anonym", img: "https://picsum.photos/300?1" },
  { name: "Anonym", img: "https://picsum.photos/300?2" },
  { name: "Anonym", img: "https://picsum.photos/300?3" },
  { name: "Anonym", img: "https://picsum.photos/300?4" },
  { name: "Anonym", img: "https://picsum.photos/300?5" }
];

const itemWidth = 228; // Bild + Gap
let position = 0;

/* 🔁 Track massiv vervielfachen */
const repeated = [...members, ...members, ...members];

repeated.forEach(m => {
  const div = document.createElement("div");
  div.className = "profile";
  div.innerHTML = `
    <img src="${m.img}">
    <div class="profile-name">${m.name}</div>
  `;
  track.appendChild(div);
});

/* Start mittig */
position = members.length * itemWidth;
track.style.transform = `translateX(-${position}px)`;

function move(dir = 1) {
  position += dir * itemWidth;

  track.style.transition = "transform 0.1s ease";
  track.style.transform = `translateX(-${position}px)`;

  const loopStart = members.length * itemWidth;
  const loopEnd = loopStart * 2;

  setTimeout(() => {
    if (position >= loopEnd) {
      track.style.transition = "none";
      position -= loopStart;
      track.style.transform = `translateX(-${position}px)`;
    }

    if (position <= 0) {
      track.style.transition = "none";
      position += loopStart;
      track.style.transform = `translateX(-${position}px)`;
    }
  }, 500);
}




nextBtn.onclick = () => move(1);
prevBtn.onclick = () => move(-1);
