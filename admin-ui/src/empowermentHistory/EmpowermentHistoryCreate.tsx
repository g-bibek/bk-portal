import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { EmpowermentTitle } from "../empowerment/EmpowermentTitle";
import { UserTitle } from "../user/UserTitle";

export const EmpowermentHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="empowerment.id"
          reference="Empowerment"
          label="Empowerment"
        >
          <SelectInput optionText={EmpowermentTitle} />
        </ReferenceInput>
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
