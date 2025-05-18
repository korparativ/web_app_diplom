import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

function OrderSchedule({order}) {
    console.log(order);
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
                        Список нарядов
                    </h2>
                    <table class="table">
            <thead>
                <tr>
                    <th>Номер наряда</th>
                    <th>Дата начала работ</th>
                    <th>Дата окончания работ</th>
                    <th>Производитель работ</th>
                    <th>Подпись</th>
                </tr>
            </thead>
            <tbody>
                {order.map((el) => (
                <tr>
                    <td >{el.number}</td>
                    <td >{el.date_start}</td>
                    <td >{el.date_stop}</td>
                    <td >{el.worker}</td>
                    <td >{el.signature}</td>
                </tr>
                ))}

            </tbody>
        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
     );
}

export default OrderSchedule;
