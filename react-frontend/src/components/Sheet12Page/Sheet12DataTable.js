
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const Sheet12DataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.instituition}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.program}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.facultyAdminProgramCoordinator}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.facultyStaffLecturer}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.staffEmail}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.otherRoles}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.lmsPlatform}</p>

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

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default Sheet12DataTable;