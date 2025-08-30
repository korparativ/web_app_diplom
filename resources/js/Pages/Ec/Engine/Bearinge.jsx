import NavLink from "@/Components/NavLink";
import logo from "../img/Bearing.jpg";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import AvtorArr from "../AvtorArr";

function Bearing({ bearing }) {
    const user = usePage().props.auth.user;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        name_gost: "",
        name_iso: "",
        inner_diameter: "",
        outside_diameter: "",
        width: "",
        signature: user.signature,
    });

    const bear = usePage().props.bearing;
    const [bearingId, setBearingId] = useState(bear[0]?.id || null);
    const selectedBearing = bear.find((item) => item.id === Number(bearingId));

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ec.bearing_add"), {
            onFinish: () =>
                reset(
                    "name",
                    "name_gost",
                    "name_iso",
                    "inner_diameter",
                    "outside_diameter",
                    "width"
                ),
        });
    };

    if (user.role_id == 1 || user.role_id == 2) {
        return (
            <>
                <div className="imgStyleB">
                    <img src={logo}></img>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Маркировка ГОСТ</th>
                                    <th>Аналоги ISO</th>
                                    <th>Внутренний диаметр (d), мм</th>
                                    <th>Наружный диаметр (D), мм</th>
                                    <th>Ширина (B), мм</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <select
                                            id="type"
                                            type="text"
                                            name="type"
                                            // value={selectedBearing}
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setBearingId(e.target.value)
                                            }
                                            required
                                        >
                                            {bearing.map((el) => (
                                                <option
                                                    key={el.id}
                                                    value={el.id}
                                                >
                                                    {el.name_gost}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>{selectedBearing.name_iso}</td>
                                    <td>{selectedBearing.inner_diameter}</td>
                                    <td>{selectedBearing.outside_diameter}</td>
                                    <td>{selectedBearing.width}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="bearingList">
                            <table class="table">
                                <thead className="fix">
                                    <tr>
                                        <th>ГОСТ</th>
                                        <th>ISO</th>
                                        <th>Расшифровка</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}</td>
                                        <td>Открытый</td>
                                    </tr>
                                    <tr>
                                        <td>50{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-N</td>
                                        <td>
                                            Открытый с канавкой на наружном
                                            кольце
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>60{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-Z</td>
                                        <td>
                                            Закрыт одной металлической защитной
                                            шайбой
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>80{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-ZZ</td>
                                        <td>
                                            Закрыт двумя металлическими
                                            защитными шайбами
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>160{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-RS</td>
                                        <td>
                                            Закрыт одним защитным уплотнением из
                                            резины или пластмассы
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>180{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-2RS</td>
                                        <td>
                                            Закрыт двумя защитными уплотнениями
                                            из резины или пластмассы
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>150{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-ZN</td>
                                        <td>
                                            Закрыт одной металлической шайбой и
                                            с канавкой на наружном кольце
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>450{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-2ZN</td>
                                        <td>
                                            Закрыт двумя металлическими шайбами
                                            и с канавкой на наружном кольце
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>750{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-2RSN</td>
                                        <td>
                                            Закрыт двумя металлическими шайбами
                                            и с канавкой на наружном кольце
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Название типоразмера</th>
                                    <th>Маркировка ГОСТ</th>
                                    <th>Аналоги ISO</th>
                                    <th>Внутренний диаметр (d), мм</th>
                                    <th>Наружный диаметр (D), мм</th>
                                    <th>Ширина (B), мм</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <TextInput
                                            id="name"
                                            type="number"
                                            name="name"
                                            placeholder="211"
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
                                            id="name_gost"
                                            type="number"
                                            name="name_gost"
                                            placeholder="211"
                                            value={data.name_gost}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "name_gost",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="name_iso"
                                            type="text"
                                            name="name_iso"
                                            placeholder="6211"
                                            value={data.name_iso}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "name_iso",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="inner_diameter"
                                            type="number"
                                            name="inner_diameter"
                                            placeholder="55"
                                            value={data.inner_diameter}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "inner_diameter",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="outside_diameter"
                                            type="number"
                                            name="outside_diameter"
                                            placeholder="100"
                                            value={data.outside_diameter}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "outside_diameter",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </td>
                                    <td>
                                        <TextInput
                                            id="width"
                                            type="number"
                                            name="width"
                                            placeholder="21"
                                            value={data.width}
                                            className="mt-1 block w-full"
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("width", e.target.value)
                                            }
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Добавить подшипник
                    </PrimaryButton>
                </form>
            </>
        );
    }
    if (user.role_id == 0) {
        return <AvtorArr />;
    }
    if (user.role_id > 1) {
        return (
            <>
                <div className="imgStyleB">
                    <img src={logo}></img>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Маркировка ГОСТ</th>
                                    <th>Аналоги ISO</th>
                                    <th>Внутренний диаметр (d), мм</th>
                                    <th>Наружный диаметр (D), мм</th>
                                    <th>Ширина (B), мм</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <select
                                            id="type"
                                            type="text"
                                            name="type"
                                            className={
                                                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full"
                                            }
                                            autoComplete="digit"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setBearingId(e.target.value)
                                            }
                                            required
                                        >
                                            {bearing.map((el) => (
                                                <option
                                                    key={el.id}
                                                    value={el.id}
                                                >
                                                    {el.name_gost}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>{selectedBearing.name_iso}</td>
                                    <td>{selectedBearing.inner_diameter}</td>
                                    <td>{selectedBearing.outside_diameter}</td>
                                    <td>{selectedBearing.width}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="bearingList">
                            <table class="table">
                                <thead className="fix">
                                    <tr>
                                        <th>ГОСТ</th>
                                        <th>ISO</th>
                                        <th>Расшифровка</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}</td>
                                        <td>Открытый</td>
                                    </tr>
                                    <tr>
                                        <td>50{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-N</td>
                                        <td>
                                            Открытый с канавкой на наружном
                                            кольце
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>60{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-Z</td>
                                        <td>
                                            Закрыт одной металлической защитной
                                            шайбой
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>80{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-ZZ</td>
                                        <td>
                                            Закрыт двумя металлическими
                                            защитными шайбами
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>160{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-RS</td>
                                        <td>
                                            Закрыт одним защитным уплотнением из
                                            резины или пластмассы
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>180{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-2RS</td>
                                        <td>
                                            Закрыт двумя защитными уплотнениями
                                            из резины или пластмассы
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>150{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-ZN</td>
                                        <td>
                                            Закрыт одной металлической шайбой и
                                            с канавкой на наружном кольце
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>450{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-2ZN</td>
                                        <td>
                                            Закрыт двумя металлическими шайбами
                                            и с канавкой на наружном кольце
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>750{selectedBearing.name}</td>
                                        <td>6{selectedBearing.name}-2RSN</td>
                                        <td>
                                            Закрыт двумя металлическими шайбами
                                            и с канавкой на наружном кольце
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Bearing;
