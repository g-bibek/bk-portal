import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmpowermentServiceBase } from "./base/empowerment.service.base";

@Injectable()
export class EmpowermentService extends EmpowermentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
