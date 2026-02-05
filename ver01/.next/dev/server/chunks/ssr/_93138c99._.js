module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
const GelatoLogoSvg = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "75",
        height: "20",
        viewBox: "0 0 75 20",
        fill: "none",
        className: "shrink-0",
        style: {
            width: '74.383px',
            height: '20px'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.9326 2.3877C13.0451 2.39519 13.1454 2.40493 13.2354 2.41992V5.64453C13.0129 5.59954 12.8001 5.56969 12.5977 5.55469C12.3979 5.5397 12.2254 5.53224 12.083 5.53223C11.8681 5.53223 11.6926 5.55465 11.5576 5.59961C11.5186 5.61109 11.4827 5.625 11.4502 5.64062C11.4573 5.65064 11.4656 5.65982 11.4727 5.66992C11.725 5.97476 11.9146 6.29974 12.0371 6.64453C12.1596 6.98198 12.2226 7.34738 12.2227 7.7373C12.2227 8.4973 12.01 9.16254 11.585 9.72754C11.16 10.2875 10.5672 10.7227 9.80469 11.0352C9.0498 11.34 8.16745 11.4922 7.16016 11.4922C6.15266 11.4922 5.25992 11.3397 4.48242 11.0322L4.4873 11.0371C4.45693 11.0256 4.35554 11.14 4.33789 11.1602C4.29539 11.2077 4.26469 11.2628 4.24219 11.3203C4.15992 11.5451 4.1801 11.8271 4.34961 11.9971C4.43952 12.087 4.59728 12.1672 4.71973 12.1973C4.85723 12.2298 5.00551 12.2404 5.14551 12.2529C5.29534 12.2679 5.44783 12.2676 5.59766 12.2676H6.66797C8.52026 12.2675 10.525 12.0551 12.2598 12.8574C12.9173 13.1599 13.5096 13.6178 13.9121 14.2178C14.692 15.3801 14.5627 16.9521 13.708 18.0371C13.218 18.6571 12.4251 19.1375 11.3252 19.4775C10.2352 19.825 8.77715 20 6.95215 20C5.61481 20 4.42197 19.9047 3.37207 19.7197C2.33 19.5423 1.50765 19.2552 0.905273 18.8604C0.302848 18.4654 7.443e-05 17.9451 0 17.3027C0 16.6603 0.349885 16.1798 1.0498 15.8623C1.7573 15.5448 2.67285 15.3396 3.79785 15.2471V15.1348C3.79785 15.1373 3.03135 15.0306 2.97266 15.0254C2.51016 14.9779 2.02469 14.8451 1.61719 14.6201C1.24478 14.4151 0.9197 14.0972 0.782227 13.6973C0.664846 13.3573 0.689921 12.977 0.817383 12.6396C1.09241 11.9149 1.76755 11.4778 2.44238 11.1729C2.65988 11.0754 2.88535 10.9872 3.11035 10.9072C3.22273 10.8673 3.33532 10.8304 3.4502 10.793C3.49767 10.778 3.70469 10.7125 3.77734 10.6875C3.31991 10.415 2.93962 10.0877 2.63965 9.7002C2.20226 9.12782 1.9825 8.45772 1.98242 7.69043C1.98242 6.92293 2.19738 6.25219 2.62988 5.67969C3.05982 5.10733 3.66239 4.66501 4.42969 4.35254C5.20719 4.03504 6.13293 3.875 7.12793 3.875C8.12268 3.87504 8.99483 4.03037 9.74219 4.34277C10.0255 4.46005 10.2844 4.59513 10.5176 4.74902C10.4862 4.66784 10.4636 4.58449 10.4502 4.49707C10.4352 4.39233 10.4278 4.29259 10.4277 4.19531C10.4277 3.80031 10.5178 3.46965 10.6953 3.20215C10.8753 2.92734 11.123 2.72228 11.4453 2.58984C11.7727 2.44744 12.1526 2.37794 12.585 2.37793C12.7125 2.37793 12.8276 2.3802 12.9326 2.3877ZM5.71777 15.168C5.16039 15.173 4.72276 15.2351 4.40527 15.3525C4.05534 15.485 3.81037 15.6451 3.67285 15.8301C3.54285 16.0226 3.47754 16.2102 3.47754 16.3877C3.4776 16.705 3.62739 16.9502 3.92969 17.1201C4.23969 17.2901 4.6627 17.4105 5.2002 17.4805C5.73761 17.5504 6.35256 17.585 7.04492 17.585C8.36206 17.585 9.3121 17.4603 9.88965 17.2129C10.4771 16.9654 10.7705 16.6201 10.7705 16.1201C10.7705 15.6202 10.2502 15.1681 9.20801 15.168H5.71777ZM19.3174 4.50781C20.4924 4.50781 21.5074 4.74797 22.3574 5.23047C23.2149 5.71296 23.8779 6.38277 24.3379 7.24023C24.8003 8.09766 25.0303 9.09562 25.0303 10.2305V10.7051C25.0303 10.8375 25.0223 10.9528 25.0098 11.0527H23.5674V11.0547H16.6914C16.7492 11.3115 16.8348 11.5521 16.9502 11.7754C17.1802 12.2252 17.5051 12.5775 17.9199 12.835C18.3423 13.0849 18.8473 13.2128 19.4346 13.2129C20.0221 13.2129 20.5505 13.0799 20.9805 12.8174C21.4153 12.5474 21.7403 12.1872 21.9502 11.7373L24.8623 12.5898C24.4523 13.6073 23.7699 14.4096 22.8125 14.9971C21.8625 15.5846 20.73 15.8799 19.415 15.8799L19.418 15.8779C18.2105 15.8779 17.1623 15.64 16.2773 15.165C15.3999 14.6825 14.722 14.0198 14.2471 13.1748C13.7722 12.3224 13.5352 11.3399 13.5352 10.2227C13.5352 9.10524 13.7721 8.10995 14.2471 7.25C14.7221 6.385 15.3928 5.71297 16.2578 5.23047C17.1228 4.74799 18.1425 4.50783 19.3174 4.50781ZM68.3896 4.50781C69.5971 4.50781 70.6425 4.74797 71.54 5.23047C72.4449 5.71296 73.1447 6.3828 73.6396 7.24023C74.1346 8.09773 74.3828 9.09266 74.3828 10.2227C74.3828 11.3526 74.1346 12.3223 73.6396 13.1748C73.1446 14.0198 72.4473 14.685 71.5498 15.165C70.6523 15.64 69.5971 15.8779 68.3896 15.8779C67.1825 15.8779 66.1278 15.6399 65.2305 15.165C64.333 14.6825 63.6324 14.0198 63.1299 13.1748C62.635 12.3224 62.3877 11.34 62.3877 10.2227C62.3877 9.10526 62.635 8.10018 63.1299 7.24023C63.6324 6.38273 64.333 5.71297 65.2305 5.23047C66.1278 4.74807 67.1824 4.50786 68.3896 4.50781ZM38.1123 4.48535C39.1348 4.48535 40.0005 4.61965 40.708 4.88965C41.4204 5.15465 41.9631 5.57028 42.333 6.1377C42.7029 6.70515 42.8877 7.43808 42.8877 8.33789V13.1699H44.1953V15.6553H41.2324V15.6504C40.7976 15.6504 40.4601 15.5201 40.2227 15.2627C39.9927 14.9977 39.875 14.6273 39.875 14.1523V12.9746H39.7871C39.7096 13.4071 39.2502 14.4798 38.6104 15.0273C37.9704 15.5748 37.1172 15.8496 36.0547 15.8496H36.0498C34.9075 15.8496 34.0425 15.585 33.4551 15.0576C32.8676 14.5302 32.5723 13.7827 32.5723 12.8203C32.5723 11.8578 32.8676 11.1697 33.4551 10.6797C34.0426 10.1848 34.9654 9.82459 36.2178 9.59961L39.8721 8.91211V8.69727C39.872 8.31987 39.7922 8.01003 39.6348 7.76758C39.4773 7.51761 39.2449 7.33288 38.9424 7.21289C38.6449 7.09289 38.2848 7.03516 37.8623 7.03516C37.2674 7.03519 36.7822 7.15737 36.4072 7.40234C36.0373 7.63985 35.7971 8.02054 35.6846 8.54297L32.9121 8.11719C33.0321 7.34479 33.2929 6.6874 33.6953 6.14746C34.0978 5.60504 34.6628 5.19263 35.3877 4.91016C36.1151 4.6252 37.0225 4.48537 38.1123 4.48535ZM48.4727 5.45215H52.4551L52.4346 7.9375H48.4727V12.0928L48.4775 12.0947C48.4775 12.4522 48.54 12.72 48.665 12.8975C48.7975 13.075 48.9855 13.165 49.2305 13.165C49.4752 13.1649 49.6602 13.0749 49.7852 12.8975C49.9176 12.7125 49.9824 12.4447 49.9824 12.0947V11.0547H52.5674V12.0752C52.5674 12.855 52.4451 13.5273 52.2002 14.0947C51.9552 14.6572 51.5723 15.0901 51.0498 15.3926C50.5274 15.695 49.8551 15.8476 49.0303 15.8477C48.2053 15.8477 47.5275 15.6928 47 15.3828C46.4775 15.0728 46.0923 14.6376 45.8398 14.0752C45.5873 13.5127 45.4629 12.8522 45.4629 12.0947V7.94043H43.7676V5.45508H45.4629V1.87207H48.4727V5.45215ZM57.8203 5.45215H61.8027L61.7822 7.9375H57.8203V12.0928L57.8252 12.0947C57.8252 12.4522 57.8877 12.72 58.0127 12.8975C58.1451 13.0748 58.3324 13.1649 58.5771 13.165C58.8221 13.165 59.0078 13.075 59.1328 12.8975C59.2652 12.7125 59.3301 12.4446 59.3301 12.0947V11.0547H61.915V12.0752C61.915 12.855 61.7927 13.5273 61.5479 14.0947C61.3029 14.6572 60.92 15.0901 60.3975 15.3926C59.8751 15.695 59.2027 15.8476 58.3779 15.8477C57.5531 15.8477 56.8751 15.6927 56.3477 15.3828C55.8252 15.0728 55.44 14.6376 55.1875 14.0752C54.9375 13.5127 54.8096 12.8522 54.8096 12.0947V7.94043H53.1152V5.45508H54.8096V1.87207H57.8203V5.45215ZM30.2021 13.1729H31.8379V15.6475H25.4873V13.1729H27.1904V2.47461H25.4873V0H30.2021V13.1729ZM37.0898 10.9854C36.615 11.0779 36.2673 11.235 36.0498 11.46C35.8325 11.6774 35.7228 11.9673 35.7227 12.332C35.7227 12.7219 35.845 13.0196 36.0898 13.2246C36.3398 13.4296 36.6977 13.5322 37.1602 13.5322C37.6876 13.5322 38.1629 13.4002 38.5879 13.1377C39.0177 12.8727 39.3527 12.4976 39.5977 12.0078C39.8252 11.548 39.9448 11.0015 39.9609 10.3711L37.0898 10.9854ZM68.3896 7.16016C67.8223 7.16021 67.3197 7.29041 66.8848 7.54785C66.4549 7.80534 66.1199 8.16555 65.875 8.62793C65.6301 9.08285 65.5078 9.61304 65.5078 10.2129C65.5079 10.8127 65.6301 11.3479 65.875 11.7979C66.12 12.2477 66.4549 12.5977 66.8848 12.8477C67.3197 13.0926 67.8223 13.2148 68.3896 13.2148C68.957 13.2148 69.4573 13.0926 69.8848 12.8477C70.3197 12.5977 70.6603 12.2478 70.9053 11.7979C71.1502 11.3479 71.2724 10.8202 71.2725 10.2129C71.2725 9.60559 71.1501 9.08283 70.9053 8.62793C70.6603 8.16543 70.3198 7.80535 69.8848 7.54785C69.4548 7.29036 68.9571 7.16016 68.3896 7.16016ZM7.16992 6.06543C6.77254 6.06544 6.41497 6.1321 6.10254 6.26953C5.79763 6.39949 5.55542 6.58757 5.37793 6.83496C5.20051 7.07735 5.11043 7.35975 5.11035 7.68457C5.11035 8.00957 5.20043 8.29516 5.37793 8.53516C5.55541 8.77002 5.79766 8.95533 6.10254 9.09277C6.41498 9.22273 6.77001 9.2871 7.16992 9.28711C7.56988 9.28711 7.92256 9.22275 8.22754 9.09277C8.53246 8.95531 8.77239 8.77007 8.94238 8.53516C9.11988 8.29266 9.20996 8.01207 9.20996 7.68457C9.20988 7.35725 9.11981 7.07486 8.94238 6.83496C8.77239 6.59001 8.5325 6.39951 8.22754 6.26953C7.92008 6.13208 7.56735 6.06543 7.16992 6.06543ZM19.3652 7.04004C18.7929 7.04004 18.3251 7.17219 17.9102 7.43457C17.4952 7.69203 17.1704 8.06253 16.9404 8.54492C16.8609 8.71288 16.7956 8.89138 16.7441 9.08008H21.9629C21.9121 8.87366 21.8447 8.67889 21.7598 8.49707C21.5473 8.03484 21.2374 7.67765 20.8301 7.42773C20.4276 7.17026 19.9376 7.04007 19.3652 7.04004Z",
            fill: "black"
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Header({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed left-0 right-0 top-0 z-50",
        style: {
            background: 'var(--background-overlay-lightSecondary, rgba(255, 255, 255, 0.72))',
            backdropFilter: 'blur(27px)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto flex max-w-full items-center justify-between px-0",
            style: {
                width: '100%',
                maxWidth: '1437px',
                height: '52px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 shrink-0",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GelatoLogoSvg, {}, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex flex-col justify-center gap-[5.765px] self-stretch font-medium",
                            style: {
                                padding: '4.31px 3.47px 4.31px 4.46px',
                                borderRadius: 'var(--2, 4px)',
                                background: 'var(--kitkat-purple-100, #EAD9FF)',
                                fontSize: '10px',
                                lineHeight: 1.2,
                                color: 'var(--content-primary)'
                            },
                            children: "Beta"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 shrink-0 items-center justify-end gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex shrink-0 items-center justify-center transition-opacity hover:opacity-70",
                            style: {
                                width: 'var(--48, 48px)',
                                height: 'var(--48, 48px)'
                            },
                            "aria-label": "찜하기",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/bookmark.svg",
                                alt: "",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200 transition-opacity hover:opacity-70",
                            style: {
                                width: '40px',
                                height: '40px',
                                aspectRatio: '1/1',
                                gap: '10px'
                            },
                            "aria-label": "프로필",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/profile.svg",
                                alt: "",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/RecommendedProductItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecommendedProductItem",
    ()=>RecommendedProductItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const aspectRatioMap = {
    '1:1': '1',
    '2:1': '2',
    '1:2': '1 / 2'
};
function RecommendedProductItem({ brand, title, price, image, discountRate, aspectRatio = '1:1' }) {
    const displayPrice = price.toLocaleString('ko-KR');
    const discountedPrice = discountRate != null && discountRate > 0 ? Math.round(price * (100 - discountRate) / 100).toLocaleString('ko-KR') : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "recommended-product-item flex flex-col items-stretch w-full",
        style: {
            borderRadius: 'var(--8, 8px)',
            border: '1px solid var(--border-secondary, #E6E8EB)',
            background: 'var(--background-primary, #FFF)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-full items-center justify-center overflow-hidden border-b border-[var(--border-primary,#F4F5F7)]",
                style: {
                    aspectRatio: aspectRatioMap[aspectRatio],
                    borderTopLeftRadius: 'var(--8, 8px)',
                    borderTopRightRadius: 'var(--8, 8px)',
                    borderBottom: '1px solid var(--border-primary, #F4F5F7)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: title,
                        className: "h-full w-full object-cover object-center"
                    }, void 0, false, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "absolute flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-primary,#F4F5F7)] bg-[var(--background-overlay-lightPrimary,rgba(255,255,255,0.48))] p-2.5 transition-opacity hover:opacity-90",
                        style: {
                            right: '7.667px',
                            bottom: '12px',
                            width: 40,
                            height: 40,
                            padding: 10,
                            borderRadius: 'var(--100, 100px)'
                        },
                        "aria-label": "리파인",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/refine.svg",
                            alt: "",
                            width: 20,
                            height: 20,
                            className: "shrink-0 w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/RecommendedProductItem.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RecommendedProductItem.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start gap-0.5 self-stretch rounded-[4px]",
                style: {
                    padding: '10px 12px 14px 12px',
                    gap: 'var(--2, 2px)',
                    borderRadius: 'var(--4, 4px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-full overflow-hidden text-ellipsis self-stretch",
                        style: {
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
                            overflow: 'hidden',
                            color: 'var(--content-secondary, #3D4045)',
                            textOverflow: 'ellipsis',
                            fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                            fontSize: '11px',
                            fontWeight: 500,
                            lineHeight: '140%',
                            letterSpacing: '0.22px'
                        },
                        children: brand
                    }, void 0, false, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-full overflow-hidden text-ellipsis self-stretch",
                        style: {
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                            color: 'var(--content-tertiary, #7E8289)',
                            textOverflow: 'ellipsis',
                            fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                            fontSize: '13px',
                            fontWeight: 400,
                            lineHeight: '120%',
                            letterSpacing: '-0.13px'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-1",
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--4, 4px)'
                        },
                        children: [
                            discountRate != null && discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center",
                                style: {
                                    color: 'var(--content-discount, var(--red-500))',
                                    fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    lineHeight: '120%',
                                    letterSpacing: '-0.13px'
                                },
                                children: [
                                    discountRate,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RecommendedProductItem.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--content-primary, #111214)',
                                            fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            lineHeight: '120%',
                                            letterSpacing: '-0.13px'
                                        },
                                        children: discountedPrice ?? displayPrice
                                    }, void 0, false, {
                                        fileName: "[project]/components/RecommendedProductItem.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0",
                                        style: {
                                            width: 12,
                                            color: 'var(--content-secondary, #3D4045)',
                                            fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                            fontSize: '12px',
                                            fontWeight: 400,
                                            lineHeight: '120%',
                                            letterSpacing: '-0.12px'
                                        },
                                        children: "원"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RecommendedProductItem.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RecommendedProductItem.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RecommendedProductItem.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RecommendedProductItem.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GelatoApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RecommendedProductItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const baseProducts = [
    {
        id: 1,
        brand: 'NIKE',
        title: 'Oversized Hoodie',
        price: 89000,
        discountRate: 10,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
        aspectRatio: '1:2'
    },
    {
        id: 2,
        brand: 'LEVI\'S',
        title: 'Denim Jacket',
        price: 125000,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=350&fit=crop',
        aspectRatio: '2:1'
    },
    {
        id: 3,
        brand: 'CARHARTT',
        title: 'Cargo Pants',
        price: 68000,
        discountRate: 15,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=450&fit=crop',
        aspectRatio: '1:1'
    },
    {
        id: 4,
        brand: 'CONVERSE',
        title: 'White Sneakers',
        price: 145000,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=320&fit=crop',
        aspectRatio: '1:2'
    },
    {
        id: 5,
        brand: 'COACH',
        title: 'Leather Bag',
        price: 210000,
        discountRate: 20,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=480&fit=crop',
        aspectRatio: '1:1'
    },
    {
        id: 6,
        brand: 'UNIQLO',
        title: 'Striped Shirt',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=380&fit=crop',
        aspectRatio: '2:1'
    },
    {
        id: 7,
        brand: 'NEW ERA',
        title: 'Black Cap',
        price: 32000,
        discountRate: 5,
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
        aspectRatio: '1:1'
    },
    {
        id: 8,
        brand: 'COS',
        title: 'Wide Pants',
        price: 78000,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=520&fit=crop',
        aspectRatio: '1:2'
    },
    {
        id: 9,
        brand: '&OTHER STORIES',
        title: 'Knit Sweater',
        price: 95000,
        discountRate: 12,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=460&fit=crop',
        aspectRatio: '2:1'
    },
    {
        id: 10,
        brand: 'DR. MARTENS',
        title: 'Chelsea Boots',
        price: 168000,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=340&fit=crop',
        aspectRatio: '1:1'
    },
    {
        id: 11,
        brand: 'MAX MARA',
        title: 'Wool Coat',
        price: 285000,
        discountRate: 30,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=550&fit=crop',
        aspectRatio: '1:2'
    },
    {
        id: 12,
        brand: 'BASIC',
        title: 'Basic Tee',
        price: 29000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=360&fit=crop',
        aspectRatio: '1:1'
    }
];
const aspectRatios = [
    '1:1',
    '2:1',
    '1:2'
];
const mockProducts = (()=>{
    const list = [];
    for(let i = 0; i < 60; i++){
        const base = baseProducts[i % baseProducts.length];
        list.push({
            ...base,
            id: i + 1,
            title: base.title + (i >= baseProducts.length ? ` ${Math.floor(i / baseProducts.length) + 1}` : ''),
            price: base.price + i % 7 * 1000,
            aspectRatio: aspectRatios[i % aspectRatios.length]
        });
    }
    return list;
})();
const suggestionChips = [
    {
        text: '성수동 팝업 갈 때 힙한 느낌 내고 싶어',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 15,
            height: 15,
            viewBox: "0 0 15 15",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.7375 2.1625L9.99999 1.25C9.99999 1.91304 9.7366 2.54893 9.26776 3.01777C8.79892 3.48661 8.16304 3.75 7.49999 3.75C6.83695 3.75 6.20107 3.48661 5.73223 3.01777C5.26339 2.54893 4.99999 1.91304 4.99999 1.25L2.26249 2.1625C1.97961 2.25675 1.73973 2.44901 1.58615 2.70459C1.43258 2.96017 1.37542 3.26223 1.42499 3.55625L1.78749 5.725C1.81129 5.87182 1.88667 6.00534 2.00008 6.10157C2.1135 6.1978 2.25751 6.25043 2.40624 6.25H3.74999V12.5C3.74999 13.1875 4.31249 13.75 4.99999 13.75H9.99999C10.3315 13.75 10.6495 13.6183 10.8839 13.3839C11.1183 13.1495 11.25 12.8315 11.25 12.5V6.25H12.5937C12.7425 6.25043 12.8865 6.1978 12.9999 6.10157C13.1133 6.00534 13.1887 5.87182 13.2125 5.725L13.575 3.55625C13.6246 3.26223 13.5674 2.96017 13.4138 2.70459C13.2603 2.44901 13.0204 2.25675 12.7375 2.1625Z",
                stroke: "#9EA2A8",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        text: '감각적인 5만원대 집들이 선물 찾아줘',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 15,
            height: 15,
            viewBox: "0 0 15 15",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 5V13.125M7.5 5C7.27392 4.06838 6.88465 3.27188 6.38296 2.71444C5.88127 2.15701 5.29043 1.86446 4.6875 1.87497C4.2731 1.87497 3.87567 2.03959 3.58265 2.33261C3.28962 2.62564 3.125 3.02307 3.125 3.43747C3.125 3.85187 3.28962 4.2493 3.58265 4.54232C3.87567 4.83535 4.2731 4.99997 4.6875 4.99997M7.5 5C7.72608 4.06838 8.11535 3.27188 8.61704 2.71444C9.11873 2.15701 9.70957 1.86446 10.3125 1.87497C10.7269 1.87497 11.1243 2.03959 11.4174 2.33261C11.7104 2.62564 11.875 3.02307 11.875 3.43747C11.875 3.85187 11.7104 4.2493 11.4174 4.54232C11.1243 4.83535 10.7269 4.99997 10.3125 4.99997M11.875 7.5V11.875C11.875 12.2065 11.7433 12.5245 11.5089 12.7589C11.2745 12.9933 10.9565 13.125 10.625 13.125H4.375C4.04348 13.125 3.72554 12.9933 3.49112 12.7589C3.2567 12.5245 3.125 12.2065 3.125 11.875V7.5M2.5 5H12.5C12.8452 5 13.125 5.27982 13.125 5.625V6.875C13.125 7.22018 12.8452 7.5 12.5 7.5H2.5C2.15482 7.5 1.875 7.22018 1.875 6.875V5.625C1.875 5.27982 2.15482 5 2.5 5Z",
                stroke: "#9EA2A8",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const chatMessages = [
    {
        type: 'user',
        content: '성수동 갈 때 입기 좋은 힙한 옷'
    },
    {
        type: 'ai',
        content: '성수동 스타일을 위해 트렌디한 캐주얼 아이템들을 추천드립니다. 미니멀하면서도 세련된 디자인의 옷들을 선별했어요.'
    }
];
const page0Variants = {
    active: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    inactive: {
        y: '-10vh',
        scale: 0.95,
        opacity: 0.5,
        transition: {
            duration: 0.5
        }
    }
};
/* 하단 패널이 상단에 있을 때 40px만 보이도록 (스크롤 힌트) */ const PAGE1_PEEK_PX = 40;
const GNB_HEIGHT_X2 = 52 * 2 // 104
;
const page1Variants = {
    active: {
        y: '0%',
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 20
        }
    },
    inactive: {
        y: `calc(100vh - ${GNB_HEIGHT_X2 + PAGE1_PEEK_PX}px)`,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 20
        }
    }
};
const WHEEL_THROTTLE_MS = 1000;
function GelatoApp() {
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0) // 0: 검색, 1: 추천상품
    ;
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchMode, setIsSearchMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const productListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const throttleTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(page);
    const isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isAnimating);
    pageRef.current = page;
    isAnimatingRef.current = isAnimating;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = rootRef.current;
        if (!container) return;
        const handlePageChange = (nextPage)=>{
            setIsAnimating(true);
            setPage(nextPage);
            if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
            throttleTimerRef.current = setTimeout(()=>{
                setIsAnimating(false);
                throttleTimerRef.current = null;
            }, WHEEL_THROTTLE_MS);
        };
        const handleWheel = (e)=>{
            const currentPage = pageRef.current;
            const animating = isAnimatingRef.current;
            if (animating) {
                e.preventDefault();
                return;
            }
            const { deltaY } = e;
            const scrollTop = productListRef.current ? productListRef.current.scrollTop : 0;
            if (currentPage === 0) {
                if (deltaY > 0) {
                    e.preventDefault();
                    handlePageChange(1);
                }
                return;
            }
            if (currentPage === 1) {
                if (deltaY < 0 && scrollTop <= 0) {
                    e.preventDefault();
                    handlePageChange(0);
                }
                return;
            }
        };
        container.addEventListener('wheel', handleWheel, {
            passive: false
        });
        return ()=>{
            container.removeEventListener('wheel', handleWheel);
            if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
        };
    }, []);
    const handleChipClick = ()=>setIsSearchMode(true);
    const handleSearchChange = (e)=>{
        const value = e.target.value;
        setSearchQuery(value);
        if (value.trim()) setIsSearchMode(true);
    };
    const handleBackToHome = ()=>{
        setIsSearchMode(false);
        setSearchQuery('');
    };
    const GNB_HEIGHT = 52;
    const miniSearchStripOpacity = page === 1 ? 1 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen overflow-hidden",
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed left-0 right-0 z-40 box-border w-full",
                style: {
                    top: 53,
                    display: 'flex',
                    padding: '4px 16px 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                    background: 'var(--background-overlay-lightSecondary, rgba(255, 255, 255, 0.72))',
                    backdropFilter: 'blur(27px)',
                    pointerEvents: miniSearchStripOpacity > 0 ? 'auto' : 'none'
                },
                initial: false,
                animate: {
                    opacity: miniSearchStripOpacity,
                    y: miniSearchStripOpacity ? 0 : -12
                },
                transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full max-w-[560px] min-w-0 shrink-0 items-center justify-center gap-[var(--4,4px)]",
                    style: {
                        padding: '12px 24px',
                        borderRadius: 999,
                        border: '1px solid var(--neutral-200, #E6E8EB)',
                        background: 'var(--common-white, #FFF)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 w-5 h-5 flex items-center justify-center",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 20,
                                height: 20,
                                viewBox: "0 0 20 20",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",
                                    stroke: "#9EA2A8",
                                    strokeWidth: "1.4",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "원하는 옷의 스타일을 설명해보세요...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                                    e.preventDefault();
                                    setIsSearchMode(true);
                                }
                            },
                            className: "min-w-0 flex-1 bg-transparent border-0 outline-none focus:ring-0 placeholder-[var(--content-placeholder,#9EA2A8)]",
                            style: {
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '140%',
                                letterSpacing: '-0.14px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !isSearchMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full overflow-hidden",
                    style: {
                        height: '100vh'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 z-0 flex flex-col items-center justify-center pt-[52px]",
                            style: {
                                paddingLeft: 40,
                                paddingRight: 40,
                                gap: 40,
                                minHeight: '100dvh',
                                boxSizing: 'border-box'
                            },
                            initial: false,
                            variants: page0Variants,
                            animate: page === 0 ? 'active' : 'inactive',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo_nike.svg",
                                    alt: "로고",
                                    width: 125.014,
                                    height: 44.438,
                                    style: {
                                        objectFit: 'contain',
                                        filter: 'brightness(0)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center items-center self-stretch",
                                    style: {
                                        gap: 'var(--32, 32px)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full relative",
                                            style: {
                                                maxWidth: 640
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-shadow-layer-1 pointer-events-none absolute inset-0 rounded-[20px]",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-shadow-layer-2 pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: '0 -8px 60px 0 rgba(198, 151, 255, 0.20)'
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-shadow-layer-3 pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: '0 -8px 100px 0 rgba(198, 151, 255, 0.12)'
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: '0 -8px 250px 0 rgba(234, 217, 255, 0.80)'
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex flex-col items-stretch w-full",
                                                    style: {
                                                        padding: 16,
                                                        gap: 4,
                                                        borderRadius: 20,
                                                        background: 'var(--common-white, #FFF)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-[10px] w-full",
                                                            style: {
                                                                minHeight: 36,
                                                                padding: '12px 0'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "shrink-0",
                                                                    style: {
                                                                        width: 20,
                                                                        height: 20
                                                                    },
                                                                    "aria-hidden": true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: 20,
                                                                        height: 20,
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",
                                                                            stroke: "#9EA2A8",
                                                                            strokeWidth: "1.4",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 342,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "원하는 옷의 스타일을 설명해보세요...",
                                                                    value: searchQuery,
                                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                                    onKeyDown: (e)=>{
                                                                        if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                                                                            e.preventDefault();
                                                                            setIsSearchMode(true);
                                                                        }
                                                                    },
                                                                    className: "flex-1 min-w-0 bg-transparent border-0 outline-none placeholder:text-[var(--content-placeholder,#9EA2A8)]",
                                                                    style: {
                                                                        fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                                        fontSize: 14,
                                                                        fontWeight: 400,
                                                                        lineHeight: '140%',
                                                                        letterSpacing: -0.14,
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        display: '-webkit-box',
                                                                        WebkitBoxOrient: 'vertical',
                                                                        WebkitLineClamp: 1
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "flex justify-center items-center shrink-0 rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--button-primaryActivated)]",
                                                                style: {
                                                                    width: 24,
                                                                    height: 24,
                                                                    background: 'var(--button-primaryActivated, #111214)'
                                                                },
                                                                onClick: ()=>searchQuery.trim() && setIsSearchMode(true),
                                                                "aria-label": "검색",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    size: 14,
                                                                    strokeWidth: 2
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            style: {
                                                gap: 'var(--4, 4px)'
                                            },
                                            children: suggestionChips.map((chip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    type: "button",
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    onClick: handleChipClick,
                                                    className: "flex justify-center items-center shrink-0 rounded-full border bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--content-primary)]",
                                                    style: {
                                                        paddingTop: 4,
                                                        paddingBottom: 4,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        gap: 'var(--4, 4px)',
                                                        borderColor: 'var(--neutral-200, #E6E8EB)',
                                                        borderRadius: 'var(--100, 100px)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shrink-0 w-[15px] h-[15px] aspect-square flex items-center justify-center",
                                                            "aria-hidden": true,
                                                            children: chip.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "whitespace-nowrap",
                                                            style: {
                                                                color: 'var(--content-primary, #111214)',
                                                                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                                fontSize: 12,
                                                                fontWeight: 400,
                                                                lineHeight: '120%',
                                                                letterSpacing: -0.12
                                                            },
                                                            children: chip.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute left-0 right-0 bottom-0 z-30 flex flex-col overflow-hidden bg-background-primary shadow-2xl pt-4 pb-4 px-0",
                            style: {
                                top: `${GNB_HEIGHT * 2}px`,
                                pointerEvents: page === 0 ? 'none' : 'auto'
                            },
                            initial: false,
                            variants: page1Variants,
                            animate: page === 0 ? 'inactive' : 'active',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: productListRef,
                                className: "flex-1 min-h-0 min-w-0 w-full overflow-y-auto overflow-x-hidden pb-8",
                                style: {
                                    overscrollBehavior: 'contain'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "recommended-products-grid",
                                    children: mockProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 12
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.35,
                                                delay: index * 0.04,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ]
                                            },
                                            className: "recommended-products-grid-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecommendedProductItem"], {
                                                id: product.id,
                                                brand: product.brand,
                                                title: product.title,
                                                price: product.price,
                                                image: product.image,
                                                discountRate: product.discountRate,
                                                aspectRatio: product.aspectRatio
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 23
                                            }, this)
                                        }, product.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 447,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this)
                    ]
                }, "fullpage", true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "flex h-screen overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: -50,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "w-[35%] border-r border-border-secondary bg-background-primary flex flex-col min-h-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-border-secondary p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "text",
                                        placeholder: "Follow-up question...",
                                        value: searchQuery,
                                        onChange: handleSearchChange,
                                        className: "rounded-lg border border-border-primary bg-background-input-normal px-4 py-2.5 text-sm focus-visible:ring-1 focus-visible:ring-content-highlighted"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-4 overflow-y-auto p-4 min-h-0",
                                    children: chatMessages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.2 + index * 0.1
                                            },
                                            className: `flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.type === 'user' ? 'bg-button-highlightOutline text-button-highlight' : 'bg-background-tertiary text-content-primary'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed",
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 509,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-border-secondary p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBackToHome,
                                        className: "w-full rounded-lg border border-button-defaultOutlined bg-button-default px-4 py-2.5 text-sm font-medium text-content-secondary transition-colors hover:bg-button-hover",
                                        children: "Back to Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 485,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: 50,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "w-[65%] overflow-y-auto min-h-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-6 text-xl font-semibold text-content-primary",
                                        children: "Search Results"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 537,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4",
                                        children: mockProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.95
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    delay: index * 0.03
                                                },
                                                className: "min-w-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecommendedProductItem"], {
                                                    id: product.id,
                                                    brand: product.brand,
                                                    title: product.title,
                                                    price: product.price,
                                                    image: product.image,
                                                    discountRate: product.discountRate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 23
                                                }, this)
                                            }, product.id, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 536,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this)
                    ]
                }, "search", true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 477,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_93138c99._.js.map