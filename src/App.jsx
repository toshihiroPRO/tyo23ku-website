import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Star, Heart, MapPin, Calendar, Users, Music, Instagram, MessageSquare } from 'lucide-react';

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
    color: '#FF6B6B'
  },
  {
    id: 'arakawa',
    name: '荒川区おじさん',
    ward: '荒川区',
    image: arakawaImage,
    catchphrase: '恋するボタン、外れてない？日暮里繊維街の裁縫男子 荒川区おじさんです！',
    color: '#4ECDC4'
  },
  {
    id: 'bunkyo',
    name: '文京区おじさん',
    ward: '文京区',
    image: bunkyoImage,
    catchphrase: 'カンディンスキーは読めてもキミのスキは読めません 文京区おじさんです！',
    color: '#45B7D1'
  },
  {
    id: 'chiyoda',
    name: '千代田区おじさん',
    ward: '千代田区',
    image: chiyodaImage,
    catchphrase: '法案よりもキミへの気持ちを通したい！千代田区おじさんです！',
    color: '#96CEB4'
  },
  {
    id: 'chuo',
    name: '中央区おじさん',
    ward: '中央区',
    image: chuoImage,
    catchphrase: 'スーツとワインと大人の余裕。今夜も銀座で"中央突破"中央区おじさんです！',
    color: '#FFEAA7'
  },
  {
    id: 'edogawa',
    name: '江戸川区おじさん',
    ward: '江戸川区',
    image: edogawaImage,
    catchphrase: '走る愛のフルマラソン　胸アツ熱中症に気をつけて！江戸川区おじさんです！',
    color: '#74B9FF'
  },
  {
    id: 'itabashi',
    name: '板橋区おじさん',
    ward: '板橋区',
    image: itabashiImage,
    catchphrase: '揚げたてアゲだよ　恋にコロッと落としてあげる！板橋区おじさんです！',
    color: '#55A3FF'
  },
  {
    id: 'katsushika',
    name: '葛飾区おじさん',
    ward: '葛飾区',
    image: katsushikaImage,
    catchphrase: '女にゃ弱いが義理と涙にゃもっと弱い　こち恋トラベル葛飾区おじさんです！',
    color: '#FD79A8'
  },
  {
    id: 'kita',
    name: '北区おじさん',
    ward: '北区',
    image: kitaImage,
    catchphrase: '羽伸ばし、おいでよ赤羽、チルチル充ちる幸せナイト北区おじさんです！',
    color: '#FDCB6E'
  },
  {
    id: 'koto',
    name: '江東区おじさん',
    ward: '江東区',
    image: kotoImage,
    catchphrase: '住まいと年収High階層、だけど物腰低階層！江東区おじさんです！',
    color: '#6C5CE7'
  },
  {
    id: 'meguro',
    name: '目黒区おじさん',
    ward: '目黒区',
    image: meguroImage,
    catchphrase: '恋もパーマも時かけて!キミと一緒にヴィンテージ目黒区おじさんです！',
    color: '#A29BFE'
  },
  {
    id: 'minato',
    name: '港区おじさん',
    ward: '港区',
    image: minatoImage,
    catchphrase: '甘い泡と淡い恋あまねくキミにも飲ませたい港区おじさんです！',
    color: '#FD79A8'
  },
  {
    id: 'nakano',
    name: '中野区おじさん',
    ward: '中野区',
    image: nakanoImage,
    catchphrase: '恋の香りをブレンド中　君の魅力をハンドドリップ中野区おじさんです！',
    color: '#00B894'
  },
  {
    id: 'nerima',
    name: '練馬区おじさん',
    ward: '練馬区',
    image: nerimaImage,
    catchphrase: '団地の男子、恋を肥やして　愛も野菜も育てちゃう練馬区おじさんです！',
    color: '#00CEC9'
  },
  {
    id: 'ohta',
    name: '大田区おじさん',
    ward: '大田区',
    image: otaImage,
    catchphrase: 'オイルの香りも媚薬の香りに　職人プリンス大田区おじさんです！',
    color: '#E17055'
  },
  {
    id: 'setagaya',
    name: '世田谷区おじさん',
    ward: '世田谷区',
    image: setagayaImage,
    catchphrase: '恋のバグ、ハグしてはぐくみハッキング！世田谷区おじさんです！',
    color: '#81ECEC'
  },
  {
    id: 'shibuya',
    name: '渋谷区おじさん',
    ward: '渋谷区',
    image: shibuyaImage,
    catchphrase: 'ティックもトックもおじさんリズム！若者気取りの渋谷区おじさんです！',
    color: '#FAB1A0'
  },
  {
    id: 'shinagawa',
    name: '品川区おじさん',
    ward: '品川区',
    image: shinagawaImage,
    catchphrase: '手を変え品変え　もつれた心をターミナル品川区おじさんです！',
    color: '#FF7675'
  },
  {
    id: 'shinjuku',
    name: '新宿区おじさん',
    ward: '新宿区',
    image: shinjukuImage,
    catchphrase: 'ネオンが照らす俺のシワ、魅惑と疲労の二刀流、新宿区おじさんです！',
    color: '#FD79A8'
  },
  {
    id: 'suginami',
    name: '杉並区おじさん',
    ward: '杉並区',
    image: suginamiImage,
    catchphrase: '花と気持ちを添えてアナタの心を咲かせたい杉並区おじさんです！',
    color: '#FDCB6E'
  },
  {
    id: 'sumida',
    name: '墨田区おじさん',
    ward: '墨田区',
    image: sumidaImage,
    catchphrase: '夜空に咲いては散る命、オレは燃えるぜ一生涯！墨田区おじさんです！',
    color: '#E84393'
  },
  {
    id: 'taito',
    name: '台東区おじさん',
    ward: '台東区',
    image: taitoImage,
    catchphrase: '涙の雨にゃ傘がいる。いつでも入んなアイてるぜ台東区おじさんです！',
    color: '#00B894'
  },
  {
    id: 'toshima',
    name: '豊島区おじさん',
    ward: '豊島区',
    image: toshimaImage,
    catchphrase: 'いけないナイトに行け袋！イケてるトークでエスコート 豊島区おじさんです！',
    color: '#6C5CE7'
  }
];

const newsItems = [
  {
    id: 1,
    category: 'ライブ',
    title: '東京ドーム デビューライブ',
    date: '2025.08.15',
    description: '記念すべきデビューライブを東京ドームで開催決定！'
  },
  {
    id: 2,
    category: 'TV出演',
    title: '朝子 in 渋谷区',
    date: '2025.08.20',
    description: 'ミュージックステーション出演決定！'
  },
  {
    id: 3,
    category: 'イベント',
    title: 'ミュージックステーション出演',
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
                      <p className="text-gray-300">朝子 in 渋谷区</p>
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
          <div className="flex justify-center space-x-4 p-4 bg-cyan-500/10 rounded-lg">
            <a href="https://www.instagram.com/tokyo23ku_ojisan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@miguel_187" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Music size={24} />
            </a>
            <a href="https://www.threads.com/@tokyo23ku_ojisan?invite=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <MessageSquare size={24} />
            </a>
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

