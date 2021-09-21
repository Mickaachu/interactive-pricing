let myRange = document.querySelector("#myrange"),
  progressbar = document.getElementById("progressbar"),
  pageView = document.getElementById("pageview"),
  price = document.getElementById("pricefix"),
  togglebutton = document.querySelector("#togglebutton"),
  monthlyYearly = document.getElementById("per-month-or-year");

togglebutton.addEventListener("click", function () {
  if (!togglebutton.checked) {
    monthlyYearly.innerText = "/month";
    myRange.addEventListener("click", function () {
      if (myRange.value == 1) {
        progressbar.style.width = "10%";
        pageView.innerText = "10K";
        price.innerText = "8";
      }
      if (myRange.value == 2) {
        progressbar.style.width = "25%";
        pageView.innerText = "50K";
        price.innerText = "12";
      }
      if (myRange.value == 3) {
        progressbar.style.width = "50%";
        pageView.innerText = "100K";
        price.innerText = "16";
      }
      if (myRange.value == 4) {
        progressbar.style.width = "75%";
        pageView.innerText = "500K";
        price.innerText = "24";
      }
      if (myRange.value == 5) {
        progressbar.style.width = "90%";
        pageView.innerText = "1M";
        price.innerText = "36";
      }
    });
  }
});

togglebutton.addEventListener("click", function () {
  if (togglebutton.checked) {
    monthlyYearly.innerText = "/year";
    myRange.addEventListener("click", function () {
      if (myRange.value == 1) {
        progressbar.style.width = "10%";
        pageView.innerText = "10K";
        price.innerText = "72";
      }
      if (myRange.value == 2) {
        progressbar.style.width = "25%";
        pageView.innerText = "50K";
        price.innerText = "108";
      }
      if (myRange.value == 3) {
        progressbar.style.width = "50%";
        pageView.innerText = "100K";
        price.innerText = "144";
      }
      if (myRange.value == 4) {
        progressbar.style.width = "75%";
        pageView.innerText = "500K";
        price.innerText = "216";
      }
      if (myRange.value == 5) {
        progressbar.style.width = "90%";
        pageView.innerText = "1M";
        price.innerText = "324";
      }
    });
  }
});
