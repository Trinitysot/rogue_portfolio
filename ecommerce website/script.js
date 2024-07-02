const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('.navbar')
const labels = document.querySelectorAll ('.form-control label')

if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  })
} 

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
}

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
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
});

labels.forEach(label => {
  label.innerHTML = label.innerText 
    .split('') 
    .map((letter, idx) => `<span style="transition-delay:${idx * 100}ms">${letter}</span>`)
    .join('')
})
