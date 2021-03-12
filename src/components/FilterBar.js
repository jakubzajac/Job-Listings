import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function FilterBar({
  selectedKeywords,
  removeKeyword,
  clearKeywords,
  isFilterBarVisible,
}) {
  return (
    <CSSTransition
      in={isFilterBarVisible}
      timeout={200}
      classNames="fade-move"
      mountOnEnter
      unmountOnExit
    >
      <div className="filter-bar">
        <TransitionGroup component="ul" className="filter-bar__keywords">
          {selectedKeywords.map((keyword) => (
            <CSSTransition key={keyword} classNames="fade" timeout={200}>
              <li className="filter-bar__keyword" key={keyword}>
                <div className="filter-bar__keyword-text">{keyword}</div>
                <button
                  className="filter-bar__keyword-button"
                  onClick={() => removeKeyword(keyword)}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button className="filter-bar__clear" onClick={clearKeywords}>
          Clear
        </button>
      </div>
    </CSSTransition>
  );
}
