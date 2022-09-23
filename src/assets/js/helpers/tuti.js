// tuti framework cerated by abubakr

// function to swipe class on click

function classTogglerTT(allElements, classToAdd, classToRemove = classToAdd) {
  allElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      allElements.forEach((ele) => {
        ele.classList.remove(classToRemove);
      });
      element.classList.add(classToAdd);
    });
  });
}

export { classTogglerTT };
