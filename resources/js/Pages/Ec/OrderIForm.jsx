import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

function OrderIForm({id, name}) {
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        equipment: name,
        signature: user.signature,
        number: '',
        date_start: '',
        date_stop: '',
        worker: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('ec.order_i_add'), {
            onFinish: () => reset('number', 'date_start', 'date_stop', 'worker'),
        });
    };
    return (
        <GuestLayout>
        <Head title="Наряд проведения испытаний" />
        <h2>{name}</h2>

        <form onSubmit={submit}>

            <InputLabel htmlFor="number" value='Номер наряда' />
            <TextInput
                id="order"
                name="order"
                type="number"
                placeholder="№ наряда испытания"
                value={data.number}
                className="mt-1 block w-full"
                autoComplete="digit"
                isFocused={true}
                onChange={(e) => setData('number', e.target.value)}
                required
            />
            <InputError message={errors.number} className="mt-2" />


            <InputLabel htmlFor="date" value="Дата открытия наряда" />
            <TextInput
                id="date"
                name="date"
                type="date"
                value={data.date_start}
                className="mt-1 block w-full"
                autoComplete="date"
                isFocused={true}
                onChange={(e) => setData('date_start', e.target.value)}
                required
            />
            <InputError message={errors.date_start} className="mt-2" />

            <InputLabel htmlFor="date" value="Дата закрытия наряда" />
            <TextInput
                id="date"
                name="date"
                type="date"
                value={data.date_stop}
                className="mt-1 block w-full"
                autoComplete="date"
                isFocused={true}
                onChange={(e) => setData('date_stop', e.target.value)}
                required
            />
            <InputError message={errors.date_stop} className="mt-2" />

            <InputLabel htmlFor="text" value="ФИО производителя работ" />
                        <TextInput
                            id="text"
                            name="text"
                            placeholder="ФИО"
                            value={data.worker}
                            className="mt-1 block w-full"
                            autoComplete="text"
                            isFocused={true}
                            onChange={(e) => setData('worker', e.target.value)}
                            required
                        />
                        <InputError message={errors.worker} className="mt-2" />





    <td/>
    <PrimaryButton className="ms-4" disabled={processing}>Добавить наряд испытания</PrimaryButton>
  </form>
        </GuestLayout>
     );
}

export default OrderIForm;
