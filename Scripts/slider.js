var d = document;
    nextButton = d.getElementsByClassName('next')[0],
    prevButton = d.getElementsByClassName('prev')[0],
    slideContent = d.getElementsByClassName('slide-content')[0],
    slideIndex = d.getElementsByClassName('slide-index')[0],
    count = 0;

slideIndex.innerText = `1 / ${slideContent.children.length}`;

function sliding() {
  for (let i = 0; i < slideContent.children.length; i++) {
    slideContent.children[i].style.display = 'none';
  }
  slideContent.children[count].style.display = 'block';

  slideIndex.innerText = `${count + 1} / ${slideContent.children.length}`;

  slideContent.children[count].style.animation = 'js-sliding-style 1.5s';

  var slideTimeoutId = setTimeout(function () {
    nextButton.click();
  }, 5000);
  clearTimeout(slideTimeoutId - 1);
}

var slideIntervalId = setInterval(function () {
  nextButton.click();
}, 5000);

nextButton.onclick = function () {
  count++;
  if (count >= slideContent.children.length) {
    count = 0;
  }
  clearInterval(slideIntervalId);
  sliding();
};

prevButton.onclick = function () {
  count--;
  if (count < 0) {
    count = slideContent.children.length - 1;
  }
  clearInterval(slideIntervalId);
  sliding();
};
