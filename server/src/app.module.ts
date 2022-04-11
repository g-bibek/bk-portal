import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { GroupModule } from "./group/group.module";
import { GroupTypeModule } from "./groupType/groupType.module";
import { ResourceModule } from "./resource/resource.module";
import { MahakramaModule } from "./mahakrama/mahakrama.module";
import { MahakramaHistoryModule } from "./mahakramaHistory/mahakramaHistory.module";
import { EmpowermentModule } from "./empowerment/empowerment.module";
import { EmpowermentHistoryModule } from "./empowermentHistory/empowermentHistory.module";
import { AnnouncementModule } from "./announcement/announcement.module";
import { EventModule } from "./event/event.module";
import { DiscussionForumModule } from "./discussionForum/discussionForum.module";
import { DiscussionThreadModule } from "./discussionThread/discussionThread.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    GroupModule,
    GroupTypeModule,
    ResourceModule,
    MahakramaModule,
    MahakramaHistoryModule,
    EmpowermentModule,
    EmpowermentHistoryModule,
    AnnouncementModule,
    EventModule,
    DiscussionForumModule,
    DiscussionThreadModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
