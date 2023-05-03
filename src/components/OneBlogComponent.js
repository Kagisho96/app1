import { useParams } from "react-router-dom"

export const OneBlockComponent = () => {
  const { id} = useParams()
  return (
    <div>
      <h1> Blog {id}</h1>
    </div>
  );
};
