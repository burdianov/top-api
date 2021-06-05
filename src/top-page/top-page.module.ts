import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TopPageController } from './top-page.controller';

@Module({
  controllers: [TopPageController],
  providers: [ConfigService]
})
export class TopPageModule {}
