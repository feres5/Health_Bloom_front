import React from "react";


import SectionThreadsCard from "./SectionThreadsCard";

function SectionThreadsContent({ items }) 
{
    var thr = [];
    
        thr= items.map((item, index) => { return(
            <SectionThreadsCard key={index} thread={item}></SectionThreadsCard>)
        });

    return (
        <>
        {thr}
        </>
    );
};


export default SectionThreadsContent;