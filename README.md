# 롤챌린지소개페이지

배포사이트주소 : https://champion-project-8wbj.vercel.app/

## 👨‍🏫 프로젝트 소개

## 롤 챌린지 캐릭터들을 소개하고 아이템을 검색할 수 있으며 무료로 사용가능한 챔피언 캐릭터를 조회할 수 있는 페이지

## 🚩 프로젝트 개요

- **프로젝트명** &nbsp; :&nbsp; **롤챌린지**
- **진행 기간** &nbsp;: &nbsp; **24.09.30 ~ 24.10.07**

홈페이지
![](https://velog.velcdn.com/images/alice0751/post/9ec1ce09-0b39-4f38-a7f4-1b2ec8a29be8/image.png)
챔피언목록 : 챔피언 캐릭터들을 조회, 클릭하여 캐릭터별 상세페이지로 이동가능
![](https://velog.velcdn.com/images/alice0751/post/cb820a24-8e3e-4e1d-89d9-6f2b12111fc2/image.png)
아이템목록 : 아이템 목록들을 조회
![](https://velog.velcdn.com/images/alice0751/post/844deacd-a283-4107-aaf1-cc7b386fdbd7/image.png)
챔피언로테이션 : 금주에 사용가능한 챔피언 캐릭터들을 조회
![](https://velog.velcdn.com/images/alice0751/post/4f80904f-65d7-438d-b9bd-054fb287851a/image.png)
상세페이지 : 캐릭터별 상세정보 조회
![](https://velog.velcdn.com/images/alice0751/post/fdb9fd66-245f-4b1f-8a6d-70c05e4b0854/image.png)

---

사용한 기술스택

<div align=Left>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/typescript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=black">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/git actions-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/VSCODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/VERCEL-007ACC?style=for-the-badge&logo=VERCEL&logoColor=white">
<img src="https://img.shields.io/badge/NEXTJS-green?style=for-the-badge&logo=NEXTJS&logoColor=white">
<img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=for-the-badge&logo=java&logoColor=white">
</div>
---

### Next.js를 사용하여 페이지 개발

1. 프로젝트 구조를 먼저 만들어주었다.
   src > app > App router 관련 폴더, 파일
   src > components 공통적으로 쓰이는 컴포넌트 파일
   src > types 타입정의
   src> utils api fetch 파일

2. App router 기반의 페이지 설정
   메인페이지
   src > app > page.tsx
   Layout페이지
   src > app > layout.tsx
   layout 파일에는 페이지들마다 공통적으로 사용되는 header와 footer를 사용

```js
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full">
          <nav>
            <ul className="grid grid-cols-4 w-full bg-slate-800 h-10">
              <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  홈
                </Link>
              </li>
              <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/champions"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  챔피언 목록
                </Link>
              </li>
              <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/items"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  아이템 목록
                </Link>
              </li>
              <li className="flex justify-center items-center border border-solid border-gray-500 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/rotation"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  챔피언 로테이션
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
```

4. Riot API를 발급받고 .env.local에 환경변수를 추가해준 후 .gitignore 에 .env를 추가해 내 apiKey가 노출되지 않도록 막아줌

5. 사용하는 api들의 json데이터들을 확인하고 src/types에 type정의
   ![](https://velog.velcdn.com/images/alice0751/post/c3d23156-0608-4792-b019-a183d7e18d8c/image.png)
   Thunder Client를 활용해 json데이터들을 보고 type들을 정의하였다.

```ts
xport type Champion = {
  id: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
```

### ☘️ CSR에서 Router Handlers사용하기

- 클라이언트 사이드에서 Router Handlers를 사용 (CSR)
- 서버 컴포넌트 사이드 Server Actions와 별도의 API호출 함수를 사용하여 데이터 처리

#### 💥 구현방법

- CSR Route Handlers 활용방법 (챔피언로테이션페이지)
  (클라이언트 사이드에서 실시간으로 정보변경을 반영)

app>api>rotation>route.ts

```tsx
import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API Key가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": apiKey, // header에 apiKey추가
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "데이터 가져오기에 실패했습니다." },
        { status: res.status }
      );
    }

    const data: ChampionRotation = await res.json();
    console.log(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error, "championRotation error");
    return NextResponse.json(
      { error: "서버에서 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
```

### ☘️ Server Component (SSR)에서 Server Actions 사용하기

#### 💥 구현방법

src>utils>serverApi.ts

1. 챔피언 목록리스트와 챔피언 상세리스트를 불러올 때 버전 정보가 필요 버전을 불러오는 fetch함수 작성
2. 챔피언 목록리스트를 불러오는 fetch함수작성
3. 챔피언 상세리스트를 불러오는 fetch함수작성
   4, item 리스트를 불러오는 fetch함수작성

```ts
import { Champion } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";
import { Item } from "@/types/Item";

const BASEURL = "https://ddragon.leagueoflegends.com";

// 최신버전
export async function fetchVersion(): Promise<string> {
  try {
    const fetchVersion = await fetch(`${BASEURL}/api/versions.json`);
    const versionRes = await fetchVersion.json();
    return versionRes[0]; // 최신 버전 반환
  } catch (error) {
    console.log(error, "버전가져오기오류");
    return "";
  }
}

// 챔피언전체정보
export async function fetchChampionList(): Promise<Champion[]> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/champion.json`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    console.log(data.data);
    return Object.values(data.data);
  } catch (error) {
    console.log(error, "ChampionList Error");
    return [];
  }
}

// 챔피언 상세 정보
export async function fetchChampionDetail(
  id: string
): Promise<ChampionDetail | null> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/champion/${id}.json`
    );
    const data = await res.json();

    return data.data[id];
  } catch (error) {
    console.log(error, "championDetail Error");
    return null;
  }
}

// 아이템정보
export async function fetchItem(): Promise<Item[]> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/item.json` // 아이템 API 엔드포인트 수정
    );
    const data = await res.json();
    console.log(data.data);
    return Object.values(data.data);
  } catch (error) {
    console.log(error, "ItemFetch Error");
    return [];
  }
}
```

### ☘️ api정보 불러와서 페이지에서 데이터 표시하기

#### - champions 챔피언 목록 페이지

src > app > champions > page.tsx
// ISR(Incremental Static Regernation)방식으로 구현

- 정해진 일정 시간 (revalidate) 에 따라 프로젝트를 build시킬 때 데이터의 정보가 변경됨
- Card component를 활용하여 재사용성을 높임

```tsx
"use server";

import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

export default async function ChampionPage() {
  const data: Champion[] = await fetchChampionList();

  return (
    <>
      <h1 className="font-extrabold text-3xl text-center mt-12">챔피언목록</h1>
      <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto mt-12 gap-4">
        {data.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </>
  );
}

// 메타데이터 설정을 위한 function을 추가
export async function generateMetadata() {
  return {
    revalidate: 86400,
  };
}
```

#### - champions 챔피언 상세 페이지

- 메타데이터를 설정하여 SEO (검색엔진)을 향상시킴
- SSR
  src > app > champions > [id] > page.tsx

```tsx
// 메타데이터 설정
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const champion: ChampionDetail | null = await fetchChampionDetail(params.id);

  if (!champion) {
    return {
      title: "정보없음",
      description: "정보없음",
      keywords: "League of Legends",
    };
  }
  return {
    title: champion.name,
    description: `Learn more about ${champion.name}, the ${champion.title} in League of Legends.`,
    keywords: `League of Legends, ${champion.name}, ${champion.title}`,
  };
}
```

---

## 🔥 트러블 슛팅

#### - 챔피언 로테이션 페이지 ( CSR)

: 현재 무료로 플레이 가능한 챔피언들을 표시

#### 문제점 🥵

: 현재 무료로 플레이 가능한 챔피언들을 제공해주는 rotation.api가 id 숫자만을 제공해주고 있었다. 이 숫자들을 처음에는 상세페이지 id에 넣어 정보를 가져올 수 있도록 처리할려고 했었다.
결론적으로 너무 복잡해지는 로직이었다.

#### 해결방법 💪

: 전체 챔피언 리스트를 가져와 rotation.api에 있는 id value값과 전체챔피언리스트에 있는 key값이 일치하는 것만 filter처리하여 데이터를 가져와서 저장하고 저장한 데이터를 사용해 레이아웃을 만들어주었다.

```tsx

const RotationPage = () => {
  const [rotationData, setRotationData] = useState<Champion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

useEffect(() => {
    const fetchRotationData = async () => {
      try {
        // 이번 주 로테이션 데이터
        const res = await getChampionRotation();
        const rotationIds = res.freeChampionIds || [];

        // 전체 데이터
        const championListRes: ChampionListResponse = await fetchChampionList();

        // 로테이션 id와 전체 데이터의 key 비교하여 매칭되는 데이터 추출
        const matchedChampions = Object.keys(championListRes)
          .filter((championKey) =>
            rotationIds.includes(parseInt(championListRes[championKey].key))
          )
          .map((key) => championListRes[key]);

        setRotationData(matchedChampions); // 필터링된 데이터 저장
      } catch (error) {
        setError("error");
      } finally {
        setLoading(false);
      }
    };
    fetchRotationData();
  }, []);

```

# 🌟 localFont 사용하기

전역으로 사용하고자 하면 layout.tsx에서
font를 사용하는 페이지가 한정적이라면 그 페이지에서 변수선언

💥 문제점
: public폴더안에 있는 건 import를 public아래부터 해야한다고 알고 있어서 아래로 import를 진행했었다. font가 불러와지지 않았다.
✨ 해결방법
: 해당 페이지를 중심으로 import 를 시켜주니 font가 제대로 불러와졌다.

src > app > page.tsx

```js

const pretendard = localFont({
  src: "../public/fonts/FreesentationVF.ttf",
  weight: "400",
  variable: "--font-pretendard",
});

export default function Home() {
  return (
    <div className={`w-[70%] mx-auto mt-8 text-center ${pretendard.variable}`}>
      <h1 className="font-logo font-extrabold text-4xl mb-8 text-blue-200">
        <span className="text-pink-200">FIND</span> YOUR
        <span className="text-green-200">CHARACTER</span>
      </h1>
      <div className="w-full mb-8 ">
```

- tailwind.config.ts
  : fontfamily에 명칭추가

```js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["var(--font-pretendard)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
```

---

# 🌟 Image 최적화

- Next.js에서의 반응형 이미지를 적용시키는 방법
  : responsive추가, width값, height값, alt값, src 값

```js
import Image from "next/image";

<div className="w-full mb-8 ">
  <Image
    src={mainImg}
    layout="responsive" // responsive추가
    width={1600}
    height={400}
    alt="mainImg"
    className="mb-4"
  />
</div>;
```

---

# 🌟 배포

![](https://velog.velcdn.com/images/alice0751/post/fb5cdec4-50f9-489b-9e6d-328a36478232/image.png)
💥 문제점
: Rotation페이지에서 loading과 error를 useState()를 사용하여 페이지를 표시해주었는데 배포하는 과정에서 error가 사용되지 않았다는 오류가 떴다. 맨 처음은 이전에 React 작업했을 때와 비슷하게 error를 처리했더니 typescript관련 오류도 함께 발생하였다.

```js
} catch (error)
       { console.log(error,"error발생") }
      } finally {
        setLoading(false);

```

✨ 해결방법
: catch (error: unknown) 구문은 TypeScript의 기능으로, 어떤 타입의 값이 예외로 발생할 수 있는지 인지하게 해준다. 자바스크립트의 에러는 여러 소스에서 발생할 수 있기 때문에, 항상 Error 타입이 아닐 수 있다. instanceof Error를 사용해 에러 타입을 확인함으로써, 존재하지 않을 수 있는 속성에 접근하려고 시도하는 런타임 에러를 방지할 수 있
다.

```js
      } catch (error: unknown) {
        if (error instanceof Error) setError(error.message);
        else {
          setError("Rotation Error");
        }
      } finally {
        setLoading(false);
      }
```
