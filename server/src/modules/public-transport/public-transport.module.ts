import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { DepartureBoardsController } from './controllers/departure-boards.controller';
import { StopsController } from './controllers/stops.controller';
import { StopPlatform } from './entities/stop-platform.entity';
import { Stop } from './entities/stop.entity';
import { DepartureBoardsService } from './services/departure-boards.service';
import { StopsDownloadService } from './services/stops-download.service';
import { StopsService } from './services/stops.service';

@Module({
  providers: [StopsService, StopsDownloadService, DepartureBoardsService],
  imports: [
    TypeOrmModule.forFeature([Stop, StopPlatform]),
    ConfigModule,
    SharedModule
  ],
  controllers: [StopsController, DepartureBoardsController]
})
export class PublicTransportModule { }
