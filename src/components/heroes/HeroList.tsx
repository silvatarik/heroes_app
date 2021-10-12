import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

interface heroPublisher {
    publisher: string
}

export const HeroList = ({ publisher }: heroPublisher) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
 
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {heroes.map((hero) =>
                <HeroCard key={hero.id} {...hero}/>
            )}
        </div>
    )
}
