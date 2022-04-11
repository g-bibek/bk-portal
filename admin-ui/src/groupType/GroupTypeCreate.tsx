import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const GroupTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
