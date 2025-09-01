const AboutPage = () => (
  <main className="container mx-auto max-w-4xl">
    <section className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4 matrix-glow">About Dorker</h1>
      <p className="text-green-400 max-w-2xl mx-auto text-lg">
        Dorker is an cybersecurity tool designed for researchers and
        developers to leverage Google Dorking techniques. It simplifies the
        process of discovering potential vulnerabilities and exposed sensitive
        files.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold matrix-glow">Overview</h2>
      <p className="text-green-400 text-lg mt-4">
        Google Dorking (or Google hacking) is a powerful technique for
        uncovering information indexed by search engines that could
        potentially expose vulnerabilities. Dorker generates predefined Google
        dorks and allows users to quickly test these against target domain,
        making vulnerability scanning faster and more efficient.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold matrix-glow">Ethical Disclaimer</h2>
      <p className="text-yellow-400 text-lg mt-4">
        Please note: Dorker is intended for educational purposes and ethical
        testing only. Always ensure you have proper authorization before
        testing any domain or system.
      </p>
    </section>
  </main>
);

export default AboutPage;
