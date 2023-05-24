import React, { useState } from "react";
import Banker from "./Banker";
import BankerNavigation from "./BankerNavigation";
import HandleCredit from "./HandleCredit";
const BankerMainView = () => {

    let [view,setView]=useState("Banker")
    return (
        <>
        <BankerNavigation/>
        {view==="Banker"?<Banker setView={setView}/>:null}
        {view==="HandleCredit"?<HandleCredit/>:null}
        
        </>
    )


}
export default BankerMainView;

