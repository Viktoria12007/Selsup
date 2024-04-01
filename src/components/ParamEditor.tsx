import {Component, FormEvent} from "react";
import '../App.css';
import Props from "../types/Props";
import Model from "../types/Model";

class ParamEditor extends Component<Props, any> {
    constructor(props) {
        super(props);
        this.handleParamEdit = this.handleParamEdit.bind(this);
    }
    public getModel(): Model {
        return this.props.model;
    }
    async handleParamEdit(e: FormEvent, id: number) {
        await this.props.onParamEdit(e, id);
        console.log(this.getModel())
    }
    render() {
        return (
            <div className="container">
                {
                    this.props.params.map((param) => {
                        const paramValue = this.props.model.paramValues.find((paramValue) => paramValue.paramId === param.id).value
                        return (
                            typeof paramValue === 'string' &&
                            <label
                                key={param.id}
                                className="label"
                            >
                                {param.name}
                                <input
                                    value={paramValue}
                                    onInput={(e) => this.handleParamEdit(e, param.id)}
                                    className="input"
                                    type="text"
                                />
                            </label>
                        )
                    })
                }
            </div>
        )
    }
}
export default ParamEditor
