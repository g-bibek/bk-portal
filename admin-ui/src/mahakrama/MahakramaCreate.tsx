import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MahakramaHistoryTitle } from "../mahakramaHistory/MahakramaHistoryTitle";
import { ResourceTitle } from "../resource/ResourceTitle";

export const MahakramaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="mahakramaHistories"
          reference="MahakramaHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MahakramaHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="resource"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Step Number" source="stepNumber" />
      </SimpleForm>
    </Create>
  );
};
