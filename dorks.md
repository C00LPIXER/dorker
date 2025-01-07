

A list of 100 Google dorks categorized by their use cases:

### **1. Directory and File Listings**
- **Directories Listing**: `intitle:index.of`
- **Open Directory Listings**: `intitle:"index of" "parent directory"`
- **Backup Files**: `intitle:index.of.bak`
- **Logs and Errors**: `intitle:"index of" "error.log"`

### **2. Configuration and Environment Files**
- **Search Configs**: `filetype:env OR filetype:conf OR filetype:config`
- **Database Configuration Files**: `filetype:sql OR filetype:db`
- **System Configurations**: `filetype:cfg OR filetype:ini`

### **3. Sensitive Files**
- **Password Files**: `filetype:txt "password"`
- **Private Keys**: `filetype:pem OR filetype:key "BEGIN RSA PRIVATE"`
- **SSH Configurations**: `filetype:conf "PermitRootLogin"`
- **FTP Logs**: `filetype:log inurl:ftp`

### **4. Server and Software Info**
- **PHP Info Pages**: `inurl:phpinfo.php`
- **Apache Listings**: `inurl:server-status`
- **Jenkins Dashboards**: `intitle:"Dashboard [Jenkins]"`

### **5. Login Portals**
- **Admin Panels**: `inurl:admin OR inurl:login`
- **Database Portals**: `intitle:"phpMyAdmin" "Welcome to phpMyAdmin"`
- **Email Login**: `inurl:webmail/login`
- **VPN Login**: `inurl:vpn/login`

### **6. Exposed Cameras**
- **Webcams**: `intitle:"Live View / - AXIS"`
- **IP Cameras**: `intitle:"Live View / - Sony Network Camera"`
- **Open Surveillance**: `inurl:viewerframe?mode=motion`

### **7. Document Searches**
- **PDF Files**: `filetype:pdf`
- **Excel Sheets**: `filetype:xls OR filetype:xlsx`
- **Word Documents**: `filetype:doc OR filetype:docx`

### **8. Emails and Credentials**
- **Email Dumps**: `"@gmail.com" filetype:txt`
- **Usernames and Passwords**: `"username | password" filetype:txt`
- **GitHub Tokens**: `filetype:txt "ghp_"`

### **9. Database Information**
- **SQL Dumps**: `filetype:sql "insert into"`
- **MongoDB Exposures**: `"MongoDB Server Information"`
- **ElasticSearch Instances**: `"Kibana" "Elasticsearch" intitle:"Discover"`

### **10. Security Flaws**
- **Directory Traversal**: `"../../../../etc/passwd"`
- **Default Credentials**: `intitle:"default password" filetype:log`
- **Publicly Exposed AWS Keys**: `filetype:env "AWS_SECRET_ACCESS_KEY"`

### **11. Networking and Devices**
- **Router Admin Pages**: `intitle:"Router Admin" inurl:admin`
- **VPN Server Configurations**: `filetype:ovpn`
- **Firewall Logs**: `filetype:log "firewall"`

### **12. Development and Code**
- **Git Repositories**: `inurl:".git"`
- **Source Code Exposures**: `filetype:php "DB_PASSWORD"`
- **API Endpoints**: `"api/v1" "swagger"`

### **13. Search Engines and Crawlers**
- **Crawl Logs**: `"crawl-delay" "robots.txt"`
- **Search Engine Credentials**: `filetype:log "secrets"`

### **14. Backup Files**
- **ZIP Backups**: `filetype:zip`
- **Old Database Dumps**: `filetype:sql "backup"`
- **Tar Backups**: `filetype:tar.gz`

### **15. Error Messages**
- **SQL Errors**: `intext:"You have an error in your SQL syntax"`
- **PHP Errors**: `intext:"Fatal error"`
- **Java Errors**: `intext:"Exception in thread"`

### **16. API and Tokens**
- **Slack Tokens**: `filetype:env "SLACK_API_TOKEN"`
- **Stripe Keys**: `filetype:env "STRIPE_SECRET_KEY"`
- **Firebase Keys**: `filetype:json intext:"apiKey"`

### **17. IoT Devices**
- **Printers**: `inurl:HP inurl:Printer`
- **Smart TVs**: `intitle:"Samsung SmartTV"`
- **Home Automation**: `intitle:"Home Assistant"`

### **18. Cloud Configurations**
- **Azure Storage Keys**: `filetype:json intext:"storageAccountKey"`
- **Google Cloud Service Accounts**: `filetype:json intext:"client_email"`
- **AWS Credentials**: `filetype:env "AWS_ACCESS_KEY"`

### **19. Financial Info**
- **Credit Card Dumps**: `"credit card" filetype:txt`
- **Transaction Logs**: `filetype:csv "transaction"`
- **Bitcoin Wallets**: `filetype:dat inurl:wallet`

### **20. Miscellaneous**
- **Private Messages**: `"message" filetype:txt`
- **License Keys**: `"license key" filetype:txt`
- **Medical Records**: `intitle:"Medical Record" filetype:csv`

### **21. Authentication and Login Pages**
- **Common Login Pages**: `intitle:"login" inurl:login`
- **Exposed Admin Dashboards**: `intitle:"admin panel" OR inurl:"admin/login"`
- **Remote Desktops**: `intitle:"Remote Desktop Web Connection"`
- **Open CMS Logins**: `intitle:"Joomla! Administration Login"`

### **22. Web Server Information**
- **Nginx Server Info**: `inurl:nginx_status`
- **Apache Status Pages**: `inurl:server-status intitle:"Apache Server Status"`
- **IIS Details**: `intitle:"Internet Information Services"`

### **23. Exposed Backup Archives**
- **ZIP Archives**: `filetype:zip "backup"`
- **SQL Backups**: `filetype:sql inurl:backup`
- **Database Dump Files**: `filetype:dump "INSERT INTO"`
- **RAR Archives**: `filetype:rar "backup"`

### **24. Sensitive Logs**
- **Log Files**: `filetype:log "password"`
- **Server Access Logs**: `filetype:log "GET /"`
- **Debugging Logs**: `filetype:log intext:"Exception"`

### **25. Vulnerable CMS**
- **WordPress Login**: `intitle:"Dashboard" inurl:wp-login`
- **Drupal Debug Pages**: `intitle:"page not found" inurl:"/node"`
- **Joomla! Backup**: `filetype:bak inurl:joomla`
- **Magento Configurations**: `filetype:xml inurl:magento`

### **26. Social Media Accounts**
- **Exposed Social Media Info**: `filetype:xlsx "twitter" "username"`
- **Slack Webhooks**: `inurl:hooks.slack.com`
- **Facebook Tokens**: `"access_token" "facebook"`

### **27. Hardware and IoT Vulnerabilities**
- **Network Devices**: `intitle:"Cisco Router" inurl:main`
- **IP Cameras Live Feed**: `inurl:8080 "live view"`
- **Home Routers**: `intitle:"NETGEAR Configuration"`

### **28. API and Webhook Details**
- **API Logs**: `filetype:log "api key"`
- **Stripe Webhooks**: `filetype:json inurl:stripe`
- **Webhook URLs**: `intext:"POST /webhook"`

### **29. Developer and Test Environments**
- **Local Development Servers**: `inurl:localhost:8000`
- **Test API Endpoints**: `inurl:test/api`
- **Staging Environments**: `inurl:staging`

### **30. Exposed Personal Data**
- **Phone Numbers**: `"phone" filetype:csv`
- **SSNs**: `"social security number" filetype:xls`
- **Address Books**: `filetype:csv "address"`

### **31. Admin Interfaces**
- **phpMyAdmin**: `intitle:"phpMyAdmin" "Database server"`
- **Remote File Inclusion Panels**: `inurl:"rfi.php"`
- **Content Management Dashboards**: `intitle:"CMS Control Panel"`

### **32. Search for Misconfigurations**
- **Open Directories**: `intitle:"Index of /" inurl:wp-content/uploads`
- **Misconfigured AWS Buckets**: `inurl:s3.amazonaws.com`
- **Default Credentials**: `intitle:"default username and password"`

### **33. Exposed Cloud Services**
- **Firebase Databases**: `inurl:firebaseio.com`
- **Google Cloud Buckets**: `inurl:storage.googleapis.com`
- **Azure Containers**: `inurl:blob.core.windows.net`

### **34. Security Vulnerabilities**
- **XSS Testing**: `inurl:"q=" OR inurl:"search="`
- **SQL Injection Points**: `"parameter=" "sql syntax error"`
- **LFI Vulnerabilities**: `inurl:"file=" intitle:index`

### **35. Command Execution Pages**
- **RCE Testing Pages**: `inurl:"cmd=" OR inurl:"exec="`
- **Shell Scripts**: `filetype:sh "chmod +x"`
- **PHP Shells**: `intitle:"C99Shell"`

### **36. E-Commerce Flaws**
- **Admin Panels**: `intitle:"shopping cart" admin`
- **Payment Gateways**: `inurl:"gateway.asp"`
- **Transaction History**: `filetype:csv "transaction ID"`

### **37. Internal Documents**
- **Business Plans**: `"confidential" filetype:doc`
- **Private Agreements**: `"contract" filetype:pdf`
- **Internal Policies**: `"policy" filetype:xlsx`

### **38. Search Engine Indexing Issues**
- **Unindexed Pages**: `inurl:"search.php?q="`
- **Robots.txt Files**: `inurl:robots.txt`
- **Sitemap Exposures**: `inurl:sitemap.xml`

### **39. Exposed Source Code**
- **GitLab Instances**: `intitle:"GitLab" inurl:"/explore"`
- **Public Git Directories**: `inurl:".git"`
- **Config Files**: `filetype:json intext:"config"`

### **40. Default Installations**
- **phpBB Forums**: `intitle:"Welcome to phpBB!"`
- **Tomcat Default Pages**: `intitle:"Apache Tomcat"`
- **MySQL Admin Pages**: `intitle:"Welcome to MySQL Monitor"`
### **41. Database Vulnerabilities**
- **Oracle Database**: `intitle:"Oracle Application Server" inurl:"pls"`
- **SQL Server Dumps**: `filetype:sql intext:"CREATE TABLE"`
- **Exposed Redis Instances**: `intitle:"Redis" "keys" inurl:6379`
- **PostgreSQL Configurations**: `filetype:conf inurl:postgresql`

### **42. Vulnerable Web Frameworks**
- **Django Debug Pages**: `intitle:"DisallowedHost" inurl:error`
- **Ruby on Rails Logs**: `filetype:log inurl:rails`
- **Laravel Debug Mode**: `inurl:"/storage/logs/laravel.log"`
- **Spring Boot Actuators**: `inurl:/actuator/health`

### **43. Exposed Logs**
- **Web Server Logs**: `filetype:log "GET / HTTP/1.1"`
- **Database Logs**: `filetype:log "SQLSTATE"`
- **FTP Connection Logs**: `filetype:log "connected to"`

### **44. Search Misconfigured Services**
- **Elasticsearch Servers**: `inurl:9200 intext:"cluster_uuid"`
- **Kibana Dashboards**: `intitle:"Kibana" inurl:"/app/kibana"`
- **Grafana Dashboards**: `intitle:"Grafana" inurl:/login`
- **Docker Registries**: `inurl:"v2/_catalog"`

### **45. Authentication Flaws**
- **Basic Authentication Pages**: `inurl:"/login" "Basic Authentication"`
- **Open LDAP Directories**: `intext:"dc=" "ldapsearch"`
- **Default FTP Credentials**: `inurl:ftp intitle:"Index of"`

### **46. Remote Management Tools**
- **RDP Portals**: `inurl:"/rdp" intitle:"Remote Desktop"`
- **TeamViewer Exposures**: `intitle:"TeamViewer - Web Login"`
- **VNC Viewers**: `intitle:"VNC viewer"`

### **47. Document Exposures**
- **HR Documents**: `filetype:docx "salary"`
- **Legal Agreements**: `filetype:pdf "agreement"`
- **Confidential Reports**: `filetype:xlsx "confidential"`

### **48. Specific File Searches**
- **PDF Reports**: `filetype:pdf inurl:"/reports"`
- **CSV Files**: `filetype:csv "password"`
- **Code Archives**: `filetype:zip OR filetype:rar "source"`

### **49. IoT and SCADA Systems**
- **SCADA Interfaces**: `intitle:"SCADA" inurl:/login`
- **HMI Exposures**: `intitle:"Human Machine Interface"`
- **Industrial Devices**: `intitle:"Modbus"`

### **50. Misconfigured APIs**
- **GraphQL Endpoints**: `intext:"graphql" inurl:/api`
- **REST APIs**: `inurl:"/api/v1"`
- **SOAP APIs**: `filetype:xml inurl:/soap`

### **51. Email and Messaging Systems**
- **Open SMTP Servers**: `intext:"220 smtp"`
- **Mail Servers**: `intitle:"WebMail Login"`
- **Exposed Chat Platforms**: `intitle:"Rocket.Chat"`

### **52. Cloud and Storage Services**
- **Amazon S3 Buckets**: `inurl:s3.amazonaws.com filetype:txt`
- **Open Google Drive Links**: `inurl:drive.google.com filetype:pdf`
- **Dropbox Links**: `inurl:dropbox.com`

### **53. Code Repositories**
- **Public GitHub Repositories**: `inurl:github.com filetype:json`
- **Bitbucket Links**: `inurl:bitbucket.org`
- **SVN Exposures**: `inurl:"/.svn"`

### **54. Vulnerable PHP Applications**
- **PHP Error Logs**: `filetype:log "PHP Fatal error"`
- **Open PHP Files**: `filetype:php intext:"password"`
- **Unprotected PHPMyAdmin**: `intitle:"phpMyAdmin" "Welcome to phpMyAdmin"`

### **55. Mobile App Backends**
- **Firebase Databases**: `inurl:firebaseio.com "null"`
- **Android APKs**: `filetype:apk`
- **Apple Config Files**: `filetype:plist`

### **56. Search for Metadata**
- **Exif Data**: `filetype:jpg inurl:"/uploads"`
- **Document Metadata**: `filetype:doc intext:"created by"`

### **57. Exploit Search**
- **Common Exploits**: `"exploit-db" filetype:txt`
- **Metasploit Modules**: `filetype:rb inurl:"metasploit"`

### **58. Pentesting Tools**
- **Burp Suite Logs**: `filetype:xml inurl:burp`
- **Wireshark Captures**: `filetype:pcap`

### **59. Search Debug Pages**
- **Debug Logs**: `filetype:log inurl:debug`
- **Development Dumps**: `filetype:txt "dump"`

### **60. Miscellaneous**
- **License Files**: `filetype:lic "license"`
- **Private Forums**: `intitle:"Private Forum"`

### **61. Misconfigured Development Tools**
- **Exposed Jenkins Dashboards**: `intitle:"Dashboard [Jenkins]" inurl:/login`
- **SonarQube Instances**: `intitle:"SonarQube" inurl:/projects`
- **Kubernetes Dashboards**: `intitle:"Kubernetes Dashboard"`

### **62. Payment Information**
- **Transaction Logs**: `filetype:csv intext:"transaction ID"`
- **Payment Gateway Configs**: `filetype:conf inurl:"payment"`
- **Exposed Payment Receipts**: `filetype:pdf inurl:"receipt"`

### **63. Sensitive System Information**
- **Windows Registry Dumps**: `filetype:reg "HKEY"`
- **Linux Environment Variables**: `filetype:txt intext:"PATH"`
- **System Uptime Info**: `intitle:"Uptime since"`

### **64. Vulnerable Email Servers**
- **Open Exchange Servers**: `intitle:"Microsoft Exchange" inurl:/owa`
- **IMAP/POP3 Logs**: `filetype:log intext:"connected to IMAP"`
- **Exposed Email Directories**: `intitle:"index of" "mail"`

### **65. Search Engines and SEO**
- **Unprotected Crawlers**: `intitle:"crawl-delay" inurl:"robots.txt"`
- **SEO Reports**: `filetype:pdf inurl:"SEO"`
- **Backlink Reports**: `filetype:xlsx inurl:"backlinks"`

### **66. Streaming and Media Platforms**
- **Open Media Servers**: `intitle:"VLC Streamer"`
- **Live Broadcasts**: `inurl:live/stream`
- **Shoutcast Streams**: `intitle:"Shoutcast Administrator"`

### **67. API Keys and Secrets**
- **Firebase API Keys**: `filetype:json intext:"apiKey"`
- **Google Maps API Keys**: `intext:"AIza" filetype:env`
- **Stripe Secret Keys**: `filetype:txt intext:"sk_live"`

### **68. Docker and Container Exposures**
- **Docker Registries**: `inurl:"v2/_catalog"`
- **Compose Files**: `filetype:yaml inurl:docker-compose`
- **Kubernetes Configurations**: `filetype:yaml inurl:k8s`

### **69. Git Directories**
- **Exposed Git Directories**: `inurl:".git"`
- **Git Configurations**: `filetype:config inurl:git`
- **Git Credentials**: `filetype:txt intext:"git_password"`

### **70. Exposed Network Shares**
- **SMB Shares**: `intitle:"Index of smb://"`
- **NFS Exposures**: `filetype:conf intext:"nfs"`
- **Shared Directories**: `intitle:"index of /shared"`

### **71. Public Logs**
- **Audit Logs**: `filetype:log intext:"audit"`
- **Access Logs**: `filetype:log "GET"`
- **System Logs**: `filetype:log intext:"root"`

### **72. Website Analytics**
- **Google Analytics Dashboards**: `intitle:"Google Analytics" inurl:"/analytics"`
- **Matomo (Piwik) Dashboards**: `intitle:"Matomo" inurl:"/index.php"`

### **73. Vulnerable Plugins**
- **WordPress Plugins**: `inurl:"/wp-content/plugins/"`
- **Joomla! Plugins**: `inurl:"/plugins/" intitle:"Joomla"`
- **Drupal Modules**: `inurl:"/modules/"`

### **74. SQL Injection Points**
- **Error-based SQL Injection**: `intext:"You have an error in your SQL syntax"`
- **Union-based SQL Injection**: `intext:"union select"`
- **Blind SQL Injection Test**: `inurl:"id=" AND intext:"OR 1=1"`

### **75. Exposed Logs of Web Apps**
- **Application Logs**: `filetype:log inurl:"/logs"`
- **Session Logs**: `filetype:log intext:"session"`
- **Error Logs**: `filetype:log "error"`

### **76. Mobile App Development**
- **Android App Configs**: `filetype:xml intext:"manifest"`
- **iOS Plist Files**: `filetype:plist`
- **Debug APKs**: `filetype:apk inurl:"debug"`

### **77. Website Vulnerabilities**
- **Local File Inclusion**: `inurl:"file=" intext:"../../"`
- **Directory Traversal**: `inurl:"../../" intitle:index`
- **Open Proxy**: `inurl:proxy.pac`

### **78. Web Hosting Exposures**
- **CPanel Admin**: `intitle:"cPanel Login"`
- **Plesk Admin**: `intitle:"Plesk Control Panel"`
- **WHM Login**: `intitle:"WHM Login"`

### **79. Cloud Service Vulnerabilities**
- **Azure Credentials**: `filetype:json intext:"azure"`
- **Google Cloud Bucket**: `inurl:"storage.googleapis.com"`
- **AWS S3 Buckets**: `inurl:"s3.amazonaws.com"`

### **80. Open Web Services**
- **SOAP Web Services**: `filetype:wsdl`
- **Public REST APIs**: `filetype:json inurl:"/api"`
- **GraphQL Endpoints**: `inurl:"/graphql"`
### **81. Code Debugging and Errors**
- **Debug Logs in PHP**: `filetype:log "PHP Notice"`
- **ASP.NET Debug Pages**: `intitle:"Server Error" inurl:"/aspxerrorpath"`
- **Python Tracebacks**: `filetype:log "Traceback (most recent call last)"`

### **82. Cryptocurrency Wallets and Transactions**
- **Exposed Wallet Keys**: `filetype:json intext:"wallet_private_key"`
- **Bitcoin Transactions**: `filetype:csv "bitcoin" "transaction ID"`
- **Ethereum Logs**: `filetype:log "ethereum"`

### **83. Publicly Available Certificates**
- **SSL/TLS Certificates**: `filetype:crt "BEGIN CERTIFICATE"`
- **PGP Keys**: `filetype:asc "PGP PUBLIC KEY BLOCK"`
- **SSH Private Keys**: `filetype:pem "BEGIN RSA PRIVATE KEY"`

### **84. Default Pages**
- **Default Apache Pages**: `intitle:"Apache HTTP Server Test Page"`
- **Default Nginx Pages**: `intitle:"Welcome to nginx!"`
- **Default IIS Pages**: `intitle:"Welcome to the IIS"`

### **85. CRM and ERP Systems**
- **Salesforce Login Pages**: `intitle:"Salesforce Login"`
- **OpenERP/Odoo**: `intitle:"Odoo" inurl:/web/login`
- **Zoho CRM**: `intitle:"Zoho CRM"`

### **86. Sensitive Multimedia Files**
- **Exposed Camera Feeds**: `intitle:"live view" inurl:/view.shtml`
- **Security Footage**: `inurl:/axis-cgi/jpg/image.cgi`
- **Private Multimedia**: `filetype:mp4 OR filetype:avi "confidential"`

### **87. E-Learning Platforms**
- **Moodle Admin Pages**: `intitle:"Moodle" inurl:/admin`
- **LMS Exposures**: `intitle:"Learning Management System"`
- **Course Material Leaks**: `filetype:pdf inurl:"/courses"`

### **88. System Configurations**
- **Firewall Rules**: `filetype:conf intext:"firewall"`
- **VPN Configurations**: `filetype:ovpn intext:"client"`
- **Proxy Configurations**: `filetype:pac`

### **89. Vulnerable Subdomains**
- **Test Subdomains**: `site:*.example.com inurl:"test"`
- **Staging Subdomains**: `site:*.example.com inurl:"staging"`
- **Old Versions**: `site:*.example.com inurl:"v1"`

### **90. Exposed Backup Systems**
- **Unprotected Bacula Directories**: `intitle:"Index of /backup"`
- **Backup Scripts**: `filetype:sh intext:"backup.sh"`
- **Open Backup Files**: `filetype:tar.gz OR filetype:zip "backup"`

### **91. Industrial Control Systems (ICS)**
- **SCADA Systems**: `intitle:"SCADA Login"`
- **PLC Configurations**: `filetype:txt intext:"PLC Configuration"`
- **HMI Panels**: `intitle:"HMI" inurl:/control`

### **92. Exposed Sensitive Forms**
- **Medical Records**: `filetype:csv intext:"patient_name"`
- **Credit Card Numbers**: `filetype:txt intext:"credit_card"`
- **SSN Details**: `filetype:xlsx intext:"social security"`

### **93. Blockchain and Crypto-Exchanges**
- **Crypto Exchange Dashboards**: `intitle:"Crypto Exchange Login"`
- **Mining Pools**: `intitle:"Mining Pool" inurl:/dashboard`
- **Blockchain Nodes**: `intitle:"Blockchain Explorer"`

### **94. Development Configurations**
- **Environment Files**: `filetype:env "APP_ENV"`
- **JSON Configurations**: `filetype:json intext:"config"`
- **INI Configurations**: `filetype:ini "password"`

### **95. Online Voting and Polling**
- **Voting Dashboards**: `intitle:"Voting System"`
- **Election Results**: `filetype:pdf intext:"election results"`
- **Public Polls**: `intitle:"Poll Results"`

### **96. File Sharing Platforms**
- **Open File Sharing Links**: `intitle:"Index of" "Shared Files"`
- **Exposed File Uploads**: `intitle:"Upload Files"`
- **Open File Transfer Logs**: `filetype:log inurl:/ftp`

### **97. Public Codebases**
- **Open Python Scripts**: `filetype:py intext:"import"`
- **PHP Configurations**: `filetype:php inurl:"config"`
- **JS Files**: `filetype:js intext:"var"`

### **98. Security Testing Tools**
- **Nmap Results**: `filetype:txt "Nmap scan report"`
- **Burp Suite Logs**: `filetype:xml inurl:burp`
- **Metasploit Outputs**: `filetype:txt intext:"metasploit"`

### **99. DNS and WHOIS Data**
- **WHOIS Results**: `filetype:txt inurl:whois`
- **DNS Zone Files**: `filetype:txt "zone"`
- **Reverse DNS Logs**: `filetype:log "reverse lookup"`

### **100. Default Credentials**
- **Hardcoded Admin Logins**: `filetype:txt "admin:password"`
- **Default Router Passwords**: `filetype:txt intext:"default password"`
- **Exposed Credential Dumps**: `filetype:csv intext:"username,password"`