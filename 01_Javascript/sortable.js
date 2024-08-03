const columns = document.querySelectorAll(".column");
columns.forEach((column) => {
  new Sortable(column, {
    gruop: "shared",
    animation: 150,
    ghostClass: "blue-backgruond-class",
  });
});
