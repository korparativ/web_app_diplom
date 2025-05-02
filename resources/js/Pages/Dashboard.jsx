import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Личный кабинет
                </h2>
            }
        >
            <Head title="Dashboard" />

            {(user.role_id == 0) ?

            (<div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {user.name}, обратитесь к администратору за выдачей прав или оставьте заявку на admin@dakenergy.ru. В заявке нужно указать ФИО, цех и должность.
                        </div>
                    </div>
                </div>
            </div>) :
            (<div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Привет, {user.name}!
                        </div>
                    </div>
                </div>
            </div>)
            }
        </AuthenticatedLayout>
    );
}
