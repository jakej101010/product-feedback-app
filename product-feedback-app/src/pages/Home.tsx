import Suggestions from "../components/Suggestion";
import SuggestionHeader from "../components/SuggestionHeader";
import data from "../assets/data/data.json";

const Home = () => {
  const feedbackData = data.productRequests;

  return (
    <>
      <div>
        <SuggestionHeader numberOfSuggestions={feedbackData.length} />
      </div>
      <div>
        {feedbackData.map((item) => (
          <Suggestions
            title={item.title}
            description={item.description}
            category={item.category}
            status={item.status}
            id={item.id}
            upvotes={item.upvotes}
            key={item.id}
            numberOfComments={item.comments ? item.comments.length : 0}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
