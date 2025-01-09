"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full backdrop-blur-lg z-50">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <motion.div
                    className="Welcome-text text-3xl font-extrabold tracking-wide"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="/" className="hover:text-[#00f0ff] transition duration-300">
                        🚀 David Dev
                    </Link>
                </motion.div>

                {/* Menú en Desktop */}
                <div className="hidden md:flex space-x-8">
                    {["Proyectos", "Experiencia", "Habilidades", "Contacto"].map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white font-semibold hover:text-[#00f0ff] transition duration-300"
                        >
                            <Link href={`/${item.toLowerCase()}`}>
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Botón Menú Mobile */}
                <div className="md:hidden flex items-center">
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                    </button>
                </div>
            </nav>

            {/* Desplegable Mobile */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-transparent text-center py-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {["Proyectos", "Experiencia", "Habilidades", "Contacto"].map((item) => (
                        <div key={item} className="py-2">
                            <Link href={`/${item.toLowerCase()}`} className="text-white text-xl font-semibold hover:text-[#00f0ff] transition duration-300">
                                {item}
                            </Link>
                        </div>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Header;