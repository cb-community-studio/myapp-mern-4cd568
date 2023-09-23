import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';




const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const Sheet1CreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            instituition: _entity.instituition,
            program: _entity.program,
            facultyAdminProgramCoordinator: _entity.facultyAdminProgramCoordinator,
            facultyStaffLecturer: _entity.facultyStaffLecturer,
            staffEmail: _entity.staffEmail,
            otherRoles: _entity.otherRoles,
            lmsPlatform: _entity.lmsPlatform,
            valid: _entity.valid,
            Empty: _entity.Empty,
            subjectsOnly: _entity.subjectsOnly,
            subjectsToExclude: _entity.subjectsToExclude,
            allSubjects: _entity.allSubjects,
        };

        setLoading(true);
        try {
            const result = await client.service("sheet1").patch(_entity._id, _data);
            props.onHide();
            props.alert({ type: "success", title: "Edit info", message: "Info updated successfully" });
            props.onEditResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options
    

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="sheet1-edit-dialog-component">
                <div>
                <p className="m-0">Instituition:</p>
                <InputText className="w-full mb-3" value={_entity?.instituition} onChange={(e) => setValByKey("instituition", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Program:</p>
                <InputText className="w-full mb-3" value={_entity?.program} onChange={(e) => setValByKey("program", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Faculty Admin  Program Coordinator :</p>
                <InputText className="w-full mb-3" value={_entity?.facultyAdminProgramCoordinator} onChange={(e) => setValByKey("facultyAdminProgramCoordinator", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Faculty Staff  Lecturer :</p>
                <InputText className="w-full mb-3" value={_entity?.facultyStaffLecturer} onChange={(e) => setValByKey("facultyStaffLecturer", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Staff Email:</p>
                <InputText className="w-full mb-3" value={_entity?.staffEmail} onChange={(e) => setValByKey("staffEmail", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Other Roles:</p>
                <InputText className="w-full mb-3" value={_entity?.otherRoles} onChange={(e) => setValByKey("otherRoles", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Lms Platform:</p>
                <InputText className="w-full mb-3" value={_entity?.lmsPlatform} onChange={(e) => setValByKey("lmsPlatform", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Valid:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.valid} onChange={(e) => setValByKey("valid", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">  Empty:</p>
                <InputText className="w-full mb-3" value={_entity?.Empty} onChange={(e) => setValByKey("Empty", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Subjects Only:</p>
                <InputText className="w-full mb-3" value={_entity?.subjectsOnly} onChange={(e) => setValByKey("subjectsOnly", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Subjects To Exclude:</p>
                <InputText className="w-full mb-3" value={_entity?.subjectsToExclude} onChange={(e) => setValByKey("subjectsToExclude", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">All Subjects:</p>
                <InputText className="w-full mb-3" value={_entity?.allSubjects} onChange={(e) => setValByKey("allSubjects", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return{}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(Sheet1CreateDialogComponent);
