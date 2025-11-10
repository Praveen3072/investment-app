import { useState } from "react";
export default function UserInput({userInput,onEnter}) {
    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input type="number" 
                        required 
                        value={userInput.intialInvestment}
                        onChange={(event)=>onEnter('intialInvestment',event.target.value)}></input>
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input type="number" 
                        required 
                        value={userInput.annualInvestment}
                        onChange={(event)=>onEnter('annualInvestment',event.target.value)}></input>
                    </p>

                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input type="number" 
                        required 
                        value={userInput.expectedReturn}
                        onChange={(event)=>onEnter('expectedReturn',event.target.value)}></input>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input type="number" 
                        required 
                        value={userInput.duration}
                        onChange={(event)=>onEnter('duration',event.target.value)}></input>
                    </p>

                </div>
            </section>
        </>
    )
}