import { InputHTMLAttributes } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type InputTextProps<FormFields extends FieldValues> = {
  id: string
  name: Path<FormFields>
  label?: string
  register?: UseFormRegister<FormFields>
} & InputHTMLAttributes<HTMLInputElement>

export function InputText<FormFields extends FieldValues>({
  id,
  name,
  label,
  register,
  ...props
}: InputTextProps<FormFields>) {
  return (
    <div className="flex w-full flex-1 flex-col justify-start gap-1">
      <label htmlFor={id} className="cursor-pointer text-sm">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        {...props}
        {...(register && register(name))}
        className="flex-1 rounded border bg-zinc-300 px-2 py-1 focus:border-zinc-800 focus:bg-zinc-200 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700 focus:dark:border-gray-200 focus:dark:bg-zinc-600"
        autoComplete="off"
      />
    </div>
  )
}
