class AppRouter {
    static home = '/';
    static newTicket = 'tickets/new';
    static tickets = 'tickets';
    static ticketDetails = (id: number) => `tickets/${id}`;
}

export default AppRouter;