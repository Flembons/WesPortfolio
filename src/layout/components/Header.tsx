import { Link } from 'react-router-dom'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="flex h-16 justify-between items-center p-4 w-full border-b shadow-sm">
            <Link to="/" className="text-xl font-medium">Wes Flemmons</Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center justify-between gap-6 text-lg">
                <Link to="/film" className="header-btn">Film</Link>
                <Link to="/narrative" className="header-btn">Narrative</Link>
                <Link to="/documentary" className="header-btn">Documentary</Link>
                <Link to="/promos" className="header-btn">Promos</Link>
                <Link to="/contact" className="header-btn">Contact</Link>
            </nav>

            {/* Mobile navigation */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-lg cursor-pointer">
                    {isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars2Icon className="w-8 h-8" />}
                </button>

                {isMenuOpen && (
                    <nav className="fixed top-16 inset-0 bg-white z-50 flex flex-col items-start justify-center gap-2 p-4">
                        <Link to="/film" className="header-btn">Film</Link>
                        <Link to="/narrative" className="header-btn">Narrative</Link>
                        <Link to="/documentary" className="header-btn">Documentary</Link>
                        <Link to="/promos" className="header-btn">Promos</Link>
                        <Link to="/contact" className="header-btn">Contact</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}