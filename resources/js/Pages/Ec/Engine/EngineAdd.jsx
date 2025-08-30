import { Head, useForm, usePage } from "@inertiajs/react";
import logo from "../img/air250.svg";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AvtorArr from "../AvtorArr";

function EngineAdd({ bearing }) {
    const user = usePage().props.auth.user;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        serial_number: "",
        power: "",
        type: "",
        fastening: "",
        frequency: "",
        voltage: "",
        current: "",
        year: "",
        phases: "",
        efficiency: "",
        cosf: "",
        type_rotor: "",
        diameter_shaft: "",
        diameter_flange: "",
        size: "",
        weight: "",
        second_bearing: "",
        first_bearing: "",
        guild: "",
        signature: user.signature,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ec.engine_add"), {
            onFinish: () =>
                reset(
                    "name",
                    "serial_number",
                    "power",
                    "type",
                    "fastening",
                    "frequency",
                    "voltage",
                    "current",
                    "year",
                    "phases",
                    "efficiency",
                    "cosf",
                    "type_rotor",
                    "diameter_shaft",
                    "diameter_flange",
                    "size",
                    "weight",
                    "second_bearing",
                    "first_bearing",
                    "guild"
                ),
        });
    };

    if (user.role_id == 1 || user.role_id == 2) {
        return (
            <>
                <div className="imgStyle">
                    <img src={logo}></img>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Серийный номер</th>
                                    <th>Мощность, кВт</th>
                                    <th>Тип электродвигателя</th>
                                    <th>Монтажное крепление</th>
                                    <th>Частота вращения вала (фактическая)</th>
                                    <th>Напряжение, В</th>
                                    <th>Ток, Iн, А</th>
                                    <th>Год выпуска</th>
                                    <th>Количество фаз</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="АИР250S2 У1"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="serial_number"
                                            type="number"
                                            name="serial_number"
                                            placeholder="123456"
                                            value={data.serial_number}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "serial_number",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="power"
                                            type="number"
                                            name="power"
                                            placeholder="75"
                                            value={data.power}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("power", e.target.value)
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <select
                                            id="type"
                                            type="text"
                                            name="type"
                                            value={data.type}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("type", e.target.value)
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            <option value="Асинхронный">
                                                Асинхронный
                                            </option>
                                            <option value="Синхронный">
                                                Синхронный
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            id="fastening"
                                            type="text"
                                            name="fastening"
                                            value={data.fastening}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "fastening",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            <option value="Лапы">Лапы</option>
                                            <option value="Фланец">
                                                Фланец
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <TextInput
                                            id="frequency"
                                            type="number"
                                            name="frequency"
                                            placeholder="2975"
                                            value={data.frequency}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "frequency",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <select
                                            id="voltage"
                                            type="number"
                                            name="voltage"
                                            value={data.voltage}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "voltage",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            <option value="380">380</option>
                                            <option value="220">220</option>
                                        </select>
                                    </td>
                                    <td>
                                        <TextInput
                                            id="current"
                                            type="number"
                                            name="current"
                                            placeholder="135"
                                            value={data.current}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "current",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="year"
                                            type="number"
                                            name="year"
                                            placeholder="2025"
                                            value={data.year}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("year", e.target.value)
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <select
                                            id="phases"
                                            type="text"
                                            name="phases"
                                            value={data.phases}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "phases",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            <option value="3">
                                                3-х фазный
                                            </option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>КПД, %</th>
                                    <th>Коэффициент мощности, Соs ф</th>
                                    <th>Тип ротора</th>
                                    <th>Диаметр вала, мм</th>
                                    <th>Диаметр фланца, мм</th>
                                    <th>Размеры (В*Д*Г), мм</th>
                                    <th>Вес, кг</th>
                                    <th>Второй подшипник</th>
                                    <th>Первый подшипник</th>
                                    <th>Цех</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <TextInput
                                            id="efficiency"
                                            type="number"
                                            name="efficiency"
                                            placeholder="93,6"
                                            value={data.efficiency}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "efficiency",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="cosf"
                                            type="number"
                                            name="cosf"
                                            placeholder="0,9"
                                            value={data.cosf}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("cosf", e.target.value)
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <select
                                            id="type_rotor"
                                            type="text"
                                            name="type_rotor"
                                            value={data.type_rotor}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "type_rotor",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            <option value="КЗ">КЗ</option>
                                            <option value="Фазный">
                                                Фазный
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <TextInput
                                            id="diameter_shaft"
                                            type="number"
                                            name="diameter_shaft"
                                            placeholder="65"
                                            value={data.diameter_shaft}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "diameter_shaft",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="diameter_flange"
                                            type="number"
                                            name="diameter_flange"
                                            placeholder="550"
                                            value={data.diameter_flange}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "diameter_flange",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="size"
                                            type="text"
                                            name="size"
                                            placeholder="615*845*490"
                                            value={data.size}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("size", e.target.value)
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="weight"
                                            type="number"
                                            name="weight"
                                            placeholder="446"
                                            value={data.weight}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "weight",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <select
                                            id="second_bearing"
                                            type="text"
                                            name="second_bearing"
                                            value={data.second_bearing}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "second_bearing",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            {bearing.map((el) => (
                                                <option
                                                    key={el.id}
                                                    value={el.name_gost}
                                                >
                                                    {el.name_gost}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            id="first_bearing"
                                            type="text"
                                            name="first_bearing"
                                            value={data.first_bearing}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "first_bearing",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите...
                                            </option>
                                            {bearing.map((el) => (
                                                <option
                                                    key={el.id}
                                                    value={el.name_gost}
                                                >
                                                    {el.name_gost}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            id="guild"
                                            type="text"
                                            name="guild"
                                            value={data.guild}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("guild", e.target.value)
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите цех...
                                            </option>
                                            <option value="ТЦ">ТЦ</option>
                                            <option value="КЦ">КЦ</option>
                                            <option value="ХЦ">ХЦ</option>
                                            <option value="ЭЦ">ЭЦ</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Добавить двигатель
                    </PrimaryButton>
                </form>
            </>
        );
    } else return <AvtorArr />;
}

export default EngineAdd;
