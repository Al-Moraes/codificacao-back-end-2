import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ZodValidationPipe } from './zod-validation.pipe.js';
import { ColaboradoresController } from './colaboradores.controller.js';

@Module({
  imports: [ZodValidationPipe],
  controllers: [AppController, ColaboradoresController],
  providers: [AppService],
})
export class AppModule {}
