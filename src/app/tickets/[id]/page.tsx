import { getTicketById } from "@/actions/tickets.actions";
import { AppHeaderText } from "@/components/header";
import { getPriority } from "@/utils/ui_functions";
import { notFound } from "next/navigation";

const TicketDetailsPage = async (props: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await props.params;
    const ticket = await getTicketById(Number(id));

    if (!ticket) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <AppHeaderText text="Ticket Details" />
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-teal-600 mb-4">{ticket.subject}</h2>
                <p className="text-gray-700 mb-2">Created At: {new Date(ticket.createdAt).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-4">Priority: <span className={`font-semibold ${getPriority(ticket.priority)}`}>{ticket.priority}</span></p>
                <p className="text-gray-800">{ticket.description}</p>
            </div>
        </div>
    );

}

export default TicketDetailsPage;