export type userType = {
	uid: string;
	isParent: boolean;
	kids: kidObj[];
} | null;

export type kidObj = {
	uid: string;
	name: string;
	isParent: false;
	checkingAccount: checkingType;
	savingsAccount: savingsType;
	pending: transactionType[];
	lastAllowance?: string;
	lastInterest?: string;
} | null;

export type transactionType = {
	date: string;
	memo: string;
	amount: number;
	currentBalance?: number;
	for?: string;
};

export type checkingType = {
	type: string;
	balance: number;
	allowance: number;
	frequency: string;
	transactions: transactionType[];
};
export type savingsType = {
	type: string;
	balance: number;
	interest: number;
	compounded: string;
	transactions: transactionType[];
};

export type accountTypes = [checkingType?, savingsType?];
