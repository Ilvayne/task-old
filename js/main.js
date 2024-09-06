document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs .tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Видаляємо клас 'active' з усіх табів та контенту
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Додаємо клас 'active' для поточного таба та відповідного контенту
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  });
});
