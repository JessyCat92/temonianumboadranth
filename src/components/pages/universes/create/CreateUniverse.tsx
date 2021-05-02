import React from 'react';
import './CreateUniverse.scss';
import {navigate, RouteComponentProps} from "@reach/router";
import {createUniverse} from "../../../../services/Universes";


class CreateUniverse extends React.Component<RouteComponentProps> {
    state = {
        name: "",
        maxSize: 0,
        error: null as string|null
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.id === "inputName") {
            this.setState({name: event.target.value});
        } else if (event.target.id === "inputMaxSize") {
            this.setState({maxSize: event.target.value});
        }
    }

    async handleSubmit(event: any) {
        event.preventDefault();

        if (this.state.name.length > 0 && this.state.maxSize) {
            try {
                const data = await createUniverse(this.state.name, this.state.maxSize);
                await navigate(`/universes`, {
                    state: {newUniverse: data}
                });
            } catch (e) {
                this.setState({error: e.message})
            }
        }

    }

    render() {
        return (
            <div className="CreateUniverse">
                <h2>
                    Create new Universe
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
                        <label htmlFor="inputMaxSize" className="col-sm-2 col-form-label">Max Size</label>
                        <div className="col-sm-10">
                            <input type="number"
                                   className="form-control"
                                   id="inputMaxSize"
                                   defaultValue="0"
                                   min="0"
                                   onChange={this.handleChange.bind(this)}
                                   required />
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

export default CreateUniverse;