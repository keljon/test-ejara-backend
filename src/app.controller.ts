import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Res() res: Response, @Body() body): any {
    const connectedUser: object|null = this.appService.getUserByEmailAndPassword(body.email, body.password);
    if(connectedUser) res.status(HttpStatus.OK).json({"success": true, "message" : "Connected user", "data": connectedUser});
    else res.status(400).json({"success": false, "message" : "User not found", "data": connectedUser});
  }
}
