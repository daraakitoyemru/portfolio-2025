document.addEventListener("DOMContentLoaded", () => {
  const URL = "http://localhost:8080/images";

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
    const nextImage = images[i];
    const img = document.createElement("img");
    images.forEach((image) => {
      console.log(image);
    });
  }
  placeImage(400, 500);
});
