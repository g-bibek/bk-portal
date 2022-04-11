import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const GroupTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="name"
          label="name"
          choices={[
            { label: "SYSTEM", value: "System" },
            { label: "REGULAR", value: "Regular" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
