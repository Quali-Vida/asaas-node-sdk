import { Status } from './status';

export namespace Chargeback {
	export type Status = Status.Chargeback;
	export type Reason =
		| 'ABSENCE_OF_PRINT'
		| 'ABSENT_CARD_FRAUD'
		| 'CARD_ACTIVATED_PHONE_TRANSACTION'
		| 'CARD_FRAUD'
		| 'CARD_RECOVERY_BULLETIN'
		| 'COMMERCIAL_DISAGREEMENT'
		| 'COPY_NOT_RECEIVED'
		| 'CREDIT_OR_DEBIT_PRESENTATION_ERROR'
		| 'DIFFERENT_PAY_METHOD'
		| 'FRAUD'
		| 'INCORRECT_TRANSACTION_VALUE'
		| 'INVALID_CURRENCY'
		| 'INVALID_DATA'
		| 'LATE_PRESENTATION'
		| 'LOCAL_REGULATORY_OR_LEGAL_DISPUTE'
		| 'MULTIPLE_ROCS'
		| 'ORIGINAL_CREDIT_TRANSACTION_NOT_ACCEPTED'
		| 'OTHER_ABSENT_CARD_FRAUD'
		| 'PROCESS_ERROR'
		| 'RECEIVED_COPY_ILLEGIBLE_OR_INCOMPLETE'
		| 'RECURRENCE_CANCELED'
		| 'REQUIRED_AUTHORIZATION_NOT_GRANTED'
		| 'RIGHT_OF_FULL_RECOURSE_FOR_FRAUD'
		| 'SALE_CANCELED'
		| 'SERVICE_DISAGREEMENT_OR_DEFECTIVE_PRODUCT'
		| 'SERVICE_NOT_RECEIVED'
		| 'SPLIT_SALE'
		| 'TRANSFERS_OF_DIVERSE_RESPONSIBILITIES'
		| 'UNQUALIFIED_CAR_RENTAL_DEBIT'
		| 'USA_CARDHOLDER_DISPUTE'
		| 'VISA_FRAUD_MONITORING_PROGRAM'
		| 'WARNING_BULLETIN_FILE';

	export type Main = {
		status: Chargeback.Status;
		reason: Chargeback.Reason;
	};
}
