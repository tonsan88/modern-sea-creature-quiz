export type Choice = { label: string; hint: string };
export type Question = { text: string; choices: [Choice, Choice, Choice] };

export const questions: Question[] = [
  { text: "休日、いちばん元気が戻る過ごし方は？", choices: [
    { label: "みんなでにぎやかに", hint: "予定があるほうが元気になる" },
    { label: "気の合う人とゆったり", hint: "少人数がちょうどいい" },
    { label: "ひとりで好きな世界へ", hint: "静かな時間で充電する" },
  ]},
  { text: "大切なことを決めるときは？", choices: [
    { label: "まず直感を信じる", hint: "心が動いたほうへ泳ぐ" },
    { label: "気持ちと理由の両方", hint: "ちょうどいい答えを探す" },
    { label: "理由を整理して決める", hint: "納得してから動きたい" },
  ]},
  { text: "新しいことを見つけたら？", choices: [
    { label: "すぐ試してみる", hint: "考えるより先に、ひれが動く" },
    { label: "少し様子を見てみる", hint: "全体が見えたら始める" },
    { label: "しっかり準備する", hint: "安心できる道をつくる" },
  ]},
  { text: "グループでは、どんな役になりやすい？", choices: [
    { label: "方向を決める人", hint: "迷ったら声をかける" },
    { label: "みんなをつなぐ人", hint: "空気を見て動く" },
    { label: "静かに支える人", hint: "足りないところを整える" },
  ]},
  { text: "誰かに頼られたら？", choices: [
    { label: "うれしくて引き受ける", hint: "力になれるなら動きたい" },
    { label: "できる形に調整する", hint: "無理なく助ける方法を探す" },
    { label: "まず自分の余裕を確認", hint: "必要ならきちんと断れる" },
  ]},
  { text: "心地よく過ごすために大切なのは？", choices: [
    { label: "自由とワクワク", hint: "面白そうな流れに乗りたい" },
    { label: "自由と安心のバランス", hint: "その日の波に合わせたい" },
    { label: "見通しと安定", hint: "落ち着ける土台がほしい" },
  ]},
  { text: "ちょっと落ち込んだときは？", choices: [
    { label: "楽しいことで切り替える", hint: "動くと元気が戻る" },
    { label: "誰かと気持ちを分ける", hint: "話すと少し軽くなる" },
    { label: "静かに深く整理する", hint: "自分の中でゆっくり戻る" },
  ]},
  { text: "初対面の人がいる場所では？", choices: [
    { label: "自分から話しかける", hint: "最初の波を起こす" },
    { label: "様子を見てから話す", hint: "安心したらよく話せる" },
    { label: "相手から来るのを待つ", hint: "まず静かに観察する" },
  ]},
  { text: "アイデアは、どんなふうに生まれる？", choices: [
    { label: "次々ひらめく", hint: "頭の中は小さな花火大会" },
    { label: "今あるものを工夫する", hint: "ちょうどよく整える" },
    { label: "ひとつを深く育てる", hint: "気になる世界へ潜っていく" },
  ]},
  { text: "忙しさが限界に近づいたら？", choices: [
    { label: "動いて発散する", hint: "止まるより泳ぎたい" },
    { label: "人に話してゆるめる", hint: "ひとりで抱え込まない" },
    { label: "いったん静かに止まる", hint: "まず充電を優先する" },
  ]},
  { text: "目標へ向かうとき、得意なのは？", choices: [
    { label: "勢いをつくる", hint: "みんなの最初の一歩を誘う" },
    { label: "こつこつ続ける", hint: "昨日の続きを大切にする" },
    { label: "じっくり掘り下げる", hint: "見えないところまで考える" },
  ]},
  { text: "意見がぶつかったときは？", choices: [
    { label: "方向をはっきりさせる", hint: "前へ進める答えを出す" },
    { label: "気持ちをやわらげる", hint: "みんなが話せる空気をつくる" },
    { label: "状況とタイミングを読む", hint: "今いちばん必要な一手を探す" },
  ]},
];

export type Profile = {
  id: string; name: string; emoji: string; image: string; catchcopy: string;
  quick: string; personality: string; strength: string; relatable: string[];
  overdrive: string; advice: string; safeMatch: string; growthMatch: string;
  message: string; primary: number[]; secondary: number[]; keys: number[];
  signature: [number, number][];
};

export const profiles: Profile[] = [
  {
    id:"dolphin", name:"イルカ", emoji:"🐬", image:"images/sea-types/dolphin.jpg",
    catchcopy:"笑顔で最初の波を起こす、海のエンターテイナー",
    quick:"明るい・好奇心旺盛・巻き込み上手。楽しい空気のスタートボタンです。",
    personality:"人が集まると、心の司会者がそっとマイクを持つ人。誰かが遠慮していたら自然に声をかけ、楽しい輪へ誘えます。あなたが笑うと、海全体が少し明るくなります。",
    strength:"まだ静かな場所に、最初の一歩をつくれること。新しい出会いや挑戦を、怖いものから楽しみなものへ変えられます。",
    relatable:["沈黙が続くと、何か話したくなる","楽しそうな予定が、いつの間にか3つに増える","みんなを笑わせて、自分の充電を忘れる"],
    overdrive:"楽しませようと頑張りすぎると、帰宅した瞬間に電池が1％。明るい人にも、静かな海底の日は必要です。",
    advice:"今日は一度だけマイクを相手へ渡して、「今日は何がしたい？」と聞いてみましょう。あなたも輪の中で休んで大丈夫。",
    safeMatch:"クラゲ", growthMatch:"シャチ",
    message:"あなたの笑顔は、誰かが輪に入るための最初のやさしい波です。",
    primary:[0,0,0,1,0,0,0,0,0,0,0,1], secondary:[1,1,1,0,1,1,1,1,1,1,1,0], keys:[0,7,10], signature:[[0,0],[7,0],[10,0]],
  },
  {
    id:"sea-bream", name:"鯛", emoji:"🐟", image:"images/sea-types/sea-bream.png",
    catchcopy:"小さな幸せを見つける、海の“めでたい”担当",
    quick:"明るい・前向き・喜び上手。日常のラッキー発見係です。",
    personality:"特別な日でなくても、小さな「めでたい」を見つけられる人。予定がひとつ決まっただけで、心の中には小さな紅白幕が登場します。",
    strength:"本人も気づいていない誰かの魅力へ、「それって素敵だよ」と光を当てられること。幸運を待つより、幸運に名前をつけて分ける人です。",
    relatable:["新作のお菓子でも小さな祝賀会","失敗を『次回への伏線』に変える","根拠はまだないけれど、だいたい成功する気がする"],
    overdrive:"励ますのが少し早くなり、相手の心がまだ砂浜で休憩中のことも。毎日めでたくなくても、鯛はちゃんと鯛です。",
    advice:"励ます前に「それは大変だったね」と一緒に雨宿りを。明るさがもっとやさしく届きます。",
    safeMatch:"ペンギン", growthMatch:"カニ",
    message:"あなたが見つけた小さな喜びが、いつもの一日を少しだけ記念日にします。",
    primary:[0,0,0,1,0,0,0,0,1,0,0,1], secondary:[1,1,1,0,1,1,1,1,0,1,1,0], keys:[0,6,8], signature:[[0,0],[6,0],[8,1]],
  },
  {
    id:"penguin", name:"ペンギン", emoji:"🐧", image:"images/sea-types/penguin.png",
    catchcopy:"誰もひとりにしない、海のあったか係",
    quick:"仲間思い・気配り上手・親しみやすい。心の輪っか職人です。",
    personality:"みんなが笑えていると、いちばん安心する人。会話に入れていない人を見つけると、心の点呼表を持ってそっと隣へ向かいます。",
    strength:"人と人の間に安心できる温度をつくれること。あなたの気配りは、寒い日のポケットに入っていたカイロのように届きます。",
    relatable:["全員の予定を合わせて、自分の休みが消える","集合写真で自分の顔だけ半分","みんなの心には点呼、自分の疲れは欠席扱い"],
    overdrive:"「みんながよければ」と言ううちに、本音が列の最後で小さく手を振ります。ペンギンも輪の真ん中で温まっていいのです。",
    advice:"「何でもいいよ」の前に、「私はこっちだと少しうれしいな」をひと言だけ。",
    safeMatch:"クジラ", growthMatch:"カクレクマノミ",
    message:"誰かを輪へ迎えるあなた自身の席も、ちゃんと空けておいてください。",
    primary:[0,1,1,1,0,1,1,0,1,1,1,1], secondary:[1,0,0,2,1,2,0,1,0,0,0,0], keys:[3,4,7], signature:[[3,1],[4,0],[7,0]],
  },
  {
    id:"clownfish", name:"カクレクマノミ", emoji:"🐠", image:"images/sea-types/clownfish.png",
    catchcopy:"“ここなら安心”を育てる、海の愛され上手",
    quick:"人懐っこい・素直・信頼を大切にする。少人数で心を深める人です。",
    personality:"最初はちょっぴり様子見。でも信頼認証が終わると、「それでね！」と心のトーク番組が始まります。",
    strength:"助けても、助けられても大丈夫と思える関係を育てること。あなたが心を開くと、相手も素直になれます。",
    relatable:["初対面では静か、仲良くなると止まらない","『ちょっと相談』が全3シーズンになる","安心できる人には心のWi-Fiが自動接続"],
    overdrive:"安心できる場所が快適すぎて、冒険の準備だけで日が暮れることも。そこは閉じ込める場所ではなく、帰ってくる場所です。",
    advice:"大切な人に「ちょっと新しいことを試してくるね」と伝え、ひれ一枚分だけ外へ。",
    safeMatch:"ペンギン", growthMatch:"イルカ",
    message:"帰れる場所を知っているあなたなら、思うより少し遠くまで泳げます。",
    primary:[1,1,1,2,0,1,1,1,1,1,1,1], secondary:[2,0,2,1,1,2,2,2,2,2,2,2], keys:[0,7,11], signature:[[0,1],[7,1],[11,1]],
  },
  {
    id:"octopus", name:"タコ", emoji:"🐙", image:"images/sea-types/octopus.png",
    catchcopy:"八本のひらめきで抜け道を見つける、海の発明家",
    quick:"発想豊か・器用・実験好き。ひとつの問題から何本も道を見つけます。",
    personality:"「それ、本当にそのやり方だけ？」と自然に考えられる人。行き止まりでも、横から行ける道を探し始めます。",
    strength:"誰も気づかなかった選択肢を生み出せること。小さな「試してみよう」を、面白い未来へ育てます。",
    relatable:["少し試すつもりがオリジナル仕様","頭の中はいつも花火大会","八本全部を使っているのに、コーヒーだけ冷める"],
    overdrive:"頭の中では次の冒険が始まっているのに、机の上で前の企画が「まだだよ〜」と手を振ります。",
    advice:"今日は一本だけ腕を伸ばして、「いちばん小さく完成できるもの」を選びましょう。",
    safeMatch:"昆布", growthMatch:"カニ",
    message:"あなたのひらめきは、誰も知らなかった海の抜け道を見つける力です。",
    primary:[1,0,0,1,1,0,0,1,0,0,0,0], secondary:[0,1,1,0,0,1,1,0,1,1,1,1], keys:[1,2,8], signature:[[1,0],[2,0],[8,0]],
  },
  {
    id:"orca", name:"シャチ", emoji:"🐋", image:"images/sea-types/orca.png",
    catchcopy:"迷った海に道をつくる、静かな頼れるリーダー",
    quick:"決断力・責任感・行動力。みんなの進む方向を示す人です。",
    personality:"周囲が「どうする？」と話している間に、心の出発式を終えている人。落ち着いた顔の奥では、もう作戦が動いています。",
    strength:"迷う場面で方向を決め、責任を引き受けられること。チームの不安を「進めそう」に変えます。",
    relatable:["相談される前に準備が半分終わる","任せたつもりが、こっそり確認する","頼られると断れず、王者にも肩こり"],
    overdrive:"全部自分で抱えると、「あなたがいないと進まない海」を自分でつくってしまいます。",
    advice:"今日はひとつだけ、誰かへ任せてみましょう。信頼は、渡した仕事の中でも育ちます。",
    safeMatch:"クジラ", growthMatch:"イルカ",
    message:"強さに余白が加わると、あなたの背中はもっとやさしい道しるべになります。",
    primary:[0,2,0,0,1,2,0,1,1,0,0,0], secondary:[1,1,1,1,0,1,1,0,0,1,1,2], keys:[1,3,11], signature:[[1,2],[3,0],[11,0]],
  },
  {
    id:"jellyfish", name:"クラゲ", emoji:"🪼", image:"images/sea-types/jellyfish.png",
    catchcopy:"気持ちの波をふわっとほどく、海のやさしいクッション",
    quick:"共感上手・柔軟・やわらかい。張りつめた空気をゆるめます。",
    personality:"人の気持ちや場の温度を、言葉より先に感じる人。ぶつからず、ふわっと力を抜かせます。",
    strength:"「今は無理に元気を出さなくてもいいよ」と、心の置き場所をつくれること。",
    relatable:["どちらでも大丈夫が本当に多い","相談を聞いていたら一緒に気持ちが揺れる","急がない才能だけは、かなり安定している"],
    overdrive:"流れに任せすぎると、自分がどこへ行きたいのか見えなくなることも。深海ではスマホの電波も届きません。",
    advice:"「何とかなる」に、今日は小さな「私はこうしたい」をひとつ足してみましょう。",
    safeMatch:"ウミガメ", growthMatch:"鯛",
    message:"あなたのゆらぎは、ざわつく心を静かにほどく波です。",
    primary:[1,1,1,1,1,1,1,1,1,1,1,1], secondary:[2,0,2,2,0,0,2,2,2,2,2,2], keys:[4,6,11], signature:[[4,1],[6,1],[11,1]],
  },
  {
    id:"sea-turtle", name:"ウミガメ", emoji:"🐢", image:"images/sea-types/sea-turtle.png",
    catchcopy:"ゆっくり、ちゃんと、遠くまで。海のこつこつ旅人",
    quick:"慎重・安定・継続上手。昨日の続きを大切にできる人です。",
    personality:"急がなくても、決めた道を静かに進み続ける人。周りが始めてはやめる中、今日も昨日の続きが進行中です。",
    strength:"一日で変えようとせず、続けられる形へ整えられること。小さな一歩を遠い場所まで運びます。",
    relatable:["始めるまで長いが、始めたら長い","『まだ続けてたの？』に静かにうなずく","急かされると、心の甲羅がそっと閉じる"],
    overdrive:"準備を100回しているうちに、波が変わってしまうこともあります。",
    advice:"今日は完成ではなく、「5分だけ始める」をゴールにしてみましょう。",
    safeMatch:"ホタテ", growthMatch:"タコ",
    message:"あなたのペースは遅くありません。遠くまで続く速さなのです。",
    primary:[2,2,2,2,1,2,2,2,2,2,1,1], secondary:[1,1,1,1,2,1,1,1,1,1,2,2], keys:[2,5,10], signature:[[2,2],[5,2],[10,1]],
  },
  {
    id:"kelp", name:"昆布", emoji:"🪸", image:"images/sea-types/kelp.png",
    catchcopy:"ゆらゆらしながら居心地を整える、海の隠れた名サポーター",
    quick:"自然体・柔軟・環境づくり上手。気づけば周りがくつろいでいます。",
    personality:"前へ出るより、みんなが自然に動ける海を整える人。本人は端でゆらゆら通常営業ですが、かなりいい出汁が出ています。",
    strength:"強い波にも折れず、しなやかに受け流しながら、大切な根っこを守れること。",
    relatable:["気づけば場の調整役","『何もしてないよ』と言いつつ居心地を整えている","人に合わせすぎて、自分の希望が行方不明"],
    overdrive:"流され続けると「どこいった？」となります。柔らかさにも、帰る根っこが必要です。",
    advice:"今日はひとつだけ、「私はこれが好き」を声にしてみましょう。",
    safeMatch:"深海魚", growthMatch:"シャチ",
    message:"ゆらゆらしていても、海の底ではあなたの根がちゃんと伸びています。",
    primary:[1,1,1,2,1,1,1,1,1,1,1,1], secondary:[2,2,2,1,0,0,2,2,2,2,2,2], keys:[3,5,11], signature:[[3,2],[5,1],[11,1]],
  },
  {
    id:"scallop", name:"ホタテ", emoji:"🐚", image:"images/sea-types/scallop.png",
    catchcopy:"静かに力をためて、ここぞで動く。海の瞬発力さん",
    quick:"落ち着き・観察力・省エネ上手。必要な瞬間には、ぱっと動きます。",
    personality:"ずっと全力で泳がず、力を使う場面を選べる人。昨日まで静かだったのに、締め切り前だけ別の生き物になります。",
    strength:"慌てず周りを見て、今だと思った瞬間に力を出せること。省エネ中ですが、故障ではありません。",
    relatable:["普段は静か、必要なときだけ速い","ひとり会議が終わるまで殻を開けない","締め切り直前に突然の高性能"],
    overdrive:"力をためすぎると、周りには気持ちが見えません。真珠は、貝が少し開いてこそ光ります。",
    advice:"結論が出る前でも、「今ここまで考えてるよ」と少しだけ見せてみましょう。",
    safeMatch:"ウミガメ", growthMatch:"タコ",
    message:"静かな時間も、ぱっと動く瞬間も、どちらもあなたの実力です。",
    primary:[2,1,2,2,1,1,1,2,1,2,1,2], secondary:[1,2,1,1,2,2,2,1,2,1,2,1], keys:[2,7,9], signature:[[2,2],[7,2],[9,2]],
  },
  {
    id:"deep-sea-fish", name:"深海魚", emoji:"🐡", image:"images/sea-types/deep-sea-fish.png",
    catchcopy:"誰も気づかない“好き”を照らす、海の小さな探究家",
    quick:"独自・観察・探究上手。みんなが通り過ぎた場所に宝物を見つけます。",
    personality:"流行より、自分の心が「気になる」と光ったものを大切にする人。夜中の2時でも、迷子ではなく調査中です。",
    strength:"見落とされていた価値を見つけ、深く育てられること。静かな発見が、誰かの世界を広げます。",
    relatable:["調べものから帰ってこない","好きな話になると急に言葉が増える","元気がないのではなく、観察中"],
    overdrive:"深く潜りすぎると、素敵な発見を誰にも見せないまま保管してしまいます。",
    advice:"今日見つけたことを、信頼できる人へひとつだけ話してみましょう。",
    safeMatch:"昆布", growthMatch:"イルカ",
    message:"あなたの小さな灯りは、まだ名前のない価値を照らしています。",
    primary:[2,2,2,2,2,1,2,2,2,2,2,2], secondary:[1,1,1,1,1,2,1,1,1,1,1,1], keys:[0,8,10], signature:[[0,2],[8,2],[10,2]],
  },
  {
    id:"sea-snake", name:"ウミヘビ", emoji:"🐍", image:"images/sea-types/sea-snake.png",
    catchcopy:"空気とタイミングをすいっと読む、海のさりげない作戦家",
    quick:"冷静・戦略的・距離感上手。今いちばん効く一手を選びます。",
    personality:"何をするかだけでなく、「いつ、どう動くか」を見る人。静かにしていても、次の展開にはだいたい気づいています。",
    strength:"人間関係の温度と場の流れを読み、無理のないタイミングで動けること。",
    relatable:["会話の裏で空気の温度を測っている","言う内容より、言う時を考える","本音を出す前に脳内で3回編集"],
    overdrive:"考えが整いすぎると、「何を考えているの？」と言われます。心は作戦表どおりに動かない日もあります。",
    advice:"今日は結論ではなく、「私はこう感じた」をひと言だけ海面へ浮かべてみましょう。",
    safeMatch:"クジラ", growthMatch:"クリオネ",
    message:"ロジックの中に小さな本音が入ると、あなたの信頼はもっと深くなります。",
    primary:[2,2,1,1,1,1,2,1,1,2,2,2], secondary:[1,1,2,2,2,2,1,2,2,1,1,1], keys:[1,7,11], signature:[[1,2],[7,1],[11,2]],
  },
  {
    id:"whale", name:"クジラ", emoji:"🐋", image:"images/sea-types/whale.png",
    catchcopy:"言葉の向こうまで、ゆっくり受け止める。海の大きな聞き上手",
    quick:"包容力・洞察力・長い目線。言葉の奥にある背景まで見つめます。",
    personality:"目の前の言葉だけで人を決めつけず、「そう思う理由があったのかも」と歩いてきた道まで想像する人。",
    strength:"大きな流れと長い時間の中で、目の前の出来事を理解できること。",
    relatable:["相談が昨日の話から人生の潮目まで広がる","全部受け止めて、あとからひとりで重くなる","考えが深く、心の潜水時間が長い"],
    overdrive:"全部を背負うと、クジラでも沈みます。息継ぎは、さぼりではありません。",
    advice:"今日は誰かの話を聞く前に、自分へ「今、余裕はある？」と聞いてみましょう。",
    safeMatch:"クリオネ", growthMatch:"タコ",
    message:"あなたの大きな心にも、安心して浮上できる場所が必要です。",
    primary:[2,1,2,2,0,1,2,1,2,2,2,1], secondary:[1,2,1,1,1,2,1,2,1,1,1,2], keys:[0,6,10], signature:[[0,2],[6,2],[10,2]],
  },
  {
    id:"clione", name:"クリオネ", emoji:"❄️", image:"images/sea-types/clione.png",
    catchcopy:"やわらかな心に、まっすぐな芯を持つ。海の小さな天使",
    quick:"繊細・純粋・芯がある。大切なもののために静かに勇気を出します。",
    personality:"小さな言葉や表情にも気づく、やさしい人。普段はふんわりでも、「それは大切」と思った瞬間はまっすぐです。",
    strength:"傷つきやすさを、誰かを守るやさしさへ変えられること。",
    relatable:["平気な顔のあとで、ひとり反省会","大切な人のことでは急に強い","本人も自分の決断力に少し驚く"],
    overdrive:"無理して笑い続けると、心が凍ってしまいます。天使にも、泣いて溶かす日が必要です。",
    advice:"今日は「大丈夫」の代わりに、本当の気持ちを短くひとつ伝えてみましょう。",
    safeMatch:"カクレクマノミ", growthMatch:"シャチ",
    message:"繊細さは弱さではなく、大切なものを見つけられる感覚です。",
    primary:[1,1,1,2,0,1,2,1,1,2,2,0], secondary:[2,0,2,1,1,2,1,2,2,1,1,1], keys:[4,6,11], signature:[[4,0],[6,2],[11,0]],
  },
  {
    id:"crab", name:"カニ", emoji:"🦀", image:"images/sea-types/crab.png",
    catchcopy:"夢の足元をきちんと整える、海のしっかり者",
    quick:"丁寧・実用的・完成上手。素敵な案を安心して楽しめる形にします。",
    personality:"アイデアを聞くと、「必要なものは？困る人はいない？」と自然に考える人。夢に水を差さず、足元を整えています。",
    strength:"抜けやリスクを見つけ、現実に使える形まで仕上げられること。",
    relatable:["旅行の持ち物確認が重要書類になる","褒めるより先に、直せるところが見える","横歩きでも、なぜか締め切りには着く"],
    overdrive:"確認が増えすぎると、楽しみが予定表の隅へ。持ち物欄には「わくわく」も必要です。",
    advice:"準備をひとつ減らし、そのぶん楽しみをひとつ増やしてみましょう。",
    safeMatch:"ウミガメ", growthMatch:"鯛",
    message:"あなたの丁寧さがあるから、誰かの夢は安心して海へ出られます。",
    primary:[2,2,2,2,1,2,2,2,1,2,1,2], secondary:[1,1,1,1,2,1,1,1,2,1,2,1], keys:[2,8,11], signature:[[2,2],[8,1],[11,2]],
  },
];

export function scoreAnswers(answers: number[]) {
  const detailWeights = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
  return profiles.map((profile, index) => {
    let score = answers.reduce((sum, answer, q) =>
      sum + (answer === profile.primary[q] ? 2 : answer === profile.secondary[q] ? 1 : 0), 0);
    score += profile.keys.reduce((sum, q) => sum + (answers[q] === profile.primary[q] ? 1 : 0), 0);
    const signatureHits = profile.signature.reduce((sum, [q, answer]) => sum + (answers[q] === answer ? 1 : 0), 0);
    const keyHits = profile.keys.reduce((sum, q) => sum + (answers[q] === profile.primary[q] ? 1 : 0), 0);
    const detail = answers.reduce((sum, answer, q) => sum + (answer === profile.primary[q] ? detailWeights[q] : answer === profile.secondary[q] ? detailWeights[q] / 3 : 0), 0);
    if (signatureHits === profile.signature.length) score += 2;
    return { profile, score, signatureHits, keyHits, detail, index };
  }).sort((a, b) => b.score - a.score || b.signatureHits - a.signatureHits || b.keyHits - a.keyHits || b.detail - a.detail || a.index - b.index);
}
