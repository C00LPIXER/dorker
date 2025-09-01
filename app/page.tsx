"use client";

import { useState } from 'react';
import { dorks } from '@/data/dorks';
import DorkCard from './components/DorkCard';

const ITEMS_PER_PAGE = 9;

export default function HomePage() {
  const [domain, setDomain] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [triedQueries, setTriedQueries] = useState<Set<string>>(new Set());
  const [validationMessage, setValidationMessage] = useState('');

  const validateDomain = (domain: string) => {
    const domainRegex = /^(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
    return domainRegex.test(domain);
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDomain = e.target.value.trim();
    setDomain(newDomain);
    if (newDomain === '') {
      setValidationMessage('[ ERROR ] Please enter a domain');
    } else if (validateDomain(newDomain)) {
      setValidationMessage('[ OK ] Valid domain format');
    } else {
      setValidationMessage('[ ERROR ] Invalid domain format (e.g., sub.domain.com)');
    }
  };

  const handleSearch = (dork: string) => {
    if (!validateDomain(domain)) {
      setValidationMessage('[ ERROR ] Invalid domain format (e.g., sub.domain.com)');
      return;
    }
    const searchQuery = dork.replace(/\{domain\}/g, domain);
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleSearchUrl, '_blank');
    setTriedQueries(new Set(triedQueries).add(dork));
  };

  const totalPages = Math.ceil(dorks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDorks = dorks.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 matrix-glow"></h1>
        <p className="text-green-400 max-w-2xl mx-auto text-lg">
          Discover how to use advanced search techniques to identify potential
          vulnerabilities.
        </p>
        <p className="text-yellow-500 text-sm">
          Note: Only use on domains you have permission to test
        </p>
      </div>
      <div className="mb-8">
        <label
          htmlFor="domainInput"
          className="block text-sm font-medium text-green-500 mb-2"
        >
          Target Domain:
        </label>
        <div className="relative">
          <input
            type="text"
            id="domainInput"
            className="input-field w-full px-4 py-3 rounded-sm text-lg"
            placeholder="Enter domain (e.g., example.com)"
            value={domain}
            onChange={handleDomainChange}
          />
          <div
            id="validationMessage"
            className={`text-center pt-3 text-sm ${
              validationMessage.includes('ERROR') ? 'text-red-500' : 'text-green-400'
            }`}
          >
            {validationMessage}
          </div>
        </div>
      </div>

      <div
        id="dorkContainer"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {currentDorks.map((dork, index) => (
          <DorkCard
            key={index}
            dork={dork}
            onSearch={handleSearch}
            isTried={triedQueries.has(dork.dork)}
          />
        ))}
      </div>

      <div id="pagination" className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`page-button ${currentPage === page ? 'current-page' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
