'use client'

import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Search, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Header, HEADER_TOTAL_HEIGHT_PX } from '@/components/Header'
import { RecommendedProductItem } from '@/components/RecommendedProductItem'
import { motion, AnimatePresence } from 'framer-motion'

// basePath를 포함한 이미지 경로 처리 함수
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/prototype' : ''
  return `${basePath}${path}`
}

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
  { id: 1, brand: 'NIKE', title: 'Product 1', price: 89000, discountRate: 10, image: '/product1.png', aspectRatio: '1:1' },
  { id: 2, brand: 'NIKE', title: 'Product 2', price: 125000, image: '/product2.png', aspectRatio: '1:1' },
  { id: 3, brand: 'NIKE', title: 'Product 3', price: 68000, discountRate: 15, image: '/product3.png', aspectRatio: '1:1' },
  { id: 4, brand: 'NIKE', title: 'Product 4', price: 145000, image: '/product4.png', aspectRatio: '1:1' },
  { id: 5, brand: 'NIKE', title: 'Product 5', price: 95000, discountRate: 12, image: '/product5.png', aspectRatio: '1:1' },
  { id: 6, brand: 'NIKE', title: 'Product 6', price: 78000, image: '/product6.png', aspectRatio: '1:1' },
  { id: 7, brand: 'NIKE', title: 'Product 7', price: 110000, discountRate: 5, image: '/product7.png', aspectRatio: '1:1' },
  { id: 8, brand: 'NIKE', title: 'Product 8', price: 135000, image: '/product8.png', aspectRatio: '1:1' },
  { id: 9, brand: 'NIKE', title: 'Product 9', price: 99000, discountRate: 20, image: '/product9.png', aspectRatio: '1:1' },
  { id: 10, brand: 'NIKE', title: 'Product 10', price: 120000, image: '/product10.png', aspectRatio: '1:1' },
]

// Hydration 일치를 위해 시드 기반 의사 난수 사용 (서버/클라이언트 동일 결과)
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const mockProducts: Product[] = (() => {
  const list: Product[] = []
  const images = baseProducts.map(p => p.image)
  let seed = 12345

  // 이미지 배열을 시드 기반으로 섞기 (서버/클라이언트 동일)
  const shuffledImages = [...images]
  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed++) * (i + 1))
    ;[shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]]
  }

  // 60개 상품 생성 시 이미지를 배치
  for (let i = 0; i < 60; i++) {
    const baseIndex = i % baseProducts.length
    const base = baseProducts[baseIndex]
    const imageIndex = i % shuffledImages.length
    list.push({
      ...base,
      id: i + 1,
      title: base.title + (i >= baseProducts.length ? ` ${Math.floor(i / baseProducts.length) + 1}` : ''),
      price: base.price + (i % 7) * 1000,
      image: shuffledImages[imageIndex],
      aspectRatio: '1:1',
    })
  }

  // 최종 리스트도 시드 기반으로 섞기 (서버/클라이언트 동일)
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed++) * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }

  return list
})()

const placeholders = [
  '러닝할 때 무릎 안다칠 러닝화 보여줘.',
  '겨울에 러닝할 때 입기 좋은 자켓 보여줘.',
  '재생소재 패딩 보여줘',
  '성수동에 입고 가고 싶은 모자 보여줘.',
]

// 섹션 타이틀 클릭 시 축약형 검색창 위에 뜨는 제안 질문 칩
const suggestionQuestionChips = ['10만원 이하 상품 보여줘', '20대 친구 선물용으로 보여줘']

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

const page1Variants = {
  active: {
    y: '0%',
    transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
  },
  inactive: {
    y: '100%',
    transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
  },
}

const WHEEL_THROTTLE_MS = 1000

// 빠른 스타트 아이템 데이터
const quickStartItems = [
  {
    id: 1,
    text: '나이키 팬텀 6 로우 엘레트',
    color: '#00C9D6',
    image: '/item1.png',
  },
  {
    id: 2,
    text: ['사브리나', '농구 후디'],
    color: '#F87171',
    image: '/item2.png',
  },
  {
    id: 3,
    text: ['나이키', '테크 윈드러너'],
    color: '#F59E0B',
    image: '/item3.png',
  },
  {
    id: 4,
    text: ['나이키', '재생 소재'],
    color: '#16A34A',
    image: '/item4.png',
  },
]

export default function GelatoApp() {
  const [page, setPage] = useState(0) // 0: 검색, 1: 추천상품
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedQuickStartItem, setSelectedQuickStartItem] = useState<number | null>(null)
  const [selectedSectionChip, setSelectedSectionChip] = useState<string | null>(null)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const productListRef = useRef<HTMLDivElement>(null)
  const throttleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pageRef = useRef(page)
  const isAnimatingRef = useRef(isAnimating)

  pageRef.current = page
  isAnimatingRef.current = isAnimating

  useEffect(() => {
    setMounted(true)
  }, [])

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
      const scrollHeight = productListRef.current ? productListRef.current.scrollHeight : 0
      const clientHeight = productListRef.current ? productListRef.current.clientHeight : 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1
      const isAtTop = scrollTop <= 0

      // wheel 이벤트가 productListRef 내부에서 발생하는지 확인
      const target = e.target as HTMLElement
      const isInsideProductList = productListRef.current?.contains(target) || false

      if (currentPage === 0) {
        if (deltaY > 0) {
          e.preventDefault()
          handlePageChange(1)
        }
        return
      }

      if (currentPage === 1) {
        // productListRef 내부에서 스크롤하는 경우
        if (isInsideProductList) {
          // 위로 스크롤하고 맨 위에 있을 때만 페이지 전환
          if (deltaY < 0 && isAtTop) {
            e.preventDefault()
            handlePageChange(0)
          }
          // 아래로 스크롤하고 맨 아래에 있을 때는 아무것도 하지 않음 (스크롤 허용)
          return
        }
        
        // productListRef 외부에서 스크롤하는 경우
        if (deltaY < 0 && isAtTop) {
          e.preventDefault()
          handlePageChange(0)
        }
        // 아래로 스크롤할 때는 preventDefault 하지 않음
        return
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current)
    }
  }, [])

  // 플레이스홀더 자동 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    }, 5000)
    return () => clearInterval(interval)
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

  const handleQuickStartItemClick = (itemId: number) => {
    if (selectedQuickStartItem === itemId) {
      // 이미 선택된 아이템을 클릭하면 해제
      setSelectedQuickStartItem(null)
    } else {
      setSelectedQuickStartItem(itemId)
    }
  }

  const handleChipRemove = () => {
    setSelectedQuickStartItem(null)
  }

  const handleSectionChipRemove = () => {
    setSelectedSectionChip(null)
  }

  // Hex 색상을 rgba로 변환하는 헬퍼 함수
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const selectedItem = selectedQuickStartItem ? quickStartItems.find(item => item.id === selectedQuickStartItem) : null
  const baseShadowColor = selectedItem ? selectedItem.color : '#B043FF' // 기본 보라색
  
  // 쉐도우 색상 (낮은 opacity)
  const shadowColor1 = selectedItem ? hexToRgba(selectedItem.color, 0.04) : 'rgba(176, 67, 255, 0.08)'
  const shadowColor2 = selectedItem ? hexToRgba(selectedItem.color, 0.10) : 'rgba(198, 151, 255, 0.20)'
  const shadowColor3 = selectedItem ? hexToRgba(selectedItem.color, 0.06) : 'rgba(198, 151, 255, 0.12)'
  const shadowColor4 = selectedItem ? hexToRgba(selectedItem.color, 0.40) : 'rgba(234, 217, 255, 0.80)'

  const miniSearchStripOpacity = page === 1 ? 1 : 0
  const inspirationChipOpacity = page === 0 ? 1 : 0

  return (
    <div className="h-screen overflow-hidden" ref={rootRef}>
      <Header />

      {/* 하단 고정 플로팅 검색창: body에 포탈해 칩 영역이 root overflow에 잘리지 않도록 */}
      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <motion.div
            className="fixed left-0 right-0 z-40 box-border w-full"
            style={{
              bottom: 20,
              display: 'flex',
              flexDirection: 'column',
              padding: '0 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
              pointerEvents: miniSearchStripOpacity > 0 ? 'auto' : 'none',
              overflow: 'visible',
            }}
            initial={false}
            animate={{
              opacity: miniSearchStripOpacity,
              y: miniSearchStripOpacity ? 0 : 20,
              scale: miniSearchStripOpacity ? 1 : 0.95,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* 제안 질문 칩: 섹션 칩 선택 시 축약형 검색창 위에 뿅 하고 등장 */}
            <AnimatePresence>
              {selectedSectionChip && (
                <motion.div
                  className="flex flex-nowrap justify-start min-[640px]:justify-center gap-2 w-full max-w-[560px] overflow-x-auto"
                  style={{ padding: '4px 0', minHeight: 40, overflowY: 'visible' }}
                  initial={{ opacity: 0, y: 12, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
              {suggestionQuestionChips.map((text, i) => (
                <motion.button
                  key={text}
                  type="button"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25, delay: i * 0.06 }}
                  onClick={() => setSearchQuery(text)}
                  className="shrink-0"
                  style={{
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
                    color: 'var(--content-primary, #111214)',
                  }}
                >
                  {text}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* 검색창 텍스트필드: 플로팅 스타일, 그림자 효과 */}
        <div
          className="flex w-full max-w-[560px] min-w-0 shrink-0 items-center justify-center"
          style={{
            padding: '12px 24px',
            borderRadius: 999,
            border: '1px solid var(--neutral-200, #E6E8EB)',
            background: 'var(--common-white, #FFF)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
            gap: 8,
          }}
        >
          <span className="shrink-0 w-5 h-5 flex items-center justify-center" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path d="M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#9EA2A8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {/* 섹션 칩 */}
          {selectedSectionChip && (
            <div
              className="flex items-center gap-1 shrink-0 rounded-full"
              style={{
                background: '#111214',
                padding: '4px 8px',
              }}
            >
              <span
                style={{
                  color: '#FFF',
                  fontFamily: '"Noto Sans KR", sans-serif',
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: '120%',
                }}
              >
                {selectedSectionChip}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleSectionChipRemove()
                }}
                className="flex items-center justify-center"
                style={{
                  width: 14,
                  height: 14,
                  color: '#FFF',
                }}
                aria-label="칩 삭제"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                  <path
                    d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="min-w-0 flex-1 relative" style={{ minHeight: 20 }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                  e.preventDefault()
                  setIsSearchMode(true)
                }
              }}
              className="w-full bg-transparent border-0 outline-none focus:ring-0"
              style={{
                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '140%',
                letterSpacing: '-0.14px',
                color: searchQuery ? 'var(--content-primary, #111214)' : 'transparent',
              }}
            />
            {!searchQuery && (
              <div className="absolute inset-0 pointer-events-none flex items-center">
                {/* 모바일: 플레이스홀더 "입력하세요" 고정 */}
                <span
                  className="min-[640px]:hidden"
                  style={{
                    color: 'var(--content-placeholder, #9EA2A8)',
                    fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '140%',
                    letterSpacing: '-0.14px',
                  }}
                >
                  입력하세요
                </span>
                {/* 데스크톱: 칩 있으면 플레이스홀더 고정, 없으면 로테이션 애니메이션 */}
                <span className="hidden min-[640px]:inline">
                  {selectedSectionChip ? (
                    <span
                      style={{
                        color: 'var(--content-placeholder, #9EA2A8)',
                        fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '140%',
                        letterSpacing: '-0.14px',
                      }}
                    >
                      찾고 싶은걸 입력해 보세요.
                    </span>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={placeholderIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          color: 'var(--content-placeholder, #9EA2A8)',
                          fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                          fontSize: 14,
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: '140%',
                          letterSpacing: '-0.14px',
                        }}
                      >
                        {placeholders[placeholderIndex]}
                      </motion.span>
                    </AnimatePresence>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
          </motion.div>,
          document.body
        )}

      {/* 하단 고정 "더 많은 영감 보기" 칩: 홈 화면에서만 표시 */}
      <motion.div
        className="fixed left-0 right-0 z-40 box-border w-full"
        style={{
          bottom: 20,
          display: 'flex',
          padding: '0 16px',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: inspirationChipOpacity > 0 ? 'auto' : 'none',
        }}
        initial={false}
        animate={{
          opacity: inspirationChipOpacity,
          y: inspirationChipOpacity ? 0 : 20,
          scale: inspirationChipOpacity ? 1 : 0.95,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div
          className="flex items-center gap-2 shrink-0"
          style={{
            padding: '10px 20px',
            borderRadius: 999,
            border: '1px solid var(--neutral-200, #E6E8EB)',
            background: 'var(--common-white, #FFF)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (page === 0) {
              setIsAnimating(true)
              setPage(1)
            }
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '140%',
              letterSpacing: '-0.14px',
              color: 'var(--content-primary, #111214)',
            }}
          >
            더 많은 영감 보기
          </span>
          <motion.div
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#111214"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isSearchMode ? (
          <div key="fullpage" className="relative h-full w-full overflow-hidden" style={{ height: '100vh', background: '#FFF' }}>
            {/* Page 0: 검색 포커스 영역 — 뷰포트 반응형, 피그마 스펙 */}
            <motion.div
              className="absolute inset-0 z-0 flex flex-col items-center justify-center"
              style={{
                paddingTop: HEADER_TOTAL_HEIGHT_PX,
                paddingLeft: 24,
                paddingRight: 24,
                gap: 40,
                minHeight: '100dvh',
                boxSizing: 'border-box',
                background: '#FFF',
              }}
              initial={false}
              variants={page0Variants}
              animate={page === 0 ? 'active' : 'inactive'}
            >
              {/* 로고: /public 로고 이미지 */}
              <img
                src={getImagePath("/logo_nike.svg")}
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
                    style={{
                      boxShadow: `0 -1px 18px 0 ${shadowColor1}`,
                      animation: selectedItem ? 'none' : undefined,
                    }}
                    aria-hidden
                  />
                  <div
                    className="search-shadow-layer-2 pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      boxShadow: `0 -8px 60px 0 ${shadowColor2}`,
                      animation: selectedItem ? 'none' : undefined,
                    }}
                    aria-hidden
                  />
                  <div
                    className="search-shadow-layer-3 pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      boxShadow: `0 -8px 100px 0 ${shadowColor3}`,
                      animation: selectedItem ? 'none' : undefined,
                    }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{
                      boxShadow: `0 -8px 250px 0 ${shadowColor4}`,
                      animation: selectedItem ? 'none' : undefined,
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
                    {/* 선택된 아이템 칩 */}
                    {selectedItem && (
                      <div
                        className="flex items-center gap-1 shrink-0 rounded-full"
                        style={{
                          background: selectedItem.color,
                          padding: '4px 8px',
                        }}
                      >
                        <span
                          style={{
                            color: '#FFF',
                            fontFamily: '"Noto Sans KR", sans-serif',
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: '120%',
                          }}
                        >
                          {Array.isArray(selectedItem.text) ? selectedItem.text.join(' ') : selectedItem.text}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleChipRemove()
                          }}
                          className="flex items-center justify-center"
                          style={{
                            width: 14,
                            height: 14,
                            color: '#FFF',
                          }}
                          aria-label="칩 삭제"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                            <path
                              d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                    <div className="flex-1 min-w-0 relative" style={{ minHeight: 20 }}>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                            e.preventDefault()
                            setIsSearchMode(true)
                          }
                        }}
                        className="w-full bg-transparent border-0 outline-none"
                        style={{
                          fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                          fontSize: 14,
                          fontWeight: 400,
                          lineHeight: '140%',
                          letterSpacing: -0.14,
                          color: searchQuery ? 'var(--content-primary, #111214)' : 'transparent',
                        }}
                      />
                      {!searchQuery && (
                        <div className="absolute inset-0 pointer-events-none flex items-center">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={placeholderIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              style={{
                                color: 'var(--content-placeholder, #9EA2A8)',
                                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                                fontSize: 14,
                                fontWeight: 400,
                                lineHeight: '140%',
                                letterSpacing: -0.14,
                              }}
                            >
                              {selectedItem ? '' : placeholders[placeholderIndex]}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
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

                {/* 빠른 스타트 영역 */}
                <div
                  className="flex flex-col items-start w-full"
                  style={{
                    maxWidth: 640,
                    gap: 16,
                  }}
                >
                  {/* 타이틀 */}
                  <h2
                    style={{
                      color: 'var(--content-primary, #111214)',
                      fontFamily: '"Noto Sans KR", sans-serif',
                      fontSize: 16,
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '120%',
                      letterSpacing: '-0.16px',
                    }}
                  >
                    Start a Conversation with...
                  </h2>

                  {/* 빠른 스타트 아이템 컨테이너 - 모바일에서만 풀폭 스크롤(첫 아이템만 왼쪽 마진) */}
                  <div className="quick-start-scroll-wrap w-full">
                    <div
                      className="quick-start-scroll-inner flex items-start w-full overflow-x-auto overflow-y-hidden"
                      style={{
                        gap: 16,
                        WebkitOverflowScrolling: 'touch',
                        paddingBottom: 4,
                      }}
                    >
                    {quickStartItems.map((item) => {
                      const isSelected = selectedQuickStartItem === item.id
                      return (
                        <div
                          key={item.id}
                          className="quick-start-item relative shrink-0 rounded-2xl"
                          style={{
                            background: `url(${getImagePath(item.image)}) lightgray 50% / cover no-repeat`,
                            borderRadius: 16,
                            cursor: 'pointer',
                            border: isSelected ? `3px solid ${item.color}` : 'none',
                            transition: 'border 0.2s ease',
                          }}
                          onClick={() => handleQuickStartItemClick(item.id)}
                        >
                          <span
                            className="absolute left-0 bottom-0 right-0"
                            style={{
                              padding: '0 0 12px 12px',
                              color: '#FFF',
                              fontFamily: '"Noto Sans KR", sans-serif',
                              fontSize: 'clamp(12px, 3.5vw, 16px)',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              lineHeight: '120%',
                              letterSpacing: '-0.16px',
                            }}
                          >
                            {Array.isArray(item.text) ? (
                              <>
                                {item.text[0]}
                                <br />
                                {item.text[1]}
                              </>
                            ) : (
                              item.text
                            )}
                          </span>
                        </div>
                      )
                    })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Page 1: 추천 상품 — GNB 아래에서 올라옴 */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 z-30 flex flex-col overflow-hidden bg-background-primary shadow-2xl pt-4 pb-4 px-0"
              style={{ top: `${HEADER_TOTAL_HEIGHT_PX}px`, pointerEvents: page === 0 ? 'none' : 'auto' }}
              initial={false}
              variants={page1Variants}
              animate={page === 0 ? 'inactive' : 'active'}
            >
              <div
                ref={productListRef}
                className="flex-1 min-h-0 min-w-0 w-full overflow-y-auto overflow-x-hidden pb-8"
                style={{ overscrollBehavior: 'contain' }}
              >
                {/* 동영상 영역 */}
                <div
                  className="w-full flex flex-col items-center"
                  style={{
                    marginTop: 24,
                    marginBottom: 0,
                    paddingLeft: 24,
                    paddingRight: 24,
                  }}
                >
                  <div style={{ width: '100%', maxWidth: 1216 }}>
                    {/* ACG 모델 타이틀 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
                      <h2
                        onClick={() => {
                          setSelectedSectionChip('ACG 상품 내에서')
                          setSearchQuery('')
                        }}
                        style={{
                          color: 'var(--content-primary, #111214)',
                          fontFamily: '"Noto Sans KR", sans-serif',
                          fontSize: 16,
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: '120%',
                          letterSpacing: '-0.16px',
                          margin: 0,
                          cursor: 'pointer',
                        }}
                      >
                        ACG 모델
                      </h2>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSectionChip('ACG 상품 내에서')
                          setSearchQuery('')
                        }}
                        style={{
                          display: 'flex',
                          width: 'var(--spacing-13, 36px)',
                          height: 'var(--spacing-13, 36px)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 'var(--spacing-15, 99px)',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                        aria-label="더보기"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.667"
                          height="16.667"
                          viewBox="0 0 19 19"
                          fill="none"
                          style={{
                            strokeWidth: '1.68px',
                            stroke: 'var(--neutral-700-secondary, #404040)',
                          }}
                        >
                          <path
                            d="M14.1733 6.67336H15.84C16.282 6.67336 16.7059 6.84896 17.0185 7.16152C17.3311 7.47408 17.5067 7.898 17.5067 8.34003V17.5067L14.1733 14.1734H9.17333C8.7313 14.1734 8.30738 13.9978 7.99482 13.6852C7.68226 13.3726 7.50666 12.9487 7.50666 12.5067V11.6734M10.84 6.67336C10.84 7.11539 10.6644 7.53931 10.3518 7.85187C10.0393 8.16443 9.61536 8.34003 9.17333 8.34003H4.17333L0.839996 11.6734V2.50669C0.839996 1.59003 1.59 0.840027 2.50666 0.840027H9.17333C9.61536 0.840027 10.0393 1.01562 10.3518 1.32818C10.6644 1.64074 10.84 2.06467 10.84 2.50669V6.67336Z"
                            stroke="var(--neutral-700-secondary, #404040)"
                            strokeWidth="1.68"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <video
                    src={getImagePath("/화면 기록 2026-02-05 오후 3.24.08.mov")}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full video-section-height"
                    style={{
                      maxWidth: 1216,
                      borderRadius: 40,
                      overflow: 'hidden',
                      objectFit: 'cover',
                    }}
                  >
                    브라우저가 동영상 태그를 지원하지 않습니다.
                  </video>
                </div>
                <div className="w-full flex flex-col items-center" style={{ paddingLeft: 24, paddingRight: 24, marginTop: 40 }}>
                  {/* New Runner 섹션 */}
                  <div style={{ width: '100%', maxWidth: 1216, marginBottom: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
                      <h2
                        onClick={() => {
                          setSelectedSectionChip('New Runner 상품 내에서')
                          setSearchQuery('')
                        }}
                        style={{
                          color: 'var(--content-primary, #111214)',
                          fontFamily: '"Noto Sans KR", sans-serif',
                          fontSize: 16,
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: '120%',
                          letterSpacing: '-0.16px',
                          margin: 0,
                          cursor: 'pointer',
                        }}
                      >
                        New Runner
                      </h2>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSectionChip('New Runner 상품 내에서')
                          setSearchQuery('')
                        }}
                        style={{
                          display: 'flex',
                          width: 'var(--spacing-13, 36px)',
                          height: 'var(--spacing-13, 36px)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 'var(--spacing-15, 99px)',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                        aria-label="더보기"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.667"
                          height="16.667"
                          viewBox="0 0 19 19"
                          fill="none"
                          style={{
                            strokeWidth: '1.68px',
                            stroke: 'var(--neutral-700-secondary, #404040)',
                          }}
                        >
                          <path
                            d="M14.1733 6.67336H15.84C16.282 6.67336 16.7059 6.84896 17.0185 7.16152C17.3311 7.47408 17.5067 7.898 17.5067 8.34003V17.5067L14.1733 14.1734H9.17333C8.7313 14.1734 8.30738 13.9978 7.99482 13.6852C7.68226 13.3726 7.50666 12.9487 7.50666 12.5067V11.6734M10.84 6.67336C10.84 7.11539 10.6644 7.53931 10.3518 7.85187C10.0393 8.16443 9.61536 8.34003 9.17333 8.34003H4.17333L0.839996 11.6734V2.50669C0.839996 1.59003 1.59 0.840027 2.50666 0.840027H9.17333C9.61536 0.840027 10.0393 1.01562 10.3518 1.32818C10.6644 1.64074 10.84 2.06467 10.84 2.50669V6.67336Z"
                            stroke="var(--neutral-700-secondary, #404040)"
                            strokeWidth="1.68"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="recommended-products-grid" style={{ maxWidth: 1216 }}>
                      {mockProducts.slice(0, 30).map((product, index) => (
                        <motion.div
                          key={`new-runner-${product.id}`}
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
                  
                  <div style={{ width: '100%', maxWidth: 1216 }}>
                    {/* Discovery 타이틀 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
                      <h2
                        onClick={() => {
                          setSelectedSectionChip('Discovery 상품 내에서')
                          setSearchQuery('')
                        }}
                        style={{
                          color: 'var(--content-primary, #111214)',
                          fontFamily: '"Noto Sans KR", sans-serif',
                          fontSize: 16,
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: '120%',
                          letterSpacing: '-0.16px',
                          margin: 0,
                          cursor: 'pointer',
                        }}
                      >
                        Discovery
                      </h2>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSectionChip('Discovery 상품 내에서')
                          setSearchQuery('')
                        }}
                        style={{
                          display: 'flex',
                          width: 'var(--spacing-13, 36px)',
                          height: 'var(--spacing-13, 36px)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 'var(--spacing-15, 99px)',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                        aria-label="더보기"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.667"
                          height="16.667"
                          viewBox="0 0 19 19"
                          fill="none"
                          style={{
                            strokeWidth: '1.68px',
                            stroke: 'var(--neutral-700-secondary, #404040)',
                          }}
                        >
                          <path
                            d="M14.1733 6.67336H15.84C16.282 6.67336 16.7059 6.84896 17.0185 7.16152C17.3311 7.47408 17.5067 7.898 17.5067 8.34003V17.5067L14.1733 14.1734H9.17333C8.7313 14.1734 8.30738 13.9978 7.99482 13.6852C7.68226 13.3726 7.50666 12.9487 7.50666 12.5067V11.6734M10.84 6.67336C10.84 7.11539 10.6644 7.53931 10.3518 7.85187C10.0393 8.16443 9.61536 8.34003 9.17333 8.34003H4.17333L0.839996 11.6734V2.50669C0.839996 1.59003 1.59 0.840027 2.50666 0.840027H9.17333C9.61536 0.840027 10.0393 1.01562 10.3518 1.32818C10.6644 1.64074 10.84 2.06467 10.84 2.50669V6.67336Z"
                            stroke="var(--neutral-700-secondary, #404040)"
                            strokeWidth="1.68"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="recommended-products-grid" style={{ maxWidth: 1216 }}>
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
