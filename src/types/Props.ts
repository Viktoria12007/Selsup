import Model from "./Model";
import Param from "./Param";
import {FormEvent} from "react";

export default interface Props {
    params: Param[],
    model: Model,
    onParamEdit: (e: FormEvent, id: number) => void,
}
