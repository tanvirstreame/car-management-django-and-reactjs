const Nav = () => (
    <nav className="navbar navbar-expand-sm navbar-expand-md navbar-full  bg-info navbar-dark">
        <a className="navbar-brand" href="/create-owner">Car Cater</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/create-owner">Create Owner</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/create-car">Create Car</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/create-showroom">Create Show Room</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/all-car">All Car</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/get-show-room">Show Room</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/car-assign-showroom">Car Assign Showroom</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/owner-assign-showroom">Owner Assign Showroom</a>
            </li>
        </ul>
    </nav>
);

export default Nav;