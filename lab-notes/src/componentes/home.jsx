import React from 'react'

const Hero = ({handleLogout}) => {

    return(
        <>
        <section>
            <h2> Welcome</h2>
            <button onClick={handleLogout}>Cerrar sesion </button>
            </section>
        </>
    )
}

export default Hero;