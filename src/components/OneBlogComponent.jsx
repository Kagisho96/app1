import { useParams } from "react-router-dom"

export const OneBlogComponent = () => {
  const { id} = useParams()
  return (
    <div>
      <h1> {id}</h1>
    </div>
  );
};