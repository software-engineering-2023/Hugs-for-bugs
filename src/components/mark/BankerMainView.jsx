import React, { useState } from "react";
import Banker from "./Banker";
import BankerNavigation from "./BankerNavigation";
import HandleCredit from "./HandleCredit";
import BankerLoan from "./BankerLoan";
const BankerMainView = () => {

    let [view, setView] = useState("Banker")
    return (
        <>
            <BankerNavigation setView={setView} />
            {view === "Banker" ? <Banker setView={setView} /> : null}
            {view === "HandleCredit" ? <HandleCredit set /> : null}
            {view === "BankerLoan" ? <BankerLoan /> : null}
        </>
    )


}
export default BankerMainView;

