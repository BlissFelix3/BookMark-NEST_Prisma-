import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { BookmarkModule } from './bookmarks/bookmarks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}