import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { GroupTypeList } from "./groupType/GroupTypeList";
import { GroupTypeCreate } from "./groupType/GroupTypeCreate";
import { GroupTypeEdit } from "./groupType/GroupTypeEdit";
import { GroupTypeShow } from "./groupType/GroupTypeShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { MahakramaList } from "./mahakrama/MahakramaList";
import { MahakramaCreate } from "./mahakrama/MahakramaCreate";
import { MahakramaEdit } from "./mahakrama/MahakramaEdit";
import { MahakramaShow } from "./mahakrama/MahakramaShow";
import { MahakramaHistoryList } from "./mahakramaHistory/MahakramaHistoryList";
import { MahakramaHistoryCreate } from "./mahakramaHistory/MahakramaHistoryCreate";
import { MahakramaHistoryEdit } from "./mahakramaHistory/MahakramaHistoryEdit";
import { MahakramaHistoryShow } from "./mahakramaHistory/MahakramaHistoryShow";
import { EmpowermentList } from "./empowerment/EmpowermentList";
import { EmpowermentCreate } from "./empowerment/EmpowermentCreate";
import { EmpowermentEdit } from "./empowerment/EmpowermentEdit";
import { EmpowermentShow } from "./empowerment/EmpowermentShow";
import { EmpowermentHistoryList } from "./empowermentHistory/EmpowermentHistoryList";
import { EmpowermentHistoryCreate } from "./empowermentHistory/EmpowermentHistoryCreate";
import { EmpowermentHistoryEdit } from "./empowermentHistory/EmpowermentHistoryEdit";
import { EmpowermentHistoryShow } from "./empowermentHistory/EmpowermentHistoryShow";
import { AnnouncementList } from "./announcement/AnnouncementList";
import { AnnouncementCreate } from "./announcement/AnnouncementCreate";
import { AnnouncementEdit } from "./announcement/AnnouncementEdit";
import { AnnouncementShow } from "./announcement/AnnouncementShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { DiscussionForumList } from "./discussionForum/DiscussionForumList";
import { DiscussionForumCreate } from "./discussionForum/DiscussionForumCreate";
import { DiscussionForumEdit } from "./discussionForum/DiscussionForumEdit";
import { DiscussionForumShow } from "./discussionForum/DiscussionForumShow";
import { DiscussionThreadList } from "./discussionThread/DiscussionThreadList";
import { DiscussionThreadCreate } from "./discussionThread/DiscussionThreadCreate";
import { DiscussionThreadEdit } from "./discussionThread/DiscussionThreadEdit";
import { DiscussionThreadShow } from "./discussionThread/DiscussionThreadShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Bk Portal"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="GroupType"
          list={GroupTypeList}
          edit={GroupTypeEdit}
          create={GroupTypeCreate}
          show={GroupTypeShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="Mahakrama"
          list={MahakramaList}
          edit={MahakramaEdit}
          create={MahakramaCreate}
          show={MahakramaShow}
        />
        <Resource
          name="MahakramaHistory"
          list={MahakramaHistoryList}
          edit={MahakramaHistoryEdit}
          create={MahakramaHistoryCreate}
          show={MahakramaHistoryShow}
        />
        <Resource
          name="Empowerment"
          list={EmpowermentList}
          edit={EmpowermentEdit}
          create={EmpowermentCreate}
          show={EmpowermentShow}
        />
        <Resource
          name="EmpowermentHistory"
          list={EmpowermentHistoryList}
          edit={EmpowermentHistoryEdit}
          create={EmpowermentHistoryCreate}
          show={EmpowermentHistoryShow}
        />
        <Resource
          name="Announcement"
          list={AnnouncementList}
          edit={AnnouncementEdit}
          create={AnnouncementCreate}
          show={AnnouncementShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="DiscussionForum"
          list={DiscussionForumList}
          edit={DiscussionForumEdit}
          create={DiscussionForumCreate}
          show={DiscussionForumShow}
        />
        <Resource
          name="DiscussionThread"
          list={DiscussionThreadList}
          edit={DiscussionThreadEdit}
          create={DiscussionThreadCreate}
          show={DiscussionThreadShow}
        />
      </Admin>
    </div>
  );
};

export default App;
