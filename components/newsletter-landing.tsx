"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { NewsletterSignup } from "./newsletter-signup"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
// Import Mail and MessageSquareText icons
import { Mail, MessageSquareText } from "lucide-react"

export function NewsletterLanding() {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null)
  // Add state variables for showing/hiding question and answer
  const [showQuestion, setShowQuestion] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubscriberCount(10630)
    }

    fetchSubscriberCount()
  }, [])

  const reviews = [
    {
      author: "이O늘",
      jobTitle: "컴퓨터공학과 전공생",
      avatar: "/placeholder.svg?height=48&width=48",
      quote: `<span class="text-green-600 font-semibold">"매일매일</span> 콘텐츠의 꼬리질문 덕분에 알게만 알고 있던 개념들을 확실히 이해했어요."`,
    },
    {
      author: "남O범",
      jobTitle: "Delivery Hero 최종 합격자",
      avatar: "/placeholder.svg?height=48&width=48",
      quote: `<span class="text-green-600 font-semibold">"매일매일</span>을 출퇴근 길에 쇼츠 대신 하나씩 읽다보니, 실제 면접을 앞두고는 큰 부담이 없었어요!"`,
    },
    {
      author: "김O진",
      jobTitle: "네이버 개발자",
      avatar: "/placeholder.svg?height=48&width=48",
      quote: `<span class="text-green-600 font-semibold">"매일매일</span> 작성된 질문들이 실제 면접에서 자주 나오는 유형이라 실전 대비에 최고입니다."`,
    },
    {
      author: "최O영",
      jobTitle: "카카오 신입 개발자",
      avatar: "/placeholder.svg?height=48&width=48",
      quote: `<span class="text-green-600 font-semibold">"매일매일</span> 덕분에 CS 지식을 체계적으로 정리할 수 있었고, 자신감 있게 면접에 임할 수 있었어요!"`,
    },
    {
      author: "정O훈",
      jobTitle: "프리랜서 개발자",
      avatar: "/placeholder.svg?height=48&width=48",
      quote: `<span class="text-green-600 font-semibold">"매일매일</span>은 바쁜 개발자에게 꼭 필요한 서비스입니다. 짧은 시간 안에 핵심 지식을 습득하기 좋아요."`,
    },
  ]

  const sampleQuestionCategory = "[네트워크 보안]"
  const sampleQuestionText = "SYN Flood 공격이란 무엇이며, 이를 방어하기 위한 방법에는 어떤 것들이 있나요?"
  const sampleAnswer = `
    SYN Flood 공격은 TCP 3-way handshake의 취약점을 이용해 서버의 자원을 고갈시키는 DoS 공격입니다. 공격자는 SYN 패킷을 대량으로 보내고 ACK를 보내지 않아 서버의 SYN-RECEIVED 상태 연결 큐를 가득 채웁니다.

    **방어 방법:**
    1.  **SYN Cookies:** 서버가 SYN-ACK 대신 쿠키를 보내고, 클라이언트가 ACK를 보낼 때만 연결을 설정합니다.
    2.  **Firewall/IPS:** 비정상적인 SYN 트래픽을 탐지하고 차단합니다.
    3.  **Connection Rate Limiting:** 특정 IP 주소에서 오는 연결 요청 수를 제한합니다.
    4.  **Increased Backlog Queue:** 서버의 SYN-RECEIVED 큐 크기를 늘려 더 많은 동시 연결을 처리할 수 있게 합니다.
  `

  // Add toggle functions
  const toggleQuestion = () => {
    setShowQuestion((prev) => !prev)
    // When question is hidden and then shown again, hide the answer by default
    if (!showQuestion) {
      setShowAnswer(false)
    }
  }

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev)
  }

  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-orange-50 flex flex-col items-center justify-center text-center min-h-[calc(100vh-128px)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {subscriberCount !== null && (
            <div className="inline-flex items-center justify-center bg-red-100 text-red-800 rounded-full px-5 py-2 mb-8 shadow-lg">
              <p className="text-base font-medium">
                지금까지 <span className="text-xl lg:text-2xl font-bold">{subscriberCount.toLocaleString()}</span>명의
                개발자가
                <br className="sm:hidden" />
                매일매일을 구독했습니다.
              </p>
            </div>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            기술 면접 질문을 매일매일
            <br />
            메일로 보내드릴게요!
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            따로 시간 내지 않아도, 지하철에서 하나씩 읽다보면 면접 걱정이 사라질 거예요.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300"
              >
                무료 구독하기
              </Button>
            </DialogTrigger>
            <NewsletterSignup />
          </Dialog>
        </div>
      </section>

      {/* 후기/추천사 섹션 */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">실제 구독자들의 후기</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-full rounded-xl border-none">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div className="flex items-center mb-4">
                        <img
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.author}
                          width={48}
                          height={48}
                          className="rounded-full mr-3"
                        />
                        <div>
                          <p className="text-lg font-bold text-gray-900">{review.author}</p>
                          <p className="text-sm text-gray-500">{review.jobTitle}</p>
                        </div>
                      </div>
                      <p
                        className="text-gray-700 text-lg leading-relaxed flex-grow"
                        dangerouslySetInnerHTML={{ __html: review.quote }}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* 예시 질문 미리보기 섹션 */}
      <section className="py-20 bg-red-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">👀 이런 질문을 받아보실 수 있어요!</h2>
          <p className="text-xl text-gray-600 mb-8">오늘 발송된 예시 질문</p>

          {!showQuestion && (
            <Button
              onClick={toggleQuestion}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <Mail className="mr-3 h-6 w-6" />
              질문 보기
            </Button>
          )}

          {showQuestion && (
            <Card className="max-w-2xl mx-auto shadow-lg rounded-xl border-none">
              <CardContent className="p-8 bg-white rounded-xl">
                <div className="text-left">
                  <p className="text-red-600 font-semibold text-lg mb-2">{sampleQuestionCategory}</p>
                  <p className="text-gray-900 font-bold text-xl leading-relaxed mb-6">{sampleQuestionText}</p>

                  {!showAnswer && (
                    <div className="flex justify-center mt-6">
                      <Button
                        onClick={toggleAnswer}
                        variant="outline"
                        className="text-red-600 hover:bg-red-50 hover:text-red-700 inline-flex items-center"
                      >
                        <MessageSquareText className="mr-2 h-5 w-5" />
                        답변 보기
                      </Button>
                    </div>
                  )}

                  {showAnswer && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">답변</h3>
                      <div
                        className="prose prose-base max-w-none text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sampleAnswer.trim().replace(/\n/g, "<br/>") }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-end mt-6">
                  <Button variant="ghost" onClick={toggleQuestion} className="text-gray-500 hover:text-gray-700">
                    닫기
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  )
}
