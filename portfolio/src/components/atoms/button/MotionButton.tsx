import { motion } from 'framer-motion';
import styles from './styles/MotionButton.module.scss';

interface Props {
    onClick: () => void;
    content: string;
}

const MotionButton = ({ onClick, content }: Props) => {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <motion.button
            className={styles.viewButton}
            onClick={onClick}
            animate={{ y: [0, -6, 0], opacity: 1}}
            transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {content}
        </motion.button>
    );
};

export default MotionButton;