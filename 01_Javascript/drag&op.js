const draggables = document.querySelectorAll(".draggable");
const containers = document.getElementById("container");
let dragImage = null;

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    dragImage = draggable;
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });

  draggable.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover!");
  });

  draggable.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (dragImage != draggable) {
      containers.insertBefore(dragImage, draggable);
    }
  });
});
