const imageArray = [
  "https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?b=1&s=170667a&w=0&k=20&c=vGVjEiI6i53vvGDvq1EnMjKSGjiDHKtvX0vOta8Anmw=",

  "https://media.istockphoto.com/id/1343422480/photo/christmas-tree-background.jpg?b=1&s=170667a&w=0&k=20&c=s5wHQLnd79l_pH3cMVKeL7Duj90hJiYCSXGRZIgu24w=",

  "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.jpg?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",

  "https://media.istockphoto.com/id/1342782910/photo/thank-you.jpg?b=1&s=170667a&w=0&k=20&c=HpLIUoFuf8zg91i0-xaooRgTq1xbuSQolJXLC47r6m0=",
];

const button = document.querySelector("#myBtn");
const mainDiv = document.querySelector(".mainDiv");
const image = document.createElement("img");
let i = 0;
// image.src = imageArray[i];
mainDiv.append(image);
console.log(image);

const changePhoto = () => {
  image.src = imageArray[i];
  i++;

  if (i === imageArray.length) {
    i = 0;
  }
};
button.addEventListener("click", changePhoto);
