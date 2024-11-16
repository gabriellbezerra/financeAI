import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import {db} from "../_lib/prisma"
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
    const transactions = await db.transaction.findMany({});
    return (
        <div className="p-6 space-y-6">
            {/* Título e Botão */}
            <div className="flex w-full items-center justify-between pl-6 pr-6">
                <h1 className="font-bold text-2xl ">Transações</h1>
                <Button className="rounded-full">Adicionar transação <ArrowDownUpIcon/></Button>
            </div>
            {/* Tabela */}
            <DataTable columns={transactionColumns} data={transactions}/>
        </div>
     );
}
 
export default TransactionsPage;