import type { RefundItemProps } from "../components/RefundItem"
import { CATEGORIES } from "../utils/categories"
import { formatCurrency } from "../utils/formatCurrency"

const REFUNDS_DATABASE = [
    {
        id: "123",
        name: "Thiago",
        category: "transport" as const,
        amount: 34.5,
    },
]

export function getRefunds(): RefundItemProps[] {
    return REFUNDS_DATABASE.map((refund) => ({
        id: refund.id,
        name: refund.name,
        category: CATEGORIES[refund.category].name,
        amount: formatCurrency(refund.amount),
        categoryImg: CATEGORIES[refund.category].icon,
    }))
}

export function getRefundById(id: string) {
    return REFUNDS_DATABASE.find((refund) => refund.id === id)
}
