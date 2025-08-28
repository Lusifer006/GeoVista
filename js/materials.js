document.addEventListener("DOMContentLoaded", () => {
  console.log("materials.js loaded ✅");

  const selections = JSON.parse(sessionStorage.getItem("selections")) || {};

  // Material cards
  document.querySelectorAll(".material-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      const value = card.dataset.value;
      const cost = parseInt(card.dataset.cost);

      console.log(`Selected: ${category} → ${value} (₹${cost})`);

      // Save selection
      selections[category] = { value, cost };
      sessionStorage.setItem("selections", JSON.stringify(selections));

      // Highlight only the selected card per category
      document.querySelectorAll(`.material-card[data-category="${category}"]`)
        .forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
    });

    // Restore selection if already chosen
    const category = card.dataset.category;
    if (selections[category] && selections[category].value === card.dataset.value) {
      card.classList.add("selected");
    }
  });

  // Eco options
  document.querySelectorAll(".eco-option").forEach(option => {
    option.addEventListener("change", () => {
      selections.eco = selections.eco || [];
      if (option.checked) {
        selections.eco.push({ value: option.value, cost: parseInt(option.dataset.cost) });
      } else {
        selections.eco = selections.eco.filter(item => item.value !== option.value);
      }
      console.log("Eco options updated:", selections.eco);
      sessionStorage.setItem("selections", JSON.stringify(selections));
    });

    // Restore eco-option state
    if (selections.eco && selections.eco.some(item => item.value === option.value)) {
      option.checked = true;
    }
  });
});
