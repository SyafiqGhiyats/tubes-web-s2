const placesContainer = document.querySelector(".tour-places");

function scrollX(x) {
  console.log(x);
  placesContainer.scrollBy({
    left: x,
  });
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
