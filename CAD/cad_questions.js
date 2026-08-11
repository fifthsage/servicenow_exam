window.CAD_QUESTIONS = [
  {
    "id": 1,
    "title": "ServiceNow desktop applications automatically run on which platforms?",
    "options": [
      {
        "text": "Desktop",
        "id": "A"
      },
      {
        "text": "Smartphone",
        "id": "B"
      },
      {
        "text": "Desktop and Smartphone",
        "id": "C"
      },
      {
        "text": "Desktop and Tablet",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**[공식 공개 샘플 기반]**\n공개 CAD Exam Specification의 정답은 Desktop and Tablet입니다. 모바일 경험은 별도 설계와 검증이 필요합니다.\n\n**[Exam Keywords]**\nDesktop, Tablet"
  },
  {
    "id": 2,
    "title": "Which database operation cannot be selected for an Async Business Rule?",
    "options": [
      {
        "text": "Query",
        "id": "A"
      },
      {
        "text": "Update",
        "id": "B"
      },
      {
        "text": "Delete",
        "id": "C"
      },
      {
        "text": "Insert",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[공식 공개 샘플 기반]**\nAsync Business Rule은 레코드 변경 후 비동기로 실행되며 Query 작업에는 사용할 수 없습니다. Query 시점 로직에는 Before Query Business Rule을 검토합니다.\n\n**[Exam Keywords]**\nAsync Business Rule, Query"
  },
  {
    "id": 3,
    "title": "Which one is not a GlideUser (g_user) method?",
    "options": [
      {
        "text": "userName()",
        "id": "A"
      },
      {
        "text": "getFullName()",
        "id": "B"
      },
      {
        "text": "hasRole()",
        "id": "C"
      },
      {
        "text": "hasRoleExactly()",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[공식 공개 샘플 기반]**\n`g_user`에는 `getUserName()`이 있으며 `userName()`은 표준 메서드가 아닙니다.\n\n**[Exam Keywords]**\ng_user, getUserName"
  },
  {
    "id": 4,
    "title": "How is a Scheduled Job configured to run on the last day of every month in the public CAD sample?",
    "options": [
      {
        "text": "Run Periodically with a repeat interval of 31",
        "id": "A"
      },
      {
        "text": "Run Periodically with a repeat interval of Last Day",
        "id": "B"
      },
      {
        "text": "Run Monthly with Day set to 31",
        "id": "C"
      },
      {
        "text": "Run Monthly with Day set to Last Day",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**[공식 공개 샘플 기반·레거시 UI]**\n공개 Specification의 정답은 Monthly와 Day 31 조합입니다. 실제 구현 전에는 사용 중인 릴리스의 Scheduled Script Execution 동작을 확인해야 합니다.\n\n**[Exam Keywords]**\nScheduled Job, Monthly"
  },
  {
    "id": 5,
    "title": "Which utility matches Import Set field names to target table field names?",
    "options": [
      {
        "text": "Transform Maps",
        "id": "A"
      },
      {
        "text": "Auto Map Matching Fields",
        "id": "B"
      },
      {
        "text": "CI Relationship Builder",
        "id": "C"
      },
      {
        "text": "Business Service Management Map",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**[공식 공개 샘플 기반]**\nAuto Map Matching Fields는 이름이 일치하는 소스와 대상 필드를 자동으로 매핑합니다.\n\n**[Exam Keywords]**\nAuto Map Matching Fields"
  },
  {
    "id": 6,
    "title": "Which action is not allowed when managing application files?",
    "options": [
      {
        "text": "Add global files to a global application",
        "id": "A"
      },
      {
        "text": "Remove files from a global application",
        "id": "B"
      },
      {
        "text": "Move a file between global applications",
        "id": "C"
      },
      {
        "text": "Move files into or out of a scoped application",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**[공식 공개 샘플 기반]**\nApplication Scope는 파일의 소유와 경계를 보호하므로 파일을 scoped application 안팎으로 임의 이동할 수 없습니다.\n\n**[Exam Keywords]**\nApplication Scope, application files"
  },
  {
    "id": 7,
    "title": "What is the primary benefit of developing an application in a scoped application?",
    "options": [
      {
        "text": "It isolates application artifacts and controls cross-scope access",
        "id": "A"
      },
      {
        "text": "It grants every user admin",
        "id": "B"
      },
      {
        "text": "It removes the need for ACLs",
        "id": "C"
      },
      {
        "text": "It stores all data in the global scope",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nScoped application은 이름 충돌을 줄이고 애플리케이션 파일과 API 접근 경계를 명확히 합니다.\n\n**[Exam Keywords]**\nApplication Scope, isolation"
  },
  {
    "id": 8,
    "title": "Which relationship lets a custom table inherit fields and behavior from another table?",
    "options": [
      {
        "text": "Table extension",
        "id": "A"
      },
      {
        "text": "Database view",
        "id": "B"
      },
      {
        "text": "Transform map",
        "id": "C"
      },
      {
        "text": "Reference qualifier",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nTable extension은 상위 테이블의 필드와 동작을 물려받습니다. Task 기반 업무라면 Task 확장을 우선 검토합니다.\n\n**[Exam Keywords]**\nTable extension, inheritance"
  },
  {
    "id": 9,
    "title": "What should be evaluated first when deciding whether a business requirement is a good fit for the Now Platform?",
    "options": [
      {
        "text": "Data model, workflow, users, security, and integration needs",
        "id": "A"
      },
      {
        "text": "Only the preferred color theme",
        "id": "B"
      },
      {
        "text": "Only the number of developers",
        "id": "C"
      },
      {
        "text": "Only the table label",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n적합성 평가는 데이터, 프로세스, 사용자 경험, 보안, 자동화와 외부 연동을 함께 봐야 합니다.\n\n**[Exam Keywords]**\nApplication fit, requirements"
  },
  {
    "id": 10,
    "title": "What makes an application module visible in the Application Navigator?",
    "options": [
      {
        "text": "An application menu, module configuration, and required access",
        "id": "A"
      },
      {
        "text": "A Transform Map only",
        "id": "B"
      },
      {
        "text": "A Scheduled Job only",
        "id": "C"
      },
      {
        "text": "A UI Policy only",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nApplication Menu 아래 Module을 구성하고 역할 등 접근 조건을 만족해야 Navigator에 표시됩니다.\n\n**[Exam Keywords]**\nApplication Menu, Module"
  },
  {
    "id": 11,
    "title": "Which client-side object is used to read or modify fields on the current form?",
    "options": [
      {
        "text": "g_form",
        "id": "A"
      },
      {
        "text": "gs",
        "id": "B"
      },
      {
        "text": "GlideRecord",
        "id": "C"
      },
      {
        "text": "current",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n`g_form`은 현재 폼 필드 값, 메시지, 표시·필수·읽기 전용 상태 등을 다루는 클라이언트 객체입니다.\n\n**[Exam Keywords]**\ng_form, client-side"
  },
  {
    "id": 12,
    "title": "Which script type validates a form immediately before it is sent to the server?",
    "options": [
      {
        "text": "onSubmit Client Script",
        "id": "A"
      },
      {
        "text": "Async Business Rule",
        "id": "B"
      },
      {
        "text": "Scheduled Script Execution",
        "id": "C"
      },
      {
        "text": "Fix Script",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n`onSubmit`은 제출 직전 브라우저에서 실행되며 false를 반환해 잘못된 제출을 막을 수 있습니다. 서버 측 검증도 별도로 필요합니다.\n\n**[Exam Keywords]**\nonSubmit"
  },
  {
    "id": 13,
    "title": "Which server-side API is commonly used to query records from a table?",
    "options": [
      {
        "text": "GlideRecord",
        "id": "A"
      },
      {
        "text": "g_form",
        "id": "B"
      },
      {
        "text": "g_user",
        "id": "C"
      },
      {
        "text": "GlideAjax client callback",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nGlideRecord는 서버 측에서 테이블 레코드를 조회하고 생성·갱신·삭제하는 핵심 API입니다.\n\n**[Exam Keywords]**\nGlideRecord"
  },
  {
    "id": 14,
    "title": "What is the recommended way for a client script to request server-side data without reloading the form?",
    "options": [
      {
        "text": "GlideAjax calling a client-callable Script Include",
        "id": "A"
      },
      {
        "text": "Direct server GlideRecord in the browser",
        "id": "B"
      },
      {
        "text": "A Scheduled Import",
        "id": "C"
      },
      {
        "text": "A Dictionary Override",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nGlideAjax는 클라이언트에서 필요한 서버 로직만 비동기로 호출합니다. Script Include는 client callable이어야 합니다.\n\n**[Exam Keywords]**\nGlideAjax, Script Include"
  },
  {
    "id": 15,
    "title": "Which artifact provides a catalog-style form that creates a record directly in a target table?",
    "options": [
      {
        "text": "Record Producer",
        "id": "A"
      },
      {
        "text": "Order Guide",
        "id": "B"
      },
      {
        "text": "Data Source",
        "id": "C"
      },
      {
        "text": "Database View",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nRecord Producer는 사용자 친화적인 질문 화면으로 Incident나 사용자 정의 테이블에 레코드를 생성합니다.\n\n**[Exam Keywords]**\nRecord Producer"
  },
  {
    "id": 16,
    "title": "Which three elements can an Access Control evaluate? (Choose three.)",
    "options": [
      {
        "text": "Required roles",
        "id": "A"
      },
      {
        "text": "Condition",
        "id": "B"
      },
      {
        "text": "Script",
        "id": "C"
      },
      {
        "text": "User theme",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "**[핵심 근거]**\nACL은 역할, 조건, 스크립트를 평가합니다. 구성된 모든 평가 요소가 통과해야 접근이 허용됩니다.\n\n**[Exam Keywords]**\nACL, role, condition, script"
  },
  {
    "id": 17,
    "title": "Which GlideSystem method checks whether the current user has a role on the server?",
    "options": [
      {
        "text": "gs.hasRole()",
        "id": "A"
      },
      {
        "text": "g_form.hasRole()",
        "id": "B"
      },
      {
        "text": "current.hasRole()",
        "id": "C"
      },
      {
        "text": "GlideRecord.hasRole()",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n서버 측 현재 사용자 권한 확인에는 GlideSystem의 `gs.hasRole()`을 사용합니다.\n\n**[Exam Keywords]**\ngs.hasRole"
  },
  {
    "id": 18,
    "title": "What is the safest default principle when designing application ACLs?",
    "options": [
      {
        "text": "Grant only the minimum access required",
        "id": "A"
      },
      {
        "text": "Grant admin to every fulfiller",
        "id": "B"
      },
      {
        "text": "Use UI Policies as the only security",
        "id": "C"
      },
      {
        "text": "Allow access when no ACL matches",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n최소 권한 원칙을 적용하고 UI 제어가 아닌 서버 측 ACL로 데이터 접근을 보호해야 합니다.\n\n**[Exam Keywords]**\nLeast privilege"
  },
  {
    "id": 19,
    "title": "Which setting controls whether an application can call an API or resource in another scope?",
    "options": [
      {
        "text": "Cross-Scope Access",
        "id": "A"
      },
      {
        "text": "Form Layout",
        "id": "B"
      },
      {
        "text": "List Control",
        "id": "C"
      },
      {
        "text": "Email Property",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nCross-Scope Access와 해당 리소스의 Accessible from 설정이 애플리케이션 경계 간 호출을 통제합니다.\n\n**[Exam Keywords]**\nCross-Scope Access"
  },
  {
    "id": 20,
    "title": "Why is hiding a field with a UI Policy insufficient to secure its data?",
    "options": [
      {
        "text": "Client-side visibility does not enforce server-side record access",
        "id": "A"
      },
      {
        "text": "UI Policies always delete the field",
        "id": "B"
      },
      {
        "text": "ACLs run only in the browser",
        "id": "C"
      },
      {
        "text": "Hidden fields cannot store values",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nUI Policy는 사용자 경험 제어입니다. API, 리스트 등 다른 경로의 접근까지 막으려면 ACL이 필요합니다.\n\n**[Exam Keywords]**\nUI Policy vs ACL"
  },
  {
    "id": 21,
    "title": "Which Flow Designer component starts a flow?",
    "options": [
      {
        "text": "Trigger",
        "id": "A"
      },
      {
        "text": "Action output",
        "id": "B"
      },
      {
        "text": "Spoke category",
        "id": "C"
      },
      {
        "text": "Data Pill",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nTrigger는 레코드, 일정 또는 애플리케이션 이벤트에 따라 Flow 실행을 시작합니다.\n\n**[Exam Keywords]**\nFlow Trigger"
  },
  {
    "id": 22,
    "title": "What is the purpose of an application property?",
    "options": [
      {
        "text": "Store configurable behavior separately from application logic",
        "id": "A"
      },
      {
        "text": "Replace every application table",
        "id": "B"
      },
      {
        "text": "Create an ACL automatically",
        "id": "C"
      },
      {
        "text": "Compile JavaScript into Java",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nApplication Property를 사용하면 환경별 설정값을 코드에 하드코딩하지 않고 관리할 수 있습니다.\n\n**[Exam Keywords]**\nApplication Property, gs.getProperty"
  },
  {
    "id": 23,
    "title": "Which two artifacts support reusable server-side application logic? (Choose two.)",
    "options": [
      {
        "text": "Script Include",
        "id": "A"
      },
      {
        "text": "Custom Flow Action",
        "id": "B"
      },
      {
        "text": "Form Annotation",
        "id": "C"
      },
      {
        "text": "List Breadcrumb",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "**[핵심 근거]**\nScript Include는 재사용 가능한 서버 API를, Custom Action은 Flow에서 재사용 가능한 자동화 단위를 제공합니다.\n\n**[Exam Keywords]**\nScript Include, Custom Action"
  },
  {
    "id": 24,
    "title": "Which mechanism allows a notification to react to application logic without tightly coupling email creation to that logic?",
    "options": [
      {
        "text": "Event and event-based notification",
        "id": "A"
      },
      {
        "text": "Dictionary Override",
        "id": "B"
      },
      {
        "text": "Client Script",
        "id": "C"
      },
      {
        "text": "Reference Qualifier",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n애플리케이션은 Event를 큐에 넣고 Notification은 해당 Event에 반응하도록 구성해 로직과 전달 채널을 분리할 수 있습니다.\n\n**[Exam Keywords]**\nEvent, Notification"
  },
  {
    "id": 25,
    "title": "Which tool should be used to automate repeatable regression tests for an application?",
    "options": [
      {
        "text": "Automated Test Framework",
        "id": "A"
      },
      {
        "text": "Schema Map",
        "id": "B"
      },
      {
        "text": "Event Log",
        "id": "C"
      },
      {
        "text": "Update Source",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nATF는 폼, 서버, REST 등 반복 가능한 테스트를 구성하고 업그레이드·배포 후 회귀 검증을 자동화합니다.\n\n**[Exam Keywords]**\nATF, regression testing"
  },
  {
    "id": 26,
    "title": "Which API style is commonly used to expose or consume JSON resources over HTTP?",
    "options": [
      {
        "text": "REST",
        "id": "A"
      },
      {
        "text": "JDBC only",
        "id": "B"
      },
      {
        "text": "UI Policy",
        "id": "C"
      },
      {
        "text": "Dictionary Entry",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nREST는 HTTP 메서드와 JSON 표현을 중심으로 외부 시스템 연동에 널리 사용됩니다. 인증, 오류, 상태 코드와 로깅도 함께 설계합니다.\n\n**[Exam Keywords]**\nREST, JSON, HTTP"
  },
  {
    "id": 27,
    "title": "What is the role of a Transform Map during data import?",
    "options": [
      {
        "text": "Map and transform source fields into a target table",
        "id": "A"
      },
      {
        "text": "Render a form",
        "id": "B"
      },
      {
        "text": "Grant application roles",
        "id": "C"
      },
      {
        "text": "Run a client script",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nTransform Map은 Import Set의 소스 필드를 대상 테이블 필드에 연결하고 변환·Coalesce 규칙을 적용합니다.\n\n**[Exam Keywords]**\nTransform Map, Import Set"
  },
  {
    "id": 28,
    "title": "Which two practices improve a REST integration’s supportability? (Choose two.)",
    "options": [
      {
        "text": "Handle HTTP status codes and errors explicitly",
        "id": "A"
      },
      {
        "text": "Keep credentials in managed credential records",
        "id": "B"
      },
      {
        "text": "Hard-code passwords in scripts",
        "id": "C"
      },
      {
        "text": "Ignore response payloads",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "**[핵심 근거]**\n상태·오류 처리와 안전한 Credential 관리는 진단 가능성과 보안을 높입니다. 비밀값을 코드에 넣지 않습니다.\n\n**[Exam Keywords]**\nREST error handling, credentials"
  },
  {
    "id": 29,
    "title": "Which source control system can ServiceNow Studio integrate with for scoped application development?",
    "options": [
      {
        "text": "Git",
        "id": "A"
      },
      {
        "text": "DNS",
        "id": "B"
      },
      {
        "text": "SNMP",
        "id": "C"
      },
      {
        "text": "LDAP",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nStudio의 Source Control Integration은 Git 저장소와 scoped application 파일을 연결해 branch, commit, pull 등을 지원합니다.\n\n**[Exam Keywords]**\nGit, Source Control Integration"
  },
  {
    "id": 30,
    "title": "What is the purpose of Delegated Development?",
    "options": [
      {
        "text": "Allow approved non-admin developers to work within controlled application boundaries",
        "id": "A"
      },
      {
        "text": "Give every user unrestricted global access",
        "id": "B"
      },
      {
        "text": "Replace source control",
        "id": "C"
      },
      {
        "text": "Disable application scope",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nDelegated Development는 관리자가 허용한 애플리케이션과 파일 유형 안에서 개발 권한을 위임하고 검토 절차를 적용합니다.\n\n**[Exam Keywords]**\nDelegated Development, code review"
  },
  {
    "id": 31,
    "title": "Which object can a Display Business Rule use to send server-derived values to client scripts when a form loads?",
    "options": [
      {
        "text": "g_scratchpad",
        "id": "A"
      },
      {
        "text": "g_form",
        "id": "B"
      },
      {
        "text": "GlideAggregate",
        "id": "C"
      },
      {
        "text": "RESTMessageV2",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nDisplay Business Rule은 폼이 표시되기 전에 서버에서 실행되고 `g_scratchpad`에 값을 넣어 클라이언트 스크립트에 전달할 수 있습니다.\n\n**[Exam Keywords]**\nDisplay Business Rule, g_scratchpad"
  },
  {
    "id": 32,
    "title": "Which GlideAjax method is unavailable to scoped applications and should generally be avoided because it blocks the user interface?",
    "options": [
      {
        "text": "getXMLWait()",
        "id": "A"
      },
      {
        "text": "getXML()",
        "id": "B"
      },
      {
        "text": "addParam()",
        "id": "C"
      },
      {
        "text": "getAnswer()",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n공식 GlideAjax API 문서에 따르면 동기 방식인 `getXMLWait()`은 scoped application에서 사용할 수 없고 UI 응답성을 저하시킵니다. 비동기 `getXML()`과 callback을 사용합니다.\n\n**[Exam Keywords]**\nGlideAjax, getXMLWait, asynchronous"
  },
  {
    "id": 33,
    "title": "Which server-side API is preferred when a script must query sensitive records while explicitly enforcing ACLs?",
    "options": [
      {
        "text": "GlideRecordSecure",
        "id": "A"
      },
      {
        "text": "GlideRecord without security checks",
        "id": "B"
      },
      {
        "text": "g_form",
        "id": "C"
      },
      {
        "text": "GlideUser client API",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nGlideRecordSecure는 레코드 조회 과정에서 ACL을 적용하는 보안 중심 API입니다. 민감 데이터가 호출자 권한 밖으로 노출되지 않도록 서버 로직에서도 접근을 검증해야 합니다.\n\n**[Exam Keywords]**\nGlideRecordSecure, ACL"
  }
];
(function(){var L=['A','B','C','D'];var rows=[
[34,'What is the main purpose of application scope?','Isolate application artifacts and control cross-scope access','Replace all ACLs','Create production clones','Store user passwords','Application Scope는 이름 충돌을 방지하고 애플리케이션 파일과 데이터의 경계를 제어합니다.'],
[35,'Why should new custom applications normally use a private scope?','To reduce unintended interference with global or other applications','To grant every user admin','To disable source control','To make every table public','Scoped Application은 다른 애플리케이션과의 의도하지 않은 변경을 줄이고 명시적 접근을 유도합니다.'],
[36,'Which server-side API is commonly used to query and update table records?','GlideRecord','GlideAjax','g_form','GlideModal','GlideRecord는 서버 측에서 테이블 레코드를 조회하고 조작하는 핵심 API입니다.'],
[37,'Which object is intended for client-side form manipulation?','g_form','GlideRecordSecure','gs','current on a scheduled job','g_form은 필드 값·표시·필수 여부 등 현재 폼을 클라이언트에서 제어합니다.'],
[38,'What is the recommended way for a client script to request server-side logic asynchronously?','Call a client-callable Script Include through GlideAjax','Run unrestricted GlideRecord in the browser','Use a UI Policy action as a database query','Put credentials in the client script','GlideAjax와 Client-callable Script Include 조합으로 서버 로직을 비동기 호출합니다.'],
[39,'When should a before Business Rule be preferred?','When values must be set on the current record before it is saved','When sending a slow external request after commit','When changing browser colors','When loading a portal widget only','Before Business Rule은 추가 update 없이 저장 전 current 값을 계산할 때 적합합니다.'],
[40,'When is an asynchronous Business Rule useful?','For non-immediate work that should not delay the user transaction','For client-side mandatory fields','For ACL evaluation only','For setting a value required before insert','비동기 Rule은 사용자 응답을 막을 필요가 없는 후속 처리를 분리합니다.'],
[41,'Why should recursive updates to current be avoided in a Business Rule?','They can retrigger rules and cause duplicate processing or loops','They delete the application scope','They prevent all queries','They disable Flow Designer','Business Rule 안의 불필요한 current.update()는 재실행과 반복 갱신을 유발할 수 있습니다.'],
[42,'What does an Access Control rule evaluate?','Whether an operation on a record or field is permitted','How a form is visually arranged','When a Discovery schedule runs','Which update set is committed first','ACL은 사용자 역할·조건·스크립트에 따라 레코드나 필드 작업 권한을 판단합니다.'],
[43,'If a table ACL grants read but a field ACL denies read, what is the effective result for that field?','The field remains unreadable','The table ACL always overrides the field ACL','The user becomes admin','The entire record is deleted','레코드와 필드 수준 검사를 모두 통과해야 하므로 필드 ACL 거부가 적용됩니다.'],
[44,'Why test security with impersonation or a representative non-admin user?','Admin privileges can mask missing or incorrect access controls','It permanently changes the user password','It creates update sets','It compiles scripts','관리자는 일반 사용자의 ACL 결과와 다른 권한을 가지므로 실제 역할로 검증해야 합니다.'],
[45,'What is a Script Include best suited for?','Reusable server-side logic','Static form layout','Client-only field decoration','Importing spreadsheet rows without a data source','Script Include는 여러 Rule·Action·API에서 공유하는 서버 로직을 캡슐화합니다.'],
[46,'Why avoid hard-coded sys_ids in reusable application logic?','They differ across instances and reduce portability','They are always encrypted','They automatically expire','They cannot reference records','환경마다 달라질 수 있는 sys_id 대신 속성, 자연키, 설정 레코드 등을 사용하면 이식성이 높아집니다.'],
[47,'What is a system property useful for in a custom application?','Externalizing environment-specific or adjustable configuration','Replacing every table field','Storing plaintext user passwords','Bypassing ACLs','System Property는 코드 변경 없이 조절할 설정값을 외부화하는 데 적합합니다.'],
[48,'What is the purpose of a data policy?','Enforce data requirements across multiple input channels, including imports and web services','Change only browser form colors','Package application files','Select a MID Server','Data Policy는 UI뿐 아니라 Import·API 등 다양한 경로의 데이터 요구사항을 적용할 수 있습니다.'],
[49,'How does a UI Policy differ from a Data Policy?','A UI Policy primarily controls form behavior while a Data Policy can enforce data rules beyond the UI','A UI Policy always runs on MID Servers','A Data Policy creates source-control branches','They are identical in every respect','UI Policy는 폼 동작 중심이고 Data Policy는 비UI 입력에도 데이터 규칙을 적용할 수 있습니다.'],
[50,'What is the purpose of a reference qualifier?','Limit the records available in a reference field','Encrypt a table','Create an application scope','Schedule a flow','Reference Qualifier는 조건에 맞는 레코드만 참조 선택지로 보여줍니다.'],
[51,'Which table design supports shared fields across related record types?','Extend an appropriate parent table','Duplicate every field into unrelated tables','Store all data in system properties','Use one text field for all values','Table Extension은 공통 필드를 상속하면서 하위 유형별 필드를 추가할 수 있게 합니다.'],
[52,'Why should developers choose a field type carefully at creation time?','Type affects validation, storage, behavior, and later migration cost','Field type only changes color','Every type stores identical semantics','Types can be changed freely without impact','Field Type은 데이터 품질과 API·UI 동작에 영향을 주며 사후 변경 비용이 큽니다.'],
[53,'What is an Import Set Transform Map used for?','Map staged source data into target table fields','Render a workspace page','Evaluate ACLs','Package source-control commits','Transform Map은 Import Set의 원천 행을 대상 테이블 구조로 변환합니다.'],
[54,'What does coalesce do in a Transform Map?','Identify an existing target record for update instead of always inserting','Combine two update sets','Encrypt imported values','Make every field mandatory','Coalesce 필드는 기존 대상 레코드를 찾아 Insert와 Update를 구분합니다.'],
[55,'What is a Flow Designer subflow useful for?','Reusable automation logic that can be called from multiple flows','A client-side form API','A CMDB identification rule','A database index only','Subflow는 입력·출력을 가진 재사용 가능한 자동화 단위를 제공합니다.'],
[56,'When should an application use an event and notification rather than send email directly in core logic?','To decouple business processing from notification delivery','To bypass user preferences','To disable auditing','To avoid application scope','Event 기반 알림은 비즈니스 처리와 전달 채널을 분리해 유지보수성과 재사용성을 높입니다.'],
[57,'What is the role of an update set in application development?','Capture supported configuration changes for movement between instances','Move transactional production data','Back up every attachment automatically','Replace source control in all cases','Update Set은 지원되는 구성 변경을 인스턴스 간 이동하기 위한 컨테이너입니다.'],
[58,'What should be done before committing a retrieved update set?','Preview it and resolve collisions or errors','Grant admin to all users','Delete the target application','Disable every Business Rule','Preview로 누락 종속성과 충돌을 확인하고 해결한 뒤 Commit합니다.'],
[59,'What is a key benefit of source control integration for a scoped application?','Version history, branching, and collaborative code management','Automatic production deployment without review','Storage of runtime task data','Bypassing application access settings','Source Control은 애플리케이션 파일의 이력과 협업 흐름을 제공합니다.'],
[60,'Which practice best supports production-ready custom applications?','Automated tests, least privilege, documented configuration, peer review, and controlled deployment','Develop only as admin directly in production','Disable logging and auditing','Hard-code every environment value','테스트·최소 권한·문서화·리뷰·통제된 배포가 안전하고 유지 가능한 애플리케이션의 기반입니다.']
];rows.forEach(function(r){var target=(r[0]-1)%4,choices=r.slice(2,6),correct=choices.shift();choices.splice(target,0,correct);window.CAD_QUESTIONS.push({id:r[0],title:r[1],options:choices.map(function(t,i){return{id:L[i],text:t}}),answer:[L[target]],explanation:r[6]})})})();

/* Q61-Q240: original practice questions reconstructed from public product docs. */
(function(qs){var facts=[
['private-scope','What is the default scope model for a custom application?','A private scope with a unique namespace','The global scope without a namespace','The scope of the current user','A temporary update-set scope','Private scope isolates artifacts and prevents naming conflicts.'],
['scope-access','What must another application normally have to access a scoped app’s protected resources?','Explicit cross-scope permission allowed by the resource','Only a matching form view','A browser cookie','A catalog approval','Scoped resources are private unless their access settings permit cross-scope use.'],
['table-access','Where can cross-application table access be configured?','On the application and Table records','Only on a user preference','Only in a notification','Only in the browser URL','Application and table settings define permitted external operations.'],
['namespace','Why does an application scope use a namespace?','To uniquely qualify artifacts and avoid name collisions','To encrypt all database rows','To replace ACLs','To choose a form theme','The scope prefix distinguishes application artifacts from similarly named resources.'],
['application-file','What is an application file?','A configuration record representing application functionality','A production incident attachment','A database backup','A user session','Business Rules, Script Includes, and similar metadata are application files.'],
['metadata-parent','Which table is the parent for application configuration records?','Application File [sys_metadata]','Task [task]','User [sys_user]','Event [em_event]','Configuration tables extend sys_metadata for shared application-file behavior.'],
['custom-update','Where is the update-set representation of a changed application file stored?','Customer Updates [sys_update_xml]','Incident [incident]','Import Set Row [sys_import_set_row]','Email [sys_email]','A customer update XML record captures the configuration change for transfer.'],
['table-extension','What does extending a table provide?','Inherited fields and behavior from the parent table','A copy with no relationship','Automatic administrative access','A separate database instance','Table inheritance reuses the parent schema and platform behavior.'],
['reference-field','What does a reference field store?','A relationship to a record in another table','An encrypted attachment','A list of application scopes','A complete table copy','A reference value points to a target record, commonly by sys_id.'],
['choice-field','When is a choice field appropriate?','For a governed set of allowed values','For arbitrary binary attachments','For executing server scripts','For storing multiple table rows','Choice fields constrain input to defined options.'],
['dictionary','What defines a table field’s data type and core attributes?','The system dictionary entry','The user preference','The update-source record','The notification device','Dictionary metadata defines column behavior, type, and attributes.'],
['business-rule','What is a Business Rule?','Server-side logic triggered by record database operations','A client-only form script','A catalog category','A source-control branch','Business Rules react to insert, update, delete, or query activity on a table.'],
['before-rule','When is a Before Business Rule the best fit?','To set or validate current record values before database write','To send slow integrations after commit','To change browser controls only','To run monthly without a record action','Before rules can alter current before it is saved.'],
['after-rule','When is an After Business Rule appropriate?','To react after the record is written, often updating related records','To prevent the current write with form messages only','To alter a field before validation','To run on every browser load','After rules operate after persistence and are useful for related effects.'],
['async-rule','Why use an Async Business Rule?','Move non-immediate server work out of the user transaction','Change a form field instantly before submit','Query records before display','Replace every Flow','Async processing reduces response-time impact when immediate completion is unnecessary.'],
['display-rule','What does a Display Business Rule commonly prepare?','Server-derived data for the form through g_scratchpad','Database changes after every query','A source-control commit','A scheduled import','Display rules can provide client scripts with data during form load.'],
['rule-condition','Why should Business Rules have specific conditions?','Avoid unnecessary execution and side effects','Make them run on every table','Bypass application scope','Disable auditing','Conditions limit processing to intended records and transitions.'],
['script-include','What is the primary purpose of a Script Include?','Store reusable server-side functions or classes','Style a client form','Define a report color','Create an update source','Script Includes centralize reusable server logic.'],
['include-loading','Why prefer a Script Include to a global Business Rule for reusable functions?','It is loaded on request instead of for every transaction','It always runs on the client','It bypasses ACLs','It stores task data','On-demand loading improves modularity and avoids globally loaded logic.'],
['include-name','What naming rule applies to a class-based Script Include?','Name, class, prototype, and type must align','The name must equal the table label','It must start with current','It must be anonymous','Matching names allow the platform to construct and call the class correctly.'],
['client-callable','What enables a client script to invoke a Script Include with GlideAjax?','The Glide AJAX enabled or Client callable setting plus appropriate access','An Async Business Rule','A database view','An email notification','Client-callable configuration exposes controlled server methods to GlideAjax.'],
['glideajax','Why use GlideAjax from a client script?','Request needed server data asynchronously without loading an entire record synchronously','Bypass all server security','Run a Business Rule in the browser','Commit an update set','GlideAjax calls a client-callable Script Include and supports responsive forms.'],
['client-script','Where does a Client Script execute?','In the user’s browser','Only on the MID Server','Only in the database','Only during deployment','Client Scripts control form behavior in the browser.'],
['onload','What is an onLoad Client Script used for?','Initialize form behavior when the form opens','Validate immediately after database commit','Run a nightly integration','Modify every query','onLoad logic prepares the presented form.'],
['onchange','What is special about an onChange Client Script?','It reacts to changes in one configured field','It runs only on record deletion','It has no old or new value context','It executes only on the server','onChange logic handles dependent behavior when a field value changes.'],
['onsubmit','What can an onSubmit Client Script do?','Validate the form and prevent submission by returning false','Update the database after commit','Run without a form','Grant user roles','onSubmit performs final client validation before sending data.'],
['ui-policy','When should a UI Policy be preferred over a Client Script?','For declarative mandatory, visible, or read-only field behavior','For complex server database queries','For source-control merges','For REST authentication','UI Policies configure common presentation behavior with less code.'],
['ui-action','What does a UI Action provide?','A button, link, or context action that executes configured logic','A database column type','An import data source','A source-control credential','UI Actions expose record or list operations to users.'],
['data-policy','How does a Data Policy differ from a UI Policy?','It can enforce data requirements beyond a particular form interface','It only changes browser colors','It runs only in source control','It creates tables','Data Policies can govern imported or API-written data as well as interactive entry.'],
['acl','What does an Access Control rule determine?','Whether an operation on an object or field is permitted','How a form is styled','When an email is sent','Which update set is current','ACLs protect records and fields for create, read, write, delete, and other operations.'],
['acl-evaluation','What can an ACL require?','Roles, conditions, and a script that must grant access','Only a form view','Only an update-set state','Only a notification event','ACL evaluation combines configured security requirements.'],
['gliderecordsecure','Why use GlideRecordSecure for security-sensitive scripted queries?','It enforces applicable ACL checks during data access','It disables all ACLs','It runs only in the browser','It automatically indexes every query','GlideRecordSecure incorporates record security into scripted retrieval.'],
['gliderecord-query','What must happen before iterating results from a GlideRecord query?','Call query() after adding conditions','Call update() first','Create a UI Policy','Commit an update set','query() executes the constructed database query.'],
['new-record','Which GlideRecord sequence creates a new row?','initialize, set values, then insert','query, next, then delete','get, setAbortAction, then update','addQuery, orderBy, then close','A new GlideRecord is initialized, populated, and inserted.'],
['current-previous','What do current and previous represent in a Business Rule?','The current record and its prior state where available','The current and previous users','Two update sets','Client and server sessions','These GlideRecord objects support comparison of record changes.'],
['flow','What is a Flow Designer flow composed of?','A trigger followed by actions and flow logic','Only a Business Rule','Only an ACL','A table schema and form view','The trigger starts automation and subsequent steps implement behavior.'],
['subflow','Why create a subflow?','Reuse automation with defined inputs and outputs','Create a new database instance','Style a portal page','Replace application scope','Subflows package callable automation without their own trigger.'],
['custom-action','What are the main parts of a custom Flow Designer action?','Inputs, action steps, and outputs','Roles, groups, and users','Tables, forms, and lists','Sources, imports, and coalesce only','Actions define their contract, implementation steps, and returned results.'],
['flow-inline','What must a Flow Designer inline script return?','A value matching the data type expected by its input','Always a string','Always a GlideRecord array','No value under any condition','Typed return values allow downstream action inputs to operate correctly.'],
['transform-map','What does a Transform Map define?','How import-set source data maps and transforms into a target table','How ACLs inherit','How client scripts load','How a flow is triggered','Transform Maps control field mapping and row processing from staging data.'],
['coalesce','What is the purpose of a coalesce field?','Find a matching target record to update rather than always insert','Combine two source-control branches','Make fields read-only','Encrypt imported values','Coalesce defines the identity used for insert-versus-update decisions.'],
['update-set','What should an update set contain?','A coherent group of supported configuration changes','Transactional incident data','Every production attachment','User passwords','Update sets move configuration metadata as a deployable unit.'],
['preview','Why preview a retrieved update set before commit?','Detect collisions, errors, and missing dependencies','Automatically grant admin','Delete target customizations','Publish it to the Store','Preview identifies deployment issues before changes are applied.'],
['source-control','What does source control add to scoped application development?','Version history, branching, and collaborative change management','Runtime incident storage','Automatic production approval','A replacement for ACLs','Repository history supports collaboration and controlled evolution of application files.'],
['atf','What is the purpose of Automated Test Framework?','Create repeatable tests of application and platform behavior','Back up the entire database','Replace all manual design review','Move transactional data','ATF validates expected behavior and supports regression testing.']
];var domains=['Application Design','Data Model','User Interface','Security','Automation & Integration','Application Management'],difficulties=['foundation','applied','advanced','advanced'],L=['A','B','C','D'],id=61;facts.forEach(function(f,fi){for(var v=0;v<4;v++){var label=f[0].replace(/-/g,' '),title=f[1],prefix='';if(v===1){title='A developer is implementing '+label+'. Which design decision follows platform guidance?';prefix='Design decision: '}if(v===2){title='A code review finds a defect around '+label+'. Which conclusion should drive the correction?';prefix='Review conclusion: '}if(v===3){title='Before promoting the application, which evidence best validates '+label+'?';prefix='Release evidence: '}var c=f.slice(2,6).map(function(t){return prefix+t}),multi=v===3&&fi%4===0;if(multi){title+=' (Choose 2)';c=[prefix+f[2],prefix+'Documented test results and owner acceptance for '+label,prefix+f[3],prefix+'Skipping validation because the configuration saved successfully']}var s=(id-1)%4,r=c.slice(s).concat(c.slice(0,s)),answers=[L[(4-s)%4]];if(multi)answers.push(L[(5-s)%4]);qs.push({id:id,title:title,options:r.map(function(t,i){return{id:L[i],text:t}}),answer:answers,explanation:'**[공식 문서 기반 재구성 · '+f[0]+' · '+difficulties[v]+']**\n'+f[6]+(multi?' 배포 전에는 올바른 구현 선택과 문서화된 검증 증거가 모두 필요합니다.':''),domain:domains[Math.min(5,Math.floor(fi/8))],difficulty:difficulties[v],sourceType:'official-docs-reconstructed',objective:f[0]});id++}})})(window.CAD_QUESTIONS);
(function(qs){var L=['A','B','C','D'];qs.forEach(function(q){if(q.answer.length!==1)return;var correct=q.options.find(function(o){return o.id===q.answer[0]}),rest=q.options.filter(function(o){return o!==correct}),target=(q.id-1)%4;rest.splice(target,0,correct);q.options=rest.map(function(o,i){return{id:L[i],text:o.text}});q.answer=[L[target]]})})(window.CAD_QUESTIONS);

/* Independently reconstructed recall batch 1 (Q61-Q100); wording is original. */
(function(qs){var rows=[
[61,'A scoped application table must allow records to be read by scripts in another scope. Which configuration is directly relevant?','Set the table Application Access so out-of-scope read access is allowed','Create a form view in the calling scope','Add the table to an Update Set twice','Make the table extend sys_metadata','Application Access on the Table record governs permitted out-of-scope operations.','Application Design'],
[62,'A developer wants to create a catalog-style form that inserts directly into a custom table. Which artifact should be used?','A Record Producer targeting the custom table','A regular Catalog Item with no flow','A UI Macro on the table list','A Scheduled Script Execution','A Record Producer converts submitted variables into a record on its target table.','User Interface'],
[63,'Which TWO artifacts always execute server-side? (Choose 2)','Business Rule','Scheduled Script Execution','Client Script','UI Policy','Business Rules and scheduled scripts run on the server; Client Scripts and UI Policies control client form behavior.','Automation & Integration',['Business Rule','Scheduled Script Execution']],
[64,'A Before Business Rule detects invalid data and must stop the database operation. What should its script call?','current.setAbortAction(true)','current.update()','g_form.setReadOnly()','action.setRedirectURL()','setAbortAction(true) aborts the current database action from server-side rule processing.','Automation & Integration'],
[65,'A form needs a server-calculated value available immediately to an onLoad Client Script. Which design is appropriate?','Populate g_scratchpad in a Display Business Rule','Run an Async Business Rule after the form loads','Store the value in a browser cookie','Call current.update() from the Client Script','A Display Business Rule can place server-derived values in g_scratchpad for client use.','Automation & Integration'],
[66,'A Client Script must retrieve a small calculated result without reloading the form. What should it use?','GlideAjax with a client-callable Script Include','A synchronous client-side GlideRecord update','A Scheduled Job','A Transform Map','GlideAjax asynchronously calls controlled server logic and returns only the needed data.','Automation & Integration'],
[67,'What must a class-based Script Include name match for the class to be instantiated normally?','The class, prototype type, and Script Include name','The caller table label only','The active Update Set name','The current user name','Class-based Script Include naming must align with the declared class and prototype type.','Automation & Integration'],
[68,'A Script Include will be invoked through GlideAjax. Which base class is commonly extended in its prototype?','AbstractAjaxProcessor','GlideForm','GlideUser','RESTMessageV2','Client-callable Script Includes commonly extend AbstractAjaxProcessor to expose callable methods.','Automation & Integration'],
[69,'Which GlideRecord sequence returns every matching record for iteration?','addQuery(), query(), then repeated next()','initialize(), insert(), then deleteRecord()','get(), update(), then hasNext()','setValue(), addOption(), then submit()','Conditions are added before query(), and next() advances through the result set.','Data Model'],
[70,'A script knows the sys_id of one record. Which GlideRecord method is the most direct retrieval method?','get(sys_id)','addEncodedQuery(sys_id)','initialize(sys_id)','chooseWindow(sys_id)','get() retrieves a single record using sys_id or a field/value pair.','Data Model'],
[71,'Why should current.update() generally be avoided inside a Business Rule running on the same record?','It can cause recursive rule execution and unnecessary database work','It disables all Access Controls','It converts the rule to client-side','It prevents the record from receiving a sys_id','The platform saves current as part of the transaction; explicitly updating it can recurse.','Automation & Integration'],
[72,'A rule must change field values before a new record is committed. Which Business Rule timing is appropriate?','Before Insert','After Query','Async Delete','Display','A Before Insert rule modifies current before the database write occurs.','Automation & Integration'],
[73,'A rule sends a slow, nonessential integration message after a record update. Users do not need the result immediately. Which timing is best?','Async','Before','Display','Before Query','Async processing moves non-immediate work outside the interactive transaction.','Automation & Integration'],
[74,'A developer must add a condition to every database query on a table before records are returned. Which Business Rule timing is designed for this?','Before Query','Async','Display','After Delete','Before Query rules can modify the query conditions before the database returns records.','Automation & Integration'],
[75,'A developer needs reusable server logic callable from Business Rules, UI Actions, and Scripted REST resources. Where should it reside?','A Script Include','An onLoad Client Script','A UI Policy Action','A form annotation','Script Includes centralize reusable server-side functions and classes.','Automation & Integration'],
[76,'A field must become mandatory for imports and web-service updates as well as interactive forms. What should enforce it?','A Data Policy','A UI Policy only','An onLoad Client Script','A form layout','Data Policies can enforce data requirements across non-form input channels.','Security'],
[77,'A field should become visible only when a checkbox is selected on a form, with no server lookup. What is the most maintainable solution?','A UI Policy with a UI Policy Action','An Async Business Rule','A Transform Map script','A Scheduled Job','UI Policies declaratively control visible, mandatory, and read-only form behavior.','User Interface'],
[78,'What does the Reverse if false option on a UI Policy do?','Reverse its UI Policy Actions when the condition becomes false','Negate every ACL on the table','Undo the last database update','Run the policy only for administrators','Reverse if false restores the opposite field behavior when the condition no longer matches.','User Interface'],
[79,'Which Client Script type reacts when a configured form field value changes?','onChange','onLoad','onSubmit','onCellEdit only','An onChange Client Script receives old and new values for its configured field.','User Interface'],
[80,'Which Client Script type can prevent a form submission by returning false?','onSubmit','onLoad','onChange after save','onCellEdit on a form','onSubmit performs final client validation before the request is sent.','User Interface'],
[81,'A developer must respond when a user edits a value directly in a list. Which Client Script type applies?','onCellEdit','onLoad','onSubmit','Display','onCellEdit is designed for list-editor changes.','User Interface'],
[82,'Which g_form method removes all choices from a choice field before new options are added?','clearOptions()','removeDecoration()','setSectionDisplay()','getReference()','clearOptions removes the current choice list; addOption can then add the desired choices.','User Interface'],
[83,'An ACL contains a role requirement, condition, and script. What is required for access to be granted by that ACL?','All configured requirements must evaluate successfully','Any one requirement is sufficient','Only the script matters','Only the role matters for field ACLs','An ACL grants access when its required roles, condition, and script all pass.','Security'],
[84,'A user can read a table record but must not see one sensitive field. What additional control is appropriate?','A field-level Read ACL for the sensitive field','A different list layout only','A Client Script that clears the field','A notification filter','Field ACLs protect the data even outside a particular form or list presentation.','Security'],
[85,'Why is hiding a field with a UI Policy insufficient as a security control?','The value may still be accessible through lists, APIs, or scripts without an ACL','UI Policies run only on the server','UI Policies delete dictionary entries','Hidden fields cannot contain sensitive data','Presentation controls do not authorize data access; ACLs do.','Security'],
[86,'Which server API is preferred when a scripted query must enforce the caller’s record and field access?','GlideRecordSecure','GlideForm','GlideSystem only','GlideElementDescriptor','GlideRecordSecure applies applicable ACL checks during record access.','Security'],
[87,'A role contains another role. What does a user normally receive when assigned the containing role?','The contained role through role inheritance','Only the containing role name with no permissions','A copy of the role record','Automatic admin override','Contained roles allow permission bundles to inherit other role capabilities.','Security'],
[88,'What is the purpose of a cross-scope privilege record created during development?','Record and control one application scope’s access to another scope’s resource','Grant a user the admin role','Move runtime data between instances','Change a table’s parent class','Cross-scope privileges govern allowed runtime access between application boundaries.','Application Design'],
[89,'What does extending the Task table give a custom table?','Task fields and task-oriented platform behavior through inheritance','A separate copy of every Task record','Automatic public access','Ownership of the Task application','A child table inherits columns and relevant behavior from its parent.','Data Model'],
[90,'A child table needs a different default value for an inherited field. Which configuration is intended for this?','A Dictionary Override','A Transform Map','A Reference Qualifier','A UI Macro','Dictionary Overrides adjust supported inherited field attributes for a child table.','Data Model'],
[91,'A reference field should show only active records belonging to the selected company. What should constrain its choices?','A Reference Qualifier','A Display Business Rule on every target record','A Scheduled Import','A form annotation','Reference Qualifiers filter the records available in a reference field.','Data Model'],
[92,'During an import, matching employee numbers should update existing target records. What should be configured?','Coalesce on the employee-number field','A UI Policy on the import set','A client-callable Script Include','A field Read ACL only','Coalesce uses matching source and target values to decide whether to update instead of insert.','Automation & Integration'],
[93,'Which Transform Map script runs once before each source row is transformed?','onBefore','onStart','onComplete','onForeignInsert','onBefore runs for each row before its target transformation.','Automation & Integration'],
[94,'Which Transform Map script runs once when the entire transform begins?','onStart','onBefore','onAfter','onReject','onStart executes once at the beginning of a transform run.','Automation & Integration'],
[95,'What type of data should an Update Set primarily transport?','Supported configuration and customization records','Production incident transactions','User passwords and sessions','Every attachment in the instance','Update Sets package configuration metadata, not general transactional data.','Application Management'],
[96,'What should be done after retrieving an Update Set and before committing it?','Preview it and resolve reported collisions or errors','Set it to In Progress','Delete the source instance','Run it as a Client Script','Preview identifies conflicts and dependency problems before applying changes.','Application Management'],
[97,'A developer changes the same Business Rule several times in one Update Set. How is it normally represented in Customer Updates?','The latest captured version is maintained for that configuration record','Every keystroke becomes a separate deployable Business Rule','The Business Rule is excluded','The rule becomes transactional data','An Update Set maintains a customer-update representation of the configuration record.','Application Management'],
[98,'What can a delegated developer use in Studio to package assigned application changes for deployment?','The Publish action','A database clone','The Email Client','A report export','Official Studio guidance exposes Publish for delegated developers packaging application changes.','Application Management'],
[99,'Why integrate a scoped application with source control?','Maintain version history and support branching and collaboration','Move production task records automatically','Bypass application-scope restrictions','Disable Update Set preview','Source control manages versions of application files and collaborative development history.','Application Management'],
[100,'Which statement best describes a Flow Designer subflow?','Reusable automation with inputs and outputs but no independent trigger','A Client Script that runs on every form','A table extension used by flows','A notification sent by an event','Subflows are invoked by flows or scripts and package reusable steps without their own trigger.','Automation & Integration']
];var L=['A','B','C','D'];rows.forEach(function(r){var q=qs.find(function(x){return x.id===r[0]}),correctTexts=Array.isArray(r[8])?r[8]:[r[2]],choices=r.slice(2,6),shift=(r[0]-1)%4,rot=choices.slice(shift).concat(choices.slice(0,shift));q.title=r[1];q.options=rot.map(function(t,i){return{id:L[i],text:t}});q.answer=correctTexts.map(function(t){return L[rot.indexOf(t)]});q.explanation='**[공개 기출 회상 포인트 재구성 · 공식 문서 검증]**\n'+r[6];q.domain=r[7];q.difficulty=r[0]%2===0||r[0]%3===0?'advanced':'applied';q.sourceType='community-recall-reconstructed';q.objective='cad-recall-'+r[0];q.confidence='high';q.verifiedAgainst='official-docs';q.releaseRisk=r[0]===74||r[0]===98?'medium':'low'})})(window.CAD_QUESTIONS);

/* Independently reconstructed recall batch 2 (Q101-Q140); wording is original. */
(function(qs){var rows=[
[101,'What determines which users can see an application menu or module in the All menu?','The roles configured on the application menu and module','The active Update Set','The table label','The browser language','Application navigation artifacts can restrict visibility with role requirements.','User Interface'],
[102,'A module must open a filtered list of records from a custom table. Which module link type is appropriate?','List of Records','Content Page','Separator','Assessment','List of Records opens the selected table and can apply a filter.','User Interface'],
[103,'A module should run a server-side report rather than open a table list. Which configuration should the developer review?','The module Link type and target arguments','The table Dictionary Overrides','The current Update Set state','The application source-control branch','Module behavior is defined by its link type and corresponding target fields.','User Interface'],
[104,'Why create a separate form view for a specialist role?','Present a task-specific arrangement of fields without changing the underlying record','Create a duplicate table for the role','Bypass field ACLs','Store a second copy of each record','Views change presentation; they do not duplicate data or replace security.','User Interface'],
[105,'A UI Action must redirect the user to another record after server processing. Which server-side object provides redirect methods?','action','g_form','g_user','GlideAjax','The server-side action object supports redirect and return URL behavior.','User Interface'],
[106,'Which object represents the current record in a server-side UI Action?','current','g_form','window','previous only','Server UI Actions use current as the GlideRecord for the displayed record.','User Interface'],
[107,'A UI Action is marked Client and must continue with server-side processing after confirmation. Which technique is commonly used?','Call gsftSubmit() to invoke the named server action','Call current.update() directly in the browser','Use a Dictionary Override','Create an Import Set','gsftSubmit submits the form to the UI Action’s server-side portion.','User Interface'],
[108,'Which g_form method changes a field value on the current form?','setValue()','setUserDisplay()','addQuery()','getSession()','g_form.setValue sets a form field value client-side.','User Interface'],
[109,'Which g_form method displays a message associated with a particular field?','showFieldMsg()','addInfoMessage() on current','setAbortAction()','getXMLAnswer()','showFieldMsg places client feedback beside the specified field.','User Interface'],
[110,'A Client Script needs the logged-in user’s sys_id without a server call. Which API is appropriate?','g_user.getUserID()','gs.getUserID()','current.getUniqueValue()','GlideRecord.getUser()','g_user exposes client-side information about the current user.','User Interface'],
[111,'Which statement about g_user.hasRole() is important when testing with administrators?','An administrator may satisfy role checks broadly, so impersonation testing is important','It runs only in Business Rules','It returns a GlideRecord','It changes the user’s roles','Administrator behavior can mask role-specific client behavior; test with representative users.','Security'],
[112,'A server script needs the current user’s sys_id. Which method is appropriate?','gs.getUserID()','g_form.getUniqueValue()','g_user.setUserID()','current.getUserID()','GlideSystem provides server-side current-user information.','Automation & Integration'],
[113,'A developer wants environment-specific configuration without hard-coding it in scripts. What should be used?','A system property read with gs.getProperty()','A Client Script constant in every form','The application label','A user password in a Script Include','Properties externalize configurable values from application logic.','Application Design'],
[114,'What is the purpose of gs.eventQueue() in server-side logic?','Add an event to the event queue for downstream processing','Run a Client Script immediately','Commit the current Update Set','Create a table field','Queued events decouple business processing from notifications and Script Actions.','Automation & Integration'],
[115,'Which TWO records can commonly respond to a queued platform event? (Choose 2)','A Notification registered for the event','A Script Action registered for the event','A UI Policy Action','A Dictionary Override','Event-driven Notifications and Script Actions process registered events.','Automation & Integration',['A Notification registered for the event','A Script Action registered for the event']],
[116,'Why queue an event instead of sending email directly from a Business Rule?','Separate business logic from notification delivery and recipients','Bypass notification preferences and ACLs','Guarantee synchronous email delivery','Prevent the record from saving','Events provide a reusable, decoupled trigger for notification processing.','Automation & Integration'],
[117,'A scheduled process must run server code at 02:00 every day. Which artifact should be configured?','Scheduled Script Execution','onLoad Client Script','UI Policy','Transform Event Script','Scheduled Script Executions run server logic according to a defined schedule.','Automation & Integration'],
[118,'What should a Scheduled Script Execution use to avoid processing an entire large table unnecessarily?','A selective indexed query and bounded processing','A client-side g_form loop','An unrestricted query with no conditions','A UI Action on every record','Selective queries reduce database load and execution time.','Automation & Integration'],
[119,'In Flow Designer, what starts a flow?','Its configured trigger','A subflow output','An Action input','A Data Pill label','A flow begins when its record, schedule, application, or other trigger condition occurs.','Automation & Integration'],
[120,'How does a subflow differ from a flow?','A subflow has callable inputs and outputs but no independent trigger','A subflow can contain no actions','A flow cannot use data pills','A subflow runs only in the browser','Subflows package reusable automation invoked by another flow or script.','Automation & Integration'],
[121,'What is a Data Pill in Flow Designer?','A selectable runtime value produced by a trigger or previous step','A stored user password','A database index','A source-control commit','Data Pills pass typed runtime data between flow steps.','Automation & Integration'],
[122,'A custom action must return a created record’s sys_id to its caller. Where should this value be defined?','As an action output populated by the action steps','Only in the action description','As the flow trigger','In a UI Policy Action','Outputs expose results from a reusable action to later flow steps.','Automation & Integration'],
[123,'Which Flow Logic construct executes different branches according to conditions?','If','For Each only','Wait for Duration only','Get Catalog Variables','If logic chooses branches based on runtime conditions.','Automation & Integration'],
[124,'What should be checked first when a flow produced unexpected output?','The flow execution details and step data','The browser history','The active Update Set description','The form layout','Execution details show inputs, outputs, status, and errors for each step.','Automation & Integration'],
[125,'A Flow Designer inline script supplies a Date/Time input. What must it return?','A value compatible with the expected Date/Time data type','Any arbitrary string','A UI Action object','No value','Inline scripts must return the data type required by the target input.','Automation & Integration'],
[126,'Which class sends an outbound REST request from server-side script?','sn_ws.RESTMessageV2','GlideForm','GlideUser','GlideElement','RESTMessageV2 constructs and executes outbound REST calls.','Automation & Integration'],
[127,'After RESTMessageV2.execute(), which object contains the HTTP status and response body?','RESTResponseV2','GlideAjax','RESTAPIRequest','current','execute returns a RESTResponseV2 used to inspect status, headers, and body.','Automation & Integration'],
[128,'Why should integration credentials not be embedded directly in a REST script?','Credential records or aliases support secure storage and controlled rotation','Hard-coded secrets automatically expire','Scripts are never stored','REST calls do not require authentication','Managed credentials reduce exposure and separate configuration from code.','Security'],
[129,'What is a Scripted REST API resource?','A defined inbound endpoint with server logic for an HTTP method and path','An outbound REST credential','A Client Script callback','An Update Set source','Resources define the methods and paths served by a Scripted REST API.','Automation & Integration'],
[130,'What should protect a Scripted REST API that returns application data?','Authentication plus appropriate ACL or scripted authorization checks','A hidden form field only','A UI Policy','An inactive Update Set','Inbound APIs require explicit authorization and data-access controls.','Security'],
[131,'Why version a public Scripted REST API?','Allow controlled evolution without immediately breaking existing consumers','Disable authentication for older clients','Create duplicate database rows','Avoid documenting the interface','Versioned paths let consumers migrate while older contracts remain supported.','Application Management'],
[132,'What is the purpose of an Import Set table?','Stage incoming data before transformation to a target table','Replace the target table permanently','Store Update Set XML','Run Client Scripts','Import Set rows provide a staging layer for validation and transformation.','Automation & Integration'],
[133,'What does Auto Map Matching Fields do in a Transform Map?','Create field maps where source and target field names match','Set every target field as coalesce','Delete unmatched source columns','Run an onComplete script','Auto Map accelerates mapping of equivalently named fields.','Automation & Integration'],
[134,'An onBefore Transform Script sets ignore = true for a source row. What happens?','That row is skipped for target transformation','The entire Import Set table is deleted','The target record is always inserted','All remaining rows are rejected','The ignore variable prevents the current row from being transformed.','Automation & Integration'],
[135,'A Transform Map must identify an existing target by employee number and company together. Which TWO configurations are required? (Choose 2)','Mark the employee-number field map as coalesce','Mark the company field map as coalesce','Make both target fields display fields','Create a separate Import Set for every company','Multiple coalesce fields form a combined match condition.','Automation & Integration',['Mark the employee-number field map as coalesce','Mark the company field map as coalesce']],
[136,'Where are installable versions of a published scoped application made available across company instances?','The Application Repository','The Event Registry','The Import Set table','The Email Outbox','The Application Repository distributes published application versions.','Application Management'],
[137,'What should happen to an application version number before publishing a new distributable release?','Increment it according to the intended release change','Set it back to 1.0.0 every time','Replace it with the Update Set sys_id','Leave it unchanged for all releases','Distinct versions let instances identify and install application updates.','Application Management'],
[138,'What is an important source-control limitation for a scoped application?','The application is linked to a repository and branch context that must be managed deliberately','Source control stores all task transactions','A repository bypasses scope access','Commits deploy automatically to production','Repository and branch operations affect application files and require controlled coordination.','Application Management'],
[139,'An organization wants non-admin developers to build only within approved applications and capabilities. What should it configure?','Delegated Development','Unrestricted global administration','A public application scope','A production clone','Delegated Development limits developers to specified applications and capabilities.','Application Management'],
[140,'What does an ATF test suite provide?','A grouped set of repeatable automated tests','A source-control branch','A Transform Map collection','A production clone schedule','ATF suites organize tests for regression and release validation.','Application Management']
];var L=['A','B','C','D'];rows.forEach(function(r){var q=qs.find(function(x){return x.id===r[0]}),correctTexts=Array.isArray(r[8])?r[8]:[r[2]],choices=r.slice(2,6),shift=(r[0]-1)%4,rot=choices.slice(shift).concat(choices.slice(0,shift));q.title=r[1];q.options=rot.map(function(t,i){return{id:L[i],text:t}});q.answer=correctTexts.map(function(t){return L[rot.indexOf(t)]});q.explanation='**[공개 기출 회상 포인트 재구성 · 공식 문서 검증]**\n'+r[6];q.domain=r[7];q.difficulty=r[0]%2===0||r[0]%3===0?'advanced':'applied';q.sourceType='community-recall-reconstructed';q.objective='cad-recall-'+r[0];q.confidence='high';q.verifiedAgainst='official-docs';q.releaseRisk=[111,125,138].includes(r[0])?'medium':'low'})})(window.CAD_QUESTIONS);

/* Independently reconstructed recall batch 3 (Q141-Q180); wording is original. */
(function(qs){var rows=[
[141,'A developer needs the number of active records grouped by category without loading every record. Which API is designed for this?','GlideAggregate','GlideForm','GlideAjax','GlideElementDescriptor','GlideAggregate performs database aggregate operations such as COUNT and GROUP BY.','Data Model'],
[142,'Which GlideAggregate method adds a count calculation to the query?','addAggregate("COUNT")','setValue("COUNT")','addOption("COUNT")','getReference("COUNT")','addAggregate defines the aggregate calculation returned by the query.','Data Model'],
[143,'A GlideRecord query should return only active, high-priority records. Which approach is appropriate?','Add both conditions before calling query()','Call query() and then add conditions inside next()','Update every nonmatching row','Use g_form.addQuery()','Building selective conditions before query lets the database return only relevant rows.','Data Model'],
[144,'Why should a query use indexed, selective conditions on a large table?','To reduce rows scanned and improve transaction performance','To bypass ACL evaluation','To make every field mandatory','To convert the query into a Client Script','Selective indexed queries reduce database work and long-running transactions.','Data Model'],
[145,'Which TWO practices reduce risk in a server-side GlideRecord query? (Choose 2)','Use selective conditions before query()','Limit or bound processing when only a subset is needed','Call current.update() inside every loop iteration','Query an entire large table and filter results in JavaScript','Selective queries and bounded processing improve performance and transaction safety.','Data Model',['Use selective conditions before query()','Limit or bound processing when only a subset is needed']],
[146,'What does GlideRecord.getUniqueValue() return for a retrieved record?','Its sys_id value as a string','Its table label','Its display field only','The current user sys_id','getUniqueValue returns the record’s unique identifier.','Data Model'],
[147,'A reference field’s stored value and displayed value are needed. Which distinction is correct?','getValue returns the stored value; getDisplayValue returns the display representation','Both methods always return the table label','getDisplayValue returns the ACL script','getValue returns a GlideForm object','Reference fields commonly store sys_id while displaying a human-readable value.','Data Model'],
[148,'Which API object should server-side code use for date and time calculations?','GlideDateTime','GlideForm','GlideUser','GlideMenu','GlideDateTime represents and manipulates date-time values on the server.','Automation & Integration'],
[149,'Why is a date-time value displayed differently for users in different locations?','Stored UTC values are rendered using user time-zone context','Each user receives a separate database row','Client Scripts rewrite the system clock','ACLs change date formats','The platform stores date-time consistently and applies display time-zone context.','User Interface'],
[150,'A Business Rule should run only when priority changes to 1. Which condition is most precise?','current.priority.changesTo(1)','current.priority = 1','previous.priority.changes()','g_form.getValue("priority")','changesTo tests the transition to the specified value in server rule context.','Automation & Integration'],
[151,'What does current.field.changes() test in update Business Rule logic?','Whether that field changed in the current transaction','Whether any record in the table changed','Whether the user can write the field','Whether a Client Script loaded','changes detects a difference between current and previous field values.','Automation & Integration'],
[152,'Which Business Rule variables are not reliably available for every execution type?','previous in an Async Business Rule','current in a Before Business Rule','gs in a server script','GlideRecord in a Script Include','Async processing does not reliably provide the synchronous previous object context.','Automation & Integration'],
[153,'Two Business Rules use the same timing and conditions. What controls their relative execution sequence?','Their Order values','Their sys_id alphabetical order only','The current form view','The active Update Set name','Business Rules at the same stage are sequenced by Order.','Automation & Integration'],
[154,'A Before Business Rule sets a field on current. Why is current.update() unnecessary?','The platform writes current after Before processing completes','Before rules cannot change fields','current.update() runs only on the client','The field must instead be changed with g_form','Changes made to current in a Before rule are included in the pending database operation.','Automation & Integration'],
[155,'Which mechanism can restrict a Business Rule to records meeting a declarative filter before its script runs?','The Business Rule Condition','A form annotation','The application description','The source-control commit message','The Condition field avoids unnecessary script execution.','Automation & Integration'],
[156,'When evaluating record access, why can both table-level and field-level ACLs matter?','The user must pass the applicable record and field security requirements','A field ACL automatically grants table access','Only the form view is evaluated','Table ACLs are ignored for API access','Field access depends on the applicable object-level and field-level authorization path.','Security'],
[157,'What does a table.none ACL protect?','Access to records on the table as a whole','Only fields named none','Only new records','Application menu visibility','A table.none rule establishes table/record-level access for the operation.','Security'],
[158,'What is the purpose of a table.* field ACL?','Provide a rule applicable to all fields not granted by a more specific field rule','Grant access only to the display field','Control table creation in Studio','Protect only inherited fields','The wildcard field ACL supplies general field access behavior.','Security'],
[159,'A specific field ACL and a wildcard field ACL both apply. Which rule is more specific to that field?','The named field ACL','The table.* ACL','The application menu role','The form view','A named field ACL targets that field more specifically than the wildcard.','Security'],
[160,'Which TWO tools help diagnose why an impersonated user cannot access a record or field? (Choose 2)','Debug Security Rules','Access Control configuration and evaluation results','The Update Set picker','The form designer color palette','Security debugging and ACL inspection reveal evaluated rules and failed requirements.','Security',['Debug Security Rules','Access Control configuration and evaluation results']],
[161,'Why should ACL testing use impersonation with representative non-admin users?','Admin override and elevated roles can hide authorization defects','Impersonation disables all Business Rules','Only impersonated users can open forms','ACLs run only during impersonation','Representative users expose the access path experienced in production.','Security'],
[162,'An ACL script should grant access only when a condition is true. What should it set?','answer to a Boolean result','current to null','g_form to false','action to a URL','ACL scripts assign a Boolean result to answer.','Security'],
[163,'Why should sensitive authorization logic remain server-side?','Client-side logic and data can be inspected or manipulated by the user','Server scripts cannot use roles','Client Scripts automatically enforce database ACLs','UI Policies encrypt fields','Security decisions must be enforced where the client cannot bypass them.','Security'],
[164,'A client-callable Script Include queries salary data. What is the strongest design requirement?','Protect the Script Include and enforce authorized record access server-side','Hide the calling button with a UI Policy only','Return every field and filter in the browser','Make isPublic() always return true','Client-callable server endpoints need access controls and least-data responses.','Security'],
[165,'What does the Accessible from setting on a Script Include control?','Which application scopes may call it','Which users see its form layout','Which Update Set captures it','Which table it extends','Accessible from defines the Script Include’s cross-scope availability.','Application Design'],
[166,'A scoped application calls a protected API in another scope and the runtime access is set to tracking. What may the platform create?','A cross-scope privilege record requiring an allow or deny decision','A new user role','A duplicate application','A Transform Map','Runtime access tracking records attempted cross-scope use for governance.','Application Design'],
[167,'What does the Caller Access setting on an application resource help govern?','Which calling scopes may use the resource at runtime','Which users can edit form layouts','Which browser can open Studio','Which records are coalesced','Caller restrictions add runtime governance for cross-scope access.','Application Design'],
[168,'Which TWO goals are served by a private application scope? (Choose 2)','Prevent artifact naming collisions through a namespace','Limit unintended access between applications','Automatically grant admin to application users','Move transactional data with source control','Scope namespaces and access boundaries isolate application artifacts and behavior.','Application Design',['Prevent artifact naming collisions through a namespace','Limit unintended access between applications']],
[169,'A REST integration receives HTTP 401. What should be investigated first?','Authentication configuration and credential validity','The target table form layout','A UI Policy condition','The application menu order','401 indicates the remote endpoint did not accept the authentication context.','Automation & Integration'],
[170,'A REST integration receives HTTP 403 after authenticating successfully. What does this most strongly suggest?','The authenticated identity lacks authorization for the requested resource','DNS failed before connection','The response body is valid JSON','The local Update Set is incomplete','403 generally indicates authenticated but forbidden access.','Security'],
[171,'Why should outbound REST code inspect the HTTP status before parsing the response as successful data?','Error responses may have different content and require separate handling','execute() always throws for every non-200 status','Status codes are available only in the browser','Parsing automatically retries the request','Explicit status handling prevents error bodies from being treated as valid results.','Automation & Integration'],
[172,'Which RESTMessageV2 method assigns a named path or query parameter defined on the REST message record?','setStringParameterNoEscape() or the appropriate parameter setter','addAggregate()','setAbortAction()','showFieldMsg()','REST parameter setters substitute values into configured request variables.','Automation & Integration'],
[173,'What should integration logging avoid?','Writing credentials, tokens, or sensitive response data to logs','Recording an error status and correlation identifier','Recording the integration name','Recording elapsed time','Logs must support diagnosis without exposing secrets or protected data.','Security'],
[174,'A Scripted REST resource creates a record successfully. Which HTTP status is conventionally appropriate?','201 Created','301 Moved Permanently','401 Unauthorized','500 Internal Server Error','201 indicates successful creation of a new resource.','Automation & Integration'],
[175,'Which TWO practices improve a production Scripted REST API? (Choose 2)','Validate and sanitize request inputs','Return deliberate status codes and bounded error details','Expose stack traces and secrets to every caller','Run all database queries without conditions','Input validation and controlled responses make APIs safer and easier to operate.','Automation & Integration',['Validate and sanitize request inputs','Return deliberate status codes and bounded error details']],
[176,'An import source sends a date in a format different from the target field. Where can conversion logic be applied?','A Transform Map field script or transform event script','A form-only UI Policy','An application menu module','A source-control tag','Transform scripts normalize source values before target persistence.','Automation & Integration'],
[177,'What is the effect of setting target values in an onBefore Transform Script?','The values participate in the pending target insert or update','The source file is rewritten','The transform is automatically canceled','A Client Script runs on the target form','onBefore can adjust the target record before it is saved.','Automation & Integration'],
[178,'Why should coalesce fields be chosen carefully?','Nonunique or unstable values can update the wrong record or create duplicates','Coalesce controls form visibility','Every coalesce field becomes encrypted','Coalesce disables all Transform Scripts','Coalesce defines record identity for import update decisions.','Data Model'],
[179,'An ATF test updates a record. What should a subsequent test step do?','Validate the expected record state explicitly','Assume the update succeeded because the step ran','Commit an Update Set','Disable rollback','Explicit validation proves the application produced the expected result.','Application Management'],
[180,'Why should ATF tests be small and focused?','Failures are easier to diagnose and tests are more reusable','ATF supports only one step','Large tests bypass ACLs','Focused tests automatically deploy to production','Discrete tests isolate behavior and simplify maintenance and troubleshooting.','Application Management']
];var L=['A','B','C','D'];rows.forEach(function(r){var q=qs.find(function(x){return x.id===r[0]}),correctTexts=Array.isArray(r[8])?r[8]:[r[2]],choices=r.slice(2,6),shift=(r[0]-1)%4,rot=choices.slice(shift).concat(choices.slice(0,shift));q.title=r[1];q.options=rot.map(function(t,i){return{id:L[i],text:t}});q.answer=correctTexts.map(function(t){return L[rot.indexOf(t)]});q.explanation='**[공개 기출 회상 포인트 재구성 · 공식 문서 검증]**\n'+r[6];q.domain=r[7];q.difficulty=r[0]%2===0||r[0]%3===0?'advanced':'applied';q.sourceType='community-recall-reconstructed';q.objective='cad-recall-'+r[0];q.confidence='high';q.verifiedAgainst='official-docs';q.releaseRisk=[149,152,166,172].includes(r[0])?'medium':'low'})})(window.CAD_QUESTIONS);

/* Independently reconstructed recall batch 4 (Q181-Q240); wording is original. */
(function(qs){var rows=[
[181,'Which requirement is the strongest indication that a business application is a good fit for the ServiceNow platform?','It manages structured work, approvals, records, and collaboration','It requires frame-by-frame 3D rendering','It replaces a real-time operating system','It performs only offline numerical simulation','The platform is well suited to record-centric workflows, automation, and collaboration.','Application Design'],
[182,'Before designing tables and automation, what should an application developer clarify first?','Business outcomes, users, process, and information requirements','The final Update Set sys_id','The source-control commit hash','The production node name','Clear outcomes and personas drive appropriate data and experience design.','Application Design'],
[183,'Why should custom table and field names be chosen carefully before production use?','Internal names become durable dependencies for scripts and integrations','Labels can never be changed','Names automatically grant roles','A table name determines its ACL result','Stable internal names reduce later migration and compatibility problems.','Application Design'],
[184,'What is the main reason to build a new customer application in its own scope?','Isolate its artifacts, namespace, and access boundaries','Make every table globally writable','Avoid defining application roles','Store all transactional data in Update Sets','A private scope protects boundaries and prevents naming conflicts.','Application Design'],
[185,'Which TWO requirements make a solution a strong platform application candidate? (Choose 2)','Users need a shared system of record for structured work','The process benefits from rules, approvals, and notifications','The solution requires direct control of hardware interrupts','The only output is an offline video render','Record-centric work and workflow automation align with platform strengths.','Application Design',['Users need a shared system of record for structured work','The process benefits from rules, approvals, and notifications']],
[186,'What is the relationship between an application menu and its modules?','The menu groups navigation modules for the application','Each module creates a new application scope','The menu stores table rows','Modules replace Access Controls','Application menus organize modules presented in platform navigation.','User Interface'],
[187,'A navigation module should appear only to application agents. What should be configured?','Require the application agent role on the module','Hide the module with a Client Script','Add a field ACL to sys_id','Set the active Update Set to Complete','Module roles control navigation visibility for eligible users.','User Interface'],
[188,'What is the recommended way to grant application capabilities to people with the same job function?','Assign application roles through groups','Give each user the admin role','Add users to an Update Set','Create a separate table per user','Group-based role assignment is easier to govern and maintain.','Security'],
[189,'A custom table should accept new records only from application agents. Which security operation must be controlled?','Create ACL','Read ACL only','Report ACL only','Module order','A Create ACL authorizes insertion independently of reading existing records.','Security'],
[190,'What platform feature generates human-friendly sequential record identifiers such as CASE0001234?','Auto-number configuration','A reference qualifier','A form annotation','An ACL script','Auto-numbering provides readable unique record numbers while sys_id remains the database identifier.','Data Model'],
[191,'What is the purpose of marking a field as the display field for a table?','Provide the human-readable value shown when records are referenced','Make the field the primary database key','Grant public read access','Add the field to every form view','Reference controls use the display value to represent a record to users.','Data Model'],
[192,'When should a reference field be used instead of a choice field?','When the value should relate to a record managed in another table','When there are four fixed values that never need records','When storing a multiline description','When executing server code','References preserve a relationship to another record rather than copying a fixed label.','Data Model'],
[193,'How should a many-to-many relationship between two application tables normally be modeled?','With an intermediary table containing references to both tables','With a single Boolean field','By copying every record into both tables','With a UI Policy only','A junction table represents multiple relationships in both directions.','Data Model'],
[194,'An application table must not allow users to add attachments. Where should the developer look first?','The table attribute that controls attachment availability','The source-control branch','The module link type','The event registry','Table configuration can disable attachments for records on that table.','Data Model'],
[195,'Why should a calculated field be used cautiously for expensive logic?','Its calculation can run whenever the field is read and affect performance','Calculated fields bypass all scripts','It automatically stores credentials','It can contain only Boolean values','Frequently evaluated complex calculations can add query and form cost.','Data Model'],
[196,'A read-only combined view of columns from several tables is needed for reporting. Which artifact may fit?','A Database View','A Record Producer','A Client Script','A Scheduled Import','Database Views join table data for querying and reporting without creating a normal writable table.','Data Model'],
[197,'What should guide which fields appear prominently on a form?','The user’s task, frequency of use, and process stage','The order fields were created','The developer’s personal preference','The Update Set creation date','Task-focused form design reduces noise and supports accurate work.','User Interface'],
[198,'What does adding a Related List to a form provide?','Access to records related to the current record','A copy of the current table schema','A new application scope','Automatic write permission','Related Lists present child or relationship records in the current record context.','User Interface'],
[199,'Several teams need different field arrangements for the same records. What should be created?','Separate form views','Duplicate tables for each team','Separate sys_id values','A different Update Set per user','Views provide role- or task-specific layouts over the same underlying record.','User Interface'],
[200,'What is a formatter used for on a form?','Display specialized non-field content or functionality in the layout','Define a table index','Grant a role','Transform imported rows','Formatters add platform components such as activity or process content to forms.','User Interface'],
[201,'A developer considers a UI Macro for a new experience. What should be checked before using it?','Whether a supported modern component or declarative option better fits the target interface','Whether the table has a coalesce field','Whether the Update Set is Default','Whether every user has admin','UI technology support varies by interface, so choose the supported extension mechanism.','User Interface'],
[202,'How are Record Producer variables typically mapped to fields on the generated record?','Through variable field mapping and producer script logic','Through a Change Approval Definition','Through an ACL debug session','Through a source-control tag','Record Producers translate submitted variables into values on the target record.','User Interface'],
[203,'Which object gives a Record Producer script access to submitted producer variables?','producer','previous','action only','RESTResponseV2','The producer object exposes variable values during target-record creation.','Automation & Integration'],
[204,'What is the purpose of the Condition field on a UI Action?','Control when the action is available in the current context','Define a database index','Choose the current Update Set','Set the application version','The condition limits presentation or execution to intended records and users.','User Interface'],
[205,'Which TWO statements about UI Actions are correct? (Choose 2)','They can execute client-side logic when configured as Client','They can execute server-side logic using current and action','They replace table and field ACLs','They always run asynchronously','UI Actions can have client and server behavior but do not replace security controls.','User Interface',['They can execute client-side logic when configured as Client','They can execute server-side logic using current and action']],
[206,'A Client Script calls g_form.getReference() for a reference record. What implementation avoids blocking the browser?','Pass a callback function and process the result asynchronously','Place it inside a synchronous loop','Call current.update() afterward','Use a Before Query Business Rule in the browser','The callback form of getReference avoids a synchronous client request.','User Interface'],
[207,'Why should synchronous server calls from Client Scripts be avoided?','They block the browser and degrade the user experience','They automatically grant extra roles','They are stored in Update Sets as data','They cannot return strings','Asynchronous callbacks keep forms responsive while server work completes.','User Interface'],
[208,'A GlideAjax call returns no value although the Script Include runs. What should be verified?','The invoked method is client callable and returns the expected answer','The form has a Related List','The table has an auto-number','The source-control repository is public','GlideAjax requires an accessible callable method and an explicit returned result.','Automation & Integration'],
[209,'What can a UI Script provide?','Reusable client-side JavaScript available to supported pages','A server-side database table','An inbound REST endpoint','A Transform Map coalesce key','UI Scripts package reusable browser-side functions, subject to interface support.','User Interface'],
[210,'What is the safest response payload from a client-callable Script Include?','Only the minimum authorized data required by the client','Every field on every matching record','Credentials needed for the next call','Raw server stack traces','Least-data responses reduce exposure and client processing.','Security'],
[211,'Why are Create, Read, Write, and Delete ACLs evaluated separately?','Each database operation represents a distinct permission','Passing Read automatically grants every other operation','Delete access is controlled only by forms','Create and Write are the same operation','Separate operation rules support least privilege for different actions.','Security'],
[212,'An ACL condition references a field on the current record. What type of security does this support?','Record-sensitive authorization based on record data','Navigation ordering','Source-control protection','Import coalescing','ACL conditions can grant access only for records meeting specified criteria.','Security'],
[213,'A user may edit most fields but not the approval field. What should enforce this?','A field-level Write ACL on the approval field','A hidden module','A form section','A report filter','Field Write ACLs protect updates through forms, APIs, imports, and scripts that enforce security.','Security'],
[214,'A Before Query Business Rule restricts rows for a class of users. What is the key design concern?','Test all access paths and avoid using it as a careless substitute for clear ACL design','It runs only after records are displayed','It changes the table schema','It is a Client Script','Query rules alter returned data broadly and require careful security and performance testing.','Security'],
[215,'What should a custom application role represent?','A stable job capability required to use application features','A specific individual user','An Update Set state','A browser session','Capability-based roles are reusable and can be assigned through groups.','Security'],
[216,'A role includes another role. What is the intended benefit?','Build reusable permission hierarchies from smaller capabilities','Copy users between instances','Merge application scopes','Skip ACL evaluation','Role containment lets broader personas inherit narrower capabilities.','Security'],
[217,'A table must be accessible through web services only when explicitly allowed. Which setting is relevant in addition to ACLs?','The table Application Access web-service permission','The form view','The module order','The Update Source URL','Table application access can restrict web-service operations, while ACLs still authorize users.','Security'],
[218,'A script in another scope needs to insert into a custom table. Which table access permission is specifically required?','Can create','Can read only','Allow configuration','Allow UI actions','Cross-scope record insertion depends on the table’s create permission and runtime authorization.','Application Design'],
[219,'What does an application file Protection Policy help control after distribution?','Whether customers can view or modify protected application code','Which users can create records','Which imports use coalesce','Which module opens first','Protection policies govern visibility and modification of distributed intellectual property.','Application Management'],
[220,'What is the effect of a Protected Script Include in an installed application?','Its script is concealed to protect intellectual property','It becomes client-side automatically','It bypasses authentication','It cannot be called by its own application','Protected policy conceals source on subscriber instances while allowing supported execution.','Application Management'],
[221,'What can parm1 and parm2 carry when gs.eventQueue() raises an event?','Additional string context for event consumers','Two new ACL records','A source-control username and password','Two form views','Event parameters provide contextual values to Notifications or Script Actions.','Automation & Integration'],
[222,'Besides an event trigger, what can a Notification use to decide whether to send?','Record conditions and recipient configuration','A Transform Map only','The active application scope only','A table index','Notifications combine triggers with conditions, content, and recipients.','Automation & Integration'],
[223,'What is the purpose of a Notification Email Script?','Generate reusable dynamic message content on the server','Control form mandatory fields','Define an ACL','Create an Import Set table','Email Scripts render server-side content for notifications.','Automation & Integration'],
[224,'A monthly job must run on the actual last day of each month. What is safer than a fixed 31-day interval?','A condition or schedule that evaluates the calendar date at runtime','A 31-hour repeat interval','An onLoad Client Script','A UI Policy with Reverse if false','Calendar-aware scheduling handles months of different lengths.','Automation & Integration'],
[225,'Which TWO statements correctly compare Before and After Business Rules? (Choose 2)','Before rules can modify current before it is written','After rules are suitable for actions dependent on the completed write','After rules run in the user browser','Before rules should call current.update() to save current','Before changes participate in the write; After logic reacts once persistence completes.','Automation & Integration',['Before rules can modify current before it is written','After rules are suitable for actions dependent on the completed write']],
[226,'A flow should pause until a related approval reaches a required state. Which Flow Designer capability fits?','Wait for Condition','Create or Update Record only','Application Menu','UI Policy Action','Wait for Condition resumes automation when the selected record criteria are met.','Automation & Integration'],
[227,'A flow must perform the same action for every record returned by a lookup. What should it use?','For Each flow logic','A Display Business Rule','A table.none ACL','A module separator','For Each iterates over a collection data pill.','Automation & Integration'],
[228,'A production flow step can fail because an external service is unavailable. What should the design include?','Defined error handling, logging, and safe retry or escalation behavior','Unlimited silent retries','Hard-coded administrator credentials','A Client Script alert only','Operational automation must expose failures and handle recovery deliberately.','Automation & Integration'],
[229,'Which RESTMessageV2 capability sends a required HTTP header to the remote API?','setRequestHeader()','setDisplayValue()','addActiveQuery()','showFieldMsg()','setRequestHeader adds headers such as Accept or correlation identifiers.','Working with External Data'],
[230,'A successful REST response body contains JSON. What should server-side code do before using nested properties?','Parse the JSON and validate the expected structure','Execute the body as JavaScript','Store it as a user password','Assume every property exists','Controlled parsing and validation prevent malformed responses from breaking processing.','Working with External Data'],
[231,'Why use a Connection & Credential Alias in integration actions?','Separate endpoint and credential configuration from reusable integration logic','Make credentials visible to Client Scripts','Disable authentication','Store transactional records in source control','Aliases improve reuse, environment configuration, and secret governance.','Working with External Data'],
[232,'Which artifact identifies where import data originates and how it is loaded into a staging table?','A Data Source','A UI Policy','A Scripted REST resource response','A form view','Data Sources describe files, connections, and loading into Import Sets.','Working with External Data'],
[233,'What does the choice action on a Transform Map field map control?','How source values interact with target choice values','Whether the field is visible on a form','Which ACL operation runs','Which branch receives a commit','Choice action governs creation, rejection, or handling of unmapped choices.','Working with External Data'],
[234,'A transform row cannot be accepted because required identity data is missing. What should the transform logic do?','Reject or ignore the row with traceable error information','Insert a random target record','Disable every coalesce field','Commit the active Update Set','Invalid rows should be handled explicitly and remain diagnosable.','Working with External Data'],
[235,'What must occur before another instance can install a new scoped-application version from the Application Repository?','The new version must be published to the repository','A production incident must be closed','All ACLs must be removed','The target must clone the source database','Publishing makes the application version available to entitled instances.','Application Management'],
[236,'What should a meaningful source-control commit contain?','A coherent set of application-file changes with a descriptive message','Unrelated changes from every application','Production task records','User credentials','Focused commits improve review, history, and recovery.','Application Management'],
[237,'Why use the source-control stash capability before switching work context?','Temporarily preserve uncommitted application changes','Publish directly to production','Delete the repository history','Move incident data to Git','A stash protects incomplete local changes while the developer changes branches or context.','Application Management'],
[238,'A retrieved Update Set preview reports a collision with a local customization. What should happen next?','Review both changes and resolve the collision intentionally before commit','Commit immediately and ignore the preview','Delete the target application','Grant all users admin','Collision resolution prevents unintended overwrites and lost customization.','Application Management'],
[239,'A new application release depends on another plugin or application version. Where should this be managed?','In the application dependency configuration and release documentation','Only in a Client Script comment','In the form personalization of one user','As an Import Set row','Explicit dependencies help installation validate required components.','Application Management'],
[240,'Which TWO practices strengthen an application release gate? (Choose 2)','Run relevant ATF regression suites in a non-production environment','Review deployment preview results and documented dependencies','Develop and test directly in production','Ignore failed tests when the form opens','Automated regression and controlled deployment review reduce release risk.','Application Management',['Run relevant ATF regression suites in a non-production environment','Review deployment preview results and documented dependencies']]
];var L=['A','B','C','D'];rows.forEach(function(r){var q=qs.find(function(x){return x.id===r[0]}),correctTexts=Array.isArray(r[8])?r[8]:[r[2]],choices=r.slice(2,6),shift=(r[0]-1)%4,rot=choices.slice(shift).concat(choices.slice(0,shift));q.title=r[1];q.options=rot.map(function(t,i){return{id:L[i],text:t}});q.answer=correctTexts.map(function(t){return L[rot.indexOf(t)]});q.explanation='**[공개 기출 회상 포인트 재구성 · 공식 문서 검증]**\n'+r[6];q.domain=r[7];q.difficulty=r[0]%2===0||r[0]%3===0?'advanced':'applied';q.sourceType='community-recall-reconstructed';q.objective='cad-recall-'+r[0];q.confidence='high';q.verifiedAgainst='official-docs';q.releaseRisk=[201,209,214,217,220,224,233,237].includes(r[0])?'medium':'low'})})(window.CAD_QUESTIONS);
