"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Settings, Shield, Camera, Save, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock current user data
const currentUser = {
  name: "김보안",
  email: "kim.boan@example.com",
  role: "동아리장",
  year: "4학년",
  major: "컴퓨터공학과",
  specialties: ["System Hacking", "Reverse Engineering", "Binary Analysis"],
  bio: "시스템 해킹과 리버스 엔지니어링 전문가로, 다양한 CTF 대회에서 우수한 성과를 거두고 있습니다.",
  avatar: "/placeholder.svg?height=120&width=120",
  joinDate: "2021-03-01",
  location: "서울, 대한민국",
  github: "kim-boan",
  linkedin: "kim-boan",
  stats: { projects: 15, writeups: 23, contributions: 89 },
};

export default function MyPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    major: currentUser.major,
    year: currentUser.year,
    bio: currentUser.bio,
    location: currentUser.location,
    github: currentUser.github,
    linkedin: currentUser.linkedin,
    specialties: currentUser.specialties.join(", "),
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = () => {
    // 실제로는 API 호출
    toast({
      title: "프로필이 업데이트되었습니다",
      description: "변경사항이 성공적으로 저장되었습니다.",
    });
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "비밀번호 확인 오류",
        description: "새 비밀번호와 확인 비밀번호가 일치하지 않습니다.",
        variant: "destructive",
      });
      return;
    }

    // 실제로는 API 호출
    toast({
      title: "비밀번호가 변경되었습니다",
      description: "새 비밀번호로 성공적으로 변경되었습니다.",
    });

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <User className="h-8 w-8 text-gray-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">마이페이지</h1>
                <p className="text-gray-600">프로필 정보를 관리하고 설정을 변경하세요</p>
              </div>
            </div>
            <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "outline" : "default"}>
              {isEditing ? (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  보기 모드
                </>
              ) : (
                <>
                  <Settings className="mr-2 h-4 w-4" />
                  편집 모드
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6 text-center">
                  <div className="relative inline-block">
                    <Avatar className="mx-auto h-24 w-24">
                      <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-900">{currentUser.name}</h2>
                  <Badge variant="outline" className="mt-2 border-red-200 text-red-600">
                    {currentUser.role}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="text-lg font-bold text-blue-600">{currentUser.stats.projects}</div>
                      <div className="text-xs text-gray-600">프로젝트</div>
                    </div>
                    <div className="rounded-lg bg-green-50 p-3">
                      <div className="text-lg font-bold text-green-600">{currentUser.stats.writeups}</div>
                      <div className="text-xs text-gray-600">Write-up</div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-3">
                      <div className="text-lg font-bold text-purple-600">{currentUser.stats.contributions}</div>
                      <div className="text-xs text-gray-600">기여도</div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">전문 분야</h3>
                    <div className="flex flex-wrap gap-1">
                      {currentUser.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">프로필 정보</TabsTrigger>
                <TabsTrigger value="security">보안 설정</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>기본 정보</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="name">이름</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">이메일</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="major">전공</Label>
                        <Select
                          value={formData.major}
                          onValueChange={(value) => setFormData({ ...formData, major: value })}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="컴퓨터공학과">컴퓨터공학과</SelectItem>
                            <SelectItem value="정보보호학과">정보보호학과</SelectItem>
                            <SelectItem value="사이버보안학과">사이버보안학과</SelectItem>
                            <SelectItem value="소프트웨어학과">소프트웨어학과</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="year">학년</Label>
                        <Select
                          value={formData.year}
                          onValueChange={(value) => setFormData({ ...formData, year: value })}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1학년">1학년</SelectItem>
                            <SelectItem value="2학년">2학년</SelectItem>
                            <SelectItem value="3학년">3학년</SelectItem>
                            <SelectItem value="4학년">4학년</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio">자기소개</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialties">전문 분야 (쉼표로 구분)</Label>
                      <Input
                        id="specialties"
                        value={formData.specialties}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            specialties: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        placeholder="System Hacking, Reverse Engineering, Binary Analysis"
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">위치</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="github">GitHub 사용자명</Label>
                        <Input
                          id="github"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn 사용자명</Label>
                        <Input
                          id="linkedin"
                          value={formData.linkedin}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              linkedin: e.target.value,
                            })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-2 pt-4">
                        <Button onClick={handleSave}>
                          <Save className="mr-2 h-4 w-4" />
                          저장
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          취소
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      비밀번호 변경
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">현재 비밀번호</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            currentPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">새 비밀번호</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            newPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Button onClick={handlePasswordChange} className="w-full">
                      비밀번호 변경
                    </Button>
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
