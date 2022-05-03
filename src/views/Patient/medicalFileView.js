import React, {useState} from "react";
import {Descriptions} from "antd";

function MedicalFileView(props) {
    const [MedicalFile,setMedicalFile]=useState(props.medicalFile)

    return(
        <>
            <br/>
            <Descriptions title="surgical :">
                {
                    MedicalFile.Surgical?.map((surgical,index)=>(
                        <>
                            <Descriptions.Item  label="title" span={3}>
                                {surgical.title}
                            </Descriptions.Item>
                            <Descriptions.Item label="motif" span={3}>
                                {surgical.motif}
                            </Descriptions.Item>
                            <Descriptions.Item label="outcomes" span={3}>
                                {surgical.outcomes}
                            </Descriptions.Item>
                            <Descriptions.Item label="date" span={3}>
                                {surgical.date}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>
            <Descriptions title="Obstetric :">
                {
                    MedicalFile.Obstetric?.map((obstetric,index)=>(
                        <>
                            <Descriptions.Item label="outcomes" span={3}>
                                {obstetric.outcomes}
                            </Descriptions.Item>
                            <Descriptions.Item label="pregnancy Date" span={3}>
                                {obstetric.pregnancyDate}
                            </Descriptions.Item>
                            <Descriptions.Item label="childBirth Date" span={3}>
                                {obstetric.childBirthDate}
                            </Descriptions.Item>
                            <Descriptions.Item label="baby Gender" span={3}>
                                {obstetric.babyGender}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>
            <Descriptions title="Medications :">
                {
                    MedicalFile.Medications?.map((medications,index)=>(
                        <>
                            <Descriptions.Item label="name" span={3}>
                                {medications.name}
                            </Descriptions.Item>
                            <Descriptions.Item label="dose" span={3}>
                                {medications.dose}
                            </Descriptions.Item>
                            <Descriptions.Item label="from" span={3}>
                                {medications.from}
                            </Descriptions.Item>
                            <Descriptions.Item label="until" span={3}>
                                {medications.until}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>
            <Descriptions title="Family History :">
                {
                    MedicalFile.FamilyHistory?.map((familyHistory,index)=>(
                        <>
                            <Descriptions.Item label="family Member" span={3}>
                                {familyHistory.familyMember}
                            </Descriptions.Item>
                            <Descriptions.Item label="disease" span={3}>
                                {familyHistory.disease}
                            </Descriptions.Item>
                            <Descriptions.Item label="treatments" span={3}>
                                {familyHistory.treatments}
                            </Descriptions.Item>
                            <Descriptions.Item label="outcomes" span={3}>
                                {familyHistory.outcomes}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>
            <Descriptions title="Social History :">
                {
                    MedicalFile.SocialHistory?.map((socialHistory,index)=>(
                        <>
                            <Descriptions.Item label="title" span={3}>
                                {socialHistory.title}
                            </Descriptions.Item>
                            <Descriptions.Item label="info" span={3}>
                                {socialHistory.info}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
            <br/>
            <Descriptions title="Habits :">
                {
                    MedicalFile.Habits?.map((habits,index)=>(
                        <>
                            <Descriptions.Item label="habit" span={3}>
                                {habits.habit}
                            </Descriptions.Item>
                            <Descriptions.Item label="state" span={3}>
                                {habits.state}
                            </Descriptions.Item>
                        </>
                    ))
                }
            </Descriptions>
        </>
    );
}
export default MedicalFileView;
