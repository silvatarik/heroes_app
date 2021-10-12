import { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import { getHeroesByField } from '../../selectors/getHeroesByField';
import { HeroCard } from '../heroes/HeroCard';
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
    search_field: string
};
export const SearchView = () => {
    const location = useLocation();
    const history = useHistory();

    const params = queryString.parse(location.search);

    // Viene de la libreria react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        history.push(`?q=${data.search_field}`);
    };
    
    const heroesFiltered = useMemo(() => getHeroesByField(params?.q?.toString()), [params?.q]);

    return (
        <div className="container mx-auto p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" placeholder="Buscar heroe" autoComplete="off" {...register("search_field", {required: 'El buscador está vacio'})} className="w-full pr-16 input input-primary input-bordered" />
                        {errors.search_field && <span className="mt-4">{errors.search_field.message}</span>}
                        <button className="absolute top-0 right-0 rounded-l-none btn btn-primary"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            {
                (params?.q === '') && (<div>
                    Search a hero
                </div>)
            }
            <div className="flex flex-wrap gap-2 mt-3">
                {
                    heroesFiltered.map(hero => (
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }
            </div>
        </div>
    )
}
