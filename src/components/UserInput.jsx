import { useState } from "react";
import InputBox from "./InputBox";

export default function UserInput({ handleChange, userInp}) {


    return (
        <section id="user-input">
            <div className="input-group">
                <InputBox label={"initialInvestment"} change={(event) => handleChange("initialInvestment", event.target.value)} input={userInp.initialInvestment}/>
                <InputBox label={"annualInvestment"} change={(event) => handleChange("annualInvestment", event.target.value)} input={userInp.annualInvestment}/>
            </div>
            <div className="input-group">
                <InputBox label={"expectedReturn"} change={(event) => handleChange("expectedReturn", event.target.value)} input={userInp.expectedReturn}/>
                <InputBox label={"duration"} change={(event) => handleChange("duration", event.target.value)} input={userInp.duration}/>
            </div>
        </section>
    );
}