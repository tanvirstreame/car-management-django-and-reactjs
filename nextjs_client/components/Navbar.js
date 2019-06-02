import Link from 'next/link'
const Navbar = () => (

  <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#17a2b8' }}>
    <a className='navbar-brand text-light' href='#'>Car Catar</a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' />
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link href='/create-owner'><a className='nav-link text-light'>Create Owner</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/create-car'><a className='nav-link text-light'>Create Car</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/create-showroom'><a className='nav-link text-light'>Create Show Room</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/all-car'><a className='nav-link text-light'>All Car</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/get-show-room'><a className='nav-link text-light'>Show Room</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/car-assign-showroom'><a className='nav-link text-light'>Car Assign Showroom</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/owner-assign-showroom'><a className='nav-link text-light'>Owner Assign Showroom</a></Link>
        </li>
      </ul>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link href='/login'><a className='nav-link text-light'>Sign in</a></Link>
        </li>
        <li className='nav-item'>
          <Link href='/registration'><a className='nav-link text-light'>Sign up</a></Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
