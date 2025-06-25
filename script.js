
function goToService(page) {
  window.location.href = page;
}

function showCurrentMonth() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const now = new Date();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  const titleElement = document.getElementById("month-title");
  if (titleElement) {
    titleElement.textContent = `${month} ${year}`;
  }
}

document.addEventListener("DOMContentLoaded", showCurrentMonth);

