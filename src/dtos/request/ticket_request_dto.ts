import { TicketStatus } from "@/generated/prisma"

export interface TicketRequestDto {
    subject: string,
    description: string,
    priority: string
    status?: TicketStatus
}