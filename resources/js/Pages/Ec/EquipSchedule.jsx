import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

function EquipSchedule({equip}) {
    const user = usePage().props.auth.user;
    function setColor(date) {
        const dateNow = Date();
        const time = Date.parse(dateNow) - Date.parse(date);
        let days = Math.trunc(time/(1000 * 60 * 60 * 24));

        if (days < 365) {
            return "aquamarine";
        } if (days > 365 && days < 730) {
            return "orange";
        } else return "red";
    }
    return (
        <>
        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            <NavLink href={route('dashboard')}
                    active={route().current('dashboard')}>
                    Назад
            </NavLink>
        </div>
        <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <h2>
                График обслуживания оборудования
            </h2>
            <table class="table">
	<thead>
		<tr>
			<th>Оперативное наименование</th>
			<th>Дата последнего ТО</th>
			<th>Подпись</th>
			<th>Подробная иформация</th>
			<th>ТО</th>
		</tr>
	</thead>
	<tbody>
        {equip.map((el) => (
        <tr>
			<td style={{ backgroundColor: setColor(el.date) }}>{el.name}</td>
			<td style={{ backgroundColor: setColor(el.date) }}>{el.date}</td>
			<td style={{ backgroundColor: setColor(el.date) }}>{el.signature}</td>
			<td><button>Подробная информация</button></td>
			<td><a class='btn' href={'/equip_menu/' + el.id + '/' + el.name}>Провести ТО</a>
            </td>
		</tr>
        ))}

	</tbody>
    {(user.role_id == 1) || (user.role_id ==  2) ? (
        <a class='btn' href={'/equip/'}>Добавить оборудование</a>
    ) : (<> </>)}
</table>
                        </div>
                    </div>
                </div>
            </div>
            </>
     );
}

export default EquipSchedule;
