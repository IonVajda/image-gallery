const current = document.querySelector("#current");
const images = document.querySelectorAll(".images img");
const opacity = 0.5;

// Set first image opacity
images[0].style.opacity = opacity;

// images.forEach((img) =>
//   img.addEventListener("click", (e) => (current.src = e.target.src))
// );

images.forEach((img) => img.addEventListener("click", imageClick));

function imageClick(e) {
  images.forEach((img) => {
    // Resset the opacity
    img.style.opacity = 1;
  });

  // Change current image when is clicked
  current.src = e.target.src;

  // Add fade-in class
  current.classList.add("fade-in");

  // Remove fade-in class
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);

  // Change the opacity to opacity variable
  e.target.style.opacity = opacity;
}
