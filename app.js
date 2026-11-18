/* OYNA prototype — vanilla JS, no dependencies, works offline. */
(function () {
  "use strict";

  /* ================= data ================= */

  var REGIONS = [
    "Andijon", "Buxoro", "Farg'ona", "Jizzax", "Xorazm", "Namangan", "Navoiy",
    "Qashqadaryo", "Qoraqalpog'iston", "Samarqand", "Sirdaryo", "Surxondaryo",
    "Toshkent viloyati", "Toshkent shahri"
  ];

  var TRACKS = {
    frontend: {
      name: "Dasturlash asoslari",
      short: "Dasturlash",
      icon: "⌨️",
      blurb: "HTML, CSS, JS — birinchi sahifadan buyurtmagacha"
    },
    design: {
      name: "Grafik dizayn",
      short: "Dizayn",
      icon: "🎨",
      blurb: "Figma, logotip, Instagram post — telefonda ham"
    },
    marketing: {
      name: "Raqamli marketing",
      short: "Marketing",
      icon: "📣",
      blurb: "Telegram kanal, kontent, mahalliy brendlar"
    },
    english: {
      name: "IT ingliz tili",
      short: "Ingliz tili",
      icon: "🗣️",
      blurb: "Xalqaro buyurtma uchun 50 ta ibora"
    },
    green: {
      name: "Yashil tadbirkorlik",
      short: "Yashil",
      icon: "🌱",
      blurb: "Eko-mahsulotni onlayn sotish"
    },
    data: {
      name: "Ma'lumot va AI",
      short: "Data/AI",
      icon: "🤖",
      blurb: "Jadval, hisobot, AI bilan xavfsiz ishlash"
    }
  };

  var WEEK_TITLES = [
    "{t}: birinchi qadam",
    "Birinchi buyurtma: 5 qadam",
    "Asosiy tushunchalar: chuqurroq",
    "Amaliy mashq: kichik ish",
    "Mini-loyiha",
    "Portfolio asoslari",
    "Mijoz bilan muloqot",
    "Narx va taklif",
    "Birinchi buyurtmani yopish",
    "Sifat va muddat",
    "Sertifikat va profil",
    "Keyingi bosqich: mentor"
  ];

  var LESSONS = {
    "frontend.1": {
      title: "Web qanday ishlaydi",
      min: 6,
      steps: [
        {
          h: "Uch qatlam",
          p: "Brauzer serverdan HTML oladi, CSS uni bezaydi, JavaScript jonlantiradi. Uchtasi — bitta sahifaning uch qatlami.",
          tip: "Bugun: telefonda istalgan saytni ochib, menyusi qanday joylashganini kuzating."
        },
        {
          h: "Birinchi sahifa",
          p: "Telefonda Acode yoki kompyuterda Notepad: index.html yarating, ichiga <h1>Salom</h1> yozing, saqlang va brauzerda oching. Bu sizning birinchi sahifangiz.",
          tip: "Fayl nomi albatta .html bilan tugashi kerak."
        },
        {
          h: "Mijoz nimani sotib oladi",
          p: "Mijoz kod sotib olmaydi — muammoning yechimini sotib oladi. Shuning uchun portfolio: 3 ta kichik, real ish. Mahalliy do'kon uchun bitta sahifa yetarli.",
          tip: "Bitta ishlaydigan sayt — o'nta chala loyihadan qimmat."
        }
      ],
      quiz: [
        { q: "Sahifani bezaydigan til qaysi?", o: ["HTML", "CSS", "Python"], a: 1, why: "CSS rang, o'lcham va joylashuvni belgilaydi." },
        { q: "index.html faylini qanday ochamiz?", o: ["Brauzerda", "Excelda", "Faqat terminalda"], a: 0, why: "HTML fayl brauzerda ochiladi — manzil qatorida fayl yo'lini ko'rsating." },
        { q: "Mijoz uchun eng muhimi nima?", o: ["Kod uzunligi", "Muammoning yechilishi", "Dizayn rangi"], a: 1, why: "Yechim pul to'laydi; kod uzunligi muhim emas." }
      ]
    },
    "design.1": {
      title: "Dizayn asoslari",
      min: 6,
      steps: [
        {
          h: "Dizayn — bu tartib",
          p: "Yaxshi dizayn chiroyli emas, tushunarli bo'ladi. Uch qoida: bitta shrift oilasi, 2–3 rang, ko'p bo'sh joy.",
          tip: "Boshlovchining eng ko'p xatosi — hamma rangni birga ishlatish."
        },
        {
          h: "Figma: 10 daqiqada birinchi maket",
          p: "figma.com → New file → Frame 1080×1080 → matn va to'rtburchak qo'shing. Bepul tarif boshlash uchun yetarli.",
          tip: "Telefonda Figma ilovasi ham ishlaydi — faqat oddiy maketlar uchun."
        },
        {
          h: "Portfolio: 3 ish",
          p: "Mahalliy do'kon uchun logotip, onangiz uchun Instagram post, o'zingiz uchun vizitka. Har birini 'oldin / keyin' ko'rinishida saqlang — natija ko'rinadi.",
          tip: "Portfolio — ish daftari emas, natijalar to'plami."
        }
      ],
      quiz: [
        { q: "Nechta shrift oilasi tavsiya etiladi?", o: ["1–2", "5", "Cheklanmagan"], a: 0, why: "Ko'p shrift — ko'z charchaydi va havaskorlik belgisi." },
        { q: "Figma bepul tarifi...", o: ["Boshlash uchun yetarli", "Umuman yo'q", "Faqat Windows'da"], a: 0, why: "Bepul tarif o'quv va kichik loyihalar uchun yetarli." },
        { q: "Portfolio uchun eng kuchli ko'rinish?", o: ["Faqat chiroyli rasm", "Oldin / keyin natija", "Do'stlarning fikri"], a: 1, why: "Natija ko'rsatilgan ish ishonch tug'diradi." }
      ]
    },
    "marketing.1": {
      title: "Kontent asoslari",
      min: 6,
      steps: [
        {
          h: "Kontent — savolga javob",
          p: "Odamlar reklamani emas, o'z savoliga javobni qidiradi. Har bir post bitta savolga javob bersin: 'qanday qilib', 'nega', 'qancha'.",
          tip: "Bitta post — bitta fikr. Uch fikr — uchta post."
        },
        {
          h: "Ikki kanal yetarli",
          p: "Mahalliy biznes uchun Telegram arzon va tez, Instagram vizual. Ikkalasida bir xil uch format: foyda, dalil (natija), chaqiruv (yozing).",
          tip: "Telegram kanalga haftada 3 post — boshlash uchun normal."
        },
        {
          h: "Natijani o'lchash",
          p: "Har postdan keyin ikkita raqam: nechta odam yozdi va nechasi sotib oldi. Raqamsiz marketing — taxmin, taxmin esa mijozni yo'qotadi.",
          tip: "Kichik jadval: sana, post, yozganlar, sotib olganlar."
        }
      ],
      quiz: [
        { q: "Post nimaga javob berishi kerak?", o: ["Mijoz savoliga", "Byudjetga", "Modaga"], a: 0, why: "Savolga javob — eng arzon va eng kuchli reklama." },
        { q: "Mahalliy biznes uchun eng arzon kanal?", o: ["Telegram", "Televideniye", "Billboard"], a: 0, why: "Telegram bepul va auditoriya allaqachon shu yerda." },
        { q: "Muvaffaqiyatni nima ko'rsatadi?", o: ["Layklar soni", "Yozgan va sotib olgan mijozlar", "Post uzunligi"], a: 1, why: "Layk emas, pul to'lagan mijoz natijani ko'rsatadi." }
      ]
    },
    "english.1": {
      title: "50 so'z bilan boshlash",
      min: 6,
      steps: [
        {
          h: "5000 emas, 50",
          p: "Mijoz bilan ishlash uchun salomlashish, taklif, muddat, narx va minnatdorchilik — 50 ta ibora yetarli. Qolganini vaqt o'zi qo'shadi.",
          tip: "Iboralarni ovoz chiqarib takrorlang — yodda qolish tezroq."
        },
        {
          h: "Shablon xat",
          p: "\"Hi! I can do this task in 2 days. Price: $20. Here is my portfolio: ...\" — qisqa, aniq xat buyurtmaning yarmi.",
          tip: "Aniqlik muhim, mukammal grammatika emas."
        },
        {
          h: "Talaffuz emas — yozuv",
          p: "Xalqaro buyurtmada birinchi aloqa deyarli doim yozma bo'ladi. Shuning uchun yozishni mashq qiling: 3 ta shablon xat yod oling.",
          tip: "Har yangi mijoz xatidan keyin 5 ta yangi so'z yozib qo'ying."
        }
      ],
      quiz: [
        { q: "Xalqaro buyurtmada birinchi aloqa?", o: ["Yozma", "Telefon", "Yuzma-yuz"], a: 0, why: "Yozma aloqa — vaqt mintaqasi va til to'sig'ini yengadi." },
        { q: "Taklifda nima bo'lishi shart?", o: ["Muddat va narx", "She'r", "Faqat rasm"], a: 0, why: "Muddat va narx bo'lmasa, mijoz javob bermaydi." },
        { q: "Boshlash uchun nechta ibora yetarli?", o: ["~50", "5000", "10000"], a: 0, why: "Amaliy vaziyatlar takrorlanadi — 50 ta ibora ko'pini qoplaydi." }
      ]
    },
    "green.1": {
      title: "Yashil mahsulot — daromad",
      min: 6,
      steps: [
        {
          h: "Nima uchun yashil?",
          p: "Qayta ishlangan qadoq, tabiiy sovun, mato xalta: xarajat past, talab o'smoqda. Muhimi — hikoya: kim qildi, nimadan, nega foydali.",
          tip: "Xaridor mahsulotni emas, g'amxo'rlikni ham sotib oladi."
        },
        {
          h: "Narxni qanday qo'yamiz",
          p: "Xarajat + 30% + yetkazib berish. Birinchi partiya — 10 dona. Beshtasi sotilsa, davom eting; sotilmasa, sababini o'rganing.",
          tip: "Narxni xarajatdan boshlang, raqobatchidan emas."
        },
        {
          h: "Onlayn savdo: 3 qadam",
          p: "Telegram kanal → 5 mahsulot rasmi (yorug'lik yaxshi, fon toza) → to'lov va yetkazib berish shartlari aniq yozilgan bitta post.",
          tip: "To'lov usuli ko'rsatilmagan post — savdo emas, e'lon."
        }
      ],
      quiz: [
        { q: "Narx nimadan boshlanadi?", o: ["Xarajatdan", "Raqobatchi istagidan", "Tasodifdan"], a: 0, why: "Xarajat + foyda = barqaror narx." },
        { q: "Birinchi partiya uchun tavsiya?", o: ["10 dona", "1000 dona", "0 dona"], a: 0, why: "Kichik partiya — xatoni arzon o'rganish usuli." },
        { q: "Mahsulot hikoyasi nima uchun kerak?", o: ["Kerak emas", "Ishonch va narx uchun", "Faqat reklama uchun"], a: 1, why: "Hikoya ishonch yaratadi va narxni asoslaydi." }
      ]
    },
    "data.1": {
      title: "Jadval va AI asoslari",
      min: 6,
      steps: [
        {
          h: "Jadval — birinchi vosita",
          p: "Google Sheets yoki Excel: SUM, FILTER, pivot jadval. Ma'lumotni tartibga solish har qanday kasbda kerak bo'ladi.",
          tip: "Har kuni bitta yangi funksiya — bir oyda 30 ta."
        },
        {
          h: "AI nima qiladi, nima qilmaydi",
          p: "AI takrorlanuvchi ishni tezlashtiradi, lekin qarorni siz qabul qilasiz. Unga shaxsiy ma'lumot, parol yoki boshqa odamlarning ma'lumotini bermang.",
          tip: "AI javobini har doim tekshiring — ishonch emas, nazorat."
        },
        {
          h: "Amaliyot: 20 daqiqada hisobot",
          p: "Do'kon sotuvlarini jadvalga kiriting, eng ko'p sotilgan mahsulotni toping va bitta jumla bilan xulosa yozing: nima uchun shunday bo'ldi.",
          tip: "Xulosa — bitta jumla. Uzun hisobotni hech kim o'qimaydi."
        }
      ],
      quiz: [
        { q: "Yakuniy qarorni kim qabul qiladi?", o: ["AI o'zi", "Siz", "Hech kim"], a: 1, why: "AI yordamchi; javobgarlik insonda qoladi." },
        { q: "AI ga nima bermaslik kerak?", o: ["Shaxsiy ma'lumot", "Ochiq savol", "Oddiy matn"], a: 0, why: "Shaxsiy ma'lumot va parollar hech qachon kiritilmaydi." },
        { q: "Pivot jadval nima uchun?", o: ["Ma'lumotni guruhlab xulosa qilish", "Rasm chizish", "Xat yozish"], a: 0, why: "Pivot — katta jadvaldan tez xulosa chiqarish vositasi." }
      ]
    },
    "common.2": {
      title: "Birinchi buyurtma: 5 qadam",
      min: 7,
      steps: [
        {
          h: "1. Tor soha tanlang",
          p: "\"Men dizaynerman\" emas — \"Instagram uchun post dizayni qilaman\". Tor sohada sizni topish va narx aytish oson.",
          tip: "Tor soha — kattaroq daromadning birinchi qadami."
        },
        {
          h: "2. Portfolio: 3 ish",
          p: "O'zingiz uchun qilingan ishlar ham bo'ladi, lekin bitta real brend bilan ish undan kuchliroq. Tanish do'kon egasiga bepul emas — arzon narxda taklif qiling.",
          tip: "Bepul ish odatda qadrlanmaydi; ramziy narx — hurmat."
        },
        {
          h: "3. Taklif: narx + muddat",
          p: "\"3 post — 150 000 so'm — 2 kunda\". Aniq taklifga javob keladi, noaniq taklifga \"keyinroq\" keladi.",
          tip: "Taklifda ikkitadan ko'p variant berma — tanlov qiyinlashadi."
        },
        {
          h: "4. Birinchi mijoz qayerda",
          p: "Tanish do'kon, mahalliy brend, tuman Telegram guruhlari, hunarmand ayollar. Yuz mijoz kerak emas — bitta haqiqiy mijoz yetarli.",
          tip: "Birinchi mijoz — eng qiyini. Ikkinchisi osonroq bo'ladi."
        },
        {
          h: "5. Yetkazish va sharh",
          p: "Muddatda topshiring, kichik tuzatishni bepul qiling va yozma sharh so'rang. Sharh — keyingi buyurtmalar uchun eng arzon reklama.",
          tip: "Sharhni skrinshot qilib portfolioga qo'shing."
        }
      ],
      quiz: [
        { q: "Nega tor soha kerak?", o: ["Moda", "Topish oson", "Qiziqarli"], a: 1, why: "Tor sohada mijoz sizni aniq eslab qoladi." },
        { q: "Taklifda nima bo'lishi kerak?", o: ["Narx va muddat", "Faqat narx", "Faqat portfolio"], a: 0, why: "Muddat va narx — qarorni tezlashtiruvchi ikki raqam." },
        { q: "Birinchi buyurtmadan keyin nima muhim?", o: ["Dam olish", "Yangi kurs", "Yozma sharh"], a: 2, why: "Sharh keyingi mijozning ishonchini yaratadi." }
      ]
    }
  };

  var MENTORS = [
    { n: "Dilnoza R.", r: "Frontend dasturchi", o: "4 yil tajriba · Namangan", t: ["frontend", "data"] },
    { n: "Kamola S.", r: "Grafik dizayner", o: "Frilanser · 3 yil · Qashqadaryo", t: ["design", "marketing"] },
    { n: "Nigora T.", r: "SMM mutaxassis", o: "Mahalliy brend · Xorazm", t: ["marketing", "green"] },
    { n: "Zulfiya A.", r: "Ingliz tili o'qituvchisi", o: "IT Park kurslari · Toshkent", t: ["english", "data"] },
    { n: "Mahliyo K.", r: "Data analitik", o: "Bank · 5 yil · Samarqand", t: ["data", "frontend"] },
    { n: "Ozoda M.", r: "Eko-tadbirkor", o: "Qo'lda sovun ustaxonasi · Buxoro", t: ["green", "marketing"] }
  ];

  /* ================= state ================= */

  var KEY = "oyna.v1";

  var S = {
    started: false,
    name: "",
    region: "",
    track: "",
    minutes: 30,
    daypart: "Kechqurun",
    xp: 0,
    streak: 1,
    day: "",
    doneSteps: [],
    lessonsDone: [],
    quizBest: {},
    chat: []
  };

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        for (var k in S) if (Object.prototype.hasOwnProperty.call(p, k)) S[k] = p[k];
      }
    } catch (e) {
      /* ignore corrupt storage */
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {
      /* storage may be blocked */
    }
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function touchDay() {
    if (S.day !== today()) {
      if (S.day) S.streak += 1;
      S.day = today();
      save();
    }
  }

  /* ================= utils ================= */

  function $(sel) {
    return document.querySelector(sel);
  }

  function on(root, sel, ev, fn) {
    var el = root.querySelector(sel);
    if (el) el.addEventListener(ev, fn);
  }

  function bar(pct) {
    return '<div class="bar"><i style="width:' + pct + '%"></i></div>';
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function trackOf() {
    return TRACKS[S.track] || TRACKS.design;
  }

  function planLessons() {
    return [S.track + ".1", "common.2"];
  }

  function totalSteps() {
    var t = 0;
    planLessons().forEach(function (id) {
      t += LESSONS[id].steps.length;
    });
    return t;
  }

  function progressPct() {
    var p = Math.round((S.doneSteps.length / totalSteps()) * 100);
    return Math.min(100, Math.max(0, p));
  }

  function addXp(n) {
    S.xp += n;
    save();
    renderXp();
  }

  function renderXp() {
    var p = $("#xpPill");
    if (p) p.textContent = S.xp + " XP";
  }

  /* ================= navigation ================= */

  var current = "onboard";

  function go(name) {
    if (!S.started && name !== "onboard") name = "onboard";
    current = name;
    ["onboard", "home", "chat", "roadmap", "lesson", "mentor", "parent"].forEach(function (v) {
      var node = $("#v-" + v);
      if (node) node.classList.toggle("view--on", v === name);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (b) {
      b.classList.toggle("tab--on", b.getAttribute("data-go") === name);
    });
    window.scrollTo(0, 0);
    if (name === "home") renderHome();
    if (name === "chat") renderChat();
    if (name === "roadmap") renderRoadmap();
    if (name === "lesson") renderLesson();
    if (name === "mentor") renderMentor();
    if (name === "parent") renderParent();
  }

  /* ================= onboarding ================= */

  var ob = { track: "", minutes: 30, daypart: "Kechqurun" };

  function buildOnboarding() {
    var reg = $("#obRegion");
    REGIONS.forEach(function (r) {
      var o = document.createElement("option");
      o.value = r;
      o.textContent = r;
      reg.appendChild(o);
    });

    var tg = $("#trackGrid");
    Object.keys(TRACKS).forEach(function (id) {
      var t = TRACKS[id];
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt-card";
      b.setAttribute("data-track", id);
      b.innerHTML = "<b>" + t.icon + " " + esc(t.short) + "</b><span>" + esc(t.blurb) + "</span>";
      b.addEventListener("click", function () {
        ob.track = id;
        Array.prototype.forEach.call(tg.children, function (c) {
          c.classList.toggle("opt-card--on", c === b);
        });
      });
      tg.appendChild(b);
    });

    var times = [
      { v: 15, l: "15 daqiqa", d: "Eng qisqa, eng yengil" },
      { v: 30, l: "30 daqiqa", d: "Tavsiya etiladi" },
      { v: 60, l: "1 soat", d: "Tezroq natija" },
      { v: 120, l: "2 soat+", d: "Jiddiy reja" }
    ];
    var timeGrid = $("#timeGrid");
    times.forEach(function (t, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt-card" + (i === 1 ? " opt-card--on" : "");
      b.innerHTML = "<b>" + t.l + "</b><span>" + t.d + "</span>";
      b.addEventListener("click", function () {
        ob.minutes = t.v;
        Array.prototype.forEach.call(timeGrid.children, function (c) {
          c.classList.toggle("opt-card--on", c === b);
        });
      });
      timeGrid.appendChild(b);
    });

    var days = ["Ertalab", "Tushdan keyin", "Kechqurun"];
    var dayGrid = $("#dayGrid");
    days.forEach(function (d, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt-card" + (i === 2 ? " opt-card--on" : "");
      b.innerHTML = "<b>" + d + "</b><span>Kunlik dars vaqti</span>";
      b.addEventListener("click", function () {
        ob.daypart = d;
        Array.prototype.forEach.call(dayGrid.children, function (c) {
          c.classList.toggle("opt-card--on", c === b);
        });
      });
      dayGrid.appendChild(b);
    });
  }

  function showOb(step) {
    [1, 2, 3].forEach(function (n) {
      var el = $("#ob" + n);
      if (el) el.classList.toggle("ob-step--on", n === step);
    });
    window.scrollTo(0, 0);
  }

  function wireOnboarding() {
    $("#obNext1").addEventListener("click", function () {
      var nm = $("#obName").value.trim();
      if (!nm) {
        $("#obName").focus();
        $("#obName").style.borderColor = "var(--coral)";
        return;
      }
      $("#obName").style.borderColor = "";
      S.name = nm;
      S.region = $("#obRegion").value;
      showOb(2);
    });

    $("#obBack2").addEventListener("click", function () {
      showOb(1);
    });

    $("#obNext2").addEventListener("click", function () {
      if (!ob.track) {
        $("#trackGrid").style.outline = "2px solid var(--coral)";
        $("#trackGrid").style.borderRadius = "14px";
        return;
      }
      $("#trackGrid").style.outline = "";
      showOb(3);
    });

    $("#obBack3").addEventListener("click", function () {
      showOb(2);
    });

    $("#obFinish").addEventListener("click", function () {
      S.started = true;
      S.track = ob.track;
      S.minutes = ob.minutes;
      S.daypart = ob.daypart;
      S.day = today();
      S.chat = [
        {
          who: "ai",
          text:
            "Assalomu alaykum, " + S.name + "! Men Oy — sizning AI ustozingizman.\n\n" +
            "Siz " + S.region + "dan ekansiz va " + trackOf().name.toLowerCase() +
            " yo'nalishini tanladingiz. Kuniga " + S.minutes + " daqiqa, " + S.daypart.toLowerCase() +
            " — shu asosda 90 kunlik reja tayyor.\n\n" +
            "Birinchi hafta: \"" + LESSONS[S.track + ".1"].title + "\". 6 daqiqada boshlaymizmi?"
        }
      ];
      save();
      go("home");
    });
  }

  /* ================= home ================= */

  function renderHome() {
    touchDay();
    var t = trackOf();
    var pct = progressPct();
    var nextId = planLessons().filter(function (id) {
      return S.lessonsDone.indexOf(id) === -1;
    })[0] || "common.2";
    var nextLesson = LESSONS[nextId];

    var badges = [
      { i: "🌱", l: "Birinchi qadam", on: S.xp > 0 },
      { i: "🎯", l: "Bilimdon", on: bestScore() === 3 },
      { i: "🔥", l: "3 kun ketma-ket", on: S.streak >= 3 },
      { i: "🏅", l: "2 dars", on: S.lessonsDone.length >= 2 }
    ];

    $("#v-home").innerHTML =
      '<div class="hello">' +
      '<div class="h3">Salom, ' + esc(S.name) + "! 👋</div>" +
      "<p>" + esc(S.region) + " · " + esc(t.name) + " · kuniga " + S.minutes + " daqiqa</p>" +
      '<div class="ring-row">' +
      '<div class="ring" style="--p:' + pct + '"><div class="ring__in">' + pct + "%</div></div>" +
      '<div class="ring-stats">' +
      "<div><b>" + S.doneSteps.length + " / " + totalSteps() + "</b> qadam bajarildi</div>" +
      "<div><b>" + S.streak + " kun</b> ketma-ket</div>" +
      "<div><b>12 hafta</b> reja · 8-haftada 1-buyurtma</div>" +
      "</div></div></div>" +

      '<div class="task">' +
      '<div class="task__top"><span class="task__meta">Bugungi vazifa · ' + nextLesson.min + " daqiqa</span>" +
      '<span class="pill">' + esc(t.short) + "</span></div>" +
      '<div class="h3">' + esc(nextLesson.title) + "</div>" +
      "<p>Qisqa dars, 3 ta savol va bitta amaliy vazifa. Bugun " + esc(S.daypart.toLowerCase()) + " uchun.</p>" +
      '<button class="btn btn--teal btn--block" type="button" data-lesson="' + nextId + '">Boshlash →</button>' +
      "</div>" +

      '<div class="qa-grid">' +
      '<button class="qa" type="button" data-go="chat"><i>💬</i><b>Oy bilan gaplashish</b></button>' +
      '<button class="qa" type="button" data-go="roadmap"><i>🗺️</i><b>90 kunlik reja</b></button>' +
      '<button class="qa" type="button" data-go="mentor"><i>🤝</i><b>Mentor topish</b></button>' +
      '<button class="qa" type="button" data-go="parent"><i>👨‍👩‍👧</i><b>Ota-onaga ko\'rsatish</b></button>' +
      "</div>" +

      '<div class="section-label">Yutuqlar</div>' +
      '<div class="badges">' +
      badges
        .map(function (b) {
          return '<span class="badge' + (b.on ? "" : " badge--off") + '">' + b.i + " " + b.l + "</span>";
        })
        .join("") +
      "</div>" +

      '<div class="notice">Prototip demo ma\'lumotlari bilan ishlaydi. Haqiqiy AI javoblari uchun server qismi ulanadi.</div>';

    Array.prototype.forEach.call($("#v-home").querySelectorAll("[data-go]"), function (b) {
      b.addEventListener("click", function () {
        go(b.getAttribute("data-go"));
      });
    });
    Array.prototype.forEach.call($("#v-home").querySelectorAll("[data-lesson]"), function (b) {
      b.addEventListener("click", function () {
        openLesson(b.getAttribute("data-lesson"));
      });
    });
  }

  function bestScore() {
    var b = 0;
    for (var k in S.quizBest) if (S.quizBest[k] > b) b = S.quizBest[k];
    return b;
  }

  /* ================= chat ================= */

  function norm(s) {
    return s
      .toLowerCase()
      .replace(/[ʻʼ'`´‘’]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function has(text, words) {
    for (var i = 0; i < words.length; i++) if (text.indexOf(words[i]) !== -1) return true;
    return false;
  }

  function oyReply(raw) {
    var t = norm(raw);
    var tr = trackOf();
    var nm = S.name || "do'stim";

    if (has(t, ["salom", "assalom", "hayrli", "qalaysan", "yaxshimisiz"])) {
      return {
        text:
          "Assalomu alaykum, " + nm + "! Yaxshiman, rahmat.\n\nBugun " + tr.name.toLowerCase() +
          " bo'yicha bitta kichik qadam tashlaymizmi? " + S.minutes + " daqiqangiz yetadi.",
        chips: ["Nimadan boshla?", "Rejam qanday?", "Daromad qachon?"]
      };
    }

    if (has(t, ["sen kim", "sen kimsan", "oyna nima", "bu nima", "qanday ishlaysan"])) {
      return {
        text:
          "Men Oy — OYNA ilovasidagi AI ustozman. O'zbek tilida tushuntiraman, savollaringizga javob beraman va har kuni bitta qadam boshlayman.\n\nMen o'qituvchi emas, hamrohman: sizni eshitaman, rejani sizga moslayman. Qiyin joyida — sekinlashtiramiz.",
        chips: ["Rejam qanday?", "Mentor bormi?", "Ota-onam nima deydi?"]
      };
    }

    if (has(t, ["dasturlash", "kod", "frontend", "python", "sayt", "html", "javascript", "it"])) {
      return {
        text:
          "Dasturlash — eng tez daromad topiladigan yo'nalishlardan biri, lekin sabr talab qiladi.\n\n" +
          "Reja: 1–2 hafta HTML/CSS (bitta sahifa), 3–4 hafta JavaScript asoslari, 5–6 hafta portfolio uchun mahalliy do'kon sahifasi, 8-hafta — birinchi buyurtma.\n\n" +
          "Telefon bilan ham boshlash mumkin: Acode muharriri va brauzer yetarli.",
        chips: ["Birinchi darsni ochish", "Qancha vaqt kerak?", "Portfolio nima?"]
      };
    }

    if (has(t, ["dizayn", "figma", "logo", "logotip", "post", "rasm"])) {
      return {
        text:
          "Dizayn — telefonda ham o'rganiladigan yo'nalish, shuning uchun qishloq qizlari uchun eng qulay boshlanish.\n\n" +
          "Bugun: Figma'da 1080×1080 o'lchamda bitta Instagram post yasang. Bitta shrift, ikkita rang, ko'p bo'sh joy — tamom.\n\n" +
          "3 ta shunday ish — portfolingiz tayyor. Keyin tanish do'konga taklif qilamiz.",
        chips: ["Birinchi darsni ochish", "Narxni qanday aytaman?", "Daromad qachon?"]
      };
    }

    if (has(t, ["marketing", "smm", "instagram", "telegram kanal", "kontent", "reklama"])) {
      return {
        text:
          "Marketing — mijoz bilan eng yaqin yo'nalish: mahalliy do'konlar, hunarmandlar, oshxonalar hammasi kontent kerak.\n\n" +
          "Boshlash uchun bitta ko'nikma yetarli: savolga javob beradigan post yozish. Haftada 3 post — oyiga 12 post — birinchi mijoz shu yerdan chiqadi.",
        chips: ["Birinchi darsni ochish", "Telegram kanal ochsam bo'ladimi?", "Narx qancha?"]
      };
    }

    if (has(t, ["ingliz", "english", "til", "tarjima"])) {
      return {
        text:
          "Ingliz tilini mukammal bilish shart emas. Xalqaro buyurtmada kerak bo'ladigan narsa — 50 ta ibora va aniq yozish.\n\n" +
          "\"Hi! I can do this task in 2 days. Price: $20. Portfolio: ...\" — shu xat bilan boshlanadi.\n\n" +
          "Har kuni 5 ta yangi so'z + 1 ta shablon xat. Oyiga 150 so'z.",
        chips: ["Birinchi darsni ochish", "Qaysi saytda ishlayman?", "Daromad qachon?"]
      };
    }

    if (has(t, ["yashil", "ekolog", "iqlim", "tabiat", "sovun", "qayta ishlash"])) {
      return {
        text:
          "Yashil yo'nalish — xarajati past, hikoyasi kuchli biznes.\n\n" +
          "Amaliy qadam: bitta mahsulot tanlang (masalan, tabiiy sovun yoki mato xalta), 10 dona tayyorlang, narxni \"xarajat + 30%\" qilib qo'ying va Telegram kanalga 5 ta sifatli rasm bilan joylang.\n\n" +
          "Beshtasi sotilsa — davom etamiz. Bu eng arzon biznes sinovi.",
        chips: ["Birinchi darsni ochish", "Narxni qanday qo'yaman?", "Qayerda sotaman?"]
      };
    }

    if (has(t, ["data", "ma'lumot", "malumot", "ai", "sun'iy intellekt", "jadval", "excel"])) {
      return {
        text:
          "Ma'lumot bilan ishlash — eng kam raqobatli yo'nalishlardan biri, chunki ko'pchilik qo'rqadi.\n\n" +
          "Boshlanish: Google Sheets'da bitta jadval — sotuvlar, mahsulot, summa. Keyin pivot jadval bilan \"eng ko'p nima sotiladi\" degan savolga javob topamiz.\n\n" +
          "Diqqat: AI'ga shaxsiy ma'lumot, parol yoki boshqalarning ma'lumotini bermang.",
        chips: ["Birinchi darsni ochish", "AI xavfsizmi?", "Ish topamanmi?"]
      };
    }

    if (has(t, ["pul", "daromad", "ish", "ishla", "buyurtma", "freelance", "topaman", "narx", "qancha"])) {
      return {
        text:
          "Halol javob: birinchi pul odatda 6–10-haftada keladi. Undan oldin portfolio kerak.\n\n" +
          "Real raqamlar (mahalliy bozor): Instagram post dizayni 30–80 ming so'm, bitta veb-sahifa 300 ming – 1 mln so'm, Telegram kanal uchun 10 post 200–400 ming so'm.\n\n" +
          "Birinchi buyurtma — eng qiyini. Shuning uchun uni kichik qilib boshlaymiz: bitta tanish do'kon.",
        chips: ["Birinchi buyurtma darsini ochish", "Mijozni qayerdan topaman?", "Portfolio nima?"]
      };
    }

    if (has(t, ["ota-ona", "ota onam", "oyim", "dadam", "ruxsat", "uy", "oilam", "aka", "uka"])) {
      return {
        text:
          "Bu juda muhim savol — " + nm + ", siz buni o'ylayotganingiz yaxshi.\n\n" +
          "Ota-onaga ko'rsatadigan \"Ota-ona ko'rinishi\" bor: ular faqat ismingiz, tumaningiz, mentor ismi, o'qish vaqti va progressni ko'radi. Yozishmalar ko'rinmaydi.\n\n" +
          "Amaliy maslahat: birinchi hafta natijani ko'rsating — \"mana, meni o'qityapti, mana natijam\". Ishonch dalil bilan o'sadi.",
        chips: ["Ota-ona ko'rinishini ochish", "Mentor kim bo'ladi?", "Xavfsizmi?"]
      };
    }

    if (has(t, ["vaqt", "vaqtim yo'q", "band", "kuniga", "soat", "ishlayman", "charch"])) {
      return {
        text:
          "Kuniga " + S.minutes + " daqiqa — bu bir choy ichish vaqti. Reja shunga moslangan.\n\n" +
          "Eng samarali usul: " + S.daypart.toLowerCase() + " 20 daqiqa dars + 10 daqiqa amaliyot. Har kuni bir xil vaqtda — miya o'zi tayyorlanadi.\n\n" +
          "Bir kunda 2 soat qilishdan ko'ra, 30 kun ketma-ket 20 daqiqa kuchliroq.",
        chips: ["Bugungi vazifani ochish", "Rejam qanday?", "Ketma-ketlikni qanday saqlayman?"]
      };
    }

    if (has(t, ["qo'rqaman", "qorqaman", "qiyin", "bilmayman", "uddalay", "tashlab", "charchadim", "kechikdim"])) {
      return {
        text:
          "Bilmagan narsa qiyin ko'rinadi — bu normal. " + nm + ", hamma shu joydan boshlagan.\n\n" +
          "Keling, kichraytiramiz: bugun faqat bitta 5 daqiqalik dars. Tugatish shart emas, ochish kifoya.\n\n" +
          "Agar bir necha kun o'tkazib yuborsangiz — hech narsa buzilmaydi. Qaytgan kuningiz hisoblanadi, ketma-ketlik emas.",
        chips: ["Eng qisqa darsni ochish", "Menga motivatsiya kerak", "Mentor bilan gaplashsam bo'ladimi?"]
      };
    }

    if (has(t, ["sertifikat", "diplom", "hujjat", "guvohnoma"])) {
      return {
        text:
          "Sertifikat bor — lekin u asosiy maqsad emas.\n\n" +
          "Ish beruvchi va mijoz uchun kuchliroq dalil: 3 ta real ish va bitta to'langan buyurtma. Shuning uchun rejamiz sertifikat bilan emas, portfolio bilan tugaydi.\n\n" +
          "Sertifikatni 11-haftada olasiz — portfolio tayyor bo'lgach.",
        chips: ["Portfolio nima?", "Rejam qanday?", "Daromad qachon?"]
      };
    }

    if (has(t, ["mentor", "ustoz", "kim bilan", "yordam", "maslahat"])) {
      return {
        text:
          "Mentor — viloyatingizdagi ishlayotgan ayol: dizayner, dasturchi yoki marketolog. Oyiga 2 soat vaqt ajratadi.\n\n" +
          "Siz bilan bir xil yo'lni bosib o'tgan odam eng yaxshi yo'l ko'rsatadi. \"Mentor\" bo'limida sizga mos 3 ta profil ko'rsatilgan.",
        chips: ["Mentorlarni ko'rish", "Mentorga nima deb yozaman?", "Pullikmi?"]
      };
    }

    if (has(t, ["internet", "telefon", "kompyuter", "trafik", "sekin", "offline", "xotira"])) {
      return {
        text:
          "Muammo emas. OYNA offline-first: haftalik darslar telefonga yuklanadi, internet bo'lmasa ham o'qiy olasiz.\n\n" +
          "Bir haftalik kontent ~1 MB — bu bitta rasm hajmi. 3G'da ham ishlaydi, 1 GB operativ xotirali telefonda ham.\n\n" +
          "Ulanish paydo bo'lganda natijalar avtomatik yuboriladi.",
        chips: ["Birinchi darsni ochish", "Qanday yuklab olaman?", "Rejam qanday?"]
      };
    }

    if (has(t, ["reja", "boshla", "qayerdan", "nima qil", "qadam", "90"])) {
      return {
        text:
          "Sizning 90 kunlik rejangiz 3 bosqichdan iborat:\n\n" +
          "1) 1–4 hafta — asos: " + tr.name.toLowerCase() + " bo'yicha birinchi ko'nikma.\n" +
          "2) 5–8 hafta — amaliyot: portfolio uchun 3 ta kichik ish.\n" +
          "3) 9–12 hafta — birinchi buyurtma: taklif, narx, yetkazish, sharh.\n\n" +
          "Bugungi qadam: \"" + LESSONS[S.track + ".1"].title + "\" — " + LESSONS[S.track + ".1"].min + " daqiqa.",
        chips: ["Bugungi darsni ochish", "8-haftada nima bo'ladi?", "Mentor bormi?"]
      };
    }

    if (has(t, ["rahmat", "tashakkur", "zo'r", "yaxshi", "tushundim"])) {
      return {
        text:
          "Arzimaydi, " + nm + "! Bir kichik qadam — bugun. Qolganini birga qilamiz.\n\n" +
          "Xohlasangiz, hozir \"" + LESSONS[S.track + ".1"].title + "\" darsini boshlaymiz.",
        chips: ["Darsni ochish", "Rejam qanday?", "Mentor topish"]
      };
    }

    if (has(t, ["xayr", "ko'rishguncha", "ketdim"])) {
      return {
        text: "Xayr, " + nm + "! Ertaga " + S.daypart.toLowerCase() + " kutaman. Bir qadam — katta o'zgarish.",
        chips: ["Yana gaplashamiz"]
      };
    }

    return {
      text:
        "Yaxshi savol, " + nm + ". Aniq javob berish uchun bir oz aniqlashtiray: sizni " + tr.name.toLowerCase() +
        " yo'nalishida ko'proq nima qiziqtiradi — o'rganishmi, daromadmi yoki ota-onangiz bilan kelishuvmi?\n\n" +
        "Xohlasangiz, men rejangizni ko'rsataman yoki bugungi darsni boshlaymiz.",
      chips: ["Rejamni ko'rsat", "Bugungi dars", "Daromad qachon?"]
    };
  }

  function bubbleHtml(m) {
    return '<div class="bubble bubble--' + (m.who === "me" ? "me" : "ai") + '">' + esc(m.text) + "</div>";
  }

  function renderChat() {
    var v = $("#v-chat");
    var msgs = S.chat.map(bubbleHtml).join("");

    var last = S.chat[S.chat.length - 1];
    var chips = (last && last.chips) || ["Nimadan boshla?", "Rejam qanday?", "Daromad qachon?"];

    v.innerHTML =
      "<div><div class=\"app-top__sub\" style=\"margin-bottom:10px\">Oy javoblari prototip uchun tayyorlangan — haqiqiy model serverda ulanadi.</div>" +
      '<div class="chat" id="chatList">' + msgs + "</div>" +
      '<div class="chat-chips">' +
      chips
        .map(function (c) {
          return '<button class="chip" type="button" data-chip="' + esc(c) + '">' + esc(c) + "</button>";
        })
        .join("") +
      "</div>" +
      '<form class="composer" id="composerForm">' +
      '<input class="input" id="chatInput" type="text" placeholder="Savolingizni yozing…" autocomplete="off" />' +
      '<button class="btn btn--teal" type="submit" aria-label="Yuborish">↑</button>' +
      "</form></div>";

    Array.prototype.forEach.call(v.querySelectorAll("[data-chip]"), function (b) {
      b.addEventListener("click", function () {
        send(b.getAttribute("data-chip"));
      });
    });

    $("#composerForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var input = $("#chatInput");
      var val = input.value.trim();
      if (!val) return;
      input.value = "";
      send(val);
    });

    setTimeout(function () {
      window.scrollTo(0, document.body.scrollHeight);
    }, 30);
  }

  function send(text) {
    S.chat.push({ who: "me", text: text });
    save();
    var list = $("#chatList");
    if (list) {
      list.insertAdjacentHTML("beforeend", bubbleHtml({ who: "me", text: text }));
      list.insertAdjacentHTML(
        "beforeend",
        '<div class="bubble bubble--ai"><span class="typing"><span></span><span></span><span></span></span></div>'
      );
      window.scrollTo(0, document.body.scrollHeight);
    }
    setTimeout(function () {
      var r = oyReply(text);
      S.chat.push({ who: "ai", text: r.text, chips: r.chips });
      addXp(1);
      save();
      renderChat();
    }, 620);
  }

  /* ================= roadmap ================= */

  function renderRoadmap() {
    var t = trackOf();
    var lessons = planLessons();
    var weeks = WEEK_TITLES.map(function (title, i) {
      var id = lessons[i];
      var done = id && S.lessonsDone.indexOf(id) !== -1;
      var open = !!id;
      var label = title.replace("{t}", t.name);
      var right = done
        ? '<span class="pill">✓ Bajarildi</span>'
        : open
        ? '<button class="icon-btn" type="button" data-lesson="' + id + '" aria-label="Ochish">→</button>'
        : '<span class="small muted">🔒</span>';
      return (
        '<div class="week ' + (done ? "week--done" : open ? "week--open" : "week--locked") + '">' +
        '<div class="week__n">' + (done ? "✓" : i + 1) + "</div>" +
        "<div><b>" + esc(label) + "</b><small>" +
        (open ? LESSONS[id].min + " daqiqa · dars ochiq" : "Pilotda ochiladi") +
        "</small></div>" + right + "</div>"
      );
    });

    $("#v-roadmap").innerHTML =
      "<h2 class=\"h3\">90 kunlik reja — " + esc(t.name) + "</h2>" +
      '<p class="small muted" style="margin:6px 0 12px">Haftasiga ' +
      S.minutes + " daqiqa/kun · " + esc(S.daypart) + ". 1–2-hafta hozir ochiq.</p>" +
      bar(progressPct()) +
      '<div class="phase-title">1-bosqich · Asos (1–4 hafta)</div>' + weeks.slice(0, 4).join("") +
      '<div class="phase-title">2-bosqich · Amaliyot (5–8 hafta)</div>' + weeks.slice(4, 8).join("") +
      '<div class="phase-title">3-bosqich · Daromad (9–12 hafta)</div>' + weeks.slice(8, 12).join("") +
      '<div class="notice">Prototipda 2 ta dars to\'liq ishlaydi. Qolgan haftalar mahsulot tuzilmasi.</div>';

    Array.prototype.forEach.call($("#v-roadmap").querySelectorAll("[data-lesson]"), function (b) {
      b.addEventListener("click", function () {
        openLesson(b.getAttribute("data-lesson"));
      });
    });
  }

  /* ================= lesson ================= */

  var cur = { id: "", step: 0, q: 0, score: 0, answered: false, picked: -1 };

  function openLesson(id) {
    if (!LESSONS[id]) return;
    cur = { id: id, step: 0, q: 0, score: 0, answered: false, picked: -1 };
    go("lesson");
  }

  /* renderLesson is the only writer of #v-lesson: it paints whatever the
     current lesson state is (step / question / result) in one pass. */
  function renderLesson() {
    var L = LESSONS[cur.id];
    var total = L.steps.length + L.quiz.length;
    var doneCount = cur.step + cur.q;

    var body;
    if (cur.step < L.steps.length) body = stepHtml(L.steps[cur.step]);
    else if (cur.q < L.quiz.length) body = quizHtml(L);
    else body = resultHtml(L);

    var v = $("#v-lesson");
    v.innerHTML =
      '<div class="lesson-head">' +
      '<button class="btn btn--ghost btn--sm" type="button" id="lesBack">← Reja</button>' +
      '<div class="h3" style="margin-top:12px">' + esc(L.title) + "</div>" +
      '<div class="small muted">' + esc(trackOf().name) + " · Qadam " + Math.min(doneCount + 1, total) + " / " + total + "</div>" +
      "</div>" +
      bar(Math.round((doneCount / total) * 100)) +
      body;

    on(v, "#lesBack", "click", function () {
      go("roadmap");
    });
    on(v, "#lesNext", "click", nextStep);
    on(v, "#quizNext", "click", nextQuestion);
    on(v, "#toHome", "click", function () {
      go("home");
    });
    on(v, "#toPlan", "click", function () {
      go("roadmap");
    });
    Array.prototype.forEach.call(v.querySelectorAll("[data-opt]"), function (b) {
      b.addEventListener("click", function () {
        answer(parseInt(b.getAttribute("data-opt"), 10));
      });
    });
  }

  function stepHtml(s) {
    return (
      '<div class="les-step"><b>' + esc(s.h) + "</b><p>" + esc(s.p) + "</p>" +
      (s.tip ? '<div class="tip">💡 ' + esc(s.tip) + "</div>" : "") +
      "</div>" +
      '<button class="btn btn--teal btn--block" type="button" id="lesNext">Tushundim, davom →</button>'
    );
  }

  function quizHtml(L) {
    var q = L.quiz[cur.q];
    var opts = q.o
      .map(function (o, i) {
        var cls = "opt";
        if (cur.answered) {
          if (i === q.a) cls += " opt--right";
          else if (i === cur.picked) cls += " opt--wrong";
        }
        return '<button class="' + cls + '" type="button" data-opt="' + i + '">' +
          String.fromCharCode(65 + i) + ") " + esc(o) + "</button>";
      })
      .join("");

    return (
      '<div class="les-step">' +
      '<div class="small muted" style="margin-bottom:6px">Savol ' + (cur.q + 1) + " / " + L.quiz.length + "</div>" +
      '<div class="q-text">' + esc(q.q) + "</div>" +
      opts +
      (cur.answered ? '<div class="why">' + esc(q.why) + "</div>" : "") +
      (cur.answered
        ? '<button class="btn btn--primary btn--block" type="button" id="quizNext">' +
          (cur.q + 1 < L.quiz.length ? "Keyingi savol →" : "Natijani ko'rish →") +
          "</button>"
        : "") +
      "</div>"
    );
  }

  function resultHtml(L) {
    var pct = Math.round((cur.score / L.quiz.length) * 100);
    var face = pct === 100 ? "🏆" : pct >= 66 ? "🎯" : "🌱";
    var words =
      pct === 100 ? "🏆 A'lo natija!" : pct >= 66 ? "👏 Yaxshi natija!" : "🌱 Boshlanish yaxshi!";

    return (
      '<div class="result">' +
      '<div class="result__big">' + face + "</div>" +
      '<div class="h3">' + words + "</div>" +
      "<p>" + esc(L.title) + ": " + cur.score + " / " + L.quiz.length + " to'g'ri javob.</p>" +
      '<div class="result__xp">+' + (15 + cur.score * 10) + " XP · jami " + S.xp + " XP</div>" +
      '<div style="margin-top:14px;display:grid;gap:8px">' +
      '<button class="btn btn--teal btn--block" type="button" id="toHome">Uyga qaytish</button>' +
      '<button class="btn btn--ghost btn--block" type="button" id="toPlan">Rejani ko\'rish</button>' +
      "</div></div>" +
      '<div class="notice">Keyingi qadam ochildi: 3-hafta — "Asosiy tushunchalar: chuqurroq". Har kuni bitta qadam.</div>'
    );
  }

  /* lesson state changes only in these handlers; each one ends by re-rendering */

  function nextStep() {
    var sid = cur.id + ":" + cur.step;
    if (S.doneSteps.indexOf(sid) === -1) {
      S.doneSteps.push(sid);
      addXp(5);
    }
    cur.step += 1;
    save();
    renderLesson();
  }

  function answer(i) {
    if (cur.answered) return;
    var correct = i === LESSONS[cur.id].quiz[cur.q].a;
    cur.answered = true;
    cur.picked = i;
    if (correct) cur.score += 1;
    addXp(correct ? 10 : 2);
    save();
    renderLesson();
  }

  function nextQuestion() {
    var L = LESSONS[cur.id];
    cur.q += 1;
    cur.answered = false;
    cur.picked = -1;
    if (cur.q === L.quiz.length) completeLesson();
    save();
    renderLesson();
  }

  function completeLesson() {
    if (S.lessonsDone.indexOf(cur.id) === -1) {
      S.lessonsDone.push(cur.id);
      addXp(15);
    }
    if (cur.score > (S.quizBest[cur.id] || 0)) S.quizBest[cur.id] = cur.score;
  }

  /* ================= mentor ================= */

  function renderMentor() {
    var t = S.track;
    var matched = MENTORS.filter(function (m) {
      return m.t.indexOf(t) !== -1;
    });
    var others = MENTORS.filter(function (m) {
      return m.t.indexOf(t) === -1;
    });
    var shown = matched.concat(others).slice(0, 3);

    $("#v-mentor").innerHTML =
      "<h2 class=\"h3\">Sizga mos mentorlar</h2>" +
      '<p class="small muted" style="margin:6px 0 14px">' + esc(trackOf().name) +
      " · " + esc(S.region) + ". Har biri oyiga 2 soat vaqt ajratadi.</p>" +
      shown
        .map(function (m) {
          return (
            '<div class="parent-card"><b>' + esc(m.n) + "</b>" +
            '<p style="color:var(--teal-d);font-weight:700;font-size:12.5px">' + esc(m.r) + "</p>" +
            "<p>" + esc(m.o) + "</p>" +
            '<button class="btn btn--ghost btn--sm" type="button" style="margin-top:10px" data-ask="' + esc(m.n) + '">Salom yozish</button>' +
            "</div>"
          );
        })
        .join("") +
      '<div class="notice">Mentor profillari — namuna. Haqiqiy tarmoq pilotda viloyat bo\'yicha shakllanadi. Har bir mentor tekshiruvdan o\'tadi.</div>' +
      '<div id="askOut" style="margin-top:12px"></div>';

    Array.prototype.forEach.call($("#v-mentor").querySelectorAll("[data-ask]"), function (b) {
      b.addEventListener("click", function () {
        var nm = b.getAttribute("data-ask");
        $("#askOut").innerHTML =
          '<div class="letter">Assalomu alaykum, ' + esc(nm) + "! Men " + esc(S.name) + ", " +
          esc(S.region) + "danman. OYNA'da " + esc(trackOf().name.toLowerCase()) +
          " o'rganyapman. Haftada 1 marta 15 daqiqa maslahat olsam bo'ladimi?\n\n(Prototip: xabar yuborilmadi)</div>";
      });
    });
  }

  /* ================= parent view ================= */

  function renderParent() {
    var t = trackOf();
    var m = MENTORS.filter(function (x) {
      return x.t.indexOf(S.track) !== -1;
    })[0] || MENTORS[0];

    var letter =
      "Assalomu alaykum! Men " + m.n + ", OYNA mentori. " + S.name + " " + S.region +
      "da OYNA orqali " + t.name.toLowerCase() + " o'rganmoqda.\n\n" +
      "Kuniga " + S.minutes + " daqiqa, " + S.daypart.toLowerCase() + " — shu vaqt ichida u platformada bo'ladi. " +
      "Platformada faqat o'quv darslari va mentor bilan yozishma bor: begona odamlar bilan erkin muloqot yo'q.\n\n" +
      "Bugungi holat: " + progressPct() + "% bajarildi. Savolingiz bo'lsa, menga bemalol yozing.";

    $("#v-parent").innerHTML =
      "<h2 class=\"h3\">Ota-ona ko'rinishi</h2>" +
      '<p class="small muted" style="margin:6px 0 14px">Bu ekran ota-onaga ko\'rsatish uchun. Faqat xavfsiz ma\'lumot.</p>' +
      '<div class="parent-card"><b>Kim o\'qiyapti</b>' +
      '<div class="rows">' +
      '<div class="row"><span>Ism</span><b>' + esc(S.name) + "</b></div>" +
      '<div class="row"><span>Tuman / viloyat</span><b>' + esc(S.region) + "</b></div>" +
      '<div class="row"><span>Yo\'nalish</span><b>' + esc(t.name) + "</b></div>" +
      '<div class="row"><span>Kunlik vaqt</span><b>' + S.minutes + " daqiqa · " + esc(S.daypart) + "</b></div>" +
      '<div class="row"><span>Mentor</span><b>' + esc(m.n) + " (" + esc(m.r) + ")</b></div>" +
      '<div class="row"><span>Progress</span><b>' + progressPct() + "%</b></div>" +
      "</div></div>" +
      '<div class="parent-card"><b>Xavfsizlik</b>' +
      '<p>• Yopiq hamjamiyat, moderatsiya 24/7.<br>• Telefon raqami va manzil boshqa foydalanuvchilarga ko\'rinmaydi.<br>• Har bir mentor shaxsini tasdiqlashdan o\'tgan.<br>• Ota-ona istalgan vaqtda hisobotni ko\'rishi mumkin.</p></div>' +
      '<div class="parent-card"><b>Mentordan xat (namuna)</b><div class="letter" style="margin-top:10px">' + esc(letter) + "</div></div>" +
      '<div class="notice">Prototip: bu ekran faqat ko\'rsatish uchun. Real mahsulotda ota-ona SMS yoki Telegram orqali haftalik hisobot oladi.</div>';
  }

  /* ================= boot ================= */

  load();
  buildOnboarding();
  wireOnboarding();
  renderXp();

  Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (b) {
    b.addEventListener("click", function () {
      go(b.getAttribute("data-go"));
    });
  });

  $("#resetBtn").addEventListener("click", function () {
    try {
      localStorage.removeItem(KEY);
    } catch (e) {
      /* ignore */
    }
    location.reload();
  });

  if (S.started) {
    showOb(3);
    go("home");
  } else {
    showOb(1);
    go("onboard");
  }
})();
