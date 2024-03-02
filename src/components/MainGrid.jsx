import { useState, useEffect } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { process } from "@progress/kendo-data-query";
import { GridColumn as Column, Grid } from "@progress/kendo-react-grid";
import { Loader } from "@progress/kendo-react-indicators";
import { MOVIES_GET } from "../Api";
import { ColumnMenu } from "./ColumnMenu";

const MainGrid = () => {
    const [movies, setMovies] = useState([]);
    const [dataState, setDataState] = useState({ skip: 0, take: 20 });
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchMovies(currentPage) {
        const { url, options } = MOVIES_GET(currentPage);
        const response = await fetch(url, options);
        const json = await response.json();
        return json;
    }

    useEffect(() => {
        async function getMovies() {
            let currentPage = 1;
            let totalPages = 60;
            let fetchedMovies = [];
            setLoading(true);

            while (currentPage <= totalPages) {
                const json = await fetchMovies(currentPage);
                fetchedMovies = [...fetchedMovies, ...json.results];
                currentPage++;
            }

            setMovies(fetchedMovies);
            setResult(process(fetchedMovies, dataState));
            setLoading(false);
        }
        getMovies();
    }, [dataState]);

    const onDataStateChange = (event) => {
        setDataState(event.dataState);
        setResult(process(movies, event.dataState));
    };

    if (loading)
        return <Loader themeColor="primary" size="large" className="loader" />;
    return (
        <Grid
            data={result}
            pageable={true}
            sortable={true}
            onDataStateChange={onDataStateChange}
            total={movies.length}
            {...dataState}
        >
            <Column field="title" title="Título" columnMenu={ColumnMenu} />

            <Column
                field="original_language"
                title="Idioma"
                columnMenu={ColumnMenu}
            />

            <Column
                field="release_date"
                title="Data de lançamento"
                columnMenu={ColumnMenu}
            />

            <Column field="vote_average" title="Nota" columnMenu={ColumnMenu} />
        </Grid>
    );
};

export default MainGrid;
