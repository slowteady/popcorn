# POPCORN

<div align="center">
<img width="329" alt="image" src="https://github.com/slowteady/popcorn/assets/68311202/d8a97db6-0829-4d5e-9282-4a8bd31d248f">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fslowteady%2Fpopcorn&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
</div>

## POPCORN v1.0

> **개발기간: 2023.05 ~ 2023.08**  
> ❗️2023.09.20~ - [브랜치](<https://github.com/slowteady/popcorn/tree/refactor>)를 분리하여 리팩토링 진행중입니다.
---

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
// .env.development를 root 디렉토리에 추가

SERVER_PORT=${PORT_NUMBER} // 필수는 아니나 미지정시 8080으로 ON
MONGO_URI=${MONGO_DB_URI} // MongoDB Atlas의 주소 입력
UPLOAD_PATH=${REPOSITORY_PATH} // 첨부파일 저장할 레포지토리 경로 
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

## 주요 화면

| 메인 페이지  |  영화 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/slowteady/popcorn/assets/68311202/f63a4d90-038c-4987-a701-a8eb70290baf"/> |  <img width="329" src="https://github.com/slowteady/popcorn/assets/68311202/d1565697-689d-4ea2-8627-decc8f023942"/>|  
| 영화 검색 페이지   |  컬렉션 페이지   |  
| <img width="329" src="https://github.com/slowteady/popcorn/assets/68311202/29ea9aca-9284-4c2d-912c-74e454c35b82"/>   |  <img width="329" src="https://github.com/slowteady/popcorn/assets/68311202/ea3f6405-b0ad-415b-8097-628c850a27d1"/>     |
| 영화 상세 페이지 |
| <img width="329" src="https://github.com/slowteady/popcorn/assets/68311202/c62d96d3-f1c6-4960-b6d4-0734e36cf2b7"/>   |

---
