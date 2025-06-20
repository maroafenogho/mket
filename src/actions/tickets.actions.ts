'use server';
import { prisma } from '@/db/prisma';
import { TicketRequestDto } from '@/dtos/request/ticket_request_dto';
import { logEvent } from '@/utils/sentry';
import { revalidatePath } from 'next/cache';

export async function createTicket(previousState: { success: boolean; message: string }, formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
        const subject = formData.get('subject') as string;
        const description = formData.get('description') as string;
        const priority = formData.get('priority') as string;

        const ticketData: TicketRequestDto = { subject, description, priority };



        console.log(`Creating ticket with subject: ${ticketData.subject}, description: ${ticketData.description}, priority: ${ticketData.priority}`);

        const ticket = await prisma.ticket.create({ data: ticketData })
        revalidatePath('/tickets');
        return { success: true, message: 'Ticket created' };

    } catch (error) {
        logEvent({
            message: 'An error occured while creating a ticket', category: 'ticket', data: {
                formData: Object.fromEntries(formData.entries()),

            },
            level: 'error', error: error,
        })
        return { success: false, message: 'Failed to create ticket' };
    }
}

export async function getTickets() {
    try {
        const tickets = await prisma.ticket.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return tickets;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        return [];
    }
}