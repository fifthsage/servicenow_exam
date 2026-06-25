# CSA 최신 경향 갭 리포트

검토일: 2026-06-25

## 적용 결과

2026-06-25 사용자 지시에 따라 1차 정리 범위를 반영했다.

- 삭제: 기존 Q17, Q109, Q207, Q361
- 최신화: 기존 Q27, Q65, Q97, Q166, Q187, Q299, Q300, Q365
- 공식 확인 후 정리: 기존 Q113을 `Configure Choices` 중심 문항으로 수정
- 추가 오타 정리: `low components` -> `flow components`, `ServiceMow` -> `ServiceNow`, `white importing` -> `while importing`
- 재정렬: CSA 문제 수 368개 -> 364개, ID 1-364 연속

아래 Q번호는 최초 리포트 작성 당시 기준이다. 현재 파일에서는 삭제/재정렬로 일부 번호가 변경되었다.

## 목적

현재 CSA 문제 풀을 기준으로 최신 ServiceNow 학습/제품 흐름과 비교해 다음 작업 대상을 선별한다.

- 레거시 UI/구버전 절차형 문항 제거 또는 최신화
- 최신 시험 대비에 중요한 영역의 커버리지 확인
- 공식 문서 대조가 필요한 고위험 문항 선별
- 사용자 승인 전 수정 범위 제안

## 확인한 공식/공개 근거

- ServiceNow University Training & Certification: https://www.servicenow.com/university/training-and-certification.html
- ServiceNow Docs: https://www.servicenow.com/docs/
- ServiceNow 공식 문서 PDF 묶음:
  - Zurich ServiceNow Platform: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-servicenow-platform.pdf
  - Zurich Platform Security: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-platform-security.pdf
  - Zurich Platform User Interface: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-platform-user-interface.pdf
  - Zurich Now Intelligence: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-now-intelligence.pdf
  - Zurich Integrate Applications: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-integrate-applications.pdf
  - Zurich IT Operations Management: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-it-operations-management.pdf
  - Zurich Build Workflows: https://www.servicenow.com/docs/v/u/downloads/pdfs/en-US/zurich-enus-build-workflows.pdf

주의: 실제 시험 기출/덤프 재현은 사용하지 않는다. 공식 범위, 공개 제품 흐름, 현재 문제 풀의 주제 분포를 기준으로 위험 기반 검토를 수행한다.

## 영역별 커버리지

아래 수치는 키워드 기반 태깅이므로 문항 하나가 여러 영역에 중복 집계될 수 있다.

| 영역 | 문항 수 |
| --- | ---: |
| Data Model / Tables | 211 |
| UI / Navigation | 196 |
| Automation / Flow | 117 |
| Security / ACL | 83 |
| Service Catalog | 77 |
| Knowledge | 37 |
| Reporting / Performance Analytics | 36 |
| Update Set / Development | 33 |
| CMDB / CSDM | 28 |
| Integration / Spoke | 25 |

판단:

- CSA 기초 영역인 Data Model, UI, Automation, Security, Service Catalog는 충분히 많다.
- CMDB/CSDM, Integration/Spoke, Reporting/PA, Knowledge는 깊게 들어갈 시험은 아니지만 최신 흐름에서 중요도가 올라간 영역이므로 문제 품질을 유지해야 한다.
- UI / Navigation 비중이 높으므로 구버전 UI 암기형 문제는 더 줄여도 전체 커버리지가 무너지지 않는다.

## 삭제 권장

### Q109

- 문제: Application/Module 목록을 expand/collapse하기 위해 더블클릭할 아이콘
- 이유: 특정 아이콘/동작 암기형이며 최신 UI 학습 가치가 낮다.
- 권장: 삭제

### Q207

- 문제: homepage 또는 dashboard를 인스턴스 간 이동할 때 기억할 점
- 이유: homepage 표현이 오래되었고, dashboard/update set 이동 방식은 최신 환경에서 더 정교한 설명이 필요하다.
- 권장: 삭제 또는 dashboard 중심으로 완전 재작성. 현재 형태로는 삭제가 더 안전하다.

### Q361

- 문제: list 컬럼 레이아웃 개인화 action
- 이유: Q299와 같은 list column personalization 개념을 반복한다. `Gear icon` 경로도 Classic UI 색채가 강하다.
- 권장: Q299를 최신화해서 남기고 Q361 삭제

## 최신화 권장

### Q17

- 현재: Basic Configuration UI16 branding settings
- 이슈: UI16 명칭은 Classic UI 용어다. 다만 플랫폼 전역 브랜딩과 포털 브랜딩 구분은 학습 가치가 있다.
- 권장: Q187과 중복성이 있어 둘 중 하나로 병합하거나, Q17은 삭제하고 Q187을 최신화 유지

### Q27

- 현재: baseline Service Catalog homepage links
- 이슈: homepage라는 표현은 오래되었지만 Record Producer, Order Guide, Catalog Item 구분은 중요하다.
- 권장: `Service Catalog includes which request-building components?` 형태로 최신화

### Q65

- 현재: classic ServiceNow platform UI components
- 이슈: Classic/UI16 용어지만 Application Navigator와 Content 영역 개념은 CSA 기초에 여전히 유용하다.
- 권장: `classic terminology`임을 유지하되 최신 UI에서는 개념 대응으로 이해하라는 해설 유지. 삭제하지 않음

### Q97

- 현재: three-bar icon opens Additional Actions / Context Menu
- 이슈: 아이콘 암기형이지만 Context Menu/Additional Actions 기능 자체는 폼 작업에서 자주 쓰인다.
- 권장: 유지하되 `three-bar icon`보다 `form context menu / Additional Actions` 중심으로 표현

### Q107

- 현재: Favorite 편집 Pencil icon
- 이슈: 아이콘 암기형이지만 이미 중복 병합 완료. 학습 부담이 낮다.
- 권장: 유지 또는 선택 삭제 가능. 최신화 필요는 낮음

### Q113

- 현재: Priority choice 값 변경을 위해 right click 후 Configure Options
- 이슈: `Configure Choices`와 혼동 가능하고, 현재 보기의 `Configure Options`가 최신 UI/공식 명칭과 맞는지 확인 필요.
- 권장: 공식 확인 후 `Configure Choices`/choice list 관리 중심으로 재작성하거나 삭제

### Q166

- 현재: gear icon으로 employee time zone 설정
- 이슈: gear icon 경로는 UI 의존적이다.
- 권장: `user profile/preferences에서 time zone 설정`으로 제목/보기/해설 최신화

### Q187

- 현재: classic platform banner image/text/colors -> Basic Configuration UI16
- 이슈: Q17과 중복성이 있다.
- 권장: Q17을 병합/삭제하고 Q187을 `platform branding vs Service Portal branding` 문제로 유지

### Q299

- 현재: related list에서 column layout 개인화 시 Gear
- 이슈: Q361과 중복. gear 경로는 UI 의존적이다.
- 권장: `personalize list columns / list personalization` 개념으로 최신화하고 Q361 삭제

### Q300

- 현재: Self Service만 보이는 IT user
- 이슈: homepage 표현이 오래됨.
- 권장: `Application Navigator/menu에서 IT task modules가 보이지 않음` 형태로 최신화

### Q365

- 현재: default task list layout 변경을 위해 column header right-click > Configure > List Layout
- 이슈: 경로형 문제지만 list layout vs personal list 차이는 중요하다.
- 권장: 유지하되 `system-wide list layout`과 `personalized list columns`의 차이를 강조하도록 최신화

## 유지 권장

### Q55

- 이유: homepage는 오답 보기 안에만 등장한다. metric 개념 문항이므로 유지 가능

### Q75

- 이유: update set의 목적을 묻는 기초 문항이다. homepages는 오답 보기로만 등장한다.

### Q77 / Q82 / Q83

- 이유: Application Navigator, History, Form/List/Dashboard 구분은 CSA 기초다. 단, 해설에서 최신 UI 맥락을 너무 강하게 주장하지 않도록 유지

### Q118

- 이유: Now Mobile Apps, Service Portals, Now Platform User Interfaces 구분은 최신 플랫폼 인터페이스 이해에 도움 된다.

### Q193 / Q235

- 이유: Reports module, Application Navigator 같은 핵심 탐색 개념을 묻는 문항이다. Homepage는 오답 보기로만 등장한다.

### Q317

- 이유: Dependency View vs CI Health Dashboard 구분은 중요하다. 단, 공식 ITOM/CMDB 문서로 한 번 더 확인하면 좋다.

## 공식 문서 대조 필요

아래 항목은 공식 근거 확인 후 수정하는 것이 좋다.

- Q187: Basic Configuration UI16, 플랫폼 브랜딩 설정 범위
- Q296: CSDM 문항의 `Common Service Data Model` 표현과 범위
- Q297: Short description 기반 자동 분류가 Predictive Intelligence인지 확인
- Q317 / Q347 / Q349: Dependency View, CI 관계 시각화, 관련 액션
- Q330: IntegrationHub Spoke 장점
- Q343 / Q368: Discovery, Service Graph Connector, IntegrationHub ETL 등 CMDB populate 도구 범위
- Q133 / Q345: update set 포함/제외와 default update set best practice

## 남은 공식 확인 항목 현황

ServiceNow 공식 Docs sitemap에서 남은 고위험 항목과 대응되는 공식 문서 묶음은 확인했다.

- Dependency View, CI 관계, Discovery, Service Mapping: Zurich IT Operations Management PDF
- IntegrationHub / Spoke: Zurich Integrate Applications PDF
- Predictive Intelligence / Now Intelligence: Zurich Now Intelligence PDF
- Update Set, UI, Platform 기본 기능: Zurich ServiceNow Platform PDF

현재 자동 추출 환경에서는 PDF 본문을 안정적으로 대량 검색할 수 없으므로, 이번 단계에서는 해당 문항의 정답을 임의 변경하지 않는다. 실제 학습 중 의심이 다시 표시되면 해당 공식 문서 영역을 기준으로 개별 문항을 재확인한다.

## 승인 시 권장 반영 범위

1. 삭제
   - Q109: 적용 완료
   - Q207: 적용 완료
   - Q361: 적용 완료

2. 병합
   - Q17 삭제 후 Q187 유지: 적용 완료

3. 최신화
   - Q27: 적용 완료
   - Q65: 적용 완료
   - Q97: 적용 완료
   - Q113: 적용 완료
   - Q166: 적용 완료
   - Q187: 적용 완료
   - Q299: 적용 완료
   - Q300: 적용 완료
   - Q365: 적용 완료

4. 공식 확인 후 결정
   - Q317, Q330, Q343, Q368

예상 결과:

- 즉시 삭제/병합만 적용하면 문제 수는 368개에서 약 364개로 감소
- 최신화만 적용하면 문제 수는 유지
- 공식 확인 후 추가 삭제가 있으면 360개 초중반까지 줄어들 수 있음

## 권장 판단

현재 문제 풀은 구조 검증과 중복 제거는 안정된 상태다. 다음 수정은 대량 정리가 아니라 **레거시 절차형 문항 축소 + 최신 개념 표현 보정**이 핵심이다.

추천 승인안:

- 1차 삭제/병합/최신화는 적용 완료
- Q317, Q330, Q343, Q368은 공식 문서 확인 후 별도 판단
