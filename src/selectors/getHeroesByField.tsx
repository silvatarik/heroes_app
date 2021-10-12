import { heroes } from "../data/heores";

export const getHeroesByField = (search_field = '') => {


    if (search_field === '') {
        return [];
    }
    search_field = search_field.toLocaleLowerCase();

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(search_field));
}
