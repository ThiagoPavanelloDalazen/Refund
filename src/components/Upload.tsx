import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentProps<"input"> & {
    filename?: string | null
}

export function Upload({ filename=null, ...rest}: Props){
    return (
        <div className="flex flex-col gap-2">
            <legend className="uppercase text-xxs text-gray-500">
                Comprovante
            </legend>

            <div className="w-full flex h-12 items-center rounded-lg border border-gray-200 bg-white text-sm text-gray-900 overflow-hidden">
                <input type="file" id="upload" className="hidden" {...rest} />

                <span className="text-sm text-gray-500 flex-1 px-4">
                    {filename ?? "Selecione o arquivo"}
                </span>

                <label htmlFor="upload" className="flex h-full px-4 items-center bg-green-800 text-white cursor-pointer hover:bg-green-700 transition ease-linear">
                    <img src={uploadSvg} alt="Icone de upload" className="w-6 h-6" />
                </label>
            </div>
        </div>
    )
}