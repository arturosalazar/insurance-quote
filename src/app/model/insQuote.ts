import { HealthPlan } from './healthPlan';
import { User } from './user';
export class InsQuote {
    quoteType: string; //"health", "auto", "health-and-auto"
    user:User;

    //low deductible/high out of pocket
    planType:string; //high deductible, low premiums; low deductible, high premium; bare minimum coverage

    highDeductiblePlan:HealthPlan;
    lowDeductiblePlan:HealthPlan;
    budgetDeductiblePlan:HealthPlan;

    constructor(user:User){
        this.user = user;
        this.updateQuote(user);
    }

    updateQuote(user:User){
        this.user = user;
        this.highDeductiblePlan = new HealthPlan("high-deductible", this.user.getAge(), this.user.getHealthUtilizationLevel(), this.user.getUsesTobacco());
        this.lowDeductiblePlan = new HealthPlan("low-deductible", this.user.getAge(), this.user.getHealthUtilizationLevel(), this.user.getUsesTobacco());
        this.budgetDeductiblePlan = new HealthPlan("budget-plan", this.user.getAge(), this.user.getHealthUtilizationLevel(), this.user.getUsesTobacco());
        

    }

}
