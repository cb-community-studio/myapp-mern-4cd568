import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleSheet12Page = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("sheet12")
            .get(urlParams.singleSheet12Id, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Sheet12", type: "error", message: error.message || "Failed get sheet12" });
            });
    }, []);

    const goBack = () => {
        history.replace("/sheet12");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Sheet12</h3>
                </div>
                <p>sheet12/{urlParams.singleSheet12Id}</p>
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
                    <p className="m-0" >{data?.lmsPlatform}</p> */}
            
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

export default connect(mapState, mapDispatch)(SingleSheet12Page);
