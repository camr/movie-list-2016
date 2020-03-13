export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    popularity: number;
    overview: string;

    // Favorited will track whether or not the current user
    // has favorited this movie. This is local only and not
    // persisted.
    favorited: boolean;
}
