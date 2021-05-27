import { Event } from './../events/entities/event.entity';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavour } from './entities/flavour.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavour, Event]), ConfigModule],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule {}
