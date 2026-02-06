(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_TOTAL_HEIGHT_PX",
    ()=>HEADER_TOTAL_HEIGHT_PX,
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
// basePath를 포함한 이미지 경로 처리 (GitHub Pages 등 서브경로 배포 대응)
const getImagePath = (path)=>{
    const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return `${basePath}${path}`;
};
/** 윗 줄 작은 로고 (43x11.467, aspect 15/4) */ const TopLogoSvg = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "43",
        height: "12",
        viewBox: "0 0 43 12",
        fill: "none",
        className: "shrink-0",
        style: {
            width: 43,
            height: '11.467px',
            aspectRatio: '15/4'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7.47656 1.36914C7.54144 1.37344 7.59944 1.37911 7.65137 1.3877V3.23633C7.52274 3.21053 7.39929 3.19317 7.28223 3.18457C7.16675 3.17599 7.06667 3.17188 6.98438 3.17188C6.8604 3.17191 6.75956 3.18521 6.68164 3.21094C6.65931 3.21745 6.63975 3.22748 6.62109 3.23633C6.62461 3.24126 6.62836 3.24602 6.63184 3.25098C6.77777 3.4258 6.88817 3.61183 6.95898 3.80957C7.0298 4.00307 7.06543 4.21292 7.06543 4.43652C7.06536 4.87211 6.94289 5.2533 6.69727 5.57715C6.45158 5.89821 6.10876 6.14798 5.66797 6.32715C5.23171 6.50187 4.72172 6.58882 4.13965 6.58887C3.55738 6.58887 3.04118 6.5014 2.5918 6.3252L2.59375 6.32812C2.57596 6.32219 2.51818 6.38669 2.50781 6.39844C2.48324 6.42567 2.46516 6.45727 2.45215 6.49023C2.40455 6.6192 2.41643 6.7815 2.51465 6.87891C2.56667 6.93043 2.65777 6.97596 2.72852 6.99316C2.808 7.0118 2.89368 7.01725 2.97461 7.02441C3.06124 7.03299 3.1497 7.0332 3.23633 7.0332H3.85449C4.9254 7.0332 6.08491 6.91198 7.08789 7.37207C7.46777 7.54551 7.8104 7.80753 8.04297 8.15137C8.4938 8.81786 8.41807 9.71976 7.92383 10.3418C7.64054 10.6971 7.18255 10.9721 6.54688 11.167C5.91682 11.3662 5.07439 11.4668 4.01953 11.4668C3.24633 11.4668 2.55622 11.4117 1.94922 11.3057C1.34699 11.2039 0.871613 11.0398 0.523438 10.8135C0.175137 10.587 0 10.2883 0 9.91992C6.58662e-05 9.55165 0.202823 9.27673 0.607422 9.09473C1.01638 8.91276 1.54511 8.79521 2.19531 8.74219V8.67773C2.18983 8.67837 1.75432 8.61748 1.71875 8.61426C1.45147 8.58703 1.17107 8.51076 0.935547 8.38184C0.720263 8.26433 0.531672 8.08276 0.452148 7.85352C0.384235 7.65862 0.398984 7.44054 0.472656 7.24707C0.631632 6.8314 1.0219 6.58014 1.41211 6.40527C1.53775 6.34942 1.66789 6.29974 1.79785 6.25391C1.86282 6.231 1.92773 6.20898 1.99414 6.1875C2.02154 6.17892 2.14143 6.14233 2.18359 6.12793C1.9192 5.97174 1.69977 5.7836 1.52637 5.56152C1.2735 5.23335 1.14653 4.84911 1.14648 4.40918C1.14648 3.96921 1.27055 3.58504 1.52051 3.25684C1.76904 2.92867 2.11698 2.67428 2.56055 2.49512C3.00995 2.31311 3.54501 2.22171 4.12012 2.22168C4.69515 2.22168 5.19979 2.31019 5.63184 2.48926C5.79559 2.55648 5.94529 2.63445 6.08008 2.72266C6.06199 2.67615 6.04878 2.62821 6.04102 2.57812C6.03239 2.51814 6.02833 2.46099 6.02832 2.40527C6.02832 2.17881 6.08001 1.9893 6.18262 1.83594C6.28663 1.67836 6.42991 1.56131 6.61621 1.48535C6.80554 1.40365 7.02537 1.36328 7.27539 1.36328C7.34907 1.36328 7.41588 1.36484 7.47656 1.36914ZM3.30566 8.69629C2.98363 8.69915 2.73038 8.73449 2.54688 8.80176C2.34454 8.87772 2.20253 8.97011 2.12305 9.07617C2.04799 9.18646 2.01074 9.29381 2.01074 9.39551C2.01074 9.57742 2.09685 9.71797 2.27148 9.81543C2.45064 9.91287 2.69527 9.98135 3.00586 10.0215C3.31648 10.0616 3.67211 10.082 4.07227 10.082C4.8339 10.082 5.38392 10.0101 5.71777 9.86816C6.05707 9.72629 6.22654 9.52869 6.22656 9.24219C6.22656 8.95559 5.92561 8.69641 5.32324 8.69629H3.30566ZM11.167 2.58398C11.8462 2.58398 12.4335 2.72147 12.9248 2.99805C13.4205 3.27468 13.8034 3.65973 14.0693 4.15137C14.3366 4.64293 14.4697 5.21465 14.4697 5.86523V6.1377C14.4697 6.21359 14.4652 6.27962 14.458 6.33691H13.624V6.33789H9.64844C9.68186 6.48526 9.73209 6.62287 9.79883 6.75098C9.93175 7.00889 10.1196 7.21078 10.3594 7.3584C10.6036 7.50173 10.8957 7.5752 11.2354 7.5752C11.5748 7.57518 11.8794 7.49899 12.1279 7.34863C12.3794 7.19383 12.5681 6.98749 12.6895 6.72949L14.373 7.21875C14.136 7.80195 13.7409 8.26187 13.1875 8.59863C12.6384 8.93538 11.9837 9.10449 11.2236 9.10449L11.2256 9.10352C10.5276 9.10352 9.92175 8.96664 9.41016 8.69434C8.90288 8.4177 8.51092 8.03818 8.23633 7.55371C7.9618 7.06505 7.82428 6.50185 7.82422 5.86133C7.82422 5.22063 7.96173 4.64932 8.23633 4.15625C8.51091 3.66046 8.89849 3.27463 9.39844 2.99805C9.89835 2.72156 10.488 2.58403 11.167 2.58398ZM39.5361 2.58398C40.2338 2.58403 40.8378 2.72162 41.3564 2.99805C41.8796 3.27468 42.2842 3.65973 42.5703 4.15137C42.8564 4.64297 43 5.21352 43 5.86133C42.9999 6.50901 42.8564 7.06505 42.5703 7.55371C42.2842 8.03807 41.8811 8.41918 41.3623 8.69434C40.8436 8.9666 40.234 9.10347 39.5361 9.10352C38.8381 9.10352 38.2278 8.96667 37.709 8.69434C37.1902 8.41772 36.7856 8.0381 36.4951 7.55371C36.209 7.06505 36.0655 6.50185 36.0654 5.86133C36.0654 5.22075 36.2091 4.64437 36.4951 4.15137C36.7856 3.65973 37.1901 3.27468 37.709 2.99805C38.2278 2.72148 38.8382 2.58398 39.5361 2.58398ZM22.0322 2.57129C22.6233 2.57129 23.1242 2.64891 23.5332 2.80371C23.9447 2.95559 24.2579 3.19351 24.4717 3.51855C24.6856 3.84392 24.793 4.26427 24.793 4.78027V7.55078H25.5488V8.97559H23.8359V8.97266C23.5846 8.9726 23.3892 8.89852 23.252 8.75098C23.119 8.59907 23.0518 8.38652 23.0518 8.11426V7.43945H23.001C22.9559 7.68769 22.6901 8.30249 22.3203 8.61621C21.9503 8.93003 21.4569 9.08691 20.8428 9.08691H20.8398C20.1796 9.08685 19.6794 8.93518 19.3398 8.63281C19.0005 8.33047 18.8302 7.90208 18.8301 7.35059C18.8301 6.7988 19.0003 6.40398 19.3398 6.12305C19.6795 5.83925 20.2134 5.63291 20.9375 5.50391L23.0498 5.10938V4.98633C23.0498 4.77 23.0041 4.59211 22.9131 4.45312C22.8221 4.30983 22.6875 4.20357 22.5127 4.13477C22.3407 4.06597 22.1319 4.0332 21.8877 4.0332C21.5439 4.03325 21.2636 4.10372 21.0469 4.24414C20.833 4.38029 20.694 4.598 20.6289 4.89746L19.0264 4.6543C19.0957 4.21143 19.2459 3.834 19.4785 3.52441C19.7111 3.21346 20.0381 2.97739 20.457 2.81543C20.8775 2.65206 21.4023 2.57132 22.0322 2.57129ZM28.0215 3.12598H30.3242L30.3125 4.55078H28.0215V6.93262L28.0244 6.93457C28.0244 7.13944 28.0606 7.29278 28.1328 7.39453C28.2094 7.4963 28.3183 7.54785 28.46 7.54785C28.6014 7.54774 28.7081 7.49618 28.7803 7.39453C28.8569 7.28848 28.8945 7.13519 28.8945 6.93457V6.33789H30.3887V6.92285C30.3887 7.36997 30.3183 7.75573 30.1768 8.08105C30.0351 8.40355 29.8138 8.65176 29.5117 8.8252C29.2097 8.99862 28.8207 9.08594 28.3438 9.08594C27.8669 9.08592 27.4748 8.99705 27.1699 8.81934C26.868 8.64161 26.6459 8.39172 26.5 8.06934C26.3541 7.7469 26.2813 7.36874 26.2812 6.93457V4.55273H25.3018V3.12793H26.2812V1.07324H28.0215V3.12598ZM33.4258 3.12598H35.7275L35.7158 4.55078H33.4258V6.93262L33.4287 6.93457C33.4287 7.13932 33.464 7.29278 33.5361 7.39453C33.6127 7.4963 33.7216 7.54785 33.8633 7.54785C34.0048 7.54784 34.1113 7.49615 34.1836 7.39453C34.2602 7.28848 34.2978 7.13519 34.2979 6.93457V6.33789H35.793V6.92285C35.793 7.37004 35.7217 7.75569 35.5801 8.08105C35.4384 8.40355 35.2171 8.65176 34.915 8.8252C34.6131 8.99846 34.2246 9.08589 33.748 9.08594C33.2712 9.08594 32.8791 8.99703 32.5742 8.81934C32.2722 8.6416 32.0493 8.39184 31.9033 8.06934C31.7589 7.74694 31.6856 7.36867 31.6855 6.93457V4.55273H30.7051V3.12793H31.6855V1.07324H33.4258V3.12598ZM17.46 7.55176H18.4053V8.97168H14.7344V7.55176H15.7188V1.41895H14.7344V0H17.46V7.55176ZM21.4414 6.29785C21.1668 6.35089 20.9656 6.44132 20.8398 6.57031C20.7143 6.69493 20.6514 6.86129 20.6514 7.07031C20.6514 7.2938 20.7218 7.4645 20.8633 7.58203C21.0078 7.69956 21.2151 7.75879 21.4824 7.75879C21.7872 7.75871 22.0621 7.68265 22.3076 7.53223C22.5559 7.3804 22.7491 7.16532 22.8906 6.88477C23.0222 6.6212 23.0893 6.30761 23.0986 5.94629L21.4414 6.29785ZM39.5361 4.10547C39.2082 4.10547 38.9174 4.17961 38.666 4.32715C38.4175 4.47475 38.2237 4.68121 38.082 4.94629C37.9404 5.20716 37.8691 5.51147 37.8691 5.85547C37.8692 6.1993 37.9405 6.50577 38.082 6.76367C38.2237 7.02167 38.4174 7.22288 38.666 7.36621C38.9174 7.50655 39.2082 7.57617 39.5361 7.57617C39.8641 7.57612 40.1533 7.50663 40.4004 7.36621C40.6518 7.22288 40.8477 7.02162 40.9893 6.76367C41.1308 6.50575 41.2021 6.20364 41.2021 5.85547C41.2021 5.50717 41.1309 5.20716 40.9893 4.94629C40.8477 4.68134 40.6517 4.47472 40.4004 4.32715C40.1519 4.17957 39.8641 4.10552 39.5361 4.10547ZM4.14453 3.47754C3.91491 3.47759 3.70789 3.51594 3.52734 3.59473C3.35121 3.66925 3.21093 3.77715 3.1084 3.91895C3.00593 4.05791 2.9541 4.22005 2.9541 4.40625C2.95414 4.59248 3.00585 4.75601 3.1084 4.89355C3.21092 5.02817 3.35124 5.13408 3.52734 5.21289C3.70789 5.28738 3.91346 5.32515 4.14453 5.3252C4.37564 5.3252 4.57961 5.28734 4.75586 5.21289C4.93218 5.13406 5.07165 5.02829 5.16992 4.89355C5.27248 4.75458 5.32419 4.59392 5.32422 4.40625C5.32422 4.21861 5.27239 4.05648 5.16992 3.91895C5.07165 3.77848 4.93218 3.66926 4.75586 3.59473C4.57818 3.51601 4.37416 3.47754 4.14453 3.47754ZM11.1943 4.03613C10.8636 4.0362 10.5933 4.11226 10.3535 4.2627C10.1136 4.41033 9.92591 4.62281 9.79297 4.89941C9.74711 4.99546 9.7123 5.09818 9.68262 5.20605H12.6934C12.664 5.08796 12.6281 4.97612 12.5791 4.87207C12.4563 4.60705 12.2774 4.40211 12.042 4.25879C11.8093 4.11116 11.5253 4.03613 11.1943 4.03613Z",
            fill: "black"
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 24,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = TopLogoSvg;
/** 두 번째 줄 가운데 로고 (60.259x21.42) - 검정 */ const CenterLogoSvg = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "61",
        height: "22",
        viewBox: "0 0 61 22",
        fill: "none",
        className: "shrink-0",
        style: {
            width: '60.259px',
            height: '21.42px',
            fill: '#000'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.10105 0.622065C6.67275 2.19878 6.20385 2.72846 5.45422 3.63384C3.43054 6.06667 2.11329 8.07144 1.22793 10.0516C-0.172605 13.1896 -0.379292 15.9612 0.629464 17.969C1.15698 19.0161 2.08244 19.9677 3.14056 20.5466C3.85934 20.9408 4.89586 21.2518 5.91695 21.3781C6.46298 21.4458 8.00542 21.4274 8.67792 21.3473C10.7047 21.1009 12.8024 20.5374 15.187 19.6012C16.1464 19.2255 16.4981 19.0746 33.3107 11.8931C54.3033 2.92555 60.3651 0.329509 60.2572 0.354146C60.1523 0.375702 59.7512 0.483486 38.8789 6.02048C24.9754 9.70975 19.5799 11.1417 17.038 11.81C15.8287 12.1303 15.0235 12.2842 13.8605 12.4167C13.6538 12.4413 13.1541 12.4567 12.5803 12.4536C11.5438 12.4536 11.1273 12.4105 10.4147 12.2288C9.42447 11.9794 8.73345 11.6006 8.03627 10.9323C7.06453 9.99923 6.56169 8.8906 6.44138 7.42166C6.34884 6.30995 6.58637 4.82254 7.07379 3.41828C7.43472 2.38971 8.07637 1.0224 8.63782 0.0985449C8.67175 0.0461929 8.69026 0 8.68101 0C8.67484 0 8.41262 0.280237 8.10105 0.622065Z",
            fill: "black"
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CenterLogoSvg;
/** design-a: 두 번째 줄 가운데 로고 흰색 */ const CenterLogoSvgWhite = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "61",
        height: "22",
        viewBox: "0 0 61 22",
        fill: "none",
        className: "shrink-0",
        style: {
            width: '60.259px',
            height: '21.42px'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.10105 0.622065C6.67275 2.19878 6.20385 2.72846 5.45422 3.63384C3.43054 6.06667 2.11329 8.07144 1.22793 10.0516C-0.172605 13.1896 -0.379292 15.9612 0.629464 17.969C1.15698 19.0161 2.08244 19.9677 3.14056 20.5466C3.85934 20.9408 4.89586 21.2518 5.91695 21.3781C6.46298 21.4458 8.00542 21.4274 8.67792 21.3473C10.7047 21.1009 12.8024 20.5374 15.187 19.6012C16.1464 19.2255 16.4981 19.0746 33.3107 11.8931C54.3033 2.92555 60.3651 0.329509 60.2572 0.354146C60.1523 0.375702 59.7512 0.483486 38.8789 6.02048C24.9754 9.70975 19.5799 11.1417 17.038 11.81C15.8287 12.1303 15.0235 12.2842 13.8605 12.4167C13.6538 12.4413 13.1541 12.4567 12.5803 12.4536C11.5438 12.4536 11.1273 12.4105 10.4147 12.2288C9.42447 11.9794 8.73345 11.6006 8.03627 10.9323C7.06453 9.99923 6.56169 8.8906 6.44138 7.42166C6.34884 6.30995 6.58637 4.82254 7.07379 3.41828C7.43472 2.38971 8.07637 1.0224 8.63782 0.0985449C8.67175 0.0461929 8.69026 0 8.68101 0C8.67484 0 8.41262 0.280237 8.10105 0.622065Z",
            fill: "#FFF"
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = CenterLogoSvgWhite;
/** ver01: 메인(두번째 줄) 헤더 배경 - 밝은 톤 */ const VER01_MAIN_HEADER_BG = 'var(--background-overlay-lightTertiary, rgba(255, 255, 255, 0.96))';
/** design-a: 메인(두번째 줄) 헤더 배경 - 검정 오버레이 + opacity + blur */ const DESIGN_A_MAIN_HEADER_BG = 'var(--background-overlay-darkInteractive, rgba(0, 0, 0, 0.16))';
const HEADER_TOTAL_HEIGHT_PX = 40 + 52;
function Header({ children, variant = 'default' }) {
    const isDesignA = variant === 'designA';
    const secondRowBg = isDesignA ? DESIGN_A_MAIN_HEADER_BG : VER01_MAIN_HEADER_BG;
    const iconFilter = isDesignA ? 'brightness(0) invert(1)' : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed left-0 right-0 top-0 z-50 flex w-full flex-col items-stretch self-stretch",
        style: {
            maxWidth: '100vw'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 self-stretch px-4 sm:px-6",
                style: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    background: 'var(--neutral-50, #FAFAFA)',
                    backdropFilter: 'blur(27px)',
                    WebkitBackdropFilter: 'blur(27px)',
                    minHeight: 40
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopLogoSvg, {}, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-[52px] items-center justify-center gap-1 self-stretch",
                style: {
                    background: secondRowBg,
                    backdropFilter: 'blur(27px)',
                    WebkitBackdropFilter: 'blur(27px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "absolute left-4 sm:left-6 top-[10px] flex w-auto min-w-0 items-center justify-center gap-1 rounded-md font-medium text-white transition-opacity hover:opacity-90",
                        style: {
                            left: 24,
                            height: 32,
                            paddingLeft: 8,
                            paddingRight: 8,
                            background: 'var(--button-primaryActivated, #111214)'
                        },
                        "aria-label": "대화 목록",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "shrink-0",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 5.99998H13.3333C13.6869 5.99998 14.0261 6.14046 14.2761 6.3905C14.5262 6.64055 14.6666 6.97969 14.6666 7.33331V14.6666L12 12H7.99998C7.64636 12 7.30722 11.8595 7.05717 11.6095C6.80712 11.3594 6.66665 11.0203 6.66665 10.6666V9.99998M9.33331 5.99998C9.33331 6.3536 9.19284 6.69274 8.94279 6.94279C8.69274 7.19284 8.3536 7.33331 7.99998 7.33331H3.99998L1.33331 9.99998V2.66665C1.33331 1.93331 1.93331 1.33331 2.66665 1.33331H7.99998C8.3536 1.33331 8.69274 1.47379 8.94279 1.72384C9.19284 1.97389 9.33331 2.31302 9.33331 2.66665V5.99998Z",
                                    stroke: "white",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                style: {
                                    color: 'var(--content-inversePrimary, #FFF)',
                                    fontFamily: '"Noto Sans KR"',
                                    fontSize: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '120%',
                                    letterSpacing: -0.12
                                },
                                children: "대화 목록"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center justify-center",
                        children: isDesignA ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterLogoSvgWhite, {}, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 152,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterLogoSvg, {}, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 152,
                            columnNumber: 49
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-4 sm:right-6 top-1/2 flex -translate-y-1/2 shrink-0 items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex shrink-0 items-center justify-center transition-opacity hover:opacity-70",
                                style: {
                                    width: 32,
                                    height: 32,
                                    minWidth: 32,
                                    minHeight: 32
                                },
                                "aria-label": "찜하기",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: getImagePath('/bookmark.svg'),
                                    alt: "",
                                    width: 24,
                                    height: 24,
                                    style: {
                                        width: 24,
                                        height: 24,
                                        ...iconFilter && {
                                            filter: iconFilter
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `flex shrink-0 items-center justify-center overflow-hidden rounded-full transition-opacity hover:opacity-70 ${isDesignA ? 'border border-white/30' : 'bg-neutral-200'}`,
                                style: {
                                    width: 32,
                                    height: 32,
                                    minWidth: 32,
                                    minHeight: 32
                                },
                                "aria-label": "프로필",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: getImagePath('/profile.svg'),
                                    alt: "",
                                    width: 32,
                                    height: 32,
                                    className: "object-cover",
                                    style: {
                                        width: 32,
                                        height: 32
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c3 = Header;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TopLogoSvg");
__turbopack_context__.k.register(_c1, "CenterLogoSvg");
__turbopack_context__.k.register(_c2, "CenterLogoSvgWhite");
__turbopack_context__.k.register(_c3, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/design-a/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignAPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// ver01과 동일한 basePath (루트 = ver01, /design-a = 시안 A)
const getImagePath = (path)=>{
    const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return `${basePath}${path}`;
};
const SEARCH_PLACEHOLDER = '나이키에서 어떤 제품을 찾으세요? 편하게 질문해 보세요.';
const suggestionChipTexts = [
    '무릎 안아픈 러닝화 추천해줘',
    '겨울에 입고 뛰기 좋은 저지 추천해줘',
    '땀 흡수 잘되는 운동복 보여줘'
];
// ver01 메인과 동일: Start a Conversation with... 빠른 스타트 아이템
const quickStartItems = [
    {
        id: 1,
        text: '나이키 팬텀 6 로우 엘레트',
        color: '#00C9D6',
        image: '/item1.png'
    },
    {
        id: 2,
        text: [
            '사브리나',
            '농구 후디'
        ],
        color: '#F87171',
        image: '/item2.png'
    },
    {
        id: 3,
        text: [
            '나이키',
            '테크 윈드러너'
        ],
        color: '#F59E0B',
        image: '/item3.png'
    },
    {
        id: 4,
        text: [
            '나이키',
            '재생 소재'
        ],
        color: '#16A34A',
        image: '/item4.png'
    }
];
function DesignAPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedQuickStartItem, setSelectedQuickStartItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSearchSubmit = ()=>{
        if (!searchQuery.trim()) return;
        setSearchQuery('');
    };
    const handleChipClick = (text)=>{
        setSearchQuery(text);
    };
    const handleQuickStartItemClick = (itemId)=>{
        setSelectedQuickStartItem((prev)=>prev === itemId ? null : itemId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-screen w-full flex-col overflow-hidden bg-black",
        style: {
            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TOTAL_HEIGHT_PX"]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                variant: "designA"
            }, void 0, false, {
                fileName: "[project]/app/design-a/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 min-h-full min-w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: getImagePath('/vedio.mov'),
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    className: "absolute inset-0 h-full w-full object-cover",
                    style: {
                        opacity: 0.6
                    },
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/app/design-a/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/design-a/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-1 flex-col items-center justify-center w-full design-a-content-padding",
                style: {
                    paddingBottom: 24
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col items-stretch sm:max-w-[640px] sm:mx-auto",
                    style: {
                        gap: 32
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-stretch w-full",
                            style: {
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-col rounded-[20px]",
                                    style: {
                                        maxWidth: 640,
                                        gap: 4,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingTop: 16,
                                        paddingBottom: 16,
                                        background: 'var(--common-white, #FFF)',
                                        borderRadius: 'var(--20, 20px)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-9 w-full items-center gap-[10px]",
                                            style: {
                                                padding: 'var(--12, 12px) 0'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "shrink-0 w-5 h-5 flex items-center justify-center",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: 20,
                                                        height: 20,
                                                        viewBox: "0 0 20 20",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",
                                                            stroke: "#9EA2A8",
                                                            strokeWidth: 1.4,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/design-a/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/design-a/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/design-a/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1 relative flex items-center",
                                                    style: {
                                                        minHeight: 36
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        onKeyDown: (e)=>{
                                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                                e.preventDefault();
                                                                handleSearchSubmit();
                                                            }
                                                        },
                                                        placeholder: SEARCH_PLACEHOLDER,
                                                        className: "w-full bg-transparent border-0 outline-none placeholder:opacity-100 placeholder:text-[var(--content-placeholder,#9EA2A8)]",
                                                        style: {
                                                            fontFamily: '"Noto Sans KR", sans-serif',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            lineHeight: '140%',
                                                            letterSpacing: '-0.14px',
                                                            color: searchQuery ? 'var(--content-primary, #111214)' : 'var(--content-placeholder, #9EA2A8)',
                                                            display: '-webkit-box',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 1,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/design-a/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/design-a/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/design-a/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSearchSubmit,
                                                className: "shrink-0 flex w-6 h-6 items-center justify-center rounded-full transition-opacity hover:opacity-90",
                                                style: {
                                                    width: 'var(--24, 24px)',
                                                    height: 'var(--24, 24px)',
                                                    borderRadius: 'var(--100, 100px)',
                                                    background: 'var(--button-primaryActivated, #111214)'
                                                },
                                                "aria-label": "검색",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: 12,
                                                    height: 12,
                                                    viewBox: "0 0 14 14",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M0.800049 6.63332L6.63338 0.799988M6.63338 0.799988L12.4667 6.63332M6.63338 0.799988V12.4667",
                                                        stroke: "var(--content-inversePrimary, #FFF)",
                                                        strokeWidth: 1.6,
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/design-a/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/design-a/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/design-a/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/design-a/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/design-a/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "design-a-chips-scroll-wrap overflow-x-auto overflow-y-hidden w-full",
                                    style: {
                                        WebkitOverflowScrolling: 'touch'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "design-a-chips-scroll-inner flex items-center gap-1 flex-nowrap justify-start min-w-min",
                                        children: suggestionChipTexts.map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "button",
                                                initial: {
                                                    opacity: 0,
                                                    y: 4
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: i * 0.05
                                                },
                                                onClick: ()=>handleChipClick(text),
                                                className: "flex items-center justify-center rounded-full border shrink-0 transition-colors hover:opacity-90 whitespace-nowrap",
                                                style: {
                                                    paddingTop: 4,
                                                    paddingBottom: 4,
                                                    paddingLeft: 8,
                                                    paddingRight: 8,
                                                    gap: 4,
                                                    borderRadius: 'var(--100, 100px)',
                                                    border: '1px solid var(--button-defaultOutlined, #D1D4D9)',
                                                    background: 'transparent',
                                                    color: 'var(--content-inversePrimary, #FFF)',
                                                    fontFamily: '"Noto Sans KR", sans-serif',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    lineHeight: '120%',
                                                    letterSpacing: '-0.12px'
                                                },
                                                children: text
                                            }, i, false, {
                                                fileName: "[project]/app/design-a/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/design-a/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/design-a/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/design-a/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start w-full",
                            style: {
                                maxWidth: 640,
                                gap: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        color: 'var(--content-inversePrimary, #FFF)',
                                        fontFamily: '"Noto Sans KR", sans-serif',
                                        fontSize: 16,
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '120%',
                                        letterSpacing: '-0.16px'
                                    },
                                    children: "이 컬렉션에 대해 얘기해볼까요?"
                                }, void 0, false, {
                                    fileName: "[project]/app/design-a/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quick-start-scroll-wrap w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quick-start-scroll-inner flex items-start w-full overflow-x-auto overflow-y-hidden",
                                        style: {
                                            gap: 16,
                                            WebkitOverflowScrolling: 'touch',
                                            paddingBottom: 4
                                        },
                                        children: quickStartItems.map((item)=>{
                                            const isSelected = selectedQuickStartItem === item.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "quick-start-item relative shrink-0 rounded-2xl",
                                                style: {
                                                    background: `url(${getImagePath(item.image)}) lightgray 50% / cover no-repeat`,
                                                    borderRadius: 16,
                                                    cursor: 'pointer',
                                                    border: isSelected ? `3px solid ${item.color}` : 'none',
                                                    transition: 'border 0.2s ease'
                                                },
                                                onClick: ()=>handleQuickStartItemClick(item.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-0 bottom-0 right-0",
                                                    style: {
                                                        padding: '0 0 12px 12px',
                                                        color: '#FFF',
                                                        fontFamily: '"Noto Sans KR", sans-serif',
                                                        fontSize: 'clamp(12px, 3.5vw, 16px)',
                                                        fontStyle: 'normal',
                                                        fontWeight: 700,
                                                        lineHeight: '120%',
                                                        letterSpacing: '-0.16px'
                                                    },
                                                    children: Array.isArray(item.text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            item.text[0],
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/design-a/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 29
                                                            }, this),
                                                            item.text[1]
                                                        ]
                                                    }, void 0, true) : item.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/design-a/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/app/design-a/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/design-a/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/design-a/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/design-a/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/design-a/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/design-a/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/design-a/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(DesignAPage, "QoafBzdz0TS4rGrD9UBNQZEjI84=");
_c = DesignAPage;
var _c;
__turbopack_context__.k.register(_c, "DesignAPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_059148f4._.js.map