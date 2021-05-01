import React from 'react';
import './Stars.scss';
import {RouteComponentProps} from "@reach/router";
import Star from "../../../models/Star";
import {getStars} from "../../../services/Stars";

class StarsPage extends React.Component<RouteComponentProps> {
    state = {
        stars: [] as Star[]
    }

    componentDidMount() {
        this.loadStars();
    }

    async loadStars() {
        try {
            const stars = await getStars();
            this.setState({stars});
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="Stars">
                <h2>Stars</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Universe</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.stars.map((star: Star) =>
                            <tr key={star.id} className={`starColor_${star.color}`}>
                                <td scope="row">{star.id}</td>
                                <td>{star.name}</td>
                                <td>{star.universe?.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StarsPage;