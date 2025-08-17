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
    catchphrase: '走る愛のフルマラソン 胸アツ熱中症に気をつけて！江戸川区おじさんです！',
    holiday: '河川敷ランニング。船堀タワーから夜景鑑賞。',
    color: '#74B9FF'
  },
  {
    id: 'itabashi',
    name: '板橋区おじさん',
    ward: '板橋区',
    image: itabashiImage,
    catchphrase: '揚げたてアゲだよ 恋にコロッと落としてあげる！板橋区おじさんです！',
    holiday: 'コロッケをカリカリにする研究。洋食屋さん巡り',
    color: '#55A3FF'
  },
  {
    id: 'katsushika',
    name: '葛飾区おじさん',
    ward: '葛飾区',
    image: katsushikaImage,
    catchphrase: '女にゃ弱いが義理と涙にゃもっと弱い こち恋トラベル葛飾区おじさんです！',
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
    catchphrase: '恋の香りをブレンド中 君の魅力をハンドドリップ中野区おじさんです！',
    holiday: 'ドリップコーヒー研究のため喫茶店巡り。古道具屋も好き。',
    color: '#00B894'
  },
  {
    id: 'nerima',
    name: '練馬区おじさん',
    ward: '練馬区',
    image: nerimaImage,
    catchphrase: '団地の男子、恋を肥やして 愛も野菜も育てちゃう練馬区おじさんです！',
    holiday: '農園カフェで野菜たっぷりランチ。園芸店巡りも',
    color: '#E17055'
  },
  {
    id: 'ota',
    name: '大田区おじさん',
    ward: '大田区',
    image: otaImage,
    catchphrase: 'オイルの香りも媚薬の香りに 職人プリンス大田区おじさんです！',
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
    holiday: '渋谷のレコードショップ巡り。夜は毎晩クラブ通い',
    color: '#FDCB6E'
  },
  {
    id: 'shinagawa',
    name: '品川区おじさん',
    ward: '品川区',
    image: shinagawaImage,
    catchphrase: '手を変え品変え もつれた心をターミナル品川区おじさんです！',
    holiday: '手を変え品変え もつれた心をターミナル品川区おじさんです！',
    color: '#FF7675'
  },
  {
    id: 'shinjuku',
    name: '新宿区おじさん',
    ward: '新宿区',
    image: shinjukuImage,
    catchphrase: 'ネオンが照らす俺のシワ、魅惑と疲労の二刀流、新宿区おじさんです！',
    holiday: 'ミッドナイトジャズバー巡り。サンモールスタジオで舞台観劇。最近観たお気に入りはルビンノツボの「女の子になりたい？」',
    color: '#FD79A8'
  },
  {
    id: 'suginami',
    name: '杉並区おじさん',
    ward: '杉並区',
    image: suginamiImage,
    catchphrase: '花と気持ちを添えてアナタの心を咲かせたい杉並区おじさんです！',
    holiday: '阿佐ヶ谷ジャズストリート参加。川沿い散歩',
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

const scheduleItems = [
  {
    id: 1,
    date: '2025.08.15',
    title: '東京ドーム デビューライブ',
    icon: Calendar
  },
  {
    id: 2,
    date: '2025.08.20',
    title: '朝子 in 渋谷区',
    icon: Heart
  },
  {
    id: 3,
    date: '2025.08.25',
    title: 'ミュージックステーション出演',
    icon: Music
  }
];

const goodsItems = [
  {
    id: 1,
    name: 'オフィシャルTシャツ',
    description: '各区おじさんデザインのオリジナルTシャツ',
    price: '¥3,500',
    emoji: '👕'
  },
  {
    id: 2,
    name: 'スマホケース',
    description: '推しおじさんと一緒にお出かけ',
    price: '¥2,800',
    emoji: '📱'
  },
  {
    id: 3,
    name: 'デビューアルバム',
    description: '全23曲収録の記念すべき1stアルバム',
    price: '¥2,500',
    emoji: '🎵'
  }
];

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={tokyoHighwayVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="mb-8 floating-animation">
            <img 
              src={newLogoImage} 
              alt="TYO23Ku Logo" 
              className="w-80 h-auto mx-auto neon-border rounded-lg"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-text pulse-glow">
            TYO23Ku
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-6 text-pink-400">
            妄想おじさん
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            人間が考えて書き✍️AIが描いた🎨  

            東京23区🗼に居そうで絶対いない『妄想おじさん』たち
          </p>
          
          <Button 
            onClick={() => document.getElementById('members').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg neon-border"
          >
            メンバーを見る
          </Button>
        </section>

        {/* News Section */}
        <section className="py-16 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">
              ニュース
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border-cyan-500/30">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-pink-500">{item.category}</Badge>
                    <CardTitle className="text-white">{item.date}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-cyan-400 font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section id="members" className="py-16 bg-black/70">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">
              メンバー紹介
            </h2>
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

        {/* Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-cyan-500/50 max-w-md w-full">
              <CardHeader className="text-center">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-cyan-500"
                />
                <CardTitle className="text-2xl text-cyan-400">{selectedMember.ward}</CardTitle>
                <CardDescription className="text-pink-400 font-bold text-lg">
                  {selectedMember.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
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
              </CardContent>
            </Card>
          </div>
        )}

        {/* Schedule Section */}
        <section id="schedule" className="py-16 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">
              スケジュール
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
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
          </div>
        </section>

        {/* Goods Section */}
        <section className="py-16 bg-black/70">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">
              グッズ
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {goodsItems.map((item) => (
                <Card key={item.id} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{item.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <p className="text-2xl font-bold text-cyan-400">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
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
              <p className="text-gray-400 mb-4">このサイトは架空設定を楽しむサイトです 。『東京23区おじさん』は実在しません。</p>
              <img 
                src={logoImage} 
                alt="TYO23Ku Logo" 
                className="w-32 h-auto mx-auto mb-4"
              />
              <p className="text-gray-500 text-sm">© 2025 TYO23Ku. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
