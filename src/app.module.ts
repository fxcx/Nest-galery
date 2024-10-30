import { Module } from '@nestjs/common';
import { GaleryModule } from './galery/galery.module';
import { ClaudinaryModule } from './claudinary/claudinary.module';
@Module({
  imports: [GaleryModule, ClaudinaryModule],
})
export class AppModule { }
