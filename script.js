const srpBtn = document.querySelector(".lang-btn__srp");
const engBtn = document.querySelector(".lang-btn__eng");
const hiddenEl = document.querySelectorAll(".hide");

let languageContent = {
  srp: {
    "header title": "Lorem ipsum dolor sit amet consectetur",
    "header text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima",
    "about title": "Lorem ipsum dolor sit amet consectetur ",
    "about text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima Lorem ipsum dolor sit amet consectetur adipisi",
    "projects title": "Lorem ipsum dolor sit amet consectetur ",
    "projects text":
      "TLorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  eng: {
    "header title": "ENG Lorem ipsum dolor sit amet consectetur",
    "header text":
      "ENG Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima",
    "about title": "ENG Lorem ipsum dolor sit amet consectetur ",
    "about text":
      "ENG Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima Lorem ipsum dolor sit amet consectetur adipisi",
    "projects title": "ENG Lorem ipsum dolor sit amet consectetur ",
    "projects text":
      "ENG Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt ducimus unde consectetur quisquam dolor amet dignissimos minima Lorem ipsum dolor sit amet consectetur adipisi",
  },
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showing");
    } else {
      entry.target.classList.remove("showing");
    }
  });
});

hiddenEl.forEach((el) => observer.observe(el));

//language switch
srpBtn.style.color = "rgb(0, 225, 255)";

srpBtn.addEventListener("click", () => {
  srpBtn.style.color = "rgb(0, 225, 255)";
  engBtn.style.color = "#cacaca";
});

engBtn.addEventListener("click", () => {
  engBtn.style.color = "rgb(0, 225, 255)";
  srpBtn.style.color = "#cacaca";
});

function swithcLang(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}

//scroll progres animation
const progressbar = document.querySelector("progress");
const article = document.querySelector("body");

let isScrolling = false;

document.addEventListener("scroll", (e) => (isScrolling = true));

render();

function render() {
  requestAnimationFrame(render);

  if (!isScrolling) return;

  progressbar.value =
    (window.scrollY / (article.offsetHeight - window.innerHeight)) * 100;

  isScrolling = false;
}
