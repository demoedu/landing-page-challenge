"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Brillance란 무엇이며 누구를 위한 것인가요?",
    answer:
      "Brillance는 맞춤형 계약 관리가 필요한 비즈니스를 위해 설계된 포괄적인 청구 자동화 플랫폼입니다. SaaS 기업, 서비스 제공업체, 청구 프로세스를 간소화하려는 기업에 완벽합니다.",
  },
  {
    question: "맞춤형 계약 청구는 어떻게 작동하나요?",
    answer:
      "플랫폼이 맞춤형 계약을 자동으로 처리하고, 특정 조건에 따라 청구 금액을 계산하며, 송장을 생성합니다. 복잡한 가격 구조, 사용량 기반 청구, 맞춤형 청구 주기를 설정할 수 있습니다.",
  },
  {
    question: "Brillance를 기존 도구와 통합할 수 있나요?",
    answer:
      "네! Brillance는 인기 있는 CRM 시스템, 회계 소프트웨어, 결제 프로세서와 원활하게 통합됩니다. 기존 워크플로우와의 맞춤형 통합을 위해 API 및 웹훅을 지원합니다.",
  },
  {
    question: "어떤 지원을 제공하나요?",
    answer:
      "연중무휴 고객 지원, 엔터프라이즈 고객을 위한 전담 계정 관리자, 포괄적인 문서, 빠른 시작을 위한 온보딩 지원을 제공합니다.",
  },
  {
    question: "Brillance에서 내 데이터는 안전한가요?",
    answer:
      "물론입니다. 엔드투엔드 암호화, SOC 2 규정 준수, 정기적인 보안 감사를 포함한 엔터프라이즈급 보안 조치를 사용합니다. 데이터는 안전하고 중복된 데이터 센터에 저장됩니다.",
  },
  {
    question: "Brillance를 어떻게 시작하나요?",
    answer:
      "시작하기 간단합니다! 무료 평가판에 가입하고 기존 시스템을 연결하면, 온보딩 팀이 24시간 내에 첫 번째 맞춤형 청구 워크플로우를 설정하는 데 도움을 드립니다.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            자주 묻는 질문
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            데이터를 탐색하고 대시보드를 구축하며
            <br className="hidden md:block" />
            팀을 하나로 모으세요.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
