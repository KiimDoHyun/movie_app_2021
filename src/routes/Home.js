import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

//movie api https://yts-proxy.now.sh/list_movies.json
// https://yts.ma/api/v2 대신 https://yts-proxy.now.sh/ 로 사용

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    //async : 비동기로 처리할거라는 뜻.
    //await : 뭘 기다릴건지
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // .data.data.movies 로 접근하는것을 위의 코드를 통해 줄이는 것이 가능.
        this.setState({ movies, isLoading: false });
        console.log(movies);
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>)
                }
            </section>
        )
    }
}

//리액트는 자동적으로 모든 class 의 render 메소드를 수행한다.

export default Home;
