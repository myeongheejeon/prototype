(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
const GelatoLogoSvg = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = GelatoLogoSvg;
function Header({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed left-0 right-0 top-0 z-50",
        style: {
            background: 'var(--background-overlay-lightSecondary, rgba(255, 255, 255, 0.72))',
            backdropFilter: 'blur(27px)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto flex max-w-full items-center justify-between",
            style: {
                width: '100%',
                maxWidth: '1437px',
                height: '52px',
                paddingLeft: 24,
                paddingRight: 24
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 shrink-0",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GelatoLogoSvg, {}, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 shrink-0 items-center justify-end gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex shrink-0 items-center justify-center transition-opacity hover:opacity-70",
                            style: {
                                width: 'var(--48, 48px)',
                                height: 'var(--48, 48px)'
                            },
                            "aria-label": "찜하기",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/bookmark.svg",
                                alt: "",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200 transition-opacity hover:opacity-70",
                            style: {
                                width: '40px',
                                height: '40px',
                                aspectRatio: '1/1',
                                gap: '10px'
                            },
                            "aria-label": "프로필",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/profile.svg",
                                alt: "",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 65,
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
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "GelatoLogoSvg");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RecommendedProductItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecommendedProductItem",
    ()=>RecommendedProductItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
// basePath를 포함한 이미지 경로 처리 함수
const getImagePath = (path)=>{
    const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return `${basePath}${path}`;
};
const aspectRatioMap = {
    '1:1': '1',
    '2:1': '2',
    '1:2': '1 / 2'
};
function RecommendedProductItem({ brand, title, price, image, discountRate, aspectRatio = '1:1' }) {
    const displayPrice = price.toLocaleString('ko-KR');
    const discountedPrice = discountRate != null && discountRate > 0 ? Math.round(price * (100 - discountRate) / 100).toLocaleString('ko-KR') : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "recommended-product-item flex flex-col items-stretch w-full",
        style: {
            borderRadius: 'var(--8, 8px)',
            border: '1px solid var(--border-secondary, #E6E8EB)',
            background: 'var(--background-primary, #FFF)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-full items-center justify-center overflow-hidden border-b border-[var(--border-primary,#F4F5F7)]",
                style: {
                    aspectRatio: aspectRatioMap[aspectRatio],
                    borderTopLeftRadius: 'var(--8, 8px)',
                    borderTopRightRadius: 'var(--8, 8px)',
                    borderBottom: '1px solid var(--border-primary, #F4F5F7)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: getImagePath(image),
                        alt: title,
                        className: "h-full w-full object-cover object-center"
                    }, void 0, false, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: getImagePath("/refine.svg"),
                            alt: "",
                            width: 20,
                            height: 20,
                            className: "shrink-0 w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/RecommendedProductItem.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RecommendedProductItem.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start gap-0.5 self-stretch rounded-[4px]",
                style: {
                    padding: '10px 12px 14px 12px',
                    gap: 'var(--2, 2px)',
                    borderRadius: 'var(--4, 4px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-1",
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--4, 4px)'
                        },
                        children: [
                            discountRate != null && discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RecommendedProductItem.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RecommendedProductItem.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RecommendedProductItem.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RecommendedProductItem.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = RecommendedProductItem;
var _c;
__turbopack_context__.k.register(_c, "RecommendedProductItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GelatoApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RecommendedProductItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// basePath를 포함한 이미지 경로 처리 함수
const getImagePath = (path)=>{
    const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return `${basePath}${path}`;
};
const baseProducts = [
    {
        id: 1,
        brand: 'NIKE',
        title: 'Product 1',
        price: 89000,
        discountRate: 10,
        image: '/product1.png',
        aspectRatio: '1:1'
    },
    {
        id: 2,
        brand: 'NIKE',
        title: 'Product 2',
        price: 125000,
        image: '/product2.png',
        aspectRatio: '1:1'
    },
    {
        id: 3,
        brand: 'NIKE',
        title: 'Product 3',
        price: 68000,
        discountRate: 15,
        image: '/product3.png',
        aspectRatio: '1:1'
    },
    {
        id: 4,
        brand: 'NIKE',
        title: 'Product 4',
        price: 145000,
        image: '/product4.png',
        aspectRatio: '1:1'
    },
    {
        id: 5,
        brand: 'NIKE',
        title: 'Product 5',
        price: 95000,
        discountRate: 12,
        image: '/product5.png',
        aspectRatio: '1:1'
    },
    {
        id: 6,
        brand: 'NIKE',
        title: 'Product 6',
        price: 78000,
        image: '/product6.png',
        aspectRatio: '1:1'
    },
    {
        id: 7,
        brand: 'NIKE',
        title: 'Product 7',
        price: 110000,
        discountRate: 5,
        image: '/product7.png',
        aspectRatio: '1:1'
    },
    {
        id: 8,
        brand: 'NIKE',
        title: 'Product 8',
        price: 135000,
        image: '/product8.png',
        aspectRatio: '1:1'
    },
    {
        id: 9,
        brand: 'NIKE',
        title: 'Product 9',
        price: 99000,
        discountRate: 20,
        image: '/product9.png',
        aspectRatio: '1:1'
    },
    {
        id: 10,
        brand: 'NIKE',
        title: 'Product 10',
        price: 120000,
        image: '/product10.png',
        aspectRatio: '1:1'
    }
];
// Hydration 일치를 위해 시드 기반 의사 난수 사용 (서버/클라이언트 동일 결과)
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
const mockProducts = (()=>{
    const list = [];
    const images = baseProducts.map((p)=>p.image);
    let seed = 12345;
    // 이미지 배열을 시드 기반으로 섞기 (서버/클라이언트 동일)
    const shuffledImages = [
        ...images
    ];
    for(let i = shuffledImages.length - 1; i > 0; i--){
        const j = Math.floor(seededRandom(seed++) * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [
            shuffledImages[j],
            shuffledImages[i]
        ];
    }
    // 60개 상품 생성 시 이미지를 배치
    for(let i = 0; i < 60; i++){
        const baseIndex = i % baseProducts.length;
        const base = baseProducts[baseIndex];
        const imageIndex = i % shuffledImages.length;
        list.push({
            ...base,
            id: i + 1,
            title: base.title + (i >= baseProducts.length ? ` ${Math.floor(i / baseProducts.length) + 1}` : ''),
            price: base.price + i % 7 * 1000,
            image: shuffledImages[imageIndex],
            aspectRatio: '1:1'
        });
    }
    // 최종 리스트도 시드 기반으로 섞기 (서버/클라이언트 동일)
    for(let i = list.length - 1; i > 0; i--){
        const j = Math.floor(seededRandom(seed++) * (i + 1));
        [list[i], list[j]] = [
            list[j],
            list[i]
        ];
    }
    return list;
})();
const placeholders = [
    '러닝할 때 무릎 안다칠 러닝화 보여줘.',
    '겨울에 러닝할 때 입기 좋은 자켓 보여줘.',
    '재생소재 패딩 보여줘',
    '성수동에 입고 가고 싶은 모자 보여줘.'
];
// 섹션 타이틀 클릭 시 축약형 검색창 위에 뜨는 제안 질문 칩
const suggestionQuestionChips = [
    '10만원 이하 상품 보여줘',
    '20대 친구 선물용으로 보여줘'
];
const suggestionChips = [
    {
        text: '성수동 팝업 갈 때 힙한 느낌 내고 싶어',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 15,
            height: 15,
            viewBox: "0 0 15 15",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.7375 2.1625L9.99999 1.25C9.99999 1.91304 9.7366 2.54893 9.26776 3.01777C8.79892 3.48661 8.16304 3.75 7.49999 3.75C6.83695 3.75 6.20107 3.48661 5.73223 3.01777C5.26339 2.54893 4.99999 1.91304 4.99999 1.25L2.26249 2.1625C1.97961 2.25675 1.73973 2.44901 1.58615 2.70459C1.43258 2.96017 1.37542 3.26223 1.42499 3.55625L1.78749 5.725C1.81129 5.87182 1.88667 6.00534 2.00008 6.10157C2.1135 6.1978 2.25751 6.25043 2.40624 6.25H3.74999V12.5C3.74999 13.1875 4.31249 13.75 4.99999 13.75H9.99999C10.3315 13.75 10.6495 13.6183 10.8839 13.3839C11.1183 13.1495 11.25 12.8315 11.25 12.5V6.25H12.5937C12.7425 6.25043 12.8865 6.1978 12.9999 6.10157C13.1133 6.00534 13.1887 5.87182 13.2125 5.725L13.575 3.55625C13.6246 3.26223 13.5674 2.96017 13.4138 2.70459C13.2603 2.44901 13.0204 2.25675 12.7375 2.1625Z",
                stroke: "#9EA2A8",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        text: '감각적인 5만원대 집들이 선물 찾아줘',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 15,
            height: 15,
            viewBox: "0 0 15 15",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 5V13.125M7.5 5C7.27392 4.06838 6.88465 3.27188 6.38296 2.71444C5.88127 2.15701 5.29043 1.86446 4.6875 1.87497C4.2731 1.87497 3.87567 2.03959 3.58265 2.33261C3.28962 2.62564 3.125 3.02307 3.125 3.43747C3.125 3.85187 3.28962 4.2493 3.58265 4.54232C3.87567 4.83535 4.2731 4.99997 4.6875 4.99997M7.5 5C7.72608 4.06838 8.11535 3.27188 8.61704 2.71444C9.11873 2.15701 9.70957 1.86446 10.3125 1.87497C10.7269 1.87497 11.1243 2.03959 11.4174 2.33261C11.7104 2.62564 11.875 3.02307 11.875 3.43747C11.875 3.85187 11.7104 4.2493 11.4174 4.54232C11.1243 4.83535 10.7269 4.99997 10.3125 4.99997M11.875 7.5V11.875C11.875 12.2065 11.7433 12.5245 11.5089 12.7589C11.2745 12.9933 10.9565 13.125 10.625 13.125H4.375C4.04348 13.125 3.72554 12.9933 3.49112 12.7589C3.2567 12.5245 3.125 12.2065 3.125 11.875V7.5M2.5 5H12.5C12.8452 5 13.125 5.27982 13.125 5.625V6.875C13.125 7.22018 12.8452 7.5 12.5 7.5H2.5C2.15482 7.5 1.875 7.22018 1.875 6.875V5.625C1.875 5.27982 2.15482 5 2.5 5Z",
                stroke: "#9EA2A8",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 112,
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
const GNB_HEIGHT = 52;
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
        y: '100%',
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 20
        }
    }
};
const WHEEL_THROTTLE_MS = 1000;
// 빠른 스타트 아이템 데이터
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
function GelatoApp() {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 0: 검색, 1: 추천상품
    ;
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchMode, setIsSearchMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedQuickStartItem, setSelectedQuickStartItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSectionChip, setSelectedSectionChip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [placeholderIndex, setPlaceholderIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const productListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const throttleTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(page);
    const isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isAnimating);
    pageRef.current = page;
    isAnimatingRef.current = isAnimating;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GelatoApp.useEffect": ()=>{
            setMounted(true);
        }
    }["GelatoApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GelatoApp.useEffect": ()=>{
            const container = rootRef.current;
            if (!container) return;
            const handlePageChange = {
                "GelatoApp.useEffect.handlePageChange": (nextPage)=>{
                    setIsAnimating(true);
                    setPage(nextPage);
                    if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
                    throttleTimerRef.current = setTimeout({
                        "GelatoApp.useEffect.handlePageChange": ()=>{
                            setIsAnimating(false);
                            throttleTimerRef.current = null;
                        }
                    }["GelatoApp.useEffect.handlePageChange"], WHEEL_THROTTLE_MS);
                }
            }["GelatoApp.useEffect.handlePageChange"];
            const handleWheel = {
                "GelatoApp.useEffect.handleWheel": (e)=>{
                    const currentPage = pageRef.current;
                    const animating = isAnimatingRef.current;
                    if (animating) {
                        e.preventDefault();
                        return;
                    }
                    const { deltaY } = e;
                    const scrollTop = productListRef.current ? productListRef.current.scrollTop : 0;
                    const scrollHeight = productListRef.current ? productListRef.current.scrollHeight : 0;
                    const clientHeight = productListRef.current ? productListRef.current.clientHeight : 0;
                    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
                    const isAtTop = scrollTop <= 0;
                    // wheel 이벤트가 productListRef 내부에서 발생하는지 확인
                    const target = e.target;
                    const isInsideProductList = productListRef.current?.contains(target) || false;
                    if (currentPage === 0) {
                        if (deltaY > 0) {
                            e.preventDefault();
                            handlePageChange(1);
                        }
                        return;
                    }
                    if (currentPage === 1) {
                        // productListRef 내부에서 스크롤하는 경우
                        if (isInsideProductList) {
                            // 위로 스크롤하고 맨 위에 있을 때만 페이지 전환
                            if (deltaY < 0 && isAtTop) {
                                e.preventDefault();
                                handlePageChange(0);
                            }
                            // 아래로 스크롤하고 맨 아래에 있을 때는 아무것도 하지 않음 (스크롤 허용)
                            return;
                        }
                        // productListRef 외부에서 스크롤하는 경우
                        if (deltaY < 0 && isAtTop) {
                            e.preventDefault();
                            handlePageChange(0);
                        }
                        // 아래로 스크롤할 때는 preventDefault 하지 않음
                        return;
                    }
                }
            }["GelatoApp.useEffect.handleWheel"];
            container.addEventListener('wheel', handleWheel, {
                passive: false
            });
            return ({
                "GelatoApp.useEffect": ()=>{
                    container.removeEventListener('wheel', handleWheel);
                    if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
                }
            })["GelatoApp.useEffect"];
        }
    }["GelatoApp.useEffect"], []);
    // 플레이스홀더 자동 변경
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GelatoApp.useEffect": ()=>{
            const interval = setInterval({
                "GelatoApp.useEffect.interval": ()=>{
                    setPlaceholderIndex({
                        "GelatoApp.useEffect.interval": (prev)=>(prev + 1) % placeholders.length
                    }["GelatoApp.useEffect.interval"]);
                }
            }["GelatoApp.useEffect.interval"], 5000);
            return ({
                "GelatoApp.useEffect": ()=>clearInterval(interval)
            })["GelatoApp.useEffect"];
        }
    }["GelatoApp.useEffect"], []);
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
    const handleQuickStartItemClick = (itemId)=>{
        if (selectedQuickStartItem === itemId) {
            // 이미 선택된 아이템을 클릭하면 해제
            setSelectedQuickStartItem(null);
        } else {
            setSelectedQuickStartItem(itemId);
        }
    };
    const handleChipRemove = ()=>{
        setSelectedQuickStartItem(null);
    };
    const handleSectionChipRemove = ()=>{
        setSelectedSectionChip(null);
    };
    // Hex 색상을 rgba로 변환하는 헬퍼 함수
    const hexToRgba = (hex, alpha)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const selectedItem = selectedQuickStartItem ? quickStartItems.find((item)=>item.id === selectedQuickStartItem) : null;
    const baseShadowColor = selectedItem ? selectedItem.color : '#B043FF' // 기본 보라색
    ;
    // 쉐도우 색상 (낮은 opacity)
    const shadowColor1 = selectedItem ? hexToRgba(selectedItem.color, 0.04) : 'rgba(176, 67, 255, 0.08)';
    const shadowColor2 = selectedItem ? hexToRgba(selectedItem.color, 0.10) : 'rgba(198, 151, 255, 0.20)';
    const shadowColor3 = selectedItem ? hexToRgba(selectedItem.color, 0.06) : 'rgba(198, 151, 255, 0.12)';
    const shadowColor4 = selectedItem ? hexToRgba(selectedItem.color, 0.40) : 'rgba(234, 217, 255, 0.80)';
    const miniSearchStripOpacity = page === 1 ? 1 : 0;
    const inspirationChipOpacity = page === 0 ? 1 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen overflow-hidden",
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            mounted && typeof document !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed left-0 right-0 z-40 box-border w-full",
                style: {
                    bottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                    pointerEvents: miniSearchStripOpacity > 0 ? 'auto' : 'none',
                    overflow: 'visible'
                },
                initial: false,
                animate: {
                    opacity: miniSearchStripOpacity,
                    y: miniSearchStripOpacity ? 0 : 20,
                    scale: miniSearchStripOpacity ? 1 : 0.95
                },
                transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: selectedSectionChip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-nowrap justify-start min-[640px]:justify-center gap-2 w-full max-w-[560px] overflow-x-auto",
                            style: {
                                padding: '4px 0',
                                minHeight: 40,
                                overflowY: 'visible'
                            },
                            initial: {
                                opacity: 0,
                                y: 12,
                                scale: 0.85
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 8,
                                scale: 0.9
                            },
                            transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 25
                            },
                            children: suggestionQuestionChips.map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    type: "button",
                                    initial: {
                                        opacity: 0,
                                        y: 8,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    transition: {
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 25,
                                        delay: i * 0.06
                                    },
                                    onClick: ()=>setSearchQuery(text),
                                    className: "shrink-0",
                                    style: {
                                        padding: '8px 16px',
                                        borderRadius: 999,
                                        border: '1px solid var(--neutral-200, #E6E8EB)',
                                        background: 'var(--common-white, #FFF)',
                                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                                        cursor: 'pointer',
                                        fontFamily: '"Noto Sans KR", sans-serif',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        lineHeight: '140%',
                                        color: 'var(--content-primary, #111214)'
                                    },
                                    children: text
                                }, text, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 368,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 366,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full max-w-[560px] min-w-0 shrink-0 items-center justify-center",
                        style: {
                            padding: '12px 24px',
                            borderRadius: 999,
                            border: '1px solid var(--neutral-200, #E6E8EB)',
                            background: 'var(--common-white, #FFF)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                            gap: 8
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
                                        strokeWidth: "1.4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            selectedSectionChip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0 rounded-full",
                                style: {
                                    background: '#111214',
                                    padding: '4px 8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#FFF',
                                            fontFamily: '"Noto Sans KR", sans-serif',
                                            fontSize: 12,
                                            fontWeight: 400,
                                            lineHeight: '120%'
                                        },
                                        children: selectedSectionChip
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleSectionChipRemove();
                                        },
                                        className: "flex items-center justify-center",
                                        style: {
                                            width: 14,
                                            height: 14,
                                            color: '#FFF'
                                        },
                                        "aria-label": "칩 삭제",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: 14,
                                            height: 14,
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5",
                                                stroke: "currentColor",
                                                strokeWidth: "1.4",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 relative",
                                style: {
                                    minHeight: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                                                e.preventDefault();
                                                setIsSearchMode(true);
                                            }
                                        },
                                        className: "w-full bg-transparent border-0 outline-none focus:ring-0",
                                        style: {
                                            fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '140%',
                                            letterSpacing: '-0.14px',
                                            color: searchQuery ? 'var(--content-primary, #111214)' : 'transparent'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-[640px]:hidden",
                                                style: {
                                                    color: 'var(--content-placeholder, #9EA2A8)',
                                                    fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '140%',
                                                    letterSpacing: '-0.14px'
                                                },
                                                children: "입력하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden min-[640px]:inline",
                                                children: selectedSectionChip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--content-placeholder, #9EA2A8)',
                                                        fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                        fontSize: 14,
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        lineHeight: '140%',
                                                        letterSpacing: '-0.14px'
                                                    },
                                                    children: "찾고 싶은걸 입력해 보세요."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    mode: "wait",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: -10
                                                        },
                                                        transition: {
                                                            duration: 0.3
                                                        },
                                                        style: {
                                                            color: 'var(--content-placeholder, #9EA2A8)',
                                                            fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                            fontSize: 14,
                                                            fontStyle: 'normal',
                                                            fontWeight: 400,
                                                            lineHeight: '140%',
                                                            letterSpacing: '-0.14px'
                                                        },
                                                        children: placeholders[placeholderIndex]
                                                    }, placeholderIndex, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 344,
                columnNumber: 11
            }, this), document.body),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed left-0 right-0 z-40 box-border w-full",
                style: {
                    bottom: 20,
                    display: 'flex',
                    padding: '0 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: inspirationChipOpacity > 0 ? 'auto' : 'none'
                },
                initial: false,
                animate: {
                    opacity: inspirationChipOpacity,
                    y: inspirationChipOpacity ? 0 : 20,
                    scale: inspirationChipOpacity ? 1 : 0.95
                },
                transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 shrink-0",
                    style: {
                        padding: '10px 20px',
                        borderRadius: 999,
                        border: '1px solid var(--neutral-200, #E6E8EB)',
                        background: 'var(--common-white, #FFF)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                        cursor: 'pointer'
                    },
                    onClick: ()=>{
                        if (page === 0) {
                            setIsAnimating(true);
                            setPage(1);
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '140%',
                                letterSpacing: '-0.14px',
                                color: 'var(--content-primary, #111214)'
                            },
                            children: "더 많은 영감 보기"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    0,
                                    4,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            },
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 16,
                                height: 16,
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 6L8 10L12 6",
                                    stroke: "#111214",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 621,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 614,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 603,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 573,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !isSearchMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full overflow-hidden",
                    style: {
                        height: '100vh'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 z-0 flex flex-col items-center justify-center pt-[52px]",
                            style: {
                                paddingLeft: 24,
                                paddingRight: 24,
                                gap: 40,
                                minHeight: '100dvh',
                                boxSizing: 'border-box'
                            },
                            initial: false,
                            variants: page0Variants,
                            animate: page === 0 ? 'active' : 'inactive',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: getImagePath("/logo_nike.svg"),
                                    alt: "로고",
                                    width: 125.014,
                                    height: 44.438,
                                    style: {
                                        objectFit: 'contain',
                                        filter: 'brightness(0)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center items-center self-stretch",
                                    style: {
                                        gap: 'var(--32, 32px)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full relative",
                                            style: {
                                                maxWidth: 640
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-shadow-layer-1 pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: `0 -1px 18px 0 ${shadowColor1}`,
                                                        animation: selectedItem ? 'none' : undefined
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-shadow-layer-2 pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: `0 -8px 60px 0 ${shadowColor2}`,
                                                        animation: selectedItem ? 'none' : undefined
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-shadow-layer-3 pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: `0 -8px 100px 0 ${shadowColor3}`,
                                                        animation: selectedItem ? 'none' : undefined
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-0 rounded-[20px]",
                                                    style: {
                                                        boxShadow: `0 -8px 250px 0 ${shadowColor4}`,
                                                        animation: selectedItem ? 'none' : undefined
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex flex-col items-stretch w-full",
                                                    style: {
                                                        padding: 16,
                                                        gap: 4,
                                                        borderRadius: 20,
                                                        background: 'var(--common-white, #FFF)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-[10px] w-full",
                                                            style: {
                                                                minHeight: 36,
                                                                padding: '12px 0'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "shrink-0",
                                                                    style: {
                                                                        width: 20,
                                                                        height: 20
                                                                    },
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
                                                                            strokeWidth: "1.4",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 715,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 714,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 21
                                                                }, this),
                                                                selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1 shrink-0 rounded-full",
                                                                    style: {
                                                                        background: selectedItem.color,
                                                                        padding: '4px 8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#FFF',
                                                                                fontFamily: '"Noto Sans KR", sans-serif',
                                                                                fontSize: 12,
                                                                                fontWeight: 400,
                                                                                lineHeight: '120%'
                                                                            },
                                                                            children: Array.isArray(selectedItem.text) ? selectedItem.text.join(' ') : selectedItem.text
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleChipRemove();
                                                                            },
                                                                            className: "flex items-center justify-center",
                                                                            style: {
                                                                                width: 14,
                                                                                height: 14,
                                                                                color: '#FFF'
                                                                            },
                                                                            "aria-label": "칩 삭제",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: 14,
                                                                                height: 14,
                                                                                viewBox: "0 0 14 14",
                                                                                fill: "none",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "1.4",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 759,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 758,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 744,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0 relative",
                                                                    style: {
                                                                        minHeight: 20
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: searchQuery,
                                                                            onChange: (e)=>setSearchQuery(e.target.value),
                                                                            onKeyDown: (e)=>{
                                                                                if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                                                                                    e.preventDefault();
                                                                                    setIsSearchMode(true);
                                                                                }
                                                                            },
                                                                            className: "w-full bg-transparent border-0 outline-none",
                                                                            style: {
                                                                                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                                                fontSize: 14,
                                                                                fontWeight: 400,
                                                                                lineHeight: '140%',
                                                                                letterSpacing: -0.14,
                                                                                color: searchQuery ? 'var(--content-primary, #111214)' : 'transparent'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 771,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 pointer-events-none flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                                mode: "wait",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        y: 10
                                                                                    },
                                                                                    animate: {
                                                                                        opacity: 1,
                                                                                        y: 0
                                                                                    },
                                                                                    exit: {
                                                                                        opacity: 0,
                                                                                        y: -10
                                                                                    },
                                                                                    transition: {
                                                                                        duration: 0.3
                                                                                    },
                                                                                    style: {
                                                                                        color: 'var(--content-placeholder, #9EA2A8)',
                                                                                        fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                                                                        fontSize: 14,
                                                                                        fontWeight: 400,
                                                                                        lineHeight: '140%',
                                                                                        letterSpacing: -0.14
                                                                                    },
                                                                                    children: selectedItem ? '' : placeholders[placeholderIndex]
                                                                                }, placeholderIndex, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 794,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 793,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 792,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 709,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "flex justify-center items-center shrink-0 rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--button-primaryActivated)]",
                                                                style: {
                                                                    width: 24,
                                                                    height: 24,
                                                                    background: 'var(--button-primaryActivated, #111214)'
                                                                },
                                                                onClick: ()=>searchQuery.trim() && setIsSearchMode(true),
                                                                "aria-label": "검색",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    size: 14,
                                                                    strokeWidth: 2
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 830,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 665,
                                            columnNumber: 17
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
                                                        color: 'var(--content-primary, #111214)',
                                                        fontFamily: '"Noto Sans KR", sans-serif',
                                                        fontSize: 16,
                                                        fontStyle: 'normal',
                                                        fontWeight: 700,
                                                        lineHeight: '120%',
                                                        letterSpacing: '-0.16px'
                                                    },
                                                    children: "Start a Conversation with..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 19
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
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 900,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            item.text[1]
                                                                        ]
                                                                    }, void 0, true) : item.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 884,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, item.id, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 637,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute left-0 right-0 bottom-0 z-30 flex flex-col overflow-hidden bg-background-primary shadow-2xl pt-4 pb-4 px-0",
                            style: {
                                top: `${GNB_HEIGHT}px`,
                                pointerEvents: page === 0 ? 'none' : 'auto'
                            },
                            initial: false,
                            variants: page1Variants,
                            animate: page === 0 ? 'inactive' : 'active',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: productListRef,
                                className: "flex-1 min-h-0 min-w-0 w-full overflow-y-auto overflow-x-hidden pb-8",
                                style: {
                                    overscrollBehavior: 'contain'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col items-center",
                                        style: {
                                            marginTop: 24,
                                            marginBottom: 0,
                                            paddingLeft: 24,
                                            paddingRight: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    maxWidth: 1216
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 4,
                                                        marginBottom: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            onClick: ()=>{
                                                                setSelectedSectionChip('ACG 상품 내에서');
                                                                setSearchQuery('');
                                                            },
                                                            style: {
                                                                color: 'var(--content-primary, #111214)',
                                                                fontFamily: '"Noto Sans KR", sans-serif',
                                                                fontSize: 16,
                                                                fontStyle: 'normal',
                                                                fontWeight: 700,
                                                                lineHeight: '120%',
                                                                letterSpacing: '-0.16px',
                                                                margin: 0,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "ACG 모델"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setSelectedSectionChip('ACG 상품 내에서');
                                                                setSearchQuery('');
                                                            },
                                                            style: {
                                                                display: 'flex',
                                                                width: 'var(--spacing-13, 36px)',
                                                                height: 'var(--spacing-13, 36px)',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: 'var(--spacing-15, 99px)',
                                                                border: 'none',
                                                                background: 'transparent',
                                                                cursor: 'pointer',
                                                                padding: 0
                                                            },
                                                            "aria-label": "더보기",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16.667",
                                                                height: "16.667",
                                                                viewBox: "0 0 19 19",
                                                                fill: "none",
                                                                style: {
                                                                    strokeWidth: '1.68px',
                                                                    stroke: 'var(--neutral-700-secondary, #404040)'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M14.1733 6.67336H15.84C16.282 6.67336 16.7059 6.84896 17.0185 7.16152C17.3311 7.47408 17.5067 7.898 17.5067 8.34003V17.5067L14.1733 14.1734H9.17333C8.7313 14.1734 8.30738 13.9978 7.99482 13.6852C7.68226 13.3726 7.50666 12.9487 7.50666 12.5067V11.6734M10.84 6.67336C10.84 7.11539 10.6644 7.53931 10.3518 7.85187C10.0393 8.16443 9.61536 8.34003 9.17333 8.34003H4.17333L0.839996 11.6734V2.50669C0.839996 1.59003 1.59 0.840027 2.50666 0.840027H9.17333C9.61536 0.840027 10.0393 1.01562 10.3518 1.32818C10.6644 1.64074 10.84 2.06467 10.84 2.50669V6.67336Z",
                                                                    stroke: "var(--neutral-700-secondary, #404040)",
                                                                    strokeWidth: "1.68",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 992,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 981,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 939,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: getImagePath("/화면 기록 2026-02-05 오후 3.24.08.mov"),
                                                autoPlay: true,
                                                loop: true,
                                                muted: true,
                                                playsInline: true,
                                                className: "w-full video-section-height",
                                                style: {
                                                    maxWidth: 1216,
                                                    borderRadius: 40,
                                                    overflow: 'hidden',
                                                    objectFit: 'cover'
                                                },
                                                children: "브라우저가 동영상 태그를 지원하지 않습니다."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 930,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col items-center",
                                        style: {
                                            paddingLeft: 24,
                                            paddingRight: 24,
                                            marginTop: 40
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    maxWidth: 1216,
                                                    marginBottom: 40
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 4,
                                                            marginBottom: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                onClick: ()=>{
                                                                    setSelectedSectionChip('New Runner 상품 내에서');
                                                                    setSearchQuery('');
                                                                },
                                                                style: {
                                                                    color: 'var(--content-primary, #111214)',
                                                                    fontFamily: '"Noto Sans KR", sans-serif',
                                                                    fontSize: 16,
                                                                    fontStyle: 'normal',
                                                                    fontWeight: 700,
                                                                    lineHeight: '120%',
                                                                    letterSpacing: '-0.16px',
                                                                    margin: 0,
                                                                    cursor: 'pointer'
                                                                },
                                                                children: "New Runner"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 1024,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setSelectedSectionChip('New Runner 상품 내에서');
                                                                    setSearchQuery('');
                                                                },
                                                                style: {
                                                                    display: 'flex',
                                                                    width: 'var(--spacing-13, 36px)',
                                                                    height: 'var(--spacing-13, 36px)',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderRadius: 'var(--spacing-15, 99px)',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    cursor: 'pointer',
                                                                    padding: 0
                                                                },
                                                                "aria-label": "더보기",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "16.667",
                                                                    height: "16.667",
                                                                    viewBox: "0 0 19 19",
                                                                    fill: "none",
                                                                    style: {
                                                                        strokeWidth: '1.68px',
                                                                        stroke: 'var(--neutral-700-secondary, #404040)'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M14.1733 6.67336H15.84C16.282 6.67336 16.7059 6.84896 17.0185 7.16152C17.3311 7.47408 17.5067 7.898 17.5067 8.34003V17.5067L14.1733 14.1734H9.17333C8.7313 14.1734 8.30738 13.9978 7.99482 13.6852C7.68226 13.3726 7.50666 12.9487 7.50666 12.5067V11.6734M10.84 6.67336C10.84 7.11539 10.6644 7.53931 10.3518 7.85187C10.0393 8.16443 9.61536 8.34003 9.17333 8.34003H4.17333L0.839996 11.6734V2.50669C0.839996 1.59003 1.59 0.840027 2.50666 0.840027H9.17333C9.61536 0.840027 10.0393 1.01562 10.3518 1.32818C10.6644 1.64074 10.84 2.06467 10.84 2.50669V6.67336Z",
                                                                        stroke: "var(--neutral-700-secondary, #404040)",
                                                                        strokeWidth: "1.68",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 1074,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 1063,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 1043,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "recommended-products-grid",
                                                        style: {
                                                            maxWidth: 1216
                                                        },
                                                        children: mockProducts.slice(0, 12).map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecommendedProductItem"], {
                                                                    id: product.id,
                                                                    brand: product.brand,
                                                                    title: product.title,
                                                                    price: product.price,
                                                                    image: product.image,
                                                                    discountRate: product.discountRate,
                                                                    aspectRatio: product.aspectRatio
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 1093,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, `new-runner-${product.id}`, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 1086,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 1084,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    maxWidth: 1216
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 4,
                                                        marginBottom: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            onClick: ()=>{
                                                                setSelectedSectionChip('Discovery 상품 내에서');
                                                                setSearchQuery('');
                                                            },
                                                            style: {
                                                                color: 'var(--content-primary, #111214)',
                                                                fontFamily: '"Noto Sans KR", sans-serif',
                                                                fontSize: 16,
                                                                fontStyle: 'normal',
                                                                fontWeight: 700,
                                                                lineHeight: '120%',
                                                                letterSpacing: '-0.16px',
                                                                margin: 0,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "Discovery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1110,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setSelectedSectionChip('Discovery 상품 내에서');
                                                                setSearchQuery('');
                                                            },
                                                            style: {
                                                                display: 'flex',
                                                                width: 'var(--spacing-13, 36px)',
                                                                height: 'var(--spacing-13, 36px)',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: 'var(--spacing-15, 99px)',
                                                                border: 'none',
                                                                background: 'transparent',
                                                                cursor: 'pointer',
                                                                padding: 0
                                                            },
                                                            "aria-label": "더보기",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16.667",
                                                                height: "16.667",
                                                                viewBox: "0 0 19 19",
                                                                fill: "none",
                                                                style: {
                                                                    strokeWidth: '1.68px',
                                                                    stroke: 'var(--neutral-700-secondary, #404040)'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M14.1733 6.67336H15.84C16.282 6.67336 16.7059 6.84896 17.0185 7.16152C17.3311 7.47408 17.5067 7.898 17.5067 8.34003V17.5067L14.1733 14.1734H9.17333C8.7313 14.1734 8.30738 13.9978 7.99482 13.6852C7.68226 13.3726 7.50666 12.9487 7.50666 12.5067V11.6734M10.84 6.67336C10.84 7.11539 10.6644 7.53931 10.3518 7.85187C10.0393 8.16443 9.61536 8.34003 9.17333 8.34003H4.17333L0.839996 11.6734V2.50669C0.839996 1.59003 1.59 0.840027 2.50666 0.840027H9.17333C9.61536 0.840027 10.0393 1.01562 10.3518 1.32818C10.6644 1.64074 10.84 2.06467 10.84 2.50669V6.67336Z",
                                                                    stroke: "var(--neutral-700-secondary, #404040)",
                                                                    strokeWidth: "1.68",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 1149,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1129,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "recommended-products-grid",
                                                style: {
                                                    maxWidth: 1216
                                                },
                                                children: mockProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecommendedProductItem"], {
                                                            id: product.id,
                                                            brand: product.brand,
                                                            title: product.title,
                                                            price: product.price,
                                                            image: product.image,
                                                            discountRate: product.discountRate,
                                                            aspectRatio: product.aspectRatio
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, product.id, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1171,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 924,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 917,
                            columnNumber: 13
                        }, this)
                    ]
                }, "fullpage", true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 635,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-border-secondary p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "text",
                                        placeholder: "Follow-up question...",
                                        value: searchQuery,
                                        onChange: handleSearchChange,
                                        className: "rounded-lg border border-border-primary bg-background-input-normal px-4 py-2.5 text-sm focus-visible:ring-1 focus-visible:ring-content-highlighted"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1212,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-4 overflow-y-auto p-4 min-h-0",
                                    children: chatMessages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.type === 'user' ? 'bg-button-highlightOutline text-button-highlight' : 'bg-background-tertiary text-content-primary'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed",
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1236,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1229,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1222,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-border-secondary p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBackToHome,
                                        className: "w-full rounded-lg border border-button-defaultOutlined bg-button-default px-4 py-2.5 text-sm font-medium text-content-secondary transition-colors hover:bg-button-hover",
                                        children: "Back to Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1242,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-6 text-xl font-semibold text-content-primary",
                                        children: "Search Results"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1257,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4",
                                        children: mockProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecommendedProductItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecommendedProductItem"], {
                                                    id: product.id,
                                                    brand: product.brand,
                                                    title: product.title,
                                                    price: product.price,
                                                    image: product.image,
                                                    discountRate: product.discountRate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 23
                                                }, this)
                                            }, product.id, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1260,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1258,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1256,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1250,
                            columnNumber: 13
                        }, this)
                    ]
                }, "search", true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(GelatoApp, "dYrFkQrODyPtduPTbVGjfqNxjqk=");
_c = GelatoApp;
var _c;
__turbopack_context__.k.register(_c, "GelatoApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5b77b3e5._.js.map