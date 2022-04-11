import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { DiscussionThreadTitle } from "../discussionThread/DiscussionThreadTitle";
import { GroupTitle } from "../group/GroupTitle";

export const DiscussionForumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
