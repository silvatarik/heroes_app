import React, { useMemo } from 'react'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

interface paramsHero {
    heroeID: string
}

export const HeroView = () => {
    const { heroeID }: paramsHero = useParams();
    const history = useHistory();
    const hero = useMemo(() => getHeroesById(heroeID), [heroeID])

    if (!hero) return <Redirect to="/" />;

    return (
        <div className="container mx-auto p-5">
            <div className="card lg:card-side bordered ">
                <figure>
                    <img src={`../assets/${hero?.id}.jpg`} className="h-96" alt="Imagen de heroe" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{hero?.superhero}</h2>
                    <p>{hero?.first_appearance}</p>
                    <p>{hero?.alter_ego}</p>
                    <div className="card-actions">
                        <button onClick={() => history.goBack()} className="btn btn-ghost hvr-backward"><i className="fas fa-arrow-left px-3"></i> Volver</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
