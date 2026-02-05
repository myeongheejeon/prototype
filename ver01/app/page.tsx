'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/Header'
import { RecommendedProductItem } from '@/components/RecommendedProductItem'
import { motion, AnimatePresence } from 'framer-motion'

export type AspectRatioType = '1:1' | '2:1' | '1:2'

export interface Product {
  id: number
  brand: string
  title: string
  price: number
  image: string
  discountRate?: number
  aspectRatio?: AspectRatioType
}

const baseProducts: Product[] = [
  { id: 1, brand: 'NIKE', title: 'Oversized Hoodie', price: 89000, discountRate: 10, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', aspectRatio: '1:2' },
  { id: 2, brand: 'LEVI\'S', title: 'Denim Jacket', price: 125000, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=350&fit=crop', aspectRatio: '2:1' },
  { id: 3, brand: 'CARHARTT', title: 'Cargo Pants', price: 68000, discountRate: 15, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=450&fit=crop', aspectRatio: '1:1' },
  { id: 4, brand: 'CONVERSE', title: 'White Sneakers', price: 145000, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=320&fit=crop', aspectRatio: '1:2' },
  { id: 5, brand: 'COACH', title: 'Leather Bag', price: 210000, discountRate: 20, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=480&fit=crop', aspectRatio: '1:1' },
  { id: 6, brand: 'UNIQLO', title: 'Striped Shirt', price: 55000, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=380&fit=crop', aspectRatio: '2:1' },
  { id: 7, brand: 'NEW ERA', title: 'Black Cap', price: 32000, discountRate: 5, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop', aspectRatio: '1:1' },
  { id: 8, brand: 'COS', title: 'Wide Pants', price: 78000, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=520&fit=crop', aspectRatio: '1:2' },
  { id: 9, brand: '&OTHER STORIES', title: 'Knit Sweater', price: 95000, discountRate: 12, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=460&fit=crop', aspectRatio: '2:1' },
  { id: 10, brand: 'DR. MARTENS', title: 'Chelsea Boots', price: 168000, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=340&fit=crop', aspectRatio: '1:1' },
  { id: 11, brand: 'MAX MARA', title: 'Wool Coat', price: 285000, discountRate: 30, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=550&fit=crop', aspectRatio: '1:2' },
  { id: 12, brand: 'BASIC', title: 'Basic Tee', price: 29000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=360&fit=crop', aspectRatio: '1:1' },
]

const aspectRatios: AspectRatioType[] = ['1:1', '2:1', '1:2']
const mockProducts: Product[] = (() => {
  const list: Product[] = []
  for (let i = 0; i < 60; i++) {
    const base = baseProducts[i % baseProducts.length]
    list.push({
      ...base,
      id: i + 1,
      title: base.title + (i >= baseProducts.length ? ` ${Math.floor(i / baseProducts.length) + 1}` : ''),
      price: base.price + (i % 7) * 1000,
      aspectRatio: aspectRatios[i % aspectRatios.length],
    })
  }
  return list
})()

const suggestionChips = [
  {
    text: '성수동 팝업 갈 때 힙한 느낌 내고 싶어',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
        <path
          d="M12.7375 2.1625L9.99999 1.25C9.99999 1.91304 9.7366 2.54893 9.26776 3.01777C8.79892 3.48661 8.16304 3.75 7.49999 3.75C6.83695 3.75 6.20107 3.48661 5.73223 3.01777C5.26339 2.54893 4.99999 1.91304 4.99999 1.25L2.26249 2.1625C1.97961 2.25675 1.73973 2.44901 1.58615 2.70459C1.43258 2.96017 1.37542 3.26223 1.42499 3.55625L1.78749 5.725C1.81129 5.87182 1.88667 6.00534 2.00008 6.10157C2.1135 6.1978 2.25751 6.25043 2.40624 6.25H3.74999V12.5C3.74999 13.1875 4.31249 13.75 4.99999 13.75H9.99999C10.3315 13.75 10.6495 13.6183 10.8839 13.3839C11.1183 13.1495 11.25 12.8315 11.25 12.5V6.25H12.5937C12.7425 6.25043 12.8865 6.1978 12.9999 6.10157C13.1133 6.00534 13.1887 5.87182 13.2125 5.725L13.575 3.55625C13.6246 3.26223 13.5674 2.96017 13.4138 2.70459C13.2603 2.44901 13.0204 2.25675 12.7375 2.1625Z"
          stroke="#9EA2A8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: '감각적인 5만원대 집들이 선물 찾아줘',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
        <path
          d="M7.5 5V13.125M7.5 5C7.27392 4.06838 6.88465 3.27188 6.38296 2.71444C5.88127 2.15701 5.29043 1.86446 4.6875 1.87497C4.2731 1.87497 3.87567 2.03959 3.58265 2.33261C3.28962 2.62564 3.125 3.02307 3.125 3.43747C3.125 3.85187 3.28962 4.2493 3.58265 4.54232C3.87567 4.83535 4.2731 4.99997 4.6875 4.99997M7.5 5C7.72608 4.06838 8.11535 3.27188 8.61704 2.71444C9.11873 2.15701 9.70957 1.86446 10.3125 1.87497C10.7269 1.87497 11.1243 2.03959 11.4174 2.33261C11.7104 2.62564 11.875 3.02307 11.875 3.43747C11.875 3.85187 11.7104 4.2493 11.4174 4.54232C11.1243 4.83535 10.7269 4.99997 10.3125 4.99997M11.875 7.5V11.875C11.875 12.2065 11.7433 12.5245 11.5089 12.7589C11.2745 12.9933 10.9565 13.125 10.625 13.125H4.375C4.04348 13.125 3.72554 12.9933 3.49112 12.7589C3.2567 12.5245 3.125 12.2065 3.125 11.875V7.5M2.5 5H12.5C12.8452 5 13.125 5.27982 13.125 5.625V6.875C13.125 7.22018 12.8452 7.5 12.5 7.5H2.5C2.15482 7.5 1.875 7.22018 1.875 6.875V5.625C1.875 5.27982 2.15482 5 2.5 5Z"
          stroke="#9EA2A8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const chatMessages = [
  { type: 'user', content: '성수동 갈 때 입기 좋은 힙한 옷' },
  { type: 'ai', content: '성수동 스타일을 위해 트렌디한 캐주얼 아이템들을 추천드립니다. 미니멀하면서도 세련된 디자인의 옷들을 선별했어요.' },
]

const page0Variants = {
  active: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  inactive: {
    y: '-10vh',
    scale: 0.95,
    opacity: 0.5,
    transition: { duration: 0.5 },
  },
}

/* 하단 패널이 상단에 있을 때 40px만 보이도록 (스크롤 힌트) */
const PAGE1_PEEK_PX = 40
const GNB_HEIGHT_X2 = 52 * 2 // 104
const page1Variants = {
  active: {
    y: '0%',
    transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
  },
  inactive: {
    y: `calc(100vh - ${GNB_HEIGHT_X2 + PAGE1_PEEK_PX}px)`,
    transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
  },
}

const WHEEL_THROTTLE_MS = 1000

export default function GelatoApp() {
  const [page, setPage] = useState(0) // 0: 검색, 1: 추천상품
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)
  const productListRef = useRef<HTMLDivElement>(null)
  const throttleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pageRef = useRef(page)
  const isAnimatingRef = useRef(isAnimating)

  pageRef.current = page
  isAnimatingRef.current = isAnimating

  useEffect(() => {
    const container = rootRef.current
    if (!container) return

    const handlePageChange = (nextPage: 0 | 1) => {
      setIsAnimating(true)
      setPage(nextPage)
      if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current)
      throttleTimerRef.current = setTimeout(() => {
        setIsAnimating(false)
        throttleTimerRef.current = null
      }, WHEEL_THROTTLE_MS)
    }

    const handleWheel = (e: WheelEvent) => {
      const currentPage = pageRef.current
      const animating = isAnimatingRef.current

      if (animating) {
        e.preventDefault()
        return
      }

      const { deltaY } = e
      const scrollTop = productListRef.current ? productListRef.current.scrollTop : 0

      if (currentPage === 0) {
        if (deltaY > 0) {
          e.preventDefault()
          handlePageChange(1)
        }
        return
      }

      if (currentPage === 1) {
        if (deltaY < 0 && scrollTop <= 0) {
          e.preventDefault()
          handlePageChange(0)
        }
        return
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current)
    }
  }, [])

  const handleChipClick = () => setIsSearchMode(true)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value.trim()) setIsSearchMode(true)
  }
  const handleBackToHome = () => {
    setIsSearchMode(false)
    setSearchQuery('')
  }

  const GNB_HEIGHT = 52
  const miniSearchStripOpacity = page === 1 ? 1 : 0

  return (
    <div className="h-screen overflow-hidden" ref={rootRef}>
      <Header />

      {/* GNB 바로 아래 고정 영역: 축소형 검색창. GNB와 동일 배경, 스크롤 시 슬라이드+페이드 인 */}
      <motion.div
        className="fixed left-0 right-0 z-40 box-border w-full"
        style={{
          top: 53,
          display: 'flex',
          padding: '4px 16px 16px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          background: 'var(--background-overlay-lightSecondary, rgba(255, 255, 255, 0.72))',
          backdropFilter: 'blur(27px)',
          pointerEvents: miniSearchStripOpacity > 0 ? 'auto' : 'none',
        }}
        initial={false}
        animate={{
          opacity: miniSearchStripOpacity,
          y: miniSearchStripOpacity ? 0 : -12,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* 검색창 텍스트필드: 피그마 스펙, 가운데 정렬 */}
        <div
          className="flex w-full max-w-[560px] min-w-0 shrink-0 items-center justify-center gap-[var(--4,4px)]"
          style={{
            padding: '12px 24px',
            borderRadius: 999,
            border: '1px solid var(--neutral-200, #E6E8EB)',
            background: 'var(--common-white, #FFF)',
          }}
        >
          <span className="shrink-0 w-5 h-5 flex items-center justify-center" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9EA2A8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="원하는 옷의 스타일을 설명해보세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                e.preventDefault()
                setIsSearchMode(true)
              }
            }}
            className="min-w-0 flex-1 bg-transparent border-0 outline-none focus:ring-0 placeholder-[var(--content-placeholder,#9EA2A8)]"
            style={{
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
              letterSpacing: '-0.14px',
            }}
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isSearchMode ? (
          <div key="fullpage" className="relative h-full w-full overflow-hidden" style={{ height: '100vh' }}>
            {/* Page 0: 검색 포커스 영역 — 뷰포트 반응형, 피그마 스펙 */}
            <motion.div
              className="absolute inset-0 z-0 flex flex-col items-center justify-center pt-[52px]"
              style={{
                paddingLeft: 40,
                paddingRight: 40,
                gap: 40,
                minHeight: '100dvh',
                boxSizing: 'border-box',
              }}
              initial={false}
              variants={page0Variants}
              animate={page === 0 ? 'active' : 'inactive'}
            >
              {/* 로고: /public 로고 이미지 */}
              <img
                src="/logo_nike.svg"
                alt="로고"
                width={125.014}
                height={44.438}
                style={{ objectFit: 'contain', filter: 'brightness(0)' }}
              />

              {/* 검색창 + 칩 감싸는 컨테이너: flex col, gap 32 */}
              <div
                className="flex flex-col justify-center items-center self-stretch"
                style={{ gap: 'var(--32, 32px)' }}
              >
                {/* 검색창: 피그마 스펙 + 4겹 쉐도우 애니메이션 */}
                <div className="w-full relative" style={{ maxWidth: 640 }}>
                  {/* 쉐도우 레이어 4개 — 각각 다른 속도로 진해졌다 연해졌다 */}
                  <div
                    className="search-shadow-layer-1 pointer-events-none absolute inset-0 rounded-[20px]"
                    aria-hidden
                  />
                  <div
                    className="search-shadow-layer-2 pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      boxShadow: '0 -8px 60px 0 rgba(198, 151, 255, 0.20)',
                    }}
                    aria-hidden
                  />
                  <div
                    className="search-shadow-layer-3 pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      boxShadow: '0 -8px 100px 0 rgba(198, 151, 255, 0.12)',
                    }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      boxShadow: '0 -8px 250px 0 rgba(234, 217, 255, 0.80)',
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative z-10 flex flex-col items-stretch w-full"
                    style={{
                      padding: 16,
                      gap: 4,
                      borderRadius: 20,
                      background: 'var(--common-white, #FFF)',
                    }}
                  >
                  {/* 플레이스홀더 + 검색 아이콘 감싸는 컨테이너 */}
                  <div
                    className="flex items-center gap-[10px] w-full"
                    style={{ minHeight: 36, padding: '12px 0' }}
                  >
                    <span className="shrink-0" style={{ width: 20, height: 20 }} aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path
                          d="M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                          stroke="#9EA2A8"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="원하는 옷의 스타일을 설명해보세요..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                          e.preventDefault()
                          setIsSearchMode(true)
                        }
                      }}
                      className="flex-1 min-w-0 bg-transparent border-0 outline-none placeholder:text-[var(--content-placeholder,#9EA2A8)]"
                      style={{
                        fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: '140%',
                        letterSpacing: -0.14,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                      }}
                    />
                  </div>

                  {/* 검색 아이콘 버튼 */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="flex justify-center items-center shrink-0 rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--button-primaryActivated)]"
                      style={{
                        width: 24,
                        height: 24,
                        background: 'var(--button-primaryActivated, #111214)',
                      }}
                      onClick={() => searchQuery.trim() && setIsSearchMode(true)}
                      aria-label="검색"
                    >
                      <Search size={14} strokeWidth={2} />
                    </button>
                  </div>
                  </div>
                </div>

                {/* 칩들을 감싸는 컨테이너: flex, gap 4 */}
                <div className="flex items-center" style={{ gap: 'var(--4, 4px)' }}>
                  {suggestionChips.map((chip, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleChipClick}
                      className="flex justify-center items-center shrink-0 rounded-full border bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--content-primary)]"
                      style={{
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        gap: 'var(--4, 4px)',
                        borderColor: 'var(--neutral-200, #E6E8EB)',
                        borderRadius: 'var(--100, 100px)',
                      }}
                    >
                      <span className="shrink-0 w-[15px] h-[15px] aspect-square flex items-center justify-center" aria-hidden>
                        {chip.icon}
                      </span>
                      <span
                        className="whitespace-nowrap"
                        style={{
                          color: 'var(--content-primary, #111214)',
                          fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                          fontSize: 12,
                          fontWeight: 400,
                          lineHeight: '120%',
                          letterSpacing: -0.12,
                        }}
                      >
                        {chip.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Page 1: 추천 상품 — 축소형 검색창 영역(GNB+52px) 아래에서 올라옴, 그 위로는 올라오지 않음 */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 z-30 flex flex-col overflow-hidden bg-background-primary shadow-2xl pt-4 pb-4 px-0"
              style={{ top: `${GNB_HEIGHT * 2}px`, pointerEvents: page === 0 ? 'none' : 'auto' }}
              initial={false}
              variants={page1Variants}
              animate={page === 0 ? 'inactive' : 'active'}
            >
              <div
                ref={productListRef}
                className="flex-1 min-h-0 min-w-0 w-full overflow-y-auto overflow-x-hidden pb-8"
                style={{ overscrollBehavior: 'contain' }}
              >
                <div className="recommended-products-grid">
                  {mockProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="recommended-products-grid-item"
                    >
                      <RecommendedProductItem
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        discountRate={product.discountRate}
                        aspectRatio={product.aspectRatio}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            key="search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-screen overflow-hidden"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-[35%] border-r border-border-secondary bg-background-primary flex flex-col min-h-0"
            >
              <div className="border-b border-border-secondary p-4">
                <Input
                  type="text"
                  placeholder="Follow-up question..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="rounded-lg border border-border-primary bg-background-input-normal px-4 py-2.5 text-sm focus-visible:ring-1 focus-visible:ring-content-highlighted"
                />
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto p-4 min-h-0">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                        msg.type === 'user'
                          ? 'bg-button-highlightOutline text-button-highlight'
                          : 'bg-background-tertiary text-content-primary'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-border-secondary p-4">
                <button
                  onClick={handleBackToHome}
                  className="w-full rounded-lg border border-button-defaultOutlined bg-button-default px-4 py-2.5 text-sm font-medium text-content-secondary transition-colors hover:bg-button-hover"
                >
                  Back to Home
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-[65%] overflow-y-auto min-h-0"
            >
              <div className="p-4">
                <h3 className="mb-6 text-xl font-semibold text-content-primary">Search Results</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  {mockProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="min-w-0"
                    >
                      <RecommendedProductItem
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        discountRate={product.discountRate}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
