
export const Navbar = () => {
    const toggleMenu = () => document.body.classList.toggle("open");
    return (
        <nav class="navbar">
        <button onClick={toggleMenu} class="burger"></button>
        <button class="button">Home</button>
        <div class="dropdowns">
          <div class="dropdown">
            <button class="button">
              Contact Us
            </button>
           </div>
          <div class="dropdown">
            <button class="button">
              Methods
           
            </button>
          
          </div>
        </div>
      </nav>
    );
    }