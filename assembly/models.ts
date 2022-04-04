import {PersistentMap} from 'near-sdk-as'

export class Contributor{
  contributorId:string;
  email:string;
  name:string;
  contributons: PersistentMap<string,number>;
  totalMount:u64;
  constructor(_contributorId:string,_email:string,_name:string){
    this.contributorId=_contributorId;
    this.email=_email;
    this.name=_name;
    this.contributons=new PersistentMap<string,number>(_contributorId+"_contributors");
    this.totalMount=0;
  }
  addDonation(idFundation:string,quantity:number):boolean{
    let mountDonate:number=quantity;
    let exist:boolean=Fundations.contains(idFundation);
    if(exist){
      let exitDonation:boolean=Fundations[idFundation].getContributions.contains[this.contributorId];
      if(exitDonation){
        mountDonate+=Fundations[idFundation].getContribution[this.contributorId];
        return true;
      }
      this.totalMount=mountDonate;
      Fundations[idFundation].setContribution(this.contributorId,mountDonate);
      this.contributons[idFundation].set(this.contributorId,mountDonate);

    }
    return false;
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
  getContributions():PersistentMap<string,number>{
    return this.contributons;
  }
  getMountDonated():number{
    return this.totalMount; 
  }
}
export class Fundation{
  idFundation:string;
  location:string;
  phone:string;
  email:string;
  fundraising:number;
  contributions: PersistentMap<string,number>;
  outlays: PersistentMap<string,Outlay>;
  constructor(_idFundation:string,_location:string,_phone:string,_email:string){
    this.idFundation=_idFundation;
    this.location=_location;
    this.phone=_phone;
    this.email=_email;
    this.fundraising=0;
    this.contributions=new PersistentMap<string,number>(_idFundation+"c");
    this.outlays=new PersistentMap<string,Outlay>(this.idFundation+"o")
  }
  setContribution(contributorId:string,mount:number):void{
    this.contributions.set(contributorId,mount);
    this.fundraising+=mount;
  }
  getContribution(contributorId:string):number{
    return this.contributions[contributorId];
  }
  getContributions():PersistentMap<string,number>{
    return this.contributions;
  }
  getIdFundation():string{
    return this.idFundation;
  }
  getLocation():string{
    return this.location;
  }
  getPhone():string{
    return this.phone;
  }
  getFundraising():number{
    return this.fundraising;
  }
  setOutlay(_email:string,_location:string,_mount:number,_phone:string,_description:string):boolean{
    if(this.fundraising>=_mount){
      this.fundraising-=_mount;
      this.outlays.set("1",new Outlay(_email,_location,_mount,_phone,_description));
      return true;
    }
    return false;
  }
}
class Outlay{
  email:string;
  location:string;
  mont: number;
  phone:string;
  description:string;
  constructor(_email:string,_location:string,_mount:number,_phone:string,_description:string){
    this.email=_email;
    this.location=_location;
    this.mont=_mount;
    this.phone=_phone;
    this.description=_description;
  }
  getEmail():string{
    return this.email;
  }
  getLocation():string{
    return this.location;
  }
  getMont():number{
    return this.mont;
  }
  getPhone():string{
    return this.phone;
  }
  getDescription():string{
    return this.description;
  }
}
export let Contributors= new PersistentMap<string,Contributor>("contributor");
export let Fundations=new PersistentMap<string,Fundation>("fundations");
