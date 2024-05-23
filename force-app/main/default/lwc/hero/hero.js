import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Portfolio';

export default class Hero extends LightningElement {
    photoUrl=Images;
    modalOpen=false;

    openModal(){
        this.modalOpen =true;
    }

    hideModalBox(){
        this.modalOpen =false;
    }
}