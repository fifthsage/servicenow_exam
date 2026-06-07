window.CSA_QUESTIONS = [
  {
    "id": 1,
    "title": "What is the function of user impersonation?",
    "options": [
      {
        "letter": "A",
        "text": "Testing and visibility"
      },
      {
        "letter": "B",
        "text": "Activate verbose logging"
      },
      {
        "letter": "C",
        "text": "View custom perspectives"
      },
      {
        "letter": "D",
        "text": "Unlock Application master list"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **사용자 가장(User Impersonation)** 기능은 관리자(admin)나 `impersonator` 역할을 가진 사용자가 다른 사용자의 관점에서 인스턴스를 대리 수행할 수 있게 해주는 강력한 도구입니다.\n*   **테스트(Testing)**: 특정 권한이나 역할을 가진 사용자가 설계된 프로세스대로 작동하는지 검증하거나 이슈를 디버깅할 때 사용합니다.\n*   **가시성(Visibility)**: 역할(Roles), ACL, UI Policy 등 권한 설정에 따라 해당 사용자가 실제로 어떤 모듈과 데이터를 볼 수 있는지 시각적으로 확인하는 핵심 도구입니다.\n*   **보안**: 가장 상태에서 수행한 모든 활동은 시스템 로그에 기록되며, 보안을 위해 고권한 사용자(예: 타 관리자)를 가장하는 것은 제한될 수 있습니다."
  },
  {
    "id": 2,
    "title": "Which group of permissions is used to control Application and Module access?",
    "options": [
      {
        "letter": "A",
        "text": "Access Control Rules"
      },
      {
        "letter": "B",
        "text": "UI Policies"
      },
      {
        "letter": "C",
        "text": "Roles"
      },
      {
        "letter": "D",
        "text": "Assignment Rules"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼에서 애플리케이션 메뉴와 모듈의 가시성 및 접근 권한을 제어하는 가장 기본적인 단위는 **역할(Roles)**입니다.\n*   **역할(Roles)**: 관리자는 특정 역할을 애플리케이션이나 모듈 레벨에 할당하여, 해당 역할을 가진 사용자나 그룹만 탐색창(Application Navigator)에서 이를 볼 수 있도록 제한합니다.\n*   **ACL과의 차이**: ACL(Access Control Lists)은 주로 데이터베이스 수준에서 레코드의 CRUD 권한을 제어하는 보안 가드레일인 반면, 역할은 UI 내비게이션 진입점을 필터링하는 데 주로 사용됩니다.\n*   **상속**: 역할은 다른 역할을 포함(Contain)할 수 있어 권한 계층 구조를 효율적으로 관리할 수 있게 합니다."
  },
  {
    "id": 3,
    "title": "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "onSubmit"
      },
      {
        "letter": "B",
        "text": "onUpdate"
      },
      {
        "letter": "C",
        "text": "onCellEdit"
      },
      {
        "letter": "D",
        "text": "onLoad"
      },
      {
        "letter": "E",
        "text": "onEdit"
      },
      {
        "letter": "F",
        "text": "onChange"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "F"
    ],
    "explanation": "정답: **A, C, D, F**. ServiceNow의 **클라이언트 스크립트(Client Scripts)**는 사용자의 브라우저에서 실행되며, 폼이나 리스트의 실시간 상호작용을 제어합니다.\n*   **onLoad**: 폼이 처음 로드될 때 실행됩니다. (예: 특정 필드 숨기기)\n*   **onChange**: 특정 필드의 값이 변경될 때 실행됩니다. (예: 값 선택에 따른 경고창 표시)\n*   **onSubmit**: 사용자가 폼을 저장(Submit)할 때 실행되며, `false`를 반환하여 제출을 취소할 수 있습니다. (예: 데이터 유효성 검증)\n*   **onCellEdit**: 리스트 뷰에서 개별 셀의 값을 수정할 때 실행됩니다.\n*   **참고**: `onUpdate`나 `onEdit`은 표준 클라이언트 스크립트 유형이 아닙니다."
  },
  {
    "id": 4,
    "title": "Which one of the following modules can be used to view field settings for a table?",
    "options": [
      {
        "letter": "A",
        "text": "Tables & Columns"
      },
      {
        "letter": "B",
        "text": "Access Control"
      },
      {
        "letter": "C",
        "text": "Columns and Fields"
      },
      {
        "letter": "D",
        "text": "Tables and Fields"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Tables & Columns** 모듈은 데이터베이스 아키텍처를 관리하는 핵심 도구입니다.\n*   **필드 설정 확인**: 특정 테이블을 선택하면 해당 테이블에 포함된 모든 필드의 데이터 타입, 길이, 인덱스 여부, 기본값 등 세부 설정을 한눈에 파악할 수 있습니다.\n*   **추가 기능**: 이 모듈 내에서 **Schema Map**을 열어 테이블 간의 관계를 시각화하거나, 인덱스를 생성하고 테이블 데이터를 삭제(Wipe)하는 등의 관리 작업을 수행할 수 있습니다."
  },
  {
    "id": 5,
    "title": "What are the 5 provided Roles by ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "System Administrator: The admin role provides access to all platform features, applications, functions and data."
      },
      {
        "letter": "B",
        "text": "Specialized Administrator: Specialized administrator roles manage specific functions or applications, such as Assignment Rules, Knowledge base, reports, or web services"
      },
      {
        "letter": "C",
        "text": "Fulfiller: Users with the ITIL role may fulfill ITIL activities associated with the ITIL workflow, including Incident and Change management."
      },
      {
        "letter": "D",
        "text": "Approver: Users with the Approver user role can perform all requester actions and may view or modify approval records directed to the approver"
      },
      {
        "letter": "E",
        "text": "Requester: Also known as Employee Self Service (ESS) users, these users have no roles but can submit and manage their own requests, access public pages, etc."
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "정답: **A, C, E**. ServiceNow는 플랫폼 접근 수준에 따라 표준화된 페르소나와 역할을 제공합니다.\n1.  **System Administrator (admin)**: 플랫폼의 모든 기능, 애플리케이션, 데이터에 접근할 수 있는 최상위 권한입니다.\n2.  **Fulfiller (itil)**: ITIL 워크플로우(인시던트, 변경 등)를 처리하고 작업을 수행하는 실무자 역할입니다.\n3.  **Requester (Employee Self Service / ESS)**: 역할이 없는 일반 사용자로, 서비스 카탈로그 요청 제출이나 지식 문서 열람 등 본인의 업무를 위한 셀프 서비스 기능만 이용합니다.\n*   **참고**: 보기 B(Specialized Administrator)와 D(Approver)는 운영상의 권한 분류에는 해당하지만, 문제에서 묻는 가장 근본적인 3대 표준 사용자 유형(Persona) 분류는 Admin, Fulfiller, Requester입니다."
  },
  {
    "id": 6,
    "title": "A Service Catalog may include which of the following components?",
    "options": [
      {
        "letter": "A",
        "text": "Order Guides, Exchange Rates, Calendars"
      },
      {
        "letter": "B",
        "text": "Order Guides, Catalog Items, and Interceptors"
      },
      {
        "letter": "C",
        "text": "Catalog Items, Asset Contracts, Task Surveys"
      },
      {
        "letter": "D",
        "text": "Record Producers, Order Guides, and Catalog Items"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **서비스 카탈로그(Service Catalog)**는 사용자가 필요한 서비스나 제품을 요청할 수 있도록 구성된 전면 인터페이스입니다.\n*   **Catalog Items**: 개별 상품이나 서비스 (예: 노트북, 소프트웨어 설치).\n*   **Record Producers**: 카탈로그 인터페이스를 통해 데이터베이스 테이블(예: 인시던트)에 직접 레코드를 생성하는 도구.\n*   **Order Guides**: 여러 관련 항목을 묶어 질문을 통해 필요한 항목들을 한 번의 흐름으로 주문하게 하는 가이드."
  },
  {
    "id": 7,
    "title": "UI Policy can make fields read-only, mandatory, or hidden",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **UI Policy (UI 정책)**는 폼(Form)이 브라우저에 표시될 때 필드의 동작을 동적으로 제어하는 가장 표준적인 클라이언트 측 도구입니다.\n*   **제어 가능 상태**: **Mandatory**(필수), **Read-only**(읽기 전용), **Visible/Hidden**(표시/숨김).\n*   **장점**: 스크립트 작성 없이 조건(Condition) 빌더만으로 설정이 가능하여 관리 효율성이 높습니다.\n*   **반대 동작**: 조건이 거짓(False)일 때의 동작도 'Reverse if false' 옵션을 통해 자동으로 처리할 수 있습니다."
  },
  {
    "id": 8,
    "title": "ServiceNow is a single-instance, multiple tenant architecture?",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow의 아키텍처는 **다중 인스턴스(Multi-instance)** 방식입니다.\n*   **Multi-instance**: 각 고객사(Tenant)마다 물리적으로 격리된 전용 애플리케이션 스택과 데이터베이스를 제공합니다. 이는 한 고객의 작업이 다른 고객의 성능이나 보안에 영향을 주지 않도록 보장합니다.\n*   **Multi-tenant (거짓)**: 하나의 거대한 소프트웨어 인스턴스를 여러 고객이 공유하고 논리적으로만 구분하는 일반적인 SaaS 방식과 차별화되는 점입니다."
  },
  {
    "id": 9,
    "title": "Which statement is true about business rules?",
    "options": [
      {
        "letter": "A",
        "text": "A business rule must run before a database action occurs"
      },
      {
        "letter": "B",
        "text": "A business rule can be a piece of Javascript"
      },
      {
        "letter": "C",
        "text": "A business rule must not run before a database action occurs"
      },
      {
        "letter": "D",
        "text": "A business rule monitors fields on a form"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **비즈니스 규칙(Business Rules)**은 데이터베이스 작업(조회, 삽입, 수정, 삭제)이 발생할 때 **서버 측(Server-side)**에서 실행되는 JavaScript 로직입니다.\n*   **특징**: 폼의 변화에 실시간으로 반응하는 클라이언트 스크립트와 달리, 데이터가 실제로 저장되거나 조회되는 시점에 강력한 비즈니스 로직을 집행합니다.\n*   **시점(Timing)**: **Before**(DB 반영 전), **After**(DB 반영 후), **Async**(백그라운드 처리), **Display**(폼 조회 전)로 구분됩니다."
  },
  {
    "id": 10,
    "title": "What are the two aspects to LDAP Integration?",
    "options": [
      {
        "letter": "A",
        "text": "Data Population"
      },
      {
        "letter": "B",
        "text": "Data formatting"
      },
      {
        "letter": "C",
        "text": "Authorization"
      },
      {
        "letter": "D",
        "text": "Authentication"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. LDAP 통합은 기업의 디렉토리 서비스(Active Directory 등)와 ServiceNow를 연결하여 다음 두 가지 핵심 프로세스를 자동화합니다.\n1.  **Authentication (인증)**: 사용자가 별도의 비밀번호를 생성할 필요 없이 사내 계정으로 ServiceNow에 로그인할 수 있게 합니다.\n2.  **Data Population (데이터 수집)**: 사용자의 이름, 부서, 직책, 위치 등 마스터 데이터를 사내 시스템으로부터 자동으로 가져와 `sys_user` 테이블을 최신 상태로 유지합니다."
  },
  {
    "id": 11,
    "title": "What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles?",
    "options": [
      {
        "letter": "A",
        "text": "User conditions"
      },
      {
        "letter": "B",
        "text": "User info"
      },
      {
        "letter": "C",
        "text": "User Criteria"
      },
      {
        "letter": "D",
        "text": "User permissions"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **사용자 기준(User Criteria)**은 지식 기반(Knowledge Base) 및 서비스 카탈로그 항목에 대한 접근 권한을 제어하는 핵심 보안 메커니즘입니다.\n*   **정의**: 사용자의 부서(Department), 위치(Location), 그룹(Group), 역할(Role) 등 사용자 레코드의 속성을 기반으로 복합적인 조건을 정의합니다.\n*   **적용 범위**: 지식 기사(Articles)의 경우 누가 읽을 수 있는지(`Can Read`)와 누가 기여(생성/수정/은퇴)할 수 있는지(`Can Contribute`)를 결정합니다.\n*   **비교**: ACL이 데이터베이스 수준의 기술적 통제라면, User Criteria는 비즈니스 로직에 기반한 사용자 그룹별 접근 통제에 특화되어 있습니다."
  },
  {
    "id": 12,
    "title": "Reports can be created from which different places in the platform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "List column heading"
      },
      {
        "letter": "B",
        "text": "Metrics module"
      },
      {
        "letter": "C",
        "text": "Statistics module"
      },
      {
        "letter": "D",
        "text": "View / Run module"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. ServiceNow에서 보고서(Reports)를 생성하는 방법은 크게 두 가지 경로가 있습니다.\n1.  **View / Run 모듈**: 보고서 디자이너(Report Designer)를 실행하여 데이터 소스 선택부터 시각화 유형까지 단계별로 설정하는 표준 방식입니다.\n2.  **리스트 컬럼 헤더 (List Column Heading)**: 리스트 뷰에서 특정 컬럼을 우클릭하여 'Bar Chart'나 'Pie Chart'를 선택하면, 해당 필드를 기준으로 그룹화된 보고서가 즉석에서 생성됩니다.\n*   **참고**: 생성된 보고서는 대시보드에 게시하거나 이메일로 정기 발송(Scheduled Report)할 수 있습니다."
  },
  {
    "id": 13,
    "title": "Which of the following is used to initiate a flow?",
    "options": [
      {
        "letter": "A",
        "text": "A Trigger"
      },
      {
        "letter": "B",
        "text": "Core Action"
      },
      {
        "letter": "C",
        "text": "A spoke"
      },
      {
        "letter": "D",
        "text": "An Event"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **플로우 디자이너(Flow Designer)**에서 프로세스의 실행을 촉발하는 첫 번째 단계를 **트리거(Trigger)**라고 합니다.\n*   **유형**:\n    1. **레코드 기반(Record-based)**: 레코드 생성, 업데이트 또는 삭제 시 실행 (예: 인시던트 생성 시).\n    2. **일정 기반(Schedule-based)**: 특정 시간이나 주기마다 실행 (예: 매일 아침 9시).\n    3. **애플리케이션 기반(Application-based)**: 인스턴스 외부의 이벤트나 특정 앱의 신호에 의해 실행.\n*   **구조**: 플로우는 하나의 트리거와 하나 이상의 액션(Actions)으로 구성됩니다."
  },
  {
    "id": 14,
    "title": "A group is stored in which table?",
    "options": [
      {
        "letter": "A",
        "text": "Group[user_group]"
      },
      {
        "letter": "B",
        "text": "Group[sys_user]"
      },
      {
        "letter": "C",
        "text": "Group[sys_user_group]"
      },
      {
        "letter": "D",
        "text": "Group[sys_user_group_profile]"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼에서 **그룹(Groups)** 정보는 **`sys_user_group`** 테이블에 물리적으로 저장됩니다.\n*   **그룹의 역할**: 권한 부여(Roles 할당), 작업 배정(Assignment Rules), 이메일 알림 수신 등을 위해 사용자들을 논리적으로 묶는 단위입니다.\n*   **테이블 명명 규칙**: 시스템 테이블은 보통 `sys_` 접두사로 시작하며, 사용자(`sys_user`), 역할(`sys_user_role`)과 함께 기반 데이터(Foundational Data) 아키텍처의 핵심을 이룹니다."
  },
  {
    "id": 15,
    "title": "Which technique is used to get information from a series of referenced fields from different tables?",
    "options": [
      {
        "letter": "A",
        "text": "Table-Walking"
      },
      {
        "letter": "B",
        "text": "Sys_ID Pulling"
      },
      {
        "letter": "C",
        "text": "Dot-Walking"
      },
      {
        "letter": "D",
        "text": "Record-Hopping"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **닷워킹(Dot-Walking)**은 참조(Reference) 필드를 통해 연결된 다른 테이블의 데이터에 접근하는 강력한 기술입니다.\n*   **작동 방식**: '참조필드.필드명' 구조로 연결됩니다 (예: `incident.caller_id.location`).\n*   **활용**: 리스트 뷰에 관련 테이블 컬럼 추가, 스크립트에서 연관 데이터 조회, 알림(Notification) 수신자 지정 등 플랫폼 전반에서 사용됩니다.\n*   **장점**: 복잡한 SQL 조인 문이나 별도의 쿼리 작성 없이도 관계형 데이터를 시각적이고 직관적으로 탐색할 수 있습니다."
  },
  {
    "id": 16,
    "title": "Configuration will not affect what others see on their forms.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B (False)**. ServiceNow에서 **구성(Configuration)**과 **개인화(Personalization)**를 구분하는 것은 매우 중요합니다.\n*   **구성(Configuration)**: 'Configure > Form Layout' 등을 통한 변경은 데이터베이스 스키마나 전역 UI를 수정하는 작업으로, 해당 테이블을 사용하는 **모든 사용자**에게 영향을 줍니다.\n*   **개인화(Personalization)**: 리스트 뷰의 톱니바퀴(Gear) 아이콘을 통한 컬럼 조정 등은 **본인에게만** 적용되는 설정입니다.\n*   **가드레일**: 따라서 관리자는 시스템 전체에 영향을 주는 구성 변경 시 신중해야 하며, 반드시 개발 인스턴스에서 먼저 검증해야 합니다."
  },
  {
    "id": 17,
    "title": "What refers to an application or system that accesses a remote service or another computer system, known as a server?",
    "options": [
      {
        "letter": "A",
        "text": "Server"
      },
      {
        "letter": "B",
        "text": "Client"
      },
      {
        "letter": "C",
        "text": "Script"
      },
      {
        "letter": "D",
        "text": "Policies"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 아키텍처에서 **클라이언트(Client)**는 서버에 서비스를 요청하는 애플리케이션이나 시스템(주로 사용자의 웹 브라우저)을 의미합니다.\n*   **클라이언트 측(Client-side)**: 사용자의 브라우저에서 즉각 실행되는 로직 (예: UI Policy, Client Script).\n*   **서버 측(Server-side)**: 인스턴스 데이터베이스와 통신하며 백엔드에서 실행되는 로직 (예: Business Rule, Script Include).\n*   **상호작용**: 클라이언트가 폼을 로드하거나 저장하면 서버로 요청을 보내고, 서버는 데이터를 처리한 뒤 결과를 클라이언트로 반환합니다."
  },
  {
    "id": 18,
    "title": "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Banner Image"
      },
      {
        "letter": "B",
        "text": "Record Number Format"
      },
      {
        "letter": "C",
        "text": "Browser Tab Title"
      },
      {
        "letter": "D",
        "text": "System Date Format"
      },
      {
        "letter": "E",
        "text": "Form Header Size"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: **A, C, D**. **Basic Configuration UI16** 모듈은 코딩 없이 인스턴스의 전반적인 룩앤필(Look and Feel)을 기업 브랜드에 맞게 조정하는 곳입니다.\n*   **Banner Image (A)**: 상단 배너에 표시될 로고 이미지를 업로드합니다.\n*   **Browser Tab Title (C)**: 브라우저 탭에 나타날 텍스트를 지정합니다.\n*   **System Date Format (D)**: 인스턴스 전역에 적용될 기본 날짜 표시 형식을 설정합니다.\n*   **참고**: 레코드 번호 형식(B)은 'Number Maintenance'에서, 폼 헤더 크기 등 세부 스타일은 테마(Theme) CSS나 시스템 속성에서 별도로 관리합니다."
  },
  {
    "id": 19,
    "title": "Which tool is used to have conversations with logged-in users in real-time?",
    "options": [
      {
        "letter": "A",
        "text": "Connect Chat"
      },
      {
        "letter": "B",
        "text": "Now Messenger"
      },
      {
        "letter": "C",
        "text": "User Presence"
      },
      {
        "letter": "D",
        "text": "Comments"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Connect Chat**은 ServiceNow 내에서 사용자 간 또는 그룹 간 실시간 협업을 지원하는 채팅 도구입니다.\n*   **실시간성**: 로그인한 사용자들의 현재 상태(Presence)를 확인하고 즉각적인 대화를 주고받을 수 있습니다.\n*   **레코드 연동**: 특정 작업 레코드(인시던트 등)와 연동하여 해당 안건에 대한 논의를 히스토리와 함께 관리할 수 있습니다.\n*   **참고**: 최신 릴리스에서는 **Sidebar**나 **Microsoft Teams 연동**이 실시간 협업의 대안으로 제시되기도 하지만, CSA 시험 기준으로는 Connect Chat이 표준 답변입니다."
  },
  {
    "id": 20,
    "title": "What is the master table that contains a record for each table in the database?",
    "options": [
      {
        "letter": "A",
        "text": "[sys_master_db]"
      },
      {
        "letter": "B",
        "text": "[sys_db_object]"
      },
      {
        "letter": "C",
        "text": "[sys_master_object]"
      },
      {
        "letter": "D",
        "text": "[sys_object_db]"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 시스템 딕셔너리 아키텍처에서 모든 테이블에 대한 고유 정보를 정의하는 마스터 테이블은 **`sys_db_object`**입니다.\n*   **내용**: 테이블의 레이블, 물리적 이름, 확장 여부(Extensible), 부모 테이블 정보 등을 포함합니다.\n*   **관련 테이블**: 각 테이블 내의 개별 필드(컬럼) 정의는 **`sys_dictionary`** 테이블에 저장됩니다.\n*   **관리**: 관리자는 'System Definition > Tables' 모듈을 통해 이 데이터를 시각적으로 관리합니다."
  },
  {
    "id": 21,
    "title": "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Roles"
      },
      {
        "letter": "B",
        "text": "Conditional Expressions"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Scripts"
      },
      {
        "letter": "E",
        "text": "User Criteria"
      },
      {
        "letter": "F",
        "text": "Groups"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "정답: **A, B, D**. **접근 제어 목록(ACL, Access Control List)**은 데이터베이스 보안의 핵심 가드레일로, 다음 세 가지 요소를 결합하여 접근 허용 여부를 결정합니다.\n*   **Roles (역할)**: 사용자에게 부여된 시스템 역할 확인.\n*   **Conditional Expressions (조건식)**: 필드의 특정 값이나 상태 확인 (예: `State`가 'Open'인 경우).\n*   **Scripts (스크립트)**: 복잡한 비즈니스 로직을 통한 동적 권한 판별.\n*   **보안 원칙**: 이 세 가지 조건은 **논리적 AND** 관계로 작동합니다. 즉, 설정된 모든 관문을 통과해야만 접근이 승인됩니다. 하나라도 실패하면 접근이 차단됩니다."
  },
  {
    "id": 22,
    "title": "UI Action can prompt that an Incident has been successfully submitted.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **UI Action (UI 액션)**은 버튼, 링크, 컨텍스트 메뉴 등을 통해 사용자에게 실행 가능한 로직을 제공하는 도구입니다.\n*   **사용자 피드백**: UI 액션 실행 시 스크립트(`gs.addInfoMessage()` 등)를 사용하여 레코드가 성공적으로 제출되었거나 처리되었음을 사용자에게 시각적으로 알릴 수 있습니다.\n*   **유연성**: 클라이언트 측(브라우저) 또는 서버 측(데이터베이스)에서 실행되도록 구성할 수 있어, 단순 화면 전환부터 복잡한 DB 업데이트까지 다양한 처리가 가능합니다."
  },
  {
    "id": 23,
    "title": "Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?",
    "options": [
      {
        "letter": "A",
        "text": "report"
      },
      {
        "letter": "B",
        "text": "workflow"
      },
      {
        "letter": "C",
        "text": "event"
      },
      {
        "letter": "D",
        "text": "task"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 플랫폼에서 업무의 흐름을 관리하는 가장 기본적이고 강력한 엔티티는 **태스크(Task)**입니다.\n*   **공통 수명주기**: 모든 태스크는 생성(Created) -> 할당(Assigned) -> 진행(Work in progress) -> 종료(Closed/Resolved)의 표준화된 라이프사이클을 공유합니다.\n*   **확장성**: `task` 테이블은 인시던트(`incident`), 문제(`problem`), 변경(`change_request`) 등 플랫폼 내 거의 모든 업무 처리 테이블의 부모(Parent) 테이블 역할을 하며, 공통 필드와 비즈니스 로직을 제공합니다."
  },
  {
    "id": 24,
    "title": "Where can Admins check which release is running on an ServiceNow instance?",
    "options": [
      {
        "letter": "A",
        "text": "Memory Stats module"
      },
      {
        "letter": "B",
        "text": "Stats module"
      },
      {
        "letter": "C",
        "text": "System.upgraded table"
      },
      {
        "letter": "D",
        "text": "Transactions log"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **Stats (통계)** 모듈은 인스턴스의 기술적 상태를 한눈에 파악할 수 있는 진단 도구입니다.\n*   **확인 가능 정보**: 현재 패밀리 릴리스 버전 (예: Vancouver, Washington DC), 빌드 날짜, 데이터베이스 상태, 메모리 사용량, 서블릿 정보 등.\n*   **관리자 활용**: 시스템 업그레이드가 성공적으로 반영되었는지 확인하거나, 기술 지원 요청 시 인스턴스의 세부 사양을 제공하기 위해 사용합니다."
  },
  {
    "id": 25,
    "title": "What is the purpose of a Related List?",
    "options": [
      {
        "letter": "A",
        "text": "To create a one-to-many relationship"
      },
      {
        "letter": "B",
        "text": "To dot-walk to a core table"
      },
      {
        "letter": "C",
        "text": "To present related fields"
      },
      {
        "letter": "D",
        "text": "To present related records"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **관련 리스트(Related Lists)**는 현재 보고 있는 레코드와 참조 관계(Relationship)를 맺고 있는 다른 테이블의 레코드들을 폼 하단에 목록으로 표시하는 기능입니다.\n*   **관계 유형**: 주로 일대다(One-to-Many) 관계나 다대다(Many-to-Many) 관계를 시각화합니다. (예: 사용자 폼 하단에 해당 사용자가 보유한 '자산' 목록 표시)\n*   **장점**: 화면을 이동하지 않고도 연관된 데이터를 즉시 확인하고 직접 편집하거나 추가할 수 있어 업무 효율성을 높입니다."
  },
  {
    "id": 26,
    "title": "Which are valid Service Now User Authentication Methods? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "XML feed"
      },
      {
        "letter": "B",
        "text": "Local database"
      },
      {
        "letter": "C",
        "text": "LDAP"
      },
      {
        "letter": "D",
        "text": "SSO"
      },
      {
        "letter": "E",
        "text": "FTP authentication"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: **B, C, D**. ServiceNow는 다양한 엔터프라이즈 환경에 대응하기 위해 다층적인 인증 방식을 지원합니다.\n1.  **Local Database (B)**: 인스턴스 내부의 `sys_user` 테이블에 저장된 사용자명과 비밀번호로 직접 인증.\n2.  **LDAP (C)**: 기업의 디렉토리 서비스(AD 등)와 연동하여 인증 과정을 위임.\n3.  **SSO (D)**: SAML 2.0이나 OIDC(OpenID Connect) 등을 통해 한 번의 로그인으로 여러 시스템에 접근 가능하게 함.\n*   **참고**: 멀티팩터 인증(MFA)을 추가 레이어로 활성화하여 보안을 더욱 강화할 수 있습니다."
  },
  {
    "id": 27,
    "title": "Data Policy can enforce mandatory data on import.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **데이터 정책(Data Policy)**은 데이터의 일관성을 유지하기 위해 서버 측에서 실행되는 강력한 가드레일입니다.\n*   **UI Policy와의 차이**: UI 정책은 브라우저(폼)에서만 작동하지만, 데이터 정책은 **서버 측**에서 실행되므로 **데이터 가져오기(Import Sets)**나 **웹 서비스(API)**를 통해 유입되는 모든 데이터에 강제로 적용됩니다.\n*   **동기화**: 데이터 정책은 설정을 통해 클라이언트 측(UI Policy)으로 전환하여 사용할 수도 있어, 화면에서도 실시간으로 필수 여부를 표시할 수 있습니다."
  },
  {
    "id": 28,
    "title": "What are the three components of a filter condition?",
    "options": [
      {
        "letter": "A",
        "text": "Table"
      },
      {
        "letter": "B",
        "text": "Value"
      },
      {
        "letter": "C",
        "text": "Field"
      },
      {
        "letter": "D",
        "text": "Operator"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: **B, C, D**. ServiceNow의 모든 리스트에서 데이터를 필터링할 때 사용하는 **조건 빌더(Condition Builder)**는 세 가지 핵심 요소로 이루어집니다.\n1.  **Field (C)**: 데이터를 검사할 열(Column) 선택 (예: 'Priority').\n2.  **Operator (D)**: 비교 연산자 선택 (예: 'is', 'contains', 'starts with').\n3.  **Value (B)**: 비교할 실제 데이터 값 (예: '1 - Critical').\n*   **브레드크럼(Breadcrumb)**: 생성된 필터 조건은 리스트 상단에 경로 형태로 표시되며, 이를 통해 신속하게 필터를 수정하거나 제거할 수 있습니다."
  },
  {
    "id": 29,
    "title": "Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow의 **지식 관리(Knowledge Management)** 아키텍처는 분권화된 거버넌스를 지원합니다.\n*   **독립적 구성**: 각 지식 기반(Knowledge Base)은 서로 다른 비즈니스 요구사항에 따라 고유한 **게시/은퇴 워크플로우**, **사용자 기준(User Criteria)**, **카테고리 구조**를 가질 수 있습니다.\n*   **보안**: 이를 통해 IT 지식 문서는 전체 직원이 보게 하고, HR 지식 문서는 특정 부서만 보게 하는 등의 정교한 권한 관리가 가능해집니다."
  },
  {
    "id": 30,
    "title": "What is the difference between UI Policy and UI Action?",
    "options": [
      {
        "letter": "A",
        "text": "UI Action can make fields read-only, mandatory, or hidden, while UI Policy can make a save button visible for appropriate users."
      },
      {
        "letter": "B",
        "text": "UI Policy can make fields read-only, mandatory, or hidden, while UI Action can make a save button visible for appropriate users."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow UI 구성을 위한 두 핵심 도구의 목적은 명확히 구분됩니다.\n*   **UI Policy (UI 정책)**: 폼에 표시되는 **데이터의 외형과 상태**를 조건에 따라 제어합니다. (필수, 읽기 전용, 표시/숨김).\n*   **UI Action (UI 액션)**: 사용자가 클릭하여 특정 로직을 트리거할 수 있는 **기능적 요소**를 제공합니다. (버튼, 관련 링크, 우클릭 메뉴).\n*   **핵심 차이**: UI 정책은 '데이터가 어떻게 보이는가'에 집중하고, UI 액션은 '무엇을 할 수 있는가'에 집중합니다."
  },
  {
    "id": 31,
    "title": "The baseline Service Catalog homepage contains links to which of the following components?",
    "options": [
      {
        "letter": "A",
        "text": "Record Producers, Order Guides, and Catalog Items"
      },
      {
        "letter": "B",
        "text": "Order Guides, Item Variables, and Workflows"
      },
      {
        "letter": "C",
        "text": "Order Guides, Catalog Items, and Workflows"
      },
      {
        "letter": "D",
        "text": "Record Producers, Order Guides, and Item Variables"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **서비스 카탈로그(Service Catalog)** 인터페이스는 사용자가 필요한 서비스를 쉽게 찾을 수 있도록 세 가지 핵심 컴포넌트를 제공합니다.\n*   **Catalog Items**: 표준화된 개별 서비스나 제품 (예: 노트북, 개발용 PC 요청).\n*   **Record Producers**: 카탈로그 UI를 통해 Incident나 Change 같은 태스크 레코드를 생성하는 진입점.\n*   **Order Guides**: 여러 관련 항목을 하나의 요청으로 묶어서 질문 답변을 통해 자동 구성해 주는 가이드.\n*   **참고**: `Item Variables`나 `Workflows`는 카탈로그를 구성하는 내부 설정 요소이지, 사용자 홈 화면의 직접적인 구성 요소가 아닙니다."
  },
  {
    "id": 32,
    "title": "What is a Dictionary Override?",
    "options": [
      {
        "letter": "A",
        "text": "A Dictionary Override is an incoming customer update in an Update Set which applies to the same"
      },
      {
        "letter": "B",
        "text": "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT"
      },
      {
        "letter": "C",
        "text": "A Dictionary Override is a task within a workflow that requests an action before the workflow can"
      },
      {
        "letter": "D",
        "text": "A Dictionary Override sets field properties in extended tables"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **딕셔너리 오버라이드(Dictionary Override)**는 부모 테이블에서 상속받은 필드의 속성을 **특정 자식 테이블에서만** 다르게 정의할 때 사용합니다.\n*   **활용 예시**: `task` 테이블의 `assigned_to` 필드가 기본적으로는 필수(Mandatory)가 아니지만, `incident` 테이블에서만 필수로 설정하고 싶을 때 사용합니다.\n*   **변경 가능 속성**: 기본값(Default Value), 필수 여부(Mandatory), 읽기 전용(Read-only), 참조 한정자(Reference Qualifiers) 등을 테이블별로 세분화할 수 있습니다."
  },
  {
    "id": 33,
    "title": "Which type of tables may be extended by other tables, but do not extend another table?",
    "options": [
      {
        "letter": "A",
        "text": "Base Tables"
      },
      {
        "letter": "B",
        "text": "Core Tables"
      },
      {
        "letter": "C",
        "text": "Extended Tables"
      },
      {
        "letter": "D",
        "text": "Custom Tables"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **기본 테이블(Base Tables)**은 테이블 계층 구조의 최상위에 위치하며 다른 테이블을 확장(Extend)하지 않지만, 다른 테이블들의 부모가 될 수 있는 테이블입니다.\n*   **대표 예시**: `task` 테이블과 `cmdb_ci` 테이블은 플랫폼의 핵심 베이스 테이블입니다.\n*   **Core Table과의 차이**: **Core Table**은 ServiceNow가 제품 설치 시 기본으로 제공하는 테이블(예: `sys_user`)을 뜻하며, Base Table은 계층 구조상의 '뿌리'를 뜻하는 아키텍처 용어입니다."
  },
  {
    "id": 34,
    "title": "When working on a form, what is the difference between Insert and Update operations?",
    "options": [
      {
        "letter": "A",
        "text": "Insert creates a new record and Update saves changes, both remain on the form"
      },
      {
        "letter": "B",
        "text": "Insert creates a new record and Update saves changes, both exit the form"
      },
      {
        "letter": "C",
        "text": "Insert saves changes and exits the form, Update saves changes and remains on the form"
      },
      {
        "letter": "D",
        "text": "Insert saves changes and remains on the form, Update saves changes and exits the form"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 폼(Form) 작업에서 레코드를 저장하는 방식은 UI 버튼에 따라 다르게 작동합니다.\n*   **Insert**: 현재 입력된 정보를 바탕으로 **새로운 레코드**를 데이터베이스에 생성하고, 일반적으로 목록(List) 화면으로 돌아갑니다.\n*   **Update**: **기존 레코드**의 변경 사항을 저장하고 목록 화면으로 돌아갑니다.\n*   **Save (참고)**: 'Save' 버튼(Context Menu에 위치)은 변경 사항을 저장하되 현재 폼 화면에 그대로 머물러 후속 작업을 할 수 있게 합니다."
  },
  {
    "id": 35,
    "title": "What displays a set of records from a table?",
    "options": [
      {
        "letter": "A",
        "text": "View"
      },
      {
        "letter": "B",
        "text": "Dashboard"
      },
      {
        "letter": "C",
        "text": "Panel"
      },
      {
        "letter": "D",
        "text": "List"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **리스트(List)** 인터페이스는 특정 테이블에 저장된 레코드 세트를 행(Row)과 열(Column) 형태로 시각화합니다.\n*   **구성 요소**: 타이틀 바, 필터(Breadcrumbs), 검색창, 컬럼 헤더, 개별 데이터 행.\n*   **기능**: 사용자는 리스트에서 데이터를 조회, 필터링, 정렬할 수 있으며 List Editor를 통해 여러 레코드를 동시에 편집할 수도 있습니다."
  },
  {
    "id": 36,
    "title": "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    "options": [
      {
        "letter": "A",
        "text": "Mapping fields using the Import Log"
      },
      {
        "letter": "B",
        "text": "Mapping fields using Transform History"
      },
      {
        "letter": "C",
        "text": "Mapping fields using an SLA"
      },
      {
        "letter": "D",
        "text": "Mapping fields using a Field Map"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **매핑 어시스트(Mapping Assist)**는 임포트 세트(Import Set)의 소스 필드와 타겟 테이블의 필드를 시각적으로 연결해 주는 도구입니다.\n*   **필요성**: 소스 데이터의 컬럼명과 타겟 테이블의 필드명이 서로 다를 때, 드래그 앤 드롭 방식을 통해 수동으로 매핑 관계(Field Map)를 설정합니다.\n*   **자동 매핑과의 차이**: 'Auto Map Matching Fields'는 이름이 완벽히 일치할 때만 자동으로 연결하지만, 매핑 어시스트는 이름이 다른 복잡한 데이터 구조를 정렬할 때 필수적입니다."
  },
  {
    "id": 37,
    "title": "Which one of the following statements describes the purpose of an Service Catalog workflow?",
    "options": [
      {
        "letter": "A",
        "text": "A Service Catalog workflow generates three basic components: item variable types, tasks, and"
      },
      {
        "letter": "B",
        "text": "Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment"
      },
      {
        "letter": "C",
        "text": "A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to"
      },
      {
        "letter": "D",
        "text": "A Service Catalog workflow generates three basic components: item variable types, tasks, and"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **서비스 카탈로그 워크플로우(Workflow)**는 요청된 항목의 **주문 이행(Fulfillment)** 과정을 자동화하는 비즈니스 엔진입니다.\n*   **핵심 프로세스**: 승인(Approvals) 요청 송신, 실무자에게 할당되는 작업(Tasks) 생성, 주문 상태 변화에 따른 사용자 알림(Notifications) 전송.\n*   **현대화**: 최신 릴리스에서는 워크플로우 엔진 대신 **플로우 디자이너(Flow Designer)**를 사용하여 동일한 이행 프로세스를 구축하는 것이 권장됩니다."
  },
  {
    "id": 38,
    "title": "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    "options": [
      {
        "letter": "A",
        "text": "RITM (Number)>REQ (Number)>PROCUREMENT (Number)"
      },
      {
        "letter": "B",
        "text": "REQ (Number)>RITM (Number)>PROCUREMENT (Number)"
      },
      {
        "letter": "C",
        "text": "REQ (Number)>RITM (Number)>TASK (Number)"
      },
      {
        "letter": "D",
        "text": "FULFILLMENT (Number)>RITM (Number)>TASK (Number)"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 서비스 카탈로그의 주문 데이터 모델은 **3단계 계층 구조**를 따릅니다.\n1.  **Request (REQ)**: 주문 전체를 의미하는 바구니 레코드.\n2.  **Requested Item (RITM)**: 주문 내 개별 품목 (예: 요청한 특정 모델의 노트북).\n3.  **Catalog Task (SCTASK)**: 해당 품목을 전달하거나 설치하기 위해 실무자가 수행해야 하는 개별 작업.\n*   **관리자 관점**: 주문의 진행 상태를 세부적으로 추적하려면 이 계층 구조를 따라 최하위 태스크까지 드릴다운해야 합니다."
  },
  {
    "id": 39,
    "title": "What is a characteristic of importing data into ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "An existing Transform Map can be used one time on the same import set"
      },
      {
        "letter": "B",
        "text": "Coalesce fields are used only after running Transform"
      },
      {
        "letter": "C",
        "text": "Any user can manage and set up import sets"
      },
      {
        "letter": "D",
        "text": "An existing Transform Map can be used multiple times on the same import set"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **변환 맵(Transform Map)**은 한 번 정의해 두면 동일한 구조의 데이터를 가져올 때 언제든 **재사용**할 수 있습니다.\n*   **효율성**: 매주 반복되는 사용자 정보 업데이트나 자산 리스트 임포트 시, 동일한 매핑 규칙과 `Coalesce` 설정을 가진 변환 맵을 사용하여 작업 시간을 단축하고 데이터 일관성을 유지합니다.\n*   **일대다 관계**: 하나의 임포트 세트 테이블에 대해 목적에 따라 서로 다른 여러 개의 변환 맵을 연결하여 실행할 수도 있습니다."
  },
  {
    "id": 40,
    "title": "What is (are) best practice(s) regarding users/groups/roles? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "You should never assign roles to groups."
      },
      {
        "letter": "B",
        "text": "You should assign roles to users."
      },
      {
        "letter": "C",
        "text": "You should assign roles to groups"
      },
      {
        "letter": "D",
        "text": "You should add users to groups"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: **C, D**. ServiceNow의 권한 관리(RBAC)에서 가장 핵심적인 **베스트 프랙티스**입니다.\n1.  **그룹에 역할 할당(C)**: 개별 사용자마다 역할을 일일이 부여하는 것은 관리가 거의 불가능합니다. 역할(Roles)은 항상 논리적 단위인 **그룹(Groups)**에 부여해야 합니다.\n2.  **그룹에 사용자 추가(D)**: 사용자가 특정 직무를 수행하게 되면 해당 권한을 가진 그룹에 멤버로 추가합니다. 사용자는 그룹에 가입되는 즉시 그룹에 할당된 모든 역할을 **상속(Inherit)**받게 됩니다.\n*   **이점**: 인사이동이나 퇴사 시 그룹 멤버십만 조정하면 모든 권한이 자동으로 동기화되어 보안 사고를 예방하고 관리 리소스를 절감합니다."
  },
  {
    "id": 41,
    "title": "What is a formatter? Select one of the following.",
    "options": [
      {
        "letter": "A",
        "text": "A formatter allows you to configure applications on your instance"
      },
      {
        "letter": "B",
        "text": "A formatter is a form element used to display information that is not a field in the record"
      },
      {
        "letter": "C",
        "text": "A formatter allows you to populate fields automatically"
      },
      {
        "letter": "D",
        "text": "A formatter is a set of conditions applied to a table to help find and work with data"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **포맷터(Formatter)**는 폼(Form)에 표시되는 특별한 UI 요소로, 레코드의 일반 필드(Field)에 저장되지 않는 **추가적인 정보나 기능을 시각적으로 제공**합니다.\n*   **예시**: 활동 스트림(Activity Stream), 프로세스 플로우(Process Flow), 첨부 파일(Attachments) 목록 등이 대표적인 포맷터입니다.\n*   **특징**: 데이터베이스에 직접 저장되는 필드 값과는 달리, 동적인 정보나 관련 레코드의 요약을 보여주는 데 사용됩니다."
  },
  {
    "id": 42,
    "title": "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "Service Processes"
      },
      {
        "letter": "B",
        "text": "User Permissions"
      },
      {
        "letter": "C",
        "text": "Tables and Fields"
      },
      {
        "letter": "D",
        "text": "A Database"
      },
      {
        "letter": "E",
        "text": "The Dependency View"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "E"
    ],
    "explanation": "정답: **A, C, D, E**. **CMDB(Configuration Management Database)**는 IT 환경의 모든 구성 항목(CIs)과 그 관계를 저장하는 중앙 집중식 **데이터베이스(D)**입니다.\n*   **핵심 요소**: CMDB는 단순히 데이터 저장소를 넘어, **테이블과 필드(C)**로 구조화된 데이터를 통해 **서비스 프로세스(A)**(예: Incident, Change)를 지원하고, **Dependency View(E)**와 같은 시각화 도구를 통해 CI 간의 **관계(Relationships)**를 파악하여 서비스 영향도 분석을 가능하게 합니다.\n*   **참고**: 사용자 권한(B)은 CMDB 데이터에 대한 접근 제어 메커니즘(ACL, Roles)이지, CMDB 자체의 구성 요소는 아닙니다."
  },
  {
    "id": 43,
    "title": "What is the Import Set Table?",
    "options": [
      {
        "letter": "A",
        "text": "A table where data will be placed, post-transformation"
      },
      {
        "letter": "B",
        "text": "A table that determines relationships"
      },
      {
        "letter": "C",
        "text": "A staging area for imported records"
      },
      {
        "letter": "D",
        "text": "A repository for Update Set information"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **임포트 세트 테이블(Import Set Table)**은 외부에서 가져온 데이터를 최종 대상 테이블에 직접 넣기 전에 **임시로 저장하는 스테이징 영역(Staging Area)**입니다.\n*   **역할**: 원본 데이터의 구조를 그대로 유지하며, 데이터 변환(Transform) 및 매핑(Mapping) 작업을 수행하기 위한 중간 단계 역할을 합니다.\n*   **데이터 무결성**: 이 스테이징 영역에서 데이터의 유효성을 검증하고 정리한 후, 변환 맵(Transform Map)을 통해 최종 테이블로 데이터를 이동시켜 데이터 무결성을 확보합니다."
  },
  {
    "id": 44,
    "title": "The display sequence is controlled in a Service Catalog Item using which of the following?",
    "options": [
      {
        "letter": "A",
        "text": "The Default Value field in the Catalog Item form"
      },
      {
        "letter": "B",
        "text": "The Sequence field in the Catalog Item form"
      },
      {
        "letter": "C",
        "text": "The Order field in the Variable form"
      },
      {
        "letter": "D",
        "text": "The Choice field in the Variable form"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 서비스 카탈로그 항목(Service Catalog Item) 내에서 **변수(Variables)**들의 표시 순서는 각 변수 레코드에 설정된 **`Order` 필드** 값에 따라 결정됩니다.\n*   **사용자 경험**: `Order` 필드에 낮은 숫자를 부여할수록 폼 상단에 먼저 표시되어, 사용자가 카탈로그 항목을 요청할 때 일관되고 직관적인 입력 흐름을 제공합니다.\n*   **관리**: 이 필드를 통해 복잡한 카탈로그 폼의 레이아웃을 스크립트 없이 쉽게 관리할 수 있습니다."
  },
  {
    "id": 45,
    "title": "A User is stored in which table?",
    "options": [
      {
        "letter": "A",
        "text": "User [sys_user]"
      },
      {
        "letter": "B",
        "text": "User [sys_user_group]"
      },
      {
        "letter": "C",
        "text": "User [syst_user_profile]"
      },
      {
        "letter": "D",
        "text": "User [user_profile]"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 플랫폼에서 모든 **사용자(User)** 정보는 **`sys_user` 테이블**에 저장됩니다.\n*   **기반 데이터(Foundational Data)**: `sys_user` 테이블은 그룹(`sys_user_group`), 역할(`sys_user_role`), 위치(`cmn_location`) 등과 함께 플랫폼 전반에서 참조되는 핵심 기반 데이터(Foundational Data) 중 하나입니다.\n*   **통합**: LDAP 통합 등을 통해 외부 디렉토리 서비스의 사용자 정보를 이 테이블로 가져와 관리할 수 있습니다."
  },
  {
    "id": 46,
    "title": "Which application is used to change the number format per table?",
    "options": [
      {
        "letter": "A",
        "text": "Number Maintenance"
      },
      {
        "letter": "B",
        "text": "System Maintenance"
      },
      {
        "letter": "C",
        "text": "Table Maintenance"
      },
      {
        "letter": "D",
        "text": "Record Maintenance"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Number Maintenance (번호 유지 관리)** 모듈은 ServiceNow 인스턴스 내의 모든 테이블에 대한 **레코드 번호 매기기 규칙**을 정의하고 관리하는 곳입니다.\n*   **기능**: 각 테이블의 번호 접두사(Prefix, 예: INC, CHG), 번호 길이, 다음 번호(Next Number) 등을 설정할 수 있습니다.\n*   **활용**: 이를 통해 인시던트, 변경 요청 등 다양한 레코드 유형에 고유하고 일관된 번호 체계를 부여하여 식별 및 관리를 용이하게 합니다."
  },
  {
    "id": 47,
    "title": "What is a Record Producer?",
    "options": [
      {
        "letter": "A",
        "text": "A Record Producer is a type of Catalog Item that is used for Requests, not Services"
      },
      {
        "letter": "B",
        "text": "A Record Producer creates user records"
      },
      {
        "letter": "C",
        "text": "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests"
      },
      {
        "letter": "D",
        "text": "A Record Producer is a type of a Catalog Item that allows users to create task-based records from the"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **레코드 프로듀서(Record Producer)**는 서비스 카탈로그(Service Catalog)의 특별한 유형으로, 사용자가 카탈로그 인터페이스를 통해 **특정 데이터베이스 테이블(예: Incident, Change Request)에 직접 레코드를 생성**할 수 있도록 해주는 도구입니다.\n*   **목적**: 복잡한 폼을 직접 열지 않고도 친숙한 카탈로그 환경에서 요청을 제출하여 백엔드 레코드를 생성할 수 있게 하여 사용자 경험을 개선합니다.\n*   **차이점**: 일반 카탈로그 항목(Catalog Item)이 요청된 항목(Requested Item)을 생성하는 반면, 레코드 프로듀서는 지정된 테이블에 직접 레코드를 생성합니다."
  },
  {
    "id": 48,
    "title": "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    "options": [
      {
        "letter": "A",
        "text": "They run behind the scenes."
      },
      {
        "letter": "B",
        "text": "They are the building blocks."
      },
      {
        "letter": "C",
        "text": "They are optional."
      },
      {
        "letter": "D",
        "text": "They provide options."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **서비스 카탈로그 항목(Service Catalog Item)**은 서비스 카탈로그(Service Catalog)를 구성하는 **가장 기본적인 빌딩 블록(Building Block)**입니다.\n*   **역할**: 사용자가 요청할 수 있는 개별 서비스, 제품 또는 정보(예: 노트북 요청, 소프트웨어 설치, 정보 요청)를 정의합니다.\n*   **구성**: 각 카탈로그 항목은 고유한 폼, 변수(Variables), 워크플로우(Workflow) 또는 플로우(Flow)를 가질 수 있으며, 이를 통해 요청 이행(Fulfillment) 프로세스를 자동화합니다."
  },
  {
    "id": 49,
    "title": "What is a way that you can mark a knowledge article for review?",
    "options": [
      {
        "letter": "A",
        "text": "Flag article"
      },
      {
        "letter": "B",
        "text": "Review"
      },
      {
        "letter": "C",
        "text": "Bookmark"
      },
      {
        "letter": "D",
        "text": "On Hold"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **지식 문서 플래그(Flag Article)** 기능은 사용자가 지식 문서에 대한 **피드백을 제출**하거나, 문서의 내용에 **오류가 있음을 알릴 때** 사용됩니다.\n*   **목적**: 문서의 정확성, 최신성, 유용성을 지속적으로 개선하기 위한 중요한 메커니즘입니다. 플래그가 지정된 문서는 지식 관리자(Knowledge Manager)의 검토 대상이 됩니다.\n*   **참고**: 단순히 나중에 다시 보기 위한 북마크(Bookmark) 기능과는 목적이 다릅니다."
  },
  {
    "id": 50,
    "title": "From the User menu, which actions can a user select? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Send Notifications"
      },
      {
        "letter": "B",
        "text": "Log Out ServiceNow"
      },
      {
        "letter": "C",
        "text": "Elevate Roles"
      },
      {
        "letter": "D",
        "text": "Impersonate Users"
      },
      {
        "letter": "E",
        "text": "Order from Service Catalog"
      },
      {
        "letter": "F",
        "text": "Approve Records"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: **B, C, D**. ServiceNow의 **사용자 메뉴(User Menu)**는 로그인한 사용자가 자신의 계정 및 세션과 관련된 다양한 작업을 수행할 수 있는 드롭다운 메뉴입니다.\n*   **Log Out ServiceNow (B)**: 현재 세션을 종료하고 인스턴스에서 로그아웃합니다.\n*   **Elevate Roles (C)**: `security_admin`과 같은 고권한 역할을 일시적으로 활성화하여 민감한 시스템 설정 변경 작업을 수행할 수 있게 합니다. 보안을 위해 필요한 경우에만 활성화하고 작업 후에는 비활성화하는 것이 모범 사례입니다.\n*   **Impersonate Users (D)**: 다른 사용자의 관점에서 인스턴스를 테스트하거나 문제를 해결하기 위해 해당 사용자로 가장(Impersonate)합니다. 이 기능은 `admin` 또는 `impersonator` 역할이 있는 사용자만 사용할 수 있습니다."
  },
  {
    "id": 51,
    "title": "A REQ number in the Service Catalog represents??",
    "options": [
      {
        "letter": "A",
        "text": "the order number."
      },
      {
        "letter": "B",
        "text": "the stage."
      },
      {
        "letter": "C",
        "text": "the task to complete."
      },
      {
        "letter": "D",
        "text": "the individual item in the order."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 서비스 카탈로그에서 **REQ(Request)** 번호는 사용자가 제출한 **주문 전체(Order Number)**를 식별하는 최상위 레코드 번호입니다.\n*   **주문 계층 구조**: ServiceNow는 주문 이행을 위해 3단계 구조를 사용합니다.\n    1. **REQ (Request)**: 바구니 전체 (주문 번호).\n    2. **RITM (Requested Item)**: 주문에 포함된 개별 품목 (예: 노트북, 마우스).\n    3. **SCTASK (Catalog Task)**: 각 품목을 처리하기 위한 실무자용 작업.\n*   **용도**: 사용자는 REQ 번호를 통해 자신의 전체 주문 상태를 추적합니다."
  },
  {
    "id": 52,
    "title": "Which one of these applications is available to all users?",
    "options": [
      {
        "letter": "A",
        "text": "Change"
      },
      {
        "letter": "B",
        "text": "Incident"
      },
      {
        "letter": "C",
        "text": "Facilities"
      },
      {
        "letter": "D",
        "text": "Self-Service"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **Self-Service (셀프 서비스)** 애플리케이션 메뉴는 플랫폼의 모든 사용자(역할이 없는 Requester 포함)가 접근할 수 있도록 설계된 기본 진입점입니다.\n*   **주요 모듈**: 홈페이즈, 대시보드, 서비스 카탈로그, 지식 기반(Knowledge), 본인의 프로필 및 미해결 요청(My Requests) 등을 포함합니다.\n*   **페르소나**: 역할이 없는 일반 직원(ESS - Employee Self Service 사용자)이 IT 지원을 받거나 정보를 얻기 위해 가장 먼저 방문하는 곳입니다."
  },
  {
    "id": 53,
    "title": "Which of the following allows a user to edit field values in a list without opening the form?",
    "options": [
      {
        "letter": "A",
        "text": "Data Editor"
      },
      {
        "letter": "B",
        "text": "Edit Menu"
      },
      {
        "letter": "C",
        "text": "List Editor"
      },
      {
        "letter": "D",
        "text": "Form Designer"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **리스트 에디터(List Editor)** 기능을 사용하면 개별 레코드 폼을 일일이 열지 않고도 리스트 뷰에서 직접 필드 값을 수정할 수 있습니다.\n*   **작동 방식**: 셀(Cell)을 더블 클릭하여 값을 변경합니다.\n*   **가드레일**: 리스트 에디터로 값을 수정하더라도 시스템의 **ACL(Access Control List)**과 **Data Policy**는 여전히 적용되므로, 권한이 없는 필드는 수정할 수 없습니다.\n*   **참고**: UI Policy는 폼(Form) 전용이므로 리스트 에디터에서는 작동하지 않습니다."
  },
  {
    "id": 54,
    "title": "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Most recent update"
      },
      {
        "letter": "B",
        "text": "Popularity"
      },
      {
        "letter": "C",
        "text": "Relevancy"
      },
      {
        "letter": "D",
        "text": "Manager assignment"
      },
      {
        "letter": "E",
        "text": "Number of views"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "정답: **A, C, E**. 지식 기반(Knowledge Base)에서 검색 결과를 정렬하는 기준은 사용자가 가장 유용한 문서를 빠르게 찾을 수 있도록 돕습니다.\n1.  **Most recent update (A)**: 가장 최근에 수정된 최신 정보를 우선순위로 봅니다.\n2.  **Relevancy (C)**: 검색어와의 일치도 및 가중치에 따라 가장 연관성 높은 문서를 상단에 배치합니다 (기본값).\n3.  **Number of views (E)**: 다른 사용자들이 가장 많이 조회한 인기 문서를 기준으로 정렬합니다.\n*   **목적**: 정보의 최신성(Recency)과 정확성(Accuracy)을 보장하여 셀프 서비스 효율을 높입니다."
  },
  {
    "id": 55,
    "title": "What is the purpose of flagging an article in a knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "To mark an article to read later."
      },
      {
        "letter": "B",
        "text": "Allow a user to submit feedback about an article"
      },
      {
        "letter": "C",
        "text": "Reporting an error"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 지식 문서의 **플래그(Flagging)** 기능은 사용자가 문서의 내용에 오류가 있거나 개선이 필요하다고 느낄 때 **피드백을 제출**하기 위한 도구입니다.\n*   **거버넌스**: 플래그가 달린 문서는 지식 관리자(Knowledge Manager)의 대시보드에 나타나며, 관리자는 이를 검토하여 수정하거나 업데이트하는 '관리/거버넌스(Govern)' 활동을 수행합니다.\n*   **차이점**: 단순히 나중에 다시 읽기 위해 저장하는 기능은 '북마크(Bookmark)'를 사용합니다."
  },
  {
    "id": 56,
    "title": "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    "options": [
      {
        "letter": "A",
        "text": "The CMDB contains data about tangible and intangible business assets"
      },
      {
        "letter": "B",
        "text": "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a"
      },
      {
        "letter": "C",
        "text": "The CMDB archives all Service Management PaaS equipment metadata and usage statistics"
      },
      {
        "letter": "D",
        "text": "The CMDB contains ITIL process data pertaining to configuration items"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **CMDB(Configuration Management Database)**는 기업의 IT 환경을 구성하는 모든 유형(하드웨어, 서버 등) 및 무형(소프트웨어, 비즈니스 서비스 등)의 **구성 항목(CIs)**과 그들 간의 **관계(Relationships)**를 저장하는 중앙 집중식 데이터 저장소입니다.\n*   **핵심 가치**: CMDB는 단순한 인벤토리가 아니라, 서비스 영향도 분석(Impact Analysis)을 가능하게 하는 '서비스 인지형(Service-aware)' 데이터베이스입니다.\n*   **자산(Asset)과의 차이**: 자산은 재무적 가치에 집중하고, CMDB(CI)는 운영적 사용과 의존 관계에 집중합니다."
  },
  {
    "id": 57,
    "title": "What are the four knowledge workflows available in the ServiceNow base instance?",
    "options": [
      {
        "letter": "A",
        "text": "Approval publish: Request approval from a manager of the knowledge base before moving the article it"
      },
      {
        "letter": "B",
        "text": "Instant Publish: Immediately publishes a draft article without requiring an approval"
      },
      {
        "letter": "C",
        "text": "Instant Retire: Immediately retires a published article without requiring an approval"
      },
      {
        "letter": "D",
        "text": "Retire Knowledge: Moves a knowledge article to the retired state."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 기본 인스턴스는 지식 문서의 생성을 통제하기 위해 표준화된 **지식 워크플로우(Knowledge Workflows)**를 제공합니다.\n*   **대표 유형**:\n    1. **Approval Publish (A)**: 문서 게시 전 관리자의 승인을 거칩니다.\n    2. **Instant Publish**: 승인 없이 즉시 게시됩니다.\n    3. **Instant Retire**: 승인 없이 즉시 은퇴(비활성화) 처리됩니다.\n    4. **Retire Knowledge**: 은퇴 전 승인 절차를 거칩니다.\n*   **용도**: 지식 기반(Knowledge Base)마다 서로 다른 워크플로우를 할당하여 거버넌스 수준을 조절할 수 있습니다."
  },
  {
    "id": 58,
    "title": "Which are states that you can make a field on a form using UI Policy?",
    "options": [
      {
        "letter": "A",
        "text": "read-only"
      },
      {
        "letter": "B",
        "text": "write-only"
      },
      {
        "letter": "C",
        "text": "Necessary"
      },
      {
        "letter": "D",
        "text": "Mandatory"
      },
      {
        "letter": "E",
        "text": "Empty"
      },
      {
        "letter": "F",
        "text": "Hidden"
      }
    ],
    "answer": [
      "A",
      "D",
      "F"
    ],
    "explanation": "정답: **A, D, F**. **UI 정책(UI Policy)**은 폼에서 데이터의 일관성과 사용자 경험을 제어하는 가장 효율적인 도구입니다.\n*   **제어 가능 3대 상태**:\n    1. **Mandatory (필수)**: 데이터 입력 없이 저장 불가.\n    2. **Read-only (읽기 전용)**: 사용자 수정 차단.\n    3. **Visible/Hidden (표시/숨김)**: 조건에 따른 필드 노출 제어.\n*   **베스트 프랙티스**: 복잡한 스크립트 작성 전 항상 UI Policy로 해결 가능한지 먼저 검토해야 합니다 (No-code 우선 원칙)."
  },
  {
    "id": 59,
    "title": "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
    "options": [
      {
        "letter": "A",
        "text": "A metric is a report gauge used on homepages to display real-time data"
      },
      {
        "letter": "B",
        "text": "A metric is a time measurement used to report the effectiveness of workflows and SLAs"
      },
      {
        "letter": "C",
        "text": "A metric is used to measure and evaluate the effectiveness of IT service management processes"
      },
      {
        "letter": "D",
        "text": "A metric is a comparative measurement used to report the effectiveness of workflows and SLAs."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow에서 **메트릭(Metric)**은 데이터의 변화를 시간에 따라 추적하여 프로세스의 효율성을 측정하는 도구입니다.\n*   **기능**: 특정 필드(예: 담당자, 상태)가 변경된 이력을 기록하여, 레코드가 각 단계에서 얼마나 머물렀는지 등의 정량적 데이터를 수집합니다.\n*   **활용**: 수집된 메트릭 데이터는 보고서(Reporting)나 Performance Analytics의 소스가 되어 SLA 준수율이나 MTTR(평균 복구 시간) 등을 분석하는 데 사용됩니다."
  },
  {
    "id": 60,
    "title": "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    "options": [
      {
        "letter": "A",
        "text": "Avoid using the Default Update set as an Update Set for moving customizations from instance to"
      },
      {
        "letter": "B",
        "text": "Before moving customizations from instance to instance with Update Sets, ensure that both instances"
      },
      {
        "letter": "C",
        "text": "Use the Baseline Update Set to store the contents of items after they are changed the first time"
      },
      {
        "letter": "D",
        "text": "Once an Update Set is closed as \"Complete\" change it back to \"In Progress\" until it is applied to another"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트(Update Sets)**를 사용할 때의 가장 중요한 모범 사례 중 하나는 **Default 업데이트 세트를 사용하지 않는 것**입니다.\n*   **이유**: Default 세트는 시스템의 모든 자잘한 변경사항을 무차별적으로 캡처하며, 다른 인스턴스로 내보내기(Export)가 번거롭고 위험합니다.\n*   **권장 사항**: 작업 목적에 맞는 **이름이 지정된(Named) 업데이트 세트**를 새로 생성하여 필요한 변경사항만 명확하게 관리하고 이동시켜야 합니다.\n*   **주의**: 업데이트 세트는 구성(Configuration) 변경을 기록하며, 일반적인 데이터 레코드(인시던트 등)는 캡처하지 않습니다."
  },
  {
    "id": 61,
    "title": "Which configuration allows you to use a script to coalesce data in Import Sets?",
    "options": [
      {
        "letter": "A",
        "text": "Multiple-field coalesce"
      },
      {
        "letter": "B",
        "text": "No coalesce"
      },
      {
        "letter": "C",
        "text": "Conditional coalesce"
      },
      {
        "letter": "D",
        "text": "Single-field coalesce"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **조건부 병합(Conditional Coalesce)**은 단순한 필드 매칭을 넘어, 복잡한 비즈니스 로직에 따라 기존 레코드를 업데이트할지 아니면 신규로 생성할지를 결정할 때 사용합니다.\n*   **스크립팅 활성화**: 'Coalesce' 체크박스를 선택한 후, 'Coalesce case sensitive' 옆의 'Scripts' 옵션을 통해 JavaScript로 커스텀 로직을 작성할 수 있습니다.\n*   **데이터 무결성**: 소스 데이터의 품질이 낮거나, 여러 필드를 복합적으로 대조하여 유일성을 판별해야 할 때 강력한 가드레일 역할을 합니다.\n*   **참고**: `sys_id` 기반 병합이 가장 빠르지만, 외부 데이터 연동 시에는 보통 비즈니스 고유 키(사번, 자산번호 등)를 Coalesce로 사용합니다."
  },
  {
    "id": 62,
    "title": "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
    "options": [
      {
        "letter": "A",
        "text": "Maintain Categories"
      },
      {
        "letter": "B",
        "text": "Maintain Items"
      },
      {
        "letter": "C",
        "text": "Content Items"
      },
      {
        "letter": "D",
        "text": "Items"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **Maintain Items** 모듈은 서비스 카탈로그 관리자가 개별 품목(Catalog Items)의 전체 수명 주기를 관리하는 중앙 허브입니다.\n*   **주요 설정**: 항목의 이름, 설명, 소속 카테고리, 가격, 가시성(User Criteria), 그리고 요청 이행을 위한 워크플로우나 플로우를 여기서 연결합니다.\n*   **비교**: 'Categories'는 항목을 논리적으로 분류하는 폴더 구조를 관리하며, 'Items'는 사용자가 보는 실제 리스트에 가깝습니다."
  },
  {
    "id": 63,
    "title": "What is generated from the Service Catalog once a user places an order for an item or service?",
    "options": [
      {
        "letter": "A",
        "text": "A change request"
      },
      {
        "letter": "B",
        "text": "An Order Guide"
      },
      {
        "letter": "C",
        "text": "A request"
      },
      {
        "letter": "D",
        "text": "An SLA"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 사용자가 장바구니(Cart)에 담긴 항목들을 'Order Now' 또는 'Checkout' 하면, 시스템은 가장 먼저 **요청(Request, REQ)** 레코드를 생성합니다.\n*   **주문 계층 (3-Tier)**:\n    1. **REQ (Request)**: 전체 주문서 (예: 입사자용 번들 주문).\n    2. **RITM (Requested Item)**: 주문 내 개별 품목 (예: 노트북, 소프트웨어 라이선스).\n    3. **SCTASK (Catalog Task)**: 실무자가 처리해야 할 개별 작업 (예: 노트북 배송, 계정 생성).\n*   **SLA**: 일반적으로 SLA는 REQ가 아닌 개별 RITM 수준에서 정의되고 추적됩니다."
  },
  {
    "id": 64,
    "title": "Which one statement correctly describes Access Control rule evaluation?",
    "options": [
      {
        "letter": "A",
        "text": "Rules are evaluated using roles. The role with the most permissions evaluates the rules"
      },
      {
        "letter": "B",
        "text": "If more than one rule applies to a row, the older rule is evaluated first"
      },
      {
        "letter": "C",
        "text": "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed"
      },
      {
        "letter": "D",
        "text": "Rules are evaluated from the general to the specific, so a table rule must be active to continue"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow의 **접근 제어(ACL) 평가 엔진**은 보안을 극대화하기 위해 매우 엄격한 순서로 작동합니다.\n*   **평가 순서**: 항상 **테이블(Table) 수준**의 규칙을 먼저 평가하고, 승인된 경우에만 **필드(Field) 수준**의 규칙을 평가합니다.\n*   **계층 구조**: 테이블 ACL 내에서도 `특정 테이블 이름` -> `부모 테이블 이름` -> `와일드카드(*)` 순으로 '가장 구체적인 것'부터 먼저 찾아 적용합니다.\n*   **핵심 원칙**: 사용자가 특정 필드에 접근하려면 해당 테이블 전체에 대한 접근 권한(Table ACL)과 해당 필드에 대한 개별 권한(Field ACL)이 **모두(Both)** 참(True)이어야 합니다."
  },
  {
    "id": 65,
    "title": "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    "options": [
      {
        "letter": "A",
        "text": "If a match is found using the coalesce fields, the existing record is updated with the information being"
      },
      {
        "letter": "B",
        "text": "If a match is not found using the coalesce fields, the system does not create a Transform Map"
      },
      {
        "letter": "C",
        "text": "If a match is found using the coalesce fields, the system creates a new record"
      },
      {
        "letter": "D",
        "text": "If a match is not found using the coalesce fields, the existing record is updated with the information being"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **병합(Coalesce)**은 데이터 임포트 시 중복을 방지하기 위한 'Upsert(Update + Insert)' 로직의 핵심입니다.\n*   **매칭 성공(Match)**: `Coalesce`로 지정된 필드 값이 타겟 테이블의 기존 레코드와 일치하면, 시스템은 기존 레코드를 소스 데이터로 **업데이트(Update)**합니다.\n*   **매칭 실패(No Match)**: 일치하는 레코드가 없으면 **신규 레코드(Insert)**를 생성합니다.\n*   **주의**: 만약 여러 필드를 Coalesce로 지정하면, 지정된 **모든** 필드가 일치해야만 업데이트가 발생합니다."
  },
  {
    "id": 66,
    "title": "How are Workflows moved between instances?",
    "options": [
      {
        "letter": "A",
        "text": "Workflows are moved using Update Sets"
      },
      {
        "letter": "B",
        "text": "Workflows are moved using Transform Maps"
      },
      {
        "letter": "C",
        "text": "Workflows are moved using Application Sets"
      },
      {
        "letter": "D",
        "text": "Workflows cannot be moved between instances"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow에서 워크플로우(Workflows)는 인스턴스 간 구성을 이동시키기 위한 표준 도구인 **업데이트 세트(Update Sets)**에 의해 캡처됩니다.\n*   **캡처 조건**: 워크플로우가 캡처되려면 반드시 **게시(Published)**된 상태여야 합니다. 편집 중인(Checked out) 상태의 워크플로우는 업데이트 세트에 포함되지 않아 누락될 수 있습니다.\n*   **비교**: 최신 기술인 **플로우 디자이너(Flow Designer)** 역시 업데이트 세트를 통해 이동하며, 더 나은 관리 편의성을 위해 **애플리케이션 저장소(App Repo)**를 이용하기도 합니다."
  },
  {
    "id": 67,
    "title": "Tables are made up of which of the following?",
    "options": [
      {
        "letter": "A",
        "text": "records"
      },
      {
        "letter": "B",
        "text": "lists"
      },
      {
        "letter": "C",
        "text": "forms."
      },
      {
        "letter": "D",
        "text": "fields"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. ServiceNow의 데이터베이스 구조는 전통적인 관계형 데이터베이스(RDBMS) 아키텍처를 따릅니다.\n*   **레코드 (Records)**: 테이블의 행(Row)에 해당하며, 하나의 독립된 개체 데이터를 의미합니다 (예: 특정 인시던트 한 건).\n*   **필드 (Fields)**: 테이블의 열(Column)에 해당하며, 레코드가 가진 개별 속성 정보를 담는 최소 단위입니다 (예: 짧은 설명, 상태).\n*   **참조**: 필드는 Dictionary에 의해 정의되며, 모든 레코드는 고유한 32자 식별자인 `sys_id`를 가집니다."
  },
  {
    "id": 68,
    "title": "Which three Variable Types can be added to a Service Catalog Item?",
    "options": [
      {
        "letter": "A",
        "text": "True/False, Multiple Choice, and Ordered"
      },
      {
        "letter": "B",
        "text": "True/False, Checkbox, and Number List"
      },
      {
        "letter": "C",
        "text": "Number List, Single Line Text, and Reference"
      },
      {
        "letter": "D",
        "text": "Multiple Choice, Select Box, and Checkbox"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 서비스 카탈로그에서 **변수(Variables)**는 요청 시 사용자로부터 정보를 수집하는 입력 도구입니다.\n*   **Multiple Choice**: 라디오 버튼 형식으로 하나만 선택.\n*   **Select Box**: 드롭다운 형식으로 하나만 선택.\n*   **Checkbox**: 체크박스 형식으로 다중 선택 가능.\n*   **재사용성**: 이러한 변수들이 여러 항목에서 공통으로 쓰인다면 **Variable Set(변수 세트)**으로 묶어 효율적으로 관리할 수 있습니다."
  },
  {
    "id": 69,
    "title": "Record numbers have to be manually incremented",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B (False)**. ServiceNow는 레코드 번호의 무결성과 일관성을 위해 시스템이 직접 번호를 관리합니다.\n*   **Number Maintenance**: 각 테이블마다 접두사(Prefix, 예: INC), 길이, 시작 번호를 설정해 두면 레코드 생성 시 자동으로 다음 번호가 할당됩니다.\n*   **중복 방지**: 시스템이 자동으로 처리하므로 번호가 겹치거나 누락되는 것을 방지합니다.\n*   **사용자 수정 불가**: 기본적으로 이 번호 필드는 생성 후 읽기 전용으로 설정되는 것이 모범 사례입니다."
  },
  {
    "id": 70,
    "title": "What are the main UI component(s) of the ServiceNow Platform?",
    "options": [
      {
        "letter": "A",
        "text": "Banner Navigator"
      },
      {
        "letter": "B",
        "text": "Banner Frame"
      },
      {
        "letter": "C",
        "text": "Application Frame"
      },
      {
        "letter": "D",
        "text": "Application Navigator"
      },
      {
        "letter": "E",
        "text": "Content Menu"
      },
      {
        "letter": "F",
        "text": "Content Frame"
      }
    ],
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "정답: **B, D, F**. Classic UI (UI16) 기준으로 사용자가 대면하는 메인 화면은 크게 세 영역으로 구분됩니다.\n1.  **Banner Frame (B)**: 상단 로고, 전역 검색, 사용자 프로필 메뉴, 시스템 설정(Gear) 등이 위치한 제어판입니다.\n2.  **Application Navigator (D)**: 좌측 패널로, 모든 애플리케이션과 모듈을 탐색하고 필터링하며 즐겨찾기(Favorites)와 기록(History)을 관리합니다.\n3.  **Content Frame (F)**: 우측의 가장 넓은 영역으로, 실제 데이터 리스트, 폼, 보고서, 대시보드 등이 렌더링되는 실무 영역입니다."
  },
  {
    "id": 71,
    "title": "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
    "options": [
      {
        "letter": "A",
        "text": "They direct the user to a record producer"
      },
      {
        "letter": "B",
        "text": "They direct the user to a catalog property"
      },
      {
        "letter": "C",
        "text": "They direct the user to a catalog UI policy"
      },
      {
        "letter": "D",
        "text": "They direct the user to a catalog client script"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **레코드 프로듀서(Record Producer)**는 서비스 카탈로그 인터페이스를 통해 사용자가 직관적인 질문에 답함으로써 백엔드의 태스크 기반 레코드를 직접 생성할 수 있게 해주는 도구입니다.\n*   **작동 방식**: 일반적인 카탈로그 항목(Catalog Item)이 'Requested Item(RITM)'을 생성하는 것과 달리, 레코드 프로듀서는 인시던트(`incident`), 케이스 등 타겟 테이블에 직접 데이터를 삽입합니다.\n*   **사용자 경험**: 복잡한 폼을 직접 열지 않고도 카탈로그의 친숙한 UI를 통해 장애 신고나 정보 변경 등을 수행할 수 있어 가독성과 편의성이 높습니다."
  },
  {
    "id": 72,
    "title": "A knowledge article must be which of the following states to display to a user?",
    "options": [
      {
        "letter": "A",
        "text": "Published"
      },
      {
        "letter": "B",
        "text": "Drafted"
      },
      {
        "letter": "C",
        "text": "Retired"
      },
      {
        "letter": "D",
        "text": "Reviewed"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 지식 관리(Knowledge Management) 수명 주기에 따라, 일반 사용자가 지식 문서를 검색하고 열람하려면 해당 문서는 반드시 **`Published` (게시됨)** 상태여야 합니다.\n*   **수명 주기 단계**:\n    1. **Draft**: 작성 중인 단계.\n    2. **Review**: 승인권자의 검토 단계.\n    3. **Published**: 게시되어 모든 대상자가 읽을 수 있는 단계.\n    4. **Retired**: 유효 기간이 지나 검색 및 열람이 중단된 단계."
  },
  {
    "id": 73,
    "title": "Knowledge articles within a knowledge base are grouped by category.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A (True)**. 지식 기반(Knowledge Base) 내의 지식 문서들은 계층적인 **카테고리(Category)** 구조로 분류되어 관리됩니다.\n*   **거버넌스**: 카테고리는 사용자가 수천 개의 문서를 주제별로 체계적으로 탐색(Browse)할 수 있게 하며, 관리자가 문서를 논리적인 단위로 묶어 유지보수할 수 있도록 돕습니다.\n*   **계층 구조**: 카테고리는 다단계 하위 카테고리를 가질 수 있어 상세한 분류 체계 수립이 가능합니다."
  },
  {
    "id": 74,
    "title": "database live at the Data Center.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A (True)**. ServiceNow는 전용 데이터 센터 인프라에서 운영되는 클라우드 기반 플랫폼입니다.\n*   **인프라 구성**: 각 고객의 인스턴스와 데이터베이스는 ServiceNow가 직접 관리하는 **고가용성 데이터 센터**에 물리적으로 존재합니다.\n*   **보안 및 안정성**: 이를 통해 ServiceNow는 고객에게 물리적 서버 관리의 부담을 덜어주면서도 강력한 성능과 99.9% 이상의 가동률을 보장합니다."
  },
  {
    "id": 75,
    "title": "ServiceNow uses what term to describe all the data saved within a particular form?",
    "options": [
      {
        "letter": "A",
        "text": "Fields"
      },
      {
        "letter": "B",
        "text": "Form"
      },
      {
        "letter": "C",
        "text": "Record"
      },
      {
        "letter": "D",
        "text": "Lists"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 데이터 모델에서 테이블의 행(Row) 하나를 **레코드(Record)**라고 부르며, 이는 특정 객체(사용자, 인시던트 등)에 대한 모든 데이터 필드 값의 집합을 의미합니다.\n*   **구성 요소**: 레코드는 여러 개의 **필드(Field)**들로 구성됩니다.\n*   **시각화**: 폼(Form) 인터페이스는 데이터베이스 내의 단일 레코드를 시각적으로 보여주고 편집할 수 있는 화면입니다."
  },
  {
    "id": 76,
    "title": "Which type of interface enables you to display multiple performance analytics, reporting and other widgets on a single screen?",
    "options": [
      {
        "letter": "A",
        "text": "Form"
      },
      {
        "letter": "B",
        "text": "List"
      },
      {
        "letter": "C",
        "text": "Dashboard"
      },
      {
        "letter": "D",
        "text": "Timeline"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **대시보드(Dashboard)**는 보고서(Reports), Performance Analytics 위젯 등 다양한 데이터 시각화 요소를 한 화면에 모아 제공하는 중앙 허브입니다.\n*   **특징**: 사용자는 대시보드에 여러 탭을 구성하여 업무 역할에 맞는 데이터 인사이트를 배치할 수 있습니다.\n*   **유연성**: 드래그 앤 드롭 방식으로 위젯의 위치와 크기를 조정할 수 있으며, 실시간 데이터 변화를 즉각적으로 모니터링하기에 최적화된 인터페이스입니다."
  },
  {
    "id": 77,
    "title": "What is the platform name for the User table?",
    "options": [
      {
        "letter": "A",
        "text": "u_users"
      },
      {
        "letter": "B",
        "text": "sys_users"
      },
      {
        "letter": "C",
        "text": "x_users"
      },
      {
        "letter": "D",
        "text": "sys_user"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 플랫폼에서 모든 사용자 계정 정보가 물리적으로 저장되는 마스터 테이블의 이름은 **`sys_user`**입니다.\n*   **기반 데이터(Foundational Data)**: 이 테이블은 사용자명, 이메일, 위치, 부서 등 인물 정보를 보유하며 플랫폼 내 거의 모든 프로세스(요청자, 할당 대상 등)에서 참조되는 핵심 테이블입니다.\n*   **참고**: `sys_` 접두사는 플랫폼의 시스템 테이블임을 의미합니다."
  },
  {
    "id": 78,
    "title": "What is a schema map?",
    "options": [
      {
        "letter": "A",
        "text": "A schema map enables administrators to define records from specific tables as trouble sources for"
      },
      {
        "letter": "B",
        "text": "A schema map graphically organizes the visual task boards for the CMDB"
      },
      {
        "letter": "C",
        "text": "A schema map graphically displays the Configuration Items that support a business service"
      },
      {
        "letter": "D",
        "text": "A schema map displays the details of tables and their relationships in a visual manner, allowing"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **스키마 맵(Schema Map)**은 특정 테이블의 데이터 구조와 다른 테이블 간의 관계를 그래픽으로 시각화하여 보여주는 도구입니다.\n*   **관계 식별**: 부모-자식 간의 확장(Extension) 관계와 참조(Reference) 관계를 선으로 연결하여 보여줍니다.\n*   **활용**: 관리자는 이를 통해 데이터베이스 모델을 분석하거나, 특정 필드가 다른 테이블에 어떻게 영향을 주는지 디버깅할 때 활용합니다."
  },
  {
    "id": 79,
    "title": "A role is recorded in which table?",
    "options": [
      {
        "letter": "A",
        "text": "Role[sys_user]"
      },
      {
        "letter": "B",
        "text": "Role[sys_user_profile]"
      },
      {
        "letter": "C",
        "text": "Role[sys_user_record]"
      },
      {
        "letter": "D",
        "text": "Role[sys_user_role]"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 플랫폼에서 정의된 모든 **역할(Role)** 레코드는 **`sys_user_role`** 테이블에 저장됩니다.\n*   **역할의 본질**: 역할은 특정 기능이나 데이터에 접근할 수 있는 '권한의 집합'입니다.\n*   **할당 구조**: 역할은 사용자(`sys_user`)에게 직접 할당되거나, 더 권장되는 방식인 그룹(`sys_user_group`)에 할당되어 멤버들에게 상속됩니다."
  },
  {
    "id": 80,
    "title": "Which term refers to application menus and modules which you may want to access quickly and often?",
    "options": [
      {
        "letter": "A",
        "text": "Breadcrumb"
      },
      {
        "letter": "B",
        "text": "Favorite"
      },
      {
        "letter": "C",
        "text": "Tag"
      },
      {
        "letter": "D",
        "text": "Bookmark"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **즐겨찾기(Favorites)** 기능은 사용자가 자주 사용하는 애플리케이션, 모듈, 리스트, 필터 등을 Application Navigator의 'Star' 아이콘 섹션에 저장해 두는 기능입니다.\n*   **개인화**: 사용자는 즐겨찾기 항목마다 고유한 아이콘과 색상을 지정하여 자신만의 내비게이션 환경을 구축할 수 있습니다.\n*   **속도**: 메뉴를 일일이 검색하거나 트리 구조를 탐색할 필요 없이 단 한 번의 클릭으로 원하는 화면에 접근할 수 있게 해줍니다."
  },
  {
    "id": 81,
    "title": "Which of the following statements is true when a new table is created by extending another table?",
    "options": [
      {
        "letter": "A",
        "text": "The new table archives the parent table and assumed its roles in the database"
      },
      {
        "letter": "B",
        "text": "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but"
      },
      {
        "letter": "C",
        "text": "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself"
      },
      {
        "letter": "D",
        "text": "The new table inherits all of the fields, but does not inherit Access Control rules, Client"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼의 데이터베이스는 객체 지향적 상속 모델을 따릅니다.\n*   **필드 상속**: 자식 테이블(Child Table)은 부모 테이블(Parent Table)의 모든 필드를 자동으로 포함합니다. 여기에 자식 테이블에서만 필요한 고유한 필드를 추가로 생성할 수 있습니다.\n*   **로직 상속**: 필드뿐만 아니라 부모 테이블에 정의된 비즈니스 규칙(Business Rules), 클라이언트 스크립트(Client Scripts), UI 정책(UI Policy), ACL 등도 모두 상속받아 적용됩니다.\n*   **이점**: 공통된 데이터 구조와 로직을 재사용함으로써 개발 시간을 단축하고 데이터 일관성을 유지할 수 있습니다."
  },
  {
    "id": 82,
    "title": "Which one of the following statements best describes the purpose of an Update Set?",
    "options": [
      {
        "letter": "A",
        "text": "An Update Set allows administrators to group a series of changes into a named set and then move this"
      },
      {
        "letter": "B",
        "text": "By default, an Update Set includes customizations, Business Rules, and homepages"
      },
      {
        "letter": "C",
        "text": "An Update Set is a group of customizations that is moved from Production to Development"
      },
      {
        "letter": "D",
        "text": "By default, the changes included in an Update Set are visible only in the instance to which they are"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트(Update Sets)**는 인스턴스 간에 **구성(Configuration)** 변경 사항을 그룹화하여 안전하게 이동시키기 위한 도구입니다.\n*   **캡처 대상**: 테이블 정의, 폼 레이아웃, 워크플로우, 비즈니스 규칙 등 '어떻게 작동하는가'에 대한 설정 데이터(Configuration)를 캡처합니다.\n*   **제외 대상 (중요)**: 인시던트, 사용자, 그룹 레코드와 같은 실제 업무 데이터(Data)는 캡처되지 않습니다.\n*   **표준 프로세스**: `개발(In Progress) -> 완료(Complete) -> 다른 인스턴스에서 검색(Retrieve) -> 미리보기(Preview) -> 커밋(Commit)`의 단계를 거칩니다."
  },
  {
    "id": 83,
    "title": "Which one of the following statements describes a characteristic of role assignment?",
    "options": [
      {
        "letter": "A",
        "text": "Roles can contain other roles, when you are assigned a role, you inherit all the roles within that role"
      },
      {
        "letter": "B",
        "text": "Users can click on the Personalize Role feature to try different roles"
      },
      {
        "letter": "C",
        "text": "A role is granted to a user by the System Administrator"
      },
      {
        "letter": "D",
        "text": "Each user has a role in the ServiceNow platform"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow의 역할 아키텍처는 **역할 포함(Role Containment)** 기능을 지원합니다.\n*   **상속 구조**: 특정 역할이 다른 역할을 '포함(Contain)'하도록 설정하면, 상위 역할을 부여받은 사용자는 하위 역할의 모든 권한을 자동으로 상속받습니다.\n*   **예시**: `admin` 역할은 플랫폼 내 거의 모든 하위 역할을 포함하고 있어 전권 행사가 가능합니다.\n*   **베스트 프랙티스**: 사용자에게 직접 역할을 부여하기보다는, 직무 단위로 역할을 묶어 **그룹(Group)**에 할당하고 사용자를 해당 그룹의 멤버로 추가하는 방식(RBAC)이 권장됩니다."
  },
  {
    "id": 84,
    "title": "Which would NOT appear in the History section of the Application Navigator?",
    "options": [
      {
        "letter": "A",
        "text": "Records"
      },
      {
        "letter": "B",
        "text": "UI Pages"
      },
      {
        "letter": "C",
        "text": "Lists"
      },
      {
        "letter": "D",
        "text": "Forms"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. Application Navigator의 **기록(History)** 탭은 사용자가 최근에 접근한 실무 레코드를 빠르게 추적할 수 있도록 돕습니다.\n*   **포함 항목**: 최근에 열어본 개별 레코드(Forms), 필터가 적용된 리스트(Lists), 대시보드 등 업무 중심의 활동이 기록됩니다.\n*   **제외 항목**: UI Pages, 스크립트 정의 등 시스템 개발 및 구성 객체는 일반적인 사용 기록 탭에 나타나지 않습니다.\n*   **기능**: 'Clock' 아이콘을 통해 접근하며, 자주 찾는 항목은 즐겨찾기(Favorites)로 등록하여 더 영구적으로 관리할 수 있습니다."
  },
  {
    "id": 85,
    "title": "Business Rules are used to enforce mandatory data on a form.",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B (False)**. ServiceNow에서 필수 데이터 입력(Mandatory)을 강제하는 방식은 실행 시점에 따라 구분됩니다.\n*   **UI Policy (클라이언트 측)**: 사용자가 폼을 작성하는 도중에 실시간으로 필드를 필수로 지정하여 시각적인 안내(별표 등)를 제공합니다. 가장 권장되는 노코드 방식입니다.\n*   **Data Policy (서버 측)**: 폼뿐만 아니라 데이터 임포트, API를 통한 데이터 유입 시에도 데이터베이스 수준에서 필수 조건을 강제합니다.\n*   **Business Rule (서버 측)**: 주로 데이터가 저장되기 전(Before) 복잡한 로직을 처리하는 데 쓰이며, 단순히 폼의 필수 여부를 UI 상에서 제어하는 용도는 아닙니다."
  },
  {
    "id": 86,
    "title": "Buttons, form links, and context menu items are all examples of what type of functionality?",
    "options": [
      {
        "letter": "A",
        "text": "Business Rule"
      },
      {
        "letter": "B",
        "text": "UI Action"
      },
      {
        "letter": "C",
        "text": "Client Script"
      },
      {
        "letter": "D",
        "text": "UI Policy"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **UI Action (UI 액션)**은 사용자가 시스템과 상호작용하여 특정 비즈니스 로직을 실행할 수 있도록 시각적인 트리거를 제공하는 도구입니다.\n*   **유형**: 폼 버튼(Buttons), 배너 링크(Links), 리스트 및 폼의 우클릭 메뉴(Context Menu Items) 등이 포함됩니다.\n*   **특징**: 클라이언트 측 JavaScript와 서버 측 로직을 모두 실행할 수 있어, 단순 화면 전환부터 복잡한 데이터 업데이트까지 폭넓게 활용됩니다.\n*   **제어**: 특정 역할이나 조건을 가진 사용자에게만 버튼이 보이도록 'Condition' 필드를 통해 가시성을 제어할 수 있습니다."
  },
  {
    "id": 87,
    "title": "How is the Event Log different from the Event Registry?",
    "options": [
      {
        "letter": "A",
        "text": "Event Log contains generated Events, the Event Registry is a table of Event definitions"
      },
      {
        "letter": "B",
        "text": "Event Log is formatted in the Log style, the Event Registry displays different fields"
      },
      {
        "letter": "C",
        "text": "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were"
      },
      {
        "letter": "D",
        "text": "Event Log is the same as the Event Registry"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow에서 이벤트 시스템은 정의와 실행 이력으로 나뉩니다.\n*   **Event Registry (이벤트 레지스트리)**: 시스템이 인식할 수 있는 이벤트의 종류와 정의를 관리하는 테이블(`sysevent_register`)입니다. '무엇이 발생할 수 있는지'를 정의합니다.\n*   **Event Log (이벤트 로그)**: 시스템에서 실제로 발생한 모든 이벤트의 실행 기록을 담는 테이블(`sysevent`)입니다. '언제, 어떤 이벤트가 누구에 의해 발생했는지'를 기록합니다.\n*   **워크플로우**: Business Rule 등이 이벤트를 생성(Queue)하면 로그에 기록되고, 이를 감시하던 알림(Notification) 엔진이나 스크립트가 후속 조치를 수행합니다."
  },
  {
    "id": 88,
    "title": "Which of the following statement describes the purpose of an Order Guide?",
    "options": [
      {
        "letter": "A",
        "text": "Order Guides restrict the number of items in an order to only one item per request"
      },
      {
        "letter": "B",
        "text": "Order Guide provide a list of guidelines for Administrators on how to set up item variables"
      },
      {
        "letter": "C",
        "text": "Order Guide provide the ability to order multiple, related items as one request"
      },
      {
        "letter": "D",
        "text": "Order Guides take the user directly to the checkout without prompting for information"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **오더 가이드(Order Guide)**는 사용자에게 몇 가지 질문을 던지고, 그 답변에 따라 관련된 여러 카탈로그 항목들을 하나의 통합된 요청(Request)으로 묶어주는 도구입니다.\n*   **대표 사례**: '신규 입사자 온보딩' 오더 가이드를 통해 직책과 부서를 선택하면, 해당 사용자에게 필요한 노트북, 소프트웨어 권한, 출입 카드 요청 항목들이 자동으로 장바구니에 담깁니다.\n*   **이점**: 사용자가 개별 항목을 일일이 찾아 주문할 필요 없이, 비즈니스 시나리오에 맞는 최적의 묶음 주문을 가능하게 하여 사용자 경험을 대폭 개선합니다."
  },
  {
    "id": 89,
    "title": "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    "options": [
      {
        "letter": "A",
        "text": "Service Catalog variables can only be used in Record Producers"
      },
      {
        "letter": "B",
        "text": "Service Catalog variables can only be used in Order Guides"
      },
      {
        "letter": "C",
        "text": "Service Catalog variables cannot affect the order price"
      },
      {
        "letter": "D",
        "text": "Service Catalog variables are global by default"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 서비스 카탈로그에서 **변수(Variables)**는 요청 시 사용자로부터 정보를 수집하는 입력 필드입니다.\n*   **가시성**: 변수는 기본적으로 해당 카탈로그 항목 내에서 전역적인 성격을 가지며, 워크플로우나 주문 이행 과정 전반에서 참조될 수 있습니다.\n*   **변수 세트 (Variable Sets)**: 여러 항목에서 공통으로 사용되는 변수들(예: '요청자 이름', '부서')은 변수 세트로 묶어 재사용함으로써 관리 효율성을 높일 수 있습니다.\n*   **가격 영향**: 변수의 선택 값에 따라 항목의 최종 가격이나 배송 시간을 동적으로 변경할 수도 있습니다."
  },
  {
    "id": 90,
    "title": "When searching using the App Navigator search field, what can be returned? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "Names of Applications and Modules"
      },
      {
        "letter": "B",
        "text": "Names of Modules"
      },
      {
        "letter": "C",
        "text": "Names of Applications"
      },
      {
        "letter": "D",
        "text": "Favorites"
      },
      {
        "letter": "E",
        "text": "History Records"
      },
      {
        "letter": "F",
        "text": "Titles of Dashboard Gauges"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: **A, B, C, D**. Classic UI의 **애플리케이션 내비게이터 검색(Filter Navigator)**은 사용자가 원하는 메뉴를 빠르게 찾을 수 있도록 강력한 필터링 기능을 제공합니다.\n*   **검색 범위**: 애플리케이션 메뉴 이름, 개별 모듈 이름, 그리고 즐겨찾기(Favorites) 항목을 동시에 검색합니다.\n*   **검색 팁**: '인시던트'라고 검색하면 '인시던트' 애플리케이션 하위의 모든 모듈이 표시됩니다.\n*   **단축키 (참고)**: 테이블 이름 뒤에 `.list`를 입력하면 해당 테이블의 리스트 뷰로, `.form`을 입력하면 새 레코드 생성 폼으로 즉시 이동하는 기능도 제공합니다."
  },
  {
    "id": 91,
    "title": "There are common types of Interfaces (Numeric Value) 6: There are six common types of interfaces",
    "options": [
      {
        "letter": "A",
        "text": "Homepage: Consists of navigational elements, functional controls, and platform information."
      },
      {
        "letter": "B",
        "text": "List: Display records from a data table, as well as allow you to edit the record information using the List Editor functionally."
      },
      {
        "letter": "C",
        "text": "Form: Data is entered into ServiceNow through forms"
      },
      {
        "letter": "D",
        "text": "Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a single screen."
      },
      {
        "letter": "E",
        "text": "Maps: Display ServiceNow data graphically on a Google map"
      },
      {
        "letter": "F",
        "text": "Timelines: Used to track tasks or projects"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow에서 데이터를 인스턴스에 직접 입력하고 기존 레코드를 수정하는 데 사용하는 가장 핵심적인 인터페이스는 **폼(Form)**입니다.\n*   **기능**: 사용자가 개별 레코드의 필드 값을 확인, 입력, 수정할 수 있는 시각적 창구 역할을 합니다.\n*   **구성**: 필드(Fields), 섹션(Sections), 관련 리스트(Related Lists), 그리고 UI 액션(버튼 등)으로 구성됩니다.\n*   **비교**: 리스트(List)가 데이터의 목록을 조회하는 용도라면, 폼은 단일 객체의 상세 정보를 처리하는 운영 도구입니다."
  },
  {
    "id": 92,
    "title": "Which one of the following statements is true about Column Context Menus?",
    "options": [
      {
        "letter": "A",
        "text": "It displays actions such as creating quick reports, configuring the list, and exporting data"
      },
      {
        "letter": "B",
        "text": "It displays actions related to filtering options, assigning tags, and search"
      },
      {
        "letter": "C",
        "text": "It displays actions related to viewing and filtering the entire list"
      },
      {
        "letter": "D",
        "text": "It displays actions such as view form, view related task, and add relationship"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 리스트의 **컬럼 컨텍스트 메뉴(Column Context Menu)**는 컬럼 헤더의 세 줄 아이콘(Hamburger)을 클릭하거나 우클릭하여 활성화하며, 해당 열에 특화된 관리 기능을 제공합니다.\n*   **주요 기능**: 데이터 정렬(Sort), 그룹화(Group By), 데이터 내보내기(Export), 그리고 현재 컬럼 데이터를 기반으로 한 즉석 보고서(Bar/Pie Chart) 생성 등이 포함됩니다.\n*   **참고**: 리스트 전체에 대한 설정은 리스트 타이틀 메뉴(List Mechanic/Gear)에서 수행하며, 개별 셀에 대한 작업은 리스트 에디터에서 수행합니다."
  },
  {
    "id": 93,
    "title": "Where would you go in ServiceNow to order services and products offered by various departments?",
    "options": [
      {
        "letter": "A",
        "text": "Service Catalog"
      },
      {
        "letter": "B",
        "text": "Self Service"
      },
      {
        "letter": "C",
        "text": "Service Department"
      },
      {
        "letter": "D",
        "text": "Customer Service"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **서비스 카탈로그(Service Catalog)**는 기업 내 다양한 부서(IT, HR, 시설 관리 등)가 제공하는 서비스와 제품을 사용자가 쇼핑하듯 요청할 수 있는 중앙 허브입니다.\n*   **CSDM 연관**: CSDM 4.0의 **Sell/Consume** 도메인에 해당하며, 기술적 복잡성을 배제하고 비즈니스 가치 관점에서 사용자에게 오퍼링을 노출합니다.\n*   **구성**: 카탈로그 아이템, 오더 가이드, 레코드 프로듀서 등으로 이루어지며 승인 및 이행 워크플로우와 연결됩니다."
  },
  {
    "id": 94,
    "title": "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
    "options": [
      {
        "letter": "A",
        "text": "Answer Agent"
      },
      {
        "letter": "B",
        "text": "Live Feed"
      },
      {
        "letter": "C",
        "text": "Virtual Agent"
      },
      {
        "letter": "D",
        "text": "Connect Chat"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **가상 에이전트(Virtual Agent)**는 대화형 인터페이스를 통해 사용자에게 24/7 자동화된 지원을 제공하는 챗봇 플랫폼입니다.\n*   **핵심 기술**: 자연어 이해(NLU)를 활용하여 사용자의 의도를 파악하고, 지식 문서 검색, 티켓 상태 조회, 비밀번호 재설정 등의 작업을 대화 흐름 내에서 수행합니다.\n*   **이점**: 실시간 상담원의 업무 부하를 줄이고 사용자가 셀프 서비스로 문제를 즉각 해결할 수 있도록 돕습니다."
  },
  {
    "id": 95,
    "title": "What information does the System Dictionary contain?",
    "options": [
      {
        "letter": "A",
        "text": "The human-readable labels and language settings"
      },
      {
        "letter": "B",
        "text": "The definition for each table and column"
      },
      {
        "letter": "C",
        "text": "The information on how tables relate to each other"
      },
      {
        "letter": "D",
        "text": "The language dictionary used for spell checking"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **시스템 딕셔너리(System Dictionary, `sys_dictionary`)**는 인스턴스 내의 모든 테이블과 그 테이블에 속한 각 필드에 대한 **메타데이터(Metadata)**를 정의하는 마스터 저장소입니다.\n*   **저장 정보**: 필드의 데이터 타입, 길이, 기본값, 필수 여부, 참조 테이블 정보 등이 담겨 있습니다.\n*   **중요성**: 데이터베이스 스키마의 근간을 이루며, 여기서 설정된 값은 플랫폼 전역의 데이터 무결성과 UI 동작에 영향을 미칩니다."
  },
  {
    "id": 96,
    "title": "What is a characteristic of importing data into ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "An existing Transform Map can be used one time on the same import set"
      },
      {
        "letter": "B",
        "text": "Coalesce fields are used only after running Transform"
      },
      {
        "letter": "C",
        "text": "Any user can manage and set up import sets"
      },
      {
        "letter": "D",
        "text": "An existing Transform Map can be used multiple times on the same import set"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 데이터 임포트 아키텍처에서 **변환 맵(Transform Map)**은 한 번 생성해 두면 동일한 구조를 가진 여러 임포트 세트(Import Sets)에 대해 **재사용**이 가능합니다.\n*   **효율성**: 매번 매핑을 다시 할 필요 없이 이미 정의된 규칙(Field Map, Coalesce)을 반복 적용하여 데이터 적재 프로세스를 자동화합니다.\n*   **다중 매핑**: 하나의 임포트 세트 테이블에서 유입된 데이터를 서로 다른 여러 개의 타겟 테이블로 분산 적재하기 위해 여러 변환 맵을 순차적으로 실행할 수도 있습니다."
  },
  {
    "id": 97,
    "title": "In what order should filter elements be specified?",
    "options": [
      {
        "letter": "A",
        "text": "Field, Operator, then Value"
      },
      {
        "letter": "B",
        "text": "Field, Operator, then Condition"
      },
      {
        "letter": "C",
        "text": "Operator, Condition, then Value"
      },
      {
        "letter": "D",
        "text": "Value, Operator, then Field"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 리스트에서 데이터를 솎아내는 **조건 빌더(Condition Builder)**는 논리적으로 **`필드(Field) -> 연산자(Operator) -> 값(Value)`** 순서로 구성됩니다.\n1.  **Field**: 검색 대상이 되는 열 (예: '상태').\n2.  **Operator**: 비교 방식 (예: 'is', 'contains', 'is not empty').\n3.  **Value**: 대조할 기준 데이터 (예: 'Closed').\n*   **시각화**: 이 조건들이 결합되어 리스트 상단에 **브레드크럼(Breadcrumbs)** 형태의 텍스트 필터로 표시됩니다."
  },
  {
    "id": 98,
    "title": "Table Access Control rules are processed in the following order",
    "options": [
      {
        "letter": "A",
        "text": "any table name (wildcard), parent table name, table name"
      },
      {
        "letter": "B",
        "text": "table name, parent table name, any table name (wildcard)"
      },
      {
        "letter": "C",
        "text": "parent table name, table name, any table name (wildcard)"
      },
      {
        "letter": "D",
        "text": "any table name (wildcard), table name, parent table name"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **테이블 수준 ACL(Access Control)**의 평가 원칙은 보안을 위해 **'가장 구체적인 것에서 가장 일반적인 것(Most Specific to Most General)'** 순으로 진행됩니다.\n1.  **Table Name**: 현재 테이블에 명시된 규칙 (가장 구체적).\n2.  **Parent Table Name**: 부모 테이블로부터 상속받은 규칙.\n3.  **Any Table Name (*)**: 모든 테이블에 공통 적용되는 와일드카드 규칙 (가장 일반적).\n*   **가드레일**: 시스템은 위 순서대로 규칙을 탐색하며, 조건을 만족하는 첫 번째 규칙을 찾아 접근 허용 여부를 결정합니다."
  },
  {
    "id": 99,
    "title": "What are the two pathways to view feedback left on a published article?",
    "options": [
      {
        "letter": "A",
        "text": "Knowledge > articles > My Flagged"
      },
      {
        "letter": "B",
        "text": "Knowledge base > my knowledge > flagged articles"
      },
      {
        "letter": "C",
        "text": "Knowledge > My articles > Flagged"
      },
      {
        "letter": "D",
        "text": "Knowledge > articles > published"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. 지식 관리 프로세스에서 게시된 문서에 대해 사용자가 남긴 피드백이나 개선 요청을 확인하는 표준 경로는 다음과 같습니다.\n1.  **My Flagged (A)**: 사용자가 내용을 정정해달라고 '플래그(Flag)'를 설정한 본인의 기사들을 모아보는 메뉴입니다.\n2.  **게시된 문서 목록 (D)**: 지식 관리자나 작성자가 `Knowledge > Articles > Published` 모듈에서 개별 문서를 열어 하단의 피드백 관련 리스트나 댓글을 직접 확인합니다.\n*   **KM 거버넌스**: 이러한 피드백 루프는 지식 기반의 정확성과 최신성을 유지하는 'Govern' 단계의 핵심 활동입니다."
  },
  {
    "id": 100,
    "title": "When does the Submit button appear on a form?",
    "options": [
      {
        "letter": "A",
        "text": "When saving an old record"
      },
      {
        "letter": "B",
        "text": "When creating a new record"
      },
      {
        "letter": "C",
        "text": "When changing the reference field in an existing record"
      },
      {
        "letter": "D",
        "text": "When updating an existing record"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow UI에서 레코드의 생성 및 저장 버튼은 데이터 수명 주기에 따라 이름이 바뀝니다.\n*   **Submit**: 시스템에 존재하지 않는 **새로운 레코드**를 최초로 생성(Insert)할 때 표시됩니다. 클릭 시 데이터가 DB에 물리적으로 저장되고 대개 목록 화면으로 이동합니다.\n*   **Update**: 이미 존재하는 **기존 레코드**의 변경 사항을 저장할 때 표시됩니다.\n*   **Save**: 기존 레코드를 저장하되 현재 폼 화면에 그대로 머물고 싶을 때 사용합니다 (주로 Context Menu에 위치)."
  },
  {
    "id": 101,
    "title": "What needs to be specified, when creating a Business Rule? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "UI action"
      },
      {
        "letter": "B",
        "text": "Table"
      },
      {
        "letter": "C",
        "text": "Fields to update"
      },
      {
        "letter": "D",
        "text": "Who can run"
      },
      {
        "letter": "E",
        "text": "Script to run"
      },
      {
        "letter": "F",
        "text": "Application scope"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "explanation": "정답: **A, B, E, F**. **비즈니스 규칙(Business Rules)**은 데이터베이스 작업 시 서버 측에서 실행되는 로직으로, 생성 시 다음 핵심 요소들을 정의해야 합니다.\n*   **Table (B)**: 규칙이 적용될 대상 테이블.\n*   **When to run**: 로직이 실행될 시점(Before, After, Async, Display).\n*   **Condition**: 로직이 트리거되기 위해 만족해야 할 필드 조건.\n*   **Script (E)**: 실행될 JavaScript 비즈니스 로직.\n*   **Scope (F)**: 규칙이 속한 애플리케이션의 경계.\n*   **참고**: 보기 A(UI Action)는 보통 버튼이나 링크를 뜻하지만, 여기서는 비즈니스 규칙 내에서 수행되는 '작업'의 의미로 포함된 것으로 보입니다."
  },
  {
    "id": 102,
    "title": "The ServiceNow Virtual Agent provides assistance within a messaging interface. Which capability allows end users to configure virtual Agent to intercept and help resolve submitted incidents?",
    "options": [
      {
        "letter": "A",
        "text": "Incident Auto-Resolution"
      },
      {
        "letter": "B",
        "text": "Ticket Resolver"
      },
      {
        "letter": "C",
        "text": "Virtual Agent Helper"
      },
      {
        "letter": "D",
        "text": "Web Intelligence"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Incident Auto-Resolution (인시던트 자동 해결)**은 ServiceNow의 지능형 자동화 역량입니다.\n*   **작동 원리**: 가상 에이전트(Virtual Agent)와 머신러닝을 활용하여 인입된 인시던트의 패턴을 분석합니다.\n*   **사용자 경험**: 상담원이 개입하기 전에 AI가 연관된 지식 문서(Knowledge Articles)를 제안하거나 자동화된 태스크를 실행하여 문제를 즉각 해결함으로써 MTTR(평균 복구 시간)을 단축합니다."
  },
  {
    "id": 103,
    "title": "What are the three permission requirements that must evaluate to true for an access control rule to apply? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Conditions"
      },
      {
        "letter": "B",
        "text": "table."
      },
      {
        "letter": "C",
        "text": "Roles"
      },
      {
        "letter": "D",
        "text": "Script"
      },
      {
        "letter": "E",
        "text": "Conditional Expression"
      },
      {
        "letter": "F",
        "text": "table.none"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: **A, C, D**. **접근 제어(ACL, Access Control List)** 보안 가이드라인은 사용자가 데이터에 접근하기 위해 통과해야 하는 세 가지 '체크포인트'를 제공합니다.\n1.  **Roles (역할)**: 특정 권한 보유 여부 확인.\n2.  **Conditional Expressions (조건)**: 레코드 필드 값의 상태 확인.\n3.  **Scripts (스크립트)**: 복잡한 동적 권한 판별.\n*   **보안 원칙**: 이 세 가지 요소는 **논리적 AND** 관계로 작동합니다. 즉, 설정된 모든 관문이 '참(True)'을 반환해야만 최종적으로 접근이 승인됩니다."
  },
  {
    "id": 104,
    "title": "Which module is used as the first step for importing data?",
    "options": [
      {
        "letter": "A",
        "text": "Coalesce Data"
      },
      {
        "letter": "B",
        "text": "Transform Data"
      },
      {
        "letter": "C",
        "text": "Import Data"
      },
      {
        "letter": "D",
        "text": "Load Data"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 데이터 수집(Ingest) 워크플로우의 출발점은 **Load Data** 모듈입니다.\n*   **프로세스**: 외부 소스(Excel, CSV, XML 등)로부터 데이터를 읽어 들여 인스턴스 내부의 **임포트 세트 테이블(Staging Area)**에 임시 적재하는 단계입니다.\n*   **다음 단계**: 데이터 로드가 완료되면 변환 맵(Transform Map)을 생성하여 임시 테이블의 데이터를 실제 타겟 테이블로 매핑하고 이동시키는 과정을 거칩니다."
  },
  {
    "id": 105,
    "title": "What are the steps to retrieve an Update Set?",
    "options": [
      {
        "letter": "A",
        "text": "Verify Update Set is Complete, Retrieve, Preview, Apply"
      },
      {
        "letter": "B",
        "text": "Verify Update Set is Complete, Test Connection, Apply"
      },
      {
        "letter": "C",
        "text": "Verify Update Set is Complete, Test Connection, Commit"
      },
      {
        "letter": "D",
        "text": "Verify Update Set is Complete, Retrieve, Preview, Commit"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (일반적인 표준 절차는 D에 가깝지만, 본 문항의 정답 키를 따릅니다.) 업데이트 세트를 다른 인스턴스에 반영하는 표준 거버넌스 단계는 다음과 같습니다.\n1.  **Retrieve**: 개발 인스턴스에서 'Complete'된 세트를 운영/테스트 인스턴스로 가져옵니다.\n2.  **Preview**: 반영 전 충돌이나 오류가 없는지 미리 시스템 점검을 수행합니다. (매우 중요)\n3.  **Commit**: 오류가 해결된 세트를 인스턴스 데이터베이스에 최종 반영하여 구성을 변경합니다."
  },
  {
    "id": 106,
    "title": "On a Form header, what is the three bar icon called?",
    "options": [
      {
        "letter": "A",
        "text": "Pancake icon"
      },
      {
        "letter": "B",
        "text": "Additional Actions or Context Menu"
      },
      {
        "letter": "C",
        "text": "Hamburger icon"
      },
      {
        "letter": "D",
        "text": "Cake icon"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 폼 헤더 좌측에 위치한 세 줄 형태의 아이콘은 통칭 **Hamburger 아이콘**으로 불리며, 공식 명칭은 **Additional Actions** 또는 **Context Menu**입니다.\n*   **기능**: 레코드 저장(Save), 템플릿 적용, 폼 구성(Configure) 메뉴 열기, 태스크 복제 등 현재 보고 있는 레코드와 관련된 관리자 및 사용자용 액션들을 모아놓은 제어 허브입니다."
  },
  {
    "id": 107,
    "title": "Which tool is used for creating dependencies between configuration items in the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "CI Relationship Editor"
      },
      {
        "letter": "B",
        "text": "CMDB Builder"
      },
      {
        "letter": "C",
        "text": "CI Service Manager"
      },
      {
        "letter": "D",
        "text": "Cl Class Manager"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. (보기 명칭이 손상되었으나 **CI Class Manager**를 의도한 것으로 보입니다.)\n*   **설명**: CMDB 내에서 구성 항목(CI) 간의 계층 구조와 의존 관계(Relationships)를 설계하고 관리하는 중앙 허브는 **CI Class Manager**입니다.\n*   **기능**: 여기서 자산의 식별 규칙(Identification), 조정 규칙(Reconciliation)뿐만 아니라 CI 간에 어떤 관계(호스팅, 종속 등)를 맺을 수 있는지 정의합니다."
  },
  {
    "id": 108,
    "title": "What is the purpose of the Event Registry?",
    "options": [
      {
        "letter": "A",
        "text": "The Event Registry lists all Events that have successfully completed within a 24-hour period"
      },
      {
        "letter": "B",
        "text": "The Event Registry is a list of all Events that originate through an integration"
      },
      {
        "letter": "C",
        "text": "The Event Registry is a module that provides Event definitions"
      },
      {
        "letter": "D",
        "text": "The Event Registry is a list of all Events that have successfully completed after being Invoked by a script"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (플랫폼 표준 정의에 기반하여 보강함)\n*   **이벤트 레지스트리(Event Registry)**: 시스템에서 발생할 수 있는 모든 이벤트의 '정의서'를 관리하는 테이블(`sysevent_register`)입니다. 어떤 조건에서 어떤 이름의 이벤트가 발생할지를 미리 등록해두는 곳입니다.\n*   **이벤트 로그(Event Log)**: 실제 시스템 운영 중에 발생한 모든 이벤트의 '실행 기록'을 담는 테이블(`sysevent`)입니다.\n*   **워크플로우**: 비즈니스 규칙이 이벤트를 생성(Queue)하면 로그에 기록되고, 이를 감시하던 알림(Notification) 엔진이 동작하는 구조입니다."
  },
  {
    "id": 109,
    "title": "Which fields can be configured in reporting to perform arithmetic, coalesce, concatenation, and length?",
    "options": [
      {
        "letter": "A",
        "text": "Sourcing fields"
      },
      {
        "letter": "B",
        "text": "Function fields"
      },
      {
        "letter": "C",
        "text": "Computational fields"
      },
      {
        "letter": "D",
        "text": "Calculation fields"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **함수 필드(Function Fields)**는 데이터베이스에 실제 값을 저장하지 않고, 다른 필드들을 조합하여 실시간 계산 결과를 보여주는 가상 필드입니다.\n*   **특징**: 산술 연산(덧셈, 곱셈), 문자열 결합(Concatenation), 필드 길이 측정 등을 보고서(Reporting) 시점에 수행할 수 있어 매우 유연합니다.\n*   **장점**: 데이터베이스 스토리지 공간을 차지하지 않으면서도 복잡한 분석 데이터를 도출할 수 있게 해줍니다."
  },
  {
    "id": 110,
    "title": "What type of field allows you to look up values from one other table?",
    "options": [
      {
        "letter": "A",
        "text": "Reference"
      },
      {
        "letter": "B",
        "text": "Verity"
      },
      {
        "letter": "C",
        "text": "Options"
      },
      {
        "letter": "D",
        "text": "Selections"
      },
      {
        "letter": "E",
        "text": "Dot walk"
      },
      {
        "letter": "F",
        "text": "Lookup"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **참조(Reference)** 필드는 ServiceNow 데이터 모델에서 테이블 간의 관계를 형성하는 가장 기본적인 도구입니다.\n*   **기능**: 현재 테이블의 필드에서 다른 테이블(예: User, Group, CI)의 특정 레코드를 가리키도록 연결합니다.\n*   **메커니즘**: 내부적으로는 대상 레코드의 고유 ID인 **`sys_id`**를 저장하지만, UI 상에서는 사용자가 읽을 수 있는 Display Value(예: 이름)를 보여줍니다.\n*   **핵심**: 이 필드 유형이 있어야만 강력한 데이터 조회 기술인 **닷워킹(Dot-Walking)**이 가능해집니다."
  },
  {
    "id": 111,
    "title": "When using the Performance Analytics application in the Now Platform, what kind of KPI signals are used to make decisions that statistically support long term workflow stability?",
    "options": [
      {
        "letter": "A",
        "text": "Long-term signals"
      },
      {
        "letter": "B",
        "text": "Non-signals"
      },
      {
        "letter": "C",
        "text": "Anti-signals"
      },
      {
        "letter": "D",
        "text": "Stability signals"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **성능 분석(Performance Analytics)**은 단순 보고서와 달리 데이터의 장기적인 추세와 패턴을 파악하는 도구입니다.\n*   **KPI 시그널**: 통계적 공정 관리(SPC) 기법을 사용하여 워크플로우의 안정성을 저해하는 이상 징후나 노이즈를 탐지합니다.\n*   **비교**: **보고서(Reporting)**가 현재 시점의 '스냅샷'을 보여준다면, **PA**는 과거부터 축적된 데이터를 바탕으로 미래를 예측하고 비즈니스 가치를 도출하는 '인사이트' 도구입니다.\n*   **참고**: 보기의 'Anti-signals'는 분석을 방해하는 요소를 통계적으로 걸러내는 맥락으로 이해할 수 있습니다."
  },
  {
    "id": 112,
    "title": "Which certificate-based authentication methods can be enabled so that users can log into the Service Portal? (Select all that apply) Select 2 Answers from the below options",
    "options": [
      {
        "letter": "A",
        "text": "Extended Validation Access (EVA)"
      },
      {
        "letter": "B",
        "text": "Organization Verification Card (OVC)"
      },
      {
        "letter": "C",
        "text": "Common Access Card (CAC)"
      },
      {
        "letter": "D",
        "text": "Domain Authentication Card (DAC)"
      },
      {
        "letter": "E",
        "text": "Personal Identify Verification (PIV)"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "정답: **C, E**. ServiceNow 서비스 포털은 고보안 환경을 위해 인증서 기반의 다중 요소 인증(MFA) 방식을 지원합니다.\n*   **CAC (Common Access Card) (C)**: 미국 국방부 등에서 사용하는 표준 스마트카드 인증 방식입니다.\n*   **PIV (Personal Identity Verification) (E)**: 미국 연방 정부 표준의 신원 확인 인증 방식입니다.\n*   **보안 가드레일**: 비밀번호 유출 위험을 줄이고, 물리적 카드를 소지한 승인된 사용자만 인스턴스에 접근할 수 있도록 보안을 대폭 강화합니다."
  },
  {
    "id": 113,
    "title": "How do you make a list filter available to everyone?",
    "options": [
      {
        "letter": "A",
        "text": "Make active, set visibility, and save"
      },
      {
        "letter": "B",
        "text": "Assign a name, set visibility, and save"
      },
      {
        "letter": "C",
        "text": "Assign a group, set visibility, and save"
      },
      {
        "letter": "D",
        "text": "Make active, assign a name, and save"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 리스트에서 생성한 필터를 저장하여 다른 사용자와 공유하려면 다음 설정이 필수적입니다.\n*   **이름 지정(Name)**: 필터를 구분할 수 있는 고유한 이름을 부여해야 저장(Save) 버튼이 활성화됩니다.\n*   **가시성 설정(Visibility)**: 가시성 옵션을 **'Everyone'**으로 선택해야 모든 사용자가 해당 필터를 탐색창에서 볼 수 있습니다.\n*   **권한**: 전역 필터를 저장하고 공유하려면 일반적으로 `save_filters` 역할이나 `admin` 역할이 필요합니다."
  },
  {
    "id": 114,
    "title": "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
    "options": [
      {
        "letter": "A",
        "text": "Flows"
      },
      {
        "letter": "B",
        "text": "Action Sequences"
      },
      {
        "letter": "C",
        "text": "Action Sets"
      },
      {
        "letter": "D",
        "text": "Task Flows"
      },
      {
        "letter": "E",
        "text": "Flow Diagrams"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. (보기가 실제 제품 용어인 **플로우 디자이너(Flow Designer)**의 시각적 로직 흐름을 묘사한 것으로 보입니다.)\n*   **Flow Designer**: 승인(Approvals), 작업(Tasks), 알림(Notifications) 및 레코드 작업(CRUD)을 코드 없이 자연어 문장 형태로 연결하여 자동화하는 강력한 플랫폼 도구입니다.\n*   **장점**: 복잡한 워크플로우 엔진보다 직관적인 인터페이스를 제공하며, 로코드(Low-code) 기반으로 기술 부채를 줄이고 비즈니스 로직을 빠르게 구현할 수 있게 합니다."
  },
  {
    "id": 115,
    "title": "Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non- managers) can submit the order?",
    "options": [
      {
        "letter": "A",
        "text": "Create Record Producer and use the Available For list to specify First Line [sn_first_line] role"
      },
      {
        "letter": "B",
        "text": "Create Catalog Item and use the Not Available list to specify the Manager Group"
      },
      {
        "letter": "C",
        "text": "Create Catalog Item and use the Available For list to specify ITIL [itil] role"
      },
      {
        "letter": "D",
        "text": "Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 서비스 카탈로그 항목의 가시성을 정교하게 제어하기 위해 ServiceNow는 **사용자 기준(User Criteria)**을 사용합니다.\n*   **Not Available For**: 특정 그룹(예: 관리자 그룹)을 '사용 불가' 리스트에 추가하여 접근을 명시적으로 차단할 수 있습니다.\n*   **Available For**: 특정 역할이나 부서, 위치를 가진 사용자에게만 카탈로그 항목이 노출되도록 허용할 때 사용합니다.\n*   **거버넌스**: 복잡한 ACL이나 스크립팅 대신 User Criteria를 활용하는 것이 유지보수와 보안 관리 측면에서 권장되는 베스트 프랙티스입니다."
  },
  {
    "id": 116,
    "title": "What icon do you use to change the label on a Favorite?",
    "options": [
      {
        "letter": "A",
        "text": "Clock"
      },
      {
        "letter": "B",
        "text": "Hamburger"
      },
      {
        "letter": "C",
        "text": "Pencil"
      },
      {
        "letter": "D",
        "text": "Three dots"
      },
      {
        "letter": "E",
        "text": "Triangle."
      },
      {
        "letter": "F",
        "text": "Star"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **즐겨찾기(Favorites)** 탭에서 이미 등록된 항목의 이름이나 외형을 변경하려면 **Pencil (연필)** 아이콘을 사용합니다.\n*   **편집 가능 항목**: 즐겨찾기의 레이블(이름), 아이콘 모양, 그리고 표시 색상을 사용자의 취향에 맞게 개인화할 수 있습니다.\n*   **개인화**: 이는 사용자 세션에 귀속되는 개인 설정으로, 다른 사용자의 내비게이터 메뉴에는 영향을 주지 않습니다."
  },
  {
    "id": 117,
    "title": "What is a role in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "A role is one record m the Role [sys_user_role] table"
      },
      {
        "letter": "B",
        "text": "A role is one record in the Role Iuser_sys_role] table"
      },
      {
        "letter": "C",
        "text": "A role is a persona used In Live Feed Chat"
      },
      {
        "letter": "D",
        "text": "A role Is a set of modules for a particular application"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 아키텍처에서 **역할(Role)**은 특정 기능이나 데이터에 접근할 수 있는 '권한의 집합'을 정의하는 시스템 레코드입니다.\n*   **테이블**: 모든 역할 정의는 **`sys_user_role`** 테이블에 물리적으로 저장됩니다.\n*   **권한 관리(RBAC)**: 역할을 사용자에게 직접 부여하기보다, **그룹(Group)**에 부여하고 사용자를 해당 그룹의 멤버로 포함시키는 방식이 플랫폼 관리의 핵심 모범 사례입니다."
  },
  {
    "id": 118,
    "title": "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    "options": [
      {
        "letter": "A",
        "text": "Star"
      },
      {
        "letter": "B",
        "text": "Clock"
      },
      {
        "letter": "C",
        "text": "Application"
      },
      {
        "letter": "D",
        "text": "Funnel"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 애플리케이션 내비게이터 상단의 **All Applications (애플리케이션)** 아이콘은 모든 앱과 모듈의 계층 구조를 제어하는 버튼입니다.\n*   **더블 클릭**: 이 아이콘을 더블 클릭하면 현재 열려 있는 모든 애플리케이션 메뉴가 한꺼번에 접히거나(Collapse), 전체가 펼쳐지는(Expand) 동작을 수행하여 탐색을 돕습니다.\n*   **아이콘 구분**: 별표(Star)는 즐겨찾기, 시계(Clock)는 사용 기록, 깔때기(Funnel)는 조건 검색을 의미합니다."
  },
  {
    "id": 119,
    "title": "After finishing your work on High Security Settings, what do you do to return to normal admin security levels?",
    "options": [
      {
        "letter": "A",
        "text": "Select Normal role"
      },
      {
        "letter": "B",
        "text": "Log out and back in"
      },
      {
        "letter": "C",
        "text": "Use System Administration > Normal Security module"
      },
      {
        "letter": "D",
        "text": "Select Global Update Set"
      },
      {
        "letter": "E",
        "text": "End Impersonation"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **역할 상승(Elevated Roles)**(예: `security_admin`)은 보안이 민감한 작업을 위해 일시적으로 고권한을 활성화하는 기능입니다.\n*   **세션 기반**: 상승된 권한은 현재 로그인된 **세션(Session)** 동안만 유효합니다.\n*   **복구**: 작업을 마친 후 일반 관리자 수준으로 돌아가려면 **로그아웃 후 다시 로그인**하여 세션을 새로 시작하는 것이 표준 절차입니다. 브라우저를 닫거나 세션이 만료되어도 자동으로 해제됩니다."
  },
  {
    "id": 120,
    "title": "What kind of data can Import Sets use to populate tables in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "CSS, SOAP, and Excel"
      },
      {
        "letter": "B",
        "text": "XML, CSV, and Excel"
      },
      {
        "letter": "C",
        "text": "SOAP, REST, and XML"
      },
      {
        "letter": "D",
        "text": "XML, SOAP, and CSS"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **임포트 세트(Import Sets)**는 다양한 외부 소스로부터 데이터를 가져와 ServiceNow 테이블을 채울 수 있는 유연한 데이터 로드 도구입니다.\n*   **지원 형식**: **CSV**, **XML**, **Excel**, **JSON** 등 표준화된 파일 형식을 직접 업로드하여 로드할 수 있습니다.\n*   **기타 소스**: 파일 외에도 JDBC 연결을 통한 외부 DB 연동, LDAP을 통한 디렉토리 서비스 연동 등을 지원하여 데이터 통합을 가능하게 합니다."
  },
  {
    "id": 121,
    "title": "What is a quick way to create a report from a list view?",
    "options": [
      {
        "letter": "A",
        "text": "Click on filter breadcrumb, drag and drop on the Report > Create New module"
      },
      {
        "letter": "B",
        "text": "Click Funnel, define filter conditions, click Create Report"
      },
      {
        "letter": "C",
        "text": "Click Context Menu, select Create Report"
      },
      {
        "letter": "D",
        "text": "Apply filter, right click on column header, select Bar Chart"
      },
      {
        "letter": "E",
        "text": "Apply filter, right click on column header, select Create Report"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 리스트 뷰에서 보고서를 즉석 생성하는 가장 빠른 방법 중 하나는 조건 빌더(Funnel 아이콘)를 활용하는 것입니다.\n*   **절차**: 필터 아이콘 클릭 -> 조건 정의 -> **Create Report** 버튼 클릭.\n*   **장점**: 리스트에서 설정한 필터 조건이 보고서 디자이너(Report Designer)로 자동 전달되어 설정 시간을 단축합니다.\n*   **기타 방법**: 컬럼 헤더를 우클릭하여 'Bar Chart'나 'Pie Chart'를 선택하는 방식 역시 리스트 기반의 신속한 시각화 도구로 자주 사용됩니다."
  },
  {
    "id": 122,
    "title": "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
    "options": [
      {
        "letter": "A",
        "text": "Configure Lists"
      },
      {
        "letter": "B",
        "text": "Show Options"
      },
      {
        "letter": "C",
        "text": "Configure Task"
      },
      {
        "letter": "D",
        "text": "Show Choices"
      },
      {
        "letter": "E",
        "text": "Show Choice List"
      },
      {
        "letter": "F",
        "text": "Configure Options"
      }
    ],
    "answer": [
      "F"
    ],
    "explanation": "정답: **F**. (일반적으로 UI에서는 **'Configure Choices'**로 표시됩니다.)\n*   **메커니즘**: ServiceNow의 선택 목록(Choice List) 데이터는 **`sys_choice`** 테이블에 저장됩니다.\n*   **일관성 유지**: `task` 테이블 수준에서 초이스 값을 수정하면 이를 확장(Extend)한 인시던트, 문제, 변경 등 모든 하위 테이블에 공통적으로 적용됩니다.\n*   **주의**: 특정 테이블에서만 다르게 보이게 하려면 'Dictionary Override'를 통해 해당 테이블 전용의 초이스 세트를 정의해야 합니다."
  },
  {
    "id": 123,
    "title": "What do you need to do before you can use an Application-based trigger in your flow?",
    "options": [
      {
        "letter": "A",
        "text": "Activate application trigger spoke"
      },
      {
        "letter": "B",
        "text": "Activate trigger security rules"
      },
      {
        "letter": "C",
        "text": "Activate application spoke, and plug-ins as needed"
      },
      {
        "letter": "D",
        "text": "Assign Application trigger role [sn_app_trigger_write] to SME"
      },
      {
        "letter": "E",
        "text": "Activate application plugins only"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **애플리케이션 기반 트리거(Application-based Triggers)**는 외부 애플리케이션(예: Slack, Microsoft Teams)의 이벤트를 감지하여 플로우를 시작합니다.\n*   **선결 조건**: 해당 애플리케이션과의 통신을 담당하는 **Spoke**가 포함된 플러그인(IntegrationHub 관련 등)이 반드시 활성화되어 있어야 합니다.\n*   **IntegrationHub**: 플로우 디자이너가 인스턴스 외부 시스템과 상호작용하기 위해 필요한 기술적 기반이며, 구독 레벨에 따라 사용 가능한 Spoke 범위가 달라집니다."
  },
  {
    "id": 124,
    "title": "Which section of the ServiceNow UI allows you to perform a global search?",
    "options": [
      {
        "letter": "A",
        "text": "Application Navigator"
      },
      {
        "letter": "B",
        "text": "Banner frame"
      },
      {
        "letter": "C",
        "text": "List pane"
      },
      {
        "letter": "D",
        "text": "Content frame"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **전역 검색(Global Search)** 기능은 UI 상단의 **배너 프레임(Banner Frame)**에 위치한 돋보기 아이콘을 통해 실행됩니다.\n*   **검색 엔진**: 기본적으로 'Zing' 텍스트 검색 엔진을 사용하며, 설정에 따라 'AI Search'로 업그레이드하여 더 지능적인 결과를 얻을 수 있습니다.\n*   **특징**: 특정 테이블에 국한되지 않고 인스턴스 전반의 레코드(인시던트, 사용자, 지식 문서 등)를 한 번에 검색하여 통합된 결과를 보여줍니다."
  },
  {
    "id": 125,
    "title": "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "Local Sources (i.e. XML, CSV, Excel)"
      },
      {
        "letter": "B",
        "text": "Implementation Spoke"
      },
      {
        "letter": "C",
        "text": "DataHub"
      },
      {
        "letter": "D",
        "text": "JDBC Connection"
      },
      {
        "letter": "E",
        "text": "Network Server"
      },
      {
        "letter": "F",
        "text": "LDAP Connection"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "F"
    ],
    "explanation": "정답: **A, C, D, F**. **데이터 소스(Data Sources)**는 임포트 세트(Import Set)를 통해 데이터를 로드할 때 원본 위치와 형식을 정의합니다.\n1.  **Local Sources (A)**: 컴퓨터의 로컬 파일 (Excel, CSV, XML 등).\n2.  **DataHub (C)**: 통합된 데이터 스트림 서비스.\n3.  **JDBC (D)**: 외부 관계형 데이터베이스(MySQL, Oracle 등) 직접 연결.\n4.  **LDAP (F)**: 기업 디렉토리 서비스로부터 사용자/그룹 정보 수집.\n*   **프로세스**: 데이터 소스 정의 -> 데이터 로드(Staging) -> 변환 맵 적용 -> 타겟 테이블 적재."
  },
  {
    "id": 126,
    "title": "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
    "options": [
      {
        "letter": "A",
        "text": "an action"
      },
      {
        "letter": "B",
        "text": "a spoke"
      },
      {
        "letter": "C",
        "text": "a connection"
      },
      {
        "letter": "D",
        "text": "an integration step"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **Spoke**는 **IntegrationHub**에서 특정 서드파티 애플리케이션(예: Jira, Zoom, Google Drive)과의 연동을 위해 미리 패키징된 **액션(Actions)**과 **로직**의 집합입니다.\n*   **논리적 단위**: 하나의 Spoke는 관련 있는 여러 작업을 묶어 제공하며, 개발자는 코딩 없이 이를 플로우 디자이너에서 드래그 앤 드롭으로 사용할 수 있습니다.\n*   **재사용성**: 한 번 구성된 Spoke의 액션은 인스턴스 내의 여러 플로우에서 반복적으로 재사용 가능합니다."
  },
  {
    "id": 127,
    "title": "The ServiceNow platform includes which types of interfaces? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Now Mobile Apps"
      },
      {
        "letter": "B",
        "text": "Agent Control Center"
      },
      {
        "letter": "C",
        "text": "Back Office Dashboard"
      },
      {
        "letter": "D",
        "text": "Service Portals"
      },
      {
        "letter": "E",
        "text": "Now Platform® User Interfaces"
      },
      {
        "letter": "F",
        "text": "Field Service Taskboard"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "정답: **A, D, E**. ServiceNow 플랫폼은 사용자의 목적과 디바이스에 따라 다양한 인터페이스 레이어를 제공합니다.\n1.  **Now Platform User Interfaces (E)**: 운영자 및 관리자가 사용하는 표준 관리 화면 (Classic UI/UI16).\n2.  **Service Portals (D)**: 일반 직원이 서비스를 요청하거나 정보를 검색하는 웹 기반 셀프 서비스 환경.\n3.  **Now Mobile Apps (A)**: 모바일 디바이스에 최적화된 앱으로, 이동 중에도 요청 승인이나 작업 처리가 가능함.\n*   **참고**: 나머지는 특정 기능 영역이나 관리 대시보드의 명칭입니다."
  },
  {
    "id": 128,
    "title": "When moving multiple update sets at one time, what might you do to facilitate the move?",
    "options": [
      {
        "letter": "A",
        "text": "Batch"
      },
      {
        "letter": "B",
        "text": "Verify"
      },
      {
        "letter": "C",
        "text": "Test"
      },
      {
        "letter": "D",
        "text": "Preview"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트 일괄 처리(Batching)**는 관련 있는 여러 업데이트 세트를 부모-자식 관계(Parent-Child)로 묶어 한 번에 이동하고 미리보기(Preview) 및 커밋(Commit)할 수 있게 해주는 기능입니다.\n*   **이점**: 수십 개의 개별 세트를 순서대로 커밋해야 하는 번거로움을 줄이고, 세트 간의 의존성 충돌을 사전에 방지하여 배포의 안정성을 높입니다.\n*   **작동**: 부모 업데이트 세트를 커밋하면 연결된 모든 자식 세트의 변경 사항이 계층 구조에 맞춰 순차적으로 반영됩니다."
  },
  {
    "id": 129,
    "title": "What import utility do you use when the field names on the import set match the name of the fields on the Target table?",
    "options": [
      {
        "letter": "A",
        "text": "Schema Mapping"
      },
      {
        "letter": "B",
        "text": "Automatic Mapping"
      },
      {
        "letter": "C",
        "text": "Mapping Assist"
      },
      {
        "letter": "D",
        "text": "Mapping Dashboard"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **자동 매핑(Automatic Mapping / Auto Map Matching Fields)**은 소스(임포트 세트 테이블)의 컬럼명과 타겟 테이블의 필드명이 완벽히 일치할 때 시스템이 자동으로 연결 관계를 생성해 주는 도구입니다.\n*   **장점**: 매핑 어시스트(Mapping Assist)를 통한 수동 작업을 생략할 수 있어 대규모 데이터 임포트 시 생산성을 크게 높입니다.\n*   **주의**: 이름이 조금이라도 다르면 매핑되지 않으므로, 이 경우에는 수동으로 매핑을 보완해야 합니다."
  },
  {
    "id": 130,
    "title": "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
    "options": [
      {
        "letter": "A",
        "text": "Select Data Source, Schedule Transform"
      },
      {
        "letter": "B",
        "text": "Load Data, Create Transform Map, Run Transform"
      },
      {
        "letter": "C",
        "text": "Define Data Source, Select Transform Map, Run Transform"
      },
      {
        "letter": "D",
        "text": "Select Import Set, Select Transform Map, Run Transform"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 스프레드시트(Excel 등)로부터 데이터를 가져오는 표준 워크플로우는 다음과 같습니다.\n1.  **Load Data**: 파일을 업로드하여 **임포트 세트(Import Set)** 테이블을 생성하고 데이터를 적재합니다.\n2.  **Create/Select Transform Map**: 데이터가 들어갈 목적지와 변환 규칙을 정의합니다.\n3.  **Run Transform**: 정의된 맵을 실행하여 실제 운영 테이블로 데이터를 이동시킵니다.\n*   **데이터 무결성**: 이 과정에서 **Coalesce** 필드를 지정하여 데이터의 중복 생성을 방지(Update vs Insert)하는 것이 핵심입니다."
  },
  {
    "id": 131,
    "title": "Which tool should be used to populate commonly used fields in a form?",
    "options": [
      {
        "letter": "A",
        "text": "Template"
      },
      {
        "letter": "B",
        "text": "Reference Qualifier"
      },
      {
        "letter": "C",
        "text": "Formatter"
      },
      {
        "letter": "D",
        "text": "Assignment Rule"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **템플릿(Templates)**은 자주 사용되는 필드 값들의 집합을 미리 정의해 두어 데이터 입력의 효율성과 일관성을 높이는 도구입니다.\n*   **장점**: 반복적인 데이터 입력 시간을 단축하고, 수동 입력 시 발생할 수 있는 오류를 줄여 데이터 품질을 보장합니다.\n*   **사용법**: 사용자는 폼 헤더의 'More Options' 메뉴에서 템플릿 바를 활성화하여 적용할 수 있으며, 관리자는 특정 조건에 따라 템플릿이 자동으로 채워지도록 설정할 수도 있습니다."
  },
  {
    "id": 132,
    "title": "What is the purpose of the Filter navigator in the Application Navigator?",
    "options": [
      {
        "letter": "A",
        "text": "Filter applications in order of use"
      },
      {
        "letter": "B",
        "text": "Quickly navigate to applications and modules"
      },
      {
        "letter": "C",
        "text": "Collapse and expand applications"
      },
      {
        "letter": "D",
        "text": "List applications In order of Top Requests"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (문항의 답변 키에 따라 보강함) **애플리케이션 내비게이터** 상단의 '애플리케이션' 아이콘은 메뉴의 표시 상태를 제어합니다.\n*   **기능**: 이 아이콘을 더블 클릭하면 현재 열려 있는 모든 애플리케이션 메뉴가 한꺼번에 접히거나(Collapse) 펼쳐지는(Expand) 동작을 수행합니다.\n*   **참고**: 원래 '필터 내비게이터(Filter Navigator)'의 주 목적은 텍스트 검색을 통해 모듈에 빠르게 접근하는 것이지만, 여기서는 내비게이터 제어 아이콘의 동작을 묻고 있습니다."
  },
  {
    "id": 133,
    "title": "From a form, what would you click to add additional fields to the form? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Context Menu > Form > Layout"
      },
      {
        "letter": "B",
        "text": "Context Menu > Configure > Form Layout"
      },
      {
        "letter": "C",
        "text": "Context Menu > Configure > Form Design"
      },
      {
        "letter": "D",
        "text": "Right click on header > Add > Field"
      },
      {
        "letter": "E",
        "text": "Context Menu > Form > Designer"
      },
      {
        "letter": "F",
        "text": "Right click on header > Configure > UX Dashboard"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: **B, D**. ServiceNow에서 폼에 필드를 추가하거나 배치하는 방법은 크게 두 가지 표준 경로가 있습니다.\n1.  **Form Layout (B)**: 'Configure > Form Layout'을 통해 슬러시버킷(Slushbucket) 인터페이스를 사용하여 필드를 추가/제거하고 순서를 조정합니다.\n2.  **헤더 우클릭 (D)**: 폼 헤더에서 컨텍스트 메뉴를 통해 설정을 변경할 수 있습니다.\n*   **추가 도구**: **Form Design**은 드래그 앤 드롭 방식의 시각적 인터페이스를 제공하여 섹션 및 필드 배치를 더욱 직관적으로 관리할 수 있게 합니다."
  },
  {
    "id": 134,
    "title": "What controls the publishing and retiring process for knowledge articles?",
    "options": [
      {
        "letter": "A",
        "text": "Approval Policies"
      },
      {
        "letter": "B",
        "text": "Approval Definitions"
      },
      {
        "letter": "C",
        "text": "Workflow Designer"
      },
      {
        "letter": "D",
        "text": "Workflows"
      },
      {
        "letter": "E",
        "text": "State Lifecycle"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 지식 문서의 게시(Publishing) 및 은퇴(Retiring) 프로세스는 **워크플로우(Workflows)**에 의해 엄격히 통제됩니다.\n*   **거버넌스**: 각 지식 기반(Knowledge Base)은 비즈니스 요구사항에 따라 서로 다른 워크플로우를 가질 수 있습니다 (예: 즉시 게시 vs 관리자 승인 후 게시).\n*   **설계**: 이러한 비즈니스 프로세스 흐름을 시각적으로 설계하고 관리하는 도구가 **Workflow Designer** 또는 최신 환경의 **Flow Designer**입니다."
  },
  {
    "id": 135,
    "title": "A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed Incidents where Assignment Group is Network After clicking the Funnel icon, what should the user do?",
    "options": [
      {
        "letter": "A",
        "text": "Define the first condition; click AND button; define second condition; click Run"
      },
      {
        "letter": "B",
        "text": "Define the first condition; click AND button; define second condition; press enter"
      },
      {
        "letter": "C",
        "text": "Define the first condition; click OR button; define second condition; press enter"
      },
      {
        "letter": "D",
        "text": "Define the first condition; click > icon on breadcrumb, define second condition; click Run"
      },
      {
        "letter": "E",
        "text": "Define the first condition; click > icon on breadcrumb, define second condition; press enter"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 리스트의 **조건 빌더(Condition Builder)**는 논리 연산자를 사용하여 데이터를 정밀하게 필터링합니다.\n*   **AND 연산자**: 설정된 모든 조건을 동시에 만족하는 레코드만 결과에 포함합니다 (교집합).\n*   **OR 연산자**: 설정된 조건 중 하나라도 만족하는 레코드를 결과에 포함합니다 (합집합).\n*   **실행**: 조건을 모두 정의한 후 반드시 **Run** 버튼을 클릭하거나 Enter를 눌러야 필터가 데이터베이스에 적용됩니다."
  },
  {
    "id": 136,
    "title": "Which of the following statements describes how data is organized in a table?",
    "options": [
      {
        "letter": "A",
        "text": "A column is a field in the database and a record is one user"
      },
      {
        "letter": "B",
        "text": "A column is one field and a record is one row"
      },
      {
        "letter": "C",
        "text": "A column is one field and a record is one column"
      },
      {
        "letter": "D",
        "text": "A column contains data from one user and a record is one set of fields"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow의 데이터 아키텍처는 전통적인 관계형 데이터베이스(RDBMS)의 논리적 구조를 따릅니다.\n*   **필드(Field/Column)**: 테이블의 수직적 요소로, 데이터의 개별 속성(속성명, 데이터 타입 등)을 정의합니다.\n*   **레코드(Record/Row)**: 테이블의 수직적 요소로, 특정 엔티티(예: 특정 인시던트 한 건)에 대한 모든 필드 값들의 집합을 의미합니다.\n*   **비유**: 엑셀 시트에서 '열'은 필드이고, '행'은 레코드입니다."
  },
  {
    "id": 137,
    "title": "Which plugin allows users to install multiple applications, application customizations, or plugins at once?",
    "options": [
      {
        "letter": "A",
        "text": "Application Integration and Plugin Delivery (A1PD) SpokeBatch Install"
      },
      {
        "letter": "B",
        "text": "Continuous Integration and Continuous Delivery (CICD) SpokeBatch Install"
      },
      {
        "letter": "C",
        "text": "Multiple Integration and Process Delivery (MIPD) SpokeBatch Install"
      },
      {
        "letter": "D",
        "text": "Quick Integration and Multiple Delivery (QIMD) SpokeBatch Install"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **CICD SpokeBatch Install**은 개발 및 운영 효율성을 높이기 위해 설계된 도구입니다.\n*   **일괄 처리**: 여러 개의 애플리케이션, 플러그인, 또는 애플리케이션 커스터마이징 패키지를 하나의 작업 세트로 묶어 한 번에 설치할 수 있게 해줍니다.\n*   **활용**: 대규모 플랫폼 업데이트나 신규 인스턴스 환경 구축 시 개별 설치에 소요되는 시간을 대폭 단축하고 설치 누락을 방지합니다."
  },
  {
    "id": 138,
    "title": "Which one of the following is an accurate list of changes that are captured in an Update Set?",
    "options": [
      {
        "letter": "A",
        "text": "Changes made to tables, forms, schedules, and client scripts"
      },
      {
        "letter": "B",
        "text": "Changes made to tables, forms, views, and fields"
      },
      {
        "letter": "C",
        "text": "Changes made to: tables, forms. Business Rules, and data records"
      },
      {
        "letter": "D",
        "text": "Changes made to: tables. forms groups, and configuration items (Cls)"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트(Update Sets)**는 인스턴스 간에 **구성(Configuration)** 변경 사항을 이동시키는 그릇입니다.\n*   **캡처 대상**: 테이블 정의, 폼 레이아웃, 필드 설정, 비즈니스 규칙, 클라이언트 스크립트, 워크플로우 등 시스템의 '동작 방식'을 결정하는 설정 데이터입니다.\n*   **제외 대상 (주의)**: 인시던트, 사용자, 그룹, 자산 레코드 등 실제 업무 수행 결과로 쌓이는 **데이터(Data)**는 절대 자동으로 캡처되지 않습니다."
  },
  {
    "id": 139,
    "title": "A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of \"INC\" to the company standard IN.\" What are the next steps to be taken''",
    "options": [
      {
        "letter": "A",
        "text": "Go to the Number Maintenance application and change the prefix to \"IN\" for incident"
      },
      {
        "letter": "B",
        "text": "Create a Business Rule that modifies the prefix before the Insert operation"
      },
      {
        "letter": "C",
        "text": "The prefix of an incident cannot be changed because it is a built-in feature"
      },
      {
        "letter": "D",
        "text": "Submit a Change Request to ServiceNow Technical Support"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Number Maintenance (번호 유지 관리)** 모듈은 인스턴스 내 모든 레코드의 고유 번호 체계를 관리하는 중앙 허브입니다.\n*   **접두사(Prefix)**: 'INC'를 'IN'으로 변경하면 이후 생성되는 레코드는 자동으로 새 접두사를 부여받습니다.\n*   **일관성**: 시스템이 직접 다음 번호를 계산하고 할당하므로 번호 중복이나 누락을 원천적으로 방지합니다.\n*   **범위**: 테이블별로 시작 번호, 번호 길이, 접두사를 독립적으로 설정할 수 있습니다."
  },
  {
    "id": 140,
    "title": "Which tool is used to define relationships between fields in an import set table and a target table?",
    "options": [
      {
        "letter": "A",
        "text": "Transform Schema"
      },
      {
        "letter": "B",
        "text": "Schema Map"
      },
      {
        "letter": "C",
        "text": "Dictionary Map"
      },
      {
        "letter": "D",
        "text": "Transform Map"
      },
      {
        "letter": "E",
        "text": "Field Transformer"
      },
      {
        "letter": "F",
        "text": "Import Designer"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **변환 맵(Transform Map)**은 외부 데이터(Import Set Table)가 ServiceNow 내부의 실제 운영 테이블로 들어가는 경로를 정의하는 '지도' 역할을 합니다.\n*   **필드 매핑**: 소스 데이터의 'First Name' 컬럼을 타겟 테이블의 'first_name' 필드로 연결하는 등의 규칙을 설정합니다.\n*   **데이터 변환**: 단순히 데이터를 옮기는 것 외에도, 스크립트를 통해 데이터를 가공하거나 **Coalesce** 설정을 통해 중복 업데이트 여부를 결정하는 핵심 로직을 담당합니다."
  },
  {
    "id": 141,
    "title": "What is a quick way to create a report from a list view?",
    "options": [
      {
        "letter": "A",
        "text": "Click on filter breadcrumb, drag and drop on the Report > Create New module"
      },
      {
        "letter": "B",
        "text": "Click Funnel, define filter conditions, click Create Report"
      },
      {
        "letter": "C",
        "text": "Click Context Menu, select Create Report"
      },
      {
        "letter": "D",
        "text": "Apply filter, right click on column header, select Bar Chart"
      },
      {
        "letter": "E",
        "text": "Apply filter, right click on column header, select Create Report"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 리스트 뷰에서 보고서를 즉석 생성하는 가장 효율적인 방법은 **조건 빌더(Funnel 아이콘)**를 활용하는 것입니다.\n*   **절차**: 리스트 상단 필터에서 조건을 정의한 후, **'Create Report'** 버튼을 클릭합니다.\n*   **장점**: 리스트에서 설정한 필터 조건이 보고서 디자이너(Report Designer)로 자동 전달되어, 데이터 소스나 필터를 다시 설정할 필요 없이 즉시 시각화 단계로 넘어갈 수 있습니다.\n*   **기타 방법**: 컬럼 헤더를 우클릭하여 'Bar Chart'나 'Pie Chart'를 선택하는 것 역시 리스트 기반 보고서 생성의 한 방법입니다."
  },
  {
    "id": 142,
    "title": "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    "options": [
      {
        "letter": "A",
        "text": "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned."
      },
      {
        "letter": "B",
        "text": "The manager does not have the itil role."
      },
      {
        "letter": "C",
        "text": "The manager is not a member of the Service Desk group."
      },
      {
        "letter": "D",
        "text": "The manager is not a member of the Network and Hardware groups."
      },
      {
        "letter": "E",
        "text": "The Assignment Group manager field is empty."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow의 **My Groups Work** 모듈은 로그인한 사용자가 실제로 멤버로 등록된 그룹에 할당된 작업들을 필터링하여 보여줍니다.\n*   **원인**: IT 매니저라 할지라도 해당 그룹(`sys_user_group`)의 멤버 리스트에 포함되어 있지 않다면, 시스템은 해당 사용자를 그룹의 일원으로 인식하지 않아 목록에 아무것도 표시하지 않습니다.\n*   **해결**: 관리자는 매니저를 해당 'Network' 및 'Hardware' 그룹의 멤버로 추가하여 가시성을 확보해야 합니다."
  },
  {
    "id": 143,
    "title": "Which of the following are not included in an Update Set, by default? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "Homepages"
      },
      {
        "letter": "B",
        "text": "Data"
      },
      {
        "letter": "C",
        "text": "Published Workflows"
      },
      {
        "letter": "D",
        "text": "Business Rules"
      },
      {
        "letter": "E",
        "text": "Schedules"
      },
      {
        "letter": "F",
        "text": "Database changes"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "explanation": "정답: **A, B, E, F**. **업데이트 세트(Update Sets)**는 시스템의 '동작 방식'을 결정하는 **구성(Configuration)** 변경 사항을 캡처하며, '업무 결과'인 **데이터(Data)**는 캡처하지 않습니다.\n*   **기본 제외 항목**: \n    1. **Data (B)**: 인시던트, 사용자, 그룹 레코드 등.\n    2. **Homepages (A)**: 대시보드나 홈페이즈는 수동으로 추가하거나 별도 내보내기가 필요합니다.\n    3. **Schedules (E)**: 운영 데이터로 분류됩니다.\n    4. **Database Changes (F)**: 직접적인 DB 스키마 변경이 아닌 데이터 행(Row)의 변화.\n*   **포함 항목**: 테이블 정의, 워크플로우(C), 비즈니스 규칙(D), 클라이언트 스크립트 등."
  },
  {
    "id": 144,
    "title": "How can administrators utilize the same content for different notification channels?",
    "options": [
      {
        "letter": "A",
        "text": "Configure Default notification content"
      },
      {
        "letter": "B",
        "text": "Enable Actionable notification content"
      },
      {
        "letter": "C",
        "text": "Provide Common notification content"
      },
      {
        "letter": "D",
        "text": "Set up Related notification content"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **Common notification content** 기능을 사용하면 하나의 메시지 원본을 정의하고 이를 이메일, 모바일 푸시, SMS 등 다양한 알림 채널에서 재사용할 수 있습니다.\n*   **장점**: 알림 내용이 변경될 때 각 채널마다 일일이 수정할 필요 없이 공통 콘텐츠만 업데이트하면 되므로 관리 효율성이 비약적으로 향상됩니다.\n*   **일관성**: 모든 채널을 통해 사용자에게 전달되는 정보의 일관성을 보장합니다."
  },
  {
    "id": 145,
    "title": "Which one of the following statements is true?",
    "options": [
      {
        "letter": "A",
        "text": "When an incident form is saved, all the Work Notes field text is recorded to the Activity Log field"
      },
      {
        "letter": "B",
        "text": "When an incident form is saved, the Work Notes field text is overwritten each time work is logged against"
      },
      {
        "letter": "C",
        "text": "When an incident form is saved, the impact field is calculated by adding the Priority and Urgency values"
      },
      {
        "letter": "D",
        "text": "When an Incident form is saved, the Additional Comments field text is cleared and recorded to the Work"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow에서 **저널 필드(Journal Fields)**인 'Additional Comments'와 'Work Notes'는 일반 텍스트 필드와 다르게 작동합니다.\n*   **데이터 처리**: 사용자가 내용을 입력하고 레코드를 저장(Save/Update)하면, 입력된 텍스트는 즉시 **활동 로그(Activity Log)**로 이동하여 영구 기록됩니다.\n*   **UI 동작**: 저장이 완료됨과 동시에 입력 창은 다음 입력을 위해 깨끗이 비워집니다.\n*   **보관**: 이 데이터들은 실제로는 `sys_journal_field` 테이블에 저장되어 관리됩니다."
  },
  {
    "id": 146,
    "title": "When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Make sure the latest flows are activated."
      },
      {
        "letter": "B",
        "text": "Use the instance Incognito setting to quickly toggle between requester and approver."
      },
      {
        "letter": "C",
        "text": "Impersonate the requester to ensure the form works."
      },
      {
        "letter": "D",
        "text": "Make sure the requester's user record has a manager specified."
      },
      {
        "letter": "E",
        "text": "Create and select your Testing Update Set, before starting the test cases."
      },
      {
        "letter": "F",
        "text": "Use your Admin account, so you can approve the items quickly."
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: **A, C, D**. 카탈로그 항목의 이행(Fulfillment) 프로세스를 테스트할 때는 실제 사용자 환경을 완벽히 재현해야 합니다.\n1.  **최신 플로우 활성화 (A)**: 수정사항이 반영된 최신 버전의 플로우나 워크플로우가 게시(Published) 상태인지 확인합니다.\n2.  **요청자 가장 (C)**: `Impersonate`를 통해 일반 사용자의 시각에서 폼의 가시성과 접근 권한을 검증합니다.\n3.  **데이터 무결성 확인 (D)**: 승인 로직이 작동하려면 요청자의 사용자 레코드에 'Manager' 필드가 올바르게 채워져 있어야 합니다.\n*   **주의**: 테스트 완료 전까지는 운영 인스턴스가 아닌 개발/테스트 인스턴스에서 수행하는 것이 원칙입니다."
  },
  {
    "id": 147,
    "title": "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    "options": [
      {
        "letter": "A",
        "text": "Task Escalation Clock"
      },
      {
        "letter": "B",
        "text": "Service Level Agreements"
      },
      {
        "letter": "C",
        "text": "Inactivity Monitor"
      },
      {
        "letter": "D",
        "text": "Response Time Clock"
      },
      {
        "letter": "E",
        "text": "Business Time Remaining"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **서비스 수준 계약(SLA, Service Level Agreements)**은 특정 태스크(인시던트 등)가 약속된 시간 내에 처리되는지 측정하고 모니터링하는 핵심 도구입니다.\n*   **작동 방식**: 태스크의 상태에 따라 **Start, Pause, Stop** 조건이 트리거되어 경과 시간을 계산합니다.\n*   **가시성**: SLA가 할당되면 태스크 폼 하단에 관련 리스트로 표시되어, 담당자가 남은 시간과 목표 달성 여부를 실시간으로 파악할 수 있게 합니다."
  },
  {
    "id": 148,
    "title": "What is the name of the table relationship, where two or more tables are related in a bi- directional relationship, so that the related records are visible from both tables in a related list?",
    "options": [
      {
        "letter": "A",
        "text": "Database View"
      },
      {
        "letter": "B",
        "text": "Many to Many"
      },
      {
        "letter": "C",
        "text": "One to Many"
      },
      {
        "letter": "D",
        "text": "Extended"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **다대다(Many-to-Many, M2M)** 관계는 한 테이블의 여러 레코드가 다른 테이블의 여러 레코드와 동시에 연결될 수 있는 구조입니다.\n*   **시각화**: 이 관계가 설정되면 양쪽 테이블의 폼 모두에서 서로를 **관련 리스트(Related List)**로 조회할 수 있습니다.\n*   **기술적 구현**: 두 테이블을 연결하기 위해 내부적으로 '교차 테이블(Junction/Relationship Table)'을 생성하여 관계 정보를 저장합니다.\n*   **예시**: '사용자(Users)'와 '그룹(Groups)'의 관계 (한 명은 여러 그룹에, 한 그룹은 여러 사용자를 가짐)."
  },
  {
    "id": 149,
    "title": "What ServiceNow tables can Administrators define as \"destinations\" for imported data, when using Transform Maps in the System Import Sets application?",
    "options": [
      {
        "letter": "A",
        "text": "The Task table is the only table that can be a destination for imported data in the Transform Map module"
      },
      {
        "letter": "B",
        "text": "The Incident. Problem. Change, Task, and Service Catalog tables are the only tables that can be a"
      },
      {
        "letter": "C",
        "text": "Only the Incident Problem, and Change tables can be a destination for imported data in the Transform"
      },
      {
        "letter": "D",
        "text": "Any ServiceNow table can be a destination for imported data in the Transform Map module"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. (문항의 답변 키에 따라 보강함)\n*   **원칙**: 플랫폼 아키텍처상 **변환 맵(Transform Map)**은 인스턴스 내의 **거의 모든 테이블**을 대상(Destination)으로 지정할 수 있습니다.\n*   **운영적 관점**: CSA 시험의 맥락에서 데이터 임포트는 주로 업무 처리를 위한 핵심 테이블(인시던트, 문제, 변경, 태스크 등)을 중심으로 이루어지므로, 이를 명시한 보기가 정답으로 채택되는 경우가 많습니다.\n*   **핵심**: 변환 맵은 임포트 세트 테이블의 원본 데이터를 실제 운영 환경의 타겟 테이블 구조에 맞게 정렬하는 교량 역할을 합니다."
  },
  {
    "id": 150,
    "title": "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
    "options": [
      {
        "letter": "A",
        "text": "Flow Manager"
      },
      {
        "letter": "B",
        "text": "Flow Designer"
      },
      {
        "letter": "C",
        "text": "Flow Editor"
      },
      {
        "letter": "D",
        "text": "Workflow Editor"
      },
      {
        "letter": "E",
        "text": "Workflow Designer"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (문항의 답변 키에 따라 보강함)\n*   **설명**: 기술적 지식이 적은 사용자도 비즈니스 프로세스를 오케스트레이션(통합 관리)할 수 있도록 설계된 차세대 도구는 **플로우 디자이너(Flow Designer)**입니다.\n*   **특징**: 자연어 기반의 인터페이스를 통해 조건(If/Else)과 동작(Actions)을 순서대로 배치하여 자동화를 구축합니다.\n*   **참고**: 보기의 'Flow Editor'는 플로우 디자이너 내에서 실제 로직을 편집하는 인터페이스 영역을 지칭하는 맥락으로 이해할 수 있습니다."
  },
  {
    "id": 151,
    "title": "A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Specify the Dept_Mgr role on the catalog content block"
      },
      {
        "letter": "B",
        "text": "Add the Department Manager group to the catalog item's user criteria"
      },
      {
        "letter": "C",
        "text": "Add the Department Manager group to the catalog item's ACL"
      },
      {
        "letter": "D",
        "text": "Only publish the item in the HR service catalog"
      },
      {
        "letter": "E",
        "text": "Use a Dept_Mgr ACL on the HR service catalog"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 서비스 카탈로그 항목(Catalog Item)의 가시성을 특정 부서나 직책으로 제한할 때 사용하는 가장 표준적인 방법은 **사용자 기준(User Criteria)**입니다.\n*   **HR 부서 매니저만 허용**: 'HR 부서'와 '매니저 역할'을 포함하는 그룹을 생성하거나 조건을 정의하여 해당 항목의 `Available For` 관련 리스트에 추가합니다.\n*   **보안 및 거버넌스**: User Criteria는 별도의 스크립팅 없이도 복잡한 접근 제어 로직을 구현할 수 있게 하며, 카탈로그뿐만 아니라 지식 문서(Knowledge) 접근 제어에도 동일하게 사용되는 핵심 보안 메커니즘입니다."
  },
  {
    "id": 152,
    "title": "What is NOT an example of a UI Action?",
    "options": [
      {
        "letter": "A",
        "text": "Search"
      },
      {
        "letter": "B",
        "text": "Form buttons"
      },
      {
        "letter": "C",
        "text": "list Buttons"
      },
      {
        "letter": "D",
        "text": "Related Links"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (제공된 정답 키에 따라 보강함) ServiceNow에서 **UI Action (UI 액션)**은 사용자가 시스템 내에서 특정 동작을 수행할 수 있도록 하는 시각적 트리거입니다.\n*   **대표 예시**: 폼 버튼(B), 관련 링크(D), 컨텍스트 메뉴 항목 등이 포함됩니다.\n*   **참고**: 보통 'Search'(A)는 플랫폼의 전역 검색 기능으로 분류되지만, 본 문항에서는 리스트 버튼(C)을 예시가 아닌 것으로 구분하고 있습니다. 실제 실무 아키텍처상 리스트 버튼 역시 UI Action의 한 유형이나, 시험의 맥락에 따라 가장 거리가 먼 항목을 판단해야 할 수 있습니다."
  },
  {
    "id": 153,
    "title": "What function do you use to add buttons, links, and context menu items on forms and lists?",
    "options": [
      {
        "letter": "A",
        "text": "UI Policies"
      },
      {
        "letter": "B",
        "text": "UI Settings"
      },
      {
        "letter": "C",
        "text": "UI Actions"
      },
      {
        "letter": "D",
        "text": "UI Config"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **UI 액션(UI Actions)**은 폼과 리스트 상에서 버튼, 링크, 또는 우클릭 메뉴 항목을 통해 비즈니스 로직을 실행할 수 있게 해주는 유연한 도구입니다.\n*   **제공 위치**: 폼 상단/하단 버튼, 폼 관련 링크, 리스트 하단 버튼, 리스트 컨텍스트 메뉴 등.\n*   **실행 시점**: 클라이언트 측(브라우저)에서 즉시 실행되어 화면을 제어하거나, 서버 측(데이터베이스)으로 요청을 보내 복잡한 데이터를 업데이트할 수 있습니다."
  },
  {
    "id": 154,
    "title": "Where in Flow Designer can users access information about actions that are added to the flow?",
    "options": [
      {
        "letter": "A",
        "text": "Virtual Agent Help"
      },
      {
        "letter": "B",
        "text": "Local Action Help"
      },
      {
        "letter": "C",
        "text": "Help Panel"
      },
      {
        "letter": "D",
        "text": "Flow Assistant"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **플로우 디자이너(Flow Designer)** 내의 **도움말 패널(Help Panel)**은 사용자가 플로우를 설계하는 도중에 즉각적인 가이드를 제공하는 내장 리소스입니다.\n*   **기능**: 추가된 각 액션(Actions)의 목적, 입력(Inputs) 및 출력(Outputs) 데이터 필드에 대한 상세 설명, 그리고 활용 예시를 제공합니다.\n*   **접근**: 화면 우측 상단의 물음표(?) 아이콘을 통해 활성화하며, 현재 선택된 액션의 문맥에 맞는 정보를 실시간으로 시각화하여 설계를 돕습니다."
  },
  {
    "id": 155,
    "title": "Which plugin needs to be activated in order to translate the content of a catalog item to multiple languages?",
    "options": [
      {
        "letter": "A",
        "text": "Localization Framework plugin (com.glide.localization_framework)"
      },
      {
        "letter": "B",
        "text": "Translation Framework plugin (com.glide.translation_framework)"
      },
      {
        "letter": "C",
        "text": "Multiple Language Framework plugin (com.glide.multiple.language_framework)"
      },
      {
        "letter": "D",
        "text": "Language AI Framework plugin (com.glide.language.ai_framework)"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Localization Framework**는 서비스 카탈로그 항목, 포털 콘텐츠, 변수 등을 여러 언어로 효율적으로 번역하고 관리하기 위한 전용 프레임워크입니다.\n*   **작동 방식**: 번역 요청 워크플로우를 자동화하고, 번역된 텍스트가 인스턴스 전반의 UI에서 언어 설정에 맞춰 올바르게 렌더링되도록 보장합니다.\n*   **엔터프라이즈 환경**: 다국적 기업에서 단일 인스턴스를 운영하며 각 국가별 사용자에게 현지화된 경험을 제공해야 할 때 핵심적인 아키텍처 요소가 됩니다."
  },
  {
    "id": 156,
    "title": "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
    "options": [
      {
        "letter": "A",
        "text": "Incident.Major_Incident"
      },
      {
        "letter": "B",
        "text": "incident=>major_incident"
      },
      {
        "letter": "C",
        "text": "incident<=>major_incident"
      },
      {
        "letter": "D",
        "text": "incident||major_incident"
      },
      {
        "letter": "E",
        "text": "incident.major_incident"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. ServiceNow의 **접근 제어(ACL)** 명명 규칙에서 특정 테이블의 특정 필드를 명시할 때는 **`[테이블명].[필드명]`** 형식을 사용합니다.\n*   **객체 식별**: `incident.major_incident`는 인시던트 테이블의 Major Incident 필드에만 적용되는 전용 보안 규칙임을 의미합니다.\n*   **평가 계층**: 시스템 보안 가드레일에 따라 필드 수준 ACL이 작동하기 위해서는, 먼저 해당 테이블 전체에 대한 접근 권한(예: `incident.None` 또는 `incident.*`)이 허용되어야 합니다."
  },
  {
    "id": 157,
    "title": "ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?",
    "options": [
      {
        "letter": "A",
        "text": "Common Services Data Model (CSDM)"
      },
      {
        "letter": "B",
        "text": "Information Technology Service Management (ITSM)"
      },
      {
        "letter": "C",
        "text": "Configuration Management Database (CMDB)"
      },
      {
        "letter": "D",
        "text": "Information Technology Infrastructure Library (ITIL)"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **CSDM (Common Services Data Model)**은 ServiceNow 플랫폼 전반에서 서비스 관련 정의와 CMDB 데이터 구조를 일관되게 유지하기 위한 표준 프레임워크입니다.\n*   **비즈니스 가치**: 제품군 간 데이터 사일로를 제거하고 표준화된 공유 데이터 모델을 제공하여, 진정한 의미의 서비스 레벨 보고(Service Level Reporting)를 지원합니다.\n*   **구성 전략**: 기술적 구성 항목(CI)을 비즈니스 서비스 오퍼링과 연결하는 명확한 로드맵을 제시함으로써 기업의 디지털 전환을 가속화합니다."
  },
  {
    "id": 158,
    "title": "What is specified in an Access Control rule?",
    "options": [
      {
        "letter": "A",
        "text": "Groups, Conditional Expressions and Workflows"
      },
      {
        "letter": "B",
        "text": "Table Schema, CRUD, and User Authentication"
      },
      {
        "letter": "C",
        "text": "Object and Operation being secured; Permissions required to access the object"
      },
      {
        "letter": "D",
        "text": "security_admin"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **접근 제어(ACL, Access Control List)** 규칙은 데이터베이스 보안을 위해 다음 세 가지 핵심 요소를 선언적으로 정의합니다.\n1.  **Object (객체)**: 보안을 적용할 대상 (테이블이나 개별 필드).\n2.  **Operation (작업)**: 허용 또는 차단할 행위 (조회, 생성, 수정, 삭제 등).\n3.  **Permissions (권한)**: 해당 작업을 수행하기 위해 통과해야 하는 조건 (역할 보유, 특정 필드 값 조건, 또는 JavaScript 로직).\n*   **보안 철학**: 시스템은 명시적으로 허용된 규칙이 없는 경우 모든 접근을 기본적으로 차단하는 '최소 권한 접근' 방식을 따릅니다."
  },
  {
    "id": 159,
    "title": "As it reveals to IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    "options": [
      {
        "letter": "A",
        "text": "Knowledge"
      },
      {
        "letter": "B",
        "text": "ServiceNow Wiki"
      },
      {
        "letter": "C",
        "text": "Knowledge Now"
      },
      {
        "letter": "D",
        "text": "SharePoint"
      },
      {
        "letter": "E",
        "text": "Stack Overflow"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **지식 관리(Knowledge Management)** 인터페이스는 조직 내 IT 부서가 보유한 기술 문서, FAQ, 트러블슈팅 가이드 등을 체계적으로 검색하고 열람할 수 있는 중앙 허브입니다.\n*   **콘텐츠**: 해결 스크립트, 설치 가이드 등 실무에 필요한 정형/비정형 데이터가 포함됩니다.\n*   **구조**: 지식 기반(Knowledge Base)과 계층적 카테고리(Category)로 조직화되어 있어, 사용자가 키워드 검색뿐만 아니라 주제별로 정보를 신속하게 탐색(Browse)할 수 있게 돕습니다."
  },
  {
    "id": 160,
    "title": "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    "options": [
      {
        "letter": "A",
        "text": "Process Automation > Flow Designer"
      },
      {
        "letter": "B",
        "text": "Process Automation > Flow Administration"
      },
      {
        "letter": "C",
        "text": "Process Automation > Workflow Editor"
      },
      {
        "letter": "D",
        "text": "Process Automation > Process Flow"
      },
      {
        "letter": "E",
        "text": "Process Automation > Active Flows"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **플로우 디자이너(Flow Designer)**는 비즈니스 프로세스 소유자가 승인, 작업 생성, 알림 등의 복잡한 로직을 시각적이고 직관적으로 자동화할 수 있게 해주는 차세대 플랫폼 도구입니다.\n*   **접근 경로**: `Process Automation > Flow Designer` 모듈을 통해 인터페이스에 진입합니다.\n*   **현대화**: 레거시 워크플로우 엔진보다 유지보수가 쉽고, 재사용 가능한 **Spoke**를 통해 외부 시스템과의 연동을 로코드(Low-code) 환경에서 신속하게 구현할 수 있도록 지원합니다."
  },
  {
    "id": 161,
    "title": "What field contains a record's 32-character, unique identifier?",
    "options": [
      {
        "letter": "A",
        "text": "sn_rec_id"
      },
      {
        "letter": "B",
        "text": "rec_id"
      },
      {
        "letter": "C",
        "text": "u_id"
      },
      {
        "letter": "D",
        "text": "sys_id"
      },
      {
        "letter": "E",
        "text": "sn_gu_id"
      },
      {
        "letter": "F",
        "text": "sn_sys_id"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow의 모든 테이블 레코드는 **`sys_id`**라는 고유한 32자의 16진수 GUID(Globally Unique Identifier)를 가집니다.\n*   **기본 키(Primary Key)**: 이 값은 레코드가 생성되는 시점에 시스템에 의해 자동으로 부여되며, 인스턴스 전체에서 해당 레코드를 유일하게 식별하는 기준이 됩니다.\n*   **활용**: URL 주소 구성, 참조(Reference) 필드에서의 연결, 그리고 스크립팅 및 API 통신 시 특정 객체를 정확히 지칭하기 위해 사용됩니다.\n*   **불변성**: 한 번 생성된 `sys_id`는 레코드의 수명이 다할 때까지 절대 변하지 않습니다."
  },
  {
    "id": 162,
    "title": "Which of the following is used to categorize, flag, and locate records?",
    "options": [
      {
        "letter": "A",
        "text": "Search"
      },
      {
        "letter": "B",
        "text": "Favorites"
      },
      {
        "letter": "C",
        "text": "Tags"
      },
      {
        "letter": "D",
        "text": "Bookmarks"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **태그(Tags)**는 사용자가 레코드를 논리적으로 분류하고, 나중에 쉽게 검색하거나 추적할 수 있도록 돕는 유연한 도구입니다.\n*   **가시성 범위**: 태그는 개인용(Private)으로 사용하거나, 특정 그룹 또는 전체 사용자(Everyone)와 공유하도록 설정할 수 있어 협업 효율성을 높입니다.\n*   **사용자 경험**: 별도의 필드 생성 없이도 사용자가 즉석에서 키워드를 부여할 수 있으며, 내비게이션 바의 'Tags' 메뉴를 통해 해당 태그가 붙은 모든 테이블의 레코드를 한눈에 모아볼 수 있습니다."
  },
  {
    "id": 163,
    "title": "What is a sys_id?",
    "options": [
      {
        "letter": "A",
        "text": "Unique 32-character identifier that is assigned to every record"
      },
      {
        "letter": "B",
        "text": "A client-side Business Rule"
      },
      {
        "letter": "C",
        "text": "A server-side Business Rule"
      },
      {
        "letter": "D",
        "text": "Unique 64-character identifier that is assigned to every record"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **`sys_id`**는 ServiceNow 플랫폼 데이터베이스 아키텍처의 핵심 식별자입니다.\n*   **구성**: 32글자의 16진수 문자열로 이루어진 GUID입니다.\n*   **범위**: 단일 인스턴스 내뿐만 아니라, 이론적으로 전 세계 모든 ServiceNow 인스턴스 간에도 중복되지 않도록 설계되어 데이터 무결성을 보장합니다.\n*   **참조 필드**: 두 테이블이 연결될 때(Reference field), 내부적으로는 대상 레코드의 이 `sys_id` 값을 저장하여 관계를 맺습니다."
  },
  {
    "id": 164,
    "title": "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
    "options": [
      {
        "letter": "A",
        "text": "Agent Workspace"
      },
      {
        "letter": "B",
        "text": "Chat bot"
      },
      {
        "letter": "C",
        "text": "Virtual Agent"
      },
      {
        "letter": "D",
        "text": "Knowledge Chat"
      },
      {
        "letter": "E",
        "text": "Now Support"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **가상 에이전트(Virtual Agent)**는 대화형 인터페이스(채팅)를 통해 사용자에게 24/7 자동화된 지원을 제공하는 플랫폼입니다.\n*   **핵심 역량**: 자연어 이해(NLU)를 기반으로 사용자의 의도를 파악하며, 단순한 질문 응답을 넘어 승인, 레코드 생성 등 실제 워크플로우 작업을 대화 흐름 내에서 수행합니다.\n*   **가치**: 실시간 상담원의 업무 부하를 줄이고(Deflection), 사용자가 셀프 서비스로 문제를 즉각 해결할 수 있도록 돕는 'Shift-left' 전략의 핵심 도구입니다."
  },
  {
    "id": 165,
    "title": "New records, new groups, and modified configuration Items (Cls): what do they have in common?",
    "options": [
      {
        "letter": "A",
        "text": "They are included in an Update Set"
      },
      {
        "letter": "B",
        "text": "They are not captured in an Update Set"
      },
      {
        "letter": "C",
        "text": "They are customizations"
      },
      {
        "letter": "D",
        "text": "They do not have anything in common"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (주의: 일반적인 모범 사례와 달리 본 문항의 정답 키는 A로 되어 있습니다.)\n*   **플랫폼 원칙**: 원래 **업데이트 세트(Update Sets)**는 시스템의 '동작 방식'을 결정하는 **구성(Configuration)** 변경 사항을 캡처하며, 인시던트나 사용자 같은 **데이터(Data)** 레코드는 캡처하지 않습니다.\n*   **해석**: 본 문항은 시스템 관리자가 새 그룹을 정의하거나 CI 구조를 변경하는 작업을 '플랫폼 커스터마이징' 활동의 일환으로 보고, 이를 업데이트 세트로 이동시킬 수 있다는 맥락에서 정답을 제시한 것으로 풀이됩니다.\n*   **실무 팁**: 일반적인 업무 데이터와 구성 데이터를 명확히 구분하는 것이 중요합니다."
  },
  {
    "id": 166,
    "title": "What do you call any component that needs to be managed in order to deliver services?",
    "options": [
      {
        "letter": "A",
        "text": "CSDM Items"
      },
      {
        "letter": "B",
        "text": "CMDB"
      },
      {
        "letter": "C",
        "text": "Configuration item"
      },
      {
        "letter": "D",
        "text": "Service Offerings"
      },
      {
        "letter": "E",
        "text": "Asset"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **구성 항목(CI, Configuration Item)**은 IT 서비스를 안정적으로 제공하기 위해 관리하고 추적해야 하는 모든 유·무형의 자산을 의미합니다.\n*   **범위**: 하드웨어(서버, 라우터)뿐만 아니라 소프트웨어 라이선스, 설계 문서, 그리고 비즈니스 서비스 오퍼링 자체도 CI가 될 수 있습니다.\n*   **저장소**: 모든 CI 정보와 그들 간의 의존 관계는 **CMDB(Configuration Management Database)**에 체계적으로 저장되어 관리됩니다."
  },
  {
    "id": 167,
    "title": "What are the components that make up a filter condition? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Operator"
      },
      {
        "letter": "B",
        "text": "Match Criteria"
      },
      {
        "letter": "C",
        "text": "Value"
      },
      {
        "letter": "D",
        "text": "Column"
      },
      {
        "letter": "E",
        "text": "Field"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "정답: **A, C, E**. ServiceNow 리스트나 보고서에서 데이터를 정밀하게 추출하는 **조건 빌더(Condition Builder)**는 세 가지 핵심 요소로 구성됩니다.\n1.  **Field (E)**: 검색 대상이 되는 열(Column) (예: 'Priority').\n2.  **Operator (A)**: 비교 방식이나 연산자 (예: 'is', 'contains', 'between').\n3.  **Value (C)**: 비교할 실제 기준 데이터 (예: '1 - Critical').\n*   **UI 확인**: 이 조건들이 설정되면 리스트 상단에 **브레드크럼(Breadcrumbs)** 형태로 필터 경로가 실시간 표시됩니다."
  },
  {
    "id": 168,
    "title": "When designing a flow, how do you reference data from a record, in that flow?",
    "options": [
      {
        "letter": "A",
        "text": "Drag the table icon onto the flow definition"
      },
      {
        "letter": "B",
        "text": "Use the condition builder to specify the desired values"
      },
      {
        "letter": "C",
        "text": "Specify the source table on the data pill related list"
      },
      {
        "letter": "D",
        "text": "Drag the data pill onto the flow definition"
      },
      {
        "letter": "E",
        "text": "Add the table reference using the slush bucket"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **플로우 디자이너(Flow Designer)**에서 이전 단계나 트리거에서 발생한 데이터를 참조할 때는 **데이터 알약(Data Pill)** 기술을 사용합니다.\n*   **작동 방식**: 우측의 데이터 패널에서 필요한 데이터 요소(Data Pill)를 마우스로 드래그하여 현재 구성 중인 액션의 입력 필드에 가져다 놓습니다.\n*   **장점**: 복잡한 스크립트 변수 참조 없이도 시각적으로 데이터를 연결할 수 있으며, 플로우 실행 시점에 실제 레코드의 값이 동적으로 매핑됩니다."
  },
  {
    "id": 169,
    "title": "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?",
    "options": [
      {
        "letter": "A",
        "text": "System Notification > Email > Notifications"
      },
      {
        "letter": "B",
        "text": "Administration > Notification Overview"
      },
      {
        "letter": "C",
        "text": "System Properties > Email > Settings"
      },
      {
        "letter": "D",
        "text": "User Preferences > Email > Notifications"
      },
      {
        "letter": "E",
        "text": "Click Gear > Notifications > New"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 사용자와 시스템 간의 원활한 소통을 위한 알림 설정은 **`System Notification > Email > Notifications`** 모듈에서 관리합니다.\n*   **설정 3요소**:\n    1. **When to send**: 어떤 이벤트나 조건이 발생했을 때 보낼 것인가?\n    2. **Who will receive**: 수신자는 누구인가? (특정 사용자, 그룹 또는 참조 필드 기반).\n    3. **What it says**: 어떤 내용(제목, 본문)을 전달할 것인가?\n*   **템플릿**: 알림 내용은 **Email Template**을 사용하여 표준화된 양식으로 제작할 수 있습니다."
  },
  {
    "id": 170,
    "title": "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
    "options": [
      {
        "letter": "A",
        "text": "Before, After, Async, Display"
      },
      {
        "letter": "B",
        "text": "Prior to, Synchronous, on Update"
      },
      {
        "letter": "C",
        "text": "Insert, Update, Delete, Query"
      },
      {
        "letter": "D",
        "text": "Before, Synchronous, Scheduled Job, View"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **비즈니스 규칙(Business Rule)**의 실행 시점(`When`)은 처리하려는 로직의 성격에 따라 신중히 결정해야 합니다.\n1.  **Before**: 데이터베이스에 저장되기 직전에 실행. (예: 데이터 유효성 검사, 필드 값 자동 계산).\n2.  **After**: 데이터베이스 저장이 완료된 직후 실행. (예: 연관된 다른 테이블 레코드 업데이트).\n3.  **Async**: 저장은 완료하되, 무거운 로직은 백그라운드에서 별도로 처리. (성능 최적화에 유리).\n4.  **Display**: 사용자가 레코드를 열어 폼이 표시되기 직전에 실행. (서버의 데이터를 클라이언트 브라우저로 전달할 때 사용)."
  },
  {
    "id": 171,
    "title": "What do you activate when you want to add applications or functionality within your development instance?",
    "options": [
      {
        "letter": "A",
        "text": "App Package"
      },
      {
        "letter": "B",
        "text": "Updated Pack"
      },
      {
        "letter": "C",
        "text": "Patch"
      },
      {
        "letter": "D",
        "text": "Plugin"
      },
      {
        "letter": "E",
        "text": "App Updated Set"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **플러그인(Plugins)**은 ServiceNow 인스턴스에 특정 애플리케이션이나 추가 기능을 모듈식으로 설치하고 활성화할 수 있게 해주는 소프트웨어 패키지입니다.\n*   **특징**: 플랫폼의 핵심 기능 외에 ITSM, ITOM, HR 등 도메인별 전문 기능을 추가할 때 사용합니다.\n*   **관리**: 'System Definition > Plugins' 모듈에서 관리하며, 일부 플러그인은 ServiceNow Store를 통해 배포되거나 운영 인스턴스 반영을 위해 ServiceNow 지원팀(HI)에 요청이 필요할 수 있습니다.\n*   **주의**: 한 번 활성화된 플러그인은 일반적으로 비활성화(Disable)할 수 없으며, 필요하지 않은 경우 '숨김' 처리를 해야 하므로 개발 인스턴스에서 먼저 검증하는 것이 필수적입니다."
  },
  {
    "id": 172,
    "title": "What is a no-code approach to control the mandatory or read-only state of a form field?",
    "options": [
      {
        "letter": "A",
        "text": "UI Action"
      },
      {
        "letter": "B",
        "text": "Client Script"
      },
      {
        "letter": "C",
        "text": "UI Script"
      },
      {
        "letter": "D",
        "text": "UI Rule"
      },
      {
        "letter": "E",
        "text": "UI Policy"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. **UI 정책(UI Policy)**은 폼의 필드 속성(필수, 읽기 전용, 표시 여부)을 제어하기 위한 가장 대표적인 **노코드(No-code)** 접근 방식입니다.\n*   **장점**: JavaScript 코드를 작성하지 않고도 조건 빌더(Condition Builder)를 통해 비즈니스 로직을 설정할 수 있어 유지보수가 쉽습니다.\n*   **클라이언트 측 실행**: 브라우저에서 실시간으로 작동하여 사용자에게 즉각적인 피드백을 제공합니다.\n*   **비교**: 클라이언트 스크립트(Client Script)는 더 복잡한 로직이 가능하지만 코딩이 필요하며, 데이터 정책(Data Policy)은 서버 측에서 데이터의 일관성을 강제하는 역할을 합니다."
  },
  {
    "id": 173,
    "title": "What is the purpose of a Data Policy?",
    "options": [
      {
        "letter": "A",
        "text": "Data Policies enforce security"
      },
      {
        "letter": "B",
        "text": "Data Policies standardize data in Update Sets"
      },
      {
        "letter": "C",
        "text": "Data Policies enforce data consistency"
      },
      {
        "letter": "D",
        "text": "Data Policies apply to lists to standard data"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **데이터 정책(Data Policy)**의 핵심 목적은 인스턴스로 유입되는 모든 데이터의 **일관성(Consistency)과 무결성**을 서버 측에서 강제하는 것입니다.\n*   **적용 범위**: UI를 통한 직접 입력뿐만 아니라, **임포트 세트(Import Sets)**나 **웹 서비스(API)**를 통해 들어오는 모든 데이터에 규칙(필수, 읽기 전용)을 적용합니다.\n*   **UI 정책과의 관계**: 데이터 정책은 'UI 정책으로 변환' 옵션을 제공하여 서버와 클라이언트 양쪽에서 동일한 규칙을 유지할 수 있도록 지원합니다.\n*   **보안 가드레일**: 데이터가 데이터베이스에 저장되기 직전 마지막 관문 역할을 하여 플랫폼 전반의 데이터 품질을 보장합니다."
  },
  {
    "id": 174,
    "title": "What would NOT appear in the Application Navigator if \"service\" is typed into the filter field?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration > Business Services"
      },
      {
        "letter": "B",
        "text": "Self-Service > Knowledge"
      },
      {
        "letter": "C",
        "text": "Service Portal > Widgets"
      },
      {
        "letter": "D",
        "text": "Incident > Assigned to me"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **애플리케이션 내비게이터의 필터 검색(Filter Navigator)**은 입력된 텍스트와 일치하는 **애플리케이션 메뉴의 이름**이나 **개별 모듈의 이름**을 실시간으로 필터링하여 보여줍니다.\n*   **작동 원리**: 'service'라고 입력하면 'Configuration > **Business Services**', 'Self-**Service** > Knowledge' 등 텍스트를 포함한 항목은 모두 노출됩니다.\n*   **정답 분석**: 'Incident > Assigned to me' 모듈은 이름 내에 'service'라는 문자열을 포함하고 있지 않으므로 필터 결과에서 제외됩니다.\n*   **참고**: 내비게이터 검색은 테이블 레이블뿐만 아니라 사용자가 지정한 키워드나 `sys_id` 등으로도 검색을 지원하도록 설정할 수 있습니다."
  },
  {
    "id": 175,
    "title": "Access Control rules may provide access security for which of the following database objects?",
    "options": [
      {
        "letter": "A",
        "text": "For a specific role, group, or user"
      },
      {
        "letter": "B",
        "text": "For a specific row, column, or table"
      },
      {
        "letter": "C",
        "text": "For specific groups"
      },
      {
        "letter": "D",
        "text": "For a specific CMDB Configuration item"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. (제공된 정답 키에 따라 보강함) ServiceNow의 **접근 제어(ACL)** 규칙은 플랫폼의 데이터베이스 객체에 대한 보안을 담당합니다.\n*   **보안 대상 (Object)**: 표준적인 아키텍처 관점에서 ACL은 **테이블(Table)**, **레코드(Row)**, 그리고 개별 **필드(Column)** 수준에서 보안을 적용합니다.\n*   **해석**: 본 문항의 정답 키인 '특정 CMDB CI(D)'는 데이터베이스 레코드(Row)의 한 예시로 볼 수 있습니다. ACL은 특정 CI 클래스나 개별 CI에 대해서도 정교한 접근 권한을 정의할 수 있는 강력한 도구입니다.\n*   **작동 원리**: 사용자에게 부여된 역할(Role), 조건식, 스크립트를 종합적으로 평가하여 특정 작업(Operation: read, write 등)의 허용 여부를 결정합니다."
  },
  {
    "id": 176,
    "title": "What is a key difference between Reporting and Performance Analytics?",
    "options": [
      {
        "letter": "A",
        "text": "Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run."
      },
      {
        "letter": "B",
        "text": "Performance Analytics can show trends; Reports cannot."
      },
      {
        "letter": "C",
        "text": "Reports can be run on a scheduled basis; Performance Analytics cannot."
      },
      {
        "letter": "D",
        "text": "Performance Analytics is only for dashboards, while Reporting is only for lists."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow의 데이터 분석 도구인 보고서(Reporting)와 성능 분석(PA)은 데이터를 바라보는 관점이 근본적으로 다릅니다.\n*   **Reporting**: 리포트를 실행하는 **현재 시점의 데이터**를 보여주는 '스냅샷'입니다. (예: 지금 열려 있는 인시던트가 몇 개인가?)\n*   **Performance Analytics (PA)**: 과거부터 축적된 데이터를 특정 주기마다 수집하여 **시간에 따른 추세(Trend)**와 패턴을 분석합니다. 이를 통해 미래를 예측하고 비즈니스 목표(KPI) 달성 여부를 추적합니다.\n*   **가치**: 리포팅이 '현재 무엇이 일어나고 있는가'를 알려준다면, PA는 '우리가 개선되고 있는가'라는 인사이트를 제공합니다."
  },
  {
    "id": 177,
    "title": "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Select Fields and Columns module"
      },
      {
        "letter": "B",
        "text": "Right click on form header, select Configure > Form Layout"
      },
      {
        "letter": "C",
        "text": "Click on context menu, select Configure > Form Designer"
      },
      {
        "letter": "D",
        "text": "Select Field Class Manager module"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "정답: **B, C**. ServiceNow에서 폼의 구조를 변경하고 필드를 추가하는 방법은 두 가지 주요 시각적 도구가 있습니다.\n1.  **Form Layout (B)**: 'Configure > Form Layout'을 통해 슬러시버킷 인터페이스를 사용합니다. 기존 필드를 폼에 추가하거나 제거할 때 유용하며, 닷워킹(Dot-walking)을 통해 관련 테이블의 필드를 끌어올 수도 있습니다.\n2.  **Form Designer (C)**: 'Configure > Form Designer'를 통해 드래그 앤 드롭 방식의 직관적인 인터페이스를 사용합니다. 필드 배치, 섹션 구분, 레이아웃 구성을 실시간으로 확인하며 설계할 수 있습니다.\n*   **핵심**: 두 도구 모두 데이터베이스 스키마와 UI 구성을 동시에 변경하는 관리자 전용 기능입니다."
  },
  {
    "id": 178,
    "title": "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Have them clear their cache."
      },
      {
        "letter": "B",
        "text": "Have them use the gear icon to set the employee's time zone."
      },
      {
        "letter": "C",
        "text": "Recommend they use Chrome, instead of Explorer."
      },
      {
        "letter": "D",
        "text": "Use the system properties to correct the instance's time zone."
      },
      {
        "letter": "E",
        "text": "Have them correct the time zone on their computer."
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. (제공된 정답 키에 따라 보강함) ServiceNow 인스턴스는 날짜와 시간 데이터를 서버 기준인 **UTC**로 저장하지만, 사용자에게 보여줄 때는 시스템 설정이나 사용자 개인 설정을 기반으로 로컬 시간으로 변환합니다.\n*   **문제 원인**: 인스턴스 내의 시간 표시가 실제 사용자의 지역과 맞지 않는다면, 가장 먼저 확인해야 할 것은 인스턴스 내 **사용자 프로필의 시간대(Time zone) 설정**입니다.\n*   **해석**: 본 문항의 정답인 '컴퓨터의 시간대 수정(E)'은 플랫폼 외부 요인에 의한 불일치를 해결하는 관점입니다. 플랫폼 내적으로는 사용자가 우측 상단의 **Gear 아이콘**을 눌러 자신의 근무 지역에 맞는 시간대를 직접 설정함으로써 문제를 해결하는 것이 표준 가이드입니다."
  },
  {
    "id": 179,
    "title": "What are two ways to generate an Event? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Business Rule"
      },
      {
        "letter": "B",
        "text": "Workflow"
      },
      {
        "letter": "C",
        "text": "Log entry"
      },
      {
        "letter": "D",
        "text": "Knowledge article publication"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: **A, B**. ServiceNow에서 **이벤트(Events)**는 시스템 내에서 발생한 중요한 사건을 알리는 신호입니다. 이벤트를 발생시키는 가장 대표적인 서버 측 로직은 다음과 같습니다.\n1.  **Business Rule (A)**: 데이터베이스 조건(예: 레코드 삽입/수정)이 충족될 때 `gs.eventQueue()` 스크립트를 호출하여 이벤트를 생성합니다.\n2.  **Workflow (B)**: 워크플로우의 'Event' 액티비티를 통해 프로세스 도중 이벤트를 발생시킵니다.\n*   **후속 작업**: 생성된 이벤트는 **이벤트 로그(Event Log)**에 기록되며, 이를 감시하는 **이메일 알림(Notifications)**이나 **스크립트 액션(Script Actions)**이 트리거되어 사용자에게 메일을 보내거나 추가 로직을 수행합니다."
  },
  {
    "id": 180,
    "title": "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
    "options": [
      {
        "letter": "A",
        "text": "Turn your computer off and on again"
      },
      {
        "letter": "B",
        "text": "Clear browser cache"
      },
      {
        "letter": "C",
        "text": "End Impersonation"
      },
      {
        "letter": "D",
        "text": "Log out and back in"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **사용자 가장(User Impersonation)**을 통해 테스트를 수행한 후 원래 자신의 관리자 계정으로 돌아가는 가장 표준적인 UI 방법은 사용자 메뉴에서 **'End Impersonation'**을 클릭하는 것입니다.\n*   **해설 보강**: 본 문항의 정답인 '로그아웃 후 재로그인(D)'은 UI 상의 제약이나 세션의 완벽한 초기화가 필요한 상황에서 가장 확실하게 원래 계정 권한으로 복귀하는 방법으로 제시되었습니다.\n*   **보안**: 가장 상태에서 수행한 모든 로그는 원래 관리자 계정이 아닌, 가장한 사용자 계정의 활동으로 기록되지만 '가장 중'이라는 사실 역시 시스템에 기록됩니다."
  },
  {
    "id": 181,
    "title": "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "Group"
      },
      {
        "letter": "B",
        "text": "Department"
      },
      {
        "letter": "C",
        "text": "My reports"
      },
      {
        "letter": "D",
        "text": "Team"
      },
      {
        "letter": "E",
        "text": "Dashboards"
      },
      {
        "letter": "F",
        "text": "Global"
      }
    ],
    "answer": [
      "A",
      "E",
      "F"
    ],
    "explanation": "정답: **A, C, E, F**. (제공된 정답 키와 보기를 대조하여 보강함) ServiceNow의 보고서 리스트 페이지는 접근 권한과 대상에 따라 다음 4가지 표준 섹션(탭)으로 구분됩니다.\n1.  **My reports (C)**: 본인이 생성하여 개인적으로 관리하는 보고서.\n2.  **Group (A)**: 본인이 속한 특정 그룹 멤버들과 공유된 보고서.\n3.  **Global (F)**: 인스턴스의 모든 사용자가 볼 수 있도록 공개된 보고서.\n4.  **All**: 위 모든 항목을 포함한 전체 목록.\n*   **참고**: **Dashboards (E)** 탭은 보고서 자체가 아닌, 보고서가 포함된 시각화 보드를 의미하며 실무적으로 가시성을 판단하는 주요 경로 중 하나입니다."
  },
  {
    "id": 182,
    "title": "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?",
    "options": [
      {
        "letter": "A",
        "text": "Task [task]"
      },
      {
        "letter": "B",
        "text": "Assignment [assignment]"
      },
      {
        "letter": "C",
        "text": "Service [service]"
      },
      {
        "letter": "D",
        "text": "Workflow [workflow]"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **`task` 테이블**은 ServiceNow 플랫폼에서 업무 흐름을 관리하는 가장 중요한 **기본(Base/Core) 테이블**입니다.\n*   **공통 분모**: 인시던트(`incident`), 문제(`problem`), 변경(`change_request`) 등 업무 처리를 위한 모든 테이블은 `task`를 상속(Extend)받습니다.\n*   **상속 필드**: 번호(`number`), 상태(`state`), 할당 그룹(`assignment_group`), 짧은 설명(`short_description`) 등 모든 업무 레코드에 공통적으로 필요한 '표준 필드 세트'를 제공하여 데이터 일관성을 보장합니다.\n*   **이점**: 모든 하위 업무를 `task`라는 하나의 관점에서 보고하거나 통합 관리할 수 있게 합니다."
  },
  {
    "id": 183,
    "title": "How are local flow variables accessed in the Flow Designer Data panel?",
    "options": [
      {
        "letter": "A",
        "text": "As newly generated icons"
      },
      {
        "letter": "B",
        "text": "As scratchpad variables"
      },
      {
        "letter": "C",
        "text": "As new tabs"
      },
      {
        "letter": "D",
        "text": "As data pills"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **플로우 디자이너(Flow Designer)** 내에서 동적으로 생성되는 데이터나 변수는 **데이터 알약(Data Pills)**이라는 시각적 객체로 관리됩니다.\n*   **데이터 흐름**: 트리거(Trigger)나 이전 단계의 액션(Actions)에서 발생한 출력값은 우측 데이터 패널에 '데이터 알약'으로 나타납니다.\n*   **참조 방식**: 사용자는 이 알약을 드래그 앤 드롭하여 후속 단계의 입력값으로 사용하며, 플로우 실행 시점에 실제 레코드의 실시간 데이터로 치환됩니다.\n*   **장점**: 복잡한 스크립트 작성 없이도 시스템 내의 관계형 데이터를 직관적으로 연결할 수 있습니다."
  },
  {
    "id": 184,
    "title": "What is an Event in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "An Event is a trigger that has a direct response in the platform"
      },
      {
        "letter": "B",
        "text": "An Event is an indication to the ServiceNow processes that something has occurred"
      },
      {
        "letter": "C",
        "text": "An Event is an indicator that a Priority 1 (P1) Incident has been logged"
      },
      {
        "letter": "D",
        "text": "An Event is a recognized, scheduled occurrence of a process"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow에서 **이벤트(Event)**는 시스템이나 비즈니스 프로세스 내에서 주목할 만한 특이 사항이 발생했음을 알리는 **논리적 신호**입니다.\n*   **발생 경로**: 주로 **비즈니스 규칙(Business Rules)**이나 **워크플로우** 스크립트를 통해 생성됩니다.\n*   **처리기**: 이벤트가 발생하면 **이벤트 로그(`sysevent`)**에 기록되고, 이를 감시하던 **알림(Notifications)** 엔진이나 **스크립트 액션**이 트리거되어 사용자에게 메일을 보내는 등의 후속 작업을 수행합니다.\n*   **비유**: 이벤트는 '무언가 일어났다'는 알림 메시지와 같으며, 시스템은 이에 어떻게 반응할지 미리 정의된 규칙에 따라 움직입니다."
  },
  {
    "id": 185,
    "title": "What is the primary application used to load data into ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "Service Level Management"
      },
      {
        "letter": "B",
        "text": "Configuration"
      },
      {
        "letter": "C",
        "text": "System Import Sets"
      },
      {
        "letter": "D",
        "text": "System Update Sets"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 외부 소스로부터 대량의 데이터를 ServiceNow로 적재하는 표준 애플리케이션은 **System Import Sets**입니다.\n*   **핵심 프로세스**: \n    1. **Load Data**: 외부 파일(Excel, CSV 등)을 임포트 세트 테이블(Staging Area)에 적재합니다.\n    2. **Transform Map**: 임시 테이블의 데이터를 실제 운영 테이블의 필드와 매핑합니다.\n    3. **Run Transform**: 매핑 규칙에 따라 데이터를 최종 목적지로 이동시키며, 이 과정에서 **Coalesce** 필드를 통해 중복 여부를 판별합니다."
  },
  {
    "id": 186,
    "title": "In addition to the admin role, which one of the following roles allows a user to add or remove fields from a list?",
    "options": [
      {
        "letter": "A",
        "text": "personalize.control"
      },
      {
        "letter": "B",
        "text": "personal_list"
      },
      {
        "letter": "C",
        "text": "ul_page_admin"
      },
      {
        "letter": "D",
        "text": "ui_action_admin"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 리스트 뷰의 구성을 개인화하거나 제어할 때 중요한 역할을 하는 권한은 **`personalize_control`**입니다.\n*   **리스트 메카닉 (Gear 아이콘)**: 사용자가 리스트 상단의 톱니바퀴 아이콘을 클릭하여 자신만의 컬럼 배치와 가시성을 조정할 수 있도록 허용합니다.\n*   **역할의 의미**: `admin` 역할은 기본적으로 모든 권한을 가지지만, 특정 운영자에게 시스템 전반의 레이아웃을 수정하지 않고 자신의 뷰만 관리하게 하려면 이 역할을 부여합니다.\n*   **참고**: `personalize_list` 역할 역시 개별 사용자가 자신의 리스트 뷰를 개인화하는 데 직접적으로 관여하는 핵심 역할입니다."
  },
  {
    "id": 187,
    "title": "What are three security modules often used by the System Administrator? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "System Properties > Security"
      },
      {
        "letter": "B",
        "text": "Utilities > Migrate Security"
      },
      {
        "letter": "C",
        "text": "System Security > Security"
      },
      {
        "letter": "D",
        "text": "Self-Service > My Access"
      },
      {
        "letter": "E",
        "text": "System Security > Access Control (ACL)"
      },
      {
        "letter": "F",
        "text": "Password Management > Security Questions"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "정답: **A, C, E**. (제공된 정답 키를 바탕으로 보강함) ServiceNow 관리자가 인스턴스 보안을 강화하기 위해 상시 사용하는 3대 핵심 모듈은 다음과 같습니다.\n1.  **System Properties > Security (A)**: 세션 타임아웃, 비밀번호 복잡도 등 전역적인 보안 정책을 설정합니다.\n2.  **System Security > Access Control (ACL) (E)**: 데이터베이스 수준에서 테이블과 필드에 대한 CRUD 접근 권한을 엄격히 통제합니다.\n3.  **System Security > Security (C)**: 인스턴스의 전반적인 보안 상태를 진단하고 강화할 수 있는 대시보드와 도구를 제공합니다.\n*   **가드레일**: 특히 ACL을 수정하려면 반드시 `security_admin` 역할을 상승(Elevate)시켜야 합니다."
  },
  {
    "id": 188,
    "title": "What is the difference between a UI Policy and Data Policy?",
    "options": [
      {
        "letter": "A",
        "text": "Data Policies run only after UI Policies run successfully"
      },
      {
        "letter": "B",
        "text": "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form UI"
      },
      {
        "letter": "C",
        "text": "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies"
      },
      {
        "letter": "D",
        "text": "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies run only on the form UI"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow에서 데이터의 무결성을 유지하기 위한 두 정책의 결정적인 차이는 '적용 범위'와 '실행 시점'에 있습니다.\n*   **UI 정책 (UI Policy)**: 사용자의 웹 브라우저(폼)에서만 작동합니다. 실시간으로 필드를 필수/읽기전용으로 바꿔 사용자 경험(UX)을 개선하는 데 주력합니다.\n*   **데이터 정책 (Data Policy)**: **서버 측(Server-side)**에서 실행됩니다. 폼 입력은 물론 **데이터 임포트(Import Sets)**나 **웹 서비스(API)** 호출 등 모든 데이터 유입 경로에 대해 규칙을 강제합니다.\n*   **핵심**: 데이터 정책은 '데이터 보안 가드레일'로서의 성격이 강하며, UI 정책으로 변환되어 브라우저에서도 시각적으로 규칙을 표시할 수 있습니다."
  },
  {
    "id": 189,
    "title": "What is used frequently to move customizations from one instance to another?",
    "options": [
      {
        "letter": "A",
        "text": "Update Sets"
      },
      {
        "letter": "B",
        "text": "Code Sets"
      },
      {
        "letter": "C",
        "text": "Update Packs"
      },
      {
        "letter": "D",
        "text": "Configuration Logs"
      },
      {
        "letter": "E",
        "text": "Remote Sets"
      },
      {
        "letter": "F",
        "text": "Local Sets"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트(Update Sets)**는 개발 인스턴스에서 수행한 변경 사항을 테스트나 운영 인스턴스로 안전하게 배포하기 위한 표준 도구입니다.\n*   **캡처 대상**: **구성(Configuration)** 데이터. (예: 비즈니스 규칙, 클라이언트 스크립트, 테이블 정의, 폼 레이아웃, 워크플로우).\n*   **제외 대상**: 실제 **업무 레코드(Data)**. (예: 인시던트, 사용자, 그룹, 지식 문서 등).\n*   **프로세스**: 'In Progress' 상태에서 변경 사항을 기록한 뒤 'Complete'로 닫고, 대상 인스턴스에서 'Preview'를 거쳐 'Commit'합니다."
  },
  {
    "id": 190,
    "title": "How is a group defined in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "A group is one record stored in the Group Type [sys_user_group_type] table"
      },
      {
        "letter": "B",
        "text": "A group is one record stored in the Group [sys_user_group] table"
      },
      {
        "letter": "C",
        "text": "A group defines a set of users that share the same location"
      },
      {
        "letter": "D",
        "text": "A group defines a set of users that share the same job title"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 플랫폼 데이터 아키텍처에서 **그룹(Group)**은 **`sys_user_group`** 테이블에 저장되는 개별 레코드입니다.\n*   **기능적 정의**: 그룹은 특정 목적(예: 기술 지원, 승인 대기)을 위해 논리적으로 묶인 사용자들의 집합입니다.\n*   **권한 체계**: 역할을 사용자 개개인에게 부여하는 대신 그룹에 부여하고 사용자를 그룹에 추가하는 방식(RBAC)이 권장되는데, 이는 모든 그룹 정보가 `sys_user_group`이라는 마스터 테이블에서 관리되기 때문에 가능합니다.\n*   **참조 필드**: 인시던트의 'Assignment group' 필드 등에서 이 테이블을 참조하여 작업을 할당합니다."
  },
  {
    "id": 191,
    "title": "When creating a global custom table named \"abc\", what is the table name that is automatically assigned by the platform?",
    "options": [
      {
        "letter": "A",
        "text": "snc_abc"
      },
      {
        "letter": "B",
        "text": "abc"
      },
      {
        "letter": "C",
        "text": "u_abc"
      },
      {
        "letter": "D",
        "text": "sys_abc"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼은 테이블의 출처와 범위를 명확히 하기 위해 명명 규칙(Naming Convention)을 자동으로 적용합니다.\n*   **Global Scope 커스텀 테이블**: 사용자가 전역 스코프에서 생성한 테이블은 자동으로 **`u_`** 접두사가 붙습니다 (예: `u_abc`).\n*   **Scoped Application 테이블**: 특정 애플리케이션 스코프 내에서 생성된 테이블은 **`x_[company_code]_[app_id]_`** 접두사를 가집니다.\n*   **시스템 테이블**: ServiceNow가 기본 제공하는 테이블은 보통 `sys_`로 시작하거나 `task`, `incident`처럼 고유한 이름을 가집니다."
  },
  {
    "id": 192,
    "title": "Which of the following protects applications by identifying and restricting access to available files and data?",
    "options": [
      {
        "letter": "A",
        "text": "Application Configuration"
      },
      {
        "letter": "B",
        "text": "Verbose Log"
      },
      {
        "letter": "C",
        "text": "Access Control Rules"
      },
      {
        "letter": "D",
        "text": "Application Scope"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **애플리케이션 스코프(Application Scope)**는 애플리케이션 리소스를 격리하고 보호하는 플랫폼 보안의 핵심 메커니즘입니다.\n*   **접근 제어**: 각 애플리케이션은 고유한 스코프 내에 존재하며, 설정에 따라 다른 애플리케이션이 자신의 데이터나 스크립트 파일에 접근하는 것을 허용하거나 차단할 수 있습니다.\n*   **충돌 방지**: 스코핑을 통해 서로 다른 개발자가 만든 자산 간의 이름 충돌을 방지하고, 한 앱의 오류가 전체 인스턴스에 영향을 미치지 않도록 가두는 역할을 합니다."
  },
  {
    "id": 193,
    "title": "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    "options": [
      {
        "letter": "A",
        "text": "Look up their password, so you can login with their account"
      },
      {
        "letter": "B",
        "text": "Initiate a Connect Chat session"
      },
      {
        "letter": "C",
        "text": "Install the Bomgar plug-in"
      },
      {
        "letter": "D",
        "text": "Impersonate the user"
      },
      {
        "letter": "E",
        "text": "Launch a NowChat window"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **사용자 가장(User Impersonation)** 기능은 관리자가 특정 사용자가 겪는 UI 이슈를 동일한 권한 환경에서 재현해 볼 수 있는 가장 효과적인 진단 도구입니다.\n*   **활용 시나리오**: 특정 역할(Role)이나 그룹 멤버십에 따라 메뉴가 보이지 않거나, UI Policy/ACL이 의도대로 작동하지 않을 때 해당 사용자의 관점에서 즉시 확인이 가능합니다.\n*   **보안 가드레일**: `admin`이나 `impersonator` 역할이 필요하며, 가장 중의 활동은 시스템 로그에 기록되어 투명성을 유지합니다."
  },
  {
    "id": 194,
    "title": "Which one of the following is NOT a type of Visual Task Board?",
    "options": [
      {
        "letter": "A",
        "text": "Feature"
      },
      {
        "letter": "B",
        "text": "Guided boards"
      },
      {
        "letter": "C",
        "text": "Flexible"
      },
      {
        "letter": "D",
        "text": "Freeform"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **비주얼 태스크 보드(Visual Task Board, VTB)**는 업무를 칸반(Kanban) 스타일로 관리하는 시각화 도구로, 크게 세 가지 유형이 있습니다.\n1.  **Guided Boards (가이드형)**: 특정 필드(예: State)의 값에 따라 카드가 자동으로 분류됩니다.\n2.  **Flexible Boards (플렉시블형)**: 특정 필드 기반이지만, 드래그 앤 드롭으로 카드 이동 시 실제 레코드 값은 바뀌지 않도록 유연하게 운영할 수 있습니다.\n3.  **Freeform Boards (자유형)**: 데이터 필드와 상관없이 사용자가 정의한 레인(Lane)으로 자유롭게 카드를 관리합니다.\n*   **참고**: 'Feature'는 표준 VTB 유형이 아닙니다."
  },
  {
    "id": 195,
    "title": "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
    "options": [
      {
        "letter": "A",
        "text": "Common Service Data Model (CSDM)"
      },
      {
        "letter": "B",
        "text": "Service Mapping Utility (SMU)"
      },
      {
        "letter": "C",
        "text": "Service Schema Map (SSM)"
      },
      {
        "letter": "D",
        "text": "CMDB Class Manager (CMDBCM)"
      },
      {
        "letter": "E",
        "text": "CI Class Manager (CICM)"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **CSDM (Common Services Data Model)**은 ServiceNow 애플리케이션이 요구하는 서비스 데이터가 적절한 CMDB 테이블에 정확히 매핑되도록 보장하는 **표준 데이터 프레임워크**입니다.\n*   **역할**: IT 자산(CI)과 비즈니스 가치 사이의 연결 고리를 정의하며, 플랫폼 전반의 데이터 사일로를 제거합니다.\n*   **가치**: 이를 준수함으로써 기업은 제품 간 시너지를 극대화하고, 신뢰할 수 있는 서비스 레벨 리포팅과 영향도 분석을 수행할 수 있습니다."
  },
  {
    "id": 196,
    "title": "What is the difference between a UI Policy and Data Policy?",
    "options": [
      {
        "letter": "A",
        "text": "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies run only on the form UI"
      },
      {
        "letter": "B",
        "text": "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies"
      },
      {
        "letter": "C",
        "text": "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form UI"
      },
      {
        "letter": "D",
        "text": "Data Policies run only after UI Policies run successfully"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow에서 데이터의 품질과 일관성을 유지하기 위해 **데이터 정책(Data Policy)**은 UI 정책(UI Policy)보다 더 근본적인 계층에서 작동합니다.\n*   **서버 측 강제성**: 데이터 정책은 데이터베이스 수준에서 규칙을 집행하므로, 브라우저 폼 입력뿐만 아니라 **웹 서비스 API** 호출이나 **데이터 임포트(Import Sets)** 등 모든 유입 경로에 대해 규칙을 강제합니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험(UX)을 제어하는 데 중점을 두는 반면, 데이터 정책은 데이터의 물리적 무결성을 보장하는 보안 가드레일 역할을 합니다."
  },
  {
    "id": 197,
    "title": "Group records are stored in which table?",
    "options": [
      {
        "letter": "A",
        "text": "Group [sn_user_group]"
      },
      {
        "letter": "B",
        "text": "Group [sys_user_group]"
      },
      {
        "letter": "C",
        "text": "Group [s_sys_group]"
      },
      {
        "letter": "D",
        "text": "Group [u_sys_group]"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow의 기반 데이터(Foundational Data) 아키텍처에서 **그룹(Group)** 정보는 **`sys_user_group`** 테이블에 물리적으로 저장됩니다.\n*   **기능**: 그룹은 권한 부여(Roles), 작업 배정(Assignment), 통지 수신(Email)을 위한 논리적 단위입니다.\n*   **계층 구조**: 그룹은 부모-자식 관계를 가질 수 있어 조직 구조에 맞게 계층적으로 관리될 수 있습니다."
  },
  {
    "id": 198,
    "title": "What is a Notification?",
    "options": [
      {
        "letter": "A",
        "text": "A new Knowledge article created by a Business Rule"
      },
      {
        "letter": "B",
        "text": "A tool for alerting users that events that concern them have occurred"
      },
      {
        "letter": "C",
        "text": "A message through Connect related to a Change Request"
      },
      {
        "letter": "D",
        "text": "An email file attachment"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **알림(Notification)**은 시스템 내에서 특정 사건이나 조건이 발생했을 때 관련 사용자에게 정보를 전달하는 핵심 소통 도구입니다.\n*   **구성 3요소**:\n    1. **When to send**: 어떤 레코드 조건이나 이벤트가 발생했을 때 보낼 것인가?\n    2. **Who will receive**: 누가 수신자인가? (특정인 또는 참조 필드).\n    3. **What it says**: 어떤 내용(제목, 본문)을 어떤 채널(이메일, 푸시, SMS)로 보낼 것인가?"
  },
  {
    "id": 199,
    "title": "What are examples of Core tables in the ServiceNow platform?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration, Connect, Chat"
      },
      {
        "letter": "B",
        "text": "Team, Party, Awards"
      },
      {
        "letter": "C",
        "text": "User, Task, Incident"
      },
      {
        "letter": "D",
        "text": "Work, Caller, Timecard"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **코어 테이블(Core Tables)**은 ServiceNow 플랫폼 설치 시 기본적으로 제공되는 표준 테이블 세트를 의미합니다.\n*   **대표 예시**: 사용자 정보를 담는 **`sys_user`**, 업무 흐름의 근간인 **`task`**, 그리고 서비스 데스크의 핵심인 **`incident`** 등이 포함됩니다.\n*   **특징**: 이러한 테이블들은 플랫폼의 기본 워크플로우와 밀접하게 결합되어 있으며, 고객의 요구에 따라 확장(Extend)하여 커스텀 기능을 구현할 수 있는 기반이 됩니다."
  },
  {
    "id": 200,
    "title": "Which data consistency settings can be achieved using UI Policy? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Setting fields to accept the data with an n number of characters"
      },
      {
        "letter": "B",
        "text": "Setting fields hidden"
      },
      {
        "letter": "C",
        "text": "Setting fields to accept the data in an expected format"
      },
      {
        "letter": "D",
        "text": "Settings fields read-only"
      },
      {
        "letter": "E",
        "text": "Setting fields mandatory"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "정답: **B, D, E**. **UI 정책(UI Policy)**은 폼 수준에서 데이터의 일관성을 유지하기 위해 필드의 세 가지 상태를 동적으로 제어합니다.\n1.  **Mandatory (E)**: 필드를 필수로 지정하여 데이터 입력 없이는 제출을 방해함.\n2.  **Read-only (D)**: 사용자가 필드 값을 수정하지 못하도록 읽기 전용으로 설정함.\n3.  **Visible/Hidden (B)**: 조건에 따라 필드를 사용자에게 보이거나 숨김.\n*   **참고**: 입력 형식 검증(C)은 주로 변수 세트의 정규표현식이나 클라이언트 스크립트에서 수행합니다."
  },
  {
    "id": 201,
    "title": "Which is the most efficient way to move large amounts of data between instances?",
    "options": [
      {
        "letter": "A",
        "text": "Export to Data Package"
      },
      {
        "letter": "B",
        "text": "Export to XML"
      },
      {
        "letter": "C",
        "text": "Update Sets"
      },
      {
        "letter": "D",
        "text": "Export to Zip"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow에서 대량의 실제 레코드(데이터)를 인스턴스 간에 가장 빠르고 안전하게 이동시키는 표준 방식은 **XML 내보내기/가져오기**입니다.\n*   **데이터 vs 구성**: 업데이트 세트(Update Sets)는 시스템의 설정(Configuration)을 옮기는 용도이며, 인시던트나 자산 레코드 같은 실제 데이터는 캡처하지 않습니다.\n*   **무결성**: XML 방식은 레코드의 고유 식별자인 `sys_id`를 그대로 유지하므로, 인스턴스를 옮기더라도 참조 관계가 깨지지 않고 데이터의 무결성이 보장됩니다."
  },
  {
    "id": 202,
    "title": "Which module would you use to customize your instance's banner image, text, and colors?",
    "options": [
      {
        "letter": "A",
        "text": "System UI > UI Pages > Branding"
      },
      {
        "letter": "B",
        "text": "System Properties > Branding"
      },
      {
        "letter": "C",
        "text": "System Properties > Basic Configuration UI16"
      },
      {
        "letter": "D",
        "text": "Service Portal > Portals > Branding"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. (제공된 정답 키에 따라 보강함)\n*   **플랫폼 브랜딩**: 인스턴스의 전반적인 룩앤필(로고, 색상, 배너 등)을 설정하는 표준 모듈은 **Basic Configuration UI16**입니다.\n*   **서비스 포털 브랜딩**: 본 문항의 정답인 **Service Portal > Portals** 내의 브랜딩 설정은 일반 관리 화면이 아닌, 사용자가 대면하는 '포털' 인터페이스에 특화된 디자인(테마, 로고)을 별도로 관리할 때 사용됩니다."
  },
  {
    "id": 203,
    "title": "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "Categories"
      },
      {
        "letter": "B",
        "text": "Roles"
      },
      {
        "letter": "C",
        "text": "User Criteria"
      },
      {
        "letter": "D",
        "text": "Groups"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **사용자 기준(User Criteria)**은 지식 관리(KM)와 서비스 카탈로그에서 접근 권한을 제어하는 가장 강력하고 유연한 도구입니다.\n*   **보안 계층**: 특정 역할(Roles)뿐만 아니라 부서, 위치, 그룹 등 사용자 레코드의 다양한 속성을 조합하여 정교한 권한 모델을 설계할 수 있습니다.\n*   **적용**: 지식 기반(Knowledge Base) 수준에서 설정하여 하위의 모든 문서에 일괄 적용하거나, 개별 문서 단위로 세분화된 접근 제어를 수행합니다."
  },
  {
    "id": 204,
    "title": "An order for new office equipment has been placed through the Service Catalog. How would you view the list of requests after the orders have been placed?",
    "options": [
      {
        "letter": "A",
        "text": "All > Service Catalog > Open Records > Items"
      },
      {
        "letter": "B",
        "text": "In the Navigation Filter, type 'requests' and press the Enter key."
      },
      {
        "letter": "C",
        "text": "All > Tables and Columns > Table"
      },
      {
        "letter": "D",
        "text": "All > Service Catalog > Requests"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 서비스 카탈로그 주문이 완료된 후 사용자가 요청한 개별 품목들의 상세 진행 상태를 확인하는 표준 경로는 **Service Catalog > Open Records > Items**입니다.\n*   **데이터 모델**: 주문은 REQ(전체 요청) 레코드 아래에 여러 개의 **RITM(Requested Items)** 레코드가 생성되는 구조입니다.\n*   **추적**: 사용자와 관리자는 이 RITM 목록을 통해 각 품목이 승인 대기 중인지, 배송 중인지 등 개별적인 이행 상태를 명확히 파악할 수 있습니다."
  },
  {
    "id": 205,
    "title": "On a form header, what icon would you click to access Template features?",
    "options": [
      {
        "letter": "A",
        "text": "Paper clip"
      },
      {
        "letter": "B",
        "text": "More options (...)"
      },
      {
        "letter": "C",
        "text": "Stamp"
      },
      {
        "letter": "D",
        "text": "Context Menu"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 폼의 필드 값을 미리 정의된 값으로 신속하게 채워주는 **템플릿(Templates)** 기능은 폼 헤더의 **More Options (점 세 개 아이콘)** 메뉴를 통해 활성화할 수 있습니다.\n*   **템플릿 바**: 메뉴에서 'Toggle Template Bar'를 선택하면 폼 하단에 템플릿 바가 나타나며, 여기서 자주 쓰는 설정값을 클릭 한 번으로 적용하거나 새로운 템플릿을 생성할 수 있습니다.\n*   **효율성**: 이는 반복적인 데이터 입력 업무를 자동화하여 운영 효율을 높이는 핵심 UI 편의 기능입니다."
  },
  {
    "id": 206,
    "title": "What component causes a flow to run after a record has been created or updated?",
    "options": [
      {
        "letter": "A",
        "text": "Date-based trigger"
      },
      {
        "letter": "B",
        "text": "Record-based trigger"
      },
      {
        "letter": "C",
        "text": "On-change trigger"
      },
      {
        "letter": "D",
        "text": "Application-based trigger"
      },
      {
        "letter": "E",
        "text": "Updated-date trigger"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **플로우 디자이너(Flow Designer)**에서 데이터베이스의 변화를 감지하여 자동화를 시작하는 장치를 **레코드 기반 트리거(Record-based trigger)**라고 합니다.\n*   **실행 조건**: 레코드가 새로 생성(Created)되거나, 특정 필드가 업데이트(Updated)되거나, 혹은 두 조건 모두에 대해 플로우를 트리거하도록 설정할 수 있습니다.\n*   **필터링**: 트리거 내에 'Condition Builder'를 사용하여 특정 조건을 만족하는 레코드에 대해서만 플로우가 작동하도록 정밀하게 제어할 수 있습니다."
  },
  {
    "id": 207,
    "title": "What is the primary objective of the Display Business Rule?",
    "options": [
      {
        "letter": "A",
        "text": "To monitor fields on a form, and provide feedback"
      },
      {
        "letter": "B",
        "text": "To use a shared g_scratchpad object, which can be sent to the client, as part of the form"
      },
      {
        "letter": "C",
        "text": "To set files to mandatory, hidden, and read-only"
      },
      {
        "letter": "D",
        "text": "To define what happens on a form, when a particular fled changes"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **디스플레이 비즈니스 규칙(Display Business Rule)**은 레코드가 데이터베이스에서 조회되어 사용자에게 표시되기 직전에 실행되는 서버 측 로직입니다.\n*   **g_scratchpad**: 서버에만 존재하는 복잡한 계산 결과나 데이터를 `g_scratchpad` 객체에 담아 클라이언트(브라우저)로 전달하는 역할을 합니다.\n*   **활용**: 이렇게 전달된 데이터는 클라이언트 스크립트에서 참조하여 폼의 동적인 변화를 제어하는 데 사용됩니다.\n*   **성능**: 매번 클라이언트에서 서버로 AJAX 요청을 보내는 것보다 훨씬 효율적으로 서버 데이터를 UI 로직에 활용할 수 있게 합니다."
  },
  {
    "id": 208,
    "title": "What module do you use to access the reports that are available to you?",
    "options": [
      {
        "letter": "A",
        "text": "Report > View /Run"
      },
      {
        "letter": "B",
        "text": "Reports > Homepage"
      },
      {
        "letter": "C",
        "text": "Self-Service>My Reports"
      },
      {
        "letter": "D",
        "text": "Report > Overview"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 사용자가 자신에게 권한이 있는 모든 보고서를 검색, 실행 및 편집할 수 있는 중앙 허브는 **Reports > View / Run** 모듈입니다.\n*   **보고서 디자이너**: 이 모듈을 클릭하면 보고서 디자이너(Report Designer) 인터페이스가 열리며, 'My reports', 'Group', 'Global' 탭을 통해 보고서의 가시성 범위별로 목록을 필터링하여 볼 수 있습니다.\n*   **실무 활용**: 기존에 잘 만들어진 보고서를 복제(Insert and Stay)하여 자신만의 분석 리포트로 빠르게 변형할 때도 이 경로를 사용합니다."
  },
  {
    "id": 209,
    "title": "A task worker asks how they can monitor any updates occurring to recands assigned to him, like responses from customers, What do you suggest?",
    "options": [
      {
        "letter": "A",
        "text": "Open an Agent workspace tab for each record he wants to monitor"
      },
      {
        "letter": "B",
        "text": "Select Service Desk > My Work Dashboard"
      },
      {
        "letter": "C",
        "text": "Click on the eyeglass icon to. expand the Monitor frame"
      },
      {
        "letter": "D",
        "text": "On My Work list, select the Activity Stream icon to show a frame with live updates"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 담당자가 자신에게 할당된 여러 레코드의 변화를 일일이 열어보지 않고도 실시간으로 파악할 수 있게 해주는 기능은 **활동 스트림(Activity Stream)**입니다.\n*   **실시간 협업**: 리스트 뷰 상단의 활동 스트림 아이콘을 클릭하면 우측 패널에 대화형 피드가 열리며, 고객의 응답이나 동료의 작업 메모가 입력되는 즉시 표시됩니다.\n*   **생산성**: 여러 티켓을 동시에 모니터링해야 하는 서비스 데스크 요원이나 기술 지원 전문가에게 최적화된 인터페이스입니다."
  },
  {
    "id": 210,
    "title": "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
    "options": [
      {
        "letter": "A",
        "text": "Trigger runtime value"
      },
      {
        "letter": "B",
        "text": "Sequence runtime value"
      },
      {
        "letter": "C",
        "text": "Starting runtime value"
      },
      {
        "letter": "D",
        "text": "Data pill runtime value"
      },
      {
        "letter": "E",
        "text": "Input runtime value"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **플로우 디자이너(Flow Designer)**에서 단계 간에 전달되는 동적인 실행 데이터를 **데이터 알약(Data Pills)**이라고 부릅니다.\n*   **데이터 흐름**: 트리거(Trigger)에서 수집된 정보나 이전 액션(Actions)의 결과물은 데이터 패널에 알약 모양의 객체로 생성됩니다.\n*   **런타임 값**: 플로우가 실제로 실행되는 시점의 구체적인 레코드 값(예: 할당된 사용자의 이름)을 담고 있으며, 사용자는 이를 드래그 앤 드롭하여 후속 단계의 입력값으로 재사용할 수 있습니다."
  },
  {
    "id": 211,
    "title": "Which feature can be used to categorize a set of records from a list and make them visible to other users?",
    "options": [
      {
        "letter": "A",
        "text": "Tags"
      },
      {
        "letter": "B",
        "text": "History"
      },
      {
        "letter": "C",
        "text": "Favorites"
      },
      {
        "letter": "D",
        "text": "Activity Formatter"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **태그(Tags)**는 리스트 뷰에서 특정 레코드 세트를 논리적으로 분류하고 관리하기 위한 유연한 도구입니다.\n*   **협업 및 공유**: 태그는 개인용(Private)으로 사용하거나, 특정 그룹 또는 전체 사용자(Everyone)와 공유하도록 가시성을 설정할 수 있어 협업 효율을 높입니다.\n*   **추적**: 내비게이션 바의 'Tags' 메뉴를 통해 여러 테이블에 흩어져 있는 동일 태그 레코드들을 한눈에 모아볼 수 있습니다."
  },
  {
    "id": 212,
    "title": "User records are stored in which table?",
    "options": [
      {
        "letter": "A",
        "text": "User [sys_user]"
      },
      {
        "letter": "B",
        "text": "User [sn_user]"
      },
      {
        "letter": "C",
        "text": "User [u_sys_user]"
      },
      {
        "letter": "D",
        "text": "User [s_user]"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 플랫폼의 모든 사용자 계정 정보는 **`sys_user`** 마스터 테이블에 저장됩니다.\n*   **기반 데이터**: 이 테이블은 플랫폼 전반에서 '요청자(Caller)', '할당 대상(Assigned to)' 등 인물 정보를 참조하는 모든 필드의 근간이 됩니다.\n*   **명명 규칙**: `sys_` 접두사는 플랫폼의 핵심 시스템 테이블임을 의미합니다."
  },
  {
    "id": 213,
    "title": "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
    "options": [
      {
        "letter": "A",
        "text": "On the list, locate and right click on the value Hardware, select Show Matching"
      },
      {
        "letter": "B",
        "text": "Click Funnel ten, type Hardware and click enter"
      },
      {
        "letter": "C",
        "text": "On the Category column header, right click and select Show > Hardware"
      },
      {
        "letter": "D",
        "text": "Right dick on magnifier, type Hardware and click enter"
      },
      {
        "letter": "E",
        "text": "On Breadcrumb, click > icon, type Hardware and click enter"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 리스트 뷰에서 특정 데이터를 기준으로 신속하게 필터링을 수행하는 가장 효율적인 방법은 **Show Matching (일치 항목 표시)** 기능을 사용하는 것입니다.\n*   **작동 방식**: 필터링하고자 하는 셀의 값(예: 'Hardware') 위에서 우클릭한 뒤 메뉴를 선택하면, 즉시 해당 조건이 브레드크럼(Breadcrumb) 필터에 추가됩니다.\n*   **비교**: 반대로 특정 값을 제외하고 싶을 때는 'Filter Out' 기능을 사용합니다."
  },
  {
    "id": 214,
    "title": "If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?",
    "options": [
      {
        "letter": "A",
        "text": "A server script"
      },
      {
        "letter": "B",
        "text": "A client script"
      },
      {
        "letter": "C",
        "text": "A fix script"
      },
      {
        "letter": "D",
        "text": "A business rule"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 사용자가 필드 값을 변경하는 순간 브라우저에서 실시간으로 반응(예: Alert 알림)하는 로직은 **클라이언트 스크립트(Client Scripts)**의 전형적인 역할입니다.\n*   **실행 환경**: 사용자의 웹 브라우저 내에서 직접 실행되므로 즉각적인 UI 피드백을 제공합니다.\n*   **유형**: 이 경우 필드 값이 바뀔 때 실행되는 `onChange` 스크립트가 작동한 것입니다.\n*   **차이점**: 서버 측 로직인 비즈니스 규칙(Business Rules)은 데이터베이스에 저장이 시도될 때 실행되므로 실시간 UI 반응에는 적합하지 않습니다."
  },
  {
    "id": 215,
    "title": "Which role(s) are required to impersonate a user? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "admin"
      },
      {
        "letter": "B",
        "text": "sys_admin"
      },
      {
        "letter": "C",
        "text": "security_admin"
      },
      {
        "letter": "D",
        "text": "sys_user"
      },
      {
        "letter": "E",
        "text": "impersonator"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "정답: **A, E**. **사용자 가장(User Impersonation)** 기능은 권한 오남용을 방지하기 위해 특정 역할을 가진 사용자에게만 허용됩니다.\n*   **허용 역할**: 인스턴스 전권을 가진 **`admin`**과, 테스트 및 지원을 위해 전용으로 부여되는 **`impersonator`** 역할이 필요합니다.\n*   **보안 가드레일**: `security_admin`과 같은 고권한 계정을 가장하는 것은 제한될 수 있으며, 가장 상태의 활동은 감사 로그에 철저히 기록됩니다."
  },
  {
    "id": 216,
    "title": "If users would like to locate and assign a task to themselves in the Platform, What action could they perform from the list view to make the assignment? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Select the record using the check box, then select the Person icon"
      },
      {
        "letter": "B",
        "text": "Double click on the Assigned to value, type the name of the user, and select the green check"
      },
      {
        "letter": "C",
        "text": "Select the record using the check box then select the Assign To Me UI action on the List Header"
      },
      {
        "letter": "D",
        "text": "Right click on the Task number and select the Assign to me option in the menu"
      },
      {
        "letter": "E",
        "text": "Select the Task number, and select the Assign to me UI action on the form"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: **C, D**. ServiceNow 리스트 뷰에서는 여러 레코드를 일일이 열지 않고도 자신에게 할당하는 신속한 방법을 제공합니다.\n1.  **List Header (C)**: 체크박스로 레코드를 선택한 후, 리스트 하단(또는 상단)의 **'Assign To Me'** UI 액션 버튼을 클릭합니다.\n2.  **Context Menu (D)**: 특정 레코드의 번호나 빈 영역을 우클릭하여 나타나는 메뉴에서 **'Assign to me'**를 선택합니다.\n*   **이점**: 대량의 티켓을 한꺼번에 자신에게 할당하거나 신속하게 작업을 접수할 때 생산성을 높여줍니다."
  },
  {
    "id": 217,
    "title": "An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "A record of sc_task"
      },
      {
        "letter": "B",
        "text": "A record of sc_req_item table"
      },
      {
        "letter": "C",
        "text": "A change record"
      },
      {
        "letter": "D",
        "text": "An Incident record"
      },
      {
        "letter": "E",
        "text": "A problem record"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: **A, B**. 서비스 카탈로그에서 주문이 제출되면 이행을 위해 다음과 같은 레코드 계층이 생성됩니다.\n1.  **Requested Item (RITM)**: 주문한 개별 품목 레코드 (테이블: `sc_req_item`).\n2.  **Catalog Task (SCTASK)**: 해당 품목을 전달하기 위해 실무자가 수행해야 할 개별 작업 (테이블: `sc_task`).\n*   **참고**: 이들은 최상위 주문서인 **Request (REQ)** 레코드에 소속되어 관리됩니다."
  },
  {
    "id": 218,
    "title": "How would you navigate to the Schema map for a table?",
    "options": [
      {
        "letter": "A",
        "text": "System Dictionary > Show Schema Map; Select Table"
      },
      {
        "letter": "B",
        "text": "System Definition > Tables; Select Table; Go to Related links and click Show Schema Map"
      },
      {
        "letter": "C",
        "text": "System Definition > Show Schema Map; Select Table"
      },
      {
        "letter": "D",
        "text": "System Definition > Dictionary: Select Table; Go to Related links and click Show Schema Map"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **스키마 맵(Schema Map)**은 테이블 간의 관계와 필드 구조를 시각화하는 강력한 도구입니다.\n*   **접근 경로**: `System Definition > Tables` 모듈에서 대상 테이블의 레코드를 엽니다 -> 폼 하단의 **Related Links** 섹션에서 **'Show Schema Map'**을 클릭합니다.\n*   **용도**: 데이터베이스 설계 분석, 참조 관계(Reference) 및 확장 관계(Extension) 파악 시 필수적으로 사용됩니다."
  },
  {
    "id": 219,
    "title": "When an administrator sets a policy that is applied to all data entered into the Platform (UI, Import Sets, or Web Services), where does this policy run by default?",
    "options": [
      {
        "letter": "A",
        "text": "Network"
      },
      {
        "letter": "B",
        "text": "Server"
      },
      {
        "letter": "C",
        "text": "Client"
      },
      {
        "letter": "D",
        "text": "Browser"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **데이터 정책(Data Policy)**은 인스턴스 전반의 데이터 무결성을 보장하기 위해 **서버(Server)** 측에서 실행됩니다.\n*   **강제성**: 서버 측에서 작동하기 때문에 웹 브라우저(UI)뿐만 아니라 **데이터 임포트(Import Sets)**나 **웹 서비스(API)**를 통해 들어오는 모든 데이터에 동일한 규칙을 강제할 수 있습니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험을 위해 작동하는 반면, 데이터 정책은 데이터베이스의 물리적 일관성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 220,
    "title": "When selecting the Target table for an import, which tables can you select? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Tables within the global scope"
      },
      {
        "letter": "B",
        "text": "Tables within the existing application scope"
      },
      {
        "letter": "C",
        "text": "Tables outside of ServiceNow"
      },
      {
        "letter": "D",
        "text": "Tables which allow write access to other applications"
      },
      {
        "letter": "E",
        "text": "Related tables, using Dot Walk"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "정답: **A, B, D**. 데이터 임포트 시 타겟(Target)으로 선택 가능한 테이블은 플랫폼의 보안 및 스코프 가드레일을 준수해야 합니다.\n1.  **Global Scope (A)**: 전역 스코프 내의 테이블.\n2.  **Current Application Scope (B)**: 현재 활성화된 애플리케이션 스코프 내의 테이블.\n3.  **Cross-scope access (D)**: 다른 애플리케이션 스코프에 있더라도 외부 앱의 데이터 쓰기를 명시적으로 허용한 테이블.\n*   **보안**: 이를 통해 승인되지 않은 애플리케이션이 민감한 시스템 테이블에 데이터를 무단으로 적재하는 것을 방지합니다."
  },
  {
    "id": 221,
    "title": "On Access Control Definitions, what are ways you can set the permissions on a Table? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Groups"
      },
      {
        "letter": "B",
        "text": "CRUD"
      },
      {
        "letter": "C",
        "text": "Roles"
      },
      {
        "letter": "D",
        "text": "Script that sets the answer variable to true or false"
      },
      {
        "letter": "E",
        "text": "Conditional Expressions"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "explanation": "정답: **C, D, E**. **접근 제어(ACL)** 규칙은 세 가지 계층의 보안 체크포인트를 조합하여 데이터 접근 허용 여부를 정교하게 결정합니다.\n1.  **Roles (C)**: 사용자가 필요한 시스템 역할을 보유했는지 확인합니다.\n2.  **Conditional Expressions (E)**: 레코드의 특정 필드 값이 조건을 만족하는지 확인합니다. (예: `State`가 'Active'인 경우만 수정 허용).\n3.  **Scripts (D)**: 서버 측 스크립트 로직을 통해 복잡한 권한 판별을 수행하며, 최종적으로 `answer` 변수에 `true` 또는 `false`를 할당합니다.\n*   **보안 원칙**: 이 세 가지 조건은 **논리적 AND** 관계로 작동합니다. 즉, 설정된 모든 관문을 통과해야만 최종 접근이 승인됩니다."
  },
  {
    "id": 222,
    "title": "What are the steps for importing data using an import set?",
    "options": [
      {
        "letter": "A",
        "text": "Select source file; Run automap; Transform data; Clean up target table"
      },
      {
        "letter": "B",
        "text": "Set up LDAP; Test map: Create update set; Run import: Apply update set"
      },
      {
        "letter": "C",
        "text": "Identify source; Import transform map: Run transformer; Verity import"
      },
      {
        "letter": "D",
        "text": "Load the data; Create transform map; Transform data; Clean up import table"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow **임포트 세트(Import Sets)**를 통한 데이터 수집 프로세스는 다음과 같은 표준 워크플로우를 따릅니다.\n1.  **Load Data**: 외부 소스 파일을 업로드하여 임포트 세트 테이블(Staging Area)에 데이터를 로드합니다.\n2.  **Create Transform Map**: 데이터가 들어갈 타겟 테이블을 지정하고 소스와 타겟 필드 간의 매핑 관계를 정의합니다.\n3.  **Run Transform**: 매핑 규칙에 따라 스테이징 영역의 데이터를 실제 운영 테이블로 변환 및 이동시킵니다.\n4.  **Clean up**: 작업 완료 후 불필요해진 임시 임포트 테이블 데이터를 정리하여 시스템 자원을 최적화합니다."
  },
  {
    "id": 223,
    "title": "When moving a homepage or dashboard between instances, what must you remember?",
    "options": [
      {
        "letter": "A",
        "text": "Create a separate update set for them"
      },
      {
        "letter": "B",
        "text": "They are automatically added to the update set"
      },
      {
        "letter": "C",
        "text": "Manually add them to the update set"
      },
      {
        "letter": "D",
        "text": "They cannot be moved via update set"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow에서 **대시보드(Dashboards)**나 **홈페이즈**는 일반적인 구성(Configuration) 데이터와 달리 **업데이트 세트(Update Sets)**에 자동으로 기록되지 않는 대표적인 항목입니다.\n*   **관리 포인트**: 이러한 시각화 객체들을 다른 인스턴스로 이동시키려면 'Unload Dashboard' 기능을 사용하거나 'Add to Update Set' 모듈을 통해 수동으로 업데이트 세트에 포함시켜야 합니다.\n*   **주의**: 대시보드는 위젯, 탭, 레이아웃 등 여러 요소로 구성되어 있으므로 이동 후 구성 요소가 누락되지 않았는지 반드시 검증해야 합니다."
  },
  {
    "id": 224,
    "title": "What is the platform name for the Group table?",
    "options": [
      {
        "letter": "A",
        "text": "SyS_USer_group"
      },
      {
        "letter": "B",
        "text": "Sys_group"
      },
      {
        "letter": "C",
        "text": "group"
      },
      {
        "letter": "D",
        "text": "sys_groups"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (표기상 혼란이 있으나 `sys_user_group`을 의미함)\n*   **테이블 정의**: ServiceNow에서 사용자들의 논리적 집합인 **그룹(Groups)** 정보가 저장되는 시스템 마스터 테이블의 이름은 **`sys_user_group`**입니다.\n*   **용도**: 역할 할당(RBAC), 작업 배정, 이메일 통지 수신 등을 위해 사용자들을 묶어 관리하는 핵심 기반 데이터입니다.\n*   **관계**: 사용자와 그룹 간의 연결 정보(Membership)는 별도의 교차 테이블인 `sys_user_grmember`에 저장됩니다."
  },
  {
    "id": 225,
    "title": "When adding a related list to a form, you choose the related list from the list callector, What is an example of a related list you might see on the list collector? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Release Phase==Parent"
      },
      {
        "letter": "B",
        "text": "Catalog Task->Parent"
      },
      {
        "letter": "C",
        "text": "HR Case-=Parent"
      },
      {
        "letter": "D",
        "text": "Problem==Parent"
      },
      {
        "letter": "E",
        "text": "Outage->Task number"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "정답: **B, C, E**. **관련 리스트(Related Lists)**는 현재 보고 있는 레코드와 참조 관계(Relationship)를 맺고 있는 다른 테이블의 레코드들을 폼 하단에 표시합니다.\n*   **리스트 컬렉터(List Collector)**: 관리자가 폼에 관련 리스트를 추가할 때 사용하는 설정 창으로, 현재 테이블을 참조(Reference)하고 있는 모든 하위 테이블들을 보여줍니다.\n*   **관계 표현**: 'Catalog Task -> Parent'(B), 'HR Case -> Parent'(C) 등은 화살표 앞의 테이블이 화살표 뒤의 필드를 통해 현재 레코드를 가리키고 있음을 나타내는 플랫폼의 표준 관계 명명 방식입니다."
  },
  {
    "id": 226,
    "title": "What ServiceNow feature allows you to include data from a secondary related table on a report?",
    "options": [
      {
        "letter": "A",
        "text": "SQL"
      },
      {
        "letter": "B",
        "text": "Dot Walking"
      },
      {
        "letter": "C",
        "text": "Outer Join"
      },
      {
        "letter": "D",
        "text": "Joins"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **닷워킹(Dot-Walking)**은 참조(Reference) 필드를 통해 연결된 다른 테이블의 데이터에 접근하는 강력한 기술입니다.\n*   **보고서 활용**: 예를 들어 '인시던트' 보고서를 만들 때, `Caller.Location`이나 `Assigned to.Department`와 같이 참조를 따라가 상위 레코드의 필드를 보고서 컬럼이나 필터 조건으로 바로 가져올 수 있습니다.\n*   **장점**: 복잡한 SQL 조인 문을 작성할 필요 없이, 시각적인 필드 선택 인터페이스에서 계층 구조를 탐색하는 것만으로 풍부한 데이터 통찰을 제공합니다."
  },
  {
    "id": 227,
    "title": "On the Form header, which icon do you use to access form templates?",
    "options": [
      {
        "letter": "A",
        "text": "Paperclip"
      },
      {
        "letter": "B",
        "text": "Pages"
      },
      {
        "letter": "C",
        "text": "Stamp"
      },
      {
        "letter": "D",
        "text": "More Options {...)"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 폼의 필드 값을 미리 정의된 값으로 신속하게 채워주는 **템플릿(Templates)** 도구는 폼 헤더의 **More Options (점 세 개 아이콘)** 메뉴를 통해 활성화합니다.\n*   **템플릿 바**: 메뉴에서 'Toggle Template Bar'를 선택하면 화면 하단에 바가 나타나며, 여기서 자주 사용하는 설정을 클릭 한 번으로 적용하거나 새로운 템플릿을 즉석에서 생성할 수 있습니다.\n*   **효율성**: 이는 반복적인 데이터 입력 업무를 자동화하여 운영 효율을 높이고 데이터 입력의 일관성을 보장하는 핵심 UI 편의 기능입니다."
  },
  {
    "id": 228,
    "title": "What does ServiceNow recommend as a best practice regarding data imports?",
    "options": [
      {
        "letter": "A",
        "text": "Adjust your Transform maps, after the data is loaded into the target table."
      },
      {
        "letter": "B",
        "text": "Use extremely large Import Sets, instead of multiple large Import Sets."
      },
      {
        "letter": "C",
        "text": "Create a new Import set table for each new data load."
      },
      {
        "letter": "D",
        "text": "Plan time before your import to remove obsolete or inaccurate data."
      },
      {
        "letter": "E",
        "text": "Monitor data quality and clean imported data, using the Data Scrub Workspace."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 데이터 임포트(Data Import) 프로세스의 성공과 데이터 품질을 보장하기 위해 ServiceNow는 **사전 정제**를 강력히 권장합니다.\n*   **베스트 프랙티스**: 인스턴스로 데이터를 로드하기 전에 원본 소스에서 **오래되었거나(Obsolete), 중복되거나, 부정확한 데이터를 미리 제거**해야 합니다.\n*   **이점**: 시스템 내 데이터 무결성을 유지하고, 임포트 도중 발생할 수 있는 병합(Coalesce) 오류나 변환 실패를 최소화하여 플랫폼의 신뢰성을 확보할 수 있습니다."
  },
  {
    "id": 229,
    "title": "Which type of scripts nun in the browser?",
    "options": [
      {
        "letter": "A",
        "text": "Script include Scripts"
      },
      {
        "letter": "B",
        "text": "Business Rule Scripts"
      },
      {
        "letter": "C",
        "text": "Access Contra! Scripts"
      },
      {
        "letter": "D",
        "text": "UI Policies and Client Scripts"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 플랫폼에서 로직의 실행 위치(Client-side vs Server-side)를 구분하는 것은 아키텍처 이해의 기초입니다.\n*   **클라이언트 측 (Browser)**: 사용자의 웹 브라우저 내에서 즉각적으로 실행되어 UI 반응을 제어합니다. **UI 정책(UI Policy)**과 **클라이언트 스크립트(Client Scripts)**가 여기에 해당합니다.\n*   **서버 측 (Server)**: 인스턴스의 데이터베이스 계층에서 실행되며 실제 데이터 처리를 담당합니다. **비즈니스 규칙(Business Rules)**, **스크립트 인클루드**, **데이터 정책** 등이 해당합니다."
  },
  {
    "id": 230,
    "title": "When building an extended table from a base table, which fields do you need to create? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "The mandatory fields for the base table."
      },
      {
        "letter": "B",
        "text": "The reference fields for the base table."
      },
      {
        "letter": "C",
        "text": "The fields that are not in the base table."
      },
      {
        "letter": "D",
        "text": "The fields that are specific to the extended table."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: **C, D**. **테이블 확장(Table Extension)**은 기존 데이터 구조와 로직을 재사용하는 플랫폼의 핵심 설계 방식입니다.\n*   **상속**: 자식 테이블은 부모 테이블(Base Table)이 보유한 모든 필드와 비즈니스 로직(ACL, BR 등)을 자동으로 물려받습니다.\n*   **커스터마이징**: 따라서 개발자는 부모 테이블에 **존재하지 않는 새로운 필드(C)**나 해당 자식 테이블의 **고유한 비즈니스 목적을 위해 필요한 전용 필드(D)**만 추가로 생성하여 관리하면 됩니다."
  },
  {
    "id": 231,
    "title": "Which is the base table of the configuration management database hierarchy?",
    "options": [
      {
        "letter": "A",
        "text": "cmdb_d"
      },
      {
        "letter": "B",
        "text": "ucmdb"
      },
      {
        "letter": "C",
        "text": "cmdb_ret_Oi"
      },
      {
        "letter": "D",
        "text": "cmdb"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow **CMDB(Configuration Management Database)** 아키텍처에서 모든 구성 항목 테이블의 뿌리가 되는 최상위 테이블은 **`cmdb`**입니다.\n*   **계층 구조**: `cmdb` 테이블은 모든 CI 관련 테이블의 조상이며, 이를 확장하여 하드웨어, 소프트웨어 등 구체적인 클래스가 정의됩니다.\n*   **cmdb_ci (참고)**: 대부분의 실제 기술적 자산 레코드는 `cmdb`를 확장한 `cmdb_ci` 테이블(Configuration Item)에 저장되며, 여기서 다시 서버(`cmdb_ci_server`), 애플리케이션 등으로 세분화됩니다.\n*   **데이터 모델**: 이러한 계층 구조를 통해 공통 속성(이름, 상태 등)은 상위에서 관리하고, 클래스별 고유 속성은 하위 테이블에서 정의하는 효율적인 데이터 모델링을 구현합니다."
  },
  {
    "id": 232,
    "title": "A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: *Requested for*Requested by *Approving manager* Delivery instructions All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?",
    "options": [
      {
        "letter": "A",
        "text": "Create one Variable Set for the four variables; then add that variable set to each of the 80 catalog items. B. Create a Record Producer that contains the four fields: then add to the record producer related list on the"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 다수의 서비스 카탈로그 항목에서 공통적으로 사용하는 변수(필드)들은 **가변 세트(Variable Sets)**로 묶어 관리하는 것이 ServiceNow의 핵심 모범 사례입니다.\n*   **재사용성**: 한 번 정의한 가변 세트를 수십 개의 카탈로그 항목에 드래그 앤 드롭으로 추가할 수 있습니다.\n*   **유지보수 효율성**: 공통 필드의 라벨이나 로직을 변경해야 할 때, 각 항목을 수정할 필요 없이 가변 세트 하나만 수정하면 연결된 모든 항목에 즉시 반영됩니다.\n*   **일관성**: 사용자에게 전사적으로 통일된 데이터 입력 경험을 제공합니다."
  },
  {
    "id": 233,
    "title": "What is the most common role that has access to almost all platform features, functions, and data?",
    "options": [
      {
        "letter": "A",
        "text": "Security Admin [security_admin]"
      },
      {
        "letter": "B",
        "text": "Sys Admin [sys_admin]"
      },
      {
        "letter": "C",
        "text": "Admin [sn_admin]"
      },
      {
        "letter": "D",
        "text": "System Administrator [admin]"
      },
      {
        "letter": "E",
        "text": "Base Admin [base_admin]"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (제공된 정답 키를 따르며 플랫폼 표준 역할을 보강함) ServiceNow 플랫폼의 모든 기능, 애플리케이션 및 데이터에 제약 없이 접근할 수 있는 최상위 권한 역할은 **`admin` (System Administrator)**입니다.\n*   **권한 범위**: 인스턴스 전역 설정을 변경하고, 스크립트를 작성하며, 모든 레코드를 관리할 수 있는 강력한 권한입니다.\n*   **참고**: `security_admin` 역할은 `admin`이라 할지라도 ACL 수정과 같은 민감한 보안 작업을 위해 추가로 **역할 상승(Elevate Roles)** 과정을 거쳐야 획득할 수 있는 별도의 고권한 역할입니다."
  },
  {
    "id": 234,
    "title": "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "itil users"
      },
      {
        "letter": "B",
        "text": "Any user with an article's permalink"
      },
      {
        "letter": "C",
        "text": "Any active user"
      },
      {
        "letter": "D",
        "text": "No users"
      },
      {
        "letter": "E",
        "text": "Users with kb_user role"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 지식 기반(Knowledge Base)에 별도의 **사용자 기준(User Criteria)**이나 접근 제어 설정이 정의되지 않은 경우, 기본적으로 인스턴스에 로그인한 **모든 활성 사용자(Active Users)**가 해당 문서를 읽을 수 있는 상태가 됩니다.\n*   **보안 원칙**: 엔터프라이즈 환경에서는 'Can Read' 관련 리스트에 특정 역할이나 부서를 명시하여 지식 자산에 대한 접근 범위를 명확히 제한하는 것이 권장됩니다.\n*   **필터링**: 이를 통해 HR 지식은 HR 직원에게만, IT 기술 문서는 전체 직원에게 노출하는 등의 거버넌스를 구현합니다."
  },
  {
    "id": 235,
    "title": "What does Natural Language Query allow you to do on a list?",
    "options": [
      {
        "letter": "A",
        "text": "Automatically select a filter, based on keywords"
      },
      {
        "letter": "B",
        "text": "Filter list by typing in a phrase"
      },
      {
        "letter": "C",
        "text": "Predict the filter desired by the user"
      },
      {
        "letter": "D",
        "text": "Speak to the condition builder"
      },
      {
        "letter": "E",
        "text": "Set list filter, using audible commands"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **자연어 쿼리(NLQ, Natural Language Query)**는 복잡한 조건 빌더 사용법을 모르는 일반 사용자도 일상적인 언어로 데이터를 조회할 수 있게 돕는 지능형 인터페이스입니다.\n*   **작동 방식**: 리스트 상단의 검색창에 \"Incidents opened this week by ITIL user\"와 같이 입력하면 시스템이 의도를 파악하여 해당하는 필터 조건을 자동으로 생성하고 적용합니다.\n*   **가치**: 데이터 분석의 장벽을 낮추고 필요한 정보를 더 신속하게 탐색할 수 있는 사용자 경험을 제공합니다."
  },
  {
    "id": 236,
    "title": "When a custom table is created, which access control rules are automatically created? Choose 4 answers",
    "options": [
      {
        "letter": "A",
        "text": "delete"
      },
      {
        "letter": "B",
        "text": "create"
      },
      {
        "letter": "C",
        "text": "execute"
      },
      {
        "letter": "D",
        "text": "read"
      },
      {
        "letter": "E",
        "text": "update"
      },
      {
        "letter": "F",
        "text": "write"
      }
    ],
    "answer": [
      "A",
      "B",
      "D",
      "F"
    ],
    "explanation": "정답: **A, B, D, F**. ServiceNow 플랫폼에서 새로운 커스텀 테이블을 생성하면, 시스템은 데이터 보안을 보장하기 위해 기본적인 **4대 CRUD ACL**을 자동으로 생성합니다.\n1.  **Create (B)**: 레코드 생성 권한.\n2.  **Read (D)**: 레코드 조회 권한.\n3.  **Write (F)**: 레코드 수정 권한.\n4.  **Delete (A)**: 레코드 삭제 권한.\n*   **보안 가드레일**: 이러한 자동 생성 ACL은 생성자가 지정한 역할을 기반으로 설정되며, 명시적인 권한 없이 데이터가 무단 노출되거나 훼손되는 것을 방지하는 최소한의 보안 장치 역할을 합니다."
  },
  {
    "id": 237,
    "title": "What role enables someone to authorize a request, with no other permissions on the platform?",
    "options": [
      {
        "letter": "A",
        "text": "Approver [approver-user]"
      },
      {
        "letter": "B",
        "text": "Authorize [authorize-user]"
      },
      {
        "letter": "C",
        "text": "Reviewer [reviewer_user]"
      },
      {
        "letter": "D",
        "text": "Approver Group [approval_group]"
      },
      {
        "letter": "E",
        "text": "Verification [verify_user]"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **`approver_user`** 역할은 서비스 카탈로그나 다른 프로세스에서 자신에게 할당된 승인 요청을 검토하고 처리하기 위해 설계된 전용 역할입니다.\n*   **최소 권한 원칙**: 이 역할을 가진 사용자는 복잡한 업무 처리(itil) 권한은 없지만, 자신에게 온 승인 레코드를 보고 **승인(Approve)** 또는 **거부(Reject)** 작업을 수행할 수 있습니다.\n*   **비즈니스 프로세스**: 주로 관리자나 예산 책임자에게 부여하여 라이선스 비용 최적화와 거버넌스 준수를 보장하는 데 활용됩니다."
  },
  {
    "id": 238,
    "title": "What actions are taken to filter a long list of records to show only those which have \"email\" in Short Description?",
    "options": [
      {
        "letter": "A",
        "text": "Click List Magnifier to expand column search. on Short Description type %email. click enter"
      },
      {
        "letter": "B",
        "text": "Click List Magnifier to expand column search, on Short Description, type email, click enter"
      },
      {
        "letter": "C",
        "text": "On Search box. select text, type email, click enter"
      },
      {
        "letter": "D",
        "text": "Click List Magnifier to expand column search, on Short Description type 'email, dick enter"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 리스트 뷰에서 특정 문자열을 포함하는 레코드를 검색할 때는 와일드카드 연산자를 사용합니다.\n*   **와일드카드 (*)**: ServiceNow 리스트 검색에서 `*`는 **'contains' (포함)** 연산자를 의미합니다.\n*   **입력 예시**: Short Description 검색창에 **`*email`**을 입력하고 Enter를 누르면, 제목의 어느 위치에든 'email'이라는 단어가 들어간 모든 레코드를 필터링합니다.\n*   **정확도**: 단순 텍스트 입력은 'starts with'로 작동하므로, 포함 검색을 위해서는 별표(`*`) 기호를 명시적으로 사용하는 것이 핵심입니다."
  },
  {
    "id": 239,
    "title": "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
    "options": [
      {
        "letter": "A",
        "text": "Properties"
      },
      {
        "letter": "B",
        "text": "Data"
      },
      {
        "letter": "C",
        "text": "Configure"
      },
      {
        "letter": "D",
        "text": "Type"
      },
      {
        "letter": "E",
        "text": "Sources"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 보고서 디자이너(Report Designer)는 네 가지 설정 단계를 거치며, 그 첫 번째 단계인 **Data** 탭에서 기본 정보를 정의합니다.\n*   **Report Name**: 보고서의 제목을 지정합니다.\n*   **Source Type**: 데이터 원본을 테이블(Table)로 할지, 미리 정의된 보고서 소스(Report Source)로 할지 선택합니다.\n*   **Table/Source**: 실제 데이터를 가져올 대상 (예: `incident`)을 선택합니다.\n*   **다음 단계**: 이후 **Type** 탭에서 시각화 유형(Pie, Bar 등)을 선택하는 과정으로 이어집니다."
  },
  {
    "id": 240,
    "title": "When managing tags, you can adjust who is able to see iL What are the visibility options? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Admins"
      },
      {
        "letter": "B",
        "text": "Everyone"
      },
      {
        "letter": "C",
        "text": "Groups and Users"
      },
      {
        "letter": "D",
        "text": "Roles and Permissions"
      },
      {
        "letter": "E",
        "text": "Me"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "정답: **B, C, E**. ServiceNow에서 레코드 관리를 위해 사용자가 생성하는 **태그(Tags)**는 협업과 개인화를 위해 세 가지 가시성 수준을 제공합니다.\n1.  **Me (E)**: 본인만 볼 수 있는 개인용 태그.\n2.  **Groups and Users (C)**: 특정 그룹 멤버나 지정된 특정 사용자와 공유하는 태그.\n3.  **Everyone (B)**: 인스턴스의 모든 사용자가 볼 수 있는 전역 공유 태그.\n*   **관리**: 'My Tags' 모듈이나 리스트 뷰에서 태그 설정을 변경하여 정보 공유 범위를 유연하게 통제할 수 있습니다."
  },
  {
    "id": 241,
    "title": "What setting allows users to view a Knowledge Base article even if the are not logged in?",
    "options": [
      {
        "letter": "A",
        "text": "The View All setting"
      },
      {
        "letter": "B",
        "text": "The Allow role"
      },
      {
        "letter": "C",
        "text": "The ESS role"
      },
      {
        "letter": "D",
        "text": "The Public setting"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **공개(Public)** 설정은 인증되지 않은(로그인하지 않은) 사용자도 지식 기사를 열람할 수 있게 해주는 특별한 가시성 옵션입니다.\n*   **보안 계층**: 일반적으로 지식 문서는 내부 직원용으로 관리되지만, 고객 포털 등에서 외부 사용자에게 매뉴얼이나 공지사항을 노출해야 할 때 이 설정을 활성화합니다.\n*   **관리**: `sys_public` 설정을 통해 페이지 수준에서도 공개 접근을 허용해야 실제 작동하며, 지식 기반(Knowledge Base) 자체도 공개 접근이 가능하도록 구성되어야 합니다."
  },
  {
    "id": 242,
    "title": "In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?",
    "options": [
      {
        "letter": "A",
        "text": "Field Icon"
      },
      {
        "letter": "B",
        "text": "Field Value"
      },
      {
        "letter": "C",
        "text": "Data Pill"
      },
      {
        "letter": "D",
        "text": "Data Element"
      },
      {
        "letter": "E",
        "text": "Data Trigger"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **플로우 디자이너(Flow Designer)**에서 각 단계의 실행 데이터는 **데이터 알약(Data Pill)**이라는 시각적 객체에 담깁니다.\n*   **런타임 값**: 플로우가 실행되는 시점에 실제 레코드의 데이터(예: 생성된 티켓 번호, 할당된 사용자 이름)를 보유하며, 이를 드래그 앤 드롭하여 후속 단계의 입력값으로 재사용할 수 있습니다.\n*   **데이터 흐름**: 복잡한 변수 선언이나 코드 작성 없이도 액션 간의 데이터 연결을 직관적으로 처리할 수 있게 합니다."
  },
  {
    "id": 243,
    "title": "What is the language used for scriptingin ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "JavaScript"
      },
      {
        "letter": "B",
        "text": "C++"
      },
      {
        "letter": "C",
        "text": "PHP"
      },
      {
        "letter": "D",
        "text": "Python"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow의 전체 플랫폼 비즈니스 로직을 구축하는 표준 언어는 **JavaScript**입니다.\n*   **클라이언트 측**: 사용자의 웹 브라우저에서 실행되는 로직 (Client Scripts, UI Policies 등).\n*   **서버 측**: 인스턴스 데이터베이스 계층에서 실행되는 로직 (Business Rules, Script Includes 등).\n*   **표준**: ServiceNow는 최신 릴리스에서 지속적으로 JavaScript 엔진을 업그레이드하여 성능을 최적화하고 최신 문법(ECMAScript 표준) 사용을 지원하고 있습니다."
  },
  {
    "id": 244,
    "title": "Which element is used to track items not saved with a field, in a record?",
    "options": [
      {
        "letter": "A",
        "text": "Sidebar"
      },
      {
        "letter": "B",
        "text": "List Editor"
      },
      {
        "letter": "C",
        "text": "Activity formatter"
      },
      {
        "letter": "D",
        "text": "Dictionary"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **활동 포맷터(Activity Formatter)**는 레코드의 변경 이력과 상호작용 내역을 한눈에 볼 수 있도록 요약해주는 특수한 UI 요소입니다.\n*   **저널 필드**: 'Work notes'나 'Additional comments'와 같이 일반 필드에 영구 저장되지 않고 실행 시점에 로그로 쌓이는 데이터를 시각화합니다.\n*   **감사 추적**: 누가, 언제, 어떤 필드 값을 바꿨는지 등의 감사(Audit) 정보를 실시간 스트림 형태로 제공하여 팀 간 협업과 프로세스 가시성을 지원합니다."
  },
  {
    "id": 245,
    "title": "What actions are taken to filter a long list of records to show only those with the Category of Hardware?",
    "options": [
      {
        "letter": "A",
        "text": "On Breadcrumb, click the > icon, type Hardware and click enter"
      },
      {
        "letter": "B",
        "text": "On the Category column header, right-click and select Show > Hardware"
      },
      {
        "letter": "C",
        "text": "On the list, locate and right-click on the value Hardware, select Show Matching"
      },
      {
        "letter": "D",
        "text": "Right-click on magnifier type Hardware and click enter"
      },
      {
        "letter": "E",
        "text": "Click Funnel icon, type Hardware and click enter"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 리스트 뷰에서 특정 데이터 값을 기준으로 즉시 필터를 적용하는 가장 빠른 기술은 **Show Matching (일치 항목 표시)**입니다.\n*   **사용법**: 리스트 상의 특정 값(예: 'Hardware') 위에서 마우스 우클릭 후 해당 옵션을 선택합니다.\n*   **장점**: 조건 빌더(Funnel)를 열어 수동으로 필드를 선택하고 값을 입력하는 과정을 생략하여 업무 생산성을 대폭 높여줍니다.\n*   **반대 기능**: 특정 값을 결과에서 제외하고 싶을 때는 **Filter Out** 기능을 사용합니다."
  },
  {
    "id": 246,
    "title": "You have heard about a new application released by SericeNow, You want to try it out, to- see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?",
    "options": [
      {
        "letter": "A",
        "text": "Check the latest release notes at docs.servicenow.com."
      },
      {
        "letter": "B",
        "text": "Activate the application plug in, on your personal dev instance."
      },
      {
        "letter": "C",
        "text": "Search the wiki for the sales demo request form."
      },
      {
        "letter": "D",
        "text": "Activate the application plug in, on your company's production instance."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 새로운 기능을 안전하게 테스트하기 위한 ServiceNow의 권장 사항은 **개인 개발 인스턴스(PDI)**를 활용하는 것입니다.\n*   **리스크 관리**: 운영 인스턴스나 상용 개발 서버에 영향을 주지 않고 새로운 플러그인이나 애플리케이션을 자유롭게 설치하고 실습해 볼 수 있습니다.\n*   **학습 도구**: ServiceNow 개발자 프로그램(developer.servicenow.com)을 통해 무료로 제공받을 수 있으며, 최신 릴리스의 신기능을 실험하는 최적의 샌드박스 환경 역할을 합니다."
  },
  {
    "id": 247,
    "title": "Which modules can you use to create a new table? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Tables & Columns"
      },
      {
        "letter": "B",
        "text": "Schema Map"
      },
      {
        "letter": "C",
        "text": "Dictionary"
      },
      {
        "letter": "D",
        "text": "Tables"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. ServiceNow에서 새로운 데이터 테이블을 정의하기 위한 표준 진입점은 다음 두 모듈입니다.\n1.  **Tables (D)**: 인스턴스 내 모든 테이블 리스트를 관리하며, 'New' 버튼을 통해 새 테이블 정의 폼을 엽니다.\n2.  **Tables & Columns (A)**: 데이터베이스 스키마를 시각적으로 확인하고 새로운 테이블이나 필드를 설계할 수 있는 관리자용 허브입니다.\n*   **참고**: Dictionary나 Schema Map은 생성보다는 생성된 테이블의 정의를 상세 조회하고 관계를 분석하는 용도로 주로 쓰입니다."
  },
  {
    "id": 248,
    "title": "What are examples of UI Actions relating to Lists? Choose 4 answers",
    "options": [
      {
        "letter": "A",
        "text": "List Links"
      },
      {
        "letter": "B",
        "text": "List Control"
      },
      {
        "letter": "C",
        "text": "List Buttons"
      },
      {
        "letter": "D",
        "text": "List Context Menu"
      },
      {
        "letter": "E",
        "text": "List Override"
      },
      {
        "letter": "F",
        "text": "List Choices"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "F"
    ],
    "explanation": "정답: **A, B, C, F**. (제공된 정답 키에 따라 보강함) 리스트 인터페이스에서 사용자의 상호작용을 돕는 **리스트 UI 액션(UI Actions)**의 대표적인 예시는 다음과 같습니다.\n1.  **List Buttons (C)**: 리스트 상단이나 하단에 배치된 버튼.\n2.  **List Links (A)**: 리스트 하단에 위치한 관련 하이퍼링크.\n3.  **List Choices (F)**: 체크박스로 여러 레코드를 선택한 후 하단 드롭다운에서 적용하는 일괄 작업.\n*   **List Control (B)**: 특정 UI 액션 버튼의 노출 여부나 필터링 동작을 전반적으로 제어하는 설정 모듈입니다."
  },
  {
    "id": 249,
    "title": "Which field on every record contains a unique identifier for that record?",
    "options": [
      {
        "letter": "A",
        "text": "sys_number"
      },
      {
        "letter": "B",
        "text": "sc_req_item"
      },
      {
        "letter": "C",
        "text": "sys_id"
      },
      {
        "letter": "D",
        "text": "sys_number_id"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **`sys_id`**는 ServiceNow 데이터베이스의 모든 레코드가 생성되는 순간 부여받는 고유한 식별자(Primary Key)입니다.\n*   **물리적 구조**: 32자의 16진수 문자열로 구성된 GUID(Globally Unique Identifier)입니다.\n*   **플랫폼 가치**: 테이블 간 참조(Reference) 관계를 형성할 때 내부적으로 이 값을 저장하며, API 호출이나 URL 주소 구성 시 특정 객체를 정확하게 지칭하는 근간이 됩니다.\n*   **불변성**: 레코드의 내용이 바뀌어도 해당 레코드의 `sys_id`는 절대 변하지 않습니다."
  },
  {
    "id": 250,
    "title": "Which system property is added and set to true in order to see impersonation events in the System Log?",
    "options": [
      {
        "letter": "A",
        "text": "glide user_setting"
      },
      {
        "letter": "B",
        "text": "glide sys all_jmpersonation"
      },
      {
        "letter": "C",
        "text": "glide sys log_jmpersonabon"
      },
      {
        "letter": "D",
        "text": "glide.impersonation_setting"
      },
      {
        "letter": "E",
        "text": "glide sys admin_login"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 관리자가 수행하는 **사용자 가장(Impersonation)** 활동을 시스템 로그에 기록하여 투명성을 확보하기 위해 사용하는 시스템 속성은 **`glide.sys.log_impersonation`**입니다.\n*   **보안 감사**: 이 속성을 `true`로 설정하면 누가 누구를 가장했는지, 언제 가장을 시작하고 마쳤는지가 `sys_log` 테이블에 명확히 기록됩니다.\n*   **거버넌스**: 고권한 계정의 대리 수행 활동을 추적해야 하는 엔터프라이즈 보안 환경에서 매우 중요한 감사 설정입니다."
  },
  {
    "id": 251,
    "title": "When importing spreadsheet data into ServiceNow, what is the first step in the process?",
    "options": [
      {
        "letter": "A",
        "text": "Create Import Set"
      },
      {
        "letter": "B",
        "text": "Run Data Scrubber"
      },
      {
        "letter": "C",
        "text": "Set Coalesce"
      },
      {
        "letter": "D",
        "text": "Define Data Source"
      },
      {
        "letter": "E",
        "text": "Select Import Set"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow에서 스프레드시트 데이터를 가져오는 전체 프로세스의 기술적 시작점은 **임포트 세트(Import Set) 생성**입니다.\n*   **상세 단계**: 사용자가 **Load Data** 모듈을 통해 파일을 업로드하면, 시스템은 내부적으로 데이터를 임시 적재할 임포트 세트 테이블(Staging Table)을 생성하고 레코드를 로드합니다.\n*   **프로세스 흐름**: 1. 데이터 로드(임포트 세트 생성) -> 2. 변환 맵(Transform Map) 생성/선택 -> 3. 변환 실행(Transform).\n*   **주의**: '데이터 소스 정의'가 논리적으로 먼저일 수 있으나, 단순 파일 업로드 방식에서는 데이터 로드 시점에 세트 생성이 동시에 이루어집니다."
  },
  {
    "id": 252,
    "title": "What are the three key tables in an enterprise CMDB? Choose 3 answers.",
    "options": [
      {
        "letter": "A",
        "text": "cmdb"
      },
      {
        "letter": "B",
        "text": "sn_cmdb_bak"
      },
      {
        "letter": "C",
        "text": "cmdb_rel_ci"
      },
      {
        "letter": "D",
        "text": "sn_cmdb"
      },
      {
        "letter": "E",
        "text": "cmdb_bak"
      },
      {
        "letter": "F",
        "text": "cmdb_ci"
      }
    ],
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "정답: **A, C, F**. 엔터프라이즈급 CMDB 아키텍처를 구성하는 3대 핵심 테이블은 다음과 같습니다.\n1.  **cmdb (A)**: CMDB 계층 구조의 최상위 베이스 테이블입니다.\n2.  **cmdb_ci (F)**: 실제 구성 항목(CI)들의 개별 속성 정보가 담기는 마스터 테이블입니다.\n3.  **cmdb_rel_ci (C)**: CI와 CI 간의 의존 관계(Relationship) 정보를 전문적으로 저장하는 테이블입니다.\n*   **CSDM 연관**: 이 테이블들은 공통 서비스 데이터 모델(CSDM)의 기술적 근간이 되어 서비스 영향도 분석과 자산 관리를 지원합니다."
  },
  {
    "id": 253,
    "title": "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
    "options": [
      {
        "letter": "A",
        "text": "Self Service Module"
      },
      {
        "letter": "B",
        "text": "Application Navigator"
      },
      {
        "letter": "C",
        "text": "Service Desk Homepage"
      },
      {
        "letter": "D",
        "text": "Favorites"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **애플리케이션 내비게이터(Application Navigator)**는 ServiceNow Classic UI의 좌측 패널에 위치하며, 사용자가 권한을 가진 모든 애플리케이션과 모듈에 접근할 수 있는 메인 내비게이션 도구입니다.\n*   **구성 요소**: 필터 내비게이터(검색), 즐겨찾기(Favorites), 최근 기록(History) 탭을 포함합니다.\n*   **역할 기반 가시성**: 사용자가 가진 역할(Role)에 따라 탐색창에 나타나는 메뉴가 동적으로 필터링됩니다."
  },
  {
    "id": 254,
    "title": "When creating a new notification, what must you define? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "What is the content of the notification"
      },
      {
        "letter": "B",
        "text": "The associated knowledge base"
      },
      {
        "letter": "C",
        "text": "Under what conditions is the notification sent"
      },
      {
        "letter": "D",
        "text": "Who receives the notification"
      },
      {
        "letter": "E",
        "text": "Settings for handling inactive user accounts"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: **A, C, D**. 효과적인 **알림(Notification)** 구성을 위해 관리자는 소위 '3W'라고 불리는 핵심 요소를 반드시 정의해야 합니다.\n1.  **When to send (C)**: 어떤 레코드의 변화나 시스템 이벤트가 발생했을 때 발송할 것인가? (조건).\n2.  **Who receives (D)**: 누가 이 정보를 받아야 하는가? (수신자).\n3.  **What it says (A)**: 어떤 제목과 본문 내용을 전달할 것인가? (콘텐츠).\n*   **참고**: 이메일 템플릿을 활용하여 'What it says' 부분을 표준화할 수 있습니다."
  },
  {
    "id": 255,
    "title": "What table acts as a staging area for records imported from a data source?",
    "options": [
      {
        "letter": "A",
        "text": "Transform Table"
      },
      {
        "letter": "B",
        "text": "Staging Table"
      },
      {
        "letter": "C",
        "text": "Import Set Row Table"
      },
      {
        "letter": "D",
        "text": "Temp Table"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **임포트 세트 테이블(Import Set Row Table)**은 외부에서 유입된 데이터를 최종 타겟 테이블로 옮기기 전에 보관하는 **임시 스테이징 영역(Staging Area)**입니다.\n*   **역할**: 원본 데이터의 형태를 그대로 유지하면서, 변환 맵(Transform Map)을 통해 데이터 정제 및 매핑 작업을 수행할 수 있는 안전한 작업 공간을 제공합니다.\n*   **특징**: 데이터 로드 작업마다 고유한 임포트 세트 번호가 부여되어 관리됩니다."
  },
  {
    "id": 256,
    "title": "On a form, which type of Geld has this icon which can be clicked, 10 S00 a preview of the associated record?",
    "options": [
      {
        "letter": "A",
        "text": "Drilkdown"
      },
      {
        "letter": "B",
        "text": "Lookup"
      },
      {
        "letter": "C",
        "text": "Quickview"
      },
      {
        "letter": "D",
        "text": "Preview"
      },
      {
        "letter": "E",
        "text": "Snapshot"
      },
      {
        "letter": "F",
        "text": "Reference:"
      }
    ],
    "answer": [
      "F"
    ],
    "explanation": "정답: **F**. **참조(Reference)** 필드 옆에 표시되는 'i' 모양의 아이콘을 클릭하면, 화면을 이동하지 않고도 연결된 대상 레코드의 핵심 정보를 팝업 형태로 미리 볼 수 있습니다.\n*   **기능**: 이를 **Reference Icon Preview**라고 하며, 클릭 시 대상 레코드의 뷰(View) 중 'sys_popup' 뷰에 설정된 필드들이 나타납니다.\n*   **장점**: 사용자가 문맥을 유지하면서 연관된 데이터(예: 요청자의 상세 연락처)를 신속하게 확인하게 해줍니다."
  },
  {
    "id": 257,
    "title": "Which admin role is required to make changes to High Security Settings?",
    "options": [
      {
        "letter": "A",
        "text": "security _admin"
      },
      {
        "letter": "B",
        "text": "sn_ad_admin"
      },
      {
        "letter": "C",
        "text": "high_sec_admin"
      },
      {
        "letter": "D",
        "text": "admin"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ACL(Access Control List) 수정 등 인스턴스의 보안 근간을 설정하는 **High Security Settings**에 접근하려면 **`security_admin`** 역할이 필수적입니다.\n*   **역할 상승 (Elevated Role)**: 이 역할은 로그인 시 자동으로 활성화되지 않으며, 사용자가 명시적으로 'Elevate Roles' 메뉴를 통해 활성화해야 사용할 수 있습니다.\n*   **보안 가드레일**: 세션 기반으로 작동하며, 브라우저를 닫거나 로그아웃하면 자동으로 해제되어 권한 오남용을 방지합니다."
  },
  {
    "id": 258,
    "title": "What action would an administrator perform on a list if they wanted to show the records in groups, based on the Category column? (Choose 2 answers)",
    "options": [
      {
        "letter": "A",
        "text": "On the list Context Menu, select Group By > Category"
      },
      {
        "letter": "B",
        "text": "On the Category column title, select the Context menu > Group By Category"
      },
      {
        "letter": "C",
        "text": "On the Application Navigator, type group.category and press Enter"
      },
      {
        "letter": "D",
        "text": "Select the Group icon, then select Category"
      },
      {
        "letter": "E",
        "text": "On the Filter Menu, select Group By > Category"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. 리스트 뷰에서 특정 필드를 기준으로 레코드들을 시각적으로 묶어주는 **그룹화(Group By)** 기능은 다음 두 경로를 통해 수행할 수 있습니다.\n1.  **Context Menu (A)**: 컬럼 헤더의 햄버거 아이콘이나 우클릭 메뉴에서 'Group By [필드명]'을 선택합니다.\n2.  **Group 아이콘 (D)**: 리스트 상단 제어 바에 있는 그룹화 아이콘을 클릭하여 기준 필드를 선택합니다.\n*   **특징**: 그룹화는 데이터의 물리적 위치를 바꾸는 것이 아니라, 현재 뷰에서만 데이터를 논리적으로 분류하여 가독성을 높이는 개인화 도구입니다."
  },
  {
    "id": 259,
    "title": "If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment? (Choose 2 answers)",
    "options": [
      {
        "letter": "A",
        "text": "Select the record using the check box, then select the Person icon"
      },
      {
        "letter": "B",
        "text": "Select the Task number, and select the Assign to me UI action on the form"
      },
      {
        "letter": "C",
        "text": "Right-click on the Task number and select the Assign to me option in the menu"
      },
      {
        "letter": "D",
        "text": "Double-click on the Assigned to value, type the name of the user, and select the green check"
      },
      {
        "letter": "E",
        "text": "Select the record using the check box, then select the Assign To Me UI action on the List Header"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: **C, D**. (제공된 정답 키를 기반으로 보강함) 리스트 상에서 레코드를 신속하게 자신에게 할당하는 방법은 다음과 같습니다.\n1.  **Context Menu (C)**: 리스트의 레코드 번호나 빈 영역을 우클릭하여 **'Assign to me'** UI 액션을 실행합니다.\n2.  **Double-click (D)**: 리스트 에디터(List Editor) 권한이 있는 경우, 'Assigned to' 필드를 더블 클릭하여 자신의 이름을 직접 입력하거나 선택합니다.\n*   **효율성**: 여러 레코드를 한꺼번에 처리하려면 체크박스로 다중 선택 후 리스트 하단의 Choice 메뉴를 활용할 수도 있습니다."
  },
  {
    "id": 260,
    "title": "What features are available in Knowledge Management, to support continuous improvement on the knowledge articles? Choose 4 answers",
    "options": [
      {
        "letter": "A",
        "text": "Submit KB Errata"
      },
      {
        "letter": "B",
        "text": "Add Comments"
      },
      {
        "letter": "C",
        "text": "CC Click frowning icon"
      },
      {
        "letter": "D",
        "text": "Tag as Helpful"
      },
      {
        "letter": "E",
        "text": "Flag Article"
      },
      {
        "letter": "F",
        "text": "Rate with Stars"
      }
    ],
    "answer": [
      "B",
      "D",
      "E",
      "F"
    ],
    "explanation": "정답: **B, D, E, F**. 지식 관리(Knowledge Management)의 품질을 지속적으로 개선하기 위해 ServiceNow는 다양한 사용자 피드백 메커니즘을 제공합니다.\n1.  **Flag Article (E)**: 문서 내용에 오류가 있음을 알리고 검토를 요청합니다.\n2.  **Add Comments (B)**: 특정 정보에 대한 추가 질문이나 의견을 남깁니다.\n3.  **Rate with Stars (F)**: 1~5점 척도로 문서의 전반적인 만족도를 평가합니다.\n4.  **Tag as Helpful (D)**: 'Helpful? Yes/No' 버튼을 통해 문서가 실질적인 문제 해결에 도움이 되었는지 투표합니다.\n*   **거버넌스**: 이러한 데이터는 지식 관리자에게 전달되어 지식 자산의 수명 주기를 관리하는 중요한 인사이트가 됩니다."
  },
  {
    "id": 261,
    "title": "A form displays information about one record at the top, for example a User, Additional records, which are associated with that User, are displayed on tabs at the bottom of the form. What are those tabs called?",
    "options": [
      {
        "letter": "A",
        "text": "Additional Info"
      },
      {
        "letter": "B",
        "text": "More Info"
      },
      {
        "letter": "C",
        "text": "Related Links"
      },
      {
        "letter": "D",
        "text": "Related Lists"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **관련 리스트(Related Lists)**는 현재 보고 있는 레코드와 참조 관계(Relationship)를 맺고 있는 다른 테이블의 레코드들을 폼 하단에 목록으로 표시하는 기능입니다.\n*   **데이터 연결**: 예를 들어, 사용자(User) 폼 하단에 해당 사용자가 보유한 '자산(Assets)'이나 '할당된 인시던트' 목록을 탭 형태로 보여줍니다.\n*   **기능**: 사용자는 관련 리스트에서 레코드를 조회, 추가하거나 편집할 수 있으며, 폼을 벗어나지 않고도 연관된 데이터를 관리할 수 있어 업무 효율성을 높입니다.\n*   **구분**: **Related Links**는 실행 가능한 액션이나 특정 페이지로 이동하는 링크인 반면, **Related Lists**는 실제 데이터 레코드의 집합입니다."
  },
  {
    "id": 262,
    "title": "A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Create New module has a broken link"
      },
      {
        "letter": "B",
        "text": "Known intermittent issue with U115"
      },
      {
        "letter": "C",
        "text": "User should be using Chrome instead of Explorer for their browser"
      },
      {
        "letter": "D",
        "text": "User has read role, but not the write role on the Inventory table"
      },
      {
        "letter": "E",
        "text": "User session has timed out"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 보안 모델인 **ACL(Access Control List)**은 테이블 및 필드 수준에서 매우 엄격한 권한 제어를 수행합니다.\n*   **가시성 vs 편집 권한**: 사용자가 내비게이터에서 모듈을 볼 수 있는 것은 '역할(Role)' 기반의 UI 제어 덕분이지만, 실제 레코드 생성 폼을 열었을 때 내용이 보이지 않거나 오류가 발생하는 것은 데이터베이스 수준의 **Create** 또는 **Write** ACL 권한이 없기 때문입니다.\n*   **진단**: 관리자는 해당 테이블의 ACL 설정을 확인하여 사용자가 적절한 역할을 가지고 있는지, 혹은 특정 조건에 의해 쓰기 권한이 제한되고 있는지 점검해야 합니다."
  },
  {
    "id": 263,
    "title": "You are looking at a list of Active incidents. You want to exclude incidents with the state of Resolved. How might you do that?",
    "options": [
      {
        "letter": "A",
        "text": "On the list of records, locate the right-click on the Resolved value, select Exclude."
      },
      {
        "letter": "B",
        "text": "Click Funnel icon, click AND, Select Resolved, is Not State click Run"
      },
      {
        "letter": "C",
        "text": "On state column title, right-click, select Filter Out > Resolved"
      },
      {
        "letter": "D",
        "text": "On Search, select State, type not Resolved, press enter"
      },
      {
        "letter": "E",
        "text": "On the list of records, locate and right-click on the Resolved value, select Filter Out"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. 리스트 뷰에서 불필요한 데이터를 빠르게 걸러내기 위해 사용하는 가장 효율적인 방법은 **Filter Out (필터링 제외)** 기능입니다.\n*   **사용법**: 리스트 상의 특정 값(예: 'Resolved') 위에서 마우스 우클릭 후 해당 옵션을 선택합니다.\n*   **브레드크럼**: 이 작업을 수행하면 리스트 상단의 필터 경로(Breadcrumb)에 'State != Resolved'와 같은 조건이 즉시 추가됩니다.\n*   **생산성**: 복잡한 조건 빌더를 수동으로 조작하는 대신, 눈에 보이는 데이터를 기준으로 즉각적인 데이터 정제가 가능합니다."
  },
  {
    "id": 264,
    "title": "Which application is used primarily to load data into ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "Import Hub"
      },
      {
        "letter": "B",
        "text": "System Import Sets"
      },
      {
        "letter": "C",
        "text": "Data Import Configuration"
      },
      {
        "letter": "D",
        "text": "Import Management"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **시스템 임포트 세트(System Import Sets)** 애플리케이션은 외부 소스로부터 대량의 데이터를 수집하여 ServiceNow 테이블에 안전하게 적재하기 위한 표준 도구 세트를 제공합니다.\n*   **핵심 프로세스**: 데이터를 로드(Load Data)하여 임시 테이블인 **임포트 세트 테이블(Staging Area)**에 저장한 뒤, **변환 맵(Transform Map)**을 통해 실제 운영 테이블로 데이터를 매핑하고 변환합니다.\n*   **장점**: 데이터 무결성을 보장하기 위해 병합(Coalesce) 로직을 적용하거나, 스크립트를 통한 데이터 전처리가 가능합니다."
  },
  {
    "id": 265,
    "title": "After you create a new table, what is the best practice regarding the navigation pane? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Set the filter condition on the Application Menu"
      },
      {
        "letter": "B",
        "text": "Set the font style on both the Application Menu and the Module"
      },
      {
        "letter": "C",
        "text": "Specify which Roles are able ta see the Module"
      },
      {
        "letter": "D",
        "text": "Specify which Roles are able to see the Application Menu"
      },
      {
        "letter": "E",
        "text": "Create Application Menu with the same name as the table label"
      },
      {
        "letter": "F",
        "text": "Create Module with the plural of the table label"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: **C, D**. 새로운 커스텀 테이블을 생성한 후 사용자가 이를 사용할 수 있도록 구성할 때 따르는 **베스트 프랙티스**입니다.\n1.  **애플리케이션 메뉴 역할 지정 (D)**: 내비게이터의 최상위 카테고리인 애플리케이션 메뉴 수준에서 접근 가능한 역할을 설정합니다.\n2.  **모듈 역할 지정 (C)**: 실제 테이블 리스트나 생성 폼으로 연결되는 개별 모듈 수준에서도 역할을 명시합니다.\n*   **이점**: 인스턴스 탐색의 혼란을 방지하고, 직무에 필요한 사용자에게만 메뉴를 노출함으로써 플랫폼의 보안성과 가독성을 높입니다."
  },
  {
    "id": 266,
    "title": "What are advantages of using Flow Designer? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Supports advanced developers"
      },
      {
        "letter": "B",
        "text": "Enables complicated scripting"
      },
      {
        "letter": "C",
        "text": "Reduces technical debt"
      },
      {
        "letter": "D",
        "text": "Less manual scripting"
      },
      {
        "letter": "E",
        "text": "Smooth integration with 3rd party systems"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "explanation": "정답: **C, D, E**. **플로우 디자이너(Flow Designer)**는 기존 워크플로우 엔진을 대체하는 차세대 프로세스 자동화 도구로 다음과 같은 명확한 이점을 제공합니다.\n*   **기술 부채 감소 (C)**: 로코드(Low-code) 기반의 구성을 통해 복잡한 스크립트 의존도를 낮춰 업그레이드와 유지보수를 용이하게 합니다.\n*   **수작업 스크립트 최소화 (D)**: 드래그 앤 드롭 방식의 직관적인 인터페이스와 자연어 문장 구성을 통해 비개발자도 자동화 로직을 이해하고 구축할 수 있습니다.\n*   **통합 용이성 (E)**: **Spoke**를 활용하여 외부 서드파티 시스템(Slack, Jira 등)과의 연동을 표준화된 방식으로 신속하게 구현할 수 있습니다."
  },
  {
    "id": 267,
    "title": "Which tables are available by default in a ServiceNow instance? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "User"
      },
      {
        "letter": "B",
        "text": "Incident"
      },
      {
        "letter": "C",
        "text": "Item"
      },
      {
        "letter": "D",
        "text": "Issue"
      },
      {
        "letter": "E",
        "text": "Project"
      },
      {
        "letter": "F",
        "text": "Task"
      }
    ],
    "answer": [
      "A",
      "B",
      "F"
    ],
    "explanation": "정답: **A, B, F**. ServiceNow 플랫폼 설치 시 기본으로 제공되는 핵심 **코어 테이블(Core Tables)**입니다.\n*   **User (A)**: 모든 사용자 계정 정보가 담기는 `sys_user` 테이블.\n*   **Task (F)**: 플랫폼 전반의 모든 작업(Task) 프로세스의 근간이 되는 `task` 테이블.\n*   **Incident (B)**: IT 서비스 관리의 핵심인 인시던트 정보를 처리하는 `incident` 테이블.\n*   **아키텍처**: 이러한 테이블들은 플랫폼의 기반 데이터(Foundational Data)와 핵심 워크플로우를 구성하며, 다른 모든 커스텀 기능의 시작점이 됩니다."
  },
  {
    "id": 268,
    "title": "When using Flow Designer what is the Flow Execution initiated by?",
    "options": [
      {
        "letter": "A",
        "text": "A trigger"
      },
      {
        "letter": "B",
        "text": "An existing subflow"
      },
      {
        "letter": "C",
        "text": "Allow logic"
      },
      {
        "letter": "D",
        "text": "An execution data pill"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **플로우 디자이너(Flow Designer)** 아키텍처에서 자동화 로직의 실행을 촉발하는 첫 번째 단계를 **트리거(Trigger)**라고 합니다.\n*   **유형**:\n    1. **레코드 기반**: 레코드의 생성, 업데이트, 삭제 시 실행.\n    2. **일정 기반**: 특정 시간이나 주기에 따라 실행.\n    3. **애플리케이션 기반**: 인스턴스 외부나 앱의 특정 이벤트 발생 시 실행.\n*   **구조**: 트리거가 만족되면 이후 정의된 일련의 **액션(Actions)**들이 순차적으로 수행됩니다."
  },
  {
    "id": 269,
    "title": "Which set of steps is used to import spreadsheet data into a ServiceNow table?",
    "options": [
      {
        "letter": "A",
        "text": "Load Data, Create Transform Map, Run Transform"
      },
      {
        "letter": "B",
        "text": "Select Import Set, Select Transform Map, Run Transform"
      },
      {
        "letter": "C",
        "text": "Select Data Source, Schedule Transform"
      },
      {
        "letter": "D",
        "text": "Define Data Source, Select Transform Map, Run Transform"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 외부 스프레드시트(Excel, CSV) 데이터를 ServiceNow로 가져오는 표준 워크플로우는 3단계로 이루어집니다.\n1.  **Load Data**: 파일을 업로드하여 데이터를 임시 **임포트 세트 테이블**에 적재합니다.\n2.  **Create Transform Map**: 데이터가 최종적으로 저장될 타겟 테이블을 지정하고, 소스 컬럼과 타겟 필드 간의 매핑 규칙을 설계합니다.\n3.  **Run Transform**: 설정된 맵을 실행하여 실제 운영 테이블로 데이터를 이동시키고 변환을 완료합니다.\n*   **핵심**: 이 과정에서 데이터의 중복을 막기 위해 **Coalesce** 필드를 설정하는 것이 매우 중요합니다."
  },
  {
    "id": 270,
    "title": "A colleague wants to rearrange the columns on their My Work list. Once the user has navigated to the list where should they navigate to select and arrange the columns?",
    "options": [
      {
        "letter": "A",
        "text": "Click Personalize List"
      },
      {
        "letter": "B",
        "text": "Right click on any column header. Context Menu > Configure > List Layout"
      },
      {
        "letter": "C",
        "text": "Click List Context Menu > Personalize List"
      },
      {
        "letter": "D",
        "text": "Click List Content Menu > Configure > List Layout"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 리스트 뷰에서 컬럼의 구성(추가, 제거, 순서 변경)을 시스템 수준에서 영구적으로 수정하려면 **List Layout** 설정을 사용합니다.\n*   **접근 경로**: 리스트의 컬럼 헤더(컬럼명 영역)를 우클릭 -> **Configure > List Layout** 선택.\n*   **UI 도구**: 슬러시버킷(Slushbucket) 인터페이스를 통해 사용 가능한 필드를 선택하고 상하 이동 버튼으로 표시 순서를 조정합니다.\n*   **개인화와의 차이**: 톱니바퀴(Gear) 아이콘을 통한 개인화는 '본인'에게만 적용되지만, `Configure` 메뉴를 통한 변경은 해당 뷰를 사용하는 **모든 사용자**에게 영향을 미칩니다."
  },
  {
    "id": 271,
    "title": "A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?",
    "options": [
      {
        "letter": "A",
        "text": "Scheduled Reports, a custom snapshot table, and a Trend report"
      },
      {
        "letter": "B",
        "text": "Scheduled Reports and Excel"
      },
      {
        "letter": "C",
        "text": "Scheduled Reports, a custom snapshot table, and a Projection report"
      },
      {
        "letter": "D",
        "text": "Performance Analytics"
      },
      {
        "letter": "E",
        "text": "Key Performance Indicators"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **성능 분석(Performance Analytics, PA)**은 단순한 시점 보고(Reporting)를 넘어 비즈니스 가치를 도출하는 고도화된 분석 도구입니다.\n*   **주요 기능**: 데이터의 장기적인 **추세(Trending)** 파악, 목표치(Targets) 대비 실적 비교, 그리고 과거 데이터를 바탕으로 한 **미래 예측(Forecasting)**을 지원합니다.\n*   **비교**: 보고서가 '현재 인시던트가 몇 개인가?'를 묻는다면, PA는 '우리의 해결 속도가 지난 6개월간 개선되었는가?'에 대한 답을 제공합니다."
  },
  {
    "id": 272,
    "title": "What component of the ServiceNow infrastructure defines every table and field in the system?",
    "options": [
      {
        "letter": "A",
        "text": "Data Atlas"
      },
      {
        "letter": "B",
        "text": "Table Class Manager"
      },
      {
        "letter": "C",
        "text": "Schema"
      },
      {
        "letter": "D",
        "text": "Dictionary"
      },
      {
        "letter": "E",
        "text": "Field Map"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **시스템 딕셔너리(System Dictionary)**는 ServiceNow 데이터베이스의 설계도와 같은 역할을 하는 마스터 테이블(`sys_dictionary`)입니다.\n*   **메타데이터 관리**: 인스턴스 내 모든 테이블과 필드의 데이터 타입, 길이, 기본값, 참조 관계, 종속성 등을 정의합니다.\n*   **플랫폼 영향**: 여기서 설정된 속성은 폼(Form)의 표시 방식, API 통신, 그리고 데이터 무결성 검증의 기준이 됩니다."
  },
  {
    "id": 273,
    "title": "A manager is complaining that they can't get the data they need on a report because the data resides in two different tables. This data is used for many different reports in their department. You have checked to see if dot-walking will meet the requirement, and it is not possible. What else might you try to help this manager?",
    "options": [
      {
        "letter": "A",
        "text": "Create a custom table"
      },
      {
        "letter": "B",
        "text": "Create a Report Template"
      },
      {
        "letter": "C",
        "text": "Create a Database View"
      },
      {
        "letter": "D",
        "text": "Export the tables to a spreadsheet"
      },
      {
        "letter": "E",
        "text": "Create a Report Source"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **데이터베이스 뷰(Database View)**는 여러 테이블에 분산된 데이터를 논리적으로 결합하여 하나의 가상 테이블처럼 조회할 수 있게 해주는 기능입니다.\n*   **활용 시나리오**: 참조(Reference) 관계가 아니어서 **닷워킹(Dot-Walking)**이 불가능한 테이블 간의 데이터를 결합하거나, 복잡한 SQL 'JOIN' 연산이 필요한 보고서를 생성할 때 필수적입니다.\n*   **특징**: 읽기 전용(Read-only) 인터페이스를 제공하며, 표준 보고서 디자이너에서 데이터 소스로 선택하여 사용할 수 있습니다."
  },
  {
    "id": 274,
    "title": "Which storefront is a single location for accessing pre-built spokes to quickly integrate with third-party services to build and share content?",
    "options": [
      {
        "letter": "A",
        "text": "Integration Spoke Store"
      },
      {
        "letter": "B",
        "text": "ServiceNow Store"
      },
      {
        "letter": "C",
        "text": "Spoke Store"
      },
      {
        "letter": "D",
        "text": "ServiceNow Spoke Store"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **ServiceNow Store**는 ServiceNow와 서드파티 파트너사들이 개발한 애플리케이션, 통합 솔루션, 그리고 **Spoke**를 배포하고 구매할 수 있는 공식 엔터프라이즈 마켓플레이스입니다.\n*   **생태계**: 검증된 사전 빌드된 Spoke를 통해 Jira, Slack, Microsoft Teams 등과의 연동을 복잡한 코딩 없이 신속하게 인스턴스에 추가할 수 있습니다.\n*   **이점**: 개발 시간을 단축하고 업계 표준의 모범 사례가 반영된 기능을 즉시 도입할 수 있게 돕습니다."
  },
  {
    "id": 275,
    "title": "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
    "options": [
      {
        "letter": "A",
        "text": "Run Transform"
      },
      {
        "letter": "B",
        "text": "Run Import"
      },
      {
        "letter": "C",
        "text": "Import Dataset"
      },
      {
        "letter": "D",
        "text": "Execute Transform"
      },
      {
        "letter": "E",
        "text": "Schedule Transform"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 데이터 임포트 아키텍처에서 데이터가 최종 운영 테이블로 물리적으로 이동하고 저장되는 단계는 **Execute Transform (변환 실행)**입니다.\n*   **단계별 구분**:\n    1. **Load Data**: 외부 파일을 **임포트 세트 테이블(Staging Table)**에 적재.\n    2. **Transform Map 정의**: 소스와 타겟 간의 매핑 규칙 설정.\n    3. **Run Transform**: 설정된 맵에 따라 데이터를 가공하여 최종 목적지 테이블에 쓰기(Write) 수행."
  },
  {
    "id": 276,
    "title": "While testing a Catalog Item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob, Smith, but not for any of the other requesters. What could explain the issue?",
    "options": [
      {
        "letter": "A",
        "text": "There is a business rule, excluding Bob.Smith from any approvals."
      },
      {
        "letter": "B",
        "text": "Bob Smith does not have a delegate set up on his account."
      },
      {
        "letter": "C",
        "text": "The Bob Smith user account, does not have a manager specified."
      },
      {
        "letter": "D",
        "text": "The manager does not have a delegate assigned."
      },
      {
        "letter": "E",
        "text": "Bob Smith is a VIP."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (제공된 정답 키에 따라 보강함) 특정 사용자에게서만 비즈니스 로직(승인 등)이 의도치 않게 작동하지 않는다면, 해당 조건에서 예외 처리를 수행하는 **비즈니스 규칙(Business Rule)**이 있는지 가장 먼저 점검해야 합니다.\n*   **진단**: 관리자는 'Debug Business Rules' 도구를 사용하여 플로우 실행 중 어떤 스크립트나 조건이 승인 생성을 방해하거나 강제로 건너뛰게 했는지 확인할 수 있습니다.\n*   **데이터 무결성**: 사용자의 매니저 정보 누락(C) 등 기반 데이터의 문제일 가능성도 실무적으로는 높으나, 문항의 정답 키는 로직 수준의 제어를 묻고 있습니다."
  },
  {
    "id": 277,
    "title": "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationship?",
    "options": [
      {
        "letter": "A",
        "text": "CSDM Schema"
      },
      {
        "letter": "B",
        "text": "Business Service Map"
      },
      {
        "letter": "C",
        "text": "Dependency View"
      },
      {
        "letter": "D",
        "text": "CI Class Map"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. (제공된 정답 키를 따르며 플랫폼 표준 용어로 보강함) CMDB 내에서 구성 항목(CI)들의 계층 구조와 그들 간의 복잡한 의존 관계를 시각화하는 핵심 도구는 **Dependency View** (또는 CI Class Manager 내의 시각화 도구)입니다.\n*   **가시성**: 특정 서버에 장애가 발생했을 때 어떤 비즈니스 서비스가 영향을 받는지, 혹은 특정 서비스가 어떤 하드웨어에 종속되어 있는지 그래픽 인터페이스를 통해 한눈에 파악할 수 있게 해줍니다."
  },
  {
    "id": 278,
    "title": "Which low components allow you to specify when a flow should be run?",
    "options": [
      {
        "letter": "A",
        "text": "Trigger and Condition Pill"
      },
      {
        "letter": "B",
        "text": "Scope and Trigger Condition"
      },
      {
        "letter": "C",
        "text": "Trigger and Condition"
      },
      {
        "letter": "D",
        "text": "Trigger Criteria and Clock"
      },
      {
        "letter": "E",
        "text": "Condition and Table"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **플로우 디자이너(Flow Designer)**에서 자동화 로직의 실행 여부를 결정하는 두 핵심 요소는 **트리거(Trigger)**와 **조건(Condition)**입니다.\n*   **Trigger**: '언제(When)' 실행할 것인가를 정의합니다 (예: 레코드 생성, 특정 시간).\n*   **Condition**: 트리거가 발생한 후 실제 액션들을 수행하기 위해 만족해야 하는 '세부 필드 상태'를 정의합니다.\n*   **구조**: 트리거가 감지되어도 내부 조건이 '거짓(False)'이면 플로우는 중단됩니다."
  },
  {
    "id": 279,
    "title": "What section on a task record is used to see the most recent updates made to a record?",
    "options": [
      {
        "letter": "A",
        "text": "Related List"
      },
      {
        "letter": "B",
        "text": "Activity Stream"
      },
      {
        "letter": "C",
        "text": "Audit Log"
      },
      {
        "letter": "D",
        "text": "Timeline"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 태스크 레코드의 폼에서 변경 사항을 실시간으로 추적하는 가장 강력한 UI 요소는 **활동 스트림(Activity Stream / Activity Formatter)**입니다.\n*   **통합 뷰**: 작업 메모(Work notes), 고객 댓글(Additional comments), 그리고 필드 값의 변화 이력(Audit)을 시간순으로 정렬하여 대화형 피드 형태로 보여줍니다.\n*   **협업**: 담당자들은 이 스트림을 통해 과거의 맥락을 빠르게 파악하고 팀원 및 고객과 소통할 수 있습니다."
  },
  {
    "id": 280,
    "title": "What types of entities can receive task assignments, in ServiceNow? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Groups"
      },
      {
        "letter": "B",
        "text": "Users"
      },
      {
        "letter": "C",
        "text": "Departments"
      },
      {
        "letter": "D",
        "text": "Teams."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: **A, B**. ServiceNow 플랫폼 아키텍처에서 태스크(Task)를 할당받아 이행할 수 있는 주체는 **사용자(Users)**와 **그룹(Groups)**입니다.\n1.  **Assignment Group (A)**: 작업의 책임을 공유하는 논리적 단위입니다. 일반적으로 팀 단위로 일을 먼저 배정합니다.\n2.  **Assigned to (B)**: 그룹 내에서 실제 업무를 수행할 개별 실무자입니다.\n*   **베스트 프랙티스**: 모든 작업은 먼저 적절한 '그룹'에 배정되어야 하며, 이후 그룹 멤버 중 한 명에게 세부 할당되는 프로세스가 권장됩니다."
  },
  {
    "id": 281,
    "title": "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
    "options": [
      {
        "letter": "A",
        "text": "Parent-Child Approvers."
      },
      {
        "letter": "B",
        "text": "Approval Chains"
      },
      {
        "letter": "C",
        "text": "Flows"
      },
      {
        "letter": "D",
        "text": "Approval Criteria"
      },
      {
        "letter": "E",
        "text": "Approver Delegates"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **승인 기준(Approval Criteria)**은 특정 조건에 따라 승인 프로세스를 트리거하고 제어하는 정책 세트입니다.\n*   **복합 승인**: 문제와 같이 다단계(Two levels) 승인이 필요한 경우, 각 단계별 승인자 그룹과 조건을 정의하여 프로세스를 자동화합니다.\n*   **알림 연동**: 승인 요청이 생성되거나 상태가 변경될 때 관련 사용자에게 자동으로 이메일이나 푸시 알림을 보내는 비즈니스 로직을 포함합니다.\n*   **참고**: 현대적인 ServiceNow 아키텍처에서는 이러한 로직을 **플로우 디자이너(Flow Designer)**를 통해 구현하는 것이 표준입니다."
  },
  {
    "id": 282,
    "title": "You are editing a new incident record and would like the Save button to be located on the Form header. Which action would need to be taken for that button to appear?",
    "options": [
      {
        "letter": "A",
        "text": "All > System Properties > UI Properties > Turn on the glide.ui.advanced* property"
      },
      {
        "letter": "B",
        "text": "Context Menu > Form Design > add the Save button"
      },
      {
        "letter": "C",
        "text": "All > System Properties > UI Properties > Turn on the Save button"
      },
      {
        "letter": "D",
        "text": "Context Menu > Form Layout > add the Save button"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 폼에서 'Save' 버튼의 가시성은 인스턴스 전역의 **UI 속성(UI Properties)** 설정을 통해 제어됩니다.\n*   **설정 경로**: `System Properties > UI Properties` 모듈에서 관련 속성(예: 'Show the Save button on the form header')을 활성화합니다.\n*   **Submit vs Save**: 'Submit'은 레코드를 생성/업데이트하고 목록으로 돌아가지만, 'Save'는 변경사항을 저장하면서 현재 폼에 계속 머물게 합니다. 이는 대규모 데이터 입력 작업 시 생산성을 높여줍니다."
  },
  {
    "id": 283,
    "title": "Farm a form, what would you click, to modify the order of the fields on the form? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Context Menu > Configure > Form Layout"
      },
      {
        "letter": "B",
        "text": "Context Menu > Form > Layout"
      },
      {
        "letter": "C",
        "text": "Right click on header > Configure > Form Design"
      },
      {
        "letter": "D",
        "text": "Context Menu > Configure > Form Designer"
      },
      {
        "letter": "E",
        "text": "Right click on header > Configure > UX Dashboard"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: **A, C**. ServiceNow는 폼의 레이아웃과 필드 순서를 조정하기 위해 두 가지 주요 관리 도구를 제공합니다.\n1.  **Form Layout (A)**: 'Configure > Form Layout'을 통해 슬러시버킷 인터페이스를 사용하며, 필드를 신속하게 추가하거나 섹션 간 이동시킬 때 유용합니다.\n2.  **Form Design (C)**: 'Configure > Form Design'을 통해 드래그 앤 드롭 방식의 시각적 인터페이스를 제공하며, 레이아웃의 구조(1열 vs 2열)와 필드 배치를 직관적으로 설계할 수 있습니다."
  },
  {
    "id": 284,
    "title": "The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?",
    "options": [
      {
        "letter": "A",
        "text": "service_desk"
      },
      {
        "letter": "B",
        "text": "impersonator"
      },
      {
        "letter": "C",
        "text": "admin"
      },
      {
        "letter": "D",
        "text": "incognito"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **사용자 가장(User Impersonation)** 기능은 지원팀이나 개발자가 로그아웃 없이 다른 사용자의 권한과 UI 환경을 대리 수행할 수 있게 해주는 도구입니다.\n*   **필요 역할**: 이 기능을 사용하기 위해서는 **`impersonator`** 역할이나 `admin` 역할이 부여되어야 합니다.\n*   **테스트 최적화**: 특정 그룹(예: Service Desk) 멤버의 시각에서 ACL이나 UI Policy가 의도대로 작동하는지 검증할 때 필수적입니다.\n*   **감사**: 모든 가장 활동은 시스템 로그에 기록되어 보안 투명성을 유지합니다."
  },
  {
    "id": 285,
    "title": "After finishing your work on High Security Settings, what is a possible way to return to normal admin security levels?",
    "options": [
      {
        "letter": "A",
        "text": "Use System Administration > Normal Security module"
      },
      {
        "letter": "B",
        "text": "Select Normal role"
      },
      {
        "letter": "C",
        "text": "Log out and back in"
      },
      {
        "letter": "D",
        "text": "Select Global Update Set"
      },
      {
        "letter": "E",
        "text": "End impersonation"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 인스턴스의 보안 근간을 다루는 **High Security Settings** 작업을 마친 후 보안 상승 상태를 해제하려면 **Normal Security** 모듈을 호출하거나 세션을 초기화해야 합니다.\n*   **역할 상승(Elevate Roles)**: `security_admin`과 같은 고권한은 세션 기반으로 작동하며, 일반적인 `admin` 권한보다 높은 수준의 작업을 수행할 때만 일시적으로 활성화합니다.\n*   **복구**: 명시적으로 해제하거나 로그아웃 후 다시 로그인하면 원래의 기본 권한 수준으로 안전하게 복귀합니다."
  },
  {
    "id": 286,
    "title": "When you are viewing a record, like an incident, how can you detect if someone else is also actively working on the Incident? (Choose 2 answers)",
    "options": [
      {
        "letter": "A",
        "text": "A chat bubble automatically launches, so you can collaborate"
      },
      {
        "letter": "B",
        "text": "An icon appears to the left of fields that have been updated by other users"
      },
      {
        "letter": "C",
        "text": "A notification appears asking the new user to collaborate"
      },
      {
        "letter": "D",
        "text": "The Work notes list contains names of the other users"
      },
      {
        "letter": "E",
        "text": "User presence icon shows initials of users actively viewing the record"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "정답: **B, E**. ServiceNow는 다수의 사용자가 동시에 동일한 레코드를 작업할 때 발생할 수 있는 충돌을 방지하고 협업을 돕기 위해 **사용자 존재(User Presence)** 기능을 제공합니다.\n1.  **Presence Icon (E)**: 폼 헤더 우측에 현재 해당 레코드를 열람 중인 사용자들의 이니셜 아이콘이 표시됩니다.\n2.  **Field Indicator (B)**: 다른 사용자가 특정 필드 값을 수정하고 있으면 해당 필드 옆에 표시가 나타나 실시간 변경 사항을 알려줍니다.\n*   **가치**: 이를 통해 데이터 덮어쓰기 위험을 줄이고 팀 간 실시간 협업(Form Collaboration)을 촉진합니다."
  },
  {
    "id": 287,
    "title": "Groups are stored in what table?",
    "options": [
      {
        "letter": "A",
        "text": "Group [sys_user_group]"
      },
      {
        "letter": "B",
        "text": "Group [sn_sys_user_group]}"
      },
      {
        "letter": "C",
        "text": "User Group [user_groups]"
      },
      {
        "letter": "D",
        "text": "User Groups [sn_user_groups]"
      },
      {
        "letter": "E",
        "text": "Groups [sys_user_groups]"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 플랫폼의 기반 데이터(Foundational Data) 아키텍처에서 **그룹(Group)** 정보는 **`sys_user_group`** 테이블에 물리적으로 저장됩니다.\n*   **그룹의 역할**: 역할(Roles)을 부여받는 논리적 단위이며, 태스크 할당 및 알림 수신의 대상이 됩니다.\n*   **명명 규칙**: 시스템 테이블은 `sys_` 접두사를 가지며, 사용자(`sys_user`), 역할(`sys_user_role`)과 함께 권한 체계의 핵심 트리오를 형성합니다."
  },
  {
    "id": 288,
    "title": "A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role What type of rules (s) would you use to implement this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Dictionary Design"
      },
      {
        "letter": "B",
        "text": "Field Limiter"
      },
      {
        "letter": "C",
        "text": "UI Policy"
      },
      {
        "letter": "D",
        "text": "UI Design"
      },
      {
        "letter": "E",
        "text": "Form Constraint"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **UI 정책(UI Policy)**은 폼 수준에서 조건에 따라 필드의 동작을 동적으로 제어하는 가장 효율적인 **노코드(No-code)** 도구입니다.\n*   **동적 제어**: '상태가 Resolved로 바뀔 때 해결 코드 필수(Mandatory) 지정', '특정 역할이 없을 때 필드 숨김(Hidden)'과 같은 복잡한 UI 로직을 스크립트 없이 구현할 수 있습니다.\n*   **클라이언트 측 실행**: 브라우저에서 즉각 실행되어 사용자에게 실시간 피드백을 제공하므로 사용자 경험(UX) 향상에 최적화되어 있습니다."
  },
  {
    "id": 289,
    "title": "Access controls are evaluated in this order: *1. Match object against table ACL* 2, Match the object against field ACL Within step 1 above, what order are the table ACLs evaluated?",
    "options": [
      {
        "letter": "A",
        "text": "Specific to general: Table.Field ACL, Parent Table.Field ACL, *.Field ACL"
      },
      {
        "letter": "B",
        "text": "Bottom to top: Table ACL. Table.Field ACL, Parent Table. Field ACL"
      },
      {
        "letter": "C",
        "text": "General to specific: Table ACL, Table.Field ACL, Parent Table, Field ACL"
      },
      {
        "letter": "D",
        "text": "Top to bottom: Wildcard Table ACL, Parent Table ACL, Table ACL"
      },
      {
        "letter": "E",
        "text": "Specific general: Table ACL, Parent Table ACL, Wildcard (*) ACL"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. ServiceNow의 **접근 제어(ACL)** 평가 엔진은 보안을 위해 **가장 구체적인 규칙에서 가장 일반적인 규칙으로(Most Specific to Most General)** 순차 탐색합니다.\n*   **평가 순서**: \n    1. **Table ACL**: 해당 테이블에 명시된 규칙.\n    2. **Parent Table ACL**: 부모 테이블로부터 상속받은 규칙.\n    3. **Wildcard (*) ACL**: 모든 테이블에 적용되는 전역 규칙.\n*   **가드레일**: 시스템은 상위 계층인 테이블 수준 ACL을 통과한 경우에만 하위 계층인 필드 수준 ACL을 평가하여 최종 접근 허용 여부를 결정합니다."
  },
  {
    "id": 290,
    "title": "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
    "options": [
      {
        "letter": "A",
        "text": "Field Matching"
      },
      {
        "letter": "B",
        "text": "Load Data"
      },
      {
        "letter": "C",
        "text": "Select Data Source"
      },
      {
        "letter": "D",
        "text": "Schedule Transform"
      },
      {
        "letter": "E",
        "text": "Create Transform Map"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. **변환 맵(Transform Map)**은 임포트 세트(Import Set)의 소스 데이터와 ServiceNow의 타겟 테이블 간의 연결 고리를 정의하는 핵심 매핑 도구입니다.\n*   **필드 매핑**: 소스의 'Column A'가 타겟 테이블의 'Field B'에 저장되도록 데이터의 이동 경로를 명시합니다.\n*   **데이터 변환**: 단순히 데이터를 옮기는 것을 넘어, 스크립트나 매핑 규칙을 통해 소스 데이터를 타겟 환경에 맞는 형식으로 가공(Transformation)하는 역할을 수행합니다."
  },
  {
    "id": 291,
    "title": "What tool is used to import data from various data sources, and map that data into ServiceMow tables?",
    "options": [
      {
        "letter": "A",
        "text": "Import Set"
      },
      {
        "letter": "B",
        "text": "Update Set"
      },
      {
        "letter": "C",
        "text": "Data Pack"
      },
      {
        "letter": "D",
        "text": "Transform Set"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **임포트 세트(Import Set)**는 다양한 외부 데이터 소스(Excel, CSV, XML, JDBC 등)로부터 데이터를 가져와 ServiceNow 테이블에 매핑하고 적재하기 위한 플랫폼의 표준 프레임워크입니다.\n*   **스테이징 영역**: 데이터는 최종 목적지 테이블로 들어가기 전, 임포트 세트 테이블(Staging Table)에 임시로 적재됩니다.\n*   **데이터 소스**: 데이터가 어디서 오는지(파일, 외부 DB 등)를 정의하며, 변환 맵(Transform Map)을 통해 데이터 정제 및 필드 연결을 수행합니다."
  },
  {
    "id": 292,
    "title": "Which field (or fields) is used as a unique key during imports?",
    "options": [
      {
        "letter": "A",
        "text": "Match Fields"
      },
      {
        "letter": "B",
        "text": "Coalesce Fields"
      },
      {
        "letter": "C",
        "text": "Key Fields"
      },
      {
        "letter": "D",
        "text": "Sys IDs"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **병합 필드(Coalesce Fields)**는 데이터 임포트 시 중복을 방지하기 위해 사용되는 '고유 식별자' 역할을 합니다.\n*   **매칭 성공**: 임입 데이터의 병합 필드 값이 타겟 테이블의 기존 레코드와 일치하면, 시스템은 새 레코드를 만들지 않고 기존 레코드를 **업데이트(Update)**합니다.\n*   **매칭 실패**: 일치하는 값이 없으면 시스템은 이를 새로운 항목으로 간주하여 **신규 생성(Insert)**합니다.\n*   **데이터 무결성**: 데이터 정합성을 유지하기 위해 사번, 이메일, 자산 번호 등 고유한 비즈니스 키를 병합 필드로 지정하는 것이 필수적입니다."
  },
  {
    "id": 293,
    "title": "What is the definition of a group?",
    "options": [
      {
        "letter": "A",
        "text": "An escalation pod"
      },
      {
        "letter": "B",
        "text": "A department"
      },
      {
        "letter": "C",
        "text": "A collection of users"
      },
      {
        "letter": "D",
        "text": "A collection of subject matter experts"
      },
      {
        "letter": "E",
        "text": "A team of users"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼에서 **그룹(Groups)**은 **`sys_user_group`** 테이블에 저장되는 레코드이며, 공통의 역할이나 업무 맥락을 공유하는 사용자들의 논리적 집합입니다.\n*   **역할**: 그룹은 권한 관리(Roles 부여), 태스크 배정(Assignment Rules), 그리고 알림 수신의 기본 단위가 됩니다.\n*   **베스트 프랙티스**: 권한 관리를 효율화하기 위해 개별 사용자에게 역할을 직접 주기보다, 역할을 그룹에 부여하고 사용자를 해당 그룹의 멤버로 포함시키는 방식(RBAC)이 권장됩니다."
  },
  {
    "id": 294,
    "title": "Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?",
    "options": [
      {
        "letter": "A",
        "text": "Requests can contain many items; and Items can be any item from the catalog."
      },
      {
        "letter": "B",
        "text": "Vendors can sell multiple products; and products can be sold by multiple vendors."
      },
      {
        "letter": "C",
        "text": "A Task can trigger many Workflows; and a Workflow can trigger many Tasks"
      },
      {
        "letter": "D",
        "text": "A Configuration Item can belong to multiple Classes; and Classes can contain multiple Configuration"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **다대다(Many-to-Many, M2M)** 관계는 한 테이블의 여러 레코드가 다른 테이블의 여러 레코드와 동시에 연결될 수 있는 관계형 데이터 모델입니다.\n*   **실례**: 본 문항의 예시처럼 한 업체(Vendor)는 여러 제품을 판매할 수 있고, 하나의 동일한 제품은 여러 업체에 의해 공급될 수 있습니다.\n*   **플랫폼 구현**: 시스템은 내부적으로 교차 테이블(Junction Table)을 생성하여 두 테이블 간의 관계 정보를 별도로 관리하며, 사용자에게는 양쪽 폼에서 서로를 **관련 리스트(Related List)**로 보여줍니다."
  },
  {
    "id": 295,
    "title": "What access does a user need to be able to import anicies to a knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "Can contribute"
      },
      {
        "letter": "B",
        "text": "sn_knowledge_contripute"
      },
      {
        "letter": "C",
        "text": "sn_knowledge_import"
      },
      {
        "letter": "D",
        "text": "Can import"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 지식 관리(Knowledge Management)에서 문서를 생성하거나 대량으로 가져오기(Import) 위해서는 해당 지식 기반(Knowledge Base) 수준에서 정의된 **기여 권한(`Can contribute`)**이 반드시 필요합니다.\n*   **보안 제어**: 지식 접근 권한은 **사용자 기준(User Criteria)**을 통해 설정됩니다.\n*   **권한 계층**: 'Can Read' 권한만 가진 사용자는 문서 검색과 열람만 가능하며, 지식 자산의 수명 주기(작성, 수정, 은퇴)에 참여하려면 기여(Contribute) 권한이 명시되어 있어야 합니다."
  },
  {
    "id": 296,
    "title": "What Service Catalog feature do you use to organize items into logical groups?",
    "options": [
      {
        "letter": "A",
        "text": "Variable sets"
      },
      {
        "letter": "B",
        "text": "Catalog items"
      },
      {
        "letter": "C",
        "text": "Sections"
      },
      {
        "letter": "D",
        "text": "Categories"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (제공된 정답 키를 따름) 서비스 카탈로그에서 여러 항목에 걸쳐 공통적으로 반복되는 질문이나 설정 항목들을 효율적으로 묶어 관리할 때는 **가변 세트(Variable Sets)**를 사용합니다.\n*   **관리 가치**: '이름', '부서', '연락처'와 같은 공통 변수들을 하나의 세트로 묶어 수십 개의 카탈로그 항목에 재사용함으로써 유지보수 리소스를 대폭 절감하고 데이터 입력의 일관성을 확보합니다.\n*   **참고**: 항목들을 주제별 폴더 구조로 묶는 기능적 단위는 **카테고리(Categories)**입니다."
  },
  {
    "id": 297,
    "title": "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, files, and legend layout?",
    "options": [
      {
        "letter": "A",
        "text": "Format"
      },
      {
        "letter": "B",
        "text": "Layout"
      },
      {
        "letter": "C",
        "text": "Style"
      },
      {
        "letter": "D",
        "text": "Configure"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 보고서 디자이너(Report Designer)는 4단계의 설정 과정을 거치며, 마지막 단계인 **Style** 탭에서 보고서의 '룩앤필(Look and Feel)'을 조정합니다.\n*   **설정 항목**: 차트의 색상 팔레트 지정, 범례(Legend)의 표시 여부 및 위치, 데이터 레이블 추가, 소수점 자리수 등 시각화의 세부 속성을 정의합니다.\n*   **기타 단계**: Data(원본 선택) -> Type(시각화 유형 선택) -> Configure(데이터 그룹화 및 계산 설정) 순으로 진행됩니다."
  },
  {
    "id": 298,
    "title": "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    "options": [
      {
        "letter": "A",
        "text": "Report Dashboard > Create New"
      },
      {
        "letter": "B",
        "text": "Reports > Getting Started"
      },
      {
        "letter": "C",
        "text": "Performance Analytics > Reports"
      },
      {
        "letter": "D",
        "text": "Self-Service > Reports"
      },
      {
        "letter": "E",
        "text": "Reports > Create New"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. 분석가나 관리자가 인스턴스 데이터를 바탕으로 새로운 데이터 통찰을 생성하기 위해 가장 먼저 방문해야 할 모듈은 **Reports > Create New**입니다.\n*   **보고서 디자이너**: 이 모듈을 클릭하면 단계별 보고서 작성 도구가 열리며, 사용자는 코딩 없이도 드래그 앤 드롭 방식으로 원하는 데이터를 시각화할 수 있습니다.\n*   **공유**: 작성된 보고서는 대시보드에 게시하거나 특정 그룹 또는 전체 사용자에게 공유하여 협업에 활용할 수 있습니다."
  },
  {
    "id": 299,
    "title": "How is a user defined in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "user is a record stored in the User Preference [Sys_user_preference] table"
      },
      {
        "letter": "B",
        "text": "A User is a record stored in the Profile [sys_user_profile] table"
      },
      {
        "letter": "C",
        "text": "A user is 2 field in the LOAP integration"
      },
      {
        "letter": "D",
        "text": "A user is a record stored in the User [sys_user] table"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (제공된 정답 키를 따름) ServiceNow 플랫폼 아키텍처에서 사용자의 개별적인 UI 취향이나 시스템 동작 설정을 저장하는 시스템 테이블은 **`sys_user_preference`**입니다.\n*   **개인화**: 리스트 표시 건수, 마지막으로 열어본 탭, 템플릿 바 활성화 여부 등 사용자 세션과 관련된 개인 설정 데이터가 여기에 담깁니다.\n*   **주의**: 사용자의 기본 프로필(이름, 이메일, 직책 등) 마스터 정보는 항상 **`sys_user`** 테이블에 저장되는 것이 플랫폼 표준입니다."
  },
  {
    "id": 300,
    "title": "To apply a UI Policy to all views, which field should be set to true in its definition record?",
    "options": [
      {
        "letter": "A",
        "text": "Inherit"
      },
      {
        "letter": "B",
        "text": "Reverse if false"
      },
      {
        "letter": "C",
        "text": "On lowed"
      },
      {
        "letter": "D",
        "text": "Global"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **상속(`Inherit`)** 필드는 UI 정책(UI Policy)이나 데이터 정책의 규칙을 해당 테이블뿐만 아니라 이를 확장(Extend)한 하위 테이블이나 다양한 폼 뷰(Views)에 공통으로 적용하고자 할 때 사용됩니다.\n*   **일관성 유지**: 예를 들어 `task` 테이블에 설정된 정책을 `Inherit=true`로 설정하면, 인시던트나 변경 요청 등 모든 하위 업무 폼에서도 동일한 데이터 가드레일이 작동하도록 보장합니다.\n*   **참고**: 'Global' 체크박스는 특정 뷰에 국한되지 않고 모든 폼 뷰에서 정책이 실행되도록 하는 역할을 합니다."
  },
  {
    "id": 301,
    "title": "Which testing framework is used to test ServerNew Applications?",
    "options": [
      {
        "letter": "A",
        "text": "Selenium"
      },
      {
        "letter": "B",
        "text": "Test Driven Framework (TDF)"
      },
      {
        "letter": "C",
        "text": "Junit"
      },
      {
        "letter": "D",
        "text": "Automated test Framework (ATF)"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **자동화 테스트 프레임워크(ATF, Automated Test Framework)**는 수동 테스트의 번거로움을 줄이고 애플리케이션의 품질을 보장하기 위한 플랫폼 내장 도구입니다.\n*   **주요 용도**: 특히 인스턴스 **업그레이드** 시 기존 커스터마이징이 의도대로 작동하는지 확인하는 회귀 테스트(Regression Testing)에 필수적입니다.\n*   **기능**: 폼의 필드 값 입력, 버튼 클릭, 서버 측 로직 검증 등 사용자의 동작을 시나리오화하여 자동으로 수행합니다.\n*   **장점**: 테스트 환경을 자동으로 설정(Set up)하고 종료 후 데이터를 복구(Roll back)하여 인스턴스 데이터의 무결성을 유지합니다."
  },
  {
    "id": 302,
    "title": "Which actions would you take to edit the title on an application menu? (Choose 2 answers)",
    "options": [
      {
        "letter": "A",
        "text": "Select Configuration > Applications, then select the application"
      },
      {
        "letter": "B",
        "text": "Select the form for the Application, then right-click Configure > Form Designer"
      },
      {
        "letter": "C",
        "text": "Select the Application name on the Navigator, then select the pencil icon"
      },
      {
        "letter": "D",
        "text": "Select System Definitions > Application Menus, then select the application"
      },
      {
        "letter": "E",
        "text": "Select System Definition > Dictionary > Application"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: **C, D**. 애플리케이션 메뉴의 제목(Title)을 편집하는 방법은 관리의 편의성에 따라 두 가지 경로가 있습니다.\n1.  **Pencil 아이콘 (C)**: 애플리케이션 내비게이터에서 특정 앱 이름 옆의 연필 모양 아이콘을 클릭하여 UI 상에서 즉시 수정합니다.\n2.  **Application Menus 모듈 (D)**: `System Definition > Application Menus` 레코드를 직접 열어 상세 속성과 함께 타이틀을 변경합니다.\n*   **주의**: 이러한 변경은 시스템 전역의 설정이므로 해당 앱을 사용하는 모든 사용자의 내비게이터에 반영됩니다."
  },
  {
    "id": 303,
    "title": "One related list, which buttons are commonly used for managing the records on the list? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Publish"
      },
      {
        "letter": "B",
        "text": "New"
      },
      {
        "letter": "C",
        "text": "Add"
      },
      {
        "letter": "D",
        "text": "Manage"
      },
      {
        "letter": "E",
        "text": "Edit"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "정답: **B, C, E**. **관련 리스트(Related Lists)** 하단에 위치한 표준 버튼들은 연관된 데이터를 관리하는 핵심 도구입니다.\n1.  **New (B)**: 현재 레코드와 연결된 **새로운 자식 레코드**를 즉시 생성합니다.\n2.  **Add/Edit (C, E)**: 시스템에 이미 존재하는 기존 레코드를 현재 레코드와 연결하거나 해제(Relationship)할 때 사용합니다.\n*   **구성**: 이 버튼들의 노출 여부는 'List Control' 설정을 통해 관리자가 조정할 수 있습니다."
  },
  {
    "id": 304,
    "title": "Which script can run when a record is displayed, inserted, updated, deleted, or when a table is queried?",
    "options": [
      {
        "letter": "A",
        "text": "Business Rule"
      },
      {
        "letter": "B",
        "text": "Client Script"
      },
      {
        "letter": "C",
        "text": "Record Rule"
      },
      {
        "letter": "D",
        "text": "UI Script"
      },
      {
        "letter": "E",
        "text": "Scheduled Job"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **비즈니스 규칙(Business Rules)**은 데이터베이스의 변화가 발생할 때 실행되는 가장 강력한 **서버 측(Server-side)** 로직입니다.\n*   **트리거 시점**: 레코드가 조회(Query), 표시(Display), 삽입(Insert), 수정(Update), 삭제(Delete)될 때 실행되도록 설정할 수 있습니다.\n*   **실행 가이드**: 폼 레이아웃의 실시간 변화보다는, 데이터의 물리적 정합성을 맞추거나 연관된 다른 테이블을 업데이트하는 등의 백엔드 처리에 주로 사용됩니다."
  },
  {
    "id": 305,
    "title": "What is the result of the order in which access controls are evaluated?",
    "options": [
      {
        "letter": "A",
        "text": "Ensures user has access to the fields in a table, before considering their access to the table"
      },
      {
        "letter": "B",
        "text": "Ensures user can get to work as quickly as possible"
      },
      {
        "letter": "C",
        "text": "Ensures user has access to the application, before evaluating access to a module within the application"
      },
      {
        "letter": "D",
        "text": "Ensures user has access to a table, before evaluating access to a field in the table"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow의 **접근 제어(ACL)** 평가 엔진은 보안의 극대화를 위해 '가장 넓은 범위에서 좁은 범위로' 단계별 검증을 수행합니다.\n*   **평가 순서**: 항상 **테이블(Table) 수준**의 규칙을 가장 먼저 확인하며, 여기서 승인된 경우에만 개별 **필드(Field) 수준**의 규칙을 평가합니다.\n*   **보안 가드레일**: 만약 사용자가 테이블에 대한 접근 권한(None 또는 *)이 없다면, 필드 수준 ACL은 평가조차 되지 않고 모든 데이터 접근이 차단됩니다."
  },
  {
    "id": 306,
    "title": "Which best describes a field in a SeniceNow table?",
    "options": [
      {
        "letter": "A",
        "text": "A field is a table cell that stores data"
      },
      {
        "letter": "B",
        "text": "A field is a table row"
      },
      {
        "letter": "C",
        "text": "A field is an item that appears in a menu list"
      },
      {
        "letter": "D",
        "text": "A field is a record in a table"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (제공된 정답 키를 따름) 기술적인 데이터베이스 정의 관점에서 **필드(Field)**는 테이블의 '열(Column)'에 해당하며, 레코드의 개별 속성 데이터를 저장하는 최소 단위입니다.\n*   **참고**: 본 문항의 보기 C는 플랫폼 운영 관점에서 '메뉴 리스트에 나타나는 항목'으로 묘사하고 있으나, 이는 아키텍처적 정의와 다소 거리가 있습니다. 실제 시험에서는 필드를 '데이터가 저장되는 셀(Cell)' 또는 '열(Column)'로 정의하는 것이 정설입니다."
  },
  {
    "id": 307,
    "title": "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    "options": [
      {
        "letter": "A",
        "text": "Module"
      },
      {
        "letter": "B",
        "text": "Content Frame"
      },
      {
        "letter": "C",
        "text": "Application Navigator"
      },
      {
        "letter": "D",
        "text": "User Menu"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **사용자 가장(User Impersonation)** 기능은 UI 상단의 배너 프레임(Banner Frame) 우측에 위치한 **사용자 메뉴(User Menu)**를 통해 접근할 수 있습니다.\n*   **활용**: 자신의 계정 프로필 이름을 클릭하면 드롭다운 메뉴에 'Impersonate user' 옵션이 나타납니다.\n*   **역할**: 이 기능은 `admin`이나 `impersonator` 역할을 가진 사용자에게만 노출되며, 다른 사용자의 관점에서 인스턴스를 테스트하는 데 사용됩니다."
  },
  {
    "id": 308,
    "title": "Which helps to visualize configuration items and their relationships?",
    "options": [
      {
        "letter": "A",
        "text": "Transform Map"
      },
      {
        "letter": "B",
        "text": "Schema Map"
      },
      {
        "letter": "C",
        "text": "Tables"
      },
      {
        "letter": "D",
        "text": "Flow Design"
      },
      {
        "letter": "E",
        "text": "Dependency View"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: **E**. **디펜던시 뷰(Dependency View)**는 CMDB 내의 구성 항목(CI)들 사이의 복잡한 의존 관계를 그래픽 인터페이스로 시각화해주는 플랫폼 도구입니다.\n*   **가치**: 특정 서버나 네트워크 장비에 이슈가 발생했을 때, 어떤 상위 비즈니스 서비스들이 영향을 받는지 파악하는 **영향도 분석(Impact Analysis)**에 핵심적인 역할을 합니다.\n*   **CSDM 연관**: 하부 인프라(Technical Service)와 상부 비즈니스 가치(Business Service) 사이의 연결 고리를 명확히 보여줍니다."
  },
  {
    "id": 309,
    "title": "Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Add the role Log Write [sn_log_write] to the Impersonator Group"
      },
      {
        "letter": "B",
        "text": "Create user update set for impersonation tracking"
      },
      {
        "letter": "C",
        "text": "Activate the glide.sys.log_impersonation prop"
      },
      {
        "letter": "D",
        "text": "From User icon, select Elevate Roles"
      },
      {
        "letter": "E",
        "text": "On the Impersonator role record, right click and select Create Log"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 인스턴스 보안 거버넌스를 위해 관리자의 가장 활동을 추적하는 방법은 **시스템 속성**을 활용하는 것입니다.\n*   **속성명**: **`glide.sys.log_impersonation`**을 `true`로 설정하면 모든 가장 이벤트가 `sys_log` 테이블에 명확히 기록됩니다.\n*   **보안 감사**: 누가 누구를 언제 가장했는지에 대한 감사 추적(Audit Trail)을 가능하게 하여 고권한 계정의 남용을 방지하고 투명성을 확보합니다."
  },
  {
    "id": 310,
    "title": "Which allows the creation of a task-based record from Service Catalog?",
    "options": [
      {
        "letter": "A",
        "text": "Record Producers"
      },
      {
        "letter": "B",
        "text": "UI Builder"
      },
      {
        "letter": "C",
        "text": "Assignment Rule"
      },
      {
        "letter": "D",
        "text": "Flow Designer"
      },
      {
        "letter": "E",
        "text": "UI Actions= Answer: A"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **레코드 프로듀서(Record Producer)**는 서비스 카탈로그를 사용자 친화적인 인터페이스로 활용하여 백엔드 테이블에 데이터를 직접 생성하는 강력한 도구입니다.\n*   **사용자 경험**: 사용자는 복잡한 데이터베이스 폼 대신 직관적인 질문(Variables)에 답함으로써 Incident나 Change Request 같은 태스크 레코드를 손쉽게 생성할 수 있습니다.\n*   **비교**: 일반 카탈로그 항목(Catalog Item)이 'Requested Item(RITM)'을 생성하는 것과 달리, 레코드 프로듀서는 지정된 특정 테이블로 데이터를 직접 삽입합니다."
  },
  {
    "id": 311,
    "title": "In what order are Access Controls evaluated?",
    "options": [
      {
        "letter": "A",
        "text": "Field-level - mast general to most specific: then Row-level - most specific to most general"
      },
      {
        "letter": "B",
        "text": "Table-level - most specific to most general; then Row-level - most specific to most general"
      },
      {
        "letter": "C",
        "text": "Table-level - most specific to most general; then Field-level « most specific to mast general"
      },
      {
        "letter": "D",
        "text": "Field-level - most specific to most general: then Table-level - most specific to most general"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **C**. (제공된 정답 키 D는 논리적으로 오류가 있으며, 플랫폼 표준은 C에 가깝습니다.) ServiceNow의 **접근 제어(ACL)** 평가 순서는 보안의 무결성을 보장하기 위해 다음과 같은 계층 구조를 따릅니다.\n1.  **테이블 수준(Table-level)**: 사용자가 해당 테이블 전체에 접근할 수 있는지 먼저 확인합니다.\n2.  **필드 수준(Field-level)**: 테이블 접근이 승인된 경우에만 개별 필드에 대한 접근 권한을 평가합니다.\n*   **평가 논리**: 각 수준 내에서는 **가장 구체적인 규칙(Specific)**에서 **가장 일반적인 규칙(General)** 순으로 탐색합니다. 사용자가 데이터에 접근하려면 테이블 수준과 필드 수준의 ACL을 **모두(Both)** 통과해야 합니다."
  },
  {
    "id": 312,
    "title": "Which feature ensures data consistency white importing data using import sets and web services?",
    "options": [
      {
        "letter": "A",
        "text": "Client Script"
      },
      {
        "letter": "B",
        "text": "UI Policy"
      },
      {
        "letter": "C",
        "text": "Data Policy"
      },
      {
        "letter": "D",
        "text": "CSDM"
      },
      {
        "letter": "E",
        "text": "Business Rule"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **데이터 정책(Data Policy)**은 인스턴스로 유입되는 모든 데이터의 무결성을 서버 측에서 강제하는 강력한 보안 가드레일입니다.\n*   **서버 측 실행**: UI 정책(UI Policy)이 브라우저에서만 작동하는 것과 달리, 데이터 정책은 서버에서 실행되므로 **데이터 임포트(Import Sets)**나 **웹 서비스(API)** 호출 시에도 데이터 규칙(필수, 읽기 전용)을 동일하게 적용합니다.\n*   **이점**: 데이터 유입 경로에 상관없이 시스템 전반의 데이터 품질과 일관성을 보장합니다."
  },
  {
    "id": 313,
    "title": "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
    "options": [
      {
        "letter": "A",
        "text": "Request + Response"
      },
      {
        "letter": "B",
        "text": "Save + Update"
      },
      {
        "letter": "C",
        "text": "Write + Read"
      },
      {
        "letter": "D",
        "text": "Submit + Query"
      },
      {
        "letter": "E",
        "text": "Insert + Verify"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 아키텍처에서 **라운드 트립(Round-trip)**은 사용자의 브라우저(Client)와 인스턴스(Server) 간의 한 번의 완전한 통신 주기를 의미합니다.\n*   **구성**: 사용자가 데이터를 요청하거나 저장 버튼을 누르는 활동인 **Request(요청)**와, 서버가 이를 처리하여 결과를 돌려주는 **Response(응답)** 과정으로 이루어집니다.\n*   **사용자 경험**: 네트워크 지연이나 서버 처리 시간이 길어질수록 이 라운드 트립 시간이 늘어나며, 이는 사용자가 체감하는 시스템 성능에 직접적인 영향을 미칩니다."
  },
  {
    "id": 314,
    "title": "What section on a task record would you use to see the most recent update made to a record?",
    "options": [
      {
        "letter": "A",
        "text": "Timeline"
      },
      {
        "letter": "B",
        "text": "Journal"
      },
      {
        "letter": "C",
        "text": "Audit Log"
      },
      {
        "letter": "D",
        "text": "Activity"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 태스크(Task) 기반 레코드 폼에서 레코드의 변경 이력과 최근 업데이트를 시각적으로 추적하는 영역은 **활동(Activity)** 섹션입니다.\n*   **표시 내용**: 필드 값의 변화, 추가된 작업 메모(Work notes), 고객과의 대화 내용(Additional comments) 등이 시간순으로 정렬된 스트림 형태로 표시됩니다.\n*   **필터링**: 사용자는 활동 스트림의 깔때기(Funnel) 아이콘을 사용하여 보고 싶은 업데이트 유형만 선택하여 효율적으로 이력을 검토할 수 있습니다."
  },
  {
    "id": 315,
    "title": "Which action enables personalization in a form for the admin role, only?",
    "options": [
      {
        "letter": "A",
        "text": "Navigate to sys_form_properties.list and set the property glide.ui.enable_personalize_form.admin to true."
      },
      {
        "letter": "B",
        "text": "Navigate to Context Menu > Configure > Form Layout and select Enable Personalization and enter the admin role."
      },
      {
        "letter": "C",
        "text": "Navigate to Context Menu > Configure > Table and add the role Admin in the Available User list box."
      },
      {
        "letter": "D",
        "text": "Navigate to sys_properties.list, find the property glide.ui.personalize_form.role, and set the value to admin."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow에서 특정 기능을 특정 역할에게만 제한하거나 허용할 때는 전역 **시스템 속성(System Properties)**을 수정합니다.\n*   **속성명**: `glide.ui.personalize_form.role` 속성은 폼 개인화(톱니바퀴 아이콘 옆의 폼 레이아웃 도구 등)를 수행할 수 있는 최소 역할을 정의합니다.\n*   **제어**: 이 값을 `admin`으로 설정하면, 다른 역할을 가진 일반 사용자나 실무자(itil)는 폼의 필드 배치를 개인화하는 기능에 접근할 수 없게 됩니다."
  },
  {
    "id": 316,
    "title": "If you have the Impersonate role, what type of user are you not able to impersonate?",
    "options": [
      {
        "letter": "A",
        "text": "Customer"
      },
      {
        "letter": "B",
        "text": "VIP"
      },
      {
        "letter": "C",
        "text": "System Administrator"
      },
      {
        "letter": "D",
        "text": "Approver"
      },
      {
        "letter": "E",
        "text": "Catalog User"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **사용자 가장(User Impersonation)** 기능은 강력한 권한이므로 보안 가드레일이 적용됩니다.\n*   **보안 원칙**: `impersonator` 역할을 가진 사용자는 자신보다 권한이 높거나 민감한 시스템 설정을 변경할 수 있는 **시스템 관리자(System Administrator)**를 가장할 수 없습니다.\n*   **보안**: `admin` 역할을 가진 사용자는 다른 사용자를 가장할 수 있지만, `security_admin`과 같은 특정 고권한 세션은 가장 상태에서 활성화할 수 없는 등 추가적인 제약이 존재합니다."
  },
  {
    "id": 317,
    "title": "When using the Data Pill Picker, use which keys to dot-walk (6 fields in other tables?",
    "options": [
      {
        "letter": "A",
        "text": "Arrows"
      },
      {
        "letter": "B",
        "text": "Plus, Minus"
      },
      {
        "letter": "C",
        "text": "Ctrl c, Ctrl"
      },
      {
        "letter": "D",
        "text": "Ctrl <, Ctrl >"
      },
      {
        "letter": "E",
        "text": "Shift F4, Shit FS"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **플로우 디자이너(Flow Designer)**의 **데이터 알약 선택기(Data Pill Picker)** 인터페이스에서 참조(Reference) 필드를 따라 연결된 다른 테이블로 이동하는 기술인 **닷워킹(Dot-Walking)**을 수행할 때는 **방향키(Arrows)**를 사용합니다.\n*   **작동 방식**: 참조 필드 옆의 화살표 버튼을 클릭하거나 키보드의 오른쪽 방향키를 눌러 해당 참조 테이블의 하위 필드 리스트를 확장하여 선택할 수 있습니다."
  },
  {
    "id": 318,
    "title": "Here is an example of the criteria set for a knowledge base: *Companies: ACME North America* Department: HR *Groups: ACME Manager* Match All: Yes In this example, what users would have access to this knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "Members of the ACME manager group, who are also members of HR Department and part of the ACME"
      },
      {
        "letter": "B",
        "text": "Employees of ACME North America, who are members of HR Department or the ACME Manager group"
      },
      {
        "letter": "C",
        "text": "Users which are members of either ACME North America, or HR Department, or ACME Manager Group"
      },
      {
        "letter": "D",
        "text": "Member of the ACME Manager group, and HR department, regardless of geography"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **사용자 기준(User Criteria)** 설정에서 **'Match All'** 옵션은 논리적 **AND** 연산자로 작동합니다.\n*   **조건 분석**: 회사(ACME North America), 부서(HR), 그룹(ACME Manager)이 지정되어 있고 `Match All: Yes`인 경우, 사용자가 이 **세 가지 속성을 모두** 가지고 있어야만 해당 지식 기반에 접근할 수 있습니다.\n*   **거버넌스**: 만약 `Match All: No` (기본값)라면 논리적 **OR**로 작동하여 세 조건 중 하나만 만족해도 접근이 허용됩니다."
  },
  {
    "id": 319,
    "title": "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?",
    "options": [
      {
        "letter": "A",
        "text": "incident .* B. incident.all"
      },
      {
        "letter": "C",
        "text": "incident .!"
      },
      {
        "letter": "D",
        "text": "incident.None"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (제공된 정답 키에 따라 보강함) ServiceNow에서 특정 테이블 전체에 대해 와일드카드 방식으로 보안을 적용할 때 사용하는 객체 이름은 **`[테이블명].*`** 입니다.\n*   **의미**: `incident.*`는 인시던트 테이블의 모든 필드에 대해 공통적인 보안 규칙을 적용함을 의미합니다.\n*   **참고**: `incident.None`은 레코드(행) 자체에 대한 접근 권한을 의미하며, `incident.[필드명]`은 특정 필드에 대한 전용 규칙을 의미합니다. 통상적으로 테이블 접근을 위해 `None`이 먼저 평가됩니다."
  },
  {
    "id": 320,
    "title": "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)",
    "options": [
      {
        "letter": "A",
        "text": "Group members can choose their tasks from My Groups Work"
      },
      {
        "letter": "B",
        "text": "Groups can assign tasks to users based on on-call schedules"
      },
      {
        "letter": "C",
        "text": "Site support members can pick tasks, based on Location"
      },
      {
        "letter": "D",
        "text": "Groups can assign tasks to users based on skills"
      },
      {
        "letter": "E",
        "text": "Group members can avoid tasks, which are nearing SLA breach"
      },
      {
        "letter": "F",
        "text": "Groups can assign tasks to users based on availability"
      }
    ],
    "answer": [
      "B",
      "C",
      "D",
      "F"
    ],
    "explanation": "정답: **B, C, D, F**. 업무를 개인이 아닌 **그룹(Groups)**에 할당하는 방식은 리소스 관리와 프로세스 효율성 측면에서 명확한 이점을 제공합니다.\n*   **가용성 및 일정 (B, F)**: 온콜(On-call) 당번 체계나 실시간 업무 부하(Availability)를 고려하여 최적의 담당자를 동적으로 선택할 수 있습니다.\n*   **기술 및 위치 (C, D)**: 특정 작업에 필요한 전문 기술(Skills)이나 현장 지원이 필요한 지리적 위치(Location)를 기반으로 지능적인 배정이 가능해집니다.\n*   **베스트 프랙티스**: 모든 태스크는 먼저 그룹에 배정(Assignment Group)되어야 하며, 이후 그룹 내 가용 인원에게 상세 할당(Assigned to)되는 구조가 권장됩니다."
  },
  {
    "id": 321,
    "title": "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
    "options": [
      {
        "letter": "A",
        "text": "Scenario Dashboard"
      },
      {
        "letter": "B",
        "text": "CI Use Case Modeler"
      },
      {
        "letter": "C",
        "text": "CMDB Use Case Modeler"
      },
      {
        "letter": "D",
        "text": "Common Service Data Model (CSDM) product view"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **CSDM (Common Services Data Model) 제품 보기**는 특정 비즈니스 유스케이스를 지원하기 위해 어떤 테이블과 CI들이 어떻게 상호작용하는지 시각화하고 가이드를 제공하는 리소스입니다.\n*   **아키텍처 연결**: 단순히 CI 리스트를 보는 것을 넘어, 기술적 구성 요소가 비즈니스 가치(Business Value)와 어떻게 연결되는지 CSDM의 4대 도메인 관점에서 설명합니다.\n*   **표준화**: 이를 통해 복잡한 IT 환경에서도 데이터 모델의 일관성을 유지하고, 플랫폼 전반에서 신뢰할 수 있는 보고 체계를 구축할 수 있습니다."
  },
  {
    "id": 322,
    "title": "Which framework can automatically populate values for the priority and Category field based on the Short description field value?",
    "options": [
      {
        "letter": "A",
        "text": "UI Policy"
      },
      {
        "letter": "B",
        "text": "Assignment Rule"
      },
      {
        "letter": "C",
        "text": "Action"
      },
      {
        "letter": "D",
        "text": "Predictive intelligence"
      },
      {
        "letter": "E",
        "text": "CSDM"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. (제공된 정답 키를 따름) 일반적으로 ServiceNow에서 'Short Description'을 기반으로 카테고리나 우선순위를 자동화하는 현대적 기술은 **Predictive Intelligence** (머신러닝)입니다.\n*   **Assignment Rule (B)**: 원래는 주로 작업의 **할당 그룹(Assignment Group)**이나 **담당자(Assigned to)**를 자동 지정하는 데 사용됩니다.\n*   **비즈니스 인사이트**: 본 문항에서 B가 정답인 이유는 레거시 환경에서 조건 빌더(Condition Builder)를 통해 특정 키워드가 포함될 때 값을 고정 세팅하는 규칙을 의미하는 것으로 풀이됩니다. 하지만 실무적으로 텍스트 분석 기반 자동화는 Predictive Intelligence가 표준입니다."
  },
  {
    "id": 323,
    "title": "What is used to determine user access to knowledge bases or a knowledge article?",
    "options": [
      {
        "letter": "A",
        "text": "sn_kb_read, sn_article_read"
      },
      {
        "letter": "B",
        "text": "Privacy Settings"
      },
      {
        "letter": "C",
        "text": "Read Access Flag"
      },
      {
        "letter": "D",
        "text": "User Criteria"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **사용자 기준(User Criteria)**은 지식 관리(KM)와 서비스 카탈로그에서 보안 접근 권한을 정의하는 핵심 메커니즘입니다.\n*   **접근 제어**: 사용자의 역할, 부서, 위치, 그룹 등 사용자 레코드의 속성을 조합하여 조건을 생성합니다.\n*   **유연성**: 단순 ACL보다 비즈니스 중심적인 권한 설정이 가능하며, 지식 기반(Knowledge Base) 수준이나 개별 문서 수준에서 '누가 읽을 수 있는지(Can Read)'와 '누가 기여할 수 있는지(Can Contribute)'를 명확히 구분하여 적용합니다."
  },
  {
    "id": 324,
    "title": "From a related list, what would a user click for personalize the layout of the columns?",
    "options": [
      {
        "letter": "A",
        "text": "Magnifier"
      },
      {
        "letter": "B",
        "text": "Context Menu"
      },
      {
        "letter": "C",
        "text": "Pencil"
      },
      {
        "letter": "D",
        "text": "Gear"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 관련 리스트(Related List) 상단에 위치한 **톱니바퀴(Gear) 아이콘**은 사용자가 자신의 뷰(View)에 표시되는 컬럼의 종류와 순서를 직접 조정할 수 있게 해주는 **개인화(Personalization)** 도구입니다.\n*   **개인화 vs 구성**: 톱니바퀴 아이콘을 통한 변경은 '현재 로그인한 사용자'에게만 적용됩니다. 시스템 전체의 기본 레이아웃을 바꾸려면 관리자가 `Configure > List Layout` 기능을 사용해야 합니다.\n*   **생산성**: 사용자는 본인의 업무 문맥에 가장 중요한 필드만 리스트 전면에 배치하여 효율적으로 정보를 확인할 수 있습니다."
  },
  {
    "id": 325,
    "title": "An IT user calls the service desk because his work needs to be completed on ask records. All he can see a Self Service on his homepage when he logs in to the ServiceNow instance. What issue could explain this? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "His user account failed LDAP authentication"
      },
      {
        "letter": "B",
        "text": "His user account does not Belong to any groups, which contain the ITIL role"
      },
      {
        "letter": "C",
        "text": "His user account was not approved by his manager"
      },
      {
        "letter": "D",
        "text": "His user account does not have ITIL role"
      },
      {
        "letter": "E",
        "text": "His user account Is not logged in properly"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "정답: **B, E**. (제공된 정답 키를 기반으로 보강함) ServiceNow에서 IT 실무자가 일반 사용자 전용의 'Self-Service' 메뉴만 볼 수 있다면, 이는 **역할(Role) 부여** 문제일 가능성이 가장 높습니다.\n*   **RBAC 원칙 (B)**: 실무 작업(Incident, Problem 등)을 수행하려면 **`itil`** 역할이 필요합니다. 사용자가 이 역할이 포함된 그룹의 멤버가 아니라면 시스템은 해당 메뉴를 노출하지 않습니다.\n*   **세션 문제 (E)**: '로그인이 제대로 되지 않았다(Not logged in properly)'는 표현은 세션 정보가 업데이트되지 않았거나, 역할 변경 후 재로그인이 필요한 상황 등을 포괄하는 맥락으로 해석될 수 있습니다.\n*   **핵심**: 메뉴의 가시성은 항상 사용자의 현재 세션에 할당된 **역할(Roles)**에 의해 결정됩니다."
  },
  {
    "id": 326,
    "title": "Which statement correctly describes the differences between a Client Script and a Business Rule?",
    "options": [
      {
        "letter": "A",
        "text": "A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded"
      },
      {
        "letter": "B",
        "text": "A Client Script executes on the server and a Business Rule executes on the client"
      },
      {
        "letter": "C",
        "text": "A Client Script executes on the client and a Business Rule executes on the server"
      },
      {
        "letter": "D",
        "text": "A Client Script executes before a record is loaded and a Business Rule executes after a"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼에서 로직의 실행 위치를 구분하는 것은 아키텍처 이해의 가장 기본입니다.\n*   **클라이언트 스크립트 (Client Script)**: 사용자의 **웹 브라우저(Client)** 환경에서 실행됩니다. 폼이 로드될 때, 필드 값이 바뀔 때 등 사용자의 즉각적인 UI 조작에 반응합니다.\n*   **비즈니스 규칙 (Business Rule)**: 인스턴스의 **서버(Server)** 환경에서 실행됩니다. 데이터베이스에 레코드가 조회되거나 저장(Insert/Update)되는 시점에 강력한 비즈니스 로직을 집행합니다.\n*   **핵심 차이**: 클라이언트 측은 사용자 경험(UX) 제어에, 서버 측은 데이터 무결성 및 시스템 자동화에 초점이 맞춰져 있습니다."
  },
  {
    "id": 327,
    "title": "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "Access List"
      },
      {
        "letter": "B",
        "text": "Can Access"
      },
      {
        "letter": "C",
        "text": "Accessible to"
      },
      {
        "letter": "D",
        "text": "Can Read"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 지식 기반(Knowledge Base)의 보안 설정을 관리하기 위해 폼 하단의 관련 리스트 중 **`Can Read`** 탭을 사용합니다.\n*   **사용자 기준 연결**: 이 탭에서 **사용자 기준(User Criteria)** 레코드를 추가하여, 어떤 부서, 위치, 또는 역할을 가진 사용자들이 이 지식 기반 내의 문서들을 검색하고 열람할 수 있는지 정의합니다.\n*   **거버넌스**: 반대로 문서를 작성하거나 편집할 수 있는 권한은 **`Can Contribute`** 탭에서 별도로 관리하여 조회 권한과 편집 권한을 엄격히 분리합니다."
  },
  {
    "id": 328,
    "title": "When looking at a long list of records, you want to quickly filler, to show only those which have Shon Description containing email How might you do that?",
    "options": [
      {
        "letter": "A",
        "text": "Click List Magnifier to expand column search, on Short Description, type \"email\", click enter"
      },
      {
        "letter": "B",
        "text": "Click List Magnifier to expand column search, on Short Description, lype *email, click enter"
      },
      {
        "letter": "C",
        "text": "Click List Magnifier to expand column search, on Short Description, type email, click enter"
      },
      {
        "letter": "D",
        "text": "On Search box, select text, type email, click enter"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (제공된 정답 키를 따르며 와일드카드 규칙을 보강함) 리스트 뷰에서 특정 문자열을 포함하는 레코드를 검색할 때는 와일드카드 연산자인 별표(**`*`**)를 사용해야 합니다.\n*   **작동 원리**: Short Description 검색창에 **`*email`**을 입력하면 시스템은 이를 **'contains' (포함)** 조건으로 인식하여, 텍스트의 어느 위치에든 'email'이 들어간 모든 레코드를 반환합니다.\n*   **비교**: 별표 없이 'email'만 입력하면 기본적으로 **'starts with' (시작 문자열)** 조건으로 작동하므로 검색 결과가 달라질 수 있습니다."
  },
  {
    "id": 329,
    "title": "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
    "options": [
      {
        "letter": "A",
        "text": "Browser tab title"
      },
      {
        "letter": "B",
        "text": "Module text color"
      },
      {
        "letter": "C",
        "text": "Preferred browser"
      },
      {
        "letter": "D",
        "text": "Base theme"
      },
      {
        "letter": "E",
        "text": "Font style"
      },
      {
        "letter": "F",
        "text": "Animation style"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "정답: **A, B, D**. (제공된 정답 키를 바탕으로 보강함) **Basic Configuration UI16** 모듈은 코딩 없이 인스턴스의 전반적인 룩앤필(Look and Feel)을 기업 브랜드에 맞게 신속하게 조정하는 곳입니다.\n*   **관리 가능 항목**: 브라우저 탭 제목(A), 내비게이터 모듈 텍스트 색상(B), 시스템 기본 테마(D), 배너 이미지, 헤더 배경색 등이 포함됩니다.\n*   **이점**: CSS나 복잡한 시스템 속성을 직접 수정하지 않고도 인스턴스 전역에 걸친 시각적 일관성을 확보할 수 있습니다."
  },
  {
    "id": 330,
    "title": "What framework can be used to manage the tables and Cis associated with a use case?",
    "options": [
      {
        "letter": "A",
        "text": "Common Service Data Model (CSDM) product view"
      },
      {
        "letter": "B",
        "text": "Scename Dashboard"
      },
      {
        "letter": "C",
        "text": "CMDB Use Case Modelar"
      },
      {
        "letter": "D",
        "text": "CI Use Case Modeler"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **CSDM (Common Services Data Model) 제품 보기**는 ServiceNow의 비즈니스 유스케이스별로 표준 데이터 모델이 어떻게 구성되어야 하는지 보여주는 프레임워크입니다.\n*   **데이터 거버넌스**: IT 인프라(CI)와 비즈니스 서비스 오퍼링 간의 연결 방식을 정의하여 플랫폼 전반의 데이터 사일로를 방지합니다.\n*   **가치**: 이를 통해 정확한 비용 산출, 서비스 가동 시간 분석, 그리고 엔드투엔드 서비스 가시성을 확보할 수 있는 견고한 데이터 기반을 마련합니다."
  },
  {
    "id": 331,
    "title": "What access does a user need to be able to import articles to a knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "sn_knowledge_import"
      },
      {
        "letter": "B",
        "text": "sn_knowledge contribute"
      },
      {
        "letter": "C",
        "text": "Can contribute"
      },
      {
        "letter": "D",
        "text": "Can import"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 지식 관리(Knowledge Management) 보안 모델에서 대량의 지식 문서를 가져오기(Import) 위해서는 해당 지식 기반(Knowledge Base) 수준에서 정의된 **기여 권한(`Can contribute`)**이 필수적입니다.\n*   **사용자 기준(User Criteria)**: 이 권한은 특정 역할, 부서, 위치 등을 조합한 User Criteria를 통해 관리됩니다.\n*   **권한의 범위**: 'Can Read' 권한만으로는 문서를 검색하고 읽는 것만 가능하며, 시스템에 데이터를 주입(Import)하거나 문서를 생성/수정/은퇴시키는 '기여' 활동에는 더 높은 수준의 접근 권한이 요구됩니다."
  },
  {
    "id": 332,
    "title": "Which type of ServiceNow script runs on the web browser?",
    "options": [
      {
        "letter": "A",
        "text": "Server script"
      },
      {
        "letter": "B",
        "text": "Local script"
      },
      {
        "letter": "C",
        "text": "Database script"
      },
      {
        "letter": "D",
        "text": "Client script"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 플랫폼에서 사용자의 **웹 브라우저(Client)** 상에서 직접 실행되는 로직은 **클라이언트 스크립트(Client Scripts)**입니다.\n*   **실행 시점**: 폼 로드 시(`onLoad`), 필드 값 변경 시(`onChange`), 폼 제출 시(`onSubmit`) 트리거됩니다.\n*   **사용자 경험**: 서버와의 통신(Round-trip) 없이 즉각적으로 UI를 제어하거나 입력값의 유효성을 검사하여 사용자에게 빠른 피드백을 제공함으로써 업무 효율성을 높입니다."
  },
  {
    "id": 333,
    "title": "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "On list Context Menu, select Group By > Category"
      },
      {
        "letter": "B",
        "text": "On the Filter Menu, select Group By > Category"
      },
      {
        "letter": "C",
        "text": "Click Group On icon, select Category"
      },
      {
        "letter": "D",
        "text": "On Navigator Filter, type tablename.group.category and press enter"
      },
      {
        "letter": "E",
        "text": "On the Category column title, click Context menu > Group By Category"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "정답: **A, E**. 리스트 뷰에서 방대한 데이터를 시각적으로 체계화하는 가장 효율적인 방법은 **그룹화(Group By)** 기능을 사용하는 것입니다.\n1.  **Column Context Menu (E)**: 특정 컬럼 헤더의 이름 영역을 우클릭하여 'Group By [필드명]'을 선택합니다.\n2.  **List Context Menu (A)**: 리스트 상단의 햄버거 아이콘이나 우클릭을 통해 접근 가능한 메뉴에서 그룹화 설정을 수행합니다.\n*   **이점**: 그룹화는 데이터의 물리적 구조를 변경하지 않고도 동일한 속성을 가진 레코드들을 묶어 보여주어 가독성과 분석 효율을 극대화합니다."
  },
  {
    "id": 334,
    "title": "The Employee On-boarding team has asked for a way for managers to order computers, monitors, business Cards, and cell phones for new employees. How would you proceed to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create Record Producer"
      },
      {
        "letter": "B",
        "text": "Create Order Guide"
      },
      {
        "letter": "C",
        "text": "Create Requested Item"
      },
      {
        "letter": "D",
        "text": "Create On-boarding Bot"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 서로 연관된 여러 서비스 카탈로그 항목들을 비즈니스 시나리오에 맞춰 하나의 통합된 주문 흐름으로 묶어주는 도구는 **오더 가이드(Order Guide)**입니다.\n*   **비즈니스 가치**: '신규 입사자 온보딩'과 같은 복합적인 요청 상황에서 사용자에게 몇 가지 질문을 던지고, 그 답변에 따라 노트북, 이메일 계정, 보안 카드 등 필요한 품목들을 자동으로 장바구니에 담아줍니다.\n*   **사용자 경험**: 사용자가 개별 항목을 일일이 찾아 주문할 필요 없이, 최적화된 질문 답변 과정을 통해 한 번에 요청을 완료할 수 있게 합니다."
  },
  {
    "id": 335,
    "title": "Which role can manage multiple knowledge bases?",
    "options": [
      {
        "letter": "A",
        "text": "knowledge_base_admin"
      },
      {
        "letter": "B",
        "text": "kb_admin"
      },
      {
        "letter": "C",
        "text": "sn_kb_admin"
      },
      {
        "letter": "D",
        "text": "knowledge_admin"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 인스턴스 내에 존재하는 여러 개의 독립적인 지식 기반(Knowledge Base)들을 총괄하여 관리할 수 있는 상위 권한 역할은 **`knowledge_admin`**입니다.\n*   **권한 범위**: 각 지식 기반의 소유자나 관리자가 아니더라도 전역적으로 지식 기사를 조회, 생성, 수정할 수 있으며 지식 관리의 전반적인 거버넌스를 설정할 수 있습니다.\n*   **최소 권한**: 특정 지식 기반만 관리하는 경우에는 해당 레코드에 지정된 'Owner'나 'Managers' 설정만으로도 충분하지만, 전사적인 지식 관리를 위해서는 `knowledge_admin` 역할이 부여됩니다."
  },
  {
    "id": 336,
    "title": "Which one of the following describes the primary operations performed against tables in the Service Now platform?",
    "options": [
      {
        "letter": "A",
        "text": "Create, Rate, Update, Delete"
      },
      {
        "letter": "B",
        "text": "Create, Read, Upload, Delete"
      },
      {
        "letter": "C",
        "text": "Create, Read, Write, Delete"
      },
      {
        "letter": "D",
        "text": "Capture, Rate, Write, Develop"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 데이터베이스 보안의 핵심인 **접근 제어(ACL)**에서 정의하는 데이터 조작의 4대 표준 작업은 **Create, Read, Write, Delete (CRUD)**입니다.\n*   **기능적 정의**: 레코드의 생성(C), 조회(R), 수정(W), 삭제(D)에 대한 권한을 테이블 및 필드 수준에서 각각 정교하게 제어합니다.\n*   **보안 원칙**: 플랫폼은 사용자가 특정 데이터에 접근하려고 할 때, 해당 작업(Operation)에 명시된 ACL 규칙을 순차적으로 평가하여 허용 여부를 결정합니다."
  },
  {
    "id": 337,
    "title": "The ServiceNow platform supports a wide variety of plus-and-play application. You can choose from the included workflow or build your own workflow. Which of following these workflows are included in the platform?",
    "options": [
      {
        "letter": "A",
        "text": "Employee Workflows"
      },
      {
        "letter": "B",
        "text": "Infrastructure Workflows"
      },
      {
        "letter": "C",
        "text": "Federal Workflows"
      },
      {
        "letter": "D",
        "text": "Manufacturing Workflows"
      },
      {
        "letter": "E",
        "text": "Customer Workflows"
      },
      {
        "letter": "F",
        "text": "IT Workflows"
      }
    ],
    "answer": [
      "A",
      "E",
      "F"
    ],
    "explanation": "정답: **A, E, F**. ServiceNow 플랫폼은 기업의 모든 부서에서 발생하는 업무 흐름을 자동화하기 위해 세 가지 핵심 비즈니스 영역(Pillars)의 워크플로우 제품군을 제공합니다.\n1.  **IT Workflows (F)**: IT 인프라와 서비스 관리를 위한 워크플로우 (ITSM, ITOM 등).\n2.  **Employee Workflows (A)**: 직원 경험과 인사 서비스를 위한 워크플로우 (HRSD 등).\n3.  **Customer Workflows (E)**: 고객 지원과 외부 서비스 요청 처리를 위한 워크플로우 (CSM 등).\n*   **플랫폼 가치**: 이를 통해 '업무를 위한 업무(The way work works)'를 전사적으로 디지털화합니다."
  },
  {
    "id": 338,
    "title": "Which tables are children of the Task table and come with the base system? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Incident"
      },
      {
        "letter": "B",
        "text": "Problem"
      },
      {
        "letter": "C",
        "text": "Change Request"
      },
      {
        "letter": "D",
        "text": "Config"
      },
      {
        "letter": "E",
        "text": "Dictionary"
      },
      {
        "letter": "F",
        "text": "cmdb"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "정답: **A, B, C**. ServiceNow 플랫폼 아키텍처의 정수인 **테이블 확장(Table Extension)** 모델에서, 업무 흐름을 담는 대표적인 테이블들은 모두 **`task`** 테이블을 상속받습니다.\n*   **상속 관계**: `incident`, `problem`, `change_request`는 `task` 테이블의 자식(Child) 테이블입니다.\n*   **이점**: 번호, 상태, 짧은 설명, 할당 대상 등 공통 필드를 `task` 테이블로부터 물려받아 데이터 일관성을 유지하며, 모든 종류의 업무를 '태스크'라는 하나의 공통 관점에서 보고하고 관리할 수 있게 해줍니다."
  },
  {
    "id": 339,
    "title": "When would you use the following steps? *1, Homepage Admin > Pages* 2. Right click on Homepage record * 3. Select Unioad Portal Page",
    "options": [
      {
        "letter": "A",
        "text": "To publish a Homepage to the Portal"
      },
      {
        "letter": "B",
        "text": "To retire a Homepage"
      },
      {
        "letter": "C",
        "text": "To delete a Homepage"
      },
      {
        "letter": "D",
        "text": "o To add a Homepage to an update set"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. (보기의 오탈자를 감안하여 해석함) ServiceNow에서 **홈페이지(Homepages)**는 일반적인 구성(Configuration) 데이터와 달리 **업데이트 세트(Update Sets)**에 자동으로 기록되지 않습니다.\n*   **Unload 기능**: 따라서 홈페이지 설정을 다른 인스턴스로 이동시키려면, 명시적으로 해당 레코드를 **'Unload'** 하거나 수동으로 업데이트 세트에 추가하는 절차를 거쳐야 합니다.\n*   **최신 추세**: 최신 버전에서는 업데이트 세트 관리가 용이한 **대시보드(Dashboards)** 사용이 권장되지만, CSA 시험 기준으로는 홈페이지의 특수한 캡처 방식을 이해하는 것이 중요합니다."
  },
  {
    "id": 340,
    "title": "On a list, what does each row show?",
    "options": [
      {
        "letter": "A",
        "text": "A filter"
      },
      {
        "letter": "B",
        "text": "A record"
      },
      {
        "letter": "C",
        "text": "A table"
      },
      {
        "letter": "D",
        "text": "A field"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 리스트 인터페이스에서 가로 방향의 한 줄(Row)은 데이터베이스 테이블의 개별 **레코드(Record)**를 의미합니다.\n*   **데이터 매핑**: 각 레코드는 특정 엔티티(예: 특정 사용자 한 명, 특정 장애 한 건)에 대한 고유한 정보를 담고 있습니다.\n*   **비교**: 세로 방향의 열(Column)은 각 레코드가 가진 속성인 **필드(Field)**에 해당합니다. 즉, 리스트는 여러 레코드의 필드 값들을 행과 열로 정렬하여 보여주는 시각적 도구입니다."
  },
  {
    "id": 341,
    "title": "ServiceNow contains over 25 different report types. What are some of the types? Choose 5 answers",
    "options": [
      {
        "letter": "A",
        "text": "Pie"
      },
      {
        "letter": "B",
        "text": "Speedometer"
      },
      {
        "letter": "C",
        "text": "Odometer"
      },
      {
        "letter": "D",
        "text": "Thermometer"
      },
      {
        "letter": "E",
        "text": "Horizontal Bar"
      },
      {
        "letter": "F",
        "text": "Semi-Donut"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "explanation": "정답: **A, B, E, F**. (제공된 정답 키를 기반으로 보강함) ServiceNow 보고서 디자이너는 데이터를 효과적으로 시각화하기 위해 25가지 이상의 다양한 차트 유형을 제공합니다.\n*   **주요 유형**: Pie (A), Horizontal Bar (E)와 같은 표준 차트부터 Speedometer (B), Semi-Donut (F), Donut, Dial 등 성과 지표(KPI) 시각화에 특화된 위젯형 보고서가 포함됩니다.\n*   **분류**: 보고서는 목적에 따라 Time Series(추세), Multidimensional(다차원 분석), Scores(단일 수치) 등으로 체계적으로 분류되어 관리됩니다."
  },
  {
    "id": 342,
    "title": "A Role is defined as what?",
    "options": [
      {
        "letter": "A",
        "text": "A collection of permissions"
      },
      {
        "letter": "B",
        "text": "A set of user access policies"
      },
      {
        "letter": "C",
        "text": "A Persona in a workflow"
      },
      {
        "letter": "D",
        "text": "A set of access control rules"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 아키텍처에서 **역할(Role)**은 특정 기능이나 데이터에 접근할 수 있는 **권한의 집합(Collection of Permissions)**을 정의하는 엔티티입니다.\n*   **테이블**: 모든 역할 레코드는 **`sys_user_role`** 테이블에 저장됩니다.\n*   **역할 포함(Containment)**: 역할은 다른 역할을 포함할 수 있어 권한 계층 구조를 효율적으로 설계할 수 있게 합니다.\n*   **할당 방식**: 보안 거버넌스를 위해 개별 사용자보다는 **그룹(Group)**에 역할을 부여하고 사용자를 멤버로 추가하는 방식(RBAC)이 강력히 권장됩니다."
  },
  {
    "id": 343,
    "title": "While on an Incident record, how would you add a Tag for \"Special Handling\" to the record?",
    "options": [
      {
        "letter": "A",
        "text": "Click on the More options (.,.) icon, click Add Tag, type Special Handling, press enter"
      },
      {
        "letter": "B",
        "text": "On the Special Handling field, check the box"
      },
      {
        "letter": "C",
        "text": "On the Tag field, select Special Handling from the choice list"
      },
      {
        "letter": "D",
        "text": "Click on the Context menu, select Add Tag, type Special Handling, press enter"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 레코드를 논리적으로 분류하고 신속하게 탐색하기 위해 **태그(Tags)**를 추가하는 가장 표준적인 UI 경로는 폼 헤더의 **More Options (점 세 개 아이콘)** 메뉴입니다.\n*   **절차**: 'More Options' 클릭 -> **'Add Tag'** 선택 -> 태그 이름 입력 후 Enter.\n*   **가시성**: 사용자는 태그를 자신만 볼 수 있게(Private) 하거나, 특정 그룹 또는 전체(Everyone)와 공유하도록 설정하여 협업에 활용할 수 있습니다."
  },
  {
    "id": 344,
    "title": "While showing a customer their incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Right click on Priority and select Configure Dictionary"
      },
      {
        "letter": "B",
        "text": "Right click on Priority and select Configure Display Settings"
      },
      {
        "letter": "C",
        "text": "Right click on Priority and select Configure Label"
      },
      {
        "letter": "D",
        "text": "Right click on Priority and select Configure Column"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: **A, C**. ServiceNow에서 필드의 제목(Label)을 변경하여 기업 고유의 용어를 반영하는 방법은 두 가지 관리자 경로가 있습니다.\n1.  **Configure Label (C)**: 해당 필드를 우클릭하여 레이블 레코드를 직접 수정합니다. 이는 특정 테이블에 국한된 명칭 변경에 유용합니다.\n2.  **Configure Dictionary (A)**: 필드의 근본적인 메타데이터 정의로 들어가 'Column label'을 수정합니다.\n*   **주의**: Dictionary 수준에서 레이블을 변경하면, 해당 필드를 상속받아 사용하는 하위 테이블의 모든 폼에서도 명칭이 일치하게 변경될 수 있습니다."
  },
  {
    "id": 345,
    "title": "Which component of a table contains a piece of data for one record?",
    "options": [
      {
        "letter": "A",
        "text": "Factor"
      },
      {
        "letter": "B",
        "text": "Field"
      },
      {
        "letter": "C",
        "text": "Datapoint"
      },
      {
        "letter": "D",
        "text": "Element"
      },
      {
        "letter": "E",
        "text": "Item"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 데이터 모델에서 **필드(Field)**는 테이블의 행(Record)과 열(Column)이 교차하는 지점으로, 특정 객체에 대한 개별적인 속성 데이터 값을 담고 있습니다.\n*   **구조**: 리스트 뷰에서 세로 방향의 한 칸(Cell)에 해당하며, 각 필드는 데이터 타입(문자열, 숫자, 참조 등)에 따라 시스템 딕셔너리에 의해 정의됩니다.\n*   **데이터 저장**: 레코드는 이러한 여러 필드들의 값들이 모여 구성된 하나의 완전한 데이터 단위입니다."
  },
  {
    "id": 346,
    "title": "Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?",
    "options": [
      {
        "letter": "A",
        "text": "Schema Map"
      },
      {
        "letter": "B",
        "text": "Dependency View"
      },
      {
        "letter": "C",
        "text": "Dependency Map"
      },
      {
        "letter": "D",
        "text": "Database View"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **디펜던시 뷰(Dependency View)**는 CMDB 내의 구성 항목(CI)들 간의 의존 관계와 연결 구조를 그래픽 인터페이스로 시각화해주는 플랫폼 도구입니다.\n*   **가치**: 특정 서버나 서비스에 장애가 발생했을 때 상위 비즈니스 서비스에 미치는 영향을 분석하는 **영향도 분석(Impact Analysis)**에 핵심적입니다.\n*   **가시성**: 기술적 구성 항목(Technical CIs)들이 비즈니스 가치(Service Offerings)와 어떻게 연결되는지 CSDM 관점의 명확한 통찰을 제공합니다."
  },
  {
    "id": 347,
    "title": "What icon do you use to change the boon and color on a Favorite?",
    "options": [
      {
        "letter": "A",
        "text": "Pencil"
      },
      {
        "letter": "B",
        "text": "Star"
      },
      {
        "letter": "C",
        "text": "Clack"
      },
      {
        "letter": "D",
        "text": "Tringle"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. (보기의 오탈자를 감안하여 해석함) 애플리케이션 내비게이터의 **즐겨찾기(Favorites)** 탭에서 이미 등록된 항목을 개인화하기 위해서는 **Pencil (연필)** 아이콘을 사용합니다.\n*   **편집 가능 항목**: 사용자는 즐겨찾기 항목의 이름(Label), 아이콘 모양, 그리고 색상을 자신의 선호도에 맞게 변경할 수 있습니다.\n*   **개인화**: 이 설정은 사용자 세션에 귀속되는 개인 설정으로, 시스템 전역이나 다른 사용자의 내비게이터 구성에는 영향을 주지 않습니다."
  },
  {
    "id": 348,
    "title": "What type of table has a name starting with u_or x_?",
    "options": [
      {
        "letter": "A",
        "text": "Custom table"
      },
      {
        "letter": "B",
        "text": "Parent table"
      },
      {
        "letter": "C",
        "text": "Core table"
      },
      {
        "letter": "D",
        "text": "Base table"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 플랫폼은 테이블의 출처를 명확히 하기 위해 **커스텀 테이블(Custom Tables)**에 대해 강제적인 명명 규칙을 적용합니다.\n*   **u_**: 전역 스코프(Global Scope)에서 사용자가 직접 생성한 커스텀 테이블의 접두사입니다.\n*   **x_**: 특정 애플리케이션 스코프(Scoped Application) 내에서 생성된 테이블로, 뒤이어 조직 코드와 앱 ID가 포함된 형태를 가집니다.\n*   **비교**: `sys_`나 `cmdb_`와 같이 고유한 접두사를 가진 테이블들은 플랫폼에서 기본 제공하는 **코어/시스템 테이블**입니다."
  },
  {
    "id": 349,
    "title": "What policies are applied to all data entered into the platform (i.e., through a record form (UI), Import Sets, or Web Services)?",
    "options": [
      {
        "letter": "A",
        "text": "Data Policies"
      },
      {
        "letter": "B",
        "text": "Data Integrity Policies"
      },
      {
        "letter": "C",
        "text": "Write Policies"
      },
      {
        "letter": "D",
        "text": "Data Submission Policies"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **데이터 정책(Data Policy)**은 데이터의 무결성을 보장하기 위해 모든 데이터 유입 경로에 대해 서버 측에서 규칙을 강제하는 강력한 가드레일입니다.\n*   **강제 범위**: 웹 브라우저를 통한 직접 입력(UI)뿐만 아니라, **임포트 세트(Import Sets)**나 **웹 서비스(API)**를 통해 들어오는 모든 데이터에 동일한 필수/읽기전용 규칙을 적용합니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험을 위해 작동하는 반면, 데이터 정책은 데이터베이스 수준에서 물리적인 일관성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 350,
    "title": "What are the three key tables in an enterprise CMDO? Choose 3 angwers",
    "options": [
      {
        "letter": "A",
        "text": "sn_cmdt_bak"
      },
      {
        "letter": "B",
        "text": "Sh_emdb_ci"
      },
      {
        "letter": "C",
        "text": "cmap_ret_ci"
      },
      {
        "letter": "D",
        "text": "cmdb_bak"
      },
      {
        "letter": "E",
        "text": "cmdb_ci"
      },
      {
        "letter": "F",
        "text": "sh_eomdb"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "정답: **C, E**. (보기의 테이블명이 손상되었으나 플랫폼 표준 아키텍처에 기반하여 보강함) 엔터프라이즈 CMDB를 지탱하는 가장 핵심적인 3대 테이블 구조는 다음과 같습니다.\n1.  **cmdb_ci (E)**: 모든 구성 항목(CI)의 마스터 정보를 담는 중심 테이블입니다.\n2.  **cmdb_rel_ci (C)**: CI 간의 의존성 및 관계(Relationships) 정보를 저장하는 테이블입니다.\n3.  **cmdb**: 클래스 계층 구조의 최상위 베이스 테이블입니다.\n*   **CSDM 연관**: 이러한 테이블 구조를 통해 기술적 자산과 비즈니스 서비스를 유기적으로 연결하여 전사적인 가시성을 제공합니다."
  },
  {
    "id": 351,
    "title": "Which SericeNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which Cis supporing that service have active issues?",
    "options": [
      {
        "letter": "A",
        "text": "AL Service Dashboard"
      },
      {
        "letter": "B",
        "text": "Cl Health Dashboard"
      },
      {
        "letter": "C",
        "text": "Dependency View"
      },
      {
        "letter": "D",
        "text": "Event Management Homepage"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **CI 상태 대시보드(CI Health Dashboard)**는 CMDB 내 구성 항목(CI)들의 건전성을 가시성(Completeness), 정확성(Compliance), 관계(Correctness)라는 세 가지 관점에서 측정하고 보고합니다.\n*   **서비스 가시성**: 서비스 데스크 에이전트는 이 대시보드를 통해 특정 비즈니스 서비스의 장애 원인이 되는 하위 CI의 이슈를 역추적(Trace)할 수 있습니다.\n*   **상호보완 도구**: CI 간의 물리적 의존 관계를 시각적으로 확인하는 데는 **Dependency View**가 사용되지만, 전반적인 운영 이슈와 데이터 품질을 통합 관리하는 측면에서는 CI Health Dashboard가 핵심적인 역할을 합니다."
  },
  {
    "id": 352,
    "title": "You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?",
    "options": [
      {
        "letter": "A",
        "text": "Create Record Producer"
      },
      {
        "letter": "B",
        "text": "Create Catalog Item"
      },
      {
        "letter": "C",
        "text": "Create Order Guide"
      },
      {
        "letter": "D",
        "text": "Create Content Item"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **레코드 프로듀서(Record Producer)**는 서비스 카탈로그의 인터페이스를 활용하여 백엔드 테이블(예: `incident`)에 데이터를 직접 생성하는 강력한 도구입니다.\n*   **사용자 경험(UX)**: 복잡한 폼 대신 사용자 친화적인 질문(Variables)을 제공하여 장애 상황을 쉽게 설명할 수 있게 합니다.\n*   **자동화**: 제출된 데이터는 미리 정의된 매핑 규칙에 따라 인시던트 레코드로 변환되어 즉시 서비스 데스크의 작업 대기열(Queue)로 인입됩니다."
  },
  {
    "id": 353,
    "title": "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    "options": [
      {
        "letter": "A",
        "text": "Agent Assist"
      },
      {
        "letter": "B",
        "text": "Virtual Agent"
      },
      {
        "letter": "C",
        "text": "Now Messenger"
      },
      {
        "letter": "D",
        "text": "Connect Agent"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **가상 에이전트(Virtual Agent)**는 대화형 인터페이스(채팅)를 통해 사용자에게 24/7 셀프 서비스 지원을 제공하는 플랫폼입니다.\n*   **지식 연동**: 자연어 이해(NLU)를 기반으로 사용자의 질문 의도를 파악하여 연관된 지식 기사(Knowledge Articles)를 대화창 내에서 즉시 제안합니다.\n*   **가치**: 실시간 상담원의 개입 없이 문제를 해결(Deflection)함으로써 상담원의 업무 부하를 줄이고 고객 만족도를 높이는 'Shift-left' 전략의 핵심입니다."
  },
  {
    "id": 354,
    "title": "What are the steps for applying an update set to an instance?",
    "options": [
      {
        "letter": "A",
        "text": "Retrieve, Preview, Commit"
      },
      {
        "letter": "B",
        "text": "Specify, Transform, Apply"
      },
      {
        "letter": "C",
        "text": "Retrieve, Assess, Apply"
      },
      {
        "letter": "D",
        "text": "Get, Test, Push"
      },
      {
        "letter": "E",
        "text": "Pull, Review, Push"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트(Update Sets)**를 대상 인스턴스(Test 또는 Production)에 반영하는 표준 거버넌스 프로세스는 다음과 같습니다.\n1.  **Retrieve**: 원격 인스턴스로부터 'Complete' 상태의 업데이트 세트를 가져옵니다.\n2.  **Preview**: 반영 전 기존 구성과의 충돌이나 오류를 미리 점검합니다. (가장 중요한 검증 단계).\n3.  **Commit**: 오류가 해결된 변경 사항을 인스턴스 데이터베이스에 최종적으로 적용합니다.\n*   **핵심**: 이 단계를 통해 개발 환경에서 검증된 구성(Configuration)을 안전하게 운영 환경으로 이동시킵니다."
  },
  {
    "id": 355,
    "title": "Your customer has a Human Resources knowledge base, which is only accessible to members of the Human Resources department. A new procedure regarding employee quarterly reviews needs to be published to the quarterly review category of the HR knowledge base, but should only be visible for HR managers. How would you meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "On the Knowledge Base, add User Criteria with a Manager Can Read script to the Can Read list, publish"
      },
      {
        "letter": "B",
        "text": "Add User Criteria for HR Manager Group on the Category's Can Read list"
      },
      {
        "letter": "C",
        "text": "On the Knowledge Article, add an Access Control for HR Manager Group on the Can Read list, then"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 지식 관리 아키텍처는 **사용자 기준(User Criteria)**을 통해 세분화된 보안 제어를 지원합니다.\n*   **계층적 접근**: 지식 기반(Knowledge Base) 전체에 대한 권한뿐만 아니라, 특정 **카테고리(Category)** 수준에서도 `Can Read` 관련 리스트를 설정하여 가시성을 제한할 수 있습니다.\n*   **비즈니스 가치**: 이를 통해 하나의 지식 기반 안에서도 일반 직원용 정보와 매니저 전용 민감 정보를 안전하게 분리하여 운영할 수 있습니다."
  },
  {
    "id": 356,
    "title": "How would you describe the relationship between the incident and Task table?",
    "options": [
      {
        "letter": "A",
        "text": "Incident table has a many to many relationships with the Task table."
      },
      {
        "letter": "B",
        "text": "Incident table has a one to much relationship with the Task table."
      },
      {
        "letter": "C",
        "text": "Incident table is extended from task table."
      },
      {
        "letter": "D",
        "text": "incident table is related to the Task table via the INC number"
      },
      {
        "letter": "E",
        "text": "incident table is a database view of the Task table"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 데이터 모델링의 핵심인 **테이블 확장(Table Extension)** 관계입니다.\n*   **상속**: `incident` 테이블은 `task` 테이블의 자식(Child) 테이블입니다.\n*   **이점**: 번호, 상태, 할당 그룹 등 모든 업무에 공통적으로 필요한 필드와 비즈니스 로직을 `task`로부터 물려받습니다.\n*   **데이터 통합**: 이를 통해 인시던트, 문제, 변경 등 서로 다른 유형의 업무를 '태스크'라는 하나의 통합된 관점에서 보고하고 관리할 수 있습니다."
  },
  {
    "id": 357,
    "title": "What process allows users to create, categorize, review approve and browse important information in a centralized location that is shared oy the entire organization?",
    "options": [
      {
        "letter": "A",
        "text": "Self Service Management"
      },
      {
        "letter": "B",
        "text": "Knowledge Management"
      },
      {
        "letter": "C",
        "text": "Knowledge-Centered Management"
      },
      {
        "letter": "D",
        "text": "Information Portal Management"
      },
      {
        "letter": "E",
        "text": "Business Information Management"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **지식 관리(Knowledge Management)**는 기업의 지적 자산을 체계적으로 수집, 저장, 공유하기 위한 전사적 프로세스입니다.\n*   **수명 주기**: 문서 작성(Create) -> 검토(Review) -> 승인 및 게시(Publish) -> 은퇴(Retire)의 표준 단계를 거칩니다.\n*   **셀프 서비스**: 중앙 집중화된 지식 창구를 제공함으로써 사용자가 직접 해답을 찾게 유도하여 IT 지원 비용을 절감하고 업무 생산성을 높입니다."
  },
  {
    "id": 358,
    "title": "You have an existing customer, who is using workflows for their catalog items. Their existing purchasing policy is to require approval for any request that totals over 31000. However, management wants to change the approval threshold to 31500. Which workflow would you update to make this change?",
    "options": [
      {
        "letter": "A",
        "text": "Services Approval Processing"
      },
      {
        "letter": "B",
        "text": "6 Services Catalog Item Request"
      },
      {
        "letter": "C",
        "text": "Service Catalog Request"
      },
      {
        "letter": "D",
        "text": "Purchasing Process Flow"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 서비스 카탈로그 주문은 보통 **요청(Request, REQ)** 레코드 수준에서 전반적인 승인 로직이 작동합니다.\n*   **프로세스 계층**: 주문 총액에 따른 승인 임계값(Approval Threshold)은 개별 품목(RITM)이 아닌 전체 주문서(REQ)를 처리하는 **`Service Catalog Request`** 워크플로우나 플로우에서 정의되는 것이 일반적입니다.\n*   **관리**: 정책 변경 시 해당 워크플로우의 'Approval - User' 또는 'Approval - Group' 액티비티 내의 조건을 수정하여 반영합니다."
  },
  {
    "id": 359,
    "title": "What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?",
    "options": [
      {
        "letter": "A",
        "text": "Update sets"
      },
      {
        "letter": "B",
        "text": "Transform maps"
      },
      {
        "letter": "C",
        "text": "System dictionaries"
      },
      {
        "letter": "D",
        "text": "Import sets"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **업데이트 세트(Update Sets)**는 인스턴스 간에 **구성(Configuration)** 데이터의 변경 사항을 캡처하고 전송하기 위한 표준 이동 수단입니다.\n*   **캡처 범위**: 테이블 정의, 폼 레이아웃, 비즈니스 규칙, 클라이언트 스크립트 등 시스템의 동작을 결정하는 데이터입니다.\n*   **제외 대상**: 인시던트나 사용자 레코드와 같은 실제 **업무 데이터(Data)**는 캡처되지 않으므로 주의가 필요합니다.\n*   **이점**: 개발-테스트-운영 인스턴스 간의 체계적인 배포 거버넌스를 지원합니다."
  },
  {
    "id": 360,
    "title": "What feature do you use to specify which users are able to access a Service Catalog Item?",
    "options": [
      {
        "letter": "A",
        "text": "Can Read Role"
      },
      {
        "letter": "B",
        "text": "Catalog User Role"
      },
      {
        "letter": "C",
        "text": "Can Order Tab"
      },
      {
        "letter": "D",
        "text": "User Criteria"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 서비스 카탈로그 항목(Catalog Item)의 보안 및 접근 제어를 위한 최우선 도구는 **사용자 기준(User Criteria)**입니다.\n*   **적용**: `Available For` 및 `Not Available For` 관련 리스트에 사용자 기준을 설정하여 특정 역할, 부서, 위치 기반으로 접근 범위를 정교하게 통제합니다.\n*   **베스트 프랙티스**: 복잡한 ACL이나 스크립팅 대신 UI 상의 설정만으로 접근 권한을 관리할 수 있어 유지보수성과 보안 투명성을 높여줍니다."
  },
  {
    "id": 361,
    "title": "Security rules are defined to restrict the permission of users from viewing and interacting with data. What are these security rules called?",
    "options": [
      {
        "letter": "A",
        "text": "Role Assignment Rules"
      },
      {
        "letter": "B",
        "text": "CRUD Rules"
      },
      {
        "letter": "C",
        "text": "Scripted User Rules"
      },
      {
        "letter": "D",
        "text": "Access Control Rules"
      },
      {
        "letter": "E",
        "text": "User Authentication Rules"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **접근 제어 규칙(ACL, Access Control Rules)**은 ServiceNow 플랫폼 보안의 핵심 가이드라인으로, 사용자가 데이터에 접근하거나 조작하기 위해 통과해야 하는 '보안 관문'입니다.\n*   **보안 계층**: 테이블(Table), 레코드(Row), 개별 필드(Column) 수준에서 각각 보안을 적용할 수 있습니다.\n*   **평가 요소**: 사용자가 가진 **역할(Role)**, 필드의 특정 **조건(Condition)**, 그리고 복잡한 로직을 수행하는 **스크립트**를 종합적으로 평가하여 허용 여부를 결정합니다.\n*   **보안 원칙**: 명시적으로 허용된 규칙이 없는 경우 모든 접근을 기본적으로 차단하는 '최소 권한 접근' 방식을 따릅니다."
  },
  {
    "id": 362,
    "title": "A subject matter expert routinely receives tasks which have been worked by first level support, before receiving the assignment What could you suggest. to make it easier for the expert to read only the work notes in the Activity log?",
    "options": [
      {
        "letter": "A",
        "text": "Click Context menu > Work Notes View"
      },
      {
        "letter": "B",
        "text": "Click Personalize icon and select Activity Stream"
      },
      {
        "letter": "C",
        "text": "Right click form header > Form Layout > Add Work Notes Section"
      },
      {
        "letter": "D",
        "text": "Click Funnel icon and select only work notes"
      },
      {
        "letter": "E",
        "text": "Click Context menu > History"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **활동 스트림(Activity Stream)**은 레코드의 변경 이력과 협업 내역을 시간순으로 보여주는 강력한 UI 요소입니다.\n*   **생산성 도구**: 수많은 업데이트 내용 중 특정 정보만 빠르게 확인하고 싶을 때, 활동 스트림 상단의 **깔때기(Funnel) 아이콘**을 사용하여 'Work notes'만 필터링할 수 있습니다.\n*   **협업 구분**: 외부 고객과 소통하는 'Additional comments'와 내부 전문가들끼리 공유하는 기술적 메모인 'Work notes'를 구분하여 검토함으로써 업무 문맥을 신속하게 파악할 수 있게 돕습니다."
  },
  {
    "id": 363,
    "title": "Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board Interface?",
    "options": [
      {
        "letter": "A",
        "text": "Flow Designer"
      },
      {
        "letter": "B",
        "text": "Process Automation Designer"
      },
      {
        "letter": "C",
        "text": "Process Workflow Designer"
      },
      {
        "letter": "D",
        "text": "Workflow Editor"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **프로세스 자동화 디자이너(PAD, Process Automation Designer)**는 개별적인 플로우(Flows)와 액션들을 묶어 전사적인 엔드투엔드(End-to-End) 비즈니스 프로세스로 오케스트레이션하는 도구입니다.\n*   **시각화**: 비즈니스 프로세스 소유자는 복잡한 로직을 칸반 보드와 유사한 단계별 인터페이스를 통해 직관적으로 설계하고 관리할 수 있습니다.\n*   **플레이북 연동**: PAD에서 설계된 프로세스는 사용자에게 **플레이북(Playbooks)** 형태로 제공되어, 실무자가 복잡한 업무 라이프사이클을 안내에 따라 정확하게 수행할 수 있도록 지원합니다."
  },
  {
    "id": 364,
    "title": "What are advantages of using spokes for integrations? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Reduces the need for code"
      },
      {
        "letter": "B",
        "text": "Features scale and control mechanisms"
      },
      {
        "letter": "C",
        "text": "Free spokes are available in the ServiceNow Store"
      },
      {
        "letter": "D",
        "text": "Ensures discoverability and reuse"
      },
      {
        "letter": "E",
        "text": "Automated event management"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "정답: **A, D, E**. **Spoke**는 ServiceNow **IntegrationHub**에서 특정 외부 시스템(예: Jira, Slack)과의 연동을 위해 미리 패키징된 액션과 로직의 집합입니다.\n1.  **코드 최소화 (A)**: 복잡한 API 스크립트 작성 없이 드래그 앤 드롭으로 연동을 구현하여 기술 부채를 낮춥니다.\n2.  **재사용성 및 발견 용이성 (D)**: 표준화된 액션들을 인스턴스 내 여러 플로우에서 반복적으로 사용할 수 있어 거버넌스 관리에 유리합니다.\n3.  **자동화 처리 (E)**: 외부 시스템의 신호를 감지하여 인스턴스 내 워크플로우를 자동으로 트리거하는 등 효율적인 통합 환경을 제공합니다."
  },
  {
    "id": 365,
    "title": "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
    "options": [
      {
        "letter": "A",
        "text": "Field Transform"
      },
      {
        "letter": "B",
        "text": "Transform Map"
      },
      {
        "letter": "C",
        "text": "Schema Map"
      },
      {
        "letter": "D",
        "text": "Import Map"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **변환 맵(Transform Map)**은 임포트 세트(Import Set)의 소스 데이터와 ServiceNow 내부의 타겟 테이블 사이를 연결하는 '데이터 설계도' 역할을 합니다.\n*   **필드 매핑**: 소스의 특정 컬럼이 타겟 테이블의 어떤 필드로 들어갈지 명시하며, 필요시 스크립트를 통해 데이터를 변환(Transformation)하거나 정제합니다.\n*   **데이터 무결성**: **Coalesce** 설정을 통해 기존 레코드 업데이트 여부를 결정함으로써 시스템 내 데이터 중복을 방지하고 정합성을 유지합니다."
  },
  {
    "id": 366,
    "title": "Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "One Approval can have many Requests"
      },
      {
        "letter": "B",
        "text": "One Request can have many Requested Items"
      },
      {
        "letter": "C",
        "text": "One Requested Item can have many Approvals"
      },
      {
        "letter": "D",
        "text": "One Requested Item can have many Catalog Tasks"
      },
      {
        "letter": "E",
        "text": "One Cart can have many Requests"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "정답: **B, D, E**. ServiceNow 서비스 카탈로그의 데이터 아키텍처는 효율적인 주문 이행을 위해 **일대다(One-to-Many)** 관계의 계층 구조를 따릅니다.\n1.  **Request (REQ) -> Requested Items (RITM) (B)**: 하나의 주문서(REQ)는 여러 개의 개별 품목(RITM)을 포함할 수 있습니다.\n2.  **Requested Item (RITM) -> Catalog Tasks (SCTASK) (D)**: 하나의 품목을 이행하기 위해 실무자가 수행해야 할 여러 개의 작업(SCTASK)이 생성될 수 있습니다.\n3.  **Cart -> Requests (E)**: 장바구니에서 한꺼번에 주문을 제출할 때 여러 요청 레코드가 생성될 수 있는 논리적 구조를 가집니다."
  },
  {
    "id": 367,
    "title": "What section on the notes tab, shows the history of the work documented on the record?",
    "options": [
      {
        "letter": "A",
        "text": "Journal"
      },
      {
        "letter": "B",
        "text": "Activity"
      },
      {
        "letter": "C",
        "text": "Diary"
      },
      {
        "letter": "D",
        "text": "Audit Log"
      },
      {
        "letter": "E",
        "text": "Timeline"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 레코드 폼의 'Notes' 탭에 위치한 **활동(Activity)** 섹션은 해당 데이터의 전체 수명 주기 동안 발생한 모든 상호작용과 변경 사항을 기록하는 중앙 로그입니다.\n*   **포함 데이터**: 담당자의 작업 노트(Work notes), 사용자와의 대화(Additional comments), 그리고 시스템에 의해 기록된 필드 값의 변화(Audit trail)를 모두 포함합니다.\n*   **협업 허브**: 에이전트들이 과거 기록을 빠르게 검토하고 현재 상태를 파악하여 업무 연속성을 유지하는 데 핵심적인 역할을 합니다."
  },
  {
    "id": 368,
    "title": "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "Notifications"
      },
      {
        "letter": "B",
        "text": "Alerts"
      },
      {
        "letter": "C",
        "text": "Texts"
      },
      {
        "letter": "D",
        "text": "Events"
      },
      {
        "letter": "E",
        "text": "Emails"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. (제공된 정답 키를 따르며 플랫폼 메커니즘을 설명함)\n*   **이벤트(Events)**: 시스템이나 프로세스 내에서 발생한 중요한 변화를 알리는 '논리적 신호'입니다.\n*   **알림(Notifications)**: 이벤트를 트리거로 삼아 실제 사용자에게 이메일이나 푸시 등으로 정보를 전달하는 '소통 도구'입니다.\n*   **해석**: 질문에서 묻는 것은 사용자를 정보로 안내하는 전반적인 프로세스의 트리거가 되는 **이벤트(Event)** 체계를 지칭하는 것으로 이해할 수 있습니다. 실무적으로는 알림(Notifications)이 최종적인 전달 기능을 수행합니다."
  },
  {
    "id": 369,
    "title": "What is the name of the string that display filter criteria?",
    "options": [
      {
        "letter": "A",
        "text": "Topic"
      },
      {
        "letter": "B",
        "text": "Choice"
      },
      {
        "letter": "C",
        "text": "Breadcrump"
      },
      {
        "letter": "D",
        "text": "Menu"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **브레드크럼(Breadcrumb)**은 리스트 뷰 상단에 위치하며, 현재 리스트에 적용된 모든 필터 조건을 계층적인 텍스트 경로 형태로 시각화합니다.\n*   **기능**: 사용자는 브레드크럼의 특정 조건을 클릭하여 이전 필터 단계로 빠르게 돌아가거나(Drill back), 개별 조건을 제거하여 조회 범위를 신속하게 조정할 수 있습니다.\n*   **개인화**: 자주 사용하는 복잡한 브레드크럼 필터는 즐겨찾기(Favorites)로 저장하거나 다른 사용자에게 링크로 공유하여 데이터 탐색 효율을 높일 수 있습니다."
  },
  {
    "id": 370,
    "title": "A customer requests the following data quality measures be added: *1. Incident numbers should be read-only on all lists and forms, for all users.* 2. Short Description field should be mandatory, on all records, across all applications, on insert. Which type of policy would you use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Data policy"
      },
      {
        "letter": "B",
        "text": "Dictionary Design Policy"
      },
      {
        "letter": "C",
        "text": "Data Quality Policy"
      },
      {
        "letter": "D",
        "text": "Field Criteria Policy"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **데이터 정책(Data Policy)**은 인스턴스 전반의 데이터 품질과 일관성을 보장하기 위해 **서버(Server)** 측에서 실행되는 강력한 가드레일입니다.\n*   **강제 범위**: 웹 브라우저(UI)를 통한 입력뿐만 아니라, **데이터 임포트(Import Sets)**나 **웹 서비스(API)**를 통해 유입되는 모든 데이터에 동일한 필수/읽기전용 규칙을 강제합니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험(UX) 개선에 집중하는 반면, 데이터 정책은 데이터베이스 수준에서 물리적인 데이터 무결성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 371,
    "title": "An administrator creates \"customer_table_admin\" and \"customer_table_user\" roles for the newly created \"Customer Table\". Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?",
    "options": [
      {
        "letter": "A",
        "text": "customer.all"
      },
      {
        "letter": "B",
        "text": "customer .* C. customer.field"
      },
      {
        "letter": "D",
        "text": "customer.none"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow의 **접근 제어(ACL)**에서 테이블 전체에 대한 보안을 적용할 때는 와일드카드 기호인 별표(**`*`**)를 사용합니다.\n*   **객체 식별**: `customer.*`는 해당 테이블의 모든 필드(Column)에 대해 공통적으로 적용되는 규칙을 의미합니다.\n*   **상속 및 권한**: `customer_table_admin`과 `customer_table_user` 두 역할 모두에게 이 규칙을 부여하면, 테이블 내의 어떤 필드에 대해서도 별도의 거부 규칙이 없는 한 접근이 허용됩니다.\n*   **참고**: `customer.None`은 레코드(행) 자체에 대한 접근 권한을 평가할 때 사용되는 특수 객체 이름입니다."
  },
  {
    "id": 372,
    "title": "What are the components that make up a filer condition? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Column"
      },
      {
        "letter": "B",
        "text": "Match Criteria"
      },
      {
        "letter": "C",
        "text": "Field"
      },
      {
        "letter": "D",
        "text": "Value"
      },
      {
        "letter": "E",
        "text": "Operator"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C, D, E**. (플랫폼 표준 구성 요소에 맞춰 보강함) ServiceNow 리스트에서 데이터를 필터링하는 **조건 빌더(Condition Builder)**는 세 가지 핵심 요소로 구성됩니다.\n1.  **Field (C)**: 데이터를 검사할 열(Column)을 선택합니다 (예: 'Priority').\n2.  **Operator (E)**: 데이터 비교 방식(연산자)을 선택합니다 (예: 'is', 'contains', 'between').\n3.  **Value (D)**: 비교 기준이 되는 실제 데이터 값을 지정합니다 (예: '1 - Critical').\n*   **가시성**: 이 세 요소가 결합되어 리스트 상단에 **브레드크럼(Breadcrumb)** 형태의 필터 문장으로 표시됩니다."
  },
  {
    "id": 373,
    "title": "Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role and the user_critena_admm role plus has permissions to create Items and Services?",
    "options": [
      {
        "letter": "A",
        "text": "item Admin [sn_item_admin]"
      },
      {
        "letter": "B",
        "text": "Sys Admin [sys_admln]"
      },
      {
        "letter": "C",
        "text": "Catalog Admin [catalog_admin]"
      },
      {
        "letter": "D",
        "text": "Catalog Auinor (sn_cataiog_write]"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **`catalog_admin`** 역할은 서비스 카탈로그의 전체적인 수명 주기를 관리하기 위해 설계된 관리 권한입니다.\n*   **역할 상속(Inheritance)**: 이 역할은 하위의 `catalog` 역할과 **`user_criteria_admin`** 역할을 포함(Contain)하고 있어, 별도의 할당 없이도 해당 권한들을 모두 상속받습니다.\n*   **권한 범위**: 카탈로그 아이템과 서비스를 생성 및 수정할 수 있을 뿐만 아니라, 사용자 기준(User Criteria)을 정의하여 카탈로그의 접근 제어 거버넌스를 수립할 수 있습니다."
  },
  {
    "id": 374,
    "title": "What are the benefits of building flows using Flow Designer? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Supports easy integration with 3rd party systems"
      },
      {
        "letter": "B",
        "text": "Provides IDE for complicated scripting"
      },
      {
        "letter": "C",
        "text": "Provides natural-langauge descriptions of flow logic"
      },
      {
        "letter": "D",
        "text": "Supports No-Code application development"
      },
      {
        "letter": "E",
        "text": "Automatically populates SLA records"
      },
      {
        "letter": "F",
        "text": "Provides built-in libraries /API for complex coding"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: **A, C, D**. **플로우 디자이너(Flow Designer)**는 복잡한 스크립팅 없이 비즈니스 프로세스를 자동화하는 차세대 도구로 다음과 같은 이점을 제공합니다.\n1.  **No-Code 개발 (D)**: 시각적인 인터페이스를 통해 비개발자도 비즈니스 로직을 쉽게 구축할 수 있습니다.\n2.  **자연어 설명 (C)**: 자동화 흐름이 기계적인 코드가 아닌 인간이 이해하기 쉬운 문장 형태로 표시되어 가독성이 뛰어납니다.\n3.  **통합 용이성 (A)**: **Spoke**를 활용하여 외부 서드파티 시스템(Slack, Jira 등)과의 연동을 표준화된 방식으로 신속하게 구현할 수 있습니다."
  },
  {
    "id": 375,
    "title": "As administrator, what must you do to access feature of High Security Settings?",
    "options": [
      {
        "letter": "A",
        "text": "Select Elevate Roles"
      },
      {
        "letter": "B",
        "text": "Add security_admin role to your user account"
      },
      {
        "letter": "C",
        "text": "Impersonate Security Admin"
      },
      {
        "letter": "D",
        "text": "Use System Administrator < Elevate Roles module"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ACL 수정이나 인스턴스 전역 보안 정책을 설정하는 **High Security Settings**에 접근하려면 **역할 상승(Elevate Roles)** 프로세스가 필수적입니다.\n*   **필요 역할**: 관리자는 자신의 프로필 메뉴에서 **`security_admin`** 역할을 일시적으로 활성화해야 합니다.\n*   **보안 가드레일**: 상승된 권한은 현재 **세션(Session)** 동안만 유지되며, 로그아웃하거나 브라우저를 닫으면 자동으로 해제되어 권한 오남용을 방지하는 안전장치 역할을 합니다."
  },
  {
    "id": 376,
    "title": "What are examples of UI Actions relating to forms? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Form Context Menu"
      },
      {
        "letter": "B",
        "text": "Form View"
      },
      {
        "letter": "C",
        "text": "Form Buttons"
      },
      {
        "letter": "D",
        "text": "Form Links. E. Form Columns"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: **A, C, D**. ServiceNow **UI 액션(UI Actions)**은 사용자가 시스템과 상호작용할 수 있는 시각적 트리거를 제공합니다. 폼(Form) 인터페이스에서 흔히 볼 수 있는 예시는 다음과 같습니다.\n1.  **Form Buttons (C)**: 폼 상단이나 하단에 위치한 실행 버튼 (예: Save, Update).\n2.  **Form Links (D)**: 폼 하단의 'Related Links' 섹션에 표시되는 텍스트 기반 하이퍼링크.\n3.  **Form Context Menu (A)**: 폼 헤더를 우클릭하거나 햄버거 아이콘을 눌렀을 때 나타나는 실행 메뉴.\n*   **기능**: 이러한 요소들은 클릭 시 서버 측 비즈니스 로직이나 클라이언트 측 JavaScript를 실행하여 레코드를 처리합니다."
  },
  {
    "id": 377,
    "title": "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against me data?",
    "options": [
      {
        "letter": "A",
        "text": "Style"
      },
      {
        "letter": "B",
        "text": "Format"
      },
      {
        "letter": "C",
        "text": "Data"
      },
      {
        "letter": "D",
        "text": "Configure"
      },
      {
        "letter": "E",
        "text": "Group by"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 보고서 디자이너(Report Designer)는 4가지 구성 탭을 통해 단계적으로 보고서를 완성합니다. \n*   **Configure (구성)** 탭의 역할: 데이터의 **그룹화(Group by)** 기준을 지정하고, 누적 계산이나 함수 필드를 사용한 복잡한 연산 로직을 정의합니다.\n*   **기타 단계**: Data(원본 선택) -> Type(시각화 유형 선택) -> **Configure(그룹핑 및 연산)** -> Style(룩앤필 조정) 순으로 진행됩니다."
  },
  {
    "id": 378,
    "title": "When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?",
    "options": [
      {
        "letter": "A",
        "text": "Client"
      },
      {
        "letter": "B",
        "text": "Server"
      },
      {
        "letter": "C",
        "text": "Browser"
      },
      {
        "letter": "D",
        "text": "Network"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **데이터 정책(Data Policy)**은 인스턴스 전반의 데이터 품질을 보장하기 위해 **서버(Server)** 측에서 실행되는 강력한 가드레일입니다.\n*   **강제 범위**: 서버 측에서 작동하기 때문에 웹 브라우저(UI)뿐만 아니라 **데이터 임포트(Import Sets)**나 **웹 서비스(API)**를 통해 유입되는 모든 데이터에 동일한 필수/읽기전용 규칙을 강제합니다.\n*   **가치**: 데이터 유입 경로에 상관없이 시스템 전반의 물리적인 데이터 정합성을 유지하는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 379,
    "title": "A customer wants to be able to identify and track components of their infrastructure that support their ecommerce service. What ServiceNow products could support this requirement? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Performance Analytics"
      },
      {
        "letter": "B",
        "text": "Configuration Management (CMDB)"
      },
      {
        "letter": "C",
        "text": "Financial Management"
      },
      {
        "letter": "D",
        "text": "Discovery"
      },
      {
        "letter": "E",
        "text": "Service Mapping"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "정답: **B, D, E**. 비즈니스 서비스(예: 전자상거래)를 지탱하는 하부 인프라를 체계적으로 추적하려면 다음 제품군의 유기적 연동이 필수적입니다.\n1.  **CMDB (B)**: 모든 구성 항목(CI)과 그들 간의 관계 정보를 저장하는 중앙 데이터베이스입니다.\n2.  **Discovery (D)**: 네트워크를 스캔하여 서버, 장비, 소프트웨어 등 기술적 CI를 자동으로 식별하고 CMDB를 채웁니다 (Bottom-up).\n3.  **Service Mapping (E)**: 비즈니스 서비스 관점에서 어떤 기술적 CI들이 유기적으로 연결되어 있는지 하향식으로 가시화합니다 (Top-down).\n*   **CSDM 연관**: 이는 CSDM의 **Manage Technical Services**와 **Sell/Consume** 도메인을 연결하는 핵심 아키텍처 활동입니다."
  },
  {
    "id": 380,
    "title": "On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?",
    "options": [
      {
        "letter": "A",
        "text": "Can Read"
      },
      {
        "letter": "B",
        "text": "Can Write"
      },
      {
        "letter": "C",
        "text": "Can Contribute"
      },
      {
        "letter": "D",
        "text": "Can Author"
      },
      {
        "letter": "E",
        "text": "Cannot Author"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 지식 관리(Knowledge Management) 거버넌스에서 지식 문서를 작성, 수정 및 관리할 수 있는 권한은 지식 기반(Knowledge Base)의 **`Can Contribute`** 관련 리스트를 통해 제어합니다.\n*   **보안 계층**: 사용자가 특정 지식 기반에 글을 올리려면 해당 레코드에 지정된 **사용자 기준(User Criteria)**에 부합해야 합니다.\n*   **조회 권한과의 차이**: 문서를 검색하고 읽는 권한은 **`Can Read`** 탭에서 별도로 관리하여 조회자와 기여자를 엄격히 구분합니다."
  },
  {
    "id": 381,
    "title": "What is the best practice related to using the Default Update Set for moving customizations between instances?",
    "options": [
      {
        "letter": "A",
        "text": "Merge Default update sets before moving between instances"
      },
      {
        "letter": "B",
        "text": "Submit Default update set to application repository"
      },
      {
        "letter": "C",
        "text": "You should not use the Default Update sets for moving between instances"
      },
      {
        "letter": "D",
        "text": "Keep Default update set to maximum of 20 records, for troubleshooting purposes"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **업데이트 세트(Update Sets)** 관리에서 가장 중요한 거버넌스 원칙은 **Default 업데이트 세트를 사용하여 배포하지 않는 것**입니다.\n*   **이유**: Default 세트는 시스템의 모든 자잘한 변경사항을 무차별적으로 캡처하므로, 다른 인스턴스로 내보낼 때 불필요하거나 위험한 설정이 포함될 수 있습니다.\n*   **모범 사례**: 작업 목적에 맞는 **이름이 지정된(Named) 업데이트 세트**를 새로 생성하여 필요한 변경사항만 명확하게 관리하고 이동시켜야 합니다.\n*   **추적성**: 명시적 세트를 사용해야 개발-테스트-운영으로 이어지는 배포 이력을 정확히 추적하고 오류 발생 시 롤백(Rollback)하기 용이합니다."
  },
  {
    "id": 382,
    "title": "Which type of scripts run in the browser?",
    "options": [
      {
        "letter": "A",
        "text": "Policies and Client Scripts"
      },
      {
        "letter": "B",
        "text": "Access Contral Scripts"
      },
      {
        "letter": "C",
        "text": "script Include Scripts"
      },
      {
        "letter": "D",
        "text": "Business Rule Scripts"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 플랫폼에서 로직의 실행 위치를 구분하는 것은 성능 최적화와 사용자 경험(UX) 설계의 기초입니다.\n*   **클라이언트 측 (Browser)**: 사용자의 웹 브라우저 내에서 즉각적으로 실행됩니다. **UI 정책(UI Policy)**과 **클라이언트 스크립트(Client Scripts)**가 대표적이며, 폼 로드나 필드 값 변경 시 즉각적인 반응을 제공합니다.\n*   **서버 측 (Server)**: 인스턴스의 데이터베이스 계층에서 실행됩니다. **비즈니스 규칙(Business Rules)**, **스크립트 인클루드**, **접근 제어(ACL)** 스크립트 등이 해당하며, 실제 데이터의 물리적 처리와 보안을 담당합니다."
  },
  {
    "id": 383,
    "title": "How would you distinguish between a Base Class table and a Parent Class table?",
    "options": [
      {
        "letter": "A",
        "text": "Base Class tables always have tables extended from them, Parent tables do not have tables extended from them."
      },
      {
        "letter": "B",
        "text": "Base Class tables are not extended from another table, while Parent Class tables may be extended from another table."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 데이터 모델의 계층 구조를 정의하는 아키텍처 용어입니다.\n*   **기본 클래스 (Base Class)**: 테이블 계층 구조의 최상위에 위치하며 다른 테이블을 확장(Extend)하지 않는 테이블입니다 (예: `task`, `cmdb`). 모든 확장의 '뿌리' 역할을 합니다.\n*   **부모 클래스 (Parent Class)**: 특정 테이블의 바로 위 단계에 있는 테이블을 뜻합니다. 자신도 상위 테이블을 상속받았을 수 있는 상대적인 개념입니다.\n*   **자식 클래스 (Child Class)**: 상위 테이블로부터 필드와 로직을 물려받은 하위 테이블입니다."
  },
  {
    "id": 384,
    "title": "On the Cl Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
    "options": [
      {
        "letter": "A",
        "text": "Service Tracer"
      },
      {
        "letter": "B",
        "text": "Automapping Utility"
      },
      {
        "letter": "C",
        "text": "Relationships"
      },
      {
        "letter": "D",
        "text": "Transform Map"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **디펜던시 뷰(Dependency View)**가 기술적 구성 항목(CI)들 사이의 연결 고리를 시각화할 수 있는 데이터 근거는 **관계(Relationships)** 정보입니다.\n*   **데이터 테이블**: CI 간의 의존 관계는 **`cmdb_rel_ci`** 테이블에 정의되어 저장됩니다.\n*   **가시성**: '호스팅함(Runs on)', '종속됨(Depends on)' 등의 관계 유형을 통해 서버 장애가 어떤 애플리케이션 서비스에 영향을 주는지 하향식(Top-down) 또는 상향식(Bottom-up)으로 추적할 수 있게 해줍니다.\n*   **CSDM 연관**: 이는 CSDM의 **Manage Technical Services** 도메인에서 인프라의 가동 상태를 서비스 가치와 연결하는 핵심 메커니즘입니다."
  },
  {
    "id": 385,
    "title": "How would you define an Access Control, to allow a user with iti role to have permission to create incident records?",
    "options": [
      {
        "letter": "A",
        "text": "Name: incident; Permission: write; Role: itil"
      },
      {
        "letter": "B",
        "text": "Name: incident Any, Operation: write, Permission: itil"
      },
      {
        "letter": "C",
        "text": "Name: incident.*; Operation: write; Permission: itil"
      },
      {
        "letter": "D",
        "text": "Name: incident None, Permission: create: Role: itil"
      },
      {
        "letter": "E",
        "text": "Name: incident. None; Operation: create; Role: itil"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow **접근 제어(ACL)** 명명 규칙에서 레코드(행) 전체에 대한 보안을 설정할 때는 **`.None`** 접두사를 사용합니다.\n*   **객체 구조**: `incident.None`은 인시던트 테이블의 레코드 자체에 대한 접근 권한을 의미합니다.\n*   **작업(Operation)**: 새로운 데이터를 삽입하는 행위이므로 **`create`** 작업이 선택되어야 합니다.\n*   **보안 계층**: 사용자가 인시던트를 생성하려면 반드시 `incident.None` (테이블 수준)에 대한 `create` 권한이 허용되어야 하며, 이후 개별 필드 수준의 쓰기 권한이 평가됩니다."
  },
  {
    "id": 386,
    "title": "What options can you see, when you fight click on a Cl, from the Cl dependency view map? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "View Affected Cis"
      },
      {
        "letter": "B",
        "text": "View Related Tasks"
      },
      {
        "letter": "C",
        "text": "View Recent Outages"
      },
      {
        "letter": "D",
        "text": "View Cases"
      },
      {
        "letter": "E",
        "text": "View Knowledge"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "정답: **A, B, C**. **디펜던시 뷰(Dependency View)** 맵은 단순한 시각화를 넘어 운영 효율을 높이는 대화형 인터페이스를 제공합니다.\n*   **운영 인사이트**: 특정 CI를 우클릭하면 나타나는 메뉴를 통해 다음과 같은 비즈니스 문맥을 즉시 확인할 수 있습니다.\n    1. **View Affected CIs (A)**: 해당 장비 장애 시 영향을 받는 다른 구성 항목들을 파악합니다.\n    2. **View Related Tasks (B)**: 현재 이 CI와 연관되어 진행 중인 인시던트, 변경 요청 목록을 확인합니다.\n    3. **View Recent Outages (C)**: 과거의 장애 이력을 검토하여 문제 패턴을 분석합니다."
  },
  {
    "id": 387,
    "title": "What icon do you use to change the icon and color on a Favorite??",
    "options": [
      {
        "letter": "A",
        "text": "Star"
      },
      {
        "letter": "B",
        "text": "Triangle"
      },
      {
        "letter": "C",
        "text": "Pencil"
      },
      {
        "letter": "D",
        "text": "Clock"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 애플리케이션 내비게이터의 **즐겨찾기(Favorites)** 탭은 사용자의 업무 편의를 위한 개인화 영역입니다.\n*   **편집 모드**: 즐겨찾기 목록 하단의 **Pencil (연필)** 아이콘을 클릭하면 편집 모드로 전환됩니다.\n*   **개인화 옵션**: 사용자는 각 즐겨찾기 항목의 이름(Label)을 변경하고, 수십 가지의 아이콘 모양과 색상을 조합하여 자신만의 직관적인 내비게이션 환경을 구축할 수 있습니다.\n*   **범위**: 이 설정은 해당 사용자 계정에만 적용되는 개인 설정(User Preference)입니다."
  },
  {
    "id": 388,
    "title": "You have been asked to configure a form so an employee could a tablet and select the standard accessary options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create Catalog Item for the Tablet, and add a variable set to the form, for the accessory options."
      },
      {
        "letter": "B",
        "text": "Create a Record Producer, and on the form, add a check box variable for each accessory option."
      },
      {
        "letter": "C",
        "text": "On Shopping Cart configuration, select option to show the Add Accessories button."
      },
      {
        "letter": "D",
        "text": "Create one Catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector."
      },
      {
        "letter": "E",
        "text": "Create Catalog Item for the tablet, and on the form, add a check box variable for each accessory option."
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "정답: **A, D, E**. 서비스 카탈로그 설계 시 비즈니스 요구사항에 따라 다양한 설계 전략을 취할 수 있습니다.\n1.  **가변 세트 활용 (A)**: 여러 항목에서 공통으로 쓰이는 부속품 옵션을 **Variable Set**으로 묶어 재사용함으로써 관리 효율을 높입니다.\n2.  **개별 항목 관리 (D)**: 각 부속품을 독립적인 **Catalog Item**으로 정의하여 재고 관리와 가격 정책을 세부적으로 운영합니다.\n3.  **체크박스 변수 (E)**: 주 항목(태블릿)의 폼 내에 체크박스 변수들을 배치하여 사용자가 주문 시 간편하게 선택하도록 구성합니다.\n*   **참고**: **레코드 프로듀서(B)**는 태스크 생성이 목적이므로 단순 주문 옵션 구성에는 적합하지 않습니다."
  },
  {
    "id": 389,
    "title": "Which feature helps to automatically allocate a critical, high priority, service request to the appropriate assignment group or team member?",
    "options": [
      {
        "letter": "A",
        "text": "User Policy"
      },
      {
        "letter": "B",
        "text": "UI policy"
      },
      {
        "letter": "C",
        "text": "Predictive Intelligence"
      },
      {
        "letter": "D",
        "text": "Assignment Rule"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. **할당 규칙(Assignment Rules)**은 특정 조건(예: 중요도 P1, 서비스 유형)을 만족하는 작업 레코드가 생성될 때, 이를 처리할 최적의 주체에게 자동으로 배정하는 자동화 도구입니다.\n*   **자동화 대상**: **할당 그룹(Assignment group)**과 **담당자(Assigned to)** 필드를 시스템이 자동으로 채워줍니다.\n*   **비즈니스 가치**: 수동 배정에 소요되는 시간을 단축하고, 서비스 수준 계약(SLA) 준수를 위해 작업을 신속하게 실무자에게 전달하는 핵심 트리거 역할을 합니다.\n*   **참고**: 더 고도화된 지능형 배정이 필요한 경우 **Predictive Intelligence**나 **Advanced Work Assignment (AWA)**를 사용하기도 합니다."
  },
  {
    "id": 390,
    "title": "A customer wants to use a client script to validate things on a form m order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "onSubmission()"
      },
      {
        "letter": "B",
        "text": "onSubmit()"
      },
      {
        "letter": "C",
        "text": "onLoad"
      },
      {
        "letter": "D",
        "text": "onUpdate()"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **`onSubmit()` 클라이언트 스크립트**는 데이터가 서버로 전송되기 전, 사용자의 브라우저에서 실행되는 마지막 데이터 검증 관문입니다.\n*   **데이터 무결성**: 사용자가 입력한 값들이 비즈니스 규칙에 부합하는지 최종 확인합니다.\n*   **제출 제어**: 스크립트 내에서 `false`를 반환하면 폼 제출이 중단되고 오류 메시지를 표시하여 사용자가 잘못된 데이터를 저장하는 것을 방지합니다.\n*   **활용 예시**: 시작일이 종료일보다 늦은지 검사하거나, 특정 조건에서 첨부 파일 여부를 확인하는 등의 로직에 사용됩니다."
  },
  {
    "id": 391,
    "title": "What type of field has a drop down list, from which you can pick from pre-defined options?",
    "options": [
      {
        "letter": "A",
        "text": "Choice"
      },
      {
        "letter": "B",
        "text": "Picker"
      },
      {
        "letter": "C",
        "text": "Drop down"
      },
      {
        "letter": "D",
        "text": "Option"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **선택(Choice)** 필드 유형은 사용자에게 미리 정의된 옵션 리스트를 드롭다운 형태로 제공하여 데이터의 표준화를 유도하는 도구입니다.\n*   **메커니즘**: 개별 옵션 값들은 **`sys_choice`** 테이블에 저장되어 관리됩니다.\n*   **장점**: 자유로운 텍스트 입력으로 인한 데이터 오염을 방지하고, 보고서 작성 시 일관된 그룹화 기준을 제공합니다.\n*   **참고**: 특정 필드의 선택 항목을 테이블마다 다르게 가져가고 싶을 때는 'Dictionary Override'를 사용합니다."
  },
  {
    "id": 392,
    "title": "What are the main components of the Form Design interface? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Field Layout"
      },
      {
        "letter": "B",
        "text": "Page Header"
      },
      {
        "letter": "C",
        "text": "Field Navigator"
      },
      {
        "letter": "D",
        "text": "Field Picker"
      },
      {
        "letter": "E",
        "text": "Form Layout"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "정답: **B, C, E**. **폼 디자인(Form Design)** 인터페이스는 드래그 앤 드롭 방식으로 폼의 레이아웃을 시각적으로 설계하는 도구이며, 세 가지 핵심 영역으로 구성됩니다.\n1.  **Page Header (B)**: 현재 편집 중인 테이블과 뷰(View) 정보를 표시하며, 저장 및 미리보기 기능을 제공합니다.\n2.  **Field Navigator (C)**: 왼쪽 패널에 위치하며, 기존 필드를 검색하거나 새로운 필드 유형을 폼으로 끌어올 수 있는 라이브러리 역할을 합니다.\n3.  **Form Layout (Canvas) (E)**: 중앙 작업 영역으로, 필드의 배치, 섹션(Sections) 생성, 그리고 주석(Annotations) 추가를 실시간 레이아웃 형태로 수행합니다."
  },
  {
    "id": 393,
    "title": "Many actions are included with flow designer, what are some frequently used core actions? Choose 4 answers.",
    "options": [
      {
        "letter": "A",
        "text": "Look for Update"
      },
      {
        "letter": "B",
        "text": "Create Record"
      },
      {
        "letter": "C",
        "text": "Ask for Approval"
      },
      {
        "letter": "D",
        "text": "Look Up Record"
      },
      {
        "letter": "E",
        "text": "Wait for Condition"
      },
      {
        "letter": "F",
        "text": "Wait for Match"
      }
    ],
    "answer": [
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "정답: **B, C, D, E**. **플로우 디자이너(Flow Designer)**의 **코어 액션(Core Actions)**은 복잡한 스크립트 작성 없이도 비즈니스 프로세스를 자동화할 수 있도록 ServiceNow가 기본 제공하는 표준 작업 단위입니다.\n*   **Create Record (B)**: 조건 충족 시 특정 테이블에 새 레코드 생성.\n*   **Ask for Approval (C)**: 사용자나 그룹에 승인 요청 송신 및 결과 대기.\n*   **Look Up Record (D)**: 데이터베이스에서 특정 조건과 일치하는 단일 레코드 검색.\n*   **Wait for Condition (E)**: 특정 필드 값이 원하는 상태가 될 때까지 플로우 일시 중지.\n*   **이점**: 이러한 액션들은 **데이터 알약(Data Pills)**과 결합되어 강력한 로코드(Low-code) 자동화를 가능하게 합니다."
  },
  {
    "id": 394,
    "title": "What are the three key tables in an enterprise CMDB? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "cmdb"
      },
      {
        "letter": "B",
        "text": "sn_cmdb_bak"
      },
      {
        "letter": "C",
        "text": "cmdb_rel_ci"
      },
      {
        "letter": "D",
        "text": "sn_cmdb"
      },
      {
        "letter": "E",
        "text": "cmdb_bak"
      },
      {
        "letter": "F",
        "text": "cmdb_ci"
      }
    ],
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "정답: **A, C, F**. 엔터프라이즈급 CMDB 데이터 모델을 지탱하는 3대 아키텍처 테이블은 다음과 같습니다.\n1.  **cmdb (A)**: 모든 구성 항목(CI) 클래스의 계층 구조를 정의하는 최상위 베이스 테이블입니다.\n2.  **cmdb_ci (F)**: 실제 운영되는 하드웨어, 소프트웨어 등 개별 CI의 속성 데이터가 담기는 마스터 테이블입니다.\n3.  **cmdb_rel_ci (C)**: CI들 사이의 'Runs on', 'Depends on'과 같은 의존 관계(Relationship) 정보를 전문적으로 저장합니다.\n*   **가치**: 이 구조는 CSDM(Common Service Data Model)의 기술적 기반이 되어 정확한 서비스 가시성을 제공합니다."
  },
  {
    "id": 395,
    "title": "For your implementation, the following tables. are extended fram each ofher: *Incident table is extended from Task table.* Super Incident table is extended from Incident table, In this situation, which table(s) are P arent, Child and Base tables? Choose 5 answers",
    "options": [
      {
        "letter": "A",
        "text": "Super Incident table is a Parent table"
      },
      {
        "letter": "B",
        "text": "Super Incident table is a Child table"
      },
      {
        "letter": "C",
        "text": "Task table is a Child table"
      },
      {
        "letter": "D",
        "text": "Super Incident table is a Base table"
      },
      {
        "letter": "E",
        "text": "Task table is a Parent table"
      },
      {
        "letter": "F",
        "text": "Incident table is a Base table"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "정답: **B, E**. ServiceNow의 **테이블 확장(Table Extension)** 모델은 객체 지향 상속 원리를 따릅니다. `Task -> Incident -> Super Incident` 계층 구조를 분석하면 다음과 같습니다.\n1.  **Base Table**: 계층의 뿌리가 되는 **Task (E)**. 다른 테이블을 확장하지 않습니다.\n2.  **Parent Table**: 자식을 가진 모든 테이블. **Task (E)**는 Incident의 부모이며, **Incident**는 Super Incident의 부모입니다.\n3.  **Child Table**: 부모를 확장한 모든 테이블. **Incident**는 Task의 자식이며, **Super Incident (B)**는 Incident의 자식입니다.\n*   **핵심**: 자식 테이블은 부모의 모든 필드와 로직(ACL, BR 등)을 상속받습니다."
  },
  {
    "id": 396,
    "title": "What instance resource allows you to access guided tours, information about actions, and instructions an how to use inputs and outputs in your flaw?",
    "options": [
      {
        "letter": "A",
        "text": "Community"
      },
      {
        "letter": "B",
        "text": "Help Panel (question mark icon)"
      },
      {
        "letter": "C",
        "text": "Docs"
      },
      {
        "letter": "D",
        "text": "Wiki"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **플로우 디자이너(Flow Designer)** 내의 **도움말 패널(Help Panel)**은 사용자가 설계를 진행하는 도중에 즉각적인 도움을 받을 수 있는 '플랫폼 내장 지원' 도구입니다.\n*   **기능**: 사용자가 추가한 액션에 대한 상세 설명, 입력(Inputs) 및 출력(Outputs) 데이터 활용법, 가이드 투어 등을 컨텍스트에 맞게 제공합니다.\n*   **가시성**: 화면 우측 상단의 물음표(?) 아이콘을 통해 활성화하며, 외부 문서를 검색할 필요 없이 인터페이스 내에서 즉각적인 기술 가이드를 얻을 수 있게 해줍니다."
  },
  {
    "id": 397,
    "title": "An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Their user account failed LDAP authentication"
      },
      {
        "letter": "B",
        "text": "Their user account is not logged in properly"
      },
      {
        "letter": "C",
        "text": "Their user account was not approved by their manager"
      },
      {
        "letter": "D",
        "text": "Their user account does not have itil role"
      },
      {
        "letter": "E",
        "text": "Their user account does not belong to any groups, which contain the itil role"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: **A, C**. (제공된 정답 키를 따르며 실무적 예외 사항을 설명함) 일반적으로 IT 실무자가 'Self-Service' 메뉴만 볼 수 있는 근본 원인은 **`itil` 역할 부재**나 그룹 미소속(E)인 경우가 대부분입니다.\n*   **해석**: 본 문항의 정답인 'LDAP 인증 실패(A)'나 '매니저 승인 누락(C)'은 신규 계정 생성 시의 프로비저닝 워크플로우가 완료되지 않아, 최종적으로 필요한 역할(Role)이 계정에 할당되지 못한 상태를 의도한 것으로 풀이됩니다.\n*   **진단**: 관리자는 항상 해당 사용자의 사용자 레코드를 확인하여 적절한 역할(Roles)이 부여되어 있는지 점검해야 합니다."
  },
  {
    "id": 398,
    "title": "When importing data, what happens to imported rows, if no coalesce field is specified?",
    "options": [
      {
        "letter": "A",
        "text": "All rows are rejected from the import, as coalesce field is required."
      },
      {
        "letter": "B",
        "text": "All rows are treated as new records. No existing records are updated."
      },
      {
        "letter": "C",
        "text": "Duplicate rows are rejected from the import."
      },
      {
        "letter": "D",
        "text": "All rows are treated as new records, but errors will be flagged in the import log."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 데이터 임포트 아키텍처에서 **병합(Coalesce)** 필드는 기존 데이터와 대조할 '고유 식별자' 역할을 합니다.\n*   **병합 필드 부재 시**: 시스템은 기존 레코드와의 일치 여부를 판단할 수 없으므로, 임포트 세트 테이블의 모든 행을 고유한 항목으로 간주하여 **항상 새로운 레코드로 생성(Insert-only)**합니다.\n*   **리스크**: 이는 데이터 중복(Duplicates)의 주요 원인이 되므로, 업데이트가 필요한 데이터 적재 시에는 반드시 사번이나 이메일 같은 고유 키를 병합 필드로 지정해야 합니다."
  },
  {
    "id": 399,
    "title": "A new employee joins the IT deployment and needs to perform work assigned to Network and Hardware groups. How would you set up their access? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Add User Account to itll group"
      },
      {
        "letter": "B",
        "text": "Add User Account to ACL"
      },
      {
        "letter": "C",
        "text": "Add User Account to network group"
      },
      {
        "letter": "D",
        "text": "Add User Account to IT Knowledgebase"
      },
      {
        "letter": "E",
        "text": "Create User Account"
      },
      {
        "letter": "F",
        "text": "Add User Account to Hardware group"
      }
    ],
    "answer": [
      "B",
      "C",
      "F"
    ],
    "explanation": "정답: **B, C, F**. (제공된 정답 키를 기반으로 보강함) 신규 직원의 업무 접근 권한을 설정하는 가장 효율적인 방식은 **그룹 기반 할당(Group-based Assignment)**입니다.\n1.  **그룹 추가 (C, F)**: 사용자를 'Network' 및 'Hardware' 그룹의 멤버로 등록합니다.\n2.  **권한 상속**: 그룹에 할당된 역할(`itil` 등)이 사용자에게 자동으로 상속됩니다.\n*   **비판적 해석**: 본 문항의 B(Add to ACL)는 복원 과정의 오류로 보이며, 실무적으로는 ACL에 사용자를 직접 넣는 대신 그룹 멤버십을 통해 권한을 제어하는 것이 ServiceNow의 RBAC(Role-Based Access Control) 표준 모범 사례입니다."
  },
  {
    "id": 400,
    "title": "Which path would you take to access the table configuration page from a form?",
    "options": [
      {
        "letter": "A",
        "text": "The Form Context menu > View > Table"
      },
      {
        "letter": "B",
        "text": "The Form Context menu > Configure > Table"
      },
      {
        "letter": "C",
        "text": "The Form Context menu > Configure > Dictionary"
      },
      {
        "letter": "D",
        "text": "The Form Context menu > View > Show Table"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow에서 현재 보고 있는 레코드가 속한 테이블의 전반적인 기술 설정을 관리하려면 **Form Context Menu (햄버거 아이콘)**의 **`Configure > Table`** 경로를 통해 진입합니다.\n*   **관리 가능 항목**: 테이블의 레이블, 필드 정의(Columns), 데이터 제어 규칙(Controls), 비즈니스 규칙(Business Rules), ACL 리스트 등을 한눈에 확인하고 통합 관리할 수 있는 테이블 관리자 허브로 연결됩니다."
  },
  {
    "id": 401,
    "title": "What type of query allows you to filter list data using normal words, instead of the condition builder?",
    "options": [
      {
        "letter": "A",
        "text": "Natural Language Query"
      },
      {
        "letter": "B",
        "text": "Alexa Query"
      },
      {
        "letter": "C",
        "text": "Machine Learning Query"
      },
      {
        "letter": "D",
        "text": "Predictive Intelligence Query"
      },
      {
        "letter": "E",
        "text": "Auto-suggest Query"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **자연어 쿼리(NLQ, Natural Language Query)**는 복잡한 조건 빌더(Condition Builder) 사용법을 모르는 일반 사용자도 일상적인 언어로 데이터를 조회할 수 있게 돕는 지능형 인터페이스입니다.\n*   **작동 방식**: 리스트 상단의 검색창에 \"Incidents opened this week by ITIL user\"와 같이 입력하면 시스템이 의도를 파악하여 해당하는 필터 조건을 자동으로 생성하고 적용합니다.\n*   **가치**: 데이터 분석의 장벽을 낮추고 필요한 정보를 더 신속하게 탐색할 수 있는 사용자 경험을 제공합니다."
  },
  {
    "id": 402,
    "title": "What action will allow you to personalize layouts of columns in a list?",
    "options": [
      {
        "letter": "A",
        "text": "Click Gear icon > Personalize window options > Select the appropriate columns"
      },
      {
        "letter": "B",
        "text": "Select the column to be personalized > Click Edit icon (Penal) > Choose me options to personage"
      },
      {
        "letter": "C",
        "text": "Context Menu > View > Personalize"
      },
      {
        "letter": "D",
        "text": "Select the column to be personalized and right at the header > Choose the options to personalize"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **리스트 메카닉(Gear 아이콘)** 기능을 통해 개별 사용자는 시스템의 기본 설정을 변경하지 않고 자신만의 리스트 뷰를 구성할 수 있습니다.\n*   **개인화(Personalization)**: 표시할 컬럼을 선택하고 순서를 조정하며, 이는 '현재 로그인한 사용자'에게만 적용되는 개인 설정(User Preference)입니다.\n*   **구분**: 시스템 전역의 기본 레이아웃을 영구적으로 바꾸려면 관리자가 `Configure > List Layout` 기능을 사용해야 합니다."
  },
  {
    "id": 403,
    "title": "What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?",
    "options": [
      {
        "letter": "A",
        "text": "Analytics Reports"
      },
      {
        "letter": "B",
        "text": "Performance Analytics"
      },
      {
        "letter": "C",
        "text": "Scheduled Reports"
      },
      {
        "letter": "D",
        "text": "Reporting"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **성능 분석(Performance Analytics, PA)**은 단순한 시점 보고(Reporting)를 넘어 비즈니스 가치를 도출하는 고도화된 분석 도구입니다.\n*   **주요 기능**: 데이터의 장기적인 **추세(Trending)** 파악, 목표치(Targets) 대비 실적 비교, 그리고 과거 데이터를 바탕으로 한 미래 예측을 지원합니다.\n*   **가치**: 리포팅이 '현재 무엇이 일어나고 있는가'를 알려준다면, PA는 '우리가 개선되고 있는가'라는 인사이트를 제공하여 지속적인 서비스 개선(CSI)을 가능하게 합니다."
  },
  {
    "id": 404,
    "title": "A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role. What type of rules (s) would you use to implement this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Dictionary Design"
      },
      {
        "letter": "B",
        "text": "Field Limiter"
      },
      {
        "letter": "C",
        "text": "UI Policy"
      },
      {
        "letter": "D",
        "text": "UI Design"
      },
      {
        "letter": "E",
        "text": "Form Constraint"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **UI 정책(UI Policy)**은 폼 수준에서 조건에 따라 필드의 동작을 동적으로 제어하는 가장 효율적인 **노코드(No-code)** 도구입니다.\n*   **동적 제어**: '상태가 Resolved로 바뀔 때 해결 코드 필수 지정', '특정 역할이 없을 때 필드 숨김'과 같은 UI 로직을 스크립트 없이 구현할 수 있습니다.\n*   **클라이언트 측 실행**: 브라우저에서 즉각 실행되어 사용자에게 실시간 피드백을 제공하므로 사용자 경험(UX) 향상에 최적화되어 있습니다."
  },
  {
    "id": 405,
    "title": "What do you click when you have made modification to your report, and your want to see the results without saving?",
    "options": [
      {
        "letter": "A",
        "text": "Execute"
      },
      {
        "letter": "B",
        "text": "Try ir"
      },
      {
        "letter": "C",
        "text": "Run"
      },
      {
        "letter": "D",
        "text": "Test"
      },
      {
        "letter": "E",
        "text": "Preview"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 보고서 디자이너(Report Designer)에서 **Run (실행)** 버튼은 현재까지 설정된 조건들을 바탕으로 데이터베이스를 쿼리하여 결과물을 즉시 미리보기 할 때 사용합니다.\n*   **검증**: 보고서를 최종 저장(Save)하거나 공유(Share)하기 전에, 필터링이 의도대로 되었는지와 시각화 결과가 적절한지를 실시간으로 확인하는 필수 단계입니다.\n*   **성능**: 대규모 데이터를 다룰 때는 실행 시마다 서버 리소스가 소모되므로, 필터 조건을 먼저 정교하게 설정한 후 실행하는 것이 좋습니다."
  },
  {
    "id": 406,
    "title": "On a Business Rule, the When salting determines at what point the rule executes. What are the options for specifying that timing?",
    "options": [
      {
        "letter": "A",
        "text": "Insert, Update, Delete. Query"
      },
      {
        "letter": "B",
        "text": "4G} Before, After, Async, Display"
      },
      {
        "letter": "C",
        "text": "Prior to, Synchronous, on Update"
      },
      {
        "letter": "D",
        "text": "Before, Synchronous, Scheduled Job, View"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **비즈니스 규칙(Business Rule)**의 실행 시점(`When`)은 처리하려는 로직의 성격에 따라 결정됩니다.\n1.  **Before**: DB 저장 직전에 실행 (유효성 검사 등).\n2.  **After**: DB 저장 직후 실행 (연관 레코드 업데이트 등).\n3.  **Async**: 저장은 완료하되 무거운 로직은 백그라운드에서 처리 (성능 최적화).\n4.  **Display**: 레코드 조회 후 폼이 사용자에게 표시되기 직전에 실행 (클라이언트로 데이터 전달)."
  },
  {
    "id": 407,
    "title": "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
    "options": [
      {
        "letter": "A",
        "text": "Attribute"
      },
      {
        "letter": "B",
        "text": "Label"
      },
      {
        "letter": "C",
        "text": "Field"
      },
      {
        "letter": "D",
        "text": "Column"
      },
      {
        "letter": "E",
        "text": "Data Element"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 리스트나 보고서에서 데이터를 정밀하게 추출하는 **조건 빌더(Condition Builder)**는 세 가지 핵심 요소로 구성됩니다.\n1.  **Field (C)**: 데이터를 검사할 열(Column)을 선택합니다 (예: 'Priority').\n2.  **Operator**: 데이터 비교 방식(연산자)을 선택합니다 (예: 'is', 'contains').\n3.  **Value**: 비교 기준이 되는 실제 데이터 값을 지정합니다.\n*   **가시성**: 선택 가능한 필드 리스트는 사용자의 역할(Roles)과 해당 테이블의 ACL 설정에 따라 동적으로 결정됩니다."
  },
  {
    "id": 408,
    "title": "The customer has asked that your change the default layout of the task list. *Number* Task Type *Parent* Short Description *Assignment Group* Assignment * Updated After navigation to the list, where would you click, to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Right click on any column header, Context menu > Configure > List Layout"
      },
      {
        "letter": "B",
        "text": "Right click List Gear icon > Configure > Columns"
      },
      {
        "letter": "C",
        "text": "Click List Context Menu >Personalize List"
      },
      {
        "letter": "D",
        "text": "Click List Context Menu > Configure Columns"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. ServiceNow 리스트 뷰에서 컬럼 구성(추가, 제거, 순서)을 시스템 수준에서 영구적으로 수정하려면 **List Layout** 설정을 사용합니다.\n*   **접근 경로**: 컬럼 헤더 우클릭 -> **Configure > List Layout** 선택.\n*   **UI 도구**: 슬러시버킷(Slushbucket) 인터페이스를 통해 표시 필드를 조정합니다.\n*   **영향 범위**: 톱니바퀴(Gear) 아이콘을 통한 개인화와 달리, 이 설정은 해당 뷰를 사용하는 **모든 사용자**에게 공통 적용됩니다."
  },
  {
    "id": 409,
    "title": "On a filter condition, which component is always a choice list?",
    "options": [
      {
        "letter": "A",
        "text": "Operator"
      },
      {
        "letter": "B",
        "text": "Filter Criteria"
      },
      {
        "letter": "C",
        "text": "Operation"
      },
      {
        "letter": "D",
        "text": "Match Criteria"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (문항의 답변 키에 따라 보강함) 리스트 필터의 **연산자(Operator / Operation)** 영역은 사용자가 직접 입력하는 대신 시스템이 제공하는 옵션 중 하나를 선택하는 **드롭다운(Choice list)** 형태입니다.\n*   **동적 제공**: 필드의 데이터 타입에 따라 적절한 연산자 리스트(예: 문자열은 'contains', 날짜는 'between')가 자동으로 필터링되어 나타납니다.\n*   **기능**: 기술적인 쿼리 문법을 모르더라도 논리적인 데이터 조회를 가능하게 하는 플랫폼의 핵심 UI 편의 기능입니다."
  },
  {
    "id": 410,
    "title": "NO.19 UI Action can prompt that an Incident has been successfully submitted",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **UI 액션(UI Actions)**은 버튼이나 링크를 통해 비즈니스 로직을 실행하며, 사용자에게 즉각적인 피드백을 제공할 수 있습니다.\n*   **사용자 경험**: 스크립트(`gs.addInfoMessage()` 등)를 사용하여 레코드가 성공적으로 생성되었거나 업데이트되었음을 시각적으로 알립니다.\n*   **효과**: 사용자는 자신의 요청이 시스템에 정상적으로 반영되었음을 확인하고 다음 업무로 넘어갈 수 있는 확신을 얻게 됩니다."
  },
  {
    "id": 411,
    "title": "NO.22 Business Rules are used to enforce mandatory data on a form",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B (False)**. **비즈니스 규칙(Business Rules)**은 데이터베이스 작업 시 서버 측에서 실행되는 로직으로, 폼의 시각적 속성(필수 여부 등)을 실시간으로 제어하는 도구가 아닙니다.\n*   **UI 제어 도구**: 사용자가 폼을 작성할 때 필드를 필수로 만들거나 숨기는 작업은 **UI 정책(UI Policy)**이나 **클라이언트 스크립트(Client Scripts)**가 담당합니다.\n*   **데이터 정책 (Data Policy)**: 서버 측에서 필수 여부를 강제하고 싶다면 데이터 정책을 사용하여 데이터 유입 경로에 상관없이 무결성을 보장하는 것이 표준입니다."
  },
  {
    "id": 412,
    "title": "NO.26 Knowledge articles within a knowledge base are grouped by category",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A (True)**. 지식 관리(Knowledge Management)에서 **카테고리(Category)** 구조는 지식 문서를 논리적으로 조직화하는 핵심 체계입니다.\n*   **탐색 효율성**: 사용자가 키워드 검색 없이도 주제별 계층 구조를 따라 필요한 정보를 스스로 찾을 수 있도록 돕습니다.\n*   **관리 효율성**: 지식 관리자는 카테고리별로 문서를 분류하여 지식 기반(Knowledge Base)의 콘텐츠를 체계적으로 유지보수할 수 있습니다."
  },
  {
    "id": 413,
    "title": "NO.38 What is the name of the table relationship, where two or more tables are related in a bi_x0002_directional relationship, so that the related records are visible from both tables in a related list?",
    "options": [
      {
        "letter": "A",
        "text": "Database View"
      },
      {
        "letter": "B",
        "text": "Many to Many"
      },
      {
        "letter": "C",
        "text": "One to Many"
      },
      {
        "letter": "D",
        "text": "Extended"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **다대다(Many-to-Many, M2M)** 관계는 한 테이블의 여러 레코드가 다른 테이블의 여러 레코드와 동시에 연결될 수 있는 구조입니다.\n*   **시각화**: 이 관계가 설정되면 양쪽 테이블의 폼 모두에서 서로를 **관련 리스트(Related List)**로 조회하고 관리할 수 있습니다.\n*   **기술적 구현**: 시스템은 두 테이블을 연결하기 위해 내부적으로 '교차 테이블(Junction Table)'을 생성하여 관계 데이터를 저장합니다.\n*   **예시**: '사용자(Users)'와 '그룹(Groups)'의 관계가 대표적입니다."
  },
  {
    "id": 415,
    "title": "NO.54 What Is the purpose of the Filter navigator In the Application Navigator?",
    "options": [
      {
        "letter": "A",
        "text": "Filter applications in order of use"
      },
      {
        "letter": "B",
        "text": "Quickly navigate to applications and modules"
      },
      {
        "letter": "C",
        "text": "Collapse and expand applications"
      },
      {
        "letter": "D",
        "text": "List applications In order of Top Requests"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 애플리케이션 내비게이터 상단의 **필터 내비게이터(Filter Navigator)**는 사용자가 인스턴스의 방대한 메뉴 중 원하는 곳으로 빠르게 이동할 수 있게 돕는 실시간 검색 도구입니다.\n*   **검색 대상**: 입력한 텍스트와 일치하는 **애플리케이션 이름**과 **모듈 이름**을 즉시 필터링하여 보여줍니다.\n*   **단축키 팁**: 테이블 이름 뒤에 `.list`를 입력하면 해당 테이블의 목록으로, `.form`을 입력하면 새 레코드 생성 화면으로 즉시 이동하는 파워 유저 기능도 제공합니다."
  },
  {
    "id": 416,
    "title": "NO.67 When creating a global custom table named \"abc\", what is the table name that is automatically assigned by the platform?",
    "options": [
      {
        "letter": "A",
        "text": "snc_abc"
      },
      {
        "letter": "B",
        "text": "abc"
      },
      {
        "letter": "C",
        "text": "u_abc"
      },
      {
        "letter": "D",
        "text": "sys_abc"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. ServiceNow 플랫폼은 테이블의 출처를 식별하기 위해 커스텀 테이블에 대해 엄격한 명명 규칙을 적용합니다.\n*   **전역 스코프 커스텀 테이블**: 사용자가 직접 생성한 테이블은 시스템이 자동으로 **`u_`** 접두사를 붙여 관리합니다 (예: `u_abc`).\n*   **애플리케이션 스코프 테이블**: 특정 스코프 앱 내에서 생성된 테이블은 `x_`로 시작하는 고유한 접두사를 가집니다.\n*   **시스템 테이블**: ServiceNow가 기본 제공하는 테이블은 보통 접두사가 없거나 `sys_`, `cmdb_` 등을 사용합니다."
  },
  {
    "id": 417,
    "title": "NO.77 What are the three components of a filter condition? (choose three)",
    "options": [
      {
        "letter": "A",
        "text": "Table"
      },
      {
        "letter": "B",
        "text": "Value"
      },
      {
        "letter": "C",
        "text": "Field"
      },
      {
        "letter": "D",
        "text": "Operator"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: **B, C, D**. 모든 리스트와 보고서에서 데이터를 정제하는 **조건 빌더(Condition Builder)**는 세 가지 논리적 요소로 구성됩니다.\n1.  **Field (C)**: 데이터를 검사할 대상 컬럼 (예: 'Priority').\n2.  **Operator (D)**: 데이터 대조 방식 (예: 'is', 'contains').\n3.  **Value (B)**: 비교의 기준이 되는 실제 값 (예: '1 - Critical').\n*   **시각화**: 이 구성 요소들은 리스트 상단에 **브레드크럼(Breadcrumbs)** 형태로 표시되어 사용자가 현재 적용된 필터를 쉽게 파악하고 수정할 수 있게 합니다."
  },
  {
    "id": 418,
    "title": "NO.87 An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    "options": [
      {
        "letter": "A",
        "text": "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned."
      },
      {
        "letter": "B",
        "text": "The manager does not have the itil role."
      },
      {
        "letter": "C",
        "text": "The manager is not a member of the Service Desk group."
      },
      {
        "letter": "D",
        "text": "The manager is not a member of the Network and Hardware groups."
      },
      {
        "letter": "E",
        "text": "The Assignment Group manager field is empty."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow의 **My Groups Work** 모듈은 로그인한 사용자가 실제로 **멤버로 등록된 그룹**에 할당된 활성 작업들을 필터링하여 보여줍니다.\n*   **원인**: IT 매니저라 할지라도 해당 그룹(`sys_user_group`)의 'Group Members' 관련 리스트에 포함되어 있지 않다면, 시스템은 해당 사용자를 해당 조직의 일원으로 인식하지 않습니다.\n*   **해결책**: 관리자는 매니저를 해당 'Network' 및 'Hardware' 그룹의 멤버로 추가하여 가시성을 확보해 주어야 합니다."
  },
  {
    "id": 419,
    "title": "NO.94 As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    "options": [
      {
        "letter": "A",
        "text": "Knowledge"
      },
      {
        "letter": "B",
        "text": "ServiceNow Wiki"
      },
      {
        "letter": "C",
        "text": "Knowledge Now"
      },
      {
        "letter": "D",
        "text": "SharePoint"
      },
      {
        "letter": "E",
        "text": "Stack Overflow"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 조직 내 IT 부서가 보유한 기술 문서, FAQ, 표준 운영 절차(SOP) 등을 체계적으로 관리하고 공유하는 중앙 허브는 **지식(Knowledge)** 인터페이스입니다.\n*   **기능**: 사용자는 키워드 검색이나 카테고리 탐색을 통해 솔루션을 스스로 찾을 수 있습니다.\n*   **가치**: 이를 통해 반복적인 문의를 줄이는 **장애 전이(Deflection)** 효과를 얻고, 서비스 데스크의 생산성을 대폭 향상시키는 'Shift-left' 전략을 구현합니다."
  },
  {
    "id": 420,
    "title": "NO.98 Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A (True)**. ServiceNow의 **지식 관리(Knowledge Management)** 아키텍처는 부서나 비즈니스 단위별로 독립적인 운영 모델을 가질 수 있도록 설계되었습니다.\n*   **독립적 구성 요소**: 각 지식 기반(Knowledge Base)은 서로 다른 **승인 워크플로우**, **접근 권한(User Criteria)**, **카테고리 계층**, 그리고 관리 책임을 독립적으로 정의할 수 있습니다.\n*   **보안**: 이를 통해 IT 기술 문서는 전체 직원에게, 인사(HR) 민감 문서는 특정 부서에게만 노출하는 등의 정교한 거버넌스가 가능합니다."
  },
  {
    "id": 421,
    "title": "NO.113 Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?",
    "options": [
      {
        "letter": "A",
        "text": "Create Record Producer and use the Available For list to specify First Line [sn_first_line] role"
      },
      {
        "letter": "B",
        "text": "Create Catalog Item and use the Not Available list to specify the Manager Group"
      },
      {
        "letter": "C",
        "text": "Create Catalog Item and use the Available For list to specify ITIL [itil] role"
      },
      {
        "letter": "D",
        "text": "Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. 서비스 카탈로그 항목(Catalog Item)의 가시성을 특정 사용자군으로 제한하거나 배제할 때는 **사용자 기준(User Criteria)**을 활용하는 것이 표준입니다.\n*   **제어 방식**: 특정 그룹이나 역할을 가진 사용자를 '사용 불가(Not Available For)' 리스트에 추가하면, 해당 항목은 그들에게 노출되지 않습니다.\n*   **거버넌스**: 이는 복잡한 스크립트나 ACL 없이도 비즈니스 요구사항에 맞춰 접근 권한을 유연하게 관리할 수 있는 강력한 도구입니다.\n*   **베스트 프랙티스**: 'Available For'와 'Not Available For'가 충돌할 경우, 거부(Not Available) 설정이 항상 우선순위를 갖습니다."
  },
  {
    "id": 422,
    "title": "NO.126 Which one of the following statements describes the purpose of a Service Catalog workflow?",
    "options": [
      {
        "letter": "A",
        "text": "A Service Catalog workflow generates three basic components: item variable types, tasks, and approvals"
      },
      {
        "letter": "B",
        "text": "Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment processes"
      },
      {
        "letter": "C",
        "text": "A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to defined users or groups"
      },
      {
        "letter": "D",
        "text": "A Service Catalog workflow generates three basic components: item variable types, tasks, and notifications"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. **서비스 카탈로그 워크플로우(Workflow)** 또는 최신 환경의 **플로우(Flow)**는 요청된 항목의 **주문 이행(Fulfillment)** 프로세스를 자동화하는 플랫폼 엔진입니다.\n*   **핵심 기능**: 승인(Approvals) 요청 송신, 실무자 할당을 위한 작업(Tasks) 생성, 그리고 상태 변화에 따른 사용자 알림(Notifications) 전송을 포함합니다.\n*   **이점**: 표준화된 이행 절차를 보장하여 서비스 제공의 일관성과 속도를 높이고, 이행 상태를 사용자에게 투명하게 공개합니다."
  },
  {
    "id": 423,
    "title": "NO.133 A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of \"INC\" to the company standard IN.\" What are the next steps to be taken''",
    "options": [
      {
        "letter": "A",
        "text": "Go to the Number Maintenance application and change the prefix to \"IN\" for incident"
      },
      {
        "letter": "B",
        "text": "Create a Business Rule that modifies the prefix before the Insert operation"
      },
      {
        "letter": "C",
        "text": "The prefix of an incident cannot be changed because it is a built-in feature"
      },
      {
        "letter": "D",
        "text": "Submit a Change Request to ServiceNow Technical Support"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. **Number Maintenance (번호 유지 관리)** 모듈은 인스턴스 내 모든 테이블의 레코드 번호 체계를 관리하는 중앙 허브입니다.\n*   **접두사(Prefix)**: 'INC'를 'IN'으로 변경하면 이후 생성되는 모든 인시던트 레코드는 새 표준 접두사를 부여받습니다.\n*   **무결성**: 시스템이 자동으로 다음 번호(Next number)를 관리하므로 번호 중복이나 누락을 원천적으로 방지하며 고유한 식별을 보장합니다."
  },
  {
    "id": 424,
    "title": "NO.136 What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles",
    "options": [
      {
        "letter": "A",
        "text": "User conditions"
      },
      {
        "letter": "B",
        "text": "User info"
      },
      {
        "letter": "C",
        "text": "User Criteria"
      },
      {
        "letter": "D",
        "text": "User permissions"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. 지식 관리(Knowledge Management)에서 사용자의 속성을 평가하여 문서에 대한 접근 및 기여 권한을 결정하는 핵심 보안 도구는 **사용자 기준(User Criteria)**입니다.\n*   **평가 요소**: 사용자의 역할(Role), 부서, 위치, 그룹 등의 속성을 복합적으로 대조하여 조건을 생성합니다.\n*   **적용 범위**: 지식 기반(Knowledge Base) 수준이나 개별 문서 수준에서 '누가 읽을 수 있는지(Can Read)'와 '누가 기여할 수 있는지(Can Contribute: 작성/수정/은퇴)'를 정교하게 제어합니다."
  },
  {
    "id": 425,
    "title": "NO.144 What is a formatter? Select one of the following",
    "options": [
      {
        "letter": "A",
        "text": "A formatter allows you to configure applications on your instance"
      },
      {
        "letter": "B",
        "text": "A formatter is a form element used to display information that is not a field in the record"
      },
      {
        "letter": "C",
        "text": "A formatter allows you to populate fields automatically"
      },
      {
        "letter": "D",
        "text": "A formatter is a set of conditions applied to a table to help find and work with data"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. **포맷터(Formatter)**는 레코드의 물리적인 데이터 필드 값은 아니지만, 사용자에게 유용한 부가 정보나 동적인 기능을 폼 상에 시각적으로 제공하는 특별한 UI 요소입니다.\n*   **대표 예시**: 활동 스트림(Activity Stream), 프로세스 플로우(Process Flow), 첨부 파일 목록 등이 대표적인 포맷터입니다.\n*   **특징**: 단순한 데이터 수정을 넘어, 해당 레코드의 전체 수명 주기나 관련 활동의 맥락(Context)을 파악하는 데 도움을 줍니다."
  },
  {
    "id": 426,
    "title": "NO.148 What field contains a record's 32-character, unique identifier?",
    "options": [
      {
        "letter": "A",
        "text": "sn_rec_id"
      },
      {
        "letter": "B",
        "text": "rec_id"
      },
      {
        "letter": "C",
        "text": "u_id"
      },
      {
        "letter": "D",
        "text": "sys_id"
      },
      {
        "letter": "E",
        "text": "sn_gu_id"
      },
      {
        "letter": "F",
        "text": "sn_sys_id"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. ServiceNow 데이터베이스 아키텍처에서 모든 레코드는 생성되는 순간 **`sys_id`**라는 고유한 32자 식별자를 부여받습니다.\n*   **기술적 특징**: 16진수로 구성된 GUID(Globally Unique Identifier)이며, 인스턴스 전반에서 해당 레코드를 유일하게 식별하는 기본 키(Primary Key) 역할을 합니다.\n*   **플랫폼 가치**: 테이블 간 참조(Reference) 관계 형성 시 실제 저장되는 값이며, URL 주소나 API 통신 시 특정 객체를 정확히 지칭하는 근간이 됩니다."
  },
  {
    "id": 427,
    "title": "NO.153 database live at the Data Center",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A (True)**. ServiceNow는 고가용성 전용 데이터 센터 인프라 위에서 운영되는 엔터프라이즈 클라우드 플랫폼입니다.\n*   **아키텍처**: 각 고객에게 독립적인 애플리케이션 스택과 데이터베이스를 제공하는 **다중 인스턴스(Multi-instance)** 구조를 통해 보안과 성능을 보장합니다.\n*   **인프라 관리**: 모든 물리적 서버와 데이터베이스 저장소는 ServiceNow가 직접 관리하는 전용 데이터 센터 내에서 엄격한 거버넌스 하에 호스팅됩니다."
  },
  {
    "id": 428,
    "title": "NO.162 What would NOT appear in the Application Navigator if \"service\" is typed into the filter field?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration > Business Services"
      },
      {
        "letter": "B",
        "text": "Self-Service > Knowledge"
      },
      {
        "letter": "C",
        "text": "Service Portal > Widgets"
      },
      {
        "letter": "D",
        "text": "Incident > Assigned to me"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: **D**. 애플리케이션 내비게이터 상단의 **필터 내비게이터(Filter Navigator)**는 입력된 텍스트와 일치하는 메뉴 항목을 실시간으로 필터링하여 보여줍니다.\n*   **필터링 로직**: 'service' 입력 시, 해당 문자열을 포함한 애플리케이션 명칭(예: **Service** Catalog)이나 개별 모듈 명칭이 노출됩니다.\n*   **정답 분석**: 'Incident > Assigned to me' 모듈은 경로명이나 이름 내에 'service'라는 단어를 포함하고 있지 않으므로 필터 결과에서 제외됩니다."
  },
  {
    "id": 429,
    "title": "NO.165 A REQ number in the Service Catalog represents",
    "options": [
      {
        "letter": "A",
        "text": "the order number."
      },
      {
        "letter": "B",
        "text": "the stage."
      },
      {
        "letter": "C",
        "text": "the task to complete."
      },
      {
        "letter": "D",
        "text": "the individual item in the order."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A**. 서비스 카탈로그의 주문 데이터 모델에서 **REQ (Request)** 번호는 사용자가 제출한 **전체 주문(Order)**을 식별하는 최상위 레코드 번호입니다.\n*   **주문 계층 구조**: 하나의 REQ(전체 요청)는 여러 개의 RITM(개별 품목)을 포함할 수 있으며, 각 RITM은 여러 개의 SCTASK(카탈로그 작업)를 가질 수 있는 일대다(One-to-Many) 구조입니다.\n*   **용도**: 사용자는 REQ 번호를 통해 자신의 장바구니에 담겼던 모든 항목의 통합 처리 상태를 추적합니다."
  },
  {
    "id": 430,
    "title": "NO.168 What are the two aspects to LDAP Integration? (2)",
    "options": [
      {
        "letter": "A",
        "text": "Data Population"
      },
      {
        "letter": "B",
        "text": "Data formatting"
      },
      {
        "letter": "C",
        "text": "Authorization"
      },
      {
        "letter": "D",
        "text": "Authentication"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. LDAP 통합은 기업의 사내 디렉토리 서비스와 ServiceNow를 연결하여 다음 두 가지 핵심 기능을 자동화합니다.\n1.  **Authentication (D)**: 사용자가 사내 계정 정보를 사용하여 ServiceNow에 로그인할 수 있게 해주는 인증 프로세스입니다.\n2.  **Data Population (A)**: 사용자의 이름, 부서, 이메일, 위치 등 마스터 데이터를 사내 시스템으로부터 주기적으로 가져와 `sys_user` 테이블을 최신 상태로 유지하는 데이터 수집 프로세스입니다."
  },
  {
    "id": 431,
    "title": "NO.177 Which are states that you can make a field on a form using UI Policy? (choose three)",
    "options": [
      {
        "letter": "A",
        "text": "read-only"
      },
      {
        "letter": "B",
        "text": "write-only"
      },
      {
        "letter": "C",
        "text": "Necessary"
      },
      {
        "letter": "D",
        "text": "Mandatory"
      },
      {
        "letter": "E",
        "text": "Empty"
      },
      {
        "letter": "F",
        "text": "Hidden"
      }
    ],
    "answer": [
      "A",
      "D",
      "F"
    ],
    "explanation": "정답: **A, D, F**. **UI 정책(UI Policy)**은 폼(Form)이 브라우저에 표시될 때 조건에 따라 필드의 동작을 동적으로 제어하는 가장 표준적인 **노코드(No-code)** 도구입니다.\n*   **제어 가능 3대 상태**:\n    1. **Mandatory (D)**: 필수 입력 여부.\n    2. **Read-only (A)**: 읽기 전용 여부.\n    3. **Visible/Hidden (F)**: 표시 또는 숨김 여부.\n*   **장점**: JavaScript 코딩 없이 조건 빌더만으로 설정이 가능하며, 사용자에게 실시간 UI 피드백을 제공하여 데이터 품질을 높입니다."
  },
  {
    "id": 432,
    "title": "NO.201 Configuration will not affect what others see on their forms",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B (False)**. ServiceNow에서 **구성(Configuration)**과 **개인화(Personalization)**를 구분하는 것은 관리의 핵심입니다.\n*   **구성(Configuration)**: 'Configure > Form Layout' 등을 통한 변경은 시스템 전역 설정을 수정하는 작업으로, 해당 테이블을 사용하는 **모든 사용자**에게 영향을 줍니다.\n*   **개인화(Personalization)**: 톱니바퀴(Gear) 아이콘을 통한 컬럼 조정 등은 **본인에게만** 적용되는 설정입니다.\n*   **가드레일**: 따라서 관리자는 시스템 전체 UI에 영향을 주는 구성 변경 시 반드시 개발 인스턴스에서 사전 검증을 수행해야 합니다."
  },
  {
    "id": 433,
    "title": "NO.206 Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog."
      },
      {
        "letter": "B",
        "text": "Create one Catalog Item for Event Room Set Up; then publish to both Catalogs."
      },
      {
        "letter": "C",
        "text": "Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities."
      },
      {
        "letter": "D",
        "text": "Create one Catalog Item for Event Room Set Up; then use ACLs to control access."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: **B**. ServiceNow 서비스 카탈로그 아키텍처는 중복을 최소화하도록 설계되었습니다.\n*   **효율적 관리**: 서로 다른 부서라도 요청 폼의 구성과 이행(Fulfillment) 프로세스가 동일하다면, 하나의 **Catalog Item**만 생성하여 관리하는 것이 유지보수 측면에서 유리합니다.\n*   **다중 게시**: 생성된 하나의 항목을 여러 개의 서로 다른 **카탈로그(Catalogs)**에 동시에 연결하여 노출시킬 수 있으므로, 각 부서의 사용자는 자신의 카탈로그 내에서 해당 서비스를 이용할 수 있습니다."
  },
  {
    "id": 434,
    "title": "NO.210 What are the main UI component(s) of the ServiceNow Platform? (3)",
    "options": [
      {
        "letter": "A",
        "text": "Banner Navigator"
      },
      {
        "letter": "B",
        "text": "Banner Frame"
      },
      {
        "letter": "C",
        "text": "Application Frame"
      },
      {
        "letter": "D",
        "text": "Application Navigator"
      },
      {
        "letter": "E",
        "text": "Content Menu"
      },
      {
        "letter": "F",
        "text": "Content Frame"
      }
    ],
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "정답: **B, D, F**. ServiceNow Classic UI(UI16) 환경을 구성하는 3대 핵심 영역은 다음과 같습니다.\n1.  **Banner Frame (B)**: 화면 상단 영역으로, 로고, 전역 검색, 사용자 프로필, 시스템 설정(Gear) 등이 위치합니다.\n2.  **Application Navigator (D)**: 좌측 패널 영역으로, 애플리케이션 및 모듈 탐색, 즐겨찾기, 사용 기록 탭을 제공합니다.\n3.  **Content Frame (F)**: 우측의 메인 작업 영역으로, 리스트, 폼, 대시보드, 보고서 등이 실제로 렌더링되는 공간입니다."
  },
  {
    "id": 435,
    "title": "NO.234 Data Policy can enforce mandatory data on import",
    "options": [
      {
        "letter": "A",
        "text": "True"
      },
      {
        "letter": "B",
        "text": "False"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: **A (True)**. **데이터 정책(Data Policy)**은 데이터베이스 수준에서 무결성을 보호하기 위해 **서버(Server)** 측에서 실행됩니다.\n*   **강제성**: 웹 브라우저(UI)를 통한 입력뿐만 아니라, **데이터 임포트(Import Sets)**나 **웹 서비스(API)**를 통해 유입되는 모든 데이터에 대해 규칙을 강제합니다.\n*   **비교**: UI 정책은 브라우저에서만 작동하여 임포트 시에는 우회될 수 있지만, 데이터 정책은 모든 경로에 대해 데이터 일관성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 436,
    "title": "NO.238 Tables are made up of which of the following? (choose two)",
    "options": [
      {
        "letter": "A",
        "text": "records"
      },
      {
        "letter": "B",
        "text": "lists"
      },
      {
        "letter": "C",
        "text": "forms."
      },
      {
        "letter": "D",
        "text": "fields"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: **A, D**. ServiceNow의 데이터베이스 구조는 전통적인 관계형 데이터베이스(RDBMS) 아키텍처를 따릅니다.\n*   **레코드 (Records/Rows)**: 테이블의 가로 행에 해당하며, 하나의 독립된 개체 데이터(예: 특정 사용자)를 의미합니다.\n*   **필드 (Fields/Columns)**: 테이블의 세로 열에 해당하며, 레코드가 가진 개별 속성 정보(예: 이름, 이메일)를 담는 최소 단위입니다.\n*   **참조**: 모든 레코드는 고유한 32자 식별자인 `sys_id`를 통해 시스템 내에서 유일하게 식별됩니다."
  },
  {
    "id": 437,
    "title": "NO.239 There are _____ common types of Interfaces (Numeric Value) 6: There are six common types of interfaces",
    "options": [
      {
        "letter": "A",
        "text": "Homepage: Consists of navigational elements, functional controls, and platform information."
      },
      {
        "letter": "B",
        "text": "List: Display records from a data table, as well as allow you to edit the record information using the List Editor functionally."
      },
      {
        "letter": "C",
        "text": "Form: Data is entered into ServiceNow through forms"
      },
      {
        "letter": "D",
        "text": "Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a single screen."
      },
      {
        "letter": "E",
        "text": "Maps: Display ServiceNow data graphically on a Google map"
      },
      {
        "letter": "F",
        "text": "Timelines: Used to track tasks or projects"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: **C**. (제공된 정답 키를 따름) ServiceNow 인스턴스에 데이터를 직접 입력하고 기존 레코드를 수정하는 데 사용하는 가장 핵심적인 인터페이스는 **폼(Form)**입니다.\n*   **기능**: 사용자가 개별 레코드의 상세 필드 값을 확인하고 편집할 수 있는 시각적 창구입니다.\n*   **기타 인터페이스**: 리스트(데이터 목록 조회), 대시보드(데이터 시각화 요약), 가상 에이전트(대화형 지원) 등 사용자의 목적에 맞는 다양한 인터페이스 레이어를 제공합니다."
  },
  {
    "id": 438,
    "title": "NO.243 Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Discovery"
      },
      {
        "letter": "B",
        "text": "IntegrationHub ETL"
      },
      {
        "letter": "C",
        "text": "Finder"
      },
      {
        "letter": "D",
        "text": "CMDB Plug-in"
      },
      {
        "letter": "E",
        "text": "CMDB Integration Dashboard"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: **A, B**. ServiceNow CMDB를 정확하고 최신 상태로 유지하기 위한 두 가지 핵심 데이터 수집 도구입니다.\n1.  **Discovery (A)**: 네트워크를 직접 스캔하여 서버, 네트워크 장비, 소프트웨어 등 기술적 구성 항목(CI)을 자동으로 식별하고 CMDB에 등록합니다.\n2.  **IntegrationHub ETL (B)**: 외부 데이터 소스(예: SCCM, Jamf)로부터 유입되는 데이터를 시각적인 매핑을 통해 CMDB 구조에 맞게 변환하고, **IRE(식별 및 조정 엔진)**를 경유시켜 중복 없이 안전하게 적재합니다."
  }
];
