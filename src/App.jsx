import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Star, Heart, MapPin, Calendar, Users, Music, Instagram, MessageSquare } from 'lucide-react';
// カスタムSVGアイコンコンポーネント
const TikTokIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const LineIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
  </svg>
);

const ThreadsIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <text x="12" y="16" textAnchor="middle" fontSize="16" fontWeight="bold">@</text>
  </svg>
);
// Import images and video
import logoImage from './assets/TOKYO23Ku_LOGO.png';
import newLogoImage from './assets/TOKYO23Ku_LOGO_NEW.png';
import tokyoHighwayVideo from './assets/tokyo_highway.mp4';
import adachiImage from './assets/ADACHI.png';
import arakawaImage from './assets/ARAKAWA.png';
import bunkyoImage from './assets/BUNKYO.png';
import chiyodaImage from './assets/CHIYODA.png';
import chuoImage from './assets/CHUO.png';
import edogawaImage from './assets/EDOGAWA.png';
import itabashiImage from './assets/ITABASHI.png';
import katsushikaImage from './assets/KATSUSHIKA.png';
import kitaImage from './assets/KITA.png';
import kotoImage from './assets/KOTO.png';
import meguroImage from './assets/MEGURO.png';
import minatoImage from './assets/MINATO.png';
import nakanoImage from './assets/NAKANO.png';
import nerimaImage from './assets/NERIMA.png';
import otaImage from './assets/OHTA.png';
import setagayaImage from './assets/SETAGAYA.png';
import shibuyaImage from './assets/SHIBUYA.png';
import shinagawaImage from './assets/SHINAGAWA.png';
import shinjukuImage from './assets/SHINJUKU.png';
import suginamiImage from './assets/SUGINAMI.png';
import sumidaImage from './assets/SUMIDA.png';
import taitoImage from './assets/TAITO.png';
import toshimaImage from './assets/TOSHIMA.png';

const members = [
  {
    id: 'adachi',
    name: '足立区おじさん',
    ward: '足立区',
    image: adachiImage,
    catchphrase: '目ヂカラ強めで挨拶マジメ涙もろめな足立区おじさんです！',
    holiday: '荒川河川敷でスクワット。長時間ダンスの体力作り。',
    color: '#FF6B6B'
  },
  {
    id: 'arakawa',
    name: '荒川区おじさん',
    ward: '荒川区',
    image: arakawaImage,
    catchphrase: '恋するボタン、外れてない？日暮里繊維街の裁縫男子 荒川区おじさんです！',
    holiday: '日暮里繊維街でハンドメイド服作り。ハンドクラフト教室も。',
    color: '#4ECDC4'
  },
  {
    id: 'bunkyo',
    name: '文京区おじさん',
    ward: '文京区',
    image: bunkyoImage,
    catchphrase: 'カンディンスキーは読めてもキミのスキは読めません 文京区おじさんです！',
    holiday: '古書店巡り＆ミュージアムカフェでまったり。',
    color: '#45B7D1'
  },
  {
    id: 'chiyoda',
    name: '千代田区おじさん',
    ward: '千代田区',
    image: chiyodaImage,
    catchphrase: '法案よりもキミへの気持ちを通したい！千代田区おじさんです！',
    holiday: '皇居ラン＆丸の内カフェ巡り。政治書で世界情勢研究',
    color: '#96CEB4'
  },
  {
    id: 'chuo',
    name: '中央区おじさん',
    ward: '中央区',
    image: chuoImage,
    catchphrase: 'スーツとワインと大人の余裕。今夜も銀座で"中央突破"中央区おじさんです！',
    holiday: '銀座でワインとスイーツの食べ歩き。築地で朝ごはんデート。',
    color: '#FFEAA7'
  },
  {
    id: 'edogawa',
    name: '江戸川区おじさん',
    ward: '江戸川区',
    image: edogawaImage,
    catchphrase: '走る愛のフルマラソン　胸アツ熱中症に気をつけて！江戸川区おじさんです！',
    holiday: '河川敷ランニング。船堀タワーから夜景鑑賞。',
    color: '#74B9FF'
  },
  {
    id: 'itabashi',
    name: '板橋区おじさん',
    ward: '板橋区',
    image: itabashiImage,
    catchphrase: '揚げたてアゲだよ　恋にコロッと落としてあげる！板橋区おじさんです！',
    holiday: 'コロッケをカリカリにする研究。洋食屋さん巡り',
    color: '#55A3FF'
  },
  {
    id: 'katsushika',
    name: '葛飾区おじさん',
    ward: '葛飾区',
    image: katsushikaImage,
    catchphrase: '女にゃ弱いが義理と涙にゃもっと弱い　こち恋トラベル葛飾区おじさんです！',
    holiday: '24時間こち亀を読むか24時間、寅さんを観ていたい。',
    color: '#FD79A8'
  },
  {
    id: 'kita',
    name: '北区おじさん',
    ward: '北区',
    image: kitaImage,
    catchphrase: '羽伸ばし、おいでよ赤羽、チルチル充ちる幸せナイト北区おじさんです！',
    holiday: '赤羽OK横丁の立ち飲みツアー。荒川土手で夕日を眺める。',
    color: '#FDCB6E'
  },
  {
    id: 'koto',
    name: '江東区おじさん',
    ward: '江東区',
    image: kotoImage,
    catchphrase: '住まいと年収High階層、だけど物腰低階層！江東区おじさんです！',
    holiday: 'バルコニーでホームパーティー。湾岸エリアでSUP体験。',
    color: '#6C5CE7'
  },
  {
    id: 'meguro',
    name: '目黒区おじさん',
    ward: '目黒区',
    image: meguroImage,
    catchphrase: '恋もパーマも時かけて!キミと一緒にヴィンテージ目黒区おじさんです！',
    holiday: 'インテリアショップ巡り＆お気に入りカフェで音楽鑑賞。',
    color: '#A29BFE'
  },
  {
    id: 'minato',
    name: '港区おじさん',
    ward: '港区',
    image: minatoImage,
    catchphrase: '甘い泡と淡い恋あまねくキミにも飲ませたい港区おじさんです！',
    holiday: '夜景クルーズ＆シャンパン。夜は伝説のBAR、GENIE通い。',
    color: '#FD79A8'
  },
  {
    id: 'nakano',
    name: '中野区おじさん',
    ward: '中野区',
    image: nakanoImage,
    catchphrase: '恋の香りをブレンド中　君の魅力をハンドドリップ中野区おじさんです！',
    holiday: 'ドリップコーヒー研究のため喫茶店巡り。古道具屋も好き。',
    color: '#00B894'
  },
  {
    id: 'nerima',
    name: '練馬区おじさん',
    ward: '練馬区',
    image: nerimaImage,
    catchphrase: '団地の男子、恋を肥やして　愛も野菜も育てちゃう練馬区おじさんです！',
    holiday: '農園カフェで野菜たっぷりランチ。園芸店巡りも',
    color: '#E17055'
  },
  {
    id: 'ota',
    name: '大田区おじさん',
    ward: '大田区',
    image: otaImage,
    catchphrase: 'オイルの香りも媚薬の香りに　職人プリンス大田区おじさんです！',
    holiday: '羽田空港で飛行機撮影。温泉スパでまったり休日。',
    color: '#00CEC9'
  },
  {
    id: 'setagaya',
    name: '世田谷区おじさん',
    ward: '世田谷区',
    image: setagayaImage,
    catchphrase: '恋のバグ、ハグしてはぐくみハッキング！世田谷区おじさんです！',
    holiday: '三軒茶屋でアートイベント参加。駒沢公園ラン＋ドッグカフェ。',
    color: '#81ECEC'
  },
  {
    id: 'shibuya',
    name: '渋谷区おじさん',
    ward: '渋谷区',
    image: shibuyaImage,
    catchphrase: 'ティックもトックもおじさんリズム！若者気取りの渋谷区おじさんです！',
    holiday: 'レコードショップ巡り。夜はクラブ通い、推しクラブはATOM TOKYO',
    color: '#FDCB6E'
  },
  {
    id: 'shinagawa',
    name: '品川区おじさん',
    ward: '品川区',
    image: shinagawaImage,
    catchphrase: '手を変え品変え　もつれた心をターミナル品川区おじさんです！',
    holiday: '手を変え品変え　もつれた心をターミナル品川区おじさんです！',
    color: '#FF7675'
  },
  {
    id: 'shinjuku',
    name: '新宿区おじさん',
    ward: '新宿区',
    image: shinjukuImage,
    catchphrase: 'ネオンが照らす俺のシワ、魅惑と疲労の二刀流、新宿区おじさんです！',
    holiday: 'ジャズバー巡り。サンモールスタジオで舞台観劇。最近ルビンノツボ「女の子になりたい？」に感動',
    color: '#FD79A8'
  },
  {
    id: 'suginami',
    name: '杉並区おじさん',
    ward: '杉並区',
    image: suginamiImage,
    catchphrase: '花と気持ちを添えてアナタの心を咲かせたい杉並区おじさんです！',
    holiday: '阿佐ヶ谷ジャズストリート参加。善福寺川ほとりの散歩',
    color: '#FDCB6E'
  },
  {
    id: 'sumida',
    name: '墨田区おじさん',
    ward: '墨田区',
    image: sumidaImage,
    catchphrase: '夜空に咲いては散る命、オレは燃えるぜ一生涯！墨田区おじさんです！',
    holiday: '隅田川テラスで手作りお弁当ピクニック。スカイツリー写真散歩。',
    color: '#E84393'
  },
  {
    id: 'taito',
    name: '台東区おじさん',
    ward: '台東区',
    image: taitoImage,
    catchphrase: '涙の雨にゃ傘がいる。いつでも入んなアイてるぜ台東区おじさんです！',
    holiday: '浅草着物散歩＆人力車で下町デート。',
    color: '#00B894'
  },
  {
    id: 'toshima',
    name: '豊島区おじさん',
    ward: '豊島区',
    image: toshimaImage,
    catchphrase: 'いけないナイトに行け袋！イケてるトークでエスコート 豊島区おじさんです！',
    holiday: 'サブカル映画鑑賞。池袋の隠れ家イタリアンでディナー。',
    color: '#6C5CE7'
  }

];


const newsItems = [
  {
    id: 1,
    category: 'TV出演',
    title: '文京区おじさん、文京ブラトークに出演決定！',
    date: '2025.08.15',
    description: '記念すべきデビューライブを東京ドームで開催決定！'
  },
  {
    id: 2,
    category: 'イベント',
    title: '渋谷区おじさんソロデビュー記念DJイベント in 渋谷区',
    date: '2025.09.20',
    description: 'ミュージックステーション出演決定！'
  },
  {
    id: 3,
    category: 'ラジオ出演',
    title: '港区おじさんプロデュースのオリシャン発売記念！シャンパンのかっこいい頼み方講座',
    date: '2025.08.25',
    description: 'ミュージックステーション出演決定！'
  }
];

function App() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      const updateTime = () => setCurrentVideoTime(video.currentTime);
      video.addEventListener('timeupdate', updateTime);
      return () => video.removeEventListener('timeupdate', updateTime);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={newLogoImage} alt="TYO23Ku" className="h-8 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">ホーム</a>
              <a href="#members" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">メンバー</a>
              <a href="#news" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">ニュース</a>
              <a href="#schedule" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">スケジュール</a>
              <a href="#goods" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">グッズ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={tokyoHighwayVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="mb-8">
            <img src={newLogoImage} alt="TYO23Ku" className="mx-auto h-24 mb-6 floating-animation" />
            <h1 className="text-6xl font-bold text-white neon-text mb-4">TYO23Ku</h1>
            <p className="text-2xl text-pink-400 pulse-glow mb-4">東京23区おじさん</p>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8">
              人間が考えて書き✍️AIが描いた🎨<br />
              東京23区🗼に居そうで絶対いない『東京23区おじさん』たち
            </p>
          </div>
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 rounded-full neon-border"
            onClick={() => document.getElementById("members").scrollIntoView({ behavior: "smooth" })}
          >
            メンバーを見る
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white neon-text mb-12">ニュース</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="member-card border-cyan-500/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-white text-sm leading-relaxed">{item.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white neon-text mb-12">東京23区おじさん メンバー紹介</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {members.map((member) => (
              <Card
                key={member.id}
                className="member-card cursor-pointer border-cyan-500/30"
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-black font-bold text-sm text-center">{member.ward}</h3>
                  <p className="text-gray-600 text-xs text-center">{member.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full member-card border-cyan-500/30">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white text-xl">{selectedMember.name}</CardTitle>
                  <CardDescription className="text-cyan-400">{selectedMember.ward}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedMember(null)}
                  className="text-white hover:text-cyan-400"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full max-h-[60vh] object-contain rounded-lg mb-4"
              />
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8">
                    {selectedMember.catchphrase}
                  </p>
                                  <div className="mt-6">
                  <h4 className="text-pink-400 font-bold text-sm mb-3 flex items-center justify-center">
                    <span className="mr-2">🫶</span>
                    休日の過ごし方
                  </h4>
                  <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-4 rounded-lg">
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {selectedMember.holiday}
                    </p>
                  </div>
                </div>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white neon-text mb-12">スケジュール</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="member-card border-cyan-500/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-cyan-500/10 rounded-lg">
                    <Calendar className="text-cyan-400" />
                    <div>
                      <h3 className="text-white font-bold">2025.08.15</h3>
                      <p className="text-gray-300">東京ドーム デビューライブ</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-pink-500/10 rounded-lg">
                    <Heart className="text-pink-400" />
                    <div>
                      <h3 className="text-white font-bold">2025.08.20</h3>
                      <p className="text-gray-300">花火大会ゲスト in 隅田区</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-lg">
                    <Music className="text-purple-400" />
                    <div>
                      <h3 className="text-white font-bold">2025.08.25</h3>
                      <p className="text-gray-300">ミュージックステーション出演</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-cyan-500/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
  <a href="https://www.instagram.com/tokyo23ku_ojisan" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
    <Instagram size={24} />
  </a>
  <a href="https://www.tiktok.com/@miguel_187c" target="_blank" rel="noopener noreferrer" className="social-icon tiktok-icon">
    <TikTokIcon size={24} />
  </a>
  <a href="https://www.threads.com/@tokyo23ku_ojisan?invite=0" target="_blank" rel="noopener noreferrer" className="social-icon threads-icon">
    <ThreadsIcon size={24} />
  </a>
  <a href="https://line.me/S/sticker/31441885" target="_blank" rel="noopener noreferrer" className="social-icon line-icon">
    <LineIcon size={24} />
  </a>
</div>
          </div>
          <div className="mt-6">
            <p className="text-gray-400 mb-4">このサイトは架空設定を楽しむサイトです。『東京23区おじさん』メンバーは全て現実には存在しません。</p>
            <p className="text-gray-400 text-sm">© ChantoGPT / ToshiPro All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
