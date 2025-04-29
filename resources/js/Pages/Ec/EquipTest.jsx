import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

function EquipTest({equip, move}) {
    console.log(equip);
     const { data, setData, post, processing, errors, reset } = useForm({
            id: '',
            date: '',
            check: '',
        });

        console.log(data);

        const submit = (e) => {
            e.preventDefault();

            post(route('ec.update'), {
                onFinish: () => reset('id', 'date'),
            });
        };



    return (
        <>
        <h2>Ну привет</h2>
        {move ?(
                <>
                <h3>{equip.id}</h3>
                <p>{equip.name}</p>
                <p>{equip.protocol}</p>
                <p>{equip.user_name}</p>
                <p>{equip.date}</p>
                </>) : (
                    equip.map((el) => (
                        <form onSubmit={submit}>
                        <h3>{el.id}</h3>
                        <p>{el.name}</p>
                        <p>{el.protocol}</p>
                        <p>{el.user_name}</p>
                        <p>{el.date}</p>
                        <Checkbox
                                name="check"
                                onChange={(e) =>
                                 setData('check', el.id)}/>
                        <div style={(data.check == el.id) ? {display: ''} : {display: 'none'}}>
                        <TextInput
                            id="date"
                            name="date"
                            type="date"
                            value={data.date}
                            className="wid mt-1 block w-full"
                            autoComplete="date"
                            isFocused={true}
                            onChange={(e) => {setData('date', e.target.value);
                                setData('id', el.id);
                            }}
                            required/>
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Провести ТО
                                    </PrimaryButton>
                        </div>


                        {/* <Link href="/equip_update" method="post"  as="button" data={data}>Изменить</Link> */}
                        </form>))
                )
            // ))

        }
        </>
     );
}

export default EquipTest;
