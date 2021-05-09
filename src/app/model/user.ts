

export class User {
    quoteType: string; //"health", "auto", "health-and-auto"
    // health
    age: number; //Must be an integer
    zipcode: number; //To be retrieved from prev component
    zipString: string; //Calculated from number zip - needed to request
    state: string; //calculate from Zip
    countryFips: string; //required, we will need to calculate
    market: string;
    income: number; //floating point value
    isParent: boolean;
    isPregnant: boolean;
    uses_tobacco: boolean;
    gender; //enum - "male" or "female"
    health_utilization; //enum Low, Medium, or High

    // auto
    make: string; // car make
    model: string; // car model
    year: number; // car year
    vin: string;
    miles: number; // yearly miles
    safety; // passive restraint system, anti-lock brakes, airbags
    infractions: boolean; // do they have infractions on their driving record
    auto_utilization; //enum Low, Medium, or High

    constructor(quoteType:string, zipcode: number){
        this.quoteType = quoteType;
        this.zipcode = zipcode;
    }

  setAge(age:number){
    this.age = age;
  }

  setZipcode(zipcode:number){
    this.zipcode = zipcode;
  }

  setState(age:number){
    this.age = age;
  }

  setMarket(market:string){
    this.market = market;
  }

  setIncome(income:number){
    this.income = income;
  }

  setIsParent(isParent:boolean){
    this.isParent = isParent;
  }

  setIsPregnant(isPregnant:boolean){
    this.isPregnant = isPregnant;
  }
  
  setUsesTobacco(uses_tobacco:boolean){
    this.uses_tobacco = uses_tobacco;
  }

  setGender(gender){
    this.gender = gender;
  }

  setHealthUtilizationLevel(health_utilization){
    this.health_utilization = health_utilization;
  }

  getQuoteType(){
      return this.quoteType;
  }

  getAge(){
    return this.age
  }

  getZipcode(){
    return this.zipcode
  }

  getState(){
    return this.age;
  }

  getMarket(){
    return this.market;
  }

  getIncome(){
    return this.income;
  }

  getIsParent(){
    return this.isParent;
  }

  getIsPregnant(){
    return this.isPregnant;
  }
  
  getUsesTobacco(){
    return this.uses_tobacco;
  }

  getGender(){
    return this.gender;
  }

  getHealthUtilizationLevel(){
    return this.health_utilization;
  }

}


  