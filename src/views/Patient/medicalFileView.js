import React, {useState} from "react";
import {Descriptions} from "antd";
import { StyleSheet } from '@react-pdf/renderer';

function MedicalFileView(props) {
    const [MedicalFile,setMedicalFile]=useState(props.medicalFile)

    return(
        <>
            <br/>

            <Descriptions title="surgical :"   >
                {

                    MedicalFile.Surgical?.map((surgical,index)=>(
                        <>

                            <Descriptions.Item  label="title" span={3} >
                                    {surgical.title} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="motif" span={3} >
                                {surgical.motif} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="outcomes" span={3}>
                                {surgical.outcomes} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="date" span={3}>
                                {surgical.date} {"\n"}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
                {"\n"}
            <br/>
            <Descriptions title="Obstetric :">
                {
                    MedicalFile.Obstetric?.map((obstetric,index)=>(
                        <>
                            <Descriptions.Item label="outcomes" span={3}>
                                {obstetric.outcomes} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="pregnancy Date" span={3}>
                                {obstetric.pregnancyDate} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="childBirth Date" span={3}>
                                {obstetric.childBirthDate} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="baby Gender" span={3}>
                                {obstetric.babyGender} {"\n"}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>{"\n"}
            <Descriptions title="Medications :">
                {
                    MedicalFile.Medications?.map((medications,index)=>(
                        <>
                            <Descriptions.Item label="name" span={3}>
                                {medications.name} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="dose" span={3}>
                                {medications.dose} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="from" span={3}>
                                {medications.from} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="until" span={3}>
                                {medications.until} {"\n"}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>{"\n"}
            <Descriptions title="Family History :">
                {
                    MedicalFile.FamilyHistory?.map((familyHistory,index)=>(
                        <>
                            <Descriptions.Item label="family Member" span={3}>
                                {familyHistory.familyMember} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="disease" span={3}>
                                {familyHistory.disease} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="treatments" span={3}>
                                {familyHistory.treatments} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="outcomes" span={3}>
                                {familyHistory.outcomes} {"\n"}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>{"\n"}
            <Descriptions title="Social History :">
                {
                    MedicalFile.SocialHistory?.map((socialHistory,index)=>(
                        <>
                            <Descriptions.Item label="title" span={3}>
                                {socialHistory.title} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="info" span={3}>
                                {socialHistory.info} {"\n"}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>{"\n"}
            <Descriptions title="Habits :">
                {
                    MedicalFile.Habits?.map((habits,index)=>(
                        <>
                            <Descriptions.Item label="habit" span={3}>
                                {habits.habit} {"\n"}
                            </Descriptions.Item>
                            <Descriptions.Item label="state" span={3}>
                                {habits.state} {"\n"}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>{"\n"}
        </>
    );
}
export default MedicalFileView;
