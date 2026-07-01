type Props = React.ComponentProps<"select"> & {
    legend?: string
}

export function Select({ legend, children, ...rest }: Props) {
    return (
        <div className="flex flex-1 flex-col gap-2 text-gray-900">

            {
                legend &&
                <label className="uppercase text-xxs text-gray-200">
                    {legend}
                </label>
            }

            <div className="relative">
                <select
                    className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-900 outline-none transition focus:border-2 focus:border-green-100 appearance-none"
                    {...rest}
                >
                    <option value="" disabled hidden>
                        Selecione a categoria
                    </option>
                    {children}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ▼
                </span>
            </div>

        </div>
    )
}