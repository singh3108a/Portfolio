import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Images';

export default class SkillCard extends LightningElement {

    admin = Images + '/admin.png';
    development = Images +'/develoment.png';
    certificate = Images +'/certificate.png';
}