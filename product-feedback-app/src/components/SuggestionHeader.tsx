import styles from "../styles/Suggestions.module.css";

type Suggestion = {
  numberOfSuggestions: number;
};

const SuggestionHeader = ({ numberOfSuggestions }: Suggestion) => {
  return (
    <>
      <div className={styles.suggestionHeader}>
        <h3>{numberOfSuggestions} Suggestions</h3>
        <p>
          Sort by <span>Most Upvotes</span>
        </p>
        <button>+ Add Feedback</button>
      </div>
    </>
  );
};

export default SuggestionHeader;
