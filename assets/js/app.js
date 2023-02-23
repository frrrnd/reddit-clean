let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let switcher = document.querySelector(".sw");
let root = document.getElementsByTagName('html')[0];
let metaColor = document.querySelector('meta[name="theme-color"]');
let imagePreview = document.querySelector('#image-preview');

if (localStorage.getItem("theme") == 'dark') {
  root.classList.add("dark-theme");
  metaColor.setAttribute("content", "#161616")
  imagePreview.src = 'assets/images/preview-dark.jpg';
} else {
  root.classList.add("light-theme");
  metaColor.setAttribute("content", "#e3e3e3")
  imagePreview.src = 'assets/images/preview-light.jpg';
}

switcher.addEventListener("click", function () {
  if (root.classList.contains('dark-theme')) {
    root.classList.remove("dark-theme");
    root.classList.add("light-theme");
    metaColor.setAttribute("content", "#E8E9EC")
    localStorage.setItem("theme", "light");
    imagePreview.src = 'assets/images/preview-light.jpg';
  } else {
    root.classList.remove("light-theme");
    root.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    metaColor.setAttribute("content", "#161821")
    imagePreview.src = 'assets/images/preview-dark.jpg';
  }
});