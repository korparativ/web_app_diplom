import {  Head, Link, useForm, usePage } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
// import PrimaryButton from '@/Components/PrimaryButton';

function Equip({equips}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        protocol: '',
        user_name: '',
        date: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('ec.test'), {
            onFinish: () => reset('name', 'protocol', 'user_name', 'date'),
        });
    };

    return (
        <>
        <Head title="Добавить" />

        <form onSubmit={submit}>
            <InputLabel htmlFor="name" value="Название секции" />
            <TextInput
                id="name"
                name="name"
                value={data.name}
                className="wid mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)}
                required
            />
            <InputError message={errors.name} className="mt-2" />


    <label id=''>Номер протокола</label>
    <input type="text" value={data.protocol} onChange={e => setData('protocol', e.target.value)} />
    {errors.protocol && <div>{errors.protocol}</div>} <tr/>

    <label id=''>Ответственное лицо</label>
    <input type="text" value={data.user_name} onChange={e => setData('user_name', e.target.value)} />
    {errors.user_name && <div>{errors.user_name}</div>} <tr/>

    <label id=''>Дата проведения ТО</label>
    <input type="date" value={data.date} onChange={e => setData('date', e.target.value)} />
    {errors.date && <div>{errors.date}</div>} <tr/>

    {/* <input type="checkbox" value={data.remember} onChange={e => setData('remember', e.target.value)} /> Запомните меня */}

    {/* <button type="submit" disabled={processing}>Сохранить</button> */}
    <PrimaryButton className="ms-4" disabled={processing}>Сохранить</PrimaryButton>
  </form>
        </>
     );
}

export default Equip;
