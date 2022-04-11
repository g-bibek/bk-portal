import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmpowermentHistoryServiceBase } from "./base/empowermentHistory.service.base";

@Injectable()
export class EmpowermentHistoryService extends EmpowermentHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
