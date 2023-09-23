
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const Sheet1DataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.instituition}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.program}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.facultyAdminProgramCoordinator}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.facultyStaffLecturer}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.staffEmail}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.otherRoles}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.lmsPlatform}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.valid}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.Empty}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.subjectsOnly}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.subjectsToExclude}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.allSubjects}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="instituition" header="Instituition" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="program" header="Program" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="facultyAdminProgramCoordinator" header="Faculty Admin  Program Coordinator " body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="facultyStaffLecturer" header="Faculty Staff  Lecturer " body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="staffEmail" header="Staff Email" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="otherRoles" header="Other Roles" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="lmsPlatform" header="Lms Platform" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="valid" header="Valid" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="Empty" header="  Empty" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="subjectsOnly" header="Subjects Only" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="subjectsToExclude" header="Subjects To Exclude" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="allSubjects" header="All Subjects" body={pTemplate11} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default Sheet1DataTable;