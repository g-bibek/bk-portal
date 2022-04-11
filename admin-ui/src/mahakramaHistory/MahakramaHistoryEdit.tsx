import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MahakramaTitle } from "../mahakrama/MahakramaTitle";
import { UserTitle } from "../user/UserTitle";

export const MahakramaHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <ReferenceArrayInput
          source="mahakrama"
          reference="Mahakrama"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MahakramaTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Marked complete by Instructor?"
          source="isMarkedCompleteByInstructor"
        />
        <BooleanInput
          label="Marked complete by Student?"
          source="isMarkedCompleteByStudent"
        />
        <ReferenceInput source="user.id" reference="User" label="Student">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
