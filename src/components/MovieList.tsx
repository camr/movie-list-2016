import React, { useState, useEffect } from "react";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    popularity: number;
}

const ErrorDisplay: React.FunctionComponent<{ error: string | null }> = props => {
    if (props.error) {
        return <h1>{props.error}</h1>;
    } else {
        return null;
    }
};

const MovieList: React.FunctionComponent<{}> = () => {
    const [error, setError] = useState<string | null>(null);
    const [movies, setMovies] = useState<Movie[]>([]);

    const getMovies = async (): Promise<void> => {
        try {
            const url = "https://api.themoviedb.org/3/";
            const endpoint = "discover/movie";
            const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY || "";
            const page = "1";
            const year = "2016";
            const sortBy = "popularity.desc";

            const params = new URLSearchParams({
                api_key: apiKey, // eslint-disable-line @typescript-eslint/camelcase
                primary_release_year: year, // eslint-disable-line @typescript-eslint/camelcase
                sort_by: sortBy, // eslint-disable-line @typescript-eslint/camelcase
                page,
            });

            const res = await fetch(`${url}${endpoint}?${params.toString()}`);
            if (!res.ok) {
                throw new Error(`API request failed: ${res.statusText}`);
            }

            const movies = await res.json();
            setMovies(movies.results);
        } catch (err) {
            console.error(err);
            setError("Could not load movie list");
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <ErrorDisplay error={error} />
            <h1>MovieList</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title} - {movie.release_date} ({movie.popularity})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
