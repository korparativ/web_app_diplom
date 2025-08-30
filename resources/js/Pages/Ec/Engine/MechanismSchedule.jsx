import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AvtorArr from "@/Pages/Ec/AvtorArr";
import NavLink from "@/Components/NavLink";
import Engine from "@/Pages/Ec/Engine/Engine";
import EngineAdd from "./EngineAdd";
import Bearing from "./Bearinge";
import { useState } from "react";
import Mechanism from "./Mechanism";

function MechanismSchedule({ bearing, engine, mechanism }) {
    const user = usePage().props.auth.user;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("mechanism");
    const [selectedEngineId, setSelectedEngineId] = useState(null); // Добавляем состояние для выбранного двигателя

    // Функция для смены табов
    const changeTab = (tabName, engineId = null) => {
        setActiveTab(tabName);
        setIsDropdownOpen(false);
        if (engineId) {
            setSelectedEngineId(engineId); // Сохраняем ID выбранного двигателя
        }
    };

    if (user.role_id > 0) {
        return (
            <>
                <div>
                    <div className="relative mb-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded flex items-center"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {activeTab === "mechanism" && "Механизмы"}
                            {activeTab === "bearing" && "Подшипник"}
                            {activeTab === "engine" && "Двигатель"}
                            {activeTab === "engineAdd" && "Добавить двигатель"}
                            <svg
                                className={`ml-2 h-4 w-4 transition-transform ${
                                    isDropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded z-10">
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                                        activeTab === "mechanism"
                                            ? "bg-blue-50 text-blue-600"
                                            : ""
                                    }`}
                                    onClick={() => changeTab("mechanism")}
                                >
                                    Механизмы
                                </button>
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                                        activeTab === "bearing"
                                            ? "bg-blue-50 text-blue-600"
                                            : ""
                                    }`}
                                    onClick={() => changeTab("bearing")}
                                >
                                    Подшипник
                                </button>
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                                        activeTab === "engine"
                                            ? "bg-blue-50 text-blue-600"
                                            : ""
                                    }`}
                                    onClick={() => changeTab("engine")}
                                >
                                    Двигатель
                                </button>
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                                        activeTab === "engineAdd"
                                            ? "bg-blue-50 text-blue-600"
                                            : ""
                                    }`}
                                    onClick={() => changeTab("engineAdd")}
                                >
                                    Добавить двигатель
                                </button>
                                <button
                                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100`}
                                    onClick={() => {
                                        setActiveTab("engineAdd");
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Личный кабинет
                                    </NavLink>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="p-4">
                        {activeTab === "mechanism" && (
                            <Mechanism
                                mechanism={mechanism}
                                engine={engine}
                                onTabChange={changeTab} // Передаем функцию
                            />
                        )}
                        {activeTab === "bearing" && (
                            <Bearing bearing={bearing} />
                        )}
                        {activeTab === "engine" && (
                            <Engine
                                engine={engine}
                                selectedEngineId={selectedEngineId} // Передаем выбранный ID
                            />
                        )}
                        {activeTab === "engineAdd" && (
                            <EngineAdd bearing={bearing} />
                        )}
                    </div>
                </div>
            </>
        );
    } else return <AvtorArr />;
}

export default MechanismSchedule;
