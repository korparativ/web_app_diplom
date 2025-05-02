import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

function MenuTO({id, name}) {
    return (
        <div className="py-12">
            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            <NavLink href={route('ec.show')}>
                К графику
            </NavLink>
            </div>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <h2>{name}</h2>
                    <div className="p-6 text-gray-900">
                        <Head title="Меню ТО" />
                        <a class='btn-2' href={'/order_to_add/' + id + '/' + name}>Наряд ТО</a>
                        <a class='btn-2' href={'/order_i_add/' + id + '/' + name}>Наряд испытаний</a>
                        <a class='btn-2' href={'/protocol_add/' + id + '/' + name}>Протокол</a>
                    </div>
                </div>
            </div>
        </div>

     );
}

export default MenuTO;
