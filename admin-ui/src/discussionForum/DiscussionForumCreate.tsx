import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { DiscussionThreadTitle } from "../discussionThread/DiscussionThreadTitle";
import { GroupTitle } from "../group/GroupTitle";

export const DiscussionForumCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="discussionThreads"
          reference="DiscussionThread"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscussionThreadTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="group"
          reference="Group"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
