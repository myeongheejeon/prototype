'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Header, HEADER_TOTAL_HEIGHT_PX } from '@/components/Header'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'

const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/prototype/design-a' : ''
  return `${basePath}${path}`
}

const placeholders = [
  '러닝할 때 무릎 안다칠 러닝화 보여줘.',
  '겨울에 러닝할 때 입기 좋은 자켓 보여줘.',
  '재생소재 패딩 보여줘',
  '성수동에 입고 가고 싶은 모자 보여줘.',
]

// 검색창 바로 아래 대화 가능 칩
const conversationChips = [
  {
    text: '성수동 팝업 갈 때 힙한 느낌 내고 싶어',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
        <path d="M12.7375 2.1625L9.99999 1.25C9.99999 1.91304 9.7366 2.54893 9.26776 3.01777C8.79892 3.48661 8.16304 3.75 7.49999 3.75C6.83695 3.75 6.20107 3.48661 5.73223 3.01777C5.26339 2.54893 4.99999 1.91304 4.99999 1.25L2.26249 2.1625C1.97961 2.25675 1.73973 2.44901 1.58615 2.70459C1.43258 2.96017 1.37542 3.26223 1.42499 3.55625L1.78749 5.725C1.81129 5.87182 1.88667 6.00534 2.00008 6.10157C2.1135 6.1978 2.25751 6.25043 2.40624 6.25H3.74999V12.5C3.74999 13.1875 4.31249 13.75 4.99999 13.75H9.99999C10.3315 13.75 10.6495 13.6183 10.8839 13.3839C11.1183 13.1495 11.25 12.8315 11.25 12.5V6.25H12.5937C12.7425 6.25043 12.8865 6.1978 12.9999 6.10157C13.1133 6.00534 13.1887 5.87182 13.2125 5.725L13.575 3.55625C13.6246 3.26223 13.5674 2.96017 13.4138 2.70459C13.2603 2.44901 13.0204 2.25675 12.7375 2.1625Z" stroke="#9EA2A8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: '감각적인 5만원대 집들이 선물 찾아줘',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
        <path d="M7.5 5V13.125M7.5 5C7.27392 4.06838 6.88465 3.27188 6.38296 2.71444C5.88127 2.15701 5.29043 1.86446 4.6875 1.87497C4.2731 1.87497 3.87567 2.03959 3.58265 2.33261C3.28962 2.62564 3.125 3.02307 3.125 3.43747C3.125 3.85187 3.28962 4.2493 3.58265 4.54232C3.87567 4.83535 4.2731 4.99997 4.6875 4.99997M7.5 5C7.72608 4.06838 8.11535 3.27188 8.61704 2.71444C9.11873 2.15701 9.70957 1.86446 10.3125 1.87497C10.7269 1.87497 11.1243 2.03959 11.4174 2.33261C11.7104 2.62564 11.875 3.02307 11.875 3.43747C11.875 3.85187 11.7104 4.2493 11.4174 4.54232C11.1243 4.83535 10.7269 4.99997 10.3125 4.99997M11.875 7.5V11.875C11.875 12.2065 11.7433 12.5245 11.5089 12.7589C11.2745 12.9933 10.9565 13.125 10.625 13.125H4.375C4.04348 13.125 3.72554 12.9933 3.49112 12.7589C3.2567 12.5245 3.125 12.2065 3.125 11.875V7.5M2.5 5H12.5C12.8452 5 13.125 5.27982 13.125 5.625V6.875C13.125 7.22018 12.8452 7.5 12.5 7.5H2.5C2.15482 7.5 1.875 7.22018 1.875 6.875V5.625C1.875 5.27982 2.15482 5 2.5 5Z" stroke="#9EA2A8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  { text: '10만원 이하 상품 보여줘', icon: null },
  { text: '20대 친구 선물용으로 보여줘', icon: null },
]

// 태깅 대화 영역용 목업 메시지
const initialChatMessages = [
  { type: 'user' as const, content: '성수동 갈 때 입기 좋은 힙한 옷' },
  { type: 'ai' as const, content: '성수동 스타일을 위해 트렌디한 캐주얼 아이템들을 추천드립니다. 미니멀하면서도 세련된 디자인의 옷들을 선별했어요.' },
]

export default function DesignAPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [messages, setMessages] = useState(initialChatMessages)
  const [tagInput, setTagInput] = useState('')
  const chatScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return
    setMessages((prev) => [...prev, { type: 'user', content: searchQuery.trim() }])
    setMessages((prev) => [...prev, { type: 'ai', content: `"${searchQuery}"에 대한 결과를 찾고 있어요. (시안 A 데모)` }])
    setSearchQuery('')
  }

  const handleChipClick = (text: string) => {
    setSearchQuery(text)
  }

  const handleTagSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!tagInput.trim()) return
    setMessages((prev) => [...prev, { type: 'user', content: tagInput.trim() }])
    setMessages((prev) => [...prev, { type: 'ai', content: `태깅: "${tagInput}" (시안 A 데모)` }])
    setTagInput('')
  }

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden" style={{ paddingTop: HEADER_TOTAL_HEIGHT_PX }}>
      <Header />

      {/* 전체 배경 동영상 */}
      <div className="absolute inset-0 z-0">
        <video
          src={getImagePath('/화면 기록 2026-02-05 오후 3.24.08.mov')}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)',
          }}
        />
      </div>

      {/* 중앙: 큰 검색창 + 칩 (남는 공간에서 세로 중앙) */}
      <div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6"
        style={{
          paddingBottom: 24,
          gap: 24,
        }}
      >
        <div className="w-full max-w-[640px] flex flex-col items-center" style={{ gap: 24 }}>
          {/* 큰 검색창 */}
          <div className="search-shadow-layer-1 relative w-full rounded-[20px]">
            <div
              className="relative z-10 flex flex-col rounded-[20px] px-5 py-4"
              style={{
                background: 'var(--common-white, #FFF)',
                boxShadow: '0 -1px 18px 0 rgba(176, 67, 255, 0.12), 0 4px 24px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-neutral-500" aria-hidden>
                  <Search size={22} strokeWidth={1.4} />
                </span>
                <div className="min-w-0 flex-1 relative" style={{ minHeight: 24 }}>
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
                    className="w-full bg-transparent border-0 outline-none text-[15px] md:text-base"
                    style={{
                      fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                      color: searchQuery ? 'var(--content-primary, #111214)' : 'transparent',
                    }}
                  />
                  {!searchQuery && (
                    <div className="absolute inset-0 pointer-events-none flex items-center">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={placeholderIndex}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          className="text-[15px] md:text-base text-[var(--content-placeholder)]"
                          style={{ fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif' }}
                        >
                          {placeholders[placeholderIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--button-primaryActivated)] text-white transition-opacity hover:opacity-90"
                  aria-label="검색"
                >
                  <Search size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* 검색창 바로 아래 대화 칩 */}
          <div className="flex flex-wrap justify-center gap-2">
            {conversationChips.map((chip, i) => (
              <motion.button
                key={i}
                type="button"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleChipClick(chip.text)}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--neutral-200)] bg-[var(--common-white)] px-4 py-2.5 text-sm shadow-sm transition-colors hover:bg-neutral-50"
                style={{
                  fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                  color: 'var(--content-primary)',
                }}
              >
                {chip.icon && <span className="shrink-0 flex items-center justify-center">{chip.icon}</span>}
                <span>{chip.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* 하단: 태깅해서 대화할 수 있는 영역 */}
      <div
        className="absolute left-0 right-0 bottom-0 z-20 flex flex-col rounded-t-2xl border-t border-[var(--border-secondary)] bg-[var(--background-overlay-lightSecondary)] backdrop-blur-xl"
        style={{
          maxHeight: '40vh',
          minHeight: 200,
          boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-primary)]">
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--content-primary)', fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif' }}
          >
            대화
          </span>
        </div>
        <div
          ref={chatScrollRef}
          className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0"
          style={{ maxHeight: 180 }}
        >
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.type === 'user'
                      ? 'bg-[var(--button-primaryActivated)] text-white'
                      : 'bg-[var(--background-tertiary)] text-[var(--content-primary)]'
                  }`}
                  style={{ fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif' }}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <form onSubmit={handleTagSubmit} className="flex gap-2 p-4 border-t border-[var(--border-primary)]">
          <Input
            type="text"
            placeholder="태그로 대화하기..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="flex-1 rounded-xl border-[var(--border-secondary)] bg-white py-2.5 text-sm"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-[var(--button-primaryActivated)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif' }}
          >
            전송
          </button>
        </form>
      </div>
    </div>
  )
}
