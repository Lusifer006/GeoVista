document.addEventListener("DOMContentLoaded", () => {
  const uploadCard = document.getElementById("uploadCard");
  const plotUpload = document.getElementById("plotUpload");
  const fileName = document.getElementById("fileName");
  const continueBtn = document.getElementById("continueBtn");

  // Open file picker when card is clicked
  uploadCard.addEventListener("click", (e) => {
    e.preventDefault();
    plotUpload.click();
  });

  // Handle file selection
  plotUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Save image temporarily in sessionStorage (disappears when tab closed)
        sessionStorage.setItem("uploadedPlot", e.target.result);

        // Show filename + enable Continue button
        fileName.textContent = `${file.name} uploaded successfully ✅`;
        continueBtn.disabled = false;
      };
      reader.readAsDataURL(file);
    }
  });

  // Continue button → go to design.html
  continueBtn.addEventListener("click", () => {
    continueBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Loading...`;
    setTimeout(() => {
      window.location.href = "design.html";
    }, 800);
  });
});
