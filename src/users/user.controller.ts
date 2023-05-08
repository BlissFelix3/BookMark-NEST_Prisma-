import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/common/decorator';
import { JwtGuard } from 'src/common/guard';
import { UpdateUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: UpdateUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
