export class HealthPlan {
    outOfPockerMax: number//amount of coverage to provide
    premium: number;
    deductible: number;
    
    planType:string; //high deductible, low premiums; low deductible, high premium; bare minimum coverage
    age:number;
    healthutilization:string 
    usesTobacco:boolean;

    BASE_RATE = 374.00;
    BASE_DEDUCTIBLE = 1000;
    BASE_OUT_OF_POCKET_MAX = 4000;
    
    constructor(planType:string, age:number, healhUtilization: string, usesTobacco: boolean){
        this.planType = planType;
        this.age = age;
        this.healthutilization = this.healthutilization;
        this.usesTobacco = usesTobacco;

        this.updateQuote();
    }

    updateQuote(){

        //determine premium
        this.premium = this.calcPremium();
        
        //determine deductible
        this.deductible = this.calcDeductible();

        //determine the out of pocked max
        this.outOfPockerMax = this.calcOutOfPocket();

    }

    calcPremium(){
        let premium = this.BASE_RATE;

        //Age determination 
        premium = premium * (1 + (this.age*.01));

        //Healthy utilization determination
        let healthUtilizationModifier;
        switch(this.healthutilization){
            case "Low": {
                healthUtilizationModifier = .95;
                break;
            }
            case "Medium": {
                healthUtilizationModifier = 1;
                break;
            }
            case "High": {
                healthUtilizationModifier = 1.05;
                break;
            }
        }

        //Smoker premium
        if(this.usesTobacco == true){
            premium = premium * 1.50
        }

        if(this.planType == "budget-plan"){
            premium = premium * .65;
        }

        return premium;
    }

    calcDeductible(){
        let deductible = this.BASE_DEDUCTIBLE;

        let deductibleMultiplier;

        switch(this.planType){
            case "low-deductible": {
                deductibleMultiplier = .80;
                break;
            }
            case "high-deductible": {
                deductibleMultiplier = 1.2;
                break;
            }
            case "budget-plan": {
                deductibleMultiplier = 1.6;
                break;
            }
        }

        return deductible * deductibleMultiplier ;
    }

    calcOutOfPocket(){
        let outOfPocket = this.BASE_OUT_OF_POCKET_MAX;

        let outOfPocketMultiplier;
        switch(this.planType){
            case "low-deductible": {
                outOfPocketMultiplier = 1.2;
                break;
            }
            case "high-deductible": {
                outOfPocketMultiplier = .8;
                break;
            }
            case "budget-plan": {
                outOfPocketMultiplier = 1.6;
                break;
            }
        }

        return outOfPocket * outOfPocketMultiplier;
    }



}