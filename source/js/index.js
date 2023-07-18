import Aos                                                      from 'aos'
import Swiper, {Navigation, Pagination, EffectFade, Controller} from 'swiper'
import controlsSupportInsideSwiper                              from './helpers/controls-support-inside-swiper.js'
import HeaderModule                                             from './modules/HeaderModule.js'
import NavigationModule                                         from './modules/NavigationModule.js'

//#region AOS

Aos.init({
    duration: 1000,
    offset: 0,
    easing: 'ease-out'
})

//#endregion

//#region Swipers

function renderSliderBullet(index, className) {
    return `
        <button class="slider-pagination__button slider-pagination-button ${className}">
            <span>0${index + 1}</span>
        </button>
    `
}

const swipers = [

    new Swiper('.intro-project-images-slider .swiper', {
        modules: [Navigation, Pagination, EffectFade, Controller],
        slidesPerView: 1,
        effect: 'fade',
        speed: 500,
        mousewheel: false,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            prevEl: '.intro-slider-prev-navigation-button',
            nextEl: '.intro-slider-next-navigation-button'
        },
        pagination: {
            el: '.intro-slider-pagination',
            clickable: true,
            bulletElement: 'button',
            renderBullet: renderSliderBullet
        }
    }),

    new Swiper('.intro-project-titles-slider .swiper', {
        modules: [EffectFade, Controller],
        slidesPerView: 1,
        mousewheel: false,
        effect: 'fade',
        speed: 500,
        fadeEffect: {
            crossFade: true
        }
    }),

    new Swiper('.reviews-slider .swiper', {
        modules: [Pagination, EffectFade],
        slidesPerView: 1,
        effect: 'fade',
        speed: 500,
        autoHeight: true,
        grabCursor: true,
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.reviews-slider-pagination',
            clickable: true,
            bulletElement: 'button',
            renderBullet: renderSliderBullet
        }
    })

]

swipers[0].controller.control = swipers[1];
swipers[1].controller.control = swipers[0];

controlsSupportInsideSwiper(swipers, ['a', 'button'])

//#endregion

//#region HeaderModule

const headerModule = new HeaderModule({
    headerElement: {
        sourceClassName: 'header-section',
        activeClassName: 'header-section--active',
    },
    immediatelyInitializeModule: true,
    triggerPoint: 0
})

//#endregion

//#region NavigationModule

const navigationModule = new NavigationModule({
    navigationElement: {
        sourceClassName: 'navigation',
        activeClassName: 'navigation--active',
    },
    burgerElement: {
        sourceClassName: 'burger-button',
        activeClassName: 'burger-button--active',
    },
    linkElement: {
        sourceClassName: 'navigation-link',
        activeClassName: 'navigation-link--active',
    },
    topIndentElementOnScroll: {
        sourceClassName: 'header-section'
    },
    immediatelyInitializeModule: true
})

//#endregion
