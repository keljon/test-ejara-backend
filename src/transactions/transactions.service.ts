import { Injectable } from '@nestjs/common';
import {Transactions} from './transaction-schema';

@Injectable()
export class TransactionsService {
	private transactions = [
		{
			key : "1",
			transaction_type : "buy",
			transaction_status : "pending",
			emitter: "Vianney Keljon",
			receiver: "Maurice User",
			amount_raw: 1100,
			amount_net: 1000,
			fiat_currency: "XAF",
			crypto_currency: "USD",
			crypto_amount: 1.9,
			date_creation : new Date('2022-01-05')
		},
		{
			key : "2",
			transaction_type : "sell",
			transaction_status : "pending",
			emitter: "Vianney Keljon",
			receiver: "Maurice User",
			amount_raw: 1100,
			amount_net: 1000,
			fiat_currency: "XAF",
			crypto_currency: "USD",
			crypto_amount: 1.1,
			date_creation : new Date('2022-02-05')
		},
		{
			key : "3",
			transaction_type : "Buy",
			transaction_status : "Confirmed",
			emitter: "Maurice User",
			receiver: "Vianney Keljon",
			amount_raw: 1100,
			amount_net: 1000,
			fiat_currency: "XAF",
			crypto_currency: "USD",
			crypto_amount: 1.1,
			date_creation : new Date('2022-03-05')
		},
		{
			key : "4",
			transaction_type : "Buy",
			transaction_status : "rejected",
			emitter: "Maurice User",
			receiver: "Vianney Keljon",
			amount_raw: 1100,
			amount_net: 1000,
			fiat_currency: "XAF",
			crypto_currency: "USD",
			crypto_amount: 1.1,
			date_creation : new Date('2022-04-10')
		}
	];

	getTransations(){
		return this.transactions;
	}

	getTransaction(transactionKey: string){
	    return this.transactions.find(transaction => transaction.key==transactionKey);
	}

	getTransactionByCriterias(status: string, crypto_currency: string, dateTo: string, dateAt: string){

		let sortedTransactions=[];

	 	this.transactions.forEach( (transaction) =>{
			if((status!="" ? transaction.transaction_status==status : true) && (crypto_currency!="" ? transaction.crypto_currency==crypto_currency : true) && ( (dateTo!="" && dateAt!="") ? transaction.date_creation>=new Date(dateTo) && transaction.date_creation<=new Date(dateAt) : true)){
				sortedTransactions.push(transaction);
			}
		});

		return sortedTransactions;

		

	}


}
