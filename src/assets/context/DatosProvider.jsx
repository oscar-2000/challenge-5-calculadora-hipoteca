import React from "react";
import DatosContext from "@context/DatosContext"
import { useState } from "react";

const DatosProvider = ({children}) => {
    const dataInitial = {
        amount: 0,
        year: 1,
        rate: 1,
        type: 0
    }

    const [datos, setDatos] = useState(dataInitial);
    const [resultVisible, setResult] = useState(false);
    const [clickConfirm, setConfirm] = useState(false);
    const formCompleted = datos.amount > 0 && datos.year > 0 && datos.rate > 0 && datos.type > 0 ? true : false;
    
    const setAmount = (value) => {
        setDatos(prev => ({
            ...prev, amount: value
        }))
    }

    const setYear = (value) => {
        setDatos(prev => ({
            ...prev, year:value
        }))
    }

    const setRate = (value) => {
        setDatos(prev => ({
            ...prev, rate:value
        }))
    }

    const setType = (value) => {
        setDatos(prev => ({
            ...prev, type:value
        }))
    }

    const resetForm = () => {
        setDatos(dataInitial)
        setResult(false);
        setConfirm(false);
    }

    const showResult = () => {
        setResult(prev => formCompleted ? true : false);
        setConfirm(true);
    }

    console.log(resultVisible);

    return(
        <DatosContext.Provider value={{datos, setAmount, setYear, setRate, setType, resetForm, resultVisible, showResult, formCompleted, clickConfirm}}>
            {children}
        </DatosContext.Provider>
    )
}

export default DatosProvider;