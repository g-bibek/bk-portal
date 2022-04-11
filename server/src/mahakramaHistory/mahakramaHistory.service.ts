import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MahakramaHistoryServiceBase } from "./base/mahakramaHistory.service.base";

@Injectable()
export class MahakramaHistoryService extends MahakramaHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
