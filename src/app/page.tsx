import Link from 'next/link';
import { FaTicketAlt } from 'react-icons/fa';
const HomePage = () => {
  return (
    <main className="flex flex-col text-center items-center justify-center min-h-screen px-4">
      <FaTicketAlt className='mx-auto mb-4 text-red-500 ' size={60}></FaTicketAlt>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600">Welcome to MKet</h1>
      <p>Quick, Simple and Reliable ticketing system</p>

      <div className="flex flex-col md:flex-row gap-4 justify-center py-8 animate-slide opacity-0">
        <Link href='/tickets/new'
          className='bg-teal-600 text-white px-6 py-3 rounded shadow hovering-teal-500 transition disabled:opacity-50'>Create Ticket</Link>

        <Link href='/tickets/new'
          className='bg-gray-300 text-black px-6 py-3 rounded shadow hovering-teal-700 transition'>View Tickets</Link>
      </div>

    </main>
  )
}

export default HomePage;