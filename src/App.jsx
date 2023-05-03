// import {dash} from "../components";




 const StartPoint = ({tittle, description, image}) => {
  return (
    <div>
       <h1>{tittle}</h1>
       <p>{description}</p>
       <div>{image}</div>
       <img
       src="https://i.imgur.com/MK3eW3Am.jpg"
       alt="Katherine Johnson"
      />
    <div>
      <dash />
    </div>
    </div>
  );

};

export default StartPoint;