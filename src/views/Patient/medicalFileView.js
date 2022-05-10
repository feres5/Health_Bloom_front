import React, {useState} from "react";
import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: {
        display: "table",
        width: "auto",
        borderStyle: "#bfbfbf",
        borderColor: "solid",
    }
});

function MedicalFileView(props) {
        const [MedicalFile,setMedicalFile]=useState(props.medicalFile);

    return(
        <>
            <br/>
            <h5>Surgical : </h5>
            <table className="table table-hover" style={styles.table}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Motif</th>
                    <th>Outcomes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {MedicalFile.Surgical?.map((surgical,index)=>(
                    <tr>
                        <td>{surgical.title}</td>
                        <td>{surgical.motif}</td>
                        <td>{surgical.outcomes}</td>
                        <td>{surgical.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <h5>Obstetric : </h5>
            <table className="table table-hover" style={styles.table}>
                <thead>
                <tr>
                    <th>Outcomes</th>
                    <th>Pregnancy Date</th>
                    <th>Child Birth Date</th>
                    <th>Baby Gender</th>
                </tr>
                </thead>
                <tbody>
                {MedicalFile.Obstetric?.map((obstetric,index)=>(
                    <tr>
                        <td>{obstetric.outcomes}</td>
                        <td>{obstetric.pregnancyDate}</td>
                        <td>{obstetric.childBirthDate}</td>
                        <td>{obstetric.babyGender}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <h5>Medications : </h5>
            <table className="table table-hover" style={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Dose</th>
                    <th>From</th>
                    <th>Until</th>
                </tr>
                </thead>
                <tbody>
                {MedicalFile.Medications?.map((medications,index)=>(
                    <tr>
                        <td>{medications.name}</td>
                        <td>{medications.dose}</td>
                        <td>{medications.from}</td>
                        <td>{medications.until}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <h5>Family History : </h5>
            <table className="table table-hover" style={styles.table}>
                <thead>
                <tr>
                    <th>Family Member</th>
                    <th>Disease</th>
                    <th>Treatments</th>
                    <th>Outcomes</th>
                </tr>
                </thead>
                <tbody>
                {MedicalFile.FamilyHistory?.map((familyHistory,index)=>(
                    <tr>
                        <td>{familyHistory.familyMember}</td>
                        <td>{familyHistory.disease}</td>
                        <td>{familyHistory.treatments}</td>
                        <td>{familyHistory.outcomes}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <h5>Social History : </h5>
            <table className="table table-hover" style={styles.table}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Info</th>
                </tr>
                </thead>
                <tbody>
                {MedicalFile.SocialHistory?.map((socialHistory,index)=>(
                    <tr>
                        <td>{socialHistory.title}</td>
                        <td>{socialHistory.info}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <h5>Habits : </h5>
            <table className="table table-hover" style={styles.table}>
                <thead>
                <tr>
                    <th>Habit</th>
                    <th>State</th>
                </tr>
                </thead>
                <tbody>
                {MedicalFile.Habits?.map((habits,index)=>(
                    <tr>
                        <td>{habits.habit}</td>
                        <td>{habits.state}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
export default MedicalFileView;
