import './Header.css'
import Bonsai from '../../../public/bonsai1.png'


export default function Header(){
    return(
      <header>
      <div className='headerWrapper'>
        <div className='bonsaiWrapper'>
        <h1 className='bonsaiText'>bonsai</h1>
      </div>
        <div className='artWrapper'>
        <h1 className='artText'>THE ART</h1>
        <h2 className='catchPhrase'> <span className="underline">________</span> OF TREE GROWING</h2>
        <p className='heroText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Velit, alias ut! Dicta animi quaerat 
          odit aperiam ullam placeat <br /> harum fugitminus omnis aspernatur, voluptatibus voluptates optio enim, 
          vero natus veritatis.</p>
          <button className="styledButton">Shop</button>
      </div>
      <div className='stripe'>
                <img id='bonsaiImg' src={Bonsai} alt="" />
              <h3 className='divZahl'>01</h3>
            </div>
      </div>
      </header>
    );
} 