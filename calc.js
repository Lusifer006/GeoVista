const selections = JSON.parse(sessionStorage.getItem("selections")) || {};
let total = 0;
let summaryDiv = document.getElementById("summary");

for (let category in selections) {
  let item = selections[category];

  // If category is eco (array of multiple items)
  if (Array.isArray(item)) {
    summaryDiv.innerHTML += `<h6 class="mt-3">Eco-Friendly Options</h6>`;
    item.forEach(ecoItem => {
      total += ecoItem.cost;
      summaryDiv.innerHTML += `
        <div class="card p-3 mb-2">
          <p class="mb-0">Selected: ${ecoItem.value}</p>
          <p class="text-muted small">Cost: ₹${ecoItem.cost}</p>
        </div>
      `;
    });
  } else {
    // Normal categories (walls, roof, windows)
    total += item.cost;
    summaryDiv.innerHTML += `
      <div class="card p-3 mb-2">
        <h6 class="mb-1 text-capitalize">${category}</h6>
        <p class="mb-0">Selected: ${item.value}</p>
        <p class="text-muted small">Cost: ₹${item.cost}</p>
      </div>
    `;
  }
}

document.getElementById("totalCost").textContent = `₹${total}`;
