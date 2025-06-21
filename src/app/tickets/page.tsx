
import TicketsList from "./tickets_list";

const TicketsPage = async () => {


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto  rounded-lg p-8 gb-teal-300">
                <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">Support Tickets</h1>
                <TicketsList />

            </div>
        </div>
    );
}

export default TicketsPage