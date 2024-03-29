import { useState } from 'react'
import './App.css'
import {ParamEditor} from "./components/ParamEditor";
import Param from "./types/Param";
import Model from "./types/Model";

function App() {
  const params: Param[] =[
      { id: 1, name: 'Назначение' },
      { id: 2, name: 'Длина' },
      { id: 3, name: 'Размер' },
      { id: 4, name: 'Цвет' },
    ]
  const [model, setModel] = useState<Model>({
      paramValues: [
          { paramId: 1, value: 'повседневное' },
          { paramId: 2, value: 'макси' },
          { paramId: 3, value: 44 },
          { paramId: 4, value: ['красный', 'синий', 'зелёный', 'жёлтый'] },
      ]
  })

  function handleParamEdit(e, id) {
    setModel({ paramValues: model.paramValues.map((paramValue) => {
        if (paramValue.paramId === id) {
          return { ...paramValue, value: e.target.value }
        }
        return paramValue
      })})
    console.log(model);
  }

  return (
    <ParamEditor params={params} model={model} handleParamEdit={handleParamEdit} />
  )
}

export default App
