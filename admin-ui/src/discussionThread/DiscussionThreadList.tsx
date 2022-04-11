import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DISCUSSIONFORUM_TITLE_FIELD } from "../discussionForum/DiscussionForumTitle";
import { DISCUSSIONTHREAD_TITLE_FIELD } from "./DiscussionThreadTitle";

export const DiscussionThreadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Discussion Threads"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
