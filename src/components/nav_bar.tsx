import { AppHeaderText } from "@/components/header";
import AppRouter from "@/utils/app_router";

type Props = {

}
export const NavBar = ({ }: Props) => {
    return (
        <div className="flex justify-between items-center p-6 shadow-md bg-white">
            <AppHeaderText text="MKet" />
            <div className="space-x-4">
                <a href={AppRouter.home} className="text-gray-700 hover:text-teal-600 transition">Home</a>
                <a href={AppRouter.tickets} className="text-gray-700 hover:text-teal-600 transition">Tickets</a>
                <a href={AppRouter.newTicket} className="text-gray-700 hover:text-teal-600 transition">New Ticket</a>
                <a href={AppRouter.tickets} className="text-gray-700 hover:text-teal-600 transition">About</a>
            </div>

        </div>
    );
}