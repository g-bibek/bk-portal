import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EmpowermentHistoryTitle } from "../empowermentHistory/EmpowermentHistoryTitle";
import { ResourceTitle } from "../resource/ResourceTitle";

export const EmpowermentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="authorizedTeachers"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="empowermentHistories"
          reference="EmpowermentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmpowermentHistoryTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="resource"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
