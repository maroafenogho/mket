'use client'

import { createTicket } from "@/actions/tickets.actions"
import AppButton from "@/components/button"
import AppRouter from "@/utils/app_router"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useTransition } from "react"
import { toast } from "sonner"

const NewTicketForm = () => {
    const [isPending, startTransition] = useTransition()
    const [state, formAction] = useActionState(createTicket, { success: false, message: '' })
    const router = useRouter()

    useEffect(() => {
        if (state.success) {
            toast.success(state.message || 'Ticket created successfully')
            router.push(AppRouter.tickets)
        }
    }, [state.success, router])

    return (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
            <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">
                Create New Ticket
            </h1>

            <form
                action={(formData) => {
                    startTransition(() => {
                        formAction(formData)
                    })
                }}
                className="space-y-4 text-gray-700"
            >
                <input
                    type="text"
                    className="w-full border border-gray-400 p-3 rounded 
              focus:outline-none focus:ring-2 focus:ring-teal-400"
                    name="subject"
                    placeholder="Subject"
                    required
                />
                <textarea
                    name="description"
                    className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-blue-400"
                    placeholder="Describe the issue"
                    rows={4}
                    required
                />
                <select
                    name="priority"
                    className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-blue-400 text-gray-700"
                    defaultValue="Low"
                >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>

                <AppButton isLoading={isPending} buttonText="Create Ticket" />
            </form>
        </div>
    )
}



export default NewTicketForm
