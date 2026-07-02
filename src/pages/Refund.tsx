import { Input } from "../components/input"
import { Select } from "../components/Select"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { useEffect, useState } from "react"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"
import { useNavigate, useParams } from "react-router-dom"
import fileSvg from "../assets/file.svg"
import { getRefundById } from "../data/refunds"
import { formatCurrency } from "../utils/formatCurrency"
import { Loading } from "../components/Loading"

export function Refund() {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [filename, setFilename] = useState<File | null>(null)
    const navigate = useNavigate()
    const params = useParams<{id: string}>()

    useEffect(() => {
        if (!params.id) return

        setIsFetching(true)

        const refund = getRefundById(params.id)

        if (refund) {
            setName(refund.name)
            setCategory(refund.category)
            setAmount(formatCurrency(refund.amount))
        }

        setIsFetching(false)
    }, [params.id])

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        if(params.id){
            return navigate(-1)
        }

        setIsLoading(true)
        navigate("/confirm", {state: { fromSubmit: true}})
    }

    if (isFetching) {
        return <Loading />
    }

    return (
        <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
            <header>
                <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso.</p>
            </header>


            <Input required legend="Nome da solicitação" value={name} onChange={(e) => setName(e.target.value)} disabled={!!params.id}/>

            <div className="flex flex-col gap-4 md:flex-row md:items-end">
                <div className="flex-1">
                    <Select required legend="Categoria" value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }} disabled={!!params.id}>
                        {
                            CATEGORIES_KEYS.map((category) => (
                                <option key={category} value={category}>
                                    {CATEGORIES[category].name}
                                </option>
                            ))

                        }
                    </Select>
                </div>

                <div className="w-full md:w-1/3">
                    <Input legend="Valor" required value={amount} onChange={(e) => setAmount(e.target.value)} disabled={!!params.id}/>
                </div>
            </div>

            {
                params.id ? (
                    <a href={`/refund/${params.id}`} target="_blank" className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear">
                        <img src={fileSvg} alt="File" className="w-5 h-5" />
                        Ver detalhes
                    </a>
                ) : (
                    <Upload 
                        filename={filename && filename.name}
                        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
                    />
                )
            }



            <Button type="submit" isLoading={isLoading}>
                {params.id ? "Voltar" : "Enviar"}
            </Button>
        </form>
    )

}