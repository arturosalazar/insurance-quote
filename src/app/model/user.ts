

export interface User {
    quoteType: string; //Auto, Health, or AutoAndHealth
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
    gender; //enum - Male or Female
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
}


  