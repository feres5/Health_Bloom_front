import React from "react";


import SectionThreadsCard from "./SectionThreadsCard";

function SectionThreadsContent({ items }) 
{
    var thr = [];
    
        thr= items.map((item) => { return(
            <SectionThreadsCard thread={item}></SectionThreadsCard>)
        });

    return (
        <>
        {thr}
        </>
    );
};


export default SectionThreadsContent;