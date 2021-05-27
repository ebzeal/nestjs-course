import { DynamicModule, Module } from '@nestjs/common';
import { createConnection, ConnectionOptions } from 'typeorm';

// @Module({
//   providers: [
//     {
//       provide: 'CONNECTION',
//       useValue: createConnection({
//         type: 'postgres',
//         host: 'localhost',
//         password: 'password',
//         port: 5432,
//       }),
//     },
//   ],
// })
@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection(options),
        },
      ],
    };
  }
}
