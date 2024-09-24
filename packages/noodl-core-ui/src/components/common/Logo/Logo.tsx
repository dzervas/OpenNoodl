import { UnsafeStyleProps } from '@noodl-core-ui/types/global';
import classNames from 'classnames';
import React from 'react';
import css from './Logo.module.scss';

export enum LogoVariant {
  Default = 'default',
  Inverted = 'inverted',
  Grayscale = 'grayscale'
}

export enum LogoSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface LogoProps extends UnsafeStyleProps {
  variant?: LogoVariant;
  size?: LogoSize;

  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Logo({
  variant = LogoVariant.Default,
  size = LogoSize.Medium,
  onClick,
  UNSAFE_className,
  UNSAFE_style
}: LogoProps) {
  function VariantIcon(props: {}) {
    switch (variant) {
      default:
      case LogoVariant.Default:
        return <DefaultIcon />;
      case LogoVariant.Inverted:
        return <InvertedIcon />;
      case LogoVariant.Grayscale:
        return <GrayscaleIcon />;
    }
  }

  return (
    <div
      className={classNames([
        css['Root'],
        css[`is-variant-${variant}`],
        css[`is-size-${size}`],
        UNSAFE_className
      ])}
      onClick={onClick}
      style={UNSAFE_style}
    >
      <VariantIcon />
    </div>
  );
}

const DefaultIcon = React.memo(function () {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
  <metadata>
    Created by potrace 1.10, written by Peter Selinger 2001-2011
  </metadata>
  <g transform="scale(0.16, -0.16) translate(0, -3200)" fill="#ffffff" stroke="none">
    <path d="M1345 3084 c-122 -18 -294 -61 -305 -76 -3 -4 -39 -21 -79 -38 -140
-57 -290 -156 -436 -286 -173 -155 -350 -399 -422 -583 -114 -292 -133 -639
-51 -961 21 -86 90 -254 139 -344 444 -805 1454 -1042 2175 -511 316 233 531
574 606 962 34 176 32 438 -4 614 -43 205 -134 416 -247 565 -71 95 -338 356
-421 411 -264 175 -467 241 -765 248 -88 2 -173 1 -190 -1z m304 -207 c108
-67 238 -259 320 -472 17 -43 29 -80 28 -82 -2 -1 -39 -9 -82 -18 -43 -8 -86
-17 -96 -20 -14 -5 -20 2 -29 36 -25 93 -99 169 -189 196 -151 44 -312 -39
-358 -184 -14 -44 -20 -52 -37 -48 -12 2 -54 10 -94 16 -41 7 -76 18 -78 24
-14 35 121 310 209 427 124 165 268 209 406 125z m-539 -52 c0 -3 -23 -40 -52
-82 -55 -82 -124 -224 -153 -313 -23 -73 -21 -70 -58 -58 -55 18 -234 105
-241 116 -8 14 58 79 158 153 94 71 179 122 266 160 67 29 80 33 80 24z m913
-40 c109 -54 243 -148 335 -235 l66 -62 -59 -31 c-73 -37 -194 -87 -209 -87
-6 0 -24 35 -40 78 -40 108 -110 247 -154 307 -70 93 -68 94 61 30z m-1458
-449 c43 -25 112 -57 154 -72 42 -15 87 -31 100 -36 17 -6 21 -13 16 -26 -14
-35 -53 -200 -65 -274 l-12 -76 -52 5 c-85 9 -158 -18 -221 -81 -34 -34 -58
-68 -66 -95 -15 -50 -24 -53 -139 -49 l-85 3 3 55 c5 90 66 310 116 412 37 77
160 278 170 278 1 0 38 -20 81 -44z m1020 10 c54 -35 74 -128 39 -181 -36 -55
-120 -72 -179 -35 -37 23 -57 63 -57 115 0 97 114 155 197 101z m992 -42 c61
-85 148 -266 176 -364 31 -107 61 -275 53 -295 -4 -12 -24 -15 -95 -15 l-90 0
-31 64 c-51 107 -130 158 -249 162 l-75 3 -18 108 c-16 93 -37 190 -53 243 -4
12 16 22 78 43 45 16 118 48 162 71 44 24 85 42 90 41 6 -1 29 -28 52 -61z
m-1479 -149 c46 -8 96 -15 111 -15 21 0 31 -10 53 -50 30 -53 95 -108 140
-117 39 -8 50 -25 46 -74 -3 -40 -5 -43 -45 -56 -63 -21 -138 -93 -161 -156
l-20 -52 -122 0 -122 0 -12 37 c-7 20 -27 56 -44 79 -20 26 -30 50 -27 63 51
235 78 353 82 359 3 5 12 6 20 3 9 -4 54 -13 101 -21z m965 -32 c14 -51 46
-209 60 -298 4 -23 -2 -38 -29 -68 -18 -22 -39 -58 -47 -81 l-14 -41 -111 -3
-112 -3 -24 55 c-29 66 -92 129 -152 152 l-44 17 0 53 0 53 53 24 c58 27 119
84 137 128 9 21 19 29 39 29 14 1 67 9 116 19 50 10 95 19 101 20 6 0 19 -25
27 -56z m-1313 -438 c75 -39 92 -148 32 -207 -79 -80 -222 -21 -222 92 0 93
107 158 190 115z m821 0 c65 -34 91 -135 48 -189 -61 -78 -165 -73 -220 10
-37 56 -13 134 53 174 40 24 79 25 119 5z m842 -24 c87 -86 27 -221 -98 -221
-42 0 -52 4 -81 35 -57 61 -55 132 4 188 33 31 55 37 107 31 26 -3 50 -15 68
-33z m-1992 -216 c60 -115 150 -169 271 -164 l62 3 18 -120 c10 -65 29 -163
42 -217 21 -89 22 -99 7 -104 -61 -21 -208 -88 -257 -117 -32 -20 -62 -36 -66
-36 -12 0 -115 163 -161 255 -51 104 -80 185 -108 303 -22 91 -40 232 -32 245
2 4 48 6 101 5 l97 -3 26 -50z m808 24 c6 -17 27 -53 47 -80 28 -38 52 -57
105 -82 l69 -32 0 -51 0 -51 -65 -32 c-72 -36 -128 -98 -145 -161 -10 -36 -11
-37 -82 -49 -40 -7 -96 -19 -125 -26 -47 -12 -53 -11 -57 4 -13 45 -58 266
-70 344 l-13 87 33 48 c19 26 34 50 34 54 0 4 4 18 10 32 9 26 10 26 129 26
l119 0 11 -31z m811 -1 c7 -18 28 -54 47 -81 18 -26 33 -59 33 -75 0 -43 -28
-218 -51 -319 -22 -101 -23 -101 -89 -84 -19 5 -67 15 -106 21 l-72 11 -16 44
c-30 77 -69 121 -141 155 -70 33 -71 36 -59 112 5 28 12 38 31 43 63 15 128
77 172 163 l21 42 109 0 109 0 12 -32z m770 -5 c0 -121 -66 -377 -136 -530
-26 -58 -110 -203 -139 -241 -1 -1 -49 22 -106 52 -57 30 -134 67 -171 81 -38
15 -68 30 -68 34 0 3 7 29 16 56 15 52 54 290 54 338 0 27 1 27 63 27 35 0 84
7 110 16 64 22 135 87 163 151 l24 53 95 0 95 0 0 -37z m-1246 -467 c50 -21
76 -60 76 -116 0 -138 -185 -180 -244 -55 -31 65 -10 124 59 166 36 23 64 24
109 5z m-314 -247 c32 -61 99 -123 155 -142 147 -50 292 4 371 139 14 24 29
44 32 44 4 0 46 -7 95 -17 55 -10 87 -21 87 -29 0 -48 -105 -278 -171 -375
-88 -130 -170 -186 -286 -196 -128 -10 -228 50 -323 195 -68 103 -180 338
-180 378 0 7 32 18 78 27 119 22 119 22 142 -24z m-341 -121 c34 -86 103 -226
150 -307 30 -51 31 -52 9 -46 -42 13 -206 96 -270 137 -72 46 -198 147 -198
158 0 12 268 145 276 137 1 -1 16 -37 33 -79z m1469 -30 c17 -11 32 -25 32
-32 0 -18 -175 -156 -261 -206 -71 -42 -209 -103 -216 -96 -2 2 13 27 33 57
48 72 99 173 141 284 19 49 37 93 39 97 5 7 177 -70 232 -104z" />
  </g>
</svg>
  );
});

const InvertedIcon = React.memo(function () {
  return (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
  <metadata>
    Created by potrace 1.10, written by Peter Selinger 2001-2011
  </metadata>
  <g transform="scale(0.16, -0.16) translate(0, -3200)" fill="#ffffff" stroke="none">
    <path d="M1345 3084 c-122 -18 -294 -61 -305 -76 -3 -4 -39 -21 -79 -38 -140
-57 -290 -156 -436 -286 -173 -155 -350 -399 -422 -583 -114 -292 -133 -639
-51 -961 21 -86 90 -254 139 -344 444 -805 1454 -1042 2175 -511 316 233 531
574 606 962 34 176 32 438 -4 614 -43 205 -134 416 -247 565 -71 95 -338 356
-421 411 -264 175 -467 241 -765 248 -88 2 -173 1 -190 -1z m304 -207 c108
-67 238 -259 320 -472 17 -43 29 -80 28 -82 -2 -1 -39 -9 -82 -18 -43 -8 -86
-17 -96 -20 -14 -5 -20 2 -29 36 -25 93 -99 169 -189 196 -151 44 -312 -39
-358 -184 -14 -44 -20 -52 -37 -48 -12 2 -54 10 -94 16 -41 7 -76 18 -78 24
-14 35 121 310 209 427 124 165 268 209 406 125z m-539 -52 c0 -3 -23 -40 -52
-82 -55 -82 -124 -224 -153 -313 -23 -73 -21 -70 -58 -58 -55 18 -234 105
-241 116 -8 14 58 79 158 153 94 71 179 122 266 160 67 29 80 33 80 24z m913
-40 c109 -54 243 -148 335 -235 l66 -62 -59 -31 c-73 -37 -194 -87 -209 -87
-6 0 -24 35 -40 78 -40 108 -110 247 -154 307 -70 93 -68 94 61 30z m-1458
-449 c43 -25 112 -57 154 -72 42 -15 87 -31 100 -36 17 -6 21 -13 16 -26 -14
-35 -53 -200 -65 -274 l-12 -76 -52 5 c-85 9 -158 -18 -221 -81 -34 -34 -58
-68 -66 -95 -15 -50 -24 -53 -139 -49 l-85 3 3 55 c5 90 66 310 116 412 37 77
160 278 170 278 1 0 38 -20 81 -44z m1020 10 c54 -35 74 -128 39 -181 -36 -55
-120 -72 -179 -35 -37 23 -57 63 -57 115 0 97 114 155 197 101z m992 -42 c61
-85 148 -266 176 -364 31 -107 61 -275 53 -295 -4 -12 -24 -15 -95 -15 l-90 0
-31 64 c-51 107 -130 158 -249 162 l-75 3 -18 108 c-16 93 -37 190 -53 243 -4
12 16 22 78 43 45 16 118 48 162 71 44 24 85 42 90 41 6 -1 29 -28 52 -61z
m-1479 -149 c46 -8 96 -15 111 -15 21 0 31 -10 53 -50 30 -53 95 -108 140
-117 39 -8 50 -25 46 -74 -3 -40 -5 -43 -45 -56 -63 -21 -138 -93 -161 -156
l-20 -52 -122 0 -122 0 -12 37 c-7 20 -27 56 -44 79 -20 26 -30 50 -27 63 51
235 78 353 82 359 3 5 12 6 20 3 9 -4 54 -13 101 -21z m965 -32 c14 -51 46
-209 60 -298 4 -23 -2 -38 -29 -68 -18 -22 -39 -58 -47 -81 l-14 -41 -111 -3
-112 -3 -24 55 c-29 66 -92 129 -152 152 l-44 17 0 53 0 53 53 24 c58 27 119
84 137 128 9 21 19 29 39 29 14 1 67 9 116 19 50 10 95 19 101 20 6 0 19 -25
27 -56z m-1313 -438 c75 -39 92 -148 32 -207 -79 -80 -222 -21 -222 92 0 93
107 158 190 115z m821 0 c65 -34 91 -135 48 -189 -61 -78 -165 -73 -220 10
-37 56 -13 134 53 174 40 24 79 25 119 5z m842 -24 c87 -86 27 -221 -98 -221
-42 0 -52 4 -81 35 -57 61 -55 132 4 188 33 31 55 37 107 31 26 -3 50 -15 68
-33z m-1992 -216 c60 -115 150 -169 271 -164 l62 3 18 -120 c10 -65 29 -163
42 -217 21 -89 22 -99 7 -104 -61 -21 -208 -88 -257 -117 -32 -20 -62 -36 -66
-36 -12 0 -115 163 -161 255 -51 104 -80 185 -108 303 -22 91 -40 232 -32 245
2 4 48 6 101 5 l97 -3 26 -50z m808 24 c6 -17 27 -53 47 -80 28 -38 52 -57
105 -82 l69 -32 0 -51 0 -51 -65 -32 c-72 -36 -128 -98 -145 -161 -10 -36 -11
-37 -82 -49 -40 -7 -96 -19 -125 -26 -47 -12 -53 -11 -57 4 -13 45 -58 266
-70 344 l-13 87 33 48 c19 26 34 50 34 54 0 4 4 18 10 32 9 26 10 26 129 26
l119 0 11 -31z m811 -1 c7 -18 28 -54 47 -81 18 -26 33 -59 33 -75 0 -43 -28
-218 -51 -319 -22 -101 -23 -101 -89 -84 -19 5 -67 15 -106 21 l-72 11 -16 44
c-30 77 -69 121 -141 155 -70 33 -71 36 -59 112 5 28 12 38 31 43 63 15 128
77 172 163 l21 42 109 0 109 0 12 -32z m770 -5 c0 -121 -66 -377 -136 -530
-26 -58 -110 -203 -139 -241 -1 -1 -49 22 -106 52 -57 30 -134 67 -171 81 -38
15 -68 30 -68 34 0 3 7 29 16 56 15 52 54 290 54 338 0 27 1 27 63 27 35 0 84
7 110 16 64 22 135 87 163 151 l24 53 95 0 95 0 0 -37z m-1246 -467 c50 -21
76 -60 76 -116 0 -138 -185 -180 -244 -55 -31 65 -10 124 59 166 36 23 64 24
109 5z m-314 -247 c32 -61 99 -123 155 -142 147 -50 292 4 371 139 14 24 29
44 32 44 4 0 46 -7 95 -17 55 -10 87 -21 87 -29 0 -48 -105 -278 -171 -375
-88 -130 -170 -186 -286 -196 -128 -10 -228 50 -323 195 -68 103 -180 338
-180 378 0 7 32 18 78 27 119 22 119 22 142 -24z m-341 -121 c34 -86 103 -226
150 -307 30 -51 31 -52 9 -46 -42 13 -206 96 -270 137 -72 46 -198 147 -198
158 0 12 268 145 276 137 1 -1 16 -37 33 -79z m1469 -30 c17 -11 32 -25 32
-32 0 -18 -175 -156 -261 -206 -71 -42 -209 -103 -216 -96 -2 2 13 27 33 57
48 72 99 173 141 284 19 49 37 93 39 97 5 7 177 -70 232 -104z" />
  </g>
</svg>

  );
});

const GrayscaleIcon = React.memo(function () {
  return (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
  <metadata>
    Created by potrace 1.10, written by Peter Selinger 2001-2011
  </metadata>
  <g transform="scale(0.16, -0.16) translate(0, -3200)" fill="#ffffff" stroke="none">
    <path d="M1345 3084 c-122 -18 -294 -61 -305 -76 -3 -4 -39 -21 -79 -38 -140
-57 -290 -156 -436 -286 -173 -155 -350 -399 -422 -583 -114 -292 -133 -639
-51 -961 21 -86 90 -254 139 -344 444 -805 1454 -1042 2175 -511 316 233 531
574 606 962 34 176 32 438 -4 614 -43 205 -134 416 -247 565 -71 95 -338 356
-421 411 -264 175 -467 241 -765 248 -88 2 -173 1 -190 -1z m304 -207 c108
-67 238 -259 320 -472 17 -43 29 -80 28 -82 -2 -1 -39 -9 -82 -18 -43 -8 -86
-17 -96 -20 -14 -5 -20 2 -29 36 -25 93 -99 169 -189 196 -151 44 -312 -39
-358 -184 -14 -44 -20 -52 -37 -48 -12 2 -54 10 -94 16 -41 7 -76 18 -78 24
-14 35 121 310 209 427 124 165 268 209 406 125z m-539 -52 c0 -3 -23 -40 -52
-82 -55 -82 -124 -224 -153 -313 -23 -73 -21 -70 -58 -58 -55 18 -234 105
-241 116 -8 14 58 79 158 153 94 71 179 122 266 160 67 29 80 33 80 24z m913
-40 c109 -54 243 -148 335 -235 l66 -62 -59 -31 c-73 -37 -194 -87 -209 -87
-6 0 -24 35 -40 78 -40 108 -110 247 -154 307 -70 93 -68 94 61 30z m-1458
-449 c43 -25 112 -57 154 -72 42 -15 87 -31 100 -36 17 -6 21 -13 16 -26 -14
-35 -53 -200 -65 -274 l-12 -76 -52 5 c-85 9 -158 -18 -221 -81 -34 -34 -58
-68 -66 -95 -15 -50 -24 -53 -139 -49 l-85 3 3 55 c5 90 66 310 116 412 37 77
160 278 170 278 1 0 38 -20 81 -44z m1020 10 c54 -35 74 -128 39 -181 -36 -55
-120 -72 -179 -35 -37 23 -57 63 -57 115 0 97 114 155 197 101z m992 -42 c61
-85 148 -266 176 -364 31 -107 61 -275 53 -295 -4 -12 -24 -15 -95 -15 l-90 0
-31 64 c-51 107 -130 158 -249 162 l-75 3 -18 108 c-16 93 -37 190 -53 243 -4
12 16 22 78 43 45 16 118 48 162 71 44 24 85 42 90 41 6 -1 29 -28 52 -61z
m-1479 -149 c46 -8 96 -15 111 -15 21 0 31 -10 53 -50 30 -53 95 -108 140
-117 39 -8 50 -25 46 -74 -3 -40 -5 -43 -45 -56 -63 -21 -138 -93 -161 -156
l-20 -52 -122 0 -122 0 -12 37 c-7 20 -27 56 -44 79 -20 26 -30 50 -27 63 51
235 78 353 82 359 3 5 12 6 20 3 9 -4 54 -13 101 -21z m965 -32 c14 -51 46
-209 60 -298 4 -23 -2 -38 -29 -68 -18 -22 -39 -58 -47 -81 l-14 -41 -111 -3
-112 -3 -24 55 c-29 66 -92 129 -152 152 l-44 17 0 53 0 53 53 24 c58 27 119
84 137 128 9 21 19 29 39 29 14 1 67 9 116 19 50 10 95 19 101 20 6 0 19 -25
27 -56z m-1313 -438 c75 -39 92 -148 32 -207 -79 -80 -222 -21 -222 92 0 93
107 158 190 115z m821 0 c65 -34 91 -135 48 -189 -61 -78 -165 -73 -220 10
-37 56 -13 134 53 174 40 24 79 25 119 5z m842 -24 c87 -86 27 -221 -98 -221
-42 0 -52 4 -81 35 -57 61 -55 132 4 188 33 31 55 37 107 31 26 -3 50 -15 68
-33z m-1992 -216 c60 -115 150 -169 271 -164 l62 3 18 -120 c10 -65 29 -163
42 -217 21 -89 22 -99 7 -104 -61 -21 -208 -88 -257 -117 -32 -20 -62 -36 -66
-36 -12 0 -115 163 -161 255 -51 104 -80 185 -108 303 -22 91 -40 232 -32 245
2 4 48 6 101 5 l97 -3 26 -50z m808 24 c6 -17 27 -53 47 -80 28 -38 52 -57
105 -82 l69 -32 0 -51 0 -51 -65 -32 c-72 -36 -128 -98 -145 -161 -10 -36 -11
-37 -82 -49 -40 -7 -96 -19 -125 -26 -47 -12 -53 -11 -57 4 -13 45 -58 266
-70 344 l-13 87 33 48 c19 26 34 50 34 54 0 4 4 18 10 32 9 26 10 26 129 26
l119 0 11 -31z m811 -1 c7 -18 28 -54 47 -81 18 -26 33 -59 33 -75 0 -43 -28
-218 -51 -319 -22 -101 -23 -101 -89 -84 -19 5 -67 15 -106 21 l-72 11 -16 44
c-30 77 -69 121 -141 155 -70 33 -71 36 -59 112 5 28 12 38 31 43 63 15 128
77 172 163 l21 42 109 0 109 0 12 -32z m770 -5 c0 -121 -66 -377 -136 -530
-26 -58 -110 -203 -139 -241 -1 -1 -49 22 -106 52 -57 30 -134 67 -171 81 -38
15 -68 30 -68 34 0 3 7 29 16 56 15 52 54 290 54 338 0 27 1 27 63 27 35 0 84
7 110 16 64 22 135 87 163 151 l24 53 95 0 95 0 0 -37z m-1246 -467 c50 -21
76 -60 76 -116 0 -138 -185 -180 -244 -55 -31 65 -10 124 59 166 36 23 64 24
109 5z m-314 -247 c32 -61 99 -123 155 -142 147 -50 292 4 371 139 14 24 29
44 32 44 4 0 46 -7 95 -17 55 -10 87 -21 87 -29 0 -48 -105 -278 -171 -375
-88 -130 -170 -186 -286 -196 -128 -10 -228 50 -323 195 -68 103 -180 338
-180 378 0 7 32 18 78 27 119 22 119 22 142 -24z m-341 -121 c34 -86 103 -226
150 -307 30 -51 31 -52 9 -46 -42 13 -206 96 -270 137 -72 46 -198 147 -198
158 0 12 268 145 276 137 1 -1 16 -37 33 -79z m1469 -30 c17 -11 32 -25 32
-32 0 -18 -175 -156 -261 -206 -71 -42 -209 -103 -216 -96 -2 2 13 27 33 57
48 72 99 173 141 284 19 49 37 93 39 97 5 7 177 -70 232 -104z" />
  </g>
</svg>
  );
});
