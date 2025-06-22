"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

// 보안 동아리에 맞는 분야 목록
const securityFields = [
  { id: "system-hacking", label: "시스템 해킹" },
  { id: "web-hacking", label: "웹 해킹" },
  { id: "digital-forensics", label: "디지털 포렌식" },
  { id: "reverse-engineering", label: "리버싱" },
  { id: "cryptography", label: "암호학" },
  { id: "network-security", label: "네트워크 보안" },
  { id: "iot-security", label: "IoT 보안" },
]

// 수신 빈도 목록
const receptionFrequencies = [
  { id: "daily", value: "daily", label: "주 5회", description: "월-금" },
  { id: "weekly", value: "weekly", label: "주 1회", description: "월요일" },
]

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [selectedFrequency, setSelectedFrequency] = useState<string>("daily")

  const handleFieldChange = (fieldId: string, checked: boolean) => {
    setSelectedFields((prev) => (checked ? [...prev, fieldId] : prev.filter((id) => id !== fieldId)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      alert("이메일 주소를 입력해주세요.")
      return
    }
    if (selectedFields.length === 0) {
      alert("하나 이상의 분야를 선택해주세요.")
      return
    }

    const subscriptionDetails = {
      email,
      fields: selectedFields,
      frequency: selectedFrequency,
    }
    console.log("뉴스레터 구독 신청:", subscriptionDetails)
    alert("뉴스레터 구독 신청이 완료되었습니다! 매일 보안 CS 지식을 받아보세요.")
    // 실제 백엔드 연동 시 여기에 API 호출 로직 추가
  }

  return (
    <DialogContent className="sm:max-w-[425px] p-0">
      <Card className="border-0 shadow-none">
        <CardContent className="p-8">
          <DialogHeader className="relative mb-6">
            <DialogTitle className="text-xl font-bold text-gray-900 text-center">매일매일 구독</DialogTitle>
            <DialogClose asChild className="absolute top-0 right-0">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-5 w-5 text-gray-500" />
                <span className="sr-only">닫기</span>
              </Button>
            </DialogClose>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 분야 (Field) Checkboxes */}
            <div>
              <Label className="text-base font-semibold text-gray-900 mb-2 block">
                분야 <span className="text-sm text-gray-500">*중복 선택 가능</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {securityFields.map((field) => (
                  <div key={field.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={field.id}
                      checked={selectedFields.includes(field.id)}
                      onCheckedChange={(checked) => handleFieldChange(field.id, checked === true)}
                    />
                    <Label htmlFor={field.id} className="text-base font-normal">
                      {field.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* 수신 빈도 (Reception Frequency) Radio Group */}
            <div>
              <Label className="text-base font-semibold text-gray-900 mb-2 block">수신 빈도</Label>
              <RadioGroup defaultValue="daily" onValueChange={setSelectedFrequency} className="grid grid-cols-2 gap-4">
                {receptionFrequencies.map((freq) => (
                  <div key={freq.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={freq.value} id={freq.id} />
                    <Label htmlFor={freq.id} className="flex flex-col items-start text-base font-normal">
                      <span>{freq.label}</span>
                      <span className="text-sm text-gray-500">{freq.description}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* 이메일 (Email) Input */}
            <div>
              <Label htmlFor="email" className="text-base font-semibold text-gray-900 mb-2 block">
                이메일
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700">
              확인
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            언제든지 구독을 취소할 수 있습니다. 개인정보는 안전하게 보호됩니다.
            <br />
            <Link href="/newsletter/unsubscribe" className="text-red-600 hover:underline">
              뉴스레터 구독 취소
            </Link>
          </p>
        </CardContent>
      </Card>
    </DialogContent>
  )
}
