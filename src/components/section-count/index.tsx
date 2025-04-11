import './style.css';

const SectionCount = () => {
  return (
    <div className="section-count">
      <h2 className="section-count__title">TOP 5</h2>
      <ol className="section-count__list">
        <li className="section-count__item">Link</li>
        <li className="section-count__item number">1. 0x</li>
      </ol>
    </div>
  );
}

export default SectionCount;