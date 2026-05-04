import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/film', label: 'Film' },
    { to: '/narrative', label: 'Narrative' },
    { to: '/documentary', label: 'Documentary' },
    { to: '/promos', label: 'Promos' },
    { to: '/contact', label: 'Contact' },
];

const OPEN_DELAYS = [60, 120, 180, 240, 300, 360];
// Reverse stagger on close — last item exits first
const CLOSE_DELAYS = [150, 120, 90, 60, 30, 0];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsClosing(true);
    const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

    const handleOverlayAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
        // Only react to the overlay's own animation end, not bubbled child events
        if (isClosing && e.target === e.currentTarget) {
            setIsMenuOpen(false);
            setIsClosing(false);
        }
    };

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
                setIsClosing(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="flex h-16 justify-between items-center p-4 w-full border-b shadow-sm">
            <Link to="/" className="text-xl font-medium">Wes Flemmons</Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center justify-between gap-6 text-lg">
                {NAV_LINKS.map((link) => (
                    <Link key={link.to} to={link.to} className="header-btn">
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile navigation */}
            <div className="md:hidden">
                {/* Hamburger menu */}
                <button onClick={toggleMenu} className={`flex flex-col cursor-pointer transition-all duration-300 ease-in-out ${isMenuOpen && !isClosing ? 'space-y-0' : 'space-y-1'}`}>
                    <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out origin-center ${isMenuOpen && !isClosing ? 'translate-y-0 rotate-45' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out origin-center ${isMenuOpen && !isClosing ? '-translate-y-0.5 -rotate-45' : ''}`}></div>
                </button>

                {isMenuOpen && (
                    <nav
                        className={`fixed top-16 inset-0 bg-white z-50 flex flex-col items-start justify-center gap-3 p-8 ${isClosing ? 'mobile-nav-overlay-exit' : 'mobile-nav-overlay'}`}
                        onAnimationEnd={handleOverlayAnimationEnd}
                    >
                        {NAV_LINKS.map((link, i) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`header-btn ${isClosing ? 'mobile-nav-link-exit' : 'mobile-nav-link'}`}
                                style={{ animationDelay: `${isClosing ? CLOSE_DELAYS[i] : OPEN_DELAYS[i]}ms` }}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
