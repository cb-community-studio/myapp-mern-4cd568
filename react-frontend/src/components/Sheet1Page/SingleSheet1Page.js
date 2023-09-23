import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleSheet1Page = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("sheet1")
            .get(urlParams.singleSheet1Id, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Sheet1", type: "error", message: error.message || "Failed get sheet1" });
            });
    }, []);

    const goBack = () => {
        history.replace("/sheet1");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Sheet1</h3>
                </div>
                <p>sheet1/{urlParams.singleSheet1Id}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">Instituition</label>
                    <p className="m-0" >{data?.instituition}</p>
                    <label className="text-sm">Program</label>
                    <p className="m-0" >{data?.program}</p>
                    <label className="text-sm">Faculty Admin  Program Coordinator </label>
                    <p className="m-0" >{data?.facultyAdminProgramCoordinator}</p>
                    <label className="text-sm">Faculty Staff  Lecturer </label>
                    <p className="m-0" >{data?.facultyStaffLecturer}</p>
                    <label className="text-sm">Staff Email</label>
                    <p className="m-0" >{data?.staffEmail}</p>
                    <label className="text-sm">Other Roles</label>
                    <p className="m-0" >{data?.otherRoles}</p>
                    <label className="text-sm">Lms Platform</label>
                    <p className="m-0" >{data?.lmsPlatform}</p>
                    <label className="text-sm">Valid</label>
                    <p className="m-0" >{data?.valid}</p>
                    <label className="text-sm">  Empty</label>
                    <p className="m-0" >{data?.Empty}</p>
                    <label className="text-sm">Subjects Only</label>
                    <p className="m-0" >{data?.subjectsOnly}</p>
                    <label className="text-sm">Subjects To Exclude</label>
                    <p className="m-0" >{data?.subjectsToExclude}</p>
                    <label className="text-sm">All Subjects</label>
                    <p className="m-0" >{data?.allSubjects}</p> */}
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleSheet1Page);
