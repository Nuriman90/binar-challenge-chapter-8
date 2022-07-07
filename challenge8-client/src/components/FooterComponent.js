import React from 'react'

const FooterComponent = () => {
    return (
        <div className='container' style={{ textAlign: "center", marginTop: "350px" }}>
            <div className='row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} CHALLENGE 8 | Binar Academy | By | Nur Iman
                </p>
            </div>
        </div>
    )
}

export default FooterComponent