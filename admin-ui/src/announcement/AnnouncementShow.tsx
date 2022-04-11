import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ANNOUNCEMENT_TITLE_FIELD } from "./AnnouncementTitle";

export const AnnouncementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsDeleted" source="isDeleted" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Group"
          target="AnnouncementId"
          label="Groups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Announcement"
              source="announcement.id"
              reference="Announcement"
            >
              <TextField source={ANNOUNCEMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <TextField label="Group Type" source="groupType" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
