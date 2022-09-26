import React from 'react';
import { useState } from "react";

const FormImc = (props) => {
    const [weight, setWeight] = props("");
    const [height, setHeight] = props("");


    const handleSubmit = (event) => {
        event.preventDefault();

        props.addWeight(weight);
        setWeight("");
        props.addHeight(height);
        setHeight("");

    };

    return (
        <div className='formImc'>
            <div className="weight-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        name='weight'
                        type="number"
                        placeholder='Rentrez votre poids (kg)'
                        value={weight}
                        onChange= {(e) => setWeight(e.target.value)}
                    />
                    <input 
                        name='height'
                        type="number"
                        placeholder='Rentrez votre taile (cm)'
                        value={height}
                        onChange= {(e) => setHeight(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default FormImc;