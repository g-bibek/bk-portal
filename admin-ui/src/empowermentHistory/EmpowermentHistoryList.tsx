import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EMPOWERMENT_TITLE_FIELD } from "../empowerment/EmpowermentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmpowermentHistoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmpowermentHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Empowerment"
          source="empowerment.id"
          reference="Empowerment"
        >
          <TextField source={EMPOWERMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsDeleted" source="isDeleted" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
