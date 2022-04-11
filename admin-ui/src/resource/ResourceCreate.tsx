import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ResourceTitle } from "./ResourceTitle";
import { EmpowermentTitle } from "../empowerment/EmpowermentTitle";
import { EventTitle } from "../event/EventTitle";
import { GroupTitle } from "../group/GroupTitle";
import { MahakramaTitle } from "../mahakrama/MahakramaTitle";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="childResources"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="empowerments"
          reference="Empowerment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmpowermentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="groups"
          reference="Group"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mahakramas"
          reference="Mahakrama"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MahakramaTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="resource.id"
          reference="Resource"
          label="Parent Resource"
        >
          <SelectInput optionText={ResourceTitle} />
        </ReferenceInput>
        <SelectInput
          source="resourceType"
          label="Resource Type"
          choices={[
            { label: "Image", value: "Image" },
            { label: "Youtube", value: "Youtube" },
            { label: "Document", value: "Document" },
            { label: "Link", value: "Link" },
            { label: "Folder", value: "Folder" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
