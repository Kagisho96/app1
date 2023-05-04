import { Link } from "react-router-dom";

export const Data = () => {
    return <>
    <Link to={`/register`}></Link>
    <form>
        <input type="text" id="name" name="name" />
        <input type="text" id="email" name="email" />
        <input type="text" id="phone" name="phone" />
        <input type="text" id="address" name="address" />
        
    </form>  
    </>
  
};
