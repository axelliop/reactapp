import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"




                const NavBar = () => {
                  return (
                    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">PizzAxel</Link>
  </div>

  <div className="flex-3">
    <Link to={'/category/chevrolet'}  className="btn btn-ghost normal-case text-xl">Chevrolet
    </Link>
  </div>

  <div className="flex-3">
    <Link to={'/category/fiat'}  className="btn btn-ghost normal-case text-xl">fiat
    </Link>
  </div>

  <div className="flex-3">
    <Link to={'/category/volkswagen'}  className="btn btn-ghost normal-case text-xl">volkswagen
    </Link>
  </div>
  
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
                <CartWidget></CartWidget>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Productos</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Ver Carrito</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>


{/* para hacer link, simplemente encerrar en un <Link></Link> */}

          <Link to='/star' className="justify-between">
            StarWars
            <span className="badge">New</span>
          </Link> 
        </li> 
        <li><Link to='/'>Settings</Link></li> 


        
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
                  )
                }
                export default NavBar