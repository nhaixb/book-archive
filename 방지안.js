const musicData = [
  {
    title: "그건 아마 우리의 잘못은 아닐 거야",
    artist: "백예린",
    link: "https://youtu.be/Z8E0apklL2w?si=8WMMZrv6_lHPNPBL",
    tags: ["위로"]
  },
  {
    title: "도망가자",
    artist: "선우정아",
    link: "https://youtu.be/wyN27QpglGE?si=iBWt_iDqUBO7Z4MW",
    tags: ["위로"]
  },
  {
    title: "출발",
    artist: "김동률",
    link: "https://youtu.be/xgvckGs6xhU?si=q3kw_4xtbiZdbyXt",
    tags: ["위로"]
  },
  {
    title: "등대",
    artist: "하현상",
    link: "https://youtu.be/zVuAKAlS8O4?si=z0Rzh5TNtAmWTRo-",
    tags: ["위로", "몽글몽글한"]
  },
  {
    title: "에필로그",
    artist: "정승환",
    link: "https://youtu.be/GWp8KMYZzY0?si=CogPJLrSCfGvVwOH",
    tags: ["몽글몽글한"]
  },
  {
    title: "숙녀에게",
    artist: "변진섭",
    link: "https://youtu.be/VpgoESGMHSI?si=GQayb2fNj-YK2rW1",
    tags: ["몽글몽글한"]
  },
  {
    title: "서랍",
    artist: "10cm",
    link: "https://youtu.be/gNP-IqAn1wU?si=cLp7KvsPQAGvqhmU",
    tags: ["몽글몽글한"]
  },
  {
    title: "나는 나비",
    artist: "YB",
    link: "https://youtu.be/U0Lljwv8djo?si=S6PFDkYeHgIPpdBh",
    tags: ["자유", "긍정"]
  },
  {
    title: "후라이의 꿈",
    artist: "AKMU",
    link: "https://youtu.be/3kGAlp_PNUg?si=J4vXTXaQqvShoGv1",
    tags: ["자유"]
  },
  {
    title: "너와의 모든 지금",
    artist: "재쓰비",
    link: "https://youtu.be/XV0lSvr0huU?si=hAdTk6E4xYcdN7IJ",
    tags: ["자유"]
  },
  {
    title: "달리기",
    artist: "옥상달빛",
    link: "https://youtu.be/lHW1h9hES7A?si=GiYaQlr_vXnz0dLN",
    tags: ["자유"]
  },
  {
    title: "HAPPY",
    artist: "데이식스",
    link: "https://youtu.be/2dFwndi4ung?si=OInXhRQ_46sFdZt8",
    tags: ["희망", "긍정"]
  },
  {
    title: "힘내!",
    artist: "소녀시대",
    link: "https://youtu.be/_0Ke2fThnG0?si=Y3Kgpi4cn_qW2sxr",
    tags: ["희망"]
  },
  {
    title: "Like a star",
    artist: "도영",
    link: "https://youtu.be/y3FXhv_YRkY?si=DT7HKeFNlaKUBFFH",
    tags: ["희망"]
  },
  {
    title: "소우주",
    artist: "BTS",
    link: "https://youtu.be/Fw7C6IsDYgI?si=jdPoio7A8-iHFwsm",
    tags: ["희망"]
  }
];

function displayMusic(list) {
  const container = document.getElementById("music-container");
  container.innerHTML = "";

  list.forEach((music) => {
    const div = document.createElement("div");
    div.className = "music-item";

    div.innerHTML = `
      <p>
        🎵 <a href="${music.link}" target="_blank">${music.artist} - ${music.title}</a><br>
        🏷️ ${music.tags.map(tag => `#${tag}`).join(", ")}
      </p>
    `;
    container.appendChild(div);
  });
}
