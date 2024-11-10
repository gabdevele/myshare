import star from './assets/star.svg'
import logo from './assets/logo.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Imprint = () => {
    return (
    <div className="flex flex-col items-center max-w-7xl w-full justify-center">
        <div className="w-full flex justify-center mb-4 md:mb-8">
            <Link to="/"><img src={logo} alt="logo" className="w-44 h-auto" /></Link>
        </div>
        <div className="w-full md:w-1/3 flex justify-center text-left px-2 items-center my-4">
            <h1 className='text-3xl flex justify-center w-full items-center bold-font'>
            <img src={star} alt="star" className="w-8 h-auto mr-3" />
            Imprint
            </h1>
        </div>
        <div className="w-full md:w-1/3 flex justify-center text-left px-2 items-center my-16">
            <p className="text-white text-opacity-70 text-lg">
            <strong className="bold-font">Powered by</strong>
            <br/>
            MeYou S.r.l.
            <br/>
            (Corso Porta Nuova 1, VR)
            <br/>
            <br/>
            <strong className="bold-font">Represented by</strong>
            <br/>
            Giacomo Bertolazzi
            <br/>
            Matteo Turle
            <br/>
            <br/>
            <strong className="bold-font">E-mail address:</strong>
            <br/>
            team@myshare.lol
            </p>
        </div>

        <Footer />
    </div>
    )
}

export default Imprint;