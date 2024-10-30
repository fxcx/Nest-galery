import { Module } from '@nestjs/common';
import { GaleryController } from './galery.controller';
import { GaleryService } from './galery.service';
@Module({
    controllers: [GaleryController],
    providers: [GaleryService],
})
export class GaleryModule { }
