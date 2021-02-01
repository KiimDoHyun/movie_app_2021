import React from "react";
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (

                <div>
                    <div className="detail_movie">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                        <div className="detail_movie_data">
                            <h3 className="detail_movie_title">{location.state.title}</h3>
                            <h5 className="detail_movie_year">{location.state.year}</h5>
                            <ul className="detail_movie_genre">
                                {location.state.genres.map((genre, index) => (
                                    <li key={location.state.index} className="detail_genres_genre">
                                        {genre}
                                    </li>
                                ))}
                            </ul>
                            <p className="detail_movie_summary">{location.state.summary.slice(0, 180)}...</p>
                        </div>
                    </div>
                </div>
            )
            // <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;