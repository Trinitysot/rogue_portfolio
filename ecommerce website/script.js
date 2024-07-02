const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
} 

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

document.addEventListener("DOMContentLoaded", function() {
  let carousel = document.querySelector(".carousel");
  if (carousel) {
      let items = carousel.querySelectorAll(".item");
      
      document.querySelector(".prev").addEventListener("click", () => {
          let index = [...items].findIndex((item) =>
              item.classList.contains("active")
          );
          showItem((index - 1 + items.length) % items.length);
      });
  
      document.querySelector(".next").addEventListener("click", () => {
          let index = [...items].findIndex((item) =>
              item.classList.contains("active")
          );
          showItem((index + 1) % items.length);
      });
  } else {
      console.error("Carousel element not found in the DOM.");
  }
});




