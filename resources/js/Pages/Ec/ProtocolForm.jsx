import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

function ProtocolForm({id, name}) {
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        equipment: name,
        signature: user.signature,
        number: '',
        date: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('ec.protocol_add'), {
            onFinish: () => reset('number', 'date'),
        });
    };
    return (
        <GuestLayout>
        <Head title="Протокол" />
        <h2>{name}</h2>

        <form onSubmit={submit}>

            <InputLabel htmlFor="number" value='Номер протокола' />
            <TextInput
                id="protocol"
                type="number"
                name="protocol"
                placeholder="№ протокола"
                value={data.number}
                className="mt-1 block w-full"
                autoComplete="digit"
                isFocused={true}
                onChange={(e) => setData('number', e.target.value)}
                required
            />
            <InputError message={errors.number} className="mt-2" />


            <InputLabel htmlFor="date" value="Дата оформления протокола" />
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
            <InputError message={errors.date} className="mt-2" />





    <td/>
    <PrimaryButton className="ms-4" disabled={processing}>Добавить протокол</PrimaryButton>
  </form>
        </GuestLayout>
     );
}

export default ProtocolForm;
