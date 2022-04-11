import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MahakramaServiceBase } from "./base/mahakrama.service.base";

@Injectable()
export class MahakramaService extends MahakramaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
