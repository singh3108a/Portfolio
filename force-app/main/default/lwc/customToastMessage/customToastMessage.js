import { LightningElement,track,api } from 'lwc';

export default class CustomToastMessage extends LightningElement {
    
    snackBarMessage='';
    @api
    showSnackBar(message) {
        // Get the snackbar DIV
        const snackbar = this.template.querySelector('.snackbar');

        // Add the "show" class to DIV
        snackbar.classList.add('show');
        this.snackBarMessage=message;
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { snackbar.classList.remove('show'); }, 2800);
    }

    @track type='';
    @track message='';
    @track showToastBar = false;
    @api autoCloseTime = 5000;
    @track icon='';
    
    @api
    showToast(type, message,icon,time) {
        this.showToastBar = true;
        this.type = type;
        this.message = message;
        this.icon=icon;
        this.autoCloseTime=time;
        console.log('type-->'+this.type);
        console.log('message-->'+this.message);
        console.log('icon-->'+this.icon);
        console.log('time-->'+this.autoCloseTime);
        console.log('showToastBar-->'+this.showToastBar);
        setTimeout(() => {
            this.closeModel();
        }, this.autoCloseTime);
    }
    
    closeModel() {
        this.showToastBar = false;
        this.type = '';
        this.message = '';
    }
 
    get getIconName() {
        if(this.icon)
        {
            return this.icon;
        }
        return 'utility:' + this.type;
    }
 
    get innerClass() {
        return 'slds-icon_container slds-icon-utility-' + this.type + ' slds-m-right_small slds-no-flex slds-align-top';
    }
 
    get outerClass() {
        return 'slds-notify slds-notify_toast slds-theme_' + this.type;
    }

}