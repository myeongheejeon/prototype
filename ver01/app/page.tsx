'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

interface Product {
  id: number
  title: string
  price: string
  image: string
  height: number
}

const mockProducts: Product[] = [
  { id: 1, title: 'Oversized Hoodie', price: '₩89,000', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', height: 500 },
  { id: 2, title: 'Denim Jacket', price: '₩125,000', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=350&fit=crop', height: 350 },
  { id: 3, title: 'Cargo Pants', price: '₩68,000', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=450&fit=crop', height: 450 },
  { id: 4, title: 'White Sneakers', price: '₩145,000', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=320&fit=crop', height: 320 },
  { id: 5, title: 'Leather Bag', price: '₩210,000', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=480&fit=crop', height: 480 },
  { id: 6, title: 'Striped Shirt', price: '₩55,000', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=380&fit=crop', height: 380 },
  { id: 7, title: 'Black Cap', price: '₩32,000', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop', height: 400 },
  { id: 8, title: 'Wide Pants', price: '₩78,000', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=520&fit=crop', height: 520 },
  { id: 9, title: 'Knit Sweater', price: '₩95,000', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=460&fit=crop', height: 460 },
  { id: 10, title: 'Chelsea Boots', price: '₩168,000', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=340&fit=crop', height: 340 },
  { id: 11, title: 'Wool Coat', price: '₩285,000', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=550&fit=crop', height: 550 },
  { id: 12, title: 'Basic Tee', price: '₩29,000', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=360&fit=crop', height: 360 },
]

const suggestionChips = [
  '성수동 갈 때 입기 좋은 힙한 옷',
  '저번에 찜한 바지랑 어울리는 티셔츠',
  '30대 남성 선물 추천',
]

const chatMessages = [
  { type: 'user', content: '성수동 갈 때 입기 좋은 힙한 옷' },
  { type: 'ai', content: '성수동 스타일을 위해 트렌디한 캐주얼 아이템들을 추천드립니다. 미니멀하면서도 세련된 디자인의 옷들을 선별했어요.' },
]

export default function GelatoApp() {
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isProductsExpanded, setIsProductsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current && !isSearchMode) {
            const scrolled = window.scrollY
            if (scrolled > 250 && !isProductsExpanded) {
              setIsProductsExpanded(true)
            } else if (scrolled <= 150 && isProductsExpanded) {
              setIsProductsExpanded(false)
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isProductsExpanded, isSearchMode])

  const handleChipClick = () => {
    setIsSearchMode(true)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (value.trim()) {
      setIsSearchMode(true)
    }
  }

  const handleBackToHome = () => {
    setIsSearchMode(false)
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-full items-center justify-between px-8">
          <h1 className="text-2xl font-bold lowercase text-gray-800">gelatto</h1>
          <div className="flex items-center gap-5">
            <button className="transition-opacity hover:opacity-70" aria-label="User profile">
              <User size={22} className="text-gray-700" />
            </button>
            <button className="relative transition-opacity hover:opacity-70" aria-label="Shopping cart">
              <ShoppingCart size={22} className="text-gray-700" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="pt-16">
        <AnimatePresence mode="wait">
          {!isSearchMode ? (
            // Home View
            <div ref={containerRef} className="relative">
              {/* Sticky Search Bar */}
              <div
                className={
                  isProductsExpanded 
                    ? 'sticky top-16 z-40 bg-white/90 backdrop-blur-md py-3 shadow-sm' 
                    : 'relative'
                }
                style={{
                  transition: 'all 0.5s ease',
                }}
              >
                <div 
                  className="flex flex-col items-center justify-center px-6"
                  style={{
                    minHeight: isProductsExpanded ? '0' : '90vh',
                    transition: 'min-height 0.5s ease',
                  }}
                >
                  <motion.div 
                    className="w-full space-y-8"
                    animate={{
                      maxWidth: isProductsExpanded ? '600px' : '1024px',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Search Bar */}
                    <div className={`space-y-6 ${isProductsExpanded ? 'space-y-0' : ''}`}>
                      <div className="relative">
                        <motion.div 
                          className="animate-pulse-glow relative bg-white/50 backdrop-blur-md"
                          animate={{
                            borderRadius: isProductsExpanded ? '20px' : '24px',
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <textarea
                            placeholder="원하는 옷의 스타일을 설명해보세요..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
                                e.preventDefault()
                                setIsSearchMode(true)
                              }
                            }}
                            style={{
                              minHeight: isProductsExpanded ? '50px' : '100px',
                              paddingLeft: isProductsExpanded ? '16px' : '24px',
                              paddingRight: isProductsExpanded ? '56px' : '64px',
                              paddingTop: isProductsExpanded ? '13px' : '20px',
                              paddingBottom: isProductsExpanded ? '13px' : '20px',
                              transition: 'all 0.5s ease',
                            }}
                            className="w-full resize-none rounded-3xl border-0 bg-transparent text-base leading-relaxed placeholder:text-gray-500 focus:outline-none focus:ring-0"
                            rows={1}
                          />
                          <motion.div
                            className="absolute text-blue-600"
                            animate={{
                              right: isProductsExpanded ? '16px' : '24px',
                              bottom: isProductsExpanded ? '13px' : '20px',
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Search size={isProductsExpanded ? 20 : 24} />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Suggestion Chips */}
                      {!isProductsExpanded && (
                        <motion.div 
                          initial={{ opacity: 1 }}
                          animate={{ opacity: isProductsExpanded ? 0 : 1 }}
                          className="flex flex-wrap justify-center gap-3 px-4"
                        >
                          {suggestionChips.map((chip, index) => (
                            <motion.button
                              key={index}
                              whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.08)' }}
                              whileTap={{ scale: 0.98 }}
                              onClick={handleChipClick}
                              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm text-gray-700 transition-all hover:border-blue-400"
                            >
                              {chip}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Recommendation Section */}
              <div className="px-4 pt-8">
                <div className="min-h-screen space-y-6 pb-12">
                  <div className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4 xl:columns-5">
                    {mockProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group mb-3 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            style={{ height: `${product.height}px` }}
                            className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-medium text-gray-800">{product.title}</p>
                          <p className="mt-1 text-xs font-semibold text-blue-600">{product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Search Mode - Split View
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-[calc(100vh-64px)]"
            >
              {/* Left Panel - Chat Context */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-[35%] border-r border-gray-200 bg-white"
              >
                <div className="flex h-full flex-col">
                  {/* Search Input in Chat Panel */}
                  <div className="border-b border-gray-200 p-4">
                    <Input
                      type="text"
                      placeholder="Follow-up question..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                    />
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 space-y-4 overflow-y-auto p-4">
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
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{msg.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Back Button */}
                  <div className="border-t border-gray-200 p-4">
                    <button
                      onClick={handleBackToHome}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Right Panel - Product Results */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-[65%] overflow-y-auto"
              >
                <div className="p-4">
                  <h3 className="mb-6 text-xl font-semibold text-gray-800">Search Results</h3>
                  <div className="columns-2 gap-3 space-y-3 lg:columns-3 xl:columns-4">
                    {mockProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                        className="group mb-3 break-inside-avoid overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            style={{ height: `${product.height}px` }}
                            className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-medium text-gray-800">{product.title}</p>
                          <p className="mt-1 text-xs font-semibold text-blue-600">{product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
