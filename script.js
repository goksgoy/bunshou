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
  
