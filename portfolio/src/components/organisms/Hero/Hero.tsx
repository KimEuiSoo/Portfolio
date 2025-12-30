/* eslint-disable */
import React from 'react';
import Button from '../../atoms/button/Button';
import styles from './styles/Hero.module.scss'
import Text from '../../atoms/text/Text';
import { Profile, Project } from '../../../types/tpyes';


const Hero = ({ onClick, profile, onBlogClick, onGithubClick }: {
    onClick: () => void
    profile: Profile
    onBlogClick?: (profile: Profile) => void;
    onGithubClick?: (profile: Profile) => void;
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                {/* 왼쪽 텍스트 */}
                <div className={styles.textArea}>
                    <Text text={`안녕하세요,\n프론트엔드 개발자\n김의수입니다.`} variant='h3'/>
                    <p>방문해 주셔서 감사합니다.</p>

                    <div className={styles.links}>
                        <Button onClick={()=>onGithubClick && onGithubClick(profile)}>GitHub</Button>
                        <Button onClick={()=>onBlogClick && onBlogClick(profile)}>Blog</Button>
                    </div>
                </div>

                {/* 오른쪽 이미지 */}
                <div className={styles.imageArea}>
                    <img src={profile.memojiUrl} alt="profile" />
                </div>
            </div>

            {/* 하단 버튼 */}
            <div className={styles.bottomButton}>
                <Button
                    className={styles.portfolioBtn}
                    onClick={onClick}
                >
                    View Portfolio ↓
                </Button>
            </div>
        </section>
    );
};

export default Hero;