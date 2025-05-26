const musicData = [
  {
    title: "봄날은 간다",
    artist: "김윤아",
    link: "https://youtu.be/sq_bgLSm40I?si=7xCo09Y7BxKfCFIO",
    tags: ["위로", "따뜻한", "잔잔한"]
  },
  {
    title: "그건 아마 우리의 잘못은 아닐 거야",
    artist: "백예린",
    link: "https://youtu.be/Z8E0apklL2w?si=8WMMZrv6_lHPNPBL",
    tags: ["위로", "따뜻한", "잔잔한"]
  },
  {
    title: "도망가자",
    artist: "선우정아",
    link: "https://youtu.be/wyN27QpglGE?si=iBWt_iDqUBO7Z4MW",
    tags: ["위로", "따뜻한", "잔잔한"]
  },
  {
    title: "출발",
    artist: "김동률",
    link: "https://youtu.be/xgvckGs6xhU?si=q3kw_4xtbiZdbyXt",
    tags: ["따뜻한", "희망", "자유"]
  },
  {
    title: "등대",
    artist: "하현상",
    link: "https://youtu.be/zVuAKAlS8O4?si=z0Rzh5TNtAmWTRo-",
    tags: ["위로", "따뜻한", "잔잔한", "희망"]
  },
  {
    title: "에필로그",
    artist: "정승환",
    link: "https://youtu.be/GWp8KMYZzY0?si=CogPJLrSCfGvVwOH",
    tags: ["따뜻한", "희망", "사랑", "몽글몽글"]
  },
  {
    title: "숙녀에게",
    artist: "변진섭",
    link: "https://youtu.be/VpgoESGMHSI?si=GQayb2fNj-YK2rW1",
    tags: ["잔잔한", "사랑"]
  },
  {
    title: "서랍",
    artist: "10cm",
    link: "https://youtu.be/gNP-IqAn1wU?si=cLp7KvsPQAGvqhmU",
    tags: ["따뜻한", "잔잔한", "사랑", "몽글몽글"]
  },
  {
    title: "나는 나비",
    artist: "YB",
    link: "https://youtu.be/U0Lljwv8djo?si=S6PFDkYeHgIPpdBh",
    tags: ["위로", "성찰", "자유"]
  },
  {
    title: "후라이의 꿈",
    artist: "AKMU",
    link: "https://youtu.be/3kGAlp_PNUg?si=J4vXTXaQqvShoGv1",
    tags: ["따뜻한", "자유", "희망"]
  },
  {
    title: "너와의 모든 지금",
    artist: "재쓰비",
    link: "https://youtu.be/XV0lSvr0huU?si=hAdTk6E4xYcdN7IJ",
    tags: ["위로", "희망", "성찰", "자유"]
  },
  {
    title: "달리기",
    artist: "옥상달빛",
    link: "https://youtu.be/lHW1h9hES7A?si=GiYaQlr_vXnz0dLN",
    tags: ["따뜻한", "잔잔한", "성찰", "자유"]
  },
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
