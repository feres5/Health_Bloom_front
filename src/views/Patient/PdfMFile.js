import React, {useState} from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import {Button} from "reactstrap";
import { renderToString } from 'react-dom/server';

function PdfMFile (props)  {
    const [MedicalFile,setMedicalFile]=useState(props.medicalFile);
    const name= useState(props.name);
    //pdf doc
    function downloadPdf(){
        const doc = new jsPDF();
        doc.text("medical file test",20,10);
        //
        const Title = <h5>Surgical</h5>;
        // const string = renderToString(<Title/>);
        doc.html(Title);

        doc.autoTable({
            head: [['Title', 'Motif', 'Outcomes','Date']],
            body: MedicalFile.Surgical?.map(surgical=> {
                return [surgical.title, surgical.motif, surgical.outcomes, surgical.date];
            }),

        })
        doc.autoTable({
            head: [['Outcomes', 'Pregnancy Date', 'Child BirthDate','Baby Gender']],
            body: MedicalFile.Obstetric?.map(obstetric=> {
                return [obstetric.outcomes, obstetric.pregnancyDate,obstetric.childBirthDate, obstetric.babyGender];
            }),

        })
        doc.autoTable({
            head: [['Name', 'Dose', 'From','Until']],
            body: MedicalFile.Medications?.map(medications=> {
                return [medications.name, medications.dose,medications.from, medications.until];
            }),

        })
        doc.autoTable({
            head: [['Family Member', 'Disease', 'Treatments','Outcomes']],
            body: MedicalFile.FamilyHistory?.map(familyHistory=> {
                return [familyHistory.familyMember, familyHistory.disease,familyHistory.treatments, familyHistory.outcomes];
            }),

        })
        doc.autoTable({
            head: [['Title','Info']],
            body: MedicalFile.SocialHistory?.map(socialHistory=> {
                return [socialHistory.title, socialHistory.info];
            }),
        })
        doc.autoTable({
            head: [['Habit','State']],
            body: MedicalFile.Habits?.map(habits=> {
                return [habits.habit, habits.state];
            }),
        })
        //saving
        doc.save(`${name} Medicalfile.pdf`);
    }
    return(
        <>
            <Button className="btn-round" color="info" outline type="button" onClick={downloadPdf} >pdf</Button>
        </>
    );
};

export default PdfMFile;

