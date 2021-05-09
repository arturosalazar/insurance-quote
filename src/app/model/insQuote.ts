import { User } from './user';
export class insQuote {
    quoteType: string; //"health", "auto", "health-and-auto"
    coverageAmount: number//amount of coverage to provide
    deductable: number;
    
    
    constructor(user:User){
        this.quoteType = user.getQuoteType();
    }

}
