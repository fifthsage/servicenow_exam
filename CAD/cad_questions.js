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
