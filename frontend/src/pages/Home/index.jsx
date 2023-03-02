import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import './Home.css'

export const HomePage = () => {
    return (
        <div className="home">
            <Header />

            <h1>Uni<span>Services</span></h1>
        </div>
    )
}