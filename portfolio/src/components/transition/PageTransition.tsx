/* eslint-disable */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../organisms/Hero/Hero';

interface PageTransitionProps{
    children: React.ReactNode;
}

const PageTransition = ({children}: PageTransitionProps) => {
    const [open, setOpen] = useState(false);

    return (
        <AnimatePresence mode="wait">
            {!open ? (
                <motion.div
                    key="hero"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 0 }}
                    exit={{
                        rotateY: -90,
                        opacity: 0,
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'left center' }}
                >
                    <Hero onClick={() => setOpen(true)} />
                </motion.div>
            ) : (
                <motion.div
                    key="portfolio"
                    initial={{
                        rotateY: 90,
                        opacity: 0,
                    }}
                    animate={{
                        rotateY: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'right center' }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageTransition;