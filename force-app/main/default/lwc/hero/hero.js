import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Portfolio';
import createLead from '@salesforce/apex/CreateLeadControllerPortfolio.createLead';


export default class Hero extends LightningElement {
    photoUrl = Images;
    modalOpen = false;

    openModal() {
        this.modalOpen = true;
    }

    hideModalBox() {
        this.modalOpen = false;
    }

    firstName;
    handleFirstName(event){
        this.firstName = event.target.value;
        console.log('firstname-->'+this.firstName);
    }

    lastName;
    handleLastName(event){
        this.lastName = event.target.value;
        console.log('lastName-->'+this.lastName);
    }

    company;
    handleCompany(event){
        this.company = event.target.value;
        console.log('company-->'+this.company);
    }

    email;
    handleEmail(event){
        this.email = event.target.value;
        console.log('email-->'+this.email);
    }

    description;
    handleDescription(event){
        this.description = event.target.value;
        console.log('description-->'+this.description);
    }

    handleSave(event){
        createLead({firstName:this.firstName, lastName:this.lastName, company:this.company, email:this.email, description:this.description})
        .then(result=>{
            console.log('Lead-->'+JSON.stringify(result));
            this.modalOpen = false;
        })
        .catch(error=>{
            console.log('Lead error-->'+JSON.stringify(error));
        })
    }

}