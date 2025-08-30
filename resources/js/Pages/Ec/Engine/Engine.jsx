import logo from "../img/air250.svg";
import { useState, useEffect } from "react";

function Engine({ engine, selectedEngineId }) {
    // Используем переданный selectedEngineId или первый двигатель по умолчанию
    const [engineId, setEngineId] = useState(
        selectedEngineId || engine[0]?.id || null
    );

    // Обновляем состояние, если selectedEngineId изменился
    useEffect(() => {
        if (selectedEngineId) {
            setEngineId(selectedEngineId);
        }
    }, [selectedEngineId]);

    const selectedEngine = engine.find((item) => item.id === Number(engineId));

    if (!selectedEngine) {
        return (
            <div>
                <h2>Двигатель не найден</h2>
                <p>Выберите двигатель из списка</p>
            </div>
        );
    }

    return (
        <>
            <div>
                <div className="name">
                    <h3>{selectedEngine.mechanism}</h3>
                    <h3>{selectedEngine.name}</h3>
                    <h3>{selectedEngine.serial_number}</h3>
                </div>
                <div className="imgStyle">
                    <img src={logo} alt="Логотип двигателя"></img>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>2й подшипник</th>
                                    <th>1й подшипник</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedEngine.second_bearing}</td>
                                    <td>{selectedEngine.first_bearing}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="engineList">
                            <h2>Список двигателей</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Название</th>
                                        <th>Серийный номер</th>
                                        <th>Механизм</th>
                                        <th>Цех</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {engine.map((el) => (
                                        <tr
                                            key={el.id}
                                            onClick={() => setEngineId(el.id)}
                                            style={{
                                                cursor: "pointer",
                                                backgroundColor:
                                                    el.id === Number(engineId)
                                                        ? "#f0f0f0"
                                                        : "transparent",
                                            }}
                                        >
                                            <td>{el.name}</td>
                                            <td>№ {el.serial_number}</td>
                                            <td>{el.mechanism}</td>
                                            <td>{el.guild}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Год выпуска</th>
                                <th>Мощность, кВт</th>
                                <th>Тип электродвигателя</th>
                                <th>Монтажное крепление</th>
                                <th>Частота вращения вала (фактическая)</th>
                                <th>Напряжение, В</th>
                                <th>Ток, Iн, А</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedEngine.name}</td>
                                <td>{selectedEngine.year}</td>
                                <td>{selectedEngine.power}</td>
                                <td>{selectedEngine.type}</td>
                                <td>{selectedEngine.fastening}</td>
                                <td>{selectedEngine.frequency}</td>
                                <td>{selectedEngine.voltage}</td>
                                <td>{selectedEngine.current}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Количество фаз</th>
                                <th>КПД, %</th>
                                <th>Коэффициент мощности, Соs ф</th>
                                <th>Тип ротора</th>
                                <th>Диаметр вала, мм</th>
                                <th>Диаметр фланца, мм</th>
                                <th>Размеры (В*Д*Г), мм</th>
                                <th>Вес, кг</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedEngine.phases}-х фазный</td>
                                <td>{selectedEngine.efficiency}</td>
                                <td>{selectedEngine.cosf}</td>
                                <td>{selectedEngine.type_rotor}</td>
                                <td>{selectedEngine.diameter_shaft}</td>
                                <td>{selectedEngine.diameter_flange}</td>
                                <td>{selectedEngine.size}</td>
                                <td>{selectedEngine.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Engine;
