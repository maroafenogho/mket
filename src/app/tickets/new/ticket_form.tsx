'use client';

import { createTicket } from "@/actions/tickets.actions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";


const NewTicketForm = () => {
    const [state, formAction] = useActionState(createTicket, { success: false, message: '' });
    const router = useRouter();
    useEffect(() => {
        if (state.success) {
            toast.success(state.message || 'Ticket created successfully');
            router.push('/tickets');
        }
    }, [state.success, router]);
    return (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
            <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">
                Create New Ticket
            </h1>

            <form action={formAction} className="space-y-4 text-gray-700">
                <input type="text" className="w-full border border-gray-400 p-3 rounded 
                focus:outline-none focus:ring-2 focus:ring-teal-400" name='subject'
                    placeholder="Subject"
                    required
                />
                <textarea name="description" className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-blue-400"
                    placeholder="Describe the issue"
                    rows={4}
                    required
                    id="" />
                <select name="priority"
                    className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-blue-400 text-gray-700"
                    defaultValue='Low'
                    id="">
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
                <button className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-500 transition disabled:opacity-50" type="submit">Submit</button>
            </form>
        </div>

    );
}

export default NewTicketForm;