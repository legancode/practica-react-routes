import React from 'react'
import { Link } from 'react-router-dom'

const Page = ({ page }) => {
    return (
        <>
            <div>
                Soy la pagina {page.params.value}
            </div>
            <Link to="/pages">Volver</Link>
        </>
    )
}

export default Page
