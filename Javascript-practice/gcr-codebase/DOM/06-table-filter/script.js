const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentRows tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  studentRows.forEach(function (row) {
    const rowText = row.textContent.toLowerCase();
    const isMatch = rowText.includes(searchText);

    row.hidden = !isMatch;
    if (isMatch) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
});