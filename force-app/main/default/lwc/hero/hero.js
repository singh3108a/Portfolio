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
    handleFirstName(event) {
        this.firstName = event.target.value;
        console.log('firstname-->' + this.firstName);
    }

    lastName;
    handleLastName(event) {
        this.lastName = event.target.value;
        console.log('lastName-->' + this.lastName);
    }

    company;
    handleCompany(event) {
        this.company = event.target.value;
        console.log('company-->' + this.company);
    }

    email;
    handleEmail(event) {
        this.email = event.target.value;
        console.log('email-->' + this.email);
    }

    description;
    handleDescription(event) {
        this.description = event.target.value;
        console.log('description-->' + this.description);
    }

    handleSave(event) {
        createLead({ firstName: this.firstName, lastName: this.lastName, company: this.company, email: this.email, description: this.description })
            .then(result => {
                console.log('Lead-->' + JSON.stringify(result));
                const toastMessage = this.template.querySelector('c-custom-toast-message');
                if (toastMessage) {
                    console.log('toast message found');
                    toastMessage.showToast('success', 'Lead Created Successfully', 'utility:success', 5000);
                    toastMessage.showSnackBar('Thanks for Contacting');
                    console.log('toast message found ' + JSON.stringify(toastMessage));
                } else {
                    console.log('toast message didnt found');
                }

            })
            .then(() => {
                this.modalOpen = false;
                this.firstName = '';
                this.lastName = '';
                this.company = '';
                this.email = '';
                this.description = '';
            })
            .catch(error => {
                console.log('Lead error-->' + JSON.stringify(error));
                const toastMessage = this.template.querySelector('c-custom-toast-message');
                if (toastMessage) {
                    toastMessage.showToast('error', JSON.stringify(error.body.message), 'utility:warning', 5000);
                    console.log('toast message found' + JSON.stringify(error.body.message));

                } else {
                    console.log('toast message didnt found');
                }
            })
    }

}