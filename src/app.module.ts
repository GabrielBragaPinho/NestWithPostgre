import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { moviesModule } from './movies/movies.module';


@Module({
  imports: [moviesModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
