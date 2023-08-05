// Subscription-plans.js

document.addEventListener("DOMContentLoaded", () => {
    const subscriptionTable = document.getElementById("subscriptionTable");

    // Fetch subscription plan data from your backend API
    fetch("your_backend_url")
        .then(response => response.json())
        .then(data => {
            data.forEach((plan, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td class="plan-name">
                        <div class="rank">${index + 1}</div>
                        ${plan.name}
                        <div class="subscribe-button">
                            <button>Subscribe</button>
                        </div>
                    </td>
                    <td>
                        <strong>Core Services:</strong><br>
                        ${plan.coreServices.join("<br>")}
                        <ul class="bonus-service-list">
                            ${plan.bonusServices.map(service => `<li>${service}</li>`).join("")}
                        </ul>
                        <!-- ... (rank incentives) ... -->
                    </td>
                    <td>${plan.price}</td>
                `;
                subscriptionTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

  // Function to copy the referral link to the clipboard
  function copyReferralLink() {
    var referralLink = document.getElementById("referral-link");
    referralLink.select();
    document.execCommand("copy");
  }
