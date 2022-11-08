import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer mt-auto py-0">
                <div className="container">
                    <span className="text-muted">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-0">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                        </ul>
                        <p className="text-center text-muted">© 2022 FITnFINE, Inc</p>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
