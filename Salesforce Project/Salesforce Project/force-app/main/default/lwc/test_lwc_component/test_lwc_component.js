import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getAllTasks from "@salesforce/apex/TaskController.getAllTasks";
import getTasksCount from "@salesforce/apex/TaskController.getTasksCount";
import deleteTask from '@salesforce/apex/TaskController.deleteTask';
import getFilteredTask from '@salesforce/apex/TaskController.getFilteredTask';


const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' }
];

const columns = [{
        label: 'Subject',
        fieldName: "recordLink",
        type: "url",
        typeAttributes: { label: { fieldName: "Subject" }, tooltip: "Subject", target: "_blank" }
    },
    { label: 'Due Date', fieldName: 'ActivityDate', type: "date" },
    { label: 'Status', fieldName: 'Status' },
    { label: 'Priority', fieldName: 'Priority' },
    {
        label: 'Assigned to',
        fieldName: 'ownerURL',
        type: "url",
        typeAttributes: { label: { fieldName: "OwnerName" }, tooltip: "OwnerName", target: "_blank" }
    },
    {
        type: 'action',
        typeAttributes: {
            rowActions: actions,
            menuAlignment: 'right'
        }
    }
];

export default class HelloWorld extends NavigationMixin(LightningElement) {
    @track data;
    @track task;
    @track columns = columns;
    @track showLoadingSpinner = false;
    @track paginationRange = [];
    @track totalRecords;
    @track FirstDate
    @track SecondDate
    recordId;
    refreshTable;
    @track isModalOpened = false;
    error;
    subscription = {};
    @track paginationNumb

    handlerPreviousPage(e) {
        this.paginationNumb = e.target.value - 20
    }
    handlerNextPage(e) {
        this.paginationNumb = e.target.value + 20
    }

    handlePaginationClick(event) {
        let offsetNumber = event.target.dataset.targetNumber; //reduce 1 from the clciked number and multiply it with 10, //since we are showing 3 records per page and pass the offset to apex class 
        getAllTasks({ offsetRange: 10 * (offsetNumber - 1), startDate: this.FirstDate, endDate: this.SecondDate })
            .then(data => {
                let tempTaskList = [];
                this.data = data; //looking at displaying 10 recrods per page
                for (let x = 0; x < data.length; x++) {
                    let tempRecord = Object.assign({}, data[x]); //cloning object  
                    tempRecord.recordLink = "/" + tempRecord.Id;
                    tempRecord.ownerURL = "/" + tempRecord.OwnerId;
                    tempRecord.OwnerName = tempRecord.Owner.Name;
                    tempTaskList.push(tempRecord);
                }
                console.log(tempTaskList);
                this.data = tempTaskList;
            })
            .catch(error => { // eslint-disable-next-line no-console
                console.log(error);
            });
    }

    handleOpenModal(event) {
        console.log('12345')
        this.isModalOpened = true;
    }
    handleModalClose() {
        this.isModalOpened = false;
        console.log('this.isModalOpened - >', this.isModalOpened);
    }

    handlerselectedActiveUsers(e) {
        this.selectedActiveUsers = e.target.value
        console.log(e.target.value)
    }

    connectedCallback() {
        getTasksCount().then(count => {
            if (count) { //get the total count of records
                this.totalRecords = count;
                getAllTasks().then(data => {
                    let i = 1;
                    let tempTaskList = [];
                    this.data = data; //looking at displaying 10 recrods per page
                    for (let x = 0; x < data.length; x++) {
                        let tempRecord = Object.assign({}, data[x]); //cloning object  
                        tempRecord.recordLink = "/" + tempRecord.Id;
                        tempRecord.ownerURL = "/" + tempRecord.OwnerId;
                        tempRecord.OwnerName = tempRecord.Owner.Name;
                        tempTaskList.push(tempRecord);
                    }
                    console.log(tempTaskList);
                    this.data = tempTaskList; //.forEach(item => item['nameUrl'] = '/lightning/' +item['Id'] +'/view');
                    const paginationNumbers = Math.ceil(this.totalRecords / 10); //create an array with size equals to paginationNumbers
                    while (
                        this.paginationRange.push(i++) < paginationNumbers // eslint-disable-next-line no-empty
                    ) {}
                });
            }
            console.log('this.paginationRange ->', this.paginationRange);
        });

    }

    handlerFirstDate(e) {
        this.FirstDate = e.target.value
    }
    handlerSecondDate(e) {
        this.SecondDate = e.target.value
    }

    buttonDate() {
        getTasksCount({ startDate: this.FirstDate, endDate: this.SecondDate }).then(count => {
            if (count) { //get the total count of records
                this.totalRecords = count;
                getFilteredTask({
                    startDate: this.FirstDate,
                    endDate: this.SecondDate
                }).then(result => {
                    this.paginationRange = [];

                    this.data = [];
                    let i = 1;
                    let tempTaskList = [];
                    this.data = result; //looking at displaying 10 recrods per page
                    for (let x = 0; x < result.length; x++) {
                        let tempRecord = Object.assign({}, result[x]); //cloning object  
                        tempRecord.recordLink = "/" + tempRecord.Id;
                        tempRecord.ownerURL = "/" + tempRecord.OwnerId;
                        tempRecord.OwnerName = tempRecord.Owner.Name;
                        tempTaskList.push(tempRecord);
                    }
                    console.log(tempTaskList);
                    this.data = tempTaskList; //.forEach(item => item['nameUrl'] = '/lightning/' +item['Id'] +'/view');
                    const paginationNumbers = Math.ceil(this.totalRecords / 10); //create an array with size equals to paginationNumbers
                    while (
                        this.paginationRange.push(i++) < paginationNumbers // eslint-disable-next-line no-empty

                    ) {}
                    console.log(this.paginationRange)
                });
            }
        });


    }
    handleEvent = event => {
        const refreshRecordEvent = event.data.payload;
        if (refreshRecordEvent.RecordId__c === this.recordId) {
            this.recordId = '';
            return refreshApex(this.refreshTable);
        }
    }

    handleRowActions(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        this.recordId = row.Id;
        switch (actionName) {
            case 'view':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        actionName: 'view'
                    }
                });
                break;
            case 'edit':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Task',
                        actionName: 'edit'
                    }
                });
                break;
            case 'delete':
                this.delTask(row);
                break;
        }
    }
    delTask(currentRow) {
        this.showLoadingSpinner = true;
        deleteTask({ objtask: currentRow }).then(result => {
            window.console.log('result^^' + result);
            this.showLoadingSpinner = false;
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: currentRow.Subject + ' task deleted.',
                variant: 'success'
            }));
            return refreshApex(this.refreshTable);
        }).catch(error => {
            window.console.log('Error ====> ' + error);
            this.showLoadingSpinner = false;
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error!!',
                message: JSON.stringify(error),
                variant: 'error'
            }));
        });
    }
}