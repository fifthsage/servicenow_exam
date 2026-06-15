# 📘 CIS-DF 자격증 대비 CMDB & CSDM 전 모듈 마스터 핸드북

---

## 1장. Introduction to the CMDB (CMDB 소개)

### 1. 성공적인 CMDB 배포를 위한 3대 기둥 (3 Pillars)

ServiceNow 데이터 거버넌스 라이프사이클의 핵심 순환 고리입니다.

* **수집 (Ingest):** Discovery, Service Graph Connector, IH-ETL 등을 활용해 다양한 소스로부터 Raw 데이터를 안전하게 인스턴스 내부로 밀어 넣는 파이프라인 단계.
* **관리/거버넌스 (Govern):** 중복 데이터, 고아 자산, 일관성 없는 데이터 품질 문제를 정책(Policies)과 규칙(Rules)으로 통제하는 마스터 가드레일 단계.
* **통찰/인사이트 (Insight):** 수집 및 통제된 데이터를 시각화하고 쿼리하여 명확한 비즈니스 가치와 의사결정 소스를 도출하는 액션 단계.

### 2. 단일 기록 시스템 (Single System of Record)으로서의 정의

* CMDB는 구성 항목(CIs), 서비스, 자산 관계에 대해 조직 내 유일하고 정확한 기준 데이터를 제공하는 중앙 집중식 데이터 저장소입니다.
* 성공적인 배포를 위해 **조직은 'CMDB(데이터베이스) 구축' 그 자체에 집착하기보다, '구성 관리(Configuration Management) 프로세스 정착'에 집중**해야 비즈니스 가치(예: 시스템 중단으로 인한 손실 방지, IT 관리 비용 최대 40% 절감)를 창출할 수 있습니다.

### 3. 자산(Asset) vs 구성 항목(CI)의 근본적 분리

| 분류 | 자산 (Asset) | 구성 항목 (CI) |
| --- | --- | --- |
| **핵심 초점** | **재무적 가치(Financial value)** 및 계약적 소유권 | **운영적 사용(Operational use)** 및 기술적 의존 관계 |
| **주요 영역** | 조달, 비용 관리, 감가상각, 라이선스 준수, 계약 및 폐기 | 인프라 상태, 속성 추적, ITSM/ITOM 서비스 영향도 분석 |
| **저장 위치** | ITAM (IT Asset Management) 테이블 | CMDB (Configuration Management Database) 테이블 |

> **⚠️ 시험 빈출 팁 (가드레일):** 자산은 배포(Deployed)되는 순간 CI로서의 운영 수명주기가 시작됩니다. **"자산은 종종 CI가 되지만, 모든 CI가 자산인 것은 아닙니다."** 논리적으로 정의된 '비즈니스 서비스'나 '데이터베이스 인스턴스'는 운영 관리를 위해 CI로 추적되지만, 본질적인 재무적 가치를 지닌 물리적 '자산'으로는 간주되지 않기 때문입니다.

### 4. 이해관계자 정렬 및 CCB 구성

* **CCB (Configuration Control Board, 구성 통제 위원회):** CMDB가 조직에 지속적인 가치를 제공하도록 방향을 설정하고 데이터 활용 여부를 결정하는 핵심 임원진 의사결정 기구입니다.
* **데이터 소유권의 진실:** **"CMDB 팀은 CMDB 내의 데이터를 소유(Own)하지 않습니다."** CMDB 팀은 플랫폼의 기능적 검증과 중복 식별만 수행할 뿐이므로, 반드시 현업의 실제 데이터 소유자(Data Owners)를 식별하여 거버넌스에 참여시켜야 데이터의 지속적인 정확성이 보장됩니다.

---

## 2장. CMDB Basics & Architecture (CMDB 기본 구조)

### 1. 테이블 스키마 및 계층 구조 (Hierarchy)

* **기본 테이블 (Base Table - `[cmdb_ci]`):** 모든 CI의 기본 속성을 저장하는 핵심 테이블입니다. 모든 하드웨어 및 애플리케이션 클래스는 이 테이블을 확장(Extend)하여 계층 구조를 형성합니다.
* **부모(Parent) 및 자식(Child) 클래스 관계:** 다른 테이블을 확장하는 테이블을 '자식', 확장되는 테이블을 '부모'라고 합니다.
* *예시:* `Computer` 테이블은 `Server` 테이블의 부모이며, `Server` 테이블은 `Windows Server` 테이블의 부모가 됩니다. 계층 구조 아래로 내려갈수록 속성이 구체화됩니다.

* **주요 클래스 (Principal Class):** 인시던트, 문제, 변경 티켓의 '구성 항목(CI)' 검색 필드에 표시될 수 있는 CI 클래스를 특정 카테고리로 제한(필터링)하여 사용자의 혼란을 줄이는 기능입니다.

### 2. 검색 가능 vs 검색 불가 속성

* **검색 가능 속성 (Discoverable):** Discovery 도구 등으로 자동 수집되는 정보 (예: IP 주소, OS, 호스트 이름).
* **검색 불가 속성 (Non-Discoverable):** 자동 수집이 불가능하여 수동 입력이나 CSDM 프로세스를 통해 보완해야 하는 사람/조직 중심의 비검색 데이터 (예: 소유자, 지원 그룹, 관리 그룹).

### 3. 기반 데이터 (Foundational Data)의 위치

* **정의:** 사용자(Users), 그룹(Groups), 위치(Locations), 부서(Departments) 등 플랫폼 전반에서 공유되는 공통 데이터입니다.
* **아키텍처 규칙:** 이 데이터는 **CMDB 테이블 내에 저장되지 않습니다.** 다만 지원 그룹이나 소유자를 식별하기 위해 CMDB의 CI 데이터 필드에서 참조(Referenced) 형식으로 링크되어 사용됩니다.

### 4. CMDB vs CSDM의 명확한 차이점

* **CMDB:** CI(구성 항목)들이 실제로 생성되고 물리적으로 저장되는 **데이터베이스(Database)** 그 자체입니다.
* **CSDM (Common Service Data Model):** 여러 ServiceNow 제품에서 공통으로 공유되는 표준화된 **데이터 모델(Data Model)이자 규범적 가이드라인**입니다. CSDM은 특정 항목을 CMDB의 어느 테이블에 기록해야 하는지, 비즈니스 가치를 위해 어떤 관계(Relationships)를 맺어야 하는지 설계도를 제시합니다.

---

## 3. Configure the CMDB (CMDB 구성 및 IRE)

### 1. CI Class Manager (CI 클래스 관리자)

단일 중앙 집중식 트리 인터페이스에서 클래스 구조, 속성, 식별/조정 규칙, 건강도 설정을 모두 구성할 수 있는 허브입니다.

* **필수 권한 역할 (Roles):** 새 클래스를 생성하려면 반드시 `sn_cmdb_admin`과 **`personalize_dictionary`** 두 가지 역할이 모두 있거나, 전역 관리자인 **`admin`** 역할이 있어야 합니다.
* **제안된 관계 (Suggested Relationships):** 사용자가 관계를 수동으로 맺을 때 "서버가 데이터베이스를 호스팅(Hosts)한다"와 같이 미리 정의된 올바른 관계 유형을 추천하여 관계선 오염을 막는 기능입니다.

### 2. IRE (Identification and Reconciliation Engine)

다중 데이터 소스 환경에서 중복 CI 생성을 방지하고 충돌을 해결하기 위한 **중앙 집중식 API 처리 프레임워크**입니다.

* **아키텍처 가드레일:** 모든 공인 데이터 소스(IntegrationHub ETL, Connectors 등)는 **CMDB 테이블에 직접(Directly) 데이터를 기록할 수 없으며, 반드시 IRE API를 경유**하여 데이터 무결성을 검증받아야 합니다. 이를 통해 데이터가 이리저리 덮어씌워지는 데이터 플로핑(Flopping) 현상을 차단합니다.

### 3. 식별 규칙 (Identification Rules)의 함정과 베스트 프랙티스

새 데이터가 들어올 때 기존 레코드와의 매칭 여부를 판단합니다. 기준을 잘못 설정하면 다음 두 가지 치명적인 문제가 발생합니다.

* **Duplicate CIs (중복 CI):** 식별 기준값이 자주 변하는 속성일 때 발생. 하나의 실제 자산이 여러 레코드로 쪼개짐.
* **Overloaded CIs (과부하된 CI):** 식별 기준이 너무 광범위할 때 발생. 여러 개의 실제 자산이 단 1개의 레코드에 덮어씌워져 병합(Merged)됨.
* **베스트 프랙티스 식별자:** 고유하고 수명주기 동안 절대 변하지 않는 속성을 선택해야 합니다. (예: 일련번호, MAC 주소, 소프트웨어의 경우 **구성 파일 경로(Configuration file path)**).
* **비-CMDB 테이블 지원:** Location, User 등 일부 기초 데이터 테이블도 IRE 식별을 지원하지만, 이 규칙은 **CI Class Manager에서 구성할 수 없으며** 해당 테이블의 리스트 뷰로 이동하여 직접 생성해야 합니다.

### 4. 조정 규칙 (Reconciliation Rules) 및 데이터 소스 통제

* **특징:** 동일 속성에 대해 어떤 데이터 소스를 더 신뢰할지 우선순위를 통제합니다. ServiceNow 인스턴스에는 **기본 제공(OOTB)되는 조정 규칙이 없으므로** 관리자가 반드시 직접 구성해야 합니다.
* **우선순위 원칙:** **주문(Order) 값이 낮을수록 우선순위가 높습니다.** (예: Order 100인 소스의 데이터를 Order 200인 소스가 덮어쓸 수 없음). 조정 규칙은 오직 '업데이트(Update)'에만 관여하며, 새 레코드의 '생성(Insert)'을 막으려면 **IRE Data Source Rules**를 별도로 구성해야 합니다.
* **Data Refresh Rules (데이터 새로고침 규칙):** 상위 우선순위 데이터 소스가 장기간(예: 14일) 업데이트를 수행하지 않을 경우, 예외적으로 하위 우선순위 소스가 업데이트를 수행할 수 있도록 허용하는 시간 임계값 규칙입니다.

### 5. CMDB 360 / Multisource CMDB

* **목적:** 기존 IRE 환경에서 우선순위에 밀려 거부(Rejected)되고 버려지던 서드파티 원시 데이터(Raw details)를 유실 없이 보존합니다.
* **아키텍처:** 최종 승인 데이터는 기존 CMDB 테이블(Golden CIs)에 적재되며, 모든 다중 소스의 raw 데이터 원본은 **`[cmdb_multisource_data]`** 테이블에 JSON Blob 형태로 별도 기록됩니다.
* **핵심 기능:** 데이터 출처 속성 수준 추적, 잘못된 업데이트 소스별 롤백(Revert), 조정 규칙 수정 시 과거 데이터에 대한 **재계산(Recompute - 한 번에 최대 100,000개 제한)** 지원.
* **활성화 필수 시스템 속성:** **`glide.identification_engine.multisource_enabled = true`**

### 6. Dynamic Reconciliation Rules (동적 조정 규칙)

* **정의:** 단순 소스 우선순위(정적)를 넘어, Multisource 데이터를 기반으로 값 자체를 비교 평가하여 업데이트할 데이터를 결정하는 규칙입니다.
* **유형:** First Reported, Most Reported, Last Reported, 그리고 숫자형 필드에만 적용 가능한 **Largest Value / Smallest Value**.
* **규칙 간 우선순위 (Precedence - ★시험 단골 시나리오):**

1. 동일 속성에 대해 정적 규칙과 동적 규칙이 충돌하면 **동적 조정 규칙(Dynamic)이 항상 우선**합니다.
2. 부모 클래스의 규칙보다 **더 구체적인 자식 클래스의 규칙이 우선**합니다.
3. 자식 클래스에 규칙이 없으면 부모 클래스의 규칙을 상속받습니다.

---

## 4장. Ingest Data into the CMDB (CMDB 데이터 수집)

### 1. 자동화된 수집 솔루션 스펙 비교 (★필수 암기 매트릭스)

* **ServiceNow Discovery:** 에이전트 설치가 없는 **에이전트리스(Agentless)**, **수평적(Horizontal)**, **IP 대역 기반** 솔루션입니다. 실시간이 아닌 **일정(Schedule) 기반**으로 작동하며, 방화벽 내부 통제를 위해 **MID Server** 브릿지를 활용합니다. (유료)
* *작동 4단계 순서:* **스캔(Scan) ➔ 분류(Classification) ➔ 식별(Identification) ➔ 탐색(Exploration)**

* **Service Mapping:** 비즈니스 서비스 관점에서 인프라의 종속성을 파악하는 **하향식(Top-Down)** 솔루션입니다. 런타임 환경의 배포판 시스템 스택인 **애플리케이션 서비스(`[cmdb_ci_service_auto]`)** 맵을 자동으로 생성합니다. (유료)
* **Agent Client Collector (ACC):** 대상 호스트에 직접 가벼운 에이전트를 설치하는 솔루션입니다. 일정 기반이 아닌 **실시간(Near real-time)** 수집을 지원하며, 에이전트 없이는 수집이 불가능한 **'실제 소프트웨어 사용량(Software utilization)'** 데이터를 긁어와 SAM을 지원하는 것이 독점적 특권입니다. 원격 접속이 차단된 폐쇄 보안망 환경에 필수적입니다. (유료)
* **Service Graph Connectors:** 타사 시스템(AWS, Azure 등)과의 정규화된 통합 커넥터입니다. 기본적으로 유료 라이선스이나, 예외적으로 **Microsoft SCCM 커넥터는 무료**로 제공됩니다. (Store 앱)
* **IntegrationHub ETL:** 시각적인 UI 가이드를 통해 외부 데이터를 정제·매핑하는 최신 권장 도구입니다. 백엔드에서 RTE(강력한 변환 엔진)가 페이로드를 가공한 뒤, **IRE 엔진**을 호출하여 중복을 방지합니다. (무료)
* **Import Sets & Transform Maps:** 가장 오래된 고전 방식으로, **기본적으로 IRE를 거치지 않는 치명적인 리스크**가 있습니다. 중복 대참사를 막으려면 변환 맵에 반드시 **`onBefore` 스크립트를 작성하여 `CMDBTransformUtil` API를 명시적으로 호출**해야 합니다. (이때 기존 Coalesce 병합 설정은 무시되고 IRE 식별 규칙이 우선권을 쥡니다.)

### 2. ServiceNow Store와 패턴(Patterns) 업데이트의 독립성

* Discovery 기기 인식 규칙인 **'Discovery and Service Mapping Patterns' 앱은 인스턴스의 메이저 패밀리 릴리스(업그레이드) 주기와 완전히 독립적으로(Out-of-band)** ServiceNow Store를 통해 정기 업데이트됩니다. 따라서 새로운 하드웨어를 스캔하기 위해 다음 인스턴스 업그레이드 시즌을 기다릴 필요 없이 패턴 앱만 스토어에서 최신화하면 즉시 탐색이 가능합니다.

### 3. 비검색 데이터 자동 동기화 및 거버넌스 우선순위

자동 스캐너가 찾을 수 없는 3대 핵심 그룹 필드의 자동화 전파 매커니즘입니다.

* **Managed By Group (관리 그룹):** Data Manager의 인증/수명주기 태스크 라우팅용.
* **Support Group (지원 그룹):** ITSM 인시던트 할당 그룹 매핑용.
* **Change Group (변경 그룹):** ITSM 변경 요청 할당 그룹 매핑용.

> **👑 그룹 필드 상속 우선순위 (Precedence):**
>
> * **1순위 (최상위): Technology Management Offering (기술 관리 오퍼링) 설정.** 오퍼링 레코드에 그룹을 지정해 두면 백그라운드 비즈니스 규칙(`CSDM - Sync Group Attributes`)에 의해 하부 Dynamic CI Group 및 개별 CI들로 값이 동적 실시간 상속되어 덮어씁니다.
> * **2순위 (하위): CI Class Manager 설정.** 클래스 자체에 기본값으로 정적 매핑하는 방식으로, 오퍼링 설정이 들어오는 순간 밀려나서 덮어씌워집니다.
>
>

---

## 5장. Govern the CMDB (CMDB 거버넌스 및 데이터 품질)

### 1. CMDB Health Dashboard 3대 지표 (3 Cs) 및 계산 원칙

* **Completeness (완전성):** 데이터 누락 평가.
* *하위 지표:* **Required (필수), Recommended (권장)** 필드.
* `Required` 필드는 Dictionary(사전) 레벨 강제라 누락 시 IRE 가동 실패(Error)를 유발하므로, 시스템 중단을 피하려면 시스템 속성 **`glide.required.attribute.enabled = false`** 처리가 필요할 수 있습니다. 반면 `Recommended` 필드는 Health Preferences 설정 탭에서 빌딩하며, 누락되어도 시스템 오류를 내지 않는 순수 가시성 지표입니다.

* **Compliance (준수성):** 표준 정책 준수 여부 평가.
* *하위 지표:* **Desired State (원하는 상태) 감사, Scripted Audits (스크립트 감사)**.
* 대시보드 연동을 위해 템플릿의 Audit Type은 반드시 'Desired State'여야 합니다. 구성 4단계 순서는 `Certification Filter` (범위 스코프) ➔ `Certification Template` (조건 정의) ➔ `Audit` (비교 작업 실행) ➔ `Compliance Score Calculation Job` (최종 점수 계산 잡 - `admin` 역할 실행 필수)입니다.

* **Correctness (정확성):** 실제 환경과의 일관성 및 최신성 평가.
* *하위 지표:* **Duplicate (중복), Orphan (고아 - 필수 관계선 누락, 클래스당 1개만 허용), Staleness (오래됨 - 기본 60일 기준, `sys_updated_on` 필드 타임스탬프 기반 연산)**.

> **⚠️ 대시보드 계산 함정:** 스코어카드의 전체 점수(Overall Score)는 하위 지표들의 단순 평균이 아닙니다. **정의된 '모든' 하위 지표 관문을 '동시에 모두 통과'한 깨끗한 CI의 최종 비율**을 산출하므로, 단순 합산 평균보다 항상 점수가 낮게 떨어지는 특성이 있습니다. 또한 대시보드 백엔드 스케줄 잡은 **기본적으로 비활성화**되어 있으므로 수동 가동해야 합니다.

### 2. 중복 관리 가드레일 및 최신 필드 변경 사항

* **중복 원본 선정:** IRE 매칭 충돌 시, 시스템은 **'생성 날짜(Creation Date)' 기준 가장 오래된(Oldest) 레코드를 원본**으로 인정하여 업데이트하고, 나머지를 중복 처리합니다.
* **IRE 중복 판단 예외:** 만약 중복된 레코드들이 전부 **`Discovery Source` 필드에 각자 이미 값이 존재**하는 경우, IRE는 과거에 정상 검증된 개체로 간주하여 즉시 중복 플래그를 치지 않고, **추후 디스커버리에 의해 '재처리(Reprocessed)'되는 시점에 비로소** 중복 작업(Task)을 발행합니다.
* **⭐️ 중요 필드 업데이트:** 최신 릴리스 스펙에 따라, 중복된 자산을 표시할 때 기존의 `Discovery Source` 필드를 오염시켜 덮어쓰지 않고, 독립 전용 필드인 **`Duplicate of (중복 대상)`** 필드에 원본 CI의 ID를 바인딩합니다. (원천 소스 추적성 보존 목적)
* **수동 vs 자동 도구:** 한 번에 하나씩 병합 마법사를 타는 도구는 **`Duplicate CI Remediator`**, 사전에 정의된 규칙으로 대량 자동 병합하는 예약 도구는 `De-Duplication Templates`입니다.

### 3. CI 재분류(Reclassification)와 데이터 손실 위험

* **3가지 방향성 명사:** **Upgrade** (부모 ➔ 구체적 자식), **Downgrade** (자식 ➔ 덜 구체적 부모), **Switch** (자식 ➔ 다른 계층 분기 자식).
* **⚠️ 데이터 손실(Data Loss) 위험 구역:** **`Downgrade`와 `Switch`가 발생할 때는 기존 하위 특수 테이블 필드 데이터가 날아가는 데이터 손실 리스크가 100% 존재**합니다. 이를 차단하기 위해 고급 시스템 속성(예: `glide.identification_engine.update_without_downgrade_enabled = true`)을 켜면 클래스는 유지하되 유입 속성 필드 값만 안전하게 업데이트할 수 있습니다.
* **제한 규칙 (Restriction Rules):** 전역 속성의 모 아니면 도 방식을 극대화하여, 특정 클래스 타깃(예: Server ➔ Computer) 경로의 다운그레이드/스위치 행위만 미시적으로 묶어서 차단하는 규칙입니다.
* **우선순위 가드레일:** 동일 속성에 대해 전역 레거시 속성과 제한 규칙이 충돌하면 **클래스별 '제한 규칙(Restriction Rules)' 및 '고급 속성'이 항상 최우선권을 행사**합니다.

### 4. 거버넌스 수정 작업(Task) 자동 발행의 예외 규칙

* **원칙:** 기본 시스템(By default)에서 건전성 지표(Stale, Orphan 등)가 실패하더라도 백엔드에서 수정 작업(Task)을 자동으로 발행하지 않습니다. 관리자가 직접 **`Health Preferences`** 메뉴로 들어가 지표별 **'Create Task' 슬라이더 스위치를 수동 활성화**해야 비로소 할당 그룹(`Managed by group` 권장)으로 태스크가 던져집니다.
* **🔥 무조건 자동 발행되는 예외:** 오직 **Duplicate (중복) 지표**에 의한 중복 제거 작업 태스크만은 어떠한 사전 세팅 없이도 시스템에 의해 **100% 무조건 자동으로 즉시 발행**됩니다.

### 5. CMDB Data Manager (데이터 관리자) 정책

CI의 대규모 수명주기 종료(End of Life) 액션을 자동화하는 프레임워크입니다. (Yokohama 이후 UI Builder 기반의 CMDB Workspace 버전으로 전격 이관됨).

* **공인 지원 5대 정책 유형:** **Retirement(폐기), Deletion(삭제), Archiving(보관), Attestation(증명 - CI의 물리적 실존 존재 여부 확인 `[CI exists]`), Certification(인증)**
* **필수 조건:** 자산이 보관되거나 삭제되려면 CSDM 매핑 원칙에 따라 반드시 먼저 **`Retired` 상태** 단계에 도착해 있어야 가동됩니다. 태스크 라우팅 소스로 **`Managed by group`** 필드를 적극 활용하며, 통제를 위해 `data_manager_admin` 역할이 필요합니다.

---

## 6. Gain Insight from CMDB Data (통찰력 확보 및 제품 연동)

### 1. 4대 인사이트 도구 기능 및 설치 가이드 (★100% 출제)

네 가지 도구 모두 라이선스 비용이 없는 **무료(Free)** 스펙이나, 인스턴스 포함 여부에서 결정적 변별력이 갈립니다.

| 도구 명칭 | 핵심 기술 메커니즘 및 키워드 | 인스턴스 내장 여부 |
| --- | --- | --- |
| **CMDB Query Builder** | SQL 코딩 없이 시각적인 **드래그 앤 드롭** 인터페이스로 복잡한 다중 관계선 자산을 쿼리. 결과를 XML로 다운로드(Export)하여 타 인스턴스로 마이그레이션 가능. | **내장 (OOTB)** <br>

<br>(CMDB Workspace) |
| **Unified Map** | 기존의 종속성 뷰(Dependency View)와 서비스 맵을 단일 창으로 통합한 **계층적 대화형 시각화 맵**. 노드 배지(Node Badges)로 ITSM 티켓 실시간 가시성 확보. | **내장 (OOTB)** <br>

<br>(CMDB Workspace) |
| **Intelligent Search** | 사용자의 일상적인 평문 문장인 **자연어 쿼리(NLQ)**를 해석하여 데이터 탐색. 다중 테이블(Multi-table) 검색 시 결과창에 **"View in Query Builder"** 버튼이 독점 활성화되며, 누르면 시각적 노드로 자동 변환 매핑됨. | **내장 (OOTB)** <br>

<br>(CMDB Workspace) |
| CMDB & CSDM Data <br>

<br>Foundations Dashboards | CSDM 표준 청사진 정렬 수준을 성숙도(Crawl-Walk-Run-Fly) 탭으로 진단. 결함 조치를 위해 지원 사이트 문서와 연동된 **Remediation Playbooks** 처방전 제공. **지표(Metrics) 구조가 완전히 고정되어 커스터마이징이 불가능함(Not Configurable)**. | **❌ 내장 아님 (Store 다운로드)** <br>

<br>설치 후 `Get Well` 스케줄 잡을 돌려야 최초 렌더링됨. |

### 2. ITSM 워크플로우와 CSDM 운영 그룹 필드 자동 매핑 (★실수 방지 가드레일)

새로운 ITSM 티켓 생성 시, 메인 `Configuration item` 필드에 특정 운영 자산(Operational CI - 예: *Application Service* 또는 *Dynamic CI Group*)을 바인딩하는 순간, 해당 자산 내부의 그룹 속성을 상속받아 티켓의 배정 부서(`Assignment Group`) 필드가 사람의 개입 없이 **실시간 자동 채움(Auto-population)** 완료됩니다.

* **인시던트 장애 티켓 라우팅:** CI 레코드의 **`Support Group (지원 그룹)`** ➔ Incident의 **`Assignment Group`** 필드로 자동 유입.
* **변경 요청 작업 티켓 라우팅:** CI 레코드의 **`Change Group (변경 그룹)`** ➔ Change Request의 **`Assignment Group`** 필드로 자동 유입.

---

## 7. CSDM 5.0 표준 성숙도 및 도메인 페르소나 매핑

### 1. CSDM 5.0의 7대 핵심 데이터 도메인

CSDM 5.0에서는 기존 5개 도메인에서 **Ideation & Strategy**와 **Manage Portfolios**가 추가되어 총 7개 도메인 체계로 확장되었습니다.

* **Foundation (기반):** 사용자, 조직, 위치, 그룹 등 플랫폼 전체 비즈니스의 뼈대가 되는 참조 마스터 공간.
* **Ideation & Strategy (아이디어 및 전략 - 신규):** 디지털 제품의 아이디어 제안, 전략적 우선순위, 목표 설정을 담당하며 Strategic Portfolio Management(SPM)와 연동됩니다.
* **Design & Planning (디자인 및 기획 - 구 Design):** 시스템의 추상적인 설계도 및 기획서 장부 레이어.
    * *핵심 엔티티:* **Business Application**, Information Object.
    * *핵심 페르소나:* Enterprise Architect (EA).
* **Build & Integration (구축 및 통합 - 구 Build):** 개발 및 통합 단계를 관리하며 DevOps 및 SBOM(Software Bill of Materials) 정보를 포함합니다.
* **Service Delivery (서비스 인도 - 구 Manage Technical Services):** 실제 운영 환경에 배포된 서비스 인스턴스와 기술적 의존성을 통제하는 실시간 운영 레이어.
    * *핵심 엔티티:* **Application Service**, Dynamic CI Group.
* **Service Consumption (서비스 소비 - 구 Sell/Consume):** 고객이나 직원이 포털을 통해 서비스를 요청하고 혜택을 누리는 비즈니스 레이어.
    * *핵심 엔티티:* **Business Service**, **Technology Management Offering (구 Technical Service Offering)**.
* **Manage Portfolios (포트폴리오 관리 - 신규):** 전체 디지털 제품 포트폴리오의 가치와 성과를 통합 관리하는 도메인입니다.

### 2. CSDM 도입 성공 성숙도 모델 (Crawl to Fly)

* **Crawl (기어 가기):** 기본 인프라 식별 및 비즈니스 애플리케이션 목록 확보.
* **Walk (걷기):** 기술 서비스 운영 체계(**Technology Management Service & Offering**) 수립 및 지원 그룹(**Support Group**) 등 운영 속성 동기화 완성.
* **Run (뛰기):** 비즈니스 가치와 연결된 **Service Consumption** 단계 정착 및 비즈니스 영향도 분석.
* **Fly (날기):** 전사적 자산 가치 최적화 및 표준 라이프사이클 필드(`Life cycle stage & stage status`) 정착 완성.
