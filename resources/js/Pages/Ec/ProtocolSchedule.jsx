import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

function ProtocolSchedule({protocol}) {
    return (
        <>
        <div className="py-12">
                <div className="space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink href={route('ec.show')}>
                                    К графику
                    </NavLink>
                </div>
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                <h2>
                        Список протоколов
                    </h2>
                    <table class="table">
            <thead>
                <tr>
                    <th>Номер протокола</th>
                    <th>Дата</th>
                    <th>Подпись</th>
                </tr>
            </thead>
            <tbody>
                {protocol.map((el) => (
                <tr>
                    <td >{el.number}</td>
                    <td >{el.date}</td>
                    <td >{el.signature}</td>
                </tr>
                ))}

            </tbody>
        </table>
                                </div>
                            </div>
                        </div>
                    </div></>
     );
}

export default ProtocolSchedule;
