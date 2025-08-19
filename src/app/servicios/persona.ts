import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Persona {
  firestore = inject(Firestore);



getPersonas(){
  const personaCollection = collection(this.firestore, 'personas');
  return collectionData(personaCollection,{idField: 'uuid'});
}
addPersona(persona:any){
 const personaCollection = collection(this.firestore, 'personas');
 return addDoc(personaCollection, persona); 
}
updatePersona(persona:any){}

deletePersona(personaid:number){}

}
