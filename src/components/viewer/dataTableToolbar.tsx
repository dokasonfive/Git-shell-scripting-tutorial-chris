import React, {useState} from "react";
import { InputGroup,InputGroupText, TextInput } from "@patternfly/react-core";
type AllProps = {
  //   data: any[];
  onSearch: (term: string) => void;
};

const DataTableToolbar: React.FunctionComponent<AllProps> = (
  props: AllProps
) => {
  const [value, setValue] = useState("");

  const handleTextInputChange = (value: string) => {
    // Note: Use this block to filter data in table ***** working
    setValue( value );
  };

  return (
    // const { value } = this.state;
    <div className="datatable-toolbar">
      <InputGroup>
        <InputGroupText id="brainStructureLabel" className="toolbar-label">
          Brain Structure
        </InputGroupText>
        <TextInput
          id="brainStructureTb"
          placeholder="Filter by brain structure..."
          type="text"
          aria-label="text input field"
          value={value}
          onChange={handleTextInputChange}
        />
      </InputGroup>
    </div>
  );
};

export default React.memo(DataTableToolbar);
