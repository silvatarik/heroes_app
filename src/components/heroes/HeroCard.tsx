import React from 'react'
import {
    Link
} from "react-router-dom";

interface heroProps {
    id: string,
    superhero: string,
    alter_ego: string,
    first_appearance: string,
    characters: string,
}

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }: heroProps) => {

    return (
        <div className="card bordered w-96 shadow-sm bg-accent text-accent-content">
            <figure>
                <img src={`./assets/${id}.jpg`} className="w-full h-96 object-cover object-top" alt="Imagen de heroe"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{superhero}</h2>
                <p>{first_appearance}</p>
                <div className="card-actions">
                    <span className=" w-full">Personajes:</span>
                    <small>{characters}</small>
                    <span className="block w-full">
                        Alter Ego:
                        <div className="badge badge-ghost block mt-2">{alter_ego}</div>
                    </span>
                </div>

            </div>
            <Link to={`./hero/${id}`}>
                <button className="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-primary rounded-b-lg hover:bg-primary-focus">Ver heroe</button>
            </Link>
        </div>
    )
}
