
import { heroes } from '../data/heores';

export const getHeroesById = (id: string) => {

    return heroes.find(hero => hero.id === id);
}
