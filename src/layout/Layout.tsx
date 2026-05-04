import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function Layout() {
    return (
        <>
            <Header />

            <main className="flex flex-col bg-gradient-to-b from-amber-100 to-red-200 min-h-screen p-4">
                <Outlet />
            </main>
        </>
    )
}