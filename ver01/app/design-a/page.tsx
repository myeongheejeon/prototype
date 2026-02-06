'use client'

import React, { useState } from 'react'
import { Header, HEADER_TOTAL_HEIGHT_PX } from '@/components/Header'
import { motion } from 'framer-motion'

// ver01과 동일한 basePath (루트 = ver01, /design-a = 시안 A)
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/prototype' : ''
  return `${basePath}${path}`
}

const SEARCH_PLACEHOLDER = '나이키에서 어떤 제품을 찾으세요? 편하게 질문해 보세요.'

const suggestionChipTexts = [
  '무릎 안아픈 러닝화 추천해줘',
  '겨울에 입고 뛰기 좋은 저지 추천해줘',
  '땀 흡수 잘되는 운동복 보여줘',
]

// ver01 메인과 동일: Start a Conversation with... 빠른 스타트 아이템
const quickStartItems = [
  { id: 1, text: '나이키 팬텀 6 로우 엘레트', color: '#00C9D6', image: '/item1.png' },
  { id: 2, text: ['사브리나', '농구 후디'] as const, color: '#F87171', image: '/item2.png' },
  { id: 3, text: ['나이키', '테크 윈드러너'] as const, color: '#F59E0B', image: '/item3.png' },
  { id: 4, text: ['나이키', '재생 소재'] as const, color: '#16A34A', image: '/item4.png' },
]

export default function DesignAPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedQuickStartItem, setSelectedQuickStartItem] = useState<number | null>(null)

  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return
    setSearchQuery('')
  }

  const handleChipClick = (text: string) => {
    setSearchQuery(text)
  }

  const handleQuickStartItemClick = (itemId: number) => {
    setSelectedQuickStartItem((prev) => (prev === itemId ? null : itemId))
  }

  return (
    <div
      className="relative flex h-screen w-full flex-col overflow-hidden bg-black"
      style={{ paddingTop: HEADER_TOTAL_HEIGHT_PX }}
    >
      <Header variant="designA" />

      {/* 배경 동영상: 전체 화면 반응형, 무한 재생, 투명도 60% */}
      <div className="absolute inset-0 z-0 min-h-full min-w-full">
        <video
          src={getImagePath('/화면 기록 2026-02-05 오후 3.24.08.mov')}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.6 }}
          aria-hidden
        />
      </div>

      <div
        className="relative z-10 flex flex-1 flex-col items-center justify-center w-full design-a-content-padding"
        style={{ paddingBottom: 24 }}
      >
        {/* 컨테이너: (검색+칩 한 덩어리) / (이 컬렉션에 대해...) — 사이 간격 32px */}
        <div
          className="w-full flex flex-col items-stretch sm:max-w-[640px] sm:mx-auto"
          style={{ gap: 32 }}
        >
          {/* 한 덩어리: 검색창 + 제안 질문 칩 */}
          <div className="flex flex-col items-stretch w-full" style={{ gap: 8 }}>
          {/* 검색창 */}
          <div
            className="w-full flex flex-col rounded-[20px]"
            style={{
              maxWidth: 640,
              gap: 4,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              paddingBottom: 16,
              background: 'var(--common-white, #FFF)',
              borderRadius: 'var(--20, 20px)',
            }}
          >
            {/* 1줄: 서치 아이콘 + 플레이스홀더/입력 */}
            <div
              className="flex min-h-9 w-full items-center gap-[10px]"
              style={{ padding: 'var(--12, 12px) 0' }}
            >
              <span className="shrink-0 w-5 h-5 flex items-center justify-center" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5002 17.5L13.9168 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="#9EA2A8"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="min-w-0 flex-1 relative flex items-center" style={{ minHeight: 36 }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSearchSubmit()
                    }
                  }}
                  placeholder={SEARCH_PLACEHOLDER}
                  className="w-full bg-transparent border-0 outline-none placeholder:opacity-100 placeholder:text-[var(--content-placeholder,#9EA2A8)]"
                  style={{
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
                    textOverflow: 'ellipsis',
                  }}
                />
              </div>
            </div>
            {/* 2줄: 검색 버튼 */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="shrink-0 flex w-6 h-6 items-center justify-center rounded-full transition-opacity hover:opacity-90"
                style={{
                  width: 'var(--24, 24px)',
                  height: 'var(--24, 24px)',
                  borderRadius: 'var(--100, 100px)',
                  background: 'var(--button-primaryActivated, #111214)',
                }}
                aria-label="검색"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 14 14" fill="none">
                  <path
                    d="M0.800049 6.63332L6.63338 0.799988M6.63338 0.799988L12.4667 6.63332M6.63338 0.799988V12.4667"
                    stroke="var(--content-inversePrimary, #FFF)"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 제안 질문 칩: 24px 밖으로 나와 풀폭 가로 스크롤, 처음만 왼쪽 24px */}
          <div
            className="design-a-chips-scroll-wrap overflow-x-auto overflow-y-hidden w-full"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="design-a-chips-scroll-inner flex items-center gap-1 flex-nowrap justify-start min-w-min">
              {suggestionChipTexts.map((text, i) => (
                <motion.button
                  key={i}
                  type="button"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleChipClick(text)}
                  className="flex items-center justify-center rounded-full border shrink-0 transition-colors hover:opacity-90 whitespace-nowrap"
                  style={{
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
                    letterSpacing: '-0.12px',
                  }}
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </div>
          </div>

          {/* 그 아래: Start a Conversation with... (ver01 메인과 동일) */}
          <div
            className="flex flex-col items-start w-full"
            style={{ maxWidth: 640, gap: 16 }}
          >
            <h2
              style={{
                color: 'var(--content-inversePrimary, #FFF)',
                fontFamily: '"Noto Sans KR", sans-serif',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '-0.16px',
              }}
            >
              이 컬렉션에 대해 얘기해볼까요?
            </h2>
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
      </div>
    </div>
  )
}
