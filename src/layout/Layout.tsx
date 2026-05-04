import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function Layout() {
    return (
        <>
            <Header />

            <main className="flex flex-col bg-gradient-to-b from-red-100 to-white min-h-screen">
                <Outlet />
            </main>
        </>
    )
}