import styles from "../styles/Suggestions.module.css";

type Suggestion = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  numberOfComments: number;
};

const Suggestions = ({
  title,
  category,
  upvotes,
  description,
  numberOfComments,
}: Suggestion) => {
  return (
    <>
      <div className={styles.suggestionContainer}>
        <div className={styles.suggestionInfo}>
          <div className={styles.suggestionUpvotes}>
            <p>{upvotes}</p>
          </div>
          <div className={styles.suggestionDescription}>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{category}</p>
          </div>
        </div>
        <div className={styles.commentContainer}>
          
          <p>{numberOfComments}</p>
        </div>
      </div>
    </>
  );
};

export default Suggestions;
