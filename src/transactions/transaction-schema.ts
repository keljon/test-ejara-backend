export interface Transactions {
	key : string;
	transaction_type : string;
	transaction_status : string;
	emitter: string;
	receiver: string;
	amount_raw: number;
	amount_net: number;
	fiat_currency: string;
	crypto_currency: string;
	crypto_amount: number;
	date_creation : Date;
}