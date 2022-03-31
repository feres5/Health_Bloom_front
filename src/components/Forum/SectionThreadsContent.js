import React from "react";


import SectionThreadsCard from "./SectionThreadsCard";

function SectionThreadsContent({ items }) 
{
    var thr = [];
    
        thr= items.map(() => { return(
            <SectionThreadsCard></SectionThreadsCard>)
        });

    return (
        <>
        {thr}
        </>
    );
};


export default SectionThreadsContent;