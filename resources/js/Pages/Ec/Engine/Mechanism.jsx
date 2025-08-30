import { Head, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import RemoveEngineButton from "./RemoveEngineButton";
import { useState } from "react";

function Mechanism({ mechanism, engine, onTabChange }) {
    const user = usePage().props.auth.user;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        guild: "",
        signature: user.signature,
    });

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedMechanism, setSelectedMechanism] = useState(null);
    const [actionType, setActionType] = useState("");

    // Форма для установки двигателя
    const engineForm = useForm({
        engine_id: "",
        mechanism_id: "",
        signature: user.signature,
    });

    // Функция для перехода на вкладку двигателей
    const handleEngineClick = (engineId) => {
        if (onTabChange && engineId && engineId !== 0) {
            onTabChange("engine", engineId); // Передаем ID двигателя
        }
    };

    const handleMechanismSubmit = (e) => {
        e.preventDefault();
        post(route("ec.mechanism_add"), {
            onFinish: () => {
                reset("name", "guild");
                setIsFormOpen(false);
            },
        });
    };

    const handleEngineInstall = (mechanismId) => {
        setSelectedMechanism(mechanismId);
        setActionType("install");
        engineForm.setData("mechanism_id", mechanismId);
        engineForm.setData("engine_id", "");
    };

    const handleEngineSubmit = (e) => {
        e.preventDefault();
        engineForm.post(route("ec.engine_assign"), {
            onSuccess: () => {
                setSelectedMechanism(null);
                setActionType("");
                engineForm.reset();
            },
        });
    };

    const cancelEngineAction = () => {
        setSelectedMechanism(null);
        setActionType("");
        engineForm.reset();
    };

    // Функция для поиска двигателя с защитой от ошибок
    const findEngine = (engineId) => {
        return engine.find((item) => item.id == engineId) || null;
    };

    if (user.role_id == 1 || user.role_id == 2) {
        return (
            <>
                <Head title="Управление механизмами" />

                <div className="bg-white shadow-sm rounded-lg p-6">
                    {/* Кнопка добавления механизма */}
                    <div className="mb-6">
                        <PrimaryButton
                            onClick={() => setIsFormOpen(!isFormOpen)}
                            className="mb-4"
                        >
                            {isFormOpen ? "Отмена" : "Добавить механизм"}
                        </PrimaryButton>

                        {/* Форма добавления механизма */}
                        {isFormOpen && (
                            <form
                                onSubmit={handleMechanismSubmit}
                                className="bg-gray-50 p-4 rounded-lg mb-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Название механизма"
                                        />
                                        <TextInput
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            placeholder="Например: КНТ-1А"
                                            required
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="guild"
                                            value="Цех"
                                        />
                                        <select
                                            id="guild"
                                            value={data.guild}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                                        <InputError
                                            message={errors.guild}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                >
                                    {processing
                                        ? "Добавление..."
                                        : "Добавить механизм"}
                                </PrimaryButton>
                            </form>
                        )}
                    </div>

                    {/* Таблица механизмов */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Название
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Цех
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Двигатель
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Серийный номер
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mechanism.map((el) => (
                                    <tr
                                        key={el.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {el.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {el.guild}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {el.engine_id == 0 ? (
                                                "Двигатель отсутствует"
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleEngineClick(
                                                            el.engine_id
                                                        )
                                                    }
                                                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                                                    title="Перейти к информации о двигателе"
                                                >
                                                    {findEngine(el.engine_id)
                                                        ?.name ||
                                                        "Двигатель не найден"}
                                                </button>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {el.engine_id == 0
                                                ? ""
                                                : findEngine(el.engine_id)
                                                      ?.serial_number || ""}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            {el.engine_id == 0 ? (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleEngineInstall(
                                                            el.id
                                                        )
                                                    }
                                                    className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-3 py-1 rounded text-sm"
                                                >
                                                    Установить двигатель
                                                </button>
                                            ) : (
                                                <RemoveEngineButton
                                                    mechanismId={el.id}
                                                    engineId={el.engine_id}
                                                    onSuccess={() => {
                                                        // Можно добавить дополнительную логику после успешного снятия
                                                    }}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Форма для выбора двигателя */}
                    {actionType === "install" && selectedMechanism && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    Установить двигатель
                                </h3>

                                <form onSubmit={handleEngineSubmit}>
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="engine_id"
                                            value="Выберите двигатель"
                                        />
                                        <select
                                            id="engine_id"
                                            value={engineForm.data.engine_id}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            onChange={(e) =>
                                                engineForm.setData(
                                                    "engine_id",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Выберите двигатель...
                                            </option>
                                            {engine
                                                .filter(
                                                    (eng) =>
                                                        eng.mechanism ===
                                                        "Резерв"
                                                )
                                                .map((eng) => (
                                                    <option
                                                        key={eng.id}
                                                        value={eng.id}
                                                    >
                                                        {eng.name} (
                                                        {eng.serial_number})
                                                    </option>
                                                ))}
                                        </select>
                                        <InputError
                                            message={
                                                engineForm.errors.engine_id
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex space-x-3 justify-end">
                                        <button
                                            type="button"
                                            onClick={cancelEngineAction}
                                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                        >
                                            Отмена
                                        </button>
                                        <PrimaryButton
                                            type="submit"
                                            disabled={engineForm.processing}
                                        >
                                            {engineForm.processing
                                                ? "Сохранение..."
                                                : "Установить"}
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    } else
        return (
            <>
                <Head title="Управление механизмами" />

                <div className="bg-white shadow-sm rounded-lg p-6">
                    {/* Таблица механизмов */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Название
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Цех
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Двигатель
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Серийный номер
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mechanism.map((el) => (
                                    <tr
                                        key={el.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {el.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {el.guild}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {el.engine_id == 0 ? (
                                                "Двигатель отсутствует"
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleEngineClick(
                                                            el.engine_id
                                                        )
                                                    }
                                                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                                                    title="Перейти к информации о двигателе"
                                                >
                                                    {findEngine(el.engine_id)
                                                        ?.name ||
                                                        "Двигатель не найден"}
                                                </button>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {el.engine_id == 0
                                                ? ""
                                                : findEngine(el.engine_id)
                                                      ?.serial_number || ""}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
}

export default Mechanism;
