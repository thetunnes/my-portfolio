'use client'
import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

type InputFileProps<IFormValues extends FieldValues> = {
  name: Path<IFormValues>
  id: string
  label?: string
  register?: UseFormRegister<IFormValues>
  file: File | null
} & InputHTMLAttributes<HTMLInputElement>

export function InputFile<IFormValues extends FieldValues>({
  name,
  id,
  label,
  register,
  file,
  ...props
}: InputFileProps<IFormValues>) {
  function handleOpenFile() {
    if (file) {
      const urlFile = URL.createObjectURL(file)

      typeof window !== 'undefined' && window.open(urlFile, '_blank')
    }
  }

  return (
    <div className="flex w-full flex-1 flex-col gap-1 ">
      {label && label}
      <input
        {...props}
        type="file"
        id={id}
        className="invisible h-0 w-0"
        {...(register && register(name))}
      />
      <div className="flex flex-1 justify-between gap-1 rounded border border-green-400 p-1">
        <span
          className={`${
            file?.name ? 'cursor-pointer text-blue-500 hover:underline' : ''
          } truncate`}
          onClick={handleOpenFile}
        >
          {file?.name ?? 'Adicione aqui o ícone da tecnologia estudada'}
        </span>
        <label
          htmlFor={id}
          className="cursor-pointer rounded bg-zinc-600 p-1 text-xs text-slate-200 hover:bg-zinc-500 hover:transition-colors hover:duration-500"
        >
          Selecionar
        </label>
      </div>
    </div>
  )
}
