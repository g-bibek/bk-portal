/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  User,
  Event,
  Empowerment,
  EmpowermentHistory,
  Group,
  MahakramaHistory,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findApprovedEvents(
    parentId: string,
    args: Prisma.EventFindManyArgs
  ): Promise<Event[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .approvedEvents(args);
  }

  async findAuthorizedEmpowerments(
    parentId: string,
    args: Prisma.EmpowermentFindManyArgs
  ): Promise<Empowerment[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .authorizedEmpowerments(args);
  }

  async findDisapprovedEvents(
    parentId: string,
    args: Prisma.EventFindManyArgs
  ): Promise<Event[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .disapprovedEvents(args);
  }

  async findEmpowermentHistory(
    parentId: string,
    args: Prisma.EmpowermentHistoryFindManyArgs
  ): Promise<EmpowermentHistory[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .empowermentHistory(args);
  }

  async findGroup(
    parentId: string,
    args: Prisma.GroupFindManyArgs
  ): Promise<Group[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .group(args);
  }

  async findMahakramaHistory(
    parentId: string,
    args: Prisma.MahakramaHistoryFindManyArgs
  ): Promise<MahakramaHistory[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .mahakramaHistory(args);
  }

  async findSignedUpEvents(
    parentId: string,
    args: Prisma.EventFindManyArgs
  ): Promise<Event[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .signedUpEvents(args);
  }
}
