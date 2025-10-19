"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { LuUser, LuMail } from "react-icons/lu"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: 여기에 실제 폼 제출 로직 추가
    console.log("Form submitted:", formData)

    // 시뮬레이션: 제출 후 2초 대기
    setTimeout(() => {
      setIsSubmitting(false)
      onOpenChange(false)
      setFormData({ name: "", email: "" })
      alert("성공적으로 등록되었습니다!")
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border border-[rgba(55,50,47,0.12)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#37322F] font-sans">
            무료로 시작하기
          </DialogTitle>
          <DialogDescription className="text-[#605A57] text-sm font-medium font-sans">
            정보를 입력하시면 빠르게 시작할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#37322F] text-sm font-medium font-sans">
                이름
              </Label>
              <div className="relative">
                <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#605A57]" />
                <Input
                  id="name"
                  type="text"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="pl-10 border-[rgba(55,50,47,0.12)] focus:border-[#37322F] focus:ring-[#37322F]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#37322F] text-sm font-medium font-sans">
                이메일
              </Label>
              <div className="relative">
                <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#605A57]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="pl-10 border-[rgba(55,50,47,0.12)] focus:border-[#37322F] focus:ring-[#37322F]"
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 bg-[#37322F] hover:bg-[#2A2520] text-white rounded-full font-medium text-sm transition-colors shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
          >
            {isSubmitting ? "제출 중..." : "무료로 시작하기"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
