import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DiscussionThreadTitle } from "./DiscussionThreadTitle";
import { DiscussionForumTitle } from "../discussionForum/DiscussionForumTitle";

export const DiscussionThreadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="childDiscussionThreads"
          reference="DiscussionThread"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscussionThreadTitle} />
        </ReferenceArrayInput>
        <TextInput label="Comment" source="comment" />
        <ReferenceInput
          source="discussionforum.id"
          reference="DiscussionForum"
          label="Discussion Forum"
        >
          <SelectInput optionText={DiscussionForumTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="discussionthread.id"
          reference="DiscussionThread"
          label="Parent Thread"
        >
          <SelectInput optionText={DiscussionThreadTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
