# 📘 CSA 자격증 대비 ServiceNow 플랫폼 관리 마스터 핸드북

---

## 1장. 플랫폼 개요 및 사용자 인터페이스 (UI)

### 1. 인스턴스 아키텍처

* **다중 인스턴스 (Multi-instance):** 각 고객은 물리적으로 격리된 전용 데이터베이스와 애플리케이션 스택을 가집니다. (공유 방식인 Multi-tenant와 대조됨)
* **Stats 모듈:** 현재 인스턴스의 릴리스 버전(예: Vancouver), 노드 상태, 빌드 날짜 등을 확인하는 진단 도구입니다.

### 2. UI16 핵심 구성 요소 (Classic UI)

* **Banner Frame:** 상단 로고, 전역 검색, 사용자 메뉴, 시스템 설정(Gear) 아이콘 위치.
* **Application Navigator:** 왼쪽 패널. 모든 앱/모듈 탐색, 즐겨찾기(Star), 최근 기록(Clock).
* **Content Frame:** 중앙 메인 영역. 리스트, 폼, 대시보드가 렌더링되는 실무 영역.

---

## 2장. 데이터 스키마 및 관리 (Data Schema)

### 1. 테이블 및 필드 정의

* **System Dictionary (`sys_dictionary`):** 테이블과 필드의 메타데이터(타입, 길이, 기본값)를 정의하는 설계도.
* **sys_id:** 모든 레코드에 부여되는 고유한 32자리 16진수 식별자(GUID).
* **참조 필드 (Reference):** 다른 테이블의 레코드를 가리키며 내부적으로 `sys_id`를 저장. **닷워킹(Dot-Walking)**을 통해 연결된 테이블 데이터에 접근 가능.

### 2. 테이블 계층 구조 (Hierarchy)

* **Base Table:** 계층의 뿌리 (예: `task`, `cmdb_ci`). 다른 테이블을 확장하지 않음.
* **Core Table:** ServiceNow가 기본 제공하는 표준 테이블 (예: `sys_user`, `incident`).
* **Custom Table:** 사용자가 생성한 테이블. 전역 스코프는 `u_`, 스코프 앱은 `x_` 접두사가 붙음.

---

## 3장. 보안 및 접근 제어 (Security & Access)

### 1. 사용자 인증 및 권한 (RBAC)

* **사용자 가장 (Impersonation):** 관리자가 타 사용자의 권한/화면을 대리 수행하여 테스트하는 기능. (로그는 `glide.sys.log_impersonation` 속성으로 기록)
* **역할 (Roles):** 권한의 집합. **"역할은 그룹에 부여하고, 사용자를 그룹에 추가"**하는 것이 베스트 프랙티스.
* **상승된 역할 (Elevate Roles):** `security_admin` 처럼 민감한 작업을 위해 일시적으로 활성화하는 세션 기반 고권한.

### 2. 접근 제어 목록 (ACL)

* **평가 순서:** 항상 **테이블(Table) 수준**을 먼저 확인한 뒤, 승인되면 **필드(Field) 수준**을 평가.
* **조건 로직:** 역할(Roles), 조건식(Conditions), 스크립트(Scripts)가 모두 **AND** 관계로 참이어야 함.
* **와일드카드:** `*`는 모든 필드, `None`은 레코드(행) 자체에 대한 접근을 의미.

---

## 4장. 플랫폼 자동화 (Automation)

### 1. 클라이언트 측 vs 서버 측 로직

| 구분 | 클라이언트 (Client) | 서버 (Server) |
| --- | --- | --- |
| **실행 위치** | 사용자의 웹 브라우저 | 인스턴스 데이터베이스 계층 |
| **대표 도구** | UI Policy, Client Script | Business Rule, Data Policy |
| **특징** | 즉각적인 UI 반응 (필수값 체크 등) | 데이터 무결성 및 복잡한 DB 처리 |

### 2. 비즈니스 규칙 (Business Rules) 실행 시점

* **Before:** DB 저장 전 (유효성 검사, 필드 자동 계산).
* **After:** DB 저장 후 (연관 레코드 업데이트, 이벤트 생성).
* **Async:** 저장 후 백그라운드 처리 (성능 최적화).
* **Display:** 데이터 조회 후 폼 표시 전 (`g_scratchpad` 활용 데이터 전달).

### 3. 플로우 디자이너 (Flow Designer)

* **구성 요소:** 트리거(Trigger - 레코드/일정/앱 기반) + 액션(Actions).
* **데이터 알약 (Data Pills):** 플로우 단계 간에 데이터를 전달하는 동적 런타임 변수.

---

## 5장. 서비스 카탈로그 및 지식 관리

### 1. 서비스 카탈로그 주문 계층 (3-Tier)

1. **Request (REQ):** 전체 주문 번호 (장바구니).
2. **Requested Item (RITM):** 주문 내 개별 품목 (노트북, 계정 생성 등).
3. **Catalog Task (SCTASK):** 실무자에게 할당된 세부 작업.

### 2. 카탈로그 도구

* **Record Producer:** 카탈로그 UI를 통해 `incident` 같은 태스크 레코드를 직접 생성.
* **Order Guide:** 질문을 통해 여러 관련 항목을 하나의 요청으로 묶어서 주문.

### 3. 지식 관리 (Knowledge Management)

* **User Criteria:** 누가 문서를 읽을 수 있는지(`Can Read`)와 기여할 수 있는지(`Can Contribute`)를 결정하는 보안 메커니즘.
* **수명 주기:** Draft -> Review -> Published -> Retired.

---

## 6장. 데이터 통합 및 배포 (Integration & Deployment)

### 1. 임포트 세트 (Import Sets)

* **프로세스:** Load Data (Staging) -> Create Transform Map -> Run Transform.
* **Coalesce (병합):** 데이터 중복 방지를 위한 고유 키 설정. 일치하면 Update, 불일치하면 Insert.

### 2. 업데이트 세트 (Update Sets)

* **캡처 대상 (Configuration):** 테이블 정의, 폼 레이아웃, 비즈니스 규칙, 워크플로우.
* **제외 대상 (Data):** 인시던트, 사용자, 그룹 레코드, 대시보드/홈페이즈(수동 추가 필요).
* **배포 단계:** Retrieve -> Preview (충돌 확인) -> Commit.

---

> **⚠️ CSA 시험 합격 가드레일:**
>
> 1. UI Policy는 브라우저 전용이지만, Data Policy는 모든 경로(API 포함)를 강제합니다.
> 2. 리스트의 **톱니바퀴(Gear)**는 개인화, **Configure > List Layout**은 시스템 전역 구성입니다.
> 3. 모든 태스크(`task`) 테이블의 부모는 `task`이며, 모든 CI(`cmdb_ci`)의 뿌리는 `cmdb`입니다.
> 4. **CSDM 5.0 (2026 표준)**: Application Service는 이제 **Service Instance**로 불리며, 제품 수명 주기를 7개 도메인으로 관리합니다.
>
