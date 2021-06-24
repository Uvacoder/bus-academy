import ReactDatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import { HiOutlineCalendar } from 'react-icons/hi';

export default function DatePicker({
  validation = { required: true },
  label,
  id,
  placeholder,
  defaultTo,
}) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const defaultDate = new Date();
  if (defaultTo) defaultDate.setFullYear(defaultTo);

  return (
    <div className='relative'>
      <label htmlFor={id} className='block text-sm font-normal text-gray-700'>
        {label}
      </label>

      <Controller
        control={control}
        rules={validation}
        defaultValue={null}
        name={id}
        render={({ field: { onChange, value } }) => (
          <>
            <div className='relative w-full mt-1'>
              <ReactDatePicker
                name={id}
                className={`block w-full border-gray-300 text-black rounded-md shadow-sm   ${
                  errors[id]
                    ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
                    : 'focus:ring-indigo-500 focus:border-indigo-500'
                }`}
                onChange={onChange}
                selected={value}
                placeholderText={placeholder}
                showMonthDropdown
                showYearDropdown
                dropdownMode='select'
                openToDate={defaultTo ? defaultDate : null}
                dateFormat='dd/MM/yyyy'
              />
              <HiOutlineCalendar className='absolute text-lg text-gray-500 transform -translate-y-1/2 pointer-events-none right-4 top-1/2' />
            </div>
            {errors[id] && (
              <span className='text-sm text-red-500'>{errors[id].message}</span>
            )}
          </>
        )}
      />
    </div>
  );
}
