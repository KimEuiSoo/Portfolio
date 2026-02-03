/* eslint-disable */
import React from 'react';
import { Swiper as CustomSwiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { SwiperOptions } from 'swiper/types/swiper-options';
import clsN from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Career, Project } from '../../../types/tpyes';
import styles from './styles/Swiper.module.scss';
import ImageButton from '../button/ImageButton';

/**
 * Custom Swiper 컴포넌트 Props
 * @property {string} [className] 전체 swiper className
 * @property {string} [slideClsN] swiper slide className
 * @property {string} [btnClsN] ImageButton의 Button className
 * @property {string} [imgClsN] ImageButton의 Image className
 * @property {(item: T)} [getImageUrl] //  item에서 이미지 url을 추출 (없으면 '' 반환)
 * @property {string} [alt] 이미지 alt 텍스트
 * @property {() => void} [onSlideChange] slide 변경 시 호출되는 콜백
 * @property {number} [spaceBetween] 각 slide 간격
 * @property {number} [slidesPerView] 한 화면에 표시할 slide 수
 * @property {boolean | PaginationOptions} [isPagination] pagination 사용 여부 또는 옵션
 * @property {boolean | NavigationOptions} [isNavigation] navigation 사용 여부 또는 옵션
 * @property {boolean} [isAutoPlay] auto play 사용 여부
 * @property {boolean} [isFreeMode] freeMode 사용 여부
 * @property {boolean} [isLoop] loop 사용 여부
 * @property {number} [delay] auto play 사용 시 delay(ms)
 * @property {object | boolean} [breakpoints] 반응형 breakpoints 설정
 * @property {boolean} [centeredSlides] 중앙 정렬 여부
 * @property {((item: T)) => void} [onClick] slide 클릭 시 콜백
 * @property {T[]} items 렌더링할 데이터 목록
 */
interface CustomSwiperProps<T> {
    className?: string;
    slideClsN?: string;
    btnClsN?: string;
    imgClsN?: string;
    alt?: string;
    getImageUrl?: (item: T) => string;
    onSlideChange?: () => void;
    spaceBetween?: number;
    slidesPerView?: number;
    isPagination?: PaginationOptions | boolean;
    isNavigation?: NavigationOptions | boolean;
    isAutoPlay?: boolean;
    isFreeMode?: boolean;
    isLoop?: boolean;
    delay?: number;
    breakpoints?: { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions } | boolean;
    centeredSlides?: boolean;
    onClick?: (item: T) => void;
    items: T[];
}

const Swiper = <T,>({ ...props }: CustomSwiperProps<T>) => {
    const autoPlay = { delay: props.delay, disableOnInteraction: false };

    return (
        <div>
            <CustomSwiper className={clsN(props.className, styles['swiper-wrapper'])}
                          slidesPerView={props.slidesPerView}
                          pagination={props.isPagination}
                          navigation={props.isNavigation}
                          spaceBetween={props.spaceBetween}
                          autoplay={props.isAutoPlay ? autoPlay : false}
                          freeMode={props.isFreeMode}
                          loop={props.isLoop}
                          loopedSlides={1}
                          modules={[Pagination, Navigation, Autoplay, FreeMode]}
                          onSlideChange={props.onSlideChange}
                          breakpoints={props.breakpoints}
                          centeredSlides={props.centeredSlides}
            >
                {props.items.map((item, index) => (
                    <SwiperSlide
                        className={clsN(props.slideClsN, styles['swiper-wrapper__swiper-slide'])}
                        key={index}
                        onClick={()=>props.onClick && props.onClick(item)}>
                        <ImageButton
                            className={clsN(props.btnClsN, styles.btn)}
                            imgClsN={clsN(props.imgClsN, styles.img)}
                            alt={props.alt}
                            imageUrl={props.getImageUrl ? props.getImageUrl(item) : ''}
                        />
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </div>
    );
};

Swiper.defaultProps = {
    onSlideChange: undefined,
    alt: '이미지가 없습니다.',
    className: styles[''],
    slideClsN: styles[''],
    btnClsN: styles[''],
    imgClsN: styles[''],
    spaceBetween: 0,
    slidesPerView: 1,
    isNavigation: false,
    isPagination: false,
    isAutoPlay: false,
    isFreeMode: false,
    isLoop: true,
    delay: 5000,
    breakpoints: false,
    centeredSlides: false,
    onClick: undefined,
};

export default Swiper