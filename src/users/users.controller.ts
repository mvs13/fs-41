import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  users = [
    {
      id: 1,
      name: 'Smith',
    },
    {
      id: 2,
      name: 'Neo',
    },
  ];
  @Get() // Укажем что наш метод будет доступен при GET запросе users/
  getAll(): { name: string; id: number }[] {
    return this.users;
  }
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): { name: string; id: number } | null {
    return this.users.find((user) => user.id === id);
  }
}
