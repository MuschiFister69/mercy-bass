"use strict";

document.querySelectorAll('a[download]').forEach((a) => {
  a.addEventListener("click", () => {
    a.classList.add("dl-hit");
    setTimeout(() => a.classList.remove("dl-hit"), 600);
  });
});
