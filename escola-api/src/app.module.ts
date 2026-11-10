import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/alunos.module.js'
import { ValidationPipe } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/escola_db'), AlunosModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
