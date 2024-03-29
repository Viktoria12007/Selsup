import {FC} from "react";
import Props from "../types/Props";
import '../App.css';

export const ParamEditor: FC<Props> = ({ params, model, handleParamEdit }) => {
    return (
        <div className="container">
            {
                params.map((param) => {
                    const paramValue = model.paramValues.find((paramValue) => paramValue.paramId === param.id).value
                    return (
                        typeof paramValue === 'string' &&
                        <label
                            key={param.id}
                            className="label"
                        >
                            {param.name}
                            <input
                                value={paramValue}
                                onInput={(e) => handleParamEdit(e, param.id)}
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
