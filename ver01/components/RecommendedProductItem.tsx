'use client'

import React from 'react'

export type AspectRatioType = '1:1' | '2:1' | '1:2'

export interface RecommendedProductItemProps {
  id: number
  brand: string
  title: string
  price: number
  image: string
  discountRate?: number
  aspectRatio?: AspectRatioType
}

const aspectRatioMap: Record<AspectRatioType, string> = {
  '1:1': '1',
  '2:1': '2',
  '1:2': '1 / 2',
}

export function RecommendedProductItem({
  brand,
  title,
  price,
  image,
  discountRate,
  aspectRatio = '1:1',
}: RecommendedProductItemProps) {
  const displayPrice = price.toLocaleString('ko-KR')
  const discountedPrice =
    discountRate != null && discountRate > 0
      ? Math.round((price * (100 - discountRate)) / 100).toLocaleString('ko-KR')
      : null

  return (
    <article
      className="recommended-product-item flex flex-col items-stretch w-full"
      style={{
        borderRadius: 'var(--8, 8px)',
        border: '1px solid var(--border-secondary, #E6E8EB)',
        background: 'var(--background-primary, #FFF)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* 이미지 영역: 1:1, 2:1, 1:2 비율 (상단 모서리 둥글게) */}
      <div
        className="relative flex w-full items-center justify-center overflow-hidden border-b border-[var(--border-primary,#F4F5F7)]"
        style={{
          aspectRatio: aspectRatioMap[aspectRatio],
          borderTopLeftRadius: 'var(--8, 8px)',
          borderTopRightRadius: 'var(--8, 8px)',
          borderBottom: '1px solid var(--border-primary, #F4F5F7)',
        }}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        {/* 리파인 버튼 */}
        <button
          type="button"
          className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-primary,#F4F5F7)] bg-[var(--background-overlay-lightPrimary,rgba(255,255,255,0.48))] p-2.5 transition-opacity hover:opacity-90"
          style={{
            right: '7.667px',
            bottom: '12px',
            width: 40,
            height: 40,
            padding: 10,
            borderRadius: 'var(--100, 100px)',
          }}
          aria-label="리파인"
        >
          <img src="/refine.svg" alt="" width={20} height={20} className="shrink-0 w-5 h-5" />
        </button>
      </div>

      {/* 텍스트 영역 */}
      <div
        className="flex flex-col items-start gap-0.5 self-stretch rounded-[4px]"
        style={{
          padding: '10px 12px 14px 12px',
          gap: 'var(--2, 2px)',
          borderRadius: 'var(--4, 4px)',
        }}
      >
        {/* 브랜드 */}
        <p
          className="w-full overflow-hidden text-ellipsis self-stretch"
          style={{
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
            letterSpacing: '0.22px',
          }}
        >
          {brand}
        </p>
        {/* 상품명 */}
        <p
          className="w-full overflow-hidden text-ellipsis self-stretch"
          style={{
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
            letterSpacing: '-0.13px',
          }}
        >
          {title}
        </p>
        {/* 가격 영역 */}
        <div
          className="flex items-start gap-1"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--4, 4px)',
          }}
        >
          {discountRate != null && discountRate > 0 && (
            <span
              className="flex items-center"
              style={{
                color: 'var(--content-discount, var(--red-500))',
                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                lineHeight: '120%',
                letterSpacing: '-0.13px',
              }}
            >
              {discountRate}%
            </span>
          )}
          <div className="flex items-center gap-0">
            <span
              style={{
                color: 'var(--content-primary, #111214)',
                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                lineHeight: '120%',
                letterSpacing: '-0.13px',
              }}
            >
              {discountedPrice ?? displayPrice}
            </span>
            <span
              className="shrink-0"
              style={{
                width: 12,
                color: 'var(--content-secondary, #3D4045)',
                fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '-0.12px',
              }}
            >
              원
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
