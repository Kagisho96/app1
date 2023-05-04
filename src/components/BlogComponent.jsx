import { Link, useParams, Outlet } from "react-router-dom";


export const blogPosts = [
  {
    id: 1,
    title: "Welcome to My First Blog: A Journey of Self-Discovery",
    description:
      "In this blog, I'll be sharing my personal experiences and insights on life, love, and everything in between. Join me on this journey of self-discovery as we explore the depths of the human psyche and uncover the secrets to living a fulfilling life.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 2,
    title: "The Power of Positive Thinking: How to Transform Your Life",
    description:
      "In this post, I'll be discussing the power of positive thinking and how it can transform your life. From changing your mindset to practicing gratitude, I'll be sharing practical tips and techniques to help you cultivate a more positive outlook on life.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 3,
    title: "The Art of Mindfulness: Finding Peace in a Busy World",
    description:
      "In this post, I'll be exploring the art of mindfulness and how it can help you find peace in a busy world. From meditation to breathing exercises, I'll be sharing practical techniques to help you cultivate a more mindful and present way of living.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 4,
    title: "The Importance of Self-Care: How to Prioritize Your Well-Being",
    description:
      "In this post, I'll be discussing the importance of self-care and how to prioritize your well-being. From setting boundaries to practicing self-compassion, I'll be sharing practical tips and techniques to help you take care of yourself both physically and mentally.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 5,
    title: "The Power of Gratitude: How to Cultivate a Grateful Heart",
    description:
      "In this post, I'll be exploring the power of gratitude and how it can transform your life. From keeping a gratitude journal to practicing random acts of kindness, I'll be sharing practical tips and techniques to help you cultivate a more grateful heart.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 6,
    title: "The Art of Forgiveness: How to Let Go of Resentment and Anger",
    description:
      "In this post, I'll be discussing the art of forgiveness and how to let go of resentment and anger. From practicing empathy to reframing your perspective, I'll be sharing practical tips and techniques to help you cultivate a more forgiving and compassionate mindset.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
];

export const DisplayBlog  = ({id, title, description, image, date}) => {
    return (
        <Link to={`/blogs/${id}`}> 
        <div className="blog-card">
            <div className="blog-image">
                <img src={image} alt={title} />
            </div>
            <div className="blog-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </div>
        </Link>
        );
  
};


export const BlogComponent = () => {
  const { id } = useParams();
  return (
    <div className="blog-container">
      {!id ? (
        <>
          <div className="blog-posts">
            {blogPosts.map((blog) => DisplayBlog(blog))}
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
