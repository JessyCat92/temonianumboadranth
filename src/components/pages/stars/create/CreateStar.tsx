import React from 'react';
import './CreateStar.scss';
import Universe from "../../../../models/Universe";
import {getUniverse} from "../../../../services/Universes";
import {UniverseProps} from "../Stars";
import {createStar} from "../../../../services/Stars";
import {navigate} from "@reach/router";


class StarsPage extends React.Component<UniverseProps> {
    state = {
        universe: null as Universe|null,
        name: "",
        color: "",
        error: null as string|null
    }

    componentDidMount() {
        this.loadUniverse();
    }

    async loadUniverse() {
        try {
            if (this.props.universeId) {
                const universe = await getUniverse(this.props.universeId);
                this.setState({universe: universe});
            }
        } catch (e) {
            console.error(e);
        }
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>) {
        if (event.target.id === "inputName") {
            this.setState({name: event.target.value});
        } else if (event.target.id === "inputColor") {
            this.setState({color: event.target.value});
        }
    }

    async handleSubmit(event: any) {
        event.preventDefault();

        if (this.state.name.length > 0 && this.state.color.length > 0 && this.state.universe) {
            try {
                const data = await createStar(this.state.name, this.state.color, this.state.universe.id);
                await navigate(`/universes/${this.state.universe.id}`, {
                    state: {newStar: data.id}
                });
            } catch (e) {
                this.setState({error: e.message})
            }
        }

    }

    render() {
        return (
            <div className="Stars">
                <h2>
                    Create Star in Universe {this.state.universe?.name}
                </h2>

                {this.state.error && this.state.error.length > 0 &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>
                }

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   id="inputName"
                                   onChange={this.handleChange.bind(this)}
                                   required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputColor" className="col-sm-2 col-form-label">Color</label>
                        <div className="col-sm-10">
                            <select className="custom-select"
                                    id="inputColor"
                                    defaultValue=""
                                    onChange={this.handleChange.bind(this)}
                                    required>
                                <option disabled value="">Select Color ...</option>
                                <option value="RED" className="starColor_RED">red</option>
                                <option value="BLUE" className="starColor_BLUE">blue</option>
                                <option value="GREEN" className="starColor_GREEN">green</option>
                                <option value="YELLOW" className="starColor_YELLOW">yellow</option>
                                <option value="BLACK" className="starColor_BLACK">black</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default StarsPage;