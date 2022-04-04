import {PersistentMap,PersistentSet} from 'near-sdk-as'

export class Contributor{
  contributorId:string;
  email:string;
  name:string;
  contributons: PersistentSet<string>;
  totalmount:string;
  constructor(_contributorId:string,_email:string,_name:string){
    this.contributorId=_contributorId;
    this.email=_email;
    this.name=_name;
    this.contributons=new PersistentMap<string,string>(_contributorId+"_contributors");
  }
  addDonation(idFundation:string,quantity:string){
    this.contributons.add(idFundation)
  }
}
export let Contributors= new PersistentMap<string,Contributor>("contributor");
