document.addEventListener("DOMContentLoaded", () => {
  const URL = "https://portfolio-2025-84q3.onrender.com/images";

  async function getData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("error fetching: ", error);
    }
  }

  let i = 0;

  async function placeImage(x, y) {
    const images = await getData(URL);
    // const nextImage = images[i];
    // const img = document.createElement("img");
    console.log(images);
  }
  placeImage(400, 500);
});
