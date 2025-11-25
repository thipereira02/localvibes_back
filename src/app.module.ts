import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlacesModule } from './places/places.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    PlacesModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
