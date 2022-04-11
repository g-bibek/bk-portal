import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ResourceTitle } from "../resource/ResourceTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="approvedUsers"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="disapprovedUsers"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="End Date" source="endDate" />
        <SelectInput
          source="eventType"
          label="Event Type"
          choices={[
            { label: "Sangha", value: "Sangha" },
            { label: "Public", value: "Public" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <BooleanInput label="Is Published" source="isPublished" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="resources"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="signedUpUsers"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
