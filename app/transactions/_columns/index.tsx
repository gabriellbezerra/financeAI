"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/typeBadge";
import { TRANSACTION_CATEGORY_LABELS, TRANSACTION_PAYMENT_METHOD_LABELS } from "@/app/_constants/transactions";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import EditTransactionButton from "../_components/edit-transaction-button";

export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({row: {original: transaction}}) => (
            <TransactionTypeBadge transaction={transaction}/>
        ),
    },
    {
        accessorKey: "category",
        header:"Categoria",
        cell: ({row: {original: transaction}}) => 
            TRANSACTION_CATEGORY_LABELS[transaction.category],
    },
    {
        accessorKey:"paymentMethod",
        header:"Forma de pagamento",
        cell: ({row: {original: transaction}}) => 
            TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
    },
    {
        accessorKey:"date",
        header:"Data do pagamento",
        cell: ({row: {original: transaction}}) => (
            new Date(transaction.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            })
        ),
    },
    {
        accessorKey:"amount",
        header:"Valor",
        cell: ({row: {original: transaction}}) => 
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(Number(transaction.amount)),
    },
    {
        accessorKey:"actions",
        header:"",
        cell: ({ row: { original: transaction } }) => {
            return (
                <div className="space-x-1">
                    <EditTransactionButton transaction={transaction}/>
                    <Button variant="ghost" className="text-muted-foreground">
                        <TrashIcon/>
                    </Button>
                </div>
            )
        }
    }
]