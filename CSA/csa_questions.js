window.CSA_QUESTIONS = [
  {
    "id": 1,
    "title": "What is the function of user impersonation?",
    "options": [
      {
        "text": "Testing and visibility",
        "id": "A"
      },
      {
        "text": "Activate verbose logging",
        "id": "B"
      },
      {
        "text": "View custom perspectives",
        "id": "C"
      },
      {
        "text": "Unlock Application master list",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**사용자 가장(User Impersonation)**은 관리자 또는 권한이 있는 사용자가 다른 사용자로 전환하여 해당 사용자의 관점에서 인스턴스를 확인하는 기능입니다.\n*   **Testing**: 특정 역할이나 권한을 가진 사용자가 프로세스를 정상적으로 수행할 수 있는지 테스트할 때 사용합니다.\n*   **Visibility**: 해당 사용자가 실제로 볼 수 있는 애플리케이션, 모듈, 레코드, 필드 등을 확인할 수 있습니다.\n*   따라서 User Impersonation의 핵심 목적은 사용자의 접근 권한과 화면 표시 상태를 검증하는 **Testing and visibility**입니다."
  },
  {
    "id": 2,
    "title": "Which group of permissions is used to control Application and Module access?",
    "options": [
      {
        "text": "Access Control Rules",
        "id": "A"
      },
      {
        "text": "UI Policies",
        "id": "B"
      },
      {
        "text": "Roles",
        "id": "C"
      },
      {
        "text": "Assignment Rules",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow에서 애플리케이션 메뉴와 모듈에 대한 접근은 주로 **역할(Roles)**로 제어합니다.\n*   애플리케이션 또는 모듈에 필요한 역할을 지정하면, 해당 역할을 가진 사용자만 Application Navigator에서 그 항목을 보거나 사용할 수 있습니다.\n*   **ACL(Access Control Rules)**은 테이블, 레코드, 필드 수준의 데이터 접근을 제어하는 데 사용됩니다.\n*   따라서 애플리케이션과 모듈 접근 권한을 제어하는 권한 그룹은 **Roles**입니다."
  },
  {
    "id": 3,
    "title": "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    "options": [
      {
        "text": "onSubmit",
        "id": "A"
      },
      {
        "text": "onUpdate",
        "id": "B"
      },
      {
        "text": "onCellEdit",
        "id": "C"
      },
      {
        "text": "onLoad",
        "id": "D"
      },
      {
        "text": "onEdit",
        "id": "E"
      },
      {
        "text": "onChange",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "F"
    ],
    "explanation": "ServiceNow의 **클라이언트 스크립트(Client Scripts)**는 사용자의 브라우저에서 실행되며, 폼 또는 리스트에서 사용자 동작에 따라 스크립트를 실행합니다.\n*   **onLoad**: 폼이 처음 로드될 때 실행됩니다.\n*   **onChange**: 지정한 필드 값이 변경될 때 실행됩니다.\n*   **onSubmit**: 사용자가 폼을 저장하거나 제출할 때 실행됩니다.\n*   **onCellEdit**: 리스트에서 셀 값이 수정될 때 실행됩니다.\n*   `onUpdate`와 `onEdit`은 표준 클라이언트 스크립트 유형이 아니므로 정답은 네 개입니다."
  },
  {
    "id": 4,
    "title": "Which one of the following modules can be used to view field settings for a table?",
    "options": [
      {
        "text": "Tables & Columns",
        "id": "A"
      },
      {
        "text": "Access Control",
        "id": "B"
      },
      {
        "text": "Columns and Fields",
        "id": "C"
      },
      {
        "text": "Tables and Fields",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Tables & Columns** 모듈은 테이블과 해당 테이블의 컬럼(필드) 구성을 확인하고 관리하는 데 사용됩니다.\n*   특정 테이블을 선택하면 해당 테이블의 필드 목록과 각 필드의 타입, 속성, 설정 정보를 확인할 수 있습니다.\n*   **Access Control**은 보안 규칙을 관리하는 메뉴이며, 필드 설정을 확인하는 모듈 이름은 아닙니다.\n*   따라서 테이블의 필드 설정을 확인할 때 사용하는 모듈은 **Tables & Columns**입니다."
  },
  {
    "id": 5,
    "title": "Which of the following are the three main ServiceNow user types?",
    "options": [
      {
        "text": "System Administrator: The admin role provides access to all platform features, applications, functions and data.",
        "id": "A"
      },
      {
        "text": "Specialized Administrator: Specialized administrator roles manage specific functions or applications, such as Assignment Rules, Knowledge base, reports, or web services",
        "id": "B"
      },
      {
        "text": "Fulfiller: Users with the ITIL role may fulfill ITIL activities associated with the ITIL workflow, including Incident and Change management.",
        "id": "C"
      },
      {
        "text": "Approver: Users with the Approver user role can perform all requester actions and may view or modify approval records directed to the approver",
        "id": "D"
      },
      {
        "text": "Requester: Also known as Employee Self Service (ESS) users, these users have no roles but can submit and manage their own requests, access public pages, etc.",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "ServiceNow의 기본 사용자 유형은 일반적으로 **System Administrator**, **Fulfiller**, **Requester**로 구분합니다.\n*   **System Administrator**: `admin` 역할을 가지며 플랫폼의 기능, 애플리케이션, 데이터에 광범위하게 접근할 수 있습니다.\n*   **Fulfiller**: 일반적으로 `itil`과 같은 역할을 가지고 인시던트, 변경 등 할당된 작업을 처리합니다.\n*   **Requester**: 별도 역할 없이 Employee Self-Service 기능을 사용하여 요청을 제출하거나 본인의 요청을 확인합니다.\n*   **Specialized Administrator**와 **Approver**는 특정 기능이나 승인 업무를 위한 역할/분류이지만, 이 문제에서 묻는 세 가지 주요 사용자 유형에는 포함되지 않습니다."
  },
  {
    "id": 6,
    "title": "A Service Catalog may include which of the following components?",
    "options": [
      {
        "text": "Order Guides, Exchange Rates, Calendars",
        "id": "A"
      },
      {
        "text": "Order Guides, Catalog Items, and Interceptors",
        "id": "B"
      },
      {
        "text": "Catalog Items, Asset Contracts, Task Surveys",
        "id": "C"
      },
      {
        "text": "Record Producers, Order Guides, and Catalog Items",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Service Catalog**는 사용자가 서비스나 제품을 요청할 수 있도록 구성된 카탈로그 인터페이스입니다.\n*   **Catalog Items**: 사용자가 요청할 수 있는 개별 상품 또는 서비스입니다.\n*   **Record Producers**: 카탈로그 화면을 통해 인시던트 같은 특정 테이블의 레코드를 생성합니다.\n*   **Order Guides**: 여러 관련 Catalog Item을 하나의 주문 흐름으로 묶어 제공합니다.\n*   Exchange Rates, Calendars, Asset Contracts, Task Surveys, Interceptors는 이 문제에서 묻는 Service Catalog의 핵심 구성요소 조합이 아닙니다."
  },
  {
    "id": 7,
    "title": "UI Policy can make fields read-only, mandatory, or hidden",
    "options": [
      {
        "text": "True",
        "id": "A"
      },
      {
        "text": "False",
        "id": "B"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**UI Policy**는 조건에 따라 폼의 필드 동작을 제어하는 클라이언트 측 설정입니다.\n*   UI Policy Action으로 필드를 **Mandatory**로 만들거나, **Read-only**로 만들거나, **Visible** 값을 제어할 수 있습니다.\n*   문제의 **hidden**은 필드의 Visible 값을 false로 설정하여 숨기는 동작을 의미합니다.\n*   따라서 UI Policy가 필드를 read-only, mandatory, hidden 상태로 만들 수 있다는 설명은 맞습니다."
  },
  {
    "id": 8,
    "title": "ServiceNow is a single-instance, multiple tenant architecture?",
    "options": [
      {
        "text": "True",
        "id": "A"
      },
      {
        "text": "False",
        "id": "B"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow는 **single-instance multi-tenant** 방식이 아니라 **multi-instance** 아키텍처를 사용합니다.\n*   **Multi-instance**는 고객마다 별도의 인스턴스와 데이터베이스를 제공하여 고객 환경을 분리하는 방식입니다.\n*   **Multi-tenant**는 여러 고객이 하나의 애플리케이션 인스턴스를 공유하는 방식입니다.\n*   따라서 ServiceNow가 single-instance, multiple tenant architecture라는 설명은 거짓입니다."
  },
  {
    "id": 9,
    "title": "Which statement is true about business rules?",
    "options": [
      {
        "text": "A business rule must run before a database action occurs",
        "id": "A"
      },
      {
        "text": "A business rule can be a piece of Javascript",
        "id": "B"
      },
      {
        "text": "A business rule must not run before a database action occurs",
        "id": "C"
      },
      {
        "text": "A business rule monitors fields on a form",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**Business Rule**은 레코드가 표시, 삽입, 수정, 삭제되거나 쿼리될 때 서버 측에서 실행되는 JavaScript 로직입니다.\n*   Business Rule은 **before**, **after**, **async**, **display** 등 여러 실행 시점을 가질 수 있으므로 반드시 데이터베이스 작업 전에만 실행되는 것은 아닙니다.\n*   폼에서 필드 변경을 실시간으로 감시하는 것은 주로 **Client Script**의 역할입니다.\n*   따라서 Business Rule에 대한 올바른 설명은 **서버 측 JavaScript 로직일 수 있다**는 것입니다."
  },
  {
    "id": 10,
    "title": "What are the two aspects to LDAP Integration?",
    "options": [
      {
        "text": "Data Population",
        "id": "A"
      },
      {
        "text": "Data formatting",
        "id": "B"
      },
      {
        "text": "Authorization",
        "id": "C"
      },
      {
        "text": "Authentication",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow의 **LDAP Integration**은 기업 디렉터리 서비스와 연결하여 두 가지 주요 기능을 제공합니다.\n*   **Data Population**: LDAP 디렉터리에서 사용자와 그룹 정보를 가져와 ServiceNow의 사용자/그룹 데이터를 채웁니다.\n*   **Authentication**: 사용자가 LDAP 계정 자격 증명으로 ServiceNow에 로그인할 수 있도록 인증을 처리합니다.\n*   Authorization은 사용자가 로그인 후 무엇을 할 수 있는지를 결정하는 권한 문제이며, LDAP 통합의 두 가지 핵심 측면으로 보지는 않습니다."
  },
  {
    "id": 11,
    "title": "What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles?",
    "options": [
      {
        "text": "User conditions",
        "id": "A"
      },
      {
        "text": "User info",
        "id": "B"
      },
      {
        "text": "User Criteria",
        "id": "C"
      },
      {
        "text": "User permissions",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**User Criteria**는 사용자의 역할, 그룹, 부서, 위치 등 사용자 조건을 평가하여 지식 콘텐츠 접근 권한을 결정하는 기준입니다.\n*   Knowledge Base에서는 User Criteria를 **Can Read**와 **Can Contribute**에 연결하여 누가 문서를 읽고, 생성하고, 수정하고, 은퇴시킬 수 있는지 제어합니다.\n*   **User conditions**, **User info**, **User permissions**는 ServiceNow에서 이 접근 기준을 가리키는 정확한 용어가 아닙니다.\n*   따라서 지식 문서의 create, read, write, retire 권한 조건을 정의하는 것은 **User Criteria**입니다."
  },
  {
    "id": 12,
    "title": "Reports can be created from which different places in the platform? (Choose two.)",
    "options": [
      {
        "text": "List column heading",
        "id": "A"
      },
      {
        "text": "Metrics module",
        "id": "B"
      },
      {
        "text": "Statistics module",
        "id": "C"
      },
      {
        "text": "View / Run module",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow에서 보고서는 대표적으로 **Reports > View / Run** 모듈 또는 리스트의 **컬럼 헤더**에서 생성할 수 있습니다.\n*   **View / Run module**: 사용 가능한 보고서를 조회하고 Report Designer를 통해 새 보고서를 생성하는 표준 경로입니다.\n*   **List column heading**: 리스트에서 컬럼 헤더를 우클릭하여 해당 컬럼 기준의 차트나 보고서를 빠르게 만들 수 있습니다.\n*   **Metrics module**과 **Statistics module**은 이 문제에서 묻는 보고서 생성 위치가 아닙니다.\n*   따라서 정답은 **List column heading**과 **View / Run module**입니다."
  },
  {
    "id": 13,
    "title": "Which of the following is used to initiate a flow?",
    "options": [
      {
        "text": "A Trigger",
        "id": "A"
      },
      {
        "text": "Core Action",
        "id": "B"
      },
      {
        "text": "A spoke",
        "id": "C"
      },
      {
        "text": "An Event",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Trigger**는 Flow Designer에서 플로우 실행을 시작하는 조건입니다.\n*   트리거는 레코드 생성/수정 같은 **Record trigger**, 특정 시간에 실행되는 **Schedule trigger**, 외부 애플리케이션 이벤트 기반의 **Application trigger**가 될 수 있습니다.\n*   **Core Action**은 트리거 이후 수행되는 작업이고, **Spoke**는 IntegrationHub의 액션 묶음입니다.\n*   따라서 플로우를 시작하는 구성요소는 **A Trigger**입니다."
  },
  {
    "id": 14,
    "title": "A group is stored in which table?",
    "options": [
      {
        "text": "Group[user_group]",
        "id": "A"
      },
      {
        "text": "Group[sys_user]",
        "id": "B"
      },
      {
        "text": "Group[sys_user_group]",
        "id": "C"
      },
      {
        "text": "Group[sys_user_group_profile]",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow에서 **Group** 레코드는 **`sys_user_group`** 테이블에 저장됩니다.\n*   그룹은 역할 부여, 작업 배정, 알림 수신 등을 위해 사용자를 논리적으로 묶는 단위입니다.\n*   **`sys_user`**는 사용자 레코드 테이블이고, **`sys_user_grmember`**는 사용자와 그룹의 멤버십 관계를 저장하는 테이블입니다.\n*   따라서 그룹 자체가 저장되는 테이블은 **Group [sys_user_group]**입니다."
  },
  {
    "id": 15,
    "title": "Which technique is used to get information from a series of referenced fields from different tables?",
    "options": [
      {
        "text": "Table-Walking",
        "id": "A"
      },
      {
        "text": "Sys_ID Pulling",
        "id": "B"
      },
      {
        "text": "Dot-Walking",
        "id": "C"
      },
      {
        "text": "Record-Hopping",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**Dot-Walking**은 참조(Reference) 필드를 따라 다른 테이블의 관련 데이터를 가져오는 방법입니다.\n*   형식은 보통 `reference_field.field_name`처럼 연결되며, 중간 참조를 계속 따라가서 필요한 값을 읽습니다.\n*   예를 들어 `incident.caller_id.location`처럼 caller의 location을 가져올 수 있습니다.\n*   따라서 다른 테이블의 참조 필드를 연쇄적으로 따라가 정보를 얻는 기술은 **Dot-Walking**입니다."
  },
  {
    "id": 16,
    "title": "What refers to an application or system that accesses a remote service or another computer system, known as a server?",
    "options": [
      {
        "text": "Server",
        "id": "A"
      },
      {
        "text": "Client",
        "id": "B"
      },
      {
        "text": "Script",
        "id": "C"
      },
      {
        "text": "Policies",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow에서 **Client**는 서버에 요청을 보내는 쪽, 보통 사용자의 웹 브라우저나 이를 실행하는 애플리케이션을 뜻합니다.\n*   **Client-side** 로직은 브라우저에서 실행되며 UI Policy와 Client Script가 대표적입니다.\n*   **Server-side** 로직은 인스턴스 서버에서 실행되며 Business Rule과 Script Include가 대표적입니다.\n*   따라서 원격 서버에 접근하는 애플리케이션 또는 시스템은 **Client**입니다."
  },
  {
    "id": 17,
    "title": "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    "options": [
      {
        "text": "Banner Image",
        "id": "A"
      },
      {
        "text": "Record Number Format",
        "id": "B"
      },
      {
        "text": "Browser Tab Title",
        "id": "C"
      },
      {
        "text": "System Date Format",
        "id": "D"
      },
      {
        "text": "Form Header Size",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "**Basic Configuration UI16** 모듈은 코딩 없이 인스턴스의 전반적인 룩앤필(Look and Feel)을 기업 브랜드에 맞게 조정하는 곳입니다.\n*   **Banner Image (A)**: 상단 배너에 표시될 로고 이미지를 업로드합니다.\n*   **Browser Tab Title (C)**: 브라우저 탭에 나타날 텍스트를 지정합니다.\n*   **System Date Format (D)**: 인스턴스 전역에 적용될 기본 날짜 표시 형식을 설정합니다.\n*   **참고**: 레코드 번호 형식(B)은 'Number Maintenance'에서, 폼 헤더 크기 등 세부 스타일은 테마(Theme) CSS나 시스템 속성에서 별도로 관리합니다."
  },
  {
    "id": 18,
    "title": "Which tool is used to have conversations with logged-in users in real-time?",
    "options": [
      {
        "text": "Connect Chat",
        "id": "A"
      },
      {
        "text": "Now Messenger",
        "id": "B"
      },
      {
        "text": "User Presence",
        "id": "C"
      },
      {
        "text": "Comments",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Connect Chat**은 로그인한 사용자들과 실시간으로 대화할 수 있는 ServiceNow의 채팅 도구입니다.\n*   현재 접속 중인 사용자를 대상으로 즉시 메시지를 주고받을 수 있습니다.\n*   레코드와 연동해 관련 논의를 남길 수도 있지만, 문항의 핵심은 실시간 대화 도구가 무엇인지입니다.\n*   따라서 정답은 **Connect Chat**입니다."
  },
  {
    "id": 19,
    "title": "What is the master table that contains a record for each table in the database?",
    "options": [
      {
        "text": "[sys_master_db]",
        "id": "A"
      },
      {
        "text": "[sys_db_object]",
        "id": "B"
      },
      {
        "text": "[sys_master_object]",
        "id": "C"
      },
      {
        "text": "[sys_object_db]",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**`sys_db_object`**는 데이터베이스의 각 테이블에 대한 정의 레코드를 저장하는 마스터 테이블입니다.\n*   테이블 이름, 레이블, 상위 테이블, 확장 가능 여부 등의 정보를 저장합니다.\n*   각 테이블의 개별 필드 정의는 **`sys_dictionary`**에 저장됩니다.\n*   따라서 정답은 **`sys_db_object`**입니다."
  },
  {
    "id": 20,
    "title": "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
    "options": [
      {
        "text": "Roles",
        "id": "A"
      },
      {
        "text": "Conditional Expressions",
        "id": "B"
      },
      {
        "text": "Assignment Rules",
        "id": "C"
      },
      {
        "text": "Scripts",
        "id": "D"
      },
      {
        "text": "User Criteria",
        "id": "E"
      },
      {
        "text": "Groups",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "**ACL(Access Control List)**은 다음 요구사항으로 레코드나 필드에 대한 작업 권한을 제어할 수 있습니다.\n*   **Roles**: 사용자에게 필요한 역할이 있는지 확인합니다.\n*   **Conditional Expressions**: 레코드의 필드 값이 지정된 조건을 충족하는지 확인합니다.\n*   **Scripts**: 스크립트 결과를 사용해 동적으로 접근 권한을 판별합니다.\n*   ACL에 설정된 요구사항은 모두 충족되어야 접근이 허용되므로 정답은 **Roles, Conditional Expressions, Scripts**입니다."
  },
  {
    "id": 21,
    "title": "Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?",
    "options": [
      {
        "text": "report",
        "id": "A"
      },
      {
        "text": "workflow",
        "id": "B"
      },
      {
        "text": "event",
        "id": "C"
      },
      {
        "text": "task",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Task**는 생성된 후 담당자가 작업을 수행하고 최종적으로 Closed와 같은 종료 상태로 이동하는 업무 레코드입니다.\n*   `task` 테이블은 Incident, Problem, Change Request 등 여러 업무 테이블의 상위 테이블입니다.\n*   Report는 데이터를 시각화하고, Workflow는 프로세스를 자동화하며, Event는 시스템에서 발생한 사항을 나타냅니다.\n*   따라서 설명에 가장 적합한 용어는 **Task**입니다."
  },
  {
    "id": 22,
    "title": "Where can Admins check which release is running on an ServiceNow instance?",
    "options": [
      {
        "text": "Memory Stats module",
        "id": "A"
      },
      {
        "text": "Stats module",
        "id": "B"
      },
      {
        "text": "System.upgraded table",
        "id": "C"
      },
      {
        "text": "Transactions log",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "관리자는 **Stats** 모듈에서 현재 ServiceNow 인스턴스의 릴리스와 빌드 정보를 확인할 수 있습니다.\n*   Stats 페이지에는 인스턴스 버전, 빌드 정보, 노드와 시스템 상태 같은 진단 정보가 표시됩니다.\n*   **Memory Stats**는 메모리 통계에 초점이 있고, Transactions log는 트랜잭션 기록을 확인하는 곳입니다.\n*   따라서 실행 중인 릴리스를 확인하는 위치는 **Stats module**입니다."
  },
  {
    "id": 23,
    "title": "What is the purpose of a Related List?",
    "options": [
      {
        "text": "To create a one-to-many relationship",
        "id": "A"
      },
      {
        "text": "To dot-walk to a core table",
        "id": "B"
      },
      {
        "text": "To present related fields",
        "id": "C"
      },
      {
        "text": "To present related records",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Related List**는 현재 폼의 레코드와 관련된 다른 레코드들을 목록으로 보여주는 영역입니다.\n*   예를 들어 사용자 레코드에서 해당 사용자의 자산, 역할, 그룹 멤버십 같은 관련 레코드를 확인할 수 있습니다.\n*   Related List는 관계를 새로 만드는 기능이라기보다 이미 정의된 관계를 기반으로 관련 레코드를 표시합니다.\n*   따라서 목적은 **related records를 present**하는 것입니다."
  },
  {
    "id": 24,
    "title": "Which are valid Service Now User Authentication Methods? (Choose three.)",
    "options": [
      {
        "text": "XML feed",
        "id": "A"
      },
      {
        "text": "Local database",
        "id": "B"
      },
      {
        "text": "LDAP",
        "id": "C"
      },
      {
        "text": "SSO",
        "id": "D"
      },
      {
        "text": "FTP authentication",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow의 유효한 사용자 인증 방식에는 **Local Database**, **LDAP**, **SSO**가 포함됩니다.\n*   **Local Database**: 인스턴스의 사용자 레코드와 비밀번호로 인증합니다.\n*   **LDAP**: 기업 디렉터리 서비스와 연동해 사용자를 인증합니다.\n*   **SSO**: SAML 같은 Single Sign-On 방식으로 외부 IdP를 통해 인증합니다.\n*   XML feed와 FTP authentication은 ServiceNow 사용자 인증 방식이 아니므로 정답은 **B, C, D**입니다."
  },
  {
    "id": 25,
    "title": "What are the three components of a filter condition?",
    "options": [
      {
        "text": "Table",
        "id": "A"
      },
      {
        "text": "Value",
        "id": "B"
      },
      {
        "text": "Field",
        "id": "C"
      },
      {
        "text": "Operator",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow의 필터 조건은 **Field**, **Operator**, **Value** 세 요소로 구성됩니다.\n*   **Field**: 조건을 적용할 필드입니다. 예: Priority\n*   **Operator**: 비교 방식입니다. 예: is, contains, is not empty\n*   **Value**: 비교할 기준 값입니다. 예: 1 - Critical\n*   Table은 필터가 적용되는 대상이지만, 개별 필터 조건의 세 구성요소에는 포함되지 않습니다."
  },
  {
    "id": 26,
    "title": "What is the difference between UI Policy and UI Action?",
    "options": [
      {
        "text": "UI Action can make fields read-only, mandatory, or hidden, while UI Policy can make a save button visible for appropriate users.",
        "id": "A"
      },
      {
        "text": "UI Policy can make fields read-only, mandatory, or hidden, while UI Action can make a save button visible for appropriate users.",
        "id": "B"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**UI Policy**는 조건에 따라 폼 필드를 mandatory, read-only, hidden 상태로 만들 수 있습니다.\n*   **UI Action**은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 클릭해 동작을 실행하는 UI 요소입니다.\n*   UI Action에는 조건을 설정해 적절한 사용자나 상황에서만 버튼을 보이게 할 수 있습니다.\n*   따라서 UI Policy가 필드 상태를 제어하고 UI Action이 버튼/액션 표시와 실행을 담당한다는 설명이 맞습니다."
  },
  {
    "id": 27,
    "title": "The baseline Service Catalog homepage contains links to which of the following components?",
    "options": [
      {
        "text": "Record Producers, Order Guides, and Catalog Items",
        "id": "A"
      },
      {
        "text": "Order Guides, Item Variables, and Workflows",
        "id": "B"
      },
      {
        "text": "Order Guides, Catalog Items, and Workflows",
        "id": "C"
      },
      {
        "text": "Record Producers, Order Guides, and Item Variables",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "기본 **Service Catalog** 홈페이지는 사용자가 요청을 시작할 수 있도록 **Record Producers**, **Order Guides**, **Catalog Items**에 대한 링크를 제공합니다.\n*   **Catalog Items**: 사용자가 요청할 수 있는 개별 서비스나 상품입니다.\n*   **Record Producers**: 카탈로그 화면을 통해 Incident 같은 특정 테이블의 레코드를 생성합니다.\n*   **Order Guides**: 여러 관련 Catalog Item을 하나의 요청 흐름으로 묶습니다.\n*   Item Variables와 Workflows는 카탈로그 내부 구성 요소이지만, 이 문항의 baseline homepage 링크 대상은 아닙니다."
  },
  {
    "id": 28,
    "title": "What is a Dictionary Override?",
    "options": [
      {
        "text": "A Dictionary Override is an incoming customer update in an Update Set which applies to the same",
        "id": "A"
      },
      {
        "text": "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT",
        "id": "B"
      },
      {
        "text": "A Dictionary Override is a task within a workflow that requests an action before the workflow can",
        "id": "C"
      },
      {
        "text": "A Dictionary Override sets field properties in extended tables",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Dictionary Override**는 부모 테이블에서 상속된 필드 속성을 특정 확장 테이블에서 다르게 설정하는 기능입니다.\n*   예를 들어 `task`의 필드를 `incident` 테이블에서만 mandatory로 만들 수 있습니다.\n*   기본값, mandatory, read-only, reference qualifier 같은 필드 속성을 테이블별로 조정할 수 있습니다.\n*   따라서 Dictionary Override는 **extended tables에서 field properties를 설정**하는 기능입니다."
  },
  {
    "id": 29,
    "title": "Which type of tables may be extended by other tables, but do not extend another table?",
    "options": [
      {
        "text": "Base Tables",
        "id": "A"
      },
      {
        "text": "Core Tables",
        "id": "B"
      },
      {
        "text": "Extended Tables",
        "id": "C"
      },
      {
        "text": "Custom Tables",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Base Table**은 다른 테이블을 확장하지 않는 최상위 테이블이며, 다른 테이블이 이 테이블을 확장할 수 있습니다.\n*   즉, 테이블 계층 구조에서 부모 역할을 할 수 있지만 자신은 부모 테이블을 가지지 않습니다.\n*   **Extended Table**은 다른 테이블을 확장한 테이블이고, **Custom Table**은 사용자가 만든 테이블을 의미합니다.\n*   따라서 설명에 해당하는 테이블 유형은 **Base Tables**입니다."
  },
  {
    "id": 30,
    "title": "When working on a form, what is the difference between Insert and Update operations?",
    "options": [
      {
        "text": "Insert creates a new record and Update saves changes, both remain on the form",
        "id": "A"
      },
      {
        "text": "Insert creates a new record and Update saves changes, both exit the form",
        "id": "B"
      },
      {
        "text": "Insert saves changes and exits the form, Update saves changes and remains on the form",
        "id": "C"
      },
      {
        "text": "Insert saves changes and remains on the form, Update saves changes and exits the form",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "폼에서 **Insert**는 입력한 값으로 새 레코드를 생성하고, **Update**는 기존 레코드의 변경 사항을 저장합니다.\n*   일반적인 Insert와 Update 동작은 작업 후 현재 폼을 벗어납니다.\n*   현재 폼에 머물며 저장하려면 Save, Insert and Stay, Update and Stay 같은 동작을 사용합니다.\n*   따라서 Insert는 새 레코드를 만들고 Update는 변경 사항을 저장하며, 둘 다 폼을 종료한다는 설명이 맞습니다."
  },
  {
    "id": 31,
    "title": "What displays a set of records from a table?",
    "options": [
      {
        "text": "View",
        "id": "A"
      },
      {
        "text": "Dashboard",
        "id": "B"
      },
      {
        "text": "Panel",
        "id": "C"
      },
      {
        "text": "List",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**List**는 특정 테이블의 여러 레코드를 행과 열 형식으로 표시하는 화면입니다.\n*   사용자는 List에서 레코드를 조회, 정렬, 필터링할 수 있습니다.\n*   View는 폼이나 리스트의 표시 구성을 뜻하고, Dashboard는 여러 리포트나 위젯을 모아 보여주는 화면입니다.\n*   따라서 테이블의 레코드 집합을 표시하는 것은 **List**입니다."
  },
  {
    "id": 32,
    "title": "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    "options": [
      {
        "text": "Mapping fields using the Import Log",
        "id": "A"
      },
      {
        "text": "Mapping fields using Transform History",
        "id": "B"
      },
      {
        "text": "Mapping fields using an SLA",
        "id": "C"
      },
      {
        "text": "Mapping fields using a Field Map",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Mapping Assist**는 Import Set의 소스 필드와 대상 테이블의 필드를 연결하여 **Field Map**을 설정하는 도구입니다.\n*   소스와 대상의 필드 이름이 다르거나 자동 매핑되지 않을 때 수동으로 대응 관계를 지정할 수 있습니다.\n*   Import Log와 Transform History는 실행 결과를 확인하는 정보이며, SLA는 필드 매핑 도구가 아닙니다.\n*   따라서 Mapping Assist는 **Field Map을 사용한 필드 매핑**에 사용됩니다."
  },
  {
    "id": 33,
    "title": "Which one of the following statements describes the purpose of a Service Catalog workflow?",
    "options": [
      {
        "text": "A Service Catalog workflow generates three basic components: item variable types, tasks, and approvals",
        "id": "A"
      },
      {
        "text": "Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment processes",
        "id": "B"
      },
      {
        "text": "A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to defined users or groups",
        "id": "C"
      },
      {
        "text": "A Service Catalog workflow generates three basic components: item variable types, tasks, and notifications",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**Service Catalog workflow**는 요청된 항목의 복잡한 이행(Fulfillment) 프로세스를 자동화합니다.\n*   승인 요청, fulfillment task 생성, 사용자 또는 그룹에 대한 알림 전송 등을 처리할 수 있습니다.\n*   알림을 보낼 수 없다는 설명은 틀리며, item variable type을 생성하는 것이 workflow의 목적도 아닙니다.\n*   따라서 복잡한 이행 프로세스를 구동하고 정의된 사용자나 그룹에 알림을 보낸다는 **C**가 맞습니다."
  },
  {
    "id": 34,
    "title": "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    "options": [
      {
        "text": "RITM (Number)>REQ (Number)>PROCUREMENT (Number)",
        "id": "A"
      },
      {
        "text": "REQ (Number)>RITM (Number)>PROCUREMENT (Number)",
        "id": "B"
      },
      {
        "text": "REQ (Number)>RITM (Number)>TASK (Number)",
        "id": "C"
      },
      {
        "text": "FULFILLMENT (Number)>RITM (Number)>TASK (Number)",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Service Catalog 주문은 일반적으로 **REQ → RITM → SCTASK** 계층으로 추적합니다.\n*   **REQ (Request)**: 사용자가 제출한 전체 요청입니다.\n*   **RITM (Requested Item)**: 요청에 포함된 개별 카탈로그 항목입니다.\n*   **SCTASK (Catalog Task)**: 해당 항목을 이행하기 위해 담당자가 수행하는 작업입니다.\n*   따라서 fulfillment task 목록까지 이동하는 경로는 **REQ → RITM → TASK**입니다."
  },
  {
    "id": 35,
    "title": "What is a characteristic of importing data into ServiceNow?",
    "options": [
      {
        "text": "An existing Transform Map can be used one time on the same import set",
        "id": "A"
      },
      {
        "text": "Coalesce fields are used only after running Transform",
        "id": "B"
      },
      {
        "text": "Any user can manage and set up import sets",
        "id": "C"
      },
      {
        "text": "An existing Transform Map can be used multiple times on the same import set",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "기존 **Transform Map**은 같은 Import Set 데이터에 여러 번 실행하여 재사용할 수 있습니다.\n*   Transform Map은 소스 필드와 대상 필드의 매핑 규칙을 저장하므로 반복 임포트에 사용할 수 있습니다.\n*   **Coalesce**는 Transform 실행 중 기존 대상 레코드와의 일치 여부를 판단하며, 실행 후에만 사용하는 기능이 아닙니다.\n*   Import Set 구성과 관리는 필요한 권한을 가진 사용자가 수행하므로 모든 사용자가 할 수 있는 것도 아닙니다.\n*   따라서 올바른 특성은 **D**입니다."
  },
  {
    "id": 36,
    "title": "What are two best practices regarding users, groups, and roles? (Choose two.)",
    "options": [
      {
        "text": "You should never assign roles to groups.",
        "id": "A"
      },
      {
        "text": "You should assign roles to users.",
        "id": "B"
      },
      {
        "text": "You should assign roles to groups.",
        "id": "C"
      },
      {
        "text": "You should add users to groups",
        "id": "D"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "ServiceNow 권한 관리는 **그룹에 역할을 할당하고 사용자를 그룹에 추가**하는 방식이 권장됩니다.\n*   사용자는 소속 그룹에 부여된 역할을 상속받습니다.\n*   이 방식은 직무 변경이나 퇴사 시 그룹 멤버십만 조정하면 되어 개별 사용자에게 역할을 직접 관리하는 것보다 일관성이 높습니다.\n*   사용자에게 역할을 직접 할당할 수도 있지만, 반복적인 권한 관리는 그룹 기반으로 수행하는 것이 모범 사례입니다.\n*   따라서 정답은 **C, D**입니다."
  },
  {
    "id": 37,
    "title": "What is a formatter? Select one of the following.",
    "options": [
      {
        "text": "A formatter allows you to configure applications on your instance",
        "id": "A"
      },
      {
        "text": "A formatter is a form element used to display information that is not a field in the record",
        "id": "B"
      },
      {
        "text": "A formatter allows you to populate fields automatically",
        "id": "C"
      },
      {
        "text": "A formatter is a set of conditions applied to a table to help find and work with data",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**Formatter**는 레코드의 일반 필드가 아닌 정보를 폼에 표시하는 UI 요소입니다.\n*   Activity Stream이나 Process Flow처럼 추가 정보와 기능을 폼 레이아웃에 표시할 때 사용합니다.\n*   필드 값을 자동 입력하거나 필터 조건을 정의하는 기능은 Formatter의 역할이 아닙니다.\n*   따라서 정답은 **B**입니다."
  },
  {
    "id": 38,
    "title": "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    "options": [
      {
        "text": "Service Processes",
        "id": "A"
      },
      {
        "text": "User Permissions",
        "id": "B"
      },
      {
        "text": "Tables and Fields",
        "id": "C"
      },
      {
        "text": "A Database",
        "id": "D"
      },
      {
        "text": "The Dependency View",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "E"
    ],
    "explanation": "**CMDB(Configuration Management Database)**는 구성 항목(CI)과 그 관계를 저장하는 **데이터베이스**입니다.\n*   CMDB 데이터는 **테이블과 필드**로 구성되며 Incident와 Change 같은 **서비스 프로세스**에서 활용됩니다.\n*   **Dependency View**는 CI 간 관계와 의존성을 시각화합니다.\n*   **User Permissions**는 CMDB 데이터 접근을 제어하는 보안 설정이지, 이 문항에서 묻는 CMDB 관련 핵심 개념에는 포함되지 않습니다.\n*   따라서 정답은 **A, C, D, E**입니다."
  },
  {
    "id": 39,
    "title": "What is the Import Set Table?",
    "options": [
      {
        "text": "A table where data will be placed, post-transformation",
        "id": "A"
      },
      {
        "text": "A table that determines relationships",
        "id": "B"
      },
      {
        "text": "A staging area for imported records",
        "id": "C"
      },
      {
        "text": "A repository for Update Set information",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**Import Set Table**은 외부에서 불러온 레코드를 변환 전에 저장하는 **staging area**입니다.\n*   가져온 원본 데이터는 먼저 Import Set Table에 적재됩니다.\n*   이후 Transform Map이 소스 데이터를 매핑하고 변환하여 대상 테이블에 삽입하거나 업데이트합니다.\n*   따라서 변환 후 데이터가 저장되는 최종 대상 테이블이나 Update Set 저장소가 아니라 **imported records의 staging area**입니다."
  },
  {
    "id": 40,
    "title": "The display sequence is controlled in a Service Catalog Item using which of the following?",
    "options": [
      {
        "text": "The Default Value field in the Catalog Item form",
        "id": "A"
      },
      {
        "text": "The Sequence field in the Catalog Item form",
        "id": "B"
      },
      {
        "text": "The Order field in the Variable form",
        "id": "C"
      },
      {
        "text": "The Choice field in the Variable form",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Service Catalog Item에 포함된 변수의 표시 순서는 각 **Variable** 레코드의 **Order** 필드로 제어합니다.\n*   일반적으로 Order 값이 낮은 변수가 먼저 표시됩니다.\n*   Catalog Item의 Default Value나 Sequence, Variable의 Choice 필드는 변수 배치 순서를 정하는 필드가 아닙니다.\n*   따라서 정답은 **The Order field in the Variable form**입니다."
  },
  {
    "id": 41,
    "title": "A User is stored in which table?",
    "options": [
      {
        "text": "User [sys_user]",
        "id": "A"
      },
      {
        "text": "User [sys_user_group]",
        "id": "B"
      },
      {
        "text": "User [syst_user_profile]",
        "id": "C"
      },
      {
        "text": "User [user_profile]",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 사용자 레코드는 **User [`sys_user`]** 테이블에 저장됩니다.\n*   `sys_user_group`은 사용자 자체가 아니라 그룹 레코드를 저장합니다.\n*   사용자와 그룹의 멤버십은 별도의 `sys_user_grmember` 테이블에서 관리됩니다.\n*   따라서 정답은 **A**입니다."
  },
  {
    "id": 42,
    "title": "Which application is used to change the number format per table?",
    "options": [
      {
        "text": "Number Maintenance",
        "id": "A"
      },
      {
        "text": "System Maintenance",
        "id": "B"
      },
      {
        "text": "Table Maintenance",
        "id": "C"
      },
      {
        "text": "Record Maintenance",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Number Maintenance** 모듈은 자동 번호가 구성된 테이블의 레코드 번호 형식을 관리합니다.\n*   테이블별로 Prefix(예: INC, CHG), 번호 자릿수, Next Number 등을 설정할 수 있습니다.\n*   System Maintenance, Table Maintenance, Record Maintenance는 이 번호 형식을 변경하는 모듈이 아닙니다.\n*   따라서 정답은 **Number Maintenance**입니다."
  },
  {
    "id": 43,
    "title": "What is a Record Producer?",
    "options": [
      {
        "text": "A Record Producer is a type of Catalog Item that is used for Requests, not Services",
        "id": "A"
      },
      {
        "text": "A Record Producer creates user records",
        "id": "B"
      },
      {
        "text": "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests",
        "id": "C"
      },
      {
        "text": "A Record Producer is a type of Catalog Item that allows users to create task-based records from the Service Catalog",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Record Producer**는 Service Catalog 인터페이스를 통해 지정된 테이블에 레코드를 생성하는 Catalog Item 유형입니다.\n*   사용자는 일반 백엔드 폼 대신 카탈로그의 질문과 변수를 사용해 Incident 같은 task-based record를 만들 수 있습니다.\n*   일반 Catalog Item은 보통 RITM을 생성하고, Order Guide는 여러 요청 항목을 묶습니다.\n*   따라서 정답은 **D**입니다."
  },
  {
    "id": 44,
    "title": "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    "options": [
      {
        "text": "They run behind the scenes.",
        "id": "A"
      },
      {
        "text": "They are the building blocks.",
        "id": "B"
      },
      {
        "text": "They are optional.",
        "id": "C"
      },
      {
        "text": "They provide options.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**Service Catalog Items**는 Service Catalog를 구성하는 기본 **building blocks**입니다.\n*   각 Catalog Item은 사용자가 요청할 수 있는 개별 서비스, 상품 또는 정보를 정의합니다.\n*   Item에는 변수, 가격, 가시성 기준, fulfillment workflow 또는 flow 등을 연결할 수 있습니다.\n*   따라서 Service Catalog Items에 대한 올바른 설명은 **They are the building blocks**입니다."
  },
  {
    "id": 45,
    "title": "What is a way that you can mark a knowledge article for review?",
    "options": [
      {
        "text": "Flag article",
        "id": "A"
      },
      {
        "text": "Review",
        "id": "B"
      },
      {
        "text": "Bookmark",
        "id": "C"
      },
      {
        "text": "On Hold",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Flag article**은 Knowledge Article의 내용이 부정확하거나 오래되었거나 검토가 필요하다고 알리는 기능입니다.\n*   플래그와 함께 피드백을 제출하면 지식 관리자나 담당자가 검토할 수 있습니다.\n*   Bookmark는 나중에 다시 찾기 위한 개인 저장 기능이며 문서를 검토 대상으로 표시하지 않습니다.\n*   따라서 정답은 **Flag article**입니다."
  },
  {
    "id": 46,
    "title": "From the User menu, which actions can a user select? (Choose three.)",
    "options": [
      {
        "text": "Send Notifications",
        "id": "A"
      },
      {
        "text": "Log Out ServiceNow",
        "id": "B"
      },
      {
        "text": "Elevate Roles",
        "id": "C"
      },
      {
        "text": "Impersonate Users",
        "id": "D"
      },
      {
        "text": "Order from Service Catalog",
        "id": "E"
      },
      {
        "text": "Approve Records",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow의 **User menu**에서는 계정과 현재 세션에 관련된 작업을 선택할 수 있습니다.\n*   **Log Out ServiceNow**: 현재 세션을 종료합니다.\n*   **Elevate Roles**: 권한이 있는 사용자가 `security_admin` 같은 역할을 현재 세션에서 일시적으로 활성화합니다.\n*   **Impersonate Users**: `admin` 또는 `impersonator` 같은 필요한 권한이 있을 때 다른 사용자로 가장합니다.\n*   Service Catalog 주문이나 레코드 승인은 User menu에서 수행하는 작업이 아니므로 정답은 **B, C, D**입니다."
  },
  {
    "id": 47,
    "title": "What does a REQ number in the Service Catalog represent?",
    "options": [
      {
        "text": "the order number.",
        "id": "A"
      },
      {
        "text": "the stage.",
        "id": "B"
      },
      {
        "text": "the task to complete.",
        "id": "C"
      },
      {
        "text": "the individual item in the order.",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Service Catalog의 **REQ(Request)** 번호는 사용자가 제출한 **전체 주문의 번호**입니다.\n*   **REQ**: 전체 주문 또는 요청입니다.\n*   **RITM**: 주문에 포함된 개별 Requested Item입니다.\n*   **SCTASK**: 각 RITM을 이행하기 위한 Catalog Task입니다.\n*   따라서 REQ 번호가 나타내는 것은 **the order number**입니다."
  },
  {
    "id": 48,
    "title": "Which one of these applications is available to all users?",
    "options": [
      {
        "text": "Change",
        "id": "A"
      },
      {
        "text": "Incident",
        "id": "B"
      },
      {
        "text": "Facilities",
        "id": "C"
      },
      {
        "text": "Self-Service",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Self-Service** 애플리케이션은 역할이 없는 requester를 포함한 일반 사용자가 접근할 수 있는 기본 사용자용 메뉴입니다.\n*   사용자는 Self-Service에서 서비스 카탈로그, 지식, 본인 요청 같은 기능에 접근할 수 있습니다.\n*   Change, Incident, Facilities 애플리케이션은 일반적으로 특정 역할이나 플러그인/권한이 필요합니다.\n*   따라서 모든 사용자에게 제공되는 애플리케이션은 **Self-Service**입니다."
  },
  {
    "id": 49,
    "title": "Which of the following allows a user to edit field values in a list without opening the form?",
    "options": [
      {
        "text": "Data Editor",
        "id": "A"
      },
      {
        "text": "Edit Menu",
        "id": "B"
      },
      {
        "text": "List Editor",
        "id": "C"
      },
      {
        "text": "Form Designer",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**리스트 에디터(List Editor)** 기능을 사용하면 개별 레코드 폼을 일일이 열지 않고도 리스트 뷰에서 직접 필드 값을 수정할 수 있습니다.\n*   **작동 방식**: 셀(Cell)을 더블 클릭하여 값을 변경합니다.\n*   **가드레일**: 리스트 에디터로 값을 수정하더라도 시스템의 **ACL(Access Control List)**과 **Data Policy**는 여전히 적용되므로, 권한이 없는 필드는 수정할 수 없습니다.\n*   **참고**: UI Policy는 폼(Form) 전용이므로 리스트 에디터에서는 작동하지 않습니다."
  },
  {
    "id": 50,
    "title": "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
    "options": [
      {
        "text": "Most recent update",
        "id": "A"
      },
      {
        "text": "Popularity",
        "id": "B"
      },
      {
        "text": "Relevancy",
        "id": "C"
      },
      {
        "text": "Manager assignment",
        "id": "D"
      },
      {
        "text": "Number of views",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Knowledge Base 검색 결과는 사용자가 필요한 문서를 빨리 찾을 수 있도록 여러 기준으로 정렬할 수 있습니다.\n*   **Most recent update (A)**: 최근에 업데이트된 문서를 우선 표시합니다.\n*   **Relevancy (C)**: 검색어와 가장 관련성이 높은 문서를 우선 표시합니다.\n*   **Number of views (E)**: 조회 수가 많은 문서를 기준으로 정렬합니다.\n*   **오답 구분**: `Popularity`는 일반적인 의미로는 조회 수와 비슷해 보일 수 있지만, 이 문항에서 제시된 정렬 기준은 별도의 `Number of views`입니다. `Manager assignment`는 Knowledge 검색 정렬 기준이 아닙니다."
  },
  {
    "id": 51,
    "title": "What is the purpose of flagging an article in a knowledge base?",
    "options": [
      {
        "text": "To mark an article to read later.",
        "id": "A"
      },
      {
        "text": "Allow a user to submit feedback about an article",
        "id": "B"
      },
      {
        "text": "Reporting an error",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "지식 문서의 **플래그(Flagging)** 기능은 사용자가 문서의 내용에 오류가 있거나 개선이 필요하다고 느낄 때 **피드백을 제출**하기 위한 도구입니다.\n*   **거버넌스**: 플래그가 달린 문서는 지식 관리자(Knowledge Manager)의 대시보드에 나타나며, 관리자는 이를 검토하여 수정하거나 업데이트하는 '관리/거버넌스(Govern)' 활동을 수행합니다.\n*   **차이점**: 단순히 나중에 다시 읽기 위해 저장하는 기능은 '북마크(Bookmark)'를 사용합니다."
  },
  {
    "id": 52,
    "title": "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    "options": [
      {
        "text": "The CMDB contains data about tangible and intangible business assets",
        "id": "A"
      },
      {
        "text": "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a",
        "id": "B"
      },
      {
        "text": "The CMDB archives all Service Management PaaS equipment metadata and usage statistics",
        "id": "C"
      },
      {
        "text": "The CMDB contains ITIL process data pertaining to configuration items",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**CMDB(Configuration Management Database)**는 서비스 운영에 필요한 유형 및 무형 구성 항목(CI)에 대한 데이터를 저장하는 중앙 데이터베이스입니다.\n*   **정답 포인트**: CMDB에는 서버, 네트워크 장비 같은 유형 항목뿐 아니라 애플리케이션, 서비스처럼 무형으로 관리되는 항목의 정보도 포함될 수 있습니다.\n*   **중요 개념**: CMDB는 CI 자체의 속성뿐 아니라 CI 간 관계(Relationships)를 함께 관리하여 장애 영향도 분석과 변경 관리를 지원합니다.\n*   **오답 구분**: Business Rules 저장소나 PaaS 장비 통계 보관소가 아니며, 단순히 ITIL 프로세스 데이터만 저장하는 테이블도 아닙니다."
  },
  {
    "id": 53,
    "title": "What are the four knowledge workflows available in the ServiceNow base instance? (Choose four.)",
    "options": [
      {
        "text": "Approval Publish: Request approval from a manager of the knowledge base before moving the article to the published state",
        "id": "A"
      },
      {
        "text": "Instant Publish: Immediately publishes a draft article without requiring an approval",
        "id": "B"
      },
      {
        "text": "Instant Retire: Immediately retires a published article without requiring an approval",
        "id": "C"
      },
      {
        "text": "Retire Knowledge: Moves a knowledge article to the retired state.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow 기본 인스턴스에는 지식 문서 게시와 은퇴를 통제하기 위한 표준 **Knowledge workflows**가 포함됩니다.\n*   **Approval Publish (A)**: 문서를 게시 상태로 옮기기 전에 Knowledge Base 관리자 승인을 요청합니다.\n*   **Instant Publish (B)**: 승인 없이 초안 문서를 즉시 게시합니다.\n*   **Instant Retire (C)**: 승인 없이 게시된 문서를 즉시 은퇴 처리합니다.\n*   **Retire Knowledge (D)**: 지식 문서를 retired 상태로 이동하는 은퇴 워크플로우입니다.\n*   따라서 이 문항은 네 가지 기본 Knowledge workflow를 모두 고르는 문제입니다."
  },
  {
    "id": 54,
    "title": "Which are states that you can make a field on a form using UI Policy? (Choose three.)",
    "options": [
      {
        "text": "read-only",
        "id": "A"
      },
      {
        "text": "write-only",
        "id": "B"
      },
      {
        "text": "Necessary",
        "id": "C"
      },
      {
        "text": "Mandatory",
        "id": "D"
      },
      {
        "text": "Empty",
        "id": "E"
      },
      {
        "text": "Hidden",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "D",
      "F"
    ],
    "explanation": "**UI 정책(UI Policy)**은 폼에서 데이터의 일관성과 사용자 경험을 제어하는 가장 효율적인 도구입니다.\n*   **제어 가능 3대 상태**:\n    1. **Mandatory (필수)**: 데이터 입력 없이 저장 불가.\n    2. **Read-only (읽기 전용)**: 사용자 수정 차단.\n    3. **Visible/Hidden (표시/숨김)**: 조건에 따른 필드 노출 제어.\n*   **베스트 프랙티스**: 복잡한 스크립트 작성 전 항상 UI Policy로 해결 가능한지 먼저 검토해야 합니다 (No-code 우선 원칙)."
  },
  {
    "id": 55,
    "title": "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
    "options": [
      {
        "text": "A metric is a report gauge used on homepages to display real-time data",
        "id": "A"
      },
      {
        "text": "A metric is a time measurement used to report the effectiveness of workflows and SLAs",
        "id": "B"
      },
      {
        "text": "A metric is used to measure and evaluate the effectiveness of IT service management processes",
        "id": "C"
      },
      {
        "text": "A metric is a comparative measurement used to report the effectiveness of workflows and SLAs.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow에서 **메트릭(Metric)**은 데이터의 변화를 시간에 따라 추적하여 프로세스의 효율성을 측정하는 도구입니다.\n*   **기능**: 특정 필드(예: 담당자, 상태)가 변경된 이력을 기록하여, 레코드가 각 단계에서 얼마나 머물렀는지 등의 정량적 데이터를 수집합니다.\n*   **활용**: 수집된 메트릭 데이터는 보고서(Reporting)나 Performance Analytics의 소스가 되어 SLA 준수율이나 MTTR(평균 복구 시간) 등을 분석하는 데 사용됩니다."
  },
  {
    "id": 56,
    "title": "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    "options": [
      {
        "text": "Avoid using the Default Update Set for moving customizations between instances",
        "id": "A"
      },
      {
        "text": "Before moving customizations from instance to instance with Update Sets, ensure that both instances",
        "id": "B"
      },
      {
        "text": "Use the Baseline Update Set to store the contents of items after they are changed the first time",
        "id": "C"
      },
      {
        "text": "Once an Update Set is closed as \"Complete\" change it back to \"In Progress\" until it is applied to another",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트(Update Sets)** 사용 시 ServiceNow의 핵심 권장사항은 **Default Update Set을 인스턴스 간 이동 용도로 사용하지 않는 것**입니다.\n*   **이유**: Default 세트에는 작업 목적과 무관한 변경 사항이 섞이기 쉬워, 다른 인스턴스로 이동할 때 추적성과 검증이 어려워집니다.\n*   **권장 방식**: 기능, 변경 요청, 작업 단위에 맞는 이름 있는(Named) Update Set을 만들고 선택한 뒤 작업합니다.\n*   **오답 구분**: Baseline Update Set은 일반 작업 변경을 담는 용도가 아니며, `Complete` 상태로 닫은 Update Set을 다시 `In Progress`로 되돌려 계속 편집하는 것은 권장 프로세스가 아닙니다."
  },
  {
    "id": 57,
    "title": "Which configuration allows you to use a script to coalesce data in Import Sets?",
    "options": [
      {
        "text": "Multiple-field coalesce",
        "id": "A"
      },
      {
        "text": "No coalesce",
        "id": "B"
      },
      {
        "text": "Conditional coalesce",
        "id": "C"
      },
      {
        "text": "Single-field coalesce",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**조건부 병합(Conditional Coalesce)**은 Import Set 변환 중 스크립트 조건을 사용해 기존 레코드와 매칭할지 판단하는 coalesce 방식입니다.\n*   **정답 포인트**: 단일 필드나 여러 필드의 단순 일치만으로 판단하기 어려울 때, 스크립트 로직으로 업데이트 대상 레코드 여부를 결정할 수 있습니다.\n*   **Coalesce 동작**: 매칭되는 기존 레코드가 있으면 업데이트하고, 매칭되는 레코드가 없으면 새 레코드를 생성합니다.\n*   **오답 구분**: Single-field와 Multiple-field coalesce는 지정 필드 값의 일치 여부를 사용하며, No coalesce는 매칭 없이 새 레코드 생성 중심으로 동작합니다."
  },
  {
    "id": 58,
    "title": "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
    "options": [
      {
        "text": "Maintain Categories",
        "id": "A"
      },
      {
        "text": "Maintain Items",
        "id": "B"
      },
      {
        "text": "Content Items",
        "id": "C"
      },
      {
        "text": "Items",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**Maintain Items** 모듈은 서비스 카탈로그 관리자가 개별 품목(Catalog Items)의 전체 수명 주기를 관리하는 중앙 허브입니다.\n*   **주요 설정**: 항목의 이름, 설명, 소속 카테고리, 가격, 가시성(User Criteria), 그리고 요청 이행을 위한 워크플로우나 플로우를 여기서 연결합니다.\n*   **비교**: 'Categories'는 항목을 논리적으로 분류하는 폴더 구조를 관리하며, 'Items'는 사용자가 보는 실제 리스트에 가깝습니다."
  },
  {
    "id": 59,
    "title": "What is generated from the Service Catalog once a user places an order for an item or service?",
    "options": [
      {
        "text": "A change request",
        "id": "A"
      },
      {
        "text": "An Order Guide",
        "id": "B"
      },
      {
        "text": "A request",
        "id": "C"
      },
      {
        "text": "An SLA",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "사용자가 장바구니(Cart)에 담긴 항목들을 'Order Now' 또는 'Checkout' 하면, 시스템은 가장 먼저 **요청(Request, REQ)** 레코드를 생성합니다.\n*   **주문 계층 (3-Tier)**:\n    1. **REQ (Request)**: 전체 주문서 (예: 입사자용 번들 주문).\n    2. **RITM (Requested Item)**: 주문 내 개별 품목 (예: 노트북, 소프트웨어 라이선스).\n    3. **SCTASK (Catalog Task)**: 실무자가 처리해야 할 개별 작업 (예: 노트북 배송, 계정 생성).\n*   **SLA**: 일반적으로 SLA는 REQ가 아닌 개별 RITM 수준에서 정의되고 추적됩니다."
  },
  {
    "id": 60,
    "title": "Which one statement correctly describes Access Control rule evaluation?",
    "options": [
      {
        "text": "Rules are evaluated using roles. The role with the most permissions evaluates the rules",
        "id": "A"
      },
      {
        "text": "If more than one rule applies to a row, the older rule is evaluated first",
        "id": "B"
      },
      {
        "text": "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed",
        "id": "C"
      },
      {
        "text": "Rules are evaluated from the general to the specific, so a table rule must be active to continue",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow의 **접근 제어(ACL) 평가**에서 필드 접근이 허용되려면 테이블/레코드 수준 ACL과 필드 수준 ACL을 모두 통과해야 합니다.\n*   **정답 포인트**: row 또는 table 수준 규칙과 field 수준 규칙이 모두 존재하면, 두 규칙이 모두 참이어야 작업이 허용됩니다.\n*   **평가 흐름**: 먼저 테이블/레코드 수준 접근 가능 여부를 확인하고, 통과한 경우에만 필드 수준 ACL을 평가합니다.\n*   **오답 구분**: ACL은 역할이 많은 사용자 기준으로 평가되는 것이 아니며, 오래된 규칙이 먼저 평가되는 것도 아닙니다. 또한 테이블 ACL의 세부 탐색은 일반적으로 가장 구체적인 규칙에서 더 일반적인 규칙 순서로 진행되므로 `general to specific`이라는 설명은 부정확합니다."
  },
  {
    "id": 61,
    "title": "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    "options": [
      {
        "text": "If a match is found using the coalesce fields, the existing record is updated with the information being imported",
        "id": "A"
      },
      {
        "text": "If a match is not found using the coalesce fields, the system does not create a Transform Map",
        "id": "B"
      },
      {
        "text": "If a match is found using the coalesce fields, the system creates a new record",
        "id": "C"
      },
      {
        "text": "If a match is not found using the coalesce fields, the existing record is updated with the information being imported",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**병합(Coalesce)**은 데이터 임포트 시 중복을 방지하기 위한 'Upsert(Update + Insert)' 로직의 핵심입니다.\n*   **매칭 성공(Match)**: `Coalesce`로 지정된 필드 값이 타겟 테이블의 기존 레코드와 일치하면, 시스템은 기존 레코드를 소스 데이터로 **업데이트(Update)**합니다.\n*   **매칭 실패(No Match)**: 일치하는 레코드가 없으면 **신규 레코드(Insert)**를 생성합니다.\n*   **주의**: 만약 여러 필드를 Coalesce로 지정하면, 지정된 **모든** 필드가 일치해야만 업데이트가 발생합니다."
  },
  {
    "id": 62,
    "title": "How are Workflows moved between instances?",
    "options": [
      {
        "text": "Workflows are moved using Update Sets",
        "id": "A"
      },
      {
        "text": "Workflows are moved using Transform Maps",
        "id": "B"
      },
      {
        "text": "Workflows are moved using Application Sets",
        "id": "C"
      },
      {
        "text": "Workflows cannot be moved between instances",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow에서 워크플로우(Workflows)는 인스턴스 간에 구성 변경을 이동하는 표준 도구인 **Update Sets**로 이동합니다.\n*   **정답 포인트**: Workflow 정의와 관련 설정은 구성(Configuration) 변경에 해당하므로 Update Set에 캡처해 다른 인스턴스로 옮길 수 있습니다.\n*   **오답 구분**: Transform Map은 Import Set 데이터를 대상 테이블로 변환하는 도구이고, Application Sets는 이 문맥의 표준 이동 수단이 아닙니다.\n*   **주의**: Update Set은 일반 업무 데이터가 아니라 플랫폼 구성 변경을 이동하는 데 사용됩니다."
  },
  {
    "id": 63,
    "title": "Tables are made up of which of the following? (Choose two.)",
    "options": [
      {
        "text": "records",
        "id": "A"
      },
      {
        "text": "lists",
        "id": "B"
      },
      {
        "text": "forms",
        "id": "C"
      },
      {
        "text": "fields",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow의 데이터베이스 구조는 전통적인 관계형 데이터베이스(RDBMS) 아키텍처를 따릅니다.\n*   **레코드 (Records)**: 테이블의 행(Row)에 해당하며, 하나의 독립된 개체 데이터를 의미합니다 (예: 특정 인시던트 한 건).\n*   **필드 (Fields)**: 테이블의 열(Column)에 해당하며, 레코드가 가진 개별 속성 정보를 담는 최소 단위입니다 (예: 짧은 설명, 상태).\n*   **참조**: 필드는 Dictionary에 의해 정의되며, 모든 레코드는 고유한 32자 식별자인 `sys_id`를 가집니다."
  },
  {
    "id": 64,
    "title": "Which three Variable Types can be added to a Service Catalog Item?",
    "options": [
      {
        "text": "True/False, Multiple Choice, and Ordered",
        "id": "A"
      },
      {
        "text": "True/False, Checkbox, and Number List",
        "id": "B"
      },
      {
        "text": "Number List, Single Line Text, and Reference",
        "id": "C"
      },
      {
        "text": "Multiple Choice, Select Box, and Checkbox",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "서비스 카탈로그에서 **변수(Variables)**는 요청 시 사용자로부터 정보를 수집하는 입력 도구입니다.\n*   **정답 포인트**: 보기 조합 중 **Multiple Choice, Select Box, Checkbox**는 모두 Service Catalog Item에 추가할 수 있는 변수 유형입니다.\n*   **Multiple Choice**: 라디오 버튼 형식으로 하나만 선택합니다.\n*   **Select Box**: 드롭다운 형식으로 하나만 선택합니다.\n*   **Checkbox**: 체크박스 형식으로 값을 선택합니다.\n*   **오답 구분**: 다른 보기에는 `Ordered`, `Number List`처럼 표준 변수 유형으로 보기 어려운 항목이 섞여 있습니다."
  },
  {
    "id": 65,
    "title": "What are the main UI component(s) of the ServiceNow Platform? (Choose three.)",
    "options": [
      {
        "text": "Banner Navigator",
        "id": "A"
      },
      {
        "text": "Banner Frame",
        "id": "B"
      },
      {
        "text": "Application Frame",
        "id": "C"
      },
      {
        "text": "Application Navigator",
        "id": "D"
      },
      {
        "text": "Content Menu",
        "id": "E"
      },
      {
        "text": "Content Frame",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "D",
      "F"
    ],
    "explanation": "Classic UI (UI16) 기준으로 사용자가 대면하는 메인 화면은 크게 세 영역으로 구분됩니다.\n1.  **Banner Frame (B)**: 상단 로고, 전역 검색, 사용자 프로필 메뉴, 시스템 설정(Gear) 등이 위치한 제어판입니다.\n2.  **Application Navigator (D)**: 좌측 패널로, 모든 애플리케이션과 모듈을 탐색하고 필터링하며 즐겨찾기(Favorites)와 기록(History)을 관리합니다.\n3.  **Content Frame (F)**: 우측의 가장 넓은 영역으로, 실제 데이터 리스트, 폼, 보고서, 대시보드 등이 렌더링되는 실무 영역입니다."
  },
  {
    "id": 66,
    "title": "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
    "options": [
      {
        "text": "They direct the user to a record producer",
        "id": "A"
      },
      {
        "text": "They direct the user to a catalog property",
        "id": "B"
      },
      {
        "text": "They direct the user to a catalog UI policy",
        "id": "C"
      },
      {
        "text": "They direct the user to a catalog client script",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**레코드 프로듀서(Record Producer)**는 서비스 카탈로그 인터페이스를 통해 사용자가 직관적인 질문에 답함으로써 백엔드의 태스크 기반 레코드를 직접 생성할 수 있게 해주는 도구입니다.\n*   **작동 방식**: 일반적인 카탈로그 항목(Catalog Item)이 'Requested Item(RITM)'을 생성하는 것과 달리, 레코드 프로듀서는 인시던트(`incident`), 케이스 등 타겟 테이블에 직접 데이터를 삽입합니다.\n*   **사용자 경험**: 복잡한 폼을 직접 열지 않고도 카탈로그의 친숙한 UI를 통해 장애 신고나 정보 변경 등을 수행할 수 있어 가독성과 편의성이 높습니다."
  },
  {
    "id": 67,
    "title": "A knowledge article must be which of the following states to display to a user?",
    "options": [
      {
        "text": "Published",
        "id": "A"
      },
      {
        "text": "Draft",
        "id": "B"
      },
      {
        "text": "Retired",
        "id": "C"
      },
      {
        "text": "Reviewed",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "지식 관리(Knowledge Management) 수명 주기에 따라, 일반 사용자가 지식 문서를 검색하고 열람하려면 해당 문서는 반드시 **`Published` (게시됨)** 상태여야 합니다.\n*   **수명 주기 단계**:\n    1. **Draft**: 작성 중인 단계.\n    2. **Review**: 승인권자의 검토 단계.\n    3. **Published**: 게시되어 모든 대상자가 읽을 수 있는 단계.\n    4. **Retired**: 유효 기간이 지나 검색 및 열람이 중단된 단계."
  },
  {
    "id": 68,
    "title": "ServiceNow uses what term to describe all the data saved within a particular form?",
    "options": [
      {
        "text": "Fields",
        "id": "A"
      },
      {
        "text": "Form",
        "id": "B"
      },
      {
        "text": "Record",
        "id": "C"
      },
      {
        "text": "Lists",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 데이터 모델에서 테이블의 행(Row) 하나를 **레코드(Record)**라고 부르며, 이는 특정 객체(사용자, 인시던트 등)에 대한 모든 데이터 필드 값의 집합을 의미합니다.\n*   **구성 요소**: 레코드는 여러 개의 **필드(Field)**들로 구성됩니다.\n*   **시각화**: 폼(Form) 인터페이스는 데이터베이스 내의 단일 레코드를 시각적으로 보여주고 편집할 수 있는 화면입니다."
  },
  {
    "id": 69,
    "title": "Which type of interface enables you to display multiple performance analytics, reporting and other widgets on a single screen?",
    "options": [
      {
        "text": "Form",
        "id": "A"
      },
      {
        "text": "List",
        "id": "B"
      },
      {
        "text": "Dashboard",
        "id": "C"
      },
      {
        "text": "Timeline",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**대시보드(Dashboard)**는 보고서(Reports), Performance Analytics 위젯 등 다양한 데이터 시각화 요소를 한 화면에 모아 제공하는 중앙 허브입니다.\n*   **특징**: 사용자는 대시보드에 여러 탭을 구성하여 업무 역할에 맞는 데이터 인사이트를 배치할 수 있습니다.\n*   **유연성**: 드래그 앤 드롭 방식으로 위젯의 위치와 크기를 조정할 수 있으며, 실시간 데이터 변화를 즉각적으로 모니터링하기에 최적화된 인터페이스입니다."
  },
  {
    "id": 70,
    "title": "What is the platform name for the User table?",
    "options": [
      {
        "text": "u_users",
        "id": "A"
      },
      {
        "text": "sys_users",
        "id": "B"
      },
      {
        "text": "x_users",
        "id": "C"
      },
      {
        "text": "sys_user",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 플랫폼에서 모든 사용자 계정 정보가 물리적으로 저장되는 마스터 테이블의 이름은 **`sys_user`**입니다.\n*   **기반 데이터(Foundational Data)**: 이 테이블은 사용자명, 이메일, 위치, 부서 등 인물 정보를 보유하며 플랫폼 내 거의 모든 프로세스(요청자, 할당 대상 등)에서 참조되는 핵심 테이블입니다.\n*   **참고**: `sys_` 접두사는 플랫폼의 시스템 테이블임을 의미합니다."
  },
  {
    "id": 71,
    "title": "What is a schema map?",
    "options": [
      {
        "text": "A schema map enables administrators to define records from specific tables as trouble sources for",
        "id": "A"
      },
      {
        "text": "A schema map graphically organizes the visual task boards for the CMDB",
        "id": "B"
      },
      {
        "text": "A schema map graphically displays the Configuration Items that support a business service",
        "id": "C"
      },
      {
        "text": "A schema map displays the details of tables and their relationships in a visual manner, allowing",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**스키마 맵(Schema Map)**은 특정 테이블의 구조와 다른 테이블과의 관계를 시각적으로 보여주는 도구입니다.\n*   **정답 포인트**: 테이블, 필드, 참조 관계, 확장 관계를 그래픽으로 확인할 수 있어 데이터 모델을 이해하는 데 사용합니다.\n*   **활용**: 관리자는 Schema Map을 통해 어떤 테이블이 부모/자식 관계인지, 어떤 필드가 다른 테이블을 참조하는지 빠르게 파악할 수 있습니다.\n*   **오답 구분**: CMDB의 CI 의존 관계나 비즈니스 서비스 지원 구조를 보여주는 도구는 Schema Map이 아니라 Dependency View 같은 CMDB 시각화 도구에 가깝습니다."
  },
  {
    "id": 72,
    "title": "A role is recorded in which table?",
    "options": [
      {
        "text": "Role[sys_user]",
        "id": "A"
      },
      {
        "text": "Role[sys_user_profile]",
        "id": "B"
      },
      {
        "text": "Role[sys_user_record]",
        "id": "C"
      },
      {
        "text": "Role[sys_user_role]",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 플랫폼에서 정의된 모든 **역할(Role)** 레코드는 **`sys_user_role`** 테이블에 저장됩니다.\n*   **정답 포인트**: 역할은 특정 기능이나 데이터 접근을 허용하는 권한의 집합이며, 역할 정의 자체는 `sys_user_role`에 보관됩니다.\n*   **구분**: 사용자 계정은 `sys_user`, 그룹은 `sys_user_group`, 역할은 `sys_user_role` 테이블에 저장됩니다.\n*   **할당 구조**: 역할은 사용자에게 직접 부여할 수도 있지만, 일반적으로 그룹에 역할을 부여하고 사용자를 그룹에 포함시키는 방식이 관리상 권장됩니다."
  },
  {
    "id": 73,
    "title": "Which term refers to application menus and modules which you may want to access quickly and often?",
    "options": [
      {
        "text": "Breadcrumb",
        "id": "A"
      },
      {
        "text": "Favorite",
        "id": "B"
      },
      {
        "text": "Tag",
        "id": "C"
      },
      {
        "text": "Bookmark",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**즐겨찾기(Favorites)** 기능은 사용자가 자주 사용하는 애플리케이션, 모듈, 리스트, 필터 등을 Application Navigator의 'Star' 아이콘 섹션에 저장해 두는 기능입니다.\n*   **개인화**: 사용자는 즐겨찾기 항목마다 고유한 아이콘과 색상을 지정하여 자신만의 내비게이션 환경을 구축할 수 있습니다.\n*   **속도**: 메뉴를 일일이 검색하거나 트리 구조를 탐색할 필요 없이 단 한 번의 클릭으로 원하는 화면에 접근할 수 있게 해줍니다."
  },
  {
    "id": 74,
    "title": "Which of the following statements is true when a new table is created by extending another table?",
    "options": [
      {
        "text": "The new table archives the parent table and assumed its roles in the database",
        "id": "A"
      },
      {
        "text": "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but",
        "id": "B"
      },
      {
        "text": "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself",
        "id": "C"
      },
      {
        "text": "The new table inherits all of the fields, but does not inherit Access Control rules, Client",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow에서 다른 테이블을 확장해 새 테이블을 만들면, 새 테이블은 부모 테이블의 필드를 상속받습니다.\n*   **정답 포인트**: 확장 테이블(Child table)은 부모 테이블의 모든 필드를 포함하며, 자신의 업무 목적에 맞는 고유 필드를 추가로 가질 수 있습니다.\n*   **예시**: Incident 테이블은 Task 테이블을 확장하므로 Task의 공통 필드를 물려받고, Incident에 필요한 전용 필드를 추가로 가질 수 있습니다.\n*   **오답 구분**: 확장은 부모 테이블을 보관(archive)하는 동작이 아니며, 자식 테이블이 부모 필드를 잃거나 독립된 새 구조만 갖는 것도 아닙니다."
  },
  {
    "id": 75,
    "title": "Which one of the following statements best describes the purpose of an Update Set?",
    "options": [
      {
        "text": "An Update Set allows administrators to group a series of changes into a named set and then move this set to another instance",
        "id": "A"
      },
      {
        "text": "By default, an Update Set includes customizations, Business Rules, and homepages",
        "id": "B"
      },
      {
        "text": "An Update Set is a group of customizations that is moved from Production to Development",
        "id": "C"
      },
      {
        "text": "By default, the changes included in an Update Set are visible only in the instance to which they are applied",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트(Update Sets)**는 인스턴스 간에 **구성(Configuration)** 변경 사항을 그룹화하여 안전하게 이동시키기 위한 도구입니다.\n*   **캡처 대상**: 테이블 정의, 폼 레이아웃, 워크플로우, 비즈니스 규칙 등 '어떻게 작동하는가'에 대한 설정 데이터(Configuration)를 캡처합니다.\n*   **제외 대상 (중요)**: 인시던트, 사용자, 그룹 레코드와 같은 실제 업무 데이터(Data)는 캡처되지 않습니다.\n*   **표준 프로세스**: `개발(In Progress) -> 완료(Complete) -> 다른 인스턴스에서 검색(Retrieve) -> 미리보기(Preview) -> 커밋(Commit)`의 단계를 거칩니다."
  },
  {
    "id": 76,
    "title": "Which one of the following statements describes a characteristic of role assignment?",
    "options": [
      {
        "text": "Roles can contain other roles, when you are assigned a role, you inherit all the roles within that role",
        "id": "A"
      },
      {
        "text": "Users can click on the Personalize Role feature to try different roles",
        "id": "B"
      },
      {
        "text": "A role is granted to a user by the System Administrator",
        "id": "C"
      },
      {
        "text": "Each user has a role in the ServiceNow platform",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 역할 아키텍처는 **역할 포함(Role Containment)** 기능을 지원합니다.\n*   **정답 포인트**: 어떤 역할이 다른 역할을 포함하도록 설정되면, 그 역할을 받은 사용자는 포함된 역할들의 권한도 함께 상속받습니다.\n*   **용도**: 역할 포함을 사용하면 여러 세부 권한을 하나의 상위 역할로 묶어 관리할 수 있습니다.\n*   **베스트 프랙티스**: 사용자에게 직접 역할을 부여하기보다는, 직무 단위로 역할을 그룹에 할당하고 사용자를 해당 그룹의 멤버로 추가하는 방식이 관리상 권장됩니다."
  },
  {
    "id": 77,
    "title": "Which would NOT appear in the History section of the Application Navigator?",
    "options": [
      {
        "text": "Records",
        "id": "A"
      },
      {
        "text": "UI Pages",
        "id": "B"
      },
      {
        "text": "Lists",
        "id": "C"
      },
      {
        "text": "Forms",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Application Navigator의 **기록(History)** 탭은 사용자가 최근에 접근한 실무 레코드를 빠르게 추적할 수 있도록 돕습니다.\n*   **포함 항목**: 최근에 열어본 개별 레코드(Forms), 필터가 적용된 리스트(Lists), 대시보드 등 업무 중심의 활동이 기록됩니다.\n*   **제외 항목**: UI Pages, 스크립트 정의 등 시스템 개발 및 구성 객체는 일반적인 사용 기록 탭에 나타나지 않습니다.\n*   **기능**: 'Clock' 아이콘을 통해 접근하며, 자주 찾는 항목은 즐겨찾기(Favorites)로 등록하여 더 영구적으로 관리할 수 있습니다."
  },
  {
    "id": 78,
    "title": "Buttons, form links, and context menu items are all examples of what type of functionality?",
    "options": [
      {
        "text": "Business Rule",
        "id": "A"
      },
      {
        "text": "UI Action",
        "id": "B"
      },
      {
        "text": "Client Script",
        "id": "C"
      },
      {
        "text": "UI Policy",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**UI Action (UI 액션)**은 사용자가 버튼, 링크, 컨텍스트 메뉴를 클릭해 특정 동작을 실행할 수 있게 하는 UI 기능입니다.\n*   **유형**: 폼 버튼(Form buttons), 폼 링크(Form links), 리스트/폼 컨텍스트 메뉴 항목(Context menu items) 등이 포함됩니다.\n*   **특징**: UI Action은 조건에 따라 표시 여부를 제어할 수 있고, 필요에 따라 클라이언트 측 또는 서버 측 로직을 실행할 수 있습니다.\n*   **오답 구분**: Business Rule은 서버 측 데이터베이스 로직, Client Script와 UI Policy는 주로 폼의 클라이언트 측 동작 제어에 사용됩니다."
  },
  {
    "id": 79,
    "title": "How is the Event Log different from the Event Registry?",
    "options": [
      {
        "text": "Event Log contains generated Events, the Event Registry is a table of Event definitions",
        "id": "A"
      },
      {
        "text": "Event Log is formatted in the Log style, the Event Registry displays different fields",
        "id": "B"
      },
      {
        "text": "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were",
        "id": "C"
      },
      {
        "text": "Event Log is the same as the Event Registry",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow에서 이벤트 시스템은 정의와 실행 이력으로 나뉩니다.\n*   **Event Registry (이벤트 레지스트리)**: 시스템이 인식할 수 있는 이벤트의 종류와 정의를 관리하는 테이블(`sysevent_register`)입니다. '무엇이 발생할 수 있는지'를 정의합니다.\n*   **Event Log (이벤트 로그)**: 시스템에서 실제로 발생한 모든 이벤트의 실행 기록을 담는 테이블(`sysevent`)입니다. '언제, 어떤 이벤트가 누구에 의해 발생했는지'를 기록합니다.\n*   **워크플로우**: Business Rule 등이 이벤트를 생성(Queue)하면 로그에 기록되고, 이를 감시하던 알림(Notification) 엔진이나 스크립트가 후속 조치를 수행합니다."
  },
  {
    "id": 80,
    "title": "Which of the following statements describes the purpose of an Order Guide?",
    "options": [
      {
        "text": "Order Guides restrict the number of items in an order to only one item per request",
        "id": "A"
      },
      {
        "text": "Order Guides provide a list of guidelines for Administrators on how to set up item variables",
        "id": "B"
      },
      {
        "text": "Order Guides provide the ability to order multiple, related items as one request",
        "id": "C"
      },
      {
        "text": "Order Guides take the user directly to the checkout without prompting for information",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**오더 가이드(Order Guide)**는 사용자에게 몇 가지 질문을 던지고, 그 답변에 따라 관련된 여러 카탈로그 항목들을 하나의 통합된 요청(Request)으로 묶어주는 도구입니다.\n*   **대표 사례**: '신규 입사자 온보딩' 오더 가이드를 통해 직책과 부서를 선택하면, 해당 사용자에게 필요한 노트북, 소프트웨어 권한, 출입 카드 요청 항목들이 자동으로 장바구니에 담깁니다.\n*   **이점**: 사용자가 개별 항목을 일일이 찾아 주문할 필요 없이, 비즈니스 시나리오에 맞는 최적의 묶음 주문을 가능하게 하여 사용자 경험을 대폭 개선합니다."
  },
  {
    "id": 81,
    "title": "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    "options": [
      {
        "text": "Service Catalog variables can only be used in Record Producers",
        "id": "A"
      },
      {
        "text": "Service Catalog variables can only be used in Order Guides",
        "id": "B"
      },
      {
        "text": "Service Catalog variables cannot affect the order price",
        "id": "C"
      },
      {
        "text": "Service Catalog variables are global by default",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "서비스 카탈로그의 **변수(Variables)**는 사용자가 카탈로그 항목을 주문할 때 필요한 정보를 입력하거나 선택하게 하는 필드입니다.\n*   **적용 범위**: 변수는 Record Producer나 Order Guide에만 제한되지 않고 Catalog Item에서도 사용됩니다.\n*   **기본 특성**: 이 문항의 정답 키 기준으로 변수는 기본적으로 전역(Global) 특성을 갖는 것으로 다룹니다. 여러 항목에서 공통 질문을 재사용해야 할 때는 Variable Set을 활용합니다.\n*   **가격 영향**: 변수 선택값은 항목 가격이나 옵션 가격에 영향을 줄 수 있으므로, '가격에 영향을 줄 수 없다'는 설명은 틀립니다."
  },
  {
    "id": 82,
    "title": "When searching using the App Navigator search field, what can be returned? (Choose four.)",
    "options": [
      {
        "text": "Names of Applications and Modules",
        "id": "A"
      },
      {
        "text": "Names of Modules",
        "id": "B"
      },
      {
        "text": "Names of Applications",
        "id": "C"
      },
      {
        "text": "Favorites",
        "id": "D"
      },
      {
        "text": "History Records",
        "id": "E"
      },
      {
        "text": "Titles of Dashboard Gauges",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Classic UI의 **애플리케이션 내비게이터 검색(Filter Navigator)**은 사용자가 접근할 수 있는 내비게이션 항목을 빠르게 찾는 기능입니다.\n*   **검색 대상**: 애플리케이션 이름, 모듈 이름, 그리고 즐겨찾기(Favorites)를 검색할 수 있습니다. 보기 A는 애플리케이션과 모듈을 함께 표현한 선택지이고, B/C는 이를 각각 나눈 선택지입니다.\n*   **제외 항목**: History Records는 최근 방문 기록 영역의 항목이지 일반적인 App Navigator 검색 결과 유형으로 보지 않습니다. Dashboard Gauge 제목도 이 검색의 주요 반환 대상이 아닙니다.\n*   **시험 포인트**: App Navigator 검색은 메뉴 탐색을 빠르게 하는 기능이며, 보고서/대시보드 내부 콘텐츠를 검색하는 기능이 아닙니다."
  },
  {
    "id": 83,
    "title": "Which common ServiceNow interface is used to enter data into ServiceNow?",
    "options": [
      {
        "text": "Homepage: Consists of navigational elements, functional controls, and platform information.",
        "id": "A"
      },
      {
        "text": "List: Displays records from a data table, as well as allows you to edit record information using the List Editor functionality.",
        "id": "B"
      },
      {
        "text": "Form: Data is entered into ServiceNow through forms",
        "id": "C"
      },
      {
        "text": "Dashboard: Enables you to display multiple performance analytics, reporting, and other widgets on a single screen.",
        "id": "D"
      },
      {
        "text": "Maps: Display ServiceNow data graphically on a Google map",
        "id": "E"
      },
      {
        "text": "Timelines: Used to track tasks or projects",
        "id": "F"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow에서 데이터를 인스턴스에 직접 입력하고 기존 레코드를 수정하는 데 사용하는 가장 핵심적인 인터페이스는 **폼(Form)**입니다.\n*   **기능**: 사용자가 개별 레코드의 필드 값을 확인, 입력, 수정할 수 있는 시각적 창구 역할을 합니다.\n*   **구성**: 필드(Fields), 섹션(Sections), 관련 리스트(Related Lists), 그리고 UI 액션(버튼 등)으로 구성됩니다.\n*   **비교**: 리스트(List)가 데이터의 목록을 조회하는 용도라면, 폼은 단일 객체의 상세 정보를 처리하는 운영 도구입니다."
  },
  {
    "id": 84,
    "title": "Which one of the following statements is true about Column Context Menus?",
    "options": [
      {
        "text": "It displays actions such as creating quick reports, configuring the list, and exporting data",
        "id": "A"
      },
      {
        "text": "It displays actions related to filtering options, assigning tags, and search",
        "id": "B"
      },
      {
        "text": "It displays actions related to viewing and filtering the entire list",
        "id": "C"
      },
      {
        "text": "It displays actions such as view form, view related task, and add relationship",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "리스트의 **컬럼 컨텍스트 메뉴(Column Context Menu)**는 컬럼 헤더 메뉴에서 열리며, 해당 리스트/컬럼을 기준으로 사용할 수 있는 작업을 제공합니다.\n*   **주요 기능**: 빠른 보고서 생성, 리스트 구성, 정렬/그룹화, 데이터 내보내기 같은 작업이 포함됩니다.\n*   **구분 포인트**: 태그 지정이나 검색 중심 작업, 특정 레코드의 관련 태스크 보기 같은 기능은 Column Context Menu의 대표 기능이 아닙니다.\n*   **시험 포인트**: 컬럼 헤더에서 여는 메뉴는 리스트 데이터를 보고, 구성하고, 내보내는 관리 작업과 연결됩니다."
  },
  {
    "id": 85,
    "title": "Where would you go in ServiceNow to order services and products offered by various departments?",
    "options": [
      {
        "text": "Service Catalog",
        "id": "A"
      },
      {
        "text": "Self Service",
        "id": "B"
      },
      {
        "text": "Service Department",
        "id": "C"
      },
      {
        "text": "Customer Service",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**서비스 카탈로그(Service Catalog)**는 기업 내 다양한 부서(IT, HR, 시설 관리 등)가 제공하는 서비스와 제품을 사용자가 쇼핑하듯 요청할 수 있는 중앙 허브입니다.\n*   **CSDM 연관**: CSDM 5.0의 **Service Consumption (구 Sell/Consume)** 도메인에 해당하며, 기술적 복잡성을 배제하고 비즈니스 가치 관점에서 사용자에게 오퍼링을 노출합니다.\n*   **구성**: 카탈로그 아이템, 오더 가이드, 레코드 프로듀서 등으로 이루어지며 승인 및 이행 워크플로우와 연결됩니다."
  },
  {
    "id": 86,
    "title": "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
    "options": [
      {
        "text": "Answer Agent",
        "id": "A"
      },
      {
        "text": "Live Feed",
        "id": "B"
      },
      {
        "text": "Virtual Agent",
        "id": "C"
      },
      {
        "text": "Connect Chat",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**가상 에이전트(Virtual Agent)**는 대화형 인터페이스를 통해 사용자에게 24/7 자동화된 지원을 제공하는 챗봇 플랫폼입니다.\n*   **핵심 기술**: 자연어 이해(NLU)를 활용하여 사용자의 의도를 파악하고, 지식 문서 검색, 티켓 상태 조회, 비밀번호 재설정 등의 작업을 대화 흐름 내에서 수행합니다.\n*   **이점**: 실시간 상담원의 업무 부하를 줄이고 사용자가 셀프 서비스로 문제를 즉각 해결할 수 있도록 돕습니다."
  },
  {
    "id": 87,
    "title": "What information does the System Dictionary contain?",
    "options": [
      {
        "text": "The human-readable labels and language settings",
        "id": "A"
      },
      {
        "text": "The definition for each table and column",
        "id": "B"
      },
      {
        "text": "The information on how tables relate to each other",
        "id": "C"
      },
      {
        "text": "The language dictionary used for spell checking",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**시스템 딕셔너리(System Dictionary, `sys_dictionary`)**는 인스턴스 내의 모든 테이블과 그 테이블에 속한 각 필드에 대한 **메타데이터(Metadata)**를 정의하는 마스터 저장소입니다.\n*   **저장 정보**: 필드의 데이터 타입, 길이, 기본값, 필수 여부, 참조 테이블 정보 등이 담겨 있습니다.\n*   **중요성**: 데이터베이스 스키마의 근간을 이루며, 여기서 설정된 값은 플랫폼 전역의 데이터 무결성과 UI 동작에 영향을 미칩니다."
  },
  {
    "id": 88,
    "title": "In what order should filter elements be specified?",
    "options": [
      {
        "text": "Field, Operator, then Value",
        "id": "A"
      },
      {
        "text": "Field, Operator, then Condition",
        "id": "B"
      },
      {
        "text": "Operator, Condition, then Value",
        "id": "C"
      },
      {
        "text": "Value, Operator, then Field",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 리스트에서 데이터를 솎아내는 **조건 빌더(Condition Builder)**는 논리적으로 **`필드(Field) -> 연산자(Operator) -> 값(Value)`** 순서로 구성됩니다.\n1.  **Field**: 검색 대상이 되는 열 (예: '상태').\n2.  **Operator**: 비교 방식 (예: 'is', 'contains', 'is not empty').\n3.  **Value**: 대조할 기준 데이터 (예: 'Closed').\n*   **시각화**: 이 조건들이 결합되어 리스트 상단에 **브레드크럼(Breadcrumbs)** 형태의 텍스트 필터로 표시됩니다."
  },
  {
    "id": 89,
    "title": "Table Access Control rules are processed in the following order",
    "options": [
      {
        "text": "any table name (wildcard), parent table name, table name",
        "id": "A"
      },
      {
        "text": "table name, parent table name, any table name (wildcard)",
        "id": "B"
      },
      {
        "text": "parent table name, table name, any table name (wildcard)",
        "id": "C"
      },
      {
        "text": "any table name (wildcard), table name, parent table name",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**테이블 수준 ACL(Access Control)**의 평가 원칙은 보안을 위해 **'가장 구체적인 것에서 가장 일반적인 것(Most Specific to Most General)'** 순으로 진행됩니다.\n1.  **Table Name**: 현재 테이블에 명시된 규칙 (가장 구체적).\n2.  **Parent Table Name**: 부모 테이블로부터 상속받은 규칙.\n3.  **Any Table Name (*)**: 모든 테이블에 공통 적용되는 와일드카드 규칙 (가장 일반적).\n*   **가드레일**: 시스템은 위 순서대로 규칙을 탐색하며, 조건을 만족하는 첫 번째 규칙을 찾아 접근 허용 여부를 결정합니다."
  },
  {
    "id": 90,
    "title": "What are the two pathways to view feedback left on a published article?",
    "options": [
      {
        "text": "Knowledge > articles > My Flagged",
        "id": "A"
      },
      {
        "text": "Knowledge base > my knowledge > flagged articles",
        "id": "B"
      },
      {
        "text": "Knowledge > My articles > Flagged",
        "id": "C"
      },
      {
        "text": "Knowledge > articles > published",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "지식 관리 프로세스에서 게시된 문서에 대해 사용자가 남긴 피드백이나 개선 요청을 확인하는 표준 경로는 다음과 같습니다.\n1.  **My Flagged (A)**: 사용자가 내용을 정정해달라고 '플래그(Flag)'를 설정한 본인의 기사들을 모아보는 메뉴입니다.\n2.  **게시된 문서 목록 (D)**: 지식 관리자나 작성자가 `Knowledge > Articles > Published` 모듈에서 개별 문서를 열어 하단의 피드백 관련 리스트나 댓글을 직접 확인합니다.\n*   **KM 거버넌스**: 이러한 피드백 루프는 지식 기반의 정확성과 최신성을 유지하는 'Govern' 단계의 핵심 활동입니다."
  },
  {
    "id": 91,
    "title": "When does the Submit button appear on a form?",
    "options": [
      {
        "text": "When saving an old record",
        "id": "A"
      },
      {
        "text": "When creating a new record",
        "id": "B"
      },
      {
        "text": "When changing the reference field in an existing record",
        "id": "C"
      },
      {
        "text": "When updating an existing record",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow UI에서 레코드의 생성 및 저장 버튼은 데이터 수명 주기에 따라 이름이 바뀝니다.\n*   **Submit**: 시스템에 존재하지 않는 **새로운 레코드**를 최초로 생성(Insert)할 때 표시됩니다. 클릭 시 데이터가 DB에 물리적으로 저장되고 대개 목록 화면으로 이동합니다.\n*   **Update**: 이미 존재하는 **기존 레코드**의 변경 사항을 저장할 때 표시됩니다.\n*   **Save**: 기존 레코드를 저장하되 현재 폼 화면에 그대로 머물고 싶을 때 사용합니다 (주로 Context Menu에 위치)."
  },
  {
    "id": 92,
    "title": "What needs to be specified, when creating a Business Rule? (Choose four.)",
    "options": [
      {
        "text": "UI action",
        "id": "A"
      },
      {
        "text": "Table",
        "id": "B"
      },
      {
        "text": "Fields to update",
        "id": "C"
      },
      {
        "text": "Who can run",
        "id": "D"
      },
      {
        "text": "Script to run",
        "id": "E"
      },
      {
        "text": "Application scope",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "explanation": "**비즈니스 규칙(Business Rules)**은 데이터베이스 작업 시 서버 측에서 실행되는 로직으로, 생성 시 다음 핵심 요소들을 정의해야 합니다.\n*   **Table (B)**: 규칙이 적용될 대상 테이블.\n*   **When to run**: 로직이 실행될 시점(Before, After, Async, Display).\n*   **Condition**: 로직이 트리거되기 위해 만족해야 할 필드 조건.\n*   **Script (E)**: 실행될 JavaScript 비즈니스 로직.\n*   **Scope (F)**: 규칙이 속한 애플리케이션의 경계.\n*   **참고**: 보기 A(UI Action)는 보통 버튼이나 링크를 뜻하지만, 여기서는 비즈니스 규칙 내에서 수행되는 '작업'의 의미로 포함된 것으로 보입니다."
  },
  {
    "id": 93,
    "title": "The ServiceNow Virtual Agent provides assistance within a messaging interface. Which capability allows end users to configure virtual Agent to intercept and help resolve submitted incidents?",
    "options": [
      {
        "text": "Incident Auto-Resolution",
        "id": "A"
      },
      {
        "text": "Ticket Resolver",
        "id": "B"
      },
      {
        "text": "Virtual Agent Helper",
        "id": "C"
      },
      {
        "text": "Web Intelligence",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Incident Auto-Resolution (인시던트 자동 해결)**은 ServiceNow의 지능형 자동화 역량입니다.\n*   **작동 원리**: 가상 에이전트(Virtual Agent)와 머신러닝을 활용하여 인입된 인시던트의 패턴을 분석합니다.\n*   **사용자 경험**: 상담원이 개입하기 전에 AI가 연관된 지식 문서(Knowledge Articles)를 제안하거나 자동화된 태스크를 실행하여 문제를 즉각 해결함으로써 MTTR(평균 복구 시간)을 단축합니다."
  },
  {
    "id": 94,
    "title": "What are the three permission requirements that must evaluate to true for an access control rule to apply? Choose 3 answers",
    "options": [
      {
        "text": "Conditions",
        "id": "A"
      },
      {
        "text": "table.",
        "id": "B"
      },
      {
        "text": "Roles",
        "id": "C"
      },
      {
        "text": "Script",
        "id": "D"
      },
      {
        "text": "Conditional Expression",
        "id": "E"
      },
      {
        "text": "table.none",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "**접근 제어(ACL, Access Control List)** 보안 가이드라인은 사용자가 데이터에 접근하기 위해 통과해야 하는 세 가지 '체크포인트'를 제공합니다.\n1.  **Roles (역할)**: 특정 권한 보유 여부 확인.\n2.  **Conditional Expressions (조건)**: 레코드 필드 값의 상태 확인.\n3.  **Scripts (스크립트)**: 복잡한 동적 권한 판별.\n*   **보안 원칙**: 이 세 가지 요소는 **논리적 AND** 관계로 작동합니다. 즉, 설정된 모든 관문이 '참(True)'을 반환해야만 최종적으로 접근이 승인됩니다."
  },
  {
    "id": 95,
    "title": "Which module is used as the first step for importing data?",
    "options": [
      {
        "text": "Coalesce Data",
        "id": "A"
      },
      {
        "text": "Transform Data",
        "id": "B"
      },
      {
        "text": "Import Data",
        "id": "C"
      },
      {
        "text": "Load Data",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 데이터 수집(Ingest) 워크플로우의 출발점은 **Load Data** 모듈입니다.\n*   **프로세스**: 외부 소스(Excel, CSV, XML 등)로부터 데이터를 읽어 들여 인스턴스 내부의 **임포트 세트 테이블(Staging Area)**에 임시 적재하는 단계입니다.\n*   **다음 단계**: 데이터 로드가 완료되면 변환 맵(Transform Map)을 생성하여 임시 테이블의 데이터를 실제 타겟 테이블로 매핑하고 이동시키는 과정을 거칩니다."
  },
  {
    "id": 96,
    "title": "What are the steps to retrieve an Update Set?",
    "options": [
      {
        "text": "Verify Update Set is Complete, Retrieve, Preview, Apply",
        "id": "A"
      },
      {
        "text": "Verify Update Set is Complete, Test Connection, Apply",
        "id": "B"
      },
      {
        "text": "Verify Update Set is Complete, Test Connection, Commit",
        "id": "C"
      },
      {
        "text": "Verify Update Set is Complete, Retrieve, Preview, Commit",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "업데이트 세트를 다른 인스턴스에 반영하는 표준 거버넌스 단계는 다음과 같습니다.\n1.  **Retrieve**: 원격 인스턴스로부터 'Complete' 상태의 업데이트 세트를 가져옵니다.\n2.  **Preview**: 반영 전 기존 구성과의 충돌이나 오류를 미리 점검합니다. (가장 중요한 검증 단계)\n3.  **Commit**: 오류가 해결된 변경 사항을 인스턴스 데이터베이스에 최종적으로 적용합니다.\n*   **주의**: `Test Connection`이나 `Apply`는 이 문항의 표준 Update Set 반영 절차가 아닙니다."
  },
  {
    "id": 97,
    "title": "On a Form header, what is the three bar icon called?",
    "options": [
      {
        "text": "Pancake icon",
        "id": "A"
      },
      {
        "text": "Additional Actions or Context Menu",
        "id": "B"
      },
      {
        "text": "Hamburger icon",
        "id": "C"
      },
      {
        "text": "Cake icon",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "폼 헤더 좌측에 위치한 세 줄 형태의 아이콘은 통칭 **Hamburger 아이콘**으로 불리며, 공식 명칭은 **Additional Actions** 또는 **Context Menu**입니다.\n*   **기능**: 레코드 저장(Save), 템플릿 적용, 폼 구성(Configure) 메뉴 열기, 태스크 복제 등 현재 보고 있는 레코드와 관련된 관리자 및 사용자용 액션들을 모아놓은 제어 허브입니다."
  },
  {
    "id": 98,
    "title": "Which tool is used for creating dependencies between configuration items in the CMDB?",
    "options": [
      {
        "text": "CI Relationship Editor",
        "id": "A"
      },
      {
        "text": "CMDB Builder",
        "id": "B"
      },
      {
        "text": "CI Service Manager",
        "id": "C"
      },
      {
        "text": "CI Class Manager",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "CMDB 내에서 구성 항목(CI) 간의 계층 구조와 의존 관계(Relationships)를 설계하고 관리하는 중앙 허브는 **CI Class Manager**입니다.\n*   **기능**: 여기서 자산의 식별 규칙(Identification), 조정 규칙(Reconciliation)뿐만 아니라 CI 간에 어떤 관계(호스팅, 종속 등)를 맺을 수 있는지 정의합니다.\n*   **참고**: 보기 D는 오탈자가 있었지만 의도된 용어는 `CI Class Manager`입니다."
  },
  {
    "id": 99,
    "title": "What is the purpose of the Event Registry?",
    "options": [
      {
        "text": "The Event Registry lists all Events that have successfully completed within a 24-hour period",
        "id": "A"
      },
      {
        "text": "The Event Registry is a list of all Events that originate through an integration",
        "id": "B"
      },
      {
        "text": "The Event Registry is a module that provides Event definitions",
        "id": "C"
      },
      {
        "text": "The Event Registry is a list of all Events that have successfully completed after being Invoked by a script",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Event Registry는 시스템에서 발생할 수 있는 이벤트의 **정의(Definitions)**를 관리하는 테이블(`sysevent_register`)입니다.\n*   **역할**: 어떤 이름의 이벤트를 어떤 조건에서 사용할지 미리 등록합니다.\n*   **구분**: 실제로 발생한 이벤트의 실행 기록은 **Event Log**(`sysevent`)에 남습니다.\n*   **정답 포인트**: 따라서 Event Registry는 '이벤트 정의를 제공하는 모듈/테이블'이라는 설명이 맞습니다."
  },
  {
    "id": 100,
    "title": "Which fields can be configured in reporting to perform arithmetic, coalesce, concatenation, and length?",
    "options": [
      {
        "text": "Sourcing fields",
        "id": "A"
      },
      {
        "text": "Function fields",
        "id": "B"
      },
      {
        "text": "Computational fields",
        "id": "C"
      },
      {
        "text": "Calculation fields",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**함수 필드(Function Fields)**는 데이터베이스에 실제 값을 저장하지 않고, 다른 필드들을 조합하여 실시간 계산 결과를 보여주는 가상 필드입니다.\n*   **특징**: 산술 연산(덧셈, 곱셈), 문자열 결합(Concatenation), 필드 길이 측정 등을 보고서(Reporting) 시점에 수행할 수 있어 매우 유연합니다.\n*   **장점**: 데이터베이스 스토리지 공간을 차지하지 않으면서도 복잡한 분석 데이터를 도출할 수 있게 해줍니다."
  },
  {
    "id": 101,
    "title": "What type of field allows you to look up values from one other table?",
    "options": [
      {
        "text": "Reference",
        "id": "A"
      },
      {
        "text": "Verity",
        "id": "B"
      },
      {
        "text": "Options",
        "id": "C"
      },
      {
        "text": "Selections",
        "id": "D"
      },
      {
        "text": "Dot walk",
        "id": "E"
      },
      {
        "text": "Lookup",
        "id": "F"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**참조(Reference)** 필드는 ServiceNow 데이터 모델에서 테이블 간의 관계를 형성하는 가장 기본적인 도구입니다.\n*   **기능**: 현재 테이블의 필드에서 다른 테이블(예: User, Group, CI)의 특정 레코드를 가리키도록 연결합니다.\n*   **메커니즘**: 내부적으로는 대상 레코드의 고유 ID인 **`sys_id`**를 저장하지만, UI 상에서는 사용자가 읽을 수 있는 Display Value(예: 이름)를 보여줍니다.\n*   **핵심**: 이 필드 유형이 있어야만 강력한 데이터 조회 기술인 **닷워킹(Dot-Walking)**이 가능해집니다."
  },
  {
    "id": 102,
    "title": "When using the Performance Analytics application in the Now Platform, what kind of KPI signals are used to make decisions that statistically support long term workflow stability?",
    "options": [
      {
        "text": "Long-term signals",
        "id": "A"
      },
      {
        "text": "Non-signals",
        "id": "B"
      },
      {
        "text": "Anti-signals",
        "id": "C"
      },
      {
        "text": "Stability signals",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**성능 분석(Performance Analytics)**은 단순 보고서와 달리 데이터의 장기적인 추세와 패턴을 파악하는 도구입니다.\n*   **KPI 시그널**: 통계적 공정 관리(SPC) 기법을 사용하여 워크플로우의 안정성을 저해하는 이상 징후나 노이즈를 탐지합니다.\n*   **비교**: **보고서(Reporting)**가 현재 시점의 '스냅샷'을 보여준다면, **PA**는 과거부터 축적된 데이터를 바탕으로 미래를 예측하고 비즈니스 가치를 도출하는 '인사이트' 도구입니다.\n*   **참고**: 보기의 'Anti-signals'는 분석을 방해하는 요소를 통계적으로 걸러내는 맥락으로 이해할 수 있습니다."
  },
  {
    "id": 103,
    "title": "Which certificate-based authentication methods can be enabled so that users can log into the Service Portal? (Select all that apply) Select 2 Answers from the below options",
    "options": [
      {
        "text": "Extended Validation Access (EVA)",
        "id": "A"
      },
      {
        "text": "Organization Verification Card (OVC)",
        "id": "B"
      },
      {
        "text": "Common Access Card (CAC)",
        "id": "C"
      },
      {
        "text": "Domain Authentication Card (DAC)",
        "id": "D"
      },
      {
        "text": "Personal Identify Verification (PIV)",
        "id": "E"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "ServiceNow 서비스 포털은 고보안 환경을 위해 인증서 기반의 다중 요소 인증(MFA) 방식을 지원합니다.\n*   **CAC (Common Access Card) (C)**: 미국 국방부 등에서 사용하는 표준 스마트카드 인증 방식입니다.\n*   **PIV (Personal Identity Verification) (E)**: 미국 연방 정부 표준의 신원 확인 인증 방식입니다.\n*   **보안 가드레일**: 비밀번호 유출 위험을 줄이고, 물리적 카드를 소지한 승인된 사용자만 인스턴스에 접근할 수 있도록 보안을 대폭 강화합니다."
  },
  {
    "id": 104,
    "title": "How do you make a list filter available to everyone?",
    "options": [
      {
        "text": "Make active, set visibility, and save",
        "id": "A"
      },
      {
        "text": "Assign a name, set visibility, and save",
        "id": "B"
      },
      {
        "text": "Assign a group, set visibility, and save",
        "id": "C"
      },
      {
        "text": "Make active, assign a name, and save",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "리스트에서 생성한 필터를 저장하여 다른 사용자와 공유하려면 다음 설정이 필수적입니다.\n*   **이름 지정(Name)**: 필터를 구분할 수 있는 고유한 이름을 부여해야 저장(Save) 버튼이 활성화됩니다.\n*   **가시성 설정(Visibility)**: 가시성 옵션을 **'Everyone'**으로 선택해야 모든 사용자가 해당 필터를 탐색창에서 볼 수 있습니다.\n*   **권한**: 전역 필터를 저장하고 공유하려면 일반적으로 `save_filters` 역할이나 `admin` 역할이 필요합니다."
  },
  {
    "id": 105,
    "title": "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
    "options": [
      {
        "text": "Flows",
        "id": "A"
      },
      {
        "text": "Action Sequences",
        "id": "B"
      },
      {
        "text": "Action Sets",
        "id": "C"
      },
      {
        "text": "Task Flows",
        "id": "D"
      },
      {
        "text": "Flow Diagrams",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "(보기가 실제 제품 용어인 **플로우 디자이너(Flow Designer)**의 시각적 로직 흐름을 묘사한 것으로 보입니다.)\n*   **Flow Designer**: 승인(Approvals), 작업(Tasks), 알림(Notifications) 및 레코드 작업(CRUD)을 코드 없이 자연어 문장 형태로 연결하여 자동화하는 강력한 플랫폼 도구입니다.\n*   **장점**: 복잡한 워크플로우 엔진보다 직관적인 인터페이스를 제공하며, 로코드(Low-code) 기반으로 기술 부채를 줄이고 비즈니스 로직을 빠르게 구현할 수 있게 합니다."
  },
  {
    "id": 106,
    "title": "Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non- managers) can submit the order?",
    "options": [
      {
        "text": "Create Record Producer and use the Available For list to specify First Line [sn_first_line] role",
        "id": "A"
      },
      {
        "text": "Create Catalog Item and use the Not Available list to specify the Manager Group",
        "id": "B"
      },
      {
        "text": "Create Catalog Item and use the Available For list to specify ITIL [itil] role",
        "id": "C"
      },
      {
        "text": "Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "서비스 카탈로그 항목의 가시성을 정교하게 제어하기 위해 ServiceNow는 **사용자 기준(User Criteria)**을 사용합니다.\n*   **Not Available For**: 특정 그룹(예: 관리자 그룹)을 '사용 불가' 리스트에 추가하여 접근을 명시적으로 차단할 수 있습니다.\n*   **Available For**: 특정 역할이나 부서, 위치를 가진 사용자에게만 카탈로그 항목이 노출되도록 허용할 때 사용합니다.\n*   **거버넌스**: 복잡한 ACL이나 스크립팅 대신 User Criteria를 활용하는 것이 유지보수와 보안 관리 측면에서 권장되는 베스트 프랙티스입니다."
  },
  {
    "id": 107,
    "title": "What icon do you use to change the label on a Favorite?",
    "options": [
      {
        "text": "Clock",
        "id": "A"
      },
      {
        "text": "Hamburger",
        "id": "B"
      },
      {
        "text": "Pencil",
        "id": "C"
      },
      {
        "text": "Three dots",
        "id": "D"
      },
      {
        "text": "Triangle.",
        "id": "E"
      },
      {
        "text": "Star",
        "id": "F"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**즐겨찾기(Favorites)** 탭에서 이미 등록된 항목의 이름이나 외형을 변경하려면 **Pencil (연필)** 아이콘을 사용합니다.\n*   **편집 가능 항목**: 즐겨찾기의 레이블(이름), 아이콘 모양, 그리고 표시 색상을 사용자의 취향에 맞게 개인화할 수 있습니다.\n*   **개인화**: 이는 사용자 세션에 귀속되는 개인 설정으로, 다른 사용자의 내비게이터 메뉴에는 영향을 주지 않습니다."
  },
  {
    "id": 108,
    "title": "What is a role in ServiceNow?",
    "options": [
      {
        "text": "A role is one record m the Role [sys_user_role] table",
        "id": "A"
      },
      {
        "text": "A role is one record in the Role Iuser_sys_role] table",
        "id": "B"
      },
      {
        "text": "A role is a persona used In Live Feed Chat",
        "id": "C"
      },
      {
        "text": "A role Is a set of modules for a particular application",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 아키텍처에서 **역할(Role)**은 특정 기능이나 데이터에 접근할 수 있는 '권한의 집합'을 정의하는 시스템 레코드입니다.\n*   **테이블**: 모든 역할 정의는 **`sys_user_role`** 테이블에 물리적으로 저장됩니다.\n*   **권한 관리(RBAC)**: 역할을 사용자에게 직접 부여하기보다, **그룹(Group)**에 부여하고 사용자를 해당 그룹의 멤버로 포함시키는 방식이 플랫폼 관리의 핵심 모범 사례입니다."
  },
  {
    "id": 109,
    "title": "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    "options": [
      {
        "text": "Star",
        "id": "A"
      },
      {
        "text": "Clock",
        "id": "B"
      },
      {
        "text": "Application",
        "id": "C"
      },
      {
        "text": "Funnel",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "애플리케이션 내비게이터 상단의 **All Applications (애플리케이션)** 아이콘은 모든 앱과 모듈의 계층 구조를 제어하는 버튼입니다.\n*   **더블 클릭**: 이 아이콘을 더블 클릭하면 현재 열려 있는 모든 애플리케이션 메뉴가 한꺼번에 접히거나(Collapse), 전체가 펼쳐지는(Expand) 동작을 수행하여 탐색을 돕습니다.\n*   **아이콘 구분**: 별표(Star)는 즐겨찾기, 시계(Clock)는 사용 기록, 깔때기(Funnel)는 조건 검색을 의미합니다."
  },
  {
    "id": 110,
    "title": "After finishing your work on High Security Settings, what do you do to return to normal admin security levels?",
    "options": [
      {
        "text": "Select Normal role",
        "id": "A"
      },
      {
        "text": "Log out and back in",
        "id": "B"
      },
      {
        "text": "Use System Administration > Normal Security module",
        "id": "C"
      },
      {
        "text": "Select Global Update Set",
        "id": "D"
      },
      {
        "text": "End Impersonation",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**역할 상승(Elevated Roles)**(예: `security_admin`)은 보안이 민감한 작업을 위해 일시적으로 고권한을 활성화하는 기능입니다.\n*   **세션 기반**: 상승된 권한은 현재 로그인된 **세션(Session)** 동안만 유효합니다.\n*   **복구**: 작업을 마친 후 일반 관리자 수준으로 돌아가려면 **로그아웃 후 다시 로그인**하여 세션을 새로 시작하는 것이 표준 절차입니다. 브라우저를 닫거나 세션이 만료되어도 자동으로 해제됩니다."
  },
  {
    "id": 111,
    "title": "What kind of data can Import Sets use to populate tables in ServiceNow?",
    "options": [
      {
        "text": "CSS, SOAP, and Excel",
        "id": "A"
      },
      {
        "text": "XML, CSV, and Excel",
        "id": "B"
      },
      {
        "text": "SOAP, REST, and XML",
        "id": "C"
      },
      {
        "text": "XML, SOAP, and CSS",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**임포트 세트(Import Sets)**는 다양한 외부 소스로부터 데이터를 가져와 ServiceNow 테이블을 채울 수 있는 유연한 데이터 로드 도구입니다.\n*   **지원 형식**: **CSV**, **XML**, **Excel**, **JSON** 등 표준화된 파일 형식을 직접 업로드하여 로드할 수 있습니다.\n*   **기타 소스**: 파일 외에도 JDBC 연결을 통한 외부 DB 연동, LDAP을 통한 디렉토리 서비스 연동 등을 지원하여 데이터 통합을 가능하게 합니다."
  },
  {
    "id": 112,
    "title": "What is a quick way to create a report from a list view?",
    "options": [
      {
        "text": "Click on filter breadcrumb, drag and drop on the Report > Create New module",
        "id": "A"
      },
      {
        "text": "Click Funnel, define filter conditions, click Create Report",
        "id": "B"
      },
      {
        "text": "Click Context Menu, select Create Report",
        "id": "C"
      },
      {
        "text": "Apply filter, right click on column header, select Bar Chart",
        "id": "D"
      },
      {
        "text": "Apply filter, right click on column header, select Create Report",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "리스트 뷰에서 보고서를 즉석 생성하는 가장 빠른 방법 중 하나는 조건 빌더(Funnel 아이콘)를 활용하는 것입니다.\n*   **절차**: 필터 아이콘 클릭 -> 조건 정의 -> **Create Report** 버튼 클릭.\n*   **장점**: 리스트에서 설정한 필터 조건이 보고서 디자이너(Report Designer)로 자동 전달되어 설정 시간을 단축합니다.\n*   **기타 방법**: 컬럼 헤더를 우클릭하여 'Bar Chart'나 'Pie Chart'를 선택하는 방식 역시 리스트 기반의 신속한 시각화 도구로 자주 사용됩니다."
  },
  {
    "id": 113,
    "title": "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
    "options": [
      {
        "text": "Configure Lists",
        "id": "A"
      },
      {
        "text": "Show Options",
        "id": "B"
      },
      {
        "text": "Configure Task",
        "id": "C"
      },
      {
        "text": "Show Choices",
        "id": "D"
      },
      {
        "text": "Show Choice List",
        "id": "E"
      },
      {
        "text": "Configure Options",
        "id": "F"
      }
    ],
    "answer": [
      "F"
    ],
    "explanation": "(일반적으로 UI에서는 **'Configure Choices'**로 표시됩니다.)\n*   **메커니즘**: ServiceNow의 선택 목록(Choice List) 데이터는 **`sys_choice`** 테이블에 저장됩니다.\n*   **일관성 유지**: `task` 테이블 수준에서 초이스 값을 수정하면 이를 확장(Extend)한 인시던트, 문제, 변경 등 모든 하위 테이블에 공통적으로 적용됩니다.\n*   **주의**: 특정 테이블에서만 다르게 보이게 하려면 'Dictionary Override'를 통해 해당 테이블 전용의 초이스 세트를 정의해야 합니다."
  },
  {
    "id": 114,
    "title": "What do you need to do before you can use an Application-based trigger in your flow?",
    "options": [
      {
        "text": "Activate application trigger spoke",
        "id": "A"
      },
      {
        "text": "Activate trigger security rules",
        "id": "B"
      },
      {
        "text": "Activate application spoke, and plug-ins as needed",
        "id": "C"
      },
      {
        "text": "Assign Application trigger role [sn_app_trigger_write] to SME",
        "id": "D"
      },
      {
        "text": "Activate application plugins only",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**애플리케이션 기반 트리거(Application-based Triggers)**는 외부 애플리케이션(예: Slack, Microsoft Teams)의 이벤트를 감지하여 플로우를 시작합니다.\n*   **선결 조건**: 해당 애플리케이션과의 통신을 담당하는 **Spoke**가 포함된 플러그인(IntegrationHub 관련 등)이 반드시 활성화되어 있어야 합니다.\n*   **IntegrationHub**: 플로우 디자이너가 인스턴스 외부 시스템과 상호작용하기 위해 필요한 기술적 기반이며, 구독 레벨에 따라 사용 가능한 Spoke 범위가 달라집니다."
  },
  {
    "id": 115,
    "title": "Which section of the ServiceNow UI allows you to perform a global search?",
    "options": [
      {
        "text": "Application Navigator",
        "id": "A"
      },
      {
        "text": "Banner frame",
        "id": "B"
      },
      {
        "text": "List pane",
        "id": "C"
      },
      {
        "text": "Content frame",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**전역 검색(Global Search)** 기능은 UI 상단의 **배너 프레임(Banner Frame)**에 위치한 돋보기 아이콘을 통해 실행됩니다.\n*   **검색 엔진**: 기본적으로 'Zing' 텍스트 검색 엔진을 사용하며, 설정에 따라 'AI Search'로 업그레이드하여 더 지능적인 결과를 얻을 수 있습니다.\n*   **특징**: 특정 테이블에 국한되지 않고 인스턴스 전반의 레코드(인시던트, 사용자, 지식 문서 등)를 한 번에 검색하여 통합된 결과를 보여줍니다."
  },
  {
    "id": 116,
    "title": "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
    "options": [
      {
        "text": "Local Sources (i.e. XML, CSV, Excel)",
        "id": "A"
      },
      {
        "text": "Implementation Spoke",
        "id": "B"
      },
      {
        "text": "DataHub",
        "id": "C"
      },
      {
        "text": "JDBC Connection",
        "id": "D"
      },
      {
        "text": "Network Server",
        "id": "E"
      },
      {
        "text": "LDAP Connection",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "F"
    ],
    "explanation": "**데이터 소스(Data Sources)**는 임포트 세트(Import Set)를 통해 데이터를 로드할 때 원본 위치와 형식을 정의합니다.\n1.  **Local Sources (A)**: 컴퓨터의 로컬 파일 (Excel, CSV, XML 등).\n2.  **DataHub (C)**: 통합된 데이터 스트림 서비스.\n3.  **JDBC (D)**: 외부 관계형 데이터베이스(MySQL, Oracle 등) 직접 연결.\n4.  **LDAP (F)**: 기업 디렉토리 서비스로부터 사용자/그룹 정보 수집.\n*   **프로세스**: 데이터 소스 정의 -> 데이터 로드(Staging) -> 변환 맵 적용 -> 타겟 테이블 적재."
  },
  {
    "id": 117,
    "title": "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
    "options": [
      {
        "text": "an action",
        "id": "A"
      },
      {
        "text": "a spoke",
        "id": "B"
      },
      {
        "text": "a connection",
        "id": "C"
      },
      {
        "text": "an integration step",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**Spoke**는 **IntegrationHub**에서 특정 서드파티 애플리케이션(예: Jira, Zoom, Google Drive)과의 연동을 위해 미리 패키징된 **액션(Actions)**과 **로직**의 집합입니다.\n*   **논리적 단위**: 하나의 Spoke는 관련 있는 여러 작업을 묶어 제공하며, 개발자는 코딩 없이 이를 플로우 디자이너에서 드래그 앤 드롭으로 사용할 수 있습니다.\n*   **재사용성**: 한 번 구성된 Spoke의 액션은 인스턴스 내의 여러 플로우에서 반복적으로 재사용 가능합니다."
  },
  {
    "id": 118,
    "title": "The ServiceNow platform includes which types of interfaces? (Choose three.)",
    "options": [
      {
        "text": "Now Mobile Apps",
        "id": "A"
      },
      {
        "text": "Agent Control Center",
        "id": "B"
      },
      {
        "text": "Back Office Dashboard",
        "id": "C"
      },
      {
        "text": "Service Portals",
        "id": "D"
      },
      {
        "text": "Now Platform® User Interfaces",
        "id": "E"
      },
      {
        "text": "Field Service Taskboard",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "ServiceNow 플랫폼은 사용자의 목적과 디바이스에 따라 다양한 인터페이스 레이어를 제공합니다.\n1.  **Now Platform User Interfaces (E)**: 운영자 및 관리자가 사용하는 표준 관리 화면 (Classic UI/UI16).\n2.  **Service Portals (D)**: 일반 직원이 서비스를 요청하거나 정보를 검색하는 웹 기반 셀프 서비스 환경.\n3.  **Now Mobile Apps (A)**: 모바일 디바이스에 최적화된 앱으로, 이동 중에도 요청 승인이나 작업 처리가 가능함.\n*   **참고**: 나머지는 특정 기능 영역이나 관리 대시보드의 명칭입니다."
  },
  {
    "id": 119,
    "title": "When moving multiple update sets at one time, what might you do to facilitate the move?",
    "options": [
      {
        "text": "Batch",
        "id": "A"
      },
      {
        "text": "Verify",
        "id": "B"
      },
      {
        "text": "Test",
        "id": "C"
      },
      {
        "text": "Preview",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트 일괄 처리(Batching)**는 관련 있는 여러 업데이트 세트를 부모-자식 관계(Parent-Child)로 묶어 한 번에 이동하고 미리보기(Preview) 및 커밋(Commit)할 수 있게 해주는 기능입니다.\n*   **이점**: 수십 개의 개별 세트를 순서대로 커밋해야 하는 번거로움을 줄이고, 세트 간의 의존성 충돌을 사전에 방지하여 배포의 안정성을 높입니다.\n*   **작동**: 부모 업데이트 세트를 커밋하면 연결된 모든 자식 세트의 변경 사항이 계층 구조에 맞춰 순차적으로 반영됩니다."
  },
  {
    "id": 120,
    "title": "What import utility do you use when the field names on the import set match the name of the fields on the Target table?",
    "options": [
      {
        "text": "Schema Mapping",
        "id": "A"
      },
      {
        "text": "Automatic Mapping",
        "id": "B"
      },
      {
        "text": "Mapping Assist",
        "id": "C"
      },
      {
        "text": "Mapping Dashboard",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**자동 매핑(Automatic Mapping / Auto Map Matching Fields)**은 소스(임포트 세트 테이블)의 컬럼명과 타겟 테이블의 필드명이 완벽히 일치할 때 시스템이 자동으로 연결 관계를 생성해 주는 도구입니다.\n*   **장점**: 매핑 어시스트(Mapping Assist)를 통한 수동 작업을 생략할 수 있어 대규모 데이터 임포트 시 생산성을 크게 높입니다.\n*   **주의**: 이름이 조금이라도 다르면 매핑되지 않으므로, 이 경우에는 수동으로 매핑을 보완해야 합니다."
  },
  {
    "id": 121,
    "title": "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
    "options": [
      {
        "text": "Select Data Source, Schedule Transform",
        "id": "A"
      },
      {
        "text": "Load Data, Create Transform Map, Run Transform",
        "id": "B"
      },
      {
        "text": "Define Data Source, Select Transform Map, Run Transform",
        "id": "C"
      },
      {
        "text": "Select Import Set, Select Transform Map, Run Transform",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "스프레드시트(Excel 등)로부터 데이터를 가져오는 표준 워크플로우는 다음과 같습니다.\n1.  **Load Data**: 파일을 업로드하여 **임포트 세트(Import Set)** 테이블을 생성하고 데이터를 적재합니다.\n2.  **Create/Select Transform Map**: 데이터가 들어갈 목적지와 변환 규칙을 정의합니다.\n3.  **Run Transform**: 정의된 맵을 실행하여 실제 운영 테이블로 데이터를 이동시킵니다.\n*   **데이터 무결성**: 이 과정에서 **Coalesce** 필드를 지정하여 데이터의 중복 생성을 방지(Update vs Insert)하는 것이 핵심입니다."
  },
  {
    "id": 122,
    "title": "Which tool should be used to populate commonly used fields in a form?",
    "options": [
      {
        "text": "Template",
        "id": "A"
      },
      {
        "text": "Reference Qualifier",
        "id": "B"
      },
      {
        "text": "Formatter",
        "id": "C"
      },
      {
        "text": "Assignment Rule",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**템플릿(Templates)**은 자주 사용되는 필드 값들의 집합을 미리 정의해 두어 데이터 입력의 효율성과 일관성을 높이는 도구입니다.\n*   **장점**: 반복적인 데이터 입력 시간을 단축하고, 수동 입력 시 발생할 수 있는 오류를 줄여 데이터 품질을 보장합니다.\n*   **사용법**: 사용자는 폼 헤더의 'More Options' 메뉴에서 템플릿 바를 활성화하여 적용할 수 있으며, 관리자는 특정 조건에 따라 템플릿이 자동으로 채워지도록 설정할 수도 있습니다."
  },
  {
    "id": 123,
    "title": "What is the purpose of the Filter navigator in the Application Navigator?",
    "options": [
      {
        "text": "Filter applications in order of use",
        "id": "A"
      },
      {
        "text": "Quickly navigate to applications and modules",
        "id": "B"
      },
      {
        "text": "Collapse and expand applications",
        "id": "C"
      },
      {
        "text": "List applications In order of Top Requests",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**필터 내비게이터(Filter Navigator)**는 사용자가 인스턴스의 방대한 메뉴 중 원하는 **애플리케이션**과 **모듈**로 빠르게 이동하도록 돕는 검색 상자입니다.\n*   **기능**: 입력한 텍스트에 따라 관련 메뉴를 즉시 필터링하여 보여 줍니다.\n*   **구분**: 애플리케이션을 접고 펼치는 동작은 필터 내비게이터가 아니라 내비게이터의 **Application** 아이콘 역할입니다."
  },
  {
    "id": 124,
    "title": "From a form, what would you click to add additional fields to the form? (Choose two.)",
    "options": [
      {
        "text": "Context Menu > Form > Layout",
        "id": "A"
      },
      {
        "text": "Context Menu > Configure > Form Layout",
        "id": "B"
      },
      {
        "text": "Context Menu > Configure > Form Design",
        "id": "C"
      },
      {
        "text": "Right click on header > Add > Field",
        "id": "D"
      },
      {
        "text": "Context Menu > Form > Designer",
        "id": "E"
      },
      {
        "text": "Right click on header > Configure > UX Dashboard",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "ServiceNow에서 폼에 필드를 추가하거나 배치하는 방법은 크게 두 가지 표준 경로가 있습니다.\n1.  **Form Layout (B)**: 'Configure > Form Layout'을 통해 슬러시버킷(Slushbucket) 인터페이스를 사용하여 필드를 추가/제거하고 순서를 조정합니다.\n2.  **헤더 우클릭 (D)**: 폼 헤더에서 컨텍스트 메뉴를 통해 설정을 변경할 수 있습니다.\n*   **추가 도구**: **Form Design**은 드래그 앤 드롭 방식의 시각적 인터페이스를 제공하여 섹션 및 필드 배치를 더욱 직관적으로 관리할 수 있게 합니다."
  },
  {
    "id": 125,
    "title": "What controls the publishing and retiring process for knowledge articles?",
    "options": [
      {
        "text": "Approval Policies",
        "id": "A"
      },
      {
        "text": "Approval Definitions",
        "id": "B"
      },
      {
        "text": "Workflow Designer",
        "id": "C"
      },
      {
        "text": "Workflows",
        "id": "D"
      },
      {
        "text": "State Lifecycle",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "지식 문서의 게시(Publishing) 및 은퇴(Retiring) 프로세스는 **워크플로우(Workflows)**에 의해 엄격히 통제됩니다.\n*   **거버넌스**: 각 지식 기반(Knowledge Base)은 비즈니스 요구사항에 따라 서로 다른 워크플로우를 가질 수 있습니다 (예: 즉시 게시 vs 관리자 승인 후 게시).\n*   **설계**: 이러한 비즈니스 프로세스 흐름을 시각적으로 설계하고 관리하는 도구가 **Workflow Designer** 또는 최신 환경의 **Flow Designer**입니다."
  },
  {
    "id": 126,
    "title": "A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed Incidents where Assignment Group is Network After clicking the Funnel icon, what should the user do?",
    "options": [
      {
        "text": "Define the first condition; click AND button; define second condition; click Run",
        "id": "A"
      },
      {
        "text": "Define the first condition; click AND button; define second condition; press enter",
        "id": "B"
      },
      {
        "text": "Define the first condition; click OR button; define second condition; press enter",
        "id": "C"
      },
      {
        "text": "Define the first condition; click > icon on breadcrumb, define second condition; click Run",
        "id": "D"
      },
      {
        "text": "Define the first condition; click > icon on breadcrumb, define second condition; press enter",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 리스트의 **조건 빌더(Condition Builder)**는 논리 연산자를 사용하여 데이터를 정밀하게 필터링합니다.\n*   **AND 연산자**: 설정된 모든 조건을 동시에 만족하는 레코드만 결과에 포함합니다 (교집합).\n*   **OR 연산자**: 설정된 조건 중 하나라도 만족하는 레코드를 결과에 포함합니다 (합집합).\n*   **실행**: 조건을 모두 정의한 후 반드시 **Run** 버튼을 클릭하거나 Enter를 눌러야 필터가 데이터베이스에 적용됩니다."
  },
  {
    "id": 127,
    "title": "Which of the following statements describes how data is organized in a table?",
    "options": [
      {
        "text": "A column is a field in the database and a record is one user",
        "id": "A"
      },
      {
        "text": "A column is one field and a record is one row",
        "id": "B"
      },
      {
        "text": "A column is one field and a record is one column",
        "id": "C"
      },
      {
        "text": "A column contains data from one user and a record is one set of fields",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow의 데이터 아키텍처는 전통적인 관계형 데이터베이스(RDBMS)의 논리적 구조를 따릅니다.\n*   **필드(Field/Column)**: 테이블의 수직적 요소로, 데이터의 개별 속성(속성명, 데이터 타입 등)을 정의합니다.\n*   **레코드(Record/Row)**: 테이블의 수직적 요소로, 특정 엔티티(예: 특정 인시던트 한 건)에 대한 모든 필드 값들의 집합을 의미합니다.\n*   **비유**: 엑셀 시트에서 '열'은 필드이고, '행'은 레코드입니다."
  },
  {
    "id": 128,
    "title": "Which plugin allows users to install multiple applications, application customizations, or plugins at once?",
    "options": [
      {
        "text": "Application Integration and Plugin Delivery (A1PD) SpokeBatch Install",
        "id": "A"
      },
      {
        "text": "Continuous Integration and Continuous Delivery (CICD) SpokeBatch Install",
        "id": "B"
      },
      {
        "text": "Multiple Integration and Process Delivery (MIPD) SpokeBatch Install",
        "id": "C"
      },
      {
        "text": "Quick Integration and Multiple Delivery (QIMD) SpokeBatch Install",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**CICD SpokeBatch Install**은 개발 및 운영 효율성을 높이기 위해 설계된 도구입니다.\n*   **일괄 처리**: 여러 개의 애플리케이션, 플러그인, 또는 애플리케이션 커스터마이징 패키지를 하나의 작업 세트로 묶어 한 번에 설치할 수 있게 해줍니다.\n*   **활용**: 대규모 플랫폼 업데이트나 신규 인스턴스 환경 구축 시 개별 설치에 소요되는 시간을 대폭 단축하고 설치 누락을 방지합니다."
  },
  {
    "id": 129,
    "title": "Which one of the following is an accurate list of changes that are captured in an Update Set?",
    "options": [
      {
        "text": "Changes made to tables, forms, schedules, and client scripts",
        "id": "A"
      },
      {
        "text": "Changes made to tables, forms, views, and fields",
        "id": "B"
      },
      {
        "text": "Changes made to: tables, forms. Business Rules, and data records",
        "id": "C"
      },
      {
        "text": "Changes made to: tables. forms groups, and configuration items (Cls)",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트(Update Sets)**는 인스턴스 간에 **구성(Configuration)** 변경 사항을 이동시키는 그릇입니다.\n*   **캡처 대상**: 테이블 정의, 폼 레이아웃, 필드 설정, 비즈니스 규칙, 클라이언트 스크립트, 워크플로우 등 시스템의 '동작 방식'을 결정하는 설정 데이터입니다.\n*   **제외 대상 (주의)**: 인시던트, 사용자, 그룹, 자산 레코드 등 실제 업무 수행 결과로 쌓이는 **데이터(Data)**는 절대 자동으로 캡처되지 않습니다."
  },
  {
    "id": 130,
    "title": "A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of \"INC\" to the company standard IN.\" What are the next steps to be taken''",
    "options": [
      {
        "text": "Go to the Number Maintenance application and change the prefix to \"IN\" for incident",
        "id": "A"
      },
      {
        "text": "Create a Business Rule that modifies the prefix before the Insert operation",
        "id": "B"
      },
      {
        "text": "The prefix of an incident cannot be changed because it is a built-in feature",
        "id": "C"
      },
      {
        "text": "Submit a Change Request to ServiceNow Technical Support",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Number Maintenance (번호 유지 관리)** 모듈은 인스턴스 내 모든 레코드의 고유 번호 체계를 관리하는 중앙 허브입니다.\n*   **접두사(Prefix)**: 'INC'를 'IN'으로 변경하면 이후 생성되는 레코드는 자동으로 새 접두사를 부여받습니다.\n*   **일관성**: 시스템이 직접 다음 번호를 계산하고 할당하므로 번호 중복이나 누락을 원천적으로 방지합니다.\n*   **범위**: 테이블별로 시작 번호, 번호 길이, 접두사를 독립적으로 설정할 수 있습니다."
  },
  {
    "id": 131,
    "title": "Which tool is used to define relationships between fields in an import set table and a target table?",
    "options": [
      {
        "text": "Transform Schema",
        "id": "A"
      },
      {
        "text": "Schema Map",
        "id": "B"
      },
      {
        "text": "Dictionary Map",
        "id": "C"
      },
      {
        "text": "Transform Map",
        "id": "D"
      },
      {
        "text": "Field Transformer",
        "id": "E"
      },
      {
        "text": "Import Designer",
        "id": "F"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**변환 맵(Transform Map)**은 외부 데이터(Import Set Table)가 ServiceNow 내부의 실제 운영 테이블로 들어가는 경로를 정의하는 '지도' 역할을 합니다.\n*   **필드 매핑**: 소스 데이터의 'First Name' 컬럼을 타겟 테이블의 'first_name' 필드로 연결하는 등의 규칙을 설정합니다.\n*   **데이터 변환**: 단순히 데이터를 옮기는 것 외에도, 스크립트를 통해 데이터를 가공하거나 **Coalesce** 설정을 통해 중복 업데이트 여부를 결정하는 핵심 로직을 담당합니다."
  },
  {
    "id": 132,
    "title": "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    "options": [
      {
        "text": "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.",
        "id": "A"
      },
      {
        "text": "The manager does not have the itil role.",
        "id": "B"
      },
      {
        "text": "The manager is not a member of the Service Desk group.",
        "id": "C"
      },
      {
        "text": "The manager is not a member of the Network and Hardware groups.",
        "id": "D"
      },
      {
        "text": "The Assignment Group manager field is empty.",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow의 **My Groups Work** 모듈은 로그인한 사용자가 실제로 멤버로 등록된 그룹에 할당된 작업들을 필터링하여 보여줍니다.\n*   **원인**: IT 매니저라 할지라도 해당 그룹(`sys_user_group`)의 멤버 리스트에 포함되어 있지 않다면, 시스템은 해당 사용자를 그룹의 일원으로 인식하지 않아 목록에 아무것도 표시하지 않습니다.\n*   **해결**: 관리자는 매니저를 해당 'Network' 및 'Hardware' 그룹의 멤버로 추가하여 가시성을 확보해야 합니다."
  },
  {
    "id": 133,
    "title": "Which of the following are not included in an Update Set, by default? (Choose four.)",
    "options": [
      {
        "text": "Homepages",
        "id": "A"
      },
      {
        "text": "Data",
        "id": "B"
      },
      {
        "text": "Published Workflows",
        "id": "C"
      },
      {
        "text": "Business Rules",
        "id": "D"
      },
      {
        "text": "Schedules",
        "id": "E"
      },
      {
        "text": "Database changes",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "explanation": "**업데이트 세트(Update Sets)**는 시스템의 '동작 방식'을 결정하는 **구성(Configuration)** 변경 사항을 캡처하며, '업무 결과'인 **데이터(Data)**는 캡처하지 않습니다.\n*   **기본 제외 항목**: \n    1. **Data (B)**: 인시던트, 사용자, 그룹 레코드 등.\n    2. **Homepages (A)**: 대시보드나 홈페이즈는 수동으로 추가하거나 별도 내보내기가 필요합니다.\n    3. **Schedules (E)**: 운영 데이터로 분류됩니다.\n    4. **Database Changes (F)**: 직접적인 DB 스키마 변경이 아닌 데이터 행(Row)의 변화.\n*   **포함 항목**: 테이블 정의, 워크플로우(C), 비즈니스 규칙(D), 클라이언트 스크립트 등."
  },
  {
    "id": 134,
    "title": "How can administrators utilize the same content for different notification channels?",
    "options": [
      {
        "text": "Configure Default notification content",
        "id": "A"
      },
      {
        "text": "Enable Actionable notification content",
        "id": "B"
      },
      {
        "text": "Provide Common notification content",
        "id": "C"
      },
      {
        "text": "Set up Related notification content",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**Common notification content** 기능을 사용하면 하나의 메시지 원본을 정의하고 이를 이메일, 모바일 푸시, SMS 등 다양한 알림 채널에서 재사용할 수 있습니다.\n*   **장점**: 알림 내용이 변경될 때 각 채널마다 일일이 수정할 필요 없이 공통 콘텐츠만 업데이트하면 되므로 관리 효율성이 비약적으로 향상됩니다.\n*   **일관성**: 모든 채널을 통해 사용자에게 전달되는 정보의 일관성을 보장합니다."
  },
  {
    "id": 135,
    "title": "Which one of the following statements is true?",
    "options": [
      {
        "text": "When an incident form is saved, all the Work Notes field text is recorded to the Activity Log field",
        "id": "A"
      },
      {
        "text": "When an incident form is saved, the Work Notes field text is overwritten each time work is logged against",
        "id": "B"
      },
      {
        "text": "When an incident form is saved, the impact field is calculated by adding the Priority and Urgency values",
        "id": "C"
      },
      {
        "text": "When an Incident form is saved, the Additional Comments field text is cleared and recorded to the Work",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow에서 **저널 필드(Journal Fields)**인 'Additional Comments'와 'Work Notes'는 일반 텍스트 필드와 다르게 작동합니다.\n*   **데이터 처리**: 사용자가 내용을 입력하고 레코드를 저장(Save/Update)하면, 입력된 텍스트는 즉시 **활동 로그(Activity Log)**로 이동하여 영구 기록됩니다.\n*   **UI 동작**: 저장이 완료됨과 동시에 입력 창은 다음 입력을 위해 깨끗이 비워집니다.\n*   **보관**: 이 데이터들은 실제로는 `sys_journal_field` 테이블에 저장되어 관리됩니다."
  },
  {
    "id": 136,
    "title": "When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)",
    "options": [
      {
        "text": "Make sure the latest flows are activated.",
        "id": "A"
      },
      {
        "text": "Use the instance Incognito setting to quickly toggle between requester and approver.",
        "id": "B"
      },
      {
        "text": "Impersonate the requester to ensure the form works.",
        "id": "C"
      },
      {
        "text": "Make sure the requester's user record has a manager specified.",
        "id": "D"
      },
      {
        "text": "Create and select your Testing Update Set, before starting the test cases.",
        "id": "E"
      },
      {
        "text": "Use your Admin account, so you can approve the items quickly.",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "카탈로그 항목의 이행(Fulfillment) 프로세스를 테스트할 때는 실제 사용자 환경을 완벽히 재현해야 합니다.\n1.  **최신 플로우 활성화 (A)**: 수정사항이 반영된 최신 버전의 플로우나 워크플로우가 게시(Published) 상태인지 확인합니다.\n2.  **요청자 가장 (C)**: `Impersonate`를 통해 일반 사용자의 시각에서 폼의 가시성과 접근 권한을 검증합니다.\n3.  **데이터 무결성 확인 (D)**: 승인 로직이 작동하려면 요청자의 사용자 레코드에 'Manager' 필드가 올바르게 채워져 있어야 합니다.\n*   **주의**: 테스트 완료 전까지는 운영 인스턴스가 아닌 개발/테스트 인스턴스에서 수행하는 것이 원칙입니다."
  },
  {
    "id": 137,
    "title": "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    "options": [
      {
        "text": "Task Escalation Clock",
        "id": "A"
      },
      {
        "text": "Service Level Agreements",
        "id": "B"
      },
      {
        "text": "Inactivity Monitor",
        "id": "C"
      },
      {
        "text": "Response Time Clock",
        "id": "D"
      },
      {
        "text": "Business Time Remaining",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**서비스 수준 계약(SLA, Service Level Agreements)**은 특정 태스크(인시던트 등)가 약속된 시간 내에 처리되는지 측정하고 모니터링하는 핵심 도구입니다.\n*   **작동 방식**: 태스크의 상태에 따라 **Start, Pause, Stop** 조건이 트리거되어 경과 시간을 계산합니다.\n*   **가시성**: SLA가 할당되면 태스크 폼 하단에 관련 리스트로 표시되어, 담당자가 남은 시간과 목표 달성 여부를 실시간으로 파악할 수 있게 합니다."
  },
  {
    "id": 138,
    "title": "What is the name of the table relationship, where two or more tables are related in a bi- directional relationship, so that the related records are visible from both tables in a related list?",
    "options": [
      {
        "text": "Database View",
        "id": "A"
      },
      {
        "text": "Many to Many",
        "id": "B"
      },
      {
        "text": "One to Many",
        "id": "C"
      },
      {
        "text": "Extended",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**다대다(Many-to-Many, M2M)** 관계는 한 테이블의 여러 레코드가 다른 테이블의 여러 레코드와 동시에 연결될 수 있는 구조입니다.\n*   **시각화**: 이 관계가 설정되면 양쪽 테이블의 폼 모두에서 서로를 **관련 리스트(Related List)**로 조회할 수 있습니다.\n*   **기술적 구현**: 두 테이블을 연결하기 위해 내부적으로 '교차 테이블(Junction/Relationship Table)'을 생성하여 관계 정보를 저장합니다.\n*   **예시**: '사용자(Users)'와 '그룹(Groups)'의 관계 (한 명은 여러 그룹에, 한 그룹은 여러 사용자를 가짐)."
  },
  {
    "id": 139,
    "title": "What ServiceNow tables can Administrators define as \"destinations\" for imported data, when using Transform Maps in the System Import Sets application?",
    "options": [
      {
        "text": "The Task table is the only table that can be a destination for imported data in the Transform Map module",
        "id": "A"
      },
      {
        "text": "The Incident. Problem. Change, Task, and Service Catalog tables are the only tables that can be a",
        "id": "B"
      },
      {
        "text": "Only the Incident Problem, and Change tables can be a destination for imported data in the Transform",
        "id": "C"
      },
      {
        "text": "Any ServiceNow table can be a destination for imported data in the Transform Map module",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**Transform Map**은 Import Set Table의 데이터를 ServiceNow의 실제 대상 테이블로 변환하는 규칙 집합입니다.\n*   **원칙**: 대상은 특정 표준 테이블로 제한되지 않고, 플랫폼에서 사용할 수 있는 **대부분의 ServiceNow 테이블**이 될 수 있습니다.\n*   **핵심**: 소스 필드를 타깃 필드에 매핑하고, 필요하면 스크립트와 coalesce로 update/insert 동작까지 제어합니다.\n*   **문항 메모**: 보기 B는 일부 핵심 업무 테이블을 나열한 불완전한 보기이고, 정답 의도는 더 일반적인 `Any ServiceNow table`인 D에 가깝습니다."
  },
  {
    "id": 140,
    "title": "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
    "options": [
      {
        "text": "Flow Manager",
        "id": "A"
      },
      {
        "text": "Flow Designer",
        "id": "B"
      },
      {
        "text": "Flow Editor",
        "id": "C"
      },
      {
        "text": "Workflow Editor",
        "id": "D"
      },
      {
        "text": "Workflow Designer",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**Flow Designer**는 기술적 지식이 적은 사용자도 비즈니스 프로세스를 오케스트레이션할 수 있게 해 주는 차세대 자동화 도구입니다.\n*   **개념**: 자연어 기반 인터페이스로 조건과 액션을 순서대로 연결해 자동화를 구성합니다.\n*   **구분**: `Flow Editor`는 표준 제품명으로 보기 어렵고, 이 문항의 의도는 `Flow Designer`를 묻는 것입니다."
  },
  {
    "id": 141,
    "title": "A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?",
    "options": [
      {
        "text": "Specify the Dept_Mgr role on the catalog content block",
        "id": "A"
      },
      {
        "text": "Add the Department Manager group to the catalog item's user criteria",
        "id": "B"
      },
      {
        "text": "Add the Department Manager group to the catalog item's ACL",
        "id": "C"
      },
      {
        "text": "Only publish the item in the HR service catalog",
        "id": "D"
      },
      {
        "text": "Use a Dept_Mgr ACL on the HR service catalog",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "서비스 카탈로그 항목(Catalog Item)의 가시성을 특정 부서나 직책으로 제한할 때 사용하는 가장 표준적인 방법은 **사용자 기준(User Criteria)**입니다.\n*   **HR 부서 매니저만 허용**: 'HR 부서'와 '매니저 역할'을 포함하는 그룹을 생성하거나 조건을 정의하여 해당 항목의 `Available For` 관련 리스트에 추가합니다.\n*   **보안 및 거버넌스**: User Criteria는 별도의 스크립팅 없이도 복잡한 접근 제어 로직을 구현할 수 있게 하며, 카탈로그뿐만 아니라 지식 문서(Knowledge) 접근 제어에도 동일하게 사용되는 핵심 보안 메커니즘입니다."
  },
  {
    "id": 142,
    "title": "What is NOT an example of a UI Action?",
    "options": [
      {
        "text": "Search",
        "id": "A"
      },
      {
        "text": "Form buttons",
        "id": "B"
      },
      {
        "text": "list Buttons",
        "id": "C"
      },
      {
        "text": "Related Links",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**UI Action (UI 액션)**은 폼 버튼, 리스트 버튼, 관련 링크, 컨텍스트 메뉴처럼 클릭해서 동작을 실행하는 UI 요소입니다.\n*   **대표 예시**: Form buttons(B), list buttons(C), Related Links(D)처럼 사용자가 직접 실행하는 항목입니다.\n*   **오답 포인트**: `Search(A)`는 UI Action이 아니라 전역 검색 기능이므로 이 문항의 정답입니다."
  },
  {
    "id": 143,
    "title": "What function do you use to add buttons, links, and context menu items on forms and lists?",
    "options": [
      {
        "text": "UI Policies",
        "id": "A"
      },
      {
        "text": "UI Settings",
        "id": "B"
      },
      {
        "text": "UI Actions",
        "id": "C"
      },
      {
        "text": "UI Config",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**UI 액션(UI Actions)**은 폼과 리스트 상에서 버튼, 링크, 또는 우클릭 메뉴 항목을 통해 비즈니스 로직을 실행할 수 있게 해주는 유연한 도구입니다.\n*   **제공 위치**: 폼 상단/하단 버튼, 폼 관련 링크, 리스트 하단 버튼, 리스트 컨텍스트 메뉴 등.\n*   **실행 시점**: 클라이언트 측(브라우저)에서 즉시 실행되어 화면을 제어하거나, 서버 측(데이터베이스)으로 요청을 보내 복잡한 데이터를 업데이트할 수 있습니다."
  },
  {
    "id": 144,
    "title": "Where in Flow Designer can users access information about actions that are added to the flow?",
    "options": [
      {
        "text": "Virtual Agent Help",
        "id": "A"
      },
      {
        "text": "Local Action Help",
        "id": "B"
      },
      {
        "text": "Help Panel",
        "id": "C"
      },
      {
        "text": "Flow Assistant",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)** 내의 **도움말 패널(Help Panel)**은 사용자가 플로우를 설계하는 도중에 즉각적인 가이드를 제공하는 내장 리소스입니다.\n*   **기능**: 추가된 각 액션(Actions)의 목적, 입력(Inputs) 및 출력(Outputs) 데이터 필드에 대한 상세 설명, 그리고 활용 예시를 제공합니다.\n*   **접근**: 화면 우측 상단의 물음표(?) 아이콘을 통해 활성화하며, 현재 선택된 액션의 문맥에 맞는 정보를 실시간으로 시각화하여 설계를 돕습니다."
  },
  {
    "id": 145,
    "title": "Which plugin needs to be activated in order to translate the content of a catalog item to multiple languages?",
    "options": [
      {
        "text": "Localization Framework plugin (com.glide.localization_framework)",
        "id": "A"
      },
      {
        "text": "Translation Framework plugin (com.glide.translation_framework)",
        "id": "B"
      },
      {
        "text": "Multiple Language Framework plugin (com.glide.multiple.language_framework)",
        "id": "C"
      },
      {
        "text": "Language AI Framework plugin (com.glide.language.ai_framework)",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Localization Framework**는 서비스 카탈로그 항목, 포털 콘텐츠, 변수 등을 여러 언어로 효율적으로 번역하고 관리하기 위한 전용 프레임워크입니다.\n*   **작동 방식**: 번역 요청 워크플로우를 자동화하고, 번역된 텍스트가 인스턴스 전반의 UI에서 언어 설정에 맞춰 올바르게 렌더링되도록 보장합니다.\n*   **엔터프라이즈 환경**: 다국적 기업에서 단일 인스턴스를 운영하며 각 국가별 사용자에게 현지화된 경험을 제공해야 할 때 핵심적인 아키텍처 요소가 됩니다."
  },
  {
    "id": 146,
    "title": "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
    "options": [
      {
        "text": "Incident.Major_Incident",
        "id": "A"
      },
      {
        "text": "incident=>major_incident",
        "id": "B"
      },
      {
        "text": "incident<=>major_incident",
        "id": "C"
      },
      {
        "text": "incident||major_incident",
        "id": "D"
      },
      {
        "text": "incident.major_incident",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "ServiceNow의 **접근 제어(ACL)** 명명 규칙에서 특정 테이블의 특정 필드를 명시할 때는 **`[테이블명].[필드명]`** 형식을 사용합니다.\n*   **객체 식별**: `incident.major_incident`는 인시던트 테이블의 Major Incident 필드에만 적용되는 전용 보안 규칙임을 의미합니다.\n*   **평가 계층**: 시스템 보안 가드레일에 따라 필드 수준 ACL이 작동하기 위해서는, 먼저 해당 테이블 전체에 대한 접근 권한(예: `incident.None` 또는 `incident.*`)이 허용되어야 합니다."
  },
  {
    "id": 147,
    "title": "ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?",
    "options": [
      {
        "text": "Common Services Data Model (CSDM)",
        "id": "A"
      },
      {
        "text": "Information Technology Service Management (ITSM)",
        "id": "B"
      },
      {
        "text": "Configuration Management Database (CMDB)",
        "id": "C"
      },
      {
        "text": "Information Technology Infrastructure Library (ITIL)",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**CSDM (Common Services Data Model)**은 ServiceNow 플랫폼 전반에서 서비스 관련 정의와 CMDB 데이터 구조를 일관되게 유지하기 위한 표준 프레임워크입니다.\n*   **비즈니스 가치**: 제품군 간 데이터 사일로를 제거하고 표준화된 공유 데이터 모델을 제공하여, 진정한 의미의 서비스 레벨 보고(Service Level Reporting)를 지원합니다.\n*   **구성 전략**: 기술적 구성 항목(CI)을 비즈니스 서비스 오퍼링과 연결하는 명확한 로드맵을 제시함으로써 기업의 디지털 전환을 가속화합니다."
  },
  {
    "id": 148,
    "title": "What is specified in an Access Control rule?",
    "options": [
      {
        "text": "Groups, Conditional Expressions and Workflows",
        "id": "A"
      },
      {
        "text": "Table Schema, CRUD, and User Authentication",
        "id": "B"
      },
      {
        "text": "Object and Operation being secured; Permissions required to access the object",
        "id": "C"
      },
      {
        "text": "security_admin",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**접근 제어(ACL, Access Control List)** 규칙은 데이터베이스 보안을 위해 다음 세 가지 핵심 요소를 선언적으로 정의합니다.\n1.  **Object (객체)**: 보안을 적용할 대상 (테이블이나 개별 필드).\n2.  **Operation (작업)**: 허용 또는 차단할 행위 (조회, 생성, 수정, 삭제 등).\n3.  **Permissions (권한)**: 해당 작업을 수행하기 위해 통과해야 하는 조건 (역할 보유, 특정 필드 값 조건, 또는 JavaScript 로직).\n*   **보안 철학**: 시스템은 명시적으로 허용된 규칙이 없는 경우 모든 접근을 기본적으로 차단하는 '최소 권한 접근' 방식을 따릅니다."
  },
  {
    "id": 149,
    "title": "As it reveals to IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    "options": [
      {
        "text": "Knowledge",
        "id": "A"
      },
      {
        "text": "ServiceNow Wiki",
        "id": "B"
      },
      {
        "text": "Knowledge Now",
        "id": "C"
      },
      {
        "text": "SharePoint",
        "id": "D"
      },
      {
        "text": "Stack Overflow",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**지식 관리(Knowledge Management)** 인터페이스는 조직 내 IT 부서가 보유한 기술 문서, FAQ, 트러블슈팅 가이드 등을 체계적으로 검색하고 열람할 수 있는 중앙 허브입니다.\n*   **콘텐츠**: 해결 스크립트, 설치 가이드 등 실무에 필요한 정형/비정형 데이터가 포함됩니다.\n*   **구조**: 지식 기반(Knowledge Base)과 계층적 카테고리(Category)로 조직화되어 있어, 사용자가 키워드 검색뿐만 아니라 주제별로 정보를 신속하게 탐색(Browse)할 수 있게 돕습니다."
  },
  {
    "id": 150,
    "title": "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    "options": [
      {
        "text": "Process Automation > Flow Designer",
        "id": "A"
      },
      {
        "text": "Process Automation > Flow Administration",
        "id": "B"
      },
      {
        "text": "Process Automation > Workflow Editor",
        "id": "C"
      },
      {
        "text": "Process Automation > Process Flow",
        "id": "D"
      },
      {
        "text": "Process Automation > Active Flows",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**는 비즈니스 프로세스 소유자가 승인, 작업 생성, 알림 등의 복잡한 로직을 시각적이고 직관적으로 자동화할 수 있게 해주는 차세대 플랫폼 도구입니다.\n*   **접근 경로**: `Process Automation > Flow Designer` 모듈을 통해 인터페이스에 진입합니다.\n*   **현대화**: 레거시 워크플로우 엔진보다 유지보수가 쉽고, 재사용 가능한 **Spoke**를 통해 외부 시스템과의 연동을 로코드(Low-code) 환경에서 신속하게 구현할 수 있도록 지원합니다."
  },
  {
    "id": 151,
    "title": "What field contains a record's 32-character, unique identifier?",
    "options": [
      {
        "text": "sn_rec_id",
        "id": "A"
      },
      {
        "text": "rec_id",
        "id": "B"
      },
      {
        "text": "u_id",
        "id": "C"
      },
      {
        "text": "sys_id",
        "id": "D"
      },
      {
        "text": "sn_gu_id",
        "id": "E"
      },
      {
        "text": "sn_sys_id",
        "id": "F"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow의 모든 테이블 레코드는 **`sys_id`**라는 고유한 32자의 16진수 GUID(Globally Unique Identifier)를 가집니다.\n*   **기본 키(Primary Key)**: 이 값은 레코드가 생성되는 시점에 시스템에 의해 자동으로 부여되며, 인스턴스 전체에서 해당 레코드를 유일하게 식별하는 기준이 됩니다.\n*   **활용**: URL 주소 구성, 참조(Reference) 필드에서의 연결, 그리고 스크립팅 및 API 통신 시 특정 객체를 정확히 지칭하기 위해 사용됩니다.\n*   **불변성**: 한 번 생성된 `sys_id`는 레코드의 수명이 다할 때까지 절대 변하지 않습니다."
  },
  {
    "id": 152,
    "title": "Which of the following is used to categorize, flag, and locate records?",
    "options": [
      {
        "text": "Search",
        "id": "A"
      },
      {
        "text": "Favorites",
        "id": "B"
      },
      {
        "text": "Tags",
        "id": "C"
      },
      {
        "text": "Bookmarks",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**태그(Tags)**는 사용자가 레코드를 논리적으로 분류하고, 나중에 쉽게 검색하거나 추적할 수 있도록 돕는 유연한 도구입니다.\n*   **가시성 범위**: 태그는 개인용(Private)으로 사용하거나, 특정 그룹 또는 전체 사용자(Everyone)와 공유하도록 설정할 수 있어 협업 효율성을 높입니다.\n*   **사용자 경험**: 별도의 필드 생성 없이도 사용자가 즉석에서 키워드를 부여할 수 있으며, 내비게이션 바의 'Tags' 메뉴를 통해 해당 태그가 붙은 모든 테이블의 레코드를 한눈에 모아볼 수 있습니다."
  },
  {
    "id": 153,
    "title": "What is a sys_id?",
    "options": [
      {
        "text": "Unique 32-character identifier that is assigned to every record",
        "id": "A"
      },
      {
        "text": "A client-side Business Rule",
        "id": "B"
      },
      {
        "text": "A server-side Business Rule",
        "id": "C"
      },
      {
        "text": "Unique 64-character identifier that is assigned to every record",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**`sys_id`**는 ServiceNow 플랫폼 데이터베이스 아키텍처의 핵심 식별자입니다.\n*   **구성**: 32글자의 16진수 문자열로 이루어진 GUID입니다.\n*   **범위**: 단일 인스턴스 내뿐만 아니라, 이론적으로 전 세계 모든 ServiceNow 인스턴스 간에도 중복되지 않도록 설계되어 데이터 무결성을 보장합니다.\n*   **참조 필드**: 두 테이블이 연결될 때(Reference field), 내부적으로는 대상 레코드의 이 `sys_id` 값을 저장하여 관계를 맺습니다."
  },
  {
    "id": 154,
    "title": "New records, new groups, and modified configuration Items (Cls): what do they have in common?",
    "options": [
      {
        "text": "They are included in an Update Set",
        "id": "A"
      },
      {
        "text": "They are not captured in an Update Set",
        "id": "B"
      },
      {
        "text": "They are customizations",
        "id": "C"
      },
      {
        "text": "They do not have anything in common",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "(주의: 일반적인 모범 사례와 달리 본 문항의 정답 키는 A로 되어 있습니다.)\n*   **플랫폼 원칙**: 원래 **업데이트 세트(Update Sets)**는 시스템의 '동작 방식'을 결정하는 **구성(Configuration)** 변경 사항을 캡처하며, 인시던트나 사용자 같은 **데이터(Data)** 레코드는 캡처하지 않습니다.\n*   **해석**: 본 문항은 시스템 관리자가 새 그룹을 정의하거나 CI 구조를 변경하는 작업을 '플랫폼 커스터마이징' 활동의 일환으로 보고, 이를 업데이트 세트로 이동시킬 수 있다는 맥락에서 정답을 제시한 것으로 풀이됩니다.\n*   **실무 팁**: 일반적인 업무 데이터와 구성 데이터를 명확히 구분하는 것이 중요합니다."
  },
  {
    "id": 155,
    "title": "What do you call any component that needs to be managed in order to deliver services?",
    "options": [
      {
        "text": "CSDM Items",
        "id": "A"
      },
      {
        "text": "CMDB",
        "id": "B"
      },
      {
        "text": "Configuration item",
        "id": "C"
      },
      {
        "text": "Service Offerings",
        "id": "D"
      },
      {
        "text": "Asset",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**구성 항목(CI, Configuration Item)**은 IT 서비스를 안정적으로 제공하기 위해 관리하고 추적해야 하는 모든 유·무형의 자산을 의미합니다.\n*   **범위**: 하드웨어(서버, 라우터)뿐만 아니라 소프트웨어 라이선스, 설계 문서, 그리고 비즈니스 서비스 오퍼링 자체도 CI가 될 수 있습니다.\n*   **저장소**: 모든 CI 정보와 그들 간의 의존 관계는 **CMDB(Configuration Management Database)**에 체계적으로 저장되어 관리됩니다."
  },
  {
    "id": 156,
    "title": "When designing a flow, how do you reference data from a record, in that flow?",
    "options": [
      {
        "text": "Drag the table icon onto the flow definition",
        "id": "A"
      },
      {
        "text": "Use the condition builder to specify the desired values",
        "id": "B"
      },
      {
        "text": "Specify the source table on the data pill related list",
        "id": "C"
      },
      {
        "text": "Drag the data pill onto the flow definition",
        "id": "D"
      },
      {
        "text": "Add the table reference using the slush bucket",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**에서 이전 단계나 트리거에서 발생한 데이터를 참조할 때는 **데이터 알약(Data Pill)** 기술을 사용합니다.\n*   **작동 방식**: 우측의 데이터 패널에서 필요한 데이터 요소(Data Pill)를 마우스로 드래그하여 현재 구성 중인 액션의 입력 필드에 가져다 놓습니다.\n*   **장점**: 복잡한 스크립트 변수 참조 없이도 시각적으로 데이터를 연결할 수 있으며, 플로우 실행 시점에 실제 레코드의 값이 동적으로 매핑됩니다."
  },
  {
    "id": 157,
    "title": "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?",
    "options": [
      {
        "text": "System Notification > Email > Notifications",
        "id": "A"
      },
      {
        "text": "Administration > Notification Overview",
        "id": "B"
      },
      {
        "text": "System Properties > Email > Settings",
        "id": "C"
      },
      {
        "text": "User Preferences > Email > Notifications",
        "id": "D"
      },
      {
        "text": "Click Gear > Notifications > New",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "사용자와 시스템 간의 원활한 소통을 위한 알림 설정은 **`System Notification > Email > Notifications`** 모듈에서 관리합니다.\n*   **설정 3요소**:\n    1. **When to send**: 어떤 이벤트나 조건이 발생했을 때 보낼 것인가?\n    2. **Who will receive**: 수신자는 누구인가? (특정 사용자, 그룹 또는 참조 필드 기반).\n    3. **What it says**: 어떤 내용(제목, 본문)을 전달할 것인가?\n*   **템플릿**: 알림 내용은 **Email Template**을 사용하여 표준화된 양식으로 제작할 수 있습니다."
  },
  {
    "id": 158,
    "title": "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
    "options": [
      {
        "text": "Before, After, Async, Display",
        "id": "A"
      },
      {
        "text": "Prior to, Synchronous, on Update",
        "id": "B"
      },
      {
        "text": "Insert, Update, Delete, Query",
        "id": "C"
      },
      {
        "text": "Before, Synchronous, Scheduled Job, View",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**비즈니스 규칙(Business Rule)**의 실행 시점(`When`)은 처리하려는 로직의 성격에 따라 신중히 결정해야 합니다.\n1.  **Before**: 데이터베이스에 저장되기 직전에 실행. (예: 데이터 유효성 검사, 필드 값 자동 계산).\n2.  **After**: 데이터베이스 저장이 완료된 직후 실행. (예: 연관된 다른 테이블 레코드 업데이트).\n3.  **Async**: 저장은 완료하되, 무거운 로직은 백그라운드에서 별도로 처리. (성능 최적화에 유리).\n4.  **Display**: 사용자가 레코드를 열어 폼이 표시되기 직전에 실행. (서버의 데이터를 클라이언트 브라우저로 전달할 때 사용)."
  },
  {
    "id": 159,
    "title": "What do you activate when you want to add applications or functionality within your development instance?",
    "options": [
      {
        "text": "App Package",
        "id": "A"
      },
      {
        "text": "Updated Pack",
        "id": "B"
      },
      {
        "text": "Patch",
        "id": "C"
      },
      {
        "text": "Plugin",
        "id": "D"
      },
      {
        "text": "App Updated Set",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**플러그인(Plugins)**은 ServiceNow 인스턴스에 특정 애플리케이션이나 추가 기능을 모듈식으로 설치하고 활성화할 수 있게 해주는 소프트웨어 패키지입니다.\n*   **특징**: 플랫폼의 핵심 기능 외에 ITSM, ITOM, HR 등 도메인별 전문 기능을 추가할 때 사용합니다.\n*   **관리**: 'System Definition > Plugins' 모듈에서 관리하며, 일부 플러그인은 ServiceNow Store를 통해 배포되거나 운영 인스턴스 반영을 위해 ServiceNow 지원팀(HI)에 요청이 필요할 수 있습니다.\n*   **주의**: 한 번 활성화된 플러그인은 일반적으로 비활성화(Disable)할 수 없으며, 필요하지 않은 경우 '숨김' 처리를 해야 하므로 개발 인스턴스에서 먼저 검증하는 것이 필수적입니다."
  },
  {
    "id": 160,
    "title": "What is a no-code approach to control the mandatory or read-only state of a form field?",
    "options": [
      {
        "text": "UI Action",
        "id": "A"
      },
      {
        "text": "Client Script",
        "id": "B"
      },
      {
        "text": "UI Script",
        "id": "C"
      },
      {
        "text": "UI Rule",
        "id": "D"
      },
      {
        "text": "UI Policy",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "**UI 정책(UI Policy)**은 폼의 필드 속성(필수, 읽기 전용, 표시 여부)을 제어하기 위한 가장 대표적인 **노코드(No-code)** 접근 방식입니다.\n*   **장점**: JavaScript 코드를 작성하지 않고도 조건 빌더(Condition Builder)를 통해 비즈니스 로직을 설정할 수 있어 유지보수가 쉽습니다.\n*   **클라이언트 측 실행**: 브라우저에서 실시간으로 작동하여 사용자에게 즉각적인 피드백을 제공합니다.\n*   **비교**: 클라이언트 스크립트(Client Script)는 더 복잡한 로직이 가능하지만 코딩이 필요하며, 데이터 정책(Data Policy)은 서버 측에서 데이터의 일관성을 강제하는 역할을 합니다."
  },
  {
    "id": 161,
    "title": "What is the purpose of a Data Policy?",
    "options": [
      {
        "text": "Data Policies enforce security",
        "id": "A"
      },
      {
        "text": "Data Policies standardize data in Update Sets",
        "id": "B"
      },
      {
        "text": "Data Policies enforce data consistency",
        "id": "C"
      },
      {
        "text": "Data Policies apply to lists to standard data",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**데이터 정책(Data Policy)**의 핵심 목적은 인스턴스로 유입되는 모든 데이터의 **일관성(Consistency)과 무결성**을 서버 측에서 강제하는 것입니다.\n*   **적용 범위**: UI를 통한 직접 입력뿐만 아니라, **임포트 세트(Import Sets)**나 **웹 서비스(API)**를 통해 들어오는 모든 데이터에 규칙(필수, 읽기 전용)을 적용합니다.\n*   **UI 정책과의 관계**: 데이터 정책은 'UI 정책으로 변환' 옵션을 제공하여 서버와 클라이언트 양쪽에서 동일한 규칙을 유지할 수 있도록 지원합니다.\n*   **보안 가드레일**: 데이터가 데이터베이스에 저장되기 직전 마지막 관문 역할을 하여 플랫폼 전반의 데이터 품질을 보장합니다."
  },
  {
    "id": 162,
    "title": "What would NOT appear in the Application Navigator if \"service\" is typed into the filter field?",
    "options": [
      {
        "text": "Configuration > Business Services",
        "id": "A"
      },
      {
        "text": "Self-Service > Knowledge",
        "id": "B"
      },
      {
        "text": "Service Portal > Widgets",
        "id": "C"
      },
      {
        "text": "Incident > Assigned to me",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**애플리케이션 내비게이터의 필터 검색(Filter Navigator)**은 입력된 텍스트와 일치하는 **애플리케이션 메뉴의 이름**이나 **개별 모듈의 이름**을 실시간으로 필터링하여 보여줍니다.\n*   **작동 원리**: 'service'라고 입력하면 'Configuration > **Business Services**', 'Self-**Service** > Knowledge' 등 텍스트를 포함한 항목은 모두 노출됩니다.\n*   **정답 분석**: 'Incident > Assigned to me' 모듈은 이름 내에 'service'라는 문자열을 포함하고 있지 않으므로 필터 결과에서 제외됩니다.\n*   **참고**: 내비게이터 검색은 테이블 레이블뿐만 아니라 사용자가 지정한 키워드나 `sys_id` 등으로도 검색을 지원하도록 설정할 수 있습니다."
  },
  {
    "id": 163,
    "title": "Access Control rules may provide access security for which of the following database objects?",
    "options": [
      {
        "text": "For a specific role, group, or user",
        "id": "A"
      },
      {
        "text": "For a specific row, column, or table",
        "id": "B"
      },
      {
        "text": "For specific groups",
        "id": "C"
      },
      {
        "text": "For a specific CMDB Configuration item",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "(제공된 정답 키에 따라 보강함) ServiceNow의 **접근 제어(ACL)** 규칙은 플랫폼의 데이터베이스 객체에 대한 보안을 담당합니다.\n*   **보안 대상 (Object)**: 표준적인 아키텍처 관점에서 ACL은 **테이블(Table)**, **레코드(Row)**, 그리고 개별 **필드(Column)** 수준에서 보안을 적용합니다.\n*   **해석**: 본 문항의 정답 키인 '특정 CMDB CI(D)'는 데이터베이스 레코드(Row)의 한 예시로 볼 수 있습니다. ACL은 특정 CI 클래스나 개별 CI에 대해서도 정교한 접근 권한을 정의할 수 있는 강력한 도구입니다.\n*   **작동 원리**: 사용자에게 부여된 역할(Role), 조건식, 스크립트를 종합적으로 평가하여 특정 작업(Operation: read, write 등)의 허용 여부를 결정합니다."
  },
  {
    "id": 164,
    "title": "What is a key difference between Reporting and Performance Analytics?",
    "options": [
      {
        "text": "Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run.",
        "id": "A"
      },
      {
        "text": "Performance Analytics can show trends; Reports cannot.",
        "id": "B"
      },
      {
        "text": "Reports can be run on a scheduled basis; Performance Analytics cannot.",
        "id": "C"
      },
      {
        "text": "Performance Analytics is only for dashboards, while Reporting is only for lists.",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 데이터 분석 도구인 보고서(Reporting)와 성능 분석(PA)은 데이터를 바라보는 관점이 근본적으로 다릅니다.\n*   **Reporting**: 리포트를 실행하는 **현재 시점의 데이터**를 보여주는 '스냅샷'입니다. (예: 지금 열려 있는 인시던트가 몇 개인가?)\n*   **Performance Analytics (PA)**: 과거부터 축적된 데이터를 특정 주기마다 수집하여 **시간에 따른 추세(Trend)**와 패턴을 분석합니다. 이를 통해 미래를 예측하고 비즈니스 목표(KPI) 달성 여부를 추적합니다.\n*   **가치**: 리포팅이 '현재 무엇이 일어나고 있는가'를 알려준다면, PA는 '우리가 개선되고 있는가'라는 인사이트를 제공합니다."
  },
  {
    "id": 165,
    "title": "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
    "options": [
      {
        "text": "Select Fields and Columns module",
        "id": "A"
      },
      {
        "text": "Right click on form header, select Configure > Form Layout",
        "id": "B"
      },
      {
        "text": "Click on context menu, select Configure > Form Designer",
        "id": "C"
      },
      {
        "text": "Select Field Class Manager module",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "ServiceNow에서 폼의 구조를 변경하고 필드를 추가하는 방법은 두 가지 주요 시각적 도구가 있습니다.\n1.  **Form Layout (B)**: 'Configure > Form Layout'을 통해 슬러시버킷 인터페이스를 사용합니다. 기존 필드를 폼에 추가하거나 제거할 때 유용하며, 닷워킹(Dot-walking)을 통해 관련 테이블의 필드를 끌어올 수도 있습니다.\n2.  **Form Designer (C)**: 'Configure > Form Designer'를 통해 드래그 앤 드롭 방식의 직관적인 인터페이스를 사용합니다. 필드 배치, 섹션 구분, 레이아웃 구성을 실시간으로 확인하며 설계할 수 있습니다.\n*   **핵심**: 두 도구 모두 데이터베이스 스키마와 UI 구성을 동시에 변경하는 관리자 전용 기능입니다."
  },
  {
    "id": 166,
    "title": "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
    "options": [
      {
        "text": "Have them clear their cache.",
        "id": "A"
      },
      {
        "text": "Have them use the gear icon to set the employee's time zone.",
        "id": "B"
      },
      {
        "text": "Recommend they use Chrome, instead of Explorer.",
        "id": "C"
      },
      {
        "text": "Use the system properties to correct the instance's time zone.",
        "id": "D"
      },
      {
        "text": "Have them correct the time zone on their computer.",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "(제공된 정답 키에 따라 보강함) ServiceNow 인스턴스는 날짜와 시간 데이터를 서버 기준인 **UTC**로 저장하지만, 사용자에게 보여줄 때는 시스템 설정이나 사용자 개인 설정을 기반으로 로컬 시간으로 변환합니다.\n*   **문제 원인**: 인스턴스 내의 시간 표시가 실제 사용자의 지역과 맞지 않는다면, 가장 먼저 확인해야 할 것은 인스턴스 내 **사용자 프로필의 시간대(Time zone) 설정**입니다.\n*   **해석**: 본 문항의 정답인 '컴퓨터의 시간대 수정(E)'은 플랫폼 외부 요인에 의한 불일치를 해결하는 관점입니다. 플랫폼 내적으로는 사용자가 우측 상단의 **Gear 아이콘**을 눌러 자신의 근무 지역에 맞는 시간대를 직접 설정함으로써 문제를 해결하는 것이 표준 가이드입니다."
  },
  {
    "id": 167,
    "title": "What are two ways to generate an Event? (Choose two.)",
    "options": [
      {
        "text": "Business Rule",
        "id": "A"
      },
      {
        "text": "Workflow",
        "id": "B"
      },
      {
        "text": "Log entry",
        "id": "C"
      },
      {
        "text": "Knowledge article publication",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "ServiceNow에서 **이벤트(Events)**는 시스템 내에서 발생한 중요한 사건을 알리는 신호입니다. 이벤트를 발생시키는 가장 대표적인 서버 측 로직은 다음과 같습니다.\n1.  **Business Rule (A)**: 데이터베이스 조건(예: 레코드 삽입/수정)이 충족될 때 `gs.eventQueue()` 스크립트를 호출하여 이벤트를 생성합니다.\n2.  **Workflow (B)**: 워크플로우의 'Event' 액티비티를 통해 프로세스 도중 이벤트를 발생시킵니다.\n*   **후속 작업**: 생성된 이벤트는 **이벤트 로그(Event Log)**에 기록되며, 이를 감시하는 **이메일 알림(Notifications)**이나 **스크립트 액션(Script Actions)**이 트리거되어 사용자에게 메일을 보내거나 추가 로직을 수행합니다."
  },
  {
    "id": 168,
    "title": "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
    "options": [
      {
        "text": "Turn your computer off and on again",
        "id": "A"
      },
      {
        "text": "Clear browser cache",
        "id": "B"
      },
      {
        "text": "End Impersonation",
        "id": "C"
      },
      {
        "text": "Log out and back in",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**사용자 가장(User Impersonation)** 상태를 끝내고 원래 계정으로 돌아가려면 사용자 메뉴에서 **End Impersonation**을 선택합니다.\n*   **개념**: 가장은 다른 사용자의 관점으로 테스트할 때 쓰는 기능이며, 종료 시 현재 세션만 원래 사용자 세션으로 복귀합니다.\n*   **구분**: 로그아웃 후 재로그인은 더 강한 세션 초기화 방법이지만, 이 문항의 표준 답은 **End Impersonation**입니다."
  },
  {
    "id": 169,
    "title": "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
    "options": [
      {
        "text": "Group",
        "id": "A"
      },
      {
        "text": "Department",
        "id": "B"
      },
      {
        "text": "My reports",
        "id": "C"
      },
      {
        "text": "Team",
        "id": "D"
      },
      {
        "text": "Dashboards",
        "id": "E"
      },
      {
        "text": "Global",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "E",
      "F"
    ],
    "explanation": "(제공된 정답 키와 보기를 대조하여 보강함) ServiceNow의 보고서 리스트 페이지는 접근 권한과 대상에 따라 다음 4가지 표준 섹션(탭)으로 구분됩니다.\n1.  **My reports (C)**: 본인이 생성하여 개인적으로 관리하는 보고서.\n2.  **Group (A)**: 본인이 속한 특정 그룹 멤버들과 공유된 보고서.\n3.  **Global (F)**: 인스턴스의 모든 사용자가 볼 수 있도록 공개된 보고서.\n4.  **All**: 위 모든 항목을 포함한 전체 목록.\n*   **참고**: **Dashboards (E)** 탭은 보고서 자체가 아닌, 보고서가 포함된 시각화 보드를 의미하며 실무적으로 가시성을 판단하는 주요 경로 중 하나입니다."
  },
  {
    "id": 170,
    "title": "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?",
    "options": [
      {
        "text": "Task [task]",
        "id": "A"
      },
      {
        "text": "Assignment [assignment]",
        "id": "B"
      },
      {
        "text": "Service [service]",
        "id": "C"
      },
      {
        "text": "Workflow [workflow]",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**`task` 테이블**은 ServiceNow 플랫폼에서 업무 흐름을 관리하는 가장 중요한 **기본(Base/Core) 테이블**입니다.\n*   **공통 분모**: 인시던트(`incident`), 문제(`problem`), 변경(`change_request`) 등 업무 처리를 위한 모든 테이블은 `task`를 상속(Extend)받습니다.\n*   **상속 필드**: 번호(`number`), 상태(`state`), 할당 그룹(`assignment_group`), 짧은 설명(`short_description`) 등 모든 업무 레코드에 공통적으로 필요한 '표준 필드 세트'를 제공하여 데이터 일관성을 보장합니다.\n*   **이점**: 모든 하위 업무를 `task`라는 하나의 관점에서 보고하거나 통합 관리할 수 있게 합니다."
  },
  {
    "id": 171,
    "title": "How are local flow variables accessed in the Flow Designer Data panel?",
    "options": [
      {
        "text": "As newly generated icons",
        "id": "A"
      },
      {
        "text": "As scratchpad variables",
        "id": "B"
      },
      {
        "text": "As new tabs",
        "id": "C"
      },
      {
        "text": "As data pills",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)** 내에서 동적으로 생성되는 데이터나 변수는 **데이터 알약(Data Pills)**이라는 시각적 객체로 관리됩니다.\n*   **데이터 흐름**: 트리거(Trigger)나 이전 단계의 액션(Actions)에서 발생한 출력값은 우측 데이터 패널에 '데이터 알약'으로 나타납니다.\n*   **참조 방식**: 사용자는 이 알약을 드래그 앤 드롭하여 후속 단계의 입력값으로 사용하며, 플로우 실행 시점에 실제 레코드의 실시간 데이터로 치환됩니다.\n*   **장점**: 복잡한 스크립트 작성 없이도 시스템 내의 관계형 데이터를 직관적으로 연결할 수 있습니다."
  },
  {
    "id": 172,
    "title": "What is an Event in ServiceNow?",
    "options": [
      {
        "text": "An Event is a trigger that has a direct response in the platform",
        "id": "A"
      },
      {
        "text": "An Event is an indication to the ServiceNow processes that something has occurred",
        "id": "B"
      },
      {
        "text": "An Event is an indicator that a Priority 1 (P1) Incident has been logged",
        "id": "C"
      },
      {
        "text": "An Event is a recognized, scheduled occurrence of a process",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow에서 **이벤트(Event)**는 시스템이나 비즈니스 프로세스 내에서 주목할 만한 특이 사항이 발생했음을 알리는 **논리적 신호**입니다.\n*   **발생 경로**: 주로 **비즈니스 규칙(Business Rules)**이나 **워크플로우** 스크립트를 통해 생성됩니다.\n*   **처리기**: 이벤트가 발생하면 **이벤트 로그(`sysevent`)**에 기록되고, 이를 감시하던 **알림(Notifications)** 엔진이나 **스크립트 액션**이 트리거되어 사용자에게 메일을 보내는 등의 후속 작업을 수행합니다.\n*   **비유**: 이벤트는 '무언가 일어났다'는 알림 메시지와 같으며, 시스템은 이에 어떻게 반응할지 미리 정의된 규칙에 따라 움직입니다."
  },
  {
    "id": 173,
    "title": "What is the primary application used to load data into ServiceNow?",
    "options": [
      {
        "text": "Service Level Management",
        "id": "A"
      },
      {
        "text": "Configuration",
        "id": "B"
      },
      {
        "text": "System Import Sets",
        "id": "C"
      },
      {
        "text": "System Update Sets",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "외부 소스로부터 대량의 데이터를 ServiceNow로 적재하는 표준 애플리케이션은 **System Import Sets**입니다.\n*   **핵심 프로세스**: \n    1. **Load Data**: 외부 파일(Excel, CSV 등)을 임포트 세트 테이블(Staging Area)에 적재합니다.\n    2. **Transform Map**: 임시 테이블의 데이터를 실제 운영 테이블의 필드와 매핑합니다.\n    3. **Run Transform**: 매핑 규칙에 따라 데이터를 최종 목적지로 이동시키며, 이 과정에서 **Coalesce** 필드를 통해 중복 여부를 판별합니다."
  },
  {
    "id": 174,
    "title": "In addition to the admin role, which one of the following roles allows a user to add or remove fields from a list?",
    "options": [
      {
        "text": "personalize.control",
        "id": "A"
      },
      {
        "text": "personal_list",
        "id": "B"
      },
      {
        "text": "ul_page_admin",
        "id": "C"
      },
      {
        "text": "ui_action_admin",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 리스트 뷰의 구성을 개인화하거나 제어할 때 중요한 역할을 하는 권한은 **`personalize_control`**입니다.\n*   **리스트 메카닉 (Gear 아이콘)**: 사용자가 리스트 상단의 톱니바퀴 아이콘을 클릭하여 자신만의 컬럼 배치와 가시성을 조정할 수 있도록 허용합니다.\n*   **역할의 의미**: `admin` 역할은 기본적으로 모든 권한을 가지지만, 특정 운영자에게 시스템 전반의 레이아웃을 수정하지 않고 자신의 뷰만 관리하게 하려면 이 역할을 부여합니다.\n*   **참고**: `personalize_list` 역할 역시 개별 사용자가 자신의 리스트 뷰를 개인화하는 데 직접적으로 관여하는 핵심 역할입니다."
  },
  {
    "id": 175,
    "title": "What are three security modules often used by the System Administrator? (Choose three.)",
    "options": [
      {
        "text": "System Properties > Security",
        "id": "A"
      },
      {
        "text": "Utilities > Migrate Security",
        "id": "B"
      },
      {
        "text": "System Security > Security",
        "id": "C"
      },
      {
        "text": "Self-Service > My Access",
        "id": "D"
      },
      {
        "text": "System Security > Access Control (ACL)",
        "id": "E"
      },
      {
        "text": "Password Management > Security Questions",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "(제공된 정답 키를 바탕으로 보강함) ServiceNow 관리자가 인스턴스 보안을 강화하기 위해 상시 사용하는 3대 핵심 모듈은 다음과 같습니다.\n1.  **System Properties > Security (A)**: 세션 타임아웃, 비밀번호 복잡도 등 전역적인 보안 정책을 설정합니다.\n2.  **System Security > Access Control (ACL) (E)**: 데이터베이스 수준에서 테이블과 필드에 대한 CRUD 접근 권한을 엄격히 통제합니다.\n3.  **System Security > Security (C)**: 인스턴스의 전반적인 보안 상태를 진단하고 강화할 수 있는 대시보드와 도구를 제공합니다.\n*   **가드레일**: 특히 ACL을 수정하려면 반드시 `security_admin` 역할을 상승(Elevate)시켜야 합니다."
  },
  {
    "id": 176,
    "title": "What is the difference between a UI Policy and Data Policy?",
    "options": [
      {
        "text": "Data Policies run only after UI Policies run successfully",
        "id": "A"
      },
      {
        "text": "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form UI",
        "id": "B"
      },
      {
        "text": "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies",
        "id": "C"
      },
      {
        "text": "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies run only on the form UI",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow에서 데이터의 무결성을 유지하기 위한 두 정책의 결정적인 차이는 '적용 범위'와 '실행 시점'에 있습니다.\n*   **UI 정책 (UI Policy)**: 사용자의 웹 브라우저(폼)에서만 작동합니다. 실시간으로 필드를 필수/읽기전용으로 바꿔 사용자 경험(UX)을 개선하는 데 주력합니다.\n*   **데이터 정책 (Data Policy)**: **서버 측(Server-side)**에서 실행됩니다. 폼 입력은 물론 **데이터 임포트(Import Sets)**나 **웹 서비스(API)** 호출 등 모든 데이터 유입 경로에 대해 규칙을 강제합니다.\n*   **핵심**: 데이터 정책은 '데이터 보안 가드레일'로서의 성격이 강하며, UI 정책으로 변환되어 브라우저에서도 시각적으로 규칙을 표시할 수 있습니다."
  },
  {
    "id": 177,
    "title": "What is used frequently to move customizations from one instance to another?",
    "options": [
      {
        "text": "Update Sets",
        "id": "A"
      },
      {
        "text": "Code Sets",
        "id": "B"
      },
      {
        "text": "Update Packs",
        "id": "C"
      },
      {
        "text": "Configuration Logs",
        "id": "D"
      },
      {
        "text": "Remote Sets",
        "id": "E"
      },
      {
        "text": "Local Sets",
        "id": "F"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트(Update Sets)**는 개발 인스턴스에서 수행한 변경 사항을 테스트나 운영 인스턴스로 안전하게 배포하기 위한 표준 도구입니다.\n*   **캡처 대상**: **구성(Configuration)** 데이터. (예: 비즈니스 규칙, 클라이언트 스크립트, 테이블 정의, 폼 레이아웃, 워크플로우).\n*   **제외 대상**: 실제 **업무 레코드(Data)**. (예: 인시던트, 사용자, 그룹, 지식 문서 등).\n*   **프로세스**: 'In Progress' 상태에서 변경 사항을 기록한 뒤 'Complete'로 닫고, 대상 인스턴스에서 'Preview'를 거쳐 'Commit'합니다."
  },
  {
    "id": 178,
    "title": "How is a group defined in ServiceNow?",
    "options": [
      {
        "text": "A group is one record stored in the Group Type [sys_user_group_type] table",
        "id": "A"
      },
      {
        "text": "A group is one record stored in the Group [sys_user_group] table",
        "id": "B"
      },
      {
        "text": "A group defines a set of users that share the same location",
        "id": "C"
      },
      {
        "text": "A group defines a set of users that share the same job title",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 플랫폼 데이터 아키텍처에서 **그룹(Group)**은 **`sys_user_group`** 테이블에 저장되는 개별 레코드입니다.\n*   **기능적 정의**: 그룹은 특정 목적(예: 기술 지원, 승인 대기)을 위해 논리적으로 묶인 사용자들의 집합입니다.\n*   **권한 체계**: 역할을 사용자 개개인에게 부여하는 대신 그룹에 부여하고 사용자를 그룹에 추가하는 방식(RBAC)이 권장되는데, 이는 모든 그룹 정보가 `sys_user_group`이라는 마스터 테이블에서 관리되기 때문에 가능합니다.\n*   **참조 필드**: 인시던트의 'Assignment group' 필드 등에서 이 테이블을 참조하여 작업을 할당합니다."
  },
  {
    "id": 179,
    "title": "When creating a global custom table named \"abc\", what is the table name that is automatically assigned by the platform?",
    "options": [
      {
        "text": "snc_abc",
        "id": "A"
      },
      {
        "text": "abc",
        "id": "B"
      },
      {
        "text": "u_abc",
        "id": "C"
      },
      {
        "text": "sys_abc",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 플랫폼은 테이블의 출처와 범위를 명확히 하기 위해 명명 규칙(Naming Convention)을 자동으로 적용합니다.\n*   **Global Scope 커스텀 테이블**: 사용자가 전역 스코프에서 생성한 테이블은 자동으로 **`u_`** 접두사가 붙습니다 (예: `u_abc`).\n*   **Scoped Application 테이블**: 특정 애플리케이션 스코프 내에서 생성된 테이블은 **`x_[company_code]_[app_id]_`** 접두사를 가집니다.\n*   **시스템 테이블**: ServiceNow가 기본 제공하는 테이블은 보통 `sys_`로 시작하거나 `task`, `incident`처럼 고유한 이름을 가집니다."
  },
  {
    "id": 180,
    "title": "Which of the following protects applications by identifying and restricting access to available files and data?",
    "options": [
      {
        "text": "Application Configuration",
        "id": "A"
      },
      {
        "text": "Verbose Log",
        "id": "B"
      },
      {
        "text": "Access Control Rules",
        "id": "C"
      },
      {
        "text": "Application Scope",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**애플리케이션 스코프(Application Scope)**는 애플리케이션 리소스를 격리하고 보호하는 플랫폼 보안의 핵심 메커니즘입니다.\n*   **접근 제어**: 각 애플리케이션은 고유한 스코프 내에 존재하며, 설정에 따라 다른 애플리케이션이 자신의 데이터나 스크립트 파일에 접근하는 것을 허용하거나 차단할 수 있습니다.\n*   **충돌 방지**: 스코핑을 통해 서로 다른 개발자가 만든 자산 간의 이름 충돌을 방지하고, 한 앱의 오류가 전체 인스턴스에 영향을 미치지 않도록 가두는 역할을 합니다."
  },
  {
    "id": 181,
    "title": "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    "options": [
      {
        "text": "Look up their password, so you can login with their account",
        "id": "A"
      },
      {
        "text": "Initiate a Connect Chat session",
        "id": "B"
      },
      {
        "text": "Install the Bomgar plug-in",
        "id": "C"
      },
      {
        "text": "Impersonate the user",
        "id": "D"
      },
      {
        "text": "Launch a NowChat window",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**사용자 가장(User Impersonation)** 기능은 관리자가 특정 사용자가 겪는 UI 이슈를 동일한 권한 환경에서 재현해 볼 수 있는 가장 효과적인 진단 도구입니다.\n*   **활용 시나리오**: 특정 역할(Role)이나 그룹 멤버십에 따라 메뉴가 보이지 않거나, UI Policy/ACL이 의도대로 작동하지 않을 때 해당 사용자의 관점에서 즉시 확인이 가능합니다.\n*   **보안 가드레일**: `admin`이나 `impersonator` 역할이 필요하며, 가장 중의 활동은 시스템 로그에 기록되어 투명성을 유지합니다."
  },
  {
    "id": 182,
    "title": "Which one of the following is NOT a type of Visual Task Board?",
    "options": [
      {
        "text": "Feature",
        "id": "A"
      },
      {
        "text": "Guided boards",
        "id": "B"
      },
      {
        "text": "Flexible",
        "id": "C"
      },
      {
        "text": "Freeform",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**비주얼 태스크 보드(Visual Task Board, VTB)**는 업무를 칸반(Kanban) 스타일로 관리하는 시각화 도구로, 크게 세 가지 유형이 있습니다.\n1.  **Guided Boards (가이드형)**: 특정 필드(예: State)의 값에 따라 카드가 자동으로 분류됩니다.\n2.  **Flexible Boards (플렉시블형)**: 특정 필드 기반이지만, 드래그 앤 드롭으로 카드 이동 시 실제 레코드 값은 바뀌지 않도록 유연하게 운영할 수 있습니다.\n3.  **Freeform Boards (자유형)**: 데이터 필드와 상관없이 사용자가 정의한 레인(Lane)으로 자유롭게 카드를 관리합니다.\n*   **참고**: 'Feature'는 표준 VTB 유형이 아닙니다."
  },
  {
    "id": 183,
    "title": "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
    "options": [
      {
        "text": "Common Service Data Model (CSDM)",
        "id": "A"
      },
      {
        "text": "Service Mapping Utility (SMU)",
        "id": "B"
      },
      {
        "text": "Service Schema Map (SSM)",
        "id": "C"
      },
      {
        "text": "CMDB Class Manager (CMDBCM)",
        "id": "D"
      },
      {
        "text": "CI Class Manager (CICM)",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**CSDM (Common Services Data Model)**은 ServiceNow 애플리케이션이 요구하는 서비스 데이터가 적절한 CMDB 테이블에 정확히 매핑되도록 보장하는 **표준 데이터 프레임워크**입니다.\n*   **역할**: IT 자산(CI)과 비즈니스 가치 사이의 연결 고리를 정의하며, 플랫폼 전반의 데이터 사일로를 제거합니다.\n*   **가치**: 이를 준수함으로써 기업은 제품 간 시너지를 극대화하고, 신뢰할 수 있는 서비스 레벨 리포팅과 영향도 분석을 수행할 수 있습니다."
  },
  {
    "id": 184,
    "title": "What is a Notification?",
    "options": [
      {
        "text": "A new Knowledge article created by a Business Rule",
        "id": "A"
      },
      {
        "text": "A tool for alerting users that events that concern them have occurred",
        "id": "B"
      },
      {
        "text": "A message through Connect related to a Change Request",
        "id": "C"
      },
      {
        "text": "An email file attachment",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**알림(Notification)**은 시스템 내에서 특정 사건이나 조건이 발생했을 때 관련 사용자에게 정보를 전달하는 핵심 소통 도구입니다.\n*   **구성 3요소**:\n    1. **When to send**: 어떤 레코드 조건이나 이벤트가 발생했을 때 보낼 것인가?\n    2. **Who will receive**: 누가 수신자인가? (특정인 또는 참조 필드).\n    3. **What it says**: 어떤 내용(제목, 본문)을 어떤 채널(이메일, 푸시, SMS)로 보낼 것인가?"
  },
  {
    "id": 185,
    "title": "What are examples of Core tables in the ServiceNow platform?",
    "options": [
      {
        "text": "Configuration, Connect, Chat",
        "id": "A"
      },
      {
        "text": "Team, Party, Awards",
        "id": "B"
      },
      {
        "text": "User, Task, Incident",
        "id": "C"
      },
      {
        "text": "Work, Caller, Timecard",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**코어 테이블(Core Tables)**은 ServiceNow 플랫폼 설치 시 기본적으로 제공되는 표준 테이블 세트를 의미합니다.\n*   **대표 예시**: 사용자 정보를 담는 **`sys_user`**, 업무 흐름의 근간인 **`task`**, 그리고 서비스 데스크의 핵심인 **`incident`** 등이 포함됩니다.\n*   **특징**: 이러한 테이블들은 플랫폼의 기본 워크플로우와 밀접하게 결합되어 있으며, 고객의 요구에 따라 확장(Extend)하여 커스텀 기능을 구현할 수 있는 기반이 됩니다."
  },
  {
    "id": 186,
    "title": "Which data consistency settings can be achieved using UI Policy? Choose 3 answers",
    "options": [
      {
        "text": "Setting fields to accept the data with an n number of characters",
        "id": "A"
      },
      {
        "text": "Setting fields hidden",
        "id": "B"
      },
      {
        "text": "Setting fields to accept the data in an expected format",
        "id": "C"
      },
      {
        "text": "Settings fields read-only",
        "id": "D"
      },
      {
        "text": "Setting fields mandatory",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "**UI 정책(UI Policy)**은 폼 수준에서 데이터의 일관성을 유지하기 위해 필드의 세 가지 상태를 동적으로 제어합니다.\n1.  **Mandatory (E)**: 필드를 필수로 지정하여 데이터 입력 없이는 제출을 방해함.\n2.  **Read-only (D)**: 사용자가 필드 값을 수정하지 못하도록 읽기 전용으로 설정함.\n3.  **Visible/Hidden (B)**: 조건에 따라 필드를 사용자에게 보이거나 숨김.\n*   **참고**: 입력 형식 검증(C)은 주로 변수 세트의 정규표현식이나 클라이언트 스크립트에서 수행합니다."
  },
  {
    "id": 187,
    "title": "Which is the most efficient way to move large amounts of data between instances?",
    "options": [
      {
        "text": "Export to Data Package",
        "id": "A"
      },
      {
        "text": "Export to XML",
        "id": "B"
      },
      {
        "text": "Update Sets",
        "id": "C"
      },
      {
        "text": "Export to Zip",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow에서 대량의 실제 레코드(데이터)를 인스턴스 간에 가장 빠르고 안전하게 이동시키는 표준 방식은 **XML 내보내기/가져오기**입니다.\n*   **데이터 vs 구성**: 업데이트 세트(Update Sets)는 시스템의 설정(Configuration)을 옮기는 용도이며, 인시던트나 자산 레코드 같은 실제 데이터는 캡처하지 않습니다.\n*   **무결성**: XML 방식은 레코드의 고유 식별자인 `sys_id`를 그대로 유지하므로, 인스턴스를 옮기더라도 참조 관계가 깨지지 않고 데이터의 무결성이 보장됩니다."
  },
  {
    "id": 188,
    "title": "Which module would you use to customize your instance's banner image, text, and colors?",
    "options": [
      {
        "text": "System UI > UI Pages > Branding",
        "id": "A"
      },
      {
        "text": "System Properties > Branding",
        "id": "B"
      },
      {
        "text": "System Properties > Basic Configuration UI16",
        "id": "C"
      },
      {
        "text": "Service Portal > Portals > Branding",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "인스턴스의 배너 이미지, 텍스트, 색상처럼 일반 UI16의 전체 브랜딩을 바꾸려면 **System Properties > Basic Configuration UI16**를 사용합니다.\n*   **범위**: 이 설정은 서비스 포털 전용이 아니라 인스턴스의 기본 사용자 인터페이스에 적용됩니다.\n*   **구분**: **Service Portal > Portals > Branding**은 포털 화면의 브랜딩을 조정할 때 쓰는 별도 모듈입니다."
  },
  {
    "id": 189,
    "title": "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
    "options": [
      {
        "text": "Categories",
        "id": "A"
      },
      {
        "text": "Roles",
        "id": "B"
      },
      {
        "text": "User Criteria",
        "id": "C"
      },
      {
        "text": "Groups",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**사용자 기준(User Criteria)**은 지식 관리(KM)와 서비스 카탈로그에서 접근 권한을 제어하는 가장 강력하고 유연한 도구입니다.\n*   **보안 계층**: 특정 역할(Roles)뿐만 아니라 부서, 위치, 그룹 등 사용자 레코드의 다양한 속성을 조합하여 정교한 권한 모델을 설계할 수 있습니다.\n*   **적용**: 지식 기반(Knowledge Base) 수준에서 설정하여 하위의 모든 문서에 일괄 적용하거나, 개별 문서 단위로 세분화된 접근 제어를 수행합니다."
  },
  {
    "id": 190,
    "title": "An order for new office equipment has been placed through the Service Catalog. How would you view the list of requests after the orders have been placed?",
    "options": [
      {
        "text": "All > Service Catalog > Open Records > Items",
        "id": "A"
      },
      {
        "text": "In the Navigation Filter, type 'requests' and press the Enter key.",
        "id": "B"
      },
      {
        "text": "All > Tables and Columns > Table",
        "id": "C"
      },
      {
        "text": "All > Service Catalog > Requests",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "서비스 카탈로그 주문이 완료된 후 사용자가 요청한 개별 품목들의 상세 진행 상태를 확인하는 표준 경로는 **Service Catalog > Open Records > Items**입니다.\n*   **데이터 모델**: 주문은 REQ(전체 요청) 레코드 아래에 여러 개의 **RITM(Requested Items)** 레코드가 생성되는 구조입니다.\n*   **추적**: 사용자와 관리자는 이 RITM 목록을 통해 각 품목이 승인 대기 중인지, 배송 중인지 등 개별적인 이행 상태를 명확히 파악할 수 있습니다."
  },
  {
    "id": 191,
    "title": "On a form header, what icon would you click to access Template features?",
    "options": [
      {
        "text": "Paper clip",
        "id": "A"
      },
      {
        "text": "More options (...)",
        "id": "B"
      },
      {
        "text": "Stamp",
        "id": "C"
      },
      {
        "text": "Context Menu",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "폼의 필드 값을 미리 정의된 값으로 신속하게 채워주는 **템플릿(Templates)** 기능은 폼 헤더의 **More Options (점 세 개 아이콘)** 메뉴를 통해 활성화할 수 있습니다.\n*   **템플릿 바**: 메뉴에서 'Toggle Template Bar'를 선택하면 폼 하단에 템플릿 바가 나타나며, 여기서 자주 쓰는 설정값을 클릭 한 번으로 적용하거나 새로운 템플릿을 생성할 수 있습니다.\n*   **효율성**: 이는 반복적인 데이터 입력 업무를 자동화하여 운영 효율을 높이는 핵심 UI 편의 기능입니다."
  },
  {
    "id": 192,
    "title": "What component causes a flow to run after a record has been created or updated?",
    "options": [
      {
        "text": "Date-based trigger",
        "id": "A"
      },
      {
        "text": "Record-based trigger",
        "id": "B"
      },
      {
        "text": "On-change trigger",
        "id": "C"
      },
      {
        "text": "Application-based trigger",
        "id": "D"
      },
      {
        "text": "Updated-date trigger",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**에서 데이터베이스의 변화를 감지하여 자동화를 시작하는 장치를 **레코드 기반 트리거(Record-based trigger)**라고 합니다.\n*   **실행 조건**: 레코드가 새로 생성(Created)되거나, 특정 필드가 업데이트(Updated)되거나, 혹은 두 조건 모두에 대해 플로우를 트리거하도록 설정할 수 있습니다.\n*   **필터링**: 트리거 내에 'Condition Builder'를 사용하여 특정 조건을 만족하는 레코드에 대해서만 플로우가 작동하도록 정밀하게 제어할 수 있습니다."
  },
  {
    "id": 193,
    "title": "What is the primary objective of the Display Business Rule?",
    "options": [
      {
        "text": "To monitor fields on a form, and provide feedback",
        "id": "A"
      },
      {
        "text": "To use a shared g_scratchpad object, which can be sent to the client, as part of the form",
        "id": "B"
      },
      {
        "text": "To set files to mandatory, hidden, and read-only",
        "id": "C"
      },
      {
        "text": "To define what happens on a form, when a particular fled changes",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**디스플레이 비즈니스 규칙(Display Business Rule)**은 레코드가 데이터베이스에서 조회되어 사용자에게 표시되기 직전에 실행되는 서버 측 로직입니다.\n*   **g_scratchpad**: 서버에만 존재하는 복잡한 계산 결과나 데이터를 `g_scratchpad` 객체에 담아 클라이언트(브라우저)로 전달하는 역할을 합니다.\n*   **활용**: 이렇게 전달된 데이터는 클라이언트 스크립트에서 참조하여 폼의 동적인 변화를 제어하는 데 사용됩니다.\n*   **성능**: 매번 클라이언트에서 서버로 AJAX 요청을 보내는 것보다 훨씬 효율적으로 서버 데이터를 UI 로직에 활용할 수 있게 합니다."
  },
  {
    "id": 194,
    "title": "What module do you use to access the reports that are available to you?",
    "options": [
      {
        "text": "Report > View /Run",
        "id": "A"
      },
      {
        "text": "Reports > Homepage",
        "id": "B"
      },
      {
        "text": "Self-Service>My Reports",
        "id": "C"
      },
      {
        "text": "Report > Overview",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "사용자가 자신에게 권한이 있는 모든 보고서를 검색, 실행 및 편집할 수 있는 중앙 허브는 **Reports > View / Run** 모듈입니다.\n*   **보고서 디자이너**: 이 모듈을 클릭하면 보고서 디자이너(Report Designer) 인터페이스가 열리며, 'My reports', 'Group', 'Global' 탭을 통해 보고서의 가시성 범위별로 목록을 필터링하여 볼 수 있습니다.\n*   **실무 활용**: 기존에 잘 만들어진 보고서를 복제(Insert and Stay)하여 자신만의 분석 리포트로 빠르게 변형할 때도 이 경로를 사용합니다."
  },
  {
    "id": 195,
    "title": "A task worker asks how they can monitor any updates occurring to recands assigned to him, like responses from customers, What do you suggest?",
    "options": [
      {
        "text": "Open an Agent workspace tab for each record he wants to monitor",
        "id": "A"
      },
      {
        "text": "Select Service Desk > My Work Dashboard",
        "id": "B"
      },
      {
        "text": "Click on the eyeglass icon to. expand the Monitor frame",
        "id": "C"
      },
      {
        "text": "On My Work list, select the Activity Stream icon to show a frame with live updates",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "담당자가 자신에게 할당된 여러 레코드의 변화를 일일이 열어보지 않고도 실시간으로 파악할 수 있게 해주는 기능은 **활동 스트림(Activity Stream)**입니다.\n*   **실시간 협업**: 리스트 뷰 상단의 활동 스트림 아이콘을 클릭하면 우측 패널에 대화형 피드가 열리며, 고객의 응답이나 동료의 작업 메모가 입력되는 즉시 표시됩니다.\n*   **생산성**: 여러 티켓을 동시에 모니터링해야 하는 서비스 데스크 요원이나 기술 지원 전문가에게 최적화된 인터페이스입니다."
  },
  {
    "id": 196,
    "title": "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
    "options": [
      {
        "text": "Trigger runtime value",
        "id": "A"
      },
      {
        "text": "Sequence runtime value",
        "id": "B"
      },
      {
        "text": "Starting runtime value",
        "id": "C"
      },
      {
        "text": "Data pill runtime value",
        "id": "D"
      },
      {
        "text": "Input runtime value",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**에서 단계 간에 전달되는 동적인 실행 데이터를 **데이터 알약(Data Pills)**이라고 부릅니다.\n*   **데이터 흐름**: 트리거(Trigger)에서 수집된 정보나 이전 액션(Actions)의 결과물은 데이터 패널에 알약 모양의 객체로 생성됩니다.\n*   **런타임 값**: 플로우가 실제로 실행되는 시점의 구체적인 레코드 값(예: 할당된 사용자의 이름)을 담고 있으며, 사용자는 이를 드래그 앤 드롭하여 후속 단계의 입력값으로 재사용할 수 있습니다."
  },
  {
    "id": 197,
    "title": "Which feature can be used to categorize a set of records from a list and make them visible to other users?",
    "options": [
      {
        "text": "Tags",
        "id": "A"
      },
      {
        "text": "History",
        "id": "B"
      },
      {
        "text": "Favorites",
        "id": "C"
      },
      {
        "text": "Activity Formatter",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**태그(Tags)**는 리스트 뷰에서 특정 레코드 세트를 논리적으로 분류하고 관리하기 위한 유연한 도구입니다.\n*   **협업 및 공유**: 태그는 개인용(Private)으로 사용하거나, 특정 그룹 또는 전체 사용자(Everyone)와 공유하도록 가시성을 설정할 수 있어 협업 효율을 높입니다.\n*   **추적**: 내비게이션 바의 'Tags' 메뉴를 통해 여러 테이블에 흩어져 있는 동일 태그 레코드들을 한눈에 모아볼 수 있습니다."
  },
  {
    "id": 198,
    "title": "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
    "options": [
      {
        "text": "On the list, locate and right click on the value Hardware, select Show Matching",
        "id": "A"
      },
      {
        "text": "Click Funnel ten, type Hardware and click enter",
        "id": "B"
      },
      {
        "text": "On the Category column header, right click and select Show > Hardware",
        "id": "C"
      },
      {
        "text": "Right dick on magnifier, type Hardware and click enter",
        "id": "D"
      },
      {
        "text": "On Breadcrumb, click > icon, type Hardware and click enter",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "리스트 뷰에서 특정 데이터를 기준으로 신속하게 필터링을 수행하는 가장 효율적인 방법은 **Show Matching (일치 항목 표시)** 기능을 사용하는 것입니다.\n*   **작동 방식**: 필터링하고자 하는 셀의 값(예: 'Hardware') 위에서 우클릭한 뒤 메뉴를 선택하면, 즉시 해당 조건이 브레드크럼(Breadcrumb) 필터에 추가됩니다.\n*   **비교**: 반대로 특정 값을 제외하고 싶을 때는 'Filter Out' 기능을 사용합니다."
  },
  {
    "id": 199,
    "title": "If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?",
    "options": [
      {
        "text": "A server script",
        "id": "A"
      },
      {
        "text": "A client script",
        "id": "B"
      },
      {
        "text": "A fix script",
        "id": "C"
      },
      {
        "text": "A business rule",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "사용자가 필드 값을 변경하는 순간 브라우저에서 실시간으로 반응(예: Alert 알림)하는 로직은 **클라이언트 스크립트(Client Scripts)**의 전형적인 역할입니다.\n*   **실행 환경**: 사용자의 웹 브라우저 내에서 직접 실행되므로 즉각적인 UI 피드백을 제공합니다.\n*   **유형**: 이 경우 필드 값이 바뀔 때 실행되는 `onChange` 스크립트가 작동한 것입니다.\n*   **차이점**: 서버 측 로직인 비즈니스 규칙(Business Rules)은 데이터베이스에 저장이 시도될 때 실행되므로 실시간 UI 반응에는 적합하지 않습니다."
  },
  {
    "id": 200,
    "title": "Which role(s) are required to impersonate a user? Choose 2 answers",
    "options": [
      {
        "text": "admin",
        "id": "A"
      },
      {
        "text": "sys_admin",
        "id": "B"
      },
      {
        "text": "security_admin",
        "id": "C"
      },
      {
        "text": "sys_user",
        "id": "D"
      },
      {
        "text": "impersonator",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "**사용자 가장(User Impersonation)** 기능은 권한 오남용을 방지하기 위해 특정 역할을 가진 사용자에게만 허용됩니다.\n*   **허용 역할**: 인스턴스 전권을 가진 **`admin`**과, 테스트 및 지원을 위해 전용으로 부여되는 **`impersonator`** 역할이 필요합니다.\n*   **보안 가드레일**: `security_admin`과 같은 고권한 계정을 가장하는 것은 제한될 수 있으며, 가장 상태의 활동은 감사 로그에 철저히 기록됩니다."
  },
  {
    "id": 201,
    "title": "If users would like to locate and assign a task to themselves in the Platform, What action could they perform from the list view to make the assignment? Choose 2 answers",
    "options": [
      {
        "text": "Select the record using the check box, then select the Person icon",
        "id": "A"
      },
      {
        "text": "Double click on the Assigned to value, type the name of the user, and select the green check",
        "id": "B"
      },
      {
        "text": "Select the record using the check box then select the Assign To Me UI action on the List Header",
        "id": "C"
      },
      {
        "text": "Right click on the Task number and select the Assign to me option in the menu",
        "id": "D"
      },
      {
        "text": "Select the Task number, and select the Assign to me UI action on the form",
        "id": "E"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "ServiceNow 리스트 뷰에서는 여러 레코드를 일일이 열지 않고도 자신에게 할당하는 신속한 방법을 제공합니다.\n1.  **List Header (C)**: 체크박스로 레코드를 선택한 후, 리스트 하단(또는 상단)의 **'Assign To Me'** UI 액션 버튼을 클릭합니다.\n2.  **Context Menu (D)**: 특정 레코드의 번호나 빈 영역을 우클릭하여 나타나는 메뉴에서 **'Assign to me'**를 선택합니다.\n*   **이점**: 대량의 티켓을 한꺼번에 자신에게 할당하거나 신속하게 작업을 접수할 때 생산성을 높여줍니다."
  },
  {
    "id": 202,
    "title": "An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? Choose 2 answers",
    "options": [
      {
        "text": "A record of sc_task",
        "id": "A"
      },
      {
        "text": "A record of sc_req_item table",
        "id": "B"
      },
      {
        "text": "A change record",
        "id": "C"
      },
      {
        "text": "An Incident record",
        "id": "D"
      },
      {
        "text": "A problem record",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "서비스 카탈로그에서 주문이 제출되면 이행을 위해 다음과 같은 레코드 계층이 생성됩니다.\n1.  **Requested Item (RITM)**: 주문한 개별 품목 레코드 (테이블: `sc_req_item`).\n2.  **Catalog Task (SCTASK)**: 해당 품목을 전달하기 위해 실무자가 수행해야 할 개별 작업 (테이블: `sc_task`).\n*   **참고**: 이들은 최상위 주문서인 **Request (REQ)** 레코드에 소속되어 관리됩니다."
  },
  {
    "id": 203,
    "title": "How would you navigate to the Schema map for a table?",
    "options": [
      {
        "text": "System Dictionary > Show Schema Map; Select Table",
        "id": "A"
      },
      {
        "text": "System Definition > Tables; Select Table; Go to Related links and click Show Schema Map",
        "id": "B"
      },
      {
        "text": "System Definition > Show Schema Map; Select Table",
        "id": "C"
      },
      {
        "text": "System Definition > Dictionary: Select Table; Go to Related links and click Show Schema Map",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**스키마 맵(Schema Map)**은 테이블 간의 관계와 필드 구조를 시각화하는 강력한 도구입니다.\n*   **접근 경로**: `System Definition > Tables` 모듈에서 대상 테이블의 레코드를 엽니다 -> 폼 하단의 **Related Links** 섹션에서 **'Show Schema Map'**을 클릭합니다.\n*   **용도**: 데이터베이스 설계 분석, 참조 관계(Reference) 및 확장 관계(Extension) 파악 시 필수적으로 사용됩니다."
  },
  {
    "id": 204,
    "title": "When an administrator sets a policy that is applied to all data entered into the Platform (UI, Import Sets, or Web Services), where does this policy run by default?",
    "options": [
      {
        "text": "Network",
        "id": "A"
      },
      {
        "text": "Server",
        "id": "B"
      },
      {
        "text": "Client",
        "id": "C"
      },
      {
        "text": "Browser",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**데이터 정책(Data Policy)**은 인스턴스 전반의 데이터 무결성을 보장하기 위해 **서버(Server)** 측에서 실행됩니다.\n*   **강제성**: 서버 측에서 작동하기 때문에 웹 브라우저(UI)뿐만 아니라 **데이터 임포트(Import Sets)**나 **웹 서비스(API)**를 통해 들어오는 모든 데이터에 동일한 규칙을 강제할 수 있습니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험을 위해 작동하는 반면, 데이터 정책은 데이터베이스의 물리적 일관성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 205,
    "title": "When selecting the Target table for an import, which tables can you select? Choose 3 answers",
    "options": [
      {
        "text": "Tables within the global scope",
        "id": "A"
      },
      {
        "text": "Tables within the existing application scope",
        "id": "B"
      },
      {
        "text": "Tables outside of ServiceNow",
        "id": "C"
      },
      {
        "text": "Tables which allow write access to other applications",
        "id": "D"
      },
      {
        "text": "Related tables, using Dot Walk",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "데이터 임포트 시 타겟(Target)으로 선택 가능한 테이블은 플랫폼의 보안 및 스코프 가드레일을 준수해야 합니다.\n1.  **Global Scope (A)**: 전역 스코프 내의 테이블.\n2.  **Current Application Scope (B)**: 현재 활성화된 애플리케이션 스코프 내의 테이블.\n3.  **Cross-scope access (D)**: 다른 애플리케이션 스코프에 있더라도 외부 앱의 데이터 쓰기를 명시적으로 허용한 테이블.\n*   **보안**: 이를 통해 승인되지 않은 애플리케이션이 민감한 시스템 테이블에 데이터를 무단으로 적재하는 것을 방지합니다."
  },
  {
    "id": 206,
    "title": "On Access Control Definitions, what are ways you can set the permissions on a Table? Choose 3 answers",
    "options": [
      {
        "text": "Groups",
        "id": "A"
      },
      {
        "text": "CRUD",
        "id": "B"
      },
      {
        "text": "Roles",
        "id": "C"
      },
      {
        "text": "Script that sets the answer variable to true or false",
        "id": "D"
      },
      {
        "text": "Conditional Expressions",
        "id": "E"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "explanation": "**접근 제어(ACL)** 규칙은 세 가지 계층의 보안 체크포인트를 조합하여 데이터 접근 허용 여부를 정교하게 결정합니다.\n1.  **Roles (C)**: 사용자가 필요한 시스템 역할을 보유했는지 확인합니다.\n2.  **Conditional Expressions (E)**: 레코드의 특정 필드 값이 조건을 만족하는지 확인합니다. (예: `State`가 'Active'인 경우만 수정 허용).\n3.  **Scripts (D)**: 서버 측 스크립트 로직을 통해 복잡한 권한 판별을 수행하며, 최종적으로 `answer` 변수에 `true` 또는 `false`를 할당합니다.\n*   **보안 원칙**: 이 세 가지 조건은 **논리적 AND** 관계로 작동합니다. 즉, 설정된 모든 관문을 통과해야만 최종 접근이 승인됩니다."
  },
  {
    "id": 207,
    "title": "What are the steps for importing data using an import set?",
    "options": [
      {
        "text": "Select source file; Run automap; Transform data; Clean up target table",
        "id": "A"
      },
      {
        "text": "Set up LDAP; Test map: Create update set; Run import: Apply update set",
        "id": "B"
      },
      {
        "text": "Identify source; Import transform map: Run transformer; Verity import",
        "id": "C"
      },
      {
        "text": "Load the data; Create transform map; Transform data; Clean up import table",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow **임포트 세트(Import Sets)**를 통한 데이터 수집 프로세스는 다음과 같은 표준 워크플로우를 따릅니다.\n1.  **Load Data**: 외부 소스 파일을 업로드하여 임포트 세트 테이블(Staging Area)에 데이터를 로드합니다.\n2.  **Create Transform Map**: 데이터가 들어갈 타겟 테이블을 지정하고 소스와 타겟 필드 간의 매핑 관계를 정의합니다.\n3.  **Run Transform**: 매핑 규칙에 따라 스테이징 영역의 데이터를 실제 운영 테이블로 변환 및 이동시킵니다.\n4.  **Clean up**: 작업 완료 후 불필요해진 임시 임포트 테이블 데이터를 정리하여 시스템 자원을 최적화합니다."
  },
  {
    "id": 208,
    "title": "When moving a homepage or dashboard between instances, what must you remember?",
    "options": [
      {
        "text": "Create a separate update set for them",
        "id": "A"
      },
      {
        "text": "They are automatically added to the update set",
        "id": "B"
      },
      {
        "text": "Manually add them to the update set",
        "id": "C"
      },
      {
        "text": "They cannot be moved via update set",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow에서 **대시보드(Dashboards)**나 **홈페이즈**는 일반적인 구성(Configuration) 데이터와 달리 **업데이트 세트(Update Sets)**에 자동으로 기록되지 않는 대표적인 항목입니다.\n*   **관리 포인트**: 이러한 시각화 객체들을 다른 인스턴스로 이동시키려면 'Unload Dashboard' 기능을 사용하거나 'Add to Update Set' 모듈을 통해 수동으로 업데이트 세트에 포함시켜야 합니다.\n*   **주의**: 대시보드는 위젯, 탭, 레이아웃 등 여러 요소로 구성되어 있으므로 이동 후 구성 요소가 누락되지 않았는지 반드시 검증해야 합니다."
  },
  {
    "id": 209,
    "title": "What is the platform name for the Group table?",
    "options": [
      {
        "text": "SyS_USer_group",
        "id": "A"
      },
      {
        "text": "Sys_group",
        "id": "B"
      },
      {
        "text": "group",
        "id": "C"
      },
      {
        "text": "sys_groups",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "(표기상 혼란이 있으나 `sys_user_group`을 의미함)\n*   **테이블 정의**: ServiceNow에서 사용자들의 논리적 집합인 **그룹(Groups)** 정보가 저장되는 시스템 마스터 테이블의 이름은 **`sys_user_group`**입니다.\n*   **용도**: 역할 할당(RBAC), 작업 배정, 이메일 통지 수신 등을 위해 사용자들을 묶어 관리하는 핵심 기반 데이터입니다.\n*   **관계**: 사용자와 그룹 간의 연결 정보(Membership)는 별도의 교차 테이블인 `sys_user_grmember`에 저장됩니다."
  },
  {
    "id": 210,
    "title": "When adding a related list to a form, you choose the related list from the list callector, What is an example of a related list you might see on the list collector? Choose 3 answers",
    "options": [
      {
        "text": "Release Phase==Parent",
        "id": "A"
      },
      {
        "text": "Catalog Task->Parent",
        "id": "B"
      },
      {
        "text": "HR Case-=Parent",
        "id": "C"
      },
      {
        "text": "Problem==Parent",
        "id": "D"
      },
      {
        "text": "Outage->Task number",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "**관련 리스트(Related Lists)**는 현재 보고 있는 레코드와 참조 관계(Relationship)를 맺고 있는 다른 테이블의 레코드들을 폼 하단에 표시합니다.\n*   **리스트 컬렉터(List Collector)**: 관리자가 폼에 관련 리스트를 추가할 때 사용하는 설정 창으로, 현재 테이블을 참조(Reference)하고 있는 모든 하위 테이블들을 보여줍니다.\n*   **관계 표현**: 'Catalog Task -> Parent'(B), 'HR Case -> Parent'(C) 등은 화살표 앞의 테이블이 화살표 뒤의 필드를 통해 현재 레코드를 가리키고 있음을 나타내는 플랫폼의 표준 관계 명명 방식입니다."
  },
  {
    "id": 211,
    "title": "What ServiceNow feature allows you to include data from a secondary related table on a report?",
    "options": [
      {
        "text": "SQL",
        "id": "A"
      },
      {
        "text": "Dot Walking",
        "id": "B"
      },
      {
        "text": "Outer Join",
        "id": "C"
      },
      {
        "text": "Joins",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**닷워킹(Dot-Walking)**은 참조(Reference) 필드를 통해 연결된 다른 테이블의 데이터에 접근하는 강력한 기술입니다.\n*   **보고서 활용**: 예를 들어 '인시던트' 보고서를 만들 때, `Caller.Location`이나 `Assigned to.Department`와 같이 참조를 따라가 상위 레코드의 필드를 보고서 컬럼이나 필터 조건으로 바로 가져올 수 있습니다.\n*   **장점**: 복잡한 SQL 조인 문을 작성할 필요 없이, 시각적인 필드 선택 인터페이스에서 계층 구조를 탐색하는 것만으로 풍부한 데이터 통찰을 제공합니다."
  },
  {
    "id": 212,
    "title": "On the Form header, which icon do you use to access form templates?",
    "options": [
      {
        "text": "Paperclip",
        "id": "A"
      },
      {
        "text": "Pages",
        "id": "B"
      },
      {
        "text": "Stamp",
        "id": "C"
      },
      {
        "text": "More Options {...)",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "폼의 필드 값을 미리 정의된 값으로 신속하게 채워주는 **템플릿(Templates)** 도구는 폼 헤더의 **More Options (점 세 개 아이콘)** 메뉴를 통해 활성화합니다.\n*   **템플릿 바**: 메뉴에서 'Toggle Template Bar'를 선택하면 화면 하단에 바가 나타나며, 여기서 자주 사용하는 설정을 클릭 한 번으로 적용하거나 새로운 템플릿을 즉석에서 생성할 수 있습니다.\n*   **효율성**: 이는 반복적인 데이터 입력 업무를 자동화하여 운영 효율을 높이고 데이터 입력의 일관성을 보장하는 핵심 UI 편의 기능입니다."
  },
  {
    "id": 213,
    "title": "What does ServiceNow recommend as a best practice regarding data imports?",
    "options": [
      {
        "text": "Adjust your Transform maps, after the data is loaded into the target table.",
        "id": "A"
      },
      {
        "text": "Use extremely large Import Sets, instead of multiple large Import Sets.",
        "id": "B"
      },
      {
        "text": "Create a new Import set table for each new data load.",
        "id": "C"
      },
      {
        "text": "Plan time before your import to remove obsolete or inaccurate data.",
        "id": "D"
      },
      {
        "text": "Monitor data quality and clean imported data, using the Data Scrub Workspace.",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "데이터 임포트(Data Import) 프로세스의 성공과 데이터 품질을 보장하기 위해 ServiceNow는 **사전 정제**를 강력히 권장합니다.\n*   **베스트 프랙티스**: 인스턴스로 데이터를 로드하기 전에 원본 소스에서 **오래되었거나(Obsolete), 중복되거나, 부정확한 데이터를 미리 제거**해야 합니다.\n*   **이점**: 시스템 내 데이터 무결성을 유지하고, 임포트 도중 발생할 수 있는 병합(Coalesce) 오류나 변환 실패를 최소화하여 플랫폼의 신뢰성을 확보할 수 있습니다."
  },
  {
    "id": 214,
    "title": "Which type of scripts nun in the browser?",
    "options": [
      {
        "text": "Script include Scripts",
        "id": "A"
      },
      {
        "text": "Business Rule Scripts",
        "id": "B"
      },
      {
        "text": "Access Contra! Scripts",
        "id": "C"
      },
      {
        "text": "UI Policies and Client Scripts",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 플랫폼에서 로직의 실행 위치(Client-side vs Server-side)를 구분하는 것은 아키텍처 이해의 기초입니다.\n*   **클라이언트 측 (Browser)**: 사용자의 웹 브라우저 내에서 즉각적으로 실행되어 UI 반응을 제어합니다. **UI 정책(UI Policy)**과 **클라이언트 스크립트(Client Scripts)**가 여기에 해당합니다.\n*   **서버 측 (Server)**: 인스턴스의 데이터베이스 계층에서 실행되며 실제 데이터 처리를 담당합니다. **비즈니스 규칙(Business Rules)**, **스크립트 인클루드**, **데이터 정책** 등이 해당합니다."
  },
  {
    "id": 215,
    "title": "When building an extended table from a base table, which fields do you need to create? Choose 2 answers",
    "options": [
      {
        "text": "The mandatory fields for the base table.",
        "id": "A"
      },
      {
        "text": "The reference fields for the base table.",
        "id": "B"
      },
      {
        "text": "The fields that are not in the base table.",
        "id": "C"
      },
      {
        "text": "The fields that are specific to the extended table.",
        "id": "D"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "**테이블 확장(Table Extension)**은 기존 데이터 구조와 로직을 재사용하는 플랫폼의 핵심 설계 방식입니다.\n*   **상속**: 자식 테이블은 부모 테이블(Base Table)이 보유한 모든 필드와 비즈니스 로직(ACL, BR 등)을 자동으로 물려받습니다.\n*   **커스터마이징**: 따라서 개발자는 부모 테이블에 **존재하지 않는 새로운 필드(C)**나 해당 자식 테이블의 **고유한 비즈니스 목적을 위해 필요한 전용 필드(D)**만 추가로 생성하여 관리하면 됩니다."
  },
  {
    "id": 216,
    "title": "Which is the base table of the configuration management database hierarchy?",
    "options": [
      {
        "text": "cmdb_d",
        "id": "A"
      },
      {
        "text": "ucmdb",
        "id": "B"
      },
      {
        "text": "cmdb_ret_Oi",
        "id": "C"
      },
      {
        "text": "cmdb",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow **CMDB(Configuration Management Database)** 아키텍처에서 모든 구성 항목 테이블의 뿌리가 되는 최상위 테이블은 **`cmdb`**입니다.\n*   **계층 구조**: `cmdb` 테이블은 모든 CI 관련 테이블의 조상이며, 이를 확장하여 하드웨어, 소프트웨어 등 구체적인 클래스가 정의됩니다.\n*   **cmdb_ci (참고)**: 대부분의 실제 기술적 자산 레코드는 `cmdb`를 확장한 `cmdb_ci` 테이블(Configuration Item)에 저장되며, 여기서 다시 서버(`cmdb_ci_server`), 애플리케이션 등으로 세분화됩니다.\n*   **데이터 모델**: 이러한 계층 구조를 통해 공통 속성(이름, 상태 등)은 상위에서 관리하고, 클래스별 고유 속성은 하위 테이블에서 정의하는 효율적인 데이터 모델링을 구현합니다."
  },
  {
    "id": 217,
    "title": "A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: *Requested for*Requested by *Approving manager* Delivery instructions All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?",
    "options": [
      {
        "text": "Create one Variable Set for the four variables; then add that variable set to each of the 80 catalog items.",
        "id": "A"
      },
      {
        "text": "Create a Record Producer that contains the four fields; then add it to the record producer related list on the catalog item.",
        "id": "B"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "다수의 서비스 카탈로그 항목에서 공통적으로 사용하는 변수(필드)들은 **가변 세트(Variable Sets)**로 묶어 관리하는 것이 ServiceNow의 핵심 모범 사례입니다.\n*   **재사용성**: 한 번 정의한 가변 세트를 수십 개의 카탈로그 항목에 드래그 앤 드롭으로 추가할 수 있습니다.\n*   **유지보수 효율성**: 공통 필드의 라벨이나 로직을 변경해야 할 때, 각 항목을 수정할 필요 없이 가변 세트 하나만 수정하면 연결된 모든 항목에 즉시 반영됩니다.\n*   **일관성**: 사용자에게 전사적으로 통일된 데이터 입력 경험을 제공합니다."
  },
  {
    "id": 218,
    "title": "What is the most common role that has access to almost all platform features, functions, and data?",
    "options": [
      {
        "text": "Security Admin [security_admin]",
        "id": "A"
      },
      {
        "text": "Sys Admin [sys_admin]",
        "id": "B"
      },
      {
        "text": "Admin [sn_admin]",
        "id": "C"
      },
      {
        "text": "System Administrator [admin]",
        "id": "D"
      },
      {
        "text": "Base Admin [base_admin]",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow에서 거의 모든 플랫폼 기능, 애플리케이션, 데이터에 접근할 수 있는 표준 최상위 역할은 **`admin` (System Administrator)**입니다.\n*   **권한 범위**: 인스턴스 전역 설정 변경, 스크립트 작성, 모든 레코드 관리가 가능합니다.\n*   **참고**: `security_admin`은 ACL 수정 같은 민감한 보안 작업을 위해 별도로 역할 상승이 필요한 권한입니다."
  },
  {
    "id": 219,
    "title": "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
    "options": [
      {
        "text": "itil users",
        "id": "A"
      },
      {
        "text": "Any user with an article's permalink",
        "id": "B"
      },
      {
        "text": "Any active user",
        "id": "C"
      },
      {
        "text": "No users",
        "id": "D"
      },
      {
        "text": "Users with kb_user role",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "지식 기반(Knowledge Base)에 별도의 **사용자 기준(User Criteria)**이나 접근 제어 설정이 정의되지 않은 경우, 기본적으로 인스턴스에 로그인한 **모든 활성 사용자(Active Users)**가 해당 문서를 읽을 수 있는 상태가 됩니다.\n*   **보안 원칙**: 엔터프라이즈 환경에서는 'Can Read' 관련 리스트에 특정 역할이나 부서를 명시하여 지식 자산에 대한 접근 범위를 명확히 제한하는 것이 권장됩니다.\n*   **필터링**: 이를 통해 HR 지식은 HR 직원에게만, IT 기술 문서는 전체 직원에게 노출하는 등의 거버넌스를 구현합니다."
  },
  {
    "id": 220,
    "title": "What does Natural Language Query allow you to do on a list?",
    "options": [
      {
        "text": "Automatically select a filter, based on keywords",
        "id": "A"
      },
      {
        "text": "Filter list by typing in a phrase",
        "id": "B"
      },
      {
        "text": "Predict the filter desired by the user",
        "id": "C"
      },
      {
        "text": "Speak to the condition builder",
        "id": "D"
      },
      {
        "text": "Set list filter, using audible commands",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**자연어 쿼리(NLQ, Natural Language Query)**는 복잡한 조건 빌더 사용법을 모르는 일반 사용자도 일상적인 언어로 데이터를 조회할 수 있게 돕는 지능형 인터페이스입니다.\n*   **작동 방식**: 리스트 상단의 검색창에 \"Incidents opened this week by ITIL user\"와 같이 입력하면 시스템이 의도를 파악하여 해당하는 필터 조건을 자동으로 생성하고 적용합니다.\n*   **가치**: 데이터 분석의 장벽을 낮추고 필요한 정보를 더 신속하게 탐색할 수 있는 사용자 경험을 제공합니다."
  },
  {
    "id": 221,
    "title": "When a custom table is created, which access control rules are automatically created? Choose 4 answers",
    "options": [
      {
        "text": "delete",
        "id": "A"
      },
      {
        "text": "create",
        "id": "B"
      },
      {
        "text": "execute",
        "id": "C"
      },
      {
        "text": "read",
        "id": "D"
      },
      {
        "text": "update",
        "id": "E"
      },
      {
        "text": "write",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "D",
      "F"
    ],
    "explanation": "ServiceNow 플랫폼에서 새로운 커스텀 테이블을 생성하면, 시스템은 데이터 보안을 보장하기 위해 기본적인 **4대 CRUD ACL**을 자동으로 생성합니다.\n1.  **Create (B)**: 레코드 생성 권한.\n2.  **Read (D)**: 레코드 조회 권한.\n3.  **Write (F)**: 레코드 수정 권한.\n4.  **Delete (A)**: 레코드 삭제 권한.\n*   **보안 가드레일**: 이러한 자동 생성 ACL은 생성자가 지정한 역할을 기반으로 설정되며, 명시적인 권한 없이 데이터가 무단 노출되거나 훼손되는 것을 방지하는 최소한의 보안 장치 역할을 합니다."
  },
  {
    "id": 222,
    "title": "What role enables someone to authorize a request, with no other permissions on the platform?",
    "options": [
      {
        "text": "Approver [approver-user]",
        "id": "A"
      },
      {
        "text": "Authorize [authorize-user]",
        "id": "B"
      },
      {
        "text": "Reviewer [reviewer_user]",
        "id": "C"
      },
      {
        "text": "Approver Group [approval_group]",
        "id": "D"
      },
      {
        "text": "Verification [verify_user]",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**`approver_user`** 역할은 서비스 카탈로그나 다른 프로세스에서 자신에게 할당된 승인 요청을 검토하고 처리하기 위해 설계된 전용 역할입니다.\n*   **최소 권한 원칙**: 이 역할을 가진 사용자는 복잡한 업무 처리(itil) 권한은 없지만, 자신에게 온 승인 레코드를 보고 **승인(Approve)** 또는 **거부(Reject)** 작업을 수행할 수 있습니다.\n*   **비즈니스 프로세스**: 주로 관리자나 예산 책임자에게 부여하여 라이선스 비용 최적화와 거버넌스 준수를 보장하는 데 활용됩니다."
  },
  {
    "id": 223,
    "title": "What actions are taken to filter a long list of records to show only those which have \"email\" in Short Description?",
    "options": [
      {
        "text": "Click List Magnifier to expand column search. on Short Description type %email. click enter",
        "id": "A"
      },
      {
        "text": "Click List Magnifier to expand column search, on Short Description, type email, click enter",
        "id": "B"
      },
      {
        "text": "On Search box. select text, type email, click enter",
        "id": "C"
      },
      {
        "text": "Click List Magnifier to expand column search, on Short Description type 'email, dick enter",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "리스트 뷰에서 특정 문자열을 포함하는 레코드를 검색할 때는 와일드카드 연산자를 사용합니다.\n*   **와일드카드 (*)**: ServiceNow 리스트 검색에서 `*`는 **'contains' (포함)** 연산자를 의미합니다.\n*   **입력 예시**: Short Description 검색창에 **`*email`**을 입력하고 Enter를 누르면, 제목의 어느 위치에든 'email'이라는 단어가 들어간 모든 레코드를 필터링합니다.\n*   **정확도**: 단순 텍스트 입력은 'starts with'로 작동하므로, 포함 검색을 위해서는 별표(`*`) 기호를 명시적으로 사용하는 것이 핵심입니다."
  },
  {
    "id": 224,
    "title": "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
    "options": [
      {
        "text": "Properties",
        "id": "A"
      },
      {
        "text": "Data",
        "id": "B"
      },
      {
        "text": "Configure",
        "id": "C"
      },
      {
        "text": "Type",
        "id": "D"
      },
      {
        "text": "Sources",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "보고서 디자이너(Report Designer)는 네 가지 설정 단계를 거치며, 그 첫 번째 단계인 **Data** 탭에서 기본 정보를 정의합니다.\n*   **Report Name**: 보고서의 제목을 지정합니다.\n*   **Source Type**: 데이터 원본을 테이블(Table)로 할지, 미리 정의된 보고서 소스(Report Source)로 할지 선택합니다.\n*   **Table/Source**: 실제 데이터를 가져올 대상 (예: `incident`)을 선택합니다.\n*   **다음 단계**: 이후 **Type** 탭에서 시각화 유형(Pie, Bar 등)을 선택하는 과정으로 이어집니다."
  },
  {
    "id": 225,
    "title": "When managing tags, you can adjust who is able to see iL What are the visibility options? Choose 3 answers",
    "options": [
      {
        "text": "Admins",
        "id": "A"
      },
      {
        "text": "Everyone",
        "id": "B"
      },
      {
        "text": "Groups and Users",
        "id": "C"
      },
      {
        "text": "Roles and Permissions",
        "id": "D"
      },
      {
        "text": "Me",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "ServiceNow에서 레코드 관리를 위해 사용자가 생성하는 **태그(Tags)**는 협업과 개인화를 위해 세 가지 가시성 수준을 제공합니다.\n1.  **Me (E)**: 본인만 볼 수 있는 개인용 태그.\n2.  **Groups and Users (C)**: 특정 그룹 멤버나 지정된 특정 사용자와 공유하는 태그.\n3.  **Everyone (B)**: 인스턴스의 모든 사용자가 볼 수 있는 전역 공유 태그.\n*   **관리**: 'My Tags' 모듈이나 리스트 뷰에서 태그 설정을 변경하여 정보 공유 범위를 유연하게 통제할 수 있습니다."
  },
  {
    "id": 226,
    "title": "What setting allows users to view a Knowledge Base article even if the are not logged in?",
    "options": [
      {
        "text": "The View All setting",
        "id": "A"
      },
      {
        "text": "The Allow role",
        "id": "B"
      },
      {
        "text": "The ESS role",
        "id": "C"
      },
      {
        "text": "The Public setting",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**공개(Public)** 설정은 인증되지 않은(로그인하지 않은) 사용자도 지식 기사를 열람할 수 있게 해주는 특별한 가시성 옵션입니다.\n*   **보안 계층**: 일반적으로 지식 문서는 내부 직원용으로 관리되지만, 고객 포털 등에서 외부 사용자에게 매뉴얼이나 공지사항을 노출해야 할 때 이 설정을 활성화합니다.\n*   **관리**: `sys_public` 설정을 통해 페이지 수준에서도 공개 접근을 허용해야 실제 작동하며, 지식 기반(Knowledge Base) 자체도 공개 접근이 가능하도록 구성되어야 합니다."
  },
  {
    "id": 227,
    "title": "In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?",
    "options": [
      {
        "text": "Field Icon",
        "id": "A"
      },
      {
        "text": "Field Value",
        "id": "B"
      },
      {
        "text": "Data Pill",
        "id": "C"
      },
      {
        "text": "Data Element",
        "id": "D"
      },
      {
        "text": "Data Trigger",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**에서 각 단계의 실행 데이터는 **데이터 알약(Data Pill)**이라는 시각적 객체에 담깁니다.\n*   **런타임 값**: 플로우가 실행되는 시점에 실제 레코드의 데이터(예: 생성된 티켓 번호, 할당된 사용자 이름)를 보유하며, 이를 드래그 앤 드롭하여 후속 단계의 입력값으로 재사용할 수 있습니다.\n*   **데이터 흐름**: 복잡한 변수 선언이나 코드 작성 없이도 액션 간의 데이터 연결을 직관적으로 처리할 수 있게 합니다."
  },
  {
    "id": 228,
    "title": "What is the language used for scriptingin ServiceNow?",
    "options": [
      {
        "text": "JavaScript",
        "id": "A"
      },
      {
        "text": "C++",
        "id": "B"
      },
      {
        "text": "PHP",
        "id": "C"
      },
      {
        "text": "Python",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 전체 플랫폼 비즈니스 로직을 구축하는 표준 언어는 **JavaScript**입니다.\n*   **클라이언트 측**: 사용자의 웹 브라우저에서 실행되는 로직 (Client Scripts, UI Policies 등).\n*   **서버 측**: 인스턴스 데이터베이스 계층에서 실행되는 로직 (Business Rules, Script Includes 등).\n*   **표준**: ServiceNow는 최신 릴리스에서 지속적으로 JavaScript 엔진을 업그레이드하여 성능을 최적화하고 최신 문법(ECMAScript 표준) 사용을 지원하고 있습니다."
  },
  {
    "id": 229,
    "title": "Which element is used to track items not saved with a field, in a record?",
    "options": [
      {
        "text": "Sidebar",
        "id": "A"
      },
      {
        "text": "List Editor",
        "id": "B"
      },
      {
        "text": "Activity formatter",
        "id": "C"
      },
      {
        "text": "Dictionary",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**활동 포맷터(Activity Formatter)**는 레코드의 변경 이력과 상호작용 내역을 한눈에 볼 수 있도록 요약해주는 특수한 UI 요소입니다.\n*   **저널 필드**: 'Work notes'나 'Additional comments'와 같이 일반 필드에 영구 저장되지 않고 실행 시점에 로그로 쌓이는 데이터를 시각화합니다.\n*   **감사 추적**: 누가, 언제, 어떤 필드 값을 바꿨는지 등의 감사(Audit) 정보를 실시간 스트림 형태로 제공하여 팀 간 협업과 프로세스 가시성을 지원합니다."
  },
  {
    "id": 230,
    "title": "You have heard about a new application released by SericeNow, You want to try it out, to- see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?",
    "options": [
      {
        "text": "Check the latest release notes at docs.servicenow.com.",
        "id": "A"
      },
      {
        "text": "Activate the application plug in, on your personal dev instance.",
        "id": "B"
      },
      {
        "text": "Search the wiki for the sales demo request form.",
        "id": "C"
      },
      {
        "text": "Activate the application plug in, on your company's production instance.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "새로운 기능을 안전하게 테스트하기 위한 ServiceNow의 권장 사항은 **개인 개발 인스턴스(PDI)**를 활용하는 것입니다.\n*   **리스크 관리**: 운영 인스턴스나 상용 개발 서버에 영향을 주지 않고 새로운 플러그인이나 애플리케이션을 자유롭게 설치하고 실습해 볼 수 있습니다.\n*   **학습 도구**: ServiceNow 개발자 프로그램(developer.servicenow.com)을 통해 무료로 제공받을 수 있으며, 최신 릴리스의 신기능을 실험하는 최적의 샌드박스 환경 역할을 합니다."
  },
  {
    "id": 231,
    "title": "Which modules can you use to create a new table? Choose 2 answers",
    "options": [
      {
        "text": "Tables & Columns",
        "id": "A"
      },
      {
        "text": "Schema Map",
        "id": "B"
      },
      {
        "text": "Dictionary",
        "id": "C"
      },
      {
        "text": "Tables",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow에서 새로운 데이터 테이블을 정의하기 위한 표준 진입점은 다음 두 모듈입니다.\n1.  **Tables (D)**: 인스턴스 내 모든 테이블 리스트를 관리하며, 'New' 버튼을 통해 새 테이블 정의 폼을 엽니다.\n2.  **Tables & Columns (A)**: 데이터베이스 스키마를 시각적으로 확인하고 새로운 테이블이나 필드를 설계할 수 있는 관리자용 허브입니다.\n*   **참고**: Dictionary나 Schema Map은 생성보다는 생성된 테이블의 정의를 상세 조회하고 관계를 분석하는 용도로 주로 쓰입니다."
  },
  {
    "id": 232,
    "title": "What are examples of UI Actions relating to Lists? Choose 4 answers",
    "options": [
      {
        "text": "List Links",
        "id": "A"
      },
      {
        "text": "List Control",
        "id": "B"
      },
      {
        "text": "List Buttons",
        "id": "C"
      },
      {
        "text": "List Context Menu",
        "id": "D"
      },
      {
        "text": "List Override",
        "id": "E"
      },
      {
        "text": "List Choices",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "F"
    ],
    "explanation": "리스트 관련 UI Actions의 대표적인 예시는 **List Links (A)**, **List Buttons (C)**, **List Context Menu (D)**, **List Choices (F)**입니다.\n*   **List Links**: 리스트에서 관련 작업으로 연결되는 링크.\n*   **List Buttons**: 리스트 상단 또는 하단에 배치된 버튼.\n*   **List Context Menu**: 우클릭이나 메뉴에서 접근하는 리스트 작업.\n*   **List Choices**: 여러 레코드를 선택한 뒤 일괄 작업에 사용하는 선택 항목.\n*   **List Control (B)**와 **List Override (E)**는 UI Action 예시로 보기 어렵습니다."
  },
  {
    "id": 233,
    "title": "Which field on every record contains a unique identifier for that record?",
    "options": [
      {
        "text": "sys_number",
        "id": "A"
      },
      {
        "text": "sc_req_item",
        "id": "B"
      },
      {
        "text": "sys_id",
        "id": "C"
      },
      {
        "text": "sys_number_id",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**`sys_id`**는 ServiceNow 데이터베이스의 모든 레코드가 생성되는 순간 부여받는 고유한 식별자(Primary Key)입니다.\n*   **물리적 구조**: 32자의 16진수 문자열로 구성된 GUID(Globally Unique Identifier)입니다.\n*   **플랫폼 가치**: 테이블 간 참조(Reference) 관계를 형성할 때 내부적으로 이 값을 저장하며, API 호출이나 URL 주소 구성 시 특정 객체를 정확하게 지칭하는 근간이 됩니다.\n*   **불변성**: 레코드의 내용이 바뀌어도 해당 레코드의 `sys_id`는 절대 변하지 않습니다."
  },
  {
    "id": 234,
    "title": "Which system property is added and set to true in order to see impersonation events in the System Log?",
    "options": [
      {
        "text": "glide user_setting",
        "id": "A"
      },
      {
        "text": "glide sys all_jmpersonation",
        "id": "B"
      },
      {
        "text": "glide.sys.log_impersonation",
        "id": "C"
      },
      {
        "text": "glide.impersonation_setting",
        "id": "D"
      },
      {
        "text": "glide sys admin_login",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "관리자가 수행하는 **사용자 가장(Impersonation)** 활동을 시스템 로그에 기록하여 투명성을 확보하기 위해 사용하는 시스템 속성은 **`glide.sys.log_impersonation`**입니다.\n*   **보안 감사**: 이 속성을 `true`로 설정하면 누가 누구를 가장했는지, 언제 가장을 시작하고 마쳤는지가 `sys_log` 테이블에 명확히 기록됩니다.\n*   **거버넌스**: 고권한 계정의 대리 수행 활동을 추적해야 하는 엔터프라이즈 보안 환경에서 매우 중요한 감사 설정입니다."
  },
  {
    "id": 235,
    "title": "When importing spreadsheet data into ServiceNow, what is the first step in the process?",
    "options": [
      {
        "text": "Create Import Set",
        "id": "A"
      },
      {
        "text": "Run Data Scrubber",
        "id": "B"
      },
      {
        "text": "Set Coalesce",
        "id": "C"
      },
      {
        "text": "Define Data Source",
        "id": "D"
      },
      {
        "text": "Select Import Set",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow에서 스프레드시트 데이터를 가져오는 전체 프로세스의 기술적 시작점은 **임포트 세트(Import Set) 생성**입니다.\n*   **상세 단계**: 사용자가 **Load Data** 모듈을 통해 파일을 업로드하면, 시스템은 내부적으로 데이터를 임시 적재할 임포트 세트 테이블(Staging Table)을 생성하고 레코드를 로드합니다.\n*   **프로세스 흐름**: 1. 데이터 로드(임포트 세트 생성) -> 2. 변환 맵(Transform Map) 생성/선택 -> 3. 변환 실행(Transform).\n*   **주의**: '데이터 소스 정의'가 논리적으로 먼저일 수 있으나, 단순 파일 업로드 방식에서는 데이터 로드 시점에 세트 생성이 동시에 이루어집니다."
  },
  {
    "id": 236,
    "title": "What are the three key tables in an enterprise CMDB? Choose 3 answers.",
    "options": [
      {
        "text": "cmdb",
        "id": "A"
      },
      {
        "text": "sn_cmdb_bak",
        "id": "B"
      },
      {
        "text": "cmdb_rel_ci",
        "id": "C"
      },
      {
        "text": "sn_cmdb",
        "id": "D"
      },
      {
        "text": "cmdb_bak",
        "id": "E"
      },
      {
        "text": "cmdb_ci",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "엔터프라이즈급 CMDB 아키텍처를 구성하는 3대 핵심 테이블은 다음과 같습니다.\n1.  **cmdb (A)**: CMDB 계층 구조의 최상위 베이스 테이블입니다.\n2.  **cmdb_ci (F)**: 실제 구성 항목(CI)들의 개별 속성 정보가 담기는 마스터 테이블입니다.\n3.  **cmdb_rel_ci (C)**: CI와 CI 간의 의존 관계(Relationship) 정보를 전문적으로 저장하는 테이블입니다.\n*   **CSDM 연관**: 이 테이블들은 공통 서비스 데이터 모델(CSDM)의 기술적 근간이 되어 서비스 영향도 분석과 자산 관리를 지원합니다."
  },
  {
    "id": 237,
    "title": "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
    "options": [
      {
        "text": "Self Service Module",
        "id": "A"
      },
      {
        "text": "Application Navigator",
        "id": "B"
      },
      {
        "text": "Service Desk Homepage",
        "id": "C"
      },
      {
        "text": "Favorites",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**애플리케이션 내비게이터(Application Navigator)**는 ServiceNow Classic UI의 좌측 패널에 위치하며, 사용자가 권한을 가진 모든 애플리케이션과 모듈에 접근할 수 있는 메인 내비게이션 도구입니다.\n*   **구성 요소**: 필터 내비게이터(검색), 즐겨찾기(Favorites), 최근 기록(History) 탭을 포함합니다.\n*   **역할 기반 가시성**: 사용자가 가진 역할(Role)에 따라 탐색창에 나타나는 메뉴가 동적으로 필터링됩니다."
  },
  {
    "id": 238,
    "title": "When creating a new notification, what must you define? Choose 3 answers",
    "options": [
      {
        "text": "What is the content of the notification",
        "id": "A"
      },
      {
        "text": "The associated knowledge base",
        "id": "B"
      },
      {
        "text": "Under what conditions is the notification sent",
        "id": "C"
      },
      {
        "text": "Who receives the notification",
        "id": "D"
      },
      {
        "text": "Settings for handling inactive user accounts",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "효과적인 **알림(Notification)** 구성을 위해 관리자는 소위 '3W'라고 불리는 핵심 요소를 반드시 정의해야 합니다.\n1.  **When to send (C)**: 어떤 레코드의 변화나 시스템 이벤트가 발생했을 때 발송할 것인가? (조건).\n2.  **Who receives (D)**: 누가 이 정보를 받아야 하는가? (수신자).\n3.  **What it says (A)**: 어떤 제목과 본문 내용을 전달할 것인가? (콘텐츠).\n*   **참고**: 이메일 템플릿을 활용하여 'What it says' 부분을 표준화할 수 있습니다."
  },
  {
    "id": 239,
    "title": "What table acts as a staging area for records imported from a data source?",
    "options": [
      {
        "text": "Transform Table",
        "id": "A"
      },
      {
        "text": "Staging Table",
        "id": "B"
      },
      {
        "text": "Import Set Row Table",
        "id": "C"
      },
      {
        "text": "Temp Table",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**임포트 세트 테이블(Import Set Row Table)**은 외부에서 유입된 데이터를 최종 타겟 테이블로 옮기기 전에 보관하는 **임시 스테이징 영역(Staging Area)**입니다.\n*   **역할**: 원본 데이터의 형태를 그대로 유지하면서, 변환 맵(Transform Map)을 통해 데이터 정제 및 매핑 작업을 수행할 수 있는 안전한 작업 공간을 제공합니다.\n*   **특징**: 데이터 로드 작업마다 고유한 임포트 세트 번호가 부여되어 관리됩니다."
  },
  {
    "id": 240,
    "title": "On a form, which type of field has this icon which can be clicked to see a preview of the associated record?",
    "options": [
      {
        "text": "Drilldown",
        "id": "A"
      },
      {
        "text": "Lookup",
        "id": "B"
      },
      {
        "text": "Quickview",
        "id": "C"
      },
      {
        "text": "Preview",
        "id": "D"
      },
      {
        "text": "Snapshot",
        "id": "E"
      },
      {
        "text": "Reference",
        "id": "F"
      }
    ],
    "answer": [
      "F"
    ],
    "explanation": "**참조(Reference)** 필드 옆에 표시되는 'i' 모양의 아이콘을 클릭하면, 화면을 이동하지 않고도 연결된 대상 레코드의 핵심 정보를 팝업 형태로 미리 볼 수 있습니다.\n*   **기능**: 이를 **Reference Icon Preview**라고 하며, 클릭 시 대상 레코드의 뷰(View) 중 'sys_popup' 뷰에 설정된 필드들이 나타납니다.\n*   **장점**: 사용자가 문맥을 유지하면서 연관된 데이터(예: 요청자의 상세 연락처)를 신속하게 확인하게 해줍니다."
  },
  {
    "id": 241,
    "title": "Which admin role is required to make changes to High Security Settings?",
    "options": [
      {
        "text": "security_admin",
        "id": "A"
      },
      {
        "text": "sn_ad_admin",
        "id": "B"
      },
      {
        "text": "high_sec_admin",
        "id": "C"
      },
      {
        "text": "admin",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ACL(Access Control List) 수정 등 인스턴스의 보안 근간을 설정하는 **High Security Settings**에 접근하려면 **`security_admin`** 역할이 필수적입니다.\n*   **역할 상승 (Elevated Role)**: 이 역할은 로그인 시 자동으로 활성화되지 않으며, 사용자가 명시적으로 'Elevate Roles' 메뉴를 통해 활성화해야 사용할 수 있습니다.\n*   **보안 가드레일**: 세션 기반으로 작동하며, 브라우저를 닫거나 로그아웃하면 자동으로 해제되어 권한 오남용을 방지합니다."
  },
  {
    "id": 242,
    "title": "What action would an administrator perform on a list if they wanted to show the records in groups, based on the Category column? (Choose 2 answers)",
    "options": [
      {
        "text": "On the list Context Menu, select Group By > Category",
        "id": "A"
      },
      {
        "text": "On the Category column title, select the Context menu > Group By Category",
        "id": "B"
      },
      {
        "text": "On the Application Navigator, type group.category and press Enter",
        "id": "C"
      },
      {
        "text": "Select the Group icon, then select Category",
        "id": "D"
      },
      {
        "text": "On the Filter Menu, select Group By > Category",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "리스트 뷰에서 특정 필드를 기준으로 레코드들을 시각적으로 묶어주는 **그룹화(Group By)** 기능은 다음 두 경로를 통해 수행할 수 있습니다.\n1.  **Context Menu (A)**: 컬럼 헤더의 햄버거 아이콘이나 우클릭 메뉴에서 'Group By [필드명]'을 선택합니다.\n2.  **Group 아이콘 (D)**: 리스트 상단 제어 바에 있는 그룹화 아이콘을 클릭하여 기준 필드를 선택합니다.\n*   **특징**: 그룹화는 데이터의 물리적 위치를 바꾸는 것이 아니라, 현재 뷰에서만 데이터를 논리적으로 분류하여 가독성을 높이는 개인화 도구입니다."
  },
  {
    "id": 243,
    "title": "What features are available in Knowledge Management, to support continuous improvement on the knowledge articles? Choose 4 answers",
    "options": [
      {
        "text": "Submit KB Errata",
        "id": "A"
      },
      {
        "text": "Add Comments",
        "id": "B"
      },
      {
        "text": "Click frowning icon",
        "id": "C"
      },
      {
        "text": "Tag as Helpful",
        "id": "D"
      },
      {
        "text": "Flag Article",
        "id": "E"
      },
      {
        "text": "Rate with Stars",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "D",
      "E",
      "F"
    ],
    "explanation": "지식 관리(Knowledge Management)의 품질을 지속적으로 개선하기 위해 ServiceNow는 다양한 사용자 피드백 메커니즘을 제공합니다.\n1.  **Flag Article (E)**: 문서 내용에 오류가 있음을 알리고 검토를 요청합니다.\n2.  **Add Comments (B)**: 특정 정보에 대한 추가 질문이나 의견을 남깁니다.\n3.  **Rate with Stars (F)**: 1~5점 척도로 문서의 전반적인 만족도를 평가합니다.\n4.  **Tag as Helpful (D)**: 'Helpful? Yes/No' 버튼을 통해 문서가 실질적인 문제 해결에 도움이 되었는지 투표합니다.\n*   **거버넌스**: 이러한 데이터는 지식 관리자에게 전달되어 지식 자산의 수명 주기를 관리하는 중요한 인사이트가 됩니다."
  },
  {
    "id": 244,
    "title": "A form displays information about one record at the top, for example a User, Additional records, which are associated with that User, are displayed on tabs at the bottom of the form. What are those tabs called?",
    "options": [
      {
        "text": "Additional Info",
        "id": "A"
      },
      {
        "text": "More Info",
        "id": "B"
      },
      {
        "text": "Related Links",
        "id": "C"
      },
      {
        "text": "Related Lists",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**관련 리스트(Related Lists)**는 현재 보고 있는 레코드와 참조 관계(Relationship)를 맺고 있는 다른 테이블의 레코드들을 폼 하단에 목록으로 표시하는 기능입니다.\n*   **데이터 연결**: 예를 들어, 사용자(User) 폼 하단에 해당 사용자가 보유한 '자산(Assets)'이나 '할당된 인시던트' 목록을 탭 형태로 보여줍니다.\n*   **기능**: 사용자는 관련 리스트에서 레코드를 조회, 추가하거나 편집할 수 있으며, 폼을 벗어나지 않고도 연관된 데이터를 관리할 수 있어 업무 효율성을 높입니다.\n*   **구분**: **Related Links**는 실행 가능한 액션이나 특정 페이지로 이동하는 링크인 반면, **Related Lists**는 실제 데이터 레코드의 집합입니다."
  },
  {
    "id": 245,
    "title": "A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?",
    "options": [
      {
        "text": "Create New module has a broken link",
        "id": "A"
      },
      {
        "text": "Known intermittent issue with U115",
        "id": "B"
      },
      {
        "text": "User should be using Chrome instead of Explorer for their browser",
        "id": "C"
      },
      {
        "text": "User has read role, but not the write role on the Inventory table",
        "id": "D"
      },
      {
        "text": "User session has timed out",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 보안 모델인 **ACL(Access Control List)**은 테이블 및 필드 수준에서 매우 엄격한 권한 제어를 수행합니다.\n*   **가시성 vs 편집 권한**: 사용자가 내비게이터에서 모듈을 볼 수 있는 것은 '역할(Role)' 기반의 UI 제어 덕분이지만, 실제 레코드 생성 폼을 열었을 때 내용이 보이지 않거나 오류가 발생하는 것은 데이터베이스 수준의 **Create** 또는 **Write** ACL 권한이 없기 때문입니다.\n*   **진단**: 관리자는 해당 테이블의 ACL 설정을 확인하여 사용자가 적절한 역할을 가지고 있는지, 혹은 특정 조건에 의해 쓰기 권한이 제한되고 있는지 점검해야 합니다."
  },
  {
    "id": 246,
    "title": "You are looking at a list of Active incidents. You want to exclude incidents with the state of Resolved. How might you do that?",
    "options": [
      {
        "text": "On the list of records, locate the right-click on the Resolved value, select Exclude.",
        "id": "A"
      },
      {
        "text": "Click Funnel icon, click AND, Select Resolved, is Not State click Run",
        "id": "B"
      },
      {
        "text": "On state column title, right-click, select Filter Out > Resolved",
        "id": "C"
      },
      {
        "text": "On Search, select State, type not Resolved, press enter",
        "id": "D"
      },
      {
        "text": "On the list of records, locate and right-click on the Resolved value, select Filter Out",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "리스트 뷰에서 불필요한 데이터를 빠르게 걸러내기 위해 사용하는 가장 효율적인 방법은 **Filter Out (필터링 제외)** 기능입니다.\n*   **사용법**: 리스트 상의 특정 값(예: 'Resolved') 위에서 마우스 우클릭 후 해당 옵션을 선택합니다.\n*   **브레드크럼**: 이 작업을 수행하면 리스트 상단의 필터 경로(Breadcrumb)에 'State != Resolved'와 같은 조건이 즉시 추가됩니다.\n*   **생산성**: 복잡한 조건 빌더를 수동으로 조작하는 대신, 눈에 보이는 데이터를 기준으로 즉각적인 데이터 정제가 가능합니다."
  },
  {
    "id": 247,
    "title": "After you create a new table, what is the best practice regarding the navigation pane? Choose 2 answers",
    "options": [
      {
        "text": "Set the filter condition on the Application Menu",
        "id": "A"
      },
      {
        "text": "Set the font style on both the Application Menu and the Module",
        "id": "B"
      },
      {
        "text": "Specify which Roles are able to see the Module",
        "id": "C"
      },
      {
        "text": "Specify which Roles are able to see the Application Menu",
        "id": "D"
      },
      {
        "text": "Create Application Menu with the same name as the table label",
        "id": "E"
      },
      {
        "text": "Create Module with the plural of the table label",
        "id": "F"
      }
    ],
    "answer": [
      "E",
      "F"
    ],
    "explanation": "새로운 커스텀 테이블을 생성한 후 내비게이션을 정리할 때는 이름 규칙을 맞추는 것이 일반적인 베스트 프랙티스입니다.\n1.  **Application Menu (E)**: 애플리케이션 메뉴 이름은 테이블 레이블과 동일하게 맞춰, 사용자가 기능 범위를 바로 인지할 수 있게 합니다.\n2.  **Module (F)**: 모듈 이름은 보통 테이블 레이블의 복수형을 사용해, 해당 테이블의 레코드 목록임을 분명히 합니다.\n*   **이점**: 내비게이터에서 테이블과 메뉴의 대응 관계가 명확해져 검색성과 유지보수성이 좋아집니다."
  },
  {
    "id": 248,
    "title": "What are advantages of using Flow Designer? (Choose three.)",
    "options": [
      {
        "text": "Supports advanced developers",
        "id": "A"
      },
      {
        "text": "Enables complicated scripting",
        "id": "B"
      },
      {
        "text": "Reduces technical debt",
        "id": "C"
      },
      {
        "text": "Less manual scripting",
        "id": "D"
      },
      {
        "text": "Smooth integration with 3rd party systems",
        "id": "E"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**는 기존 워크플로우 엔진을 대체하는 차세대 프로세스 자동화 도구로 다음과 같은 명확한 이점을 제공합니다.\n*   **기술 부채 감소 (C)**: 로코드(Low-code) 기반의 구성을 통해 복잡한 스크립트 의존도를 낮춰 업그레이드와 유지보수를 용이하게 합니다.\n*   **수작업 스크립트 최소화 (D)**: 드래그 앤 드롭 방식의 직관적인 인터페이스와 자연어 문장 구성을 통해 비개발자도 자동화 로직을 이해하고 구축할 수 있습니다.\n*   **통합 용이성 (E)**: **Spoke**를 활용하여 외부 서드파티 시스템(Slack, Jira 등)과의 연동을 표준화된 방식으로 신속하게 구현할 수 있습니다."
  },
  {
    "id": 249,
    "title": "Which tables are available by default in a ServiceNow instance? Choose 3 answers",
    "options": [
      {
        "text": "User",
        "id": "A"
      },
      {
        "text": "Incident",
        "id": "B"
      },
      {
        "text": "Item",
        "id": "C"
      },
      {
        "text": "Issue",
        "id": "D"
      },
      {
        "text": "Project",
        "id": "E"
      },
      {
        "text": "Task",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "F"
    ],
    "explanation": "ServiceNow 플랫폼 설치 시 기본으로 제공되는 핵심 **코어 테이블(Core Tables)**입니다.\n*   **User (A)**: 모든 사용자 계정 정보가 담기는 `sys_user` 테이블.\n*   **Task (F)**: 플랫폼 전반의 모든 작업(Task) 프로세스의 근간이 되는 `task` 테이블.\n*   **Incident (B)**: IT 서비스 관리의 핵심인 인시던트 정보를 처리하는 `incident` 테이블.\n*   **아키텍처**: 이러한 테이블들은 플랫폼의 기반 데이터(Foundational Data)와 핵심 워크플로우를 구성하며, 다른 모든 커스텀 기능의 시작점이 됩니다."
  },
  {
    "id": 250,
    "title": "When using Flow Designer what is the Flow Execution initiated by?",
    "options": [
      {
        "text": "A trigger",
        "id": "A"
      },
      {
        "text": "An existing subflow",
        "id": "B"
      },
      {
        "text": "Allow logic",
        "id": "C"
      },
      {
        "text": "An execution data pill",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)** 아키텍처에서 자동화 로직의 실행을 촉발하는 첫 번째 단계를 **트리거(Trigger)**라고 합니다.\n*   **유형**:\n    1. **레코드 기반**: 레코드의 생성, 업데이트, 삭제 시 실행.\n    2. **일정 기반**: 특정 시간이나 주기에 따라 실행.\n    3. **애플리케이션 기반**: 인스턴스 외부나 앱의 특정 이벤트 발생 시 실행.\n*   **구조**: 트리거가 만족되면 이후 정의된 일련의 **액션(Actions)**들이 순차적으로 수행됩니다."
  },
  {
    "id": 251,
    "title": "A colleague wants to rearrange the columns on their My Work list. Once the user has navigated to the list where should they navigate to select and arrange the columns?",
    "options": [
      {
        "text": "Click Personalize List",
        "id": "A"
      },
      {
        "text": "Right click on any column header. Context Menu > Configure > List Layout",
        "id": "B"
      },
      {
        "text": "Click List Context Menu > Personalize List",
        "id": "C"
      },
      {
        "text": "Click List Content Menu > Configure > List Layout",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 리스트 뷰에서 컬럼의 구성(추가, 제거, 순서 변경)을 시스템 수준에서 영구적으로 수정하려면 **List Layout** 설정을 사용합니다.\n*   **접근 경로**: 리스트의 컬럼 헤더(컬럼명 영역)를 우클릭 -> **Configure > List Layout** 선택.\n*   **UI 도구**: 슬러시버킷(Slushbucket) 인터페이스를 통해 사용 가능한 필드를 선택하고 상하 이동 버튼으로 표시 순서를 조정합니다.\n*   **개인화와의 차이**: 톱니바퀴(Gear) 아이콘을 통한 개인화는 '본인'에게만 적용되지만, `Configure` 메뉴를 통한 변경은 해당 뷰를 사용하는 **모든 사용자**에게 영향을 미칩니다."
  },
  {
    "id": 252,
    "title": "A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?",
    "options": [
      {
        "text": "Scheduled Reports, a custom snapshot table, and a Trend report",
        "id": "A"
      },
      {
        "text": "Scheduled Reports and Excel",
        "id": "B"
      },
      {
        "text": "Scheduled Reports, a custom snapshot table, and a Projection report",
        "id": "C"
      },
      {
        "text": "Performance Analytics",
        "id": "D"
      },
      {
        "text": "Key Performance Indicators",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**성능 분석(Performance Analytics, PA)**은 단순한 시점 보고(Reporting)를 넘어 비즈니스 가치를 도출하는 고도화된 분석 도구입니다.\n*   **주요 기능**: 데이터의 장기적인 **추세(Trending)** 파악, 목표치(Targets) 대비 실적 비교, 그리고 과거 데이터를 바탕으로 한 **미래 예측(Forecasting)**을 지원합니다.\n*   **비교**: 보고서가 '현재 인시던트가 몇 개인가?'를 묻는다면, PA는 '우리의 해결 속도가 지난 6개월간 개선되었는가?'에 대한 답을 제공합니다."
  },
  {
    "id": 253,
    "title": "What component of the ServiceNow infrastructure defines every table and field in the system?",
    "options": [
      {
        "text": "Data Atlas",
        "id": "A"
      },
      {
        "text": "Table Class Manager",
        "id": "B"
      },
      {
        "text": "Schema",
        "id": "C"
      },
      {
        "text": "Dictionary",
        "id": "D"
      },
      {
        "text": "Field Map",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**시스템 딕셔너리(System Dictionary)**는 ServiceNow 데이터베이스의 설계도와 같은 역할을 하는 마스터 테이블(`sys_dictionary`)입니다.\n*   **메타데이터 관리**: 인스턴스 내 모든 테이블과 필드의 데이터 타입, 길이, 기본값, 참조 관계, 종속성 등을 정의합니다.\n*   **플랫폼 영향**: 여기서 설정된 속성은 폼(Form)의 표시 방식, API 통신, 그리고 데이터 무결성 검증의 기준이 됩니다."
  },
  {
    "id": 254,
    "title": "A manager is complaining that they can't get the data they need on a report because the data resides in two different tables. This data is used for many different reports in their department. You have checked to see if dot-walking will meet the requirement, and it is not possible. What else might you try to help this manager?",
    "options": [
      {
        "text": "Create a custom table",
        "id": "A"
      },
      {
        "text": "Create a Report Template",
        "id": "B"
      },
      {
        "text": "Create a Database View",
        "id": "C"
      },
      {
        "text": "Export the tables to a spreadsheet",
        "id": "D"
      },
      {
        "text": "Create a Report Source",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**데이터베이스 뷰(Database View)**는 여러 테이블에 분산된 데이터를 논리적으로 결합하여 하나의 가상 테이블처럼 조회할 수 있게 해주는 기능입니다.\n*   **활용 시나리오**: 참조(Reference) 관계가 아니어서 **닷워킹(Dot-Walking)**이 불가능한 테이블 간의 데이터를 결합하거나, 복잡한 SQL 'JOIN' 연산이 필요한 보고서를 생성할 때 필수적입니다.\n*   **특징**: 읽기 전용(Read-only) 인터페이스를 제공하며, 표준 보고서 디자이너에서 데이터 소스로 선택하여 사용할 수 있습니다."
  },
  {
    "id": 255,
    "title": "Which storefront is a single location for accessing pre-built spokes to quickly integrate with third-party services to build and share content?",
    "options": [
      {
        "text": "Integration Spoke Store",
        "id": "A"
      },
      {
        "text": "ServiceNow Store",
        "id": "B"
      },
      {
        "text": "Spoke Store",
        "id": "C"
      },
      {
        "text": "ServiceNow Spoke Store",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**ServiceNow Store**는 ServiceNow와 서드파티 파트너사들이 개발한 애플리케이션, 통합 솔루션, 그리고 **Spoke**를 배포하고 구매할 수 있는 공식 엔터프라이즈 마켓플레이스입니다.\n*   **생태계**: 검증된 사전 빌드된 Spoke를 통해 Jira, Slack, Microsoft Teams 등과의 연동을 복잡한 코딩 없이 신속하게 인스턴스에 추가할 수 있습니다.\n*   **이점**: 개발 시간을 단축하고 업계 표준의 모범 사례가 반영된 기능을 즉시 도입할 수 있게 돕습니다."
  },
  {
    "id": 256,
    "title": "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
    "options": [
      {
        "text": "Run Transform",
        "id": "A"
      },
      {
        "text": "Run Import",
        "id": "B"
      },
      {
        "text": "Import Dataset",
        "id": "C"
      },
      {
        "text": "Execute Transform",
        "id": "D"
      },
      {
        "text": "Schedule Transform",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 데이터 임포트 흐름에서 데이터가 최종 **받는 테이블(receiving table)**에 기록되는 단계는 **Run Transform**입니다.\n*   **단계별 구분**:\n    1. **Load Data**: 외부 파일을 **임포트 세트 테이블(Staging Table)**에 적재합니다.\n    2. **Transform Map**: 소스와 타겟 필드 간 매핑 규칙을 정의합니다.\n    3. **Run Transform**: 설정된 맵을 실행하여 스테이징 데이터가 최종 목적지 테이블에 쓰입니다.\n*   **정리**: 보기 중 실제 ServiceNow 용어와 맞는 것은 **A**입니다."
  },
  {
    "id": 257,
    "title": "While testing a Catalog Item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob, Smith, but not for any of the other requesters. What could explain the issue?",
    "options": [
      {
        "text": "There is a business rule, excluding Bob.Smith from any approvals.",
        "id": "A"
      },
      {
        "text": "Bob Smith does not have a delegate set up on his account.",
        "id": "B"
      },
      {
        "text": "The Bob Smith user account, does not have a manager specified.",
        "id": "C"
      },
      {
        "text": "The manager does not have a delegate assigned.",
        "id": "D"
      },
      {
        "text": "Bob Smith is a VIP.",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "관리자 승인 흐름에서 특정 요청자에게만 승인이 생략된다면, 가장 먼저 해당 사용자의 **매니저 정보가 올바르게 설정되어 있는지** 확인해야 합니다.\n*   **핵심 원인**: 요청자 사용자 레코드에 매니저가 없으면, 매니저 승인 라우팅이 정상적으로 생성되지 않을 수 있습니다.\n*   **비교**: 다른 요청자에게는 승인 절차가 정상 동작한다면, 전역 로직 문제보다 **개별 사용자 데이터** 문제를 먼저 의심하는 것이 맞습니다.\n*   **정리**: 이 문항의 출제 의도는 승인 예외 처리보다 **사용자 레코드의 manager 필드 누락**을 식별하는 것입니다."
  },
  {
    "id": 258,
    "title": "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationship?",
    "options": [
      {
        "text": "CSDM Schema",
        "id": "A"
      },
      {
        "text": "Business Service Map",
        "id": "B"
      },
      {
        "text": "Dependency View",
        "id": "C"
      },
      {
        "text": "CI Class Map",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "CMDB 내 구성 항목(CI)과 그 관계를 시각적으로 보여주는 ServiceNow 유틸리티는 **Dependency View**입니다.\n*   **출제 의도**: 특정 CI가 어떤 다른 CI에 의존하는지, 그리고 장애가 상위 서비스에 어떤 영향을 주는지 파악할 수 있는지 확인합니다.\n*   **정리**: 보기 중 `Dependency View`가 실제 플랫폼 용어와 가장 정확히 맞습니다."
  },
  {
    "id": 259,
    "title": "Which low components allow you to specify when a flow should be run?",
    "options": [
      {
        "text": "Trigger and Condition Pill",
        "id": "A"
      },
      {
        "text": "Scope and Trigger Condition",
        "id": "B"
      },
      {
        "text": "Trigger and Condition",
        "id": "C"
      },
      {
        "text": "Trigger Criteria and Clock",
        "id": "D"
      },
      {
        "text": "Condition and Table",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**에서 자동화 로직의 실행 여부를 결정하는 두 핵심 요소는 **트리거(Trigger)**와 **조건(Condition)**입니다.\n*   **Trigger**: '언제(When)' 실행할 것인가를 정의합니다 (예: 레코드 생성, 특정 시간).\n*   **Condition**: 트리거가 발생한 후 실제 액션들을 수행하기 위해 만족해야 하는 '세부 필드 상태'를 정의합니다.\n*   **구조**: 트리거가 감지되어도 내부 조건이 '거짓(False)'이면 플로우는 중단됩니다."
  },
  {
    "id": 260,
    "title": "What section on a task record is used to see the most recent updates made to a record?",
    "options": [
      {
        "text": "Related List",
        "id": "A"
      },
      {
        "text": "Activity Stream",
        "id": "B"
      },
      {
        "text": "Audit Log",
        "id": "C"
      },
      {
        "text": "Timeline",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 태스크 레코드의 폼에서 변경 사항을 실시간으로 추적하는 가장 강력한 UI 요소는 **활동 스트림(Activity Stream / Activity Formatter)**입니다.\n*   **통합 뷰**: 작업 메모(Work notes), 고객 댓글(Additional comments), 그리고 필드 값의 변화 이력(Audit)을 시간순으로 정렬하여 대화형 피드 형태로 보여줍니다.\n*   **협업**: 담당자들은 이 스트림을 통해 과거의 맥락을 빠르게 파악하고 팀원 및 고객과 소통할 수 있습니다."
  },
  {
    "id": 261,
    "title": "What types of entities can receive task assignments, in ServiceNow? Choose 2 answers",
    "options": [
      {
        "text": "Groups",
        "id": "A"
      },
      {
        "text": "Users",
        "id": "B"
      },
      {
        "text": "Departments",
        "id": "C"
      },
      {
        "text": "Teams.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "ServiceNow 플랫폼 아키텍처에서 태스크(Task)를 할당받아 이행할 수 있는 주체는 **사용자(Users)**와 **그룹(Groups)**입니다.\n1.  **Assignment Group (A)**: 작업의 책임을 공유하는 논리적 단위입니다. 일반적으로 팀 단위로 일을 먼저 배정합니다.\n2.  **Assigned to (B)**: 그룹 내에서 실제 업무를 수행할 개별 실무자입니다.\n*   **베스트 프랙티스**: 모든 작업은 먼저 적절한 '그룹'에 배정되어야 하며, 이후 그룹 멤버 중 한 명에게 세부 할당되는 프로세스가 권장됩니다."
  },
  {
    "id": 262,
    "title": "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
    "options": [
      {
        "text": "Parent-Child Approvers.",
        "id": "A"
      },
      {
        "text": "Approval Chains",
        "id": "B"
      },
      {
        "text": "Flows",
        "id": "C"
      },
      {
        "text": "Approval Criteria",
        "id": "D"
      },
      {
        "text": "Approver Delegates",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**승인 기준(Approval Criteria)**은 특정 조건에 따라 승인 프로세스를 트리거하고 제어하는 정책 세트입니다.\n*   **복합 승인**: 문제와 같이 다단계(Two levels) 승인이 필요한 경우, 각 단계별 승인자 그룹과 조건을 정의하여 프로세스를 자동화합니다.\n*   **알림 연동**: 승인 요청이 생성되거나 상태가 변경될 때 관련 사용자에게 자동으로 이메일이나 푸시 알림을 보내는 비즈니스 로직을 포함합니다.\n*   **참고**: 현대적인 ServiceNow 아키텍처에서는 이러한 로직을 **플로우 디자이너(Flow Designer)**를 통해 구현하는 것이 표준입니다."
  },
  {
    "id": 263,
    "title": "You are editing a new incident record and would like the Save button to be located on the Form header. Which action would need to be taken for that button to appear?",
    "options": [
      {
        "text": "All > System Properties > UI Properties > Turn on the glide.ui.advanced* property",
        "id": "A"
      },
      {
        "text": "Context Menu > Form Design > add the Save button",
        "id": "B"
      },
      {
        "text": "All > System Properties > UI Properties > Turn on the Save button",
        "id": "C"
      },
      {
        "text": "Context Menu > Form Layout > add the Save button",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 폼에서 'Save' 버튼의 가시성은 인스턴스 전역의 **UI 속성(UI Properties)** 설정을 통해 제어됩니다.\n*   **설정 경로**: `System Properties > UI Properties` 모듈에서 관련 속성(예: 'Show the Save button on the form header')을 활성화합니다.\n*   **Submit vs Save**: 'Submit'은 레코드를 생성/업데이트하고 목록으로 돌아가지만, 'Save'는 변경사항을 저장하면서 현재 폼에 계속 머물게 합니다. 이는 대규모 데이터 입력 작업 시 생산성을 높여줍니다."
  },
  {
    "id": 264,
    "title": "Farm a form, what would you click, to modify the order of the fields on the form? Choose 2 answers",
    "options": [
      {
        "text": "Context Menu > Configure > Form Layout",
        "id": "A"
      },
      {
        "text": "Context Menu > Form > Layout",
        "id": "B"
      },
      {
        "text": "Right click on header > Configure > Form Design",
        "id": "C"
      },
      {
        "text": "Context Menu > Configure > Form Designer",
        "id": "D"
      },
      {
        "text": "Right click on header > Configure > UX Dashboard",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow는 폼의 레이아웃과 필드 순서를 조정하기 위해 두 가지 주요 관리 도구를 제공합니다.\n1.  **Form Layout (A)**: 'Configure > Form Layout'을 통해 슬러시버킷 인터페이스를 사용하며, 필드를 신속하게 추가하거나 섹션 간 이동시킬 때 유용합니다.\n2.  **Form Design (C)**: 'Configure > Form Design'을 통해 드래그 앤 드롭 방식의 시각적 인터페이스를 제공하며, 레이아웃의 구조(1열 vs 2열)와 필드 배치를 직관적으로 설계할 수 있습니다."
  },
  {
    "id": 265,
    "title": "The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?",
    "options": [
      {
        "text": "service_desk",
        "id": "A"
      },
      {
        "text": "impersonator",
        "id": "B"
      },
      {
        "text": "admin",
        "id": "C"
      },
      {
        "text": "incognito",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**사용자 가장(User Impersonation)** 기능은 지원팀이나 개발자가 로그아웃 없이 다른 사용자의 권한과 UI 환경을 대리 수행할 수 있게 해주는 도구입니다.\n*   **필요 역할**: 이 기능을 사용하기 위해서는 **`impersonator`** 역할이나 `admin` 역할이 부여되어야 합니다.\n*   **테스트 최적화**: 특정 그룹(예: Service Desk) 멤버의 시각에서 ACL이나 UI Policy가 의도대로 작동하는지 검증할 때 필수적입니다.\n*   **감사**: 모든 가장 활동은 시스템 로그에 기록되어 보안 투명성을 유지합니다."
  },
  {
    "id": 266,
    "title": "When you are viewing a record, like an incident, how can you detect if someone else is also actively working on the Incident? (Choose 2 answers)",
    "options": [
      {
        "text": "A chat bubble automatically launches, so you can collaborate",
        "id": "A"
      },
      {
        "text": "An icon appears to the left of fields that have been updated by other users",
        "id": "B"
      },
      {
        "text": "A notification appears asking the new user to collaborate",
        "id": "C"
      },
      {
        "text": "The Work notes list contains names of the other users",
        "id": "D"
      },
      {
        "text": "User presence icon shows initials of users actively viewing the record",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "ServiceNow는 다수의 사용자가 동시에 동일한 레코드를 작업할 때 발생할 수 있는 충돌을 방지하고 협업을 돕기 위해 **사용자 존재(User Presence)** 기능을 제공합니다.\n1.  **Presence Icon (E)**: 폼 헤더 우측에 현재 해당 레코드를 열람 중인 사용자들의 이니셜 아이콘이 표시됩니다.\n2.  **Field Indicator (B)**: 다른 사용자가 특정 필드 값을 수정하고 있으면 해당 필드 옆에 표시가 나타나 실시간 변경 사항을 알려줍니다.\n*   **가치**: 이를 통해 데이터 덮어쓰기 위험을 줄이고 팀 간 실시간 협업(Form Collaboration)을 촉진합니다."
  },
  {
    "id": 267,
    "title": "Groups are stored in what table?",
    "options": [
      {
        "text": "Group [sys_user_group]",
        "id": "A"
      },
      {
        "text": "Group [sn_sys_user_group]}",
        "id": "B"
      },
      {
        "text": "User Group [user_groups]",
        "id": "C"
      },
      {
        "text": "User Groups [sn_user_groups]",
        "id": "D"
      },
      {
        "text": "Groups [sys_user_groups]",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 플랫폼의 기반 데이터(Foundational Data) 아키텍처에서 **그룹(Group)** 정보는 **`sys_user_group`** 테이블에 물리적으로 저장됩니다.\n*   **그룹의 역할**: 역할(Roles)을 부여받는 논리적 단위이며, 태스크 할당 및 알림 수신의 대상이 됩니다.\n*   **명명 규칙**: 시스템 테이블은 `sys_` 접두사를 가지며, 사용자(`sys_user`), 역할(`sys_user_role`)과 함께 권한 체계의 핵심 트리오를 형성합니다."
  },
  {
    "id": 268,
    "title": "A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role What type of rules (s) would you use to implement this requirement?",
    "options": [
      {
        "text": "Dictionary Design",
        "id": "A"
      },
      {
        "text": "Field Limiter",
        "id": "B"
      },
      {
        "text": "UI Policy",
        "id": "C"
      },
      {
        "text": "UI Design",
        "id": "D"
      },
      {
        "text": "Form Constraint",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**UI 정책(UI Policy)**은 폼 수준에서 조건에 따라 필드의 동작을 동적으로 제어하는 가장 효율적인 **노코드(No-code)** 도구입니다.\n*   **동적 제어**: '상태가 Resolved로 바뀔 때 해결 코드 필수(Mandatory) 지정', '특정 역할이 없을 때 필드 숨김(Hidden)'과 같은 복잡한 UI 로직을 스크립트 없이 구현할 수 있습니다.\n*   **클라이언트 측 실행**: 브라우저에서 즉각 실행되어 사용자에게 실시간 피드백을 제공하므로 사용자 경험(UX) 향상에 최적화되어 있습니다."
  },
  {
    "id": 269,
    "title": "Access controls are evaluated in this order: *1. Match object against table ACL* 2, Match the object against field ACL Within step 1 above, what order are the table ACLs evaluated?",
    "options": [
      {
        "text": "Specific to general: Table.Field ACL, Parent Table.Field ACL, *.Field ACL",
        "id": "A"
      },
      {
        "text": "Bottom to top: Table ACL. Table.Field ACL, Parent Table. Field ACL",
        "id": "B"
      },
      {
        "text": "General to specific: Table ACL, Table.Field ACL, Parent Table, Field ACL",
        "id": "C"
      },
      {
        "text": "Top to bottom: Wildcard Table ACL, Parent Table ACL, Table ACL",
        "id": "D"
      },
      {
        "text": "Specific general: Table ACL, Parent Table ACL, Wildcard (*) ACL",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "ServiceNow의 **접근 제어(ACL)** 평가 엔진은 보안을 위해 **가장 구체적인 규칙에서 가장 일반적인 규칙으로(Most Specific to Most General)** 순차 탐색합니다.\n*   **평가 순서**: \n    1. **Table ACL**: 해당 테이블에 명시된 규칙.\n    2. **Parent Table ACL**: 부모 테이블로부터 상속받은 규칙.\n    3. **Wildcard (*) ACL**: 모든 테이블에 적용되는 전역 규칙.\n*   **가드레일**: 시스템은 상위 계층인 테이블 수준 ACL을 통과한 경우에만 하위 계층인 필드 수준 ACL을 평가하여 최종 접근 허용 여부를 결정합니다."
  },
  {
    "id": 270,
    "title": "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
    "options": [
      {
        "text": "Field Matching",
        "id": "A"
      },
      {
        "text": "Load Data",
        "id": "B"
      },
      {
        "text": "Select Data Source",
        "id": "C"
      },
      {
        "text": "Schedule Transform",
        "id": "D"
      },
      {
        "text": "Create Transform Map",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "**변환 맵(Transform Map)**은 임포트 세트(Import Set)의 소스 데이터와 ServiceNow의 타겟 테이블 간의 연결 고리를 정의하는 핵심 매핑 도구입니다.\n*   **필드 매핑**: 소스의 'Column A'가 타겟 테이블의 'Field B'에 저장되도록 데이터의 이동 경로를 명시합니다.\n*   **데이터 변환**: 단순히 데이터를 옮기는 것을 넘어, 스크립트나 매핑 규칙을 통해 소스 데이터를 타겟 환경에 맞는 형식으로 가공(Transformation)하는 역할을 수행합니다."
  },
  {
    "id": 271,
    "title": "What tool is used to import data from various data sources, and map that data into ServiceMow tables?",
    "options": [
      {
        "text": "Import Set",
        "id": "A"
      },
      {
        "text": "Update Set",
        "id": "B"
      },
      {
        "text": "Data Pack",
        "id": "C"
      },
      {
        "text": "Transform Set",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**임포트 세트(Import Set)**는 다양한 외부 데이터 소스(Excel, CSV, XML, JDBC 등)로부터 데이터를 가져와 ServiceNow 테이블에 매핑하고 적재하기 위한 플랫폼의 표준 프레임워크입니다.\n*   **스테이징 영역**: 데이터는 최종 목적지 테이블로 들어가기 전, 임포트 세트 테이블(Staging Table)에 임시로 적재됩니다.\n*   **데이터 소스**: 데이터가 어디서 오는지(파일, 외부 DB 등)를 정의하며, 변환 맵(Transform Map)을 통해 데이터 정제 및 필드 연결을 수행합니다."
  },
  {
    "id": 272,
    "title": "Which field (or fields) is used as a unique key during imports?",
    "options": [
      {
        "text": "Match Fields",
        "id": "A"
      },
      {
        "text": "Coalesce Fields",
        "id": "B"
      },
      {
        "text": "Key Fields",
        "id": "C"
      },
      {
        "text": "Sys IDs",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**병합 필드(Coalesce Fields)**는 데이터 임포트 시 중복을 방지하기 위해 사용되는 '고유 식별자' 역할을 합니다.\n*   **매칭 성공**: 임입 데이터의 병합 필드 값이 타겟 테이블의 기존 레코드와 일치하면, 시스템은 새 레코드를 만들지 않고 기존 레코드를 **업데이트(Update)**합니다.\n*   **매칭 실패**: 일치하는 값이 없으면 시스템은 이를 새로운 항목으로 간주하여 **신규 생성(Insert)**합니다.\n*   **데이터 무결성**: 데이터 정합성을 유지하기 위해 사번, 이메일, 자산 번호 등 고유한 비즈니스 키를 병합 필드로 지정하는 것이 필수적입니다."
  },
  {
    "id": 273,
    "title": "What is the definition of a group?",
    "options": [
      {
        "text": "An escalation pod",
        "id": "A"
      },
      {
        "text": "A department",
        "id": "B"
      },
      {
        "text": "A collection of users",
        "id": "C"
      },
      {
        "text": "A collection of subject matter experts",
        "id": "D"
      },
      {
        "text": "A team of users",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 플랫폼에서 **그룹(Groups)**은 **`sys_user_group`** 테이블에 저장되는 레코드이며, 공통의 역할이나 업무 맥락을 공유하는 사용자들의 논리적 집합입니다.\n*   **역할**: 그룹은 권한 관리(Roles 부여), 태스크 배정(Assignment Rules), 그리고 알림 수신의 기본 단위가 됩니다.\n*   **베스트 프랙티스**: 권한 관리를 효율화하기 위해 개별 사용자에게 역할을 직접 주기보다, 역할을 그룹에 부여하고 사용자를 해당 그룹의 멤버로 포함시키는 방식(RBAC)이 권장됩니다."
  },
  {
    "id": 274,
    "title": "Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?",
    "options": [
      {
        "text": "Requests can contain many items; and Items can be any item from the catalog.",
        "id": "A"
      },
      {
        "text": "Vendors can sell multiple products; and products can be sold by multiple vendors.",
        "id": "B"
      },
      {
        "text": "A Task can trigger many Workflows; and a Workflow can trigger many Tasks",
        "id": "C"
      },
      {
        "text": "A Configuration Item can belong to multiple Classes; and Classes can contain multiple Configuration",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**다대다(Many-to-Many, M2M)** 관계는 한 테이블의 여러 레코드가 다른 테이블의 여러 레코드와 동시에 연결될 수 있는 관계형 데이터 모델입니다.\n*   **실례**: 본 문항의 예시처럼 한 업체(Vendor)는 여러 제품을 판매할 수 있고, 하나의 동일한 제품은 여러 업체에 의해 공급될 수 있습니다.\n*   **플랫폼 구현**: 시스템은 내부적으로 교차 테이블(Junction Table)을 생성하여 두 테이블 간의 관계 정보를 별도로 관리하며, 사용자에게는 양쪽 폼에서 서로를 **관련 리스트(Related List)**로 보여줍니다."
  },
  {
    "id": 275,
    "title": "What access does a user need to be able to import anicies to a knowledge base?",
    "options": [
      {
        "text": "Can contribute",
        "id": "A"
      },
      {
        "text": "sn_knowledge_contripute",
        "id": "B"
      },
      {
        "text": "sn_knowledge_import",
        "id": "C"
      },
      {
        "text": "Can import",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "지식 관리(Knowledge Management)에서 문서를 생성하거나 대량으로 가져오기(Import) 위해서는 해당 지식 기반(Knowledge Base) 수준에서 정의된 **기여 권한(`Can contribute`)**이 반드시 필요합니다.\n*   **보안 제어**: 지식 접근 권한은 **사용자 기준(User Criteria)**을 통해 설정됩니다.\n*   **권한 계층**: 'Can Read' 권한만 가진 사용자는 문서 검색과 열람만 가능하며, 지식 자산의 수명 주기(작성, 수정, 은퇴)에 참여하려면 기여(Contribute) 권한이 명시되어 있어야 합니다."
  },
  {
    "id": 276,
    "title": "What Service Catalog feature do you use to organize items into logical groups?",
    "options": [
      {
        "text": "Variable sets",
        "id": "A"
      },
      {
        "text": "Catalog items",
        "id": "B"
      },
      {
        "text": "Sections",
        "id": "C"
      },
      {
        "text": "Categories",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Service Catalog에서 항목들을 주제별로 묶어 논리적 그룹을 만들 때는 **Categories**를 사용합니다.\n*   **출제 의도**: 카탈로그 항목을 사용자가 찾기 쉽게 분류하는 기능을 묻는 문항입니다.\n*   **구분**: `Variable Sets`는 여러 카탈로그 항목에서 재사용하는 공통 변수 묶음이고, 항목 분류 자체를 담당하는 기능은 아닙니다.\n*   **정리**: 따라서 정답은 **D**입니다."
  },
  {
    "id": 277,
    "title": "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, files, and legend layout?",
    "options": [
      {
        "text": "Format",
        "id": "A"
      },
      {
        "text": "Layout",
        "id": "B"
      },
      {
        "text": "Style",
        "id": "C"
      },
      {
        "text": "Configure",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "보고서 디자이너(Report Designer)는 4단계의 설정 과정을 거치며, 마지막 단계인 **Style** 탭에서 보고서의 '룩앤필(Look and Feel)'을 조정합니다.\n*   **설정 항목**: 차트의 색상 팔레트 지정, 범례(Legend)의 표시 여부 및 위치, 데이터 레이블 추가, 소수점 자리수 등 시각화의 세부 속성을 정의합니다.\n*   **기타 단계**: Data(원본 선택) -> Type(시각화 유형 선택) -> Configure(데이터 그룹화 및 계산 설정) 순으로 진행됩니다."
  },
  {
    "id": 278,
    "title": "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    "options": [
      {
        "text": "Report Dashboard > Create New",
        "id": "A"
      },
      {
        "text": "Reports > Getting Started",
        "id": "B"
      },
      {
        "text": "Performance Analytics > Reports",
        "id": "C"
      },
      {
        "text": "Self-Service > Reports",
        "id": "D"
      },
      {
        "text": "Reports > Create New",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "분석가나 관리자가 인스턴스 데이터를 바탕으로 새로운 데이터 통찰을 생성하기 위해 가장 먼저 방문해야 할 모듈은 **Reports > Create New**입니다.\n*   **보고서 디자이너**: 이 모듈을 클릭하면 단계별 보고서 작성 도구가 열리며, 사용자는 코딩 없이도 드래그 앤 드롭 방식으로 원하는 데이터를 시각화할 수 있습니다.\n*   **공유**: 작성된 보고서는 대시보드에 게시하거나 특정 그룹 또는 전체 사용자에게 공유하여 협업에 활용할 수 있습니다."
  },
  {
    "id": 279,
    "title": "How is a user defined in ServiceNow?",
    "options": [
      {
        "text": "user is a record stored in the User Preference [Sys_user_preference] table",
        "id": "A"
      },
      {
        "text": "A User is a record stored in the Profile [sys_user_profile] table",
        "id": "B"
      },
      {
        "text": "A user is 2 field in the LOAP integration",
        "id": "C"
      },
      {
        "text": "A user is a record stored in the User [sys_user] table",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow에서 사용자는 **`sys_user`** 테이블의 레코드로 정의됩니다.\n*   **표준 사용자 레코드**: 이름, 이메일, 부서, 위치 같은 사용자 마스터 데이터가 들어 있습니다.\n*   **구분**: `sys_user_preference`는 개별 사용자 환경설정, `sys_user_profile`은 표준 사용자 정의 테이블로 보지 않습니다.\n*   **정리**: 이 문항의 정답은 **D**입니다."
  },
  {
    "id": 280,
    "title": "To apply a UI Policy to all views, which field should be set to true in its definition record?",
    "options": [
      {
        "text": "Inherit",
        "id": "A"
      },
      {
        "text": "Reverse if false",
        "id": "B"
      },
      {
        "text": "On lowed",
        "id": "C"
      },
      {
        "text": "Global",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**상속(`Inherit`)** 필드는 UI 정책(UI Policy)이나 데이터 정책의 규칙을 해당 테이블뿐만 아니라 이를 확장(Extend)한 하위 테이블이나 다양한 폼 뷰(Views)에 공통으로 적용하고자 할 때 사용됩니다.\n*   **일관성 유지**: 예를 들어 `task` 테이블에 설정된 정책을 `Inherit=true`로 설정하면, 인시던트나 변경 요청 등 모든 하위 업무 폼에서도 동일한 데이터 가드레일이 작동하도록 보장합니다.\n*   **참고**: 'Global' 체크박스는 특정 뷰에 국한되지 않고 모든 폼 뷰에서 정책이 실행되도록 하는 역할을 합니다."
  },
  {
    "id": 281,
    "title": "Which testing framework is used to test ServiceNow Applications?",
    "options": [
      {
        "text": "Selenium",
        "id": "A"
      },
      {
        "text": "Test Driven Framework (TDF)",
        "id": "B"
      },
      {
        "text": "Junit",
        "id": "C"
      },
      {
        "text": "Automated test Framework (ATF)",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**자동화 테스트 프레임워크(ATF, Automated Test Framework)**는 수동 테스트의 번거로움을 줄이고 애플리케이션의 품질을 보장하기 위한 플랫폼 내장 도구입니다.\n*   **주요 용도**: 특히 인스턴스 **업그레이드** 시 기존 커스터마이징이 의도대로 작동하는지 확인하는 회귀 테스트(Regression Testing)에 필수적입니다.\n*   **기능**: 폼의 필드 값 입력, 버튼 클릭, 서버 측 로직 검증 등 사용자의 동작을 시나리오화하여 자동으로 수행합니다.\n*   **장점**: 테스트 환경을 자동으로 설정(Set up)하고 종료 후 데이터를 복구(Roll back)하여 인스턴스 데이터의 무결성을 유지합니다."
  },
  {
    "id": 282,
    "title": "Which actions would you take to edit the title on an application menu? (Choose 2 answers)",
    "options": [
      {
        "text": "Select Configuration > Applications, then select the application",
        "id": "A"
      },
      {
        "text": "Select the form for the Application, then right-click Configure > Form Designer",
        "id": "B"
      },
      {
        "text": "Select the Application name on the Navigator, then select the pencil icon",
        "id": "C"
      },
      {
        "text": "Select System Definitions > Application Menus, then select the application",
        "id": "D"
      },
      {
        "text": "Select System Definition > Dictionary > Application",
        "id": "E"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "애플리케이션 메뉴의 제목(Title)을 편집하는 방법은 관리의 편의성에 따라 두 가지 경로가 있습니다.\n1.  **Pencil 아이콘 (C)**: 애플리케이션 내비게이터에서 특정 앱 이름 옆의 연필 모양 아이콘을 클릭하여 UI 상에서 즉시 수정합니다.\n2.  **Application Menus 모듈 (D)**: `System Definition > Application Menus` 레코드를 직접 열어 상세 속성과 함께 타이틀을 변경합니다.\n*   **주의**: 이러한 변경은 시스템 전역의 설정이므로 해당 앱을 사용하는 모든 사용자의 내비게이터에 반영됩니다."
  },
  {
    "id": 283,
    "title": "One related list, which buttons are commonly used for managing the records on the list? Choose 3 answers",
    "options": [
      {
        "text": "Publish",
        "id": "A"
      },
      {
        "text": "New",
        "id": "B"
      },
      {
        "text": "Add",
        "id": "C"
      },
      {
        "text": "Manage",
        "id": "D"
      },
      {
        "text": "Edit",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "**관련 리스트(Related Lists)** 하단에 위치한 표준 버튼들은 연관된 데이터를 관리하는 핵심 도구입니다.\n1.  **New (B)**: 현재 레코드와 연결된 **새로운 자식 레코드**를 즉시 생성합니다.\n2.  **Add/Edit (C, E)**: 시스템에 이미 존재하는 기존 레코드를 현재 레코드와 연결하거나 해제(Relationship)할 때 사용합니다.\n*   **구성**: 이 버튼들의 노출 여부는 'List Control' 설정을 통해 관리자가 조정할 수 있습니다."
  },
  {
    "id": 284,
    "title": "Which script can run when a record is displayed, inserted, updated, deleted, or when a table is queried?",
    "options": [
      {
        "text": "Business Rule",
        "id": "A"
      },
      {
        "text": "Client Script",
        "id": "B"
      },
      {
        "text": "Record Rule",
        "id": "C"
      },
      {
        "text": "UI Script",
        "id": "D"
      },
      {
        "text": "Scheduled Job",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**비즈니스 규칙(Business Rules)**은 데이터베이스의 변화가 발생할 때 실행되는 가장 강력한 **서버 측(Server-side)** 로직입니다.\n*   **트리거 시점**: 레코드가 조회(Query), 표시(Display), 삽입(Insert), 수정(Update), 삭제(Delete)될 때 실행되도록 설정할 수 있습니다.\n*   **실행 가이드**: 폼 레이아웃의 실시간 변화보다는, 데이터의 물리적 정합성을 맞추거나 연관된 다른 테이블을 업데이트하는 등의 백엔드 처리에 주로 사용됩니다."
  },
  {
    "id": 285,
    "title": "What is the result of the order in which access controls are evaluated?",
    "options": [
      {
        "text": "Ensures user has access to the fields in a table, before considering their access to the table",
        "id": "A"
      },
      {
        "text": "Ensures user can get to work as quickly as possible",
        "id": "B"
      },
      {
        "text": "Ensures user has access to the application, before evaluating access to a module within the application",
        "id": "C"
      },
      {
        "text": "Ensures user has access to a table, before evaluating access to a field in the table",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow의 **접근 제어(ACL)** 평가 엔진은 보안의 극대화를 위해 '가장 넓은 범위에서 좁은 범위로' 단계별 검증을 수행합니다.\n*   **평가 순서**: 항상 **테이블(Table) 수준**의 규칙을 가장 먼저 확인하며, 여기서 승인된 경우에만 개별 **필드(Field) 수준**의 규칙을 평가합니다.\n*   **보안 가드레일**: 만약 사용자가 테이블에 대한 접근 권한(None 또는 *)이 없다면, 필드 수준 ACL은 평가조차 되지 않고 모든 데이터 접근이 차단됩니다."
  },
  {
    "id": 286,
    "title": "Which best describes a field in a SeniceNow table?",
    "options": [
      {
        "text": "A field is a table cell that stores data",
        "id": "A"
      },
      {
        "text": "A field is a table row",
        "id": "B"
      },
      {
        "text": "A field is an item that appears in a menu list",
        "id": "C"
      },
      {
        "text": "A field is a record in a table",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow에서 **필드(Field)**는 테이블의 **열(Column)**에 해당하며, 각 레코드의 개별 속성 값을 저장하는 기본 단위입니다.\n*   **비교**: 행(Row)은 레코드(record)이고, 필드(Column)는 그 레코드의 속성입니다.\n*   **정리**: 문항의 보기 중 가장 가까운 것은 **A**입니다."
  },
  {
    "id": 287,
    "title": "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    "options": [
      {
        "text": "Module",
        "id": "A"
      },
      {
        "text": "Content Frame",
        "id": "B"
      },
      {
        "text": "Application Navigator",
        "id": "C"
      },
      {
        "text": "User Menu",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**사용자 가장(User Impersonation)** 기능은 UI 상단의 배너 프레임(Banner Frame) 우측에 위치한 **사용자 메뉴(User Menu)**를 통해 접근할 수 있습니다.\n*   **활용**: 자신의 계정 프로필 이름을 클릭하면 드롭다운 메뉴에 'Impersonate user' 옵션이 나타납니다.\n*   **역할**: 이 기능은 `admin`이나 `impersonator` 역할을 가진 사용자에게만 노출되며, 다른 사용자의 관점에서 인스턴스를 테스트하는 데 사용됩니다."
  },
  {
    "id": 288,
    "title": "Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?",
    "options": [
      {
        "text": "Add the role Log Write [sn_log_write] to the Impersonator Group",
        "id": "A"
      },
      {
        "text": "Create user update set for impersonation tracking",
        "id": "B"
      },
      {
        "text": "Activate the glide.sys.log_impersonation prop",
        "id": "C"
      },
      {
        "text": "From User icon, select Elevate Roles",
        "id": "D"
      },
      {
        "text": "On the Impersonator role record, right click and select Create Log",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 인스턴스 보안 거버넌스를 위해 관리자의 가장 활동을 추적하는 방법은 **시스템 속성**을 활용하는 것입니다.\n*   **속성명**: **`glide.sys.log_impersonation`**을 `true`로 설정하면 모든 가장 이벤트가 `sys_log` 테이블에 명확히 기록됩니다.\n*   **보안 감사**: 누가 누구를 언제 가장했는지에 대한 감사 추적(Audit Trail)을 가능하게 하여 고권한 계정의 남용을 방지하고 투명성을 확보합니다."
  },
  {
    "id": 289,
    "title": "Which allows the creation of a task-based record from Service Catalog?",
    "options": [
      {
        "text": "Record Producers",
        "id": "A"
      },
      {
        "text": "UI Builder",
        "id": "B"
      },
      {
        "text": "Assignment Rule",
        "id": "C"
      },
      {
        "text": "Flow Designer",
        "id": "D"
      },
      {
        "text": "UI Actions= Answer: A",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**레코드 프로듀서(Record Producer)**는 서비스 카탈로그를 사용자 친화적인 인터페이스로 활용하여 백엔드 테이블에 데이터를 직접 생성하는 강력한 도구입니다.\n*   **사용자 경험**: 사용자는 복잡한 데이터베이스 폼 대신 직관적인 질문(Variables)에 답함으로써 Incident나 Change Request 같은 태스크 레코드를 손쉽게 생성할 수 있습니다.\n*   **비교**: 일반 카탈로그 항목(Catalog Item)이 'Requested Item(RITM)'을 생성하는 것과 달리, 레코드 프로듀서는 지정된 특정 테이블로 데이터를 직접 삽입합니다."
  },
  {
    "id": 290,
    "title": "In what order are Access Controls evaluated?",
    "options": [
      {
        "text": "Field-level - mast general to most specific: then Row-level - most specific to most general",
        "id": "A"
      },
      {
        "text": "Table-level - most specific to most general; then Row-level - most specific to most general",
        "id": "B"
      },
      {
        "text": "Table-level - most specific to most general; then Field-level « most specific to mast general",
        "id": "C"
      },
      {
        "text": "Field-level - most specific to most general: then Table-level - most specific to most general",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow의 ACL 평가는 **테이블 수준**을 먼저 확인하고, 그 다음 **필드 수준**을 확인하는 순서로 진행됩니다.\n*   **레벨 순서**: 테이블 ACL을 통과해야만 필드 ACL을 평가할 수 있습니다.\n*   **정리**: 보기 중 이 순서를 가장 잘 표현한 것은 **C**입니다.\n*   **보완**: 각 레벨 내부에서는 더 구체적인 규칙에서 더 일반적인 규칙으로 탐색합니다."
  },
  {
    "id": 291,
    "title": "Which feature ensures data consistency white importing data using import sets and web services?",
    "options": [
      {
        "text": "Client Script",
        "id": "A"
      },
      {
        "text": "UI Policy",
        "id": "B"
      },
      {
        "text": "Data Policy",
        "id": "C"
      },
      {
        "text": "CSDM",
        "id": "D"
      },
      {
        "text": "Business Rule",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**데이터 정책(Data Policy)**은 인스턴스로 유입되는 모든 데이터의 무결성을 서버 측에서 강제하는 강력한 보안 가드레일입니다.\n*   **서버 측 실행**: UI 정책(UI Policy)이 브라우저에서만 작동하는 것과 달리, 데이터 정책은 서버에서 실행되므로 **데이터 임포트(Import Sets)**나 **웹 서비스(API)** 호출 시에도 데이터 규칙(필수, 읽기 전용)을 동일하게 적용합니다.\n*   **이점**: 데이터 유입 경로에 상관없이 시스템 전반의 데이터 품질과 일관성을 보장합니다."
  },
  {
    "id": 292,
    "title": "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
    "options": [
      {
        "text": "Request + Response",
        "id": "A"
      },
      {
        "text": "Save + Update",
        "id": "B"
      },
      {
        "text": "Write + Read",
        "id": "C"
      },
      {
        "text": "Submit + Query",
        "id": "D"
      },
      {
        "text": "Insert + Verify",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 아키텍처에서 **라운드 트립(Round-trip)**은 사용자의 브라우저(Client)와 인스턴스(Server) 간의 한 번의 완전한 통신 주기를 의미합니다.\n*   **구성**: 사용자가 데이터를 요청하거나 저장 버튼을 누르는 활동인 **Request(요청)**와, 서버가 이를 처리하여 결과를 돌려주는 **Response(응답)** 과정으로 이루어집니다.\n*   **사용자 경험**: 네트워크 지연이나 서버 처리 시간이 길어질수록 이 라운드 트립 시간이 늘어나며, 이는 사용자가 체감하는 시스템 성능에 직접적인 영향을 미칩니다."
  },
  {
    "id": 293,
    "title": "Which action enables personalization in a form for the admin role, only?",
    "options": [
      {
        "text": "Navigate to sys_form_properties.list and set the property glide.ui.enable_personalize_form.admin to true.",
        "id": "A"
      },
      {
        "text": "Navigate to Context Menu > Configure > Form Layout and select Enable Personalization and enter the admin role.",
        "id": "B"
      },
      {
        "text": "Navigate to Context Menu > Configure > Table and add the role Admin in the Available User list box.",
        "id": "C"
      },
      {
        "text": "Navigate to sys_properties.list, find the property glide.ui.personalize_form.role, and set the value to admin.",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow에서 특정 기능을 특정 역할에게만 제한하거나 허용할 때는 전역 **시스템 속성(System Properties)**을 수정합니다.\n*   **속성명**: `glide.ui.personalize_form.role` 속성은 폼 개인화(톱니바퀴 아이콘 옆의 폼 레이아웃 도구 등)를 수행할 수 있는 최소 역할을 정의합니다.\n*   **제어**: 이 값을 `admin`으로 설정하면, 다른 역할을 가진 일반 사용자나 실무자(itil)는 폼의 필드 배치를 개인화하는 기능에 접근할 수 없게 됩니다."
  },
  {
    "id": 294,
    "title": "If you have the Impersonate role, what type of user are you not able to impersonate?",
    "options": [
      {
        "text": "Customer",
        "id": "A"
      },
      {
        "text": "VIP",
        "id": "B"
      },
      {
        "text": "System Administrator",
        "id": "C"
      },
      {
        "text": "Approver",
        "id": "D"
      },
      {
        "text": "Catalog User",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**사용자 가장(User Impersonation)** 기능은 강력한 권한이므로 보안 가드레일이 적용됩니다.\n*   **보안 원칙**: `impersonator` 역할을 가진 사용자는 자신보다 권한이 높거나 민감한 시스템 설정을 변경할 수 있는 **시스템 관리자(System Administrator)**를 가장할 수 없습니다.\n*   **보안**: `admin` 역할을 가진 사용자는 다른 사용자를 가장할 수 있지만, `security_admin`과 같은 특정 고권한 세션은 가장 상태에서 활성화할 수 없는 등 추가적인 제약이 존재합니다."
  },
  {
    "id": 295,
    "title": "When using the Data Pill Picker, use which keys to dot-walk (6 fields in other tables?",
    "options": [
      {
        "text": "Arrows",
        "id": "A"
      },
      {
        "text": "Plus, Minus",
        "id": "B"
      },
      {
        "text": "Ctrl c, Ctrl",
        "id": "C"
      },
      {
        "text": "Ctrl <, Ctrl >",
        "id": "D"
      },
      {
        "text": "Shift F4, Shit FS",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**의 **데이터 알약 선택기(Data Pill Picker)** 인터페이스에서 참조(Reference) 필드를 따라 연결된 다른 테이블로 이동하는 기술인 **닷워킹(Dot-Walking)**을 수행할 때는 **방향키(Arrows)**를 사용합니다.\n*   **작동 방식**: 참조 필드 옆의 화살표 버튼을 클릭하거나 키보드의 오른쪽 방향키를 눌러 해당 참조 테이블의 하위 필드 리스트를 확장하여 선택할 수 있습니다."
  },
  {
    "id": 296,
    "title": "Here is an example of the criteria set for a knowledge base: *Companies: ACME North America* Department: HR *Groups: ACME Manager* Match All: Yes In this example, what users would have access to this knowledge base?",
    "options": [
      {
        "text": "Members of the ACME manager group, who are also members of HR Department and part of the ACME",
        "id": "A"
      },
      {
        "text": "Employees of ACME North America, who are members of HR Department or the ACME Manager group",
        "id": "B"
      },
      {
        "text": "Users which are members of either ACME North America, or HR Department, or ACME Manager Group",
        "id": "C"
      },
      {
        "text": "Member of the ACME Manager group, and HR department, regardless of geography",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**사용자 기준(User Criteria)** 설정에서 **'Match All'** 옵션은 논리적 **AND** 연산자로 작동합니다.\n*   **조건 분석**: 회사(ACME North America), 부서(HR), 그룹(ACME Manager)이 지정되어 있고 `Match All: Yes`인 경우, 사용자가 이 **세 가지 속성을 모두** 가지고 있어야만 해당 지식 기반에 접근할 수 있습니다.\n*   **거버넌스**: 만약 `Match All: No` (기본값)라면 논리적 **OR**로 작동하여 세 조건 중 하나만 만족해도 접근이 허용됩니다."
  },
  {
    "id": 297,
    "title": "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?",
    "options": [
      {
        "text": "incident.*",
        "id": "A"
      },
      {
        "text": "incident.major_incident",
        "id": "C"
      },
      {
        "text": "incident.None",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "(제공된 정답 키에 따라 보강함) ServiceNow에서 특정 테이블 전체에 대해 와일드카드 방식으로 보안을 적용할 때 사용하는 객체 이름은 **`[테이블명].*`** 입니다.\n*   **의미**: `incident.*`는 인시던트 테이블의 모든 필드에 대해 공통적인 보안 규칙을 적용함을 의미합니다.\n*   **참고**: `incident.None`은 레코드(행) 자체에 대한 접근 권한을 의미하며, `incident.[필드명]`은 특정 필드에 대한 전용 규칙을 의미합니다. 통상적으로 테이블 접근을 위해 `None`이 먼저 평가됩니다."
  },
  {
    "id": 298,
    "title": "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)",
    "options": [
      {
        "text": "Group members can choose their tasks from My Groups Work",
        "id": "A"
      },
      {
        "text": "Groups can assign tasks to users based on on-call schedules",
        "id": "B"
      },
      {
        "text": "Site support members can pick tasks, based on Location",
        "id": "C"
      },
      {
        "text": "Groups can assign tasks to users based on skills",
        "id": "D"
      },
      {
        "text": "Group members can avoid tasks, which are nearing SLA breach",
        "id": "E"
      },
      {
        "text": "Groups can assign tasks to users based on availability",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "C",
      "D",
      "F"
    ],
    "explanation": "업무를 개인이 아닌 **그룹(Groups)**에 할당하는 방식은 리소스 관리와 프로세스 효율성 측면에서 명확한 이점을 제공합니다.\n*   **가용성 및 일정 (B, F)**: 온콜(On-call) 당번 체계나 실시간 업무 부하(Availability)를 고려하여 최적의 담당자를 동적으로 선택할 수 있습니다.\n*   **기술 및 위치 (C, D)**: 특정 작업에 필요한 전문 기술(Skills)이나 현장 지원이 필요한 지리적 위치(Location)를 기반으로 지능적인 배정이 가능해집니다.\n*   **베스트 프랙티스**: 모든 태스크는 먼저 그룹에 배정(Assignment Group)되어야 하며, 이후 그룹 내 가용 인원에게 상세 할당(Assigned to)되는 구조가 권장됩니다."
  },
  {
    "id": 299,
    "title": "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
    "options": [
      {
        "text": "Scenario Dashboard",
        "id": "A"
      },
      {
        "text": "CI Use Case Modeler",
        "id": "B"
      },
      {
        "text": "CMDB Use Case Modeler",
        "id": "C"
      },
      {
        "text": "Common Service Data Model (CSDM) product view",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**CSDM (Common Services Data Model) 제품 보기**는 특정 비즈니스 유스케이스를 지원하기 위해 어떤 테이블과 CI들이 어떻게 상호작용하는지 시각화하고 가이드를 제공하는 리소스입니다.\n*   **아키텍처 연결**: 단순히 CI 리스트를 보는 것을 넘어, 기술적 구성 요소가 비즈니스 가치(Business Value)와 어떻게 연결되는지 CSDM의 4대 도메인 관점에서 설명합니다.\n*   **표준화**: 이를 통해 복잡한 IT 환경에서도 데이터 모델의 일관성을 유지하고, 플랫폼 전반에서 신뢰할 수 있는 보고 체계를 구축할 수 있습니다."
  },
  {
    "id": 300,
    "title": "Which framework can automatically populate values for the priority and Category field based on the Short description field value?",
    "options": [
      {
        "text": "UI Policy",
        "id": "A"
      },
      {
        "text": "Assignment Rule",
        "id": "B"
      },
      {
        "text": "Action",
        "id": "C"
      },
      {
        "text": "Predictive intelligence",
        "id": "D"
      },
      {
        "text": "CSDM",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "(제공된 정답 키를 따름) 일반적으로 ServiceNow에서 'Short Description'을 기반으로 카테고리나 우선순위를 자동화하는 현대적 기술은 **Predictive Intelligence** (머신러닝)입니다.\n*   **Assignment Rule (B)**: 원래는 주로 작업의 **할당 그룹(Assignment Group)**이나 **담당자(Assigned to)**를 자동 지정하는 데 사용됩니다.\n*   **비즈니스 인사이트**: 본 문항에서 B가 정답인 이유는 레거시 환경에서 조건 빌더(Condition Builder)를 통해 특정 키워드가 포함될 때 값을 고정 세팅하는 규칙을 의미하는 것으로 풀이됩니다. 하지만 실무적으로 텍스트 분석 기반 자동화는 Predictive Intelligence가 표준입니다."
  },
  {
    "id": 301,
    "title": "What is used to determine user access to knowledge bases or a knowledge article?",
    "options": [
      {
        "text": "sn_kb_read, sn_article_read",
        "id": "A"
      },
      {
        "text": "Privacy Settings",
        "id": "B"
      },
      {
        "text": "Read Access Flag",
        "id": "C"
      },
      {
        "text": "User Criteria",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**사용자 기준(User Criteria)**은 지식 관리(KM)와 서비스 카탈로그에서 보안 접근 권한을 정의하는 핵심 메커니즘입니다.\n*   **접근 제어**: 사용자의 역할, 부서, 위치, 그룹 등 사용자 레코드의 속성을 조합하여 조건을 생성합니다.\n*   **유연성**: 단순 ACL보다 비즈니스 중심적인 권한 설정이 가능하며, 지식 기반(Knowledge Base) 수준이나 개별 문서 수준에서 '누가 읽을 수 있는지(Can Read)'와 '누가 기여할 수 있는지(Can Contribute)'를 명확히 구분하여 적용합니다."
  },
  {
    "id": 302,
    "title": "From a related list, what would a user click for personalize the layout of the columns?",
    "options": [
      {
        "text": "Magnifier",
        "id": "A"
      },
      {
        "text": "Context Menu",
        "id": "B"
      },
      {
        "text": "Pencil",
        "id": "C"
      },
      {
        "text": "Gear",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "관련 리스트(Related List) 상단에 위치한 **톱니바퀴(Gear) 아이콘**은 사용자가 자신의 뷰(View)에 표시되는 컬럼의 종류와 순서를 직접 조정할 수 있게 해주는 **개인화(Personalization)** 도구입니다.\n*   **개인화 vs 구성**: 톱니바퀴 아이콘을 통한 변경은 '현재 로그인한 사용자'에게만 적용됩니다. 시스템 전체의 기본 레이아웃을 바꾸려면 관리자가 `Configure > List Layout` 기능을 사용해야 합니다.\n*   **생산성**: 사용자는 본인의 업무 문맥에 가장 중요한 필드만 리스트 전면에 배치하여 효율적으로 정보를 확인할 수 있습니다."
  },
  {
    "id": 303,
    "title": "An IT user calls the service desk because his work needs to be completed on ask records. All he can see a Self Service on his homepage when he logs in to the ServiceNow instance. What issue could explain this? Choose 2 answers",
    "options": [
      {
        "text": "His user account failed LDAP authentication",
        "id": "A"
      },
      {
        "text": "His user account does not Belong to any groups, which contain the ITIL role",
        "id": "B"
      },
      {
        "text": "His user account was not approved by his manager",
        "id": "C"
      },
      {
        "text": "His user account does not have ITIL role",
        "id": "D"
      },
      {
        "text": "His user account Is not logged in properly",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "(제공된 정답 키를 기반으로 보강함) ServiceNow에서 IT 실무자가 일반 사용자 전용의 'Self-Service' 메뉴만 볼 수 있다면, 이는 **역할(Role) 부여** 문제일 가능성이 가장 높습니다.\n*   **RBAC 원칙 (B)**: 실무 작업(Incident, Problem 등)을 수행하려면 **`itil`** 역할이 필요합니다. 사용자가 이 역할이 포함된 그룹의 멤버가 아니라면 시스템은 해당 메뉴를 노출하지 않습니다.\n*   **세션 문제 (E)**: '로그인이 제대로 되지 않았다(Not logged in properly)'는 표현은 세션 정보가 업데이트되지 않았거나, 역할 변경 후 재로그인이 필요한 상황 등을 포괄하는 맥락으로 해석될 수 있습니다.\n*   **핵심**: 메뉴의 가시성은 항상 사용자의 현재 세션에 할당된 **역할(Roles)**에 의해 결정됩니다."
  },
  {
    "id": 304,
    "title": "Which statement correctly describes the differences between a Client Script and a Business Rule?",
    "options": [
      {
        "text": "A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded",
        "id": "A"
      },
      {
        "text": "A Client Script executes on the server and a Business Rule executes on the client",
        "id": "B"
      },
      {
        "text": "A Client Script executes on the client and a Business Rule executes on the server",
        "id": "C"
      },
      {
        "text": "A Client Script executes before a record is loaded and a Business Rule executes after a",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 플랫폼에서 로직의 실행 위치를 구분하는 것은 아키텍처 이해의 가장 기본입니다.\n*   **클라이언트 스크립트 (Client Script)**: 사용자의 **웹 브라우저(Client)** 환경에서 실행됩니다. 폼이 로드될 때, 필드 값이 바뀔 때 등 사용자의 즉각적인 UI 조작에 반응합니다.\n*   **비즈니스 규칙 (Business Rule)**: 인스턴스의 **서버(Server)** 환경에서 실행됩니다. 데이터베이스에 레코드가 조회되거나 저장(Insert/Update)되는 시점에 강력한 비즈니스 로직을 집행합니다.\n*   **핵심 차이**: 클라이언트 측은 사용자 경험(UX) 제어에, 서버 측은 데이터 무결성 및 시스템 자동화에 초점이 맞춰져 있습니다."
  },
  {
    "id": 305,
    "title": "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?",
    "options": [
      {
        "text": "Access List",
        "id": "A"
      },
      {
        "text": "Can Access",
        "id": "B"
      },
      {
        "text": "Accessible to",
        "id": "C"
      },
      {
        "text": "Can Read",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "지식 기반(Knowledge Base)의 보안 설정을 관리하기 위해 폼 하단의 관련 리스트 중 **`Can Read`** 탭을 사용합니다.\n*   **사용자 기준 연결**: 이 탭에서 **사용자 기준(User Criteria)** 레코드를 추가하여, 어떤 부서, 위치, 또는 역할을 가진 사용자들이 이 지식 기반 내의 문서들을 검색하고 열람할 수 있는지 정의합니다.\n*   **거버넌스**: 반대로 문서를 작성하거나 편집할 수 있는 권한은 **`Can Contribute`** 탭에서 별도로 관리하여 조회 권한과 편집 권한을 엄격히 분리합니다."
  },
  {
    "id": 306,
    "title": "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
    "options": [
      {
        "text": "Browser tab title",
        "id": "A"
      },
      {
        "text": "Module text color",
        "id": "B"
      },
      {
        "text": "Preferred browser",
        "id": "C"
      },
      {
        "text": "Base theme",
        "id": "D"
      },
      {
        "text": "Font style",
        "id": "E"
      },
      {
        "text": "Animation style",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "(제공된 정답 키를 바탕으로 보강함) **Basic Configuration UI16** 모듈은 코딩 없이 인스턴스의 전반적인 룩앤필(Look and Feel)을 기업 브랜드에 맞게 신속하게 조정하는 곳입니다.\n*   **관리 가능 항목**: 브라우저 탭 제목(A), 내비게이터 모듈 텍스트 색상(B), 시스템 기본 테마(D), 배너 이미지, 헤더 배경색 등이 포함됩니다.\n*   **이점**: CSS나 복잡한 시스템 속성을 직접 수정하지 않고도 인스턴스 전역에 걸친 시각적 일관성을 확보할 수 있습니다."
  },
  {
    "id": 307,
    "title": "What framework can be used to manage the tables and Cis associated with a use case?",
    "options": [
      {
        "text": "Common Service Data Model (CSDM) product view",
        "id": "A"
      },
      {
        "text": "Scename Dashboard",
        "id": "B"
      },
      {
        "text": "CMDB Use Case Modelar",
        "id": "C"
      },
      {
        "text": "CI Use Case Modeler",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**CSDM (Common Services Data Model) 제품 보기**는 ServiceNow의 비즈니스 유스케이스별로 표준 데이터 모델이 어떻게 구성되어야 하는지 보여주는 프레임워크입니다.\n*   **데이터 거버넌스**: IT 인프라(CI)와 비즈니스 서비스 오퍼링 간의 연결 방식을 정의하여 플랫폼 전반의 데이터 사일로를 방지합니다.\n*   **가치**: 이를 통해 정확한 비용 산출, 서비스 가동 시간 분석, 그리고 엔드투엔드 서비스 가시성을 확보할 수 있는 견고한 데이터 기반을 마련합니다."
  },
  {
    "id": 308,
    "title": "Which type of ServiceNow script runs on the web browser?",
    "options": [
      {
        "text": "Server script",
        "id": "A"
      },
      {
        "text": "Local script",
        "id": "B"
      },
      {
        "text": "Database script",
        "id": "C"
      },
      {
        "text": "Client script",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 플랫폼에서 사용자의 **웹 브라우저(Client)** 상에서 직접 실행되는 로직은 **클라이언트 스크립트(Client Scripts)**입니다.\n*   **실행 시점**: 폼 로드 시(`onLoad`), 필드 값 변경 시(`onChange`), 폼 제출 시(`onSubmit`) 트리거됩니다.\n*   **사용자 경험**: 서버와의 통신(Round-trip) 없이 즉각적으로 UI를 제어하거나 입력값의 유효성을 검사하여 사용자에게 빠른 피드백을 제공함으로써 업무 효율성을 높입니다."
  },
  {
    "id": 309,
    "title": "The Employee On-boarding team has asked for a way for managers to order computers, monitors, business Cards, and cell phones for new employees. How would you proceed to meet this requirement?",
    "options": [
      {
        "text": "Create Record Producer",
        "id": "A"
      },
      {
        "text": "Create Order Guide",
        "id": "B"
      },
      {
        "text": "Create Requested Item",
        "id": "C"
      },
      {
        "text": "Create On-boarding Bot",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "서로 연관된 여러 서비스 카탈로그 항목들을 비즈니스 시나리오에 맞춰 하나의 통합된 주문 흐름으로 묶어주는 도구는 **오더 가이드(Order Guide)**입니다.\n*   **비즈니스 가치**: '신규 입사자 온보딩'과 같은 복합적인 요청 상황에서 사용자에게 몇 가지 질문을 던지고, 그 답변에 따라 노트북, 이메일 계정, 보안 카드 등 필요한 품목들을 자동으로 장바구니에 담아줍니다.\n*   **사용자 경험**: 사용자가 개별 항목을 일일이 찾아 주문할 필요 없이, 최적화된 질문 답변 과정을 통해 한 번에 요청을 완료할 수 있게 합니다."
  },
  {
    "id": 310,
    "title": "Which role can manage multiple knowledge bases?",
    "options": [
      {
        "text": "knowledge_base_admin",
        "id": "A"
      },
      {
        "text": "kb_admin",
        "id": "B"
      },
      {
        "text": "sn_kb_admin",
        "id": "C"
      },
      {
        "text": "knowledge_admin",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "인스턴스 내에 존재하는 여러 개의 독립적인 지식 기반(Knowledge Base)들을 총괄하여 관리할 수 있는 상위 권한 역할은 **`knowledge_admin`**입니다.\n*   **권한 범위**: 각 지식 기반의 소유자나 관리자가 아니더라도 전역적으로 지식 기사를 조회, 생성, 수정할 수 있으며 지식 관리의 전반적인 거버넌스를 설정할 수 있습니다.\n*   **최소 권한**: 특정 지식 기반만 관리하는 경우에는 해당 레코드에 지정된 'Owner'나 'Managers' 설정만으로도 충분하지만, 전사적인 지식 관리를 위해서는 `knowledge_admin` 역할이 부여됩니다."
  },
  {
    "id": 311,
    "title": "Which one of the following describes the primary operations performed against tables in the Service Now platform?",
    "options": [
      {
        "text": "Create, Rate, Update, Delete",
        "id": "A"
      },
      {
        "text": "Create, Read, Upload, Delete",
        "id": "B"
      },
      {
        "text": "Create, Read, Write, Delete",
        "id": "C"
      },
      {
        "text": "Capture, Rate, Write, Develop",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 데이터베이스 보안의 핵심인 **접근 제어(ACL)**에서 정의하는 데이터 조작의 4대 표준 작업은 **Create, Read, Write, Delete (CRUD)**입니다.\n*   **기능적 정의**: 레코드의 생성(C), 조회(R), 수정(W), 삭제(D)에 대한 권한을 테이블 및 필드 수준에서 각각 정교하게 제어합니다.\n*   **보안 원칙**: 플랫폼은 사용자가 특정 데이터에 접근하려고 할 때, 해당 작업(Operation)에 명시된 ACL 규칙을 순차적으로 평가하여 허용 여부를 결정합니다."
  },
  {
    "id": 312,
    "title": "The ServiceNow platform supports a wide variety of plus-and-play application. You can choose from the included workflow or build your own workflow. Which of following these workflows are included in the platform?",
    "options": [
      {
        "text": "Employee Workflows",
        "id": "A"
      },
      {
        "text": "Infrastructure Workflows",
        "id": "B"
      },
      {
        "text": "Federal Workflows",
        "id": "C"
      },
      {
        "text": "Manufacturing Workflows",
        "id": "D"
      },
      {
        "text": "Customer Workflows",
        "id": "E"
      },
      {
        "text": "IT Workflows",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "E",
      "F"
    ],
    "explanation": "ServiceNow 플랫폼은 기업의 모든 부서에서 발생하는 업무 흐름을 자동화하기 위해 세 가지 핵심 비즈니스 영역(Pillars)의 워크플로우 제품군을 제공합니다.\n1.  **IT Workflows (F)**: IT 인프라와 서비스 관리를 위한 워크플로우 (ITSM, ITOM 등).\n2.  **Employee Workflows (A)**: 직원 경험과 인사 서비스를 위한 워크플로우 (HRSD 등).\n3.  **Customer Workflows (E)**: 고객 지원과 외부 서비스 요청 처리를 위한 워크플로우 (CSM 등).\n*   **플랫폼 가치**: 이를 통해 '업무를 위한 업무(The way work works)'를 전사적으로 디지털화합니다."
  },
  {
    "id": 313,
    "title": "Which tables are children of the Task table and come with the base system? Choose 3 answers",
    "options": [
      {
        "text": "Incident",
        "id": "A"
      },
      {
        "text": "Problem",
        "id": "B"
      },
      {
        "text": "Change Request",
        "id": "C"
      },
      {
        "text": "Config",
        "id": "D"
      },
      {
        "text": "Dictionary",
        "id": "E"
      },
      {
        "text": "cmdb",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "ServiceNow 플랫폼 아키텍처의 정수인 **테이블 확장(Table Extension)** 모델에서, 업무 흐름을 담는 대표적인 테이블들은 모두 **`task`** 테이블을 상속받습니다.\n*   **상속 관계**: `incident`, `problem`, `change_request`는 `task` 테이블의 자식(Child) 테이블입니다.\n*   **이점**: 번호, 상태, 짧은 설명, 할당 대상 등 공통 필드를 `task` 테이블로부터 물려받아 데이터 일관성을 유지하며, 모든 종류의 업무를 '태스크'라는 하나의 공통 관점에서 보고하고 관리할 수 있게 해줍니다."
  },
  {
    "id": 314,
    "title": "When would you use the following steps? *1, Homepage Admin > Pages* 2. Right click on Homepage record * 3. Select Unload Portal Page",
    "options": [
      {
        "text": "To publish a Homepage to the Portal",
        "id": "A"
      },
      {
        "text": "To retire a Homepage",
        "id": "B"
      },
      {
        "text": "To delete a Homepage",
        "id": "C"
      },
      {
        "text": "To add a Homepage to an update set",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "(보기의 오탈자를 감안하여 해석함) ServiceNow에서 **홈페이지(Homepages)**는 일반적인 구성(Configuration) 데이터와 달리 **업데이트 세트(Update Sets)**에 자동으로 기록되지 않습니다.\n*   **Unload 기능**: 따라서 홈페이지 설정을 다른 인스턴스로 이동시키려면, 명시적으로 해당 레코드를 **'Unload'** 하거나 수동으로 업데이트 세트에 추가하는 절차를 거쳐야 합니다.\n*   **최신 추세**: 최신 버전에서는 업데이트 세트 관리가 용이한 **대시보드(Dashboards)** 사용이 권장되지만, CSA 시험 기준으로는 홈페이지의 특수한 캡처 방식을 이해하는 것이 중요합니다."
  },
  {
    "id": 315,
    "title": "On a list, what does each row show?",
    "options": [
      {
        "text": "A filter",
        "id": "A"
      },
      {
        "text": "A record",
        "id": "B"
      },
      {
        "text": "A table",
        "id": "C"
      },
      {
        "text": "A field",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 리스트 인터페이스에서 가로 방향의 한 줄(Row)은 데이터베이스 테이블의 개별 **레코드(Record)**를 의미합니다.\n*   **데이터 매핑**: 각 레코드는 특정 엔티티(예: 특정 사용자 한 명, 특정 장애 한 건)에 대한 고유한 정보를 담고 있습니다.\n*   **비교**: 세로 방향의 열(Column)은 각 레코드가 가진 속성인 **필드(Field)**에 해당합니다. 즉, 리스트는 여러 레코드의 필드 값들을 행과 열로 정렬하여 보여주는 시각적 도구입니다."
  },
  {
    "id": 316,
    "title": "ServiceNow contains over 25 different report types. What are some of the types? Choose 5 answers",
    "options": [
      {
        "text": "Pie",
        "id": "A"
      },
      {
        "text": "Speedometer",
        "id": "B"
      },
      {
        "text": "Odometer",
        "id": "C"
      },
      {
        "text": "Thermometer",
        "id": "D"
      },
      {
        "text": "Horizontal Bar",
        "id": "E"
      },
      {
        "text": "Semi-Donut",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "B",
      "E",
      "F"
    ],
    "explanation": "(제공된 정답 키를 기반으로 보강함) ServiceNow 보고서 디자이너는 데이터를 효과적으로 시각화하기 위해 25가지 이상의 다양한 차트 유형을 제공합니다.\n*   **주요 유형**: Pie (A), Horizontal Bar (E)와 같은 표준 차트부터 Speedometer (B), Semi-Donut (F), Donut, Dial 등 성과 지표(KPI) 시각화에 특화된 위젯형 보고서가 포함됩니다.\n*   **분류**: 보고서는 목적에 따라 Time Series(추세), Multidimensional(다차원 분석), Scores(단일 수치) 등으로 체계적으로 분류되어 관리됩니다."
  },
  {
    "id": 317,
    "title": "A Role is defined as what?",
    "options": [
      {
        "text": "A collection of permissions",
        "id": "A"
      },
      {
        "text": "A set of user access policies",
        "id": "B"
      },
      {
        "text": "A Persona in a workflow",
        "id": "C"
      },
      {
        "text": "A set of access control rules",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 아키텍처에서 **역할(Role)**은 특정 기능이나 데이터에 접근할 수 있는 **권한의 집합(Collection of Permissions)**을 정의하는 엔티티입니다.\n*   **테이블**: 모든 역할 레코드는 **`sys_user_role`** 테이블에 저장됩니다.\n*   **역할 포함(Containment)**: 역할은 다른 역할을 포함할 수 있어 권한 계층 구조를 효율적으로 설계할 수 있게 합니다.\n*   **할당 방식**: 보안 거버넌스를 위해 개별 사용자보다는 **그룹(Group)**에 역할을 부여하고 사용자를 멤버로 추가하는 방식(RBAC)이 강력히 권장됩니다."
  },
  {
    "id": 318,
    "title": "While on an Incident record, how would you add a Tag for \"Special Handling\" to the record?",
    "options": [
      {
        "text": "Click on the More options (.,.) icon, click Add Tag, type Special Handling, press enter",
        "id": "A"
      },
      {
        "text": "On the Special Handling field, check the box",
        "id": "B"
      },
      {
        "text": "On the Tag field, select Special Handling from the choice list",
        "id": "C"
      },
      {
        "text": "Click on the Context menu, select Add Tag, type Special Handling, press enter",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "레코드를 논리적으로 분류하고 신속하게 탐색하기 위해 **태그(Tags)**를 추가하는 가장 표준적인 UI 경로는 폼 헤더의 **More Options (점 세 개 아이콘)** 메뉴입니다.\n*   **절차**: 'More Options' 클릭 -> **'Add Tag'** 선택 -> 태그 이름 입력 후 Enter.\n*   **가시성**: 사용자는 태그를 자신만 볼 수 있게(Private) 하거나, 특정 그룹 또는 전체(Everyone)와 공유하도록 설정하여 협업에 활용할 수 있습니다."
  },
  {
    "id": 319,
    "title": "While showing a customer their incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? Choose 2 answers",
    "options": [
      {
        "text": "Right click on Priority and select Configure Dictionary",
        "id": "A"
      },
      {
        "text": "Right click on Priority and select Configure Display Settings",
        "id": "B"
      },
      {
        "text": "Right click on Priority and select Configure Label",
        "id": "C"
      },
      {
        "text": "Right click on Priority and select Configure Column",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow에서 필드의 제목(Label)을 변경하여 기업 고유의 용어를 반영하는 방법은 두 가지 관리자 경로가 있습니다.\n1.  **Configure Label (C)**: 해당 필드를 우클릭하여 레이블 레코드를 직접 수정합니다. 이는 특정 테이블에 국한된 명칭 변경에 유용합니다.\n2.  **Configure Dictionary (A)**: 필드의 근본적인 메타데이터 정의로 들어가 'Column label'을 수정합니다.\n*   **주의**: Dictionary 수준에서 레이블을 변경하면, 해당 필드를 상속받아 사용하는 하위 테이블의 모든 폼에서도 명칭이 일치하게 변경될 수 있습니다."
  },
  {
    "id": 320,
    "title": "Which component of a table contains a piece of data for one record?",
    "options": [
      {
        "text": "Factor",
        "id": "A"
      },
      {
        "text": "Field",
        "id": "B"
      },
      {
        "text": "Datapoint",
        "id": "C"
      },
      {
        "text": "Element",
        "id": "D"
      },
      {
        "text": "Item",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 데이터 모델에서 **필드(Field)**는 테이블의 행(Record)과 열(Column)이 교차하는 지점으로, 특정 객체에 대한 개별적인 속성 데이터 값을 담고 있습니다.\n*   **구조**: 리스트 뷰에서 세로 방향의 한 칸(Cell)에 해당하며, 각 필드는 데이터 타입(문자열, 숫자, 참조 등)에 따라 시스템 딕셔너리에 의해 정의됩니다.\n*   **데이터 저장**: 레코드는 이러한 여러 필드들의 값들이 모여 구성된 하나의 완전한 데이터 단위입니다."
  },
  {
    "id": 321,
    "title": "Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?",
    "options": [
      {
        "text": "Schema Map",
        "id": "A"
      },
      {
        "text": "Dependency View",
        "id": "B"
      },
      {
        "text": "Dependency Map",
        "id": "C"
      },
      {
        "text": "Database View",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**디펜던시 뷰(Dependency View)**는 CMDB 내의 구성 항목(CI)들 간의 의존 관계와 연결 구조를 그래픽 인터페이스로 시각화해주는 플랫폼 도구입니다.\n*   **가치**: 특정 서버나 서비스에 장애가 발생했을 때 상위 비즈니스 서비스에 미치는 영향을 분석하는 **영향도 분석(Impact Analysis)**에 핵심적입니다.\n*   **가시성**: 기술적 구성 항목(Technical CIs)들이 비즈니스 가치(Service Offerings)와 어떻게 연결되는지 CSDM 관점의 명확한 통찰을 제공합니다."
  },
  {
    "id": 322,
    "title": "What icon do you use to change the icon and color on a Favorite?",
    "options": [
      {
        "text": "Pencil",
        "id": "A"
      },
      {
        "text": "Star",
        "id": "B"
      },
      {
        "text": "Clack",
        "id": "C"
      },
      {
        "text": "Tringle",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "(보기의 오탈자를 감안하여 해석함) 애플리케이션 내비게이터의 **즐겨찾기(Favorites)** 탭에서 이미 등록된 항목을 개인화하기 위해서는 **Pencil (연필)** 아이콘을 사용합니다.\n*   **편집 가능 항목**: 사용자는 즐겨찾기 항목의 이름(Label), 아이콘 모양, 그리고 색상을 자신의 선호도에 맞게 변경할 수 있습니다.\n*   **개인화**: 이 설정은 사용자 세션에 귀속되는 개인 설정으로, 시스템 전역이나 다른 사용자의 내비게이터 구성에는 영향을 주지 않습니다."
  },
  {
    "id": 323,
    "title": "What type of table has a name starting with u_or x_?",
    "options": [
      {
        "text": "Custom table",
        "id": "A"
      },
      {
        "text": "Parent table",
        "id": "B"
      },
      {
        "text": "Core table",
        "id": "C"
      },
      {
        "text": "Base table",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 플랫폼은 테이블의 출처를 명확히 하기 위해 **커스텀 테이블(Custom Tables)**에 대해 강제적인 명명 규칙을 적용합니다.\n*   **u_**: 전역 스코프(Global Scope)에서 사용자가 직접 생성한 커스텀 테이블의 접두사입니다.\n*   **x_**: 특정 애플리케이션 스코프(Scoped Application) 내에서 생성된 테이블로, 뒤이어 조직 코드와 앱 ID가 포함된 형태를 가집니다.\n*   **비교**: `sys_`나 `cmdb_`와 같이 고유한 접두사를 가진 테이블들은 플랫폼에서 기본 제공하는 **코어/시스템 테이블**입니다."
  },
  {
    "id": 324,
    "title": "What policies are applied to all data entered into the platform (i.e., through a record form (UI), Import Sets, or Web Services)?",
    "options": [
      {
        "text": "Data Policies",
        "id": "A"
      },
      {
        "text": "Data Integrity Policies",
        "id": "B"
      },
      {
        "text": "Write Policies",
        "id": "C"
      },
      {
        "text": "Data Submission Policies",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**데이터 정책(Data Policy)**은 데이터의 무결성을 보장하기 위해 모든 데이터 유입 경로에 대해 서버 측에서 규칙을 강제하는 강력한 가드레일입니다.\n*   **강제 범위**: 웹 브라우저를 통한 직접 입력(UI)뿐만 아니라, **임포트 세트(Import Sets)**나 **웹 서비스(API)**를 통해 들어오는 모든 데이터에 동일한 필수/읽기전용 규칙을 적용합니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험을 위해 작동하는 반면, 데이터 정책은 데이터베이스 수준에서 물리적인 일관성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 325,
    "title": "Which SericeNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which Cis supporing that service have active issues?",
    "options": [
      {
        "text": "AL Service Dashboard",
        "id": "A"
      },
      {
        "text": "Cl Health Dashboard",
        "id": "B"
      },
      {
        "text": "Dependency View",
        "id": "C"
      },
      {
        "text": "Event Management Homepage",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**CI 상태 대시보드(CI Health Dashboard)**는 CMDB 내 구성 항목(CI)들의 건전성을 가시성(Completeness), 정확성(Compliance), 관계(Correctness)라는 세 가지 관점에서 측정하고 보고합니다.\n*   **서비스 가시성**: 서비스 데스크 에이전트는 이 대시보드를 통해 특정 비즈니스 서비스의 장애 원인이 되는 하위 CI의 이슈를 역추적(Trace)할 수 있습니다.\n*   **상호보완 도구**: CI 간의 물리적 의존 관계를 시각적으로 확인하는 데는 **Dependency View**가 사용되지만, 전반적인 운영 이슈와 데이터 품질을 통합 관리하는 측면에서는 CI Health Dashboard가 핵심적인 역할을 합니다."
  },
  {
    "id": 326,
    "title": "You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?",
    "options": [
      {
        "text": "Create Record Producer",
        "id": "A"
      },
      {
        "text": "Create Catalog Item",
        "id": "B"
      },
      {
        "text": "Create Order Guide",
        "id": "C"
      },
      {
        "text": "Create Content Item",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**레코드 프로듀서(Record Producer)**는 서비스 카탈로그의 인터페이스를 활용하여 백엔드 테이블(예: `incident`)에 데이터를 직접 생성하는 강력한 도구입니다.\n*   **사용자 경험(UX)**: 복잡한 폼 대신 사용자 친화적인 질문(Variables)을 제공하여 장애 상황을 쉽게 설명할 수 있게 합니다.\n*   **자동화**: 제출된 데이터는 미리 정의된 매핑 규칙에 따라 인시던트 레코드로 변환되어 즉시 서비스 데스크의 작업 대기열(Queue)로 인입됩니다."
  },
  {
    "id": 327,
    "title": "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    "options": [
      {
        "text": "Agent Assist",
        "id": "A"
      },
      {
        "text": "Virtual Agent",
        "id": "B"
      },
      {
        "text": "Now Messenger",
        "id": "C"
      },
      {
        "text": "Connect Agent",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**가상 에이전트(Virtual Agent)**는 대화형 인터페이스(채팅)를 통해 사용자에게 24/7 셀프 서비스 지원을 제공하는 플랫폼입니다.\n*   **지식 연동**: 자연어 이해(NLU)를 기반으로 사용자의 질문 의도를 파악하여 연관된 지식 기사(Knowledge Articles)를 대화창 내에서 즉시 제안합니다.\n*   **가치**: 실시간 상담원의 개입 없이 문제를 해결(Deflection)함으로써 상담원의 업무 부하를 줄이고 고객 만족도를 높이는 'Shift-left' 전략의 핵심입니다."
  },
  {
    "id": 328,
    "title": "What are the steps for applying an update set to an instance?",
    "options": [
      {
        "text": "Retrieve, Preview, Commit",
        "id": "A"
      },
      {
        "text": "Specify, Transform, Apply",
        "id": "B"
      },
      {
        "text": "Retrieve, Assess, Apply",
        "id": "C"
      },
      {
        "text": "Get, Test, Push",
        "id": "D"
      },
      {
        "text": "Pull, Review, Push",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트(Update Sets)**를 대상 인스턴스(Test 또는 Production)에 반영하는 표준 거버넌스 프로세스는 다음과 같습니다.\n1.  **Retrieve**: 원격 인스턴스로부터 'Complete' 상태의 업데이트 세트를 가져옵니다.\n2.  **Preview**: 반영 전 기존 구성과의 충돌이나 오류를 미리 점검합니다. (가장 중요한 검증 단계).\n3.  **Commit**: 오류가 해결된 변경 사항을 인스턴스 데이터베이스에 최종적으로 적용합니다.\n*   **핵심**: 이 단계를 통해 개발 환경에서 검증된 구성(Configuration)을 안전하게 운영 환경으로 이동시킵니다."
  },
  {
    "id": 329,
    "title": "Your customer has a Human Resources knowledge base, which is only accessible to members of the Human Resources department. A new procedure regarding employee quarterly reviews needs to be published to the quarterly review category of the HR knowledge base, but should only be visible for HR managers. How would you meet this requirement?",
    "options": [
      {
        "text": "On the Knowledge Base, add User Criteria with a Manager Can Read script to the Can Read list, publish",
        "id": "A"
      },
      {
        "text": "Add User Criteria for HR Manager Group on the Category's Can Read list",
        "id": "B"
      },
      {
        "text": "On the Knowledge Article, add an Access Control for HR Manager Group on the Can Read list, then",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 지식 관리 아키텍처는 **사용자 기준(User Criteria)**을 통해 세분화된 보안 제어를 지원합니다.\n*   **계층적 접근**: 지식 기반(Knowledge Base) 전체에 대한 권한뿐만 아니라, 특정 **카테고리(Category)** 수준에서도 `Can Read` 관련 리스트를 설정하여 가시성을 제한할 수 있습니다.\n*   **비즈니스 가치**: 이를 통해 하나의 지식 기반 안에서도 일반 직원용 정보와 매니저 전용 민감 정보를 안전하게 분리하여 운영할 수 있습니다."
  },
  {
    "id": 330,
    "title": "How would you describe the relationship between the incident and Task table?",
    "options": [
      {
        "text": "Incident table has a many to many relationships with the Task table.",
        "id": "A"
      },
      {
        "text": "Incident table has a one to much relationship with the Task table.",
        "id": "B"
      },
      {
        "text": "Incident table is extended from task table.",
        "id": "C"
      },
      {
        "text": "incident table is related to the Task table via the INC number",
        "id": "D"
      },
      {
        "text": "incident table is a database view of the Task table",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 데이터 모델링의 핵심인 **테이블 확장(Table Extension)** 관계입니다.\n*   **상속**: `incident` 테이블은 `task` 테이블의 자식(Child) 테이블입니다.\n*   **이점**: 번호, 상태, 할당 그룹 등 모든 업무에 공통적으로 필요한 필드와 비즈니스 로직을 `task`로부터 물려받습니다.\n*   **데이터 통합**: 이를 통해 인시던트, 문제, 변경 등 서로 다른 유형의 업무를 '태스크'라는 하나의 통합된 관점에서 보고하고 관리할 수 있습니다."
  },
  {
    "id": 331,
    "title": "What process allows users to create, categorize, review approve and browse important information in a centralized location that is shared oy the entire organization?",
    "options": [
      {
        "text": "Self Service Management",
        "id": "A"
      },
      {
        "text": "Knowledge Management",
        "id": "B"
      },
      {
        "text": "Knowledge-Centered Management",
        "id": "C"
      },
      {
        "text": "Information Portal Management",
        "id": "D"
      },
      {
        "text": "Business Information Management",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**지식 관리(Knowledge Management)**는 기업의 지적 자산을 체계적으로 수집, 저장, 공유하기 위한 전사적 프로세스입니다.\n*   **수명 주기**: 문서 작성(Create) -> 검토(Review) -> 승인 및 게시(Publish) -> 은퇴(Retire)의 표준 단계를 거칩니다.\n*   **셀프 서비스**: 중앙 집중화된 지식 창구를 제공함으로써 사용자가 직접 해답을 찾게 유도하여 IT 지원 비용을 절감하고 업무 생산성을 높입니다."
  },
  {
    "id": 332,
    "title": "You have an existing customer, who is using workflows for their catalog items. Their existing purchasing policy is to require approval for any request that totals over 31000. However, management wants to change the approval threshold to 31500. Which workflow would you update to make this change?",
    "options": [
      {
        "text": "Services Approval Processing",
        "id": "A"
      },
      {
        "text": "6 Services Catalog Item Request",
        "id": "B"
      },
      {
        "text": "Service Catalog Request",
        "id": "C"
      },
      {
        "text": "Purchasing Process Flow",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "서비스 카탈로그 주문은 보통 **요청(Request, REQ)** 레코드 수준에서 전반적인 승인 로직이 작동합니다.\n*   **프로세스 계층**: 주문 총액에 따른 승인 임계값(Approval Threshold)은 개별 품목(RITM)이 아닌 전체 주문서(REQ)를 처리하는 **`Service Catalog Request`** 워크플로우나 플로우에서 정의되는 것이 일반적입니다.\n*   **관리**: 정책 변경 시 해당 워크플로우의 'Approval - User' 또는 'Approval - Group' 액티비티 내의 조건을 수정하여 반영합니다."
  },
  {
    "id": 333,
    "title": "What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?",
    "options": [
      {
        "text": "Update sets",
        "id": "A"
      },
      {
        "text": "Transform maps",
        "id": "B"
      },
      {
        "text": "System dictionaries",
        "id": "C"
      },
      {
        "text": "Import sets",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**업데이트 세트(Update Sets)**는 인스턴스 간에 **구성(Configuration)** 데이터의 변경 사항을 캡처하고 전송하기 위한 표준 이동 수단입니다.\n*   **캡처 범위**: 테이블 정의, 폼 레이아웃, 비즈니스 규칙, 클라이언트 스크립트 등 시스템의 동작을 결정하는 데이터입니다.\n*   **제외 대상**: 인시던트나 사용자 레코드와 같은 실제 **업무 데이터(Data)**는 캡처되지 않으므로 주의가 필요합니다.\n*   **이점**: 개발-테스트-운영 인스턴스 간의 체계적인 배포 거버넌스를 지원합니다."
  },
  {
    "id": 334,
    "title": "What feature do you use to specify which users are able to access a Service Catalog Item?",
    "options": [
      {
        "text": "Can Read Role",
        "id": "A"
      },
      {
        "text": "Catalog User Role",
        "id": "B"
      },
      {
        "text": "Can Order Tab",
        "id": "C"
      },
      {
        "text": "User Criteria",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "서비스 카탈로그 항목(Catalog Item)의 보안 및 접근 제어를 위한 최우선 도구는 **사용자 기준(User Criteria)**입니다.\n*   **적용**: `Available For` 및 `Not Available For` 관련 리스트에 사용자 기준을 설정하여 특정 역할, 부서, 위치 기반으로 접근 범위를 정교하게 통제합니다.\n*   **베스트 프랙티스**: 복잡한 ACL이나 스크립팅 대신 UI 상의 설정만으로 접근 권한을 관리할 수 있어 유지보수성과 보안 투명성을 높여줍니다."
  },
  {
    "id": 335,
    "title": "Security rules are defined to restrict the permission of users from viewing and interacting with data. What are these security rules called?",
    "options": [
      {
        "text": "Role Assignment Rules",
        "id": "A"
      },
      {
        "text": "CRUD Rules",
        "id": "B"
      },
      {
        "text": "Scripted User Rules",
        "id": "C"
      },
      {
        "text": "Access Control Rules",
        "id": "D"
      },
      {
        "text": "User Authentication Rules",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**접근 제어 규칙(ACL, Access Control Rules)**은 ServiceNow 플랫폼 보안의 핵심 가이드라인으로, 사용자가 데이터에 접근하거나 조작하기 위해 통과해야 하는 '보안 관문'입니다.\n*   **보안 계층**: 테이블(Table), 레코드(Row), 개별 필드(Column) 수준에서 각각 보안을 적용할 수 있습니다.\n*   **평가 요소**: 사용자가 가진 **역할(Role)**, 필드의 특정 **조건(Condition)**, 그리고 복잡한 로직을 수행하는 **스크립트**를 종합적으로 평가하여 허용 여부를 결정합니다.\n*   **보안 원칙**: 명시적으로 허용된 규칙이 없는 경우 모든 접근을 기본적으로 차단하는 '최소 권한 접근' 방식을 따릅니다."
  },
  {
    "id": 336,
    "title": "A subject matter expert routinely receives tasks which have been worked by first level support, before receiving the assignment What could you suggest. to make it easier for the expert to read only the work notes in the Activity log?",
    "options": [
      {
        "text": "Click Context menu > Work Notes View",
        "id": "A"
      },
      {
        "text": "Click Personalize icon and select Activity Stream",
        "id": "B"
      },
      {
        "text": "Right click form header > Form Layout > Add Work Notes Section",
        "id": "C"
      },
      {
        "text": "Click Funnel icon and select only work notes",
        "id": "D"
      },
      {
        "text": "Click Context menu > History",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**활동 스트림(Activity Stream)**은 레코드의 변경 이력과 협업 내역을 시간순으로 보여주는 강력한 UI 요소입니다.\n*   **생산성 도구**: 수많은 업데이트 내용 중 특정 정보만 빠르게 확인하고 싶을 때, 활동 스트림 상단의 **깔때기(Funnel) 아이콘**을 사용하여 'Work notes'만 필터링할 수 있습니다.\n*   **협업 구분**: 외부 고객과 소통하는 'Additional comments'와 내부 전문가들끼리 공유하는 기술적 메모인 'Work notes'를 구분하여 검토함으로써 업무 문맥을 신속하게 파악할 수 있게 돕습니다."
  },
  {
    "id": 337,
    "title": "Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board Interface?",
    "options": [
      {
        "text": "Flow Designer",
        "id": "A"
      },
      {
        "text": "Process Automation Designer",
        "id": "B"
      },
      {
        "text": "Process Workflow Designer",
        "id": "C"
      },
      {
        "text": "Workflow Editor",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**프로세스 자동화 디자이너(PAD, Process Automation Designer)**는 개별적인 플로우(Flows)와 액션들을 묶어 전사적인 엔드투엔드(End-to-End) 비즈니스 프로세스로 오케스트레이션하는 도구입니다.\n*   **시각화**: 비즈니스 프로세스 소유자는 복잡한 로직을 칸반 보드와 유사한 단계별 인터페이스를 통해 직관적으로 설계하고 관리할 수 있습니다.\n*   **플레이북 연동**: PAD에서 설계된 프로세스는 사용자에게 **플레이북(Playbooks)** 형태로 제공되어, 실무자가 복잡한 업무 라이프사이클을 안내에 따라 정확하게 수행할 수 있도록 지원합니다."
  },
  {
    "id": 338,
    "title": "What are advantages of using spokes for integrations? Choose 3 answers",
    "options": [
      {
        "text": "Reduces the need for code",
        "id": "A"
      },
      {
        "text": "Features scale and control mechanisms",
        "id": "B"
      },
      {
        "text": "Free spokes are available in the ServiceNow Store",
        "id": "C"
      },
      {
        "text": "Ensures discoverability and reuse",
        "id": "D"
      },
      {
        "text": "Automated event management",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "**Spoke**는 ServiceNow **IntegrationHub**에서 특정 외부 시스템(예: Jira, Slack)과의 연동을 위해 미리 패키징된 액션과 로직의 집합입니다.\n1.  **코드 최소화 (A)**: 복잡한 API 스크립트 작성 없이 드래그 앤 드롭으로 연동을 구현하여 기술 부채를 낮춥니다.\n2.  **재사용성 및 발견 용이성 (D)**: 표준화된 액션들을 인스턴스 내 여러 플로우에서 반복적으로 사용할 수 있어 거버넌스 관리에 유리합니다.\n3.  **자동화 처리 (E)**: 외부 시스템의 신호를 감지하여 인스턴스 내 워크플로우를 자동으로 트리거하는 등 효율적인 통합 환경을 제공합니다."
  },
  {
    "id": 339,
    "title": "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
    "options": [
      {
        "text": "Field Transform",
        "id": "A"
      },
      {
        "text": "Transform Map",
        "id": "B"
      },
      {
        "text": "Schema Map",
        "id": "C"
      },
      {
        "text": "Import Map",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**변환 맵(Transform Map)**은 임포트 세트(Import Set)의 소스 데이터와 ServiceNow 내부의 타겟 테이블 사이를 연결하는 '데이터 설계도' 역할을 합니다.\n*   **필드 매핑**: 소스의 특정 컬럼이 타겟 테이블의 어떤 필드로 들어갈지 명시하며, 필요시 스크립트를 통해 데이터를 변환(Transformation)하거나 정제합니다.\n*   **데이터 무결성**: **Coalesce** 설정을 통해 기존 레코드 업데이트 여부를 결정함으로써 시스템 내 데이터 중복을 방지하고 정합성을 유지합니다."
  },
  {
    "id": 340,
    "title": "Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
    "options": [
      {
        "text": "One Approval can have many Requests",
        "id": "A"
      },
      {
        "text": "One Request can have many Requested Items",
        "id": "B"
      },
      {
        "text": "One Requested Item can have many Approvals",
        "id": "C"
      },
      {
        "text": "One Requested Item can have many Catalog Tasks",
        "id": "D"
      },
      {
        "text": "One Cart can have many Requests",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow 서비스 카탈로그의 데이터 아키텍처는 효율적인 주문 이행을 위해 **일대다(One-to-Many)** 관계의 계층 구조를 따릅니다.\n1.  **Request (REQ) -> Requested Items (RITM) (B)**: 하나의 주문서(REQ)는 여러 개의 개별 품목(RITM)을 포함할 수 있습니다.\n2.  **Requested Item (RITM) -> Approvals (C)**: 하나의 요청 품목에 대해 여러 승인 레코드가 생성될 수 있습니다.\n3.  **Requested Item (RITM) -> Catalog Tasks (SCTASK) (D)**: 하나의 품목을 이행하기 위해 실무자가 수행해야 할 여러 개의 작업(SCTASK)이 생성될 수 있습니다.\n*   **주의**: `Cart -> Requests`는 표준적인 테이블 관계 예시로 보지 않습니다."
  },
  {
    "id": 341,
    "title": "What section on the notes tab, shows the history of the work documented on the record?",
    "options": [
      {
        "text": "Journal",
        "id": "A"
      },
      {
        "text": "Activity",
        "id": "B"
      },
      {
        "text": "Diary",
        "id": "C"
      },
      {
        "text": "Audit Log",
        "id": "D"
      },
      {
        "text": "Timeline",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "레코드 폼의 'Notes' 탭에 위치한 **활동(Activity)** 섹션은 해당 데이터의 전체 수명 주기 동안 발생한 모든 상호작용과 변경 사항을 기록하는 중앙 로그입니다.\n*   **포함 데이터**: 담당자의 작업 노트(Work notes), 사용자와의 대화(Additional comments), 그리고 시스템에 의해 기록된 필드 값의 변화(Audit trail)를 모두 포함합니다.\n*   **협업 허브**: 에이전트들이 과거 기록을 빠르게 검토하고 현재 상태를 파악하여 업무 연속성을 유지하는 데 핵심적인 역할을 합니다."
  },
  {
    "id": 342,
    "title": "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    "options": [
      {
        "text": "Notifications",
        "id": "A"
      },
      {
        "text": "Alerts",
        "id": "B"
      },
      {
        "text": "Texts",
        "id": "C"
      },
      {
        "text": "Events",
        "id": "D"
      },
      {
        "text": "Emails",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**Notifications**는 이벤트를 트리거로 사용자에게 활동이나 업데이트를 전달하는 기능입니다.\n*   **이벤트(Event)**는 알림을 발생시키는 조건이나 신호이고, 실제 사용자에게 전달되는 기능은 **Notifications**입니다.\n*   **활용**: 레코드 변경, 승인 요청, 상태 업데이트 같은 상황에서 이메일이나 인스턴스 알림을 전송하는 데 사용됩니다."
  },
  {
    "id": 343,
    "title": "What is the name of the string that display filter criteria?",
    "options": [
      {
        "text": "Topic",
        "id": "A"
      },
      {
        "text": "Choice",
        "id": "B"
      },
      {
        "text": "Breadcrumb",
        "id": "C"
      },
      {
        "text": "Menu",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**브레드크럼(Breadcrumb)**은 리스트 뷰 상단에 위치하며, 현재 리스트에 적용된 모든 필터 조건을 계층적인 텍스트 경로 형태로 시각화합니다.\n*   **기능**: 사용자는 브레드크럼의 특정 조건을 클릭하여 이전 필터 단계로 빠르게 돌아가거나(Drill back), 개별 조건을 제거하여 조회 범위를 신속하게 조정할 수 있습니다.\n*   **개인화**: 자주 사용하는 복잡한 브레드크럼 필터는 즐겨찾기(Favorites)로 저장하거나 다른 사용자에게 링크로 공유하여 데이터 탐색 효율을 높일 수 있습니다."
  },
  {
    "id": 344,
    "title": "A customer requests the following data quality measures be added: *1. Incident numbers should be read-only on all lists and forms, for all users.* 2. Short Description field should be mandatory, on all records, across all applications, on insert. Which type of policy would you use to meet this requirement?",
    "options": [
      {
        "text": "Data policy",
        "id": "A"
      },
      {
        "text": "Dictionary Design Policy",
        "id": "B"
      },
      {
        "text": "Data Quality Policy",
        "id": "C"
      },
      {
        "text": "Field Criteria Policy",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**데이터 정책(Data Policy)**은 인스턴스 전반의 데이터 품질과 일관성을 보장하기 위해 **서버(Server)** 측에서 실행되는 강력한 가드레일입니다.\n*   **강제 범위**: 웹 브라우저(UI)를 통한 입력뿐만 아니라, **데이터 임포트(Import Sets)**나 **웹 서비스(API)**를 통해 유입되는 모든 데이터에 동일한 필수/읽기전용 규칙을 강제합니다.\n*   **UI 정책과의 차이**: UI 정책은 브라우저에서 사용자 경험(UX) 개선에 집중하는 반면, 데이터 정책은 데이터베이스 수준에서 물리적인 데이터 무결성을 지키는 마지막 방어선 역할을 합니다."
  },
  {
    "id": 345,
    "title": "An administrator creates \"customer_table_admin\" and \"customer_table_user\" roles for the newly created \"Customer Table\". Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?",
    "options": [
      {
        "text": "customer.all",
        "id": "A"
      },
      {
        "text": "customer.*",
        "id": "B"
      },
      {
        "text": "customer.none",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow의 **접근 제어(ACL)**에서 테이블 전체에 대한 보안을 적용할 때는 와일드카드 기호인 별표(**`*`**)를 사용합니다.\n*   **객체 식별**: `customer.*`는 해당 테이블의 모든 필드(Column)에 대해 공통적으로 적용되는 규칙을 의미합니다.\n*   **상속 및 권한**: `customer_table_admin`과 `customer_table_user` 두 역할 모두에게 이 규칙을 부여하면, 테이블 내의 어떤 필드에 대해서도 별도의 거부 규칙이 없는 한 접근이 허용됩니다.\n*   **참고**: `customer.None`은 레코드(행) 자체에 대한 접근 권한을 평가할 때 사용되는 특수 객체 이름입니다."
  },
  {
    "id": 346,
    "title": "Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role and the user_criteria_admin role plus has permissions to create Items and Services?",
    "options": [
      {
        "text": "Item Admin [sn_item_admin]",
        "id": "A"
      },
      {
        "text": "Sys Admin [sys_admin]",
        "id": "B"
      },
      {
        "text": "Catalog Admin [catalog_admin]",
        "id": "C"
      },
      {
        "text": "Catalog Author [sn_catalog_write]",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**`catalog_admin`** 역할은 서비스 카탈로그의 전체적인 수명 주기를 관리하기 위해 설계된 관리 권한입니다.\n*   **역할 상속(Inheritance)**: 이 역할은 하위의 `catalog` 역할과 **`user_criteria_admin`** 역할을 포함(Contain)하고 있어, 별도의 할당 없이도 해당 권한들을 모두 상속받습니다.\n*   **권한 범위**: 카탈로그 아이템과 서비스를 생성 및 수정할 수 있을 뿐만 아니라, 사용자 기준(User Criteria)을 정의하여 카탈로그의 접근 제어 거버넌스를 수립할 수 있습니다."
  },
  {
    "id": 347,
    "title": "What are the benefits of building flows using Flow Designer? Choose 3 answers",
    "options": [
      {
        "text": "Supports easy integration with 3rd party systems",
        "id": "A"
      },
      {
        "text": "Provides IDE for complicated scripting",
        "id": "B"
      },
      {
        "text": "Provides natural-language descriptions of flow logic",
        "id": "C"
      },
      {
        "text": "Supports No-Code application development",
        "id": "D"
      },
      {
        "text": "Automatically populates SLA records",
        "id": "E"
      },
      {
        "text": "Provides built-in libraries /API for complex coding",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**는 복잡한 스크립팅 없이 비즈니스 프로세스를 자동화하는 차세대 도구로 다음과 같은 이점을 제공합니다.\n1.  **No-Code 개발 (D)**: 시각적인 인터페이스를 통해 비개발자도 비즈니스 로직을 쉽게 구축할 수 있습니다.\n2.  **자연어 설명 (C)**: 자동화 흐름이 기계적인 코드가 아닌 인간이 이해하기 쉬운 문장 형태로 표시되어 가독성이 뛰어납니다.\n3.  **통합 용이성 (A)**: **Spoke**를 활용하여 외부 서드파티 시스템(Slack, Jira 등)과의 연동을 표준화된 방식으로 신속하게 구현할 수 있습니다."
  },
  {
    "id": 348,
    "title": "As administrator, what must you do to access feature of High Security Settings?",
    "options": [
      {
        "text": "Select Elevate Roles",
        "id": "A"
      },
      {
        "text": "Add security_admin role to your user account",
        "id": "B"
      },
      {
        "text": "Impersonate Security Admin",
        "id": "C"
      },
      {
        "text": "Use System Administrator < Elevate Roles module",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ACL 수정이나 인스턴스 전역 보안 정책을 설정하는 **High Security Settings**에 접근하려면 **역할 상승(Elevate Roles)** 프로세스가 필수적입니다.\n*   **절차**: 관리자는 프로필 메뉴에서 **Elevate Roles**를 선택해 `security_admin` 역할을 일시적으로 활성화해야 합니다.\n*   **보안 가드레일**: 상승된 권한은 현재 **세션(Session)** 동안만 유지되며, 로그아웃하거나 브라우저를 닫으면 자동으로 해제됩니다."
  },
  {
    "id": 349,
    "title": "What are examples of UI Actions relating to forms? Choose 3 answers",
    "options": [
      {
        "text": "Form Context Menu",
        "id": "A"
      },
      {
        "text": "Form View",
        "id": "B"
      },
      {
        "text": "Form Buttons",
        "id": "C"
      },
      {
        "text": "Form Links",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "ServiceNow **UI 액션(UI Actions)**은 사용자가 시스템과 상호작용할 수 있는 시각적 트리거를 제공합니다. 폼(Form) 인터페이스에서 흔히 볼 수 있는 예시는 다음과 같습니다.\n1.  **Form Buttons (C)**: 폼 상단이나 하단에 위치한 실행 버튼 (예: Save, Update).\n2.  **Form Links (D)**: 폼 하단의 'Related Links' 섹션에 표시되는 텍스트 기반 하이퍼링크.\n3.  **Form Context Menu (A)**: 폼 헤더를 우클릭하거나 햄버거 아이콘을 눌렀을 때 나타나는 실행 메뉴.\n*   **기능**: 이러한 요소들은 클릭 시 서버 측 비즈니스 로직이나 클라이언트 측 JavaScript를 실행하여 레코드를 처리합니다."
  },
  {
    "id": 350,
    "title": "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against the data?",
    "options": [
      {
        "text": "Style",
        "id": "A"
      },
      {
        "text": "Format",
        "id": "B"
      },
      {
        "text": "Data",
        "id": "C"
      },
      {
        "text": "Configure",
        "id": "D"
      },
      {
        "text": "Group by",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "보고서 디자이너(Report Designer)는 4가지 구성 탭을 통해 단계적으로 보고서를 완성합니다. \n*   **Configure (구성)** 탭의 역할: 데이터의 **그룹화(Group by)** 기준을 지정하고, 누적 계산이나 함수 필드를 사용한 복잡한 연산 로직을 정의합니다.\n*   **기타 단계**: Data(원본 선택) -> Type(시각화 유형 선택) -> **Configure(그룹핑 및 연산)** -> Style(룩앤필 조정) 순으로 진행됩니다."
  },
  {
    "id": 351,
    "title": "A customer wants to be able to identify and track components of their infrastructure that support their ecommerce service. What ServiceNow products could support this requirement? Choose 3 answers",
    "options": [
      {
        "text": "Performance Analytics",
        "id": "A"
      },
      {
        "text": "Configuration Management (CMDB)",
        "id": "B"
      },
      {
        "text": "Financial Management",
        "id": "C"
      },
      {
        "text": "Discovery",
        "id": "D"
      },
      {
        "text": "Service Mapping",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "explanation": "비즈니스 서비스(예: 전자상거래)를 지탱하는 하부 인프라를 체계적으로 추적하려면 다음 제품군의 유기적 연동이 필수적입니다.\n1.  **CMDB (B)**: 모든 구성 항목(CI)과 그들 간의 관계 정보를 저장하는 중앙 데이터베이스입니다.\n2.  **Discovery (D)**: 네트워크를 스캔하여 서버, 장비, 소프트웨어 등 기술적 CI를 자동으로 식별하고 CMDB를 채웁니다 (Bottom-up).\n3.  **Service Mapping (E)**: 비즈니스 서비스 관점에서 어떤 기술적 CI들이 유기적으로 연결되어 있는지 하향식으로 가시화합니다 (Top-down).\n*   **CSDM 연관**: 이는 CSDM의 **Service Delivery (구 Manage Technical Services)**와 **Service Consumption (구 Sell/Consume)** 도메인을 연결하는 핵심 아키텍처 활동입니다."
  },
  {
    "id": 352,
    "title": "On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?",
    "options": [
      {
        "text": "Can Read",
        "id": "A"
      },
      {
        "text": "Can Write",
        "id": "B"
      },
      {
        "text": "Can Contribute",
        "id": "C"
      },
      {
        "text": "Can Author",
        "id": "D"
      },
      {
        "text": "Cannot Author",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "지식 관리(Knowledge Management) 거버넌스에서 지식 문서를 작성, 수정 및 관리할 수 있는 권한은 지식 기반(Knowledge Base)의 **`Can Contribute`** 관련 리스트를 통해 제어합니다.\n*   **보안 계층**: 사용자가 특정 지식 기반에 글을 올리려면 해당 레코드에 지정된 **사용자 기준(User Criteria)**에 부합해야 합니다.\n*   **조회 권한과의 차이**: 문서를 검색하고 읽는 권한은 **`Can Read`** 탭에서 별도로 관리하여 조회자와 기여자를 엄격히 구분합니다."
  },
  {
    "id": 353,
    "title": "What is the best practice related to using the Default Update Set for moving customizations between instances?",
    "options": [
      {
        "text": "Merge Default update sets before moving between instances",
        "id": "A"
      },
      {
        "text": "Submit Default update set to application repository",
        "id": "B"
      },
      {
        "text": "You should not use the Default Update sets for moving between instances",
        "id": "C"
      },
      {
        "text": "Keep Default update set to maximum of 20 records, for troubleshooting purposes",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**업데이트 세트(Update Sets)** 관리에서 가장 중요한 거버넌스 원칙은 **Default 업데이트 세트를 사용하여 배포하지 않는 것**입니다.\n*   **이유**: Default 세트는 시스템의 모든 자잘한 변경사항을 무차별적으로 캡처하므로, 다른 인스턴스로 내보낼 때 불필요하거나 위험한 설정이 포함될 수 있습니다.\n*   **모범 사례**: 작업 목적에 맞는 **이름이 지정된(Named) 업데이트 세트**를 새로 생성하여 필요한 변경사항만 명확하게 관리하고 이동시켜야 합니다.\n*   **추적성**: 명시적 세트를 사용해야 개발-테스트-운영으로 이어지는 배포 이력을 정확히 추적하고 오류 발생 시 롤백(Rollback)하기 용이합니다."
  },
  {
    "id": 354,
    "title": "How would you distinguish between a Base Class table and a Parent Class table?",
    "options": [
      {
        "text": "Base Class tables always have tables extended from them, Parent tables do not have tables extended from them.",
        "id": "A"
      },
      {
        "text": "Base Class tables are not extended from another table, while Parent Class tables may be extended from another table.",
        "id": "B"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 데이터 모델의 계층 구조를 정의하는 아키텍처 용어입니다.\n*   **기본 클래스 (Base Class)**: 테이블 계층 구조의 최상위에 위치하며 다른 테이블을 확장(Extend)하지 않는 테이블입니다 (예: `task`, `cmdb`). 모든 확장의 '뿌리' 역할을 합니다.\n*   **부모 클래스 (Parent Class)**: 특정 테이블의 바로 위 단계에 있는 테이블을 뜻합니다. 자신도 상위 테이블을 상속받았을 수 있는 상대적인 개념입니다.\n*   **자식 클래스 (Child Class)**: 상위 테이블로부터 필드와 로직을 물려받은 하위 테이블입니다."
  },
  {
    "id": 355,
    "title": "On the CI Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
    "options": [
      {
        "text": "Service Tracer",
        "id": "A"
      },
      {
        "text": "Automapping Utility",
        "id": "B"
      },
      {
        "text": "Relationships",
        "id": "C"
      },
      {
        "text": "Transform Map",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**디펜던시 뷰(Dependency View)**가 기술적 구성 항목(CI)들 사이의 연결 고리를 시각화할 수 있는 데이터 근거는 **관계(Relationships)** 정보입니다.\n*   **데이터 테이블**: CI 간의 의존 관계는 **`cmdb_rel_ci`** 테이블에 정의되어 저장됩니다.\n*   **가시성**: '호스팅함(Runs on)', '종속됨(Depends on)' 등의 관계 유형을 통해 서버 장애가 어떤 애플리케이션 서비스에 영향을 주는지 하향식(Top-down) 또는 상향식(Bottom-up)으로 추적할 수 있게 해줍니다.\n*   **CSDM 연관**: 이는 CSDM의 **Service Delivery (구 Manage Technical Services)** 도메인에서 인프라의 가동 상태를 서비스 가치와 연결하는 핵심 메커니즘입니다."
  },
  {
    "id": 356,
    "title": "How would you define an Access Control, to allow a user with itil role to have permission to create incident records?",
    "options": [
      {
        "text": "Name: incident; Operation: create; Role: itil",
        "id": "A"
      },
      {
        "text": "Name: incident.*, Operation: write; Role: itil",
        "id": "B"
      },
      {
        "text": "Name: incident.*; Operation: write; Role: itil",
        "id": "C"
      },
      {
        "text": "Name: incident.none; Operation: create; Role: itil",
        "id": "D"
      },
      {
        "text": "Name: incident.*; Operation: create; Role: itil",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow **접근 제어(ACL)**에서 새 인시던트 레코드를 만들려면 **테이블 수준 ACL**에 `create` 작업을 정의해야 합니다.\n*   **객체 구조**: 새 레코드 생성은 기존 행을 읽거나 수정하는 것이 아니므로 `incident.none`이 아니라 **`incident` 테이블의 create ACL**을 사용합니다.\n*   **작업(Operation)**: 생성 권한은 `create`입니다.\n*   **보안 계층**: `incident.none`은 기존 레코드의 행 접근과 관련되고, `incident.*`는 테이블의 필드 접근을 포괄하므로 이 문항의 정답은 `incident; create; itil`입니다."
  },
  {
    "id": 357,
    "title": "What options can you see, when you fight click on a Cl, from the Cl dependency view map? Choose 3 answers",
    "options": [
      {
        "text": "View Affected Cis",
        "id": "A"
      },
      {
        "text": "View Related Tasks",
        "id": "B"
      },
      {
        "text": "View Recent Outages",
        "id": "C"
      },
      {
        "text": "View Cases",
        "id": "D"
      },
      {
        "text": "View Knowledge",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "**디펜던시 뷰(Dependency View)** 맵은 단순한 시각화를 넘어 운영 효율을 높이는 대화형 인터페이스를 제공합니다.\n*   **운영 인사이트**: 특정 CI를 우클릭하면 나타나는 메뉴를 통해 다음과 같은 비즈니스 문맥을 즉시 확인할 수 있습니다.\n    1. **View Affected CIs (A)**: 해당 장비 장애 시 영향을 받는 다른 구성 항목들을 파악합니다.\n    2. **View Related Tasks (B)**: 현재 이 CI와 연관되어 진행 중인 인시던트, 변경 요청 목록을 확인합니다.\n    3. **View Recent Outages (C)**: 과거의 장애 이력을 검토하여 문제 패턴을 분석합니다."
  },
  {
    "id": 358,
    "title": "You have been asked to configure a form so an employee could order a tablet and select the standard accessory options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? Choose 3 answers",
    "options": [
      {
        "text": "Create Catalog Item for the Tablet, and add a variable set to the form, for the accessory options.",
        "id": "A"
      },
      {
        "text": "Create a Record Producer, and on the form, add a check box variable for each accessory option.",
        "id": "B"
      },
      {
        "text": "On Shopping Cart configuration, select option to show the Add Accessories button.",
        "id": "C"
      },
      {
        "text": "Create one Catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector.",
        "id": "D"
      },
      {
        "text": "Create Catalog Item for the tablet, and on the form, add a check box variable for each accessory option.",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "서비스 카탈로그 설계 시 비즈니스 요구사항에 따라 다양한 설계 전략을 취할 수 있습니다.\n1.  **가변 세트 활용 (A)**: 여러 항목에서 공통으로 쓰이는 부속품 옵션을 **Variable Set**으로 묶어 재사용함으로써 관리 효율을 높입니다.\n2.  **개별 항목 관리 (D)**: 각 부속품을 독립적인 **Catalog Item**으로 정의하여 재고 관리와 가격 정책을 세부적으로 운영합니다.\n3.  **체크박스 변수 (E)**: 주 항목(태블릿)의 폼 내에 체크박스 변수들을 배치하여 사용자가 주문 시 간편하게 선택하도록 구성합니다.\n*   **참고**: **레코드 프로듀서(B)**는 태스크 생성이 목적이므로 단순 주문 옵션 구성에는 적합하지 않습니다."
  },
  {
    "id": 359,
    "title": "Which feature helps to automatically allocate a critical, high priority, service request to the appropriate assignment group or team member?",
    "options": [
      {
        "text": "User Policy",
        "id": "A"
      },
      {
        "text": "UI policy",
        "id": "B"
      },
      {
        "text": "Predictive Intelligence",
        "id": "C"
      },
      {
        "text": "Assignment Rule",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**할당 규칙(Assignment Rules)**은 특정 조건(예: 중요도 P1, 서비스 유형)을 만족하는 작업 레코드가 생성될 때, 이를 처리할 최적의 주체에게 자동으로 배정하는 자동화 도구입니다.\n*   **자동화 대상**: **할당 그룹(Assignment group)**과 **담당자(Assigned to)** 필드를 시스템이 자동으로 채워줍니다.\n*   **비즈니스 가치**: 수동 배정에 소요되는 시간을 단축하고, 서비스 수준 계약(SLA) 준수를 위해 작업을 신속하게 실무자에게 전달하는 핵심 트리거 역할을 합니다.\n*   **참고**: 더 고도화된 지능형 배정이 필요한 경우 **Predictive Intelligence**나 **Advanced Work Assignment (AWA)**를 사용하기도 합니다."
  },
  {
    "id": 360,
    "title": "A customer wants to use a client script to validate things on a form m order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?",
    "options": [
      {
        "text": "onSubmission()",
        "id": "A"
      },
      {
        "text": "onSubmit()",
        "id": "B"
      },
      {
        "text": "onLoad",
        "id": "C"
      },
      {
        "text": "onUpdate()",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**`onSubmit()` 클라이언트 스크립트**는 데이터가 서버로 전송되기 전, 사용자의 브라우저에서 실행되는 마지막 데이터 검증 관문입니다.\n*   **데이터 무결성**: 사용자가 입력한 값들이 비즈니스 규칙에 부합하는지 최종 확인합니다.\n*   **제출 제어**: 스크립트 내에서 `false`를 반환하면 폼 제출이 중단되고 오류 메시지를 표시하여 사용자가 잘못된 데이터를 저장하는 것을 방지합니다.\n*   **활용 예시**: 시작일이 종료일보다 늦은지 검사하거나, 특정 조건에서 첨부 파일 여부를 확인하는 등의 로직에 사용됩니다."
  },
  {
    "id": 361,
    "title": "What type of field has a drop down list, from which you can pick from pre-defined options?",
    "options": [
      {
        "text": "Choice",
        "id": "A"
      },
      {
        "text": "Picker",
        "id": "B"
      },
      {
        "text": "Drop down",
        "id": "C"
      },
      {
        "text": "Option",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**선택(Choice)** 필드 유형은 사용자에게 미리 정의된 옵션 리스트를 드롭다운 형태로 제공하여 데이터의 표준화를 유도하는 도구입니다.\n*   **메커니즘**: 개별 옵션 값들은 **`sys_choice`** 테이블에 저장되어 관리됩니다.\n*   **장점**: 자유로운 텍스트 입력으로 인한 데이터 오염을 방지하고, 보고서 작성 시 일관된 그룹화 기준을 제공합니다.\n*   **참고**: 특정 필드의 선택 항목을 테이블마다 다르게 가져가고 싶을 때는 'Dictionary Override'를 사용합니다."
  },
  {
    "id": 362,
    "title": "What are the main components of the Form Design interface? (Choose three.)",
    "options": [
      {
        "text": "Field Layout",
        "id": "A"
      },
      {
        "text": "Page Header",
        "id": "B"
      },
      {
        "text": "Field Navigator",
        "id": "C"
      },
      {
        "text": "Field Picker",
        "id": "D"
      },
      {
        "text": "Form Layout",
        "id": "E"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "**폼 디자인(Form Design)** 인터페이스는 드래그 앤 드롭 방식으로 폼의 레이아웃을 시각적으로 설계하는 도구이며, 세 가지 핵심 영역으로 구성됩니다.\n1.  **Page Header (B)**: 현재 편집 중인 테이블과 뷰(View) 정보를 표시하며, 저장 및 미리보기 기능을 제공합니다.\n2.  **Field Navigator (C)**: 왼쪽 패널에 위치하며, 기존 필드를 검색하거나 새로운 필드 유형을 폼으로 끌어올 수 있는 라이브러리 역할을 합니다.\n3.  **Form Layout (Canvas) (E)**: 중앙 작업 영역으로, 필드의 배치, 섹션(Sections) 생성, 그리고 주석(Annotations) 추가를 실시간 레이아웃 형태로 수행합니다."
  },
  {
    "id": 363,
    "title": "Many actions are included with flow designer, what are some frequently used core actions? Choose 4 answers.",
    "options": [
      {
        "text": "Look for Update",
        "id": "A"
      },
      {
        "text": "Create Record",
        "id": "B"
      },
      {
        "text": "Ask for Approval",
        "id": "C"
      },
      {
        "text": "Look Up Record",
        "id": "D"
      },
      {
        "text": "Wait for Condition",
        "id": "E"
      },
      {
        "text": "Wait for Match",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)**의 **코어 액션(Core Actions)**은 복잡한 스크립트 작성 없이도 비즈니스 프로세스를 자동화할 수 있도록 ServiceNow가 기본 제공하는 표준 작업 단위입니다.\n*   **Create Record (B)**: 조건 충족 시 특정 테이블에 새 레코드 생성.\n*   **Ask for Approval (C)**: 사용자나 그룹에 승인 요청 송신 및 결과 대기.\n*   **Look Up Record (D)**: 데이터베이스에서 특정 조건과 일치하는 단일 레코드 검색.\n*   **Wait for Condition (E)**: 특정 필드 값이 원하는 상태가 될 때까지 플로우 일시 중지.\n*   **이점**: 이러한 액션들은 **데이터 알약(Data Pills)**과 결합되어 강력한 로코드(Low-code) 자동화를 가능하게 합니다."
  },
  {
    "id": 364,
    "title": "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
    "options": [
      {
        "text": "Community",
        "id": "A"
      },
      {
        "text": "Help Panel (question mark icon)",
        "id": "B"
      },
      {
        "text": "Docs",
        "id": "C"
      },
      {
        "text": "Wiki",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**플로우 디자이너(Flow Designer)** 내의 **도움말 패널(Help Panel)**은 사용자가 설계를 진행하는 도중에 즉각적인 도움을 받을 수 있는 '플랫폼 내장 지원' 도구입니다.\n*   **기능**: 사용자가 추가한 액션에 대한 상세 설명, 입력(Inputs) 및 출력(Outputs) 데이터 활용법, 가이드 투어 등을 컨텍스트에 맞게 제공합니다.\n*   **가시성**: 화면 우측 상단의 물음표(?) 아이콘을 통해 활성화하며, 외부 문서를 검색할 필요 없이 인터페이스 내에서 즉각적인 기술 가이드를 얻을 수 있게 해줍니다."
  },
  {
    "id": 365,
    "title": "When importing data, what happens to imported rows, if no coalesce field is specified?",
    "options": [
      {
        "text": "All rows are rejected from the import, as coalesce field is required.",
        "id": "A"
      },
      {
        "text": "All rows are treated as new records. No existing records are updated.",
        "id": "B"
      },
      {
        "text": "Duplicate rows are rejected from the import.",
        "id": "C"
      },
      {
        "text": "All rows are treated as new records, but errors will be flagged in the import log.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 데이터 임포트 아키텍처에서 **병합(Coalesce)** 필드는 기존 데이터와 대조할 '고유 식별자' 역할을 합니다.\n*   **병합 필드 부재 시**: 시스템은 기존 레코드와의 일치 여부를 판단할 수 없으므로, 임포트 세트 테이블의 모든 행을 고유한 항목으로 간주하여 **항상 새로운 레코드로 생성(Insert-only)**합니다.\n*   **리스크**: 이는 데이터 중복(Duplicates)의 주요 원인이 되므로, 업데이트가 필요한 데이터 적재 시에는 반드시 사번이나 이메일 같은 고유 키를 병합 필드로 지정해야 합니다."
  },
  {
    "id": 366,
    "title": "A new employee joins the IT deployment and needs to perform work assigned to Network and Hardware groups. How would you set up their access? Choose 3 answers",
    "options": [
      {
        "text": "Add User Account to itil group",
        "id": "A"
      },
      {
        "text": "Add User Account to ACL",
        "id": "B"
      },
      {
        "text": "Add User Account to network group",
        "id": "C"
      },
      {
        "text": "Add User Account to IT Knowledgebase",
        "id": "D"
      },
      {
        "text": "Create User Account",
        "id": "E"
      },
      {
        "text": "Add User Account to Hardware group",
        "id": "F"
      }
    ],
    "answer": [
      "A",
      "C",
      "F"
    ],
    "explanation": "(제공된 정답 키를 기반으로 보강함) 신규 직원의 업무 접근 권한을 설정하는 가장 효율적인 방식은 **그룹 기반 할당(Group-based Assignment)**입니다.\n1.  **그룹 추가 (A, C, F)**: 사용자를 `itil` 그룹과 'Network', 'Hardware' 그룹의 멤버로 등록합니다.\n2.  **권한 상속**: 그룹에 할당된 역할(`itil` 등)이 사용자에게 자동으로 상속됩니다.\n*   **비판적 해석**: 본 문항의 B(Add to ACL)는 복원 과정의 오류로 보이며, 실무적으로는 ACL에 사용자를 직접 넣는 대신 그룹 멤버십을 통해 권한을 제어하는 것이 ServiceNow의 RBAC(Role-Based Access Control) 표준 모범 사례입니다."
  },
  {
    "id": 367,
    "title": "Which path would you take to access the table configuration page from a form?",
    "options": [
      {
        "text": "The Form Context menu > View > Table",
        "id": "A"
      },
      {
        "text": "The Form Context menu > Configure > Table",
        "id": "B"
      },
      {
        "text": "The Form Context menu > Configure > Dictionary",
        "id": "C"
      },
      {
        "text": "The Form Context menu > View > Show Table",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow에서 현재 보고 있는 레코드가 속한 테이블의 전반적인 기술 설정을 관리하려면 **Form Context Menu (햄버거 아이콘)**의 **`Configure > Table`** 경로를 통해 진입합니다.\n*   **관리 가능 항목**: 테이블의 레이블, 필드 정의(Columns), 데이터 제어 규칙(Controls), 비즈니스 규칙(Business Rules), ACL 리스트 등을 한눈에 확인하고 통합 관리할 수 있는 테이블 관리자 허브로 연결됩니다."
  },
  {
    "id": 368,
    "title": "What type of query allows you to filter list data using normal words, instead of the condition builder?",
    "options": [
      {
        "text": "Natural Language Query",
        "id": "A"
      },
      {
        "text": "Alexa Query",
        "id": "B"
      },
      {
        "text": "Machine Learning Query",
        "id": "C"
      },
      {
        "text": "Predictive Intelligence Query",
        "id": "D"
      },
      {
        "text": "Auto-suggest Query",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**자연어 쿼리(NLQ, Natural Language Query)**는 복잡한 조건 빌더(Condition Builder) 사용법을 모르는 일반 사용자도 일상적인 언어로 데이터를 조회할 수 있게 돕는 지능형 인터페이스입니다.\n*   **작동 방식**: 리스트 상단의 검색창에 \"Incidents opened this week by ITIL user\"와 같이 입력하면 시스템이 의도를 파악하여 해당하는 필터 조건을 자동으로 생성하고 적용합니다.\n*   **가치**: 데이터 분석의 장벽을 낮추고 필요한 정보를 더 신속하게 탐색할 수 있는 사용자 경험을 제공합니다."
  },
  {
    "id": 369,
    "title": "What action will allow you to personalize layouts of columns in a list?",
    "options": [
      {
        "text": "Click Gear icon > Personalize window options > Select the appropriate columns",
        "id": "A"
      },
      {
        "text": "Select the column to be personalized > Click Edit icon (Penal) > Choose me options to personage",
        "id": "B"
      },
      {
        "text": "Context Menu > View > Personalize",
        "id": "C"
      },
      {
        "text": "Select the column to be personalized and right at the header > Choose the options to personalize",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**리스트 메카닉(Gear 아이콘)** 기능을 통해 개별 사용자는 시스템의 기본 설정을 변경하지 않고 자신만의 리스트 뷰를 구성할 수 있습니다.\n*   **개인화(Personalization)**: 표시할 컬럼을 선택하고 순서를 조정하며, 이는 '현재 로그인한 사용자'에게만 적용되는 개인 설정(User Preference)입니다.\n*   **구분**: 시스템 전역의 기본 레이아웃을 영구적으로 바꾸려면 관리자가 `Configure > List Layout` 기능을 사용해야 합니다."
  },
  {
    "id": 370,
    "title": "What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?",
    "options": [
      {
        "text": "Analytics Reports",
        "id": "A"
      },
      {
        "text": "Performance Analytics",
        "id": "B"
      },
      {
        "text": "Scheduled Reports",
        "id": "C"
      },
      {
        "text": "Reporting",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**성능 분석(Performance Analytics, PA)**은 단순한 시점 보고(Reporting)를 넘어 비즈니스 가치를 도출하는 고도화된 분석 도구입니다.\n*   **주요 기능**: 데이터의 장기적인 **추세(Trending)** 파악, 목표치(Targets) 대비 실적 비교, 그리고 과거 데이터를 바탕으로 한 미래 예측을 지원합니다.\n*   **가치**: 리포팅이 '현재 무엇이 일어나고 있는가'를 알려준다면, PA는 '우리가 개선되고 있는가'라는 인사이트를 제공하여 지속적인 서비스 개선(CSI)을 가능하게 합니다."
  },
  {
    "id": 371,
    "title": "What do you click when you have made modification to your report, and your want to see the results without saving?",
    "options": [
      {
        "text": "Execute",
        "id": "A"
      },
      {
        "text": "Try ir",
        "id": "B"
      },
      {
        "text": "Run",
        "id": "C"
      },
      {
        "text": "Test",
        "id": "D"
      },
      {
        "text": "Preview",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "보고서 디자이너(Report Designer)에서 **Run (실행)** 버튼은 현재까지 설정된 조건들을 바탕으로 데이터베이스를 쿼리하여 결과물을 즉시 미리보기 할 때 사용합니다.\n*   **검증**: 보고서를 최종 저장(Save)하거나 공유(Share)하기 전에, 필터링이 의도대로 되었는지와 시각화 결과가 적절한지를 실시간으로 확인하는 필수 단계입니다.\n*   **성능**: 대규모 데이터를 다룰 때는 실행 시마다 서버 리소스가 소모되므로, 필터 조건을 먼저 정교하게 설정한 후 실행하는 것이 좋습니다."
  },
  {
    "id": 372,
    "title": "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
    "options": [
      {
        "text": "Attribute",
        "id": "A"
      },
      {
        "text": "Label",
        "id": "B"
      },
      {
        "text": "Field",
        "id": "C"
      },
      {
        "text": "Column",
        "id": "D"
      },
      {
        "text": "Data Element",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "리스트나 보고서에서 데이터를 정밀하게 추출하는 **조건 빌더(Condition Builder)**는 세 가지 핵심 요소로 구성됩니다.\n1.  **Field (C)**: 데이터를 검사할 열(Column)을 선택합니다 (예: 'Priority').\n2.  **Operator**: 데이터 비교 방식(연산자)을 선택합니다 (예: 'is', 'contains').\n3.  **Value**: 비교 기준이 되는 실제 데이터 값을 지정합니다.\n*   **가시성**: 선택 가능한 필드 리스트는 사용자의 역할(Roles)과 해당 테이블의 ACL 설정에 따라 동적으로 결정됩니다."
  },
  {
    "id": 373,
    "title": "The customer has asked that your change the default layout of the task list. *Number* Task Type *Parent* Short Description *Assignment Group* Assignment * Updated After navigation to the list, where would you click, to meet this requirement?",
    "options": [
      {
        "text": "Right click on any column header, Context menu > Configure > List Layout",
        "id": "A"
      },
      {
        "text": "Right click List Gear icon > Configure > Columns",
        "id": "B"
      },
      {
        "text": "Click List Context Menu >Personalize List",
        "id": "C"
      },
      {
        "text": "Click List Context Menu > Configure Columns",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 리스트 뷰에서 컬럼 구성(추가, 제거, 순서)을 시스템 수준에서 영구적으로 수정하려면 **List Layout** 설정을 사용합니다.\n*   **접근 경로**: 컬럼 헤더 우클릭 -> **Configure > List Layout** 선택.\n*   **UI 도구**: 슬러시버킷(Slushbucket) 인터페이스를 통해 표시 필드를 조정합니다.\n*   **영향 범위**: 톱니바퀴(Gear) 아이콘을 통한 개인화와 달리, 이 설정은 해당 뷰를 사용하는 **모든 사용자**에게 공통 적용됩니다."
  },
  {
    "id": 374,
    "title": "On a filter condition, which component is always a choice list?",
    "options": [
      {
        "text": "Operator",
        "id": "A"
      },
      {
        "text": "Filter Criteria",
        "id": "B"
      },
      {
        "text": "Operation",
        "id": "C"
      },
      {
        "text": "Match Criteria",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "(문항의 답변 키에 따라 보강함) 리스트 필터의 **연산자(Operator / Operation)** 영역은 사용자가 직접 입력하는 대신 시스템이 제공하는 옵션 중 하나를 선택하는 **드롭다운(Choice list)** 형태입니다.\n*   **동적 제공**: 필드의 데이터 타입에 따라 적절한 연산자 리스트(예: 문자열은 'contains', 날짜는 'between')가 자동으로 필터링되어 나타납니다.\n*   **기능**: 기술적인 쿼리 문법을 모르더라도 논리적인 데이터 조회를 가능하게 하는 플랫폼의 핵심 UI 편의 기능입니다."
  },
  {
    "id": 375,
    "title": "NO.206 Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?",
    "options": [
      {
        "text": "Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog.",
        "id": "A"
      },
      {
        "text": "Create one Catalog Item for Event Room Set Up; then publish to both Catalogs.",
        "id": "B"
      },
      {
        "text": "Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities.",
        "id": "C"
      },
      {
        "text": "Create one Catalog Item for Event Room Set Up; then use ACLs to control access.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 서비스 카탈로그 아키텍처는 중복을 최소화하도록 설계되었습니다.\n*   **효율적 관리**: 서로 다른 부서라도 요청 폼의 구성과 이행(Fulfillment) 프로세스가 동일하다면, 하나의 **Catalog Item**만 생성하여 관리하는 것이 유지보수 측면에서 유리합니다.\n*   **다중 게시**: 생성된 하나의 항목을 여러 개의 서로 다른 **카탈로그(Catalogs)**에 동시에 연결하여 노출시킬 수 있으므로, 각 부서의 사용자는 자신의 카탈로그 내에서 해당 서비스를 이용할 수 있습니다."
  },
  {
    "id": 376,
    "title": "NO.243 Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
    "options": [
      {
        "text": "Discovery",
        "id": "A"
      },
      {
        "text": "IntegrationHub ETL",
        "id": "B"
      },
      {
        "text": "Finder",
        "id": "C"
      },
      {
        "text": "CMDB Plug-in",
        "id": "D"
      },
      {
        "text": "CMDB Integration Dashboard",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "ServiceNow CMDB를 정확하고 최신 상태로 유지하기 위한 두 가지 핵심 데이터 수집 도구입니다.\n1.  **Discovery (A)**: 네트워크를 직접 스캔하여 서버, 네트워크 장비, 소프트웨어 등 기술적 구성 항목(CI)을 자동으로 식별하고 CMDB에 등록합니다.\n2.  **IntegrationHub ETL (B)**: 외부 데이터 소스(예: SCCM, Jamf)로부터 유입되는 데이터를 시각적인 매핑을 통해 CMDB 구조에 맞게 변환하고, **IRE(식별 및 조정 엔진)**를 경유시켜 중복 없이 안전하게 적재합니다."
  }
];
