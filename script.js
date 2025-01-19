const URL = "https://portfolio-2025-84q3.onrender.com/images";
async function writeToCache(url, key) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching data: " + error);
  }
}

function readFromCache(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

async function checkLocalStorage(key) {
  let localStorageMembers = readFromCache(key);

  if (!localStorageMembers) {
    await writeToCache(URL, key);
    localStorageMembers = readFromCache(key);
  }

  return localStorageMembers;
}

function getRandInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");

  async function placeImage(x, y) {
    const images = await checkLocalStorage("images");
    // console.log(images);
    let i = getRandInt(images.length);
    const nextImage = images[i];
    const img = document.createElement("img");
    img.src = `./backend/assets/${nextImage}`;
    img.id = "collage";

    document.body.appendChild(img);
    img.onload = () => {
      img.style.left = `${x - img.width / 2}px`;
      img.style.top = `${y - img.height / 2}px`;
    };
  }

  document.addEventListener("click", (e) => {
    e.preventDefault();

    placeImage(e.pageX, e.pageY);
  });

  const collage = document.querySelectorAll("#collage");
  window.addEventListener("resize", () => {
    // Select all images and remove them
    document.querySelectorAll("img#collage").forEach((img) => img.remove());
  });
});
