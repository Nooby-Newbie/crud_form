import {Link } from 'react-router-dom';
export default function Signup(){
    return(
        <div>
        <h2>SIGN UP</h2>
           <form>
           Email: <input type="email" name="email"/><br/>
           Password: <input type="password" name="password"/><br/>
           Confirm Password: <input type="password" name="passwd"/><br/>
           <button type="submit" >Signup</button><br/><br/>
           </form>
           <Link  to="/">
           Login
           </Link>
        </div>
    );

}