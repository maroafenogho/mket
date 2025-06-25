
import { AppHeaderText } from "@/components/header";
import TicketsList from "./tickets_list";

const TicketsPage = async () => {


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto  rounded-lg p-8 gb-teal-300">
                <AppHeaderText text="Support Tickets" />
                <TicketsList />

            </div>
        </div>
    );
}

export default TicketsPage