import {Link} from 'react-router-dom'
export default function Login(){
    return(
        <div>
        <h2>SIGN IN</h2>
           <form>
           Email: <input type="email" name="email"/><br/>
           Password: <input type="password" name="password"/><br/>
           <button type="submit">Login</button><br/><br/>
           </form>
           <Link to="/signup">
           Signup
           </Link>
           
           
        </div>
    );

}