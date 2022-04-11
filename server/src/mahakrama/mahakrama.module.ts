import { Module } from "@nestjs/common";
import { MahakramaModuleBase } from "./base/mahakrama.module.base";
import { MahakramaService } from "./mahakrama.service";
import { MahakramaController } from "./mahakrama.controller";
import { MahakramaResolver } from "./mahakrama.resolver";

@Module({
  imports: [MahakramaModuleBase],
  controllers: [MahakramaController],
  providers: [MahakramaService, MahakramaResolver],
  exports: [MahakramaService],
})
export class MahakramaModule {}
