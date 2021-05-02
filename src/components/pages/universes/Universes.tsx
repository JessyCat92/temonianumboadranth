import React from 'react';
import './Universes.scss';
import {Link, RouteComponentProps} from "@reach/router";
import Universe from "../../../models/Universe";
import {getUniverses} from "../../../services/Universes";


class UniversesPage extends React.Component<RouteComponentProps> {
    state = {
        universes: [] as Universe[],
        newUniverse: null as Universe|null
    }

    componentDidMount() {
        this.loadUniverses();

        if((this.props.location?.state as any).newUniverse) {
            this.setState({
                newUniverse: (this.props.location?.state as any).newUniverse as Universe
            });
        }
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

                { this.state.newUniverse &&
                <div className="alert alert-success" role="alert">
                    Star {this.state.newUniverse.name} (ID: {this.state.newUniverse.id}) was created successfully.
                </div>
                }

                <Link className="btn btn-success btnCreate float-lg-right" to="create">Create Universe</Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.universes.map((universe: Universe) =>
                            <tr key={universe.id}>
                                <td>{universe.id}</td>
                                <td>{universe.name}</td>
                                <td>{universe.stars?.length} / {universe.maxSize}</td>
                                <td>
                                    <Link className="btn btn-info float-right" to={`${universe.id}`}>Details</Link>
                                </td>
                            </tr>
                       )}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default UniversesPage;
