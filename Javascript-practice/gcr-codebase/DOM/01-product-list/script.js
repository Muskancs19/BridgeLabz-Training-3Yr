// Get the elements from the page
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
  const productName = productInput.value.trim();

  if (productName === "") {
    alert("Please enter a product name");
    return;
  }

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  nameSpan.textContent = productName;
  editButton.textContent = "Edit";
  editButton.className = "edit";
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addProduct();
});

// One listener on the parent handles all Edit and Delete buttons
productList.addEventListener("click", function (event) {
  const listItem = event.target.closest("li");
  if (!listItem) return;

  if (event.target.classList.contains("delete")) {
    listItem.remove();
  }

  if (event.target.classList.contains("edit")) {
    startEditing(listItem);
  }
});

function startEditing(listItem) {
  if (listItem.querySelector(".edit-input")) return;

  const nameSpan = listItem.querySelector("span");
  const oldName = nameSpan.textContent;
  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = oldName;

  nameSpan.replaceWith(editInput);
  editInput.focus();
  editInput.select();

  function saveEdit() {
    if (!editInput.isConnected) return;

    const updatedName = editInput.value.trim() || oldName;
    const newSpan = document.createElement("span");
    newSpan.textContent = updatedName;
    editInput.replaceWith(newSpan);
  }

  editInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") {
      editInput.value = oldName;
      saveEdit();
    }
  });

  // Clicking anywhere outside the item saves the edited text
  setTimeout(function () {
    document.addEventListener("click", function outsideClick(event) {
      if (!listItem.contains(event.target)) {
        saveEdit();
        document.removeEventListener("click", outsideClick);
      }
    });
  }, 0);

  editInput.addEventListener("blur", saveEdit);
}