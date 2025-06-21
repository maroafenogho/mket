import { TicketStatus } from "@/generated/prisma"

export type TicketRequestDto = {
    subject: string,
    description: string,
    priority: string
    status?: TicketStatus
}