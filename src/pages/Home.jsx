import Introduction from "../components/Introduction";
import MainGrid from "../components/MainGrid";

const Home = () => {
    return (
        <>
            <Introduction />

            <section className="container shadows">
                <h1 className="title">Yourflix</h1>
                <h5 className="mt-1">Seu catálogo de filmes online.</h5>
                <p className="mt-2">
                    Busque por seus filmes favoritos e organize a lista de
                    filmes da sua maneira
                </p>
            </section>

            <section className="container">
                <h4 className="mb-3">Lista de filmes:</h4>
                <MainGrid />
            </section>
        </>
    );
};

export default Home;
