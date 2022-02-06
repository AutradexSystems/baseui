import * as React from 'react';

interface LogoIconProps {
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="118" height="20" viewBox="0 0 118 20" preserveAspectRatio="xMidYMid meet" className={props.className}>

<g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M0 180 c0 -6 18 -49 39 -97 l40 -87 26 59 26 59 27 -58 27 -59 42 97 c37 85 39 96 23 96 -13 0 -26 -17 -42 -51 l-23 -52 -24 52 c-14 28 -27 51 -31 51 -3 0 -16 -24 -28 -52 l-22 -53 -25 53 c-14 30 -31 52 -40 52 -8 0 -15 -5 -15 -10z"/>
<path d="M290 175 c0 -12 13 -15 60 -15 47 0 60 3 60 15 0 12 -13 15 -60 15 -47 0 -60 -3 -60 -15z"/>
<path d="M290 60 l0 -60 60 0 c53 0 60 2 60 20 0 17 -7 20 -45 20 -41 0 -45 2 -45 25 0 23 4 25 45 25 33 0 45 4 45 15 0 12 -13 15 -60 15 l-60 0 0 -60z"/>
</g>
</svg>
);
