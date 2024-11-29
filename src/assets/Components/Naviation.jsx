import './Navigation.css'
import BonsaiLogo from '../../../public/bonsaiLogo.png'

export default function Navigation (){

    return(
        <div>
 <div className="navwrapper">
          <div className='logoDiv'>
            <img className='bonsailogo' src= {BonsaiLogo} alt="" />
          </div>
          <nav className="navbar">
            <ul>
            <li><a href="/">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        </div>

    );
}