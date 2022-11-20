
export const Navbar = () => {
    const toggleMenu = () => document.body.classList.toggle("open");
    return (
        <nav class="navbar">
        <button onClick={toggleMenu} class="burger"></button>
        <button class="button">Home</button>
        <div class="dropdowns">
          <div class="dropdown">
            <button class="button">
              Services
              <img src="./assets/chevron.svg" />
            </button>
            <div class="dropdown-menu">
              <button>UX/UI Design</button>
              <button>Web Applications</button>
              <button>SEO Advice</button>
            </div>
          </div>
          <div class="dropdown">
            <button class="button">
              Products
              <img src="./assets/chevron.svg" />
            </button>
            <div class="dropdown-menu">
              <button>Learn CSS Ebook</button>
              <button>Security Course</button>
              <button>Masterclass Bundle</button>
            </div>
          </div>
          <div class="dropdown">
            <button class="button">
              Support
              <img src="./assets/chevron.svg" />
            </button>
            <div class="dropdown-menu">
              <button>Live Chat</button>
              <button>Send Email</button>
              <button>Request Help</button>
            </div>
          </div>
        </div>
      </nav>
    );
    }