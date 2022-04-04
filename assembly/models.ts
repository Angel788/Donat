import {PersistentMap} from 'near-sdk-as'

export class Contributor{
  contributorId:string;
  email:string;
  name:string;
  contributons: PersistentMap<string,string>;
  totalMount:string;
  constructor(_contributorId:string,_email:string,_name:string){
    this.contributorId=_contributorId;
    this.email=_email;
    this.name=_name;
    this.contributons=new PersistentMap<string,string>(_contributorId+"_contributors");
  }
  addDonation(idFundation:string,quantity:string):bool{
    let mountDonate:string=quantity;
    let exist:bool=Fundations.contains(idFundation);
    if(exist){
      let exitDonation:bool=Fundations[idFundation].getContributions.contains[this.contributorId];
      if(exitDonation){
        mountDonate+=Fundations[idFundation].getContribution[this.contributorId];
      }
      Fundations[idFundation].setContribution(this.contributorId,mountDonate);
      this.contributons[idFundation].set(this.contributorId,mountDonate);
    }
    return 0;
  }
  getContributorId():string{ 
    return this.contributorId;
  }
  getEmail():string{
    return this.email;
  }
  getPhone():string{
    return this.name;
  }
}
export class Fundation{
  idFundation:string;
  location:string;
  phone:string;
  email:string;
  fundraising:string;
  contributions: PersistentMap<string,string>;
  constructor(_idFundation:string,_location:string,_phone:string,_email:string){
    this.idFundation=_idFundation;
    this.location=_location;
    this.phone=_phone;
    this.email=_email;
    this.fundraising="0";
    this.contributions=new PersistentMap<string,string>(_idFundation+"fundation");
  }
  setContribution(contributorId:string,mount:string):void{
    contributions.set(contributorId,mount);
    this.fundraising+=mount;
  }
  getContribution():string{
    return this.contributions;
  }
  getContributorId():string{
    return this.idFundation;
  }
  getLocation():string{
    return this.location;
  }
  getPhone():string{
    return this.phone;
  }
  getFundraising():string{
    return this.fundraising;
  }
}
export let Contributors= new PersistentMap<string,Contributor>("contributor");
export let Fundations=new PersistentMap<string,Fundation>("fundations");
