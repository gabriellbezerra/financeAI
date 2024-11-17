import {db} from "../_lib/prisma"
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
    const { userId } = await auth();
    if (!userId) {
        redirect("/login");
    }
    const transactions = await db.transaction.findMany({
        where: {
            userId,
        }
    });
    return (
        <>
        <Navbar/>
        <div className="p-6 space-y-6">
            {/* Título e Botão */}
            <div className="flex w-full items-center justify-between pl-6 pr-6">
                <h1 className="font-bold text-2xl ">Transações</h1>
                <AddTransactionButton userCanAddTransaction={"true"}/>
            </div>
            {/* Tabela */}
            <DataTable columns={transactionColumns} data={transactions}/>
        </div>
        </>
     );
}
 
export default TransactionsPage;