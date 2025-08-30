import React from 'react'

function Header() {
    return (
        <>
            <nav class="navbar bg-dark navbar-dark navbar-expand-md">
                <div class="container-fluid">
                    <a href="" class="navbar-brand">
                        <img src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=640&q=75" alt="" class="weblogo" />
                    </a>
                    {/* nav div end */}
                    <div class="menu">
                        <ul class="navbar-nav">
                            <li><a href="" class="nav-link">Home</a></li>
                            <li><a href="" class="nav-link">About</a></li>
                            <li><a href="" class="nav-link">Brand</a></li>
                            <li><a href="" class="nav-link">Our Team</a></li>
                            <li><a href="" class="nav-link">Contact</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
