// Vocabulary List: You can add more words and meanings
const vocabulary = [
    // Minggu 1
    { word: "ここに駐車できますよ", meaning: "" }, 
  { word: "駐車場の営業時間は何時までですか", meaning: "" },{ word: "海外旅行なんて無理よ", meaning: "" },
  { word: "その商品は無料で配送されます", meaning: "" },{ word: "満車というのは車を止めるところがいっぱいだ", meaning: "" },
  { word: "申し訳ございません、お店は予約で満員でございます", meaning: "" },{ word: "何がそんなに不満ですか", meaning: "" },
  { word: "台風は西の方向に移動する", meaning: "" },{ word: "来週、俺たちは富士山へ向かうぞ", meaning: "" },
  { word: "向こうに着いたら手紙をください", meaning: "" },{ word: "私は歴史に関心がある", meaning: "" },
  { word: "試験中は携帯電話及び他の電子機器が使用禁止です", meaning: "" },{ word: "日本語の文法に関しての本はありますか", meaning: "" },
  { word: "日本は中国と外交関係がある", meaning: "" },{ word: "彼女は無断で学校を欠席した", meaning: "" },
  { word: "なぜ彼が私の援助を断るのか誰にもわからない", meaning: "" },{ word: "明日の午後1時から3時まで、工事のため断水だって。覚えておいてね", meaning: "" },
  { word: "彼は事務所にいます", meaning: "" },{ word: "彼女は台所に現れた", meaning: "" },
  { word: "彼は住所が変わった", meaning: "" },{ word: "代金はレジでお払いください", meaning: "" },
  { word: "昨日水道を止められた", meaning: "" },{ word: "子供たちに図書館の利用が許可された", meaning: "" },
  { word: "自分の給料に満足しているよ", meaning: "" },{ word: "この道路は有料ですか", meaning: "" }, 
{ word: "道路を横断する時は気をつけなさい", meaning: "" },{ word: "ベッドに横になっていた", meaning: "" },
    { word: "あなたは横断歩道ではもっと注意すべきだ", meaning: "" },{ word: "ヨギは怒りを押さえることができない", meaning: "" },
    { word: "なんか送信ミスってた", meaning: "" },{ word: "何を言っても信用するな", meaning: "" },
    { word: "信号が青になるまで待ちなさい", meaning: "" },{ word: "", meaning: "いつ来るのか正確にはわからない" },
    { word: "確かに頭が切れる", meaning: "" },{ word: "確かに着物を着ると美しく見える", meaning: "" },
    { word: "30日の予約を確認したいのですが", meaning: "" },{ word: "私が不注意なことを認める", meaning: "" },
    { word: "その飛行機に乗り遅れないように飛行場へ急いだ", meaning: "" },{ word: "ヌヌは左右を見ずに道路に飛び出した", meaning: "" },
    { word: "非常ベルが急に鳴り出した", meaning: "" },{ word: "ホテルでは寝る前に非常口はどこにあるか確かめなさい", meaning: "" },
    { word: "先月は非常に寒かった", meaning: "" },{ word: "日常生活に必要なものだけ買うべきだ", meaning: "" },
    { word: "脈は正常です", meaning: "" },{ word: "階段を降りていくのが聞こえる", meaning: "" },
    { word: "この品物を箱に入れてもらえますか", meaning: "" },{ word: "そんな危険は犯したくないね", meaning: "犯す/おかす/Melanggar" },
    { word: "「もちろん、捨ててくれ」と農家が答えました", meaning: "" },{ word: "サイクリングはいい運動になる。その上空気を汚染することもない", meaning: "" },
    { word: "ミスしないように注意された", meaning: "" },{ word: "飛行機は頭上を悠々と飛んで行った", meaning: "" },
    { word: "頭上にご注意ください", meaning: "" },{ word: "この線を渡ると、ドアが自動的に開くようになっている", meaning: "" },
    { word: "内子町行きの電車は何番線ですか", meaning: "" },{ word: "", meaning: "" },
    { word: "", meaning: "" },{ word: "", meaning: "" },
    { word: "", meaning: "" },{ word: "", meaning: "" },
    { word: "", meaning: "" },{ word: "", meaning: "" },
    { word: "", meaning: "" },{ word: "", meaning: "" },
    { word: "", meaning: "" },{ word: "", meaning: "" },
];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").style.display = "inline";
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").style.display = "none";
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").style.display = "inline";
  }
  
