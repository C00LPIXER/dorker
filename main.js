document.addEventListener("DOMContentLoaded", () => {
  const domainInput = document.getElementById("domainInput");
  const validationMessage = document.getElementById("validationMessage");
  const dorkContainer = document.getElementById("dorkContainer");
  const pagination = document.getElementById("pagination");

  const triedQueries = new Set(); // Store tried queries to change button appearance

  const dorks = [
    // File Discovery and Exposure
    {
      title: "Directory Listing",
      description:
        "Finds exposed directory listings that might contain sensitive files.",
      dork: "intitle:index.of",
    },
    {
      title: "Database Files",
      description: "Locates exposed database files and backups.",
      dork: "ext:sql OR ext:db OR ext:dbf",
    },
    {
      title: "Log Files",
      description:
        "Finds exposed log files that might contain sensitive information.",
      dork: "filetype:log",
    },
    {
      title: "Config Files",
      description: "Finds exposed configuration files with sensitive settings.",
      dork: "filetype:env OR filetype:conf OR filetype:config",
    },
    {
      title: "Backup Files",
      description: "Locates backup files that might contain sensitive data.",
      dork: "filetype:bak OR filetype:backup OR filetype:old",
    },
    {
      title: "Source Code Files",
      description: "Finds exposed source code files.",
      dork: "ext:php OR ext:asp OR ext:jsp OR ext:html",
    },
    {
      title: "Sensitive Documents",
      description: "Finds sensitive documents such as PDFs or Word files.",
      dork: "ext:pdf OR ext:docx OR ext:xlsx OR ext:pptx",
    },

    // Subdomain Enumeration
    {
      title: "Subdomain Discovery",
      description: "Finds subdomains for a given domain.",
      dork: "site:*.{domain}",
    },
    {
      title: "Alternative Subdomain Discovery",
      description: "Another method for subdomain enumeration.",
      dork: "site:{domain} -www",
    },

    // Login Portals and Admin Panels
    {
      title: "Login Pages",
      description: "Finds login portals.",
      dork: 'inurl:login OR inurl:signin OR intitle:"Login Page"',
    },
    {
      title: "Admin Panels",
      description: "Discovers admin panels.",
      dork: 'inurl:admin OR inurl:administrator OR intitle:"Admin Panel"',
    },

    // Vulnerability Testing
    {
      title: "Exposed SQL Injection Points",
      description: "Identifies potential SQL injection points.",
      dork: "inurl:index.php?id=",
    },
    {
      title: "Exposed PHP Info",
      description: "Discovers PHP configuration information pages.",
      dork: "intitle:phpinfo",
    },
    {
      title: "Open Redirect Vulnerabilities",
      description: "Identifies potential open redirects.",
      dork: "inurl:redir OR inurl:url OR inurl:redirect",
    },
    {
      title: "Exposed Web Cameras",
      description: "Finds publicly accessible web cameras.",
      dork: 'intitle:"Live View / - AXIS" OR inurl:view/view.shtml',
    },

    // Email and Sensitive User Data
    {
      title: "Email Lists",
      description: "Finds email lists or data.",
      dork: 'filetype:xls OR filetype:csv "email"',
    },
    {
      title: "Usernames and Passwords",
      description: "Discovers sensitive usernames and passwords.",
      dork: '"username" "password" filetype:txt',
    },

    // Server and Software Information
    {
      title: "Software Version Files",
      description: "Finds files revealing software version details.",
      dork: "inurl:version.txt OR inurl:release_notes.txt",
    },
    {
      title: "Sensitive Server Files",
      description: "Identifies server configuration files.",
      dork: "filetype:xml OR filetype:conf OR filetype:ini",
    },

    // Miscellaneous
    {
      title: "Git Repositories",
      description: "Locates exposed Git repositories.",
      dork: 'intitle:"Index of /" ".git"',
    },
    {
      title: "Shell Files",
      description: "Finds shell scripts that might be exposed.",
      dork: "filetype:sh OR filetype:pl OR filetype:py",
    },
    {
      title: "Sensitive Logs with Credentials",
      description: "Locates sensitive log files containing credentials.",
      dork: 'filetype:log "password"',
    },
    {
      title: "API Keys",
      description: "Searches for publicly exposed API keys.",
      dork: '"api_key" OR "api_secret" filetype:env',
    },
    {
      title: "Cloud Buckets",
      description: "Finds exposed S3 buckets.",
      dork: 'inurl:"s3.amazonaws.com"',
    },
  ];

  const itemsPerPage = 9;
  let currentPage = 1;

  function validateDomain(domain) {
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
        "[ ERROR ] Invalid domain format (e.g., domain.com)";
      validationMessage.classList.add("text-red-500");
    }
    validationMessage.classList.remove("hidden");
  }

  function generateDorkCards() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageDorks = dorks.slice(startIndex, endIndex);

    dorkContainer.innerHTML = ""; // Clear previous cards

    pageDorks.forEach(({ title, description, dork }) => {
      const card = document.createElement("div");
      card.classList.add("dork-card", "rounded-sm");

      const isTried = triedQueries.has(dork); // Check if this dork has been tried

      card.innerHTML = `
        <h3 class="text-xl mb-2">${title}</h3>
        <p class="text-sm mb-4 example-text">${description}</p>
        <button class="search-button px-4 py-2 rounded-sm w-full ${
          isTried ? "tried-query" : ""
        }" data-dork="${dork}">
          Search
        </button>
      `;

      dorkContainer.appendChild(card);

      card.querySelector("button").addEventListener("click", () => {
        const domain = domainInput.value.trim();
        alert(domain);
        if (!validateDomain(domain)) {
          updateValidationMessage(false, domain);
          domainInput.focus();
          return;
        }

        // Replace {domain} with the user input value for domain
        const searchQuery = `site:${domain} ${dork}`; // Inject the domain into the dork string
        alert(dork.replace("{domain}", domain));
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
