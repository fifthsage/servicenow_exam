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
    "explanation": "정답은 **A**입니다. 사용자 impersonation은 다른 사용자 입장에서 화면과 권한 결과를 재현해 보는 기능으로, 테스트와 가시성 확인에 사용합니다."
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
    "explanation": "정답은 **C**입니다. 애플리케이션과 모듈 접근은 `Role`로 제어합니다. ACL은 주로 테이블과 필드 데이터 접근 제어에 더 가깝습니다."
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
    "explanation": "정답은 **A,C,D,F**입니다. ServiceNow가 지원하는 대표 Client Script 유형은 `onLoad`, `onChange`, `onSubmit`, `onCellEdit`입니다."
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
    "explanation": "정답은 **A**입니다. 테이블의 필드 설정을 보려면 `Tables & Columns` 모듈을 사용합니다."
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
    "explanation": "정답은 **A,C,E**입니다. 이 문항은 기본 사용자 역할 분류 중 `System Administrator`, `Fulfiller`, `Requester`를 고르는 문제입니다."
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
    "explanation": "정답은 **D**입니다. Service Catalog의 대표 구성 요소는 `Catalog Item`, `Record Producer`, `Order Guide`입니다."
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
    "explanation": "정답은 **A**입니다. UI Policy는 필드를 `read-only`, `mandatory`, `hidden` 상태로 바꿀 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 이 문서 기준으로는 해당 진술을 거짓으로 두고 있습니다."
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
    "explanation": "정답은 **B**입니다. Business Rule은 서버 측에서 실행되는 JavaScript 로직입니다."
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
    "explanation": "정답은 **A,D**입니다. LDAP Integration의 핵심 두 축은 `Authentication`과 `Data Population`입니다."
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
    "explanation": "정답은 **C**입니다. Knowledge 문서의 생성, 읽기, 수정, retire 권한을 판단하는 사용자 조건 기준은 `User Criteria`입니다."
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
    "explanation": "정답은 **A,D**입니다. 보고서는 리스트 컬럼 헤더에서도 만들 수 있고 `View / Run` 모듈에서도 만들 수 있습니다."
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
    "explanation": "정답은 **A**입니다. Flow를 시작시키는 요소는 `Trigger`입니다."
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
    "explanation": "정답은 **C**입니다. 그룹 레코드는 `sys_user_group` 테이블에 저장됩니다."
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
    "explanation": "정답은 **C**입니다. 여러 참조 필드를 따라 다른 테이블 값까지 가져오는 기법은 `Dot-Walking`입니다."
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
    "explanation": "정답은 **B**입니다. 일반적인 configure 변경은 개인 설정이 아니라 다른 사용자가 보는 폼에도 영향을 줄 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 원격 서비스나 다른 시스템에 요청을 보내는 쪽을 `Client`라고 합니다."
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
    "explanation": "정답은 **A,C,D**입니다. Basic Configuration UI16에서는 배너 이미지, 브라우저 탭 제목, 날짜 형식 같은 기본 UI 속성을 조정할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. 로그인한 사용자와 실시간 대화를 하는 기본 도구는 `Connect Chat`입니다."
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
    "explanation": "정답은 **B**입니다. 데이터베이스의 각 테이블 메타데이터를 담는 마스터 테이블은 `sys_db_object`입니다."
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
    "explanation": "정답은 **A,B,D**입니다. ACL은 `Roles`, `Condition`, `Script` 조합으로 접근 권한을 판단할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. UI Action은 실행 후 성공 메시지나 안내 메시지를 띄울 수 있습니다."
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
    "explanation": "정답은 **D**입니다. 생성되고 작업이 수행되며 최종적으로 종료 상태로 가는 기본 단위 레코드는 `Task`입니다."
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
    "explanation": "정답은 **B**입니다. 현재 인스턴스가 어떤 릴리스를 실행 중인지 확인하는 기본 위치는 `Stats` 모듈입니다."
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
    "explanation": "정답은 **D**입니다. Related List는 현재 레코드와 연결된 다른 `records`를 폼 하단에 보여 주는 기능입니다."
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
    "explanation": "정답은 **B,C,D**입니다. ServiceNow의 대표 사용자 인증 방식은 `Local database`, `LDAP`, `SSO`입니다."
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
    "explanation": "정답은 **A**입니다. Data Policy는 폼 입력뿐 아니라 import 같은 비폼 입력 경로에도 mandatory 규칙을 적용할 수 있습니다."
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
    "explanation": "정답은 **B,C,D**입니다. 필터 조건은 `Field`, `Operator`, `Value` 세 요소로 구성됩니다."
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
    "explanation": "정답은 **A**입니다. Knowledge Base마다 고유한 라이프사이클, user criteria, category 구조, 관리 담당자를 가질 수 있습니다."
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
    "explanation": "정답은 **B**입니다. UI Policy는 필드 상태를 제어하고, UI Action은 버튼·링크·컨텍스트 메뉴 같은 실행 요소를 제공합니다."
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
    "explanation": "정답은 **A**입니다. 기본 Service Catalog 홈에는 `Record Producers`, `Order Guides`, `Catalog Items` 링크가 포함됩니다."
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
    "explanation": "정답은 **D**입니다. Dictionary Override는 확장 테이블에서 상속받은 필드 속성을 다르게 설정하는 기능입니다."
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
    "explanation": "정답은 **A**입니다. 다른 테이블에 의해 확장될 수 있지만 스스로는 다른 테이블을 확장하지 않는 것은 `Base Tables`입니다."
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
    "explanation": "정답은 **B**입니다. 이 문항 기준으로 `Insert`는 새 레코드를 만들고 `Update`는 기존 변경사항을 저장하며, 둘 다 폼을 벗어나는 동작으로 정리되어 있습니다."
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
    "explanation": "정답은 **D**입니다. 테이블의 여러 레코드를 한 번에 보여 주는 기본 화면은 `List`입니다."
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
    "explanation": "정답은 **D**입니다. Mapping Assist는 가져온 데이터 필드와 대상 필드를 `Field Map` 기준으로 연결하는 데 쓰입니다."
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
    "explanation": "정답은 **C**입니다. Service Catalog workflow는 승인, 작업, 알림을 포함한 복잡한 fulfillment 프로세스를 자동으로 진행합니다."
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
    "explanation": "정답은 **C**입니다. 주문의 fulfillment 작업을 보려면 보통 `REQ -> RITM -> TASK` 순서로 내려가 확인합니다."
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
    "explanation": "정답은 **D**입니다. 기존 Transform Map은 같은 Import Set에 대해 여러 번 재사용할 수 있습니다."
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
    "explanation": "정답은 **C,D**입니다. 역할은 사용자에게 직접 주기보다 그룹에 부여하고, 사용자는 필요한 그룹에 넣는 것이 일반적인 모범 사례입니다."
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
    "explanation": "정답은 **B**입니다. formatter는 레코드 필드가 아닌 추가 정보를 폼에 표시하는 UI 요소입니다."
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
    "explanation": "정답은 **A,C,D,E**입니다. CMDB는 서비스 프로세스, 테이블과 필드 구조, 데이터베이스 개념, Dependency View와 연결됩니다."
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
    "explanation": "정답은 **C**입니다. Import Set Table은 가져온 레코드를 임시로 적재해 두는 `staging area`입니다."
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
    "explanation": "정답은 **C**입니다. Service Catalog Item에서 변수 표시 순서는 Variable 레코드의 `Order` 필드로 제어합니다."
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
    "explanation": "정답은 **A**입니다. 사용자 레코드는 `sys_user` 테이블에 저장됩니다."
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
    "explanation": "정답은 **A**입니다. 테이블별 번호 형식과 접두어는 `Number Maintenance`에서 변경합니다."
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
    "explanation": "정답은 **D**입니다. Record Producer는 Service Catalog에서 사용자가 특정 테이블의 레코드를 쉽게 만들도록 해 주는 Catalog Item 유형입니다."
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
    "explanation": "정답은 **B**입니다. Service Catalog Item은 카탈로그를 구성하는 기본 building block입니다."
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
    "explanation": "정답은 **A**입니다. 지식 문서를 검토 대상으로 표시하는 방법은 `Flag article`입니다."
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
    "explanation": "정답은 **B,C,D**입니다. User menu에서는 `Log Out`, `Elevate Roles`, `Impersonate Users` 같은 계정/권한 관련 작업을 수행할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. `REQ` 번호는 서비스 카탈로그 주문 전체를 나타내는 request, 즉 order number입니다."
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
    "explanation": "정답은 **D**입니다. `Self-Service`는 일반 사용자도 공통적으로 접근할 수 있는 기본 애플리케이션입니다."
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
    "explanation": "정답은 **C**입니다. 폼을 열지 않고 리스트에서 바로 값을 수정하는 기능은 `List Editor`입니다."
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
    "explanation": "정답은 **A,C,E**입니다. Knowledge 검색 결과는 보통 `Most recent update`, `Relevancy`, `Number of views` 기준으로 정렬할 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 문서 flagging은 나중에 보기 위한 북마크보다, 문서에 대한 피드백이나 검토 필요를 표시하는 목적에 가깝습니다."
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
    "explanation": "정답은 **A**입니다. CMDB에는 유형·무형의 비즈니스 자산과 구성 항목 정보가 담깁니다."
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
    "explanation": "정답은 **A**로 유지했습니다. 다만 보기 구성이 다소 손상돼 있어 현재 문서에서는 base instance에 제공되는 knowledge workflow 보기 중 해당 항목을 정답으로 둡니다."
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
    "explanation": "정답은 **A,D,F**입니다. UI Policy로 필드를 `read-only`, `mandatory`, `hidden` 상태로 만들 수 있습니다."
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
    "explanation": "정답은 **C**입니다. metric은 IT 서비스 관리 프로세스의 효과를 측정하고 평가하는 데 사용됩니다."
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
    "explanation": "정답은 **A**입니다. ServiceNow는 커스터마이징 이동에 `Default Update Set` 사용을 피하라고 권장합니다."
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
    "explanation": "정답은 **C**입니다. 스크립트를 이용해 coalesce 판단을 하려면 `Conditional coalesce` 구성을 사용합니다."
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
    "explanation": "정답은 **B**입니다. 새 Catalog Item 생성을 시작하는 기본 모듈은 `Maintain Items`입니다."
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
    "explanation": "정답은 **C**입니다. 사용자가 서비스 카탈로그에서 주문을 제출하면 상위 `Request`가 생성됩니다."
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
    "explanation": "정답은 **D**입니다. ACL 평가는 일반적인 테이블 규칙에서 더 구체적인 필드 규칙으로 진행됩니다."
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
    "explanation": "정답은 **A**입니다. coalesce 필드로 일치하는 기존 레코드를 찾으면 새 레코드를 만들지 않고 기존 레코드를 업데이트합니다."
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
    "explanation": "정답은 **A**입니다. Workflow 구성은 일반적인 커스터마이징과 마찬가지로 `Update Sets`로 인스턴스 간 이동합니다."
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
    "explanation": "정답은 **A,D**입니다. 테이블은 `records`와 `fields`로 구성됩니다."
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
    "explanation": "정답은 **D**입니다. Service Catalog Item에 추가할 수 있는 대표 변수 유형에는 `Multiple Choice`, `Select Box`, `Checkbox`가 있습니다."
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
    "explanation": "정답은 **B**입니다. 레코드 번호는 Number Maintenance 규칙에 따라 자동 증가하므로 수동 증가가 필요하지 않습니다."
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
    "explanation": "정답은 **B,D,F**입니다. ServiceNow 플랫폼의 주요 UI 구성 요소는 `Banner Frame`, `Application Navigator`, `Content Frame`입니다."
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
    "explanation": "정답은 **A**입니다. 이런 서비스는 모두 사용자가 간단한 입력으로 레코드를 만들게 하는 `Record Producer`로 연결되는 유형입니다."
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
    "explanation": "정답은 **A**입니다. 일반 사용자가 지식 문서를 보려면 해당 문서 상태가 `Published`여야 합니다."
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
    "explanation": "정답은 **A**입니다. Knowledge Base 안의 문서는 category 기준으로 분류됩니다."
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
    "explanation": "정답은 **A**입니다. 표현은 부정확하지만 데이터베이스가 데이터 센터 인프라에서 운영된다는 의미로 보면 참입니다."
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
    "explanation": "정답은 **C**입니다. 하나의 폼에 저장된 전체 데이터 단위를 ServiceNow에서는 `Record`라고 부릅니다."
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
    "explanation": "정답은 **C**입니다. 여러 보고서와 위젯을 한 화면에 배치하는 인터페이스는 `Dashboard`입니다."
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
    "explanation": "정답은 **D**입니다. User 테이블의 플랫폼 이름은 `sys_user`입니다."
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
    "explanation": "정답은 **D**입니다. Schema Map은 테이블과 테이블 관계를 시각적으로 보여 주는 도구입니다."
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
    "explanation": "정답은 **D**입니다. 역할 정보는 `sys_user_role` 테이블에 저장됩니다."
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
    "explanation": "정답은 **B**입니다. 자주 쓰는 애플리케이션 메뉴와 모듈을 빠르게 접근하도록 저장하는 것은 `Favorite`입니다."
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
    "explanation": "정답은 **C**입니다. 다른 테이블을 확장해 새 테이블을 만들면 부모 테이블 필드를 상속받고, 자신만의 필드를 추가할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. Update Set은 여러 커스터마이징 변경을 하나의 묶음으로 관리하고 다른 인스턴스로 이동하기 위한 단위입니다."
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
    "explanation": "정답은 **A**입니다. 역할은 다른 역할을 포함할 수 있어서 상위 역할을 부여받으면 내부 역할 권한도 함께 상속됩니다."
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
    "explanation": "정답은 **B**입니다. Application Navigator의 History에는 최근 연 리스트나 폼은 나타날 수 있지만 `UI Pages` 같은 개발 객체는 일반적으로 나타나지 않습니다."
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
    "explanation": "정답은 **B**입니다. 폼에서 필수 입력을 즉시 강제하는 대표 수단은 UI Policy나 Client Script이고, Business Rule은 주로 서버 로직 처리에 쓰입니다."
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
    "explanation": "정답은 **B**입니다. 버튼, 폼 링크, 컨텍스트 메뉴는 모두 `UI Action`의 예입니다."
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
    "explanation": "정답은 **A**입니다. `Event Registry`는 이벤트 정의를 담고, `Event Log`는 실제 발생한 이벤트 기록을 담습니다."
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
    "explanation": "정답은 **C**입니다. Order Guide는 서로 관련된 여러 Catalog Item을 하나의 요청 흐름으로 함께 주문하게 해 줍니다."
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
    "explanation": "정답은 **D**입니다. 이 문서 기준으로는 Service Catalog variable이 기본적으로 전역적으로 사용된다는 특성을 정답으로 두고 있습니다."
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
    "explanation": "정답은 **A,B,C,D**입니다. App Navigator 검색은 애플리케이션 이름, 모듈 이름, 둘의 조합, Favorites를 반환할 수 있습니다."
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
    "explanation": "정답은 **C**로 유지했습니다. 다만 문항이 숫자 설명과 인터페이스 보기 문장이 섞여 있어 복원 신뢰도는 높지 않습니다. 현재 문서 기준으로는 `Form` 보기를 정답으로 둡니다."
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
    "explanation": "정답은 **A**입니다. Column Context Menu에서는 quick report 생성, 리스트 설정, 데이터 export 같은 컬럼 관련 작업을 할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. 여러 부서가 제공하는 서비스와 상품을 주문하는 대표 진입점은 `Service Catalog`입니다."
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
    "explanation": "정답은 **C**입니다. 사용자를 안내하고 질문 응답과 작업 지원을 제공하는 대화형 봇 플랫폼은 `Virtual Agent`입니다."
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
    "explanation": "정답은 **B**입니다. System Dictionary에는 각 테이블과 컬럼의 정의 정보가 들어 있습니다."
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
    "explanation": "정답은 **D**입니다. 같은 import set에 기존 Transform Map을 여러 번 사용할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. 필터 조건은 `Field -> Operator -> Value` 순서로 지정합니다."
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
    "explanation": "정답은 **B**입니다. 테이블 ACL은 `table name`부터 확인하고, 이후 `parent table name`, 마지막으로 wildcard 순으로 평가합니다."
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
    "explanation": "정답은 **A,D**입니다. 이 문서 기준으로는 게시 문서 목록과 `My Flagged` 경로에서 해당 피드백을 확인하는 보기 조합을 정답으로 둡니다."
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
    "explanation": "정답은 **B**입니다. `Submit`은 새 레코드를 생성할 때 나타나고, 기존 레코드 저장에는 보통 `Update`가 사용됩니다."
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
    "explanation": "정답은 **A,B,E,F**로 유지했습니다. 다만 보기 복원 상태가 완전하지 않아 일반적인 Business Rule 생성 항목과 일부 어긋남이 있습니다."
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
    "explanation": "정답은 **A**입니다. 제출된 Incident를 가로채 자동 해결 흐름으로 연결하는 기능은 `Incident Auto-Resolution`입니다."
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
    "explanation": "정답은 **A,C,D**입니다. ACL은 조건, 역할, 스크립트 평가를 통해 접근 허용 여부를 결정합니다."
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
    "explanation": "정답은 **D**입니다. 데이터 가져오기의 첫 단계는 원본 파일을 올리는 `Load Data`입니다."
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
    "explanation": "정답은 **C**입니다. 이 문서 기준으로는 Update Set 완료 확인 후 연결을 점검하고 `Commit`하는 흐름을 정답으로 둡니다."
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
    "explanation": "정답은 **C**입니다. 폼 헤더의 세 줄 아이콘은 일반적으로 `Hamburger icon`이라고 부릅니다."
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
    "explanation": "정답은 **D**로 유지했습니다. 다만 보기 명칭이 손상돼 있어 실제 도구명은 별도 원본 대조가 필요합니다."
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
    "explanation": "정답은 **A**로 유지했지만, 보기 내용은 일반적인 Event Registry 개념과 다소 어긋납니다. 복원 신뢰도는 낮습니다."
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
    "explanation": "정답은 **B**입니다. 보고서에서 계산, 결합, 길이 처리 같은 연산을 위해 쓰는 것은 `Function fields`입니다."
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
    "explanation": "정답은 **A**입니다. 다른 테이블 값을 조회·참조하도록 연결하는 필드 유형은 `Reference`입니다."
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
    "explanation": "정답은 **C**로 유지했습니다. 다만 보기 용어 `Anti-signals`는 일반적인 표현과 거리가 있어 원문 재확인이 필요한 문항입니다."
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
    "explanation": "정답은 **C,E**입니다. Service Portal에서 사용할 수 있는 대표적인 인증서 기반 로그인 방식은 `CAC`와 `PIV`입니다."
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
    "explanation": "정답은 **B**입니다. 필터 이름을 지정하고 visibility를 설정한 뒤 저장해야 모두가 사용할 수 있습니다."
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
    "explanation": "정답은 **E**로 유지했습니다. 다만 실제 제품 용어와 보기 복원 상태가 어긋나 있어 신뢰도는 낮은 편입니다."
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
    "explanation": "정답은 **B**로 유지했습니다. 다만 일반적인 설계 관점에서는 `User Criteria` 활용이 더 자연스러워 원문 복원 신뢰도는 높지 않습니다."
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
    "explanation": "정답은 **C**입니다. Favorite 이름 변경은 보통 편집을 의미하는 `Pencil` 아이콘으로 수행합니다."
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
    "explanation": "정답은 **A**입니다. ServiceNow에서 role은 `sys_user_role` 테이블의 레코드로 관리되는 권한 단위입니다."
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
    "explanation": "정답은 **C**입니다. 애플리케이션과 모듈 목록 전체를 접고 펼치는 데 쓰는 해당 navigator 아이콘을 의미합니다."
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
    "explanation": "정답은 **B**입니다. 높은 보안 설정 작업 후 일반 admin 보안 수준으로 돌아가려면 다시 로그인합니다."
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
        "text": "XML. CSV, and Excel"
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
    "explanation": "정답은 **B**입니다. Import Set은 `XML`, `CSV`, `Excel` 같은 데이터를 이용해 테이블을 채울 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 리스트에서 필터를 정의한 뒤 `Create Report`를 선택하면 빠르게 보고서를 만들 수 있습니다."
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
    "explanation": "정답은 **F**입니다. Priority 선택값을 공통적으로 바꾸려면 해당 필드 옵션 구성을 열어 choice 값을 수정해야 합니다."
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
    "explanation": "정답은 **C**입니다. Application-based trigger를 쓰기 전에 관련 application spoke와 필요한 플러그인을 활성화해야 합니다."
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
    "explanation": "정답은 **B**입니다. 전역 검색은 상단의 `Banner frame` 영역에서 수행합니다."
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
    "explanation": "정답은 **A,C,D,F**입니다. ServiceNow로 가져올 수 있는 대표 Data Source 유형에는 로컬 파일, DataHub, JDBC, LDAP 연결이 있습니다."
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
    "explanation": "정답은 **B**입니다. IntegrationHub에서 외부 연동 패키지는 `Spoke`라고 부릅니다."
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
    "explanation": "정답은 **A,D,E**입니다. 대표 인터페이스 유형은 `Now Mobile Apps`, `Service Portals`, `Now Platform User Interfaces`입니다."
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
    "explanation": "정답은 **A**입니다. 여러 Update Set을 한 번에 이동할 때는 `Batch` 방식이 도움이 됩니다."
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
    "explanation": "정답은 **B**입니다. Import Set 필드명과 대상 테이블 필드명이 같으면 `Automatic Mapping`을 사용할 수 있습니다."
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
    "explanation": "정답은 **D**로 유지했습니다. 다만 실제 절차에는 보통 `Load Data`가 먼저 포함되므로 보기 복원 상태를 감안해 해석해야 합니다."
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
    "explanation": "정답은 **A**입니다. 자주 쓰는 필드 조합을 빠르게 채우려면 `Template`을 사용합니다."
  },
  {
    "id": 132,
    "title": "What Is the purpose of the Fitter navigator In the Application Navigator?",
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
    "explanation": "정답은 **C**입니다. Application Navigator에서 앱과 모듈을 펼치거나 접는 기능은 navigator 아이콘의 동작입니다."
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
    "explanation": "정답은 **B,D**입니다. 필드를 폼에 추가하려면 `Configure > Form Layout` 경로나 헤더 오른쪽 클릭 후 추가 방법을 사용할 수 있습니다."
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
    "explanation": "정답은 **C**입니다. 지식 문서 게시와 퇴출 절차는 워크플로우로 제어되며, 이를 설계하는 곳은 `Workflow Designer`입니다."
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
    "explanation": "정답은 **A**입니다. 두 조건을 모두 만족하는 레코드를 보려면 첫 조건 설정 후 AND를 클릭하고 두 번째 조건을 추가한 뒤 Run을 클릭합니다."
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
      "A"
    ],
    "explanation": "정답은 **A**입니다. 데이터베이스에서 컬럼은 필드를 의미하고 레코드는 한 행을 의미합니다."
  },
  {
    "id": 137,
    "title": "Which plugin allows users to install multiple applications, application-customizations. or plugins at once?",
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
    "explanation": "정답은 **B**입니다. 여러 애플리케이션과 플러그인을 한꺼번에 설치하는 유틸리티는 `CICD SpokeBatch Install`입니다."
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
    "explanation": "정답은 **A**입니다. Update Set은 구성 변경을 캡처하기 위해 사용되는 도구입니다."
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
    "explanation": "정답은 **A**입니다. Incident 번호 접두사는 Number Maintenance에서 변경하는 것이 일반적입니다."
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
    "explanation": "정답은 **D**입니다. Import Set에서 필드 매핑을 정의하는 도구는 `Transform Map`입니다."
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
    "explanation": "정답은 **B**입니다. 리스트 보기에서 필터를 설정한 뒤 `Create Report`를 선택하면 빠르게 보고서를 만들 수 있습니다."
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
    "explanation": "정답은 **D**입니다. 그룹 작업 목록은 매니저가 자신이 속한 그룹에 속할 때만 해당 그룹의 작업을 표시합니다."
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
    "explanation": "정답은 **A,B,E,F**입니다. 일반적으로 Update Set에 기본적으로 포함되지 않는 항목은 홈페이즈, 데이터, 스케줄, 데이터베이스 변경사항입니다."
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
    "explanation": "정답은 **C**입니다. 여러 알림 채널에서 동일한 내용으로 사용하려면 공통 notification content를 사용합니다."
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
        "text": "When an incident form is saved, the impact field is calculated by adding the Prion:, and Urgency values"
      },
      {
        "letter": "D",
        "text": "When an Incident form is saved, the Additional Comments field text is cleared and recorded to the Work"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답은 **D**입니다. Incident 저장 시 Additional Comments는 기록되고 입력 칸은 비워지며, 이는 작업 노트와는 별도의 흐름입니다."
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
    "explanation": "정답은 **A,C,D**입니다. 테스트할 때는 최신 플로우를 활성화하고 요청자를 가장하여 작동을 확인하며 요청자의 사용자 레코드에 매니저가 등록되어 있어야 합니다."
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
    "explanation": "정답은 **B**입니다. 작업 시간 준수를 추적하는 도구는 Service Level Agreements(SLA)입니다."
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
    "explanation": "정답은 **B**입니다. 두 테이블 간에 양방향으로 관련 레코드를 보여주려면 `Many to Many` 관계를 사용합니다."
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
    "explanation": "정답은 **B**입니다. 일반적으로 Transform Map은 대상 테이블로 데이터를 변환하는 데 사용됩니다."
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
    "explanation": "정답은 **C**입니다. 해당 문항은 Flow Designer 대신 `Flow Editor`를 지칭하는 보기로 복원된 것으로 보입니다."
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
    "explanation": "정답은 **B**입니다. 매니저 전용 카탈로그 항목을 구현하려면 해당 아이템에 매니저 그룹을 `User Criteria`에 추가합니다."
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
    "explanation": "정답은 **C**입니다. 버튼, 링크, 컨텍스트 메뉴 항목은 모두 `UI Actions`로 구현됩니다."
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
    "explanation": "정답은 **C**입니다. 폼과 리스트에 버튼, 링크, 컨텍스트 메뉴 항목을 추가하는 기능은 `UI Actions`입니다."
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
    "explanation": "정답은 **C**입니다. Flow Designer에서 추가된 액션 정보를 확인하는 창은 `Help Panel`입니다."
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
    "explanation": "정답은 **A**입니다. 카탈로그 아이템 다국어 번역을 지원하는 플러그인은 `Localization Framework`입니다."
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
    "explanation": "정답은 **E**입니다. 특정 테이블의 특정 필드 ACL 객체 이름은 `table.field` 형식으로 표현합니다."
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
    "explanation": "정답은 **A**입니다. 서비스 정의와 CMDB 모델을 표준화하는 리소스는 `Common Services Data Model (CSDM)`입니다."
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
    "explanation": "정답은 **C**입니다. ACL은 보호할 객체와 작업, 접근 권한 요건을 지정합니다."
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
    "explanation": "정답은 **A**입니다. IT 문서와 FAQ, 스크립트 등 내부 문서를 찾는 데 사용되는 인터페이스는 `Knowledge`입니다."
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
    "explanation": "정답은 **A**입니다. 새로운 비즈니스 로직을 자동화하려면 `Flow Designer` 모듈을 사용합니다."
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
    "explanation": "정답은 **D**입니다. 모든 레코드에 부여되는 고유 32자 식별자는 `sys_id`입니다."
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
    "explanation": "정답은 **C**입니다. 레코드를 분류하고 빠르게 찾기 위한 기능은 `Tags`입니다."
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
    "explanation": "정답은 **A**입니다. `sys_id`는 모든 레코드에 부여되는 고유 32자 식별자입니다."
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
    "explanation": "정답은 **C**입니다. 사용자에게 메시지 인터페이스를 통해 정보와 작업 지원을 제공하는 기능은 `Virtual Agent`입니다."
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
    "explanation": "정답은 **A**입니다. 일반적으로 Update Set은 구성 변경을 캡처하므로 이 문장도 그 의미로 이해할 수 있습니다."
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
    "explanation": "정답은 **C**입니다. 서비스 제공을 위해 관리해야 하는 모든 구성요소는 `Configuration Item`입니다."
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
    "explanation": "정답은 **A,C,E**입니다. 필터 조건은 `Field`, `Operator`, `Value`로 구성됩니다."
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
    "explanation": "정답은 **D**입니다. Flow Designer에서는 데이터 레코드 값을 `Data Pill`로 드래그하여 참조합니다."
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
    "explanation": "정답은 **A**입니다. 새 알림 템플릿을 만들 때 기본적으로 이동하는 모듈은 `System Notification > Email > Notifications`입니다."
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
    "explanation": "정답은 **A**입니다. Business Rule의 `When` 설정에는 `Before`, `After`, `Async`, `Display` 옵션이 있습니다."
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
    "explanation": "정답은 **D**입니다. 개발 인스턴스에 애플리케이션이나 기능을 추가하려면 `Plugin`을 활성화합니다."
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
        "text": "UI RuIe"
      },
      {
        "letter": "E",
        "text": "UI Policy"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답은 **E**입니다. 필드를 필수 또는 읽기 전용 상태로 제어하는 코드 없는 방법은 `UI Policy`입니다."
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
    "explanation": "정답은 **C**입니다. Data Policy는 입력 경로에 관계없이 데이터 일관성을 강제합니다."
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
    "explanation": "정답은 **D**입니다. 검색어 `service`가 포함되지 않은 모듈은 Application Navigator 필터 결과에 나타나지 않습니다."
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
    "explanation": "정답은 **D**입니다. ACL은 특정 데이터 객체와 작업에 대한 액세스 제어를 제공합니다."
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
    "explanation": "정답은 **A**입니다. Performance Analytics는 시간에 따른 스냅샷을 제공하고 보고서는 현재 시점의 데이터를 보여줍니다."
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
    "explanation": "정답은 **B,C**입니다. 새 필드를 추가하려면 `Form Layout`이나 `Form Designer`에 접근해야 합니다."
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
    "explanation": "정답은 **E**입니다. 사용자 컴퓨터의 시간대가 잘못 설정돼 있으면 창에 표시되는 시간이 일치하지 않을 수 있습니다."
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
    "explanation": "정답은 **A,B**입니다. 이벤트는 Business Rule과 Workflow를 통해 생성될 수 있습니다."
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
    "explanation": "정답은 **D**입니다. 사용자 가장 모드에서 벗어나려면 로그아웃 후 다시 로그인하는 것이 가장 확실한 방법입니다."
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
    "explanation": "정답은 **A,E,F,G**입니다. 보고서 페이지에서 서로 다른 대상 그룹에 따라 표시되는 보고서를 구분할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. Incident와 Problem 테이블은 공통 필드를 제공하는 기본 테이블 `Task`를 확장합니다."
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
    "explanation": "정답은 **D**입니다. Flow Designer에서 로컬 변수는 `Data Pill`로 표시되어 사용할 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 이벤트는 ServiceNow 프로세스에서 어떤 일이 발생했음을 알리는 신호입니다."
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
    "explanation": "정답은 **C**입니다. 데이터를 ServiceNow로 가져오는 기본 애플리케이션은 `System Import Sets`입니다."
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
    "explanation": "정답은 **A**입니다. 리스트 컬럼을 추가하거나 제거하는 개인화 권한은 `personalize.control` 역할로 허용할 수 있습니다. 단순 사용자 역할이나 UI Action 관리 역할과는 목적이 다릅니다."
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
    "explanation": "정답은 **A,E,G**입니다. 관리자 관점에서 자주 쓰는 보안 모듈은 보안 관련 시스템 속성, ACL 설정, High Security Settings입니다. 다른 보기는 표준 보안 관리 모듈명으로 보기 어렵습니다."
  },
  {
    "id": 188,
    "title": "What is the difference between a Ul Policy and Data Policy?",
    "options": [
      {
        "letter": "A",
        "text": "Data Policies run only after Ul Policies run successfully"
      },
      {
        "letter": "B",
        "text": "Data Policies run regardless of how data is entered Into ServiceNow, while Ul Policies are used for form"
      },
      {
        "letter": "C",
        "text": "Data Policies can be converted into Ul Policies, but Ul Policies can not be converted into Data Policies"
      },
      {
        "letter": "D",
        "text": "Data Policies run when data is entered through the form, by an Import Set or by web services, while Ul"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답은 **D**입니다. Data Policy는 폼 입력뿐 아니라 Import Set과 Web Service 같은 다른 입력 경로에도 적용됩니다. 반면 UI Policy는 주로 폼 UI에서 필드 상태를 제어합니다."
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
    "explanation": "정답은 **A**입니다. 인스턴스 간 커스터마이징 이동에 가장 자주 사용하는 단위는 `Update Set`입니다. 코드 변경과 설정 변경을 묶어 배포할 때 기본적으로 사용합니다."
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
    "explanation": "정답은 **B**입니다. ServiceNow에서 그룹은 `sys_user_group` 테이블의 한 레코드로 정의됩니다. 위치나 직책이 같은 사용자 집합이라는 설명은 운영 개념일 수 있지만, 저장 구조 자체를 묻는 답은 아닙니다."
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
    "explanation": "정답은 **C**입니다. 전역 커스텀 테이블은 기본적으로 `u_` 접두사를 사용하므로 `abc`라는 이름으로 만들면 `u_abc`가 자동 테이블명이 됩니다."
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
    "explanation": "정답은 **D**입니다. 애플리케이션이 접근할 수 있는 파일과 데이터 범위를 제한하는 핵심 개념은 `Application Scope`입니다. ACL은 레코드 접근 제어에 가깝고, 애플리케이션 경계 자체를 설명하는 답은 아닙니다."
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
      "B"
    ],
    "explanation": "정답은 **B**로 유지했습니다. 다만 일반적으로는 사용자 가시 모듈 확인에 `Impersonate`가 더 자연스럽기 때문에, 현재 복원된 보기와 정답 조합은 신뢰도가 높지 않습니다. 현 문서에서는 source answer token을 따라 유지합니다."
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
    "explanation": "정답은 **A**입니다. Visual Task Board의 대표 유형은 Guided, Flexible, Freeform이며 `Feature`는 보드 타입 명칭이 아닙니다."
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
    "explanation": "정답은 **A**입니다. 애플리케이션 데이터가 어떤 CMDB 테이블에 매핑되어야 하는지에 대한 표준 프레임워크는 `CSDM`입니다. 공통 서비스 모델을 맞추기 위한 기준 체계입니다."
  },
  {
    "id": 196,
    "title": "What is the difference between a UI Policy and Data Policy?",
    "options": [
      {
        "letter": "A",
        "text": "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI"
      },
      {
        "letter": "B",
        "text": "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies"
      },
      {
        "letter": "C",
        "text": "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form"
      },
      {
        "letter": "D",
        "text": "Data Policies run only after UI Policies run successfully"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답은 **C**입니다. Data Policy는 데이터가 어떤 경로로 들어오든 일관되게 적용되고, UI Policy는 폼 화면에서 필드 상태를 제어하는 데 초점이 있습니다. 즉 적용 범위가 더 넓은 쪽이 Data Policy입니다."
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
    "explanation": "정답은 **B**입니다. 그룹 레코드는 `sys_user_group` 테이블에 저장됩니다. 다른 접두사 조합은 기본 그룹 테이블명이 아닙니다."
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
    "explanation": "정답은 **B**입니다. Notification은 사용자와 관련된 이벤트가 발생했을 때 이를 알려 주는 알림 메커니즘입니다. 메일, 푸시 등 다양한 채널로 전달될 수 있습니다."
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
    "explanation": "정답은 **C**입니다. `User`, `Task`, `Incident`는 ServiceNow 기본 플랫폼에서 핵심적으로 사용하는 대표 테이블입니다. 다른 보기들은 표준 core table 조합으로 보기 어렵습니다."
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
    "explanation": "정답은 **B,D,E**입니다. UI Policy로 제어할 수 있는 대표 필드 상태는 숨김, 읽기 전용, 필수입니다. 입력 형식 검증이나 글자 수 제한은 다른 메커니즘이 더 적합합니다."
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
    "explanation": "정답은 **B**입니다. 대량 데이터를 인스턴스 간 이동할 때는 XML 내보내기가 가장 흔하고 효율적인 방법으로 제시됩니다. Update Set은 데이터보다 커스터마이징 이동에 더 적합합니다."
  },
  {
    "id": 202,
    "title": "Which module would you use to customize your instances banner image, text and colors? A Homepage Admin > Pages > Branding",
    "options": [
      {
        "letter": "A",
        "text": "System Ul > Ul Pages > Branding"
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
    "explanation": "정답은 **D**로 유지했습니다. 다만 보기와 일반적인 UI16 구성 지점 사이에 다소 어긋남이 있어 복원 신뢰도는 아주 높지 않습니다. 현재 문서에서는 source 기준 answer token을 따릅니다."
  },
  {
    "id": 203,
    "title": "What feature allows, you to limit who is able to contribute or read knowledge within a knowledge base?",
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
    "explanation": "정답은 **C**입니다. Knowledge Base에서 누가 읽고 기여할 수 있는지 제한하는 표준 기능은 `User Criteria`입니다. 역할이나 그룹만으로 직접 제어하는 것보다 지식 접근 제어에 더 적합합니다."
  },
  {
    "id": 204,
    "title": "An order for new office equipment has Men placed through the Service Catalog. How would you view the lists of requests after the orders have Men placed?",
    "options": [
      {
        "letter": "A",
        "text": "All > Service Catalog > Open Records > Items"
      },
      {
        "letter": "B",
        "text": "In the Navigation Filter, type 'requests. Let' and press the Enter key."
      },
      {
        "letter": "C",
        "text": "All > Tables and Columns > Taste"
      },
      {
        "letter": "D",
        "text": "All > Service Catalog > Requests"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답은 **A**입니다. 주문 이후 생성된 항목 목록을 보려면 Service Catalog의 Open Records 아래 Items 경로로 들어가 확인하는 흐름이 맞습니다. 단순 요청 개요가 아니라 생성된 요청 항목 목록을 보는 문제입니다."
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
    "explanation": "정답은 **B**입니다. 폼 헤더에서 템플릿 기능은 보통 `More options (...)` 메뉴를 통해 접근합니다. 템플릿은 별도 첨부나 스탬프 아이콘으로 바로 여는 기능이 아닙니다."
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
    "explanation": "정답은 **B**입니다. 레코드가 생성되거나 갱신될 때 플로우를 시작하는 구성요소는 `Record-based trigger`입니다. 날짜 기반이나 애플리케이션 기반 트리거와는 시작 조건이 다릅니다."
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
    "explanation": "정답은 **B**입니다. Display Business Rule의 대표 목적은 서버에서 계산한 값을 `g_scratchpad`에 담아 클라이언트로 넘기는 것입니다. 폼 표시 시 필요한 보조 데이터를 전달하는 용도입니다."
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
    "explanation": "정답은 **A**입니다. 현재 사용자에게 제공된 보고서를 열고 실행하는 기본 경로는 `Report > View / Run`입니다. 새 보고서 작성 경로나 홈 대시보드와는 구분됩니다."
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
    "explanation": "정답은 **D**입니다. My Work 리스트에서 Activity Stream 아이콘을 열면 담당 레코드의 최근 업데이트를 실시간에 가깝게 추적할 수 있습니다. 각 레코드를 따로 열어 두는 것보다 효율적인 방법입니다."
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
    "explanation": "정답은 **D**입니다. 플로우 실행 중 유지되는 런타임 값은 현재 보기 기준으로 `Data pill runtime value`로 복원되어 있습니다. 핵심은 플로우 전반에서 재사용되는 실행 시점 값을 묻는 문제입니다."
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
    "explanation": "정답은 **A**입니다. 여러 레코드를 분류하고 다른 사용자와도 보이게 관리하려면 `Tags`를 사용합니다. 개인 즐겨찾기나 히스토리와는 목적이 다릅니다."
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
    "explanation": "정답은 **A**입니다. 사용자 레코드는 기본적으로 `sys_user` 테이블에 저장됩니다. 다른 접두사 조합은 표준 사용자 테이블명이 아닙니다."
  },
  {
    "id": 213,
    "title": "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
    "options": [
      {
        "letter": "A",
        "text": "On the Iist, locate and right click on the value Hardware, select Show Matching"
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
    "explanation": "정답은 **A**입니다. 리스트에서 특정 값만 빠르게 보려면 해당 값 `Hardware`를 우클릭하고 `Show Matching`을 선택하면 됩니다. 가장 빠른 값 기반 필터 적용 방법을 묻는 문제입니다."
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
    "explanation": "정답은 **B**입니다. 사용자가 폼에서 Priority 값을 바꾸는 즉시 반응하는 스크립트는 브라우저에서 실행되는 `Client Script`입니다. 서버 측 Business Rule은 이런 즉시 UI 반응을 직접 처리하지 않습니다."
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
    "explanation": "정답은 **A,E**입니다. 사용자 가장 기능은 기본적으로 `admin` 또는 `impersonator` 역할이 있어야 수행할 수 있습니다. 일반 사용자 역할만으로는 다른 계정으로 전환할 수 없습니다."
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
    "explanation": "정답은 **C,D**입니다. 리스트 보기에서 작업을 수행하려면 `Assign To Me` UI action과 관련된 컨텍스트 메뉴 접근 방식이 올바른 선택입니다."
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
    "explanation": "정답은 **A,B**입니다. 카탈로그 주문은 요청 항목(RITM)과 카탈로그 작업(sc_task)으로 구성되는 경우가 많습니다."
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
    "explanation": "정답은 **B**입니다. Schema Map은 `System Definition > Tables`에서 원하는 테이블을 연 뒤 Related Links의 `Show Schema Map`으로 이동해 확인합니다. 테이블 구조와 관계를 시각적으로 보는 표준 경로입니다."
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
    "explanation": "정답은 **B**입니다. UI, Import Set, Web Service 전반에 적용되는 정책은 기본적으로 서버에서 실행됩니다. 그래서 Data Policy가 여러 입력 경로에 공통 적용될 수 있습니다."
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
    "explanation": "정답은 **A,B,D**입니다. Import의 Target table은 전역 스코프 테이블, 현재 애플리케이션 스코프 테이블, 그리고 다른 앱 쓰기 허용 테이블 중에서 선택할 수 있습니다. ServiceNow 밖의 테이블이나 dot-walk 대상은 직접 Target table이 아닙니다."
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
    "explanation": "정답은 **C,D,E**입니다. 테이블 ACL에서는 역할, 조건식, 그리고 `answer` 값을 true/false로 정하는 스크립트를 이용해 권한을 제어할 수 있습니다. CRUD는 operation 종류이지 permission 설정 방식 자체는 아닙니다."
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
    "explanation": "정답은 **D**입니다. Import Set 절차는 데이터를 로드하고, Transform Map을 만든 뒤, 변환을 실행하고, 마지막으로 import table을 정리하는 순서로 이해하면 됩니다."
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
    "explanation": "정답은 **C**입니다. 홈페이즈나 대시보드는 Update Set에 자동으로 항상 잡히지 않으므로, 이동하려면 수동으로 추가하는 점을 기억해야 합니다."
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
    "explanation": "정답은 **A**입니다. Group 테이블의 플랫폼명은 대소문자를 무시하면 `sys_user_group`입니다. 보기 A는 표기만 혼재돼 있지만 의미상 해당 테이블을 가리킵니다."
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
    "explanation": "정답은 **B,C,E**입니다. Related list collector에는 부모 레코드와 실제로 연결 가능한 관계가 보이며, 현재 보기 기준으로는 Catalog Task, HR Case, Outage 같은 항목이 그 예입니다."
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
    "explanation": "정답은 **B**입니다. 보고서에서 관련된 다른 테이블의 값을 함께 끌어오려면 `Dot Walking`을 사용합니다. 조인 SQL을 직접 작성하는 방식이 아니라 플랫폼이 제공하는 참조 추적 기능입니다."
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
    "explanation": "정답은 **D**입니다. 폼 템플릿 기능은 보통 헤더의 `More Options` 메뉴에서 접근합니다. 질문은 폼 헤더에서 템플릿으로 들어가는 아이콘 위치를 묻습니다."
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
    "explanation": "정답은 **D**입니다. 데이터 import 전에는 오래됐거나 부정확한 데이터를 미리 정리하는 것이 권장됩니다. 가져온 뒤에 뒤늦게 정리하는 것보다 사전 정제가 안전합니다."
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
        "text": "Ul Policies and Client Scripts"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답은 **D**입니다. 브라우저에서 동작하는 쪽은 UI Policy와 Client Script입니다. Business Rule이나 Script Include는 서버 측 실행에 가깝습니다."
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
    "explanation": "정답은 **C,D**입니다. 확장 테이블은 부모 테이블의 필드를 상속받으므로 새로 만들어야 하는 것은 부모에 없는 필드, 즉 자식 테이블 전용 필드입니다."
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
    "explanation": "정답은 **D**입니다. CMDB 계층의 최상위 기본 테이블은 `cmdb`로 복원되어 있습니다. 이 문항은 CI 클래스 계층의 출발 테이블명을 묻습니다."
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
    "explanation": "정답은 **A**입니다. 공통으로 반복되는 네 개 변수는 하나의 `Variable Set`으로 만들고 각 Catalog Item에 재사용하는 것이 가장 효율적입니다. 80개 항목에 같은 변수를 각각 따로 만드는 방식보다 유지보수가 훨씬 쉽습니다."
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
    "explanation": "정답은 **C**로 유지했습니다. 다만 일반적으로 광범위한 권한 역할은 `admin` 표기가 더 익숙하므로 보기 복원 품질은 다소 불안정합니다. 현재 문서에서는 source answer token을 따라 이 답을 유지합니다."
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
    "explanation": "정답은 **C**입니다. 별도의 접근 제한이 정의되지 않았다면 현재 보기 기준으로는 모든 활성 사용자에게 읽기 권한이 열린 것으로 해석합니다."
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
    "explanation": "정답은 **A**입니다. Natural Language Query는 사용자가 입력한 키워드를 바탕으로 적절한 필터를 자동 제안하거나 선택하게 해 주는 기능입니다. 조건 빌더를 음성으로 조작하는 기능은 아닙니다."
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
    "explanation": "정답은 **A,B,D,F**입니다. 커스텀 테이블 생성 시 기본적으로 생성되는 ACL은 create, read, delete, write입니다. execute는 일반적인 테이블 ACL 기본 생성 대상이 아닙니다."
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
    "explanation": "정답은 **A**입니다. 요청 승인만 할 수 있고 다른 광범위한 권한은 없는 최소 역할은 현재 보기 기준으로 `Approver`입니다. 승인 전용 역할을 묻는 문제입니다."
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
    "explanation": "정답은 **D**입니다. 긴 리스트에서 Short Description에 특정 문자열이 포함된 항목만 보려면 리스트 검색을 확장한 뒤 해당 컬럼에 `email`을 입력해 필터링하면 됩니다. 컬럼 단위 검색 사용법을 묻는 문제입니다."
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
    "explanation": "정답은 **B**입니다. 보고서 디자이너에서 보고 유형을 지정하는 옵션은 `Report Designer`입니다."
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
    "explanation": "정답은 **B,C,E**입니다. 태그 가시성은 `Me`, `Groups and Users`, `Everyone` 같은 범위로 조정할 수 있습니다. 관리자 전용이나 역할 기반만으로 나누는 보기는 현재 기준 정답이 아닙니다."
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
    "explanation": "정답은 **D**입니다. 로그인하지 않은 사용자도 지식 문서를 보게 하려면 해당 문서를 `Public` 설정으로 노출해야 합니다. 내부 전용 지식 문서와 구분되는 공개 접근 설정입니다."
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
    "explanation": "정답은 **C**입니다. Flow Designer에서 액션 결과 데이터는 `Data Pill` 형태로 저장되어 이후 단계에서 다시 사용할 수 있습니다. 다음 액션 입력값으로 끌어다 쓰는 바로 그 객체를 묻는 문제입니다."
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
    "explanation": "정답은 **A**입니다. ServiceNow의 기본 스크립팅 언어는 `JavaScript`입니다. 클라이언트와 서버 모두 JavaScript 기반으로 스크립트를 작성합니다."
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
    "explanation": "정답은 **C**입니다. 필드 자체에 저장되지 않는 작업 이력이나 메모 같은 항목은 `Activity Formatter`에서 추적하고 보여 줍니다. 저널형 변경 이력을 표시하는 영역입니다."
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
    "explanation": "정답은 **C**입니다. 리스트에서 `Hardware` 값 자체를 우클릭한 뒤 `Show Matching`을 선택하면 해당 값만 빠르게 필터링할 수 있습니다. 값 기반 즉시 필터의 대표 사용법입니다."
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
    "explanation": "정답은 **B**입니다. 새 애플리케이션을 직접 시험해 보려면 개인 개발 인스턴스에서 플러그인을 활성화해 보는 것이 가장 안전합니다. 운영 인스턴스에서 바로 켜는 것은 적절한 첫 단계가 아닙니다."
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
    "explanation": "정답은 **A,D**입니다. 새 테이블 생성은 `Tables & Columns` 또는 `Tables` 모듈에서 시작할 수 있습니다. Schema Map이나 Dictionary는 조회와 관리에는 유용하지만 테이블 생성 진입점은 아닙니다."
  },
  {
    "id": 248,
    "title": "What are examples of Ul Actions, relating to Lists? Choose 4 answers",
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
    "explanation": "정답은 **A,B,C,F**입니다. 현재 보기 기준으로 리스트와 관련된 UI Action 예시는 List Links, List Control, List Buttons, List Choices입니다. List Override는 같은 범주의 표준 예시로 보지 않습니다."
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
    "explanation": "정답은 **C**입니다. 모든 레코드의 고유 식별자는 `sys_id` 필드에 저장됩니다. 플랫폼 전반에서 참조와 API 처리의 기준이 되는 값입니다."
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
    "explanation": "정답은 **C**로 유지했습니다. 다만 시스템 속성 이름 표기 자체가 손상된 흔적이 있어 이 문항은 복원 신뢰도가 높지 않습니다. 현재 문서에서는 복원된 answer token을 따릅니다."
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
    "explanation": "정답은 **A**입니다. 현재 보기 기준으로 첫 단계는 `Create Import Set`으로 복원돼 있습니다. 이후 Data Source와 Transform Map 흐름이 이어지는 구조입니다."
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
    "explanation": "정답은 **A,C,F**입니다. 엔터프라이즈 CMDB의 핵심 테이블은 `cmdb`, `cmdb_rel_ci`, `cmdb_ci`입니다."
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
    "explanation": "정답은 **B**입니다. Incident Management 같은 애플리케이션 진입점은 `Application Navigator`에서 찾습니다. 좌측 탐색 영역에서 앱과 모듈을 여는 기본 위치입니다."
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
    "explanation": "정답은 **A,C,D**입니다. Notification을 만들 때는 내용, 발송 조건, 수신 대상을 정의해야 합니다. 어떤 지식 베이스에 속하는지는 기본 필수 요소가 아닙니다."
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
    "explanation": "정답은 **C**입니다. 외부 데이터가 대상 테이블로 들어가기 전에 임시 적재되는 staging 영역은 `Import Set Row Table`입니다. 여기서 변환 전 원본 레코드를 보관합니다."
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
    "explanation": "정답은 **F**입니다. 연관 레코드를 미리보기 아이콘으로 열어 볼 수 있는 필드 타입은 `Reference`입니다. 다른 테이블 레코드와 연결되는 필드에서 이런 미리보기 기능이 제공됩니다."
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
    "explanation": "정답은 **A**입니다. High Security Settings 변경에는 일반 admin보다 높은 `security_admin` 권한이 필요합니다. 보안 관련 민감 설정을 수정하는 전용 관리자 역할입니다."
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
    "explanation": "정답은 **A,D**입니다. 리스트를 Category 기준으로 묶어 보려면 Context Menu의 `Group By > Category`를 사용하거나 Group 아이콘에서 Category를 선택하면 됩니다. 둘 다 그룹화 결과는 같습니다."
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
    "explanation": "정답은 **C,D**입니다. 리스트 보기에서 작업을 수행할 때 컨텍스트 메뉴와 더블 클릭 방식이 적합합니다."
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
    "explanation": "정답은 **B,D,E,F**입니다. 지식 문서 개선을 위해 댓글, 도움 여부 표시, 플래그, 별점 평가 기능을 사용할 수 있습니다. 사용자 피드백을 모아 품질을 높이는 대표 기능들입니다."
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
    "explanation": "정답은 **D**입니다. 폼 하단에서 현재 레코드와 관련된 다른 레코드들을 탭 형태로 보여 주는 영역은 `Related Lists`입니다. Related Links와는 다른 UI 요소입니다."
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
    "explanation": "정답은 **D**입니다. 모듈과 애플리케이션은 보이지만 새 레코드 생성 화면이 비는 경우는 보통 테이블에 대한 write 권한이 없을 때 발생합니다. 읽기 권한만으로는 Create New를 정상 수행할 수 없습니다."
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
    "explanation": "정답은 **E**입니다. 리스트에서 특정 값을 제외하려면 Filter Out 기능을 사용하면 빠릅니다."
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
    "explanation": "정답은 **B**입니다. 데이터를 ServiceNow로 적재하는 대표 애플리케이션은 `System Import Sets`입니다. Load Data와 Transform Map 작업이 이 영역에서 이뤄집니다."
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
    "explanation": "정답은 **C,D**입니다. 새 테이블을 만든 뒤에는 Application Menu와 Module을 어떤 역할이 볼 수 있는지 설정하는 것이 좋은 운영 방식입니다. 탐색창 노출 범위를 역할 기반으로 정리해야 불필요한 메뉴 노출을 줄일 수 있습니다."
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
    "explanation": "정답은 **C,D,E**입니다. Flow Designer는 수작업 스크립트를 줄이고 기술 부채를 낮추며, 외부 시스템과의 연계도 비교적 부드럽게 구성할 수 있다는 장점이 있습니다."
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
    "explanation": "정답은 **A,B,F**입니다. `User`, `Incident`, `Task`는 기본 인스턴스에서 바로 제공되는 대표 테이블입니다. 다른 보기들은 기본 제공 테이블로 보기 어렵거나 제품 범주가 다릅니다."
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
    "explanation": "정답은 **A**입니다. Flow Designer 실행은 항상 어떤 `Trigger`로 시작됩니다. 이후 조건과 액션이 이어지지만 시작점 자체는 트리거입니다."
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
    "explanation": "정답은 **A**입니다. 스프레드시트 import의 기본 흐름은 `Load Data`, `Create Transform Map`, `Run Transform` 순서입니다. 데이터 로드 뒤 매핑을 만들고 실제 반영을 수행합니다."
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
    "explanation": "정답은 **B**입니다. 리스트 컬럼 순서를 바꾸려면 컬럼 헤더를 우클릭해 `Configure > List Layout`으로 이동하면 됩니다. 여기서 표시 컬럼과 순서를 함께 조정할 수 있습니다."
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
    "explanation": "정답은 **D**입니다. 월말 실적과 목표를 비교하고 추세와 예측을 보려면 `Performance Analytics`가 적합합니다."
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
    "explanation": "정답은 **D**입니다. 시스템의 모든 테이블과 필드 정의는 `Dictionary`가 관리합니다. 필드 타입, 길이, 속성 같은 메타데이터가 이 계층에 들어 있습니다."
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
    "explanation": "정답은 **C**입니다. 여러 테이블의 데이터를 반복적으로 한 보고서 관점에서 써야 하고 dot-walk로 해결되지 않으면 `Database View`를 만드는 것이 적절합니다. 보고서용 통합 조회 구조를 제공할 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 미리 준비된 spoke를 한곳에서 찾아 설치하는 storefront는 현재 보기 기준으로 `ServiceNow Store`입니다. 외부 서비스 연계를 빠르게 시작하는 진입점 역할을 합니다."
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
    "explanation": "정답은 **D**입니다. 실제 대상 테이블에 데이터가 기록되는 시점은 `Execute Transform` 단계입니다. 그 전 단계는 원본 적재나 매핑 준비에 가깝습니다."
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
    "explanation": "정답은 **A**입니다. Bob Smith만 승인이 건너뛰는 경우는 특정 비즈니스 룰이 그 사용자를 제외하도록 설정된 경우일 수 있습니다."
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
    "explanation": "정답은 **D**로 유지했습니다. 다만 현재 제품 용어와 완전히 일치하는지에는 다소 의문이 있어 복원 신뢰도는 중간 수준입니다. 이 문항은 CI와 관계를 시각적으로 보여 주는 도구를 묻고 있습니다."
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
    "explanation": "정답은 **C**입니다. 플로우 실행 시점은 `Trigger`와 `Condition` 조합으로 정합니다. 어떤 사건이 발생했고 어떤 조건을 만족할 때 실행할지 지정하는 구조입니다."
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
    "explanation": "정답은 **B**입니다. Task 레코드의 최신 업데이트는 `Activity Stream`에서 확인합니다. 댓글, 작업 메모, 상태 변경 이력을 한곳에서 볼 수 있습니다."
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
    "explanation": "정답은 **A,B**입니다. ServiceNow에서 작업 할당 대상은 사용자와 그룹입니다."
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
    "explanation": "정답은 **D**입니다. 승인 및 알림 흐름을 관리하는 기능으로는 `Approval Criteria`가 적합합니다."
  },
  {
    "id": 282,
    "title": "You are editing a new incident record and would like the Save\" Dutton to be located on the Form header. Which action would need to be taken for that button to appear?",
    "options": [
      {
        "letter": "A",
        "text": "All > System Properties > Ul Properties > Turn on the glide.ui.advanced* property"
      },
      {
        "letter": "B",
        "text": "Context Menu > Form Design > add the Save'' button"
      },
      {
        "letter": "C",
        "text": "All > System Properties > Ul Properties > Turn on the Save\" button"
      },
      {
        "letter": "D",
        "text": "Context Menu > Form Layout > add the Save* button."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답은 **C**입니다. Save 버튼을 폼 헤더에 표시하려면 `System Properties > UI Properties`에서 해당 버튼을 활성화해야 합니다."
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
    "explanation": "정답은 **A,C**입니다. 폼의 필드 순서를 바꾸려면 `Form Layout`이나 `Form Design` 경로로 들어가 배치를 조정합니다. 둘 다 폼 편집 도구이지만 접근 경로가 조금 다릅니다."
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
    "explanation": "정답은 **B**입니다. 다른 사용자로 전환해 테스트하려면 `impersonator` 역할이 필요합니다. 로그아웃 없이 계정을 바꿔 보는 기능을 위한 역할입니다."
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
    "explanation": "정답은 **A**입니다. 현재 보기 기준으로 High Security Settings 작업 후 정상 보안 수준으로 돌아가는 방법은 `Normal Security` 모듈을 사용하는 것입니다. 보안 상승 상태를 해제하는 절차를 묻는 문제입니다."
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
    "explanation": "정답은 **B,E**입니다. 다른 사용자가 같은 레코드를 보고 있거나 수정 중이면 사용자 presence 아이콘이 보이고, 다른 사용자가 바꾼 필드 근처에 표시가 나타날 수 있습니다. 공동 편집 상황을 감지하는 기능을 묻는 문제입니다."
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
    "explanation": "정답은 **A**입니다. 그룹 정보는 기본적으로 `sys_user_group` 테이블에 저장됩니다. 다른 접두사 조합은 표준 그룹 테이블명이 아닙니다."
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
    "explanation": "정답은 **C**입니다. 필드를 mandatory로 설정하고 특정 역할이 아닐 때 checkbox를 숨기려면 `UI Policy`를 사용합니다."
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
    "explanation": "정답은 **E**입니다. 테이블 ACL은 가장 구체적인 규칙부터, 즉 `Table ACL -> Parent Table ACL -> Wildcard ACL` 순으로 평가됩니다. 구체 규칙이 일반 규칙보다 우선합니다."
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
    "explanation": "정답은 **E**입니다. 들어온 컬럼이 대상 테이블의 어느 필드로 들어갈지 정의하는 단계는 `Create Transform Map`입니다. 필드 매핑 규칙을 만드는 단계라고 보면 됩니다."
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
    "explanation": "정답은 **A**입니다. 여러 데이터 소스에서 가져온 데이터를 임시 적재하고 대상 테이블에 매핑하는 기본 도구는 `Import Set`입니다. 이후 Transform Map과 함께 사용됩니다."
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
    "explanation": "정답은 **B**입니다. Import 과정에서 기존 레코드와의 고유 매칭 키 역할을 하는 것은 `Coalesce Fields`입니다. 이 값으로 insert와 update를 구분합니다."
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
    "explanation": "정답은 **C**입니다. ServiceNow에서 그룹은 업무나 권한 맥락을 함께 가진 사용자들의 집합입니다. 특정 부서나 직함 자체와 동일한 개념은 아닙니다."
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
    "explanation": "정답은 **B**입니다. 다대다 관계의 전형적 예는 여러 공급업체가 여러 제품을 판매하는 경우입니다."
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
    "explanation": "정답은 **A**입니다. 지식 문서를 가져오려면 최소한 해당 지식베이스에 기여할 수 있는 `Can contribute` 접근 권한이 필요합니다. 단순 읽기 권한만으로는 import를 수행할 수 없습니다."
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
    "explanation": "정답은 **A**로 유지했습니다. 다만 일반적인 Service Catalog 구성에서는 `Categories`가 더 자연스럽게 떠오를 수 있어 이 문항은 보기 복원 신뢰도가 다소 낮습니다. 현재 문서에서는 source answer token을 따릅니다."
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
    "explanation": "정답은 **C**입니다. 보고서 색상, 범례 배치, 시각적 스타일 같은 표시 요소는 `Style` 섹션에서 조정합니다. 데이터 원본이나 타입 설정과는 다른 영역입니다."
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
    "explanation": "정답은 **E**입니다. 새 보고서를 만들기 시작하는 기본 경로는 `Reports > Create New`입니다. 기존 리포트 실행 메뉴와는 시작 목적이 다릅니다."
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
    "explanation": "정답은 **A**로 남겨 두었지만, 제품 개념상 일반적으로 사용자는 `sys_user` 테이블 레코드로 정의됩니다. 현재 보기와 answer token 사이에 어긋남이 있어 이 문항은 낮은 신뢰도로 보는 편이 안전합니다."
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
    "explanation": "정답은 **A**입니다. UI Policy를 특정 뷰가 아니라 모든 뷰에 적용하려면 현재 보기 기준으로 `Inherit` 필드를 true로 설정합니다. 모든 관련 화면에 정책을 확장 적용하는 설정을 묻는 문제입니다."
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
    "explanation": "정답은 **D**입니다. ServiceNow 애플리케이션을 시나리오 기반으로 자동 테스트할 때 사용하는 기본 프레임워크는 `ATF(Automated Test Framework)`입니다."
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
    "explanation": "정답은 **C,D**입니다. 애플리케이션 메뉴 제목은 Navigator에서 연필 아이콘으로 바로 수정하거나, `System Definitions > Application Menus` 레코드로 들어가 수정할 수 있습니다."
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
    "explanation": "정답은 **B,C,E**입니다. Related List에서는 보통 `New`, `Add`, `Edit` 버튼으로 관련 레코드를 생성하거나 연결하고, 목록을 관리합니다."
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
    "explanation": "정답은 **A**입니다. `Business Rule`은 display, insert, update, delete, query 같은 레코드 이벤트에 맞춰 서버 측에서 실행될 수 있습니다."
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
    "explanation": "정답은 **D**입니다. ACL 평가는 먼저 사용자가 테이블 자체에 접근할 수 있는지 확인하고, 그다음 필드 단위 접근을 평가합니다."
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
    "explanation": "정답은 **C**로 남아 있지만, 일반적인 테이블 개념상 field는 데이터를 저장하는 컬럼/셀 항목에 가깝고 메뉴 항목이 아닙니다. 현재 보기와 answer token이 어긋난 것으로 보여 이 문항은 낮은 신뢰도로 보는 편이 안전합니다."
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
    "explanation": "정답은 **D**입니다. `Impersonate User` 기능은 사용자 프로필 메뉴인 `User Menu`에서 접근합니다."
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
    "explanation": "정답은 **E**입니다. CI와 그 관계를 시각적으로 확인하는 대표 기능은 `Dependency View`입니다. 영향도와 연결 구조를 파악할 때 사용합니다."
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
    "explanation": "정답은 **C**입니다. impersonation 수행 이력을 추적하려면 `glide.sys.log_impersonation` 속성을 활성화해 관련 로그를 남기도록 설정하면 됩니다."
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
    "explanation": "정답은 **A**입니다. Service Catalog에서 사용자가 입력한 내용을 바탕으로 특정 테이블의 태스크형 레코드를 만들 때 `Record Producer`를 사용합니다."
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
    "explanation": "정답은 **D**로 표기되어 있지만, 일반적인 ACL 평가는 테이블 수준을 먼저 보고 그 다음 필드 수준을 평가합니다. 따라서 이 문항은 보기/정답 복원에 불일치 가능성이 있어 낮은 신뢰도로 보는 편이 안전합니다."
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
        "text": "Ul Policy"
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
    "explanation": "정답은 **C**입니다. `Data Policy`는 폼 입력뿐 아니라 import set이나 web service를 통한 데이터에도 일관된 규칙을 적용해 데이터 품질을 유지합니다."
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
    "explanation": "정답은 **A**입니다. round-trip은 클라이언트의 `Request`가 서버로 가고, 서버의 `Response`가 다시 돌아오는 왕복을 뜻합니다."
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
    "explanation": "정답은 **D**입니다. Task 레코드의 최근 변경 내역은 `Activity` 영역에서 확인합니다. 주석, 상태 변경, 작업 메모가 시간순으로 표시됩니다."
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
    "explanation": "정답은 **D**입니다. 폼 개인화를 `admin` 역할 사용자에게만 허용하려면 시스템 속성 `glide.ui.personalize_form.role` 값을 `admin`으로 설정하면 됩니다."
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
    "explanation": "정답은 **C**입니다. 일반적으로 `impersonator` 권한만으로는 `System Administrator` 사용자를 impersonate할 수 없습니다. 보안상 더 높은 권한 사용자는 제한됩니다."
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
    "explanation": "정답은 **A**입니다. Data Pill Picker에서 다른 테이블 필드로 dot-walk 할 때는 방향키를 사용해 참조 경로를 따라 들어갑니다."
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
    "explanation": "정답은 **A**입니다. `Match All = Yes`이므로 회사, 부서, 그룹 조건을 모두 만족하는 사용자만 접근할 수 있습니다. 즉 ACME North America 소속이면서 HR 부서이고 ACME Manager 그룹에도 속해야 합니다."
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
    "explanation": "정답은 **A**로 유지했습니다. 다만 보기 문자열이 손상돼 있어 정확한 object 명칭 표기는 낮은 신뢰도입니다. 문항 의도는 Incident 테이블 전체에 적용되는 테이블 수준 ACL 이름을 묻고 있습니다."
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
    "explanation": "정답은 **B,C,D,F**입니다. 그룹 할당을 쓰면 on-call, 위치, 보유 기술, 현재 가용성 같은 기준으로 일을 유연하게 분배할 수 있습니다. 개인 고정 할당보다 운영 효율이 높아집니다."
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
    "explanation": "정답은 **D**입니다. 특정 use case와 연결된 테이블 및 CI 구조를 보려면 `CSDM product view`를 활용할 수 있습니다. 어떤 데이터 모델이 해당 시나리오에 쓰이는지 확인하는 용도입니다."
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
    "explanation": "정답은 **B**로 남겨 두었지만, 짧은 설명 텍스트를 바탕으로 priority와 category를 추천하거나 채우는 기능이라면 보통 `Predictive Intelligence`가 더 자연스럽습니다. 현재 보기/정답 조합은 낮은 신뢰도로 보는 편이 안전합니다."
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
    "explanation": "정답은 **D**입니다. 지식베이스나 개별 문서의 읽기/쓰기 접근은 `User Criteria`로 제어합니다."
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
    "explanation": "정답은 **D**입니다. Related List 컬럼 레이아웃을 개인화할 때는 보통 `Gear` 아이콘을 눌러 표시 컬럼과 순서를 조정합니다."
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
    "explanation": "정답은 **B,E**로 남겨 두었지만, 실제 원인으로는 보통 필요한 역할이나 그 역할이 담긴 그룹 미소속 여부가 핵심입니다. 보기 E는 문장 자체가 부자연스러워 이 문항은 복원 신뢰도가 낮습니다."
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
    "explanation": "정답은 **C**입니다. `Client Script`는 브라우저에서 실행되고, `Business Rule`은 서버에서 실행됩니다. 실행 위치 차이를 묻는 기본 문제입니다."
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
    "explanation": "정답은 **D**입니다. Knowledge Base 레코드에서 읽기 가능한 사용자 집합은 `Can Read` 탭에서 확인합니다."
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
    "explanation": "정답은 **A**로 유지했습니다. 다만 검색 입력 예시의 특수문자가 손상돼 있어 표기 신뢰도는 낮습니다. 문항 의도는 리스트 컬럼 검색을 열고 Short Description에 `email` 포함 조건으로 빠르게 필터링하는 방법을 묻습니다."
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
    "explanation": "정답은 **A,B,D,G,H**입니다. Basic Configuration UI16에서는 브라우저 탭 제목, 모듈 텍스트 색상, 기본 테마, 헤더 배경색, 배너 이미지 같은 UI 속성을 조정할 수 있습니다."
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
    "explanation": "정답은 **A**입니다. 특정 use case와 관련된 테이블 및 CI 구성을 관리하고 설명하는 프레임워크로 `CSDM product view`를 사용합니다."
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
    "explanation": "정답은 **C**입니다. 지식 문서를 import하려면 해당 지식베이스에 기여 가능한 `Can contribute` 권한이 필요합니다."
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
    "explanation": "정답은 **D**입니다. 웹 브라우저에서 실행되는 ServiceNow 스크립트 유형은 `Client script`입니다. 사용자 입력 반응과 즉시 UI 제어에 사용됩니다."
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
    "explanation": "정답은 **A,E**입니다. 리스트를 특정 컬럼 기준으로 묶어 보려면 리스트 컨텍스트 메뉴나 해당 컬럼 헤더 메뉴에서 `Group By`를 선택하면 됩니다."
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
    "explanation": "정답은 **B**입니다. 여러 카탈로그 아이템을 신규 입사자 세트처럼 한 번에 주문하게 하려면 `Order Guide`를 만드는 것이 적절합니다."
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
    "explanation": "정답은 **D**입니다. 여러 Knowledge Base를 관리하는 상위 역할은 `knowledge_admin`입니다."
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
    "explanation": "정답은 **C**입니다. 테이블에 대해 수행하는 기본 작업은 `Create, Read, Write, Delete`입니다. CRUD 개념을 묻는 문제입니다."
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
    "explanation": "정답은 **A,E,F**입니다. ServiceNow의 대표 워크플로 제품군은 `Employee Workflows`, `Customer Workflows`, `IT Workflows`입니다."
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
    "explanation": "정답은 **A,B,C**입니다. `Incident`, `Problem`, `Change Request`는 모두 기본 Task 테이블을 확장한 대표 하위 테이블입니다."
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
    "explanation": "정답은 **D**입니다. 해당 절차는 홈페이지 포털 페이지를 `update set`에 담아 이동하거나 추적하려는 상황에 해당합니다. 보기 문구에는 오탈자가 있지만 의도는 업데이트 세트 반영으로 읽힙니다."
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
    "explanation": "정답은 **B**입니다. 리스트 화면의 각 행은 하나의 `record`를 나타냅니다."
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
    "explanation": "정답은 **A,B,E,F,G**입니다. ServiceNow 보고서 유형에는 `Pie`, `Speedometer`, `Horizontal Bar`, `Semi-Donut`, `Donut` 등이 포함됩니다."
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
    "explanation": "정답은 **A**입니다. Role은 사용자가 수행할 수 있는 작업을 결정하는 `permissions`의 묶음입니다."
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
    "explanation": "정답은 **A**입니다. 레코드의 더보기 메뉴에서 `Add Tag`를 선택하고 태그명을 입력해 태그를 추가할 수 있습니다."
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
    "explanation": "정답은 **A,C**입니다. 필드 제목을 바꾸려면 해당 필드의 Dictionary 설정을 보거나 `Configure Label`을 사용해 표시 라벨을 변경합니다."
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
    "explanation": "정답은 **B**입니다. 한 레코드의 개별 데이터 값은 테이블의 `Field`에 들어 있습니다."
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
    "explanation": "정답은 **B**입니다. CI와 다른 CI 간 관계를 인프라 관점에서 시각적으로 보여 주는 도구는 `Dependency View`입니다."
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
    "explanation": "정답은 **A**입니다. Favorites의 이름이나 색상을 바꿀 때는 `Pencil` 아이콘으로 편집합니다. 보기의 `boon`은 `icon` 또는 `label` 계열 오탈자로 보입니다."
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
    "explanation": "정답은 **A**입니다. `u_`나 `x_`로 시작하는 테이블명은 사용자가 만들었거나 스코프 앱에서 생성한 `custom table`을 뜻합니다."
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
    "explanation": "정답은 **A**입니다. UI 입력, Import Set, Web Service를 통한 데이터까지 공통으로 강제하는 정책은 `Data Policies`입니다."
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
    "explanation": "정답은 **C,E,G**로 남겨 두었지만, 보기의 테이블명이 심하게 손상돼 있어 이 문항은 낮은 신뢰도로 보는 편이 안전합니다. 문항 의도는 enterprise CMDB/CSDM 맥락의 핵심 테이블 조합을 묻고 있습니다."
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
    "explanation": "정답은 **B**입니다. 현재 보기 기준으로 서비스와 이를 지원하는 CI의 이슈 상태를 추적하는 유틸리티는 `CI Health Dashboard`입니다."
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
    "explanation": "정답은 **A**입니다. 사용자가 카탈로그에서 설명을 입력하면 Incident 레코드를 생성하도록 하려면 `Record Producer`를 사용합니다."
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
    "explanation": "정답은 **B**입니다. 대화형 메시징 인터페이스로 지식 문서를 제공하는 기능은 `Virtual Agent`입니다."
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
    "explanation": "정답은 **A**입니다. 다른 인스턴스에 update set을 적용할 때의 기본 순서는 `Retrieve -> Preview -> Commit`입니다."
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
    "explanation": "정답은 **B**입니다. HR 지식베이스 안에서도 특정 카테고리만 HR 관리자에게 보이게 하려면 그 `Category`의 `Can Read`에 HR Manager용 User Criteria를 추가하면 됩니다."
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
    "explanation": "정답은 **C**입니다. Incident 테이블은 Task 테이블을 확장한 테이블로, Task의 공통 필드를 상속합니다."
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
    "explanation": "정답은 **B**입니다. 조직 전체가 공유하는 중앙 위치에서 문서를 작성, 분류, 검토, 승인, 탐색하는 프로세스는 `Knowledge Management`입니다."
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
    "explanation": "정답은 **C**입니다. 요청 총액 기준 승인 임계값을 바꾸려면 해당 승인 로직이 들어 있는 `Service Catalog Request` 워크플로를 수정해야 합니다."
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
    "explanation": "정답은 **A**입니다. 인스턴스 구성 변경을 묶어서 다른 환경으로 이동할 때 사용하는 기본 단위는 `Update sets`입니다."
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
    "explanation": "정답은 **D**입니다. Service Catalog Item을 어떤 사용자가 볼 수 있고 주문할 수 있는지는 `User Criteria`로 제어합니다."
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
    "explanation": "정답은 **D**입니다. 사용자의 데이터 조회 및 조작 권한을 제한하는 보안 규칙은 `Access Control Rules`입니다."
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
    "explanation": "정답은 **D**입니다. Activity Stream에서 `Funnel` 아이콘으로 항목 유형을 필터링하면 Work notes만 골라서 볼 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 여러 Flow Designer 콘텐츠를 하나의 디지털 프로세스로 조직하고 태스크 보드 형태로 관리하는 기능은 `Process Automation Designer`입니다."
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
    "explanation": "정답은 **A,D,E**입니다. spoke를 쓰면 코드를 줄일 수 있고, 재사용성과 발견 가능성이 좋아지며, 자동화 이벤트 처리 같은 통합 구성을 빠르게 조립할 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 가져온 데이터를 어떤 대상 테이블과 필드로 보낼지 정의하는 모듈은 `Transform Map`입니다."
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
    "explanation": "정답은 **B,D,E**입니다. 서비스 카탈로그에서는 `Request -> Requested Item`, `Requested Item -> Catalog Task`, `Cart -> Requests`처럼 한 레코드가 여러 하위 레코드를 가질 수 있습니다."
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
    "explanation": "정답은 **B**입니다. Notes 탭에서 작업 이력과 변경 내역을 보는 영역은 `Activity`입니다."
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
    "explanation": "정답은 **D**로 표기돼 있지만, 설명 내용상 실제 사용자 알림 기능은 보통 `Notifications`가 더 직접적입니다. 현재 보기/정답 조합은 낮은 신뢰도로 보는 편이 안전합니다."
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
    "explanation": "정답은 **C**입니다. 리스트 상단에서 현재 필터 조건 문자열을 보여 주는 영역은 `Breadcrumb`입니다."
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
    "explanation": "정답은 **A**입니다. UI, Import Set, Web Service 전반에 걸쳐 데이터 규칙을 공통 적용하려면 `Data policy`를 사용합니다."
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
    "explanation": "정답은 **B**로 남겨 두었지만, 보기 문자열 자체가 손상돼 있어 정확한 ACL 이름 표기는 낮은 신뢰도입니다. 문항 의도는 특정 커스텀 테이블 전체 행과 필드에 대한 테이블 수준 ACL을 묻고 있습니다."
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
    "explanation": "정답 표시는 **C**만 남아 있지만, 필터 조건의 기본 구성 요소는 일반적으로 `Field`, `Operator`, `Value` 세 가지입니다. 이 문항은 answer token 또는 보기 복원이 어긋난 것으로 보입니다."
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
    "explanation": "정답은 **C**입니다. `catalog_admin`은 catalog 관련 역할 권한을 상속하면서 카탈로그 아이템과 서비스를 만들 수 있는 관리자 역할입니다."
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
    "explanation": "정답은 **A,C,D**입니다. Flow Designer는 외부 시스템 연계가 쉽고, 흐름을 자연어에 가깝게 이해할 수 있으며, no-code 방식으로 자동화를 만들 수 있다는 장점이 있습니다."
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
    "explanation": "정답은 **A**입니다. High Security Settings 기능에 접근하려면 먼저 `Elevate Roles`를 통해 보안 관리자 권한을 상승시켜야 합니다."
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
    "explanation": "정답은 **A,C,D**입니다. 폼에서 UI Action 형태로 제공되는 것은 `Form Context Menu`, `Form Buttons`, `Form Links`입니다."
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
    "explanation": "정답은 **D**입니다. 보고서의 그룹핑과 계산식 설정은 Report Designer의 `Configure` 섹션에서 수행합니다."
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
    "explanation": "정답은 **B**입니다. Data Policy는 기본적으로 서버에서 실행되어 UI 외 입력 경로에도 동일한 규칙을 적용합니다."
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
    "explanation": "정답은 **B,D,E**입니다. 인프라 구성요소를 식별하고 서비스와 연결해 추적하려면 `CMDB`, `Discovery`, `Service Mapping` 조합이 핵심입니다."
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
    "explanation": "정답은 **C**입니다. Knowledge Base에 글을 작성할 수 있는 사용자 집합은 `Can Contribute` 탭에서 지정합니다."
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
    "explanation": "정답은 **C**입니다. 커스터마이징을 인스턴스 간 이동할 때 `Default Update Set`은 쓰지 않는 것이 모범 사례입니다. 별도의 명시적 update set으로 분리해야 추적과 검증이 쉽습니다."
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
    "explanation": "정답은 **A**입니다. 브라우저에서 동작하는 스크립트는 `Policies and Client Scripts` 계열입니다. 서버 측 객체인 Business Rule이나 ACL script와는 다릅니다."
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
    "explanation": "정답은 **B**입니다. `Base Class`는 다른 테이블을 상속하지 않는 최상위 쪽 테이블이고, `Parent Class`는 자신도 상속받았을 수 있으면서 다른 하위 테이블의 부모가 되는 중간 계층 테이블입니다."
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
    "explanation": "정답은 **C**입니다. Dependency View에서 인프라 CI에서 서비스까지 추적할 수 있는 근거는 CI 간의 `Relationships`입니다."
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
    "explanation": "정답은 **D**입니다. Incident 생성 권한을 주려면 테이블 수준에서 `incident.None` 대상에 `create` 작업, `itil` 역할을 부여하는 ACL이 맞습니다."
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
    "explanation": "정답은 **A,B,C**입니다. CI Dependency View에서 해당 CI를 우클릭하면 영향 CI, 관련 작업, 최근 장애 같은 운영 관점 메뉴를 볼 수 있습니다."
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
    "explanation": "정답은 **C**입니다. Favorite의 아이콘과 색상을 바꾸는 편집 동작은 `Pencil` 아이콘에서 수행합니다."
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
    "explanation": "정답은 **A,D,E**입니다. 태블릿 주문 시 부속품을 함께 선택하게 하려면 태블릿용 Catalog Item에 체크박스 변수나 variable set을 두는 방식이 가능하고, 부속품 자체를 별도 Catalog Item으로 관리하는 접근도 가능합니다."
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
    "explanation": "정답은 **D**입니다. 요청을 적절한 그룹이나 담당자에게 자동 배정하는 기본 기능은 `Assignment Rule`입니다."
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
    "explanation": "정답은 **B**입니다. 폼 제출 직전에 유효성 검사를 하고 필요하면 제출을 막으려면 `onSubmit()` Client Script를 사용합니다."
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
    "explanation": "정답은 **A**입니다. 미리 정의된 옵션 중에서 드롭다운으로 선택하는 필드 유형은 `Choice`입니다."
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
    "explanation": "정답은 **B,C,E**입니다. Form Design의 주요 구성은 상단 `Page Header`, 필드를 찾는 `Field Navigator`, 실제 배치를 조정하는 `Form Layout`입니다."
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
    "explanation": "정답은 **B,C,D,E**입니다. Flow Designer에서 자주 쓰는 core action에는 `Create Record`, `Ask for Approval`, `Look Up Record`, `Wait for Condition`이 있습니다."
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
    "explanation": "정답은 **A,C,F**입니다. enterprise CMDB의 핵심 테이블은 상위 구조 `cmdb`, 실제 CI 레코드가 있는 `cmdb_ci`, CI 관계를 담는 `cmdb_rel_ci`입니다."
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
    "explanation": "정답은 **B,E,G,H,I**입니다. 확장 구조가 `Task -> Incident -> Super Incident`라면 Task는 Base이자 Parent, Incident는 Child이자 Parent, Super Incident는 Child가 됩니다."
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
    "explanation": "정답은 **B**입니다. 인스턴스 안에서 가이드 투어, 액션 설명, flow 입력/출력 안내를 바로 보는 리소스는 `Help Panel`입니다."
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
    "explanation": "정답은 **A,C**로 남겨 두었지만, 실제 운영 관점에서는 보통 `itil` 역할 또는 그 역할이 포함된 그룹 미소속이 더 직접적인 원인입니다. 현재 보기/정답 복원 신뢰도는 낮습니다."
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
    "explanation": "정답은 **B**입니다. coalesce 필드를 지정하지 않으면 기존 레코드와 비교할 기준이 없어서 가져온 행이 모두 새 레코드로 처리됩니다."
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
    "explanation": "정답은 **B,C,F**로 남겨 두었지만, 실제 설정 관점에서는 사용자를 `Network group`, `Hardware group`에 넣고 계정을 준비하는 방향이 핵심입니다. `Add User Account to ACL`은 보기 복원 오류 가능성이 높습니다."
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
    "explanation": "정답은 **B**입니다. 폼에서 현재 테이블의 설정 페이지로 가려면 Form Context Menu의 `Configure > Table` 경로를 사용합니다."
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
    "explanation": "정답은 **A**입니다. 조건 빌더 대신 일반적인 문장이나 단어로 리스트를 필터링하는 기능은 `Natural Language Query`입니다."
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
    "explanation": "정답은 **A**입니다. 리스트 컬럼 레이아웃을 개인화하려면 `Gear` 아이콘에서 personalize 창을 열고 표시할 컬럼을 선택합니다."
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
    "explanation": "정답은 **B**입니다. 시간에 따른 지표 변화를 대시보드와 위젯으로 시각화해 개선 지점을 찾는 기능은 `Performance Analytics`입니다."
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
    "explanation": "정답은 **C**입니다. 조건에 따라 필드를 mandatory로 만들거나 숨기는 요구사항은 전형적인 `UI Policy` 적용 대상입니다."
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
    "explanation": "정답은 **C**입니다. 보고서를 저장하지 않고 현재 설정으로 결과만 확인하려면 `Run`을 클릭합니다."
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
    "explanation": "정답은 **B**입니다. Business Rule의 `When` 옵션은 `Before`, `After`, `Async`, `Display` 네 가지입니다."
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
    "explanation": "정답은 **C**입니다. 필터 조건에서 테이블과 권한에 따라 선택 가능한 첫 요소는 `Field`입니다."
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
    "explanation": "정답은 **A**입니다. 리스트의 기본 컬럼 배치를 바꾸려면 컬럼 헤더를 우클릭해 `Configure > List Layout`으로 이동하면 됩니다."
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
    "explanation": "정답은 **C**입니다. 필터 조건에서 `Operation`은 `is`, `contains`, `starts with` 같은 미리 정해진 항목 중에서 고르는 choice list입니다."
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
    "explanation": "정답은 **A**입니다. UI Action은 실행 후 메시지를 띄워 Incident가 성공적으로 제출됐음을 사용자에게 알릴 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 폼에서 필수 입력을 직접 강제하는 대표 수단은 UI Policy나 Client Script이며, Business Rule은 그 자체로 폼 UI의 mandatory 표시를 담당하지 않습니다."
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
    "explanation": "정답은 **A**입니다. Knowledge Base 안의 문서는 category 구조로 분류되어 탐색과 관리가 쉬워집니다."
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
    "explanation": "정답은 **B**입니다. 양쪽 테이블에서 서로 관련 레코드를 related list로 볼 수 있게 하는 관계는 `Many to Many`입니다."
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
    "explanation": "정답은 **B**입니다. Application Navigator의 Filter navigator는 애플리케이션과 모듈을 빠르게 검색해 이동하게 해 줍니다."
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
    "explanation": "정답은 **C**입니다. Global scope에서 만든 커스텀 테이블 `abc`는 자동으로 `u_abc`라는 이름을 갖습니다."
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
    "explanation": "정답은 **B,C,D**입니다. 필터 조건은 `Field`, `Operator`, `Value` 세 요소로 구성됩니다."
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
    "explanation": "정답은 **D**입니다. `My Groups Work`는 사용자가 실제로 속한 그룹의 작업만 보여 주므로, 매니저가 Network와 Hardware 그룹의 멤버가 아니면 해당 작업을 볼 수 없습니다."
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
    "explanation": "정답은 **A**입니다. 내부 문서, FAQ, 트러블슈팅 자료를 찾아보는 기본 인터페이스는 `Knowledge`입니다."
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
    "explanation": "정답은 **A**입니다. 각 Knowledge Base는 고유한 라이프사이클 워크플로, user criteria, category 구조, 관리 담당자를 가질 수 있습니다."
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
    "explanation": "정답은 **B**로 유지했습니다. 다만 일반적으로는 User Criteria로 허용 대상을 설계하는 편이 더 자연스럽고, 현재 문항은 보기 복원 신뢰도가 아주 높지는 않습니다. 현재 문서에서는 관리자 그룹을 `Not Available`로 제외하는 흐름을 따릅니다."
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
    "explanation": "정답은 **C**입니다. Service Catalog workflow는 승인, 작업 생성, 알림 전송 등 복잡한 fulfillment 과정을 자동으로 진행하는 데 사용됩니다."
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
    "explanation": "정답은 **A**입니다. Incident 번호 접두어 변경은 `Number Maintenance`에서 해당 번호 규칙의 prefix를 수정해 처리합니다."
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
    "explanation": "정답은 **C**입니다. 지식 문서의 생성, 읽기, 수정, retire 가능 여부를 사용자 조건으로 판단하는 기준은 `User Criteria`입니다."
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
    "explanation": "정답은 **B**입니다. formatter는 레코드 필드가 아닌 부가 정보를 폼 위에 표시하는 form element입니다."
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
    "explanation": "정답은 **D**입니다. 레코드의 32자리 고유 식별자는 `sys_id` 필드에 저장됩니다."
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
    "explanation": "정답은 **A**입니다. 표현은 다소 거칠지만, 데이터베이스가 데이터 센터 인프라에서 운영된다는 의미로 보면 참입니다."
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
    "explanation": "정답은 **D**입니다. Navigator 필터에 `service`를 입력하면 이름에 service가 들어간 모듈이 주로 보이고, `Incident > Assigned to me`는 해당 문자열과 직접 일치하지 않습니다."
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
    "explanation": "정답은 **A**입니다. `REQ` 번호는 서비스 카탈로그 주문 전체를 나타내는 request, 즉 order number입니다."
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
    "explanation": "정답은 **A,D**입니다. LDAP Integration의 핵심은 사용자 인증 `Authentication`과 사용자 정보 동기화 `Data Population`입니다."
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
    "explanation": "정답은 **A,D,F**입니다. UI Policy로 필드를 `read-only`, `mandatory`, `hidden` 상태로 바꿀 수 있습니다."
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
    "explanation": "정답은 **B**입니다. 일반적인 configure 변경은 개인 설정이 아니라 다른 사용자 화면에도 영향을 줄 수 있으므로 거짓입니다."
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
    "explanation": "정답은 **B**입니다. 요구사항과 fulfillment 흐름이 같다면 Catalog Item을 하나만 만들고 두 카탈로그에 모두 게시하는 것이 가장 효율적입니다."
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
    "explanation": "정답은 **B,D,F**입니다. ServiceNow 플랫폼의 주요 UI 구성은 `Banner Frame`, `Application Navigator`, `Content Frame`입니다."
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
    "explanation": "정답은 **A**입니다. Data Policy는 UI뿐 아니라 import에도 적용될 수 있어 mandatory 조건을 가져오기 시점에도 강제할 수 있습니다."
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
    "explanation": "정답은 **A,D**입니다. 테이블은 행에 해당하는 `records`와 열에 해당하는 `fields`로 구성됩니다."
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
    "explanation": "정답은 **C**로 남겨 두었지만, 문항 자체가 숫자 문제와 인터페이스 설명 보기가 섞여 있어 복원 신뢰도가 낮습니다. 현재 문서 기준으로는 `Form: Data is entered into ServiceNow through forms` 보기를 정답으로 유지합니다."
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
    "explanation": "정답은 **A,B**입니다. `Discovery`는 인프라를 스캔해 CI를 자동 식별하고, `IntegrationHub ETL`은 외부 데이터 소스를 CMDB 구조에 맞게 적재하는 데 사용됩니다."
  }
];
