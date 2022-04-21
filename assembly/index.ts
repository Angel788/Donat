import {logging} from "near-sdk-as"
import{PersistentMap,Context,u128} from "near-sdk-as"
import{Contributor,Contributors,Fundation,Fundations} from "./models"

@nearBindgen
export class Contract{
  registerContributor(email:string,name:string):bool{
   const exist=Contributors.contains(Context.sender);
   const exitFundation=Fundations.contains(Context.sender);
   if(exist || exitFundation){
     logging.log("The user is registred ");
     return false;
   }
   Contributors.set(Context.sender, new Contributor(Context.sender,email,name));
    return false;
  }
  registerFundation(location:string,phone:string,email:string):bool{
   const existContributor=Contributors.contains(Context.sender);
   const exitFundation=Fundations.contains(Context.sender);
   if(existContributor || exitFundation){
     logging.log("The user is registred ");
     return false;
   }
   Fundation.set(Context.sender, new Fundation(Context.sender,email,name));
    return true;
  }
  @payable
  donateFundation():bool{
   const existContributor=Contributors.contains(Context.sender);
   if(!existContributor){
     logging.log("The user is not registred ");
     return false;
   }
   let strAmunt=Context.attachedDeposit.toString();
   strAmunt=strAmunt.substring(0,strAmount.length - 24);
   const amount=U64.parseFloat(strAmunt);
   if(amount==0) return false;
   if(!Contributors[Context.sender].setContribution(amount)){
     logging.log("Plase, wait a moment please");
   }
   return true;
  }

}
