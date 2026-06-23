window.CISDF_QUESTIONS = [
  {
    "id": 1,
    "title": "Which CSDM domain are business applications, information objects, and capabilities part of?",
    "options": [
      {
        "text": "Service Consumption",
        "id": "A"
      },
      {
        "text": "Build & Integration",
        "id": "B"
      },
      {
        "text": "Service Delivery",
        "id": "C"
      },
      {
        "text": "Design & Planning",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "CSDM 프레임워크에서 Business Application, Information Object, Business Capability는 기업의 전략적 청사진과 자산 포트폴리오를 정의하는 'Design & Planning(또는 Design)' 도메인에 속합니다. 이 도메인의 핵심 특징은 '비운영(Non-operational)' 데이터라는 점이며, 실제 인프라의 운영 상태를 나타내는 Service Instance (구Application Service)(Service Delivery 도메인)와 엄격히 구분됩니다."
  },
  {
    "id": 2,
    "title": "A CMDB Administrator needs to import external data into the CMDB. The administrator wants to reduce the risk of creating duplicates and prevent unauthorized records from being created if the Identification and Reconciliation API is bypassed. What is the recommended method to import data into the CMDB using the Identification and Reconciliation API?",
    "options": [
      {
        "text": "IntegrationHub ETL",
        "id": "A"
      },
      {
        "text": "Table API (REST API or SOAP API)",
        "id": "B"
      },
      {
        "text": "Import Sets and Transform Maps",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "IntegrationHub ETL은 ServiceNow CMDB에 데이터를 안전하게 적재하기 위해 설계된 표준 가이드형 도구입니다. 스크립트 작성 없이도 데이터를 IRE(Identification and Reconciliation Engine)와 자동으로 연동시켜 중복 생성을 원천 차단합니다. 반면 Table API(B)는 데이터베이스에 직접 쓰기 때문에 IRE를 우회하며, 레거시 Transform Maps(C)는 IRE 연동을 위해 복잡한 수동 스크립팅이 필요하므로 실수로 인한 우회 위험이 존재합니다."
  },
  {
    "id": 3,
    "title": "A CMDB Administrator is considering using the playbooks provided in the CMDB Data Foundations Dashboard. What are the benefits of leveraging these playbooks? (Choose 2 answers)",
    "options": [
      {
        "text": "Offers insight into the downstream impacts of poorly performing metrics",
        "id": "A"
      },
      {
        "text": "Offers automated scripts to resolve poorly performing metrics",
        "id": "B"
      },
      {
        "text": "Offers remediation options to address and improve poorly performing metrics",
        "id": "C"
      },
      {
        "text": "Has a framework to create custom metrics",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow의 CMDB Data Foundations 플레이북은 특정 CMDB 건전성 지표가 기준 미달일 때 두 가지 핵심 가치를 제공합니다. 첫째, 해당 데이터 결함이 IT 서비스 관리(ITSM)나 자산 관리 등 후속 프로세스에 미치는 부정적 영향(Downstream impacts)을 설명해 줍니다. 둘째, 관리자가 이를 올바르게 수정할 수 있도록 구체적인 조치 방법(Remediation options)을 단계별로 안내합니다. 플레이북은 자동 치유 스크립트(B)를 실행하거나 커스텀 지표(D)를 설계하는 도구가 아닌, 데이터 거버넌스 가이드를 제공하는 도구입니다."
  },
  {
    "id": 4,
    "title": "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    "options": [
      {
        "text": "It is active by default.",
        "id": "A"
      },
      {
        "text": "It is a free application on the ServiceNow Store.",
        "id": "B"
      },
      {
        "text": "It is a free application on the ServiceNow Innovation Lab.",
        "id": "C"
      },
      {
        "text": "It is a paid application on the ServiceNow Store.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CMDB 및 CSDM 데이터의 표준 준수 여부를 모니터링하는 'Data Foundations Dashboard'는 ServiceNow Store에서 무료로 다운로드하여 설치할 수 있는 정식 애플리케이션입니다. 패밀리 릴리즈 주기에 종속되지 않고 신속한 기능 업데이트를 제공하기 위해 스토어 앱 형태로 배포되며, 플랫폼의 데이터 신뢰도를 높이기 위한 공익적 목적의 툴이므로 추가 라이선스 비용(D)이 발생하지 않습니다."
  },
  {
    "id": 5,
    "title": "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      {
        "text": "CMDB Data Manager",
        "id": "A"
      },
      {
        "text": "Reconciliation Rules",
        "id": "B"
      },
      {
        "text": "CMDB Workspace",
        "id": "C"
      },
      {
        "text": "CMDB 360/Multisource CMDB",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "'가장 많이 보고된 값(Most Reported)' 또는 '가장 최근에 입력된 값(Last Reported)'과 같이 조건에 따라 데이터를 채택하는 동적 조정 규칙(Dynamic Reconciliation Rules)을 사용하려면, 인스턴스에 CMDB 360(기존의 Multisource CMDB) 기능이 활성화되어 있어야 합니다. CMDB 360이 켜져야 탈락한 소스의 원본 데이터까지 백엔드 데이터베이스(cmdb_multisource_data)에 보관되므로, 이를 기반으로 한 동적 비교 연산이 가능해집니다."
  },
  {
    "id": 6,
    "title": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      {
        "text": "Many-to-one",
        "id": "A"
      },
      {
        "text": "Many-to-many",
        "id": "B"
      },
      {
        "text": "One-to-many",
        "id": "C"
      },
      {
        "text": "One-to-one",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "(Many-to-many). 엔터프라이즈 IT 환경에서 애플리케이션 서버와 애플리케이션 간의 관계는 다대다(Many-to-many) 구조를 가집니다. 하나의 서버가 여러 앱을 구동할 수 있을 뿐만 아니라, 하나의 대형 애플리케이션이 가용성과 부하 분산을 위해 여러 대의 서버에 걸쳐 분산 배치(Clustering/Load Balancing)될 수 있기 때문입니다. ServiceNow는 이를 지원하기 위해 두 테이블 간의 관계를 참조 필드가 아닌 독립된 관계 테이블(cmdb_rel_ci)을 활용한 Many-to-many 모델로 관리합니다."
  },
  {
    "id": 7,
    "title": "A Data Center Manager is defining the relationship between Application Servers and Applications in the CMDB. The company environment has the following characteristics:\n\n- Multiple Application Servers\n- Each server can host multiple Applications\n- Each Application can run on multiple servers.\n\nWhich describes the relationship?",
    "options": [
      {
        "text": "One-to-one",
        "id": "A"
      },
      {
        "text": "One-to-many",
        "id": "B"
      },
      {
        "text": "Many-to-one",
        "id": "C"
      },
      {
        "text": "Many-to-many",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "지문에서 '각 서버가 여러 애플리케이션을 호스팅할 수 있고, 각 애플리케이션 또한 여러 서버에서 실행될 수 있다'고 명시했으므로 두 구성요소(CI) 간의 관계는 다대다(Many-to-many)입니다. ServiceNow CMDB는 엔터프라이즈의 로드 밸런싱 및 클러스터 환경을 반영하기 위해, 기본 참조 필드 대신 'cmdb_rel_ci' 테이블을 중간 교차 테이블로 활용하여 이러한 다대다 관계를 유연하게 지원합니다."
  },
  {
    "id": 8,
    "title": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      {
        "text": "Enterprise Architect",
        "id": "A"
      },
      {
        "text": "Service Instance (구Application Service) Owners",
        "id": "B"
      },
      {
        "text": "Technology Service Owners",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "CSDM 프레임워크에서 서버, 네트워크, 스토리지 등 하드웨어 인프라 및 기술 지원 영역은 '기술 서비스(Technical/Technology Services)' 도메인에 해당합니다. 따라서 서버 팀의 인프라 업그레이드 신청을 위한 카탈로그 항목 프로세스를 발의하고 구체적인 요구사항을 정의하는 책임은 Technology Service Owner에게 있습니다. Enterprise Architect(A)는 전략적 청사진을 그리며, Service Instance (구Application Service) Owner(B)는 인프라 위에 올라가는 소프트웨어 인스턴스의 소유자이므로 오답입니다."
  },
  {
    "id": 9,
    "title": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      {
        "text": "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
        "id": "A"
      },
      {
        "text": "Improves the implementation velocity of APM Foundation for future business application rationalization",
        "id": "B"
      },
      {
        "text": "Enables impact assessments for incident, problem, and change on Business Services",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "최신 CSDM 5.0 프레임워크에 따르면, Walk(걷기) 단계는 'Service Delivery (구 Manage Technology Management Services (구Technical Services))' 도메인을 확립하는 단계입니다. 이 단계의 핵심은 기술 지원 팀의 구조를 OLA(Operational Level Agreements) 및 약속(Commitments)에 따라 체계적으로 계층화(stratification)하는 것입니다. 반면 Business Service에 대한 영향도 분석(C)은 'Service Consumption(구 Run)' 단계의 이점이며, APM 연동(B)은 'Fly' 단계의 이점입니다."
  },
  {
    "id": 10,
    "title": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      {
        "text": "Completeness",
        "id": "A"
      },
      {
        "text": "Correctness",
        "id": "B"
      },
      {
        "text": "Compliance",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CMDB Health Dashboard의 3대 핵심 KPI(3C) 중 하나인 'Correctness(정확성)' 스코어카드는 데이터의 무결성과 최신 상태를 측정합니다. Correctness 영역은 중복(Duplicate), 고아(Orphan), 그리고 특정 기간 동안 업데이트가 발생하지 않아 방치된 좀비 데이터인 '오래된 CI(Stale CIs)'를 추적하여 관리자에게 시각화해 줍니다. 필수 필드 입력 여부는 Completeness(A), 규정 및 감사 준수 여부는 Compliance(C)에서 다룹니다."
  },
  {
    "id": 11,
    "title": "Which field on Incident form is automatically populated after a CI is selected that reference an appropriate support group?",
    "options": [
      {
        "text": "Assignment Group",
        "id": "A"
      },
      {
        "text": "Support Group",
        "id": "B"
      },
      {
        "text": "Approval Group",
        "id": "C"
      },
      {
        "text": "Managed by Group",
        "id": "D"
      },
      {
        "text": "Change Group",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Incident 폼에서 장애 대상이 되는 구성요소(CI)를 선택하면, ServiceNow는 해당 CI 레코드에 사전에 정의된 'Support Group(지원 그룹)' 정보를 읽어와 Incident 폼의 'Assignment Group(담당 그룹)' 필드에 자동으로 입력합니다. 이는 장애 티켓을 올바른 기술 지원 팀으로 지연 없이 실시간 라우팅하여 장애 처리 프로세스를 가속화하기 위한 OOTB(기본 제공) 연동 기능입니다."
  },
  {
    "id": 12,
    "title": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      {
        "text": "All",
        "id": "A"
      },
      {
        "text": "Child",
        "id": "B"
      },
      {
        "text": "Added",
        "id": "C"
      },
      {
        "text": "Derived",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CI Class Manager의 Attributes(속성) 화면에서는 상속 구조를 효율적으로 파악할 수 있도록 탭 분할 뷰를 제공합니다. 그중 'Added' 탭은 상위 부모 클래스로부터 상속받은 속성(Derived 탭에 표시됨)을 제외하고, 오직 현재 클래스(Windows Server) 관리를 위해 직접(Specifically) 추가로 생성된 고유 속성만 필터링하여 표시합니다."
  },
  {
    "id": 13,
    "title": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    "options": [
      {
        "text": "Create a business rule",
        "id": "A"
      },
      {
        "text": "Create a scheduled job",
        "id": "B"
      },
      {
        "text": "Create an archive policy",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB Data Manager는 자산의 수명 주기를 일괄 관리할 수 있는 정책 기반의 프레임워크를 제공합니다. 6개월간 갱신되지 않은 리눅스 서버처럼 메인 인스턴스에서 분리 보관이 필요한 경우 'Archive' 정책을 생성하는 것이 베스트 프랙티스입니다. 아카이브 정책은 데이터를 완전히 삭제(Delete)하기 전, 독립된 테이블로 안전하게 격리하여 CMDB 성능을 최적화하고 필요시 복구할 수 있는 기능을 제공합니다. 레거시 스크립트 방식인 Business Rule(A)이나 Scheduled Job(B)은 참조 무결성을 깨뜨릴 위험이 있어 권장되지 않습니다."
  },
  {
    "id": 14,
    "title": "A CMDB Administrator installs a Service Graph Connector. They customize a script transform... What happens to the customized script transform during the upgrade?",
    "options": [
      {
        "text": "The upgrade stops and reports an error.",
        "id": "A"
      },
      {
        "text": "A skipped change is created and no change is made to the script transform definition.",
        "id": "B"
      },
      {
        "text": "The Service Graph Connector upgrade refuses to start.",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 플랫폼은 버전이나 스토어 앱 업그레이드 시 고객이 커스터마이징한 자산을 보호하기 위해 '업그레이드 보호 아키텍처'를 사용합니다. 관리자가 Service Graph Connector의 스크립트 트랜스폼을 수정한 경우, 시스템은 Customer Updates 기록을 바탕으로 해당 항목의 업데이트를 자동으로 건너뜁니다(Skip). 따라서 기존 커스텀 스크립트는 덮어씌워지지 않고 안전하게 보존되며, 대신 Upgrade History에 'Skipped Change' 로그가 생성되어 사후 검토를 할 수 있게 합니다. 업그레이드가 중단(A)되거나 거부(C)되는 일은 발생하지 않습니다."
  },
  {
    "id": 15,
    "title": "In the Create Reconciliation Rule wizard for CMDB 360 / Multisource CMDB, which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard? (Choose all that apply)",
    "options": [
      {
        "text": "Most Reported",
        "id": "A"
      },
      {
        "text": "Last Created",
        "id": "B"
      },
      {
        "text": "Last Updated",
        "id": "C"
      },
      {
        "text": "Smallest Value",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow 공식 문서에 따르면 CMDB 360(Multisource CMDB) 환경에서 사용할 수 있는 동적 조정 규칙 유형(Dynamic Rule Types)은 'First Reported', 'Most Reported', 'Last Reported', 'Largest Value', 'Smallest Value' 총 5가지입니다. 따라서 제시된 보기 중에서는 'Most Reported(A)'와 'Smallest Value(D)'만이 올바른 정답입니다. 'Last Updated(C)'는 얼핏 정답처럼 보이지만 공식 명칭인 'Last Reported'가 아니며, 'Last Created(B)' 역시 존재하지 않는 가짜 옵션입니다."
  },
  {
    "id": 16,
    "title": "A CMDB Administrator needs to clean up duplicate CIs in the CMDB. What is the preferred way to manage this task?",
    "options": [
      {
        "text": "The De-duplication Dashboard on the CMDB Workspace",
        "id": "A"
      },
      {
        "text": "My Tasks in the Application Navigator",
        "id": "B"
      },
      {
        "text": "The De-duplication Task module",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 최신 베스트 프랙티스에 따르면, CMDB 내 중복 구성요소(CI)를 정제하고 관리하는 가장 선호되는 방식은 'CMDB Workspace의 De-duplication Dashboard'를 활용하는 것입니다. 이 대시보드는 중복 현황에 대한 전사적 통계를 시각화해 줄 뿐만 아니라, 안전한 데이터 병합 및 관계 이전을 지원하는 가이드형 '치유 마법사(Remediation Wizard)' 환경을 다이렉트로 제공합니다. 클래식 메뉴의 De-duplication Task module(C)은 단순 레코드 목록만 나열하므로 최적의 관리 방식으로 권장되지 않습니다."
  },
  {
    "id": 17,
    "title": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      {
        "text": "data_classification_admin and personalize_dictionary",
        "id": "A"
      },
      {
        "text": "cmdb_inst_admin and personalize_form",
        "id": "B"
      },
      {
        "text": "itil_admin and personalize_form",
        "id": "C"
      },
      {
        "text": "sn_cmdb_admin and personalize_dictionary",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CMDB에서 새로운 커스텀 CI 클래스를 생성하는 것은 데이터베이스 테이블을 확장(Extend)하고 데이터 사전 사전을 수정하는 고도의 작업입니다. 이를 수행하려면 CMDB 관리 도구에 접근할 수 있는 'sn_cmdb_admin' 역할과, 실제 데이터베이스 필드 및 속성을 정의할 수 있는 데이터 사전 변경 권한인 'personalize_dictionary' 역할이 모두 필요합니다. 단순히 화면 레이아웃과 필드 가시성만 변경하는 'personalize_form(B, C)' 권한으로는 테이블 스키마를 생성할 수 없습니다."
  },
  {
    "id": 18,
    "title": "What is the relationship between an application and a server in the ServiceNow CMDB?",
    "options": [
      {
        "text": "Application > Runs on :: Runs > Server",
        "id": "A"
      },
      {
        "text": "Application > Runs :: Runs on > Server",
        "id": "B"
      },
      {
        "text": "Application > Used by :: Uses > Server",
        "id": "C"
      },
      {
        "text": "Application > Uses :: Used by > Server",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CMDB에서 관계 유형은 '부모-자식' 방향에 맞춰 정방향 문구(Forward Phrase)와 역방향 문구(Inverse Phrase)를 '::' 기호로 연결해 정의합니다. 상위 소프트웨어인 Application은 부모, 하위 인프라인 Server는 자식이 되므로 'Application [Runs on] Server'가 정방향, 'Server [Runs] Application'이 역방향이 되는 A번 조합이 표준 명명 규칙에 부합합니다."
  },
  {
    "id": 19,
    "title": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": [
      {
        "text": "Managed By Group",
        "id": "A"
      },
      {
        "text": "Approval Group",
        "id": "B"
      },
      {
        "text": "Support Group",
        "id": "C"
      },
      {
        "text": "Change Group",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "CMDB Data Manager 정책은 구성요소(CI)의 수명 주기(은퇴, 아카이브, 삭제 등) 조치 전, 해당 자산의 관리 책임자에게 승인 및 확인 태스크를 발송합니다. 이때 CI Class Manager에서 정의한 클래스별 소유권 및 데이터 거버넌스 책임 그룹을 다이렉트로 활용하기 위해 매핑해야 하는 필드는 'Managed By Group'입니다. Support Group(C)은 장애 조치용, Change Group(D)은 변경 수행용 필드이므로 자산 수명 주기 거버넌스를 담당하는 이 문제의 목적에는 부합하지 않습니다."
  },
  {
    "id": 20,
    "title": "Which of the following is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      {
        "text": "Automates the enforcement of relationship rules between CIs in the CMDB",
        "id": "A"
      },
      {
        "text": "Encrypts archived records for enhanced security",
        "id": "B"
      },
      {
        "text": "Automates the archival and deletion of records based on retention policies",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB Data Manager의 핵심 목적은 기업의 데이터 보존 정책(Retention Policies)에 기반하여 오래되거나 불필요해진 CI 레코드의 아카이브(격리 보관) 및 영구 삭제 프로세스를 안전하게 자동화하는 것입니다. 이를 통해 CMDB의 전체 데이터 볼륨을 최적의 상태로 유지하고 시스템 성능 저하를 방지합니다. 관계 규칙 강제(A)는 IRE 및 CI Class Manager의 영역이며, 레코드 암호화(B)는 플랫폼 전용 암호화 모듈의 책임이므로 오답입니다."
  },
  {
    "id": 21,
    "title": "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate issues shown in the CMDB Data Foundations Dashboard. Which remediation playbooks would be used? (Choose two.)",
    "options": [
      {
        "text": "Fix Data",
        "id": "A"
      },
      {
        "text": "Govern Data",
        "id": "B"
      },
      {
        "text": "Report Data",
        "id": "C"
      },
      {
        "text": "Analyze Data",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow의 CMDB Data Foundations 대시보드에서 제공하는 'Services Have Owners Identified' 플레이북은 누락된 서비스 소유자 정보를 식별하고 채워 넣는 데 초점을 맞춘 복구 플레이북입니다. 실제 시험에서는 이 플레이북에서 활용되는 핵심 복구 플레이(Remediation plays)로 'Fix Data'(A)와 'Analyze Data'(D) 두 가지를 고르는 형태로 출제됩니다. 'Govern Data' 역시 거버넌스 단계에 포함되나, 직접적인 복구 활동을 지칭할 때는 통상 'Analyze Data'와 'Fix Data' 두 가지가 정답으로 취급됩니다."
  },
  {
    "id": 22,
    "title": "A Configuration Management Governance team is transitioning from using legacy CMDB status fields to the CSDM Life Cycle Status field. Which table can be modified?",
    "options": [
      {
        "text": "Life Cycle Mapping (life_cycle_mapping)",
        "id": "A"
      },
      {
        "text": "Life Cycle Stage Status (life_cycle_stage_status)",
        "id": "B"
      },
      {
        "text": "Life Cycle Stages (life_cycle_stage)",
        "id": "C"
      },
      {
        "text": "Life Cycle Controls (life_cycle_control)",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "기존의 레거시 상태 필드(Install Status, Operational Status 등)에서 새로운 CSDM 라이프사이클 표준 필드로 전환할 때, 기존 데이터 값들을 표준 2단계 구조에 부합하도록 매핑 규칙을 설정해야 합니다. 이 변환 가이드라인 규칙을 정의하고 수정하는 테이블은 'Life Cycle Mapping (life_cycle_mapping)' 테이블입니다. 'Life Cycle Stage Status(B)' 테이블은 플랫폼 표준 마스터 데이터 자체를 담고 있는 사전 테이블이므로 전환 프로세스 중에 직접 수정하지 않습니다."
  },
  {
    "id": 23,
    "title": "The Configuration Manager is preparing a justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard? (Choose all that apply)",
    "options": [
      {
        "text": "It helps detect and eliminate duplicate records in the CMDB.",
        "id": "A"
      },
      {
        "text": "It enables monitoring and tracking of CMDB health over time.",
        "id": "B"
      },
      {
        "text": "It provides actionable insights to improve data quality and completeness.",
        "id": "C"
      },
      {
        "text": "It automates the approval process for Change Management.",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "ServiceNow의 CMDB Data Foundations Dashboard는 플랫폼 모범 사례 준수 여부를 모니터링하고 추세를 추적(B)하는 데 목적이 있습니다. 점수 지표와 함께 연동된 플레이북을 통해 데이터 완전성과 품질을 향상시킬 수 있는 구체적이고 실행 가능한 인사이트(C)를 제공합니다. 반면, 중복 레코드를 탐지하고 제거(A)하는 것은 CMDB Health Dashboard(Correctness)의 역할이며, 변경 승인 자동화(D)는 ITSM 프로세스 워크플로우 엔진의 책임이므로 오답입니다."
  },
  {
    "id": 24,
    "title": "Where can a CMDB 360 / Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      {
        "text": "Saved queries window on the CMDB 360 tab",
        "id": "A"
      },
      {
        "text": "CMDB Query Builder",
        "id": "B"
      },
      {
        "text": "Coverage window on the CMDB 360 tab",
        "id": "C"
      },
      {
        "text": "Saved queries window on the Insights tab",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 공식 문서에 따르면, 다중 소스 데이터 분석을 위한 CMDB 360 쿼리를 생성하고 재사용하기 위해 저장(Save)하는 공간은 CMDB Workspace 내부의 'CMDB 360 탭' 아래에 위치한 'Saved queries' 카드(윈도우)입니다. CMDB Query Builder(B)는 구성요소 간의 관계 지도를 쿼리하는 별도의 프레임워크이며, Coverage window(C)는 소스별 데이터 점유율 통계 화면이므로 오답입니다."
  },
  {
    "id": 25,
    "title": "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity? (Choose two)",
    "options": [
      {
        "text": "Add a new class under an appropriate parent class",
        "id": "A"
      },
      {
        "text": "Modify an existing class",
        "id": "B"
      },
      {
        "text": "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
        "id": "C"
      },
      {
        "text": "Delete an unused class, and replace it with the new one",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CMDB에서 새로운 자산 클래스(예: IoT 센서)를 확장할 때의 베스트 프랙티스는 2단계로 진행됩니다. 먼저 ServiceNow Store에서 'CMDB CI Class Models' 앱을 최신 버전으로 설치/업데이트하여 본사가 기본 제공하는 표준 모델 중 해당 클래스가 이미 존재하지 않는지 먼저 검증(C)해야 합니다. 만약 존재하지 않아 새로 생성해야 한다면, 공통 속성을 상속받아 데이터 무결성을 지킬 수 있도록 적절한 부모 클래스 하위에 자식 클래스로 추가(A)해야 합니다. 기존 스키마를 수정(B)하거나 임의로 삭제 후 대체(D)하는 행위는 플랫폼 무결성을 파괴하므로 금지됩니다."
  },
  {
    "id": 26,
    "title": "A Configuration Management Governance team has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    "options": [
      {
        "text": "Assign an order to each data source in the identification rules",
        "id": "A"
      },
      {
        "text": "Configure data refresh rules with a specific time period",
        "id": "B"
      },
      {
        "text": "Assign a priority to each data source in the reconciliation rules",
        "id": "C"
      },
      {
        "text": "Manually run the data source updates in the correct order",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB에서 여러 외부 데이터 소스가 동일한 클래스 및 속성을 동시에 업데이트하려고 할 때, 특정 소스에 독점적인 데이터 신뢰 권한(Authoritative Source of Truth)을 부여하는 표준 방법은 '조정 규칙(Reconciliation Rules)'을 설정하고 데이터 소스별로 우선순위(Priority) 숫자를 할당하는 것입니다. 높은 우선순위(낮은 숫자)를 가진 소스의 데이터만 최종 반영되며 하위 소스의 데이터 오염을 차단합니다. 식별 규칙(A)은 중복 방지용 고유 키 매칭 규칙이며, 데이터 새로고침 규칙(B)은 데이터 최신성 감시 도구이므로 오답입니다."
  },
  {
    "id": 27,
    "title": "When ingesting data into the CMDB using Import Sets and Transform Maps, which type of script is added to ensure the data is processed through the Identification and Reconciliation Engine (IRE)?",
    "options": [
      {
        "text": "onStart",
        "id": "A"
      },
      {
        "text": "onAfter",
        "id": "B"
      },
      {
        "text": "onComplete",
        "id": "C"
      },
      {
        "text": "onBefore",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "레거시 Import Set 및 Transform Map 환경에서 CMDB 데이터의 중복을 방지하려면 데이터가 대상 테이블에 삽입되기 직전에 실행되는 'onBefore' 변환 이벤트 스크립트를 사용해야 합니다. 개발자는 이 단계에서 'CMDBTransformUtil' 스크립트 오브젝트를 호출하여 데이터를 IRE(식별 및 조정 엔진)로 우회 처리하고, 'ignore = true;' 설정을 통해 기본 변환 엔진의 중복 삽입 시도를 차단하는 방식을 취합니다."
  },
  {
    "id": 28,
    "title": "What ensures that data volume in the CMDB is manageable?",
    "options": [
      {
        "text": "Scheduled Jobs",
        "id": "A"
      },
      {
        "text": "Business Rules",
        "id": "B"
      },
      {
        "text": "Archive Policies",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB에서 방대한 데이터 볼륨을 효율적으로 제어하고 시스템 성능을 최적화하는 표준 메커니즘은 '아카이브 정책(Archive Policies)'입니다. 아카이브 정책은 보존 기간을 초과하거나 비활성화된 레코드를 메인 테이블에서 독립된 아카이브용 테이블로 안전하게 격리하여, 참조 무결성을 깨뜨리지 않고 데이터 볼륨을 경량화합니다. 커스텀 스크립트 기반의 Scheduled Jobs(A)나 Business Rules(B)는 데이터 유실 및 고아 관계 양산 위험이 있어 권장되지 않습니다."
  },
  {
    "id": 29,
    "title": "A configuration manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      {
        "text": "CMDB Data Manager",
        "id": "A"
      },
      {
        "text": "CMDB Workspace",
        "id": "B"
      },
      {
        "text": "CI Class Manager",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow의 차세대 시각화 도구인 Unified Map(통합 맵)은 Next Experience 환경의 핵심 허브인 'CMDB Workspace' 내부에서 제공되는 컴포넌트 기능입니다. 관리자 및 운영자는 CMDB Workspace에서 CI 레코드를 조회할 때 해당 맵을 통해 직관적인 인프라 의존성 구조와 연동된 ITSM/ITOM 이벤트를 실시간 가시화할 수 있습니다. 수명 주기를 제어하는 Data Manager(A)나 스키마를 설계하는 CI Class Manager(C)에서는 이 맵에 접근할 수 없습니다."
  },
  {
    "id": 30,
    "title": "A service owner is using the Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel? (Choose all that apply)",
    "options": [
      {
        "text": "Managed by group",
        "id": "A"
      },
      {
        "text": "Discovery source",
        "id": "B"
      },
      {
        "text": "Business criticality",
        "id": "C"
      },
      {
        "text": "CI type",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "ServiceNow Unified Map의 필터 패널은 의존성 지도 상의 복잡한 노드와 관계선을 효율적으로 정제하기 위한 토폴로지 필터를 제공합니다. 대표적으로 특정 자산 클래스 레이어를 온/오프하는 'CI type(D)' 필터와, 데이터의 출처별로 관계망을 제어하는 'Discovery source(B)' 필터가 OOTB로 제공됩니다. Managed by group(A)이나 Business criticality(C)는 개별 레코드의 양식 속성이며 지도 전용 필터 패널의 기본 옵션이 아니므로 오답입니다."
  },
  {
    "id": 31,
    "title": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      {
        "text": "Compliance",
        "id": "A"
      },
      {
        "text": "Audit",
        "id": "B"
      },
      {
        "text": "Certification",
        "id": "C"
      },
      {
        "text": "Attestation",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB Data Manager의 'Certification(인증)' 정책은 담당자에게 특정 CI의 속성 데이터 값들을 검증하도록 태스크를 부여합니다. 이 태스크 폼 안에서 담당자는 잘못된 속성 필드를 직접 수정(Update)하여 데이터 무결성을 실시간으로 정비할 수 있는 편집 권한을 가집니다. 반면 'Attestation(D)' 정책은 자산의 물리적 실존 여부(Existence)만 증명/확인하는 워크플로우를 생성하므로 세부 필드 수정 목적에는 부합하지 않습니다."
  },
  {
    "id": 32,
    "title": "CMDB class owners are receiving tasks under the My Work tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      {
        "text": "CMDB Data Manager",
        "id": "A"
      },
      {
        "text": "De-duplication templates",
        "id": "B"
      },
      {
        "text": "CMDB Health Dashboard",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CMDB Workspace의 'My Work' 탭은 개별 관리자 및 클래스 소유자에게 할당된 실시간 자산 거버넌스 작업을 모아주는 인터페이스입니다. 이 작업 큐에 올라오는 증명(Attestation), 인증(Certification) 등 수명 주기 기반의 검증 태스크들을 뒤에서 자동으로 설계하고 생성해 내는 핵심 관리 엔진은 'CMDB Data Manager'입니다. De-duplication templates(B)는 존재하지 않는 가짜 옵션이며, Health Dashboard(C)는 자산 건강 상태 지표를 다루는 화면이므로 오답입니다."
  },
  {
    "id": 33,
    "title": "A CMDB Administrator reviewing the CMDB Data Foundations Dashboard notices the unique locations results percentage is low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      {
        "text": "Retain the location that matches the organization standard naming convention and delete the duplicate without further validation",
        "id": "A"
      },
      {
        "text": "Use the Duplicate CI Remediator to merge the duplicate location records",
        "id": "B"
      },
      {
        "text": "Keep both locations as either can be used as valid alternate locations",
        "id": "C"
      },
      {
        "text": "Review both locations, update CI with the correct location and delete the duplicate location",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 공식 'Percent of Unique Locations' 플레이북(KB0832200)에 따르면, 중복 명칭을 가진 위치(Location) 레코드를 정제할 때는 데이터 무결성을 위해 순차적 프로세스를 밟아야 합니다. 먼저 중복 대상을 리뷰한 뒤, 가짜 위치 레코드를 가리키고 있던 CI 등의 하부 참조 연결고리를 진짜 표준 위치 레코드로 먼저 정정(Update)해주고, 마지막으로 연결 관계가 사라진 중복 위치 레코드를 안전하게 삭제(Delete)해야 합니다. Duplicate CI Remediator(B)는 오직 cmdb_ci 테이블 하위 자산 전용 툴이며, cmn_location 테이블 데이터에는 적용할 수 없으므로 오답입니다."
  },
  {
    "id": 34,
    "title": "A CMDB administrator is reviewing the health of the CMDB and notices a large percentage of hardware CIs are missing serial numbers. The administrator contacts ServiceNow support and would like to know which structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue. Which option is correct?",
    "options": [
      {
        "text": "CMDB Data Foundations Dashboard playbooks",
        "id": "A"
      },
      {
        "text": "CSDM Data Foundations Dashboard playbooks",
        "id": "B"
      },
      {
        "text": "CSDM Now Create playbooks",
        "id": "C"
      },
      {
        "text": "CMDB Health Dashboard playbooks",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow는 기초 데이터(시리얼 번호 누락 등)의 품질 이슈를 체계적으로 분석(Analyze), 보정(Fix), 통제(Govern)할 수 있도록 'CMDB Data Foundations Dashboard'를 통해 공식 Get-Well Playbook(처방전 가이드)을 제공합니다. 하드웨어 시리얼 번호는 물리적 자산 속성이므로 CSDM(B, C) 영역이 아니며, CMDB Health Dashboard(D)는 자동화된 치유 태스크를 생성할 뿐 구조화된 지침서(Playbook) 자체를 제공하는 플랫폼이 아닙니다."
  },
  {
    "id": 35,
    "title": "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to ensure lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store that will be used to satisfy these audits?",
    "options": [
      {
        "text": "Business Applications and Information Objects",
        "id": "A"
      },
      {
        "text": "Customer Service Offerings and Databases",
        "id": "B"
      },
      {
        "text": "Technology Management Service Offerings (Technology Management Offering (구 Technical Service Offering)s) and Dynamic CI Groups",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "CSDM 프레임워크에서 애플리케이션의 규제 준수(Compliance) 및 데이터 보안 요구사항을 정의하고 추적하는 최적의 장소는 'Design(설계) 도메인'입니다. 개발 팀은 개념적 아키텍처를 정의하는 'Business Application' 레코드에 규제 감사 메타데이터를 저장하고, 해당 앱이 처리하는 논리적 데이터 자산 종류(PII, PCI 등)를 'Information Object'로 매핑하여 상호 연결해 두어야 합니다. 이를 통해 인프라의 변동과 관계없이 전사 데이터 거버넌스 감사를 충족할 수 있습니다. 운영 단위인 기술 서비스(C)나 소비 단위인 고객 서비스(B) 도메인은 목적에 부합하지 않습니다."
  },
  {
    "id": 36,
    "title": "The following reconciliation rules are configured for the Windows Server class: ServiceNow (Priority: 100), Altiris (Priority: 200), and SCCM (Priority: 300). Which statements are true? (Choose two)",
    "options": [
      {
        "text": "Data collected with a discovery source of SCCM can update any record in the Windows server table because it has the highest priority number",
        "id": "A"
      },
      {
        "text": "Data collected with a discovery source of ServiceNow can insert new records into the Windows server table but cannot update records created by Altiris and SCCM",
        "id": "B"
      },
      {
        "text": "Data collected with a discovery source of SCCM can be inserted as new records in the Windows server table",
        "id": "C"
      },
      {
        "text": "Data collected with a discovery source of Altiris can update records inserted by SCCM in the Windows server table",
        "id": "D"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "ServiceNow의 식별 및 조정 엔진(IRE)에서 조정 우선순위는 숫자가 작을수록 권한이 높습니다(100 > 200 > 300). 따라서 Altiris(200)는 하위 등급인 SCCM(300)이 작성한 데이터를 덮어쓸 수 있으므로 D번은 참입니다. 또한, 조정 규칙은 기존 필드의 업데이트 권한을 통제할 뿐 신규 CI 레코드의 삽입(Insert) 자체를 거부하지 않으므로 SCCM이 새 데이터를 인서트할 수 있다는 C번 역시 참입니다. SCCM은 우선순위 '숫자'만 클 뿐 실제 권한은 가장 낮으므로 A는 거짓입니다."
  },
  {
    "id": 37,
    "title": "A CMDB administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundations Dashboard. Which benefits support the decision to continually monitor the results on this dashboard? (Choose two)",
    "options": [
      {
        "text": "Provides metrics on active CIs updated in the last 90 days",
        "id": "A"
      },
      {
        "text": "Provides metrics for CIs processed by the IRE",
        "id": "B"
      },
      {
        "text": "Reports on all orphan CIs in the CMDB",
        "id": "C"
      },
      {
        "text": "Provides a list of all CIs that failed health audits",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "ServiceNow의 CMDB Data Foundations Dashboard는 CMDB 아키텍처와 데이터 수집 체계가 베스트 프랙티스 규격에 맞게 운영되는지 모니터링합니다. 대표적으로 지난 90일 동안 지속적으로 갱신 활동이 일어난 활성 자산의 비율(A)과, 데이터 적재 시 중복 방지 엔진인 IRE를 표준 가이드대로 잘 통과했는지 검증하는 지표(B)를 제공합니다. 반면, 고아 CI(C) 및 헬스 감사 실패 자산 리스트(D)는 'CMDB Health Dashboard'의 고유 영역이므로 오답입니다."
  },
  {
    "id": 38,
    "title": "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule = lowest value for the field Disk space GB. The Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule = most reported for the same field. Given the following data sources populating a Windows Server CI (Tivoli: 75, ServiceNow: 75, LANDesk: 50, Altiris: 80), which value will be written to the disk space in GB field for this Windows Server CI?",
    "options": [
      {
        "text": "75",
        "id": "A"
      },
      {
        "text": "50",
        "id": "B"
      },
      {
        "text": "80",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CMDB 조정 규칙 아키텍처에서 타겟 CI가 속한 가장 구체적인 하위 클래스(Child Class)의 규칙은 상위 부모 클래스(Parent Class)의 규칙보다 항상 우선하여 적용(Override)됩니다. 따라서 상위 Server 클래스의 '최솟값(Lowest Value = 50)' 규칙 대신, 하위 Windows Server 클래스의 '최빈값(Most Reported = 75)' 규칙이 최종 채택되어 데이터베이스에 75가 기록됩니다."
  },
  {
    "id": 39,
    "title": "A Configuration Management Process Owner needs to configure Data Manager so that policy tasks are correctly assigned and aligned with the group attribute assigned to a CI class in CI Class Manager. Which field is the recommended field to be used for a policy task assignment?",
    "options": [
      {
        "text": "Change group",
        "id": "A"
      },
      {
        "text": "Approval group",
        "id": "B"
      },
      {
        "text": "Managed by group",
        "id": "C"
      },
      {
        "text": "Support group",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB Data Manager 정책이 실행될 때 생성되는 수명주기 태스크들을 CI Class Manager에서 지정한 소유권 거버넌스와 일치시키려면 'Managed by group' 필드를 활용해야 합니다. 이 필드는 해당 CI 클래스의 데이터 관리 및 수명주기 책임을 지는 그룹을 정의하기 때문에, Data Manager의 아카이브/삭제/인증 태스크를 올바른 담당자에게 배정하는 OOTB 권장 표준 필드입니다. Support group(D)은 장애 조치용, Change group(A)은 인프라 변경 작업용 필드이므로 오답입니다."
  },
  {
    "id": 40,
    "title": "A CMDB Administrator has been asked to establish configuration management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      {
        "text": "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
        "id": "A"
      },
      {
        "text": "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management",
        "id": "B"
      },
      {
        "text": "Relying on automated discovery tools to maintain and update CMDB records",
        "id": "C"
      },
      {
        "text": "Establishing clear governance and continuously monitoring CMDB health",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CMDB 성공의 가장 중요한 핵심 성공 요인(CSF)은 명확한 관리 거버넌스 수립과 CMDB Health(완전성, 정확성, 준수성)의 지속적인 모니터링입니다. 데이터의 무분별한 대량 적재(A)나 통제 없는 자유로운 수정(B)은 데이터 오염을 가속화하는 안티 패턴입니다. 자동화 디스커버리 도구(C)는 매우 훌륭한 자산 수집 수단이지만, 이 역시 거버넌스 체계 하에 통제되어야 가치를 발휘하므로 D번이 가장 궁극적인 필수 요건입니다."
  },
  {
    "id": 41,
    "title": "A CMDB Data Owner wants better insights into the different data sources that populate the CMDB. The Platform Owner installs the Service Graph Connector Central plugin. After installing the plugin, which workspace will have the new Service Graph Connector Central tab available?",
    "options": [
      {
        "text": "CMDB Workspace",
        "id": "A"
      },
      {
        "text": "Service Graph Connector Workspace",
        "id": "B"
      },
      {
        "text": "Discovery Admin Workspace",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 Next Experience 아키텍처는 데이터 도메인별 운영 효율성을 극대화하기 위해 허브 워크스페이스 체계를 사용합니다. Service Graph Connector의 목적은 외부 데이터를 CMDB에 적재하는 것이므로, 이를 중앙 모니터링하는 'Service Graph Connector Central' 대시보드 탭 역시 'CMDB Workspace' 내부에 통합되어 제공됩니다. 'Service Graph Connector Workspace(B)'는 존재하지 않는 가짜 옵션이며, 'Discovery Admin Workspace(C)'는 에이전트리스 방식의 자체 IP 스캔 디스커버리 전용 관리 공간이므로 오답입니다."
  },
  {
    "id": 42,
    "title": "A CMDB Manager wants to start adding CSDM Design & Planning (Design) domain components into the CMDB. Who is involved in this exercise? (Choose two)",
    "options": [
      {
        "text": "Business Relationship Manager",
        "id": "A"
      },
      {
        "text": "Enterprise Architect",
        "id": "B"
      },
      {
        "text": "Service Instance (구Application Service) Owner",
        "id": "C"
      },
      {
        "text": "Application Owner",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "CSDM 5.0 가이드라인에 따르면, 'Design(설계)' 도메인은 Business Capability 및 Business Application과 같은 개념적 아키텍처 자산을 정의하는 영역입니다. 이 단계의 마스터 데이터를 수립하고 관리하는 핵심 페르소나는 전사 아키텍처를 설계하는 'Enterprise Architect(B)'와 해당 애플리케이션의 비즈니스 수명 주기를 관리하는 'Application Owner(D)'입니다. Business Relationship Manager(A)는 Service Consumption (구 Sell/Consume) 도메인 소속이며, Service Instance (구Application Service) Owner(C)는 Service Delivery (구 Manage Technology Management Services (구Technical Services)) 도메인 소속이므로 오답입니다."
  },
  {
    "id": 43,
    "title": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": [
      {
        "text": "CMDB Audit Business Rule",
        "id": "A"
      },
      {
        "text": "CMDB Workspace",
        "id": "B"
      },
      {
        "text": "Data Quality Scheduled Job",
        "id": "C"
      },
      {
        "text": "Data Quality Business Rule",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow Next Experience 환경에서 CMDB 관리자가 데이터 품질(Health 지표 모니터링, 중복 CI 치유, Data Manager 정책 관리 등)을 종합적으로 제어하기 위해 사용하는 단일 허브 인터페이스는 'CMDB Workspace'입니다. 플랫폼은 파편화된 품질 관리 기능을 이 워크스페이스 내에 통합하여 제공합니다. 나머지 보기인 CMDB Audit Business Rule(A), Data Quality Scheduled Job(C), Data Quality Business Rule(D)은 ServiceNow 표준 기능 명칭 스키마에 존재하지 않는 가짜 선지이거나 백엔드 하부 로직에 불과하므로 오답입니다."
  },
  {
    "id": 44,
    "title": "A CMDB CI Class Owner responsible for Windows Servers needs to frequently manage the Windows Server CI Class. Which CI Class Manager feature will help the CI Class Owner streamline access to this class?",
    "options": [
      {
        "text": "CI Favorites",
        "id": "A"
      },
      {
        "text": "Pinned Classes",
        "id": "B"
      },
      {
        "text": "Search CI Classes",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CI Class Manager 스튜디오 내에서 특정 클래스(Windows Server 등)를 자주 관리해야 하는 전담 소유자는 'Pinned Classes' 기능을 사용하여 해당 클래스를 내비게이션 상단에 압정(Pin)으로 고정할 수 있습니다. 이를 통해 복잡한 하부 클래스 트리를 매번 수동으로 확장하거나 검색창에 타이핑하는 번거로움 없이 다이렉트로 접근 경로를 간소화(Streamline)할 수 있습니다. 일반 메뉴나 레코드를 즐겨찾기하는 CI Favorites(A)는 스튜디오 전용 옵션 명칭이 아니므로 오답입니다."
  },
  {
    "id": 45,
    "title": "The CMDB Administrator group wants to filter which CI classes appear on the CMDB Health Dashboard. This ensures that only relevant and manageable CI data is included, excluding classes that are not ready for management. Which feature can the group use to achieve this goal?",
    "options": [
      {
        "text": "Reconciliation Rules",
        "id": "A"
      },
      {
        "text": "Identification Rules",
        "id": "B"
      },
      {
        "text": "Health Inclusion Rules",
        "id": "C"
      },
      {
        "text": "Data Refresh Rules",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB에서 건강도(Health) 메트릭 계산 대상 및 대시보드 표기 범위를 클래스/조건 단위로 선별(Filter)하고자 할 때 사용하는 표준 거버넌스 기능은 'Health Inclusion Rules'입니다. 이를 통해 미관리 대상 클래스나 은퇴 자산 등을 건강진단 스코프에서 일시적/영구적으로 제외하여 대시보드 정합성을 높이고 시스템 백엔드 부하를 방지할 수 있습니다. 데이터 인하우스 진입 시점의 권한과 중복을 통제하는 Reconciliation(A), Identification(B), Data Refresh(D) 규칙은 대시보드 필터링과 무관하므로 오답입니다."
  },
  {
    "id": 46,
    "title": "A configuration management team wants to prevent duplicate server records in the CMDB to avoid confusion. Server records are processed by the Identification and Reconciliation Engine (IRE), which uses identification rules to determine whether a CI already exists. Where are these identification rules configured?",
    "options": [
      {
        "text": "CMDB Workspace",
        "id": "A"
      },
      {
        "text": "CMDB CI Class Manager",
        "id": "B"
      },
      {
        "text": "CMDB Health Dashboard",
        "id": "C"
      },
      {
        "text": "CMDB Data Manager",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB에서 데이터 중복을 방지하는 IRE(식별 및 조정 엔진)의 '식별 규칙(Identification Rules)'은 클래스 계층 구조별로 귀속되는 핵심 데이터 모델 설정입니다. 따라서 이 규칙을 생성하고 편집하는 표준 장소는 백엔드 설계 스튜디오인 'CMDB CI Class Manager'입니다. 일상적인 수명 주기 및 품질 작업을 수행하는 CMDB Workspace(A), 사후 건강도를 리포팅하는 Health Dashboard(C), 자산의 폐기 정책을 다루는 Data Manager(D)는 규칙 설계 창구가 아니므로 오답입니다."
  },
  {
    "id": 47,
    "title": "A CMDB Configuration Manager plans to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these policies?",
    "options": [
      {
        "text": "Missing - Stolen",
        "id": "A"
      },
      {
        "text": "End of Life - Retired",
        "id": "B"
      },
      {
        "text": "In any lifecycle state",
        "id": "C"
      },
      {
        "text": "Inventory - Available",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB Data Manager의 삭제(Delete) 및 아카이브(Archive) 정책은 데이터 유실 사고를 방지하기 위해 운영이 공식 종료된 'End of Life - Retired' 상태의 자산들을 핵심 타겟으로 삼는 것이 표준 베스트 프랙티스입니다. 일반적으로 미사용 자산을 Retire 정책으로 먼저 은퇴 상태로 전환시킨 후, 안전성이 확보된 이 'End of Life - Retired' 풀을 대상으로 삭제와 아카이브를 수행하여 무결성을 유지합니다. 가용 자산인 Inventory(D)나 무차별적인 상태 지정(C)은 거버넌스 규칙 위반이므로 오답입니다."
  },
  {
    "id": 48,
    "title": "A configuration manager is reviewing the lifecycle of Configuration Items (CIs) to ensure data accuracy, data consistency and data relevance. The manager reviews legacy status values and their equivalent CSDM lifecycle stage and lifecycle stage status values. Where can these mappings be reviewed?",
    "options": [
      {
        "text": "Life cycle choice list",
        "id": "A"
      },
      {
        "text": "Life cycle mappings",
        "id": "B"
      },
      {
        "text": "Life cycle properties",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow에서 과거 레거시 상태 필드(install_status, operational_status 등)와 차세대 CSDM 수명 주기 표준 필드(lifecycle_stage, lifecycle_stage_status) 간의 상호 대응 관계를 확인하고 관리하는 표준 메뉴는 'Life cycle mappings'입니다. 이를 통해 기존 데이터와 신규 표준 모델 간의 데이터 일관성과 정합성을 유지하며 안전한 전환을 꾀할 수 있습니다. Choice list(A)는 단순 드롭다운 항목 보관소이며, Properties(C)는 기능 활성화 토글 설정을 다루는 곳이므로 오답입니다."
  },
  {
    "id": 49,
    "title": "A manager needs guidance on how to correctly establish relationships between infrastructure CIs, Technology Management Offering (구 Technical Service Offering)s, and Service Instances (구 Application Services) within the CMDB. Which CSDM domain provides the guidance for defining these relationships?",
    "options": [
      {
        "text": "Service Consumption (구 Sell or Consume)",
        "id": "A"
      },
      {
        "text": "Foundation",
        "id": "B"
      },
      {
        "text": "Design & Planning (구 Design)",
        "id": "C"
      },
      {
        "text": "Build & Integration (구 Build)",
        "id": "D"
      },
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services))",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "ServiceNow CSDM 5.0 가이드라인에 따르면, 실제 운영 환경에 배포된 하부 인프라 자산(Infrastructure CIs), 가동 중인 소프트웨어 인스턴스(Service Instances (구 Application Services)), 그리고 이를 유지보수하는 기술 지원 단위(Technology Management Offering (구 Technical Service Offering)s) 간의 유기적인 의존 관계 체계를 정의하고 제어하는 영역은 'Service Delivery (구 Manage Technology Management Services (구Technical Services))(과거 명칭: Service Delivery)' 도메인입니다. 이 도메인은 실시간 장애 영향도 분석 및 헬프데스크 라우팅의 기준이 되는 핵심 운영계를 담당합니다. 아키텍처 설계를 다루는 Design(C)이나 서비스 소비를 다루는 Sell or Consume(A) 도메인은 부합하지 않으므로 오답입니다."
  },
  {
    "id": 50,
    "title": "The Change Management team wants to implement a change across multiple Configuration Items (CIs) simultaneously. They plan to use a Dynamic CI Group to target those CIs. Which field on the Change Request form must be populated with the Dynamic CI Group?",
    "options": [
      {
        "text": "Configuration Item",
        "id": "A"
      },
      {
        "text": "Business Service",
        "id": "B"
      },
      {
        "text": "Service Offering",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 변경 관리 프로세스에서 Dynamic CI Group(동적 CI 그룹)을 활용해 대규모 인프라 자산에 변경 작업을 일괄 적용하고자 할 때, 해당 그룹 레코드는 Change Request 폼의 'Configuration Item' 필드에 입력되어야 합니다. 이를 통해 플랫폼 엔진이 동적 그룹 내의 CMDB 쿼리를 백엔드에서 실행하여 영향을 받는 실제 개별 자산들을 'Affected CIs' 관련 리스트에 자동으로 확장 및 매핑해 줍니다. 상위 영향도 측정용인 Business Service(B)나 Service Offering(C) 필드는 일괄 자산 매핑을 수행하지 않으므로 오답입니다."
  },
  {
    "id": 51,
    "title": "A configuration management team needs to enable a CMDB Data Manager policy that will remove records from a CI class and still allow the ability to restore the records within a specified period. Which policy type should the configuration manager create?",
    "options": [
      {
        "text": "Delete",
        "id": "A"
      },
      {
        "text": "Archive",
        "id": "B"
      },
      {
        "text": "Certification",
        "id": "C"
      },
      {
        "text": "Retire",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB Data Manager에서 라이브 클래스 테이블로부터 데이터를 제거하여 운영 가시성에서 격리시키면서도, 지정된 보존 기간 내에 안전하게 원래대로 복구(Restore)할 수 있는 가드레일을 제공하는 정책은 'Archive' 정책입니다. 아카이브 정책은 데이터를 'ar_'로 시작하는 쉐도우 테이블로 이주시켜 보존합니다. 반면 Delete(A)는 복구가 불가능한 영구 파괴를 수행하며, Retire(D)는 동일 테이블 내에서 상태 필드만 바꿀 뿐 레코드가 클래스에서 제거되지 않으므로 오답입니다."
  },
  {
    "id": 52,
    "title": "A CMDB administrator is using the Duplicate CI Remediator to resolve duplicate Configuration Items. In the first step of the wizard, a Main CI must be selected. Which attributes can be used to identify the Main CI? (Choose two)",
    "options": [
      {
        "text": "Oldest Created",
        "id": "A"
      },
      {
        "text": "Least Related Items",
        "id": "B"
      },
      {
        "text": "Most Related Items",
        "id": "C"
      },
      {
        "text": "Newest Created",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CMDB 중복 치유 마법사(Duplicate CI Remediator)에서 마스터가 될 주요 자산(Main CI)을 선정할 때는 데이터 손실과 참조 단절을 방지하는 지표를 기준으로 삼아야 합니다. 가장 오래전에 생성된 자산(A)을 선택하면 과거 누적된 ITSM 티켓(인시던트/변경 등)의 참조 무결성을 유지할 수 있으며, 관계선이 가장 많이 연결된 자산(C)을 선택하면 서비스 매핑 토폴로지의 유실 리스크를 최소화할 수 있으므로 두 보기가 참입니다. 최근 생성 자산(D)이나 관계가 적은 자산(B)을 메인으로 삼는 것은 데이터 거버넌스 안티 패턴입니다."
  },
  {
    "id": 53,
    "title": "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360 / Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360. What can the Data Owner do in this case?",
    "options": [
      {
        "text": "CMDB 360 / Multisource CMDB is a platform product that can be used immediately without additional licenses",
        "id": "A"
      },
      {
        "text": "ITOM Discovery must be purchased to take advantage of standard IRE reconciliation rules",
        "id": "B"
      },
      {
        "text": "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow의 식별 및 조정 엔진(IRE) 및 조정 규칙(Reconciliation Rules)은 플랫폼의 내장된 코어 기능(Core Platform Capability)입니다. 따라서 유료 고급 모니터링 레이어인 'CMDB 360(Multisource CMDB)'의 라이선스가 없거나 비활성화된 상태라 하더라도, 여러 외부 데이터 소스 간의 우선순위를 정의하고 속성 덮어쓰기를 통제하는 핵심 조정 로직은 완벽하게 작동합니다. CMDB 360은 유료 애드온이므로 A는 거짓이며, 라이선스 구매가 규칙 사용의 필수 조건이 아니므로 B 역시 거짓입니다."
  },
  {
    "id": 54,
    "title": "What is the difference between data certification and attestation policies when managing a CI?",
    "options": [
      {
        "text": "Attestation can be scheduled while data certification cannot be scheduled.",
        "id": "A"
      },
      {
        "text": "Attestation requires correcting specific attributes of a CI while data certification tracks acknowledgement the CI still exists.",
        "id": "B"
      },
      {
        "text": "Attestation tracks acknowledgement the CI still exists while data certification requires validating specific attributes of a CI.",
        "id": "C"
      },
      {
        "text": "Attestation can be assigned to a group or an individual while data certification can only be assigned to an individual.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 거버넌스에서 Attestation 정책은 자산 소유자에게 해당 자산(CI)이 현실에 여전히 실재하고 유효하다는 '존재 여부(Acknowledgement)'를 인증받는 신속한 수명주기 절차입니다. 반면, Data Certification은 감사 목적에 맞게 해당 자산 레코드 내의 IP 주소, 담당 그룹 등 '특정 세부 속성(Specific Attributes)' 필드 값들이 100% 정확한지 전수 검증하고 수정하는 정밀 데이터 감사 도구입니다. 따라서 두 도구의 목적 차이를 올바르게 설명한 C번이 참입니다."
  },
  {
    "id": 55,
    "title": "A CMDB Administrator wants to improve data quality related to the CSDM framework alignment. Which action should the administrator take to meet this goal?",
    "options": [
      {
        "text": "Use the CSDM Data Foundations Dashboard.",
        "id": "A"
      },
      {
        "text": "Use the default configured CMDB Health Dashboard.",
        "id": "B"
      },
      {
        "text": "Start the ServiceNow Instance Scan (Health Scan).",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow에서 단순 개별 자산 레코드의 값 오류를 넘어, CSDM(Common Service Data Model) 표준 아키텍처 및 성숙도 단계(Foundation, Design, Walk, Run 등)에 부합하는 데이터 모델 정합성을 진단하고 개선하려면 'CSDM Data Foundations Dashboard'를 사용해야 합니다. 3C 품질을 다루는 CMDB Health Dashboard(B)는 자산 레코드 자체의 무결성에 집중하며, Instance Scan(C)은 플랫폼 커스텀 스크립트와 시스템 성능을 스캔하는 도구이므로 CSDM 정렬 품질 개선이라는 목적에 부합하지 않습니다."
  },
  {
    "id": 56,
    "title": "Scenario:\n\n1. A healthcare provider experiences a critical incident.\n2. The incident affects the patient management system (Service Instance (구Application Service)).\n3. The IT Service Desk needs to immediately determine which users and business units are impacted.\n\nWhich CSDM-related data should be used to accurately determine the impacted users?",
    "options": [
      {
        "text": "Service Offerings defined by Department or Location",
        "id": "A"
      },
      {
        "text": "Affected CIs within the Task_CI (Affected CIs) related list",
        "id": "B"
      },
      {
        "text": "The Environment attribute on the Service Instance (구Application Service) or Server CI",
        "id": "C"
      },
      {
        "text": "Incident history logs of similar Configuration Items",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CSDM 5.0 프레임워크에서 기술적 장애를 비즈니스 및 사용자 영향도로 번역하는 가장 직접적인 매개체는 'Sell or Consume(판매/소비)' 도메인의 'Service Offering'입니다. 서비스 오퍼링은 특정 부서(Department)나 물리적 위치(Location) 단위로 구독자(Subscribers)를 매핑하여 관리하기 때문에, 시스템 장애 시 어떤 현업 사용자 집단이 타격을 입었는지 즉각 특정할 수 있습니다. 장애가 발생한 기술 자산 자체를 나타내는 Affected CIs(B)나 시스템 환경 정보(C)는 영향을 받는 인간 사용자 범위를 특정해 주지 못하므로 오답입니다."
  },
  {
    "id": 57,
    "title": "An Asset Manager wants to ensure that asset records and CI records remain synchronized automatically in real-time. How does the manager achieve this in the ServiceNow platform? (Choose two)",
    "options": [
      {
        "text": "Ensure that the business rule to update asset fields on change on the CI table is active.",
        "id": "A"
      },
      {
        "text": "Ensure that scheduled jobs are run during off business hours to batch sync the records.",
        "id": "B"
      },
      {
        "text": "Ensure that the business rule to update CI fields on change on the asset table is active.",
        "id": "C"
      },
      {
        "text": "Ensure a strict one-to-one physical mapping relationship between Asset and CI model categories.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow 아키텍처에서 자산(Asset) 데이터와 CMDB 자산(CI) 데이터 간의 자동 일관성을 유지하는 표준 메커니즘은 '실시간 양방향 비즈니스 룰(Business Rules)'입니다. CI 테이블에서 값이 바뀔 때 자산을 동기화하는 비즈니스 룰(A)과, 자산 테이블에서 값이 바뀔 때 CI를 동기화하는 비즈니스 룰(C)이 모두 활성화되어 있어야만 데이터 유실 없는 상시 동기화가 보장됩니다. 정기적인 일괄 배치 처리를 수행하는 Scheduled Job(B)이나 단순 개념적 매핑(D)은 자동 필드 동기화를 구현하지 못하므로 오답입니다."
  },
  {
    "id": 58,
    "title": "An organization needs to maintain non-discoverable attributes such as warranty expiration dates for hardware CIs. These attributes cannot be updated by automated discovery tools. Which method ensures these attributes are accurately maintained for all CIs in the CMDB?",
    "options": [
      {
        "text": "Use the CMDB Reconciliation Engine to update the attributes.",
        "id": "A"
      },
      {
        "text": "Use a scheduled data import to update the attributes from an external source.",
        "id": "B"
      },
      {
        "text": "Create a new CI class specifically for non-discoverable attributes.",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "보증 만료일이나 구매 정보와 같은 비탐지성 속성(Non-discoverable attributes)은 인프라 스캔 방식의 Discovery 도구로는 수집이 불가능합니다. 따라서 이를 보강하기 위한 표준 베스트 프랙티스는 외부 권위 소스(구매 ERP, 벤더 포탈 등)로부터 'Scheduled Data Import' 파이프라인을 구축하여 정기적으로 데이터를 병합 및 보강하는 것입니다. Reconciliation 엔진(A)은 유입 데이터의 우선순위를 통제할 뿐 자체 데이터를 생성하지 못하며, 속성 저장을 위해 별도 클래스(C)를 만드는 것은 심각한 구조적 안티 패턴이므로 오답입니다."
  },
  {
    "id": 59,
    "title": "A configuration management process owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practices, minimize the cost of future work (technical debt), and ensure compliance with future upgrades. Which solutions accomplish this? (Choose two)",
    "options": [
      {
        "text": "Repurposing an unused base CI class and renaming attributes as required.",
        "id": "A"
      },
      {
        "text": "Extending an existing asset class table to accommodate the custom CI class attributes.",
        "id": "B"
      },
      {
        "text": "Extending an existing CI class table to accommodate the custom CI class attributes.",
        "id": "C"
      },
      {
        "text": "Installing or upgrading the CMDB CI Class Models store application to find a suitable existing CI class accommodating any new attributes.",
        "id": "D"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "ServiceNow CMDB에서 신규 자산 모델을 추가할 때의 베스트 프랙티스는 '최신 순정 기능 확인 후 표준 확장'입니다. 먼저 ServiceNow Store의 'CMDB CI Class Models' 앱을 업데이트하여 적합한 OOTB 표준 클래스가 제공되는지 확인(D)해야 하며, 만약 직접 구축이 불가피하다면 기존 CMDB 계층 구조의 적절한 부모 CI 테이블을 확장(C)하여 기존 식별/조정 규칙을 상속받아야 업그레이드 호환성이 유지되고 기술 부채가 최소화됩니다. 기존 OOTB 클래스를 개조하는 행위(A)는 업그레이드를 불가능하게 만드는 안티 패턴이며, 자산 테이블 확장(B)은 CI 모델 설계 목적에 부합하지 않으므로 오답입니다."
  },
  {
    "id": 60,
    "title": "The Apache Web Server identification rule is configured with the following criterion attributes: 1. Class, 2. Configuration File, 3. Version. Yesterday an Apache web server CI was discovered as part of Service Mapping. Today the application owner upgraded Apache to a different version and restarted the service. What will happen in the CMDB upon the next discovery?",
    "options": [
      {
        "text": "The Apache Web Server CI will be reclassified as a generic Web Server CI.",
        "id": "A"
      },
      {
        "text": "The Identification and Reconciliation Engine (IRE) will throw a duplication error and halt.",
        "id": "B"
      },
      {
        "text": "A new Apache Web Server CI record will be created, resulting in a duplicate entry.",
        "id": "C"
      },
      {
        "text": "The existing Apache Web Server CI will be successfully matched and its version attribute will be updated.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진)는 데이터 유입 시 식별 규칙에 지정된 모든 기준 속성(Criterion Attributes)을 사용하여 기존 CMDB와 대조합니다. 지문처럼 'Version'이 식별 고유 키로 지정된 상황에서 버전 업그레이드가 발생하면, IRE는 변경된 버전 정보를 기반으로 검색을 수행하므로 기존 레코드(구 버전이 적힌 레코드)를 찾지 못하는 식별 매칭 실패(Match Failure)가 일어납니다. 매칭 결과가 0건일 때 플랫폼은 신규 생성을 수행하므로 새로운 Apache Web Server CI가 인서트됩니다. 기존 레코드를 찾지 못했으므로 수정 업데이트(D)나 재분류(A)는 발생할 수 없습니다."
  },
  {
    "id": 61,
    "title": "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)? (Choose two)",
    "options": [
      {
        "text": "Standard infrastructure servers in the enterprise data center.",
        "id": "A"
      },
      {
        "text": "Devices in highly secure environments or Zero-Trust network zones.",
        "id": "B"
      },
      {
        "text": "Core network switches and routers in the DMZ.",
        "id": "C"
      },
      {
        "text": "User endpoints and laptops that intermittently connect to the network.",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "ServiceNow Agent Client Collector(ACC)는 타겟 장치 내부에서 데이터를 수집한 뒤 MID 서버로 아웃바운드(Outbound) 푸시하는 에이전트 기반 솔루션입니다. 따라서 인바운드 포트 개방이 엄격히 금지된 고보안 구역(B)이나, 정기적인 에이전트리스 스캔 창을 놓치고 수시로 온/오프라인을 반복하는 원격 근무자 단말(D)의 인벤토리를 누락 없이 수집할 때 가장 효과적으로 사용됩니다. 일반 데이터센터 서버(A)는 에이전트리스가 표준이며, 네트워크 장비(C)는 서드파티 에이전트 설치가 불가능하므로 오답입니다."
  },
  {
    "id": 62,
    "title": "A CMDB Administrator is implementing a vulnerability response or security incident response solution and needs to ensure that security analysts have enough business context to estimate risk and prioritize remediation. Which CSDM Data Foundations Dashboard playbook directly helps achieve this goal?",
    "options": [
      {
        "text": "Locations without a parent location.",
        "id": "A"
      },
      {
        "text": "Product Models without Product Owners.",
        "id": "B"
      },
      {
        "text": "Service Instances (구 Application Services) with Business Application Relations.",
        "id": "C"
      },
      {
        "text": "Percentage of custom status values for CI Life Cycle Stages.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow Vulnerability Response(취약점 대응) 및 SecOps 환경에서 기술적 자산 위험을 비즈니스 중요도로 환산하기 위해서는, 실시간 가동 중인 'Service Instance (구Application Service)'와 상위의 전략적 'Business Application' 간의 관계선이 완벽히 구축되어 있어야 합니다. 'CSDM Data Foundations Dashboard'의 'Service Instances (구 Application Services) with Business Application Relations' 플레이북은 이 핵심 관계의 누락 여부를 감시하여 보안팀에 명확한 비즈니스 중요도 컨텍스트를 제공하도록 돕습니다. 위치 정보(A), 모델 정보(B), 라이프사이클 표준화율(D)은 실시간 서비스 위험도 우선순위 산정에 직접적인 영향을 주지 못하므로 오답입니다."
  },
  {
    "id": 63,
    "title": "Which of the following represent the core business values derived from a healthy CMDB? (Choose two)",
    "options": [
      {
        "text": "Strengthening operational resiliency.",
        "id": "A"
      },
      {
        "text": "Streamlining incident and change management.",
        "id": "B"
      },
      {
        "text": "Automating maintenance for CI relationships through automated discovery.",
        "id": "C"
      },
      {
        "text": "Collecting and managing depreciation and financial financial data.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "ServiceNow CMDB의 궁극적인 비즈니스 가치(Outcomes)는 시스템 의존성 가시화를 통해 비즈니스 연속성을 수호하는 운영 복원력 강화(A)와, 장애 MTTR 단축 및 변경 작업 위험 감소를 달성하는 ITSM 프로세스 효율화(B)입니다. 관계선을 자동으로 유지보수하는 것(C)은 가치를 구현하기 위한 기술적 '수단/기능(Feature)'에 불과하며, 재무 데이터 관리(D)는 ITAM(자산 관리)의 영역이므로 오답입니다."
  },
  {
    "id": 64,
    "title": "In a company, there is a need to understand the CSDM maturity level required for upcoming IT initiatives. Different stakeholders listed several use cases that they expect the CMDB to cover. Which use case explicitly requires the implementation of Information Objects?",
    "options": [
      {
        "text": "The event operations team wants to automate ITOM events into ITSM incidents for operational actions.",
        "id": "A"
      },
      {
        "text": "The asset management team wants to track hardware asset life cycle compliance within a business application context.",
        "id": "B"
      },
      {
        "text": "The SecOps team wants to understand and calculate operational and data privacy risk in the business application context.",
        "id": "C"
      },
      {
        "text": "The business service management team wants to understand the infrastructure operational impact on customer-facing portals.",
        "id": "D"
      },
      {
        "text": "The customer service team wants to onboard proactive case management for premium subscribers.",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CSDM 5.0 프레임워크에서 'Information Object(정보 객체)'는 비즈니스 애플리케이션이 다루는 논리적 데이터 유형(PII, PCI, 금융 정보 등)을 정의하는 엔티티입니다. SecOps나 GRC 팀이 애플리케이션 컨텍스트 내에서 데이터 민감도에 따른 '운영 리스크(Operational Risk)'를 평가하고 패치 우선순위를 산정하기 위해서는 이 정보 객체 레이어의 매핑이 반드시 필요하므로 C가 참입니다. 이벤트 자동화(A)는 Run 도메인, 자산 관리(B)는 Foundation 도메인, 고객 포털 및 케이스 관리(D, E)는 Sell or Consume 도메인의 영역이므로 오답입니다."
  },
  {
    "id": 65,
    "title": "A CMDB Administrator wants to leverage the CMDB / CSDM Data Foundations Dashboard. What are the core benefits of using this application? (Choose two)",
    "options": [
      {
        "text": "Checks that important data is valid and properly configured according to best practices.",
        "id": "A"
      },
      {
        "text": "Uses fully headless automation to remediate potential data model risks instantly.",
        "id": "B"
      },
      {
        "text": "Provides playbooks to assist in the guided remediation of potential risks.",
        "id": "C"
      },
      {
        "text": "Has an open framework to create custom compliance metrics for the CMDB.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CMDB/CSDM Data Foundations Dashboard는 시스템 아키텍처 정합성을 유지하기 위한 특화 도구입니다. 이 앱은 인스턴스 내의 핵심 구성 데이터가 표준 규격대로 올바르게 세팅되었는지 유효성을 검증(A)하며, 기준 미달 항목이 발견될 경우 어드민이 안전하게 데이터를 클렌징할 수 있도록 가이드형 절차서인 'Playbook'을 제공(C)합니다. 자산 관계 모델을 깨뜨릴 위험이 있는 무조건적 자동 수정(B)이나 커스텀 지표 설계 프레임워크(D)는 이 대시보드의 기능 범위가 아니므로 오답입니다."
  },
  {
    "id": 66,
    "title": "A Business Relationship Manager (BRM) wants to implement Service Portfolio Management (SPM) in order to present finalized business service offerings to business consumers via the request catalog. Which Common Service Data Model (CSDM) domain best aligns with this requirement?",
    "options": [
      {
        "text": "Build & Integration (구 Build)",
        "id": "A"
      },
      {
        "text": "Service Consumption (구 Sell or Consume)",
        "id": "B"
      },
      {
        "text": "Design & Planning (구 Design)",
        "id": "C"
      },
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services))",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 5.0 프레임워크에서 Service Portfolio Management(SPM)를 활용하여 현업 및 비즈니스 소비자(Business Consumers)에게 최종 비즈니스 서비스 오퍼링을 노출하고 구독/소비하도록 통제하는 영역은 'Sell or Consume(과거 명칭: Service Consumption)' 도메인입니다. 이 도메인은 서비스 카탈로그 및 비즈니스 서비스 오퍼링 테이블을 품고 있는 최상위 현업 접점 레이어입니다. 개발을 다루는 Build(A), 개념 도면을 다루는 Design(C), IT 내부 인프라 운영을 다루는 Service Delivery (구 Manage Technology Management Services (구Technical Services))(D)는 소비자 관점의 노출 영역이 아니므로 오답입니다."
  },
  {
    "id": 67,
    "title": "A retail organization wants to ensure that incidents affecting customer-facing services are resolved quickly to avoid revenue loss. Which CSDM attribute should be used to dynamically prioritize these services and related incident tickets?",
    "options": [
      {
        "text": "Assignment Group on the CI record",
        "id": "A"
      },
      {
        "text": "Affected CIs in the Incident record",
        "id": "B"
      },
      {
        "text": "Service Classification in the Technology Management Service (구 Technology Management Service (구Technical Service))",
        "id": "C"
      },
      {
        "text": "Business Criticality in the Service Offering",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CSDM 5.0 프레임워크에서 특정 서비스 장애가 기업 매출에 미치는 타격(Revenue Loss)의 경중을 판별하고 인시던트 우선순위를 제어하는 표준 속성은 Service Offering 테이블에 존재하는 'Business Criticality(비즈니스 중요도)'입니다. 이를 Mission Critical 또는 High 등으로 설정해 두면, 하부 자산 장애 시 티켓의 영향도와 우선순위가 자동 격상되어 신속한 복구를 유도합니다. 담당 팀을 지정하는 Assignment Group(A)이나 단순 기술 레이어 분류 태그인 Service Classification(C)은 비즈니스 중요도 컨텍스트를 제공하지 못하므로 오답입니다."
  },
  {
    "id": 68,
    "title": "Where can a ServiceNow administrator perform Natural Language Queries (NLQ) using Intelligent Search when working with CMDB data?",
    "options": [
      {
        "text": "CMDB Data Manager",
        "id": "A"
      },
      {
        "text": "CI Class Manager",
        "id": "B"
      },
      {
        "text": "CMDB Workspace",
        "id": "C"
      },
      {
        "text": "CMDB Health Dashboard",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 플랫폼의 Next Experience 환경에서 제공되는 'CMDB Workspace'는 자연어 처리 기술을 접목한 '지능형 검색(Intelligent Search)' 기능을 지원합니다. 사용자가 검색창에 일상적인 대화형 문장을 입력하면 백엔드의 NLQ(Natural Language Query) 엔진과 동의어 매핑 시스템이 작동하여 문맥과 의도를 파악하고, 이를 CMDB Query Builder 연동을 통해 구조화된 자산 관계 결과로 반환합니다. Data Manager(A)는 수명주기 제어, Class Manager(B)는 테이블 구조 설계, Health Dashboard(D)는 품질 지표 모니터링 도구이므로 자연어 검색 인터페이스를 지원하지 않습니다."
  },
  {
    "id": 69,
    "title": "A CMDB Administrator needs to prevent duplicate CI creation when Import Sets load data into the CMDB from vendor shipment files containing CI information. What is the best approach?",
    "options": [
      {
        "text": "Create comparison rules in the IRE.",
        "id": "A"
      },
      {
        "text": "Use the CMDBTransformUtil API within the transform map's onBefore script.",
        "id": "B"
      },
      {
        "text": "Set a global system property to force all legacy transform maps to utilize the IRE.",
        "id": "C"
      },
      {
        "text": "Set the coalesce field attribute on target identifier mappings within the transform map.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB에 외부 데이터를 Import Set 및 트랜스폼 맵을 통해 적재할 때, 중복 자산 생성을 방지하는 모범 베스트 프랙티스는 트랜스폼 맵의 'onBefore' 스크립트에서 'CMDBTransformUtil' API를 호출하는 것입니다. 이 API는 들어오는 페이로드를 식별 및 조정 엔진(IRE)으로 리다이렉트하여 정교한 식별 규칙을 거치도록 강제합니다. 일반 테이블에서 쓰이는 Coalesce(D) 방식은 CMDB 자산 적재 시 IRE를 완전히 우회하여 무결성을 파괴하는 안티 패턴이므로 오답입니다."
  },
  {
    "id": 70,
    "title": "A CMDB Administrator is configuring an Identification Rule using CI Class Manager for the Tomcat class. The rule currently uses the following criteria attributes: Class and Install Directory. If no match is found using the Tomcat identification rule, which Identifier Entry configuration option must be enabled so that the Application identification rule (parent class) is attempted for matching?",
    "options": [
      {
        "text": "Applies to",
        "id": "A"
      },
      {
        "text": "Independent",
        "id": "B"
      },
      {
        "text": "Allow fallback to parent's rules",
        "id": "C"
      },
      {
        "text": "Criterion attributes",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진) 환경에서 자식 클래스에 오버라이드된 고유 식별 규칙이 매칭에 실패했을 때, 신규 생성을 유보하고 상위 부모 클래스의 식별 규칙(Parent Rules)을 연쇄적으로 시도하도록 강제하는 식별자 엔트리 설정 속성은 'Allow fallback to parent's rules'입니다. 이 가드레일 옵션을 활성화해야 범용적인 부모 식별 기준을 통해 무분별한 중복 자산 인서트를 막을 수 있습니다. 클래스 대상 지정 필드인 Applies to(A)나 종속성 여부를 가르는 Independent(B)는 폴백 로직을 제어하지 못하므로 오답입니다."
  },
  {
    "id": 71,
    "title": "A CMDB Administrator is starting the process of populating the CMDB and wants to ensure that data that is no longer useful or applicable is removed from the system. Which governance management tool in ServiceNow is used to manage the comprehensive lifecycle of CI data and remove outdated or unnecessary records via automated policies?",
    "options": [
      {
        "text": "CI Class Manager",
        "id": "A"
      },
      {
        "text": "CMDB and CSDM Data Foundations Dashboard",
        "id": "B"
      },
      {
        "text": "CMDB Health Dashboard",
        "id": "C"
      },
      {
        "text": "CMDB Data Manager",
        "id": "D"
      },
      {
        "text": "De-duplication Template",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow에서 노후화되거나 유용성이 상실된 자산(CI) 데이터를 탐지하여 자동으로 은퇴(Retire), 아카이브(Archive), 영구 삭제(Delete) 등 단계별 수명 주기를 제어하고 클렌징하는 표준 거버넌스 관리 도구는 'CMDB Data Manager'입니다. 스키마를 설계하는 Class Manager(A), 아키텍처 정렬도를 보는 Foundations Dashboard(B), 품질 상태를 모니터링하는 Health Dashboard(C)는 직접적인 정책 기반 레코드 제거 프로세스를 수행하지 못하므로 오답입니다."
  },
  {
    "id": 72,
    "title": "Which configuration and governance actions can be directly initiated from within the native CMDB Workspace interface? (Choose three)",
    "options": [
      {
        "text": "Execute and schedule ServiceNow Discovery network scans.",
        "id": "A"
      },
      {
        "text": "Create a CMDB Data Manager data certification or attestation policy.",
        "id": "B"
      },
      {
        "text": "Remediate and merge duplicate CI records via the built-in remediator wizard.",
        "id": "C"
      },
      {
        "text": "Create and extend a new CMDB CI class through the embedded class manager tool.",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow CMDB Workspace는 통합 거버넌스 허브로서 내부에 Data Manager(B), Duplicate Remediator(C), CI Class Manager(D) 엔진이 컴포넌트로 탑재되어 있어 외부 메뉴 이동 없이 즉시 실행이 가능합니다. 반면, 네트워크를 직접 스캔하여 데이터를 수집하는 ServiceNow Discovery 실행(A)은 ITOM 자산 가시성(ITOM Visibility) 엔진 및 전용 Discovery 스케줄 메뉴의 고유 영역이므로 CMDB Workspace에서 직접 구동하는 액션 범주에 포함되지 않아 오답입니다."
  },
  {
    "id": 73,
    "title": "A CMDB Administrator group wants to set up a process to receive automated task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules must be used to configure these recommended fields and enable automatic task generation when those fields are missing?",
    "options": [
      {
        "text": "Technology Management Offering (구 Technical Service Offering)s and Dynamic CI Groups",
        "id": "A"
      },
      {
        "text": "CMDB Workspace and Scheduled Jobs",
        "id": "B"
      },
      {
        "text": "Dynamic CI Groups and CMDB Groups",
        "id": "C"
      },
      {
        "text": "CI Class Manager and Health Preferences",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CMDB Health Dashboard의 완전성(Completeness) 지표를 제어하기 위해서는 두 가지 설정이 결합되어야 합니다. 첫째, 특정 클래스(Linux Server)에서 어떤 필드가 누락되면 안 되는지 권장 필드 규칙을 지정하는 'CI Class Manager'가 필요하며, 둘째, 누락 자산 식별 시 실제로 시스템이 치유 태스크(Remediation Task)를 자동으로 발행하도록 제어하는 전역 스위치인 'Health Preferences'를 활성화해야 합니다. 단순 UI 뷰포트나 서비스 토폴로지 구성 요소(A, B, C)는 완전성 데이터 가드레일을 설계하지 못하므로 오답입니다."
  },
  {
    "id": 74,
    "title": "A CSDM Data Manager wants to view metrics that measure how well Technology Management Services (구 Technical Services) and Technology Management Offerings (Technology Management Offering (구 Technical Service Offering)s) align with CSDM best practices. Which tab within the CSDM Data Foundations Dashboard provides these specific metrics?",
    "options": [
      {
        "text": "Crawl",
        "id": "A"
      },
      {
        "text": "Walk",
        "id": "B"
      },
      {
        "text": "Fly",
        "id": "C"
      },
      {
        "text": "Run",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 5.0 성숙도 프레임워크 가이드라인에 따라, IT 내부의 소유권 및 지원 조직 체계를 뜻하는 'Technology Management Service (구 Technology Management Service (구Technical Service))'와 'Technology Management Offering (구 Technical Service Offering)'의 구축 정합성을 진단하는 영역은 'Walk(걸어가기)' 단계의 고유 지표입니다. 기초 자산을 다루는 Crawl(A), 대고객 비즈니스 서비스를 다루는 Run(D), 고급 데이터 거버넌스를 다루는 Fly(C) 탭은 검진 대상 도메인이 다르므로 오답입니다."
  },
  {
    "id": 75,
    "title": "What are the core characteristics or functions of ServiceNow IntegrationHub ETL? (Choose two)",
    "options": [
      {
        "text": "Integrates third-party data seamlessly into the CMDB or into targeted non-CMDB tables.",
        "id": "A"
      },
      {
        "text": "Performs active agentless network discovery data collection to update the CMDB live.",
        "id": "B"
      },
      {
        "text": "Utilizes the Identification and Reconciliation Engine (IRE) natively to process and integrate data.",
        "id": "C"
      },
      {
        "text": "Out-of-the-box imports Microsoft SCCM and Intune data without installing additional store applications.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow IntegrationHub ETL은 외부 데이터 소스를 GUI 환경에서 변환하는 범용 데이터 파이프라인 도구입니다. 이 도구는 CMDB뿐만 아니라 일반 마스터 테이블(Non-CMDB)로의 적재를 동시에 지원(A)하며, CMDB 적재 시 별도의 스크립트 작성 없이도 플랫폼 표준 엔진인 IRE를 강제로 경유하도록 아키텍처가 설계되어 있어(C) 중복 데이터를 원천 차단합니다. 네트워크 스캔은 Discovery(B)의 영역이며, SCCM 데이터 로드는 Service Graph Connector(D) 전용 앱의 영역이므로 오답입니다."
  },
  {
    "id": 76,
    "title": "A CMDB Administrator wants to configure and use the Staleness metric from the CMDB Health Dashboard (Correctness Scorecard). Which foundational system field is utilized by the health engine to calculate the duration of CI staleness?",
    "options": [
      {
        "text": "Last modified on (last_modified)",
        "id": "A"
      },
      {
        "text": "Created (sys_created_on)",
        "id": "B"
      },
      {
        "text": "Updated (sys_updated_on)",
        "id": "C"
      },
      {
        "text": "First discovered (first_discovered)",
        "id": "D"
      },
      {
        "text": "Most recent discovery (last_discovery)",
        "id": "E"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB Health Dashboard의 정확성(Correctness) 내 노후화(Staleness) 메트릭은 자산 데이터가 오랫동안 갱신되지 않았는지를 추적합니다. 이를 계산하는 표준 시스템 필드는 데이터의 수동 수정 및 자동화 수집 갱신을 모두 포괄하여 실시간 반영하는 'Updated (sys_updated_on)' 필드입니다. 최초 생성일(B)은 데이터의 활성화 여부를 대변하지 못하며, 디스커버리 전용 필드들(D, E)은 수동이나 API로 관리되는 자산에 적용할 경우 전체 정확도 점수를 오염시키기 때문에 오답입니다."
  },
  {
    "id": 77,
    "title": "A CMDB Data Manager needs to create, publish, and manage CMDB Data Manager policies to automate and govern CI lifecycle operations. Where within the ServiceNow platform should this administrative workflow be executed?",
    "options": [
      {
        "text": "CMDB Workspace - CMDB 360 tab",
        "id": "A"
      },
      {
        "text": "Service Operations Workspace",
        "id": "B"
      },
      {
        "text": "CI Class Manager",
        "id": "C"
      },
      {
        "text": "CMDB Workspace - Management tab",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow의 현대적인 넥스트 익스피리언스 아키텍처에서 'CMDB Data Manager'의 정책 생성, 게시, 관리 워크플로우는 'CMDB Workspace' 내부의 'Management' 탭으로 통합 관리 주소지가 일원화되었습니다. 이 탭이 자산 데이터의 전사 수명 주기 가드레일을 통제하는 핵심 센터 역할을 합니다. 데이터 소스 다각화 품질을 분석하는 CMDB 360 탭(A), ITSM 티켓 운영 공간인 Service Operations Workspace(B), 데이터 모델 스키마를 설계하는 Class Manager(C)는 정책 기획 및 배포 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 78,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field, while its child class, Windows Server, uses a rule that selects the most reported value. Based on the RAM values available from different discovery sources in the Multisource CMDB for a given Server, which RAM value will ultimately be written to the CMDB for that Server record?\n\n• Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020\n\n",
    "options": [
      {
        "text": "6020",
        "id": "A"
      },
      {
        "text": "2048",
        "id": "B"
      },
      {
        "text": "4096",
        "id": "C"
      },
      {
        "text": "1024",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "이 문제는 다중 소스 환경에서 클래스 상속에 따른 동적 조정 규칙(Dynamic Reconciliation Rules)의 적용 대상을 정확히 구별할 수 있는지 검증합니다. 질문에서 최종 수정을 요청한 대상은 'Windows Server'가 아닌 일반 'Server' 레코드이므로, 부모 클래스에 설정된 'Largest Value(가장 큰 값)' 규칙이 발동합니다. 유입된 모든 페이로드 값(2048, 4096, 6020) 중 수학적으로 가장 큰 값은 6020이므로 A가 최종 반영됩니다. 자식 클래스의 규칙인 'Most Reported(최빈값)'를 오인하여 적용할 경우 4096(C)이라는 함정에 빠지게 되므로 오답입니다."
  },
  {
    "id": 79,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field, while the Windows Server class uses a rule that selects the most reported value. Based on the RAM values available from different discovery sources in the Multisource CMDB for a given Windows Server, which RAM value will ultimately be written to the CMDB for that Windows Server record?\n\n• Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020\n\n",
    "options": [
      {
        "text": "6020",
        "id": "A"
      },
      {
        "text": "2048",
        "id": "B"
      },
      {
        "text": "4096",
        "id": "C"
      },
      {
        "text": "1024",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "이 문제는 다중 데이터 소스 환경에서 자식 클래스의 규칙 오버라이드(Class Override) 메커니즘을 정확히 이해하고 있는지 검증합니다. 질문의 대상이 'Windows Server' 레코드이므로 부모의 규칙(Largest) 대신 자식 클래스 고유의 동적 조정 규칙인 'Most Reported Value(가장 많이 보고된 값)'가 우선 적용됩니다. 유입된 페이로드 데이터 중 4096이 총 2회(Tivoli, ServiceNow)로 가장 많이 보고되었으므로 C가 최종 승인되어 작성됩니다. 부모의 규칙을 잘못 대입하여 최대값인 6020(A)을 선택하지 않도록 주의해야 합니다."
  },
  {
    "id": 80,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow'. If the ServiceNow Discovery source attempts to update an attribute on an existing CI record, what is the expected outcome determined by the IRE?",
    "options": [
      {
        "text": "Allow Update",
        "id": "A"
      },
      {
        "text": "Do Not Allow Update",
        "id": "B"
      },
      {
        "text": "Do Not Allow Insert",
        "id": "C"
      },
      {
        "text": "Allow Insert",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진) 가이드라인에 따라, 조정 규칙(Reconciliation Rule)은 특정 자산 필드를 업데이트할 수 있는 '공식 권한 소스'를 지정합니다. 지문에서 'ServiceNow'가 해당 클래스의 허용 소스로 정의되어 있으므로, ServiceNow 소스로부터 유입된 기존 자산 업데이트 시도는 안전하게 수용(Allow Update)됩니다. 조정 규칙은 신규 삽입(Insert) 단계에는 관여하지 않고 오직 수정(Update) 단계에만 작동하므로 C와 D는 오답이며, 등록된 소스이므로 B 역시 오답입니다."
  },
  {
    "id": 81,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow, SCCM'. If the Altiris discovery source attempts to update an attribute on an existing matched CI record, what is the expected outcome determined by the IRE?",
    "options": [
      {
        "text": "Allow Update",
        "id": "A"
      },
      {
        "text": "Do Not Allow Update",
        "id": "B"
      },
      {
        "text": "Do Not Allow Insert",
        "id": "C"
      },
      {
        "text": "Allow Insert",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진)에서 특정 클래스나 필드에 조정 규칙(Reconciliation Rule)이 정의되면, 지정된 소스들만 데이터를 수정할 수 있는 화이트리스트 보안 정책이 수립됩니다. 허용 소스가 ServiceNow와 SCCM으로 국한된 상황에서 리스트에 없는 Altiris 소스가 기존 자산의 업데이트를 시도하면, IRE는 데이터의 신뢰성을 보호하기 위해 업데이트를 차단(Do Not Allow Update)합니다. 조정 규칙은 신규 생성(Insert) 단계에는 개입하지 않으므로 C와 D는 논외 오답입니다."
  },
  {
    "id": 82,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow'. If the Altiris discovery source attempts to insert a brand new, unmatched CI record into the CMDB, what is the expected outcome determined by the IRE?",
    "options": [
      {
        "text": "Allow Update",
        "id": "A"
      },
      {
        "text": "Do Not Allow Update",
        "id": "B"
      },
      {
        "text": "Do Not Allow Insert",
        "id": "C"
      },
      {
        "text": "Allow Insert",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진) 아키텍처 표준 규칙에 따라, 조정 규칙(Reconciliation Rules)은 오직 기존에 매칭된 자산 레코드를 '수정(Update)'하는 시점에만 화이트리스트 권한을 검사합니다. 시스템에 존재하지 않는 신규 자산을 최초로 생성하는 '삽입(Insert)' 단계에서는 어떠한 조정 규칙도 개입하지 않고 우회(Bypass)하므로, Altiris 소스의 신규 자산 삽입 시도는 무조건 허용(Allow Insert)됩니다. 트랜잭션의 본질을 파악하지 못하고 단일 소스 제한 정책에 함몰되어 C번(차단)을 선택하지 않도록 각별히 주의해야 합니다."
  },
  {
    "id": 83,
    "title": "Which of the following correctly describes the core definition of the Configuration Management Database (CMDB) within the ServiceNow platform?",
    "options": [
      {
        "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle.",
        "id": "A"
      },
      {
        "text": "Specific information elements that further describe a CI, such as a name, serial number, or operating system version.",
        "id": "B"
      },
      {
        "text": "Core foundation data records, including users, support groups, and operational locations.",
        "id": "C"
      },
      {
        "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral attributes.",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 아키텍처 표준 가이드라인에 따라, CMDB는 자산(CI) 데이터와 그 관계 정보를 전체 수명 주기 동안 통합 관리하는 데이터베이스 컨테이너 총체를 의미하므로 A가 정답입니다. 선지 B는 CI Attributes(속성), 선지 C는 Foundation Data(기초 데이터), 선지 D는 CI Class(클래스/테이블)의 표준 정의이므로 CMDB 전체를 설명하는 보기가 아닙니다."
  },
  {
    "id": 84,
    "title": "Which of the following correctly describes the concept of 'Attributes' within the context of the ServiceNow CMDB?",
    "options": [
      {
        "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle.",
        "id": "A"
      },
      {
        "text": "Specific information elements or data fields that further describe a CI, such as a name, serial number, or operating system.",
        "id": "B"
      },
      {
        "text": "Core foundation data records, including users, support groups, and operational locations.",
        "id": "C"
      },
      {
        "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral attributes.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 데이터 모델 표준 가이드라인에 따라, Attributes(속성)는 개별 자산(CI)의 구체적인 스펙과 메타데이터를 나타내는 개별 데이터 필드(Column)를 의미하므로 B가 정답입니다. 선지 A는 CMDB 자체, 선지 C는 Foundation Data(기초 데이터), 선지 D는 CI Class(클래스)의 표준 정의이므로 오답입니다."
  },
  {
    "id": 85,
    "title": "Which of the following correctly describes the core concept of 'Foundational Data' within the ServiceNow platform?",
    "options": [
      {
        "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle.",
        "id": "A"
      },
      {
        "text": "Specific information elements or data fields that further describe a CI, such as a name, serial number, or operating system.",
        "id": "B"
      },
      {
        "text": "Core platform-wide reference metrics and organizational records, specifically users, support groups, and locations.",
        "id": "C"
      },
      {
        "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral attributes.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 프레임워크 가이드라인에 따라, Foundational Data(기초 데이터)는 인프라 자산 데이터는 아니지만 CMDB 자산 및 ITSM 프로세스 전반에서 소유권, 지원 담당, 물리적 위치를 매핑하기 위해 참조하는 사용자, 그룹, 위치 등의 공통 마스터 데이터를 의미하므로 C가 정답입니다. 선지 A는 CMDB, 선지 B는 Attributes, 선지 D는 CI Class의 정의이므로 오답입니다."
  },
  {
    "id": 86,
    "title": "Which of the following correctly describes the core concept of a 'Class' within the ServiceNow CMDB?",
    "options": [
      {
        "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle.",
        "id": "A"
      },
      {
        "text": "Specific information elements or data fields that further describe a CI, such as a name, serial number, or operating system.",
        "id": "B"
      },
      {
        "text": "Core platform-wide reference metrics and organizational records, specifically users, support groups, and locations.",
        "id": "C"
      },
      {
        "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral and schema attributes.",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CMDB 아키텍처 표준 가이드라인에 따라, Class(클래스)는 공통된 스펙 데이터와 필드 구조를 공유하는 특정 유형의 자산(CI) 집합을 분류하여 격리 보관하는 '독립 데이터베이스 테이블'을 의미하므로 D가 정답입니다. 선지 A는 CMDB 컨테이너 전체, 선지 B는 Attributes(속성), 선지 C는 Foundational Data(기초 데이터)의 표준 정의문이므로 오답입니다."
  },
  {
    "id": 87,
    "title": "An Identification Rule for a CI class is defined with two sequential Identifier Entries: Priority 100 uses the 'Name' attribute, and Priority 200 uses the 'IP Address' attribute (requiring strict compound verification). Two new CI records are subsequently imported into the system.\n\n• CI one: The name matches an existing CI record in the CMDB.\n• CI two: The IP address matches an existing CI record in the CMDB, but no name or MAC address matches.\n\nWhich outcome is correct based on the ServiceNow IRE processing?",
    "options": [
      {
        "text": "CI one will update the existing CI, and CI two will be inserted as a brand new CI.",
        "id": "A"
      },
      {
        "text": "CI one will be inserted as a brand new CI, and CI two will update the existing CI.",
        "id": "B"
      },
      {
        "text": "Both CI one and CI two will successfully match and update their respective existing CIs.",
        "id": "C"
      },
      {
        "text": "Both CI one and CI two will fail criteria and be inserted as brand new CIs.",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow IRE 엔진은 식별 엔트리의 우선순위와 속성의 고유성 가치를 엄격히 따집니다. CI 1은 최우선 고유 식별자인 'Name' 매칭에 성공했으므로 기존 레코드를 정확히 찾아내어 업데이트(Update)합니다. 반면, CI 2는 유동적 필드인 'IP Address'만 매치되었을 뿐 복합 식별 가드레일을 충족하지 못하므로, 기존 자산의 무결성 오염을 방지하기 위해 매칭 실패로 판정하고 시스템에 신규 삽입(Insert) 처리하므로 A가 완벽한 정답입니다."
  },
  {
    "id": 88,
    "title": "A CMDB Administrator installs a certified Service Graph Connector (SGC) from the ServiceNow Store and subsequently customizes the out-of-the-box data mappings provided within the connector. What is the direct consequence of introducing these customized mappings?",
    "options": [
      {
        "text": "Fields populated by the customization will automatically have a metadata tag associated with them in the target CMDB tables.",
        "id": "A"
      },
      {
        "text": "The customized mappings are no longer covered under standard ServiceNow technical support, rendering the customer fully responsible for supporting and maintaining their modified SGC.",
        "id": "B"
      },
      {
        "text": "The execution engine will prevent the SGC from running unless a formal system approval record is created and attached to the data source.",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 서비스 그래프 커넥터(SGC)는 글로벌 벤더와 공동 개발하여 데이터 정합성을 보증하는 인증 제품입니다. 따라서 관리자가 기본 제공되는 OOTB 매핑 구조를 임의로 커스터마이징하면 제품 업그레이드 시 스킵 로그가 발생할 뿐만 아니라, ServiceNow 공식 기술 지원 및 보증 범위(Supportability)를 즉시 벗어나게 되므로 향후 모든 유지보수 및 디버깅 책임은 고객사(Customer)가 전적으로 부담하게 됩니다."
  },
  {
    "id": 89,
    "title": "An organization uses multiple data sources to update its CMDB, and each data source has a different priority level assigned via reconciliation rules. A high-priority data source updates server records weekly. However, due to an integration issue, this high-priority source stops updating the records. Which configuration specifically allows a lower-priority data source to override and update the records after a specified period of inactivity from the higher-priority source?",
    "options": [
      {
        "text": "Data Refresh Rule",
        "id": "A"
      },
      {
        "text": "Health Inclusion Rules",
        "id": "B"
      },
      {
        "text": "Identification Rules",
        "id": "C"
      },
      {
        "text": "Reconciliation Rules",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow IRE 엔진에서 데이터 소스 간의 고정 우선순위를 세팅하는 것은 Reconciliation Rules(D)이지만, 상위 소스가 '일정 기간 비활성화(Period of inactivity)' 되었을 때 하위 소스가 가드레일을 깨고 임시 업데이트할 수 있도록 기간 기반 권한 양도 규칙을 정의하는 독립 모듈은 'Data Refresh Rule'이므로 A가 정답입니다. 일반 조정 규칙(D)은 기간 소멸에 따른 동적 권한 이양을 수행하지 못하므로 오답입니다."
  },
  {
    "id": 90,
    "title": "A CMDB Configuration Management manager creates a data filter for a certification policy in CMDB Data Manager with the following configuration:\n\n• Target Table: Server [cmdb_ci_server]\n• Filter Condition: [Operating System] [contains] [Server] OR [Operating System] [contains] [Linux].\n\nWhich operating systems dynamically populated on the target table will be affected by this policy? (Choose multiple)",
    "options": [
      {
        "text": "AIX 7.2",
        "id": "A"
      },
      {
        "text": "Windows Server 2022 Datacenter",
        "id": "B"
      },
      {
        "text": "Linux CentOS",
        "id": "C"
      },
      {
        "text": "Windows 2019 Datacenter",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow CMDB Data Manager의 데이터 필터는 텍스트 부분 일치를 판독하는 Contains 연산자를 사용합니다. 'Windows Server 2022 Datacenter'(B)는 'Server' 문자열을 포함하고, 'Linux CentOS'(C)는 'Linux' 문자열을 포함하므로 필터를 통과합니다. 'Windows 2019 Datacenter'(D) 역시 데이터베이스상 부모인 Server 테이블 환경에 속한 서버용 에디션 레코드이므로 정책 영향 범주에 동시 포함됩니다. 반면 유닉스 계열인 AIX 7.2(A)는 두 키워드를 모두 포함하지 않아 제외되므로 오답입니다."
  },
  {
    "id": 91,
    "title": "A Windows Server CI is moved from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). What process occur during this operation?",
    "options": [
      {
        "text": "Class switch",
        "id": "A"
      },
      {
        "text": "Class change",
        "id": "B"
      },
      {
        "text": "Class upgrade",
        "id": "C"
      },
      {
        "text": "Class downgrade",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "상위 Server에서 더 구체적인 하위 Windows Server 클래스로 이동하는 것은 정밀 분류 방향의 Class upgrade입니다."
  },
  {
    "id": 92,
    "title": "A CMDB Administrator installs the CMDB Data Foundations Dashboard application to monitor and improve overall configuration data quality. What is the primary business benefit of utilizing this specific dashboard?",
    "options": [
      {
        "text": "Provides an administrative interface to configure and alter underlying health-related evaluation metrics.",
        "id": "A"
      },
      {
        "text": "Provides actionable, key health-related insights and metrics that empower stakeholders to make informed data-governance decisions.",
        "id": "B"
      },
      {
        "text": "Provides an automated workspace to execute and resolve pending data certification policy compliance tasks.",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow Store 앱인 CMDB Data Foundations Dashboard는 베스트 프랙티스 기준에 맞추어 인스턴스의 데이터 품질 상태를 진단하고 점수화하여 보여주는 시각화 솔루션입니다. 따라서 거버넌스적 방향성을 수립할 수 있는 핵심 메트릭 지표를 제공(B)하는 것이 주임무입니다. 메트릭 설정 자체는 CI Class Manager(A)의 영역이며, 정책 태스크 처리는 CMDB Data Manager(C)의 영역이므로 오답입니다."
  },
  {
    "id": 93,
    "title": "The CMDB Configuration Management team wants to manage and remediate de-duplication tasks that are automatically generated when redundant data is ingested into the CMDB through the Identification and Reconciliation Engine (IRE). In which specific section of the CMDB Workspace can they locate and execute these de-duplication tasks?",
    "options": [
      {
        "text": "The Import Action tile located under the Home tab",
        "id": "A"
      },
      {
        "text": "The Total Status tile located under the My Work tab",
        "id": "B"
      },
      {
        "text": "The CMDB Feature Adoption tile located under the Insights tab",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 공식 문서에 따르면, IRE가 감지한 중복 제거 작업(De-duplication tasks)과 같은 핵심 CMDB Health 관련 조치 항목은 관리자가 가장 먼저 인지하고 실행할 수 있도록 CMDB Workspace 랜딩 페이지인 'Home 탭'의 'Important Actions' 타일에 전면 배치됩니다. (지문에 'Import Action'으로 오타가 존재하나 위치상 A가 정답입니다.) 반면 'My Work' 탭은 CMDB Data Manager가 정책 기반으로 자동 생성하는 데이터 인증(Attestation) 등 수명 주기 작업을 관리하는 곳이므로 오답입니다."
  },
  {
    "id": 94,
    "title": "An organization aligns its CMDB governance with the CSDM 5.0 framework. A CMDB Administrator is evaluating conflicting group ownership values defined across different architectural layers for a specific class of CIs:\n\n• CI Class Manager Default [Managed by Group] = Enterprise IT Services\n• Associated Technology Management Offering (구 Technical Service Offering) [Managed by Group] = Windows Support\n• CI Attribute [Change Group] = Change Management Team\n\n Based on CSDM data-synchronization best practices, what will be the final updated [Managed by Group] value on the infrastructure CIs of this class?",
    "options": [
      {
        "text": "Enterprise IT Services",
        "id": "A"
      },
      {
        "text": "Change Management Team",
        "id": "B"
      },
      {
        "text": "Windows Support",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CSDM(Common Service Data Model) 프레임워크 아키텍처에 따라, 개별 인프라 자산(CI)의 실질적인 관리 책임 조직인 'Managed by Group' 필드는 해당 자산이 귀속되어 서비스를 제공하는 'Technology Management Offering (구 Technical Service Offering)' 레코드에 지정된 그룹 값으로부터 동적으로 동기화 및 상속받는 것이 표준 가이드라인입니다. 따라서 가장 구체적인 서비스 운영 주체인 Windows Support(C)가 최종 반영됩니다. Class Manager의 기본 설정(A)은 범용 기본값에 불과하여 오버라이드되며, Change Group(B)은 변경 통제용 필드로 데이터 목적이 달라 오답입니다."
  },
  {
    "id": 95,
    "title": "A CMDB Administrator is configuring IRE (Identification and Reconciliation Engine) guidelines. While working within the CI Class Manager, they observe the 'Health Inclusion Rules' tab for a specific CI class. How are these sub-rules utilized by the engine during processing?",
    "options": [
      {
        "text": "To narrow the operational scope of CIs that are actively included and evaluated during the identification and quality-assessment process.",
        "id": "A"
      },
      {
        "text": "To filter and reduce the raw payload data being ingested from external discovery sources prior to entering the instance.",
        "id": "B"
      },
      {
        "text": "To reconcile and authorize specific configuration attributes based on the data source's configured priority levels.",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CMDB 아키텍처에서 Health Inclusion Rules(건강도 포함 규칙)는 특정 클래스의 자산 중 건강도 진단 및 식별 프로세스의 대상이 될 레코드의 범위를 좁히는(Narrow the scope) 필터 역할을 수행합니다. 예를 들어 '가동 중(Operational)'인 자산만 솎아내어 품질 점수를 매기도록 통제합니다. 유입 데이터를 사전 차단하는 기능(B)이나 소스 우선순위를 정하는 Reconciliation Rules(C)와는 데이터 작동 단계가 전혀 다르므로 오답입니다."
  },
  {
    "id": 96,
    "title": "A ServiceNow administrator needs to create custom CMDB classes to support specialized proprietary infrastructure and wants to adhere to platform best practices for table naming to eliminate future upgrade conflicts. What is the mandatory starting prefix required for all custom CMDB tables extended in the system?",
    "options": [
      {
        "text": "cmdb_ci_",
        "id": "A"
      },
      {
        "text": "u_cmdb_ci_",
        "id": "B"
      },
      {
        "text": "u_ci_cmdb_",
        "id": "C"
      },
      {
        "text": "ci_cmdb_",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 아키텍처 거버넌스 가이드라인에 따라, 고객이 생성하는 모든 사용자 정의(User-defined) 구성 요소에는 'u_' 접두사가 강제됩니다. 따라서 CMDB 계층 구조를 확장하여 생성하는 모든 커스텀 클래스 테이블의 물리적 명칭은 반드시 'u_cmdb_ci_' 패턴으로 시작해야만 향후 본사 업그레이드 패치 시 순정(OOTB) 테이블과의 명칭 충돌 및 그에 따른 기술 부채를 원천 차단할 수 있습니다."
  },
  {
    "id": 97,
    "title": "A CMDB Configuration Manager needs to view and update core identification rules for a specific CI class to adjust duplication thresholds. Where within the ServiceNow platform can these existing identification rules be officially viewed and configured? (Choose two)",
    "options": [
      {
        "text": "API Integrations application",
        "id": "A"
      },
      {
        "text": "IRE Application portal",
        "id": "B"
      },
      {
        "text": "CI Class Manager",
        "id": "C"
      },
      {
        "text": "CI Identifiers module",
        "id": "D"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "ServiceNow CMDB에서 자산 식별 가드레일을 통제하는 방법은 두 가지 경로가 있습니다. GUI 통합 환경을 제공하는 'CI Class Manager'(C) 내의 Identification 탭을 이용하거나, 내비게이터에서 'CI Identifiers'(D) 모듈을 검색하여 백엔드 레코드 리스트에 직접 접근하는 방식입니다. API 설정(A)은 연동 통로일 뿐이며, 'IRE' 자체는 백엔드 구동 알고리즘의 이름일 뿐 독립된 메뉴 명칭(B)으로 존재하지 않으므로 오답입니다."
  },
  {
    "id": 98,
    "title": "From the CMDB Workspace CI Details view, to investigate and identify active operational tickets such as incidents or problems directly affecting a selected CI, which side panel provides centralized visibility and detail of these transactional records?",
    "options": [
      {
        "text": "Overview panel",
        "id": "A"
      },
      {
        "text": "Service Instances (구 Application Services) panel",
        "id": "B"
      },
      {
        "text": "Related Items panel",
        "id": "C"
      },
      {
        "text": "Attributes panel",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB Workspace 아키텍처 가이드라인에 따라, 특정 자산(CI)에 걸려 있는 활성 인시던트(Incidents), 문제(Problems) 등 연계된 ITSM 프로세스 레코드들의 실시간 현황은 'Related Items' 패널을 통해 통합 가시성을 확보할 수 있습니다. 자산의 기본 스펙 요약을 보여주는 Overview(A), 상위 서비스 의존성을 보여주는 Service Instances (구 Application Services)(B), 스키마 필드를 관리하는 Attributes(D) 패널은 외부 티켓 리스트 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 99,
    "title": "A CMDB Administrator wants to analyze CIs and CI classes that are violating data policies by missing designated required or recommended key attributes. Which CMDB Health Dashboard scorecard specifically quantifies this attribute-population level?",
    "options": [
      {
        "text": "Compliance",
        "id": "A"
      },
      {
        "text": "Correctness",
        "id": "B"
      },
      {
        "text": "Completeness",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 건강도 체계에서 지정된 필수(Required) 또는 권장(Recommended) 필드 속성 값이 채워지지 않고 누락된 자산 현황을 계측하고 관리하는 고유 스코어카드는 'Completeness(완전성)'입니다. 감사의 정책 준수 여부를 검사하는 Compliance(A)나 중복/노후/고아 자산을 추적하는 Correctness(B)는 속성 데이터의 누락률 자체를 산출하는 지표 구역이 아니므로 오답입니다."
  },
  {
    "id": 100,
    "title": "A platform owner is aligning the corporate CMDB architecture with the CSDM 5.0 framework and needs to map product online monitoring systems used exclusively by the IT operations team. Which CSDM domain should the platform owner utilize to properly host these technical monitoring infrastructure services?",
    "options": [
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services))",
        "id": "A"
      },
      {
        "text": "Foundation",
        "id": "B"
      },
      {
        "text": "Build and Integration (Build)",
        "id": "C"
      },
      {
        "text": "Service Consumption (Sell or Consume)",
        "id": "D"
      },
      {
        "text": "Design and Planning (Design)",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CSDM 5.0 표준 가이드라인에 따라, IT 운영 팀이 시스템 관제 및 성능 감시를 위해 내부적으로 사용하는 'Product Online Monitoring Systems'는 대표적인 기술 서비스(Technology Management Service (구 Technology Management Service (구Technical Service))) 모델에 해당합니다. 따라서 'IT를 위한 IT 관리'를 전담하는 'Service Delivery (구 Manage Technology Management Services (구Technical Services))' 도메인에 매핑하는 것이 아키텍처 표준입니다. 기초 데이터를 다루는 Foundation(B), 개발 단계를 다루는 Build(C), 현업 소비 장소인 Consumption(D), 개념 설계를 담당하는 Design(E) 도메인은 모두 오답입니다."
  },
  {
    "id": 101,
    "title": "Within the CI Class Manager interface, which specific configuration tab must a CMDB Administrator access to design and deploy a rule tasked to uniquely identify CIs through the IRE?",
    "options": [
      {
        "text": "Identification Rule tab",
        "id": "A"
      },
      {
        "text": "Reconciliation Rules tab",
        "id": "B"
      },
      {
        "text": "Basic Info tab",
        "id": "C"
      },
      {
        "text": "Pinned Classes list",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CMDB 아키텍처 가이드라인에 따라, 유입되는 자산 데이터의 고유성을 판별하여 중복을 차단하는 식별 규칙(Identification Rules) 및 엔트리는 'CI Class Manager' 내부의 'Identification Rule' 탭에서 시각적으로 설계 및 구성합니다. 소스별 데이터 수정 권한 우선순위를 지정하는 Reconciliation Rules(B), 테이블 기본 메타데이터를 보여주는 Basic Info(C), 즐겨찾기 기능인 Pinned Classes(D)는 식별 규칙 편집 기능을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 102,
    "title": "Within the CI Class Manager interface, which specific UX feature allows a CMDB Administrator to minimize search overhead and ensure easy, rapid navigation back to a frequently accessed configuration class?",
    "options": [
      {
        "text": "Identification Rule tab",
        "id": "A"
      },
      {
        "text": "Reconciliation Rules tab",
        "id": "B"
      },
      {
        "text": "Basic Info tab",
        "id": "C"
      },
      {
        "text": "Pinned Classes list",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CI Class Manager 아키텍처 환경에서 자주 관리하고 모니터링하는 클래스로 신속하게 복귀할 수 있도록 돕는 즐겨찾기 숏컷 기능의 명칭은 'Pinned Classes'입니다. 압정(Pin) 아이콘을 눌러 좌측 상단에 고정해 두면 수천 개의 클래스 트리 사이에서 스크롤 낭비 없이 1초 만에 진입이 가능합니다. 선지 A, B, C는 특정 클래스 진입 후에 개별 규칙을 세팅하는 편집용 '설정 탭'에 해당하므로 탐색 도구를 묻는 지문의 정답이 될 수 없습니다."
  },
  {
    "id": 103,
    "title": "Within the CI Class Manager interface, which specific configuration tab must a CMDB Administrator utilize to define and authorize which external data sources are permitted to update specific CI Attributes based on a trusted priority hierarchy?",
    "options": [
      {
        "text": "Identification Rule tab",
        "id": "A"
      },
      {
        "text": "Reconciliation Rules tab",
        "id": "B"
      },
      {
        "text": "Basic Info tab",
        "id": "C"
      },
      {
        "text": "Pinned Classes list",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 다중 소스(Multi-source) 거버넌스 아키텍처에 따라, 다양한 외부 수집 도구들이 유입될 때 자산 속성(Attributes) 필드 데이터를 오염시키지 못하도록 데이터 소스별 업데이트 권한과 우선순위를 관리하는 독립 설정 영역은 'Reconciliation Rules' 탭이 유일하므로 B가 완벽한 정답입니다. 중복 차단 식별을 다루는 Identification Rule(A), 기본 스키마 표지인 Basic Info(C), 내비게이션 숏컷인 Pinned Classes(D)는 소스 우선순위 제어권을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 104,
    "title": "Within the CI Class Manager interface, which specific configuration tab must a CMDB Administrator access to assign or update the visual class icon used to represent a specific configuration category across Dependency Views and Workspaces?",
    "options": [
      {
        "text": "Identification Rule tab",
        "id": "A"
      },
      {
        "text": "Reconciliation Rules tab",
        "id": "B"
      },
      {
        "text": "Basic Info tab",
        "id": "C"
      },
      {
        "text": "Pinned Classes list",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 메타데이터 표준에 따라, 특정 클래스의 물리적 테이블 속성이나 의존성 관계 도면(Dependency Views) 등 플랫폼 전역에서 시각적 식별성을 높이기 위해 사용되는 '클래스 고유 아이콘(Class Icon)' 설정 기능은 'CI Class Manager'의 가장 첫 번째 화면인 'Basic Info' 탭에서 제어하므로 C가 완벽한 정답입니다. 식별 규칙을 정하는 Identification(A), 소스 우선순위를 정하는 Reconciliation(B), 즐겨찾기 도구인 Pinned Classes(D)는 시각적 아이콘 편집 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 105,
    "title": "When the Identification and Reconciliation Engine (IRE) processes incoming infrastructure payload data and discovers a multi-match scenario where two or more identical CIs already exist in the CMDB, what operational artifact is automatically generated by the platform?",
    "options": [
      {
        "text": "Identification Rules",
        "id": "A"
      },
      {
        "text": "De-duplication Task",
        "id": "B"
      },
      {
        "text": "Reconciliation Rule",
        "id": "C"
      },
      {
        "text": "IRE Data Source Rule",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 아키텍처 가이드라인에 따라, IRE가 데이터를 식별하는 도중 2개 이상의 동일 자산 레코드가 매치되는 '다중 매칭(Multi-match)' 오류가 발생하면 시스템은 기존 데이터 오염을 막기 위해 자동 업데이트를 차단하고, 관리자가 수동으로 병합 조치할 수 있도록 'De-duplication Task(중복 제거 태스크)' 티켓을 자동으로 발행하므로 B가 완벽한 정답입니다. 선지 A, C, D는 관리자가 사전에 구축하는 '정적 규칙 설정' 항목들이므로 오답입니다."
  },
  {
    "id": 106,
    "title": "A CMDB Administrator is utilizing the Duplicate CI Remediator wizard within the CMDB Workspace to resolve redundant configuration records. In the opening step of the workflow, a 'Main CI' must be established as the master target. Which data attributes and metrics are officially provided by the interface to help identify and select the optimal Main CI? (Choose two)",
    "options": [
      {
        "text": "Oldest Created timestamp",
        "id": "A"
      },
      {
        "text": "Least Related Items count",
        "id": "B"
      },
      {
        "text": "Most Related Items count",
        "id": "C"
      },
      {
        "text": "Newest Created timestamp",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CMDB 보정 가이드라인에 따라, 중복 병합 시 시스템 무결성을 지키기 위해 '가장 먼저 생성되어 기존 참조 키를 안정적으로 유지하고 있는 레코드(Oldest Created)'와 '현재 매핑된 인프라 관계 및 티켓 링크가 가장 많아 이관 부하를 최소화할 수 있는 레코드(Most Related Items)'를 메인 자산(Main CI)으로 선정하는 것이 표준 아키텍처 규칙입니다. 반대 성격인 B와 D는 데이터 단절 및 유실 리스크를 높이므로 오답입니다."
  },
  {
    "id": 107,
    "title": "An ITOM Architect is using the CMDB Query Builder to construct a reporting layout to identify: Service Instances (구 Application Services) that contain a Database CI with active Incidents, along with all infrastructure components related to those application services. Which development steps are required within the Query Builder canvas to achieve this hybrid blueprint? (Choose two)",
    "options": [
      {
        "text": "Create a CMDB Query to map the structural relationships between the Service Instances (구 Application Services) and their dependent infrastructure CIs.",
        "id": "A"
      },
      {
        "text": "Create a Service Mapping Query to natively query and filter active incident transaction records linked to the database.",
        "id": "B"
      },
      {
        "text": "Drag and add a non-CMDB table (Incident table) from the palette and create a reference link to the Database CI node.",
        "id": "C"
      },
      {
        "text": "Utilize a Service Mapping Query structure to dynamically append non-CMDB architectural tables into the core topology.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CMDB 쿼리 빌더에서 자산 간의 의존성 관계 토폴로지를 그리는 기본 뼈대는 'CMDB Query'(A)로 시작해야 합니다. 여기에 자산 데이터가 아닌 ITSM 운영 데이터(Incident)를 조건 결합하려면, 좌측 팔레트에서 'Non-CMDB table'(C) 섹션을 확장하여 Incident 테이블을 드래그한 뒤 Database 노드와 참조 링크로 매핑해주어야 합니다. Service Mapping Query(B, D)는 순수 자동화 서비스 맵 탐색 전용 엔진으로 외부 트랜잭션 테이블 조인 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 108,
    "title": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard application to enhance data integrity. What are the primary structural benefits of implementing this store application? (Choose two)",
    "options": [
      {
        "text": "Automatically checks and verifies that critical configuration data is valid, contextualized, and properly configured according to CSDM standards.",
        "id": "A"
      },
      {
        "text": "Executes fully automated background scripts to instantly delete or remediate potential data risks without manual oversight.",
        "id": "B"
      },
      {
        "text": "Provides step-by-step interactive playbooks to dynamically assist administrators in the safe remediation of identified potential data risks.",
        "id": "C"
      },
      {
        "text": "Provides a comprehensive customization framework enabling administrators to script and deploy custom validation metrics inside the dashboard.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CMDB Data Foundations Dashboard는 CSDM 규격에 입각하여 핵심 인프라 데이터의 유효성과 구성 정합성을 검증(A)해 주는 주 진단 엔진입니다. 또한, 데이터의 강제 자동 변형으로 인한 참조 무결성 파괴를 방지하기 위해 임의 자동 조치(B)를 취하는 대신, 어드민에게 안전한 표준 클렌징 절차를 안내하는 전용 'Playbooks'(C)를 제공하여 조치를 보조하는 것이 아키텍처적 본질입니다. 커스텀 메트릭 프레임워크 빌드 기능(D)은 포함하지 않으므로 오답입니다."
  },
  {
    "id": 109,
    "title": "A Business Relationship Manager (BRM) is implementing Service Portfolio Management (SPM) to formally package and publish defined service offerings to business consumers via the Service Catalog. Which Common Service Data Model (CSDM) 5.0 domain best aligns with this requirement of catalog consumption and interaction?",
    "options": [
      {
        "text": "Build and Integration (Build)",
        "id": "A"
      },
      {
        "text": "Service Consumption (구 Sell/Consume)",
        "id": "B"
      },
      {
        "text": "Design and Planning (Design)",
        "id": "C"
      },
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services))",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 5.0 거버넌스 원칙에 따라, 최종 비즈니스 사용자(Business Consumers)에게 서비스 오퍼링을 노출하여 실제 요청 및 소비를 발생시키는 단계를 관할하는 영역은 'Service Consumption (구 Sell/Consume)' 도메인이 유일합니다. 개념적 기획서와 구조를 정의하는 Design(C) 단계나 내부 IT 인프라 운영을 제어하는 Service Delivery(D) 단계는 소비자와의 직접적인 소비 계약 및 청구 거래가 일어나는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 110,
    "title": "A retail organization wants to ensure that critical incidents affecting high-revenue, customer-facing digital storefronts are prioritized automatically within the ITSM pipeline to minimize financial loss. Which specific CSDM attribute should be populated on the service layer to dynamically drive this financial impact triage?",
    "options": [
      {
        "text": "Assignment Group defined on the infrastructure CI record",
        "id": "A"
      },
      {
        "text": "Affected CIs cataloged in the Incident related list",
        "id": "B"
      },
      {
        "text": "Service Classification configured on the Technology Management Service (구 Technology Management Service (구Technical Service)) parent record",
        "id": "C"
      },
      {
        "text": "Business Criticality configured on the Service Offering record",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CSDM 및 ITIL 모범 사례에 따라, 특정 대고객 서비스가 비즈니스 및 매출에 미치는 경제적 치명도는 'Service Offering' 레코드 내부의 'Business Criticality' 속성을 통해 정의됩니다. 인시던트 발생 시 이 속성 값을 기반으로 티켓의 Impact와 Urgency가 연산되어 최우선 순위(P1)로 수평 전파됩니다. 담당 팀을 지정하는 Assignment Group(A), 피해 장비를 나열하는 Affected CIs(B), 서비스의 기술적 종류를 구분하는 Service Classification(C)은 우선순위 산정 메커니즘을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 111,
    "title": "A CMDB Administrator needs to prevent duplicate CI creation and enforce strict data-source serialization when Import Sets process vendor shipment files. Which approach represents the ServiceNow programmatic best practice to route transform map data directly through the Identification and Reconciliation Engine (IRE)?",
    "options": [
      {
        "text": "Create custom comparison rules inside the core IRE configuration panel.",
        "id": "A"
      },
      {
        "text": "Invoke the CMDBTransformUtil API within an 'onBefore' transform script to execute identifyAndReconcile processing.",
        "id": "B"
      },
      {
        "text": "Enable the global system property that automatically forces all legacy transform maps to utilize the IRE.",
        "id": "C"
      },
      {
        "text": "Configure a multi-field coalesce constraint on the targeted attribute fields within the transform map field mapping interface.",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 데이터 통합 가이드라인에 따라, 외부 플랫 파일이나 임포트 세트 데이터를 적재할 때 중복 생성을 원천 차단하고 순정 IRE의 식별/조정 규칙을 적용하는 표준 솔루션은 트랜스폼 스크립트 내에서 'CMDBTransformUtil' API를 구동하는 것입니다. 플랫폼 공통 기능인 단순 Coalesce(D) 매칭은 CMDB 계층 구조 및 다중 소스 거버넌스 룰을 무시하여 데이터 오염을 유발하므로 금지되며, 자동 연동 프로퍼티(C)나 비교 규칙(A)은 시스템에 존재하지 않는 가상의 개념이므로 오답입니다."
  },
  {
    "id": 112,
    "title": "A CMDB Administrator identifies that multiple infrastructure Configuration Items (CIs) lack a designated Support Group. According to CSDM 5.0 data governance best practices, how should the Support Group attribute be automatically populated and dynamically maintained on these infrastructure records?",
    "options": [
      {
        "text": "By linking the infrastructure records to a Dynamic CI Group container.",
        "id": "A"
      },
      {
        "text": "By inheriting the generic classification attributes defined on the parent Technology Management Service (구 Technology Management Service (구Technical Service)) record.",
        "id": "B"
      },
      {
        "text": "By configuring a global default fallback value within the CI Class Manager interface.",
        "id": "C"
      },
      {
        "text": "By populating the Support Group on the associated Technology Management Offering (구 Technical Service Offering) record, which automatically synchronizes down to the underlying CIs.",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CSDM 5.0 표준 아키텍처 가이드라인에 따라, 인프라 자산(CI)의 실질적인 운영 및 장애 배정을 제어하는 'Support Group' 필드는 해당 자산이 귀속되어 실제 운영 계약을 수행하는 'Technology Management Offering (구 Technical Service Offering)' 레코드로부터 동적으로 동기화(Dynamic Group Sync) 및 상속받는 것이 마스터 표준입니다. 연결 통로인 Dynamic CI Group(A)이나 추상적 부모 레이어인 Technology Management Service (구 Technology Management Service (구Technical Service))(B)는 속성의 진실의 원천이 아니며, Class Manager 설정(C)은 범용 기본값에 불과하여 서비스 기반 동기화 대상에서 밀려나므로 오답입니다."
  },
  {
    "id": 113,
    "title": "A CMDB Administrator is working inside the Centralized CMDB Workspace interface. Which of the following governance and lifecycle data management actions can be directly initiated and executed from this specific workspace? (Choose three)",
    "options": [
      {
        "text": "Configure and execute a ServiceNow Discovery network scan schedule.",
        "id": "A"
      },
      {
        "text": "Design and deploy a CMDB Data Manager data certification policy.",
        "id": "B"
      },
      {
        "text": "Launch the Duplicate CI Remediator to merge and resolve redundant asset records.",
        "id": "C"
      },
      {
        "text": "Access the CI Class Manager hierarchy to extend and create a new CMDB class.",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow CMDB 워크스페이스 아키텍처는 데이터 거버넌스의 통합 관리를 지향합니다. 따라서 라이프사이클 정책을 수립하는 Data Manager(B), 실시간 품질 오류를 청소하는 중복 제거 보정 마법사(C), 스키마 뼈대를 디자인하는 Class Manager(D) 기능은 모두 워크스페이스 내부 탭과 타일 형태로 빌트인 되어 있어 즉각 실행이 가능합니다. 반면, 네트워크 통신 및 IP 스캔을 직접 제어하는 Discovery 실행 기능(A)은 독립된 ITOM Discovery 관리 도메인의 주소지이므로 오답입니다."
  },
  {
    "id": 114,
    "title": "A CMDB Architect is evaluating data ingestion methods to import disparate infrastructure telemetry. What are the key architectural characteristics or functions of ServiceNow IntegrationHub ETL compared to legacy transform maps? (Choose two)",
    "options": [
      {
        "text": "It provides a robust engine capable of multi-target scaling to distribute incoming third-party payloads into both CMDB classes and non-CMDB tables simultaneously.",
        "id": "A"
      },
      {
        "text": "It orchestrates active system discovery probes and patterns to execute network-level data collection directly into the database.",
        "id": "B"
      },
      {
        "text": "It natively incorporates and enforces the Identification and Reconciliation Engine (IRE) processing framework without requiring manual scripting.",
        "id": "C"
      },
      {
        "text": "It serves as the standalone, out-of-the-box system application exclusively dedicated to managing the Microsoft SCCM and Intune store integration plugins.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow 데이터 통합 아키텍처 가이드라인에 따라, IntegrationHub ETL은 로코드 기반 인터페이스 내부에 순정 IRE(C)를 기본 내장하여 데이터 오염과 중복을 자동으로 방지합니다. 또한 레거시 트랜스폼과 달리 단일 소스를 기반으로 CMDB 자산과 일반 비CMDB 테이블(A) 모두에 다차원 동시 적재 처리가 가능한 RTE 아키텍처를 기반으로 합니다. 네트워크 탐색을 수행하는 것은 Discovery(B)이며, SCCM 수집 전용 패키지는 Service Graph Connector(D)이므로 오답입니다."
  },
  {
    "id": 115,
    "title": "A Configuration Manager needs architectural guidance on how to correctly map and establish operational relationships between discovered infrastructure CIs, Technology Management Offering (구 Technical Service Offering)s, and underlying Service Instances (구 Application Services) within the platform. Which Common Service Data Model (CSDM) 5.0 domain encapsulates the framework for defining these operational runtime relationships?",
    "options": [
      {
        "text": "Service Consumption (Sell or Consume)",
        "id": "A"
      },
      {
        "text": "Foundation",
        "id": "B"
      },
      {
        "text": "Design and Planning (Design)",
        "id": "C"
      },
      {
        "text": "Build and Integration (Build)",
        "id": "D"
      },
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services))",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "ServiceNow CSDM 5.0 아키텍처 가이드라인에 따라, 실제 가동 중인 인프라 자산(Infrastructure CIs)과 이들이 형성하는 실시간 서비스 인스턴스(Service Instances (구 Application Services)), 그리고 이를 지원하는 IT 내부 엔지니어 조직(Technology Management Offering (구 Technical Service Offering)s) 간의 수직적 운영 관계성을 제어하는 전담 구역은 'Service Delivery (구 Manage Technology Management Services (구Technical Services))' 도메인입니다. 개념적 기획서와 메타데이터만 정의하는 Design(C) 단계나 대고객 판매 접점인 Service Consumption(A) 단계는 실전 런타임 자산들의 물리적 관계선을 통제하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 116,
    "title": "A CMDB Administrator has constructed multiple Technology Management Service Offerings (Technology Management Offering (구 Technical Service Offering)s) and associated them with Dynamic CI Groups to automate group alignment for the underlying member CIs. Which specific operational group attributes are natively synchronized down to the individual member CIs from the parent offering record?",
    "options": [
      {
        "text": "Owned by Group",
        "id": "A"
      },
      {
        "text": "Managed by Group",
        "id": "B"
      },
      {
        "text": "Approval Group",
        "id": "C"
      },
      {
        "text": "Support Group",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "ServiceNow CSDM 5.0 및 ITIL 거버넌스 아키텍처에 따라, Technology Management Offering (구 Technical Service Offering)이 Dynamic CI Group 관계선을 통해 하위 인프라 자산들과 정렬될 때, 플랫폼의 내장 동기화 엔진(Dynamic Group Sync)은 실시간 운영계 핵심 데이터인 'Managed by Group'(B)과 'Support Group'(D) 필드만을 자동 전파 및 동기화합니다. 재무적 소유권을 다루는 Owned by Group(A)이나 컴플라이언스 변경 승인을 제어하는 Approval Group(C)은 개별 자산 또는 별도 자산 도메인의 고유 권한을 보장하기 위해 자동 동기화 파이프라인에서 제외되므로 오답입니다."
  },
  {
    "id": 117,
    "title": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness scorecard for the Server class (Total: 60,000 records). The Duplicate metric shows healthy CIs evaluated as 59,000 of 60,000. However, the Orphan metric displays healthy CIs evaluated as 45,000 of 50,000. Which system configuration best explains this target denominator variance between the two sub-metrics?",
    "options": [
      {
        "text": "The Orphan metric has a static CMDB Group scope restriction configured for the Server class.",
        "id": "A"
      },
      {
        "text": "The Duplicate metric has a Health Inclusion Rule active that dynamically shrinks the base evaluation dataset.",
        "id": "B"
      },
      {
        "text": "The Orphan metric has a Health Inclusion Rule active that filters the Server class to evaluate a targeted subset of records.",
        "id": "C"
      },
      {
        "text": "The Duplicate metric has a dynamic CMDB Group framework configured to append external records into the baseline.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 건강도(Health) 아키텍처 가이드라인에 따라, 특정 하위 메트릭의 평가 대상 분모(모수) 규모를 조건부로 필터링하여 제한하는 전용 제어 도구는 'Health Inclusion Rule'입니다. Orphan 메트릭에만 특정 상태 값(예: Operational)을 타겟팅하는 포함 규칙이 활성화되어 있었기 때문에 분모가 50,000대로 축소되어 연산된 것입니다. Duplicate 메트릭은 규칙이 없어 전체 60,000대를 다 평가했습니다. 단순 논리 컨테이너인 CMDB Group(A, D)은 메트릭별 평가 분모 자산을 동적으로 필터링 차단하는 엔진을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 118,
    "title": "A CMDB Auditor is evaluating data validation strategies to improve overall data governance. What is the fundamental operational difference between CMDB Attestation policies and Data Certification processes when managing a Configuration Item (CI)?",
    "options": [
      {
        "text": "Attestation tasks can be systematically scheduled via automated engines, whereas Data Certification runs exclusively as an on-demand manual workflow.",
        "id": "A"
      },
      {
        "text": "Attestation forces the assigned owner to meticulously audit and correct specific attribute fields, while Data Certification simply logs a high-level acknowledgement that the physical asset is still active.",
        "id": "B"
      },
      {
        "text": "Attestation primarily tracks and logs formal acknowledgement that the CI still physically or logically exists, whereas Data Certification requires detailed validation and correction of specific CI configuration attributes.",
        "id": "C"
      },
      {
        "text": "Attestation workflows can be assigned to either an operational group or an individual user, while Data Certification tasks strictly restrict assignment to a single individual user.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 거버넌스 표준 아키텍처에 따라, Attestation(존재 증명)은 특정 자산의 데이터 수명 주기 상 생존 여부(Existence)를 확인 및 승인하는 가벼운 프로세스인 반면, Data Certification(데이터 인증)은 자산의 세부 필드 속성(Specific Attributes)들의 정합성을 일일이 대조하고 필요 시 수정 보정하는 정밀 데이터 감사 프로세스이므로 C가 완벽한 정답입니다. 두 기능 모두 스케줄링이 가능하며 그룹 배정을 지원하므로 A, D는 오답이며, B는 두 개념의 정의를 정반대로 서술했으므로 오답입니다."
  },
  {
    "id": 119,
    "title": "A CMDB Administrator is configuring the ServiceNow Vulnerability Response (VR) and Security Incident Response (SIR) applications. To ensure security analysts have sufficient business context to automatically estimate risk scores and establish triage priorities, which CSDM Data Foundations Dashboard playbook metric must be optimized?",
    "options": [
      {
        "text": "Locations without a parent location framework validation",
        "id": "A"
      },
      {
        "text": "Name Product Models without designated Product Owners",
        "id": "B"
      },
      {
        "text": "Service Instances (구 Application Services) with Business Application Relations alignment",
        "id": "C"
      },
      {
        "text": "Percentage of custom status values for CI Life Cycle Stages mapping",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow SecOps 아키텍처 가이드라인에 따라, 인프라 자산의 보안 취약점이 비즈니스에 미치는 위험도(Risk)와 우선순위(Priority)를 지능적으로 연산하려면, 발견된 기술 컴포넌트 환경(Service Instance (구Application Service))이 전사의 상위 논리적 기획 뼈대(Business Application)와 유기적으로 관계를 맺고 있어야 합니다. 대시보드에서 이 결합 품질을 진단하고 안내하는 플레이북은 'Service Instances (구 Application Services) with Business Application Relations'가 유일하므로 C가 완벽한 정답입니다."
  },
  {
    "id": 120,
    "title": "The CMDB Configuration Management group aims to display meaningful compliance metrics and pass/fail statistics on the CMDB Health Dashboard compliance scorecard for server records that are lagging behind the corporate security patch standard. Which combination of core backend configuration artifacts must be constructed to drive this specific compliance evaluation?",
    "options": [
      {
        "text": "Technology Management Offering (구 Technical Service Offering)s, Dynamic CI Groups, and CMDB Groups mapping",
        "id": "A"
      },
      {
        "text": "Certification Filter, Certification Template, Audit configuration, and Compliance Score Calculation Job",
        "id": "B"
      },
      {
        "text": "Stale CIs rule, Orphan CIs rule, and Duplicate CIs rule definitions",
        "id": "C"
      },
      {
        "text": "Data Manager Certification Policies, Data Filters, and Scheduled Jobs orchestration",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 건강도(Health) 아키텍처에 따라, Compliance 스코어카드는 플랫폼의 'Desired State Audit' 엔진과 직접 연동되어 점수를 산출합니다. 특정 서버 클래스를 타겟팅하는 'Certification Filter'(B), 통과해야 할 패치 기준을 수립하는 'Certification Template'(B), 그리고 이를 최종 집행하는 'Audit'(B) 레코드가 구성되어야만 준수성 대시보드가 구동됩니다. Correctness 지표인 Stale/Orphan/Duplicate(C)나 Data Manager 속성인 D번은 준수성 점수 연산 파이프라인을 형성하지 않으므로 오답입니다."
  },
  {
    "id": 121,
    "title": "CMDB class owners are reviewing data cleansing tasks assigned to them within the 'My Work' tab of the centralized CMDB Workspace. Which core governance management tool is responsible for executing background lifecycle policies and generating these active assignment tasks?",
    "options": [
      {
        "text": "CMDB Health Dashboard",
        "id": "A"
      },
      {
        "text": "De-duplication templates",
        "id": "B"
      },
      {
        "text": "CMDB Data Manager",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 플랫폼 거버넌스 가이드라인에 따라, CMDB Workspace의 'My Work' 탭에 실시간 팝업되는 데이터 정제, 존재 증명(Attestation), 자산 은퇴 등의 실무 티켓들은 'CMDB Data Manager' 정책 엔진이 백엔드에서 라이프사이클 룰에 의거해 자동으로 생성하고 담당자에게 배정해 주는 것입니다. 단순 모니터링 스코어카드인 Health Dashboard(A)나 중복 조치용 양식 툴인 De-duplication templates(B)는 정책 기반의 대량 수명 주기 태스크 생성 파이프라인을 구동하지 못하므로 오답입니다."
  },
  {
    "id": 122,
    "title": "A Lead CMDB Enterprise Architect wants to leverage dynamic reconciliation rules to intelligently evaluate and determine data source authority based on the real-time context of multi-source discovery payload histories. Which foundational platform architectural feature must be enabled to support this dynamic evaluation?",
    "options": [
      {
        "text": "CMDB Data Manager Lifecycle Engine",
        "id": "A"
      },
      {
        "text": "Standard Legacy Reconciliation Rules",
        "id": "B"
      },
      {
        "text": "CMDB Workspace central user interface",
        "id": "C"
      },
      {
        "text": "CMDB 360 / Multisource CMDB Framework",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 Engine) 가이드라인에 따라, 데이터 소스의 우선순위를 실시간 수집 컨텍스트에 의거해 가변적으로 제어하는 'Dynamic Reconciliation Rules'는 각 서드파티 소스별 입력 히스토리와 원시 데이터를 모두 보존하는 백엔드 공간을 요구합니다. 이 다중 소스 이력 보존 아키텍처를 지원하는 코어 기술이 바로 'CMDB 360 (Multisource CMDB)'이므로 D가 완벽한 전제 조건 정답입니다. 일반 정적 룰(B)이나 데이터 매니저(A)는 소스별 로우 데이터 추적 능력이 없어 동적 규칙을 구동하지 못하므로 오답입니다."
  },
  {
    "id": 123,
    "title": "A Data Center Manager is configuring the ServiceNow CMDB CI Class Manager to define dependency directions between software assets. Given that a single running Application Server host can concurrently run and execute multiple isolated software applications, which cardinality pattern correctly describes the structural framework from the Application Server table ([cmdb_ci_app_server]) to the hosted Application table ([cmdb_ci_appl])?",
    "options": [
      {
        "text": "Many-to-one",
        "id": "A"
      },
      {
        "text": "Many-to-many",
        "id": "B"
      },
      {
        "text": "One-to-many",
        "id": "C"
      },
      {
        "text": "One-to-one",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 데이터 모델 표준에 따라, 런타임 호스트 엔진인 Application Server([cmdb_ci_app_server])는 독립된 소프트웨어 인스턴스인 Application([cmdb_ci_appl])을 하나 이상 구동하는 부모 역할을 수행합니다. 따라서 테이블 배열 순서상 '애플리케이션 서버'에서 '애플리케이션' 방향으로의 의존성 차수는 'One-to-many'(1 대 다)가 정확합니다. 논리적 서비스 계층이 아닌 물리적 프로세스 종속이므로 Many-to-many(B) 구조는 오답입니다."
  },
  {
    "id": 124,
    "title": "According to the Common Service Data Model (CSDM) 5.0 operational governance framework, a systems engineering branch is requesting a Service Catalog item to streamline bare-metal compute enhancements. Which specific CSDM persona is responsible for initiating this infrastructure upgrade request and defining its technical workflow requirements?",
    "options": [
      {
        "text": "Enterprise Architect",
        "id": "A"
      },
      {
        "text": "Service Instance (구Application Service) Owner",
        "id": "B"
      },
      {
        "text": "Technology Service Owner (Technology Management Service (구 Technology Management Service (구Technical Service)) Owner)",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CSDM 거버넌스 표준 명세에 따라, 하드웨어, 네트워크, 서버 등 내부 인프라 자산군과 이를 관리하는 기술 프로세스의 소유권은 'Technology Service Owner'에게 귀속됩니다. 따라서 인프라 업그레이드 카탈로그 아이템 생성을 주도하고 요구사항을 정의하는 역할은 C가 정확합니다. 특정 비즈니스 소프트웨어 인스턴스의 가용성을 관리하는 Service Instance (구Application Service) Owner(B)나 상위 아키텍처 청사진만 그리는 Enterprise Architect(A)는 인프라 실무 요청 프로세스의 소유자가 아니므로 오답입니다."
  },
  {
    "id": 125,
    "title": "A CMDB Administrator installs an out-of-the-box Service Graph Connector and customizes one of its companion script transform records. Later, the Service Graph Connector is systematically upgraded via the ServiceNow Store, which includes an updated version of that default script transform. How does the platform upgrade engine manage this specific asset conflict during the deployment process?",
    "options": [
      {
        "text": "The entire deployment process immediately halts, aborts the installation, and generates a critical system error.",
        "id": "A"
      },
      {
        "text": "A 'Skipped Change' record is logged within the Upgrade History, and the engine preserves the custom script transform without overwriting it.",
        "id": "B"
      },
      {
        "text": "The platform pre-check module detects the customization prior to execution and refuses to initiate the plugin upgrade.",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 플랫폼 업그레이드 거버넌스 사상에 따라, 관리자가 OOTB 구성 요소를 수정한 경우 시스템은 고객의 커스터마이징 자산을 보호하기 위해 새 코드로 덮어쓰지 않습니다. 대신 'Skipped Change' 로그를 생성하여 추후 어드민이 수동 검토(Review/Merge)할 수 있도록 격리 조치하므로 B가 완벽한 정답입니다. 프로세스가 중단되거나(A) 시작 전 거부(C)되는 현상은 플랫폼 가드레일 디자인에 위배되는 오답입니다."
  },
  {
    "id": 126,
    "title": "When a CMDB Administrator is configuring advanced data arbitration within the 'Create Reconciliation Rule' wizard for CMDB 360 / Multisource CMDB, which of the following choices represent officially supported 'Dynamic Rule Types' available in the platform user interface? (Choose all that apply)",
    "options": [
      {
        "text": "Most Reported",
        "id": "A"
      },
      {
        "text": "Last Created",
        "id": "B"
      },
      {
        "text": "Last Updated",
        "id": "C"
      },
      {
        "text": "Smallest Value",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "ServiceNow CMDB 360(Multisource CMDB) 아키텍처 명세에 따라, 플랫폼 마법사 UI에서 공식적으로 제공하는 동적 화해 규칙 유형(Dynamic Rule Types)은 오직 'First Reported', 'Most Reported', 'Last Reported', 'Largest Value', 'Smallest Value' 총 5가지만 존재합니다. 시간 및 빈도 기준의 유형은 모두 'Reported'라는 용어를 사용하므로, 출제자가 임의로 변형한 'Last Created'(B)와 'Last Updated'(C)는 플랫폼 인터페이스에 존재하지 않는 허구의 오답 선지입니다. 따라서 제공된 보기 중 올바른 동적 규칙 유형은 A번과 D번뿐입니다."
  },
  {
    "id": 127,
    "title": "A CMDB Administrator needs to comprehensively analyze, prioritize, and clean up accumulating duplicate CIs within the platform. According to ServiceNow modern data governance best practices, what is the preferred and most effective interface to manage and orchestrate this remediation task?",
    "options": [
      {
        "text": "The De-duplication Dashboard within the centralized CMDB Workspace",
        "id": "A"
      },
      {
        "text": "The generic 'My Tasks' module available in the classic Application Navigator",
        "id": "B"
      },
      {
        "text": "The legacy 'De-duplication Task' flat list module under the CMDB menu",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow의 현대적인 CMDB 아키텍처 가이드라인에 따라, 중복 자산(Duplicate CIs)의 정제 관리를 위한 가장 권장되는 방식(Preferred Way)은 차세대 통합 UI인 'CMDB Workspace' 내부의 'De-duplication Dashboard'를 활용하는 것입니다. 이 대시보드는 자산 클래스별 중복 통계 시각화와 전용 조치 마법사(Remediation Wizard) 진입을 원스톱으로 지원합니다. 레거시 텍스트 리스트 뷰 형태인 De-duplication Task 모듈(C)은 단순 테이블 조회를 제공할 뿐이므로 현대적 최선의 방식(Preferred Way) 맥락에서 오답입니다."
  },
  {
    "id": 128,
    "title": "An organization is executing a major data center migration and needs to map out the downstream consequences of taking specific infrastructure assets offline. How can Service Instance (구Application Service) mapping be strategically utilized within the Change Management process to facilitate this migration?",
    "options": [
      {
        "text": "To provide visibility into the business impact and service dependency scope tied to the targeted infrastructure CIs.",
        "id": "A"
      },
      {
        "text": "To track and audit the static physical location and rack-level positioning of the hardware CIs.",
        "id": "B"
      },
      {
        "text": "To logically simulate and predict which hardware devices will technically drop offline first during power termination.",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow ITOM 및 CSDM 가이드라인에 따라, Service Instance (구Application Service) 매핑은 하부 인프라 구성 항목(CI)들과 최상위 비즈니스 서비스 간의 탑다운 의존성(Dependency)을 증명하는 기술입니다. 따라서 이를 변경 관리에 결합하면 특정 인프라를 건드렸을 때 마비되는 전사적 '비즈니스 영향도(Business Impact)'를 정확히 계산해 주므로 A가 완벽한 정답입니다. 단순 물리적 주소 확인(B)이나 장비 오프라인 순서 계산(C)은 서비스 매핑의 아키텍처적 목적이 아니므로 오답입니다."
  },
  {
    "id": 129,
    "title": "A CMDB Administrator needs to restrict the CIs displayed in transactional reference fields—such as the Configuration Item field on the Incident or Change forms—to only surface mission-critical enterprise hardware and software. Where must the CMDB Administrator go to designate specific classes as 'Principal Classes' within the platform?",
    "options": [
      {
        "text": "CMDB Data Manager Policy Canvas",
        "id": "A"
      },
      {
        "text": "CI Class Manager",
        "id": "B"
      },
      {
        "text": "System Properties ([sys_properties]) registry",
        "id": "C"
      },
      {
        "text": "CMDB Workspace operational dashboard",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 아키텍처 베스트 프랙티스에 따라, 인시던트(Incident) 폼 같은 ITSM 트랜잭션 화면에서 검색 노이즈를 줄이고 핵심 자산만 표출하도록 필터링해 주는 'Principal Class' 속성은 'CI Class Manager' 내부의 클래스 고유 정보 정의 화면에서 체크박스를 활성화하여 제어합니다. 데이터 수명 주기를 제어하는 Data Manager(A)나 가시성 전체 스위치만 켜고 끄는 System Properties(C)는 특정 클래스를 주요 클래스로 커스텀 매킹하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 130,
    "title": "User endpoint devices are seamlessly imported into the CMDB, populating the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] table. The Asset Management team requires this specific user alignment to automatically reflect on the corresponding Hardware Asset [alm_hardware] record. Which platform native governance tool should a Configuration Analyst leverage to fulfill this bi-directional synchronization in an automated, best-practice manner?",
    "options": [
      {
        "text": "Construct a custom synchronous Business Rule on the Computer table to target and update the asset reference.",
        "id": "A"
      },
      {
        "text": "Configure and verify rules within the platform's native AssetCI Field Mapping module.",
        "id": "B"
      },
      {
        "text": "Apply a UI Policy to hide the Asset-level field and leverage dot-walking layout to mirror the CI-level field value.",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 하드웨어 자산 및 구성 관리 통합 베스트 프랙티스에 따라, CI와 Asset 레코드 간의 실시간 필드 동기화는 무한 루프 위험성이 높은 비즈니스 룰(A) 코딩 대신 순정 엔진인 'AssetCI Field Mapping' 모듈을 통해 제어하는 것이 표준입니다. 이 맵을 통해 한쪽의 데이터 변화가 상대 테이블의 상호 매핑된 필드로 코딩 없이 안전하게 전파되므로 B가 정답입니다. 닷워크 UI 제어(C)는 백엔드 물리 필드 값을 직접 적재하지 못하므로 오답입니다."
  },
  {
    "id": 131,
    "title": "A Configuration Governance Officer requires a scalable mechanism to enforce data minimization principles for aging server metadata. According to ServiceNow architectural guidelines, what is a primary purpose or requirement fulfilled by the CMDB Data Manager?",
    "options": [
      {
        "text": "It automates the enforcement and verification of multi-tier hosting relationship rules between discovered infrastructure CIs.",
        "id": "A"
      },
      {
        "text": "It cryptographically encrypts archived repository records to enforce column-level security compliance.",
        "id": "B"
      },
      {
        "text": "It automates the operational archival and systematic deletion of stale or retired CI records based on corporate retention policies.",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 아키텍처 가이드라인에 따라, CMDB Data Manager는 자산 레코드의 수명 주기 정책(Lifecycle Policies)을 자동화하기 위한 핵심 툴입니다. 은퇴하거나 방치된 자산 데이터를 보존 기간(Retention Policies)에 근거해 자동으로 아카이브하거나 삭제(C) 처리함으로써 데이터 무결성과 인스턴스 성장을 통제합니다. CI 간의 관계 규칙을 통제하는 것은 CI Class Manager(A)이며, 데이터 암호화는 Encryption 모듈(B)의 스코프이므로 오답입니다."
  },
  {
    "id": 132,
    "title": "A Lead CMDB Architect needs to ingest bulk telemetry infrastructure payloads into the configuration database. To eliminate human coding errors that could potentially bypass the Identification and Reconciliation Engine (IRE) API gateway—subsequently creating catastrophic duplicates and unauthorized rogue CIs—which integration method is officially recommended by ServiceNow?",
    "options": [
      {
        "text": "IntegrationHub ETL utilizing Robust Transform Engine (RTE) frameworks",
        "id": "A"
      },
      {
        "text": "Direct Table API calls utilizing external REST or SOAP endpoints",
        "id": "B"
      },
      {
        "text": "Legacy Import Sets coupled with traditional script-based Transform Maps",
        "id": "C"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow 데이터 연동 표준 거버넌스 가이드라인에 따라, 외부 데이터를 CMDB로 임포트할 때 IRE를 우회(Bypass)하는 설계적 오류를 차단하는 최선의 권장 도구는 'IntegrationHub ETL'입니다. 이 도구는 로코드 기반 마법사를 통해 백엔드에서 순정 IRE API 파이프라인 통과를 네이티브하게 강제하여 중복 생성을 예방합니다. 직접적인 Table API(B)는 IRE를 100% 무시하고 DB에 직접 쓰기 때문에 금기시되며, 레거시 트랜스폼 맵(C)은 수동 스크립팅 누락 시 바이패스 리스크가 존재하므로 오답입니다."
  },
  {
    "id": 133,
    "title": "A Change Manager is evaluating the tactical ROI of aligning the enterprise infrastructure with the Common Service Data Model (CSDM) 5.0 framework. Which of the following options represent direct operational benefits that the Change Management process will gain from this CSDM alignment? (Choose two)",
    "options": [
      {
        "text": "The ability to accurately evaluate and visualize the downstream business impact of planned infrastructure changes on logical services.",
        "id": "A"
      },
      {
        "text": "The automated identification and reinforcement of operational blackout windows to restrict schedule conflicts.",
        "id": "B"
      },
      {
        "text": "The capability to dynamically route the change task to the correct assignment group based on the service tier's support ownership metadata.",
        "id": "C"
      },
      {
        "text": "The systematic execution of post-incident root cause analysis to determine the underlying failure origin of change issues.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow CSDM 거버넌스 명세에 따라, 구성 항목들 간의 관계 네트워크가 올바르게 적재되면 변경 관리 프로세스는 하부 자산 변동이 최상위 서비스에 미치는 피해 범위(Business Impact)를 완벽히 예측(A)할 수 있습니다. 동시에, 각 기술 자산 레이어에 매핑된 소유권 정보를 기반으로 변경 티켓을 적절한 담당 그룹으로 동적 라우팅(C)하는 자동화 가치가 실현됩니다. 일정 충돌 제어(B)는 변경 모듈 고유 정책이며, 근본 원인 규명(D)은 문제 관리(Problem)의 영역이므로 오답입니다."
  },
  {
    "id": 134,
    "title": "A Configuration Management Governance team is systematically transitioning from legacy configuration status fields to the unified CSDM Product Lifecycle standard. To define or modify specific granular, sub-state choices mapped under the primary lifecycle phases, which backend database table must the administrator directly access and modify?",
    "options": [
      {
        "text": "Life Cycle Mapping ([life_cycle_mapping])",
        "id": "A"
      },
      {
        "text": "Life Cycle Stage Status ([life_cycle_stage_status])",
        "id": "B"
      },
      {
        "text": "Life Cycle Stages ([life_cycle_stage])",
        "id": "C"
      },
      {
        "text": "Life Cycle Controls ([life_cycle_control])",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 거버넌스 표준 아키텍처에 따라, 자산 수명 주기는 'Stage'와 'Stage Status'의 2단계 매트릭스로 제어됩니다. 최상위 단계인 Stage(C) 자체는 시스템 핵심 코드로 고정되어 수정할 수 없으며, 그 하위에 종속되는 세부 선택 값 세트와 관계 규칙을 등록 및 수정할 수 있는 물리 테이블은 'Life Cycle Stage Status [life_cycle_stage_status]'(B)가 유일합니다. 레거시 필드와의 번역 룰만 관리하는 Mapping(A) 테이블은 상태 값 자체를 개조하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 135,
    "title": "A Configuration Manager is building a business justification to implement and utilize the Store application 'CMDB Data Foundations Dashboard'. Which core architectural benefits directly align with the usage of this specific governance application? (Choose two)",
    "options": [
      {
        "text": "It serves as the primary operational engine to systematically detect, merge, and eliminate duplicate records via remediation wizards.",
        "id": "A"
      },
      {
        "text": "It provides time-series telemetry to monitor and track the historical trends of CSDM data alignment scores over time.",
        "id": "B"
      },
      {
        "text": "It delivers remediation playbooks that provide actionable insights to systematically improve configuration data quality and completeness.",
        "id": "C"
      },
      {
        "text": "It integrates with the ITSM framework to fully automate technical change task approval routing and blackout window generation.",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "ServiceNow 데이터 거버넌스 가이드라인에 따라, CMDB Data Foundations Dashboard는 CSDM 기준에 부합하는 데이터 모델 품질 상태를 시계열 트렌드(B)로 추적하여 변화 과정을 모니터링할 수 있도록 돕습니다. 동시에 문제 해결을 위한 단계별 처방전인 'Remediation Playbook'을 내장하여 실행 가능한 조치 인사이트(C)를 제공합니다. 중복 제거 제어는 De-duplication Dashboard(A)의 고유 권한이며, 변경 승인 자동화(D)는 변경 관리 엔진의 영역이므로 오답입니다."
  },
  {
    "id": 136,
    "title": "A CMDB Administrator is pitching the deployment of the 'CMDB Data Foundations Dashboard' to the infrastructure governance board. Which of the following statements accurately characterize the operational benefits of utilizing this specific store application? (Choose two)",
    "options": [
      {
        "text": "It systematically scans and verifies that mission-critical configuration data is valid and properly aligned with CSDM blueprints.",
        "id": "A"
      },
      {
        "text": "It deploys hands-free system automation to independently overwrite and remediate identified configuration risks without human review.",
        "id": "B"
      },
      {
        "text": "It delivers structured, step-by-step playbooks to assist configuration analysts in the proactive manual remediation of data compliance risks.",
        "id": "C"
      },
      {
        "text": "It provisions an open-source development framework enabling administrators to create completely bespoke, custom health metrics from scratch.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow 데이터 컴플라이언스 가이드라인에 따라, CMDB Data Foundations Dashboard는 중요 데이터 아키텍처가 적절하게 설정되어 있는지 유효성을 검증(A)하는 진단 능력이 뛰어납니다. 또한 데이터 오류를 해결할 수 있도록 지원하는 단계별 안내서인 'Remediation Playbook'을 제공하여 수동 조치 프로세스를 보조(C)합니다. 자산의 결함 데이터를 사람이 검토하기도 전에 독단적으로 강제 자동 수정하는 완전 자동화 기능(B)이나 커스텀 지표 확장 프레임워크(D)는 시스템의 설계 스코프를 벗어난 오답입니다."
  },
  {
    "id": 137,
    "title": "An enterprise risk management team needs to audit and track structural regulatory compliance (such as GDPR or HIPAA) across the application portfolio. Within the Common Service Data Model (CSDM) framework, which statement accurately describes the core purpose and architectural role of the Information Object ([cmdb_ci_information_object]) artifact?",
    "options": [
      {
        "text": "It genericizes and encapsulates performance telemetry and technical metadata metadata discovered on a logical group of infrastructure Configuration Items.",
        "id": "A"
      },
      {
        "text": "It maps and conceptualizes the logical data taxonomy and sensitive data categories utilized by high-level Business Applications.",
        "id": "B"
      },
      {
        "text": "It catalogs and structures the dynamic payload data structures systematically exchanged between an external API gateway and an active Service Instance (구Application Service).",
        "id": "C"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 표준 데이터 모델 아키텍처에 따라, 정보 객체(Information Object)는 비즈니스 애플리케이션(Business Application)이 취급하고 처리하는 민감/규제 데이터의 '논리적 범주(Logical Data Taxonomy)'를 명시하는 메타데이터 자산입니다. 이를 결합함으로써 특정 앱의 보안 위험도와 컴플라이언스 준수 현황(B)을 시각화할 수 있습니다. 일반 하드웨어 CI 성능 묘사(A)나 실시간 API 데이터 통신 규격 정의(C)는 정보 객체의 설계 목적이 아니므로 오답입니다."
  },
  {
    "id": 138,
    "title": "A Regional Configuration Manager needs to isolate and monitor CMDB data quality trends exclusively for data center assets deployed within the Asia-Pacific (APAC) territory. Currently, the CMDB Health Dashboard only renders global enterprise-wide aggregates and breakdown summaries by CI Class. How can the administrator structurally configure the platform to continuously calculate distinct health scores for these regionally relevant CIs?",
    "options": [
      {
        "text": "Customize the backend CMDB Health Dashboard evaluator scheduled script jobs to force custom SQL group-by operations by location query variables.",
        "id": "A"
      },
      {
        "text": "Navigate to the global CMDB Health Dashboard settings page and activate the out-of-the-box system toggle titled 'Group scores by region'.",
        "id": "B"
      },
      {
        "text": "Create dedicated CMDB Groups populated with regional infrastructure scope criteria, ensuring the Group Type is strictly designated as 'health'.",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow CMDB 건강도(Health) 아키텍처 표준 가이드라인에 따라, 클래스 단위가 아닌 비즈니스/지리적 컨텍스트(지역, 부서 등)로 건강도 점수를 쪼개어 연산하려면 반드시 'CMDB Group' 프레임워크를 활용해야 합니다. 그룹 생성 시 유형(Type)을 'health'로 지정하면(C), 대시보드 스캔 엔진이 해당 리전 그룹용 스코어카드를 독립 연산하여 표출해 줍니다. 스케줄러 잡 코드 개조(A)는 업그레이드를 파괴하는 오답이며, 단일 토글 스위치(B)는 플랫폼 UI에 실존하지 않는 허구의 옵션이므로 오답입니다."
  },
  {
    "id": 139,
    "title": "Within the central CI Class Manager workspace, a configuration governance lead needs to specify and enforce which external discovery tools or integration feeds are authorized to modify and update specific CI Attributes. Under which native Class Info navigation tab is this data source authority framework configured?",
    "options": [
      {
        "text": "Basic Info tab",
        "id": "A"
      },
      {
        "text": "Identification Rule tab",
        "id": "B"
      },
      {
        "text": "Reconciliation Rules tab",
        "id": "C"
      },
      {
        "text": "Pinned Classes folder",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진) 아키텍처 가이드라인에 따라, 다중 수집 출처 간의 속성 필드 업데이트 권한 및 우선순위 통제는 'CI Class Manager' 내부의 'Reconciliation Rules(조정 규칙)' 탭에서 전담 설계합니다. 자산 레코드 간의 동일성 매칭 기준을 수립하는 곳은 Identification Rule 탭(B)이며, 클래스의 레이블이나 테이블 이름을 정의하는 방은 Basic Info 탭(A)이므로 속성 업데이트 권한 맥락에서 모두 오답입니다."
  },
  {
    "id": 140,
    "title": "Within the ServiceNow Identification and Reconciliation Engine (IRE) architecture, which core governance component programmatically specifies and enforces which data sources are officially allowed to update a specific CI class or a targeted set of attributes?",
    "options": [
      {
        "text": "Identification Rules",
        "id": "A"
      },
      {
        "text": "De-duplication Task",
        "id": "B"
      },
      {
        "text": "IRE Data Source Rule",
        "id": "C"
      },
      {
        "text": "Reconciliation Rule",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow 데이터 무결성 표준 명세에 따라, 특정 인입 출처가 CMDB 마스터 레코드의 클래스 정보나 세부 속성 필드 세트를 업데이트할 수 있도록 권한을 통제하는 전담 컴포넌트는 'Reconciliation Rule(조정 규칙)'입니다. 인입 자산의 중복 여부 및 신원 확인만 수행하는 것은 Identification Rules(A)이며, 중복 발생 시 발급되는 티켓은 De-duplication Task(B)입니다. C번은 시스템에 존재하지 않는 허구의 용어이므로 오답입니다."
  },
  {
    "id": 141,
    "title": "A Lead Enterprise Architect wants to ensure that a low-confidence secondary integration feed can only update existing asset profiles but is strictly prohibited from creating new records. Which specific Identification and Reconciliation Engine (IRE) governance component can be programmatically configured to block inserts from this specific data source?",
    "options": [
      {
        "text": "Identification Rules",
        "id": "A"
      },
      {
        "text": "De-duplication Task",
        "id": "B"
      },
      {
        "text": "IRE Data Source Rule",
        "id": "C"
      },
      {
        "text": "Reconciliation Rule",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow IRE 거버넌스 표준 명세에 따라, 특정 외부 소스가 CMDB 마스터 레코드를 무단으로 최초 생성(Insert)하는 행위를 입구에서 완전히 차단(Block)하는 전담 컴포넌트는 'IRE Data Source Rule [cmdb_data_source_rule]'입니다. 이 규칙을 통해 특정 소스를 'Reconciliation-only(조정 전용)'로 결속시켜 허가되지 않은 신규 생성을 차단할 수 있습니다. 일반적인 Reconciliation Rule(D)은 기존 레코드의 속성 필드 업데이트(Update) 우선순위만 중재할 뿐, 신규 인서트 자체를 거부할 수 없으므로 오답입니다."
  },
  {
    "id": 142,
    "title": "A CMDB Administrator needs to leverage the CMDB 360 dashboard to analyze data lineage and raw source discrepancies across multiple discovery feeds. Which of the following statements is true regarding the architectural activation of the Multisource CMDB?",
    "options": [
      {
        "text": "The Multisource CMDB must be explicitly activated by navigating to system properties and setting the specific registry key 'glide.identification_engine.multisource_enabled' to true.",
        "id": "A"
      },
      {
        "text": "The Multisource CMDB architecture is fully active by default on all base systems to track discovery payloads out-of-the-box.",
        "id": "B"
      },
      {
        "text": "The Multisource CMDB engine is programmatically de-activated whenever an administrator installs the standard CMDB CI Class Models store plugin.",
        "id": "C"
      },
      {
        "text": "The Multisource CMDB automatically self-activates on base systems the moment a secondary integration feed is mapped to any hardware table.",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CMDB 360(Multisource) 거버넌스 가이드라인에 따라, 소스별 원본 수집 페이로드를 영구 적재하는 멀티소스 데이터 모델은 대량의 스토리지 공간을 요구하므로 순정 상태(Base System)에서 기본 활성화(B, D)되어 있지 않습니다. 반드시 어드민이 관련 핵심 시스템 속성인 'glide.identification_engine.multisource_enabled' 값을 true로 명시적 전환(A)해야 가동됩니다. Class Models 플러그인(C)은 스키마 확장 도구일 뿐이므로 오답입니다."
  },
  {
    "id": 143,
    "title": "When constructing relationships and managing structural integrity within the ServiceNow platform, which architectural category perfectly represents core system records such as 'Users' ([sys_user]), 'Groups' ([sys_user_group]), and 'Locations' ([cmn_location]) referenced by the CMDB?",
    "options": [
      {
        "text": "Configuration Management Database (CMDB) configuration items",
        "id": "A"
      },
      {
        "text": "CI Class Attributes",
        "id": "B"
      },
      {
        "text": "Foundational Data",
        "id": "C"
      },
      {
        "text": "CMDB Extended Classes",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 데이터 모델 규격에 따라, 사용자(Users), 그룹(Groups), 위치(Locations) 등은 CMDB에 종속된 자산 객체가 아니며 플랫폼 전역 프로세스가 공유하는 'Foundational Data(기반 데이터)'에 해당합니다. CMDB의 구성 항목(CI)들은 이 기반 데이터들을 참조 필드를 통해 유기적으로 연결하여 컨텍스트를 완성합니다. 자산 저장소 자체(A), 필드 스키마 정의(B), 확장 테이블 분기 구조(D)는 기반 데이터의 정의를 충족하지 못하므로 오답입니다."
  },
  {
    "id": 144,
    "title": "Within the core ServiceNow CMDB taxonomy, which architectural term specifically represents data points that further describe a distinct Configuration Item, such as its name, unique serial number, or active operating system version?",
    "options": [
      {
        "text": "Configuration Management Database (CMDB)",
        "id": "A"
      },
      {
        "text": "Attributes",
        "id": "B"
      },
      {
        "text": "Foundational Data",
        "id": "C"
      },
      {
        "text": "Class",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow 플랫폼 표준 명세에 따라, 이름(Name), 시리얼 번호(Serial Number), 운영체제(Operating System)처럼 개별 구성 항목(CI)의 내부 스펙을 구체적으로 묘사하는 데이터 필드 조항들을 'Attributes(속성)'라고 부릅니다. 데이터베이스 전체를 아우르는 용어는 CMDB(A)이며, 외부의 공동 마스터 레코드는 Foundational Data(C), 테이블 단위의 뼈대는 Class(D)에 해당하므로 모두 오답입니다."
  },
  {
    "id": 145,
    "title": "Within the architectural framework of the ServiceNow Configuration Management Database, which term accurately represents a physical database table designed to store a specific type or categorized group of Configuration Items (CIs) that share identical schema attributes?",
    "options": [
      {
        "text": "Configuration Management Database (CMDB)",
        "id": "A"
      },
      {
        "text": "Attributes",
        "id": "B"
      },
      {
        "text": "Foundational Data",
        "id": "C"
      },
      {
        "text": "Class",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CMDB 데이터 모델 표준 명세에 따라, 공통된 속성(Attributes) 스펙을 공유하는 특정 자산 유형의 집합을 물리적으로 관리하는 데이터베이스 테이블 단위를 'Class(클래스)'라고 부릅니다. 예를 들어 Windows Server나 IP Switch 등은 독립된 하나의 클래스 테이블로 취급됩니다. 데이터베이스 전체 에코시스템을 뜻하는 CMDB(A), 개별 필드 명세인 Attributes(B), 참조용 조직 데이터인 Foundational Data(C)는 모두 클래스의 정의 영역을 벗어나므로 오답입니다."
  },
  {
    "id": 146,
    "title": "A Lead Configuration Quality Officer is defining continuous monitoring metrics using the 'CMDB Data Foundations Dashboard' store application. Which of the following data quality insights are natively tracked and supported by this specific dashboard application? (Choose all that apply)",
    "options": [
      {
        "text": "It provides programmatic telemetry on active operational CIs successfully refreshed or updated within the last 90 days.",
        "id": "A"
      },
      {
        "text": "It delivers precise metric breakdowns for all incoming configuration data successfully processed via the Identification and Reconciliation Engine (IRE).",
        "id": "B"
      },
      {
        "text": "It structures dedicated reports detailing all orphaned CIs missing essential relational dependencies within the configuration database.",
        "id": "C"
      },
      {
        "text": "It generates failure remediation task sheets for all individual configuration records that completely failed the core CMDB Health Dashboard audit rules.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "> ServiceNow 데이터 거버넌스 표준 아키텍처에 따라, 스토어 전용 앱인 CMDB Data Foundations Dashboard는 '데이터 관리 프랙티스' 탭을 통해 최근 90일 이내 데이터 최신성(A)과 수집 데이터의 IRE 엔진 통과율(B) 등을 핵심 메트릭 지표로 추적합니다. 반면, 필수 관계가 끊어진 고아 자산 식별 전용 보고서(C)와 핵심 감사 규칙 실패에 따른 개별 수정 작업(Task) 시트 생성(D)은 모두 전통적인 플랫폼 순정 기능인 **'CMDB Health Dashboard'의 고유 영역(Correctness 지표 등)**이므로 오답입니다"
  },
  {
    "id": 147,
    "title": "A CMDB Configuration Manager is orchestration an automated data cleanup workflow via the CMDB Data Manager. The goal is to enforce corporate 'Delete' and 'Archive' policies for obsolete target server records within the New York datacenter hierarchy. According to ServiceNow data governance standard guardrails, within which specific lifecycle state must these servers reside to be safely processed by these automated purge policies?",
    "options": [
      {
        "text": "Missing - Stolen",
        "id": "A"
      },
      {
        "text": "End of Life - Retired",
        "id": "B"
      },
      {
        "text": "In any active or inactive lifecycle state interchangeably",
        "id": "C"
      },
      {
        "text": "Inventory - Available",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CMDB 데이터 정제 거버넌스 표준 명세에 따라, 자산을 시스템 상에서 완전히 삭제(Delete)하거나 아카이브(Archive) 테이블로 격리하는 정책은 데이터 무결성을 보호하기 위해 반드시 해당 자산이 공식 퇴역 상태인 'End of Life - Retired'(B) 상태에 안착해 있을 때만 가동됩니다. 감사 추적이 필요한 도난 자산(A)이나 즉시 서비스 배포가 가능한 가용 재고 자산(D)을 무단 정리할 경우 데이터 오염 및 서비스 장애를 유발하므로 오답이며, C번은 플랫폼 아키텍처 상 허용되지 않는 위험한 접근이므로 오답입니다."
  },
  {
    "id": 148,
    "title": "A CMDB Administrator discovers a significant data quality gap where thousands of operational CIs lack a designated 'Support Group'. To remediate this at scale, the administrator wants to enforce a framework where the Support Group is programmatically inherited, populated, and dynamically maintained on the CI records from a centralized logical tier. Which CSDM artifact should be leveraged to native achieve this synchronization?",
    "options": [
      {
        "text": "Technology Management Service Offering (Technology Management Offering (구 Technical Service Offering))",
        "id": "A"
      },
      {
        "text": "Dynamic CI Group",
        "id": "B"
      },
      {
        "text": "Technology Management Service (Technology Management Service (구 Technology Management Service (구Technical Service)))",
        "id": "C"
      },
      {
        "text": "CI Class Manager",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CSDM 거버넌스 데이터 모델 표준 규격에 따라, 개별 인프라 자산(CI)들의 실실적인 운영 담당 그룹(Support Group, Change Group 등)을 중앙 집중식으로 동기화하고 자동 관리하는 본산은 'Technology Management Offering (구 Technical Service Offering)'입니다. 오퍼링 레벨에 지정된 지원 그룹 정보는 하부 관계형 자산들로 자동 전파(A)되도록 플랫폼 아키텍처가 설계되었습니다. 상위 개념 분류단인 Technology Management Service (구 Technology Management Service (구Technical Service))(C)나 동적 컨테이너인 Dynamic CI Group(B)은 속성 자동 전파 및 유지 기능을 전담하지 않으므로 오답입니다."
  },
  {
    "id": 149,
    "title": "A CMDB Administrator is aligning their configuration infrastructure with CSDM 5.0 data governance best practices using the Life Cycle Control framework. Immediately after clicking the 'Enable Life Cycle Sync' system toggle, which of the following operational actions represents the mandatory next step before full production deployment?",
    "options": [
      {
        "text": "Modify and downgrade the normalized CSDM Life Cycle Stage choice records to match custom non-standard legacy status strings.",
        "id": "A"
      },
      {
        "text": "Immediately run the full execution script to 'Activate the CSDM Life Cycle field mappings' across all production hardware tables.",
        "id": "B"
      },
      {
        "text": "Analyze and resolve any incomplete or conflicting field mappings programmatically identified in the system generated Discrepancy Report.",
        "id": "C"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow 라이프사이클 마이그레이션 아키텍처 표준 명세에 따라, Enable Life Cycle Sync를 수행한 직후 시스템은 데이터 검증을 통해 'Discrepancy Report(불일치 리포트)'를 발행합니다. 어드민은 데이터 오염을 예방하기 위해 미완성되거나 모순된 매핑 내역을 먼저 해결(C)해야 합니다. 정합성을 확보하기 전에 성급하게 매핑을 전면 가동(B)하면 심각한 데이터 충돌이 발생하며, 표준 구조를 레거시 수준으로 역변환하는 행위(A) 또한 아키텍처 가이드라인에 위배되므로 오답입니다."
  },
  {
    "id": 150,
    "title": "A Lead Data Integration Architect is evaluating the core functional characteristics and architectural behaviors of the ServiceNow IntegrationHub ETL store application. Which of the following capabilities accurately define this tool? (Choose two)",
    "options": [
      {
        "text": "It programmatically transforms and integrates third-party raw source data into both native CMDB target classes and non-CMDB core platform tables.",
        "id": "A"
      },
      {
        "text": "It independently executes network credential scans to perform live asset discovery and automatically update active configuration items.",
        "id": "B"
      },
      {
        "text": "It natively couples and processes incoming payloads through the Identification and Reconciliation Engine (IRE) to enforce strict data integrity rules.",
        "id": "C"
      },
      {
        "text": "It operates exclusively as the hardcoded out-of-the-box system utility engineered solely for importing Microsoft SCCM or Intune database records.",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "ServiceNow 데이터 통합 거버넌스 명세에 따라, IntegrationHub ETL은 시각적 매핑 UI를 제공하며 CMDB뿐만 아니라 사용자, 위치 등 일반 Non-CMDB 테이블(A)로의 데이터 적재도 폭넓게 지원합니다. 또한 적재 과정에서 반드시 백엔드 식별 및 조정 엔진(IRE)을 경유(C)하도록 강제하여 중복 자산 방지 및 데이터 무결성을 보장합니다. 스스로 네트워크를 스캔하는 Discovery 엔진(B)이 아니며, 특정 MS 제품 전용 한정 수입 도구(D)도 아니므로 오답입니다."
  },
  {
    "id": 151,
    "title": "A global retail enterprise wants to ensure that any IT incidents impacting revenue-generating, customer-facing checkout application services are handled with the highest operational urgency. According to CSDM data model standards, which architectural entity attribute should be defined to drive business-aware incident prioritization matrices?",
    "options": [
      {
        "text": "The operational 'Assignment Group' populated within the underlying hardware CI record.",
        "id": "A"
      },
      {
        "text": "The consolidated list of 'Affected CIs' bound directly inside the active Incident record.",
        "id": "B"
      },
      {
        "text": "The systemic 'Service Classification' code defined on the parent Technology Management Service (구 Technology Management Service (구Technical Service)) node.",
        "id": "C"
      },
      {
        "text": "The governance-driven 'Business Criticality' value assigned on the distinct Service Offering layer.",
        "id": "D"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CSDM 거버넌스 및 ITSM 연동 표준 명세에 따라, 비즈니스 중단 및 매출 리스크에 맞춰 장애 우선순위를 동적으로 차등화하는 마스터 속성은 서비스 오퍼링 레벨에 존재하는 'Business Criticality' 필드입니다. 플랫폼은 이 값을 참조하여 인시던트의 Impact/Urgency 및 SLA를 상향 조정(D)합니다. 단순 엔지니어 배정 부서(A), 장애 영향 자산 목록(B), 서비스 테이블의 종류를 식별하는 스키마 구분 필드(C)는 비즈니스 가치 기반 우선순위 제어권을 가지지 못하므로 오답입니다."
  },
  {
    "id": 152,
    "title": "The CMDB Administrator configured an Identification Rule hierarchy for a hardware class with two distinct entries ordered by priority—Priority 100: Name, Priority 200: IP Address. During data ingestion, Payload CI_One triggers a perfect match on an existing record's Name attribute, while Payload CI_Two triggers a match exclusively on an existing record's IP Address attribute while its Name is entirely different. Which lifecycle outcome is correct?",
    "options": [
      {
        "text": "CI_One will successfully execute an update on the matched existing record, whereas CI_Two will fail the weak identifier criteria evaluation and be inserted as a brand new configuration item.",
        "id": "A"
      },
      {
        "text": "CI_One will bypass the rule to be inserted as a new configuration item, while CI_Two will be granted authority to overwrite and update the existing record based on the IP address match.",
        "id": "B"
      },
      {
        "text": "Both incoming payloads systematically satisfy criteria entry rules independently, resulting in both CI_One and CI_Two updating their respective matched existing configuration items.",
        "id": "C"
      },
      {
        "text": "The IRE engine will flag the overlapping attribute telemetry as a conflict constraint, causing both CI_One and CI_Two to be clean inserted as dual new records.",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "ServiceNow IRE(식별 및 조정 엔진)는 식별 규칙(Identifier Entries)을 우선순위(Priority)에 따라 기계적으로 순차 평가합니다(Waterfall 방식). 첫 번째 규칙에서 실패하더라도 다음 우선순위 규칙에서 일치 항목을 찾으면 매칭으로 간주합니다. CI_One은 Priority 100(Name)을 충족하여 기존 레코드를 업데이트합니다. CI_Two는 Name이 일치하지 않아 Priority 100을 통과하지 못하지만, Priority 200(IP Address)을 충족하므로 이 역시 성공적인 식별로 처리되어 기존 레코드를 업데이트하게 됩니다. (IRE에는 상위 속성이 다르다고 매칭을 스스로 거부하고 신규 삽입하는 '취약 식별자 평가(weak identifier criteria evaluation)'와 같은 가상의 보호 로직이 없으며, 이것이 IP 주소를 단독 식별 규칙으로 사용하면 안 되는 주된 이유입니다.)"
  },
  {
    "id": 153,
    "title": "A Configuration Governance Officer needs to enforce a framework where the 'Managed by group' attribute is programmatically populated and synchronized down to a target group or underlying class of infrastructure Configuration Items (CIs). Which two native platform components can be utilized to host and drive this operational group synchronization? [Choose 2 answers]",
    "options": [
      {
        "text": "CI Class Manager",
        "id": "A"
      },
      {
        "text": "Technology Management Services (구 Technical Services)",
        "id": "B"
      },
      {
        "text": "Business Service Offerings",
        "id": "C"
      },
      {
        "text": "Business Services",
        "id": "D"
      },
      {
        "text": "Technology Management Offerings (Technology Management Offering (구 Technical Service Offering)s)",
        "id": "E"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "ServiceNow 데이터 모델 규격에 따라 개별 인프라 자산의 관리 주체(Managed by group) 속성을 대량 동기화하는 경로는 이원화되어 있습니다. 첫째, 테이블 스키마 차원에서 고정 규칙을 부여하는 'CI Class Manager'(A)가 있으며, 둘째, CSDM 관계선을 통해 하부 종속 자산들로 그룹 컨텍스트를 동적 상속 전파하는 'Technology Management Offerings'(E)가 정답입니다. 구체적 속성이 존재하지 않는 추상적인 Service 단(B)이나, 인프라 엔지니어링 도메인이 아닌 대고객 비즈니스 계층(C, D)은 동기화 원천이 될 수 없으므로 오답입니다."
  },
  {
    "id": 154,
    "title": "Within the common data governance lifecycle of the Common Service Data Model (CSDM) blueprint, which foundational domain is an Enterprise Architect (EA) primarily responsible for governing and planning?",
    "options": [
      {
        "text": "Ideation & Strategy",
        "id": "A"
      },
      {
        "text": "Design & Planning (Design Domain)",
        "id": "B"
      },
      {
        "text": "Service Delivery",
        "id": "C"
      },
      {
        "text": "Service Consumption",
        "id": "D"
      },
      {
        "text": "Build & Integration",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 5.0 거버넌스 표준에 따라, 엔터프라이즈 아키텍트(EA)는 기업의 비즈니스 역량(Business Capabilities)과 비즈니스 애플리케이션(Business Applications) 청사진을 기획하는 'Design & Planning' 도메인(B)의 핵심 오너입니다. Ideation(A)은 전략 기획, Build/Integration(C) 및 Service Delivery(E)는 실무 구현과 운영, Consumption(D)은 서비스 소비를 담당하므로 EA의 핵심 설계 통제 도메인인 Design & Planning이 정답입니다."
  },
  {
    "id": 155,
    "title": "An enterprise configuration committee is evaluating the long-term operational impact of bypassing the Common Service Data Model (CSDM) standards. Which of the following conditions represent direct architectural consequences of not aligning with the public CSDM framework? [Choose 2 answers]",
    "options": [
      {
        "text": "The strict technical inability to download or install standard store applications from the ServiceNow Store repository.",
        "id": "A"
      },
      {
        "text": "A severe increase in corporate technical debt fueled by the unchecked proliferation of bespoke custom tables and script workarounds.",
        "id": "B"
      },
      {
        "text": "The immediate physical loss of core historical asset configuration records during standard background data sweeps.",
        "id": "C"
      },
      {
        "text": "Severe structural incompatibility and data misalignments with future out-of-the-box ServiceNow products and major engine releases.",
        "id": "D"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "ServiceNow 플랫폼 거버넌스 표준 명세에 따라 CSDM 청사진을 무시하고 임의 커스텀을 남발할 경우, 유지보수 비용을 폭증시키는 'Technical Debt(기술 부채)'(B)가 기하급수적으로 증가합니다. 또한 차세대 릴리스나 신규 고도화 제품군들은 CSDM 스키마의 완벽한 정합성을 전제로 구동되므로 미래 제품과의 'Incompatibility(호환성 상실)'(D) 리스크를 유발합니다. 설치 프로세스 자체를 차단(A)하거나 데이터 물리적 증발(C)을 일으키는 것은 아니므로 오답입니다."
  },
  {
    "id": 156,
    "title": "Within the core structured architecture of the Common Service Data Model (CSDM) blueprint, which foundational domain represents the live operational layer containing deployed service instances (Service Instances (구 Application Services)) and their related, dynamically discoverable, infrastructure components?",
    "options": [
      {
        "text": "Service Consumption (Sell / Consume Domain)",
        "id": "A"
      },
      {
        "text": "Design & Planning (Design Domain)",
        "id": "B"
      },
      {
        "text": "Ideation & Strategy",
        "id": "C"
      },
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services)) 도메인",
        "id": "D"
      },
      {
        "text": "Build & Integration",
        "id": "E"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "ServiceNow CSDM 데이터 거버넌스 표준 명세에 따라, 실제 프로덕션 환경에 배포된 서비스 인스턴스(Service Instance (구Application Service)) 및 이와 연동되어 자동 탐지 엔진(Discovery)에 의해 수집·관리되는 하부 인프라 기술 자산(CIs) 간의 유기적 지형도를 관제하는 본산은 'Service Delivery (구 Manage Technology Management Services (구Technical Services))' 도메인(D)입니다. 추상적인 앱 청사진만 기획하는 Design(B)이나, 카탈로그 소비를 관장하는 Consumption(A), 그리고 CSDM 도메인이 아닌 프로세스성 명사들(C, E)은 실시간 배포 자산 탐지 도메인을 충족하지 못하므로 오답입니다."
  },
  {
    "id": 157,
    "title": "Within the standardized enterprise blueprint of the Common Service Data Model (CSDM) 5.0, which operational data domain natively hosts and contextualizes external-facing Business Service Offerings and customer engagement entities driven by the Customer Service Management (CSM) application portfolio?",
    "options": [
      {
        "text": "Service Delivery (구 Manage Technology Management Services (구Technical Services)) 도메인",
        "id": "A"
      },
      {
        "text": "Service Consumption (Sell / Consume Domain)",
        "id": "B"
      },
      {
        "text": "Build & Integration",
        "id": "C"
      },
      {
        "text": "Ideation & Strategy",
        "id": "D"
      },
      {
        "text": "Design & Planning (Design Domain)",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 거버넌스 표준 명세에 따라, 외부 고객(Customers) 및 비즈니스 사용자와 소통하며 최종 비즈니스 가치와 서비스 계약을 인도·소비하는 영역은 'Sell / Consume (Service Consumption)' 도메인(B)입니다. 따라서 외부 고객 포탈 및 케이스 관리를 전담하는 Customer Service Management(CSM) 솔루션은 이 도메인에 완벽히 매핑됩니다. 엔지니어 중심의 운영 레이어인 Service Delivery(A)나 아키텍처 기획단인 Design(E)은 고객 서비스 소비를 직접 관장하지 않으므로 오답입니다."
  },
  {
    "id": 158,
    "title": "Within the common data governance lifecycle of the Common Service Data Model (CSDM), which distinct service instance type operates as the logical representation of a live deployed application stack and its structural infrastructure dependencies?",
    "options": [
      {
        "text": "Business Application [cmdb_ci_business_app]",
        "id": "A"
      },
      {
        "text": "Service Instance (구Application Service) [cmdb_ci_service_auto]",
        "id": "B"
      },
      {
        "text": "Application [cmdb_ci_appl]",
        "id": "C"
      },
      {
        "text": "Technology Management Service [cmdb_ci_service_technical]",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 운영 거버넌스 표준 명세에 따라, 실제 런타임 환경에 배포된 소프트웨어 스택과 그 하부 인프라 의존성 관계선들을 논리적인 서비스 단위로 묶어 모니터링 및 ITSM 영향도 분석의 교두보 역할을 하는 컴포넌트는 'Service Instance (구Application Service) [cmdb_ci_service_auto]'입니다. 아키텍처 기획 문서 역할을 하는 Business Application(A)이나 단일 소프트웨어 인스턴스 조각인 Application(C), 그리고 운영 부서의 묶음 분류인 Technology Management Service (구 Technology Management Service (구Technical Service))(D)는 배포된 스택의 전체 의존성을 논리적으로 대변하는 인스턴스가 아니므로 오답입니다."
  },
  {
    "id": 159,
    "title": "An IT Service Executive wants to deploying a unified interface that allows Service Owners and Product Managers to holistically monitor and collectively manage their business portfolios, technical services, operational offerings, and strategic software products through the full Plan, Build, and Run lifecycle. Which native ServiceNow workspace perfectly fulfills this cross-domain data aggregation?",
    "options": [
      {
        "text": "Service Builder",
        "id": "A"
      },
      {
        "text": "Digital Portfolio Management (DPM)",
        "id": "B"
      },
      {
        "text": "CMDB Workspace",
        "id": "C"
      },
      {
        "text": "CI Class Manager",
        "id": "D"
      },
      {
        "text": "Service Operations Workspace (SOW)",
        "id": "E"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceNow CSDM 및 제품 포트폴리오 거버넌스 표준 명세에 따라 기획(Plan), 개발(Build), 운영(Run) 단계를 넘나들며 포트폴리오, 서비스, 오퍼링, 제품의 전 수명주기 건강도를 단일 창으로 통합 모니터링 및 제어하는 독점 워크스페이스는 'Digital Portfolio Management (DPM)'입니다(B). 실시간 장애 관제 및 헬프데스크 운영에 특화된 Service Operations Workspace(E)나 자산 탐지·검색을 위한 CMDB Workspace(C), 그리고 단순 생성기인 Service Builder(A)는 전사 포트폴리오 라이프사이클 통합 분석을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 160,
    "title": "An IT Service Portfolio Manager needs to design and provision multiple CSDM artifacts, including Business Services, Technology Management Services, and their corresponding Offerings. Instead of utilizing legacy row-by-row backend forms and lists, which native step-by-step guided utility should be leveraged to achieve this in a highly streamlined and compliant manner?",
    "options": [
      {
        "text": "CMDB Workspace",
        "id": "A"
      },
      {
        "text": "Service Mapping",
        "id": "B"
      },
      {
        "text": "Service Instance (구Application Service) Wizard",
        "id": "C"
      },
      {
        "text": "CI Class Manager",
        "id": "D"
      },
      {
        "text": "Service Builder",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "ServiceNow 서비스 카탈로그 및 CSDM 거버넌스 표준 명세에 따라, 비즈니스/기술 서비스 및 오퍼링 개체들을 복잡한 테이블 폼 수동 조작 없이 마법사 기반 UI를 통해 패키지 형태로 신속하게 빌드·연결하는 통합 유틸리티는 'Service Builder'입니다(E). 자산 탐색 중심의 CMDB Workspace(A), 기술적 자산 토폴로지를 스캔하는 Service Mapping(B), 오직 배포판 인스턴스 전용 생성 툴인 Service Instance (구Application Service) Wizard(C)는 이 포괄적인 서비스 포트폴리오 상품 디자인 능력을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 161,
    "title": "A Configuration Governance Analyst needs to interconnect a live 'Service Instance (구Application Service)' instance with its corresponding upstream 'Business Application' design record, its operational 'Technology Management Offering', and its customer-facing 'Business Service Offering'. Which native setup workspace or configuration workflow wizard should be leveraged to systematically bind these multi-domain CSDM relationships?",
    "options": [
      {
        "text": "Service Instance (구Application Service) Wizard",
        "id": "A"
      },
      {
        "text": "Service Builder",
        "id": "B"
      },
      {
        "text": "CMDB Workspace",
        "id": "C"
      },
      {
        "text": "IntegrationHub ETL",
        "id": "D"
      },
      {
        "text": "CI Class Manager",
        "id": "E"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CSDM 관계성 거버넌스 표준 명세에 따라, 실시간 가동 중인 개별 Service Instance (구Application Service) 레코드를 허브 삼아 상위 비즈니스 애플리케이션(기획), 기술 서비스 오퍼링(운영), 비즈니스 서비스 오퍼링(소비) 간의 다차원 관계선을 일괄 매핑하고 조립하는 전담 구성 워크플로우 헬퍼는 'Service Instance (구Application Service) Wizard'입니다(A). 서비스 포트폴리오 카탈로그 구조 자체를 빌드하는 Service Builder(B)나 스키마를 설계하는 CI Class Manager(E)는 개별 배포 인스턴스 중심의 CSDM 다차원 관계 결합 기능을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 162,
    "title": "Aligning infrastructure with the Common Service Data Model (CSDM) unlocks native ITSM workflow automations. When an IT operator binds a specific Configuration Item (CI) to a newly initialized ticket, which of the following behavioral routing rules are true within ServiceNow? [Choose 2 answers]",
    "options": [
      {
        "text": "The 'Managed by group' defined on the target CI systematically auto-populates the operational Assignment group field on the Incident form.",
        "id": "A"
      },
      {
        "text": "The 'Approval group' mapped within the target CI systematically auto-populates the technical Assignment group field on the Change Request form.",
        "id": "B"
      },
      {
        "text": "The 'Change group' configured on the target CI systematically auto-populates the technical Assignment group field on the Change Request form.",
        "id": "C"
      },
      {
        "text": "The 'Support group' configured on the target CI systematically auto-populates the operational Assignment group field on the Incident form.",
        "id": "D"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "ServiceNow 표준 ITSM 및 CSDM 거버넌스 연동 명세에 따라, 실시간 장애를 복구하는 Incident 티켓의 Assignment group은 자산의 수리를 담당하는 'Support group'(D)에서 자동으로 값을 상속받습니다. 반면, 인프라 변경 및 패치 작업을 관리하는 Change Request 티켓의 Assignment group은 자산의 작업 그룹을 대변하는 'Change group'(C) 속성에서 값을 자동으로 위임받아 채워집니다. 자산 데이터 장부 관리자인 Managed by group(A)이나 결재 승인 부서인 Approval group(B)은 티켓의 실무 처리 부서로 자동 배정되지 않으므로 오답입니다."
  },
  {
    "id": 163,
    "title": "When triage operators initialize a new Incident or Change Request record, the main 'Configuration item' field strictly mandates the selection of live, operational Configuration Items (CIs). Which of the following pair satisfies this operational ingestion requirement under CSDM guidelines? [Choose 2 answers]",
    "options": [
      {
        "text": "Dynamic CI Group [cmdb_ci_query_based_service]",
        "id": "A"
      },
      {
        "text": "Service Instance (구Application Service) [cmdb_ci_service_auto]",
        "id": "B"
      },
      {
        "text": "Installed Software Discovery Records",
        "id": "C"
      },
      {
        "text": "Business Application [cmdb_ci_business_app]",
        "id": "D"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "ServiceNow CSDM 및 ITSM 거버넌스 표준 명세에 따라, 실시간 장애 및 변경 작업의 표적이 되는 메인 Configuration item 필드에는 운영 상태 추적 및 지원 그룹 매핑이 가능한 'Operational CIs'가 상주해야 합니다. 따라서 라이브 배포판 인스턴스인 Service Instance (구Application Service)(B)와 대량 인프라 제어 통로인 Dynamic CI Group(A)이 완벽한 정답입니다. 개념적 기획서에 불과한 Business Application(D)이나 서버 내부의 단순 참조 스캔 데이터인 Installed Software(C)는 독립적인 운영 타깃 CI로 직접 유입될 수 없으므로 오답입니다."
  },
  {
    "id": 164,
    "title": "To establish and sustain a highly successful Configuration Management Data Repository, an organization must focus on the 'Data Foundation Lifecycle' framework. Which of the following components constitute the official 3 pillars of this architectural framework? [Choose 3 answers]",
    "options": [
      {
        "text": "Correctness",
        "id": "A"
      },
      {
        "text": "Insight",
        "id": "B"
      },
      {
        "text": "Ingest",
        "id": "C"
      },
      {
        "text": "Govern",
        "id": "D"
      },
      {
        "text": "Compliance",
        "id": "E"
      },
      {
        "text": "Completeness",
        "id": "F"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "ServiceNow 데이터 거버넌스 라이프사이클 표준 명세에 따라, 데이터 파운데이션을 성취하기 위한 3대 기둥(3 Pillars)은 데이터를 표준 인입하는 'Ingest'(C), 무결성 가드레일 규칙을 강제하는 'Govern'(D), 그리고 파운데이션 대시보드와 플레이북으로 처방을 내리는 'Insight'(B)입니다. 선지에 배치된 Completeness(F), Correctness(A), Compliance(E)는 CMDB Health Dashboard의 품질 측정용 3대 스코어카드(3 Cs) 분류 명칭일 뿐, 파운데이션 수명주기를 관장하는 3대 기둥 프레임워크가 아니므로 오답입니다."
  },
  {
    "id": 165,
    "title": "Which native ServiceNow architectural feature functions as a built-in visualization, analytics, and reporting console specifically engineered to help organizations systematically assess, benchmark, and improve their implementation maturity of the Common Service Data Model (CSDM) based on factory-recommended good practices?",
    "options": [
      {
        "text": "Service Instance (구Application Service) Wizard",
        "id": "A"
      },
      {
        "text": "CI Class Manager",
        "id": "B"
      },
      {
        "text": "CMDB Health Dashboard",
        "id": "C"
      },
      {
        "text": "Service Builder",
        "id": "D"
      },
      {
        "text": "CSDM Data Foundations Dashboard",
        "id": "E"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "ServiceNow 데이터 컴플라이언스 및 거버넌스 표준 명세에 따라, 인스턴스 전역의 자산 관계 모델이 CSDM 모범 사례(Good Practices) 규격에 부합하는지 정량 진단하고, Crawl-Walk-Run-Fly 성숙도 탭을 통해 가시성과 개선 플레이북을 독점 제공하는 내장 분석 도구는 'CSDM Data Foundations Dashboard'입니다(E). 자산 자체의 데이터 품질 무결성(3Cs)만 측정하는 CMDB Health Dashboard(C)나, 개별 관계선을 수동 조립하는 Wizard(A), 상품을 생성하는 Builder(D)는 CSDM 포트폴리오 정렬도 진단이라는 고유 목적을 충족하지 못하므로 오답입니다."
  },
  {
    "id": 166,
    "title": "To eliminate the data silos caused by legacy status fields across various infrastructure tables, the Common Service Data Model (CSDM) establishes a unified data schema rule. Which combination of attributes does CSDM explicitly recommend to utilize for governing the standard holistic lifecycle of any Configuration Item (CI)?",
    "options": [
      {
        "text": "Life cycle stage and stage status",
        "id": "A"
      },
      {
        "text": "Hardware status",
        "id": "B"
      },
      {
        "text": "Install status",
        "id": "C"
      },
      {
        "text": "Operational status",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceNow CSDM 라이프사이클 거버넌스 표준 명세에 따라, 플랫폼의 모든 구성 항목(CI) 자산의 탄생부터 퇴역까지 일관된 방식으로 이 단계(Dual-tier) 매트릭스로 관리하도록 권장하는 공식 필드 쌍은 'Life cycle stage'와 'Life cycle stage status'입니다(A). 선지에 제시된 Hardware status(B), Install status(C), Operational status(D)는 과거에 쓰이던 파편화된 레거시 필드들이며, 차세대 마이그레이션 및 동기화 엔진을 통해 표준 필드(A)로 통합 변환되어야 하는 대상이므로 오답입니다."
  },
  {
    "id": 167,
    "title": "ServiceNow CSDM 5.0 expands the framework from five domains to seven distinct domains. Which of the following are the two new domains introduced in CSDM 5.0?",
    "options": [
      {
        "text": "Ideation & Strategy and Manage Portfolios",
        "id": "A"
      },
      {
        "text": "Design & Planning and Build & Integration",
        "id": "B"
      },
      {
        "text": "Service Delivery and Service Consumption",
        "id": "C"
      },
      {
        "text": "Foundation and Architecture",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "CSDM 5.0 버전은 기존 4.0의 5개 도메인 체계에서 'Ideation & Strategy(아이디어 및 전략)'와 'Manage Portfolios(포트폴리오 관리)' 도메인이 추가되어 총 7개 도메인으로 확장되었습니다. 이는 디지털 제품(Digital Product)의 전 수명 주기를 '기획(Plan)'부터 '거버넌스(Govern)'까지 아우르기 위함입니다. B, C 도메인은 기존 명칭이 변경된 것이며, D의 Architecture는 공식 도메인이 아니므로 오답입니다."
  },
  {
    "id": 168,
    "title": "Which CSDM 5.0 domain focuses on the initial stages of the digital product lifecycle, including product ideas, strategic priorities, goals, and targets, and aligns with Strategic Portfolio Management (SPM)?",
    "options": [
      {
        "text": "Design & Planning",
        "id": "A"
      },
      {
        "text": "Ideation & Strategy",
        "id": "B"
      },
      {
        "text": "Manage Portfolios",
        "id": "C"
      },
      {
        "text": "Service Delivery",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CSDM 5.0에서 새롭게 추가된 'Ideation & Strategy' 도메인은 제품의 아이디어 제안, 전략적 우선순위 설정, 목표 및 타겟 정의 등 수명 주기의 가장 초기 단계를 담당합니다. 이 도메인은 Strategic Portfolio Management(SPM) 제품군과 밀접하게 연동되어 비즈니스 전략과 IT 실행을 연결하는 역할을 합니다. Design & Planning(A)은 논리적 설계, Manage Portfolios(C)는 전체 포트폴리오 가치 관리, Service Delivery(D)는 운영 인프라를 담당하므로 오답입니다."
  },
  {
    "id": 169,
    "title": "In CSDM 5.0, what is the official name of the domain that was previously known as 'Manage Technical Services' in CSDM 4.0?",
    "options": [
      {
        "text": "Service Delivery",
        "id": "A"
      },
      {
        "text": "Technology Management",
        "id": "B"
      },
      {
        "text": "Service Consumption",
        "id": "C"
      },
      {
        "text": "Infrastructure Management",
        "id": "D"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "CSDM 5.0은 보다 직관적인 명칭 사용을 위해 도메인 이름을 변경했습니다. 과거 4.0에서 IT 내부 인프라와 기술적 의존성을 관리하던 'Manage Technical Services' 도메인은 이제 'Service Delivery'라는 명칭으로 통합되었습니다. 마찬가지로 Service Consumption (구 Sell/Consume)은 Service Consumption으로, Design은 Design & Planning으로, Build는 Build & Integration으로 변경되었습니다."
  },
  {
    "id": 170,
    "title": "In CSDM 5.0, the cmdb_ci_service_auto table has been relabeled to support a broader range of service types beyond IT. What is the new label for this table?",
    "options": [
      {
        "text": "Application Service",
        "id": "A"
      },
      {
        "text": "Service Instance",
        "id": "B"
      },
      {
        "text": "Digital Product Instance",
        "id": "C"
      },
      {
        "text": "Business Service",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CSDM 5.0에서 cmdb_ci_service_auto 테이블의 새 명칭은 **Service Instance**입니다. 보기 A의 **Application Service**는 기존 이름이고, 보기 B가 새 레이블을 정확히 가리킵니다. 이 변경은 AI, 네트워크, 시설(Facility) 같은 비-IT 서비스 인스턴스까지 함께 다루기 위한 확장입니다."
  },
  {
    "id": 171,
    "title": "Which new CI classes were introduced in CSDM 5.0 to specifically manage and govern AI-powered services and their dependencies?",
    "options": [
      {
        "text": "AI Server, AI Cluster, AI Database",
        "id": "A"
      },
      {
        "text": "AI Function, AI Application, AI Model",
        "id": "B"
      },
      {
        "text": "Bot CI, Agent CI, Engine CI",
        "id": "C"
      },
      {
        "text": "GenAI Endpoint, LLM Instance",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CSDM 5.0은 AI 거버넌스를 위해 AI Function(외부 서비스), AI Application(내부 구축 앱), AI Model 클래스를 도입했습니다. 이를 통해 Now Assist와 같은 AI 에이전트의 기술적 의존성을 CMDB에서 추적할 수 있습니다."
  },
  {
    "id": 172,
    "title": "In the CSDM 5.0 Build & Integration domain, what is the primary business value of tracking the Software Bill of Materials (SBOM)?",
    "options": [
      {
        "text": "To automate software license purchasing",
        "id": "A"
      },
      {
        "text": "To improve software development velocity",
        "id": "B"
      },
      {
        "text": "To enhance vulnerability management and software supply chain security",
        "id": "C"
      },
      {
        "text": "To monitor real-time CPU usage of software",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "SBOM은 디지털 제품을 구성하는 모든 소프트웨어 컴포넌트의 명세서 역할을 합니다. 이를 통해 보안 취약점 발생 시 즉각적인 영향도 분석이 가능하며, 소프트웨어 공급망의 보안성을 강화하는 것이 핵심 목적입니다."
  },
  {
    "id": 173,
    "title": "The CSDM 5.0 Digital System Model breaks down a digital product into four distinct layers. Which of the following correctly lists these layers?",
    "options": [
      {
        "text": "Strategy, Build, Deliver, Consume",
        "id": "A"
      },
      {
        "text": "Hardware, Software, Network, Database",
        "id": "B"
      },
      {
        "text": "Business Process, Service (Logical), Functional, Infrastructure",
        "id": "C"
      },
      {
        "text": "Idea, Design, Code, Operation",
        "id": "D"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "CSDM 5.0의 Digital System Model은 제품을 비즈니스 프로세스, 서비스(논리), 기능, 인프라의 4개 계층으로 나누어 수직/수평적 종속성을 가시화합니다."
  },
  {
    "id": 174,
    "title": "In CSDM 5.0, which domain was split from the Design & Planning domain (구Design) to focus exclusively on the governance, value, and performance measurement of digital products and services?",
    "options": [
      {
        "text": "Ideation & Strategy",
        "id": "A"
      },
      {
        "text": "Manage Portfolios",
        "id": "B"
      },
      {
        "text": "Service Consumption",
        "id": "C"
      },
      {
        "text": "Build & Integration",
        "id": "D"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CSDM 5.0에서 Manage Portfolios 도메인은 기존 Design 도메인에서 분리되었습니다. 이 도메인은 DPM(Digital Portfolio Management)과 연동하여 서비스와 제품의 비즈니스 가치 및 성과를 전문적으로 관리합니다."
  },
  {
    "id": 175,
    "title": "The following reclassification properties are configured:\n- glide.class.downgrade.enabled=true\n- glide.identification_engine.update_without_downgrade_enabled=true\n\nGiven this configuration, what will occur during a reclassification request for a Windows Server CI?",
    "options": [
      { "id": "A", "text": "A Windows Server IS allowed to be downgraded" },
      { "id": "B", "text": "A Windows Server IS NOT allowed to be downgraded" },
      { "id": "C", "text": "The Windows Server CI attributes CAN be updated" },
      { "id": "D", "text": "The Windows Server CI attributes CANNOT be updated" }
    ],
    "answer": ["B", "C"],
    "explanation": "글로벌 속성인 'glide.identification_engine.update_without_downgrade_enabled'는 'glide.class.downgrade.enabled'보다 우선순위가 높습니다. 따라서 클래스 재분류(다운그레이드)는 허용되지 않지만, CI 속성에 대한 업데이트는 허용됩니다."
  },
  {
    "id": 176,
    "title": "The following reclassification properties are configured:\n- glide.class.downgrade.enabled=true\n- glide.identification_engine.update_without_downgrade_enabled=false\n\nAnd a Reclassification Restriction Rule is defined:\n- Type: Downgrade\n- Source table: Server\n- Target table: Computer\n\nWhat will occur during a reclassification request to downgrade a Windows Server to a Computer?",
    "options": [
      { "id": "A", "text": "A Windows Server IS allowed to be downgraded to a Computer record" },
      { "id": "B", "text": "A Windows Server IS NOT allowed to be downgraded to a Computer record" },
      { "id": "C", "text": "The Windows Server CI attributes CAN be updated" },
      { "id": "D", "text": "The Windows Server CI attributes CANNOT be updated" }
    ],
    "answer": ["B", "C"],
    "explanation": "재분류 제한 규칙(Reclassification restriction rules)은 글로벌 속성인 'glide.class.downgrade.enabled'보다 우선하여 적용됩니다. 규칙에 의해 다운그레이드 재분류는 차단되지만, CI 속성 업데이트는 여전히 가능합니다."
  },
  {
    "id": 177,
    "title": "The following reclassification properties are configured:\n- glide.class.downgrade.enabled=true\n- glide.identification_engine.update_without_downgrade_enabled=false\n\nAnd a Reclassification Restriction Rule is defined:\n- Type: Downgrade\n- Source table: Server\n- Target table: Computer\n\nWhat will occur during a reclassification request to downgrade an IP Router to a Network Gear record (no specific rule defined for this pair)?",
    "options": [
      { "id": "A", "text": "An IP Router IS allowed to be downgraded to a Network Gear record" },
      { "id": "B", "text": "An IP Router IS NOT allowed to be downgraded to a Network Gear record" },
      { "id": "C", "text": "The IP Router CI attributes CAN be updated" },
      { "id": "D", "text": "The IP Router CI attributes CANNOT be updated" }
    ],
    "answer": ["A", "C"],
    "explanation": "IP Router와 Network Gear 클래스 쌍에 대해 정의된 구체적인 재분류 제한 규칙이 없으므로, 글로벌 속성인 'glide.class.downgrade.enabled'가 적용됩니다. 이에 따라 다운그레이드 재분류와 CI 속성 업데이트가 모두 허용됩니다."
  },
  {
    "id": 178,
    "title": "Which of the following types of data is collected after implementing ServiceNow Discovery? (Select three)",
    "options": [
      { "id": "A", "text": "Operating System" },
      { "id": "B", "text": "Support Group" },
      { "id": "C", "text": "RAM" },
      { "id": "D", "text": "MAC Address" },
      { "id": "E", "text": "Managed by Group" }
    ],
    "answer": ["A", "C", "D"],
    "explanation": "운영 체제(Operating System), RAM, MAC 주소는 Discovery를 통해 수집되는 기술 데이터 포인트입니다. 반면 Support Group과 Managed by Group은 Discovery로 탐지할 수 없는 속성이며, 다른 방법을 통해 입력되어야 합니다."
  },
  {
    "id": 179,
    "title": "Which of the following are huge value adds in implementing Service Mapping? (Select two)",
    "options": [
      { "id": "A", "text": "Provides insights into the potential impact of changes" },
      { "id": "B", "text": "Helps identify the root cause of incidents faster, reducing service downtime" },
      { "id": "C", "text": "Provides an up to date inventory of all infrastructure in an enterprise environment reducing compliance risk" },
      { "id": "D", "text": "Gives visibility to all installed software in an enterprise supporting corporate software asset management initiatives" }
    ],
    "answer": ["A", "B"],
    "explanation": "Service Mapping은 인프라 구성 요소를 특정 비즈니스 서비스에 매핑하는 데 중점을 두며, 이를 통해 변경 사항의 잠재적 영향 분석과 인시던트 근본 원인 파악을 가속화하여 다운타임을 줄여줍니다."
  },
  {
    "id": 180,
    "title": "Which of the following is a lightweight agent-based solution designed to perform discovery and real-time monitoring of infrastructure components, including servers, cloud resources, and applications across an organization?",
    "options": [
      { "id": "A", "text": "Agent Client Collector" },
      { "id": "B", "text": "Service Graph Connectors" },
      { "id": "C", "text": "ServiceNow Discovery" },
      { "id": "D", "text": "IntegrationHub ETL" }
    ],
    "answer": ["A"],
    "explanation": "Agent Client Collector(ACC)는 ServiceNow에서 제공하는 경량 에이전트 기반 솔루션으로, 조직 전반의 서버, 클라우드 리소스 및 애플리케이션에 대한 실시간 모니터링과 디스커버리를 수행합니다."
  },
  {
    "id": 181,
    "title": "Which of the following ServiceNow solutions can be used to integrate third-party data into the CMDB or non-CMDB tables while ensuring data integrity? (Select two)",
    "options": [
      { "id": "A", "text": "Agent Client Collector" },
      { "id": "B", "text": "Service Graph Connectors" },
      { "id": "C", "text": "ServiceNow Discovery" },
      { "id": "D", "text": "IntegrationHub ETL" }
    ],
    "answer": ["B", "D"],
    "explanation": "Service Graph Connectors와 IntegrationHub ETL은 데이터 무결성을 보장하면서 서드파티 데이터를 ServiceNow CMDB 또는 일반 테이블에 통합하는 데 사용되는 핵심 도구입니다. 두 도구 모두 식별 및 조정 엔진(IRE)을 활용합니다."
  },
  {
    "id": 182,
    "title": "When using import sets and transform maps to integrate data into the CMDB, it is recommended to add which type of script to ensure the incoming data passes through the Identification and Reconciliation Engine (IRE)?",
    "options": [
      { "id": "A", "text": "onBefore" },
      { "id": "B", "text": "onStart" },
      { "id": "C", "text": "onComplete" },
      { "id": "D", "text": "onAfter" }
    ],
    "answer": ["A"],
    "explanation": "데이터가 IRE를 거치도록 하려면 변환 맵(Transform Map) 내에 'onBefore' 스크립트를 작성하여 CMDBTransformUtil API를 호출해야 합니다."
  },
  {
    "id": 183,
    "title": "A CMDB administrator is managing group data from both the CI Class Manager and a Technology Management Offering for a specific class. If different values are set for the 'Managed by Group', which takes precedence?",
    "options": [
      { "id": "A", "text": "Value from CI Class Manager" },
      { "id": "B", "text": "Value from Technology Management Offering" }
    ],
    "answer": ["B"],
    "explanation": "CSDM 가이드라인에 따라, 기술 서비스 오퍼링(Technology Management Offering)에 구성된 값이 CI Class Manager에 설정된 기본값보다 우선하여 적용됩니다."
  },
  {
    "id": 184,
    "title": "Which foundation data can be managed through a Technology Management Offering and automatically synchronized with the underlying CIs it manages?",
    "options": [
      { "id": "A", "text": "Change group, Managed by group, and Support group" },
      { "id": "B", "text": "Owned by, Managed by, Assigned to" },
      { "id": "C", "text": "Change group, Managed by group, and Approval group" },
      { "id": "D", "text": "Owned by, Managed by, Supported by" }
    ],
    "answer": ["A"],
    "explanation": "Change group, Managed by group, Support group은 기술 서비스 오퍼링을 통해 관리될 때 하위 CI들과 자동으로 동기화되는 핵심 기반 데이터입니다."
  },
  {
    "id": 185,
    "title": "When a CI is added to the CMDB through ServiceNow Discovery or Asset Management, which of the following statements is true regarding the record’s Discovery Source field? (Choose two)",
    "options": [
      { "id": "A", "text": "CIs discovered by ServiceNow Discovery have a discovery source field of ServiceNow." },
      { "id": "B", "text": "CIs discovered by ServiceNow Discovery have a discovery source field of Service Mapping." },
      { "id": "C", "text": "CIs added to the CMDB through the Asset Management process have a discovery source field of SNAssetManagement." },
      { "id": "D", "text": "CIs added to the CMDB through the Asset Management process have a discovery source field of AssetManagement" }
    ],
    "answer": ["A", "C"],
    "explanation": "ServiceNow Discovery는 Discovery Source 필드를 'ServiceNow'로 설정하고, 자산 관리 프로세스를 통해 추가된 자산은 'SNAssetManagement'로 설정됩니다."
  },
  {
    "id": 186,
    "title": "Match the following descriptions to the correct items in CI Class Manager. (Select all correct pairings below)",
    "options": [
      { "id": "A", "text": "Reconciliation Rules - Where you configure data sources authorized to update CI Attributes" },
      { "id": "B", "text": "Basic Info - Where you configure an icon for a specific class" },
      { "id": "C", "text": "Pinned Classes - What feature allows for easy navigation back to a frequently accessed class" },
      { "id": "D", "text": "Identification Rules - Where you go to configure a rule to uniquely identify CIs" }
    ],
    "answer": ["A", "B", "C", "D"],
    "explanation": "CI Class Manager에서: Reconciliation Rules 탭은 승인된 데이터 소스를 구성하고, Basic Info 탭은 클래스 아이콘/설정을 담당하며, Pinned Classes는 빠른 탐색을 지원하고, Identification Rule 탭은 CI를 고유하게 식별하는 규칙을 정의합니다."
  },
  {
    "id": 187,
    "title": "Reconciliation rules are configured to control which of the following?",
    "options": [
      { "id": "A", "text": "Updates to a CI" },
      { "id": "B", "text": "Inserts of a CI" },
      { "id": "C", "text": "Deletion of a CI" },
      { "id": "D", "text": "Reading of a CI" }
    ],
    "answer": ["A"],
    "explanation": "조정 규칙(Reconciliation rules)은 서로 다른 데이터 소스들로부터 유입되는 CI 속성에 대한 업데이트(수정) 권한을 제어하도록 설계되었습니다."
  },
  {
    "id": 188,
    "title": "Match the term with the correct description. (Select all correct pairings below)",
    "options": [
      { "id": "A", "text": "Reconciliation Rules - Manage attribute updates (속성 업데이트 관리)" },
      { "id": "B", "text": "IRE Data Source Rules - Control CI insert (CI 삽입 제어)" },
      { "id": "C", "text": "De-duplication Tasks - Process duplicate records (중복 레코드 처리)" },
      { "id": "D", "text": "Identification Rules - Define CI uniqueness (CI의 고유성 정의)" }
    ],
    "answer": ["A", "B", "C", "D"],
    "explanation": "조정 규칙(Reconciliation Rules)은 속성 업데이트를 관리하고, IRE 데이터 소스 규칙(Data Source Rules)은 CI 삽입을 제어하며, 중복 제거 작업(De-duplication Tasks)은 중복 레코드를 처리하고, 식별 규칙(Identification Rules)은 CI의 고유성을 정의합니다."
  },
  {
    "id": 189,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field. Given sources: Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020. Which RAM value will be written to the CMDB?",
    "options": [
      { "id": "A", "text": "6020" },
      { "id": "B", "text": "2048" },
      { "id": "C", "text": "4096" },
      { "id": "D", "text": "1024" }
    ],
    "answer": ["A"],
    "explanation": "동적 조정 규칙이 'Largest Value(가장 큰 값)'로 설정되어 있으므로, 사용 가능한 소스 중 가장 높은 RAM 값인 6020이 선택되어 기록됩니다."
  },
  {
    "id": 190,
    "title": "Which of the following are true with respect to the Multisource CMDB? (Choose 2)",
    "options": [
      { "id": "A", "text": "Is active by default on base systems" },
      { "id": "B", "text": "Activate the Multisource CMDB by setting the property, glide.identification_engine.multisource_enabled, to true and installing the ITOM Discovery License plugin" },
      { "id": "C", "text": "De-activate the Multisource CMDB by installing the CMDB CI Class Models plugin" },
      { "id": "D", "text": "Must be activated on base systems" }
    ],
    "answer": ["B", "D"],
    "explanation": "Multisource CMDB는 기본적으로 활성화되어 있지 않으며, 'glide.identification_engine.multisource_enabled' 속성을 true로 설정하고 적절한 ITOM Discovery 라이선스 플러그인을 설치하여 명시적으로 활성화해야 합니다."
  },
  {
    "id": 191,
    "title": "The Windows Server class uses a dynamic reconciliation rule that selects the most reported value for the RAM field. Given sources: Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020. Which RAM value will be written to the CMDB?",
    "options": [
      { "id": "A", "text": "6020" },
      { "id": "B", "text": "2048" },
      { "id": "C", "text": "4096" },
      { "id": "D", "text": "1024" }
    ],
    "answer": ["C"],
    "explanation": "'Most reported(최빈값)' 로직은 가장 자주 나타나는 값을 선택합니다. 이 시나리오에서는 4096이 두 번(Tivoli, ServiceNow) 나타나므로 최빈값인 4096이 선택됩니다."
  },
  {
    "id": 192,
    "title": "Which of the following can be configured to prevent inserts into the CMDB from an unwanted data source?",
    "options": [
      { "id": "A", "text": "Identification Rule" },
      { "id": "B", "text": "Reconciliation Rule" },
      { "id": "C", "text": "Dynamic Reconciliation Rule" },
      { "id": "D", "text": "Data Refresh Rule" },
      { "id": "E", "text": "IRE Data Source Rule" }
    ],
    "answer": ["E"],
    "explanation": "IRE 데이터 소스 규칙(IRE Data Source Rules)은 특정 데이터 소스가 특정 CMDB 클래스에 신규 레코드를 삽입(Insert)하는 것을 제어하거나 차단하기 위해 사용되는 전용 규칙입니다."
  },
  {
    "id": 193,
    "title": "The Unified Map combines many of the features from which of the following maps? (Choose two)",
    "options": [
      { "id": "A", "text": "Application Service" },
      { "id": "B", "text": "Dependency View" },
      { "id": "C", "text": "Geolocation" },
      { "id": "D", "text": "Dynamic" }
    ],
    "answer": ["A", "B"],
    "explanation": "통합 맵(Unified Map)은 애플리케이션 서비스 맵과 의존성 뷰(Dependency View)의 기능을 통합하여 CI 간의 관계를 종합적으로 시각화해 줍니다."
  },
  {
    "id": 194,
    "title": "The Unified Map is accessible from which application?",
    "options": [
      { "id": "A", "text": "ServiceNow Discovery" },
      { "id": "B", "text": "CMDB Workspace" },
      { "id": "C", "text": "CI Class Manager" },
      { "id": "D", "text": "Data Manager" },
      { "id": "E", "text": "CMDB Health Dashboard" }
    ],
    "answer": ["B"],
    "explanation": "통합 맵(Unified Map)은 CMDB Workspace 내부에 통합되어 있어 해당 워크스페이스에서 직접 접근하고 사용할 수 있습니다."
  },
  {
    "id": 195,
    "title": "Which ServiceNow management tool would you use to find data centers not connected to any configuration item?",
    "options": [
      { "id": "A", "text": "CI Class Manager" },
      { "id": "B", "text": "CMDB Health Dashboard" },
      { "id": "C", "text": "Data Manager" },
      { "id": "D", "text": "Unified Map" },
      { "id": "E", "text": "CMDB Query Builder" }
    ],
    "answer": ["E"],
    "explanation": "CMDB Query Builder를 사용하면 복잡한 데이터베이스 쿼리를 시각적으로 설계할 수 있으며, 특정 CI(예: 데이터 센터)와 연결 관계가 없는 항목들을 식별하는 데 매우 유용합니다."
  },
  {
    "id": 196,
    "title": "Intelligent Search uses which of the following languages?",
    "options": [
      { "id": "A", "text": "NLQ" },
      { "id": "B", "text": "SQL" },
      { "id": "C", "text": "MySQL" },
      { "id": "D", "text": "JSON" }
    ],
    "answer": ["A"],
    "explanation": "지능형 검색(Intelligent Search)은 자연어 쿼리(NLQ, Natural Language Query)를 활용하여 사용자가 일상적인 용어로 검색할 수 있도록 지원합니다."
  },
  {
    "id": 197,
    "title": "Remediation Playbooks that can be used to fix common CMDB and CSDM issues are accessible from which management tool?",
    "options": [
      { "id": "A", "text": "CMDB and CSDM Data Foundations Dashboards" },
      { "id": "B", "text": "Data Manager" },
      { "id": "C", "text": "CMDB Query Builder" },
      { "id": "D", "text": "CI Class Manager" }
    ],
    "answer": ["A"],
    "explanation": "공통적인 CMDB 및 CSDM 이슈를 해결하는 데 도움을 주는 치유 플레이북(Remediation Playbooks)은 CMDB/CSDM Data Foundations Dashboard 스토어 앱을 통해 제공됩니다."
  },
  {
    "id": 198,
    "title": "To assist incident and change routing, which of the following fields from the CI record map to the incident and change assignment group fields? (Choose two)",
    "options": [
      { "id": "A", "text": "Support Group" },
      { "id": "B", "text": "Change Group" },
      { "id": "C", "text": "Managed By Group" },
      { "id": "D", "text": "Assignment Group" },
      { "id": "E", "text": "Operational Group" }
    ],
    "answer": ["A", "B"],
    "explanation": "'Support Group' 필드는 인시던트(Incident)의 담당 그룹으로, 'Change Group' 필드는 변경(Change) 요청의 담당 그룹으로 자동 매핑되어 효율적인 티켓 라우팅을 돕습니다."
  },
  {
    "id": 199,
    "title": "The Logistics Company has created a Health Inclusion Rule to gain better insight into the data in their CMDB. Which of the following best describes the purpose of this rule?",
    "options": [
      { "id": "A", "text": "Allows them to test for required fields that are missing data" },
      { "id": "B", "text": "Allows them to filter which CI classes are calculated as part of the CMDB Health Dashboard" },
      { "id": "C", "text": "Allows them to identify and filter duplicate CIs" },
      { "id": "D", "text": "Allows them to validate the CMDB is configured to populate data for incomplete fields" }
    ],
    "answer": ["B"],
    "explanation": "Health Inclusion Rule은 조직이 CMDB Health Dashboard 계산에 포함할 CI와 해당 클래스를 필터링할 수 있도록 지원합니다. 이를 통해 관리 준비가 되지 않았거나 소유자가 없는 CI 데이터가 대시보드에 불필요하게 표시되는 것을 방지합니다."
  },
  {
    "id": 200,
    "title": "If a CMDB administrator wants to turn on task creation for each CI that fails the health test for recommended fields, where in ServiceNow is this configured?",
    "options": [
      { "id": "A", "text": "CI Class Manager" },
      { "id": "B", "text": "CMDB Health Dashboard" },
      { "id": "C", "text": "Health Metrics" },
      { "id": "D", "text": "System Properties" }
    ],
    "answer": ["C"],
    "explanation": "추천 필드(Recommended fields)에 대한 태스크 생성 기능은 CMDB Health Metrics 메뉴에서 설정합니다. Configuration > Health Preferences > Health Metrics로 이동한 뒤 Metric을 Recommended로 선택하고, Create Task를 활성화한 후 담당 그룹을 지정할 수 있습니다."
  },
  {
    "id": 201,
    "title": "Cloud Dimensions is reviewing the metrics provided by their CMDB Correctness Scorecard. In reviewing the Duplicate metric for the Server class, it displays Healthy CIs/Evaluated 700/800. Which of the following is true regarding the duplicate server records calculated on the Duplicate metric?",
    "options": [
      { "id": "A", "text": "700 server records are duplicates in the CMDB" },
      { "id": "B", "text": "800 server records are duplicates in the CMDB" },
      { "id": "C", "text": "100 server records are duplicates in the CMDB" },
      { "id": "D", "text": "700 Linux and 800 Windows server records are duplicates in the CMDB" }
    ],
    "answer": ["C"],
    "explanation": "700/800 지표에서 앞의 700은 평가 대상인 전체 800개의 서버 CI 중 중복되지 않은 건강한(Healthy) CI의 수입니다. 따라서 전체 평가 대상에서 건강한 개수를 제외한 100개(800 - 700)가 중복 레코드가 됩니다."
  },
  {
    "id": 202,
    "title": "Cloud Dimensions is reviewing the metrics provided by their CMDB Correctness Scorecard. In reviewing the Duplicate metric for the Server class, it displays Healthy CIs/Evaluated at 700/800. Which of the following is true regarding the scope of server records calculated on the Duplicate metric?",
    "options": [
      { "id": "A", "text": "800 server records exist in the CMDB" },
      { "id": "B", "text": "700 server records exist in the CMDB" },
      { "id": "C", "text": "100 server records exist in the CMDB" },
      { "id": "D", "text": "700 Linux and 800 Windows server records exist in the CMDB" }
    ],
    "answer": ["A"],
    "explanation": "700/800 지표에서 분모인 800은 해당 중복 메트릭에서 평가 대상이 된 전체 서버 레코드의 범위(Scope)를 나타냅니다."
  },
  {
    "id": 203,
    "title": "Cloud Dimensions is reviewing the metrics provided by the CMDB Correctness Scorecard. In reviewing the Duplicate metric for the Server class, it displays 1200/5000. In reviewing the Orphan metric, it displays 900/4200. Which of the following might be configured to display the difference in the scope of Server CIs (5000 vs 4200) used in both metrics?",
    "options": [
      { "id": "A", "text": "The Orphan metric has a Health Inclusion rule configured for the Server class" },
      { "id": "B", "text": "The Duplicate metric has a Health Inclusion rule configured for the Server class" },
      { "id": "C", "text": "The Orphan metric has a CMDB Group configured for the Server class" },
      { "id": "D", "text": "The Duplicate metric has a CMDB Group configured for the Server class" }
    ],
    "answer": ["A"],
    "explanation": "Health Inclusion Rule은 CMDB 헬스 대시보드에 나타나는 개별 메트릭 계산에 포함될 CI 범위를 필터링하는 데 쓰입니다. Orphan 메트릭에 Server 클래스용 Health Inclusion Rule을 적용했기 때문에 해당 메트릭의 평가 대상 범위가 4200개로 줄어든 것입니다."
  },
  {
    "id": 204,
    "title": "How many Orphan rules are provided in a base system?",
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "Depends on the plugins enabled" },
      { "id": "D", "text": "Depends on the CIs discovered" }
    ],
    "answer": ["A"],
    "explanation": "기본 제공 시스템(Base system) 환경에는 사전에 정의되거나 제공되는 고립 규칙(Orphan rules)이 기본적으로 존재하지 않습니다(0개)."
  },
  {
    "id": 205,
    "title": "What is the effective duration for the default Staleness rule in a base system?",
    "options": [
      { "id": "A", "text": "24 hours" },
      { "id": "B", "text": "7 days" },
      { "id": "C", "text": "30 days" },
      { "id": "D", "text": "60 days" }
    ],
    "answer": ["D"],
    "explanation": "기본 제공 시스템 환경에서 제공되는 기본 노후화 규칙(Staleness rule)의 유효 기준 기간은 60일로 설정되어 있습니다."
  },
  {
    "id": 206,
    "title": "The Staleness metric calculation is based on which of the following fields?",
    "options": [
      { "id": "A", "text": "Most recent discovery <last_discovered>" },
      { "id": "B", "text": "Created <sys_created_on>" },
      { "id": "C", "text": "Updated <sys_update_on>" },
      { "id": "D", "text": "First Discovered <first_discovered>" },
      { "id": "E", "text": "Discovery Source <discovery_source>" }
    ],
    "answer": ["C"],
    "explanation": "노후화 메트릭(Staleness metric)은 레코드가 마지막으로 수정되거나 업데이트된 시간 정보가 담긴 Updated <sys_update_on> 타임스탬프 필드를 기준으로 계산됩니다."
  },
  {
    "id": 207,
    "title": "Which of the following audit types are used in the calculation for the Compliance Scorecard results? (Select all that apply)",
    "options": [
      { "id": "A", "text": "Compliance" },
      { "id": "B", "text": "Compliance Architecture" },
      { "id": "C", "text": "Desired State" },
      { "id": "D", "text": "Scripted Audit" }
    ],
    "answer": ["C", "D"],
    "explanation": "컴플라이언스 스코어카드(Compliance Scorecard) 결과 산출에는 오직 Desired State(원하는 상태) 감사와 Scripted Audit(스크립트 기반 감사) 두 가지 유형만 사용됩니다."
  },
  {
    "id": 208,
    "title": "Which of the following are used when configuring a Desired State audit? (Select all that apply)",
    "options": [
      { "id": "A", "text": "Certification Templates" },
      { "id": "B", "text": "Certification Filters" },
      { "id": "C", "text": "Audit" },
      { "id": "D", "text": "Recommended Fields" },
      { "id": "E", "text": "Duplicates" },
      { "id": "F", "text": "Policies" }
    ],
    "answer": ["A", "B", "C"],
    "explanation": "Desired State 감사를 구성하는 요소로는 Certification Templates(인증 템플릿), Certification Filters(인증 필터), 그리고 Audit(감사 레코드)이 쓰입니다. Policies(정책)는 데이터 매니저(Data Manager)에서 사용되는 설정입니다."
  },
  {
    "id": 209,
    "title": "Which of the following reclassification behaviors might cause CI attributes and their data to be excluded during the reclassification process? (Choose two)",
    "options": [
      { "id": "A", "text": "Upgrade" },
      { "id": "B", "text": "Downgrade" },
      { "id": "C", "text": "Promotion" },
      { "id": "D", "text": "Switch" }
    ],
    "answer": ["B", "D"],
    "explanation": "CI 재분류(Reclassification) 프로세스 과정에서 클래스 계층 구조 하위로 내리는 Downgrade(강등)나 완전히 다른 계층으로 변경하는 Switch(전환)가 발생할 경우, 기존의 특정 속성과 데이터가 누락되거나 손실될 수 있습니다."
  },
  {
    "id": 210,
    "title": "Which results in a reclassification task being generated?",
    "options": [
      { "id": "A", "text": "glide.class.downgrade.enabled set to true and during discovery a Windows server is classified as a Linux server." },
      { "id": "B", "text": "glide.class.upgrade.enabled set to false and during discovery a Server is classified as a Windows server." }
    ],
    "answer": ["B"],
    "explanation": "재분류 태스크(Reclassification task)는 해당 재분류 방향에 상응하는 시스템 속성(Property) 값이 false로 설정되어 자동 분류가 차단되었을 때 생성됩니다. 예를 들어 상위 개념인 Server가 Windows Server로 바뀐 것은 Upgrade 유형이며, `glide.class.upgrade.enabled` 값이 false이므로 시스템이 자동으로 처리하지 않고 사람이 검토하도록 재분류 태스크를 트리거합니다."
  },
  {
    "id": 211,
    "title": "Which are valid Data Manager policy types? (Choose five)",
    "options": [
      { "id": "A", "text": "Retirement" },
      { "id": "B", "text": "Certification" },
      { "id": "C", "text": "Attestation" },
      { "id": "D", "text": "Deletion" },
      { "id": "E", "text": "Archiving" },
      { "id": "F", "text": "De-duplication" },
      { "id": "G", "text": "Reclassification" }
    ],
    "answer": ["A", "B", "C", "D", "E"],
    "explanation": "ServiceNow Data Manager에서 공식 지원하는 정책 유형은 Retirement(은퇴), Certification(인증), Attestation(증명), Deletion(삭제), Archiving(보관)의 총 5가지입니다. 중복 제거(De-duplication)와 재분류(Reclassification)는 별도의 다른 전용 기능을 이용해 처리합니다."
  },
  {
    "id": 212,
    "title": "A remediation workflow is directly referenced from which of the following?",
    "options": [
      { "id": "A", "text": "Remediation Task" },
      { "id": "B", "text": "CMDB Remediation Rule" },
      { "id": "C", "text": "CI Class Manager" },
      { "id": "D", "text": "Scheduled Job" }
    ],
    "answer": ["B"],
    "explanation": "조치 워크플로우(Remediation workflow)는 CMDB 조치 규칙(Remediation Rule)에 직접 정의되어 연결됩니다. 조치 태스크(Remediation Task)는 사용자가 수동 또는 자동화 프로세스를 통해 해당 조치 규칙과 워크플로우를 실행하도록 매개하는 주체입니다."
  },
  {
    "id": 213,
    "title": "Which of the following are used as recommendations in the Duplicate CI Remediator wizard to suggest which duplicate is the Main CI? (Choose three)",
    "options": [
      { "id": "A", "text": "Most Relationships" },
      { "id": "B", "text": "Most Recent Updated" },
      { "id": "C", "text": "Oldest Created" },
      { "id": "D", "text": "Least Recent Updated" },
      { "id": "E", "text": "Newest Created" },
      { "id": "F", "text": "Least Relationships" }
    ],
    "answer": ["A", "B", "C"],
    "explanation": "Duplicate CI Remediator 마법사에서 어떤 복제본을 대표 마스터 CI(Main CI)로 사용할지 제안할 때는 가장 많은 관계성 보유(Most Relationships), 가장 최근 수정(Most Recent Updated), 가장 먼저 생성됨(Oldest Created)의 세 가지 권장 기준이 반영됩니다."
  },
  {
    "id": 214,
    "title": "During ServiceNow Discovery, if a new CI is discovered and duplicates are found in the CMDB, which of the following is true?",
    "options": [
      { "id": "A", "text": "The oldest CI, based on Creation Date is updated" },
      { "id": "B", "text": "The oldest CI, based on Last Updated is updated" },
      { "id": "C", "text": "The newest CI, based on Creation Date is updated" },
      { "id": "D", "text": "The newest CI, based on Last Updated is updated" }
    ],
    "answer": ["A"],
    "explanation": "ServiceNow Discovery를 진행하는 중 새로운 대상 장비를 발견했으나 CMDB 상에 이미 중복 데이터가 존재할 경우, 생성 날짜(Creation Date) 기준으로 가장 오래된 CI가 디스커버리에 의해 식별되어 최종 업데이트를 받습니다."
  },
  {
    "id": 215,
    "title": "CI Attestation is the confirmation of which of the following?",
    "options": [
      { "id": "A", "text": "CI exists" },
      { "id": "B", "text": "CI does not exist" },
      { "id": "C", "text": "CI has dependent CIs" },
      { "id": "D", "text": "CI does not have dependent CIs" }
    ],
    "answer": ["A"],
    "explanation": "CI Attestation(CI 증명)은 해당 데이터가 가리키는 실제 IT 구성 항목 자산이 현실 세계에 실제로 존재함(CI exists)을 확인하고 보증하는 프로세스입니다."
  },
  {
    "id": 216,
    "title": "You have 10 servers part of a CMDB group. (Servers 1-10). What will be the overall scorecard percentage for the group on the CMDB Health Dashboard Correctness scorecard given the following information?\n- Server 1 fails the non-duplicate metric\n- Server 2 fails the non-orphan metric\n- Server 3 fails the non-stale metric\nThe remaining servers pass all three metrics.",
    "options": [
      { "id": "A", "text": "90%" },
      { "id": "B", "text": "70%" },
      { "id": "C", "text": "30%" },
      { "id": "D", "text": "10%" }
    ],
    "answer": ["B"],
    "explanation": "전체 Correctness 스코어카드는 그룹 내 CI가 하위의 '모든' 메트릭(중복 없음, 고립 없음, 노후화 없음)을 결함 없이 통과해야 정상 건수로 판단합니다. 10대 중 Server 1, 2, 3 총 3대가 각기 다른 메트릭에 결함이 발생했으므로 모든 메트릭을 통과한 정상 CI는 7대뿐이어서 최종 70%가 기록됩니다."
  },
  {
    "id": 217,
    "title": "You have 10 servers part of a CMDB group. (Servers 1-10). What will be the percentage listed on the Correctness scorecard - non-duplicate metric for the group given the following information?\n- Server 1 fails the non-duplicate metric\n- Server 2 fails the non-duplicate metric\n- Server 3 fails the non-stale metric\n- Server 4 fails the non-orphan metric\nThe remaining servers pass all three metrics.",
    "options": [
      { "id": "A", "text": "90%" },
      { "id": "B", "text": "80%" },
      { "id": "C", "text": "60%" },
      { "id": "D", "text": "20%" }
    ],
    "answer": ["B"],
    "explanation": "질문은 전체 Correctness가 아닌 개별 하위 지표인 '중복 없음(non-duplicate)' 메트릭만의 비율을 묻고 있습니다. 10대 중 오직 Server 1과 Server 2만 중복 메트릭에서 실패로 분류되었으며(Server 3, 4는 다른 메트릭 결함), 나머지 8대는 중복 검사를 무사히 통과했으므로 80%가 정답입니다."
  },
  {
    "id": 218,
    "title": "You have 20 servers part of a CMDB group. (Servers 1-20). Five of the servers have duplicate server records. Given the following information, what will the Correctness scorecard - non-duplicate metric display for the group after the scorecard is executed?\n- Server 1-4 have duplicate records, and the duplicate records do not have their discovery source field populated.\n- Server 5 has a duplicate record, and both records have their discovery source field populated.\nThe remaining servers have no duplicate records.",
    "options": [
      { "id": "A", "text": "Non-Duplicate CIs 12/20" },
      { "id": "B", "text": "Non-Duplicate CIs 10/20%" },
      { "id": "C", "text": "Non-Duplicate CIs 16/20" },
      { "id": "D", "text": "Non-Duplicate CIs 15/20" }
    ],
    "answer": ["A"],
    "explanation": "20개 중 12개의 레코드가 중복되지 않은(Non-Duplicate) 정상 데이터로 판정됩니다. Server 1~4는 중복 레코드가 존재하고 discovery source 필드가 없어 총 8개의 레코드가 중복 결함 항목으로 잡힙니다. 반면 Server 5는 중복 관계임에도 양쪽 모두에 discovery source 필드가 유효하게 채워져 있으므로 IRE(식별 및 조정 엔진)에 의해 유효하게 취급되어 중복 플래그에서 제외됩니다. 따라서 정상 처리된 결과물은 12/20이 됩니다."
  },
  {
    "id": 219,
    "title": "Now Assist for CMDB—Automated Duplicate CI Management leverages which of the following to improve the management of duplicate CIs leveraging AI detection and remediation?",
    "options": [
      { "id": "A", "text": "De-Duplication Templates" },
      { "id": "B", "text": "CMDB Health Dashboard" },
      { "id": "C", "text": "CMDB Workspace" },
      { "id": "D", "text": "Duplicate CI Remediator" }
    ],
    "answer": ["A"],
    "explanation": "Now Assist for CMDB의 AI 기반 자동화 중복 CI 관리 기능은 감지 및 조치 워크플로우를 고도화하기 위해 De-Duplication Templates(중복 제거 템플릿) 기술을 활용합니다."
  },
  {
    "id": 220,
    "title": "Match each ServiceNow CMDB core term to its correct definition.\n\n[Terms]\n1. CMDB (Configuration Management Database)\n2. Class\n3. Attributes\n4. Foundational Data\n\n[Definitions]\na. A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle\nb. A specific database table that contains a distinct type or group of CIs sharing common behavioral and schema attributes\nc. Specific information elements or data fields that further describe a CI, such as name, serial number, or OS version\nd. Common reference data—such as users, groups, and locations—that is not infrastructure data itself but is referenced across CMDB and ITSM processes",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "ServiceNow University 교육 과정 매칭 문제로, CMDB(a), Class(b), Attributes(c), Foundational Data(d)의 공식 정의를 올바르게 설명하고 있습니다."
  },
  {
    "id": 221,
    "title": "Match each CI class to its corresponding system table name in the ServiceNow CMDB.\n\n[CI Classes]\n1. Configuration Item\n2. Hardware\n3. Server\n4. Application Service\n\n[Table Mappings]\na. Stored in [cmdb_ci], the top-level parent base table for all CIs\nb. Stored in [cmdb_ci_hardware], which holds serial number, model ID, and manufacturer attributes\nc. Stored in [cmdb_ci_server], a child of Hardware, primarily managing hostname and OS information\nd. Stored in [cmdb_ci_service_auto], holding Entry Point and Environment attributes and forming the service map",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "C", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "각 CI 클래스는 상속 관계에 따라 특정 테이블에 저장됩니다. cmdb_ci(a)는 최상위 베이스 테이블이며, cmdb_ci_hardware(b)는 하드웨어 클래스, cmdb_ci_server(c)는 서버 클래스, cmdb_ci_service_auto(d)는 애플리케이션 서비스 테이블입니다."
  },
  {
    "id": 222,
    "title": "Match each ServiceNow Discovery phase to its correct activity.\n\n[Phases]\n1. Scanning\n2. Classification\n3. Identification\n4. Exploration\n\n[Activities]\na. Collects detailed information about installed software, hardware components, and CI relationships\nb. Uses the Shazzam probe to scan the IP range for active devices by checking open TCP/UDP ports\nc. Sends Classifier probes to determine the OS version and appropriate device type category (Windows, Linux, etc.)\nd. Compares collected unique attributes (serial number, MAC address, etc.) against IRE identification rules to update an existing record or create a new one",
    "options": [
      { "id": "A", "text": "1-b, 2-c, 3-d, 4-a" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-c, 2-b, 3-d, 4-a" },
      { "id": "D", "text": "1-c, 2-a, 3-b, 4-d" }
    ],
    "answer": ["A"],
    "explanation": "Scanning은 Shazzam 프로브를 활용해 활성 포트를 검사하며(b), Classification은 OS와 기기 유형을 분류하고(c), Identification은 IRE 식별 규칙으로 중복을 방지하며 기기 생성 여부를 결정하고(d), Exploration은 상세 속성 및 관계를 최종 탐색(a)합니다."
  },
  {
    "id": 223,
    "title": "Match each CSDM 5.0 domain to its representative entities.\n\n[Domains]\n1. Foundation\n2. Design & Planning\n3. Service Delivery\n4. Service Consumption\n\n[Representative Entities]\na. Location, User, Group, and other platform-wide foundational master reference records\nb. Business Application, Information Object, and other non-operational design and planning artifacts\nc. Application Service, Dynamic CI Group, and other deployed operational infrastructure instances\nd. Business Service, Technology Management Offering, and other consumer-facing service portfolio items",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "Foundation은 Location/User(a) 등 기본 프레임이며, Design & Planning은 아키텍처 관점의 Business Application(b)을 다룹니다. Service Delivery는 운영 환경의 Application Service(c)를 포함하며, Service Consumption은 고객이 구독/신청하는 Business Service와 Service Offering(d)을 매핑합니다."
  },
  {
    "id": 224,
    "title": "Match each CMDB Health Dashboard sub-metric to its correct measurement criteria.\n\n[Sub-Metrics]\n1. Completeness - Recommended\n2. Compliance - Desired State\n3. Correctness - Staleness\n4. Correctness - Orphan\n\n[Measurement Criteria]\na. Classifies CIs that have not been updated (sys_updated_on) by Discovery or any source for a set period (default 60 days)\nb. Checks whether fields registered as 'Recommended' in CI Class Manager are populated, without blocking record creation\nc. Compares actual CI values against audit template conditions to verify that a CI group conforms to a defined standard configuration policy\nd. Classifies CIs that have lost required relationship links and exist without the necessary connection to parent or dependent records",
    "options": [
      { "id": "A", "text": "1-b, 2-c, 3-a, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-c, 4-d" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-c, 2-b, 3-d, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "Recommended 지표는 권장 필드 누락(b), Desired State는 정책 준수 감사(c), Staleness는 갱신되지 않은 오래된 CI(a), Orphan은 관계선이 끊긴 고아 CI(d)를 분류합니다."
  },
  {
    "id": 225,
    "title": "Match each CI Reclassification type to its correct definition.\n\n[Reclassification Types]\n1. Upgrade\n2. Downgrade\n3. Switch\n\n[Definitions]\na. Moving a CI to a different child class branch under the same parent, with a risk of data loss for fields specific to the original child class (e.g., Windows Server to Linux Server)\nb. Moving a CI from a parent class to a more specific child class, with no risk of data loss (e.g., Computer to Server)\nc. Moving a CI from a child class up to a less specific parent class, with a risk of losing data stored in child-class-specific fields (e.g., Server to Computer)",
    "options": [
      { "id": "A", "text": "1-b, 2-c, 3-a" },
      { "id": "B", "text": "1-a, 2-b, 3-c" },
      { "id": "C", "text": "1-c, 2-b, 3-a" },
      { "id": "D", "text": "1-b, 2-a, 3-c" }
    ],
    "answer": ["A"],
    "explanation": "Upgrade는 더 구체적인 자식 클래스로 이동하므로 정보 손실이 없고(b), Downgrade는 상위 부모로 가면서 자식만의 세부 필드가 누락될 위험이 있으며(c), Switch는 다른 자식 분기로 변경 시 필드가 유실될 위험이 발생(a)합니다."
  },
  {
    "id": 226,
    "title": "Match each ServiceNow CMDB configuration rule or setting to its correct description.\n\n[Rules / Settings]\n1. Principal Class\n2. Suggested Relationships\n3. Identification Rules\n4. Reconciliation Rules\n\n[Descriptions]\na. Restricts the CI classes displayed in search fields on Incident, Change, and other ITSM forms to reduce user confusion\nb. Pre-recommends standard relationship types (e.g., Hosts, Runs on) when a user manually creates a relationship to prevent incorrect associations\nc. Defines the attributes (e.g., serial number, MAC address) used by the IRE to match incoming data against existing CMDB records and prevent duplicate CI creation\nd. Controls which data source has authority to update a specific CI attribute when multiple sources attempt to write to the same field, based on an Order value (lower = higher priority)",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-c, 2-b, 3-a, 4-d" },
      { "id": "D", "text": "1-d, 2-c, 3-b, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "Principal Class는 검색용 필터 목록(a)을 설정하고, Suggested Relationships는 관계 종류 가이드(b)를 제시하며, Identification Rules는 중복 식별 기준(c), Reconciliation Rules는 소스 신뢰도 제어(d)를 설정합니다."
  },
  {
    "id": 227,
    "title": "Match each ServiceNow CMDB/CSDM role to its primary responsibility.\n\n[Roles]\n1. CMDB Administrator\n2. Configuration Manager\n3. CI Analyst\n4. Service Owner\n\n[Primary Responsibilities]\na. Configures CI Class Manager, IRE identification and reconciliation rules, Discovery integrations, and maintains the overall technical data model\nb. Establishes configuration management process policies, oversees enterprise-wide data quality governance, and coordinates the Configuration Control Board (CCB)\nc. Resolves day-to-day data integrity tasks such as duplicate CI remediation, orphan and stale CI cleanup, and CMDB Health metric remediation\nd. Owns the lifecycle and business value of a specific service portfolio, validates service offering mappings, and reviews service map accuracy",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "ServiceNow CMDB/CSDM 운영 체계의 역할 정의 매칭으로, 기술 인프라 담당(CMDB Admin - a), 프로세스 및 정책 총괄(Configuration Manager - b), 실무 데이터 분석 및 복구 태스크 수행(CI Analyst - c), 서비스의 비즈니스 가치 및 품질 보증(Service Owner - d)을 올바르게 설명합니다."
  },
  {
    "id": 228,
    "title": "Match each target device type to the Discovery protocol and credential type used to scan it.\n\n[Device Types]\n1. Windows Server\n2. Linux / Unix Server\n3. Network Switch / Router\n4. VMware vCenter / ESXi Hypervisor\n\n[Protocol & Credential]\na. Uses WMI (Windows Management Instrumentation) or WinRM protocol; requires local or domain Administrator credentials\nb. Uses SSH (Secure Shell) protocol; requires a user account with password or an SSH private key (sudo privilege recommended)\nc. Uses SNMP (Simple Network Management Protocol); requires a read-only SNMP community string\nd. Uses VMware API over HTTPS; requires a user account with read-only access to the vCenter console or the ESXi hypervisor",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "각 탐색 대상별 프로토콜 매치 문제로, Windows는 WMI/WinRM(a), Linux/Unix는 SSH(b), 네트워크 장비는 SNMP(c), 가상화 서버는 VMware API(d)를 사용합니다."
  },
  {
    "id": 229,
    "title": "Match each MID Server communication component to its correct description.\n\n[Components]\n1. MID Server Connection\n2. ECC Queue\n3. Output Queue\n4. Input Queue\n\n[Descriptions]\na. The MID Server initiates an outbound HTTPS connection (port 443) to the instance, requiring no inbound firewall ports to be opened toward the internal network\nb. A database staging table ([ecc_queue]) that temporarily buffers asynchronous messages between the instance and MID Server\nc. The direction in which the instance sends scan range instructions or command execution requests to the MID Server\nd. The direction in which the MID Server returns collected XML payload data from target devices back to the instance",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "MID Server 통신 구조 매칭으로, MID Server는 아웃바운드 443 포트로 통신하며(a), ecc_queue 테이블이 완충 지대 역할을 하고(b), Output 큐는 인스턴스에서 MID 서버로 향하는 명령 지시(c), Input 큐는 수집된 결과의 보고(d)를 의미합니다."
  },
  {
    "id": 230,
    "title": "Match each ServiceNow CMDB data ingestion method to the sentence that best describes it.\n\n[Methods]\n1. Discovery\n2. Service Mapping\n3. Service Graph Connectors\n4. Import Sets\n\n[Descriptions]\na. An agentless, horizontal process that scans IP address ranges, identifies active devices, and automatically collects OS, software, and hardware attributes to populate CIs in the CMDB\nb. A top-down process that starts from a business application entry point, traces runtime dependencies, and builds an Application Service map showing how infrastructure CIs support a business service\nc. ServiceNow-designed and certified integration apps for ingesting data from third-party sources (e.g., AWS, Azure, SCCM) that include built-in IRE mapping to prevent duplicate CIs\nd. A traditional data load mechanism that stages data from files (Excel, CSV) or external databases into a temporary staging table, then maps and transforms it to the target table using a Transform Map and Coalesce field configuration",
    "options": [
      { "id": "A", "text": "1-a, 2-b, 3-c, 4-d" },
      { "id": "B", "text": "1-b, 2-a, 3-d, 4-c" },
      { "id": "C", "text": "1-a, 2-c, 3-b, 4-d" },
      { "id": "D", "text": "1-d, 2-b, 3-c, 4-a" }
    ],
    "answer": ["A"],
    "explanation": "ServiceNow University 교육 과정 및 자격증 시험에서 출제되는 데이터 수집 방법별 표준 문장 정의를 짝짓는 문제입니다. Discovery는 IP 대역 기반 수평적 에이전트리스 스캔(a), Service Mapping은 비즈니스 관점 하향식 종속성 매핑(b), Service Graph Connectors는 IRE가 내장된 서드파티 연동 표준 앱(c), Import Sets는 스테이징 테이블과 Transform Map을 활용하는 수동 데이터 로더(d)입니다."
  }
];
