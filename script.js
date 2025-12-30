const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const shuffleBtn = document.getElementById("shuffle");
const trackName = document.getElementById("current-track");
const list = document.getElementById("track-list");
const toggleListBtn = document.getElementById("toggle-list");

const tracks = [
  
  {
    title: "Last Christmas",

    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089625/last-christmas_pzfth6.mp3"
  },

  {
    title: "Jingle Bells",
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089619/jingle-bell-rock_fm06wi.mp3"
  },
  {
    title: "At Christmas Time",
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089637/At-Christmas-Time_rm1mdj.mp3" 
   },
  {
    title: "Happy New Year",
   
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089628/HAPPY-NEW-YEAR2_xvckr2.mp3"
  },
{title: "Let it Snow", src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089617/let-it-snow_lflkuw.mp3"},
  {
    title: "All I Want for Christmas Is You",
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089633/all-i-want-for-christmas-is-you_d0ntid.mp3"
  },
  {
    title: "Feliz Navidad",
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089625/feliz-navidad_vwfeer.mp3"
  },
  { title: "Rudolph the Red-NosedReindeer", 
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089613/reindeer_dr5qn8.mp3" },
    { title: "Blame it on Christmas", 
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089630/Blame-It-On-The-Mistletoe_vxplg8.mp3" },
    { title: "Be home for Christmas", 
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089636/Be-Home-For-Christmas_uy5ekr.mp3" },
    { title: "Driving Home for Christmas",
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089626/driving-home-for-christmas_t2zwry.mp3" 
    },
  { title: "Lonelist Christmas", 
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089625/Loneliest-Time-Of-Year_ddgczk.mp3"

     },
  { title: "Frosty the Snowman", 
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089625/Loneliest-Time-Of-Year_ddgczk.mp3"  },

    { title: "Santa Claus is Coming to Town", 
    src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089612/Santa_-Claus-Is-Coming-To-Town_tc20k1.mp3"  },
    { title: "Look a lot for Christmas",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089618/look-a-lot-like-christmas_vg4bhv.mp3" },
       { title: "Santa Boy",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089614/santa-boy_vltyvx.mp3" },
      { title: "This Christmas",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089612/This-Christmas_raccow.mp3" },
      { title: "Rockin' Around the Christmas Tree",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089614/rockin-around-the-christmas-tree_rl16wh.mp3" },
      { title: "Magia De Craciun",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089613/Magia-De-Craciun_ypej5d.mp3" },
      { title: "Where is Santa Claus",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089609/Where-Is-Santa_hly4dy.mp3" },
      { title: "Magic Moments",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089611/Magic-Moments_kjqsnm.mp3" },
{ title: "Little Christmas",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089617/little-christmas_rujdrv.mp3" },
      { title: "Oh, Santa!",
      src: "https://res.cloudinary.com/dnjc972et/video/upload/v1767089621/Oh-Santa_uqpcb5.mp3" },
      
];

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let listOpen = false;

function renderList() {
  list.innerHTML = "";
  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.title;
    li.onclick = () => {
      currentIndex = index;
      loadTrack();
      playTrack();
    };
    if (index === currentIndex) li.classList.add("active");
    list.appendChild(li);
  });
}

function loadTrack() {
  audio.src = tracks[currentIndex].src;
  trackName.textContent = tracks[currentIndex].title;
  renderList();
}

function playTrack() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
}

playBtn.onclick = () => isPlaying ? pauseTrack() : playTrack();

nextBtn.onclick = () => {
  currentIndex = isShuffle
    ? Math.floor(Math.random() * tracks.length)
    : (currentIndex + 1) % tracks.length;
  loadTrack();
  playTrack();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack();
  playTrack();
};

shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.opacity = isShuffle ? "1" : "0.5";
};

toggleListBtn.onclick = () => {
  listOpen = !listOpen;
  list.classList.toggle("show", listOpen);
  toggleListBtn.textContent = listOpen
    ? "Скрыть список"
    : "Показать весь список";
};

audio.onended = () => nextBtn.onclick();

loadTrack();
renderList();
