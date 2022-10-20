import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    return {
      message: 'I have signup in!!!',
    };
  }

  signin() {
    return {
      message: 'I have signin in :)',
    };
  }
}
