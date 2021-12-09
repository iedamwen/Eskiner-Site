import { LightningElement ,api,wire,track} from 'lwc';
import getAllCase from '@salesforce/apex/GetAllCases.getAllCase';


export default class DisplayCase extends LightningElement {
    @track columns = [{
            label: 'Case Number',
            fieldName: 'CaseNumber',
            type: 'Auto Number',
            sortable: true
        },
        {
            label: 'Subject',
            fieldName: 'Subject',
            type: 'Text(255)'
        }, {
            label: 'Status',
            fieldName: 'Status',
            type: 'Picklist'
        }, {
            label: 'Case Type',
            fieldName: 'Type',
            type: 'Picklist'
        }
    ];
    @track error;
    @track data ;
    @api recordId;
    @wire(getAllCase)
    wiredOpps({error,data}) {
        if (data) {
            this.data = data;
            console.log(data);
            console.log(JSON.stringify(data, null, '\t'));
        } else if (error) {
            this.error = error;
        }
    }
    
    
}