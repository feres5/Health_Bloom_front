import React, {useState} from "react";
import  ReactPDF,{ Document, Page, Text, Image,View, StyleSheet ,PDFViewer } from '@react-pdf/renderer';
import MedicalFileView from "./medicalFileView";
import logoNav1 from "../../assets/img/logoNav.png"
import {blue, lightBlue} from "@mui/material/colors";
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    image:{
        width: 200,
        marginVertical:10,
        marginHorizontal:180,
        textAlign: "Centre"

    },
    text:{
        margin : 12,
        fontSize:14,
        textAlign:"Justify",
        fontFamily:"Times-Roman"

    },
    title:{
        color: '#007bff',
        marginVertical:10,
        marginHorizontal:200,
        fontSize:24,
        textAlign: "Centre"

    },
    footer:{
        color: '#007bff',
        marginVertical:10,
        marginHorizontal:215,
        fontSize:14,
        textAlign: "Centre"

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
                    <Image style={styles.image} src={logoNav1} />
                    <Text style={styles.title} > Medical File</Text>
                    <Text style={styles.text} >

                        <MedicalFileView  medicalFile={MedicalFile} ></MedicalFileView>
                    </Text>
                    <Text style={styles.footer} > *** Thank You ***</Text>
                </View>
            </Page>
        </Document>
    );

};

export default PdfMFile;

