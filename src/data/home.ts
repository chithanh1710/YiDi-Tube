import { v4 as randomID } from "uuid";

function randomNumber(max = 10000000000, min = 0) {
  const n = Math.floor(Math.random() * (max - min) + min + 1);
  return n;
}

export const categories: string[] = [
  "All",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "AngularJs",
  "VueJs",
  "SteveJs",
  "NextJs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "Postgres SQL",
  "NestJs",
  "Frontend",
  "Backend",
  "Fullstack",
  "AI",
  "ChatGPT",
  "Tailwind",
  "Java",
  "C#",
  "C/C++",
  "Python",
  "Rust",
  "Go",
];

export const videos = [
  {
    id: randomID(),
    title: "Du thuyền 1 đô so với 1,000,000,000 đô",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/48h57PspBec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBpWWLWeY_BByqQOOIwGkoo6bgw",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Chiếc bẫy nguy hiểm nhất thế giới!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/3OFj6l2tQ9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsKFEBYj0ziSJDY4PZVNl_dXuFRg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Sống sót 24 giờ liên tục trong sa mạc",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/Ooke4YZv8Ts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeRNxafbmnveFEMxclxIXDMONpDQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "$1,000,000 Influencer Tournament!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/x9TQ6culXIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGCuLDn58RRZPj88oJAqTfK8lZcg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Responsive Website Using HTML And CSS Step By Step",
    channel: {
      name: "Tahmid Ahmed",
      id: "TahmidAhmed",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_mMTMOli4ktJlo3crsIhcZYOPqONDJUUOdTaSZy=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/IXucQAEkIMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByIylVrwYoYZP9skpCdfCnz5TJaQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title:
      "Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router  ",
    channel: {
      name: "Lama Dev",
      id: "LamaDev",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/VE8BkImUciY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUt6xb4AdQj7IFuO45iYeVTUuMVA",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "CSS Anchor Is The Best New CSS Feature Since Flexbox",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "NEW Way To Create Variables In JavaScript",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-22"),
    duration: 732,
    thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Front-end developer takes on a CSS battle",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-10-05"),
    duration: 120,
    thumbnailUrl: "https://i.ytimg.com/vi/eYPyIq5Y3Rk/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Quick guide to CSS focus states",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(0, 500),
    postedAt: new Date("2023-9-19"),
    duration: 4343,
    thumbnailUrl: "https://i.ytimg.com/vi/apdD69J4bEc/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Cannot Believe React Made A Hook For This",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-02"),
    duration: 1000,
    thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Got Laid Off...",
    channel: {
      name: "Caleb Curry",
      id: "CalebCurry",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-03"),
    duration: 54,
    thumbnailUrl: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Tails OS in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Du thuyền 1 đô so với 1,000,000,000 đô",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/48h57PspBec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBpWWLWeY_BByqQOOIwGkoo6bgw",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Chiếc bẫy nguy hiểm nhất thế giới!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/3OFj6l2tQ9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsKFEBYj0ziSJDY4PZVNl_dXuFRg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Sống sót 24 giờ liên tục trong sa mạc",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/Ooke4YZv8Ts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeRNxafbmnveFEMxclxIXDMONpDQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "$1,000,000 Influencer Tournament!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/x9TQ6culXIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGCuLDn58RRZPj88oJAqTfK8lZcg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Responsive Website Using HTML And CSS Step By Step",
    channel: {
      name: "Tahmid Ahmed",
      id: "TahmidAhmed",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_mMTMOli4ktJlo3crsIhcZYOPqONDJUUOdTaSZy=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/IXucQAEkIMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByIylVrwYoYZP9skpCdfCnz5TJaQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title:
      "Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router  ",
    channel: {
      name: "Lama Dev",
      id: "LamaDev",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/VE8BkImUciY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUt6xb4AdQj7IFuO45iYeVTUuMVA",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "CSS Anchor Is The Best New CSS Feature Since Flexbox",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "NEW Way To Create Variables In JavaScript",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-22"),
    duration: 732,
    thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Front-end developer takes on a CSS battle",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-10-05"),
    duration: 120,
    thumbnailUrl: "https://i.ytimg.com/vi/eYPyIq5Y3Rk/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Quick guide to CSS focus states",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(0, 500),
    postedAt: new Date("2023-9-19"),
    duration: 4343,
    thumbnailUrl: "https://i.ytimg.com/vi/apdD69J4bEc/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Cannot Believe React Made A Hook For This",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-02"),
    duration: 1000,
    thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Got Laid Off...",
    channel: {
      name: "Caleb Curry",
      id: "CalebCurry",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-03"),
    duration: 54,
    thumbnailUrl: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Tails OS in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Du thuyền 1 đô so với 1,000,000,000 đô",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/48h57PspBec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBpWWLWeY_BByqQOOIwGkoo6bgw",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Chiếc bẫy nguy hiểm nhất thế giới!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/3OFj6l2tQ9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsKFEBYj0ziSJDY4PZVNl_dXuFRg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Sống sót 24 giờ liên tục trong sa mạc",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/Ooke4YZv8Ts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeRNxafbmnveFEMxclxIXDMONpDQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "$1,000,000 Influencer Tournament!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/x9TQ6culXIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGCuLDn58RRZPj88oJAqTfK8lZcg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Responsive Website Using HTML And CSS Step By Step",
    channel: {
      name: "Tahmid Ahmed",
      id: "TahmidAhmed",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_mMTMOli4ktJlo3crsIhcZYOPqONDJUUOdTaSZy=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/IXucQAEkIMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByIylVrwYoYZP9skpCdfCnz5TJaQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title:
      "Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router  ",
    channel: {
      name: "Lama Dev",
      id: "LamaDev",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/VE8BkImUciY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUt6xb4AdQj7IFuO45iYeVTUuMVA",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "CSS Anchor Is The Best New CSS Feature Since Flexbox",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "NEW Way To Create Variables In JavaScript",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-22"),
    duration: 732,
    thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Front-end developer takes on a CSS battle",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-10-05"),
    duration: 120,
    thumbnailUrl: "https://i.ytimg.com/vi/eYPyIq5Y3Rk/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Quick guide to CSS focus states",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(0, 500),
    postedAt: new Date("2023-9-19"),
    duration: 4343,
    thumbnailUrl: "https://i.ytimg.com/vi/apdD69J4bEc/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Cannot Believe React Made A Hook For This",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-02"),
    duration: 1000,
    thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Got Laid Off...",
    channel: {
      name: "Caleb Curry",
      id: "CalebCurry",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-03"),
    duration: 54,
    thumbnailUrl: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Tails OS in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Du thuyền 1 đô so với 1,000,000,000 đô",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/48h57PspBec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBpWWLWeY_BByqQOOIwGkoo6bgw",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Chiếc bẫy nguy hiểm nhất thế giới!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/3OFj6l2tQ9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsKFEBYj0ziSJDY4PZVNl_dXuFRg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Sống sót 24 giờ liên tục trong sa mạc",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/Ooke4YZv8Ts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeRNxafbmnveFEMxclxIXDMONpDQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "$1,000,000 Influencer Tournament!",
    channel: {
      name: "MrBeast",
      id: "MrBeast",
      profileUrl:
        "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/x9TQ6culXIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGCuLDn58RRZPj88oJAqTfK8lZcg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Responsive Website Using HTML And CSS Step By Step",
    channel: {
      name: "Tahmid Ahmed",
      id: "TahmidAhmed",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_mMTMOli4ktJlo3crsIhcZYOPqONDJUUOdTaSZy=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2024-01-19"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/IXucQAEkIMo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByIylVrwYoYZP9skpCdfCnz5TJaQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title:
      "Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router  ",
    channel: {
      name: "Lama Dev",
      id: "LamaDev",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s68-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl:
      "https://i.ytimg.com/vi/VE8BkImUciY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUt6xb4AdQj7IFuO45iYeVTUuMVA",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "CSS Anchor Is The Best New CSS Feature Since Flexbox",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "NEW Way To Create Variables In JavaScript",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-22"),
    duration: 732,
    thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Front-end developer takes on a CSS battle",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-10-05"),
    duration: 120,
    thumbnailUrl: "https://i.ytimg.com/vi/eYPyIq5Y3Rk/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Quick guide to CSS focus states",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(0, 500),
    postedAt: new Date("2023-9-19"),
    duration: 4343,
    thumbnailUrl: "https://i.ytimg.com/vi/apdD69J4bEc/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Cannot Believe React Made A Hook For This",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-02"),
    duration: 1000,
    thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "I Got Laid Off...",
    channel: {
      name: "Caleb Curry",
      id: "CalebCurry",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-03-03"),
    duration: 54,
    thumbnailUrl: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Tails OS in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: randomID(),
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: randomNumber(),
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];
