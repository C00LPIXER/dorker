import { Dork } from '@/data/dorks';

interface DorkCardProps {
  dork: Dork;
  onSearch: (dork: string) => void;
  isTried: boolean;
}

const DorkCard = ({ dork, onSearch, isTried }: DorkCardProps) => {
  const { title, description } = dork;

  const descriptionWithDomain = description.replace(
    /\{domain\}/g,
    `<span class="domain-placeholder">{domain}</span>`
  );

  return (
    <div className="dork-card rounded-sm">
      <h3 className="text-xl mb-2">{title}</h3>
      <p
        className="text-sm mb-4 example-text"
        dangerouslySetInnerHTML={{ __html: descriptionWithDomain }}
      ></p>
      <button
        className={`search-button px-4 py-2 rounded-sm w-full ${
          isTried ? 'tried-query' : ''
        }`}
        onClick={() => onSearch(dork.dork)}
      >
        Search
      </button>
    </div>
  );
};

export default DorkCard;
