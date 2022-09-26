import {Select, SelectOption} from "./Select";
import {useState} from "react";

interface optionsEntry {
  label: string;
  value: number;
}

const optionsList: optionsEntry[] = [
  { label: "First", value: 1},
  { label: "Second", value: 2},
  { label: "Third", value: 3},
  { label: "Fourth", value: 4},
  { label: "Fifth", value: 5}
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([optionsList[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(optionsList[0]);

  return (
      <>
        <Select multiple options={optionsList} value={value1} onChange={o => setValue1(o)} />
        <Select options={optionsList} value={value2} onChange={o => setValue2(o)} />
      </>
  )
}

export default App
