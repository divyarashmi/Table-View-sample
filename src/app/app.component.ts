import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CustomDropdownEditorComponentComponentComponent } from './custom-dropdown-editor-component-component/custom-dropdown-editor-component-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //stringifiedData: any;
  columnDefs: ColDef[];
  defaultColDef: any;
  rowData: any = [];

  constructor() {
   this.columnDefs = [

            { headerName: 'Display Name', field: 'sorRecordName', filter: 'agTextColumnFilter', sortable: true },
            { headerName: 'Record Type', field: 'sorTypeName' },
            { headerName: 'Tags', field: 'tags' },
            {
                headerName: 'Action', field: 'action',
                cellRenderer: CustomDropdownEditorComponentComponentComponent,
                cellStyle: { "overflow": 'visible' }
                //cellEditorParams: (params) => ({ value : params.data.sorRecord }), 
             }
             
        ];
        
        
        this.defaultColDef = {
            sortable: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true,
            // make columns resizable
            //resizable: true,
            ////editable: true,
            //enableRowGroup: true,
            //enablePivot: true,
            //enableValue: true,
            //rowMultiSelectWithClick: true,

            flex: 1,
            minWidth: 100,
        };
  }

  // Object Data  

  data=  [
      {
        "sorId": 12,
        "sorRecordId": 2732,
        "sorRecordName": "rt2-record",
        "sorTypeName": "RT2",
        "sorTypeId": 37,
        "customFieldJson": "[{\"id\":37,\"name\":\"RT2\",\"parentId\":null,\"defaultFieldJson\":null,\"customFieldJson\":[{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":1,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"e25f3805-1269-4a43-a48d-7cee51bd2c3f\",\"name\":\"RT2_Tags\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":7,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"7144c20c-b867-4776-97ef-a9fcb7c3ad16\",\"name\":\"RT2_Default decimal\",\"value\":\"34.10\",\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":1,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"847c345b-4b4d-495f-9ea5-9c6c5219ca2f\",\"name\":\"custom text box1\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":3,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"2b5daa53-a6db-4312-bc5a-3b31177ec2b2\",\"name\":\"custom text area\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":5,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"bc56c1fb-e17d-4941-834d-abc2033b8340\",\"name\":\"custom numeric\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":8,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"fd5348fe-3ad7-4150-b7b3-b5b8725a4951\",\"name\":\"custom checkbox\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":12,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"5b501d76-a990-4b8f-9ff1-e4ec5637cad5\",\"name\":\"custom percentage(%)\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":3,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"8146670d-d5b7-42b5-acb6-62d37df5ff78\",\"name\":\"custom ss dd\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":3,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"3cd43056-fdac-4031-a22e-2906b8a8b7ed\",\"name\":\"custom ms dd\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":4,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"26ea8cec-8a19-457c-8d1d-c8b5042e424a\",\"name\":\"custom date\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":7,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"990e9339-ecff-41b4-890b-8948f49f500f\",\"name\":\"custom decimal\",\"value\":null,\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":10,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"c550b85c-7036-4153-bf5e-edc9866c1d88\",\"name\":\"custom alphanumeric\",\"value\":\"jjhg111\",\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"recordId\":12,\"recordTypeName\":\"RT2\",\"fieldTypeId\":3,\"isRequired\":false,\"isRequiredEditable\":true,\"id\":\"e3bbca23-0cd9-4da5-ba2f-ef487d2cf9e9\",\"name\":\"custom multi text\",\"value\":\"hii\",\"relativeOrder\":0,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"isTemp\":true,\"isSelected\":false,\"Options\":[]},{\"recordTypeId\":37,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT2\",\"id\":\"7d881469-d213-4108-ab16-2f5eaabef156\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"custom ss dd1\",\"relativeOrder\":0,\"value\":null,\"isSelected\":false,\"isTemp\":false,\"Options\":[{\"name\":\"A\",\"value\":\"f3d0e941-1142-4107-ad01-7e0b69b4a224\",\"isAlllowRemove\":true,\"color\":\"#e74444\"},{\"name\":\"B\",\"value\":\"33f1998f-cc4c-4d36-8434-39c6a052da99\",\"isAlllowRemove\":true,\"color\":\"#e6de55\"}],\"isAllowAddOptions\":true,\"isMapToUIDefault\":false,\"isMapToUI\":true}],\"sorId\":0}]",
        "referenceKey": "00000000-0000-0000-0000-000000000000",
        "defaultFieldJson": "[{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":false,\"maxLength\":50,\"name\":\"Id\",\"placeHolder\":\"Id\",\"value\":\"00000000 - 0000 - 0000 - 0000 - 000000000000\",\"relativeOrder\":1,\"isSelected\":false,\"isMapToUI\":false},{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"isAllowRename\":false,\"maxLength\":250,\"name\":\"Display Name\",\"placeHolder\":\"Display Name\",\"value\":\"rt2-record\",\"relativeOrder\":2,\"isSelected\":true,\"isMapToUI\":true},{\"fieldTypeId\":2,\"fieldTypeName\":\"DropDown\",\"fieldName\":\"DropDown\",\"id\":\"06618d12-2c70-47f4-9156-7169df6f1384\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"name\":\"Record Type\",\"value\":\"RT2\",\"options\":[],\"relativeOrder\":3,\"isSelected\":true,\"isMapToUI\":true},{\"fieldName\":\"TextBox\",\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"id\":\"eaf778ac-fe3b-4025-b05c-86941df14a83\",\"isAllowRename\":false,\"isMapToUI\":true,\"isRequired\":false,\"isRequiredEditable\":false,\"isSelected\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"maxLength\":250,\"name\":\"Tags\",\"placeHolder\":\"Tags\",\"relativeOrder\":4,\"value\":null}]",
        "createdOn": "2023-06-17T16:04:31.287555",
        "defaultFieldId": "6ac98e3f-ad42-4699-a46b-278c8e2d6bf1",
        "tags": [
          {
            "sorRecordId": 2732,
            "sorRecord": null,
            "tags": "tag1",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-06-17T16:11:33.129095",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 1470,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 1368,
        "sorRecordName": "fbfdbrdb",
        "sorTypeName": "RT6",
        "sorTypeId": 92,
        "customFieldJson": "[{\"id\":92,\"name\":\"RT6\",\"parentId\":null,\"defaultFieldJson\":null,\"customFieldJson\":[{\"recordTypeId\":92,\"fieldTypeId\":1,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"d852fcf3-18d9-48be-a39b-c434db1c05f4\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text box1\",\"relativeOrder\":0,\"value\":null,\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":92,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"a038f7a2-fa9c-490d-914c-0eb66e5defce\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd1\",\"relativeOrder\":0,\"value\":\"f181f031-d5a7-4006-9f01-b020389c6cd9\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"name\":\"Enabled\",\"value\":\"f181f031-d5a7-4006-9f01-b020389c6cd9\",\"isAlllowRemove\":true},{\"name\":\"Disabled\",\"value\":\"e795dff9-195a-4f7b-8062-875bdab5f704\",\"isAlllowRemove\":true}],\"isAllowAddOptions\":true},{\"recordTypeId\":92,\"fieldTypeId\":2,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"b3bc4a6e-6ca9-4246-8358-8d4257de4bb2\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ms dd1\",\"relativeOrder\":0,\"value\":[],\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"cc96cf40-c9c6-4845-8458-bbe81df91387\",\"name\":\"A\"},{\"id\":\"60514827-fed4-4fb4-be99-7ca6fbdeab28\",\"name\":\"B\"},{\"id\":\"1211b888-e6af-4264-8c8f-20c406cb664f\",\"name\":\"C\"},{\"id\":\"5b712bfa-01d6-42d3-a125-b5fa389f38e7\",\"name\":\"D\"}],\"isAllowAddOptions\":true}],\"sorId\":0}]",
        "referenceKey": "00000000-0000-0000-0000-000000000000",
        "defaultFieldJson": "[{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":false,\"maxLength\":50,\"name\":\"Id\",\"placeHolder\":\"Id\",\"value\":\"00000000 - 0000 - 0000 - 0000 - 000000000000\",\"relativeOrder\":1,\"isSelected\":false,\"isMapToUI\":false},{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"isAllowRename\":false,\"maxLength\":250,\"name\":\"Display Name\",\"placeHolder\":\"Display Name\",\"value\":\"fbfdbrdb\",\"relativeOrder\":2,\"isSelected\":true,\"isMapToUI\":true},{\"fieldTypeId\":2,\"fieldTypeName\":\"DropDown\",\"fieldName\":\"DropDown\",\"id\":\"06618d12-2c70-47f4-9156-7169df6f1384\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"name\":\"Record Type\",\"value\":\"RT6\",\"options\":[],\"relativeOrder\":3,\"isSelected\":true,\"isMapToUI\":true},{\"fieldName\":\"TextBox\",\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"id\":\"eaf778ac-fe3b-4025-b05c-86941df14a83\",\"isAllowRename\":false,\"isMapToUI\":true,\"isRequired\":false,\"isRequiredEditable\":false,\"isSelected\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"maxLength\":250,\"name\":\"Tags\",\"placeHolder\":\"Tags\",\"relativeOrder\":4,\"value\":null}]",
        "createdOn": "2023-06-01T10:30:25.628845",
        "defaultFieldId": "98e60ff3-4c9c-4023-b78f-cfa201e88891",
        "tags": [
          {
            "sorRecordId": 1368,
            "sorRecord": null,
            "tags": "new tag",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-07-03T03:41:01.957347",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 1474,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 1367,
        "sorRecordName": "june1_r2",
        "sorTypeName": "RT6",
        "sorTypeId": 92,
        "customFieldJson": "[{\"id\":92,\"name\":\"RT6\",\"parentId\":null,\"defaultFieldJson\":null,\"customFieldJson\":[{\"recordTypeId\":92,\"fieldTypeId\":1,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"d852fcf3-18d9-48be-a39b-c434db1c05f4\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text box1\",\"relativeOrder\":0,\"value\":null,\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":92,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"a038f7a2-fa9c-490d-914c-0eb66e5defce\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd1\",\"relativeOrder\":0,\"value\":\"e795dff9-195a-4f7b-8062-875bdab5f704\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"f181f031-d5a7-4006-9f01-b020389c6cd9\",\"name\":\"Enabled\"},{\"id\":\"e795dff9-195a-4f7b-8062-875bdab5f704\",\"name\":\"Disabled\"}],\"isAllowAddOptions\":true},{\"recordTypeId\":92,\"fieldTypeId\":2,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"b3bc4a6e-6ca9-4246-8358-8d4257de4bb2\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ms dd1\",\"relativeOrder\":0,\"value\":[{\"id\":\"cc96cf40-c9c6-4845-8458-bbe81df91387\",\"name\":\"A\"},{\"id\":\"60514827-fed4-4fb4-be99-7ca6fbdeab28\",\"name\":\"B\"},{\"id\":\"1211b888-e6af-4264-8c8f-20c406cb664f\",\"name\":\"C\"},{\"id\":\"5b712bfa-01d6-42d3-a125-b5fa389f38e7\",\"name\":\"D\"}],\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"cc96cf40-c9c6-4845-8458-bbe81df91387\",\"name\":\"A\"},{\"id\":\"60514827-fed4-4fb4-be99-7ca6fbdeab28\",\"name\":\"B\"},{\"id\":\"1211b888-e6af-4264-8c8f-20c406cb664f\",\"name\":\"C\"},{\"id\":\"5b712bfa-01d6-42d3-a125-b5fa389f38e7\",\"name\":\"D\"}],\"isAllowAddOptions\":true}],\"sorId\":0}]",
        "referenceKey": "00000000-0000-0000-0000-000000000000",
        "defaultFieldJson": "[{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":false,\"maxLength\":50,\"name\":\"Id\",\"placeHolder\":\"Id\",\"value\":\"00000000 - 0000 - 0000 - 0000 - 000000000000\",\"relativeOrder\":1,\"isSelected\":false,\"isMapToUI\":false},{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"isAllowRename\":false,\"maxLength\":250,\"name\":\"Display Name\",\"placeHolder\":\"Display Name\",\"value\":\"june1_r2\",\"relativeOrder\":2,\"isSelected\":true,\"isMapToUI\":true},{\"fieldTypeId\":2,\"fieldTypeName\":\"DropDown\",\"fieldName\":\"DropDown\",\"id\":\"06618d12-2c70-47f4-9156-7169df6f1384\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"name\":\"Record Type\",\"value\":\"RT6\",\"options\":[],\"relativeOrder\":3,\"isSelected\":true,\"isMapToUI\":true},{\"fieldName\":\"TextBox\",\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"id\":\"eaf778ac-fe3b-4025-b05c-86941df14a83\",\"isAllowRename\":false,\"isMapToUI\":true,\"isRequired\":false,\"isRequiredEditable\":false,\"isSelected\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"maxLength\":250,\"name\":\"Tags\",\"placeHolder\":\"Tags\",\"relativeOrder\":4,\"value\":null}]",
        "createdOn": "2023-06-01T10:17:05.937806",
        "defaultFieldId": "d16fb9e1-2b1c-4fcd-ab0f-02a67d71c5ce",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 1366,
        "sorRecordName": "june1_r1",
        "sorTypeName": "RT6",
        "sorTypeId": 92,
        "customFieldJson": "[{\"id\":92,\"name\":\"RT6\",\"parentId\":null,\"defaultFieldJson\":null,\"customFieldJson\":[{\"recordTypeId\":92,\"fieldTypeId\":1,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"d852fcf3-18d9-48be-a39b-c434db1c05f4\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text box1\",\"relativeOrder\":0,\"value\":\"ashish bhardwaj\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":92,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"a038f7a2-fa9c-490d-914c-0eb66e5defce\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd1\",\"relativeOrder\":0,\"value\":\"f181f031-d5a7-4006-9f01-b020389c6cd9\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"f181f031-d5a7-4006-9f01-b020389c6cd9\",\"name\":\"Enabled\"},{\"id\":\"e795dff9-195a-4f7b-8062-875bdab5f704\",\"name\":\"Disabled\"}],\"isAllowAddOptions\":true},{\"recordTypeId\":92,\"fieldTypeId\":2,\"recordId\":12,\"recordTypeName\":\"RT6\",\"id\":\"b3bc4a6e-6ca9-4246-8358-8d4257de4bb2\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ms dd1\",\"relativeOrder\":0,\"value\":[{\"id\":\"cc96cf40-c9c6-4845-8458-bbe81df91387\",\"name\":\"A\"},{\"id\":\"60514827-fed4-4fb4-be99-7ca6fbdeab28\",\"name\":\"B\"},{\"id\":\"1211b888-e6af-4264-8c8f-20c406cb664f\",\"name\":\"C\"},{\"id\":\"5b712bfa-01d6-42d3-a125-b5fa389f38e7\",\"name\":\"D\"}],\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"cc96cf40-c9c6-4845-8458-bbe81df91387\",\"name\":\"A\"},{\"id\":\"60514827-fed4-4fb4-be99-7ca6fbdeab28\",\"name\":\"B\"},{\"id\":\"1211b888-e6af-4264-8c8f-20c406cb664f\",\"name\":\"C\"},{\"id\":\"5b712bfa-01d6-42d3-a125-b5fa389f38e7\",\"name\":\"D\"}],\"isAllowAddOptions\":true}],\"sorId\":0}]",
        "referenceKey": "00000000-0000-0000-0000-000000000000",
        "defaultFieldJson": "[{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":false,\"maxLength\":50,\"name\":\"Id\",\"placeHolder\":\"Id\",\"value\":\"00000000 - 0000 - 0000 - 0000 - 000000000000\",\"relativeOrder\":1,\"isSelected\":false,\"isMapToUI\":false},{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"isAllowRename\":false,\"maxLength\":250,\"name\":\"Display Name\",\"placeHolder\":\"Display Name\",\"value\":\"june1_r1\",\"relativeOrder\":2,\"isSelected\":true,\"isMapToUI\":true},{\"fieldTypeId\":2,\"fieldTypeName\":\"DropDown\",\"fieldName\":\"DropDown\",\"id\":\"06618d12-2c70-47f4-9156-7169df6f1384\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"name\":\"Record Type\",\"value\":\"RT6\",\"options\":[],\"relativeOrder\":3,\"isSelected\":true,\"isMapToUI\":true},{\"fieldName\":\"TextBox\",\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"id\":\"eaf778ac-fe3b-4025-b05c-86941df14a83\",\"isAllowRename\":false,\"isMapToUI\":true,\"isRequired\":false,\"isRequiredEditable\":false,\"isSelected\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"maxLength\":250,\"name\":\"Tags\",\"placeHolder\":\"Tags\",\"relativeOrder\":4,\"value\":null}]",
        "createdOn": "2023-06-01T05:32:39.102104",
        "defaultFieldId": "4e94f131-057f-4543-a9a6-a4d7413b149f",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 1365,
        "sorRecordName": "june1_record1",
        "sorTypeName": "RT5",
        "sorTypeId": 91,
        "customFieldJson": "[{\"id\":91,\"name\":\"RT5\",\"parentId\":null,\"defaultFieldJson\":null,\"customFieldJson\":[{\"recordTypeId\":91,\"fieldTypeId\":1,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"7a0d9c8a-f5b9-4642-b45d-fe7dac2b9071\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text box1\",\"relativeOrder\":0,\"value\":\"ashish updated\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"3a884ee9-d9c7-4a86-ba7b-5ce58679a1be\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd1\",\"relativeOrder\":0,\"value\":\"c50f6bdc-91fe-4445-997a-09b719407113\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"954a755c-25da-4b6c-87f3-7cb90f5d799a\",\"name\":\"Enabled\"},{\"id\":\"c50f6bdc-91fe-4445-997a-09b719407113\",\"name\":\"Disabled\"}],\"isAllowAddOptions\":true},{\"recordTypeId\":91,\"fieldTypeId\":2,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"249750b0-6a38-4257-be13-f938b06c5a2c\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ms dd1\",\"relativeOrder\":0,\"value\":[{\"id\":\"a5eeafa4-818f-4309-98c5-8217668ba47b\",\"name\":\"A\"},{\"id\":\"6c7c68e2-269b-4767-911a-f599140f8624\",\"name\":\"B\"},{\"id\":\"09eabe39-64ad-468d-af99-270601db134c\",\"name\":\"C\"}],\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"a5eeafa4-818f-4309-98c5-8217668ba47b\",\"name\":\"A\"},{\"id\":\"6c7c68e2-269b-4767-911a-f599140f8624\",\"name\":\"B\"},{\"id\":\"09eabe39-64ad-468d-af99-270601db134c\",\"name\":\"C\"}],\"isAllowAddOptions\":true},{\"recordTypeId\":91,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"9e9b6eac-e7aa-4556-baa4-d0423262e720\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd2\",\"relativeOrder\":0,\"value\":\"e15a6812-f454-48e3-bb87-8e7db4093823\",\"isSelected\":false,\"isTemp\":false,\"Options\":[{\"id\":\"e15a6812-f454-48e3-bb87-8e7db4093823\",\"name\":\"A\"},{\"id\":\"d39635e6-f884-4813-a3c7-297b0d51c25a\",\"name\":\"B\"}],\"isAllowAddOptions\":true,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":3,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"b77b2afb-91a6-499f-b9fe-6205a325224c\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text area1\",\"relativeOrder\":0,\"value\":\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam f\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":5,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"c74009a9-3769-4b68-a10c-0521ad430e8c\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"numeric1\",\"relativeOrder\":0,\"value\":121,\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":8,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"cc2f675a-f2c7-4f7b-9204-9dd977612402\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"checkbox1\",\"relativeOrder\":0,\"value\":true,\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":12,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"24a98060-1dde-450b-972e-1265dd685289\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"percentage1(%)\",\"relativeOrder\":0,\"value\":\"34\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":4,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"7818e60d-c703-43ff-a4d3-f802a17a7de6\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"date1\",\"relativeOrder\":0,\"value\":\"2023-06-01T07:23:09.000Z\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":7,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"4b9b8b0f-01ec-4cf0-a6a1-30411763c7b9\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"decimal1\",\"relativeOrder\":0,\"value\":\"67.98\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":10,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"4d54c56d-0968-46b5-bf9d-15fb4a01f7e1\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"alphanumeric1\",\"relativeOrder\":0,\"value\":\"hello1234\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":13,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"52d48c12-a42b-4e7f-80b8-a0f4d9f17fb1\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"multitextbox1\",\"relativeOrder\":0,\"value\":[{\"id\":0,\"name\":\"hello\"},{\"id\":0,\"name\":\"world\"}],\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true}],\"sorId\":0}]",
        "referenceKey": "00000000-0000-0000-0000-000000000000",
        "defaultFieldJson": "[{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":false,\"maxLength\":50,\"name\":\"Id\",\"placeHolder\":\"Id\",\"value\":\"00000000 - 0000 - 0000 - 0000 - 000000000000\",\"relativeOrder\":1,\"isSelected\":false,\"isMapToUI\":false},{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"isAllowRename\":false,\"maxLength\":250,\"name\":\"Display Name\",\"placeHolder\":\"Display Name\",\"value\":\"june1_record1\",\"relativeOrder\":2,\"isSelected\":true,\"isMapToUI\":true},{\"fieldTypeId\":2,\"fieldTypeName\":\"DropDown\",\"fieldName\":\"DropDown\",\"id\":\"06618d12-2c70-47f4-9156-7169df6f1384\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"name\":\"Record Type\",\"value\":\"RT5\",\"options\":[],\"relativeOrder\":3,\"isSelected\":true,\"isMapToUI\":true},{\"fieldName\":\"TextBox\",\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"id\":\"eaf778ac-fe3b-4025-b05c-86941df14a83\",\"isAllowRename\":false,\"isMapToUI\":true,\"isRequired\":false,\"isRequiredEditable\":false,\"isSelected\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"maxLength\":250,\"name\":\"Tags\",\"placeHolder\":\"Tags\",\"relativeOrder\":4,\"value\":null}]",
        "createdOn": "2023-06-01T05:21:31.175894",
        "defaultFieldId": "2770b428-081e-4661-9ce9-a3f6ffc86567",
        "tags": [
          {
            "sorRecordId": 1365,
            "sorRecord": null,
            "tags": "testing tag1",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-06-15T06:49:29.526779",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 1469,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 1364,
        "sorRecordName": "imported",
        "sorTypeName": "RT5",
        "sorTypeId": 91,
        "customFieldJson": "[{\"id\":91,\"name\":\"RT5\",\"parentId\":null,\"customFieldJson\":[{\"recordTypeId\":91,\"fieldTypeId\":1,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"7a0d9c8a-f5b9-4642-b45d-fe7dac2b9071\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text box1\",\"relativeOrder\":0,\"value\":\"meenakshi rana\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"3a884ee9-d9c7-4a86-ba7b-5ce58679a1be\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd1\",\"relativeOrder\":0,\"value\":\"954a755c-25da-4b6c-87f3-7cb90f5d799a\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"name\":\"Enabled\",\"value\":\"954a755c-25da-4b6c-87f3-7cb90f5d799a\",\"isAlllowRemove\":true},{\"name\":\"Disabled\",\"value\":\"c50f6bdc-91fe-4445-997a-09b719407113\",\"isAlllowRemove\":true}],\"isAllowAddOptions\":true},{\"recordTypeId\":91,\"fieldTypeId\":2,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"249750b0-6a38-4257-be13-f938b06c5a2c\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ms dd1\",\"relativeOrder\":0,\"value\":[{\"id\":\"09eabe39-64ad-468d-af99-270601db134c\",\"name\":\"C\"},{\"id\":\"6c7c68e2-269b-4767-911a-f599140f8624\",\"name\":\"B\"},{\"id\":\"a5eeafa4-818f-4309-98c5-8217668ba47b\",\"name\":\"A\"}],\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"name\":\"A\",\"value\":\"a5eeafa4-818f-4309-98c5-8217668ba47b\",\"isAlllowRemove\":true},{\"name\":\"B\",\"value\":\"6c7c68e2-269b-4767-911a-f599140f8624\",\"isAlllowRemove\":true},{\"name\":\"C\",\"value\":\"09eabe39-64ad-468d-af99-270601db134c\",\"isAlllowRemove\":true}],\"isAllowAddOptions\":true},{\"recordTypeId\":91,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"9e9b6eac-e7aa-4556-baa4-d0423262e720\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd2\",\"relativeOrder\":0,\"value\":\"e15a6812-f454-48e3-bb87-8e7db4093823\",\"isSelected\":false,\"isTemp\":false,\"Options\":[{\"name\":\"A\",\"value\":\"e15a6812-f454-48e3-bb87-8e7db4093823\",\"isAlllowRemove\":true},{\"name\":\"B\",\"value\":\"d39635e6-f884-4813-a3c7-297b0d51c25a\",\"isAlllowRemove\":true}],\"isAllowAddOptions\":true,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":3,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"b77b2afb-91a6-499f-b9fe-6205a325224c\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text area1\",\"relativeOrder\":0,\"value\":\"this is for testing purpose\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":7,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"4b9b8b0f-01ec-4cf0-a6a1-30411763c7b9\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"decimal1\",\"relativeOrder\":0,\"value\":\"56.09\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":10,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"4d54c56d-0968-46b5-bf9d-15fb4a01f7e1\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"alphanumeric1\",\"relativeOrder\":0,\"value\":\"ashish1234\",\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":13,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"52d48c12-a42b-4e7f-80b8-a0f4d9f17fb1\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"multitextbox1\",\"relativeOrder\":0,\"value\":[{\"id\":0,\"name\":\"this \"},{\"id\":0,\"name\":\"is \"},{\"id\":0,\"name\":\"testing\"}],\"isSelected\":true,\"isTemp\":false,\"isMapToUIDefault\":false,\"isMapToUI\":true}],\"isAllowDelete\":false,\"defaultFieldJson\":null}]",
        "referenceKey": "2dfd698d-1acc-4006-b877-adc6b01e0c65",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"7c59d2ac-70da-4478-9b60-b52f6c79495f\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"imported\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT5\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-06-01T01:55:56.544773",
        "defaultFieldId": "a512ad59-46eb-4aaf-8167-ec79fc9ad309",
        "tags": [
          {
            "sorRecordId": 1364,
            "sorRecord": null,
            "tags": "ashish tag1",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-06-19T09:51:03.340358",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 1473,
            "isNew": false,
            "isDeleted": false
          },
          {
            "sorRecordId": 1364,
            "sorRecord": null,
            "tags": "testing tag2",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-06-19T09:45:18.182448",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 1472,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 1363,
        "sorRecordName": "may31_record1",
        "sorTypeName": "RT5",
        "sorTypeId": 91,
        "customFieldJson": "[{\"id\":91,\"name\":\"RT5\",\"parentId\":null,\"defaultFieldJson\":null,\"customFieldJson\":[{\"recordTypeId\":91,\"fieldTypeId\":1,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"7a0d9c8a-f5b9-4642-b45d-fe7dac2b9071\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"text box1\",\"relativeOrder\":0,\"value\":\"ashish\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true},{\"recordTypeId\":91,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"3a884ee9-d9c7-4a86-ba7b-5ce58679a1be\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd1\",\"relativeOrder\":0,\"value\":\"954a755c-25da-4b6c-87f3-7cb90f5d799a\",\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"name\":\"Enabled\",\"value\":\"954a755c-25da-4b6c-87f3-7cb90f5d799a\",\"isAlllowRemove\":true},{\"name\":\"Disabled\",\"value\":\"c50f6bdc-91fe-4445-997a-09b719407113\",\"isAlllowRemove\":true}],\"isAllowAddOptions\":true},{\"recordTypeId\":91,\"fieldTypeId\":2,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"249750b0-6a38-4257-be13-f938b06c5a2c\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ms dd1\",\"relativeOrder\":0,\"value\":[{\"id\":\"a5eeafa4-818f-4309-98c5-8217668ba47b\",\"name\":\"A\"},{\"id\":\"6c7c68e2-269b-4767-911a-f599140f8624\",\"name\":\"B\"},{\"id\":\"09eabe39-64ad-468d-af99-270601db134c\",\"name\":\"C\"}],\"isSelected\":false,\"isTemp\":false,\"isMapToUIDefault\":true,\"isMapToUI\":true,\"Options\":[{\"id\":\"a5eeafa4-818f-4309-98c5-8217668ba47b\",\"name\":\"A\"},{\"id\":\"6c7c68e2-269b-4767-911a-f599140f8624\",\"name\":\"B\"},{\"id\":\"09eabe39-64ad-468d-af99-270601db134c\",\"name\":\"C\"}],\"isAllowAddOptions\":true},{\"recordTypeId\":91,\"fieldTypeId\":14,\"recordId\":12,\"recordTypeName\":\"RT5\",\"id\":\"9e9b6eac-e7aa-4556-baa4-d0423262e720\",\"isRequired\":false,\"isRequiredEditable\":true,\"name\":\"ss dd2\",\"relativeOrder\":0,\"value\":\"d39635e6-f884-4813-a3c7-297b0d51c25a\",\"isSelected\":false,\"isTemp\":false,\"Options\":[{\"name\":\"A\",\"value\":\"e15a6812-f454-48e3-bb87-8e7db4093823\",\"isAlllowRemove\":true},{\"name\":\"B\",\"value\":\"d39635e6-f884-4813-a3c7-297b0d51c25a\",\"isAlllowRemove\":true}],\"isAllowAddOptions\":true,\"isMapToUIDefault\":true,\"isMapToUI\":true}],\"sorId\":0}]",
        "referenceKey": "00000000-0000-0000-0000-000000000000",
        "defaultFieldJson": "[{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":false,\"maxLength\":50,\"name\":\"Id\",\"placeHolder\":\"Id\",\"value\":\"00000000 - 0000 - 0000 - 0000 - 000000000000\",\"relativeOrder\":1,\"isSelected\":false,\"isMapToUI\":false},{\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"fieldName\":\"TextBox\",\"id\":\"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"isAllowRename\":false,\"maxLength\":250,\"name\":\"Display Name\",\"placeHolder\":\"Display Name\",\"value\":\"may31_record1\",\"relativeOrder\":2,\"isSelected\":true,\"isMapToUI\":true},{\"fieldTypeId\":2,\"fieldTypeName\":\"DropDown\",\"fieldName\":\"DropDown\",\"id\":\"06618d12-2c70-47f4-9156-7169df6f1384\",\"isRequired\":true,\"isRequiredEditable\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"name\":\"Record Type\",\"value\":\"RT5\",\"options\":[],\"relativeOrder\":3,\"isSelected\":true,\"isMapToUI\":true},{\"fieldName\":\"TextBox\",\"fieldTypeId\":1,\"fieldTypeName\":\"TextField\",\"id\":\"eaf778ac-fe3b-4025-b05c-86941df14a83\",\"isAllowRename\":false,\"isMapToUI\":true,\"isRequired\":false,\"isRequiredEditable\":false,\"isSelected\":false,\"isUnique\":true,\"isUniqueEditable\":true,\"maxLength\":250,\"name\":\"Tags\",\"placeHolder\":\"Tags\",\"relativeOrder\":4,\"value\":null}]",
        "createdOn": "2023-05-31T13:26:12.53233",
        "defaultFieldId": "e5e8f0b8-f057-480d-8148-d1ce1ef12858",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 887,
        "sorRecordName": "record200",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 200\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"111\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "13c51e0e-d512-4178-92a1-af8d4ad63437",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"7ac06b4b-e12e-4841-8f93-187e25c23de1\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record200\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.973045",
        "defaultFieldId": "da038be7-07b7-4d42-9c79-2c643ed3997c",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 886,
        "sorRecordName": "record199",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 199\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"110\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "9d674a2e-b321-4fdb-851e-38f7a9350a08",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"70d6f236-265e-4cc0-9642-9df4bef78a0e\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record199\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.899878",
        "defaultFieldId": "06f88bd9-b842-402b-8b48-c41ba2cde876",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 885,
        "sorRecordName": "record198",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 198\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"109\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "21c32de1-c70a-492d-b9ca-b093d7d1b520",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"7cfb3b1e-e1bd-4869-9fdd-7d56b672aa80\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record198\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.83467",
        "defaultFieldId": "9d3c2563-ebd8-458b-b406-6ad6e1bde8ed",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 884,
        "sorRecordName": "record197",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 197\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"108\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "bd138a91-0831-4ae1-a9aa-d207feae0592",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"6b9b2c17-3430-4377-ba27-5d31c1ca3493\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record197\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.770908",
        "defaultFieldId": "10744b41-64fd-448e-bccc-5e6231bdf385",
        "tags": [],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 883,
        "sorRecordName": "record196",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 196\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"107\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "111d6e23-2c8b-4a75-b1b3-7f7e88fe3658",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"71d9f653-102c-4601-b804-f0c8c9a36c50\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record196\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.704761",
        "defaultFieldId": "81d9c112-0a04-4329-87e6-03b0521b9fe3",
        "tags": [
          {
            "sorRecordId": 883,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.722746",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 252,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 882,
        "sorRecordName": "record195",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 195\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"106\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "dafb47f0-6ba0-4642-afd9-39b6fb582ba6",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"21a855a4-d12b-4ca1-b0be-1bfd0bfc15e9\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record195\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.640229",
        "defaultFieldId": "f665bdc7-9bbf-422d-9822-2ea9a8b233a7",
        "tags": [
          {
            "sorRecordId": 882,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.659956",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 251,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 881,
        "sorRecordName": "record194",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 194\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"105\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "6c42f26a-e9a7-4fbe-adb7-c07ac476ceb3",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"7069e636-5977-4050-8b21-26478307360d\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record194\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.574641",
        "defaultFieldId": "506945ed-ba0f-4042-a54b-abac6623f0c7",
        "tags": [
          {
            "sorRecordId": 881,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.592076",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 250,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 880,
        "sorRecordName": "record193",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 193\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"104\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "314eddc3-71d7-40bd-bff6-26b87ea9413c",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"72bf8363-98b6-457b-9d25-ac90ecfb85b3\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record193\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.495397",
        "defaultFieldId": "b3785490-db1b-4739-8f07-accc5f778e7b",
        "tags": [
          {
            "sorRecordId": 880,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.51199",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 249,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 879,
        "sorRecordName": "record192",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 192\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"103\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "7a259ea6-2949-4062-9977-7393409b5b11",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"4ba0da6d-2136-4a37-81ba-c77de8b52d6e\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record192\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.434991",
        "defaultFieldId": "935dc3fc-2b57-49cb-91bc-35fb50e36874",
        "tags": [
          {
            "sorRecordId": 879,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.453543",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 248,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 878,
        "sorRecordName": "record191",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 191\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"102\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "f0afa4a4-ee86-401c-a4b8-3f0b417703a8",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"3c664655-ae25-4711-9807-816cd06e385f\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record191\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.37371",
        "defaultFieldId": "74c6fe72-ae4d-4cb9-8d23-167d30679984",
        "tags": [
          {
            "sorRecordId": 878,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.391224",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 247,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 877,
        "sorRecordName": "record190",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 190\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"101\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "b2c2ff3c-911b-476e-a04d-4bec7fa774f0",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"04640135-2627-4816-99cc-d492908abc38\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record190\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.315077",
        "defaultFieldId": "11fc58ee-ffd7-49e4-a6f8-f0a7a0c2540b",
        "tags": [
          {
            "sorRecordId": 877,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.331405",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 246,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 876,
        "sorRecordName": "record189",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 189\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"100\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "9ce706a1-7c1d-428f-94a3-6fe17913d488",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"3711cb17-9132-43e9-9bac-b467fa8c2423\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record189\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.250155",
        "defaultFieldId": "b5ceb222-ca31-4d38-9da8-b3f885b3b510",
        "tags": [
          {
            "sorRecordId": 876,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.267376",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 245,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 875,
        "sorRecordName": "record188",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 188\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"99\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "d13815ea-0508-4f6a-a1da-86bed9c04ccd",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"75733def-eaf0-44c8-a30d-b94042d5e6f2\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record188\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.191705",
        "defaultFieldId": "0ab4de2d-3e78-45aa-b1ee-03481ba3a35c",
        "tags": [
          {
            "sorRecordId": 875,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.207694",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 244,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 874,
        "sorRecordName": "record187",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 187\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"98\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "d6212f09-d8f1-4617-b7b7-2daec19d3953",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"ff68f09e-20e4-4b8e-bc19-12676052310e\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record187\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.132796",
        "defaultFieldId": "68d2ed36-46e6-4f84-9cc7-dd47fe4d5f34",
        "tags": [
          {
            "sorRecordId": 874,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.149448",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 243,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 873,
        "sorRecordName": "record186",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 186\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"97\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "81af0cee-9c21-4c25-8d6c-19d337f4344c",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"31852ac6-0d9c-4abf-b86e-670e795f6921\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record186\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:41.072596",
        "defaultFieldId": "407e434e-ca32-49df-9234-765556cd3799",
        "tags": [
          {
            "sorRecordId": 873,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.088631",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 242,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 872,
        "sorRecordName": "record185",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 185\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"96\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "c4d74942-2088-4f00-bcef-6871218ae8c5",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"f24a97c2-a562-45e6-ad45-af5f32267e54\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record185\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:40.998771",
        "defaultFieldId": "9ef38b17-e4f6-4872-adc4-335bf24cf843",
        "tags": [
          {
            "sorRecordId": 872,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:41.025888",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 241,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 871,
        "sorRecordName": "record184",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 184\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"95\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "022b1418-4dc7-4b41-bb77-c59abb5db0c2",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"3389c747-5850-4c31-af78-1ed3aae96658\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record184\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:40.939646",
        "defaultFieldId": "fe091376-8abd-4b86-b5b8-a35a26838b7b",
        "tags": [
          {
            "sorRecordId": 871,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:40.956102",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 240,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      },
      {
        "sorId": 12,
        "sorRecordId": 870,
        "sorRecordName": "record183",
        "sorTypeName": "RT4",
        "sorTypeId": 44,
        "customFieldJson": "[\n  {\n    \"id\": 44,\n    \"name\": \"RT4\",\n    \"parentId\": null,\n    \"customFieldJson\": [\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 1,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"ac0c6c59-f3a0-4818-b421-7c8e7503aff8\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"text box1\",\n        \"relativeOrder\": 0,\n        \"value\": \"Ashish 183\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      },\n      {\n        \"recordTypeId\": 44,\n        \"fieldTypeId\": 7,\n        \"recordId\": 12,\n        \"recordTypeName\": \"RT4\",\n        \"id\": \"a225e2bc-3f46-4399-89aa-6a3c9a160a39\",\n        \"isRequired\": false,\n        \"isRequiredEditable\": true,\n        \"name\": \"decimal1\",\n        \"relativeOrder\": 0,\n        \"value\": \"94\",\n        \"isSelected\": false,\n        \"isTemp\": false,\n        \"isMapToUIDefault\": true,\n        \"isMapToUI\": true\n      }\n    ],\n    \"isAllowDelete\": false,\n    \"defaultFieldJson\": null\n  }\n]",
        "referenceKey": "a4cae6c3-a121-49ef-bcf6-bb83d71e4eb6",
        "defaultFieldJson": "[\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"91e27cb4-f0de-4f64-a3fc-1b2989a49c1e\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": false,\n    \"maxLength\": 50,\n    \"name\": \"Id\",\n    \"placeHolder\": \"Id\",\n    \"value\": \"837b7e0c-7268-4206-b1fa-7185a093bad1\",\n    \"relativeOrder\": 1,\n    \"isSelected\": false,\n    \"isMapToUI\": false\n  },\n  {\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"fieldName\": \"TextBox\",\n    \"id\": \"75a26cdc-38b8-41e2-95f2-3d18f2291a04\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"isAllowRename\": false,\n    \"maxLength\": 250,\n    \"name\": \"Display Name\",\n    \"placeHolder\": \"Display Name\",\n    \"value\": \"record183\",\n    \"relativeOrder\": 2,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldTypeId\": 2,\n    \"fieldTypeName\": \"DropDown\",\n    \"fieldName\": \"DropDown\",\n    \"id\": \"06618d12-2c70-47f4-9156-7169df6f1384\",\n    \"isRequired\": true,\n    \"isRequiredEditable\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"name\": \"Record Type\",\n    \"value\": \"RT4\",\n    \"options\": [],\n    \"relativeOrder\": 3,\n    \"isSelected\": true,\n    \"isMapToUI\": true\n  },\n  {\n    \"fieldName\": \"TextBox\",\n    \"fieldTypeId\": 1,\n    \"fieldTypeName\": \"TextField\",\n    \"id\": \"eaf778ac-fe3b-4025-b05c-86941df14a83\",\n    \"isAllowRename\": false,\n    \"isMapToUI\": true,\n    \"isRequired\": false,\n    \"isRequiredEditable\": false,\n    \"isSelected\": false,\n    \"isUnique\": true,\n    \"isUniqueEditable\": true,\n    \"maxLength\": 250,\n    \"name\": \"Tags\",\n    \"placeHolder\": \"Tags\",\n    \"relativeOrder\": 4,\n    \"value\": \"\"\n  }\n]",
        "createdOn": "2023-05-25T05:41:40.8778",
        "defaultFieldId": "9bee1316-7b8e-4c5c-b1e3-42c544ddafb5",
        "tags": [
          {
            "sorRecordId": 870,
            "sorRecord": null,
            "tags": "",
            "color": null,
            "createdBy": 71,
            "createdOn": "2023-05-25T05:41:40.896378",
            "updatedBy": null,
            "updatedOn": null,
            "tenantId": 26,
            "transactionStatusId": 3,
            "id": 239,
            "isNew": false,
            "isDeleted": false
          }
        ],
        "isArchived": false
      }
    ]
   
  
 


  ngOnInit() {

    // Object data  
    console.log(this.data);

    // Convert to JSON  
    //this.stringifiedData = JSON.stringify(this.data);
    //console.log("With Stringify :", this.stringifiedData);

  }
}  
