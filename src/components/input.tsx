type Props = React.ComponentProps<"input"> & {
    legend?: string
}

export function Input({ legend, type="text", ...rest }: Props) {
    return (
        <fieldset className="flex flex-1 flex-col gap-2 text-gray-900">

            {
                legend &&
                <legend className="uppercase text-xxs text-gray-200">
                    {legend}
                </legend>
            }

            <input
                type={type}
                className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-2 focus:border-green-100 placeholder:text-gray-400"
                {...rest}
            />

        </fieldset>
    )
}