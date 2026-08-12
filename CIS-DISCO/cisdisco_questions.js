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
        "text": "Define user ACLs for Discovery administration",
        "id": "B"
      },
      {
        "text": "Create catalog variables for a service request",
        "id": "C"
      },
      {
        "text": "Archive ECC Queue records after command processing",
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
        "text": "Scan TCP ports before the application has been identified",
        "id": "B"
      },
      {
        "text": "Assign platform roles to users discovered on the host",
        "id": "C"
      },
      {
        "text": "Activate a plugin required by the application software",
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
        "text": "Select the correct answer option in a practice quiz",
        "id": "B"
      },
      {
        "text": "Start a Discovery schedule for a configured IP range",
        "id": "C"
      },
      {
        "text": "Grant the admin role to a Discovery operator",
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
(function(){var L=['A','B','C','D'];var rows=[
[36,'What does a Discovery schedule determine?','Targets, timing, discovery type, and MID Server selection','Portal colors and themes','Incident approval order','Exam registration status','Discovery Schedule은 대상 범위, 실행 시점, Scan 유형과 MID Server 선택을 제어합니다.'],
[37,'Which scan type finds active IP addresses without credentials but does not update the CMDB?','IP address scan','Configuration item scan','Service scan','Cloud resource scan','IP Address Scan은 활성 주소와 장치 이력을 찾지만 Credential 기반 CI 갱신은 수행하지 않습니다.'],
[38,'Which discovery type uses identifiers to match devices and update CIs?','Configuration items','IP addresses only','Certificates only','Service Mapping entry points only','Configuration Items 유형은 식별자를 사용해 기존 CI를 찾고 CMDB를 갱신합니다.'],
[39,'What is Quick Discovery designed for?','Running configuration discovery against a single IP address','Scanning every enterprise subnet at once','Creating application scopes','Correlating alerts','Quick Discovery는 일정 없이 한 IP의 CI Discovery를 즉시 시험하거나 실행할 때 사용합니다.'],
[40,'What is a prerequisite for a MID Server to run Discovery commands?','It must be installed, Up, validated, and able to reach the target','It must host the ServiceNow database','It must be a domain controller','It must use a browser session','MID Server가 정상·검증 상태이고 인스턴스 및 대상 네트워크에 접근 가능해야 합니다.'],
[41,'Why configure IP ranges or capabilities on MID Servers?','To support appropriate automatic MID Server selection','To create user roles','To set CI reconciliation priority','To design a portal','범위와 Capability 정보는 해당 대상과 작업에 적합한 MID Server를 자동 선택하는 데 사용됩니다.'],
[42,'When should a specific MID Server cluster be selected?','When work must use members of a defined load-balancing or failover cluster','When no MID Server exists','When creating a client script','When importing users','Cluster 선택은 정의된 구성원 내에서 부하 분산이나 장애 조치가 필요할 때 적합합니다.'],
[43,'What is a Discovery behavior useful for?','Coordinating multiple MID Servers, protocols, credentials, or domains in one schedule','Changing CI form labels displayed to Discovery operators','Creating Event Management alerts from Discovery Status records','Packaging scoped apps for migration between instances','Behavior는 복잡한 범위에서 프로토콜·MID Server·Credential 사용 방식을 정의합니다.'],
[44,'What happens during the port scanning phase?','Discovery checks target ports to identify active protocols or services','IRE reconciles every CI attribute','Patterns create application relationships','A service owner validates the map','Port Scan은 열린 포트와 접근 가능한 프로토콜의 단서를 수집합니다.'],
[45,'What is the main goal of classification?','Determine the device or application type and select suitable discovery logic','Choose the visualization style for the resulting Discovery report','Approve a Change before the target device can be identified','Create a user account representing the classified device','Classification은 대상 유형을 판별하고 실행할 Probe 또는 Pattern을 결정합니다.'],
[46,'During which phases are patterns primarily used in horizontal Discovery?','Identification and Exploration','Scanning and browser rendering','Incident and Change','Import and Transform','Pattern은 Horizontal Discovery의 Identification과 Exploration 단계에서 CI를 식별하고 상세를 수집합니다.'],
[47,'What does exploration collect after a CI is identified?','Detailed attributes and relationships','Exam scores','User preferences','Catalog prices','Exploration은 대상 CI의 상세 속성과 연관 구성요소·관계를 수집합니다.'],
[48,'What is the ECC Queue used for?','Exchange commands and results between the instance and MID Server','Store all CMDB relationships','Hold application source control','Render Discovery dashboards','ECC Queue는 인스턴스와 MID Server 사이의 작업과 결과 메시지를 운반합니다.'],
[49,'Which ECC Queue direction normally carries work from the instance to a MID Server?','Output','Input','Ready only','Processed only','인스턴스가 MID Server에 보내는 명령은 일반적으로 Output 레코드로 전달됩니다.'],
[50,'Where should an implementer start when a Discovery run has failures?','Discovery Status, device results, phase logs, and ECC Queue evidence','The portal homepage without opening Discovery execution details','A user survey unrelated to the failed target and phase','A Service Catalog request that contains no Discovery evidence','Discovery Status에서 실패 대상과 단계를 찾고 관련 로그와 ECC 메시지를 추적합니다.'],
[51,'Why test credentials before a large schedule runs?','Bad credentials are a major cause of failures and waste scan capacity','Credentials change CI colors','Testing creates every CI manually','It disables encryption','대규모 실행 전 Credential을 검증하면 반복 인증 실패와 불필요한 부하를 줄일 수 있습니다.'],
[52,'Which credential design follows security best practice?','Dedicated least-privilege accounts with ownership and rotation','Shared personal administrator accounts','Passwords embedded in patterns','One unrestricted credential for every domain','전용 최소 권한 계정과 소유·회전 정책으로 Discovery 접근을 관리합니다.'],
[53,'What is credential affinity intended to improve?','Reuse a credential known to work for a target','Increase user session time','Select report filters','Create application scopes','Credential Affinity는 대상에서 성공한 Credential 정보를 활용해 불필요한 인증 시도를 줄입니다.'],
[54,'What should be used to prevent approved schedules from scanning forbidden addresses?','IP exclusion ranges or a global excludes list','A client UI policy','An email notification','A catalog variable','제외 목록으로 민감하거나 승인되지 않은 주소가 어떤 Schedule에서도 스캔되지 않도록 합니다.'],
[55,'Why stagger large Discovery schedules?','To reduce MID Server, network, target, and instance processing contention','To create duplicate CIs','To disable classification','To change credentials automatically','대형 작업을 분산하면 MID·네트워크·대상 시스템과 인스턴스의 동시 부하를 제어할 수 있습니다.'],
[56,'What is the benefit of Shazzam load distribution across a cluster?','Large IP scanning work can be divided among MID Servers','Every target receives admin access','Patterns no longer need parsing','The CMDB is bypassed','큰 IP 범위를 여러 MID Server에 분할하여 Port Scan 처리량을 높일 수 있습니다.'],
[57,'Why should discovered data pass through IRE?','To identify existing CIs consistently and honor reconciliation controls','To bypass CMDB governance','To create arbitrary duplicates','To render client scripts','IRE는 동일 CI 판단과 데이터 소스별 속성 갱신 권한을 일관되게 적용합니다.'],
[58,'What does a partial payload mechanism help handle?','Large discovery results that must be processed without losing partial information','Portal translations applied to Discovery Status messages','Target credentials stored directly in a discovery payload','Certification attempts made by the Discovery implementer','대형 Payload 처리 중 일부 정보를 잃지 않도록 분할된 IRE 처리를 지원합니다.'],
[59,'What should be checked when the same device is repeatedly inserted as new CIs?','Identifiers, source values, class selection, and IRE processing results','The layout of the Discovery dashboard without examining payload identity','An inbound email watermark unrelated to CI creation','The preview of an Update Set that contains no identification changes','중복 생성은 식별 규칙과 실제 Payload 값, 클래스, IRE 결과를 함께 조사해야 합니다.'],
[60,'What defines a production-ready Discovery operation?','Governed scope, healthy MID Servers, secure credentials, monitored schedules, CMDB quality checks, and remediation ownership','One successful scan without repeatability or failure monitoring','Unlimited IP ranges without ownership or capacity controls','Execution without error monitoring or remediation responsibility','Manual CI creation after every run instead of correcting discovery defects','범위·MID·Credential·Schedule·CMDB 품질과 오류 대응 소유권이 운영 체계로 정착되어야 합니다.'],
[61,'What is the safest way to add custom logic to an out-of-box pattern?','Create an extension section instead of editing the identification section','Overwrite the base pattern after every upgrade','Embed credentials in a command step','Disable pattern synchronization','Extension Section은 기본 Identification Section을 직접 변경하지 않고 사용자 로직을 추가하므로 업그레이드 대응이 쉽습니다.'],
[62,'What does a shared library provide to Discovery patterns?','A reusable collection of pattern steps','A list of MID Server passwords','A replacement for the ECC Queue','A CMDB deletion policy','Shared Library는 여러 Pattern 또는 Extension Section에서 공통 Discovery 단계를 재사용하게 합니다.'],
[63,'Which pattern operation is appropriate for extracting values from command output?','Parse Variable','Create Connection','Set Parameter Value only','Terminate Process','Parse Variable은 이전 단계의 문자열 결과에서 구분자나 정규식 등을 이용해 필요한 값을 추출합니다.'],
[64,'When is the Parse File operation useful?','When a target file must be read and its contents parsed','When an IP range must be excluded','When a MID Server must be validated','When a CI must be retired','Parse File은 대상 시스템의 파일 내용을 읽고 구조화된 값으로 추출할 때 사용합니다.'],
[65,'Why use a temporary table inside a pattern?','To hold and transform rows of discovered data between steps','To permanently replace a CMDB class','To store encrypted credentials','To schedule the MID Server service','Pattern의 Temporary Table은 반복되는 행 데이터를 단계 간에 저장·필터·변환하는 작업 공간입니다.'],
[66,'What does a pattern precondition control?','Whether a step or section runs for the current data','Which user can open the portal','How long a CI remains retired','Which exam question appears next','Precondition은 현재 변수와 대상 조건을 평가해 특정 Step 또는 Section의 실행 여부를 결정합니다.'],
[67,'Why should Pattern Designer Debug use a representative target?','To validate commands, parsing, and variables against realistic output','To avoid using a MID Server','To bypass authentication permanently','To publish the pattern automatically','대표 대상에서 Debug해야 실제 명령 결과, 권한, 출력 형식과 Parsing을 함께 검증할 수 있습니다.'],
[68,'A command succeeds but a later pattern step receives an empty value. What should be inspected first?','The output variable mapping and parsing expression','The workspace theme used to display Pattern Debug results','The CI retirement rule applied after identification','The certification configuration used by the implementer','명령 성공 후 값이 비었다면 단계 Output이 올바른 변수에 저장되었는지와 Parsing 식이 실제 출력과 맞는지 확인합니다.'],
[69,'What is the purpose of an application pattern Identification Section?','Find and identify the application CI represented by the section','Select a Discovery schedule time','Encrypt an SNMP credential','Approve a CMDB health task','Identification Section은 수집한 속성으로 대상 Application CI를 구성하고 IRE가 동일 CI를 판단할 정보를 제공합니다.'],
[70,'What does a Connection Section normally do in an application pattern?','Follow a process or network connection to another component','Create an administrator account','Change a MID Server cluster type','Delete stale device history','Connection Section은 현재 구성요소에서 프로세스나 연결 정보를 따라 다음 CI 탐색으로 이어갑니다.'],
[71,'Why avoid hard-coded hostnames and credentials in patterns?','They reduce portability and create security and maintenance risks','They improve automatic classification','They are required by IRE','They enable failover clustering','대상별 값을 Pattern에 고정하면 환경 재사용이 어렵고 Credential 노출 및 변경 관리 위험이 커집니다.'],
[72,'What should be checked when an out-of-box pattern stops working after target software changes?','The target output format, commands, permissions, and current pattern version','Only the visualization style of the Discovery dashboard','Only the display name of the Discovery Schedule','The number of portal cards shown to the current user','대상 버전 변경은 명령 지원, 권한과 출력 형식을 바꿀 수 있으므로 현재 Pattern 버전과 함께 비교해야 합니다.'],
[73,'What is the principal role of the Shazzam probe?','Scan target IP addresses for open ports','Reconcile CI attributes','Create application service maps','Rotate credentials','Shazzam은 대상 IP의 Port를 스캔해 활성 장치와 사용 가능한 프로토콜의 초기 단서를 찾습니다.'],
[74,'How does an IP service definition influence Discovery?','It maps ports and protocols to services used during scanning and classification','It defines CI reconciliation priority','It creates a cloud account','It validates MID Server certificates','IP Service는 Port와 Protocol 정보를 정의해 Port Scan 결과 해석과 후속 Classification 선택에 사용됩니다.'],
[75,'What can a classifier launch after matching a device type?','The appropriate identification probe or pattern','A catalog workflow','A change approval','A CMDB deletion job','Classifier는 수집된 응답과 조건으로 유형을 판단한 후 적절한 Identification 로직을 실행합니다.'],
[76,'A device is alive but remains unclassified. What is the best next check?','Open ports, classifier criteria, protocol responses, and credentials','Reconciliation precedence only','Catalog variables','User notification preferences','Alive but unclassified는 Port 응답은 있으나 Classifier가 일치하지 않은 상태이므로 Protocol 응답과 분류 조건을 점검합니다.'],
[77,'What does “Classified, could not identify” indicate in device history?','Classification succeeded but no existing or new CI could be identified','The target did not respond to any port','The MID Server was never selected','The CI was successfully updated','장치 유형 판별은 성공했지만 Identification 단계가 CI를 찾거나 생성하지 못한 상태입니다.'],
[78,'What does “Identified, not updating CI” indicate?','Discovery matched a CI but intentionally did not update it','Port scanning failed completely','The target was excluded','No classifier matched','CI 식별은 성공했지만 현재 로직이나 조건에 따라 CMDB 갱신을 수행하지 않은 상태입니다.'],
[79,'Where can an operator see per-device completion status and issue links for a run?','The Devices related list on the Discovery Status record','The system dictionary only','The service catalog homepage','The update set list','Discovery Status의 Devices 목록은 대상별 진행·완료 상태와 Issue 상세 진입점을 제공합니다.'],
[80,'Why can a Discovery Status show an issue even when the CI was ultimately updated?','Any failed probe can be recorded as an issue despite later success','Successful CIs are always marked failed','IRE deletes all successful results','The schedule was inactive','중간 Probe 하나가 실패해도 다른 경로로 최종 갱신될 수 있으며, 실패 기록 자체는 Issue로 남습니다.'],
[81,'What is required for automatic MID Server selection by IP range?','An Up and validated MID Server with Discovery capability and a matching configured range','A MID Server with no application assigned','A browser logged in as admin','A duplicate CI identifier','자동 선택은 상태·검증, Application Capability와 대상 IP를 포함하는 Range 설정을 함께 평가합니다.'],
[82,'What happens when a schedule explicitly selects one MID Server that belongs to a cluster?','Only that MID Server is used; cluster selection is not invoked','Every cluster member always runs','The schedule becomes a cloud schedule','The instance ignores the selection','Specific MID Server를 선택하면 해당 Server만 사용하며 소속 Cluster의 부하 분산·장애 조치 선택은 적용되지 않습니다.'],
[83,'How does a load-balancing MID Server cluster choose among available members for a schedule?','It can select an Up member to distribute work','It always selects the highest-order paused member','It sends every command to all members','It uses the CI reconciliation priority','Load-balancing Cluster는 사용 가능한 Up 구성원 중에서 작업을 분산할 Server를 선택합니다.'],
[84,'How does a failover MID Server cluster prioritize members?','It prefers an Up member according to the configured order','It randomly deletes one member','It requires every member to process each command','It uses credential affinity as the order','Failover Cluster는 구성된 Order를 기준으로 정상 구성원을 우선 선택해 대체 경로를 제공합니다.'],
[85,'What is a key limitation when Quick Discovery selects one member of a load-balanced cluster?','Another cluster member is not automatically substituted if that selected MID becomes unavailable','Quick Discovery cannot use IPv6','Quick Discovery always scans the entire subnet','It cannot update the CMDB','Quick Discovery가 선택한 단일 MID가 중단되면 해당 실행에서 다른 Cluster 구성원으로 자동 재할당되지 않습니다.'],
[86,'When is a Discovery Behavior preferable to a single MID selection?','When one schedule needs multiple MID Servers, protocols, credentials, or domains','When only one IP is tested once','When no MID Server can reach the target','When editing a CI form','Behavior는 복수 MID·Protocol·Credential·Domain을 하나의 Schedule에서 조정해야 할 때 사용합니다.'],
[87,'If a Discovery Behavior is selected, what happens to the single MID Server field?','It is not used because the behavior determines task assignment','It becomes the only required target','It stores the CMDB class','It becomes a credential record','Behavior가 작업별 MID 배정을 정의하므로 단일 MID Server 선택 필드는 사용되지 않습니다.'],
[88,'What should be confirmed before placing a MID Server behind a network firewall?','Outbound instance access and required target protocol reachability','That all inbound internet ports are open','That the MID hosts the instance database','That credentials are stored in patterns','MID는 인스턴스로의 통신과 대상별 SSH·WMI·SNMP 등 필요한 경로를 확보해야 합니다.'],
[89,'Why monitor MID Server queue depth and processing time?','To detect capacity bottlenecks before schedules accumulate delays','To calculate CI class inheritance','To define application patterns','To approve cloud credentials','Queue 적체와 처리 시간 증가는 MID 용량이나 동시 Schedule 부하의 병목을 보여줍니다.'],
[90,'What is the operational value of staggering schedules by network segment?','It controls concurrent load and isolates failures by scope','It disables IRE','It forces all targets through one credential','It removes the need for monitoring','Segment별 분산 실행은 부하를 제어하고 실패 범위를 좁혀 운영 분석을 쉽게 합니다.'],
[91,'What does the Max run time field protect against?','A schedule continuing beyond its acceptable execution window','A CI receiving an identifier','A pattern using a shared library','A credential alias being selected','Max run time은 Discovery가 허용된 운영 시간을 넘겨 다음 작업이나 업무 시간에 영향을 주는 것을 제한합니다.'],
[92,'What can a Discovery schedule attribute do?','Set selected CI field values such as location for discovered targets','Change the MID Server password','Modify the exam duration','Replace all identification rules','Schedule·Range 수준 Attribute를 사용해 발견된 CI에 Location 같은 관리 값을 적용할 수 있습니다.'],
[93,'What is the result of a Networks discovery scan?','IP network records and network masks populated from routers and layer-3 switches','Only a list of browser sessions','Application source code','A catalog request hierarchy','Networks 유형은 Router와 Layer 3 Switch를 탐색해 IP Network CI와 Network Mask 정보를 갱신합니다.'],
[94,'What is a Serverless Discovery schedule intended to find?','CIs that do not require discovery on a host or use an already-known proxy host','Only powered-off MID Servers','Only user devices with agents','Only duplicated CMDB records','Serverless Discovery는 Host에 직접 실행하지 않거나 CMDB에 알려진 Proxy Host를 통해 찾는 리소스를 대상으로 합니다.'],
[95,'Which schedule type is used to discover certificates from URLs?','Certificates with URL Certificate Discovery','IP addresses only without URL endpoints','Networks defined by a CIDR address range','Service only through a mapped application entry point','Certificates 유형은 개별 URL Scan을 통해 Certificate CI와 관련 정보를 탐색합니다.'],
[96,'What is the difference between an IP address scan and a CI scan?','An IP scan records active-address history without CMDB updates; a CI scan identifies and updates CIs','Both always create identical CIs in the CMDB','Only an IP scan uses Shazzam for network reachability','A CI scan never uses credentials for target authentication','IP Address Scan은 비인증 가시성 확인용이고 Configuration Items Scan은 Credential과 Identifier로 CMDB를 갱신합니다.'],
[97,'Why use a global IP excludes list?','To prevent prohibited addresses from being scanned by Discovery schedules','To define credential priority','To create duplicate CIs','To select a cloud provider','Global Excludes는 여러 Schedule에 공통으로 적용되는 금지 대상을 중앙 통제합니다.'],
[98,'A credential alias is assigned to a schedule. Which credentials can that schedule use?','Credentials associated with the permitted alias according to its enforcement behavior','Every credential in the instance without restriction','Only credentials embedded in patterns','No credentials at all','Schedule의 Credential Alias는 시도 가능한 Credential 범위를 승인된 Alias 연결 항목으로 제한합니다.'],
[99,'In what order does a MID Server commonly narrow credential attempts?','Affinity, then credential alias or tag restrictions as configured','Portal role, then report color','CI age, then incident priority','Schedule name only','Discovery는 성공 이력인 Affinity와 Alias·Tag 제한을 이용해 대상에 시도할 Credential을 좁힙니다.'],
[100,'Why test a credential from the MID Server that will run Discovery?','Authentication and network reachability can differ by MID host and segment','Credential tests update every CI','It permanently stores the password on the target','It bypasses ACLs','실행 MID 기준으로 시험해야 해당 Host의 경로, Domain, 권한과 인증 방식이 실제 Schedule 조건과 일치합니다.'],
[101,'What does an IRE identification rule determine?','Whether incoming attributes match an existing CI or require a new CI','Which MID Server scans a subnet','Which ports Shazzam opens','When a schedule runs','Identification Rule은 Class별 Identifier Entry를 평가해 Payload가 기존 CI와 같은 대상을 나타내는지 결정합니다.'],
[102,'What is an identifier entry?','An ordered set of attributes or related items used to identify a CI','A MID Server log level','A Discovery schedule interval','A portal navigation item','Identifier Entry는 CI 고유성 판단에 사용할 속성 또는 관련 항목 조건과 우선순위를 정의합니다.'],
[103,'Why does identifier entry order matter?','IRE evaluates identification options in their configured priority sequence','It determines MID Server memory','It changes the ECC Queue direction','It selects a dashboard widget','여러 식별 방안이 있을 때 Order가 어떤 Entry를 먼저 평가할지 결정합니다.'],
[104,'What is an inclusion rule in CI identification used for?','Limit which existing CIs are eligible for matching','Include every credential in a schedule','Select all MID Servers','Bypass reconciliation','Inclusion Rule은 Identification 시 비교 대상으로 포함할 기존 CI 범위를 제한합니다.'],
[105,'What does a reconciliation rule protect?','CI attributes from updates by unauthorized or lower-priority data sources','MID Server installation files','Discovery schedule names','Pattern debug sessions','Reconciliation Rule은 Data Source별 속성 갱신 권한과 우선순위를 적용해 신뢰도 높은 값을 보호합니다.'],
[106,'What is the purpose of the IRE Identification Simulator?','Test a payload against identification logic without committing normal production changes','Run a full subnet scan against every configured IP range','Validate a MID Server installer and its Java prerequisites','Create an incident SLA for a discovered CI class','Identification Simulator는 구성한 Payload가 어떤 CI와 일치하고 어떤 규칙을 타는지 사전 분석합니다.'],
[107,'What can cause IRE to create a duplicate CI even when the device already exists?','Missing or inconsistent identifier values in the incoming payload or existing CI','A healthy MID Server with validated instance communication','A valid reconciliation rule with defined source precedence','A staggered schedule that distributes scanning workload','기존·신규 데이터의 Serial Number 등 식별값이 누락되거나 형식이 다르면 동일 CI 매칭이 실패할 수 있습니다.'],
[108,'Why is CI class selection important before identification?','Identification rules are evaluated in the context of the target class hierarchy','It changes the Discovery schedule time','It selects a portal language','It determines the MID Java version','잘못된 Class로 Payload가 전달되면 기대한 Identification Rule이 적용되지 않아 오식별이나 중복이 발생할 수 있습니다.'],
[109,'What does CMDB completeness measure?','Whether required and recommended CI attributes are populated','Whether every port is open','Whether all schedules run simultaneously','Whether every CI has an incident','Completeness는 관리에 필요한 필수·권장 속성이 CI에 충분히 채워졌는지 평가합니다.'],
[110,'What does CMDB correctness help identify?','Data issues such as stale, duplicate, or orphaned CIs','Only missing user passwords','Only failed CAB approvals','Only portal rendering errors','Correctness는 Stale, Duplicate, Orphan 관계 등 실제 상태와 맞지 않을 가능성이 있는 데이터를 점검합니다.'],
[111,'What does CMDB compliance evaluate?','Whether CI data conforms to configured data policies and standards','Whether a MID Server can ping the instance','Whether credentials are encrypted','Whether a pattern has four steps','Compliance는 CI 데이터가 조직이 정의한 값, 형식과 정책 기준을 따르는지 평가합니다.'],
[112,'Why review last discovered timestamps?','To find CIs that may be stale because they have not been observed recently','To select answer positions','To rotate portal banners','To create credential aliases','Last discovered는 Data Source가 CI를 마지막으로 확인한 시점으로 Stale 후보 판단에 중요한 근거입니다.'],
[113,'What should happen before deleting CIs that Discovery no longer finds?','Apply governed stale-CI and retirement policies with ownership review','Delete them immediately after one missed run','Disable IRE','Remove every relationship manually first','일시적 접근 실패와 실제 폐기를 구분하도록 Stale 기준, 소유자 검토와 Retirement 절차를 적용해야 합니다.'],
[114,'Why are CI relationships important in Discovery results?','They provide dependency and topology context beyond standalone attributes','They replace every identification rule','They store MID Server credentials','They determine exam duration','관계는 Server·Application·Network 구성요소의 의존 구조를 표현해 영향 분석과 서비스 가시성을 제공합니다.'],
[115,'What is the first response to a sudden increase in Discovery errors across many schedules?','Correlate errors by MID Server, credential, network segment, phase, and recent change','Delete all affected CIs','Create broader admin credentials immediately','Disable monitoring','공통 MID·Credential·구간·단계와 최근 변경을 묶어 보면 광범위 장애의 공통 원인을 빠르게 좁힐 수 있습니다.'],
[116,'What does the Discovery Admin Workspace Error Framework help operators do?','Aggregate, prioritize, diagnose, and remediate recurring Discovery errors','Design Service Catalog items for requesting Discovery access','Approve Change Requests associated with failed schedules','Create user groups for every Discovery error category','Error Framework은 반복 오류를 유형과 영향별로 모아 원인 분석 및 개선 작업을 관리하게 합니다.'],
[117,'How does Cloud Discovery differ from traditional IP-based horizontal Discovery?','It can use cloud service accounts and provider APIs to discover cloud resources and relationships','It never writes to the CMDB','It requires every resource to have a public IP','It uses only browser scripts','Cloud Discovery는 Provider 계정·API를 활용해 IP Scan만으로 알기 어려운 Cloud Resource와 관계를 수집합니다.'],
[118,'When can a Service Graph Connector be preferable to native cloud patterns?','When rapidly ingesting governed data from an existing supported source is the main need','When running shell commands on every host is mandatory','When no source system exists','When bypassing IRE is required','Service Graph Connector는 기존 관리 Source의 데이터를 표준화해 빠르게 수집하는 용도에 적합하며 Pattern은 더 동적인 탐색에 강점이 있습니다.'],
[119,'What is a key governance concern when both Discovery and a connector update the same CI class?','Identification consistency and reconciliation precedence between data sources','Portal font selection','The number of MID Server dashboards','Exam registration status','복수 Source가 같은 CI를 갱신하면 동일 식별 기준과 속성별 Reconciliation 우선순위를 설계해야 충돌을 막을 수 있습니다.'],
[120,'A Discovery pilot meets its scan-success target but creates unreliable CI relationships. Is it ready for production?','No; relationship accuracy is part of CMDB acceptance and must be remediated','Yes; scan success is the only acceptance criterion','Yes; relationships never affect downstream operations','No; Discovery should collect attributes only','Target 접근 성공만으로는 충분하지 않으며 CI와 관계가 실제 구조를 정확히 표현해야 영향 분석과 Service 운영에 사용할 수 있습니다.'],
[121,'A pattern must collect a value only on Linux hosts. What is the best design?','Use a condition or precondition based on the discovered operating system','Duplicate the entire pattern for every Linux host','Hard-code every Linux IP address','Run the step on all targets and ignore failures','OS 조건을 Precondition으로 두면 지원 대상에서만 단계가 실행되어 불필요한 오류를 막습니다.'],
[122,'A command returns one row per installed package. How should a pattern preserve the rows?','Parse the output into a temporary table','Concatenate all rows into the CI name','Create one credential per row','Write the raw output directly to the ECC Queue state','반복 행은 Temporary Table로 구조화해야 각 Package의 이름·버전 값을 안정적으로 반복 처리할 수 있습니다.'],
[123,'Which pattern approach best handles two valid command-output formats?','Use conditional parsing branches that recognize each format','Assume the older format forever','Disable the newer target version','Create duplicate CIs for the second format','출력 Signature를 판별하는 조건 분기를 두면 버전별 형식을 명시적으로 처리할 수 있습니다.'],
[124,'What should a pattern do before creating a relationship to a referenced CI?','Ensure both endpoint CIs are identified with reliable attributes','Create the relationship using display names only','Bypass IRE for both CIs','Delete existing relationships first','관계의 양 끝 CI가 안정적으로 식별되어야 잘못된 대상이나 중복 관계 생성을 막을 수 있습니다.'],
[125,'Why normalize command output before applying a regular expression?','To reduce variation from whitespace, case, or line endings','To increase credential privileges','To change the MID Server status','To select a Discovery schedule','공백·대소문자·개행 차이를 정규화하면 동일 의미의 출력이 Parsing 실패로 이어지는 위험이 줄어듭니다.'],
[126,'A pattern step needs a value collected in an earlier section. What should be used?','A properly scoped pattern variable or parameter','A browser cookie','A hard-coded global system property for each host','An incident work note','Pattern Variable과 Parameter는 단계·Section 사이에서 수집 값을 명시적으로 전달하는 수단입니다.'],
[127,'What is the benefit of naming pattern variables descriptively?','It makes data flow and debugging easier to trace','It grants additional target permissions','It validates the MID Server','It changes IRE precedence','의미 있는 변수명은 Debug 시 값의 출처와 사용 위치를 빠르게 추적하게 해 유지보수 오류를 줄입니다.'],
[128,'When should a pattern terminate a branch gracefully?','When a documented optional component is absent','Whenever one required identifier is missing without logging','Before any command runs','After every successful parse','선택 구성요소가 없는 정상 상황은 조건 분기로 종료해 실제 장애와 구분해야 합니다.'],
[129,'What is the risk of using display names as the only CI identifier?','Names may change or collide, causing incorrect matches or duplicates','Names are always globally unique','Display names cannot be discovered','IRE refuses all text attributes','표시명은 변경·중복 가능성이 높으므로 Serial Number나 Object ID 같은 안정적 식별값과 조합해야 합니다.'],
[130,'A custom extension creates duplicate child CIs. What should be checked first?','The child class identifier values and payload structure','The parent CI form color','The Discovery schedule label','The number of MID Servers only','Child Payload의 Class와 Identifier 값이 실행마다 일관적인지 확인해야 IRE가 기존 Child CI를 재사용합니다.'],
[131,'Why capture a representative raw command result during pattern troubleshooting?','It provides evidence to compare parsing assumptions with actual target output','It replaces all Discovery logs','It automatically fixes credentials','It changes the target configuration','원본 출력은 명령 성공과 Parsing 실패를 분리하고 버전·Locale 차이를 확인하는 핵심 증거입니다.'],
[132,'A regex works in a tester but not in Discovery. What environment difference matters?','Actual line endings, escaping, encoding, and captured input variable','The portal landing page configured for Discovery users','The exam duration selected in a practice-quiz session','The CI health score only for the target class','실제 Pattern 입력의 Escape·Encoding·개행과 Tester Sample이 다르면 같은 Regex도 결과가 달라질 수 있습니다.'],
[133,'What should be documented for a custom pattern command?','Purpose, required privilege, expected output, timeout, and failure behavior','Only the command author name and team assignment','Only the target IP used during initial pattern testing','Only the answer option selected in a training exercise','명령의 권한·출력·Timeout·실패 처리를 문서화하면 보안 검토와 운영 장애 분석이 쉬워집니다.'],
[134,'Why set a reasonable timeout on remote pattern commands?','To prevent hung commands from consuming MID capacity indefinitely','To make every command return more data','To bypass network latency','To disable retries globally','Timeout은 응답 없는 Target 하나가 Worker를 장시간 점유해 전체 Schedule을 지연시키는 것을 방지합니다.'],
[135,'Which result indicates that a pattern command succeeded but parsing failed?','Raw command output exists, but expected variables remain empty','No ECC output was created','The MID Server is Down','The target IP is excluded','원본 결과가 있는데 변수만 비어 있다면 접근·명령보다 Parsing 규칙과 변수 Mapping을 우선 조사합니다.'],
[136,'What is the upgrade advantage of an extension section?','Base pattern updates can be received while custom logic remains separate','It prevents every future pattern change','It removes the need for testing','It stores credentials in source control','Customization과 Base Content를 분리해 Store Update 비교와 회귀 검증 범위를 명확히 할 수 있습니다.'],
[137,'How should a shared library change be tested?','Run every consuming pattern against representative targets','Test only the library name','Publish it directly to production','Validate only one unrelated MID Server','Shared Library 변경은 여러 Pattern에 영향을 주므로 소비 Pattern 목록과 대표 Target을 기준으로 회귀 시험해야 합니다.'],
[138,'Why can changing a shared library be higher risk than changing one extension?','Multiple patterns may execute the shared steps','It rotates credentials for every user running a consuming Pattern','It automatically disables all Discovery Schedules using any Pattern','It removes the CMDB class hierarchy used by discovered CIs','재사용 범위가 넓어 한 변경의 영향 반경이 크므로 소비 관계와 결과 차이를 먼저 분석해야 합니다.'],
[139,'What should a pattern use to iterate over rows in a temporary table?','A loop or foreach-style pattern operation','A credential affinity record','A MID cluster order','A reconciliation rule','Table Row 반복 연산으로 각 발견 항목을 동일 로직에 적용해야 누락 없이 Child CI를 처리할 수 있습니다.'],
[140,'A target returns JSON. What is the preferred pattern strategy?','Use structured parsing appropriate for JSON rather than fragile positional text parsing','Remove all quotation marks manually','Treat the JSON as a hostname','Store the entire payload in the CI name','구조화 Parser를 사용하면 Field 순서나 공백 변화에 덜 민감하고 중첩 값도 명확히 추출할 수 있습니다.'],
[141,'What should happen when a required identification attribute cannot be collected?','Record a clear failure and avoid creating an ambiguously identified CI','Create a CI with an arbitrary name unrelated to the target','Reuse an identification value collected from the previous target','Turn off IRE so the ambiguous CI can be inserted directly','필수 식별값 없이 CI를 만들면 중복·오연결 위험이 있으므로 명확히 실패 처리하고 원인을 남겨야 합니다.'],
[142,'Why distinguish optional attributes from required identifiers in a pattern?','Missing optional data may be acceptable, while missing identity threatens CI integrity','Both must always delete the CI','Optional data selects the MID Server','Identifiers affect only dashboards','Identity 실패와 부가 정보 누락의 심각도가 다르므로 상태·오류 처리도 다르게 설계해야 합니다.'],
[143,'What is the value of pattern step comments?','They explain intent and assumptions that are not obvious from the operation','They increase target privileges','They replace version control','They create CI relationships automatically','주석은 명령 선택 이유와 입력 가정을 남겨 다음 운영자가 변경 위험을 판단하게 합니다.'],
[144,'Before activating a customized pattern, what comparison is most useful?','Baseline versus customized CI attributes, relationships, duration, and errors','Portal color before and after','Number of users online','Exam score distribution','동일 Target의 전후 CI·관계·수행시간·오류를 비교해야 기능 개선과 부작용을 동시에 확인할 수 있습니다.'],
[145,'How should sensitive values in command output be handled?','Avoid collection when possible and prevent them from being logged or stored','Copy them into explanations','Use them as CI names','Publish them in pattern comments','최소 수집 원칙과 Log 마스킹으로 Secret이 ECC Queue·Debug 기록·CMDB에 남지 않게 해야 합니다.'],
[146,'What does a pattern parameter improve?','Reusability by separating configurable input from fixed logic','Credential encryption on the target','MID Server failover','CI retirement','Parameter는 환경별 입력을 Logic에서 분리해 같은 Pattern이나 Library를 여러 조건에 재사용하게 합니다.'],
[147,'A pattern discovers a process on only some runs. What evidence should be correlated?','Process lifetime, command timing, user context, and raw output','Only the CI display name','Only the schedule frequency','Only the portal session','일시적 Process는 실행 시점과 권한에 따라 보이지 않을 수 있으므로 시간축과 실행 Context를 함께 봐야 합니다.'],
[148,'Why validate a pattern against multiple target versions?','Commands and output formats can vary across versions','IRE requires exactly three versions','MID Servers cannot scan one version','It changes answer distribution','지원 Version별 출력 차이를 확인해야 한 환경에서 성공한 Parsing이 다른 환경에서 실패하는 것을 예방합니다.'],
[149,'What is a good rollback for a faulty pattern customization?','Deactivate or revert the extension while preserving the last known-good base behavior','Delete every CI previously discovered by the affected Pattern','Remove the MID Server that executed the customized Pattern','Clear all target credentials before restoring known-good behavior','Customization을 분리·Version 관리하면 문제가 생겼을 때 Base 동작으로 안전하게 되돌릴 수 있습니다.'],
[150,'Which artifact best supports pattern change governance?','A versioned record of requirement, test targets, results, and approval','An undocumented production edit','A screenshot without context','A personal password list','요구·시험·승인 증거를 Version과 연결해야 변경 원인과 책임, 회귀 범위를 추적할 수 있습니다.'],
[151,'A new site has no MID Server. What should drive its placement design?','Network reachability, latency, security zones, target count, and availability needs','The portal language selected by administrators at the site','The number of certification domains covered by the implementation','The average length of labels on CIs expected from the site','MID 배치는 Target 접근 경로와 부하·보안 경계를 기준으로 설계해야 합니다.'],
[152,'Why is installing one MID Server for every individual subnet usually unnecessary?','A MID can serve multiple reachable ranges when capacity and security permit','A MID can scan only its own IP','Clusters prohibit multiple ranges','IRE requires one MID per CI','Routing·Firewall·용량이 허용하면 하나의 MID가 여러 Range를 담당할 수 있어 운영 복잡도를 줄입니다.'],
[153,'When is a separate MID Server appropriate for a restricted zone?','When network policy requires an execution point inside or near that security boundary','When changing a dashboard used by Discovery operations','When creating a CI identifier for a CMDB class','When adding a catalog item for employee fulfillment','DMZ 등 보안 경계는 허용된 최소 경로만 갖는 별도 실행 지점을 두는 것이 적합합니다.'],
[154,'What should be included in MID Server capacity planning?','Concurrent schedules, target volume, protocols, pattern cost, and growth','Only the MID hostname and its assigned display name','Only the number of users logged in to the instance','Only the exam duration used for certification practice','처리량은 Target 수뿐 아니라 Protocol 지연, Pattern 명령 수와 동시 실행에 영향을 받습니다.'],
[155,'Why should production and nonproduction Discovery workloads be separated when practical?','To isolate risk, credentials, capacity, and change testing','To make CI names shorter','To disable reconciliation','To eliminate schedules','환경 분리는 시험 변경이 운영 CMDB와 Credential·MID Capacity에 미치는 영향을 줄입니다.'],
[156,'What is the first check when a MID Server shows Down?','Service process, host health, instance connectivity, and logs','CI reconciliation rules','Catalog categories','Pattern variable names only','Down은 우선 Process·Host·Network·Authentication 등 MID 자체 통신 계층부터 확인해야 합니다.'],
[157,'What does a Validated MID Server status mean?','The instance has completed validation and trusts it for assigned capabilities','Every target credential is guaranteed to work','All patterns have passed','The CMDB has no duplicates','MID Validation은 인스턴스와의 신뢰·기본 통신을 확인하지만 모든 Target 접근 성공을 보장하지는 않습니다.'],
[158,'Why can an Up and Validated MID still fail Discovery?','Target routing, firewall, credentials, protocol, or pattern execution can still fail','Up means every target is reachable','Validation creates target accounts','IRE blocks the MID status','MID 상태는 인스턴스 연결을 보여줄 뿐 개별 Target의 Network·권한·Application 상태는 별도입니다.'],
[159,'What does assigning the Discovery application capability to a MID control?','Whether the MID is eligible for Discovery work','Which CI attributes IRE protects','Which users can take an exam','Which catalog items are visible','Application Capability는 자동 선택 시 해당 MID가 Discovery 작업을 수행할 자격이 있는지 나타냅니다.'],
[160,'How should MID Server upgrades be introduced in a critical environment?','Stage, validate, canary test, monitor, then roll through remaining servers','Upgrade all servers during the busiest scan','Skip backup and rollback planning','Delete the cluster first','단계적 Upgrade와 대표 Scan 검증으로 Version 변화의 영향을 제한하고 Rollback 가능성을 확보합니다.'],
[161,'What is the purpose of a MID Server heartbeat?','Show ongoing communication and health status to the instance','Identify every CI','Encrypt SNMP traffic','Create cloud accounts','Heartbeat는 MID가 Instance와 계속 통신 중인지 판단하는 운영 신호입니다.'],
[162,'Why synchronize time on MID Servers and targets?','Accurate timestamps support authentication, logs, certificates, and event correlation','It changes the CMDB class selected by Identification','It increases the number of open ports detected by Shazzam','It removes the need for target-system credentials','Clock 차이는 Kerberos·Certificate 검증과 ECC·Target Log 시간 비교를 어렵게 만듭니다.'],
[163,'What is the risk of overlapping schedules using the same constrained MID?','Queue contention and longer discovery duration','Automatic CI deletion','Permanent credential exposure','Loss of all pattern versions','동시 Workload가 Worker와 Network를 경쟁하면 Queue가 쌓이고 Max run time 초과 가능성이 커집니다.'],
[164,'How should a very large IP range be onboarded?','Pilot small approved segments, measure results, then expand in controlled batches','Scan the entire range immediately with admin credentials','Disable excludes','Run every minute','작은 범위에서 성공률·부하·CI 품질을 확인한 뒤 Batch로 넓혀야 위험과 원인 범위를 통제할 수 있습니다.'],
[165,'What does a schedule run-after relationship help coordinate?','A dependent discovery starting after another schedule completes','CI reconciliation priority','Pattern parsing order','Credential creation','Run after는 선행 Cloud나 Infrastructure Discovery 결과가 필요한 후속 작업의 실행 순서를 조정합니다.'],
[166,'Why use descriptive schedule names?','They make scope, environment, owner, and purpose visible during operations','They grant MID privileges needed for target access','They replace IP ranges configured for Discovery scanning','They change classifiers selected during device identification','이름에 환경·지역·범위를 담으면 Alert와 Discovery Status에서 담당 Schedule을 빠르게 식별할 수 있습니다.'],
[167,'What ownership should every production schedule have?','A named team responsible for scope, credentials, errors, and remediation','No owner after activation','Only the original implementer forever','The target device user','명확한 운영 Owner가 Credential 만료, 범위 변경과 반복 오류를 지속적으로 처리해야 합니다.'],
[168,'Why record an approved source for each IP range?','To prove scope authorization and support later review','To create a CI automatically','To select the answer key','To validate Java','범위 승인 근거는 무단 Scan을 방지하고 Network 변경 시 재검토할 추적성을 제공합니다.'],
[169,'What should happen when a subnet is transferred to another business unit?','Review schedule scope, ownership, MID routing, credentials, and data governance','Keep every prior setting without review','Delete the entire CMDB','Disable all classifiers','조직·Network 소유 변경은 접근 승인과 CI 책임도 바꾸므로 Discovery 설정을 재검토해야 합니다.'],
[170,'Why measure successful CIs per schedule rather than only schedule completion?','A completed run can still contain many failed or unidentified targets','Completion guarantees perfect CMDB data','It replaces device history','It disables partial payloads','Schedule 완료 여부만으로는 Target별 성공·오류·미식별 상태를 알 수 없습니다.'],
[171,'What does a rising average discovery duration suggest?','Capacity, network, credential, target, or pattern performance should be investigated','Every discovered CI has become more operationally healthy','The self-service portal is responding faster to users','IRE identification and reconciliation rules are no longer required','수행시간 추세는 Queue 경쟁이나 Target 응답·Pattern 변화 같은 성능 저하의 조기 신호입니다.'],
[172,'How can a canary schedule reduce deployment risk?','It tests changes on a small representative scope before broad rollout','It scans every production address first','It disables monitoring','It bypasses credentials','대표 소규모 Scope에서 새 Pattern·MID Version·Credential을 먼저 검증해 영향 반경을 제한합니다.'],
[173,'Why define maintenance windows for Discovery infrastructure itself?','To coordinate MID changes without confusing planned downtime with failures','To change CI identification rules','To discover certificates','To create application relationships','계획된 MID 중단과 실제 장애를 구분하고 Schedule 충돌을 피하도록 변경 시간을 관리해야 합니다.'],
[174,'A schedule repeatedly exceeds Max run time. What is the best response?','Analyze target volume, errors, MID capacity, and split or tune the workload','Increase the limit indefinitely without analysis','Delete its statuses','Use more privileged credentials only','원인을 측정한 뒤 Scope 분할, 동시성, MID 증설이나 Pattern 최적화로 처리량을 개선해야 합니다.'],
[175,'What should a Discovery operational dashboard trend over time?','Coverage, success rate, error categories, duration, MID health, and stale CIs','Only the total number of users with access to Discovery','Only portal visits made by infrastructure support teams','Only certification attempts by Discovery implementers','추세 지표는 일회성 성공이 아닌 Coverage와 품질·성능 변화 및 개선 효과를 보여줍니다.'],
[176,'Why keep Discovery schedule frequency aligned with business need?','Over-scanning wastes capacity; under-scanning leaves stale operational data','Every CI requires a one-minute scan','Frequency changes identification rules','Schedules do not affect load','CI 변화 속도와 활용 목적을 기준으로 갱신 주기를 정해야 비용과 최신성의 균형을 맞출 수 있습니다.'],
[177,'What should be done before retiring a MID Server?','Move or redesign its schedules and ranges, validate replacement capacity, then decommission','Stop it without checking assignments or target reachability','Delete all credentials used by every remaining MID Server','Retire every CI it discovered from the CMDB hierarchy','담당 Workload와 Network 접근을 대체 MID로 검증한 뒤 제거해야 Discovery 공백을 막을 수 있습니다.'],
[178,'Why avoid assigning one MID to unrelated security zones with broad access?','It creates an excessive trust path and larger compromise impact','It improves least privilege','It is required for auto-selection','It prevents scanning','MID 접근 범위를 필요한 Zone으로 제한하면 침해 시 이동 경로와 영향 범위를 줄일 수 있습니다.'],
[179,'What is a useful acceptance criterion for a new Discovery scope?','Agreed coverage and success thresholds with explainable exceptions and valid CMDB results','No execution logs even when diagnostics and audit evidence are required','One successfully discovered device from the entire target scope','An unlimited set of credentials without ownership or least privilege','Coverage·성공률·예외·CI 정확성 기준을 사전에 합의해야 Go-live 판단이 객관적입니다.'],
[180,'What should a handover package for Discovery operations include?','Architecture, scopes, schedules, credentials ownership, runbooks, dashboards, and known exceptions','Only the MID Server installer without deployed architecture details','Only privileged credentials without ownership or rotation procedures','Only a list of discovered CI names without schedules or runbooks','운영 인수에는 구성과 책임, 장애 대응 절차 및 정상 예외가 함께 있어야 지속 가능한 관리가 가능합니다.'],
[181,'Which protocol is commonly used to discover Linux or Unix hosts remotely?','SSH','WMI','JDBC only','SMTP only','Linux·Unix는 일반적으로 SSH Credential과 명령 실행을 통해 OS·Process·Software 정보를 수집합니다.'],
[182,'Which technology is commonly associated with Windows host discovery?','Windows remote management such as WMI or PowerShell','SNMP traps only','HTTP cookies','DNS zone transfer only','Windows Discovery는 WMI·PowerShell Remoting 등 지원 방식과 적절한 계정 권한을 사용합니다.'],
[183,'Which protocol is commonly used for network devices such as switches and routers?','SNMP','RDP only','SFTP only','IMAP','Network Gear는 SNMP를 통해 System·Interface·Routing 정보를 수집하는 경우가 많습니다.'],
[184,'Why is SNMPv3 preferred where supported?','It provides stronger authentication and privacy than earlier community-string models','It requires no credentials for device access or authentication','It disables encryption for all SNMP communication traffic','It discovers Windows processes through a separate protocol','SNMPv3는 사용자 기반 인증과 암호화를 지원해 Community String 방식보다 보안 통제가 강합니다.'],
[185,'A network device responds to ping but SNMP classification fails. What should be checked?','UDP reachability, SNMP version, credentials, ACLs, and device configuration','Only the CI display name stored in the CMDB record','Only the MID heartbeat received by the instance','Only the portal cache in the administrator browser','Ping 성공은 SNMP 접근을 보장하지 않으므로 Protocol·ACL·Credential을 별도로 검증해야 합니다.'],
[186,'Why should Discovery accounts avoid interactive human use?','Dedicated service accounts improve auditability, ownership, and rotation','Human use increases identifier quality','It is required by Shazzam','It changes CI class','전용 계정은 사용 목적과 Log를 분리하고 퇴사·직무 변경에 따른 예기치 않은 중단을 줄입니다.'],
[187,'What should happen when a Discovery credential is rotated?','Update the managed credential, test it from relevant MIDs, and monitor scheduled runs','Embed the new password in every pattern','Delete credential affinity only','Disable all schedules permanently','회전 후 실제 실행 MID에서 인증을 시험하고 다음 Schedule 오류율을 관찰해야 변경을 검증할 수 있습니다.'],
[188,'Why can credential affinity become misleading after account rotation?','It may point to a formerly successful credential that is no longer valid','It changes the target IP address used by the Discovery schedule','It disables IRE identification for the discovered CI class','It creates a new MID Server record in the instance','성공 이력은 Credential 변경 후 유효하지 않을 수 있으므로 실패 시 Affinity와 현재 Alias 연결을 함께 확인합니다.'],
[189,'What is the security benefit of credential aliases?','They limit which approved credentials a schedule can attempt','They expose plaintext passwords to patterns','They grant all MIDs admin access','They replace target ACLs','Alias는 Schedule별 Credential 사용 범위를 분리해 불필요한 고권한 계정 시도를 차단합니다.'],
[190,'Why use credential tags or scoped selection carefully?','Incorrect restrictions can leave a valid credential unavailable to the target','Tags automatically validate every password','Tags identify CIs','Tags replace MID capabilities','Tag 조건은 모두 일치해야 할 수 있으므로 지나친 제한이나 오분류가 인증 실패를 만들 수 있습니다.'],
[191,'What does least privilege mean for a Discovery account?','Grant only the remote read and command rights required for supported discovery','Grant domain administrator everywhere','Allow interactive login to all users','Remove all auditing','필요 명령·Registry·API 접근만 부여하고 범위와 사용을 감사 가능하게 유지해야 합니다.'],
[192,'Why can the same credential work from one MID but fail from another?','Network path, domain trust, name resolution, source ACL, or local configuration may differ','IRE changes the password during CI identification','The CI class encrypts it based on class hierarchy','Schedule names affect authentication for the target system','인증은 Credential 자체뿐 아니라 요청 Source와 Network·Domain Context에 의존합니다.'],
[193,'What is the correct response to repeated account lockouts caused by Discovery?','Stop retries, identify affected schedules and credential policy, then correct the configuration','Increase schedule frequency so authentication is retried more often','Create additional incorrect credential records for the same target','Turn off all target auditing before investigating the lockout source','반복 시도를 먼저 멈추고 Alias·Affinity·Schedule 범위와 Lockout 정책을 분석해야 서비스 계정 영향을 제한합니다.'],
[194,'Why should credential test evidence include the MID Server name?','Authentication success is meaningful only in the execution path where it was tested','MID names change the password','It selects the CI identifier','It sets reconciliation precedence','어느 MID에서 성공했는지 기록해야 실제 Schedule의 실행 경로와 결과를 비교할 수 있습니다.'],
[195,'What should be verified for DNS-dependent Discovery commands?','The selected MID can resolve the target names correctly and consistently','Every CI uses an IP as its name','DNS replaces credentials','IRE hosts the DNS zone','MID의 DNS 설정과 Search Domain 차이는 Target 연결 및 수집 결과에 직접 영향을 줍니다.'],
[196,'Why can reverse DNS results not be treated as a guaranteed unique identifier?','They may be missing, stale, shared, or change independently of the device','They are always immutable identifiers for managed devices','IRE accepts only DNS values for CI identification','They contain credentials required for target authentication','DNS 이름은 운영 편의 정보이며 안정적 Serial·Cloud Object ID 등을 대신하기 어렵습니다.'],
[197,'What is the best practice for storing Discovery secrets?','Use platform credential storage or approved external credential integration','Put them in pattern comments','Save them in CI descriptions','Email them to operators','Secret은 암호화된 Credential Store와 접근 역할·감사를 통해 관리하고 Logic·Log에서 분리해야 합니다.'],
[198,'Why audit use of privileged Discovery credentials?','To verify use is limited to approved targets, schedules, and operators','To make scans anonymous to target-system audit logs','To bypass credential rotation after a successful test','To remove ownership from the credential record','사용 기록은 과도한 Scope나 오용을 찾고 보안 책임과 규정 준수를 입증합니다.'],
[199,'A target certificate changes and HTTPS discovery fails. What should be reviewed?','Trust chain, hostname validation, protocol settings, and the target endpoint','Only SNMP community configuration for the target device','Only CI reconciliation precedence for its CMDB class','Only the portal language selected by the Discovery administrator','Certificate 교체는 Trust·Name·TLS 호환성에 영향을 주므로 MID에서 실제 Endpoint 연결을 검증해야 합니다.'],
[200,'Why document target-side permissions per credential type?','It supports repeatable provisioning, security review, and faster troubleshooting','It removes the need for tests','It automatically grants privileges','It sets schedule timing','권한 기준을 문서화하면 환경별 누락을 비교하고 최소 권한 변경을 통제할 수 있습니다.'],
[201,'A schedule creates no Discovery Status record. Where should investigation begin?','Schedule activation, trigger timing, execution configuration, and system logs','CI duplicate tasks created by CMDB Health remediation','Pattern parsing only after target exploration has started','Reconciliation priority only for the target CI class','Status 자체가 없으면 Target 단계 전이므로 Schedule 실행 조건과 Trigger·Platform Log부터 확인합니다.'],
[202,'ECC output remains Ready for a long time. What does this suggest?','No eligible MID has picked up or processed the work yet','The CI was updated successfully','IRE rejected a duplicate','The pattern parsed every value','Ready 적체는 MID 상태·Capability·Queue Polling·선택 조건을 조사해야 하는 신호입니다.'],
[203,'ECC output is Processed but no expected input appears. What should be checked?','MID logs, command execution, timeout, and return-message processing','Only CMDB Health metrics for the discovered CI class','Only the schedule name shown on the Discovery record','Only the portal cache used by the administrator browser','작업 수신 후 응답이 없으므로 MID 실행·Target 응답·Timeout·Input 생성 경로를 따라가야 합니다.'],
[204,'Many targets fail at the same phase after a credential change. What is the likely investigation focus?','The changed credential, alias, affinity, and target permission scope','Every identification rule independently','The portal stylesheet','CI retirement policies','동시·동일 Phase 실패와 변경 시점의 상관관계는 공통 Credential 구성을 우선 의심하게 합니다.'],
[205,'Only one subnet fails while others on the same MID succeed. What should be compared?','Routing, firewall, ACL, DNS, and target protocol conditions for that subnet','Only MID validation even though the same MID succeeds elsewhere','Every CMDB class regardless of the failed subnet targets','The certification configuration of the Discovery administrator','MID 공통 기능은 정상일 가능성이 높으므로 실패 Segment의 Network 차이를 비교합니다.'],
[206,'Classification succeeds but exploration fails on one software version. What is most likely relevant?','Pattern command or output differences for that version','Shazzam cannot see the host','The schedule never ran','The IP is globally excluded','분류 후 실패는 접근보다 후속 Pattern Logic과 대상 Version 호환성을 우선 봐야 합니다.'],
[207,'Discovery updates attributes but misses relationships. What should be inspected?','Relationship or connection sections, child identification, and payload results','Only the initial port scan even though target attributes were collected','Only MID Server installation without reviewing Pattern execution','Only credential encryption without checking relationship payloads','속성 성공은 대상 접근이 됐음을 뜻하므로 Connection Logic과 양 끝 CI 식별을 집중 확인합니다.'],
[208,'A CI is discovered under the wrong class. What should be reviewed?','Classifier match, pattern selection, payload class, and reclassification behavior','Only reconciliation priority for the source data provider','Only schedule frequency configured for the IP range','Only dashboard filters applied to Discovery Status results','초기 Class 결정 경로와 IRE Payload Class를 추적해야 잘못된 Hierarchy 매핑의 원인을 찾을 수 있습니다.'],
[209,'A CI attribute changes back and forth after different imports. What is the likely cause?','Competing data sources without appropriate reconciliation design','A failed port scan during the first Discovery phase','A paused MID only with no other data-source activity','A pattern timeout only during one target exploration','Source 간 값 경쟁은 Attribute별 갱신 권한과 우선순위를 설계해 해결해야 합니다.'],
[210,'Why use a timeline when troubleshooting Discovery?','It correlates schedule, ECC, MID, target, pattern, and CMDB events in order','It replaces all logs required for Discovery troubleshooting','It changes CI identity before IRE processes the payload','It creates credentials required for the affected target','시간 순서로 증거를 맞추면 원인과 후속 증상을 구분하고 최근 변경의 영향을 확인할 수 있습니다.'],
[211,'What is the value of grouping errors by signature?','Repeated failures can be fixed once at their common root cause','Every error becomes a separate CI','It hides affected targets','It disables monitoring','동일 Error Message·Phase·Pattern을 묶으면 개별 Target 처리보다 영향이 큰 공통 원인을 우선 해결할 수 있습니다.'],
[212,'Why preserve a failed Discovery Status during investigation?','It contains device, phase, log, and ECC evidence needed for root-cause analysis','Deleting it improves identification','It stores target passwords','It blocks future schedules','실패 당시의 증거를 보존해야 재현이 어려운 장애도 단계별로 분석할 수 있습니다.'],
[213,'What should be compared when Debug succeeds but the schedule fails?','MID, user context, credentials, parameters, target, and pattern version','Only the wording used to describe the failed discovery question','Only the age of the target CI without execution context','Only the user’s portal session during the scheduled run','두 실행의 Context 차이를 표로 비교하면 숨은 환경 차이를 빠르게 좁힐 수 있습니다.'],
[214,'A schedule discovers fewer devices after a network change. What evidence is most useful?','Before-and-after active IPs, routes, firewall rules, exclusions, and error dispositions','Only the total CMDB count without target or network evidence','Only user login activity during the Discovery window','Only comments stored on Patterns unrelated to failed targets','Coverage 변화와 Network 변경을 Target 수준으로 비교해야 실제 감소와 접근 실패를 구분할 수 있습니다.'],
[215,'What does an intermittent timeout across random targets often require?','Capacity, concurrency, network latency, and target throttling analysis','Only a new CI Identifier without examining execution capacity','A restart of the self-service portal used by requesters','A Service Catalog approval unrelated to target communication','무작위 Timeout은 단일 Logic 오류보다 공유 자원 포화나 Rate Limit 가능성을 측정해야 합니다.'],
[216,'Why reproduce a Discovery failure with the smallest possible scope?','It reduces noise and risk while preserving the failing path','It guarantees the issue disappears','It bypasses auditing','It changes the target software','단일 IP·단일 Pattern으로 좁히면 반복 시험이 안전하고 비교할 변수가 줄어듭니다.'],
[217,'What is a strong closure criterion for a recurring Discovery error?','Root cause fixed, representative reruns successful, CMDB effects checked, and monitoring confirms stability','One Error Framework record was manually changed to Closed','The dashboard widget showing the recurring error was hidden','The failing Schedule was renamed without changing its execution','오류 상태만 닫는 것이 아니라 원인·재시험·데이터 영향과 일정 기간 재발 여부를 확인해야 합니다.'],
[218,'A fix increases success rate but also creates duplicates. Is it ready for production?','No; CI integrity regression must be resolved before rollout','Yes; success rate is the only measure','Yes; duplicates are harmless','No; Discovery should never create CIs','기능 성공과 CMDB 품질을 함께 Acceptance 기준으로 봐야 부분 개선이 더 큰 운영 문제를 만들지 않습니다.'],
[219,'Why attach a known error and workaround to an operational runbook?','Operators can restore coverage consistently while a permanent fix is prepared','It replaces root-cause analysis','It stores credentials safely','It changes MID selection','검증된 임시 조치와 적용 조건을 공유하면 반복 장애 대응 시간을 줄이고 임의 변경을 막습니다.'],
[220,'What should a post-incident review of a Discovery outage produce?','Root cause, impact, timeline, corrective actions, owners, and prevention metrics','Only a screenshot of the failed Discovery Status','Only a renamed Schedule without corrective configuration changes','Only confirmation that diagnostic logs were deleted','기술 원인뿐 아니라 Detection·대응·재발 방지 Action과 측정 기준까지 남겨야 운영 성숙도가 높아집니다.'],
[221,'What does a de-duplication task represent in CMDB governance?','Potential duplicate CIs that require controlled review and remediation','A MID Server upgrade required for Discovery operations','A Discovery schedule retry after target timeout','A credential rotation for a managed service account','De-duplication Task는 IRE나 Health가 찾은 중복 후보를 합병·정리하는 통제된 작업 단위입니다.'],
[222,'Why should duplicate CIs be remediated carefully rather than simply deleted?','Relationships, tasks, history, and authoritative identifiers may need preservation or reassignment','Duplicates never have relationships or downstream process records','Deletion improves every payload received by an integration source','IRE requires manual deletion of every duplicate candidate','중복 CI에 연결된 운영 Record와 관계를 보존하며 올바른 CI로 통합해야 데이터 손실을 막습니다.'],
[223,'What is the purpose of a CI data manager or class owner?','Define quality expectations and own remediation for a CI domain','Operate every target device personally','Approve all user accounts','Write every pattern step','Class별 필수 데이터·Source·품질 기준과 개선 책임을 명확히 하는 Governance 역할입니다.'],
[224,'Why map Discovery results to the correct CMDB class hierarchy?','Inheritance, identifiers, health rules, relationships, and consuming processes depend on class','Class affects only icon color','Every class has identical rules','MID selection is based only on class name','올바른 Class는 IRE와 Downstream ITSM·Service Mapping이 데이터를 정확히 해석하는 기반입니다.'],
[225,'What does an authoritative data source mean for a CI attribute?','The source trusted and permitted to provide that attribute under governance rules','The last source to run regardless of policy','Any manual entry','The source with the longest name','속성별 책임 Source를 정하고 Reconciliation에 반영해야 값의 충돌과 되돌림을 방지할 수 있습니다.'],
[226,'Why is source-native object ID valuable for cloud CI identification?','It is usually more stable and unique than a display name or mutable IP','It is always shorter than a name','It replaces the cloud account context','It selects the MID automatically','Cloud Object ID를 Account·Region Context와 사용하면 이름·IP 변경에도 동일 Resource를 추적하기 쉽습니다.'],
[227,'What context is often required with a cloud resource ID to ensure uniqueness?','Cloud provider account, subscription or project, and region or scope','Portal user language configured for the cloud operator','MID Java memory allocated to API collection tasks','Incident priority assigned to a cloud service interruption','Provider별 ID Namespace가 다르므로 Account·Project·Region 등 식별 Context를 함께 모델링해야 합니다.'],
[228,'Why can ephemeral cloud resources challenge traditional stale-CI rules?','Short-lived resources are expected, so lifecycle and retirement timing must reflect cloud behavior','Cloud resources remain unchanged after their initial discovery','Short-lived cloud resources cannot be represented as CIs','IRE always ignores source timestamps for cloud resources','자동 생성·삭제가 잦은 Resource는 On-premise와 다른 갱신·Retirement 기준이 필요합니다.'],
[229,'What is event-driven cloud discovery useful for?','Updating CMDB closer to resource lifecycle changes instead of waiting only for periodic scans','Replacing every cloud credential with event payload data','Discovering only offline routers that cloud APIs cannot represent','Turning off IRE before cloud lifecycle events update the CMDB','Cloud Event에 반응하면 생성·변경·삭제를 주기 Scan보다 빠르게 반영할 수 있습니다.'],
[230,'Why compare native patterns and Service Graph Connector coverage before implementation?','They may support different resource types, attributes, relationships, and update methods','Both always produce identical data','Connectors never use IRE','Patterns cannot discover cloud resources','Provider·Resource별 Coverage와 Data Model 차이를 비교해야 중복 수집과 가시성 공백을 피할 수 있습니다.'],
[231,'What is the risk of enabling two cloud sources without an identification design?','Duplicate CIs and conflicting attribute updates','Faster portal rendering','Automatic least privilege','Elimination of reconciliation','같은 Resource를 서로 다른 Key로 보내면 IRE가 별도 CI로 판단하거나 값 경쟁이 발생할 수 있습니다.'],
[232,'Why should cloud service account permissions be scoped?','To limit discovery to approved accounts, APIs, and read actions','To allow resource deletion','To replace audit logging','To bypass provider controls','Cloud Credential도 최소 권한과 Account 범위를 적용해 침해·오구성의 영향 범위를 줄여야 합니다.'],
[233,'What should be monitored after enabling a new cloud discovery source?','Coverage, API errors, throttling, duplicates, class mapping, and reconciliation outcomes','Only portal visits made by cloud operations users','Only MID heartbeat without cloud API or CMDB results','Only certification attempts by the implementation team','Cloud API 성공뿐 아니라 CMDB Class·중복·Source 충돌까지 함께 확인해야 데이터 품질을 검증할 수 있습니다.'],
[234,'How can API throttling affect Cloud Discovery?','Requests may be delayed or rejected, reducing completeness and extending runs','It changes CI identifiers automatically','It validates credentials','It deletes relationships','Provider Rate Limit은 일부 Page나 Resource 수집 누락을 만들 수 있으므로 Retry·Schedule 분산과 지표를 관리합니다.'],
[235,'Why is relationship validation critical for cloud discovery?','Operational value depends on correct links among accounts, regions, networks, compute, and services','Relationships affect only icons','Cloud resources have no dependencies','IRE never processes relationships','Cloud 영향 분석은 개별 CI보다 계층·Network·Service 관계의 정확성에 크게 의존합니다.'],
[236,'What is a practical way to validate cloud discovery completeness?','Compare CMDB counts and samples with provider inventory by account, region, and resource type','Assume a successful status proves every scoped resource was collected','Check one arbitrarily selected CI without comparing provider inventory','Turn off API pagination even when the provider returns multiple result pages','Provider Inventory를 기준으로 Scope별 Count와 Sample 속성·관계를 대조해야 누락을 찾을 수 있습니다.'],
[237,'Why should Discovery implementation include a data-consumer review?','ITSM, Service Mapping, Asset, Security, and owners may require different classes and attributes','Only Discovery administrators use CMDB data','Consumers determine MID passwords','It removes the need for governance','Downstream Use Case가 필요한 CI·관계·Freshness를 정의하므로 수집 설계와 Acceptance 기준에 반영해야 합니다.'],
[238,'What is the most useful outcome of a Discovery maturity review?','A prioritized roadmap covering coverage, quality, security, resilience, and operating ownership','A larger unrestricted IP range without governance review','More administrator credentials shared across discovery teams','Fewer monitoring metrics reported to service owners','현재 지표와 Business 우선순위를 바탕으로 개선 순서·Owner·완료 기준을 정해야 실행 가능한 계획이 됩니다.'],
[239,'How should exam practice connect to real Discovery work?','For each answer, explain the evidence, configuration choice, failure mode, and validation step','Memorize option letters only','Ignore release documentation','Use live-exam wording as the only source','근거·설정·실패 증상·검증까지 연결하면 시험 개념이 실제 구현 판단으로 전환됩니다.'],
[240,'What demonstrates readiness to operate Discovery at enterprise scale?','Repeatable governance, secure access, resilient MIDs, measured coverage, trustworthy CMDB data, and owned remediation','A single successful Quick Discovery against one representative IP','One unrestricted administrator credential shared by all MIDs','No documented exceptions or defined remediation ownership','대규모 운영은 기술 설치보다 Scope·보안·복원력·품질 지표와 오류 개선 책임이 반복 가능하게 작동하는지가 핵심입니다.']
];rows.forEach(function(r){var target=(r[0]-1)%4,choices=r.slice(2,6),correct=choices.shift();choices.splice(target,0,correct);window.CISDISCO_QUESTIONS.push({id:r[0],title:r[1],options:choices.map(function(t,i){return{id:L[i],text:t}}),answer:[L[target]],explanation:r[6]})})})();
(function(qs){
  function lesson(q){
    var id=q.id;
    if((id>=1&&id<=20)||(id>=61&&id<=72)||(id>=121&&id<=150))return ['Pattern Design','Debug에서는 원본 출력, 변수 값, 조건 분기와 최종 IRE Payload를 순서대로 확인하고, 변경 전후 CI·관계 결과를 비교합니다.','Pattern, Debug, Parsing, Identification Section, Extension'];
    if((id>=21&&id<=27)||(id>=101&&id<=116)||(id>=221&&id<=225))return ['CMDB & IRE','실무에서는 Identifier 값과 대상 Class, Data Source, IRE 처리 결과, 관계 및 CMDB Health 지표를 한 흐름으로 검증합니다.','IRE, Identifier, Reconciliation, CMDB Health, Data Source'];
    if((id>=117&&id<=120)||(id>=226&&id<=236))return ['Cloud Discovery','Provider Inventory와 CMDB를 Account·Region·Resource Type별로 대조하고, API 오류·중복·관계 누락을 함께 확인합니다.','Cloud Discovery, Service Graph Connector, API, Coverage'];
    if(id>=237&&id<=240)return ['Discovery Configuration','운영에서는 Schedule 범위·실행 MID·Credential·동시 부하를 확인하고, 성공률과 수행시간, 오류 유형을 추세로 관리합니다.','Schedule, MID Server, Behavior, Credential, Operations'];
    if(id>=181&&id<=200)return ['Credentials & Protocols','실제 실행 MID에서 Network 경로, Protocol 설정, 최소 권한 Credential과 Target Log를 함께 확인해야 원인을 분리할 수 있습니다.','Credential, Least Privilege, SSH, WMI, SNMP'];
    if(id>=201&&id<=220)return ['Troubleshooting','Discovery Status에서 실패 Target과 Phase를 특정한 뒤 ECC Queue, MID Log, Target 응답, Pattern 결과와 CMDB 영향을 시간 순서로 연결합니다.','Discovery Status, ECC Queue, MID Log, Root Cause'];
    return ['Discovery Configuration','운영에서는 Schedule 범위·실행 MID·Credential·동시 부하를 확인하고, 성공률과 수행시간, 오류 유형을 추세로 관리합니다.','Schedule, MID Server, Behavior, Credential, Operations'];
  }
  qs.forEach(function(q){
    if(q.explanation.indexOf('**[실무 적용]**')!==-1)return;
    var l=lesson(q),core=q.explanation;
    q.domain=l[0];
    q.difficulty=q.id%3===0?'advanced':(q.id%2===0?'applied':'foundation');
    q.sourceType='official-docs-reconstructed';
    q.objective='disco-'+q.id;
    q.confidence=q.id<=27?'medium':'high';
    q.verifiedAgainst='official-docs';
    q.releaseRisk=q.id<=120?'medium':'low';
    if(core.indexOf('**[Exam Keywords]**')!==-1){
      core=core.replace(/\n\n\*\*\[Exam Keywords\]\*\*[\s\S]*$/,'');
    }
    if(core.indexOf('**[핵심 근거]**')!==0&&core.indexOf('**[공식 샘플')!==0){core='**[핵심 근거]**\n'+core;}
    q.explanation=core+'\n\n**[실무 적용]**\n'+l[1]+'\n\n**[학습 영역]**\n'+l[0]+'\n\n**[Exam Keywords]**\n'+l[2];
  });
})(window.CISDISCO_QUESTIONS);
(function(qs){
  var labels=['A','B','C','D'];
  qs.forEach(function(q){
    if(q.answer.length!==1)return;
    var correct=q.options.find(function(o){return o.id===q.answer[0]});
    var distractors=q.options.filter(function(o){return o!==correct});
    var target=(q.id-1)%4;
    distractors.splice(target,0,correct);
    q.options=distractors.map(function(o,i){return{id:labels[i],text:o.text}});
    q.answer=[labels[target]];
  });
})(window.CISDISCO_QUESTIONS);
