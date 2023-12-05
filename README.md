# POPCORN

<div align="center">
<img width="329" alt="image" src="https://github.com/slowteady/popcorn/assets/68311202/d8a97db6-0829-4d5e-9282-4a8bd31d248f">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fslowteady%2Fpopcorn&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
</div>

## POPCORN v1.1

> **개발기간: 2023.05 ~ 2023.08**  
> **리팩토링: ~2023.10**
---

## 릴리즈

### v1.0

- 기능 구현 완료, 배포 완료

### v1.1

- 기능 안정화  
- 리팩토링, 최적화 진행
  
**비용문제로 인하여 현재는 서버를 내린 상태입니다.**

--

## 주소

> **배포 주소**: [https://slowteady.com/](https://slowteady.com/)  
> **개발 회고**: [https://slowteady.github.io/](https://slowteady.github.io/story/project-popcorn-01/)

---

## 멤버

|                              이용민                             |
| :------------------------------------------------------------: |
| <img width="160px" src="https://github.com/slowteady/popcorn/assets/68311202/bdb0b325-3a59-4493-8362-5ed3ad7418a0" /> |
|        [@slowteady](https://github.com/slowteady)        |
  
---

## 프로젝트 소개

팝콘 프로젝트는 영화를 좋아하는 사람들을 위해 가볍게 놀기 좋은 플랫폼을 만들자는 생각에서 출발한 프로젝트 입니다.  
자신만의 컬렉션을 만들어 소장할 수 있는 컬렉션 기능, 현재 또는 역대 가장 인기있는 영화의 순위를 보여주는 기능, 영화 검색기능 등을 제공합니다.  

---

## 시작 가이드

### 1. 설치

``` bash
git clone https://github.com/slowteady/popcorn.git
cd popcorn
```

### 2. Config

```bash
# 1. root 디렉토리에 .env.development 추가

SERVER_PORT=${PORT_NUMBER} # DEFAULT: 8080
MONGO_URI=${MONGO_DB_URI} # MongoDB Atlas URI
UPLOAD_PATH=${REPOSITORY_PATH} # REPOSITORY_PATH

# 2. client 디렉토리에 .env 추가

REACT_APP_API_KEY=${TMDB_API_KEY}
REACT_APP_ACCESS_TOKEN=${TMDB_ACCESS_TOKEN}
REACT_APP_BASE_URL=${TMDB_API_BASE_URL}
REACT_APP_IMAGE_BASE_URL=${TMDB_API_IMAGE_BASE_URL}
```

### 3. 실행

```bash
popcorn> yarn install concurrently --dev
popcorn> yarn install:both
popcorn> yarn run once
```

---

## 기술스택

### FrontEnd

![React](https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white)
![React-Query](https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)

### BackEnd

![NodeJS](https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)

### 배포

![Google Cloud](https://img.shields.io/badge/GoogleCloud-4285F4?style=for-the-badge&logo=GoogleCloud&logoColor=white)

---
