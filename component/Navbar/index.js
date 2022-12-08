
export const Navbar = () => {
    const toggleMenu = () => document.body.classList.toggle("open");
    return (
        <nav className="navbar">
        <button onClick={toggleMenu} className="burger"></button>
        <button className="button">Home</button>
        <div className="dropdowns">
          <div className="dropdown">
            <button className="button">
              Contact Us
            </button>
           </div>
          <div className="dropdown">
            <a href='/#method' className="button">
              Methods
            </a>
          </div>
        </div>
      </nav>
    );
    }