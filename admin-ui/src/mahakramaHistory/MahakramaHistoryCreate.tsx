import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MahakramaTitle } from "../mahakrama/MahakramaTitle";
import { UserTitle } from "../user/UserTitle";

export const MahakramaHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
