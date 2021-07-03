import classes from './Logo.module.scss';
import React from 'react';

const Logo = (props) => {
    return (
        <div className={`${classes.Logo} ${props.scrolling ? classes.SmallLogo : ''}`}>
            <a href="/">
                <svg width="132" height="143" viewBox="0 0 132 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 41.7378H30.4994V65.8004C30.4994 68.8376 28.0372 71.2998 25 71.2998V41.7378Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M44.9081 41.7378H50.4075V65.8004C50.4075 68.8376 47.9453 71.2998 44.9081 71.2998V41.7378Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M25 41.7C25 38.6624 27.4624 36.2 30.5 36.2L50.2973 36.2L50.2973 41.7L25 41.7Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <rect x="30.5081" y="55.8378" width="5.5" height="14.2985" transform="rotate(-90 30.5081 55.8378)" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <rect x="81.6" y="76.6" width="5.5" height="9.318" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <rect x="101.4" y="91.4" width="5.5" height="9.318" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M87.1 91.5C84.0624 91.5 81.6 89.0376 81.6 86L101.397 86C104.435 86 106.897 88.4624 106.897 91.5L87.1 91.5Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M81.6 106.3C81.6 103.262 84.0624 100.8 87.1 100.8L106.897 100.8C106.897 103.838 104.435 106.3 101.397 106.3L81.6 106.3Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M81.6 76.7C81.6 73.6624 84.0624 71.2 87.1 71.2L106.897 71.2C106.897 74.2376 104.435 76.7 101.397 76.7L81.6 76.7Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M1 18.5676C1 8.86527 8.86527 1 18.5676 1V123.973C18.5676 133.675 10.7023 141.541 1 141.541V18.5676Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M57.2162 1H74.7838V141.541C65.0815 141.541 57.2162 133.675 57.2162 123.973V1Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <path d="M113.432 18.5676C113.432 8.86527 121.298 1 131 1V123.973C131 133.675 123.135 141.541 113.432 141.541V18.5676Z" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <rect x="57.2162" y="1" width="17.5676" height="38.6486" transform="rotate(90 57.2162 1)" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                    <rect x="113.432" y="123.973" width="17.5676" height="38.6486" transform="rotate(90 113.432 123.973)" fill="#F2AA4C" stroke="#101820" strokeWidth="2"/>
                </svg>
            </a>
        </div>
    )
}

export default Logo
