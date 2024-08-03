// const item = document.querySelector(".item");

// item.addEventListener("dragstart", (e) => {
//   console.log("드래그를 시작하면 발생하는 이벤트");
// });

// item.addEventListener("drag", (e) => {
//   console.log("드래그하면 발생하는 이벤트");
// });

// const container = document.querySelector(".container");
// const container2 = document.querySelector(".container2");

// container.addEventListener("dragenter", (e) => {
//   console.log("박스1 영역에 진입했어!");
// });

// container.addEventListener("dragleave", (e) => {
//   console.log("박스1 영역을 떠낫어!");
// });

// container.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   console.log("박스1 영역에 존재하는중..");
// });

// container.addEventListener("drop", (e) => {
//   console.log("박스1 영역에 드랍함");
// });

// container2.addEventListener("dragenter", (e) => {
//   console.log("박스2 영역에 진입했어!");
// });

// container2.addEventListener("dragleave", (e) => {
//   console.log("박스2 영역을 떠낫어!");
// });

// container2.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   console.log("박스2 영역에 존재하는중..");
// });

// container2.addEventListener("drop", (e) => {
//   console.log("박스2 영역에 드랍함");
// });

// document.getElementById("appenChildBtn").onclick = function () {
//   const parent = document.getElementById("parent");
//   const newElement = document.createElement("div");
//   newElement.textContent = "새로 만들어짐";
//   parent.appendChild(newElement);
// };

// document.getElementById("insertBeforeBtn").onclick = function () {
//   const parentEl = document.getElementById("parent2");
//   const newEl = document.createElement("div");
//   newEl.textContent = "새로 만들어짐";

//   const reference = document.getElementById("reference");
//   parentEl.insertBefore(newEl, reference);
// };

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    const afterEl = getDragAfterElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    if (afterEl === undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterEl);
    }
  });
});

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll("draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, elemnet: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).elemnet;
}
