import React from 'react';
import { useState } from 'react';
import { json } from 'react-router-dom';
import FormImc from './FormImc';

const interpretations = new Map();
interpretations.set(16.5, "dénutrition ou anorexie" );
interpretations.set(18.5, "maigreur" );
interpretations.set(25, "poisd normal");
interpretations.set(30, "surpoids");
interpretations.set(35, "obésité modérée");
interpretations.set(40, "obesité sévère");
interpretations.set("infinity", "obésité morbide ou massive");

const Result = () => {
    console.log(props)


    return (
        <div>
            
        </div>
    );
};

export default Result;