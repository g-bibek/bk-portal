import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DISCUSSIONFORUM_TITLE_FIELD } from "./DiscussionForumTitle";
import { DISCUSSIONTHREAD_TITLE_FIELD } from "../discussionThread/DiscussionThreadTitle";

export const DiscussionForumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DiscussionThread"
          target="DiscussionForumId"
          label="Discussion Threads"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discussion Forum"
              source="discussionforum.id"
              reference="DiscussionForum"
            >
              <TextField source={DISCUSSIONFORUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Parent Thread"
              source="discussionthread.id"
              reference="DiscussionThread"
            >
              <TextField source={DISCUSSIONTHREAD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
