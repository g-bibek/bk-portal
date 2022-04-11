import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { EmpowermentTitle } from "../empowerment/EmpowermentTitle";
import { UserTitle } from "../user/UserTitle";

export const EmpowermentHistoryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
