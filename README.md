# 2016 Most Popular Movies

This app lists the 20 most popular movies from 2016 as voted on by
users of [The Movie DB](themoviesdb.org). Each entry shows preview
information with a link to a more detailed view and allows users to
select their "favorite" movies from the list.

## Set up

The app requires an API key for
<https://www.themoviedb.org/documentation/api>.

Before building or running the app, create a `.env.local` file with
the following contents:

```shell
REACT_APP_MOVIE_DB_API_KEY=<API Key for themoviedb.org>
```

## Development

Build, watch changes for files and serve a debug version of the app:

```shell
npm install
yarn start
```

## Tests

A few functional tests are included to get the structure in place, but
need to be expanded on.

Unit tests can be run continuously:

```shell
yarn test
```

## Production

To build a production-ready version of the app:

```shell
yarn build
```

A deployable version will be available in `build/`.
