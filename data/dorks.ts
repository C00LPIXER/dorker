export interface Dork {
  title: string;
  description: string;
  dork: string;
}

export const dorks: Dork[] = [
  // File Discovery and Exposure
  {
    title: "Directory Listing",
    description:
      "Finds exposed directory listings that might contain sensitive files.",
    dork: "site:{domain} intitle:index.of",
  },
  {
    title: "Database Files",
    description: "Locates exposed database files and backups.",
    dork: "site:{domain} ext:sql OR ext:db OR ext:dbf",
  },
  {
    title: "Log Files",
    description:
      "Finds exposed log files that might contain sensitive information.",
    dork: "site:{domain} filetype:log",
  },
  {
    title: "Config Files",
    description: "Finds exposed configuration files with sensitive settings.",
    dork: "site:{domain} filetype:env OR filetype:conf OR filetype:config",
  },
  {
    title: "Backup Files",
    description: "Locates backup files that might contain sensitive data.",
    dork: "site:{domain} filetype:bak OR filetype:backup OR filetype:old",
  },
  {
    title: "Source Code Files",
    description: "Finds exposed source code files.",
    dork: "site:{domain} ext:php OR ext:asp OR ext:jsp OR ext:html",
  },
  {
    title: "Sensitive Documents",
    description: "Finds sensitive documents such as PDFs or Word files.",
    dork: "site:{domain} ext:pdf OR ext:docx OR ext:xlsx OR ext:pptx",
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
  {
    title: "Subdomain Discovery (Multiple Levels)",
    description:
      "Finds subdomains with multiple levels like subdomain.subdomain.domain.",
    dork: "site:*.*.{domain}",
  },

  // Login Portals and Admin Panels
  {
    title: "Login Pages",
    description: "Finds login portals.",
    dork: 'site:{domain} inurl:login OR inurl:signin OR intitle:"Login Page"',
  },
  {
    title: "Admin Panels",
    description: "Discovers admin panels.",
    dork: 'site:{domain} inurl:admin OR inurl:administrator OR intitle:"Admin Panel"',
  },

  // Vulnerability Testing
  {
    title: "Exposed SQL Injection Points",
    description: "Identifies potential SQL injection points.",
    dork: "site:{domain} inurl:index.php?id=",
  },
  {
    title: "Exposed PHP Info",
    description: "Discovers PHP configuration information pages.",
    dork: "site:{domain} intitle:phpinfo",
  },
  {
    title: "Open Redirect Vulnerabilities",
    description: "Identifies potential open redirects.",
    dork: "site:{domain} inurl:redir OR inurl:url OR inurl:redirect",
  },
  {
    title: "Exposed Web Cameras",
    description: "Finds publicly accessible web cameras.",
    dork: 'site:{domain} intitle:"Live View / - AXIS" OR inurl:view/view.shtml',
  },

  // Email and Sensitive User Data
  {
    title: "Email Lists",
    description: "Finds email lists or data.",
    dork: 'site:{domain} filetype:xls OR filetype:csv "email"',
  },
  {
    title: "Usernames and Passwords",
    description: "Discovers sensitive usernames and passwords.",
    dork: 'site:{domain} "username" "password" filetype:txt',
  },

  // Server and Software Information
  {
    title: "Software Version Files",
    description: "Finds files revealing software version details.",
    dork: "site:{domain} inurl:version.txt OR inurl:release_notes.txt",
  },
  {
    title: "Sensitive Server Files",
    description: "Identifies server configuration files.",
    dork: "site:{domain} filetype:xml OR filetype:conf OR filetype:ini",
  },

  // Miscellaneous
  {
    title: "Git Repositories",
    description: "Locates exposed Git repositories.",
    dork: 'site:{domain} intitle:"Index of /" ".git"',
  },
  {
    title: "Shell Files",
    description: "Finds shell scripts that might be exposed.",
    dork: "site:{domain} filetype:sh OR filetype:pl OR filetype:py",
  },
  {
    title: "Sensitive Logs with Credentials",
    description: "Locates sensitive log files containing credentials.",
    dork: 'site:{domain} filetype:log "password"',
  },
  {
    title: "API Keys",
    description: "Searches for publicly exposed API keys.",
    dork: 'site:{domain} "api_key" OR "api_secret" filetype:env',
  },
  {
    title: "Cloud Buckets",
    description: "Finds exposed S3 buckets.",
    dork: 'site:{domain} inurl:"s3.amazonaws.com"',
  },

  // Additional Security and Data Exposure Dorks
  {
    title: "Exposed Server Logs",
    description:
      "Finds publicly exposed server log files that might contain sensitive user activity or errors.",
    dork: 'site:{domain} filetype:log "error" OR "exception" OR "warning"',
  },
  {
    title: "Exposed API Endpoints",
    description:
      "Finds exposed API endpoints that may contain sensitive data or be vulnerable to attacks.",
    dork: 'site:{domain} inurl:/api/ OR inurl:/v1/ OR inurl:/graphql/ "Authorization" OR "api_key"',
  },
  {
    title: "Exposed Password Reset Pages",
    description:
      "Identifies exposed password reset pages which may be misconfigured and vulnerable to attacks.",
    dork: "site:{domain} inurl:reset OR inurl:forgotpassword OR inurl:recoverpassword",
  },
  {
    title: "Exposed Configuration Files",
    description:
      "Searches for exposed configuration files like wp-config.php or .htaccess that might reveal sensitive server details.",
    dork: "site:{domain} inurl:wp-config.php OR inurl:.htaccess OR inurl:config.php",
  },
  {
    title: "Exposed Email Logs with Credentials",
    description:
      "Finds exposed email logs that may contain sensitive information, including login credentials.",
    dork: 'site:{domain} filetype:log "email" "password"',
  },
  {
    "title": "Server Backup Files",
    "description": "Searches for exposed server backup files that might contain sensitive information or configurations.",
    "dork": "site:{domain} filetype:bak OR filetype:backup OR filetype:old"
  },
  {
    "title": "Exposed Source Code Repositories",
    "description": "Identifies publicly exposed Git repositories that may contain sensitive or proprietary source code.",
    "dork": "site:{domain} intitle:\"index of /.git\" OR inurl:.git \"config\" OR \"HEAD\""
  },
  {
    "title": "Exposed Backup WordPress Files",
    "description": "Searches for exposed backup files from WordPress sites, potentially containing databases or configurations.",
    "dork": "site:{domain} filetype:sql OR filetype:tar \"wp-config\" OR \"wordpress\""
  },
  {
    "title": "Exposed .env Files",
    "description": "Locates exposed `.env` files that may contain sensitive environment variables such as API keys and database credentials.",
    "dork": "site:{domain} filetype:env \"API_KEY\" OR \"DATABASE_URL\" OR \"SECRET_KEY\""
  },
  {
    "title": "Exposed Firebase Database Files",
    "description": "Locates exposed Firebase database files that might contain sensitive application data.",
    "dork": "site:{domain} inurl:firebase.google.com OR inurl:/.firebase/ \"database\""
  }
];
