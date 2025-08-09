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
import ohtaImage from './assets/OHTA.png';
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
    catchphrase: '目ヂカラ強めで挨拶マジメ涙もろめな足立区おじさんです!',
    holiday: '荒川河川敷でスクワット。長時間ダンスの体力作り。',
    color: '#FF6B6B'
  },
  {
    id: 'arakawa',
    name: '荒川区おじさん',
    ward: '荒川区',
    image: arakawaImage,
    catchphrase: '恋するボタン、外れてない？日暮里繊維街の裁縫男子 荒川区おじさんです!',
    holiday: '日暮里繊維街でハンドメイド服作り。ハンドクラフト教室も。',
    color: '#4ECDC4'
  },
  {
    id: 'bunkyo',
    name: '文京区おじさん',
    ward: '文京区',
    image: bunkyoImage,
    catchphrase: 'カンディンスキーは読めてもキミのスキは読めません 文京区おじさんです!',
    holiday: '古書店巡り＆ミュージアムカフェでまったり。',
    color: '#45B7D1'
  },
  {
    id: 'chiyoda',
    name: '千代田区おじさん',
    ward: '千代田区',
    image: chiyodaImage,
    catchphrase: '法案よりもキミへの気持ちを通したい！千代田区おじさんです!',
    holiday: '皇居ラン＆丸の内カフェ巡り。政治書で世界情勢研究。',
    color: '#F7DC6F'
  },
  {
    id: 'chuo',
    name: '中央区おじさん',
    ward: '中央区',
    image: chuoImage,
    catchphrase: 'スーツとワインと大人の余裕。今夜も銀座で"中央突破"中央区おじさんです!',
    holiday: '銀座でワインとスイーツの食べ歩き。築地で朝ごはんデート。',
    color: '#BB8FCE'
  },
  {
    id: 'edogawa',
    name: '江戸川区おじさん',
    ward: '江戸川区',
    image: edogawaImage,
    catchphrase: '走る愛のフルマラソン 胸アツ熱中症に気をつけて!江戸川区おじさんです!',
    holiday: '河川敷ランニング。船堀タワーから夜景鑑賞。',
    color: '#85C1E9'
  },
  {
    id: 'itabashi',
    name: '板橋区おじさん',
    ward: '板橋区',
    image: itabashiImage,
    catchphrase: '揚げたてアゲだよ 恋にコロッと落としてあげる！板橋区おじさんです!',
    holiday: 'コロッケをカリカリにする研究。洋食屋さん巡り。',
    color: '#F8C471'
  },
  {
    id: 'katsushika',
    name: '葛飾区おじさん',
    ward: '葛飾区',
    image: katsushikaImage,
    catchphrase: '女にゃ弱いが義理と涙にゃもっと弱い こち恋トラベル葛飾区おじさんです!',
    holiday: '24時間こち亀を読むか24時間、寅さんを観ていたい。',
    color: '#82E0AA'
  },
  {
    id: 'kita',
    name: '北区おじさん',
    ward: '北区',
    image: kitaImage,
    catchphrase: '羽伸ばし、おいでよ赤羽、チルチル充ちる幸せナイト北区おじさんです!',
    holiday: '赤羽OK横丁の立ち飲みツアー。荒川土手で夕日を眺める。',
    color: '#F1948A'
  },
  {
    id: 'koto',
    name: '江東区おじさん',
    ward: '江東区',
    image: kotoImage,
    catchphrase: '住まいと年収High階層、だけど物腰低階層! 江東区おじさんです!',
    holiday: 'バルコニーでホームパーティー。湾岸エリアでSUP体験。',
    color: '#AED6F1'
  },
  {
    id: 'meguro',
    name: '目黒区おじさん',
    ward: '目黒区',
    image: meguroImage,
    catchphrase: '恋もパーマも時かけて!キミと一緒にヴィンテージ 目黒区おじさんです!',
    holiday: 'インテリアショップ巡り＆お気に入りカフェで音楽鑑賞。',
    color: '#D7BDE2'
  },
  {
    id: 'minato',
    name: '港区おじさん',
    ward: '港区',
    image: minatoImage,
    catchphrase: '甘い泡と淡い恋あまねくキミにも飲ませたい港区おじさんです!',
    holiday: '夜景クルーズ＆シャンパン。夜はBARのGENIE通い。',
    color: '#F9E79F'
  },
  {
    id: 'nakano',
    name: '中野区おじさん',
    ward: '中野区',
    image: nakanoImage,
    catchphrase: '恋の香りをブレンド中 君の魅力をハンドドリップ中野区おじさんです!',
    holiday: 'ドリップコーヒー研究のため喫茶店巡り。古道具屋も好き。',
    color: '#ABEBC6'
  },
  {
    id: 'nerima',
    name: '練馬区おじさん',
    ward: '練馬区',
    image: nerimaImage,
    catchphrase: '団地の男子、恋を肥やして 愛も野菜も育てちゃう練馬区おじさんです!',
    holiday: '農園カフェで野菜たっぷりランチ。園芸店巡りも。',
    color: '#A9DFBF'
  },
  {
    id: 'ohta',
    name: '大田区おじさん',
    ward: '大田区',
    image: ohtaImage,
    catchphrase: 'オイルの香りも媚薬の香りに 職人プリンス大田区おじさんです!',
    holiday: '羽田空港で飛行機撮影。温泉スパでまったり休日。',
    color: '#F5B7B1'
  },
  {
    id: 'setagaya',
    name: '世田谷区おじさん',
    ward: '世田谷区',
    image: setagayaImage,
    catchphrase: '恋のバグ、ハグしてはぐくみハッキング! 世田谷区おじさんです!',
    holiday: '三軒茶屋でアートイベント参加。駒沢公園ラン＋ドッグカフェ。',
    color: '#A3E4D7'
  },
  {
    id: 'shibuya',
    name: '渋谷区おじさん',
    ward: '渋谷区',
    image: shibuyaImage,
    catchphrase: 'ティックもトックもおじさんリズム！若者気取りの渋谷区おじさんです!',
    holiday: '渋谷のレコードショップ巡り。夜は毎晩クラブ通い。',
    color: '#D5A6BD'
  },
  {
    id: 'shinagawa',
    name: '品川区おじさん',
    ward: '品川区',
    image: shinagawaImage,
    catchphrase: '手を変え品変え もつれた心をターミナル品川区おじさんです!',
    holiday: '品川駅周辺のカフェ巡り。高輪ゲートウェイで未来体験。',
    color: '#AED6F1'
  },
  {
    id: 'shinjuku',
    name: '新宿区おじさん',
    ward: '新宿区',
    image: shinjukuImage,
    catchphrase: 'ネオンが照らす俺のシワ、魅惑と疲労の二刀流、新宿区おじさんです!',
    holiday: 'ミッドナイトジャズバー巡り。歌舞伎町の小劇場で舞台観劇。',
    color: '#F8D7DA'
  },
  {
    id: 'suginami',
    name: '杉並区おじさん',
    ward: '杉並区',
    image: suginamiImage,
    catchphrase: '花と気持ちを添えてアナタの心を咲かせたい杉並区おじさんです!',
    holiday: '阿佐ヶ谷ジャズストリート参加。川沿い散歩。',
    color: '#D1F2EB'
  },
  {
    id: 'sumida',
    name: '墨田区おじさん',
    ward: '墨田区',
    image: sumidaImage,
    catchphrase: '夜空に咲いては散る命、オレは燃えるぜ一生涯! 墨田区おじさんです!',
    holiday: '隅田川テラスで手作りお弁当ピクニック。スカイツリー写真散歩。',
    color: '#FADBD8'
  },
  {
    id: 'taito',
    name: '台東区おじさん',
    ward: '台東区',
    image: taitoImage,
    catchphrase: '涙の雨にゃ傘がいる。いつでも入んなアイてるぜ台東区おじさんです!',
    holiday: '浅草着物散歩＆人力車で下町デート。',
    color: '#E8DAEF'
  },
  {
    id: 'toshima',
    name: '豊島区おじさん',
    ward: '豊島区',
    image: toshimaImage,
    catchphrase: 'いけないナイトに行け袋!イケてるトークでエスコート 豊島区おじさんです!',
    holiday: 'サブカル映画鑑賞。池袋の隠れ家イタリアンでディナー。',
    color: '#FCF3CF'
  }
];

const news = [
  {
    id: 1,
    date: '2025.08.09',
    title: 'TYO23Ku 1stシングル「推しオジさがし」リリース決定！',
    category: 'リリース情報'
  },
  {
    id: 2,
    date: '2025.08.08',
    title: '東京23区制覇ツアー開催決定！各区での握手会も実施',
    category: 'イベント'
  },
  {
    id: 3,
    date: '2025.08.07',
    title: 'メンバー全員のプロフィール動画公開開始',
    category: 'メディア'
  },
  {
    id: 4,
    date: '2025.08.06',
    title: '新宿区おじさん、TBS系ドラマ「サラリーマンの恋」に出演決定！',
    category: 'メディア出演'
  },
  {
    id: 5,
    date: '2025.08.05',
    title: '渋谷区おじさん初写真集「若者気取りの365日」発売決定',
    category: 'リリース情報'
  },
  {
    id: 6,
    date: '2025.08.04',
    title: '港区おじさん、バラエティ番組「夜更かしセレブ」レギュラー出演開始',
    category: 'メディア出演'
  }
];

function App() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen gradient-bg tokyo-skyline">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-2">
          <nav className="flex justify-center py-2">
            <div className="flex space-x-1 sm:space-x-4 md:space-x-8 overflow-x-auto">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">ホーム</a>
              <a href="#members" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">メンバー</a>
              <a href="#news" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">ニュース</a>
              <a href="#schedule" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">スケジュール</a>
              <a href="#goods" className="text-white hover:text-cyan-400 transition-colors font-medium bg-black/50 px-2 py-2 rounded-lg border border-cyan-500/30 text-xs sm:text-sm whitespace-nowrap">グッズ</a>
            </div>
          </nav>
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
            <p className="text-2xl text-pink-400 pulse-glow mb-4">推しオジさがし</p>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-8">
              人間が考えて書き✍️AIが描いた🎨<br />
              東京23区🗼に居そうで絶対いない『妄想おじさん』たち
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
            {news.map((item) => (
              <Card key={item.id} className="member-card border-cyan-500/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                  <CardTitle className="text-white text-sm leading-relaxed">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white neon-text mb-12">メンバー紹介</h2>
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
          <Card className="max-w-md w-full member-card border-cyan-500">
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
                  ×
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
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedMember.catchphrase}
                  </p>
                </div>
                
                {/* 休日の過ごし方セクション */}
                <div className="border-t border-cyan-500/30 pt-4">
                  <h4 className="text-pink-400 font-bold text-sm mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    休日の過ごし方
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed bg-gradient-to-r from-pink-500/10 to-cyan-500/10 p-3 rounded-lg border border-pink-500/20">
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
                      <p className="text-gray-300">握手会 in 渋谷</p>
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
          <img src={logoImage} alt="TYO23Ku" className="mx-auto h-16 mb-4 opacity-80" />
          <p className="text-gray-400 mb-4">© ChantoGPT / ToshiPro　All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/tokyo23ku_ojisan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Instagram size={24} /></a>
            <a href="https://www.tiktok.com/@miguel_187c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Music size={24} /></a>
            <a href="https://www.threads.com/@tokyo23ku_ojisan?invite=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><MessageSquare size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
