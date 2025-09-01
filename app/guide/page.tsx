const GuidePage = () => (
  <main className="container mx-auto max-w-5xl">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold matrix-glow">Google Dorking Guide</h1>
    </header>
    <section className="mb-12">
      <h2 className="text-2xl font-bold section-header">
        What is Google Dorking?
      </h2>
      <p className="text-lg mt-4">
        Google Dorking, also known as Google Hacking, is the process of using
        advanced search operators in Google Search to find specific
        information that is not easily accessible. This can include sensitive
        files, misconfigured servers, exposed databases, or other
        vulnerabilities on the internet.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold section-header">
        Why Use Google Dorking?
      </h2>
      <p className="text-lg mt-4">
        Google Dorking is widely used by cybersecurity professionals,
        penetration testers, and ethical hackers to identify security flaws
        and vulnerabilities in websites. It helps:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Discover publicly accessible sensitive files.</li>
        <li>Identify misconfigured servers or directories.</li>
        <li>Check for exposed login portals or credentials.</li>
        <li>Test websites for security compliance.</li>
      </ul>
      <p className="text-lg mt-4">
        While Google Dorking is a powerful tool, it must be used ethically and
        only on domains you own or have explicit permission to test.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold section-header">
        How Does Google Dorking Work?
      </h2>
      <p className="text-lg mt-4">
        Google Dorking relies on Google’s advanced search operators, which
        refine search results based on specific queries. Some common operators
        include:
      </p>
      <table
        className="table-auto border-collapse border border-green-500 w-full mt-4"
      >
        <thead>
          <tr>
            <th className="border border-green-500 px-4 py-2">Operator</th>
            <th className="border border-green-500 px-4 py-2">Description</th>
            <th className="border border-green-500 px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-500 px-4 py-2">filetype:</td>
            <td className="border border-green-500 px-4 py-2">
              Searches for specific file types.
            </td>
            <td className="border border-green-500 px-4 py-2">filetype:pdf</td>
          </tr>
          <tr>
            <td className="border border-green-500 px-4 py-2">site:</td>
            <td className="border border-green-500 px-4 py-2">
              Limits results to a specific domain.
            </td>
            <td className="border border-green-500 px-4 py-2">
              site:example.com
            </td>
          </tr>
          <tr>
            <td className="border border-green-500 px-4 py-2">intitle:</td>
            <td className="border border-green-500 px-4 py-2">
              Searches for keywords in page titles.
            </td>
            <td className="border border-green-500 px-4 py-2">intitle:"login"</td>
          </tr>
          <tr>
            <td className="border border-green-500 px-4 py-2">inurl:</td>
            <td className="border border-green-500 px-4 py-2">
              Searches for keywords in URLs.
            </td>
            <td className="border border-green-500 px-4 py-2">inurl:admin</td>
          </tr>
          <tr>
            <td className="border border-green-500 px-4 py-2">"keyword"</td>
            <td className="border border-green-500 px-4 py-2">
              Searches for exact matches of a keyword or phrase.
            </td>
            <td className="border border-green-500 px-4 py-2">"password file"</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold section-header">
        Resources for Learning
      </h2>
      <p className="text-lg mt-4">
        To dive deeper into Google Dorking, check out the following resources:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>
          <a
            href="https://www.exploit-db.com/google-hacking-database"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exploit Database’s Google Hacking Database (GHDB)
          </a>
        </li>
        <li>
          <a
            href="https://owasp.org"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP
          </a>
        </li>
      </ul>
    </section>
  </main>
);

export default GuidePage;
