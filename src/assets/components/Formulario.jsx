import React from "react";
import { useContext } from "react";
import DatosContext from "@context/DatosContext";
import { ConfigProvider, InputNumber, Radio } from "antd";

export default function Formulario() {
    const {datos, setAmount, setYear,setRate, setType, resetForm, showResult, clickConfirm, formCompleted} = useContext(DatosContext)
    return(
        <>
        <form onSubmit={(e) => {e.preventDefault(),showResult()}}>
            <div className="flex flex-row gap-3 items-end justify-between flex-wrap mb-10">
                <h1 className="text-2xl texto-azul font-bold capitalize">Mortgage calculator</h1>
                <button onClick={() => resetForm()} className="cursor-pointer duration-300 hover:text-[#cdd842] text-md text-gray-600 font-semibold underline underline-offset-4">Clear all</button>
            </div>
            <div className="flex flex-col gap-y-7">
                <div className="flex flex-col gap-y-2">
                    <p className="text-lg font-semibold text-gray-600 capitalize">Mortgage amount</p>
                    <div className="group">
                        <div className={`${clickConfirm && datos.amount <= 0 ? 'bg-naranjo borde-naranjo' : 'border-gray-300 group-hover:bg-[#cdd842] group-hover:border-[#cdd842] group-hover:text-[#133040]'} flex flex-row border-[2px] rounded-lg duration-300`}>
                            <span className={`${clickConfirm && datos.amount <= 0 ? 'bg-naranjo text-white' : 'bg-[#e3f4fc] text-gray-600'}  py-2 px-4 rounded-es-lg rounded-tl-lg text-2xl group-hover:bg-[#cdd842] duration-300`}>&#8364;</span>
                            <ConfigProvider
                                    theme={{
                                        token: {
                                            colorBgContainer: "transparent",
                                            colorBorder: "transparent",
                                            borderRadius: 0,
                                            lineWidth: 0,
                                            colorText: "#133040",
                                        },
                                        components: {
                                            InputNumber: {
                                                hoverBorderColor: "transparent",
                                                handleHoverColor: "transparent",
                                                activeBorderColor: "transparent",
                                                addonBg: "transparent",
                                                activeShadow: "transparent",
                                                inputFontSize: 25,
                                            }
                                        }
                                    }}
                                    >
                                    <div className="bg-[#f3f8fb] w-full rounded-lg rounded-l-none">
                                        <InputNumber 
                                        defaultValue={0}
                                        value={datos.amount}
                                        controls={false} 
                                        decimalSeparator="."
                                        max={1000000}
                                        onChange={(value) => setAmount(value)}
                                        className="font-bold"
                                        style={{ width: '100%'}} 
                                        />
                                    </div>
                            </ConfigProvider>
                        </div>
                    </div>
                    {clickConfirm && datos.amount <= 0 ? (<p className="texto-naranjo fw-semibold text-md">This field is required</p>) : ''}
                </div>

                <div className="flex flex-col gap-y-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="col-auto">
                            <p className="text-lg font-semibold text-gray-600 capitalize mb-2">Mortgage term</p>
                            <div className="group">
                                <div className={`${clickConfirm && datos.year < 0 ? 'borde-naranjo' : 'border-gray-300 group-hover:bg-[#cdd842] group-hover:border-[#cdd842] group-hover:text-[#133040]'} flex flex-row border-[2px] rounded-lg duration-300`}>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorBgContainer: "transparent",
                                                colorBorder: "transparent",
                                                borderRadius: 0,
                                                lineWidth: 0,
                                                colorText: "#133040",
                                            },
                                            components: {
                                                InputNumber: {
                                                    hoverBorderColor: "transparent",
                                                    handleHoverColor: "transparent",
                                                    activeBorderColor: "transparent",
                                                    addonBg: "transparent",
                                                    activeShadow: "transparent",
                                                    inputFontSize: 25,
                                                }
                                            }
                                        }}
                                        >
                                        <div className="bg-[#f3f8fb] w-full rounded-lg rounded-r-none">
                                            <InputNumber 
                                            defaultValue={0}
                                            value={datos.year}
                                            controls={false} 
                                            decimalSeparator="."
                                            max={1000000}
                                            onChange={(value) => setYear(value)}
                                            className="font-bold"
                                            style={{ width: '100%'}} 
                                            />
                                        </div>
                                    </ConfigProvider>
                                    <span className={`${clickConfirm && datos.year < 0 ? 'bg-naranjo text-white' : 'bg-[#e3f4fc] text-gray-600 group-hover:bg-[#cdd842]'} py-2 px-4 rounded-l-none rounded-r-md duration-300 text-2xl`}>years</span>
                                </div>
                            </div>
                            {datos.year < 0 ? (<p className="texto-naranjo fw-semibold text-md">This field is required</p>) : ''}
                        </div>
                        <div className="col-auto">
                            <p className="text-lg font-semibold text-gray-600 capitalize mb-2">Interest rate</p>
                            <div className="group">
                                <div className={`${clickConfirm && datos.rate < 0 ? 'borde-naranjo' : 'border-gray-300 group-hover:bg-[#cdd842] group-hover:border-[#cdd842] group-hover:text-[#133040]'} flex flex-row border-[2px] rounded-lg duration-300`}>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorBgContainer: "transparent",
                                                colorBorder: "transparent",
                                                borderRadius: 0,
                                                lineWidth: 0,
                                                colorText: "#133040",
                                            },
                                            components: {
                                                InputNumber: {
                                                    hoverBorderColor: "transparent",
                                                    handleHoverColor: "transparent",
                                                    activeBorderColor: "transparent",
                                                    addonBg: "transparent",
                                                    activeShadow: "transparent",
                                                    inputFontSize: 25,
                                                }
                                            }
                                        }}
                                        >
                                        <div className="bg-[#f3f8fb] w-full rounded-lg rounded-r-none">
                                            <InputNumber 
                                            defaultValue={0}
                                            value={datos.rate}
                                            controls={false} 
                                            decimalSeparator="."
                                            max={1000000}
                                            onChange={(value) => setRate(value)}
                                            className="font-bold"
                                            style={{ width: '100%'}} 
                                            />
                                        </div>
                                    </ConfigProvider>
                                    <span className={`${clickConfirm && datos.rate < 0 ? 'bg-naranjo text-white' : 'bg-[#e3f4fc] text-gray-600 group-hover:bg-[#cdd842]'} py-2 px-4 rounded-l-none rounded-r-md duration-300 text-2xl`}>%</span>
                                </div>
                            </div>
                            {clickConfirm && datos.rate < 0 ? (<p className="texto-naranjo fw-semibold text-md">This field is required</p>) : ''}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    <p className="text-lg font-semibold text-gray-600 capitalize">Mortgage type</p>
                    <div className="flex flex-col gap-y-2">
                        <div onClick={() => setType(1)} className={`${datos.type === 1 ? 'bg-[#cdd842]/20 border-[#cdd842]' : 'border-gray-300 hover:bg-[#cdd842]'} flex flex-row items-center gap-3 duration-300 border-[2px] rounded-lg py-3 px-4 cursor-pointer`}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: "#cdd842",
                                    },
                                    components: {
                                        Radio: {
                                            colorPrimary: "#cdd842",
                                            colorPrimaryHover: "#cdd842",
                                            colorBorder: "#01454b",
                                        }
                                    }
                                }}
                                >
                                <Radio 
                                value={1}
                                checked={datos.type === 1 ? true : false}
                                >
                                    <span className="text-xl font-semibold texto-azul capitalize">Repayment</span>
                                </Radio>
                            </ConfigProvider>
                        </div>
                        <div onClick={() => setType(2)} className={`${datos.type === 2 ? 'bg-[#cdd842]/20 border-[#cdd842]' : 'border-gray-300 hover:bg-[#cdd842]'} flex flex-row items-center gap-3 duration-300 border-[2px] rounded-lg py-3 px-4 cursor-pointer`}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: "#cdd842",
                                    },
                                    components: {
                                        Radio: {
                                            colorPrimary: "#cdd842",
                                            colorPrimaryHover: "#cdd842",
                                            colorBorder: "#01454b",
                                        }
                                    }
                                }}
                                >
                                <Radio 
                                value={2}
                                checked={datos.type === 2 ? true : false}
                                >
                                    <span className="text-xl font-semibold texto-azul capitalize">Interest only</span>
                                </Radio>
                            </ConfigProvider>
                        </div>
                        {clickConfirm && datos.type === 0 ? (<p className="texto-naranjo fw-semibold text-md">This field is required</p>) : ''}
                    </div>
                </div>

                <div className="flex justify-start">
                    <button type="submit" className="bg-[#cdd842] duration-300 hover:bg-[#b9c065] py-4 px-5 lg:px-10 w-full lg:w-auto font-semibold text-md lg:text-xl rounded-full flex flex-row items-center justify-center gap-2 lg:gap-4 cursor-pointer">
                        <img src="/img/icon-calculator.svg" className="h-5 w-5" alt="Calcular" />
                        Calculate Repayments
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}