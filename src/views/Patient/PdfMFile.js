import React, {useState} from "react";
import  ReactPDF,{ Document, Page, Text, View, StyleSheet ,PDFViewer } from '@react-pdf/renderer';
import MedicalFileView from "./medicalFileView";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
function PdfMFile (props)  {
    const [MedicalFile,setMedicalFile]=useState(props.medicalFile)
    console.log(MedicalFile);
    if (!MedicalFile){
        return <a>Still loading data</a>
    }
    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>
                        <MedicalFileView  medicalFile={MedicalFile} ></MedicalFileView>
                    </Text>
                </View>
            </Page>
        </Document>
    );

};

export default PdfMFile;
