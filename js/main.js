import { dorks } from "./dorks.js";

document.addEventListener("DOMContentLoaded", () => {
  const domainInput = document.getElementById("domainInput");
  const validationMessage = document.getElementById("validationMessage");
  const dorkContainer = document.getElementById("dorkContainer");
  const pagination = document.getElementById("pagination");

  const triedQueries = new Set();

  const itemsPerPage = 9;
  let currentPage = 1;

  // Update regex to allow subdomains
  function validateDomain(domain) {
    const domainRegex = /^(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
    return domainRegex.test(domain);
  }

  function updateValidationMessage(isValid, domain) {
    validationMessage.classList.remove(
      "hidden",
      "text-green-400",
      "text-red-500"
    );
    if (domain === "") {
      validationMessage.textContent = "[ ERROR ] Please enter a domain";
      validationMessage.classList.add("text-red-500");
    } else if (isValid) {
      validationMessage.textContent = "[ OK ] Valid domain format";
      validationMessage.classList.add("text-green-400");
    } else {
      validationMessage.textContent =
        "[ ERROR ] Invalid domain format (e.g., sub.domain.com)";
      validationMessage.classList.add("text-red-500");
    }
    validationMessage.classList.remove("hidden");
  }

  function generateDorkCards() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageDorks = dorks.slice(startIndex, endIndex);

    dorkContainer.innerHTML = "";

    pageDorks.forEach(({ title, description, dork }) => {
      const card = document.createElement("div");
      card.classList.add("dork-card", "rounded-sm");

      const isTried = triedQueries.has(dork);

      // Replace `{domain}` placeholder in the description dynamically
      const descriptionWithDomain = description.replace(
        "{domain}",
        `<span class="domain-placeholder">{domain}</span>`
      );

      card.innerHTML = `
        <h3 class="text-xl mb-2">${title}</h3>
        <p class="text-sm mb-4 example-text">${descriptionWithDomain}</p>
        <button class="search-button px-4 py-2 rounded-sm w-full ${
          isTried ? "tried-query" : ""
        }" data-dork="${dork}">
          Search
        </button>
      `;

      dorkContainer.appendChild(card);

      card.querySelector("button").addEventListener("click", () => {
        const domain = domainInput.value.trim();
        if (!validateDomain(domain)) {
          updateValidationMessage(false, domain);
          domainInput.focus();
          return;
        }

        // Handle subdomain enumeration dorks
        let searchQuery = dork.replace("{domain}", domain);

        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
          searchQuery
        )}`;
        window.open(googleSearchUrl, "_blank");

        triedQueries.add(dork); // Mark this query as tried
        generateDorkCards(); // Regenerate cards to update tried-query state
      });
    });

    updatePagination();
  }

  function updatePagination() {
    const totalPages = Math.ceil(dorks.length / itemsPerPage);
    pagination.innerHTML = "";

    for (let page = 1; page <= totalPages; page++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = page;
      pageButton.classList.add("page-button");

      if (page === currentPage) {
        pageButton.classList.add("current-page");
      }

      pageButton.addEventListener("click", () => {
        currentPage = page;
        generateDorkCards();
      });

      pagination.appendChild(pageButton);
    }
  }

  domainInput.addEventListener("input", (e) => {
    const domain = e.target.value.trim();
    const isValid = validateDomain(domain);
    updateValidationMessage(isValid, domain);
  });

  generateDorkCards(); // Initial load
});
