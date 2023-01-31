import React from 'react';

export default function HeaderContent(){

    const headerVar = (
        <header> 
            <nav className='navbar'>
                <div className='nav-logo'></div>
                <div>
                    <h2 className='nav-name'>Kamisato Ayaka</h2>
                    <h3 className='nav-title'>Shirasagi Himegimi</h3>
                    <h5 className='nav-brief'>kamisatoayaka.website</h5>
                </div>
                <div className='navbutton'>
                    <button className='nav-email'>Email</button>
                    <button className='nav-linked'>LinkedIn</button>
                </div>
            </nav>
        </header>
    )

    return headerVar;
}