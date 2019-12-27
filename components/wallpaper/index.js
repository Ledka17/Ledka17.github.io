const winter = [
  "️🌧",
  "⛈",
  "🌨",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "❄",
  "️☃️",
  "⛄",
  "🍾",
  "🥂",
  "🛷",
  "🎄",
  "🎄",
  "🎄",
  "🥶",
  "🍊",
  "🏒",
  "⛸",
  "🎿"
];

const renderedElems = winter
  .map(elem => `<span class="elem">${elem}</span>`)
  .join("");
document.querySelector(".wallpaper").innerHTML = renderedElems;
const elems = document.querySelectorAll(".wallpaper .elem");
elems.forEach(elem => {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.random() * window.innerWidth;
  elem.style.top = `${height}px`;
  elem.style.left = `${width}px`;
});
