import { extractKeywords } from "../utils";

export default function JobListItem({ job, handleSelectKeyword }) {
  const {
    company,
    logo,
    isNew,
    isFeatured,
    position,
    postedAt,
    contract,
    location,
  } = job;

  const keywords = extractKeywords(job);

  return (
    <div className="listing">
      <img src={logo} className="listing__logo" alt={`${company}'s logo`} />

      <div className="listing__details">
        <div className="listing__wrapper">
          <h3 className="listing__company">{company}</h3>

          {isNew && (
            <span className="listing__tag listing__tag--new">New!</span>
          )}

          {isFeatured && (
            <span className="listing__tag listing__tag--featured">
              Featured
            </span>
          )}
        </div>

        <h2 className="listing__position">{position}</h2>

        <div className="listing__wrapper">
          <span className="listing__detail">{postedAt}</span>
          <span className="listing__detail">{contract}</span>
          <span className="listing__detail">{location}</span>
        </div>
      </div>

      <div className="listing__keywords">
        {keywords.map((keyword, index) => (
          <button
            key={index}
            className="listing__keyword"
            onClick={() => handleSelectKeyword(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
}