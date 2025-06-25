import { getTickets } from "@/actions/tickets.actions";
import AppRouter from "@/utils/app_router";
import Link from "next/link";
import { getPriority } from "@/utils/ui_functions";

const TicketsList = async () => {
    const tickets = await getTickets();
    return (
        <> {
            tickets.map(ticket => (
                <div key={ticket.id} className="flex justify-between items-center text-gray-700 mb-2  p-5 shadow-sm p-2 rounded bg-gray-50 transition">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-teal-600">
                            {ticket.subject}
                        </h2>
                        <h3 className="text-sm text-gray-500">
                            {new Date(ticket.createdAt).toLocaleDateString()}
                        </h3>
                    </div>
                    <div className="flex flex-col items-end">

                        <div>
                            Priority: <span className={`font-semibold ${getPriority(ticket.priority)}`}>{ticket.priority}</span>
                        </div>
                        <Link href={AppRouter.ticketDetails(ticket.id)} className="inline-block mt-2 bg-teal-600 text-white text-sm px-3 py-1 rounded hover:bg-teal-700 transition text-center">View Ticket</Link>
                    </div>
                </div>
            ))
        }
        </>
    );
}

export default TicketsList;