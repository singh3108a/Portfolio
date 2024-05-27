import { LightningElement } from 'lwc';
import Icons from '@salesforce/resourceUrl/Icon';
import {loadStyle} from 'lightning/platformResourceLoader';
export default class NavMenu extends LightningElement {

    renderedCallback(){
        loadStyle(this, Icons + '/style.css');
    }

    hamburgerClicked() {        
        const navReff = this.template.querySelector('.topnav');
        navReff.classList.toggle('responsive')
      }
}