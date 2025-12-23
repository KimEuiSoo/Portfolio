/* eslint-disable */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../organisms/Hero/Hero';
import { Profile as Profiles, Project } from '../../types/tpyes';

interface PageTransitionProps {
    children: React.ReactNode;
    profile: Profiles;
}

const PageTransition = ({ children, profile }: PageTransitionProps) => {
    const [open, setOpen] = useState(false);

    const onBlogClick = (profile: Profiles) => {
        if (!profile) return;
        window.open(profile.blog, '_blank', 'noopener,noreferrer');
    };

    const onGithubClick = (profile: Profiles) => {
        if (!profile) return;
        window.open(profile.github, '_blank', 'noopener,noreferrer');
    };

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
                    <Hero onClick={() => setOpen(true)} profile={profile}
                          onBlogClick={(profile) => onBlogClick(profile)}
                          onGithubClick={(profile) => onGithubClick(profile)}
                    />
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