import React from "react";
import { useContext } from "react";
import DatosContext from "@context/DatosContext";

export default function Resultado() {
    const {datos, formCompleted, resultVisible} = useContext(DatosContext)
    const formatter = new Intl.NumberFormat('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const opcion = datos.type; //1 = repayment, 2 = interest only
    const r = datos.rate / 100 / 12;
    const n = datos.year * 12;

    let cuotaMensual = 0;
    let total = 0;

    if (opcion === 1) {
        cuotaMensual = datos.amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        total = cuotaMensual * n;
    } else if (opcion === 2) {
        cuotaMensual = (datos.amount * datos.rate) / 100 / 12;
        total = cuotaMensual * n;
    }

    cuotaMensual = formatter.format(cuotaMensual.toFixed(2));
    total = formatter.format(total.toFixed(2));

    return(
        <>
        <div className="flex flex-col justify-between h-full gap-y-15 p-5 lg:p-10">
            {formCompleted && resultVisible ? (
                <>
                <div className="flex flex-col justify-between">
                    <p className="text-white text-2xl font-semibold mb-4">Your results</p>
                    <p className="text-white/60">Your results are shown below on the information you provided. To adjust the results, edit the form and click "calculate repayments" again</p>
                    <div className="flex flex-col gap-y-4 mt-8">
                        <div className="bg-[#cdd842] h-5 rounded-r-lg rounded-l-lg"></div>
                        <div className="p-5 bg-[#0e2431] -mt-8 rounded-lg">
                            <p className="text-white/60 mb-3">Your monthly repayments</p>
                            <p className="text-5xl font-semibold texto-verde pb-8 border-[1px] border-b-gray-500 border-r-0 border-l-0 border-t-0">&#8364;{cuotaMensual}</p>
                            <p className="pt-8 text-white/60">Total you'll repay over the term</p>
                            <p className="text-2xl text-white font-semibold">&#8364;{total}</p>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center gap-y-5">
                    <img src="/img/illustration-empty.svg" className="h-42 lg:h-72 w-auto" alt="Empty, complete the form" />
                    <p className="text-white text-2xl font-semibold">Results shown here</p>
                    <p className="text-white/60 text-center">Complete the form and click "calculate repayments" to see what your monthly repayments would be</p>
                </div>
            )} 
        </div>
        </>
    )
}