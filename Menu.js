document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  // Toggle menu
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Đóng menu khi click vào link
  const links = nav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
.zone-content {
  display: none;
  padding: 12px;
  color: #444;
  line-height: 1.6;
}
.zone-item.open .zone-content {
  display: block;
}
