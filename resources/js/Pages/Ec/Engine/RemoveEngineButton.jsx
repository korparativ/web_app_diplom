import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useState } from "react";

function RemoveEngineButton({ mechanismId, engineId, onSuccess }) {
    const user = usePage().props.auth.user;
    const [showConfirmation, setShowConfirmation] = useState(false);

    const form = useForm({
        mechanism_id: mechanismId,
        engine_id: engineId,
        signature: user.signature,
    });

    const handleRemoveClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmRemove = () => {
        form.post(route("ec.engine_assign"), {
            onSuccess: () => {
                setShowConfirmation(false);
                if (onSuccess) onSuccess();
            },
        });
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleRemoveClick}
                className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded text-sm"
                disabled={form.processing}
            >
                {form.processing ? "Снятие..." : "Снять двигатель"}
            </button>

            {/* Модальное окно подтверждения */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Подтверждение снятия
                        </h3>

                        <p className="text-gray-600 mb-6">
                            Вы уверены, что хотите снять двигатель с механизма?
                        </p>

                        <InputError
                            message={form.errors.engine_id}
                            className="mb-4"
                        />
                        <InputError
                            message={form.errors.mechanism_id}
                            className="mb-4"
                        />

                        <div className="flex space-x-3 justify-end">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                disabled={form.processing}
                            >
                                Отмена
                            </button>
                            <PrimaryButton
                                onClick={handleConfirmRemove}
                                disabled={form.processing}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                {form.processing ? "Снятие..." : "Снять"}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RemoveEngineButton;
