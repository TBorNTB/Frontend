import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, MapPin, Calendar, Award, BookOpen, Code } from "lucide-react";

// Mock data - 실제로는 API에서 가져올 데이터
const getMemberData = (slug: string) => {
  const members = {
    "kim-boan": {
      name: "김보안",
      role: "동아리장",
      year: "4학년",
      major: "컴퓨터공학과",
      specialties: ["System Hacking", "Reverse Engineering", "Binary Analysis"],
      stats: { projects: 15, writeups: 23, contributions: 89 },
      avatar: "/placeholder.svg?height=120&width=120",
      status: "active",
      bio: "시스템 해킹과 리버스 엔지니어링 전문가로, 다양한 CTF 대회에서 우수한 성과를 거두고 있습니다. 동아리 운영과 후배 멘토링에도 적극적으로 참여하고 있습니다.",
      joinDate: "2021-03-01",
      location: "서울, 대한민국",
      contacts: {
        email: "kim.boan@example.com",
        github: "kim-boan",
        linkedin: "kim-boan",
      },
      recentProjects: [
        {
          title: "Linux Kernel Exploit Development",
          date: "2024-01-15",
          category: "System Hacking",
        },
        {
          title: "Advanced Reverse Engineering Toolkit",
          date: "2023-12-20",
          category: "Tools",
        },
        {
          title: "CTF Challenge Creator",
          date: "2023-11-10",
          category: "Education",
        },
      ],
      recentWriteups: [
        {
          title: "HackTheBox - Obscurity Write-up",
          date: "2024-01-20",
          difficulty: "Hard",
        },
        {
          title: "DEFCON CTF 2023 - Binary Exploitation",
          date: "2023-12-15",
          difficulty: "Expert",
        },
        {
          title: "PicoCTF - Reverse Engineering Challenges",
          date: "2023-11-25",
          difficulty: "Medium",
        },
      ],
      achievements: [
        { title: "DEFCON CTF 2023 - 3rd Place", date: "2023-08-15" },
        { title: "CodeGate CTF 2023 - 1st Place", date: "2023-04-20" },
        { title: "Best Mentor Award 2022", date: "2022-12-01" },
      ],
    },
  };

  return members[slug as keyof typeof members] || null;
};

export default function MemberDetailPage({ params }: { params: { slug: string } }) {
  const member = getMemberData(params.slug);

  if (!member) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">멤버를 찾을 수 없습니다</h1>
          <p className="text-gray-600">요청하신 멤버 정보가 존재하지 않습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <img
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
              className="h-32 w-32 rounded-full border-4 border-gray-100"
            />
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
                <Badge variant="outline" className="border-red-200 text-red-600">
                  {member.role}
                </Badge>
              </div>
              <p className="mb-2 text-lg text-gray-600">
                {member.year} • {member.major}
              </p>
              <p className="mb-4 max-w-2xl text-gray-700">{member.bio}</p>
              <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  가입일: {new Date(member.joinDate).toLocaleDateString("ko-KR")}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {member.location}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  연락하기
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">활동 통계</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="rounded-lg bg-blue-50 p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{member.stats.projects}</div>
                    <div className="text-sm text-gray-600">프로젝트</div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{member.stats.writeups}</div>
                    <div className="text-sm text-gray-600">Write-up</div>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{member.stats.contributions}</div>
                    <div className="text-sm text-gray-600">기여도</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">전문 분야</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5" />
                  주요 성과
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="border-l-2 border-yellow-400 pl-3">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-500">{new Date(achievement.date).toLocaleDateString("ko-KR")}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="projects" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  프로젝트
                </TabsTrigger>
                <TabsTrigger value="writeups" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Write-up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>최근 프로젝트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {member.recentProjects.map((project, index) => (
                        <div key={index} className="rounded-lg border p-4 transition-colors hover:bg-gray-50">
                          <div className="mb-2 flex items-start justify-between">
                            <h3 className="font-semibold text-gray-900">{project.title}</h3>
                            <Badge variant="outline">{project.category}</Badge>
                          </div>
                          <p className="text-sm text-gray-500">{new Date(project.date).toLocaleDateString("ko-KR")}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="writeups" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>최근 Write-up</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {member.recentWriteups.map((writeup, index) => (
                        <div key={index} className="rounded-lg border p-4 transition-colors hover:bg-gray-50">
                          <div className="mb-2 flex items-start justify-between">
                            <h3 className="font-semibold text-gray-900">{writeup.title}</h3>
                            <Badge
                              variant={
                                writeup.difficulty === "Expert"
                                  ? "destructive"
                                  : writeup.difficulty === "Hard"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {writeup.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">{new Date(writeup.date).toLocaleDateString("ko-KR")}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
