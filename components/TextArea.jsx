import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

export default function TextArea({
  label,
  placeholder = '',
  id,
  type = 'text',
  validation = { required: true },
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
        <textarea
          {...register(id, validation)}
          rows={3}
          type={type}
          name={id}
          id={id}
          className={`block w-full border-gray-300 rounded-md shadow-sm   ${
            errors[id]
              ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
              : 'focus:ring-indigo-500 focus:border-indigo-500'
          }`}
          placeholder={placeholder}
          aria-describedby={id}
        />
        {errors[id] && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <HiExclamationCircle className='text-xl text-red-500' />
          </div>
        )}
      </div>
      {/* errors will return when field validation fails  */}
      {errors[id] && (
        <span className='text-sm text-red-500'>{errors[id].message}</span>
      )}
    </div>
  );
}
