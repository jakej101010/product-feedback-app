type Comment = {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
};

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
  id,
  title,
  category,
  upvotes,
  status,
  description,
  numberOfComments,
}: Suggestion) => {
  return (
    <>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{upvotes}</p>
        <p>{category}</p>
        <p>{numberOfComments}</p>
      </div>
    </>
  );
};

export default Suggestions;
