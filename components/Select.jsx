import { useFormContext } from 'react-hook-form';

export default function Select({
  label,
  placeholder = '',
  id,
  type = 'text',
  validation = { required: true },
  option,
  setJenis,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-normal text-gray-700'>
        {label}
      </label>
      <div className='relative mt-1 '>
        <select
          {...register(id, validation)}
          name={id}
          className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        >
          {option.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {/* errors will return when field validation fails  */}
      {errors[id] && (
        <span className='text-sm text-red-500'>Kolom harus diisi</span>
      )}
    </div>
  );
}
