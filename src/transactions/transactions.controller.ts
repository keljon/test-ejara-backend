import { Controller, Get, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';
import { TransactionsService } from './transactions.service';

@Controller('api/transactions')
export class TransactionsController {
	constructor(private transactionsService : TransactionsService){

	}

	@Get()
	getTransactions(@Res() res: Response){
		res.status(HttpStatus.OK).send(this.transactionsService.getTransations());
	}

	@Get(':key')
	getTransaction(@Res() res: Response, @Param() params) : any{
		res.status(HttpStatus.OK).send(this.transactionsService.getTransaction(params.key));
	}

	@Post('criterias')
	findByCriterias(@Res() res: Response, @Body() body): any {
	    res.status(HttpStatus.OK).send(this.transactionsService.getTransactionByCriterias(body.status, body.crypto_currency, body.dateTo, body.dateAt));
	}
}
 