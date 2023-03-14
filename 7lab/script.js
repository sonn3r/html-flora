const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    items.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});
