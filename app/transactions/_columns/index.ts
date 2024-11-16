import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/badge";


export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({row: {original: transaction}}) => (
            < TransactionTypeBadge transaction={transaction} />
        ),
    },
    {
        accessorKey: "category",
        header:"Categoria"
    },
    {
        accessorKey:"paymentMethod",
        header:"Forma de pagamento"
    },
    {
        accessorKey:"date",
        header:"Data do pagamento"
    },
    {
        accessorKey:"amount",
        header:"Valor"
    },
    {
        accessorKey:"actions",
        header:""
    }
]