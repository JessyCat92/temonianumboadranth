import React from 'react';
import './Universes.scss';
import {RouteComponentProps} from "@reach/router";
import Universe from "../../../models/Universe";
import {getUniverses} from "../../../services/Universes";


class UniversesPage extends React.Component<RouteComponentProps> {
    state = {
        universes: [] as Universe[]
    }

    componentDidMount() {
        this.loadUniverses();
    }

    async loadUniverses() {
        try {
            const universes = await getUniverses();
            this.setState({universes});
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="Universes">
                <h2>Universes</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.universes.map((universe: Universe) =>
                            <tr key={universe.id}>
                                <td scope="row">{universe.id}</td>
                                <td>{universe.name}</td>
                                <td>{universe.stars?.length} / {universe.maxSize}</td>
                            </tr>
                       )}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default UniversesPage;
