import {db} from "../_lib/prisma"
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";

const TransactionsPage = async () => {
    const transactions = await db.transaction.findMany({});
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