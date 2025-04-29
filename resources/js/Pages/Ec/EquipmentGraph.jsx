import NavLink from '@/Components/NavLink';
import { Head, Link } from '@inertiajs/react';

function EquipmentGraph({users, user}) {
    console.log(users);
    console.log(user.id);
    // console.log(users.length);
    // for (let index = 0; index < users.length; index++) {
    //     const element = users[index];
    //     console.log(element);
    // }
    return (
        <>
        <h2>График проверки оборудования</h2>
        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route('dashboard')}
                                            active={route().current('dashboard')}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </div>
        {
            users.map((el) => (
                <>
                <h3>{el.id}</h3>
                <p>{el.name}</p>
                <p>{el.email}</p>
                <p>{el.role_id}</p>
                </>
            ))

        }
        </>
     );
}

export default EquipmentGraph;
