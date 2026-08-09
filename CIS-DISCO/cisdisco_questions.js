window.CISDISCO_QUESTIONS = [
  {
    "id": 1,
    "title": "In Discovery, which condition causes a pattern to fail during discovery?",
    "options": [
      {
        "text": "No firewall is installed on the host",
        "id": "A"
      },
      {
        "text": "No Parse Variable operation is used",
        "id": "B"
      },
      {
        "text": "No pattern is attached to a classification",
        "id": "C"
      },
      {
        "text": "No CI Identifier exists",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "**[공식 샘플 기반]**\n분류(Classification)가 대상을 식별해도 연결된 Pattern이 없으면 실행할 탐색 로직이 없어 패턴 기반 Discovery가 진행되지 않습니다.\n\n**[Exam Keywords]**\nClassification, Pattern attachment"
  },
  {
    "id": 2,
    "title": "In which Discovery phase is the error ‘No credentials would authenticate, tried’ normally found?",
    "options": [
      {
        "text": "Port Scan",
        "id": "A"
      },
      {
        "text": "Classification",
        "id": "B"
      },
      {
        "text": "Identification",
        "id": "C"
      },
      {
        "text": "Exploration",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**[공식 샘플 기반]**\nClassification 단계는 열린 포트와 적절한 자격 증명을 사용하여 장치 유형과 접근 가능 여부를 확인합니다. 인증 가능한 Credential이 없으면 이 단계에서 오류가 나타납니다.\n\n**[Exam Keywords]**\nClassification, Credential affinity"
  },
  {
    "id": 3,
    "title": "How many CI Identifiers can be configured per CI class?",
    "options": [
      {
        "text": "One",
        "id": "A"
      },
      {
        "text": "Two",
        "id": "B"
      },
      {
        "text": "Five",
        "id": "C"
      },
      {
        "text": "Ten",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[공식 샘플 기반·레거시 Blueprint]**\n공식 공개 샘플의 정답은 One입니다. 최신 구현에서는 IRE의 Identification Rule과 Identifier Entry 구조를 함께 학습해야 합니다.\n\n**[Exam Keywords]**\nCI Identifier, Identification Rule, IRE"
  },
  {
    "id": 4,
    "title": "Which item should a customer always configure during a Discovery implementation?",
    "options": [
      {
        "text": "Change Management",
        "id": "A"
      },
      {
        "text": "Probes",
        "id": "B"
      },
      {
        "text": "Subnets",
        "id": "C"
      },
      {
        "text": "Credentials",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "**[공식 샘플 기반]**\nDiscovery가 대상 장치에 로그인해 상세 정보를 수집하려면 적절한 Credential 구성이 필수입니다. OOTB Probe/Pattern은 직접 수정하기보다 필요한 인증과 범위를 우선 구성합니다.\n\n**[Exam Keywords]**\nCredentials, authentication"
  },
  {
    "id": 5,
    "title": "What is the correct high-level order of horizontal Discovery phases?",
    "options": [
      {
        "text": "Port Scan → Classification → Identification → Exploration",
        "id": "A"
      },
      {
        "text": "Classification → Port Scan → Exploration → Identification",
        "id": "B"
      },
      {
        "text": "Identification → Classification → Port Scan → Exploration",
        "id": "C"
      },
      {
        "text": "Port Scan → Identification → Classification → Exploration",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nPCIE는 Port Scan, Classification, Identification, Exploration의 순서입니다. 먼저 살아 있는 IP와 서비스를 찾고, 장치 유형을 분류한 뒤 CI를 식별하고 상세 정보를 탐색합니다.\n\n**[Exam Keywords]**\nPCIE"
  },
  {
    "id": 6,
    "title": "Which component runs inside the customer network and securely executes Discovery work from the instance?",
    "options": [
      {
        "text": "MID Server",
        "id": "A"
      },
      {
        "text": "Service Portal",
        "id": "B"
      },
      {
        "text": "Discovery Dashboard",
        "id": "C"
      },
      {
        "text": "CMDB Workspace",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nMID Server는 고객 네트워크 내부에서 외부 시스템과 통신하고 Discovery 명령을 실행한 뒤 결과를 인스턴스로 반환합니다. 일반적으로 인스턴스에서 MID Server 방향의 인바운드 연결은 요구하지 않습니다.\n\n**[Exam Keywords]**\nMID Server, outbound HTTPS"
  },
  {
    "id": 7,
    "title": "Which queue carries work instructions and results between a ServiceNow instance and MID Servers?",
    "options": [
      {
        "text": "Event Queue",
        "id": "A"
      },
      {
        "text": "ECC Queue",
        "id": "B"
      },
      {
        "text": "Import Set",
        "id": "C"
      },
      {
        "text": "Workflow Queue",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "**[핵심 근거]**\nExternal Communication Channel(ECC) Queue는 인스턴스와 MID Server 사이의 명령(Output)과 결과(Input)를 전달합니다. Discovery 문제 해결 시 상태, Topic, Payload를 확인합니다.\n\n**[Exam Keywords]**\nECC Queue, input, output"
  },
  {
    "id": 8,
    "title": "What does Credential Affinity help Discovery do?",
    "options": [
      {
        "text": "Remember a working credential for a target and reuse it",
        "id": "A"
      },
      {
        "text": "Encrypt every CMDB field",
        "id": "B"
      },
      {
        "text": "Create a new MID Server automatically",
        "id": "C"
      },
      {
        "text": "Replace Identification Rules",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nCredential Affinity는 특정 대상에서 성공한 Credential 정보를 기억하여 이후 시도 횟수와 인증 부하를 줄입니다.\n\n**[Exam Keywords]**\nCredential Affinity"
  },
  {
    "id": 9,
    "title": "Which Discovery schedule field defines the network targets to scan?",
    "options": [
      {
        "text": "IP ranges",
        "id": "A"
      },
      {
        "text": "Reconciliation rules",
        "id": "B"
      },
      {
        "text": "Transform maps",
        "id": "C"
      },
      {
        "text": "Dictionary overrides",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nHorizontal Discovery 일정은 대상 IP range 또는 관련 범위를 지정합니다. 운영망 범위, 제외 대상, 실행 시간과 MID Server 선택을 함께 설계합니다.\n\n**[Exam Keywords]**\nDiscovery Schedule, IP Range"
  },
  {
    "id": 10,
    "title": "Why should Discovery schedules for large networks be staggered?",
    "options": [
      {
        "text": "To reduce simultaneous load on MID Servers and network devices",
        "id": "A"
      },
      {
        "text": "To disable CMDB identification",
        "id": "B"
      },
      {
        "text": "To bypass credentials",
        "id": "C"
      },
      {
        "text": "To force duplicate CIs",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n대규모 스캔을 분산하면 MID Server CPU·메모리, ECC Queue, 네트워크 장치의 동시 부하를 제어할 수 있습니다.\n\n**[Exam Keywords]**\nScheduling, load balancing"
  },
  {
    "id": 11,
    "title": "Which two capabilities can MID Server clusters provide? (Choose two.)",
    "options": [
      {
        "text": "Load balancing",
        "id": "A"
      },
      {
        "text": "Failover",
        "id": "B"
      },
      {
        "text": "Automatic CI certification",
        "id": "C"
      },
      {
        "text": "Browser-side scripting",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "**[핵심 근거]**\nMID Server Cluster는 여러 MID Server 사이에 작업을 분산하고 구성에 따라 장애 시 대체 실행을 지원합니다.\n\n**[Exam Keywords]**\nMID Server Cluster, load balancing, failover"
  },
  {
    "id": 12,
    "title": "What is the primary purpose of a Discovery Behavior?",
    "options": [
      {
        "text": "Control which functionality phases and probes run for selected ranges",
        "id": "A"
      },
      {
        "text": "Define user ACLs",
        "id": "B"
      },
      {
        "text": "Create catalog variables",
        "id": "C"
      },
      {
        "text": "Archive ECC Queue records",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nBehavior는 특정 IP 범위에서 어떤 Discovery 기능을 수행할지 조정합니다. 불필요한 탐색을 제한하거나 특정 장치 유형에 맞춘 동작을 적용할 때 사용합니다.\n\n**[Exam Keywords]**\nBehavior, Functionality"
  },
  {
    "id": 13,
    "title": "Which Pattern Designer feature lets an implementer execute a pattern interactively and inspect step results?",
    "options": [
      {
        "text": "Debug mode",
        "id": "A"
      },
      {
        "text": "Form Designer",
        "id": "B"
      },
      {
        "text": "Schema Map",
        "id": "C"
      },
      {
        "text": "Flow Context",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nPattern Designer Debug는 대상과 MID Server, Credential을 사용해 단계별 입력·출력과 변수를 확인하게 해줍니다.\n\n**[Exam Keywords]**\nPattern Debug"
  },
  {
    "id": 14,
    "title": "What is the purpose of a Parse Variable operation in a Discovery pattern?",
    "options": [
      {
        "text": "Extract structured values from command output or text",
        "id": "A"
      },
      {
        "text": "Create a user role",
        "id": "B"
      },
      {
        "text": "Encrypt a credential",
        "id": "C"
      },
      {
        "text": "Schedule a MID upgrade",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nParse Variable은 명령 결과나 텍스트에서 필요한 값을 구문 분석해 Pattern 변수로 저장합니다. Delimited text, regex 등 데이터 형태에 맞는 전략을 선택합니다.\n\n**[Exam Keywords]**\nParse Variable, parsing strategy"
  },
  {
    "id": 15,
    "title": "Which two items are commonly used by Pattern operations to pass data between steps? (Choose two.)",
    "options": [
      {
        "text": "Variables",
        "id": "A"
      },
      {
        "text": "Temporary tables",
        "id": "B"
      },
      {
        "text": "Attributes",
        "id": "C"
      },
      {
        "text": "Update Sets",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "**[핵심 근거]**\nPattern은 변수로 중간 값을 보관하고 CI 속성에 최종 수집 값을 매핑합니다. 각 단계의 입력·출력 범위를 구분해야 합니다.\n\n**[Exam Keywords]**\nVariables, attributes"
  },
  {
    "id": 16,
    "title": "What does an Identification Section in an application pattern primarily establish?",
    "options": [
      {
        "text": "The main CI and the values needed to identify it",
        "id": "A"
      },
      {
        "text": "The exam passing score",
        "id": "B"
      },
      {
        "text": "The Service Catalog category",
        "id": "C"
      },
      {
        "text": "The MID Server service account password",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nIdentification Section은 애플리케이션 CI 후보와 식별에 필요한 속성을 수집합니다. 이후 IRE가 기존 CI와 일치 여부를 판단합니다.\n\n**[Exam Keywords]**\nIdentification Section, IRE"
  },
  {
    "id": 17,
    "title": "What is the main role of a Connection Section in an application pattern?",
    "options": [
      {
        "text": "Create relationships between the discovered application and related CIs",
        "id": "A"
      },
      {
        "text": "Scan TCP ports",
        "id": "B"
      },
      {
        "text": "Assign roles to users",
        "id": "C"
      },
      {
        "text": "Activate a plugin",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nConnection Section은 애플리케이션과 호스트, 데이터베이스 또는 다른 구성요소 사이의 연결과 관계를 설정합니다.\n\n**[Exam Keywords]**\nConnection Section, relationship"
  },
  {
    "id": 18,
    "title": "When extending an out-of-box Discovery pattern, what is the preferred approach?",
    "options": [
      {
        "text": "Create an extension section",
        "id": "A"
      },
      {
        "text": "Directly rewrite every base pattern step",
        "id": "B"
      },
      {
        "text": "Disable Identification Rules",
        "id": "C"
      },
      {
        "text": "Modify the ECC Queue schema",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nExtension Section은 OOTB 콘텐츠의 업그레이드 가능성을 유지하면서 고객별 로직을 추가하는 안전한 방식입니다.\n\n**[Exam Keywords]**\nExtension Section, upgrade-safe customization"
  },
  {
    "id": 19,
    "title": "Which operation is most appropriate for running an operating-system command from a pattern?",
    "options": [
      {
        "text": "Command operation",
        "id": "A"
      },
      {
        "text": "Create ACL operation",
        "id": "B"
      },
      {
        "text": "Catalog operation",
        "id": "C"
      },
      {
        "text": "Notification operation",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nCommand operation은 대상 시스템에서 명령을 실행하고 결과를 다음 단계의 파싱 입력으로 제공합니다. 운영체제와 Credential 유형에 맞춰 사용합니다.\n\n**[Exam Keywords]**\nCommand operation"
  },
  {
    "id": 20,
    "title": "A pattern step works in Debug but fails in a scheduled discovery. What should be compared first?",
    "options": [
      {
        "text": "MID Server, credential, target, and parameters used by each run",
        "id": "A"
      },
      {
        "text": "Knowledge Base ownership",
        "id": "B"
      },
      {
        "text": "Catalog UI Policy",
        "id": "C"
      },
      {
        "text": "User theme preference",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nDebug와 Schedule의 실행 컨텍스트가 다르면 접근 경로, Credential affinity, 파라미터 차이로 결과가 달라질 수 있습니다.\n\n**[Exam Keywords]**\nDebug context, execution parameters"
  },
  {
    "id": 21,
    "title": "Which engine should Discovery use to identify and reconcile CI data before writing to the CMDB?",
    "options": [
      {
        "text": "Identification and Reconciliation Engine (IRE)",
        "id": "A"
      },
      {
        "text": "Workflow Engine",
        "id": "B"
      },
      {
        "text": "Report Engine",
        "id": "C"
      },
      {
        "text": "Notification Engine",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nIRE는 Identification Rule로 기존 CI를 찾고 Reconciliation Rule과 데이터 소스 권한을 적용해 중복과 무단 덮어쓰기를 방지합니다.\n\n**[Exam Keywords]**\nIRE, identification, reconciliation"
  },
  {
    "id": 22,
    "title": "What is the purpose of a CI Identification Rule?",
    "options": [
      {
        "text": "Define attributes used to determine whether an incoming CI already exists",
        "id": "A"
      },
      {
        "text": "Select a quiz answer",
        "id": "B"
      },
      {
        "text": "Start a Discovery schedule",
        "id": "C"
      },
      {
        "text": "Grant the admin role",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nIdentification Rule의 식별 항목은 들어오는 데이터가 기존 CI와 같은 대상인지 판단하는 속성 조합과 우선순위를 정의합니다.\n\n**[Exam Keywords]**\nIdentification Rule, duplicate prevention"
  },
  {
    "id": 23,
    "title": "What do Reconciliation Rules control?",
    "options": [
      {
        "text": "Which data sources may update specific CI attributes and with what precedence",
        "id": "A"
      },
      {
        "text": "Which ports are open",
        "id": "B"
      },
      {
        "text": "Which users can open the Service Portal",
        "id": "C"
      },
      {
        "text": "Which pattern steps are visible",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nReconciliation은 데이터 소스별로 어떤 CI 속성을 갱신할 수 있는지와 우선순위를 통제합니다. Identification과 목적을 혼동하지 않아야 합니다.\n\n**[Exam Keywords]**\nReconciliation Rule, data source precedence"
  },
  {
    "id": 24,
    "title": "Which table is the base table for configuration items?",
    "options": [
      {
        "text": "cmdb_ci",
        "id": "A"
      },
      {
        "text": "task",
        "id": "B"
      },
      {
        "text": "sys_user",
        "id": "C"
      },
      {
        "text": "discovery_status",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n`cmdb_ci`는 CI 클래스 계층의 기본 테이블입니다. 서버, 네트워크 장치, 애플리케이션 등 하위 클래스가 이를 확장합니다.\n\n**[Exam Keywords]**\ncmdb_ci, class hierarchy"
  },
  {
    "id": 25,
    "title": "Where can an administrator review completeness, correctness, and compliance for CMDB data?",
    "options": [
      {
        "text": "CMDB Health",
        "id": "A"
      },
      {
        "text": "Email Diagnostics",
        "id": "B"
      },
      {
        "text": "Service Catalog",
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
    "explanation": "**[핵심 근거]**\nCMDB Health는 Completeness, Correctness, Compliance 지표로 데이터 품질을 보여줍니다. Discovery 성공 여부와 CMDB 품질은 연결되지만 동일한 지표는 아닙니다.\n\n**[Exam Keywords]**\nCMDB Health, completeness, correctness, compliance"
  },
  {
    "id": 26,
    "title": "Which tool helps examine a CI class hierarchy, attributes, identification rules, and health?",
    "options": [
      {
        "text": "CI Class Manager",
        "id": "A"
      },
      {
        "text": "Flow Designer",
        "id": "B"
      },
      {
        "text": "Service Creator",
        "id": "C"
      },
      {
        "text": "Visual Task Board",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nCI Class Manager는 CMDB 클래스 구조와 속성, 식별 및 건전성 관련 구성을 한곳에서 확인하는 관리 도구입니다.\n\n**[Exam Keywords]**\nCI Class Manager"
  },
  {
    "id": 27,
    "title": "Which two outcomes indicate a healthy Discovery-to-CMDB implementation? (Choose two.)",
    "options": [
      {
        "text": "Duplicate CIs are minimized",
        "id": "A"
      },
      {
        "text": "Relationships are populated accurately",
        "id": "B"
      },
      {
        "text": "All credentials are shared with end users",
        "id": "C"
      },
      {
        "text": "Every subnet runs at the same time",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "**[핵심 근거]**\n정확한 식별로 중복을 줄이고 실제 인프라 관계를 올바르게 구성하는 것이 핵심 결과입니다. Credential 최소 권한과 일정 분산도 운영 원칙입니다.\n\n**[Exam Keywords]**\nData quality, relationships"
  },
  {
    "id": 28,
    "title": "During engagement planning, what should determine MID Server placement?",
    "options": [
      {
        "text": "Network segmentation, reachability, capacity, and security requirements",
        "id": "A"
      },
      {
        "text": "The administrator’s browser language",
        "id": "B"
      },
      {
        "text": "Knowledge article ratings",
        "id": "C"
      },
      {
        "text": "Catalog item price",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nMID Server는 대상망 접근성, 방화벽 구간, 예상 작업량, 고가용성, 보안 정책을 기준으로 배치합니다. 단순 서버 수만으로 정하지 않습니다.\n\n**[Exam Keywords]**\nMID sizing, placement, network segmentation"
  },
  {
    "id": 29,
    "title": "Which two items should be agreed with stakeholders before enabling production Discovery? (Choose two.)",
    "options": [
      {
        "text": "Authorized IP ranges and exclusions",
        "id": "A"
      },
      {
        "text": "Credential ownership and rotation process",
        "id": "B"
      },
      {
        "text": "Personal UI themes",
        "id": "C"
      },
      {
        "text": "Knowledge article font size",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "**[핵심 근거]**\n승인된 스캔 범위와 제외 대상, Credential 소유·보관·회전 절차는 보안 및 운영 합의의 핵심입니다.\n\n**[Exam Keywords]**\nScope, exclusions, credential governance"
  },
  {
    "id": 30,
    "title": "What is the best first step when a Discovery schedule produces no devices?",
    "options": [
      {
        "text": "Review Discovery Status, logs, and ECC Queue for the failed stage",
        "id": "A"
      },
      {
        "text": "Delete all CMDB records",
        "id": "B"
      },
      {
        "text": "Disable every firewall",
        "id": "C"
      },
      {
        "text": "Reclassify all CIs",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nDiscovery Status와 관련 로그, ECC Queue를 따라가면 Port Scan부터 Exploration까지 어느 단계에서 실패했는지 좁힐 수 있습니다.\n\n**[Exam Keywords]**\nDiscovery Status, troubleshooting"
  },
  {
    "id": 31,
    "title": "Why should Discovery credentials follow the principle of least privilege?",
    "options": [
      {
        "text": "To provide only the access required for supported discovery operations",
        "id": "A"
      },
      {
        "text": "To prevent all classification",
        "id": "B"
      },
      {
        "text": "To eliminate the MID Server",
        "id": "C"
      },
      {
        "text": "To bypass audit requirements",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n필요한 명령과 조회만 수행할 수 있는 권한을 부여하면 Credential 노출 시 위험을 줄이고 보안 감사를 충족할 수 있습니다.\n\n**[Exam Keywords]**\nLeast privilege, credential security"
  },
  {
    "id": 32,
    "title": "Which dashboard information is most useful for operationalizing Discovery?",
    "options": [
      {
        "text": "Schedule outcomes, device errors, MID health, and coverage trends",
        "id": "A"
      },
      {
        "text": "Only user login themes",
        "id": "B"
      },
      {
        "text": "Only catalog order totals",
        "id": "C"
      },
      {
        "text": "Only knowledge feedback",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n운영 단계에서는 성공률과 오류 유형, MID Server 상태, 네트워크 범위 커버리지를 지속적으로 추적해 장애와 사각지대를 개선합니다.\n\n**[Exam Keywords]**\nDiscovery dashboard, MID health, coverage"
  },
  {
    "id": 33,
    "title": "How does a MID Server normally communicate with its ServiceNow instance?",
    "options": [
      {
        "text": "It initiates outbound HTTPS, typically over TCP 443",
        "id": "A"
      },
      {
        "text": "The instance opens an inbound database connection to the MID Server",
        "id": "B"
      },
      {
        "text": "It uses only inbound SNMP traps",
        "id": "C"
      },
      {
        "text": "It requires a direct JDBC connection to the instance database",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nMID Server는 고객망에서 인스턴스로 outbound HTTPS 연결을 시작하고 ECC Queue를 polling합니다. 이 구조는 인스턴스가 고객망으로 직접 인바운드 연결할 필요를 줄입니다.\n\n**[Exam Keywords]**\nMID Server, outbound HTTPS, TCP 443"
  },
  {
    "id": 34,
    "title": "What is the direction of ECC Queue output and input records during Discovery?",
    "options": [
      {
        "text": "Output sends instructions to the MID Server; input returns results to the instance",
        "id": "A"
      },
      {
        "text": "Input sends instructions; output returns results",
        "id": "B"
      },
      {
        "text": "Both directions contain only CMDB commits",
        "id": "C"
      },
      {
        "text": "There is no directional distinction",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\n공식 Discovery 문서에서 Output은 MID Server가 처리할 작업 지시이고 Input은 MID Server가 수집해 인스턴스로 돌려보낸 결과입니다.\n\n**[Exam Keywords]**\nECC Queue, output, input"
  },
  {
    "id": 35,
    "title": "Why would an administrator assign credential aliases to a Discovery schedule?",
    "options": [
      {
        "text": "To restrict the schedule to an approved set of credentials",
        "id": "A"
      },
      {
        "text": "To expose every credential to every schedule",
        "id": "B"
      },
      {
        "text": "To replace MID Server validation",
        "id": "C"
      },
      {
        "text": "To disable credential affinity",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "**[핵심 근거]**\nCredential Alias를 일정에 지정하면 해당 Discovery 작업에서 시도할 수 있는 Credential을 제한할 수 있어 고권한 Credential의 불필요한 노출을 줄입니다.\n\n**[Exam Keywords]**\nCredential Alias, Discovery Schedule"
  }
];
