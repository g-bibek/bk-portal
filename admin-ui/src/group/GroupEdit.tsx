import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AnnouncementTitle } from "../announcement/AnnouncementTitle";
import { DiscussionForumTitle } from "../discussionForum/DiscussionForumTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { UserTitle } from "../user/UserTitle";

export const GroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="announcement.id"
          reference="Announcement"
          label="Announcement"
        >
          <SelectInput optionText={AnnouncementTitle} />
        </ReferenceInput>
        <TextInput label="Details" multiline source="details" />
        <ReferenceArrayInput
          source="discussionForums"
          reference="DiscussionForum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscussionForumTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="groupType"
          label="Group Type"
          choices={[
            { label: "System", value: "System" },
            { label: "Default", value: "Default" },
          ]}
          optionText="label"
          optionValue="value"
        />
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
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
