import React from 'react'

const Navbar = () => {
    return () => {
        <div id="sticky-header">
        <a href="#"><button>Home</button></a>
        <a href="#"><button>About</button></a>
        <a href="#"><button>Projects</button></a>
        <a href="#" className="right"><button>Contact</button></a>
      </div>
    }
}

export default Navbar