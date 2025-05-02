import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

function EquipAdd() {
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        user_signature: user.signature,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('ec.add'), {
            onFinish: () => reset('name'),
        });
    };

    return (
        <GuestLayout>
        <Head title="Добавить" />

        <form onSubmit={submit}>
            <InputLabel htmlFor="text" value="Оперативное наименование оборудования" />
            <TextInput
                id="text"
                name="text"
                value={data.name}
                className="mt-1 block w-full"
                autoComplete="text"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)}
                required
            />
            <InputError message={errors.name} className="mt-2" />

            {/* <InputLabel htmlFor="text" value="Номер протокола" />
            <TextInput
                id="protocol"
                name="protocol"
                placeholder="№ протокола"
                value={data.protocol}
                className="mt-1 block w-full"
                autoComplete="digit"
                isFocused={true}
                onChange={(e) => setData('protocol', e.target.value)}
                required
            />
            <InputError message={errors.protocol} className="mt-2" />


            <InputLabel htmlFor="date" value="Дата проведения ТО" />
            <TextInput
                id="date"
                name="date"
                type="date"
                value={data.date}
                className="mt-1 block w-full"
                autoComplete="date"
                isFocused={true}
                onChange={(e) => setData('date', e.target.value)}
                required
            />
            <InputError message={errors.date} className="mt-2" /> */}

            {/* <InputLabel htmlFor="text" value="Ответственное лицо" />
            <TextInput
                id="user_name"
                name="user_name"
                value={data.user_name}
                className="mt-1 block w-full"
                autoComplete="protocol"
                isFocused={true}
                onChange={(e) => setData('user_name', e.target.value)}
                required
            />
            <InputError message={errors.user_name} className="mt-2" /> */}


{/*
    <label id=''>Дата проведения ТО</label>
    <input type="date" value={data.date} onChange={e => setData('date', e.target.value)} />
    {errors.date && <div>{errors.date}</div>} <tr/> */}

    {/* <input type="checkbox" value={data.remember} onChange={e => setData('remember', e.target.value)} /> Запомните меня */}

    {/* <button type="submit" disabled={processing}>Сохранить</button> */}
    <td/>
    <PrimaryButton className="ms-4" disabled={processing}>Добавить</PrimaryButton>
  </form>
        </GuestLayout>
     );
}

export default EquipAdd;
