import React, { useState, useEffect } from "react";
import './home.scss';

import { Link } from 'react-router-dom';


const Home = ({ match }) => {

  const [logements, setLogements] = useState([]);
//  const [clickedItem, setClickedItem] = useState(null);


  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch('api/logements');
        const data = await response.json();
        setLogements(data);
    }

    return (
        <>
        <header className="header">
            <Link to={`${match.url}`}>
                <img src={`${window.location.origin}/img/logo.png`}  alt="SportSee Home page" className="header__logo"/>
                <img src={`${window.location.origin}/img/logo_text.png`}  alt="SportSee Home page" className="header__logo__text"/>
            </Link>
            <nav className="header__navbar">
                <Link to="/" className="header__navbar__link" data-active="true">Accueil</Link>
                <Link to="/" className="header__navbar__link" data-active="true">Profil</Link>
                <Link to="/" className="header__navbar__link" data-active="true">Réglage</Link>
                <Link to="/" className="header__navbar__link" data-active="true">Communauté</Link>
            </nav>
        </header>

        <div class="col-md-12">
        <div class="row">
            <div class="col-md-2 p-0rem">
            <nav className="horizontal__menu">
                <Link><img src={`${window.location.origin}/img/icon_1.png`} alt="SportSee Home page"/></Link>
                <Link><img src={`${window.location.origin}/img/icon_2.png`} alt="SportSee Home page"/></Link>
                <Link><img src={`${window.location.origin}/img/icon_3.png`} alt="SportSee Home page"/></Link>
                <Link><img src={`${window.location.origin}/img/icon_4.png`} alt="SportSee Home page"/></Link>
            </nav>
            </div>
            <div class="col-md-10 main mt-5rem">
                <span className="main__title black">Bonjour <span className="main__title red">Thomas</span></span>
                <p className="main__title__sub mt-2rem">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </div>
        </div>


        </>
    )
}

export default Home;