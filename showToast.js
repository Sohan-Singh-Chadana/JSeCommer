export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  switch (operation) {
    case "add":
      toast.textContent = `Product with Id ${id} has been added.`;
      break;
    case "remove":
      toast.textContent = `Product with Id ${id} has been removed.`;
      break;
    case "update":
      toast.textContent = `Product with Id ${id} has been updated.`;
      break;
  }

  // Add the toast to the body of the document
  document.body.appendChild(toast);

  // Automatically remove the toast after 2 seconds
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
