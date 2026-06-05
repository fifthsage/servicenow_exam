window.CISDF_QUESTIONS = [
  {
    "id": 1,
    "title": "Which CSDM domain are business applications, information objects, and capabilities part of?",
    "options": [
      {
        "letter": "A",
        "text": "Service Consumption"
      },
      {
        "letter": "B",
        "text": "Build & Integration"
      },
      {
        "letter": "C",
        "text": "Service Delivery"
      },
      {
        "letter": "D",
        "text": "Design & Planning"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. CSDM 프레임워크에서 Business Application, Information Object, Business Capability는 기업의 전략적 청사진과 자산 포트폴리오를 정의하는 'Design & Planning(또는 Design)' 도메인에 속합니다. 이 도메인의 핵심 특징은 '비운영(Non-operational)' 데이터라는 점이며, 실제 인프라의 운영 상태를 나타내는 Application Service(Service Delivery 도메인)와 엄격히 구분됩니다."  
  },
  {
    "id": 2,
    "title": "A CMDB Administrator needs to import external data into the CMDB. The administrator wants to reduce the risk of creating duplicates and prevent unauthorized records from being created if the Identification and Reconciliation API is bypassed. What is the recommended method to import data into the CMDB using the Identification and Reconciliation API?",
    "options": [
      {
        "letter": "A",
        "text": "IntegrationHub ETL"
      },
      {
        "letter": "B",
        "text": "Table API (REST API or SOAP API)"
      },
      {
        "letter": "C",
        "text": "Import Sets and Transform Maps"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. IntegrationHub ETL은 ServiceNow CMDB에 데이터를 안전하게 적재하기 위해 설계된 표준 가이드형 도구입니다. 스크립트 작성 없이도 데이터를 IRE(Identification and Reconciliation Engine)와 자동으로 연동시켜 중복 생성을 원천 차단합니다. 반면 Table API(B)는 데이터베이스에 직접 쓰기 때문에 IRE를 우회하며, 레거시 Transform Maps(C)는 IRE 연동을 위해 복잡한 수동 스크립팅이 필요하므로 실수로 인한 우회 위험이 존재합니다."  
  },
  {
    "id": 3,
    "title": "A CMDB Administrator is considering using the playbooks provided in the CMDB Data Foundations Dashboard. What are the benefits of leveraging these playbooks? (Choose 2 answers)",
    "options": [
      {
        "letter": "A",
        "text": "Offers insight into the downstream impacts of poorly performing metrics"
      },
      {
        "letter": "B",
        "text": "Offers automated scripts to resolve poorly performing metrics"
      },
      {
        "letter": "C",
        "text": "Offers remediation options to address and improve poorly performing metrics"
      },
      {
        "letter": "D",
        "text": "Has a framework to create custom metrics"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. ServiceNow의 CMDB Data Foundations 플레이북은 특정 CMDB 건전성 지표가 기준 미달일 때 두 가지 핵심 가치를 제공합니다. 첫째, 해당 데이터 결함이 IT 서비스 관리(ITSM)나 자산 관리 등 후속 프로세스에 미치는 부정적 영향(Downstream impacts)을 설명해 줍니다. 둘째, 관리자가 이를 올바르게 수정할 수 있도록 구체적인 조치 방법(Remediation options)을 단계별로 안내합니다. 플레이북은 자동 치유 스크립트(B)를 실행하거나 커스텀 지표(D)를 설계하는 도구가 아닌, 데이터 거버넌스 가이드를 제공하는 도구입니다."
  },
  {
    "id": 4,
    "title": "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    "options": [
      {
        "letter": "A",
        "text": "It is active by default."
      },
      {
        "letter": "B",
        "text": "It is a free application on the ServiceNow Store."
      },
      {
        "letter": "C",
        "text": "It is a free application on the ServiceNow Innovation Lab."
      },
      {
        "letter": "D",
        "text": "It is a paid application on the ServiceNow Store."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. CMDB 및 CSDM 데이터의 표준 준수 여부를 모니터링하는 'Data Foundations Dashboard'는 ServiceNow Store에서 무료로 다운로드하여 설치할 수 있는 정식 애플리케이션입니다. 패밀리 릴리즈 주기에 종속되지 않고 신속한 기능 업데이트를 제공하기 위해 스토어 앱 형태로 배포되며, 플랫폼의 데이터 신뢰도를 높이기 위한 공익적 목적의 툴이므로 추가 라이선스 비용(D)이 발생하지 않습니다."  
  },
  {
    "id": 5,
    "title": "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "Reconciliation Rules" },
      { "letter": "C", "text": "CMDB Workspace" },
      { "letter": "D", "text": "CMDB 360/Multisource CMDB" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. '가장 많이 보고된 값(Most Reported)' 또는 '가장 최근에 입력된 값(Last Reported)'과 같이 조건에 따라 데이터를 채택하는 동적 조정 규칙(Dynamic Reconciliation Rules)을 사용하려면, 인스턴스에 CMDB 360(기존의 Multisource CMDB) 기능이 활성화되어 있어야 합니다. CMDB 360이 켜져야 탈락한 소스의 원본 데이터까지 백엔드 데이터베이스(cmdb_multisource_data)에 보관되므로, 이를 기반으로 한 동적 비교 연산이 가능해집니다."
  },
  {
    "id": 6,
    "title": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      { "letter": "A", "text": "Many-to-one" },
      { "letter": "B", "text": "Many-to-many" },
      { "letter": "C", "text": "One-to-many" },
      { "letter": "D", "text": "One-to-one" }
    ],
    "answer": ["B"],
    "explanation": "정답: B (Many-to-many). 엔터프라이즈 IT 환경에서 애플리케이션 서버와 애플리케이션 간의 관계는 다대다(Many-to-many) 구조를 가집니다. 하나의 서버가 여러 앱을 구동할 수 있을 뿐만 아니라, 하나의 대형 애플리케이션이 가용성과 부하 분산을 위해 여러 대의 서버에 걸쳐 분산 배치(Clustering/Load Balancing)될 수 있기 때문입니다. ServiceNow는 이를 지원하기 위해 두 테이블 간의 관계를 참조 필드가 아닌 독립된 관계 테이블(cmdb_rel_ci)을 활용한 Many-to-many 모델로 관리합니다."
  },
  {
    "id": 7,
    "title": "A Data Center Manager is defining the relationship between Application Servers and Applications in the CMDB. The company environment has the following characteristics:\n- Multiple Application Servers\n- Each server can host multiple Applications\n- Each Application can run on multiple servers.\nWhich describes the relationship?",
    "options": [
      { "letter": "A", "text": "One-to-one" },
      { "letter": "B", "text": "One-to-many" },
      { "letter": "C", "text": "Many-to-one" },
      { "letter": "D", "text": "Many-to-many" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. 지문에서 '각 서버가 여러 애플리케이션을 호스팅할 수 있고, 각 애플리케이션 또한 여러 서버에서 실행될 수 있다'고 명시했으므로 두 구성요소(CI) 간의 관계는 다대다(Many-to-many)입니다. ServiceNow CMDB는 엔터프라이즈의 로드 밸런싱 및 클러스터 환경을 반영하기 위해, 기본 참조 필드 대신 'cmdb_rel_ci' 테이블을 중간 교차 테이블로 활용하여 이러한 다대다 관계를 유연하게 지원합니다."
  },
  {
    "id": 8,
    "title": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      { "letter": "A", "text": "Enterprise Architect" },
      { "letter": "B", "text": "Application Service Owners" },
      { "letter": "C", "text": "Technology Service Owners" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. CSDM 프레임워크에서 서버, 네트워크, 스토리지 등 하드웨어 인프라 및 기술 지원 영역은 '기술 서비스(Technical/Technology Services)' 도메인에 해당합니다. 따라서 서버 팀의 인프라 업그레이드 신청을 위한 카탈로그 항목 프로세스를 발의하고 구체적인 요구사항을 정의하는 책임은 Technology Service Owner에게 있습니다. Enterprise Architect(A)는 전략적 청사진을 그리며, Application Service Owner(B)는 인프라 위에 올라가는 소프트웨어 인스턴스의 소유자이므로 오답입니다."
  },
  {
    "id": 9,
    "title": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments"
      },
      {
        "letter": "B",
        "text": "Improves the implementation velocity of APM Foundation for future business application rationalization"
      },
      {
        "letter": "C",
        "text": "Enables impact assessments for incident, problem, and change on Business Services"
      }
    ],
    "answer": ["C"],
    "explanation": "정답: C. CSDM 성숙도 여정의 'Walk(걷기)' 단계는 하부 기술 인프라(Crawl 단계 산출물)를 상위의 'Business Service(비즈니스 서비스)'와 논리적으로 연결하는 정렬 단계입니다. 이 단계가 완성되면 인스턴스 내의 핵심 ITSM 프로세스(Incident, Problem, Change)를 처리할 때, 특정 인프라 결함이 비즈니스 서비스에 미치는 연쇄적 위험과 영향도(Impact Assessment)를 실시간으로 가시화할 수 있게 됩니다. OLA 관리(A)는 Run 단계, APM 연동(B)은 Fly 단계의 이점이므로 오답입니다."
  },
  {
    "id": 10,
    "title": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      { "letter": "A", "text": "Completeness" },
      { "letter": "B", "text": "Correctness" },
      { "letter": "C", "text": "Compliance" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. CMDB Health Dashboard의 3대 핵심 KPI(3C) 중 하나인 'Correctness(정확성)' 스코어카드는 데이터의 무결성과 최신 상태를 측정합니다. Correctness 영역은 중복(Duplicate), 고아(Orphan), 그리고 특정 기간 동안 업데이트가 발생하지 않아 방치된 좀비 데이터인 '오래된 CI(Stale CIs)'를 추적하여 관리자에게 시각화해 줍니다. 필수 필드 입력 여부는 Completeness(A), 규정 및 감사 준수 여부는 Compliance(C)에서 다룹니다."
  },
  {
    "id": 11,
    "title": "Which field on Incident form is automatically populated after a CI is selected that reference an appropriate support group?",
    "options": [
      { "letter": "A", "text": "Assignment Group" },
      { "letter": "B", "text": "Support Group" },
      { "letter": "C", "text": "Approval Group" },
      { "letter": "D", "text": "Managed by Group" },
      { "letter": "E", "text": "Change Group" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. Incident 폼에서 장애 대상이 되는 구성요소(CI)를 선택하면, ServiceNow는 해당 CI 레코드에 사전에 정의된 'Support Group(지원 그룹)' 정보를 읽어와 Incident 폼의 'Assignment Group(담당 그룹)' 필드에 자동으로 입력합니다. 이는 장애 티켓을 올바른 기술 지원 팀으로 지연 없이 실시간 라우팅하여 장애 처리 프로세스를 가속화하기 위한 OOTB(기본 제공) 연동 기능입니다."
  },
  {
    "id": 12,
    "title": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      { "letter": "A", "text": "All" },
      { "letter": "B", "text": "Child" },
      { "letter": "C", "text": "Added" },
      { "letter": "D", "text": "Derived" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CI Class Manager의 Attributes(속성) 화면에서는 상속 구조를 효율적으로 파악할 수 있도록 탭 분할 뷰를 제공합니다. 그중 'Added' 탭은 상위 부모 클래스로부터 상속받은 속성(Derived 탭에 표시됨)을 제외하고, 오직 현재 클래스(Windows Server) 관리를 위해 직접(Specifically) 추가로 생성된 고유 속성만 필터링하여 표시합니다."
  },
  {
    "id": 13,
    "title": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    "options": [
      { "letter": "A", "text": "Create a business rule" },
      { "letter": "B", "text": "Create a scheduled job" },
      { "letter": "C", "text": "Create an archive policy" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Data Manager는 자산의 수명 주기를 일괄 관리할 수 있는 정책 기반의 프레임워크를 제공합니다. 6개월간 갱신되지 않은 리눅스 서버처럼 메인 인스턴스에서 분리 보관이 필요한 경우 'Archive' 정책을 생성하는 것이 베스트 프랙티스입니다. 아카이브 정책은 데이터를 완전히 삭제(Delete)하기 전, 독립된 테이블로 안전하게 격리하여 CMDB 성능을 최적화하고 필요시 복구할 수 있는 기능을 제공합니다. 레거시 스크립트 방식인 Business Rule(A)이나 Scheduled Job(B)은 참조 무결성을 깨뜨릴 위험이 있어 권장되지 않습니다."
  },
  {
    "id": 14,
    "title": "A CMDB Administrator installs a Service Graph Connector. They customize a script transform... What happens to the customized script transform during the upgrade?",
    "options": [
      { "letter": "A", "text": "The upgrade stops and reports an error." },
      { "letter": "B", "text": "A skipped change is created and no change is made to the script transform definition." },
      { "letter": "C", "text": "The Service Graph Connector upgrade refuses to start." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow 플랫폼은 버전이나 스토어 앱 업그레이드 시 고객이 커스터마이징한 자산을 보호하기 위해 '업그레이드 보호 아키텍처'를 사용합니다. 관리자가 Service Graph Connector의 스크립트 트랜스폼을 수정한 경우, 시스템은 Customer Updates 기록을 바탕으로 해당 항목의 업데이트를 자동으로 건너뜁니다(Skip). 따라서 기존 커스텀 스크립트는 덮어씌워지지 않고 안전하게 보존되며, 대신 Upgrade History에 'Skipped Change' 로그가 생성되어 사후 검토를 할 수 있게 합니다. 업그레이드가 중단(A)되거나 거부(C)되는 일은 발생하지 않습니다."
  },
  {
    "id": 15,
    "title": "In the Create Reconciliation Rule wizard for CMDB 360 / Multisource CMDB, which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "Most Reported" },
      { "letter": "B", "text": "Last Created" },
      { "letter": "C", "text": "Last Updated" },
      { "letter": "D", "text": "Smallest Value" }
    ],
    "answer": ["A", "D"],
    "explanation": "정답: A, D. ServiceNow 공식 문서에 따르면 CMDB 360(Multisource CMDB) 환경에서 사용할 수 있는 동적 조정 규칙 유형(Dynamic Rule Types)은 'First Reported', 'Most Reported', 'Last Reported', 'Largest Value', 'Smallest Value' 총 5가지입니다. 따라서 제시된 보기 중에서는 'Most Reported(A)'와 'Smallest Value(D)'만이 올바른 정답입니다. 'Last Updated(C)'는 얼핏 정답처럼 보이지만 공식 명칭인 'Last Reported'가 아니며, 'Last Created(B)' 역시 존재하지 않는 가짜 옵션입니다."
  },
  {
    "id": 16,
    "title": "A CMDB Administrator needs to clean up duplicate CIs in the CMDB. What is the preferred way to manage this task?",
    "options": [
      { "letter": "A", "text": "The De-duplication Dashboard on the CMDB Workspace" },
      { "letter": "B", "text": "My Tasks in the Application Navigator" },
      { "letter": "C", "text": "The De-duplication Task module" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow의 최신 베스트 프랙티스에 따르면, CMDB 내 중복 구성요소(CI)를 정제하고 관리하는 가장 선호되는 방식은 'CMDB Workspace의 De-duplication Dashboard'를 활용하는 것입니다. 이 대시보드는 중복 현황에 대한 전사적 통계를 시각화해 줄 뿐만 아니라, 안전한 데이터 병합 및 관계 이전을 지원하는 가이드형 '치유 마법사(Remediation Wizard)' 환경을 다이렉트로 제공합니다. 클래식 메뉴의 De-duplication Task module(C)은 단순 레코드 목록만 나열하므로 최적의 관리 방식으로 권장되지 않습니다."
  },
  {
    "id": 17,
    "title": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      { "letter": "A", "text": "data_classification_admin and personalize_dictionary" },
      { "letter": "B", "text": "cmdb_inst_admin and personalize_form" },
      { "letter": "C", "text": "itil_admin and personalize_form" },
      { "letter": "D", "text": "sn_cmdb_admin and personalize_dictionary" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB에서 새로운 커스텀 CI 클래스를 생성하는 것은 데이터베이스 테이블을 확장(Extend)하고 데이터 사전 사전을 수정하는 고도의 작업입니다. 이를 수행하려면 CMDB 관리 도구에 접근할 수 있는 'sn_cmdb_admin' 역할과, 실제 데이터베이스 필드 및 속성을 정의할 수 있는 데이터 사전 변경 권한인 'personalize_dictionary' 역할이 모두 필요합니다. 단순히 화면 레이아웃과 필드 가시성만 변경하는 'personalize_form(B, C)' 권한으로는 테이블 스키마를 생성할 수 없습니다."
  },
  {
    "id": 18,
    "title": "What is the relationship between an application and a server in the ServiceNow CMDB?",
    "options": [
      { "letter": "A", "text": "Application > Runs on :: Runs > Server" },
      { "letter": "B", "text": "Application > Runs :: Runs on > Server" },
      { "letter": "C", "text": "Application > Used by :: Uses > Server" },
      { "letter": "D", "text": "Application > Uses :: Used by > Server" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB에서 관계 유형은 '부모-자식' 방향에 맞춰 정방향 문구(Forward Phrase)와 역방향 문구(Inverse Phrase)를 '::' 기호로 연결해 정의합니다. 상위 소프트웨어인 Application은 부모, 하위 인프라인 Server는 자식이 되므로 'Application [Runs on] Server'가 정방향, 'Server [Runs] Application'이 역방향이 되는 A번 조합이 표준 명명 규칙에 부합합니다."
  },
  {
    "id": 19,
    "title": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": [
      { "letter": "A", "text": "Managed By Group" },
      { "letter": "B", "text": "Approval Group" },
      { "letter": "C", "text": "Support Group" },
      { "letter": "D", "text": "Change Group" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. CMDB Data Manager 정책은 구성요소(CI)의 수명 주기(은퇴, 아카이브, 삭제 등) 조치 전, 해당 자산의 관리 책임자에게 승인 및 확인 태스크를 발송합니다. 이때 CI Class Manager에서 정의한 클래스별 소유권 및 데이터 거버넌스 책임 그룹을 다이렉트로 활용하기 위해 매핑해야 하는 필드는 'Managed By Group'입니다. Support Group(C)은 장애 조치용, Change Group(D)은 변경 수행용 필드이므로 자산 수명 주기 거버넌스를 담당하는 이 문제의 목적에는 부합하지 않습니다."
  },
  {
    "id": 20,
    "title": "Which of the following is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      { "letter": "A", "text": "Automates the enforcement of relationship rules between CIs in the CMDB" },
      { "letter": "B", "text": "Encrypts archived records for enhanced security" },
      { "letter": "C", "text": "Automates the archival and deletion of records based on retention policies" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Data Manager의 핵심 목적은 기업의 데이터 보존 정책(Retention Policies)에 기반하여 오래되거나 불필요해진 CI 레코드의 아카이브(격리 보관) 및 영구 삭제 프로세스를 안전하게 자동화하는 것입니다. 이를 통해 CMDB의 전체 데이터 볼륨을 최적의 상태로 유지하고 시스템 성능 저하를 방지합니다. 관계 규칙 강제(A)는 IRE 및 CI Class Manager의 영역이며, 레코드 암호화(B)는 플랫폼 전용 암호화 모듈의 책임이므로 오답입니다."
  },
  {
    "id": 21,
    "title": "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate issues shown in the CMDB Data Foundations Dashboard. Which remediation playbooks would be used? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "Fix Data" },
      { "letter": "B", "text": "Govern Data" },
      { "letter": "C", "text": "Report Data" },
      { "letter": "D", "text": "Analyze Data" }
    ],
    "answer": ["A", "B", "D"],
    "explanation": "정답: A, B, D. ServiceNow의 CMDB Data Foundations 대시보드에서 제공하는 모든 'Get-Well Playbook'은 데이터 정제를 유기적으로 완수하기 위해 항상 3가지 핵심 플레이(Plays)로 구성됩니다. 첫째, 누락 데이터를 식별하는 'Analyze Data(D)', 둘째, 빈 속성을 채워 넣는 'Fix Data(A)', 셋째, 정기적 인증이나 정책을 통해 재발을 막는 'Govern Data(B)'입니다. Report Data(C)는 플레이북의 표준 조치 단계에 해당하지 않는 가짜 옵션입니다."
  },
  {
    "id": 22,
    "title": "A CMDB Administrator needs to import external data into the CMDB. The administrator wants to reduce the risk of creating duplicates and prevent unauthorized records from being created if the Identification and Reconciliation API is bypassed. What is the recommended method?",
    "options": [
      { "letter": "A", "text": "IntegrationHub ETL" },
      { "letter": "B", "text": "Table API (REST API or SOAP API)" },
      { "letter": "C", "text": "Import Sets and Transform Maps" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB에 외부 데이터를 연동할 때 중복 생성을 방지하고 무결성을 유지하는 독보적인 베스트 프랙티스는 IntegrationHub ETL을 사용하는 것입니다. 이 도구는 내부적으로 Robust Transform Engine(RTE)을 채택하여, 유입되는 모든 데이터가 IRE(Identification and Reconciliation Engine) API를 반드시 통과하도록 강제합니다. 반면 Table API(B)나 기존 Transform Maps(C)는 IRE 보안 파이프라인을 우회할 위험성이 매우 높아 CMDB 데이터 적재용으로는 권장되지 않습니다."
  },
  {
    "id": 23,
    "title": "A Change Manager wants to gain value from CSDM (Common Service Data Model). How will the Change Management process benefit from CSDM? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "Understand the impact of the change on services" },
      { "letter": "B", "text": "Identify blackout windows for the change" },
      { "letter": "C", "text": "Route the change dynamically" },
      { "letter": "D", "text": "Determine the root cause of the change issue" }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. CSDM(Common Service Data Model) 아키텍처가 CMDB에 잘 구현되면 변경 관리(Change Management) 프로세스는 두 가지 강력한 혜택을 얻습니다. 첫째, 특정 인프라(CI)의 변경 작업이 상위 비즈니스 서비스에 미치는 가시적 위험과 연쇄 영향도를 실시간으로 파악(A)할 수 있습니다. 둘째, CSDM 구조에 정의된 소유권 관계를 기반으로 변경 티켓을 적절한 담당 그룹에 동적으로 라우팅(C)하여 거버넌스를 자동화합니다. 블랙아웃 윈도우(B)는 일정 관리 엔진의 영역이며, 근본 원인 분석(D)은 문제 관리(Problem Management)의 전형적인 책임이므로 오답입니다."
  },
  {
    "id": 24,
    "title": "A Configuration Management Governance team is transitioning from using legacy CMDB status fields to the CSDM Life Cycle Status field. Which table can be modified?",
    "options": [
      { "letter": "A", "text": "Life Cycle Mapping (life_cycle_mapping)" },
      { "letter": "B", "text": "Life Cycle Stage Status (life_cycle_stage_status)" },
      { "letter": "C", "text": "Life Cycle Stages (life_cycle_stage)" },
      { "letter": "D", "text": "Life Cycle Controls (life_cycle_control)" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. 기존의 레거시 상태 필드(Install Status, Operational Status 등)에서 새로운 CSDM 라이프사이클 표준 필드로 전환할 때, 기존 데이터 값들을 표준 2단계 구조에 부합하도록 매핑 규칙을 설정해야 합니다. 이 변환 가이드라인 규칙을 정의하고 수정하는 테이블은 'Life Cycle Mapping (life_cycle_mapping)' 테이블입니다. 'Life Cycle Stage Status(B)' 테이블은 플랫폼 표준 마스터 데이터 자체를 담고 있는 사전 테이블이므로 전환 프로세스 중에 직접 수정하지 않습니다."
  },
  {
    "id": 25,
    "title": "The Configuration Manager is preparing a justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "It helps detect and eliminate duplicate records in the CMDB." },
      { "letter": "B", "text": "It enables monitoring and tracking of CMDB health over time." },
      { "letter": "C", "text": "It provides actionable insights to improve data quality and completeness." },
      { "letter": "D", "text": "It automates the approval process for Change Management." }
    ],
    "answer": ["B", "C"],
    "explanation": "정답: B, C. ServiceNow의 CMDB Data Foundations Dashboard는 플랫폼 모범 사례 준수 여부를 모니터링하고 추세를 추적(B)하는 데 목적이 있습니다. 점수 지표와 함께 연동된 플레이북을 통해 데이터 완전성과 품질을 향상시킬 수 있는 구체적이고 실행 가능한 인사이트(C)를 제공합니다. 반면, 중복 레코드를 탐지하고 제거(A)하는 것은 CMDB Health Dashboard(Correctness)의 역할이며, 변경 승인 자동화(D)는 ITSM 프로세스 워크플로우 엔진의 책임이므로 오답입니다."
  },
  {
    "id": 26,
    "title": "Where can a CMDB 360 / Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      { "letter": "A", "text": "Saved queries window on the CMDB 360 tab" },
      { "letter": "B", "text": "CMDB Query Builder" },
      { "letter": "C", "text": "Coverage window on the CMDB 360 tab" },
      { "letter": "D", "text": "Saved queries window on the Insights tab" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow 공식 문서에 따르면, 다중 소스 데이터 분석을 위한 CMDB 360 쿼리를 생성하고 재사용하기 위해 저장(Save)하는 공간은 CMDB Workspace 내부의 'CMDB 360 탭' 아래에 위치한 'Saved queries' 카드(윈도우)입니다. CMDB Query Builder(B)는 구성요소 간의 관계 지도를 쿼리하는 별도의 프레임워크이며, Coverage window(C)는 소스별 데이터 점유율 통계 화면이므로 오답입니다."
  },
  {
    "id": 27,
    "title": "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity? (Choose two)",
    "options": [
      { "letter": "A", "text": "Add a new class under an appropriate parent class" },
      { "letter": "B", "text": "Modify an existing class" },
      { "letter": "C", "text": "Install or update the CMDB CI Class Models store application, and verify the class does not already exist" },
      { "letter": "D", "text": "Delete an unused class, and replace it with the new one" }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB에서 새로운 자산 클래스(예: IoT 센서)를 확장할 때의 베스트 프랙티스는 2단계로 진행됩니다. 먼저 ServiceNow Store에서 'CMDB CI Class Models' 앱을 최신 버전으로 설치/업데이트하여 본사가 기본 제공하는 표준 모델 중 해당 클래스가 이미 존재하지 않는지 먼저 검증(C)해야 합니다. 만약 존재하지 않아 새로 생성해야 한다면, 공통 속성을 상속받아 데이터 무결성을 지킬 수 있도록 적절한 부모 클래스 하위에 자식 클래스로 추가(A)해야 합니다. 기존 스키마를 수정(B)하거나 임의로 삭제 후 대체(D)하는 행위는 플랫폼 무결성을 파괴하므로 금지됩니다."
  },
  {
    "id": 28,
    "title": "A Configuration Management Governance team has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    "options": [
      { "letter": "A", "text": "Assign an order to each data source in the identification rules" },
      { "letter": "B", "text": "Configure data refresh rules with a specific time period" },
      { "letter": "C", "text": "Assign a priority to each data source in the reconciliation rules" },
      { "letter": "D", "text": "Manually run the data source updates in the correct order" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB에서 여러 외부 데이터 소스가 동일한 클래스 및 속성을 동시에 업데이트하려고 할 때, 특정 소스에 독점적인 데이터 신뢰 권한(Authoritative Source of Truth)을 부여하는 표준 방법은 '조정 규칙(Reconciliation Rules)'을 설정하고 데이터 소스별로 우선순위(Priority) 숫자를 할당하는 것입니다. 높은 우선순위(낮은 숫자)를 가진 소스의 데이터만 최종 반영되며 하위 소스의 데이터 오염을 차단합니다. 식별 규칙(A)은 중복 방지용 고유 키 매칭 규칙이며, 데이터 새로고침 규칙(B)은 데이터 최신성 감시 도구이므로 오답입니다."
  },
  {
    "id": 29,
    "title": "When ingesting data into the CMDB using Import Sets and Transform Maps, which type of script is added to ensure the data is processed through the Identification and Reconciliation Engine (IRE)?",
    "options": [
      { "letter": "A", "text": "onStart" },
      { "letter": "B", "text": "onAfter" },
      { "letter": "C", "text": "onComplete" },
      { "letter": "D", "text": "onBefore" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. 레거시 Import Set 및 Transform Map 환경에서 CMDB 데이터의 중복을 방지하려면 데이터가 대상 테이블에 삽입되기 직전에 실행되는 'onBefore' 변환 이벤트 스크립트를 사용해야 합니다. 개발자는 이 단계에서 'CMDBTransformUtil' 스크립트 오브젝트를 호출하여 데이터를 IRE(식별 및 조정 엔진)로 우회 처리하고, 'ignore = true;' 설정을 통해 기본 변환 엔진의 중복 삽입 시도를 차단하는 방식을 취합니다."
  },
  {
    "id": 30,
    "title": "What ensures that data volume in the CMDB is manageable?",
    "options": [
      { "letter": "A", "text": "Scheduled Jobs" },
      { "letter": "B", "text": "Business Rules" },
      { "letter": "C", "text": "Archive Policies" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB에서 방대한 데이터 볼륨을 효율적으로 제어하고 시스템 성능을 최적화하는 표준 메커니즘은 '아카이브 정책(Archive Policies)'입니다. 아카이브 정책은 보존 기간을 초과하거나 비활성화된 레코드를 메인 테이블에서 독립된 아카이브용 테이블로 안전하게 격리하여, 참조 무결성을 깨뜨리지 않고 데이터 볼륨을 경량화합니다. 커스텀 스크립트 기반의 Scheduled Jobs(A)나 Business Rules(B)는 데이터 유실 및 고아 관계 양산 위험이 있어 권장되지 않습니다."
  },
  {
    "id": 31,
    "title": "A configuration manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "CMDB Workspace" },
      { "letter": "C", "text": "CI Class Manager" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow의 차세대 시각화 도구인 Unified Map(통합 맵)은 Next Experience 환경의 핵심 허브인 'CMDB Workspace' 내부에서 제공되는 컴포넌트 기능입니다. 관리자 및 운영자는 CMDB Workspace에서 CI 레코드를 조회할 때 해당 맵을 통해 직관적인 인프라 의존성 구조와 연동된 ITSM/ITOM 이벤트를 실시간 가시화할 수 있습니다. 수명 주기를 제어하는 Data Manager(A)나 스키마를 설계하는 CI Class Manager(C)에서는 이 맵에 접근할 수 없습니다."
  },
  {
    "id": 32,
    "title": "A service owner is using the Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "Managed by group" },
      { "letter": "B", "text": "Discovery source" },
      { "letter": "C", "text": "Business criticality" },
      { "letter": "D", "text": "CI type" }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. ServiceNow Unified Map의 필터 패널은 의존성 지도 상의 복잡한 노드와 관계선을 효율적으로 정제하기 위한 토폴로지 필터를 제공합니다. 대표적으로 특정 자산 클래스 레이어를 온/오프하는 'CI type(D)' 필터와, 데이터의 출처별로 관계망을 제어하는 'Discovery source(B)' 필터가 OOTB로 제공됩니다. Managed by group(A)이나 Business criticality(C)는 개별 레코드의 양식 속성이며 지도 전용 필터 패널의 기본 옵션이 아니므로 오답입니다."
  },
  {
    "id": 33,
    "title": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      { "letter": "A", "text": "Compliance" },
      { "letter": "B", "text": "Audit" },
      { "letter": "C", "text": "Certification" },
      { "letter": "D", "text": "Attestation" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Data Manager의 'Certification(인증)' 정책은 담당자에게 특정 CI의 속성 데이터 값들을 검증하도록 태스크를 부여합니다. 이 태스크 폼 안에서 담당자는 잘못된 속성 필드를 직접 수정(Update)하여 데이터 무결성을 실시간으로 정비할 수 있는 편집 권한을 가집니다. 반면 'Attestation(D)' 정책은 자산의 물리적 실존 여부(Existence)만 증명/확인하는 워크플로우를 생성하므로 세부 필드 수정 목적에는 부합하지 않습니다."
  },
  {
    "id": 34,
    "title": "CMDB class owners are receiving tasks under the My Work tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "De-duplication templates" },
      { "letter": "C", "text": "CMDB Health Dashboard" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB Workspace의 'My Work' 탭은 개별 관리자 및 클래스 소유자에게 할당된 실시간 자산 거버넌스 작업을 모아주는 인터페이스입니다. 이 작업 큐에 올라오는 증명(Attestation), 인증(Certification) 등 수명 주기 기반의 검증 태스크들을 뒤에서 자동으로 설계하고 생성해 내는 핵심 관리 엔진은 'CMDB Data Manager'입니다. De-duplication templates(B)는 존재하지 않는 가짜 옵션이며, Health Dashboard(C)는 자산 건강 상태 지표를 다루는 화면이므로 오답입니다."
  },
  {
    "id": 35,
    "title": "A CMDB Administrator reviewing the CMDB Data Foundations Dashboard notices the unique locations results percentage is low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      { "letter": "A", "text": "Retain the location that matches the organization standard naming convention and delete the duplicate without further validation" },
      { "letter": "B", "text": "Use the Duplicate CI Remediator to merge the duplicate location records" },
      { "letter": "C", "text": "Keep both locations as either can be used as valid alternate locations" },
      { "letter": "D", "text": "Review both locations, update CI with the correct location and delete the duplicate location" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow 공식 'Percent of Unique Locations' 플레이북(KB0832200)에 따르면, 중복 명칭을 가진 위치(Location) 레코드를 정제할 때는 데이터 무결성을 위해 순차적 프로세스를 밟아야 합니다. 먼저 중복 대상을 리뷰한 뒤, 가짜 위치 레코드를 가리키고 있던 CI 등의 하부 참조 연결고리를 진짜 표준 위치 레코드로 먼저 정정(Update)해주고, 마지막으로 연결 관계가 사라진 중복 위치 레코드를 안전하게 삭제(Delete)해야 합니다. Duplicate CI Remediator(B)는 오직 cmdb_ci 테이블 하위 자산 전용 툴이며, cmn_location 테이블 데이터에는 적용할 수 없으므로 오답입니다."
  },
  {
    "id": 36,
    "title": "A CMDB administrator is reviewing the health of the CMDB and notices a large percentage of hardware CIs are missing serial numbers. The administrator contacts ServiceNow support and would like to know which structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue. Which option is correct?",
    "options": [
      { "letter": "A", "text": "CMDB Data Foundations Dashboard playbooks" },
      { "letter": "B", "text": "CSDM Data Foundations Dashboard playbooks" },
      { "letter": "C", "text": "CSDM Now Create playbooks" },
      { "letter": "D", "text": "CMDB Health Dashboard playbooks" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow는 기초 데이터(시리얼 번호 누락 등)의 품질 이슈를 체계적으로 분석(Analyze), 보정(Fix), 통제(Govern)할 수 있도록 'CMDB Data Foundations Dashboard'를 통해 공식 Get-Well Playbook(처방전 가이드)을 제공합니다. 하드웨어 시리얼 번호는 물리적 자산 속성이므로 CSDM(B, C) 영역이 아니며, CMDB Health Dashboard(D)는 자동화된 치유 태스크를 생성할 뿐 구조화된 지침서(Playbook) 자체를 제공하는 플랫폼이 아닙니다."
  },
  {
    "id": 37,
    "title": "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to ensure lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store that will be used to satisfy these audits?",
    "options": [
      { "letter": "A", "text": "Business Applications and Information Objects" },
      { "letter": "B", "text": "Customer Service Offerings and Databases" },
      { "letter": "C", "text": "Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. CSDM 프레임워크에서 애플리케이션의 규제 준수(Compliance) 및 데이터 보안 요구사항을 정의하고 추적하는 최적의 장소는 'Design(설계) 도메인'입니다. 개발 팀은 개념적 아키텍처를 정의하는 'Business Application' 레코드에 규제 감사 메타데이터를 저장하고, 해당 앱이 처리하는 논리적 데이터 자산 종류(PII, PCI 등)를 'Information Object'로 매핑하여 상호 연결해 두어야 합니다. 이를 통해 인프라의 변동과 관계없이 전사 데이터 거버넌스 감사를 충족할 수 있습니다. 운영 단위인 기술 서비스(C)나 소비 단위인 고객 서비스(B) 도메인은 목적에 부합하지 않습니다."
  },
  {
    "id": 38,
    "title": "The following reconciliation rules are configured for the Windows Server class: ServiceNow (Priority: 100), Altiris (Priority: 200), and SCCM (Priority: 300). Which statements are true? (Choose two)",
    "options": [
      { "letter": "A", "text": "Data collected with a discovery source of SCCM can update any record in the Windows server table because it has the highest priority number" },
      { "letter": "B", "text": "Data collected with a discovery source of ServiceNow can insert new records into the Windows server table but cannot update records created by Altiris and SCCM" },
      { "letter": "C", "text": "Data collected with a discovery source of SCCM can be inserted as new records in the Windows server table" },
      { "letter": "D", "text": "Data collected with a discovery source of Altiris can update records inserted by SCCM in the Windows server table" }
    ],
    "answer": ["C", "D"],
    "explanation": "정답: C, D. ServiceNow의 식별 및 조정 엔진(IRE)에서 조정 우선순위는 숫자가 작을수록 권한이 높습니다(100 > 200 > 300). 따라서 Altiris(200)는 하위 등급인 SCCM(300)이 작성한 데이터를 덮어쓸 수 있으므로 D번은 참입니다. 또한, 조정 규칙은 기존 필드의 업데이트 권한을 통제할 뿐 신규 CI 레코드의 삽입(Insert) 자체를 거부하지 않으므로 SCCM이 새 데이터를 인서트할 수 있다는 C번 역시 참입니다. SCCM은 우선순위 '숫자'만 클 뿐 실제 권한은 가장 낮으므로 A는 거짓입니다."
  },
  {
    "id": 39,
    "title": "A CMDB administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundations Dashboard. Which benefits support the decision to continually monitor the results on this dashboard? (Choose two)",
    "options": [
      { "letter": "A", "text": "Provides metrics on active CIs updated in the last 90 days" },
      { "letter": "B", "text": "Provides metrics for CIs processed by the IRE" },
      { "letter": "C", "text": "Reports on all orphan CIs in the CMDB" },
      { "letter": "D", "text": "Provides a list of all CIs that failed health audits" }
    ],
    "answer": ["A", "B"],
    "explanation": "정답: A, B. ServiceNow의 CMDB Data Foundations Dashboard는 CMDB 아키텍처와 데이터 수집 체계가 베스트 프랙티스 규격에 맞게 운영되는지 모니터링합니다. 대표적으로 지난 90일 동안 지속적으로 갱신 활동이 일어난 활성 자산의 비율(A)과, 데이터 적재 시 중복 방지 엔진인 IRE를 표준 가이드대로 잘 통과했는지 검증하는 지표(B)를 제공합니다. 반면, 고아 CI(C) 및 헬스 감사 실패 자산 리스트(D)는 'CMDB Health Dashboard'의 고유 영역이므로 오답입니다."
  },
  {
    "id": 40,
    "title": "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule = lowest value for the field Disk space GB. The Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule = most reported for the same field. Given the following data sources populating a Windows Server CI (Tivoli: 75, ServiceNow: 75, LANDesk: 50, Altiris: 80), which value will be written to the disk space in GB field for this Windows Server CI?",
    "options": [
      { "letter": "A", "text": "75" },
      { "letter": "B", "text": "50" },
      { "letter": "C", "text": "80" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB 조정 규칙 아키텍처에서 타겟 CI가 속한 가장 구체적인 하위 클래스(Child Class)의 규칙은 상위 부모 클래스(Parent Class)의 규칙보다 항상 우선하여 적용(Override)됩니다. 따라서 상위 Server 클래스의 '최솟값(Lowest Value = 50)' 규칙 대신, 하위 Windows Server 클래스의 '최빈값(Most Reported = 75)' 규칙이 최종 채택되어 데이터베이스에 75가 기록됩니다."
  },
  {
    "id": 41,
    "title": "A Configuration Management Process Owner needs to configure Data Manager so that policy tasks are correctly assigned and aligned with the group attribute assigned to a CI class in CI Class Manager. Which field is the recommended field to be used for a policy task assignment?",
    "options": [
      { "letter": "A", "text": "Change group" },
      { "letter": "B", "text": "Approval group" },
      { "letter": "C", "text": "Managed by group" },
      { "letter": "D", "text": "Support group" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Data Manager 정책이 실행될 때 생성되는 수명주기 태스크들을 CI Class Manager에서 지정한 소유권 거버넌스와 일치시키려면 'Managed by group' 필드를 활용해야 합니다. 이 필드는 해당 CI 클래스의 데이터 관리 및 수명주기 책임을 지는 그룹을 정의하기 때문에, Data Manager의 아카이브/삭제/인증 태스크를 올바른 담당자에게 배정하는 OOTB 권장 표준 필드입니다. Support group(D)은 장애 조치용, Change group(A)은 인프라 변경 작업용 필드이므로 오답입니다."
  },
  {
    "id": 42,
    "title": "A company wants to track regulatory compliance in the CSDM (Common Service Data Model) framework. ServiceNow provides an artifact type called an Information Object. What is the purpose of an Information Object?",
    "options": [
      { "letter": "A", "text": "It describes data in general on a group of Configuration Items" },
      { "letter": "B", "text": "It describes the logical data used by Business Applications" },
      { "letter": "C", "text": "It describes data exchanged between an API interface and an Application" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. CSDM(Common Service Data Model) 프레임워크에서 'Information Object'는 Business Application이 아키텍처 상에서 활용, 저장, 처리하는 '논리적 데이터(Logical Data)'의 유형을 정의하는 핵심 아티팩트입니다. 이를 통해 PII(개인정보)나 PCI(신용카드 정보) 같은 민감 데이터 자산이 어떤 비즈니스 애플리케이션에 종속되어 흐르는지 가시화하여 법적 규제 준수(Compliance) 감사의 명확한 근거를 제시합니다. API 연동 데이터를 기술하는 것은 Application Interface(C)의 역할이므로 오답입니다."
  },
  {
    "id": 43,
    "title": "A CMDB Administrator has been asked to establish configuration management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      { "letter": "A", "text": "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs" },
      { "letter": "B", "text": "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management" },
      { "letter": "C", "text": "Relying on automated discovery tools to maintain and update CMDB records" },
      { "letter": "D", "text": "Establishing clear governance and continuously monitoring CMDB health" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB 성공의 가장 중요한 핵심 성공 요인(CSF)은 명확한 관리 거버넌스 수립과 CMDB Health(완전성, 정확성, 준수성)의 지속적인 모니터링입니다. 데이터의 무분별한 대량 적재(A)나 통제 없는 자유로운 수정(B)은 데이터 오염을 가속화하는 안티 패턴입니다. 자동화 디스커버리 도구(C)는 매우 훌륭한 자산 수집 수단이지만, 이 역시 거버넌스 체계 하에 통제되어야 가치를 발휘하므로 D번이 가장 궁극적인 필수 요건입니다."
  },
  {
    "id": 44,
    "title": "A CMDB Data Owner wants better insights into the different data sources that populate the CMDB. The Platform Owner installs the Service Graph Connector Central plugin. After installing the plugin, which workspace will have the new Service Graph Connector Central tab available?",
    "options": [
      { "letter": "A", "text": "CMDB Workspace" },
      { "letter": "B", "text": "Service Graph Connector Workspace" },
      { "letter": "C", "text": "Discovery Admin Workspace" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow의 Next Experience 아키텍처는 데이터 도메인별 운영 효율성을 극대화하기 위해 허브 워크스페이스 체계를 사용합니다. Service Graph Connector의 목적은 외부 데이터를 CMDB에 적재하는 것이므로, 이를 중앙 모니터링하는 'Service Graph Connector Central' 대시보드 탭 역시 'CMDB Workspace' 내부에 통합되어 제공됩니다. 'Service Graph Connector Workspace(B)'는 존재하지 않는 가짜 옵션이며, 'Discovery Admin Workspace(C)'는 에이전트리스 방식의 자체 IP 스캔 디스커버리 전용 관리 공간이므로 오답입니다."
  },
  {
    "id": 45,
    "title": "A CMDB Manager wants to start adding CSDM Design & Planning (Design) domain components into the CMDB. Who is involved in this exercise? (Choose two)",
    "options": [
      { "letter": "A", "text": "Business Relationship Manager" },
      { "letter": "B", "text": "Enterprise Architect" },
      { "letter": "C", "text": "Application Service Owner" },
      { "letter": "D", "text": "Application Owner" }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. CSDM 4.0 가이드라인에 따르면, 'Design(설계)' 도메인은 Business Capability 및 Business Application과 같은 개념적 아키텍처 자산을 정의하는 영역입니다. 이 단계의 마스터 데이터를 수립하고 관리하는 핵심 페르소나는 전사 아키텍처를 설계하는 'Enterprise Architect(B)'와 해당 애플리케이션의 비즈니스 수명 주기를 관리하는 'Application Owner(D)'입니다. Business Relationship Manager(A)는 Sell/Consume 도메인 소속이며, Application Service Owner(C)는 Manage Technical Services 도메인 소속이므로 오답입니다."
  },
  {
    "id": 46,
    "title": "A Configuration Management Process Owner responsible for a specific region wants to use the CMDB Health Dashboard to improve CMDB data quality for that region. Currently, the dashboard only shows overall scores and scores grouped by CI Class. How can the Configuration Manager get a CMDB health score for regionally relevant CIs?",
    "options": [
      { "letter": "A", "text": "Customize the CMDB Health Dashboard scheduled jobs to group results by region" },
      { "letter": "B", "text": "On CMDB health settings, activate the option Group scores by region" },
      { "letter": "C", "text": "Create CMDB groups with type Health, by region" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Health Dashboard에서 클래스(Class) 기준이 아닌 특정 지역이나 부서 단위의 자산들만 솎아내어 건강도 점수를 집계하려면 'CMDB Group' 기능을 활용해야 합니다. 사용자가 원하는 지역 조건의 쿼리를 담은 CMDB 그룹을 생성하고, Group Type을 'Health'로 지정하면 대시보드 상단 필터를 통해 해당 지역 자산들만의 3C 품질 점수를 독자적으로 모니터링할 수 있습니다. 백엔드 스케줄러 코드를 커스텀 수정(A)하거나 존재하지 않는 기본 설정 토글(B)에 의존하는 방식은 오답입니다."
  },
  {
    "id": 47,
    "title": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": [
      { "letter": "A", "text": "CMDB Audit Business Rule" },
      { "letter": "B", "text": "CMDB Workspace" },
      { "letter": "C", "text": "Data Quality Scheduled Job" },
      { "letter": "D", "text": "Data Quality Business Rule" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow Next Experience 환경에서 CMDB 관리자가 데이터 품질(Health 지표 모니터링, 중복 CI 치유, Data Manager 정책 관리 등)을 종합적으로 제어하기 위해 사용하는 단일 허브 인터페이스는 'CMDB Workspace'입니다. 플랫폼은 파편화된 품질 관리 기능을 이 워크스페이스 내에 통합하여 제공합니다. 나머지 보기인 CMDB Audit Business Rule(A), Data Quality Scheduled Job(C), Data Quality Business Rule(D)은 ServiceNow 표준 기능 명칭 스키마에 존재하지 않는 가짜 선지이거나 백엔드 하부 로직에 불과하므로 오답입니다."
  },
  {
    "id": 48,
    "title": "A CMDB CI Class Owner responsible for Windows Servers needs to frequently manage the Windows Server CI Class. Which CI Class Manager feature will help the CI Class Owner streamline access to this class?",
    "options": [
      { "letter": "A", "text": "CI Favorites" },
      { "letter": "B", "text": "Pinned Classes" },
      { "letter": "C", "text": "Search CI Classes" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CI Class Manager 스튜디오 내에서 특정 클래스(Windows Server 등)를 자주 관리해야 하는 전담 소유자는 'Pinned Classes' 기능을 사용하여 해당 클래스를 내비게이션 상단에 압정(Pin)으로 고정할 수 있습니다. 이를 통해 복잡한 하부 클래스 트리를 매번 수동으로 확장하거나 검색창에 타이핑하는 번거로움 없이 다이렉트로 접근 경로를 간소화(Streamline)할 수 있습니다. 일반 메뉴나 레코드를 즐겨찾기하는 CI Favorites(A)는 스튜디오 전용 옵션 명칭이 아니므로 오답입니다."
  },
  {
    "id": 49,
    "title": "The CMDB Administrator group wants to filter which CI classes appear on the CMDB Health Dashboard. This ensures that only relevant and manageable CI data is included, excluding classes that are not ready for management. Which feature can the group use to achieve this goal?",
    "options": [
      { "letter": "A", "text": "Reconciliation Rules" },
      { "letter": "B", "text": "Identification Rules" },
      { "letter": "C", "text": "Health Inclusion Rules" },
      { "letter": "D", "text": "Data Refresh Rules" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB에서 건강도(Health) 메트릭 계산 대상 및 대시보드 표기 범위를 클래스/조건 단위로 선별(Filter)하고자 할 때 사용하는 표준 거버넌스 기능은 'Health Inclusion Rules'입니다. 이를 통해 미관리 대상 클래스나 은퇴 자산 등을 건강진단 스코프에서 일시적/영구적으로 제외하여 대시보드 정합성을 높이고 시스템 백엔드 부하를 방지할 수 있습니다. 데이터 인하우스 진입 시점의 권한과 중복을 통제하는 Reconciliation(A), Identification(B), Data Refresh(D) 규칙은 대시보드 필터링과 무관하므로 오답입니다."
  },
  {
    "id": 50,
    "title": "A configuration management team wants to prevent duplicate server records in the CMDB to avoid confusion. Server records are processed by the Identification and Reconciliation Engine (IRE), which uses identification rules to determine whether a CI already exists. Where are these identification rules configured?",
    "options": [
      { "letter": "A", "text": "CMDB Workspace" },
      { "letter": "B", "text": "CMDB CI Class Manager" },
      { "letter": "C", "text": "CMDB Health Dashboard" },
      { "letter": "D", "text": "CMDB Data Manager" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB에서 데이터 중복을 방지하는 IRE(식별 및 조정 엔진)의 '식별 규칙(Identification Rules)'은 클래스 계층 구조별로 귀속되는 핵심 데이터 모델 설정입니다. 따라서 이 규칙을 생성하고 편집하는 표준 장소는 백엔드 설계 스튜디오인 'CMDB CI Class Manager'입니다. 일상적인 수명 주기 및 품질 작업을 수행하는 CMDB Workspace(A), 사후 건강도를 리포팅하는 Health Dashboard(C), 자산의 폐기 정책을 다루는 Data Manager(D)는 규칙 설계 창구가 아니므로 오답입니다."
  },
  {
    "id": 51,
    "title": "A CMDB Configuration Manager plans to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these policies?",
    "options": [
      { "letter": "A", "text": "Missing - Stolen" },
      { "letter": "B", "text": "End of Life - Retired" },
      { "letter": "C", "text": "In any lifecycle state" },
      { "letter": "D", "text": "Inventory - Available" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB Data Manager의 삭제(Delete) 및 아카이브(Archive) 정책은 데이터 유실 사고를 방지하기 위해 운영이 공식 종료된 'End of Life - Retired' 상태의 자산들을 핵심 타겟으로 삼는 것이 표준 베스트 프랙티스입니다. 일반적으로 미사용 자산을 Retire 정책으로 먼저 은퇴 상태로 전환시킨 후, 안전성이 확보된 이 'End of Life - Retired' 풀을 대상으로 삭제와 아카이브를 수행하여 무결성을 유지합니다. 가용 자산인 Inventory(D)나 무차별적인 상태 지정(C)은 거버넌스 규칙 위반이므로 오답입니다."
  },
  {
    "id": 52,
    "title": "A configuration manager is reviewing the lifecycle of Configuration Items (CIs) to ensure data accuracy, data consistency and data relevance. The manager reviews legacy status values and their equivalent CSDM lifecycle stage and lifecycle stage status values. Where can these mappings be reviewed?",
    "options": [
      { "letter": "A", "text": "Life cycle choice list" },
      { "letter": "B", "text": "Life cycle mappings" },
      { "letter": "C", "text": "Life cycle properties" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow에서 과거 레거시 상태 필드(install_status, operational_status 등)와 차세대 CSDM 수명 주기 표준 필드(lifecycle_stage, lifecycle_stage_status) 간의 상호 대응 관계를 확인하고 관리하는 표준 메뉴는 'Life cycle mappings'입니다. 이를 통해 기존 데이터와 신규 표준 모델 간의 데이터 일관성과 정합성을 유지하며 안전한 전환을 꾀할 수 있습니다. Choice list(A)는 단순 드롭다운 항목 보관소이며, Properties(C)는 기능 활성화 토글 설정을 다루는 곳이므로 오답입니다."
  },
  {
    "id": 53,
    "title": "A CMDB administrator notices that many Configuration Items (CIs) do not have a Support Group populated. The administrator wants the Support Group to be automatically populated and maintained on the CI record. Which option should be used to achieve this?",
    "options": [
      { "letter": "A", "text": "Technical Service Offering" },
      { "letter": "B", "text": "Dynamic CI Group" },
      { "letter": "C", "text": "Technical Service" },
      { "letter": "D", "text": "CI Class Manager" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM(Common Service Data Model) 프레임워크에서 하부 인프라 자산(CI)들의 Support Group 필드를 자동으로 채우고 상시 유지하는 표준 권장 방식은 'Technical Service Offering'을 연동하는 것입니다. 기술 서비스 오퍼링은 실제 운영을 전담하는 지원 팀(Support Group)과 SLA 속성을 보유하는 거버넌스 주체이며, 플랫폼의 메타데이터 동기화 규칙을 통해 자신과 엮인 하부 CI 레코드로 관련 운영 그룹 정보를 자동 상속 및 동기화시킵니다. 상위 분류 개념인 Technical Service(C)나 클래스 전역 설정을 다루는 CI Class Manager(D)는 개별 운영 담당 팀 정보를 동적으로 배포할 수 없으므로 오답입니다."
  },
  {
    "id": 54,
    "title": "A manager needs guidance on how to correctly establish relationships between infrastructure CIs, Technical Service Offerings, and Application Services within the CMDB. Which CSDM domain provides the guidance for defining these relationships?",
    "options": [
      { "letter": "A", "text": "Sell or Consume (Service Consumption)" },
      { "letter": "B", "text": "Foundation" },
      { "letter": "C", "text": "Design (Design and Planning)" },
      { "letter": "D", "text": "Build (Build and Integration)" },
      { "letter": "E", "text": "Manage Technical Services (Service Delivery)" }
    ],
    "answer": ["E"],
    "explanation": "정답: E. ServiceNow CSDM 4.0 가이드라인에 따르면, 실제 운영 환경에 배포된 하부 인프라 자산(Infrastructure CIs), 가동 중인 소프트웨어 인스턴스(Application Services), 그리고 이를 유지보수하는 기술 지원 단위(Technical Service Offerings) 간의 유기적인 의존 관계 체계를 정의하고 제어하는 영역은 'Manage Technical Services(과거 명칭: Service Delivery)' 도메인입니다. 이 도메인은 실시간 장애 영향도 분석 및 헬프데스크 라우팅의 기준이 되는 핵심 운영계를 담당합니다. 아키텍처 설계를 다루는 Design(C)이나 서비스 소비를 다루는 Sell or Consume(A) 도메인은 부합하지 않으므로 오답입니다."
  },
  {
    "id": 55,
    "title": "The Change Management team wants to implement a change across multiple Configuration Items (CIs) simultaneously. They plan to use a Dynamic CI Group to target those CIs. Which field on the Change Request form must be populated with the Dynamic CI Group?",
    "options": [
      { "letter": "A", "text": "Configuration Item" },
      { "letter": "B", "text": "Business Service" },
      { "letter": "C", "text": "Service Offering" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow 변경 관리 프로세스에서 Dynamic CI Group(동적 CI 그룹)을 활용해 대규모 인프라 자산에 변경 작업을 일괄 적용하고자 할 때, 해당 그룹 레코드는 Change Request 폼의 'Configuration Item' 필드에 입력되어야 합니다. 이를 통해 플랫폼 엔진이 동적 그룹 내의 CMDB 쿼리를 백엔드에서 실행하여 영향을 받는 실제 개별 자산들을 'Affected CIs' 관련 리스트에 자동으로 확장 및 매핑해 줍니다. 상위 영향도 측정용인 Business Service(B)나 Service Offering(C) 필드는 일괄 자산 매핑을 수행하지 않으므로 오답입니다."
  },
  {
    "id": 56,
    "title": "A configuration management team needs to enable a CMDB Data Manager policy that will remove records from a CI class and still allow the ability to restore the records within a specified period. Which policy type should the configuration manager create?",
    "options": [
      { "letter": "A", "text": "Delete" },
      { "letter": "B", "text": "Archive" },
      { "letter": "C", "text": "Certification" },
      { "letter": "D", "text": "Retire" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB Data Manager에서 라이브 클래스 테이블로부터 데이터를 제거하여 운영 가시성에서 격리시키면서도, 지정된 보존 기간 내에 안전하게 원래대로 복구(Restore)할 수 있는 가드레일을 제공하는 정책은 'Archive' 정책입니다. 아카이브 정책은 데이터를 'ar_'로 시작하는 쉐도우 테이블로 이주시켜 보존합니다. 반면 Delete(A)는 복구가 불가능한 영구 파괴를 수행하며, Retire(D)는 동일 테이블 내에서 상태 필드만 바꿀 뿐 레코드가 클래스에서 제거되지 않으므로 오답입니다."
  },
  {
    "id": 57,
    "title": "A CMDB administrator is using the Duplicate CI Remediator to resolve duplicate Configuration Items. In the first step of the wizard, a Main CI must be selected. Which attributes can be used to identify the Main CI? (Choose two)",
    "options": [
      { "letter": "A", "text": "Oldest Created" },
      { "letter": "B", "text": "Least Related Items" },
      { "letter": "C", "text": "Most Related Items" },
      { "letter": "D", "text": "Newest Created" }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB 중복 치유 마법사(Duplicate CI Remediator)에서 마스터가 될 주요 자산(Main CI)을 선정할 때는 데이터 손실과 참조 단절을 방지하는 지표를 기준으로 삼아야 합니다. 가장 오래전에 생성된 자산(A)을 선택하면 과거 누적된 ITSM 티켓(인시던트/변경 등)의 참조 무결성을 유지할 수 있으며, 관계선이 가장 많이 연결된 자산(C)을 선택하면 서비스 매핑 토폴로지의 유실 리스크를 최소화할 수 있으므로 두 보기가 참입니다. 최근 생성 자산(D)이나 관계가 적은 자산(B)을 메인으로 삼는 것은 데이터 거버넌스 안티 패턴입니다."
  },
  {
    "id": 58,
    "title": "An organization is using CMDB Query Builder to find Application Services that have a database with active incidents, along with all infrastructure related to those application services. Which steps are required to build this query? (Choose two)",
    "options": [
      { "letter": "A", "text": "Use a CMDB Query to include application services and their related infrastructure" },
      { "letter": "B", "text": "Use a Service Mapping query to find all incidents related to the database" },
      { "letter": "C", "text": "Add a non-CMDB table to the query" },
      { "letter": "D", "text": "Use a Service Mapping query to include non-CMDB tables like the incident table" }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB Query Builder에서 비즈니스 애플리케이션 서비스와 하부 인프라(데이터베이스 등) 간의 관계를 설계할 때는 기본적으로 'CMDB Query' 유형을 생성해야 하므로 A는 참입니다. 또한, 자산이 아닌 일반 장애 티켓인 인시던트(Incident) 데이터는 CMDB 테이블에 속하지 않으므로, 이를 데이터베이스 노드와 결합하기 위해서는 캔버스에 'Non-CMDB 테이블' 블록을 명시적으로 추가하여 연동해야 하므로 C 역시 참입니다. Service Mapping 쿼리(B, D)는 이와 같은 비CMDB 데이터 통합 조인을 지원하지 않으므로 오답입니다."
  },
  {
    "id": 59,
    "title": "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360 / Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360. What can the Data Owner do in this case?",
    "options": [
      { "letter": "A", "text": "CMDB 360 / Multisource CMDB is a platform product that can be used immediately without additional licenses" },
      { "letter": "B", "text": "ITOM Discovery must be purchased to take advantage of standard IRE reconciliation rules" },
      { "letter": "C", "text": "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow의 식별 및 조정 엔진(IRE) 및 조정 규칙(Reconciliation Rules)은 플랫폼의 내장된 코어 기능(Core Platform Capability)입니다. 따라서 유료 고급 모니터링 레이어인 'CMDB 360(Multisource CMDB)'의 라이선스가 없거나 비활성화된 상태라 하더라도, 여러 외부 데이터 소스 간의 우선순위를 정의하고 속성 덮어쓰기를 통제하는 핵심 조정 로직은 완벽하게 작동합니다. CMDB 360은 유료 애드온이므로 A는 거짓이며, 라이선스 구매가 규칙 사용의 필수 조건이 아니므로 B 역시 거짓입니다."
  },
  {
    "id": 60,
    "title": "What is the difference between data certification and attestation policies when managing a CI?",
    "options": [
      { "letter": "A", "text": "Attestation can be scheduled while data certification cannot be scheduled." },
      { "letter": "B", "text": "Attestation requires correcting specific attributes of a CI while data certification tracks acknowledgement the CI still exists." },
      { "letter": "C", "text": "Attestation tracks acknowledgement the CI still exists while data certification requires validating specific attributes of a CI." },
      { "letter": "D", "text": "Attestation can be assigned to a group or an individual while data certification can only be assigned to an individual." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 거버넌스에서 Attestation 정책은 자산 소유자에게 해당 자산(CI)이 현실에 여전히 실재하고 유효하다는 '존재 여부(Acknowledgement)'를 인증받는 신속한 수명주기 절차입니다. 반면, Data Certification은 감사 목적에 맞게 해당 자산 레코드 내의 IP 주소, 담당 그룹 등 '특정 세부 속성(Specific Attributes)' 필드 값들이 100% 정확한지 전수 검증하고 수정하는 정밀 데이터 감사 도구입니다. 따라서 두 도구의 목적 차이를 올바르게 설명한 C번이 참입니다."
  },
  {
    "id": 61,
    "title": "A CMDB Administrator wants to improve data quality related to the CSDM framework alignment. Which action should the administrator take to meet this goal?",
    "options": [
      { "letter": "A", "text": "Use the CSDM Data Foundations Dashboard." },
      { "letter": "B", "text": "Use the default configured CMDB Health Dashboard." },
      { "letter": "C", "text": "Start the ServiceNow Instance Scan (Health Scan)." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow에서 단순 개별 자산 레코드의 값 오류를 넘어, CSDM(Common Service Data Model) 표준 아키텍처 및 성숙도 단계(Foundation, Design, Walk, Run 등)에 부합하는 데이터 모델 정합성을 진단하고 개선하려면 'CSDM Data Foundations Dashboard'를 사용해야 합니다. 3C 품질을 다루는 CMDB Health Dashboard(B)는 자산 레코드 자체의 무결성에 집중하며, Instance Scan(C)은 플랫폼 커스텀 스크립트와 시스템 성능을 스캔하는 도구이므로 CSDM 정렬 품질 개선이라는 목적에 부합하지 않습니다."
  },
  {
    "id": 62,
    "title": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's correctness scorecard for the Server class, which consists of a total of 60,000 servers in the CMDB. For the duplicate metric, it shows healthy CIs are evaluated as 59,000 of 60,000. For the orphan metric, it shows healthy CIs are evaluated as 45,000 of 50,000. Which configuration explains the difference in the scope of Server CIs (60,000 versus 50,000) evaluated between the two metrics?",
    "options": [
      { "letter": "A", "text": "The orphan metric has a CMDB group configured for the server class." },
      { "letter": "B", "text": "The duplicate metric has a health inclusion rule configured for the server class." },
      { "letter": "C", "text": "The orphan metric has a health inclusion rule configured for the server class." },
      { "letter": "D", "text": "The duplicate metric has a CMDB group configured for the server class." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Health Dashboard에서 동일한 클래스임에도 불구하고 세부 메트릭별로 평가 대상 자산의 총 기수(분모)가 다르게 나타나는 이유는, 특정 메트릭에 종속된 'Health Inclusion Rule(건강도 포함 규칙)'이 설정되어 있기 때문입니다. 고아(Orphan) 메트릭에만 '운영 중인 장비만 포함'과 같은 특정 조건의 포함 규칙이 구성되어 있으므로, 전체 60,000대 중 10,000대를 제외한 50,000대만을 스코프로 삼아 평가를 진행한 것입니다. 대시보드 화면 뷰를 제어하는 CMDB Group(A, D)은 백엔드 평가 모수 자체를 영구 분리하지 않으므로 오답입니다."
  },
  {
    "id": 63,
    "title": "Scenario:\n1. A healthcare provider experiences a critical incident.\n2. The incident affects the patient management system (Application Service).\n3. The IT Service Desk needs to immediately determine which users and business units are impacted.\n\nWhich CSDM-related data should be used to accurately determine the impacted users?",
    "options": [
      { "letter": "A", "text": "Service Offerings defined by Department or Location" },
      { "letter": "B", "text": "Affected CIs within the Task_CI (Affected CIs) related list" },
      { "letter": "C", "text": "The Environment attribute on the Application Service or Server CI" },
      { "letter": "D", "text": "Incident history logs of similar Configuration Items" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 4.0 프레임워크에서 기술적 장애를 비즈니스 및 사용자 영향도로 번역하는 가장 직접적인 매개체는 'Sell or Consume(판매/소비)' 도메인의 'Service Offering'입니다. 서비스 오퍼링은 특정 부서(Department)나 물리적 위치(Location) 단위로 구독자(Subscribers)를 매핑하여 관리하기 때문에, 시스템 장애 시 어떤 현업 사용자 집단이 타격을 입었는지 즉각 특정할 수 있습니다. 장애가 발생한 기술 자산 자체를 나타내는 Affected CIs(B)나 시스템 환경 정보(C)는 영향을 받는 인간 사용자 범위를 특정해 주지 못하므로 오답입니다."
  },
  {
    "id": 64,
    "title": "An Asset Manager wants to ensure that asset records and CI records remain synchronized automatically in real-time. How does the manager achieve this in the ServiceNow platform? (Choose two)",
    "options": [
      { "letter": "A", "text": "Ensure that the business rule to update asset fields on change on the CI table is active." },
      { "letter": "B", "text": "Ensure that scheduled jobs are run during off business hours to batch sync the records." },
      { "letter": "C", "text": "Ensure that the business rule to update CI fields on change on the asset table is active." },
      { "letter": "D", "text": "Ensure a strict one-to-one physical mapping relationship between Asset and CI model categories." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow 아키텍처에서 자산(Asset) 데이터와 CMDB 자산(CI) 데이터 간의 자동 일관성을 유지하는 표준 메커니즘은 '실시간 양방향 비즈니스 룰(Business Rules)'입니다. CI 테이블에서 값이 바뀔 때 자산을 동기화하는 비즈니스 룰(A)과, 자산 테이블에서 값이 바뀔 때 CI를 동기화하는 비즈니스 룰(C)이 모두 활성화되어 있어야만 데이터 유실 없는 상시 동기화가 보장됩니다. 정기적인 일괄 배치 처리를 수행하는 Scheduled Job(B)이나 단순 개념적 매핑(D)은 자동 필드 동기화를 구현하지 못하므로 오답입니다."
  },
  {
    "id": 65,
    "title": "An organization needs to maintain non-discoverable attributes such as warranty expiration dates for hardware CIs. These attributes cannot be updated by automated discovery tools. Which method ensures these attributes are accurately maintained for all CIs in the CMDB?",
    "options": [
      { "letter": "A", "text": "Use the CMDB Reconciliation Engine to update the attributes." },
      { "letter": "B", "text": "Use a scheduled data import to update the attributes from an external source." },
      { "letter": "C", "text": "Create a new CI class specifically for non-discoverable attributes." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. 보증 만료일이나 구매 정보와 같은 비탐지성 속성(Non-discoverable attributes)은 인프라 스캔 방식의 Discovery 도구로는 수집이 불가능합니다. 따라서 이를 보강하기 위한 표준 베스트 프랙티스는 외부 권위 소스(구매 ERP, 벤더 포탈 등)로부터 'Scheduled Data Import' 파이프라인을 구축하여 정기적으로 데이터를 병합 및 보강하는 것입니다. Reconciliation 엔진(A)은 유입 데이터의 우선순위를 통제할 뿐 자체 데이터를 생성하지 못하며, 속성 저장을 위해 별도 클래스(C)를 만드는 것은 심각한 구조적 안티 패턴이므로 오답입니다."
  },
  {
    "id": 66,
    "title": "A configuration management process owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practices, minimize the cost of future work (technical debt), and ensure compliance with future upgrades. Which solutions accomplish this? (Choose two)",
    "options": [
      { "letter": "A", "text": "Repurposing an unused base CI class and renaming attributes as required." },
      { "letter": "B", "text": "Extending an existing asset class table to accommodate the custom CI class attributes." },
      { "letter": "C", "text": "Extending an existing CI class table to accommodate the custom CI class attributes." },
      { "letter": "D", "text": "Installing or upgrading the CMDB CI Class Models store application to find a suitable existing CI class accommodating any new attributes." }
    ],
    "answer": ["C", "D"],
    "explanation": "정답: C, D. ServiceNow CMDB에서 신규 자산 모델을 추가할 때의 베스트 프랙티스는 '최신 순정 기능 확인 후 표준 확장'입니다. 먼저 ServiceNow Store의 'CMDB CI Class Models' 앱을 업데이트하여 적합한 OOTB 표준 클래스가 제공되는지 확인(D)해야 하며, 만약 직접 구축이 불가피하다면 기존 CMDB 계층 구조의 적절한 부모 CI 테이블을 확장(C)하여 기존 식별/조정 규칙을 상속받아야 업그레이드 호환성이 유지되고 기술 부채가 최소화됩니다. 기존 OOTB 클래스를 개조하는 행위(A)는 업그레이드를 불가능하게 만드는 안티 패턴이며, 자산 테이블 확장(B)은 CI 모델 설계 목적에 부합하지 않으므로 오답입니다."
  },
  {
    "id": 67,
    "title": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard compliance scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      { "letter": "A", "text": "Technical Service Offerings, Dynamic CI Groups, CMDB Groups." },
      { "letter": "B", "text": "Certification Filter, Certification Template, Audit." },
      { "letter": "C", "text": "Stale, Orphan, Duplicate." },
      { "letter": "D", "text": "Certification Policies, Data Filters, Scheduled Jobs." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB Health Dashboard의 준수성(Compliance) 스코어카드는 사전에 정의된 '원하는 이상적 상태(Desired State Audit)'의 합격/불합격 데이터를 기반으로 결과를 산출합니다. 특정 패치 버전 미달 자산을 모니터링하기 위해서는 검사 대상을 정의하는 Certification Filter, 기준 값을 정의하는 Certification Template, 그리고 이를 실행하는 CMDB Audit을 구성해야 합니다. Correctness 매트릭스 항목인 Stale/Orphan/Duplicate(C)나 구조가 맞지 않는 단순 단어 조합(D)은 준수성 점수를 생성하지 못하므로 오답입니다."
  },
  {
    "id": 68,
    "title": "The Apache Web Server identification rule is configured with the following criterion attributes: 1. Class, 2. Configuration File, 3. Version. Yesterday an Apache web server CI was discovered as part of Service Mapping. Today the application owner upgraded Apache to a different version and restarted the service. What will happen in the CMDB upon the next discovery?",
    "options": [
      { "letter": "A", "text": "The Apache Web Server CI will be reclassified as a generic Web Server CI." },
      { "letter": "B", "text": "The Identification and Reconciliation Engine (IRE) will throw a duplication error and halt." },
      { "letter": "C", "text": "A new Apache Web Server CI record will be created, resulting in a duplicate entry." },
      { "letter": "D", "text": "The existing Apache Web Server CI will be successfully matched and its version attribute will be updated." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow IRE(식별 및 조정 엔진)는 데이터 유입 시 식별 규칙에 지정된 모든 기준 속성(Criterion Attributes)을 사용하여 기존 CMDB와 대조합니다. 지문처럼 'Version'이 식별 고유 키로 지정된 상황에서 버전 업그레이드가 발생하면, IRE는 변경된 버전 정보를 기반으로 검색을 수행하므로 기존 레코드(구 버전이 적힌 레코드)를 찾지 못하는 식별 매칭 실패(Match Failure)가 일어납니다. 매칭 결과가 0건일 때 플랫폼은 신규 생성을 수행하므로 새로운 Apache Web Server CI가 인서트됩니다. 기존 레코드를 찾지 못했으므로 수정 업데이트(D)나 재분류(A)는 발생할 수 없습니다."
  },
  {
    "id": 69,
    "title": "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)? (Choose two)",
    "options": [
      { "letter": "A", "text": "Standard infrastructure servers in the enterprise data center." },
      { "letter": "B", "text": "Devices in highly secure environments or Zero-Trust network zones." },
      { "letter": "C", "text": "Core network switches and routers in the DMZ." },
      { "letter": "D", "text": "User endpoints and laptops that intermittently connect to the network." }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. ServiceNow Agent Client Collector(ACC)는 타겟 장치 내부에서 데이터를 수집한 뒤 MID 서버로 아웃바운드(Outbound) 푸시하는 에이전트 기반 솔루션입니다. 따라서 인바운드 포트 개방이 엄격히 금지된 고보안 구역(B)이나, 정기적인 에이전트리스 스캔 창을 놓치고 수시로 온/오프라인을 반복하는 원격 근무자 단말(D)의 인벤토리를 누락 없이 수집할 때 가장 효과적으로 사용됩니다. 일반 데이터센터 서버(A)는 에이전트리스가 표준이며, 네트워크 장비(C)는 서드파티 에이전트 설치가 불가능하므로 오답입니다."
  },
  {
    "id": 70,
    "title": "A CMDB Administrator is implementing a vulnerability response or security incident response solution and needs to ensure that security analysts have enough business context to estimate risk and prioritize remediation. Which CSDM Data Foundations Dashboard playbook directly helps achieve this goal?",
    "options": [
      { "letter": "A", "text": "Locations without a parent location." },
      { "letter": "B", "text": "Product Models without Product Owners." },
      { "letter": "C", "text": "Application Services with Business Application Relations." },
      { "letter": "D", "text": "Percentage of custom status values for CI Life Cycle Stages." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow Vulnerability Response(취약점 대응) 및 SecOps 환경에서 기술적 자산 위험을 비즈니스 중요도로 환산하기 위해서는, 실시간 가동 중인 'Application Service'와 상위의 전략적 'Business Application' 간의 관계선이 완벽히 구축되어 있어야 합니다. 'CSDM Data Foundations Dashboard'의 'Application Services with Business Application Relations' 플레이북은 이 핵심 관계의 누락 여부를 감시하여 보안팀에 명확한 비즈니스 중요도 컨텍스트를 제공하도록 돕습니다. 위치 정보(A), 모델 정보(B), 라이프사이클 표준화율(D)은 실시간 서비스 위험도 우선순위 산정에 직접적인 영향을 주지 못하므로 오답입니다."
  },
  {
    "id": 71,
    "title": "Which of the following represent the core business values derived from a healthy CMDB? (Choose two)",
    "options": [
      { "letter": "A", "text": "Strengthening operational resiliency." },
      { "letter": "B", "text": "Streamlining incident and change management." },
      { "letter": "C", "text": "Automating maintenance for CI relationships through automated discovery." },
      { "letter": "D", "text": "Collecting and managing depreciation and financial financial data." }
    ],
    "answer": ["A", "B"],
    "explanation": "정답: A, B. ServiceNow CMDB의 궁극적인 비즈니스 가치(Outcomes)는 시스템 의존성 가시화를 통해 비즈니스 연속성을 수호하는 운영 복원력 강화(A)와, 장애 MTTR 단축 및 변경 작업 위험 감소를 달성하는 ITSM 프로세스 효율화(B)입니다. 관계선을 자동으로 유지보수하는 것(C)은 가치를 구현하기 위한 기술적 '수단/기능(Feature)'에 불과하며, 재무 데이터 관리(D)는 ITAM(자산 관리)의 영역이므로 오답입니다."
  },
  {
    "id": 72,
    "title": "In a company, there is a need to understand the CSDM maturity level required for upcoming IT initiatives. Different stakeholders listed several use cases that they expect the CMDB to cover. Which use case explicitly requires the implementation of Information Objects?",
    "options": [
      { "letter": "A", "text": "The event operations team wants to automate ITOM events into ITSM incidents for operational actions." },
      { "letter": "B", "text": "The asset management team wants to track hardware asset life cycle compliance within a business application context." },
      { "letter": "C", "text": "The SecOps team wants to understand and calculate operational and data privacy risk in the business application context." },
      { "letter": "D", "text": "The business service management team wants to understand the infrastructure operational impact on customer-facing portals." },
      { "letter": "E", "text": "The customer service team wants to onboard proactive case management for premium subscribers." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CSDM 4.0 프레임워크에서 'Information Object(정보 객체)'는 비즈니스 애플리케이션이 다루는 논리적 데이터 유형(PII, PCI, 금융 정보 등)을 정의하는 엔티티입니다. SecOps나 GRC 팀이 애플리케이션 컨텍스트 내에서 데이터 민감도에 따른 '운영 리스크(Operational Risk)'를 평가하고 패치 우선순위를 산정하기 위해서는 이 정보 객체 레이어의 매핑이 반드시 필요하므로 C가 참입니다. 이벤트 자동화(A)는 Run 도메인, 자산 관리(B)는 Foundation 도메인, 고객 포털 및 케이스 관리(D, E)는 Sell or Consume 도메인의 영역이므로 오답입니다."
  },
  {
    "id": 73,
    "title": "A CMDB Administrator wants to leverage the CMDB / CSDM Data Foundations Dashboard. What are the core benefits of using this application? (Choose two)",
    "options": [
      { "letter": "A", "text": "Checks that important data is valid and properly configured according to best practices." },
      { "letter": "B", "text": "Uses fully headless automation to remediate potential data model risks instantly." },
      { "letter": "C", "text": "Provides playbooks to assist in the guided remediation of potential risks." },
      { "letter": "D", "text": "Has an open framework to create custom compliance metrics for the CMDB." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB/CSDM Data Foundations Dashboard는 시스템 아키텍처 정합성을 유지하기 위한 특화 도구입니다. 이 앱은 인스턴스 내의 핵심 구성 데이터가 표준 규격대로 올바르게 세팅되었는지 유효성을 검증(A)하며, 기준 미달 항목이 발견될 경우 어드민이 안전하게 데이터를 클렌징할 수 있도록 가이드형 절차서인 'Playbook'을 제공(C)합니다. 자산 관계 모델을 깨뜨릴 위험이 있는 무조건적 자동 수정(B)이나 커스텀 지표 설계 프레임워크(D)는 이 대시보드의 기능 범위가 아니므로 오답입니다."
  },
  {
    "id": 74,
    "title": "A Business Relationship Manager (BRM) wants to implement Service Portfolio Management (SPM) in order to present finalized business service offerings to business consumers via the request catalog. Which Common Service Data Model (CSDM) domain best aligns with this requirement?",
    "options": [
      { "letter": "A", "text": "Build (Build and Integration)" },
      { "letter": "B", "text": "Sell or Consume (Service Consumption)" },
      { "letter": "C", "text": "Design (Design and Planning)" },
      { "letter": "D", "text": "Manage Technical Services (Service Delivery)" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 4.0 프레임워크에서 Service Portfolio Management(SPM)를 활용하여 현업 및 비즈니스 소비자(Business Consumers)에게 최종 비즈니스 서비스 오퍼링을 노출하고 구독/소비하도록 통제하는 영역은 'Sell or Consume(과거 명칭: Service Consumption)' 도메인입니다. 이 도메인은 서비스 카탈로그 및 비즈니스 서비스 오퍼링 테이블을 품고 있는 최상위 현업 접점 레이어입니다. 개발을 다루는 Build(A), 개념 도면을 다루는 Design(C), IT 내부 인프라 운영을 다루는 Manage Technical Services(D)는 소비자 관점의 노출 영역이 아니므로 오답입니다."
  },
  {
    "id": 75,
    "title": "A retail organization wants to ensure that incidents affecting customer-facing services are resolved quickly to avoid revenue loss. Which CSDM attribute should be used to dynamically prioritize these services and related incident tickets?",
    "options": [
      { "letter": "A", "text": "Assignment Group on the CI record" },
      { "letter": "B", "text": "Affected CIs in the Incident record" },
      { "letter": "C", "text": "Service Classification in the Technical Service" },
      { "letter": "D", "text": "Business Criticality in the Service Offering" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CSDM 4.0 프레임워크에서 특정 서비스 장애가 기업 매출에 미치는 타격(Revenue Loss)의 경중을 판별하고 인시던트 우선순위를 제어하는 표준 속성은 Service Offering 테이블에 존재하는 'Business Criticality(비즈니스 중요도)'입니다. 이를 Mission Critical 또는 High 등으로 설정해 두면, 하부 자산 장애 시 티켓의 영향도와 우선순위가 자동 격상되어 신속한 복구를 유도합니다. 담당 팀을 지정하는 Assignment Group(A)이나 단순 기술 레이어 분류 태그인 Service Classification(C)은 비즈니스 중요도 컨텍스트를 제공하지 못하므로 오답입니다."
  },
  {
    "id": 76,
    "title": "Where can a ServiceNow administrator perform Natural Language Queries (NLQ) using Intelligent Search when working with CMDB data?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "CI Class Manager" },
      { "letter": "C", "text": "CMDB Workspace" },
      { "letter": "D", "text": "CMDB Health Dashboard" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 플랫폼의 Next Experience 환경에서 제공되는 'CMDB Workspace'는 자연어 처리 기술을 접목한 '지능형 검색(Intelligent Search)' 기능을 지원합니다. 사용자가 검색창에 일상적인 대화형 문장을 입력하면 백엔드의 NLQ(Natural Language Query) 엔진과 동의어 매핑 시스템이 작동하여 문맥과 의도를 파악하고, 이를 CMDB Query Builder 연동을 통해 구조화된 자산 관계 결과로 반환합니다. Data Manager(A)는 수명주기 제어, Class Manager(B)는 테이블 구조 설계, Health Dashboard(D)는 품질 지표 모니터링 도구이므로 자연어 검색 인터페이스를 지원하지 않습니다."
  },
  {
    "id": 77,
    "title": "A CMDB Administrator needs to prevent duplicate CI creation when Import Sets load data into the CMDB from vendor shipment files containing CI information. What is the best approach?",
    "options": [
      { "letter": "A", "text": "Create comparison rules in the IRE." },
      { "letter": "B", "text": "Use the CMDBTransformUtil API within the transform map's onBefore script." },
      { "letter": "C", "text": "Set a global system property to force all legacy transform maps to utilize the IRE." },
      { "letter": "D", "text": "Set the coalesce field attribute on target identifier mappings within the transform map." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB에 외부 데이터를 Import Set 및 트랜스폼 맵을 통해 적재할 때, 중복 자산 생성을 방지하는 모범 베스트 프랙티스는 트랜스폼 맵의 'onBefore' 스크립트에서 'CMDBTransformUtil' API를 호출하는 것입니다. 이 API는 들어오는 페이로드를 식별 및 조정 엔진(IRE)으로 리다이렉트하여 정교한 식별 규칙을 거치도록 강제합니다. 일반 테이블에서 쓰이는 Coalesce(D) 방식은 CMDB 자산 적재 시 IRE를 완전히 우회하여 무결성을 파괴하는 안티 패턴이므로 오답입니다."
  },
  {
    "id": 78,
    "title": "A CMDB Administrator is configuring an Identification Rule using CI Class Manager for the Tomcat class. The rule currently uses the following criteria attributes: Class and Install Directory. If no match is found using the Tomcat identification rule, which Identifier Entry configuration option must be enabled so that the Application identification rule (parent class) is attempted for matching?",
    "options": [
      { "letter": "A", "text": "Applies to" },
      { "letter": "B", "text": "Independent" },
      { "letter": "C", "text": "Allow fallback to parent's rules" },
      { "letter": "D", "text": "Criterion attributes" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow IRE(식별 및 조정 엔진) 환경에서 자식 클래스에 오버라이드된 고유 식별 규칙이 매칭에 실패했을 때, 신규 생성을 유보하고 상위 부모 클래스의 식별 규칙(Parent Rules)을 연쇄적으로 시도하도록 강제하는 식별자 엔트리 설정 속성은 'Allow fallback to parent's rules'입니다. 이 가드레일 옵션을 활성화해야 범용적인 부모 식별 기준을 통해 무분별한 중복 자산 인서트를 막을 수 있습니다. 클래스 대상 지정 필드인 Applies to(A)나 종속성 여부를 가르는 Independent(B)는 폴백 로직을 제어하지 못하므로 오답입니다."
  },
  {
    "id": 79,
    "title": "An organization is using CMDB Query Builder to identify Application Services. Those services contain a Database. The database has Incidents. The query should also return all infrastructure related to those Application Services. Which steps are required to build this query? (Choose two)",
    "options": [
      { "letter": "A", "text": "Add a non-CMDB table to the query canvas." },
      { "letter": "B", "text": "Use a Service Mapping Query to include non-CMDB tables like the Incident table." },
      { "letter": "C", "text": "Use a Service Mapping Query to find all incidents related to the database." },
      { "letter": "D", "text": "Use a CMDB Query to include application services and their related infrastructure." }
    ],
    "answer": ["A", "D"],
    "explanation": "정답: A, D. ServiceNow CMDB Query Builder에서 비즈니스 애플리케이션 서비스와 하부 인프라 자산 간의 다대다 관계를 설계할 때는 기본적으로 'CMDB Query' 유형을 생성해야 하므로 D는 참입니다. 또한, 자산이 아닌 일반 장애 티켓 데이터인 인시던트(Incident) 정보는 CMDB 영역에 속하지 않으므로, 이를 데이터베이스 노드와 결합하기 위해서는 캔버스에 'Non-CMDB 테이블' 블록을 명시적으로 추가하여 연동해야 하므로 A 역시 참입니다. Service Mapping 쿼리(B, C) 모드는 비CMDB 데이터의 다중 통합 조인을 구조적으로 지원하지 않으므로 오답입니다."
  },
  {
    "id": 80,
    "title": "A CMDB Administrator is starting the process of populating the CMDB and wants to ensure that data that is no longer useful or applicable is removed from the system. Which governance management tool in ServiceNow is used to manage the comprehensive lifecycle of CI data and remove outdated or unnecessary records via automated policies?",
    "options": [
      { "letter": "A", "text": "CI Class Manager" },
      { "letter": "B", "text": "CMDB and CSDM Data Foundations Dashboard" },
      { "letter": "C", "text": "CMDB Health Dashboard" },
      { "letter": "D", "text": "CMDB Data Manager" },
      { "letter": "E", "text": "De-duplication Template" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow에서 노후화되거나 유용성이 상실된 자산(CI) 데이터를 탐지하여 자동으로 은퇴(Retire), 아카이브(Archive), 영구 삭제(Delete) 등 단계별 수명 주기를 제어하고 클렌징하는 표준 거버넌스 관리 도구는 'CMDB Data Manager'입니다. 스키마를 설계하는 Class Manager(A), 아키텍처 정렬도를 보는 Foundations Dashboard(B), 품질 상태를 모니터링하는 Health Dashboard(C)는 직접적인 정책 기반 레코드 제거 프로세스를 수행하지 못하므로 오답입니다."
  },
  {
    "id": 81,
    "title": "Which configuration and governance actions can be directly initiated from within the native CMDB Workspace interface? (Choose three)",
    "options": [
      { "letter": "A", "text": "Execute and schedule ServiceNow Discovery network scans." },
      { "letter": "B", "text": "Create a CMDB Data Manager data certification or attestation policy." },
      { "letter": "C", "text": "Remediate and merge duplicate CI records via the built-in remediator wizard." },
      { "letter": "D", "text": "Create and extend a new CMDB CI class through the embedded class manager tool." }
    ],
    "answer": ["B", "C", "D"],
    "explanation": "정답: B, C, D. ServiceNow CMDB Workspace는 통합 거버넌스 허브로서 내부에 Data Manager(B), Duplicate Remediator(C), CI Class Manager(D) 엔진이 컴포넌트로 탑재되어 있어 외부 메뉴 이동 없이 즉시 실행이 가능합니다. 반면, 네트워크를 직접 스캔하여 데이터를 수집하는 ServiceNow Discovery 실행(A)은 ITOM 자산 가시성(ITOM Visibility) 엔진 및 전용 Discovery 스케줄 메뉴의 고유 영역이므로 CMDB Workspace에서 직접 구동하는 액션 범주에 포함되지 않아 오답입니다."
  },
  {
    "id": 82,
    "title": "A CMDB Administrator group wants to set up a process to receive automated task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules must be used to configure these recommended fields and enable automatic task generation when those fields are missing?",
    "options": [
      { "letter": "A", "text": "Technical Service Offerings and Dynamic CI Groups" },
      { "letter": "B", "text": "CMDB Workspace and Scheduled Jobs" },
      { "letter": "C", "text": "Dynamic CI Groups and CMDB Groups" },
      { "letter": "D", "text": "CI Class Manager and Health Preferences" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB Health Dashboard의 완전성(Completeness) 지표를 제어하기 위해서는 두 가지 설정이 결합되어야 합니다. 첫째, 특정 클래스(Linux Server)에서 어떤 필드가 누락되면 안 되는지 권장 필드 규칙을 지정하는 'CI Class Manager'가 필요하며, 둘째, 누락 자산 식별 시 실제로 시스템이 치유 태스크(Remediation Task)를 자동으로 발행하도록 제어하는 전역 스위치인 'Health Preferences'를 활성화해야 합니다. 단순 UI 뷰포트나 서비스 토폴로지 구성 요소(A, B, C)는 완전성 데이터 가드레일을 설계하지 못하므로 오답입니다."
  },
  {
    "id": 83,
    "title": "The CMDB Configuration Management team has developed a healthy and trusted CMDB by integrating discovered infrastructure data, referencing non-discoverable data (such as change and support group information), and making the CMDB service-aware using Service Mapping. How will these architectural improvements directly enhance the Change Management process? (Choose two)",
    "options": [
      { "letter": "A", "text": "Automatically schedules and deploys code changes live production without human review or approval." },
      { "letter": "B", "text": "Provides clear downstream and upstream insights into the potential business impact of the proposed change." },
      { "letter": "C", "text": "Guarantees that no changes result in service downtime, regardless of execution errors." },
      { "letter": "D", "text": "Enables the auto-population of the assignment group field based on the CI's support group attribute to dynamically route change tasks." }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. 서비스 인지형(Service-aware) CMDB와 비기술적 메타데이터(Support Group)가 연동되면 변경 관리 프로세스에 명확한 비즈니스 밸류를 선사합니다. Service Mapping 데이터를 바탕으로 작업 대상 자산 변경 시 영향을 받는 상위 서비스의 잠재적 리스크(Impact)를 정확히 판별(B)할 수 있으며, 자산에 미리 매핑된 지원팀 정보를 활용해 변경 처리 담당 부서(Assignment Group)를 자동으로 지정 및 라우팅(D)하여 가동 효율성을 극대화합니다. 인간의 승인을 패싱하는 자동 배포(A)나 작업 실수를 무조건 막아준다는 보장(C)은 플랫폼의 현실적 기능 범위를 벗어난 오답입니다."
  },
  {
    "id": 84,
    "title": "A CMDB Administrator wants to align their CMDB with CSDM life cycle best practices by using Life Cycle field mappings. After clicking Enable Life Cycle Sync within the migration wizard, what must be the immediate next step?",
    "options": [
      { "letter": "A", "text": "Fix the incorrect values in the new Life Cycle Stage to match and preserve legacy custom values." },
      { "letter": "B", "text": "Formally activate the CSDM Life Cycle field mappings to begin using the new state values live." },
      { "letter": "C", "text": "Resolve any incomplete field mappings or data errors identified in the Discrepancy Report." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CSDM 수명 주기 마이그레이션 프로세스에서 'Enable Life Cycle Sync'를 가동한 직후의 필수 선행 단계는 시스템이 자동으로 뽑아낸 'Discrepancy Report(불일치 보고서)'의 데이터 오류 및 누락 매핑 건들을 전수 조사하여 해소(Resolve)하는 것입니다. 이 정제 단계를 거치지 않고 최종 맵을 활성화(B)하면 기존 자산의 운영 상태 데이터가 왜곡되거나 유실되는 치명적인 데이터 오염이 발생하므로 오답입니다."
  },
  {
    "id": 85,
    "title": "A CSDM Data Manager wants to view metrics that measure how well Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) align with CSDM best practices. Which tab within the CSDM Data Foundations Dashboard provides these specific metrics?",
    "options": [
      { "letter": "A", "text": "Crawl" },
      { "letter": "B", "text": "Walk" },
      { "letter": "C", "text": "Fly" },
      { "letter": "D", "text": "Run" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 4.0 성숙도 프레임워크 가이드라인에 따라, IT 내부의 소유권 및 지원 조직 체계를 뜻하는 'Technical Service'와 'Technical Service Offering'의 구축 정합성을 진단하는 영역은 'Walk(걸어가기)' 단계의 고유 지표입니다. 기초 자산을 다루는 Crawl(A), 대고객 비즈니스 서비스를 다루는 Run(D), 고급 데이터 거버넌스를 다루는 Fly(C) 탭은 검진 대상 도메인이 다르므로 오답입니다."
  },
  {
    "id": 86,
    "title": "What are the core characteristics or functions of ServiceNow IntegrationHub ETL? (Choose two)",
    "options": [
      { "letter": "A", "text": "Integrates third-party data seamlessly into the CMDB or into targeted non-CMDB tables." },
      { "letter": "B", "text": "Performs active agentless network discovery data collection to update the CMDB live." },
      { "letter": "C", "text": "Utilizes the Identification and Reconciliation Engine (IRE) natively to process and integrate data." },
      { "letter": "D", "text": "Out-of-the-box imports Microsoft SCCM and Intune data without installing additional store applications." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow IntegrationHub ETL은 외부 데이터 소스를 GUI 환경에서 변환하는 범용 데이터 파이프라인 도구입니다. 이 도구는 CMDB뿐만 아니라 일반 마스터 테이블(Non-CMDB)로의 적재를 동시에 지원(A)하며, CMDB 적재 시 별도의 스크립트 작성 없이도 플랫폼 표준 엔진인 IRE를 강제로 경유하도록 아키텍처가 설계되어 있어(C) 중복 데이터를 원천 차단합니다. 네트워크 스캔은 Discovery(B)의 영역이며, SCCM 데이터 로드는 Service Graph Connector(D) 전용 앱의 영역이므로 오답입니다."
  },
  {
    "id": 87,
    "title": "A CMDB Administrator wants to configure and use the Staleness metric from the CMDB Health Dashboard (Correctness Scorecard). Which foundational system field is utilized by the health engine to calculate the duration of CI staleness?",
    "options": [
      { "letter": "A", "text": "Last modified on (last_modified)" },
      { "letter": "B", "text": "Created (sys_created_on)" },
      { "letter": "C", "text": "Updated (sys_updated_on)" },
      { "letter": "D", "text": "First discovered (first_discovered)" },
      { "letter": "E", "text": "Most recent discovery (last_discovery)" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Health Dashboard의 정확성(Correctness) 내 노후화(Staleness) 메트릭은 자산 데이터가 오랫동안 갱신되지 않았는지를 추적합니다. 이를 계산하는 표준 시스템 필드는 데이터의 수동 수정 및 자동화 수집 갱신을 모두 포괄하여 실시간 반영하는 'Updated (sys_updated_on)' 필드입니다. 최초 생성일(B)은 데이터의 활성화 여부를 대변하지 못하며, 디스커버리 전용 필드들(D, E)은 수동이나 API로 관리되는 자산에 적용할 경우 전체 정확도 점수를 오염시키기 때문에 오답입니다."
  },
  {
    "id": 84,
    "title": "A CMDB Data Manager needs to create, publish, and manage CMDB Data Manager policies to automate and govern CI lifecycle operations. Where within the ServiceNow platform should this administrative workflow be executed?",
    "options": [
      { "letter": "A", "text": "CMDB Workspace - CMDB 360 tab" },
      { "letter": "B", "text": "Service Operations Workspace" },
      { "letter": "C", "text": "CI Class Manager" },
      { "letter": "D", "text": "CMDB Workspace - Management tab" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow의 현대적인 넥스트 익스피리언스 아키텍처에서 'CMDB Data Manager'의 정책 생성, 게시, 관리 워크플로우는 'CMDB Workspace' 내부의 'Management' 탭으로 통합 관리 주소지가 일원화되었습니다. 이 탭이 자산 데이터의 전사 수명 주기 가드레일을 통제하는 핵심 센터 역할을 합니다. 데이터 소스 다각화 품질을 분석하는 CMDB 360 탭(A), ITSM 티켓 운영 공간인 Service Operations Workspace(B), 데이터 모델 스키마를 설계하는 Class Manager(C)는 정책 기획 및 배포 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 89,
    "title": "A platform data owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The data owner knows the best option is to include CMDB 360 (Multisource CMDB) to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360. What can the data owner do in this case?",
    "options": [
      { "letter": "A", "text": "CMDB 360 is a core platform feature that can be fully utilized and monitored immediately without any licensing restrictions." },
      { "letter": "B", "text": "An ITOM Discovery subscription must be purchased before any multi-source IRE reconciliation rules can take effect on incoming payloads." },
      { "letter": "C", "text": "The IRE reconciliation rules can be configured to filter and prioritize discovery sources regardless of whether CMDB 360 is licensed or enabled." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow의 IRE 조정 규칙(Reconciliation Rules)은 다중 데이터 소스 환경에서 특정 속성의 우선순위를 지정하는 코어 플랫폼의 기본 내장 아키텍처입니다. 따라서 상위 유료 모듈인 'CMDB 360' 라이선스(ITOM Discovery 필요)가 없더라도, 유입되는 서드파티 데이터 소스 간의 품질 가드레일을 치는 조정 규칙 자체는 완벽하게 작동 및 구성할 수 있습니다. CMDB 360이 완전 무료라는 설명(A)이나 라이선스가 없으면 조정 규칙 자체가 동작하지 않는다는 설명(B)은 플랫폼 스펙과 맞지 않는 오답입니다."
  },
  {
    "id": 90,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field, while its child class, Windows Server, uses a rule that selects the most reported value. Based on the RAM values available from different discovery sources in the Multisource CMDB for a given Server, which RAM value will ultimately be written to the CMDB for that Server record? • Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020",
    "options": [
      { "letter": "A", "text": "6020" },
      { "letter": "B", "text": "2048" },
      { "letter": "C", "text": "4096" },
      { "letter": "D", "text": "1024" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. 이 문제는 다중 소스 환경에서 클래스 상속에 따른 동적 조정 규칙(Dynamic Reconciliation Rules)의 적용 대상을 정확히 구별할 수 있는지 검증합니다. 질문에서 최종 수정을 요청한 대상은 'Windows Server'가 아닌 일반 'Server' 레코드이므로, 부모 클래스에 설정된 'Largest Value(가장 큰 값)' 규칙이 발동합니다. 유입된 모든 페이로드 값(2048, 4096, 6020) 중 수학적으로 가장 큰 값은 6020이므로 A가 최종 반영됩니다. 자식 클래스의 규칙인 'Most Reported(최빈값)'를 오인하여 적용할 경우 4096(C)이라는 함정에 빠지게 되므로 오답입니다."
  },
  {
    "id": 91,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field, while the Windows Server class uses a rule that selects the most reported value. Based on the RAM values available from different discovery sources in the Multisource CMDB for a given Windows Server, which RAM value will ultimately be written to the CMDB for that Windows Server record? • Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020",
    "options": [
      { "letter": "A", "text": "6020" },
      { "letter": "B", "text": "2048" },
      { "letter": "C", "text": "4096" },
      { "letter": "D", "text": "1024" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. 이 문제는 다중 데이터 소스 환경에서 자식 클래스의 규칙 오버라이드(Class Override) 메커니즘을 정확히 이해하고 있는지 검증합니다. 질문의 대상이 'Windows Server' 레코드이므로 부모의 규칙(Largest) 대신 자식 클래스 고유의 동적 조정 규칙인 'Most Reported Value(가장 많이 보고된 값)'가 우선 적용됩니다. 유입된 페이로드 데이터 중 4096이 총 2회(Tivoli, ServiceNow)로 가장 많이 보고되었으므로 C가 최종 승인되어 작성됩니다. 부모의 규칙을 잘못 대입하여 최대값인 6020(A)을 선택하지 않도록 주의해야 합니다."
  },
  {
    "id": 92,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow'. If the ServiceNow Discovery source attempts to update an attribute on an existing CI record, what is the expected outcome determined by the IRE?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow IRE(식별 및 조정 엔진) 가이드라인에 따라, 조정 규칙(Reconciliation Rule)은 특정 자산 필드를 업데이트할 수 있는 '공식 권한 소스'를 지정합니다. 지문에서 'ServiceNow'가 해당 클래스의 허용 소스로 정의되어 있으므로, ServiceNow 소스로부터 유입된 기존 자산 업데이트 시도는 안전하게 수용(Allow Update)됩니다. 조정 규칙은 신규 삽입(Insert) 단계에는 관여하지 않고 오직 수정(Update) 단계에만 작동하므로 C와 D는 오답이며, 등록된 소스이므로 B 역시 오답입니다."
  },
  {
    "id": 93,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow, SCCM'. If the Altiris discovery source attempts to update an attribute on an existing matched CI record, what is the expected outcome determined by the IRE?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow IRE(식별 및 조정 엔진)에서 특정 클래스나 필드에 조정 규칙(Reconciliation Rule)이 정의되면, 지정된 소스들만 데이터를 수정할 수 있는 화이트리스트 보안 정책이 수립됩니다. 허용 소스가 ServiceNow와 SCCM으로 국한된 상황에서 리스트에 없는 Altiris 소스가 기존 자산의 업데이트를 시도하면, IRE는 데이터의 신뢰성을 보호하기 위해 업데이트를 차단(Do Not Allow Update)합니다. 조정 규칙은 신규 생성(Insert) 단계에는 개입하지 않으므로 C와 D는 논외 오답입니다."
  },
  {
    "id": 94,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow'. If the Altiris discovery source attempts to update an attribute on an existing matched CI record, what is the expected outcome determined by the IRE?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow IRE(식별 및 조정 엔진) 아키텍처 표준 가이드라인에 따라, 조정 규칙(Reconciliation Rule)이 정의되면 해당 속성은 허용된 데이터 소스만 수정할 수 있는 화이트리스트 상태로 잠깁니다. 규칙에 오직 'ServiceNow'만 수정 권한이 있는 권위 소스(Authorized Source)로 지정되어 있으므로, 권한이 없는 'Altiris' 소스가 기존 자산에 대해 업데이트를 시도하는 행위는 무결성 보호를 위해 차단(Do Not Allow Update)됩니다. 신규 장비 유입 단계인 Insert(C, D)는 조정 규칙의 판단 범주가 아니므로 오답입니다."
  },
  {
    "id": 95,
    "title": "Based on the CMDB reconciliation rule setting: 'Reconciliation Rule = ServiceNow'. If the Altiris discovery source attempts to insert a brand new, unmatched CI record into the CMDB, what is the expected outcome determined by the IRE?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow IRE(식별 및 조정 엔진) 아키텍처 표준 규칙에 따라, 조정 규칙(Reconciliation Rules)은 오직 기존에 매칭된 자산 레코드를 '수정(Update)'하는 시점에만 화이트리스트 권한을 검사합니다. 시스템에 존재하지 않는 신규 자산을 최초로 생성하는 '삽입(Insert)' 단계에서는 어떠한 조정 규칙도 개입하지 않고 우회(Bypass)하므로, Altiris 소스의 신규 자산 삽입 시도는 무조건 허용(Allow Insert)됩니다. 트랜잭션의 본질을 파악하지 못하고 단일 소스 제한 정책에 함몰되어 C번(차단)을 선택하지 않도록 각별히 주의해야 합니다."
  },
  {
    "id": 96,
    "title": "Which of the following correctly describes the core definition of the Configuration Management Database (CMDB) within the ServiceNow platform?",
    "options": [
      { "letter": "A", "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle." },
      { "letter": "B", "text": "Specific information elements that further describe a CI, such as a name, serial number, or operating system version." },
      { "letter": "C", "text": "Core foundation data records, including users, support groups, and operational locations." },
      { "letter": "D", "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral attributes." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow 아키텍처 표준 가이드라인에 따라, CMDB는 자산(CI) 데이터와 그 관계 정보를 전체 수명 주기 동안 통합 관리하는 데이터베이스 컨테이너 총체를 의미하므로 A가 정답입니다. 선지 B는 CI Attributes(속성), 선지 C는 Foundation Data(기초 데이터), 선지 D는 CI Class(클래스/테이블)의 표준 정의이므로 CMDB 전체를 설명하는 보기가 아닙니다."
  },
  {
    "id": 97,
    "title": "Which of the following correctly describes the concept of 'Attributes' within the context of the ServiceNow CMDB?",
    "options": [
      { "letter": "A", "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle." },
      { "letter": "B", "text": "Specific information elements or data fields that further describe a CI, such as a name, serial number, or operating system." },
      { "letter": "C", "text": "Core foundation data records, including users, support groups, and operational locations." },
      { "letter": "D", "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral attributes." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 데이터 모델 표준 가이드라인에 따라, Attributes(속성)는 개별 자산(CI)의 구체적인 스펙과 메타데이터를 나타내는 개별 데이터 필드(Column)를 의미하므로 B가 정답입니다. 선지 A는 CMDB 자체, 선지 C는 Foundation Data(기초 데이터), 선지 D는 CI Class(클래스)의 표준 정의이므로 오답입니다."
  },
  {
    "id": 98,
    "title": "Which of the following correctly describes the core concept of 'Foundational Data' within the ServiceNow platform?",
    "options": [
      { "letter": "A", "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle." },
      { "letter": "B", "text": "Specific information elements or data fields that further describe a CI, such as a name, serial number, or operating system." },
      { "letter": "C", "text": "Core platform-wide reference metrics and organizational records, specifically users, support groups, and locations." },
      { "letter": "D", "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral attributes." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 프레임워크 가이드라인에 따라, Foundational Data(기초 데이터)는 인프라 자산 데이터는 아니지만 CMDB 자산 및 ITSM 프로세스 전반에서 소유권, 지원 담당, 물리적 위치를 매핑하기 위해 참조하는 사용자, 그룹, 위치 등의 공통 마스터 데이터를 의미하므로 C가 정답입니다. 선지 A는 CMDB, 선지 B는 Attributes, 선지 D는 CI Class의 정의이므로 오답입니다."
  },
  {
    "id": 99,
    "title": "Which of the following correctly describes the core concept of a 'Class' within the ServiceNow CMDB?",
    "options": [
      { "letter": "A", "text": "A comprehensive centralized database used to store and manage configuration records throughout their entire operational lifecycle." },
      { "letter": "B", "text": "Specific information elements or data fields that further describe a CI, such as a name, serial number, or operating system." },
      { "letter": "C", "text": "Core platform-wide reference metrics and organizational records, specifically users, support groups, and locations." },
      { "letter": "D", "text": "A specific database table that contains a distinct type or group of CIs sharing common behavioral and schema attributes." }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB 아키텍처 표준 가이드라인에 따라, Class(클래스)는 공통된 스펙 데이터와 필드 구조를 공유하는 특정 유형의 자산(CI) 집합을 분류하여 격리 보관하는 '독립 데이터베이스 테이블'을 의미하므로 D가 정답입니다. 선지 A는 CMDB 컨테이너 전체, 선지 B는 Attributes(속성), 선지 C는 Foundational Data(기초 데이터)의 표준 정의문이므로 오답입니다."
  },
  {
    "id": 100,
    "title": "An Identification Rule for a CI class is defined with two sequential Identifier Entries: Priority 100 uses the 'Name' attribute, and Priority 200 uses the 'IP Address' attribute (requiring strict compound verification). Two new CI records are subsequently imported into the system. • CI one: The name matches an existing CI record in the CMDB. • CI two: The IP address matches an existing CI record in the CMDB, but no name or MAC address matches. Which outcome is correct based on the ServiceNow IRE processing?",
    "options": [
      { "letter": "A", "text": "CI one will update the existing CI, and CI two will be inserted as a brand new CI." },
      { "letter": "B", "text": "CI one will be inserted as a brand new CI, and CI two will update the existing CI." },
      { "letter": "C", "text": "Both CI one and CI two will successfully match and update their respective existing CIs." },
      { "letter": "D", "text": "Both CI one and CI two will fail criteria and be inserted as brand new CIs." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow IRE 엔진은 식별 엔트리의 우선순위와 속성의 고유성 가치를 엄격히 따집니다. CI 1은 최우선 고유 식별자인 'Name' 매칭에 성공했으므로 기존 레코드를 정확히 찾아내어 업데이트(Update)합니다. 반면, CI 2는 유동적 필드인 'IP Address'만 매치되었을 뿐 복합 식별 가드레일을 충족하지 못하므로, 기존 자산의 무결성 오염을 방지하기 위해 매칭 실패로 판정하고 시스템에 신규 삽입(Insert) 처리하므로 A가 완벽한 정답입니다."
  },
  {
    "id": 101,
    "title": "A CMDB Administrator installs a certified Service Graph Connector (SGC) from the ServiceNow Store and subsequently customizes the out-of-the-box data mappings provided within the connector. What is the direct consequence of introducing these customized mappings?",
    "options": [
      { "letter": "A", "text": "Fields populated by the customization will automatically have a metadata tag associated with them in the target CMDB tables." },
      { "letter": "B", "text": "The customized mappings are no longer covered under standard ServiceNow technical support, rendering the customer fully responsible for supporting and maintaining their modified SGC." },
      { "letter": "C", "text": "The execution engine will prevent the SGC from running unless a formal system approval record is created and attached to the data source." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow 서비스 그래프 커넥터(SGC)는 글로벌 벤더와 공동 개발하여 데이터 정합성을 보증하는 인증 제품입니다. 따라서 관리자가 기본 제공되는 OOTB 매핑 구조를 임의로 커스터마이징하면 제품 업그레이드 시 스킵 로그가 발생할 뿐만 아니라, ServiceNow 공식 기술 지원 및 보증 범위(Supportability)를 즉시 벗어나게 되므로 향후 모든 유지보수 및 디버깅 책임은 고객사(Customer)가 전적으로 부담하게 됩니다."
  },
  {
    "id": 102,
    "title": "An organization uses multiple data sources to update its CMDB, and each data source has a different priority level assigned via reconciliation rules. A high-priority data source updates server records weekly. However, due to an integration issue, this high-priority source stops updating the records. Which configuration specifically allows a lower-priority data source to override and update the records after a specified period of inactivity from the higher-priority source?",
    "options": [
      { "letter": "A", "text": "Data Refresh Rule" },
      { "letter": "B", "text": "Health Inclusion Rules" },
      { "letter": "C", "text": "Identification Rules" },
      { "letter": "D", "text": "Reconciliation Rules" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow IRE 엔진에서 데이터 소스 간의 고정 우선순위를 세팅하는 것은 Reconciliation Rules(D)이지만, 상위 소스가 '일정 기간 비활성화(Period of inactivity)' 되었을 때 하위 소스가 가드레일을 깨고 임시 업데이트할 수 있도록 기간 기반 권한 양도 규칙을 정의하는 독립 모듈은 'Data Refresh Rule'이므로 A가 정답입니다. 일반 조정 규칙(D)은 기간 소멸에 따른 동적 권한 이양을 수행하지 못하므로 오답입니다."
  },
  {
    "id": 103,
    "title": "A CMDB Configuration Management manager creates a data filter for a certification policy in CMDB Data Manager with the following configuration: • Target Table: Server [cmdb_ci_server] • Filter Condition: [Operating System] [contains] [Server] OR [Operating System] [contains] [Linux]. Which operating systems dynamically populated on the target table will be affected by this policy? (Choose multiple)",
    "options": [
      { "letter": "A", "text": "AIX 7.2" },
      { "letter": "B", "text": "Windows Server 2022 Datacenter" },
      { "letter": "C", "text": "Linux CentOS" },
      { "letter": "D", "text": "Windows 2019 Datacenter" }
    ],
    "answer": ["B", "C", "D"],
    "explanation": "정답: B, C, D. ServiceNow CMDB Data Manager의 데이터 필터는 텍스트 부분 일치를 판독하는 Contains 연산자를 사용합니다. 'Windows Server 2022 Datacenter'(B)는 'Server' 문자열을 포함하고, 'Linux CentOS'(C)는 'Linux' 문자열을 포함하므로 필터를 통과합니다. 'Windows 2019 Datacenter'(D) 역시 데이터베이스상 부모인 Server 테이블 환경에 속한 서버용 에디션 레코드이므로 정책 영향 범주에 동시 포함됩니다. 반면 유닉스 계열인 AIX 7.2(A)는 두 키워드를 모두 포함하지 않아 제외되므로 오답입니다."
  },
  {
    "id": 104,
    "title": "A Windows Server CI is moved from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). What process occur during this operation?",
    "options": [
      {
        "letter": "A",
        "text": "Class switch"
      },
      {
        "letter": "B",
        "text": "Class change"
      },
      {
        "letter": "C",
        "text": "Class upgrade"
      },
      {
        "letter": "D",
        "text": "Class downgrade"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 상위 Server에서 더 구체적인 하위 Windows Server 클래스로 이동하는 것은 정밀 분류 방향의 Class upgrade입니다."
  },
  {
    "id": 105,
    "title": "A CMDB Administrator installs the CMDB Data Foundations Dashboard application to monitor and improve overall configuration data quality. What is the primary business benefit of utilizing this specific dashboard?",
    "options": [
      { "letter": "A", "text": "Provides an administrative interface to configure and alter underlying health-related evaluation metrics." },
      { "letter": "B", "text": "Provides actionable, key health-related insights and metrics that empower stakeholders to make informed data-governance decisions." },
      { "letter": "C", "text": "Provides an automated workspace to execute and resolve pending data certification policy compliance tasks." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow Store 앱인 CMDB Data Foundations Dashboard는 베스트 프랙티스 기준에 맞추어 인스턴스의 데이터 품질 상태를 진단하고 점수화하여 보여주는 시각화 솔루션입니다. 따라서 거버넌스적 방향성을 수립할 수 있는 핵심 메트릭 지표를 제공(B)하는 것이 주임무입니다. 메트릭 설정 자체는 CI Class Manager(A)의 영역이며, 정책 태스크 처리는 CMDB Data Manager(C)의 영역이므로 오답입니다."
  },
  {
    "id": 106,
    "title": "The CMDB Configuration Management team wants to manage and remediate de-duplication tasks that are automatically generated when redundant data is ingested into the CMDB through the Identification and Reconciliation Engine (IRE). In which specific section of the CMDB Workspace can they locate and execute these de-duplication tasks?",
    "options": [
      { "letter": "A", "text": "The Import Action tile located under the Home tab" },
      { "letter": "B", "text": "The Total Status tile located under the My Work tab" },
      { "letter": "C", "text": "The CMDB Feature Adoption tile located under the Insights tab" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB Workspace 아키텍처 가이드라인에 따라, IRE가 데이터 무결성을 보호하기 위해 발행한 '중복 제거 태스크(De-duplication Tasks)'는 어드민이 직접 조치해야 하는 업무 티켓에 해당하므로 'My Work' 탭의 'Total Status' 타일을 통해 진입하여 데이터 보정 마법사(Remediation)를 구동해야 합니다. 데이터 유입 관리를 담당하는 Home 탭(A)이나 기능 도입 수준을 평가하는 Insights 탭(C)은 개별 티켓 조치 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 107,
    "title": "An organization aligns its CMDB governance with the CSDM 4.0 framework. A CMDB Administrator is evaluating conflicting group ownership values defined across different architectural layers for a specific class of CIs: • CI Class Manager Default [Managed by Group] = Enterprise IT Services • Associated Technical Service Offering [Managed by Group] = Windows Support • CI Attribute [Change Group] = Change Management Team Based on CSDM data-synchronization best practices, what will be the final updated [Managed by Group] value on the infrastructure CIs of this class?",
    "options": [
      { "letter": "A", "text": "Enterprise IT Services" },
      { "letter": "B", "text": "Change Management Team" },
      { "letter": "C", "text": "Windows Support" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CSDM(Common Service Data Model) 프레임워크 아키텍처에 따라, 개별 인프라 자산(CI)의 실질적인 관리 책임 조직인 'Managed by Group' 필드는 해당 자산이 귀속되어 서비스를 제공하는 'Technical Service Offering' 레코드에 지정된 그룹 값으로부터 동적으로 동기화 및 상속받는 것이 표준 가이드라인입니다. 따라서 가장 구체적인 서비스 운영 주체인 Windows Support(C)가 최종 반영됩니다. Class Manager의 기본 설정(A)은 범용 기본값에 불과하여 오버라이드되며, Change Group(B)은 변경 통제용 필드로 데이터 목적이 달라 오답입니다."
  },
  {
    "id": 108,
    "title": "A CMDB Administrator is configuring IRE (Identification and Reconciliation Engine) guidelines. While working within the CI Class Manager, they observe the 'Health Inclusion Rules' tab for a specific CI class. How are these sub-rules utilized by the engine during processing?",
    "options": [
      { "letter": "A", "text": "To narrow the operational scope of CIs that are actively included and evaluated during the identification and quality-assessment process." },
      { "letter": "B", "text": "To filter and reduce the raw payload data being ingested from external discovery sources prior to entering the instance." },
      { "letter": "C", "text": "To reconcile and authorize specific configuration attributes based on the data source's configured priority levels." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB 아키텍처에서 Health Inclusion Rules(건강도 포함 규칙)는 특정 클래스의 자산 중 건강도 진단 및 식별 프로세스의 대상이 될 레코드의 범위를 좁히는(Narrow the scope) 필터 역할을 수행합니다. 예를 들어 '가동 중(Operational)'인 자산만 솎아내어 품질 점수를 매기도록 통제합니다. 유입 데이터를 사전 차단하는 기능(B)이나 소스 우선순위를 정하는 Reconciliation Rules(C)와는 데이터 작동 단계가 전혀 다르므로 오답입니다."
  },
  {
    "id": 109,
    "title": "A ServiceNow administrator needs to create custom CMDB classes to support specialized proprietary infrastructure and wants to adhere to platform best practices for table naming to eliminate future upgrade conflicts. What is the mandatory starting prefix required for all custom CMDB tables extended in the system?",
    "options": [
      { "letter": "A", "text": "cmdb_ci_" },
      { "letter": "B", "text": "u_cmdb_ci_" },
      { "letter": "C", "text": "u_ci_cmdb_" },
      { "letter": "D", "text": "ci_cmdb_" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow 아키텍처 거버넌스 가이드라인에 따라, 고객이 생성하는 모든 사용자 정의(User-defined) 구성 요소에는 'u_' 접두사가 강제됩니다. 따라서 CMDB 계층 구조를 확장하여 생성하는 모든 커스텀 클래스 테이블의 물리적 명칭은 반드시 'u_cmdb_ci_' 패턴으로 시작해야만 향후 본사 업그레이드 패치 시 순정(OOTB) 테이블과의 명칭 충돌 및 그에 따른 기술 부채를 원천 차단할 수 있습니다."
  },
  {
    "id": 110,
    "title": "A CMDB Configuration Manager needs to view and update core identification rules for a specific CI class to adjust duplication thresholds. Where within the ServiceNow platform can these existing identification rules be officially viewed and configured? (Choose two)",
    "options": [
      { "letter": "A", "text": "API Integrations application" },
      { "letter": "B", "text": "IRE Application portal" },
      { "letter": "C", "text": "CI Class Manager" },
      { "letter": "D", "text": "CI Identifiers module" }
    ],
    "answer": ["C", "D"],
    "explanation": "정답: C, D. ServiceNow CMDB에서 자산 식별 가드레일을 통제하는 방법은 두 가지 경로가 있습니다. GUI 통합 환경을 제공하는 'CI Class Manager'(C) 내의 Identification 탭을 이용하거나, 내비게이터에서 'CI Identifiers'(D) 모듈을 검색하여 백엔드 레코드 리스트에 직접 접근하는 방식입니다. API 설정(A)은 연동 통로일 뿐이며, 'IRE' 자체는 백엔드 구동 알고리즘의 이름일 뿐 독립된 메뉴 명칭(B)으로 존재하지 않으므로 오답입니다."
  },
  {
    "id": 111,
    "title": "From the CMDB Workspace CI Details view, to investigate and identify active operational tickets such as incidents or problems directly affecting a selected CI, which side panel provides centralized visibility and detail of these transactional records?",
    "options": [
      { "letter": "A", "text": "Overview panel" },
      { "letter": "B", "text": "Application Services panel" },
      { "letter": "C", "text": "Related Items panel" },
      { "letter": "D", "text": "Attributes panel" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB Workspace 아키텍처 가이드라인에 따라, 특정 자산(CI)에 걸려 있는 활성 인시던트(Incidents), 문제(Problems) 등 연계된 ITSM 프로세스 레코드들의 실시간 현황은 'Related Items' 패널을 통해 통합 가시성을 확보할 수 있습니다. 자산의 기본 스펙 요약을 보여주는 Overview(A), 상위 서비스 의존성을 보여주는 Application Services(B), 스키마 필드를 관리하는 Attributes(D) 패널은 외부 티켓 리스트 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 112,
    "title": "A CMDB Administrator wants to analyze CIs and CI classes that are violating data policies by missing designated required or recommended key attributes. Which CMDB Health Dashboard scorecard specifically quantifies this attribute-population level?",
    "options": [
      { "letter": "A", "text": "Compliance" },
      { "letter": "B", "text": "Correctness" },
      { "letter": "C", "text": "Completeness" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 건강도 체계에서 지정된 필수(Required) 또는 권장(Recommended) 필드 속성 값이 채워지지 않고 누락된 자산 현황을 계측하고 관리하는 고유 스코어카드는 'Completeness(완전성)'입니다. 감사의 정책 준수 여부를 검사하는 Compliance(A)나 중복/노후/고아 자산을 추적하는 Correctness(B)는 속성 데이터의 누락률 자체를 산출하는 지표 구역이 아니므로 오답입니다."
  },
  {
    "id": 113,
    "title": "A platform owner is aligning the corporate CMDB architecture with the CSDM 4.0 framework and needs to map product online monitoring systems used exclusively by the IT operations team. Which CSDM domain should the platform owner utilize to properly host these technical monitoring infrastructure services?",
    "options": [
      { "letter": "A", "text": "Service Delivery (Manage Technical Services)" },
      { "letter": "B", "text": "Foundation" },
      { "letter": "C", "text": "Build and Integration (Build)" },
      { "letter": "D", "text": "Service Consumption (Sell or Consume)" },
      { "letter": "E", "text": "Design and Planning (Design)" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 4.0 표준 가이드라인에 따라, IT 운영 팀이 시스템 관제 및 성능 감시를 위해 내부적으로 사용하는 'Product Online Monitoring Systems'는 대표적인 기술 서비스(Technical Service) 모델에 해당합니다. 따라서 'IT를 위한 IT 관리'를 전담하는 'Service Delivery (Manage Technical Services)' 도메인에 매핑하는 것이 아키텍처 표준입니다. 기초 데이터를 다루는 Foundation(B), 개발 단계를 다루는 Build(C), 현업 소비 장소인 Consumption(D), 개념 설계를 담당하는 Design(E) 도메인은 모두 오답입니다."
  },
  {
    "id": 114,
    "title": "Within the CI Class Manager interface, which specific configuration tab must a CMDB Administrator access to design and deploy a rule tasked to uniquely identify CIs through the IRE?",
    "options": [
      { "letter": "A", "text": "Identification Rule tab" },
      { "letter": "B", "text": "Reconciliation Rules tab" },
      { "letter": "C", "text": "Basic Info tab" },
      { "letter": "D", "text": "Pinned Classes list" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB 아키텍처 가이드라인에 따라, 유입되는 자산 데이터의 고유성을 판별하여 중복을 차단하는 식별 규칙(Identification Rules) 및 엔트리는 'CI Class Manager' 내부의 'Identification Rule' 탭에서 시각적으로 설계 및 구성합니다. 소스별 데이터 수정 권한 우선순위를 지정하는 Reconciliation Rules(B), 테이블 기본 메타데이터를 보여주는 Basic Info(C), 즐겨찾기 기능인 Pinned Classes(D)는 식별 규칙 편집 기능을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 115,
    "title": "Within the CI Class Manager interface, which specific UX feature allows a CMDB Administrator to minimize search overhead and ensure easy, rapid navigation back to a frequently accessed configuration class?",
    "options": [
      { "letter": "A", "text": "Identification Rule tab" },
      { "letter": "B", "text": "Reconciliation Rules tab" },
      { "letter": "C", "text": "Basic Info tab" },
      { "letter": "D", "text": "Pinned Classes list" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CI Class Manager 아키텍처 환경에서 자주 관리하고 모니터링하는 클래스로 신속하게 복귀할 수 있도록 돕는 즐겨찾기 숏컷 기능의 명칭은 'Pinned Classes'입니다. 압정(Pin) 아이콘을 눌러 좌측 상단에 고정해 두면 수천 개의 클래스 트리 사이에서 스크롤 낭비 없이 1초 만에 진입이 가능합니다. 선지 A, B, C는 특정 클래스 진입 후에 개별 규칙을 세팅하는 편집용 '설정 탭'에 해당하므로 탐색 도구를 묻는 지문의 정답이 될 수 없습니다."
  },
  {
    "id": 116,
    "title": "Within the CI Class Manager interface, which specific configuration tab must a CMDB Administrator utilize to define and authorize which external data sources are permitted to update specific CI Attributes based on a trusted priority hierarchy?",
    "options": [
      { "letter": "A", "text": "Identification Rule tab" },
      { "letter": "B", "text": "Reconciliation Rules tab" },
      { "letter": "C", "text": "Basic Info tab" },
      { "letter": "D", "text": "Pinned Classes list" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 다중 소스(Multi-source) 거버넌스 아키텍처에 따라, 다양한 외부 수집 도구들이 유입될 때 자산 속성(Attributes) 필드 데이터를 오염시키지 못하도록 데이터 소스별 업데이트 권한과 우선순위를 관리하는 독립 설정 영역은 'Reconciliation Rules' 탭이 유일하므로 B가 완벽한 정답입니다. 중복 차단 식별을 다루는 Identification Rule(A), 기본 스키마 표지인 Basic Info(C), 내비게이션 숏컷인 Pinned Classes(D)는 소스 우선순위 제어권을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 117,
    "title": "Within the CI Class Manager interface, which specific configuration tab must a CMDB Administrator access to assign or update the visual class icon used to represent a specific configuration category across Dependency Views and Workspaces?",
    "options": [
      { "letter": "A", "text": "Identification Rule tab" },
      { "letter": "B", "text": "Reconciliation Rules tab" },
      { "letter": "C", "text": "Basic Info tab" },
      { "letter": "D", "text": "Pinned Classes list" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 메타데이터 표준에 따라, 특정 클래스의 물리적 테이블 속성이나 의존성 관계 도면(Dependency Views) 등 플랫폼 전역에서 시각적 식별성을 높이기 위해 사용되는 '클래스 고유 아이콘(Class Icon)' 설정 기능은 'CI Class Manager'의 가장 첫 번째 화면인 'Basic Info' 탭에서 제어하므로 C가 완벽한 정답입니다. 식별 규칙을 정하는 Identification(A), 소스 우선순위를 정하는 Reconciliation(B), 즐겨찾기 도구인 Pinned Classes(D)는 시각적 아이콘 편집 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 118,
    "title": "When the Identification and Reconciliation Engine (IRE) processes incoming infrastructure payload data and discovers a multi-match scenario where two or more identical CIs already exist in the CMDB, what operational artifact is automatically generated by the platform?",
    "options": [
      { "letter": "A", "text": "Identification Rules" },
      { "letter": "B", "text": "De-duplication Task" },
      { "letter": "C", "text": "Reconciliation Rule" },
      { "letter": "D", "text": "IRE Data Source Rule" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 아키텍처 가이드라인에 따라, IRE가 데이터를 식별하는 도중 2개 이상의 동일 자산 레코드가 매치되는 '다중 매칭(Multi-match)' 오류가 발생하면 시스템은 기존 데이터 오염을 막기 위해 자동 업데이트를 차단하고, 관리자가 수동으로 병합 조치할 수 있도록 'De-duplication Task(중복 제거 태스크)' 티켓을 자동으로 발행하므로 B가 완벽한 정답입니다. 선지 A, C, D는 관리자가 사전에 구축하는 '정적 규칙 설정' 항목들이므로 오답입니다."
  },
  {
    "id": 119,
    "title": "The Change Management team wants to implement a critical security patch across multiple infrastructure Configuration Items (CIs) simultaneously. To streamline operations, they plan to utilize a query-based Dynamic CI Group. Which specific field on the Change Request form must be populated with this Dynamic CI Group record to trigger the automatic population of all individual target assets under the Affected CIs related list?",
    "options": [
      { "letter": "A", "text": "Configuration Item" },
      { "letter": "B", "text": "Business Service" },
      { "letter": "C", "text": "Service Offering" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 및 ITSM 표준 가이드라인에 따라, Dynamic CI Group은 그 자체가 하나의 구성 항목(CI)으로 데이터베이스에 존재합니다. 따라서 Change Request 폼의 메인 'Configuration Item' 필드에 해당 동적 그룹을 입력해야만, 시스템이 그룹의 조건절 쿼리를 실행하여 하위의 모든 실제 대상 인프라 자산들을 'Affected CIs' 연관 리스트에 자동으로 전파 및 매핑해 줍니다. Business Service(B)와 Service Offering(C)은 장애 영향 범위를 측정하기 위한 서비스 관점 필드이므로 오답입니다."
  },
  {
    "id": 120,
    "title": "A CMDB Administrator is utilizing the Duplicate CI Remediator wizard within the CMDB Workspace to resolve redundant configuration records. In the opening step of the workflow, a 'Main CI' must be established as the master target. Which data attributes and metrics are officially provided by the interface to help identify and select the optimal Main CI? (Choose two)",
    "options": [
      { "letter": "A", "text": "Oldest Created timestamp" },
      { "letter": "B", "text": "Least Related Items count" },
      { "letter": "C", "text": "Most Related Items count" },
      { "letter": "D", "text": "Newest Created timestamp" }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB 보정 가이드라인에 따라, 중복 병합 시 시스템 무결성을 지키기 위해 '가장 먼저 생성되어 기존 참조 키를 안정적으로 유지하고 있는 레코드(Oldest Created)'와 '현재 매핑된 인프라 관계 및 티켓 링크가 가장 많아 이관 부하를 최소화할 수 있는 레코드(Most Related Items)'를 메인 자산(Main CI)으로 선정하는 것이 표준 아키텍처 규칙입니다. 반대 성격인 B와 D는 데이터 단절 및 유실 리스크를 높이므로 오답입니다."
  },
  {
    "id": 121,
    "title": "An ITOM Architect is using the CMDB Query Builder to construct a reporting layout to identify: Application Services that contain a Database CI with active Incidents, along with all infrastructure components related to those application services. Which development steps are required within the Query Builder canvas to achieve this hybrid blueprint? (Choose two)",
    "options": [
      { "letter": "A", "text": "Create a CMDB Query to map the structural relationships between the Application Services and their dependent infrastructure CIs." },
      { "letter": "B", "text": "Create a Service Mapping Query to natively query and filter active incident transaction records linked to the database." },
      { "letter": "C", "text": "Drag and add a non-CMDB table (Incident table) from the palette and create a reference link to the Database CI node." },
      { "letter": "D", "text": "Utilize a Service Mapping Query structure to dynamically append non-CMDB architectural tables into the core topology." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB 쿼리 빌더에서 자산 간의 의존성 관계 토폴로지를 그리는 기본 뼈대는 'CMDB Query'(A)로 시작해야 합니다. 여기에 자산 데이터가 아닌 ITSM 운영 데이터(Incident)를 조건 결합하려면, 좌측 팔레트에서 'Non-CMDB table'(C) 섹션을 확장하여 Incident 테이블을 드래그한 뒤 Database 노드와 참조 링크로 매핑해주어야 합니다. Service Mapping Query(B, D)는 순수 자동화 서비스 맵 탐색 전용 엔진으로 외부 트랜잭션 테이블 조인 인터페이스를 제공하지 않으므로 오답입니다."
  },
  {
    "id": 122,
    "title": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard application to enhance data integrity. What are the primary structural benefits of implementing this store application? (Choose two)",
    "options": [
      { "letter": "A", "text": "Automatically checks and verifies that critical configuration data is valid, contextualized, and properly configured according to CSDM standards." },
      { "letter": "B", "text": "Executes fully automated background scripts to instantly delete or remediate potential data risks without manual oversight." },
      { "letter": "C", "text": "Provides step-by-step interactive playbooks to dynamically assist administrators in the safe remediation of identified potential data risks." },
      { "letter": "D", "text": "Provides a comprehensive customization framework enabling administrators to script and deploy custom validation metrics inside the dashboard." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CMDB Data Foundations Dashboard는 CSDM 규격에 입각하여 핵심 인프라 데이터의 유효성과 구성 정합성을 검증(A)해 주는 주 진단 엔진입니다. 또한, 데이터의 강제 자동 변형으로 인한 참조 무결성 파괴를 방지하기 위해 임의 자동 조치(B)를 취하는 대신, 어드민에게 안전한 표준 클렌징 절차를 안내하는 전용 'Playbooks'(C)를 제공하여 조치를 보조하는 것이 아키텍처적 본질입니다. 커스텀 메트릭 프레임워크 빌드 기능(D)은 포함하지 않으므로 오답입니다."
  },
  {
    "id": 123,
    "title": "A Business Relationship Manager (BRM) is implementing Service Portfolio Management (SPM) to formally package and publish defined service offerings to business consumers via the Service Catalog. Which Common Service Data Model (CSDM) 4.0 domain best aligns with this requirement of catalog consumption and interaction?",
    "options": [
      { "letter": "A", "text": "Build and Integration (Build)" },
      { "letter": "B", "text": "Service Consumption (Sell/Consume)" },
      { "letter": "C", "text": "Design and Planning (Design)" },
      { "letter": "D", "text": "Service Delivery (Manage Technical Services)" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 4.0 거버넌스 원칙에 따라, 최종 비즈니스 사용자(Business Consumers)에게 서비스 오퍼링을 노출하여 실제 요청 및 소비를 발생시키는 단계를 관할하는 영역은 'Service Consumption (Sell/Consume)' 도메인이 유일합니다. 개념적 기획서와 구조를 정의하는 Design(C) 단계나 내부 IT 인프라 운영을 제어하는 Service Delivery(D) 단계는 소비자와의 직접적인 소비 계약 및 청구 거래가 일어나는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 124,
    "title": "A retail organization wants to ensure that critical incidents affecting high-revenue, customer-facing digital storefronts are prioritized automatically within the ITSM pipeline to minimize financial loss. Which specific CSDM attribute should be populated on the service layer to dynamically drive this financial impact triage?",
    "options": [
      { "letter": "A", "text": "Assignment Group defined on the infrastructure CI record" },
      { "letter": "B", "text": "Affected CIs cataloged in the Incident related list" },
      { "letter": "C", "text": "Service Classification configured on the Technical Service parent record" },
      { "letter": "D", "text": "Business Criticality configured on the Service Offering record" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CSDM 및 ITIL 모범 사례에 따라, 특정 대고객 서비스가 비즈니스 및 매출에 미치는 경제적 치명도는 'Service Offering' 레코드 내부의 'Business Criticality' 속성을 통해 정의됩니다. 인시던트 발생 시 이 속성 값을 기반으로 티켓의 Impact와 Urgency가 연산되어 최우선 순위(P1)로 수평 전파됩니다. 담당 팀을 지정하는 Assignment Group(A), 피해 장비를 나열하는 Affected CIs(B), 서비스의 기술적 종류를 구분하는 Service Classification(C)은 우선순위 산정 메커니즘을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 125,
    "title": "Where can a ServiceNow administrator or asset manager natively perform Natural Language Queries (NLQ) to search and filter configuration item data using plain English sentences instead of traditional conditional filter builders?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "CI Class Manager" },
      { "letter": "C", "text": "CMDB Workspace" },
      { "letter": "D", "text": "CMDB Health Dashboard" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow Next Experience 가이드라인에 따라, 사용자가 일상적인 자연어 문장(NLQ)을 입력하여 CMDB 데이터를 지능적으로 검색하고 추출할 수 있는 전용 AI 인터페이스는 'CMDB Workspace'의 메인 검색 허브에 탑재되어 있습니다. 자산 수명 주기 정책을 관리하는 Data Manager(A), 스키마 규칙을 구성하는 Class Manager(B), 품질 점수를 모니터링하는 Health Dashboard(D)는 대화형 자연어 질의 기능을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 126,
    "title": "A CMDB Administrator needs to prevent duplicate CI creation and enforce strict data-source serialization when Import Sets process vendor shipment files. Which approach represents the ServiceNow programmatic best practice to route transform map data directly through the Identification and Reconciliation Engine (IRE)?",
    "options": [
      { "letter": "A", "text": "Create custom comparison rules inside the core IRE configuration panel." },
      { "letter": "B", "text": "Invoke the CMDBTransformUtil API within an 'onBefore' transform script to execute identifyAndReconcile processing." },
      { "letter": "C", "text": "Enable the global system property that automatically forces all legacy transform maps to utilize the IRE." },
      { "letter": "D", "text": "Configure a multi-field coalesce constraint on the targeted attribute fields within the transform map field mapping interface." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 데이터 통합 가이드라인에 따라, 외부 플랫 파일이나 임포트 세트 데이터를 적재할 때 중복 생성을 원천 차단하고 순정 IRE의 식별/조정 규칙을 적용하는 표준 솔루션은 트랜스폼 스크립트 내에서 'CMDBTransformUtil' API를 구동하는 것입니다. 플랫폼 공통 기능인 단순 Coalesce(D) 매칭은 CMDB 계층 구조 및 다중 소스 거버넌스 룰을 무시하여 데이터 오염을 유발하므로 금지되며, 자동 연동 프로퍼티(C)나 비교 규칙(A)은 시스템에 존재하지 않는 가상의 개념이므로 오답입니다."
  },
  {
    "id": 127,
    "title": "A CMDB Administrator identifies that multiple infrastructure Configuration Items (CIs) lack a designated Support Group. According to CSDM 4.0 data governance best practices, how should the Support Group attribute be automatically populated and dynamically maintained on these infrastructure records?",
    "options": [
      { "letter": "A", "text": "By linking the infrastructure records to a Dynamic CI Group container." },
      { "letter": "B", "text": "By inheriting the generic classification attributes defined on the parent Technical Service record." },
      { "letter": "C", "text": "By configuring a global default fallback value within the CI Class Manager interface." },
      { "letter": "D", "text": "By populating the Support Group on the associated Technical Service Offering record, which automatically synchronizes down to the underlying CIs." }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CSDM 4.0 표준 아키텍처 가이드라인에 따라, 인프라 자산(CI)의 실질적인 운영 및 장애 배정을 제어하는 'Support Group' 필드는 해당 자산이 귀속되어 실제 운영 계약을 수행하는 'Technical Service Offering' 레코드로부터 동적으로 동기화(Dynamic Group Sync) 및 상속받는 것이 마스터 표준입니다. 연결 통로인 Dynamic CI Group(A)이나 추상적 부모 레이어인 Technical Service(B)는 속성의 진실의 원천이 아니며, Class Manager 설정(C)은 범용 기본값에 불과하여 서비스 기반 동기화 대상에서 밀려나므로 오답입니다."
  },
  {
    "id": 128,
    "title": "An ITOM Administrator is leveraging the CMDB Query Builder to create a monitoring report to locate: Application Services that host a Database CI with active Incidents, along with all infrastructure components tied to those application services. Which layout steps must be executed within the design canvas to construct this specific query? (Choose two)",
    "options": [
      { "letter": "A", "text": "Drag and add a non-CMDB table (such as the Incident table) from the palette and create a reference connection to the Database CI node." },
      { "letter": "B", "text": "Utilize a Service Mapping Query framework to natively integrate non-CMDB transactional tables into the topology." },
      { "letter": "C", "text": "Deploy a Service Mapping Query to query and filter active incident records directly tied to the database configuration." },
      { "letter": "D", "text": "Initialize a core CMDB Query to structurally map the configuration relationships between the Application Services and their related infrastructure CIs." }
    ],
    "answer": ["A", "D"],
    "explanation": "정답: A, D. ServiceNow CMDB 쿼리 빌더 아키텍처에 따라, 자산 클래스 간의 인프라 및 서비스 의존성 토폴로지를 매핑하는 일차적인 컨테이너는 'CMDB Query'(D)입니다. 이 뼈대 위에 자산 데이터가 아닌 외부 ITSM 트랜잭션 레코드(Incident)의 상태를 결합하려면, 캔버스 팔레트에서 'Non-CMDB table'(A) 기능을 사용하여 Incident 테이블을 추가하고 해당 데이터베이스 노드와 참조 링크로 조인해 주어야 합니다. Service Mapping Query(B, C)는 탑다운 자동화 서비스 맵의 경로 자체를 탐색하는 특화 엔진으로 비CMDB 테이블 조인 기능이 없으므로 오답입니다."
  },
  {
    "id": 129,
    "title": "A CMDB Administrator is establishing a data hygiene strategy to ensure that infrastructure data that is no longer useful, active, or applicable is systematically purged. Which policy-driven governance management tool in ServiceNow is utilized to automate the lifecycle of CI data, such as executing data retirement, archiving, and removal?",
    "options": [
      { "letter": "A", "text": "CI Class Manager" },
      { "letter": "B", "text": "CMDB and CSDM Data Foundations Dashboard" },
      { "letter": "C", "text": "CMDB Health Dashboard" },
      { "letter": "D", "text": "CMDB Data Manager" },
      { "letter": "E", "text": "De-duplication Template" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB 아키텍처 가이드라인에 따라, 자산의 탄생부터 폐기까지의 흐름을 통제하고 낡은 쓰레기 데이터를 시스템에서 안전하게 은퇴(Retire), 보관(Archive), 삭제(Delete) 처리하도록 정책 기반 워크플로우를 가동하는 전용 거버넌스 도구는 'CMDB Data Manager'입니다. 클래스 뼈대를 구성하는 Class Manager(A)나 데이터 품질 상태를 모니터링하고 진단하기만 하는 대시보드 툴(B, C)은 실제 데이터의 라이프사이클 액션 및 삭제 트랜잭션을 집행하지 못하므로 오답입니다."
  },
  {
    "id": 130,
    "title": "A CMDB Administrator is working inside the Centralized CMDB Workspace interface. Which of the following governance and lifecycle data management actions can be directly initiated and executed from this specific workspace? (Choose three)",
    "options": [
      { "letter": "A", "text": "Configure and execute a ServiceNow Discovery network scan schedule." },
      { "letter": "B", "text": "Design and deploy a CMDB Data Manager data certification policy." },
      { "letter": "C", "text": "Launch the Duplicate CI Remediator to merge and resolve redundant asset records." },
      { "letter": "D", "text": "Access the CI Class Manager hierarchy to extend and create a new CMDB class." }
    ],
    "answer": ["B", "C", "D"],
    "explanation": "정답: B, C, D. ServiceNow CMDB 워크스페이스 아키텍처는 데이터 거버넌스의 통합 관리를 지향합니다. 따라서 라이프사이클 정책을 수립하는 Data Manager(B), 실시간 품질 오류를 청소하는 중복 제거 보정 마법사(C), 스키마 뼈대를 디자인하는 Class Manager(D) 기능은 모두 워크스페이스 내부 탭과 타일 형태로 빌트인 되어 있어 즉각 실행이 가능합니다. 반면, 네트워크 통신 및 IP 스캔을 직접 제어하는 Discovery 실행 기능(A)은 독립된 ITOM Discovery 관리 도메인의 주소지이므로 오답입니다."
  },
  {
    "id": 131,
    "title": "A CMDB Administration group wants to establish an automated governance pipeline to receive remediation tasks whenever the [Support Group] or [Managed By Group] fields are left blank on operational Linux servers. Which combination of ServiceNow modules must be utilized to: 1) Designate these specific attributes as recommended/required, and 2) Enable the automated generation of health tasks upon validation failure?",
    "options": [
      { "letter": "A", "text": "Technical Service Offerings and Dynamic CI Groups" },
      { "letter": "B", "text": "CMDB Workspace and Scheduled Jobs" },
      { "letter": "C", "text": "Dynamic CI Groups and CMDB Groups" },
      { "letter": "D", "text": "CI Class Manager and Health Preferences" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB 건강도(Health) 아키텍처 가이드라인에 따라, 특정 클래스 자산의 필수/권장 속성 데이터 완벽성 기준을 디자인하는 주소지는 'CI Class Manager'(Health > Completeness 탭)입니다. 그리고 이 기준을 만족하지 못하는 결함 자산이 발견되었을 때 시스템이 자동으로 'CMDB Health Task' 티켓을 발행하도록 글로벌 가드레일 스위치를 통제하는 모듈은 'Health Preferences'가 유일하므로 D가 완벽한 정답입니다."
  },
  {
    "id": 132,
    "title": "The CMDB Configuration Management team has achieved a mature, trusted CMDB by integrating discovered infrastructure data, mapping non-discoverable attributes (such as change and support groups via CSDM), and enabling top-down Service Mapping. How will these architectural data improvements directly enhance the Change Management process? (Choose two)",
    "options": [
      { "letter": "A", "text": "Automatically schedules and deploys system-wide code changes without requiring human review or technical approval workflows." },
      { "letter": "B", "text": "Provides precise visibility and analytical insight into the potential downstream business impact of the planned change." },
      { "letter": "C", "text": "Guarantees that no production changes will ever result in unplanned service downtime, regardless of execution or planning quality." },
      { "letter": "D", "text": "Enables the auto-population of the Assignment Group field to dynamically and accurately route change requests to the responsible technical teams." }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. ServiceNow ITIL 및 CMDB 결합 모범 사례에 따라, 서비스 매핑이 완료된 CMDB는 변경 요청 시 상위 비즈니스 서비스로의 피해 전파 경로를 계산하여 명확한 잠재적 영향도 통찰력(B)을 제공합니다. 또한 CSDM 기준 데이터 매핑 덕분에 대상 자산 입력 시 관리 운영 조직 정보가 'Assignment Group' 필드에 자동으로 팝업(D)되어 동적 라우팅이 완료됩니다. 인간의 검토 없는 임의 자동 배포(A)나 모든 장애 다운타임을 무조건 막아준다는 마법 같은 논리(C)는 플랫폼 거버넌스 사상에 위배되는 오답입니다."
  },
  {
    "id": 133,
    "title": "A CMDB Administrator is migrating an enterprise instance to align with CSDM 4.0 life cycle best practices. In the migration tool, the administrator executes the 'Enable Life Cycle Sync' function. To ensure data integrity and prevent operational data corruption, what must be the mandatory next step in the migration workflow?",
    "options": [
      { "letter": "A", "text": "Modify and fix the new CSDM Life Cycle Stage values so they strictly bend and conform to legacy data anomalies." },
      { "letter": "B", "text": "Immediately proceed to full activation of the CSDM Life Cycle field mappings globally across the platform." },
      { "letter": "C", "text": "Investigate and resolve any incomplete or conflicting field mappings highlighted within the generated Discrepancy Report." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CSDM 라이프사이클 마이그레이션 아키텍처에 따라, Life Cycle Sync를 활성화하면 시스템은 기존 레거시 상태 값과 표준 수명 주기 값 간의 충돌 목록을 'Discrepancy Report'로 뿜어냅니다. 충돌 상태를 방치하고 규칙을 강제 활성화(B)하면 데이터가 오염되므로, 반드시 보고서에 기록된 불일치 문제를 먼저 해결(C)하는 것이 안전 가드레일 순서입니다. 표준 값을 구형 값에 맞추는 행위(A) 또한 거버넌스 사상에 위배되므로 오답입니다."
  },
  {
    "id": 134,
    "title": "A CSDM Data Manager is auditing the organization's enterprise model within the CSDM Data Foundations Dashboard. They need to view metrics evaluating how effectively Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) align with blueprint best practices. Which specific maturity tab provides these exact technical service layer metrics?",
    "options": [
      { "letter": "A", "text": "Crawl" },
      { "letter": "B", "text": "Walk" },
      { "letter": "C", "text": "Run" },
      { "letter": "D", "text": "Fly" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 데이터 거버넌스 가이드라인에 따라, CSDM Data Foundations Dashboard는 성숙도 로드맵 단계를 기반으로 탭을 구성합니다. 비즈니스 애플리케이션의 뼈대를 보는 1단계는 Crawl(A)이며, IT 운영 조직과 직결되는 'Technical Service' 및 'Technical Service Offering'의 구축 정합성 지표를 호스팅하는 2단계는 'Walk'(B) 탭이 유일합니다. Business Service를 진단하는 3단계 Run(C)이나 Business Capability를 진단하는 최종 4단계 Fly(D)는 오답입니다."
  },
  {
    "id": 135,
    "title": "A CMDB Architect is evaluating data ingestion methods to import disparate infrastructure telemetry. What are the key architectural characteristics or functions of ServiceNow IntegrationHub ETL compared to legacy transform maps? (Choose two)",
    "options": [
      { "letter": "A", "text": "It provides a robust engine capable of multi-target scaling to distribute incoming third-party payloads into both CMDB classes and non-CMDB tables simultaneously." },
      { "letter": "B", "text": "It orchestrates active system discovery probes and patterns to execute network-level data collection directly into the database." },
      { "letter": "C", "text": "It natively incorporates and enforces the Identification and Reconciliation Engine (IRE) processing framework without requiring manual scripting." },
      { "letter": "D", "text": "It serves as the standalone, out-of-the-box system application exclusively dedicated to managing the Microsoft SCCM and Intune store integration plugins." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow 데이터 통합 아키텍처 가이드라인에 따라, IntegrationHub ETL은 로코드 기반 인터페이스 내부에 순정 IRE(C)를 기본 내장하여 데이터 오염과 중복을 자동으로 방지합니다. 또한 레거시 트랜스폼과 달리 단일 소스를 기반으로 CMDB 자산과 일반 비CMDB 테이블(A) 모두에 다차원 동시 적재 처리가 가능한 RTE 아키텍처를 기반으로 합니다. 네트워크 탐색을 수행하는 것은 Discovery(B)이며, SCCM 수집 전용 패키지는 Service Graph Connector(D)이므로 오답입니다."
  },
  {
    "id": 136,
    "title": "A CMDB Administrator wants to configure and evaluate the Staleness metric within the CMDB Health Dashboard (Correctness Scorecard). Which foundational platform system field is utilized by the health engine to calculate the exact duration of a CI's staleness regardless of its ingestion source?",
    "options": [
      { "letter": "A", "text": "Last modified on (last_modified)" },
      { "letter": "B", "text": "Created (sys_created_on)" },
      { "letter": "C", "text": "Updated (sys_updated_on)" },
      { "letter": "D", "text": "First discovered (first_discovered)" },
      { "letter": "E", "text": "Most recent discovery (last_discovery)" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 건강도(Health) 가이드라인에 따라, 고수 자산(Staleness)은 자산 데이터가 일정 기간 동안 전혀 관리되거나 리프레시되지 않은 상태를 의미합니다. 건강도 엔진은 특정 수집 도구(Discovery)의 유무와 관계없이 시스템 전역에 공통 적용되는 레코드 최종 수정 시간 필드인 'sys_updated_on(Updated)' 값을 추적하여 임계치 초과 여부를 연산하므로 C가 완벽한 정답입니다. Discovery 전용 필드인 last_discovery(E)나 최초 생성일인 sys_created_on(B)은 기준 필드로 사용되지 않으므로 오답입니다."
  },
  {
    "id": 137,
    "title": "A Configuration Manager needs architectural guidance on how to correctly map and establish operational relationships between discovered infrastructure CIs, Technical Service Offerings, and underlying Application Services within the platform. Which Common Service Data Model (CSDM) 4.0 domain encapsulates the framework for defining these operational runtime relationships?",
    "options": [
      { "letter": "A", "text": "Service Consumption (Sell or Consume)" },
      { "letter": "B", "text": "Foundation" },
      { "letter": "C", "text": "Design and Planning (Design)" },
      { "letter": "D", "text": "Build and Integration (Build)" },
      { "letter": "E", "text": "Service Delivery (Manage Technical Services)" }
    ],
    "answer": ["E"],
    "explanation": "정답: E. ServiceNow CSDM 4.0 아키텍처 가이드라인에 따라, 실제 가동 중인 인프라 자산(Infrastructure CIs)과 이들이 형성하는 실시간 서비스 인스턴스(Application Services), 그리고 이를 지원하는 IT 내부 엔지니어 조직(Technical Service Offerings) 간의 수직적 운영 관계성을 제어하는 전담 구역은 'Service Delivery (Manage Technical Services)' 도메인입니다. 개념적 기획서와 메타데이터만 정의하는 Design(C) 단계나 대고객 판매 접점인 Service Consumption(A) 단계는 실전 런타임 자산들의 물리적 관계선을 통제하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 138,
    "title": "A CMDB Administrator has constructed multiple Technology Management Service Offerings (Technical Service Offerings) and associated them with Dynamic CI Groups to automate group alignment for the underlying member CIs. Which specific operational group attributes are natively synchronized down to the individual member CIs from the parent offering record?",
    "options": [
      { "letter": "A", "text": "Owned by Group" },
      { "letter": "B", "text": "Managed by Group" },
      { "letter": "C", "text": "Approval Group" },
      { "letter": "D", "text": "Support Group" }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. ServiceNow CSDM 4.0 및 ITIL 거버넌스 아키텍처에 따라, Technical Service Offering이 Dynamic CI Group 관계선을 통해 하위 인프라 자산들과 정렬될 때, 플랫폼의 내장 동기화 엔진(Dynamic Group Sync)은 실시간 운영계 핵심 데이터인 'Managed by Group'(B)과 'Support Group'(D) 필드만을 자동 전파 및 동기화합니다. 재무적 소유권을 다루는 Owned by Group(A)이나 컴플라이언스 변경 승인을 제어하는 Approval Group(C)은 개별 자산 또는 별도 자산 도메인의 고유 권한을 보장하기 위해 자동 동기화 파이프라인에서 제외되므로 오답입니다."
  },
  {
    "id": 139,
    "title": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness scorecard for the Server class (Total: 60,000 records). The Duplicate metric shows healthy CIs evaluated as 59,000 of 60,000. However, the Orphan metric displays healthy CIs evaluated as 45,000 of 50,000. Which system configuration best explains this target denominator variance between the two sub-metrics?",
    "options": [
      { "letter": "A", "text": "The Orphan metric has a static CMDB Group scope restriction configured for the Server class." },
      { "letter": "B", "text": "The Duplicate metric has a Health Inclusion Rule active that dynamically shrinks the base evaluation dataset." },
      { "letter": "C", "text": "The Orphan metric has a Health Inclusion Rule active that filters the Server class to evaluate a targeted subset of records." },
      { "letter": "D", "text": "The Duplicate metric has a dynamic CMDB Group framework configured to append external records into the baseline." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 건강도(Health) 아키텍처 가이드라인에 따라, 특정 하위 메트릭의 평가 대상 분모(모수) 규모를 조건부로 필터링하여 제한하는 전용 제어 도구는 'Health Inclusion Rule'입니다. Orphan 메트릭에만 특정 상태 값(예: Operational)을 타겟팅하는 포함 규칙이 활성화되어 있었기 때문에 분모가 50,000대로 축소되어 연산된 것입니다. Duplicate 메트릭은 규칙이 없어 전체 60,000대를 다 평가했습니다. 단순 논리 컨테이너인 CMDB Group(A, D)은 메트릭별 평가 분모 자산을 동적으로 필터링 차단하는 엔진을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 140,
    "title": "A platform owner is collaborating with stakeholders in the manufacturing industry to model and align their shop-floor operational infrastructure with the CSDM 4.0 framework. They need to map newly incoming monitoring systems and underlying technical components to the correct architecture layer. Which CSDM domain must the platform owner utilize for these operational systems?",
    "options": [
      { "letter": "A", "text": "Service Delivery (Manage Technical Services)" },
      { "letter": "B", "text": "Foundation" },
      { "letter": "C", "text": "Build and Integration (Build)" },
      { "letter": "D", "text": "Design and Planning (Design)" },
      { "letter": "E", "text": "Service Consumption (Sell or Consume)" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 4.0 데이터 거버넌스 원칙에 따라, 특정 산업군(제조업 등)의 컨텍스트와 무관하게 시스템에 실물로 유입되는 인프라 및 운영 시스템(Incoming Systems)을 기술적으로 관리하고 매핑하는 영역은 'Service Delivery (Manage Technical Services)' 도메인입니다. 개념적 모델링이나 비즈니스 애플리케이션 명세서만 관리하는 Design(D) 단계나 최종 카탈로그 소비를 다루는 Service Consumption(E) 단계는 실전 기술 시스템의 런타임 토폴로지를 통제하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 141,
    "title": "A CMDB Auditor is evaluating data validation strategies to improve overall data governance. What is the fundamental operational difference between CMDB Attestation policies and Data Certification processes when managing a Configuration Item (CI)?",
    "options": [
      { "letter": "A", "text": "Attestation tasks can be systematically scheduled via automated engines, whereas Data Certification runs exclusively as an on-demand manual workflow." },
      { "letter": "B", "text": "Attestation forces the assigned owner to meticulously audit and correct specific attribute fields, while Data Certification simply logs a high-level acknowledgement that the physical asset is still active." },
      { "letter": "C", "text": "Attestation primarily tracks and logs formal acknowledgement that the CI still physically or logically exists, whereas Data Certification requires detailed validation and correction of specific CI configuration attributes." },
      { "letter": "D", "text": "Attestation workflows can be assigned to either an operational group or an individual user, while Data Certification tasks strictly restrict assignment to a single individual user." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 거버넌스 표준 아키텍처에 따라, Attestation(존재 증명)은 특정 자산의 데이터 수명 주기 상 생존 여부(Existence)를 확인 및 승인하는 가벼운 프로세스인 반면, Data Certification(데이터 인증)은 자산의 세부 필드 속성(Specific Attributes)들의 정합성을 일일이 대조하고 필요 시 수정 보정하는 정밀 데이터 감사 프로세스이므로 C가 완벽한 정답입니다. 두 기능 모두 스케줄링이 가능하며 그룹 배정을 지원하므로 A, D는 오답이며, B는 두 개념의 정의를 정반대로 서술했으므로 오답입니다."
  },
  {
    "id": 142,
    "title": "A CMDB Administrator is configuring the ServiceNow Vulnerability Response (VR) and Security Incident Response (SIR) applications. To ensure security analysts have sufficient business context to automatically estimate risk scores and establish triage priorities, which CSDM Data Foundations Dashboard playbook metric must be optimized?",
    "options": [
      { "letter": "A", "text": "Locations without a parent location framework validation" },
      { "letter": "B", "text": "Name Product Models without designated Product Owners" },
      { "letter": "C", "text": "Application Services with Business Application Relations alignment" },
      { "letter": "D", "text": "Percentage of custom status values for CI Life Cycle Stages mapping" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow SecOps 아키텍처 가이드라인에 따라, 인프라 자산의 보안 취약점이 비즈니스에 미치는 위험도(Risk)와 우선순위(Priority)를 지능적으로 연산하려면, 발견된 기술 컴포넌트 환경(Application Service)이 전사의 상위 논리적 기획 뼈대(Business Application)와 유기적으로 관계를 맺고 있어야 합니다. 대시보드에서 이 결합 품질을 진단하고 안내하는 플레이북은 'Application Services with Business Application Relations'가 유일하므로 C가 완벽한 정답입니다."
  },
  {
    "id": 143,
    "title": "The CMDB Configuration Management group aims to display meaningful compliance metrics and pass/fail statistics on the CMDB Health Dashboard compliance scorecard for server records that are lagging behind the corporate security patch standard. Which combination of core backend configuration artifacts must be constructed to drive this specific compliance evaluation?",
    "options": [
      { "letter": "A", "text": "Technical Service Offerings, Dynamic CI Groups, and CMDB Groups mapping" },
      { "letter": "B", "text": "Certification Filter, Certification Template, and Compliance Audit configuration" },
      { "letter": "C", "text": "Stale CIs rule, Orphan CIs rule, and Duplicate CIs rule definitions" },
      { "letter": "D", "text": "Data Manager Certification Policies, Data Filters, and Scheduled Jobs orchestration" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 건강도(Health) 아키텍처에 따라, Compliance 스코어카드는 플랫폼의 'Desired State Audit' 엔진과 직접 연동되어 점수를 산출합니다. 특정 서버 클래스를 타겟팅하는 'Certification Filter'(B), 통과해야 할 패치 기준을 수립하는 'Certification Template'(B), 그리고 이를 최종 집행하는 'Audit'(B) 레코드가 구성되어야만 준수성 대시보드가 구동됩니다. Correctness 지표인 Stale/Orphan/Duplicate(C)나 Data Manager 속성인 D번은 준수성 점수 연산 파이프라인을 형성하지 않으므로 오답입니다."
  },
  {
    "id": 144,
    "title": "CMDB class owners are reviewing data cleansing tasks assigned to them within the 'My Work' tab of the centralized CMDB Workspace. Which core governance management tool is responsible for executing background lifecycle policies and generating these active assignment tasks?",
    "options": [
      { "letter": "A", "text": "CMDB Health Dashboard" },
      { "letter": "B", "text": "De-duplication templates" },
      { "letter": "C", "text": "CMDB Data Manager" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 플랫폼 거버넌스 가이드라인에 따라, CMDB Workspace의 'My Work' 탭에 실시간 팝업되는 데이터 정제, 존재 증명(Attestation), 자산 은퇴 등의 실무 티켓들은 'CMDB Data Manager' 정책 엔진이 백엔드에서 라이프사이클 룰에 의거해 자동으로 생성하고 담당자에게 배정해 주는 것입니다. 단순 모니터링 스코어카드인 Health Dashboard(A)나 중복 조치용 양식 툴인 De-duplication templates(B)는 정책 기반의 대량 수명 주기 태스크 생성 파이프라인을 구동하지 못하므로 오답입니다."
  },
  {
    "id": 145,
    "title": "A Lead CMDB Enterprise Architect wants to leverage dynamic reconciliation rules to intelligently evaluate and determine data source authority based on the real-time context of multi-source discovery payload histories. Which foundational platform architectural feature must be enabled to support this dynamic evaluation?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager Lifecycle Engine" },
      { "letter": "B", "text": "Standard Legacy Reconciliation Rules" },
      { "letter": "C", "text": "CMDB Workspace central user interface" },
      { "letter": "D", "text": "CMDB 360 / Multisource CMDB Framework" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow IRE(식별 및 조정 Engine) 가이드라인에 따라, 데이터 소스의 우선순위를 실시간 수집 컨텍스트에 의거해 가변적으로 제어하는 'Dynamic Reconciliation Rules'는 각 서드파티 소스별 입력 히스토리와 원시 데이터를 모두 보존하는 백엔드 공간을 요구합니다. 이 다중 소스 이력 보존 아키텍처를 지원하는 코어 기술이 바로 'CMDB 360 (Multisource CMDB)'이므로 D가 완벽한 전제 조건 정답입니다. 일반 정적 룰(B)이나 데이터 매니저(A)는 소스별 로우 데이터 추적 능력이 없어 동적 규칙을 구동하지 못하므로 오답입니다."
  },
  {
    "id": 146,
    "title": "A Data Center Manager is configuring the ServiceNow CMDB CI Class Manager to define dependency directions between software assets. Given that a single running Application Server host can concurrently run and execute multiple isolated software applications, which cardinality pattern correctly describes the structural framework from the Application Server table ([cmdb_ci_app_server]) to the hosted Application table ([cmdb_ci_appl])?",
    "options": [
      { "letter": "A", "text": "Many-to-one" },
      { "letter": "B", "text": "Many-to-many" },
      { "letter": "C", "text": "One-to-many" },
      { "letter": "D", "text": "One-to-one" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 데이터 모델 표준에 따라, 런타임 호스트 엔진인 Application Server([cmdb_ci_app_server])는 독립된 소프트웨어 인스턴스인 Application([cmdb_ci_appl])을 하나 이상 구동하는 부모 역할을 수행합니다. 따라서 테이블 배열 순서상 '애플리케이션 서버'에서 '애플리케이션' 방향으로의 의존성 차수는 'One-to-many'(1 대 다)가 정확합니다. 논리적 서비스 계층이 아닌 물리적 프로세스 종속이므로 Many-to-many(B) 구조는 오답입니다."
  },
  {
    "id": 147,
    "title": "A Data Center Manager is architecting table dependencies between software and hardware tiers. The company infrastructure utilizes highly available, redundant configurations: each physical/virtual Application Server container hosts multiple software Applications, and conversely, each individual Application is distributed and runs across multiple servers to facilitate active load balancing. Which cardinality profile accurately defines the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl]) under this enterprise scenario?",
    "options": [
      { "letter": "A", "text": "One-to-one" },
      { "letter": "B", "text": "One-to-many" },
      { "letter": "C", "text": "Many-to-one" },
      { "letter": "D", "text": "Many-to-many" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB 의존성 모델링 가이드라인에 따라, 단일 서버가 여러 앱을 호스팅하는 1:N 속성과 단일 앱이 부하 분산을 위해 여러 서버에 배치되는 N:1 속성이 동시에 공존하는 고가용성(HA/Load balancing) 클러스터 구조에서는 양방향 카디널리티를 충족하는 'Many-to-many'(다대다, N:M) 관계 네트워크 모델이 정답입니다. 이중화 명세가 누락된 Standalone 환경일 때만 One-to-many(B)가 성립하므로 이 시나리오에서는 오답입니다."
  },
  {
    "id": 148,
    "title": "According to the Common Service Data Model (CSDM) 4.0 operational governance framework, a systems engineering branch is requesting a Service Catalog item to streamline bare-metal compute enhancements. Which specific CSDM persona is responsible for initiating this infrastructure upgrade request and defining its technical workflow requirements?",
    "options": [
      { "letter": "A", "text": "Enterprise Architect" },
      { "letter": "B", "text": "Application Service Owner" },
      { "letter": "C", "text": "Technology Service Owner (Technical Service Owner)" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CSDM 거버넌스 표준 명세에 따라, 하드웨어, 네트워크, 서버 등 내부 인프라 자산군과 이를 관리하는 기술 프로세스의 소유권은 'Technology Service Owner'에게 귀속됩니다. 따라서 인프라 업그레이드 카탈로그 아이템 생성을 주도하고 요구사항을 정의하는 역할은 C가 정확합니다. 특정 비즈니스 소프트웨어 인스턴스의 가용성을 관리하는 Application Service Owner(B)나 상위 아키텍처 청사진만 그리는 Enterprise Architect(A)는 인프라 실무 요청 프로세스의 소유자가 아니므로 오답입니다."
  },
  {
    "id": 149,
    "title": "A CMDB Administrator aims to proactively identify and minimize stale CIs that have not experienced any discovery or integration updates for a prolonged period. Which primary CMDB Health Dashboard scorecard is designated to aggregate and display this staleness telemetry?",
    "options": [
      { "letter": "A", "text": "Completeness" },
      { "letter": "B", "text": "Correctness" },
      { "letter": "C", "text": "Compliance" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 건강도(Health) 아키텍처 가이드라인에 따라, 데이터 소스의 업데이트가 끊겨 방치된 자산(Stale CIs)은 중복(Duplicate), 고아(Orphan) 자산 지표와 함께 'Correctness(정확성)' 스코어카드 영역에 내장되어 통합 연산됩니다. 필수/권장 속성 채움 상태를 다루는 Completeness(A)나 디자이어드 스테이트 감사를 처리하는 Compliance(C) 타일은 자산의 최신성 유령화 지표를 관리하지 않으므로 오답입니다."
  },
  {
    "id": 150,
    "title": "The CMDB Configuration Management team has achieved a trusted CMDB by integrating discovered telemetry, aligning support groups via CSDM, and enabling Service Mapping. When a service desk agent creates a new transaction ticket and selects a high-criticality CI, which specific transactional field on the Incident form is automatically populated with the referenced technical team to ensure rapid routing?",
    "options": [
      { "letter": "A", "text": "Assignment Group" },
      { "letter": "B", "text": "Support Group" },
      { "letter": "C", "text": "Approval Group" },
      { "letter": "D", "text": "Managed by Group" },
      { "letter": "E", "text": "Change Group" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow ITSM 및 CMDB 결합 모범 사례에 따라, 인시던트 폼에서 특정 구성 항목(CI)을 지정하는 즉시 시스템은 해당 CI 레코드에 입력된 'Support Group' 데이터를 조회하여 인시던트 티켓의 실질적인 담당 부서 배정 필드인 'Assignment Group'(A)에 자동 채움 처리를 수행합니다. Support Group(B)이나 Managed by Group(D)은 CMDB 테이블 내부의 자산 관리 속성 필드 명칭일 뿐이며, 인시던트 폼 상에서 티켓 라우팅을 실질적으로 제어하는 배정 필드가 아니므로 오답입니다."
  },
  {
    "id": 151,
    "title": "A CMDB Administrator installs an out-of-the-box Service Graph Connector and customizes one of its companion script transform records. Later, the Service Graph Connector is systematically upgraded via the ServiceNow Store, which includes an updated version of that default script transform. How does the platform upgrade engine manage this specific asset conflict during the deployment process?",
    "options": [
      { "letter": "A", "text": "The entire deployment process immediately halts, aborts the installation, and generates a critical system error." },
      { "letter": "B", "text": "A 'Skipped Change' record is logged within the Upgrade History, and the engine preserves the custom script transform without overwriting it." },
      { "letter": "C", "text": "The platform pre-check module detects the customization prior to execution and refuses to initiate the plugin upgrade." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow 플랫폼 업그레이드 거버넌스 사상에 따라, 관리자가 OOTB 구성 요소를 수정한 경우 시스템은 고객의 커스터마이징 자산을 보호하기 위해 새 코드로 덮어쓰지 않습니다. 대신 'Skipped Change' 로그를 생성하여 추후 어드민이 수동 검토(Review/Merge)할 수 있도록 격리 조치하므로 B가 완벽한 정답입니다. 프로세스가 중단되거나(A) 시작 전 거부(C)되는 현상은 플랫폼 가드레일 디자인에 위배되는 오답입니다."
  },
  {
    "id": 152,
    "title": "When a CMDB Administrator is configuring advanced data arbitration within the 'Create Reconciliation Rule' wizard for CMDB 360 / Multisource CMDB, which of the following choices represent officially supported 'Dynamic Rule Types' available in the platform user interface? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "Most Reported" },
      { "letter": "B", "text": "Last Created" },
      { "letter": "C", "text": "Last Updated" },
      { "letter": "D", "text": "Smallest Value" }
    ],
    "answer": ["A", "C", "D"],
    "explanation": "정답: A, C, D. ServiceNow CMDB 360 아키텍처 명세에 따라, 다중 소스 데이터를 실시간 컨텍스트로 중재하는 공식 동적 규칙 유형(Dynamic Rule Types)은 'First Reported', 'Last Updated'(C), 'Most Reported'(A), 'Smallest Value'(D), 'Largest Value' 총 5가지만 존재합니다. 수집 소스 데이터의 트랜잭션은 기본적으로 기존 속성의 수정/업데이트를 기반으로 흐르기 때문에, 레코드 최초 생성 시점을 논하는 'Last Created'(B) 유형은 마법사 UI 옵션에 존재하지 않는 허구의 개념이므로 오답입니다."
  },
  {
    "id": 153,
    "title": "A CMDB Administrator needs to comprehensively analyze, prioritize, and clean up accumulating duplicate CIs within the platform. According to ServiceNow modern data governance best practices, what is the preferred and most effective interface to manage and orchestrate this remediation task?",
    "options": [
      { "letter": "A", "text": "The De-duplication Dashboard within the centralized CMDB Workspace" },
      { "letter": "B", "text": "The generic 'My Tasks' module available in the classic Application Navigator" },
      { "letter": "C", "text": "The legacy 'De-duplication Task' flat list module under the CMDB menu" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow의 현대적인 CMDB 아키텍처 가이드라인에 따라, 중복 자산(Duplicate CIs)의 정제 관리를 위한 가장 권장되는 방식(Preferred Way)은 차세대 통합 UI인 'CMDB Workspace' 내부의 'De-duplication Dashboard'를 활용하는 것입니다. 이 대시보드는 자산 클래스별 중복 통계 시각화와 전용 조치 마법사(Remediation Wizard) 진입을 원스톱으로 지원합니다. 레거시 텍스트 리스트 뷰 형태인 De-duplication Task 모듈(C)은 단순 테이블 조회를 제공할 뿐이므로 현대적 최선의 방식(Preferred Way) 맥락에서 오답입니다."
  },
  {
    "id": 154,
    "title": "An organization is executing a major data center migration and needs to map out the downstream consequences of taking specific infrastructure assets offline. How can Application Service mapping be strategically utilized within the Change Management process to facilitate this migration?",
    "options": [
      { "letter": "A", "text": "To provide visibility into the business impact and service dependency scope tied to the targeted infrastructure CIs." },
      { "letter": "B", "text": "To track and audit the static physical location and rack-level positioning of the hardware CIs." },
      { "letter": "C", "text": "To logically simulate and predict which hardware devices will technically drop offline first during power termination." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow ITOM 및 CSDM 가이드라인에 따라, Application Service 매핑은 하부 인프라 구성 항목(CI)들과 최상위 비즈니스 서비스 간의 탑다운 의존성(Dependency)을 증명하는 기술입니다. 따라서 이를 변경 관리에 결합하면 특정 인프라를 건드렸을 때 마비되는 전사적 '비즈니스 영향도(Business Impact)'를 정확히 계산해 주므로 A가 완벽한 정답입니다. 단순 물리적 주소 확인(B)이나 장비 오프라인 순서 계산(C)은 서비스 매핑의 아키텍처적 목적이 아니므로 오답입니다."
  },
  {
    "id": 155,
    "title": "A CMDB Administrator needs to restrict the CIs displayed in transactional reference fields—such as the Configuration Item field on the Incident or Change forms—to only surface mission-critical enterprise hardware and software. Where must the CMDB Administrator go to designate specific classes as 'Principal Classes' within the platform?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager Policy Canvas" },
      { "letter": "B", "text": "CI Class Manager" },
      { "letter": "C", "text": "System Properties ([sys_properties]) registry" },
      { "letter": "D", "text": "CMDB Workspace operational dashboard" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 아키텍처 베스트 프랙티스에 따라, 인시던트(Incident) 폼 같은 ITSM 트랜잭션 화면에서 검색 노이즈를 줄이고 핵심 자산만 표출하도록 필터링해 주는 'Principal Class' 속성은 'CI Class Manager' 내부의 클래스 고유 정보 정의 화면에서 체크박스를 활성화하여 제어합니다. 데이터 수명 주기를 제어하는 Data Manager(A)나 가시성 전체 스위치만 켜고 끄는 System Properties(C)는 특정 클래스를 주요 클래스로 커스텀 매킹하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 156,
    "title": "User endpoint devices are seamlessly imported into the CMDB, populating the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] table. The Asset Management team requires this specific user alignment to automatically reflect on the corresponding Hardware Asset [alm_hardware] record. Which platform native governance tool should a Configuration Analyst leverage to fulfill this bi-directional synchronization in an automated, best-practice manner?",
    "options": [
      { "letter": "A", "text": "Construct a custom synchronous Business Rule on the Computer table to target and update the asset reference." },
      { "letter": "B", "text": "Configure and verify rules within the platform's native AssetCI Field Mapping module." },
      { "letter": "C", "text": "Apply a UI Policy to hide the Asset-level field and leverage dot-walking layout to mirror the CI-level field value." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow 하드웨어 자산 및 구성 관리 통합 베스트 프랙티스에 따라, CI와 Asset 레코드 간의 실시간 필드 동기화는 무한 루프 위험성이 높은 비즈니스 룰(A) 코딩 대신 순정 엔진인 'AssetCI Field Mapping' 모듈을 통해 제어하는 것이 표준입니다. 이 맵을 통해 한쪽의 데이터 변화가 상대 테이블의 상호 매핑된 필드로 코딩 없이 안전하게 전파되므로 B가 정답입니다. 닷워크 UI 제어(C)는 백엔드 물리 필드 값을 직접 적재하지 못하므로 오답입니다."
  },
  {
    "id": 157,
    "title": "When defining structural architecture within the CMDB relationship table ([cmdb_rel_ci]), which syntax pattern correctly describes the out-of-the-box system relationship type pairing between a software Application and the host Server hosting it?",
    "options": [
      { "letter": "A", "text": "Application > Runs on :: Runs > Server" },
      { "letter": "B", "text": "Application > Runs :: Runs on > Server" },
      { "letter": "C", "text": "Application > Used by :: Uses > Server" },
      { "letter": "D", "text": "Application > Uses :: Used by > Server" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB 관계 표준 데이터 모델에 따라, 애플리케이션 자산과 서버 자산 간의 물리적 프로세스 구동 의존성은 'Runs on :: Runs' 구조를 사용합니다. 탑다운(부모에서 자식) 관점에서는 Application이 Server 위에서 구동되므로 'Runs on'이 맞고, 바텀업(자식에서 부모) 관점에서는 Server가 Application을 실행시키므로 'Runs'가 매핑되어야 합니다. 순서를 뒤집은 B번이나 느슨한 논리적 참조에 쓰이는 Uses 조합(C, D)은 규격에 위배되는 오답입니다."
  },
  {
    "id": 158,
    "title": "A Configuration Governance Officer requires a scalable mechanism to enforce data minimization principles for aging server metadata. According to ServiceNow architectural guidelines, what is a primary purpose or requirement fulfilled by the CMDB Data Manager?",
    "options": [
      { "letter": "A", "text": "It automates the enforcement and verification of multi-tier hosting relationship rules between discovered infrastructure CIs." },
      { "letter": "B", "text": "It cryptographically encrypts archived repository records to enforce column-level security compliance." },
      { "letter": "C", "text": "It automates the operational archival and systematic deletion of stale or retired CI records based on corporate retention policies." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 아키텍처 가이드라인에 따라, CMDB Data Manager는 자산 레코드의 수명 주기 정책(Lifecycle Policies)을 자동화하기 위한 핵심 툴입니다. 은퇴하거나 방치된 자산 데이터를 보존 기간(Retention Policies)에 근거해 자동으로 아카이브하거나 삭제(C) 처리함으로써 데이터 무결성과 인스턴스 성장을 통제합니다. CI 간의 관계 규칙을 통제하는 것은 CI Class Manager(A)이며, 데이터 암호화는 Encryption 모듈(B)의 스코프이므로 오답입니다."
  },
  {
    "id": 159,
    "title": "A CMDB Administrator wants to run the officially recommended playbook for the metric 'Services Have Owners Identified' to remediate chronic data omission issues highlighted in the CMDB Data Foundations Dashboard. Which specific, active remediation playbook sub-categories are natively provided within the interface to achieve this? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "Fix Data" },
      { "letter": "B", "text": "Govern Data" },
      { "letter": "C", "text": "Report Data" },
      { "letter": "D", "text": "Analyze Data" }
    ],
    "answer": ["A", "B", "D"],
    "explanation": "정답: A, B, D. ServiceNow 스토어 앱인 CMDB Data Foundations Dashboard 가이드라인에 따라, 발견된 자산 데이터 결함을 치료하기 위해 시스템이 처방전 양식으로 제공하는 3대 공식 보정 플레이북(Remediation Playbooks)은 누락 필드를 정정하는 'Fix Data'(A), 미래의 재발을 막는 가드레일을 세우는 'Govern Data'(B), 그리고 근본 원인을 파싱하는 'Analyze Data'(D)로만 구성되어 있습니다. 대시보드 솔루션 자체가 이미 가시성 보고서 역할을 수행하고 있으므로, 하위 플레이북 탭에 'Report Data'(C)라는 범주는 UI 구조상 존재하지 않는 명백한 함정 카드이므로 오답입니다."
  },
  {
    "id": 160,
    "title": "A Lead CMDB Architect needs to ingest bulk telemetry infrastructure payloads into the configuration database. To eliminate human coding errors that could potentially bypass the Identification and Reconciliation Engine (IRE) API gateway—subsequently creating catastrophic duplicates and unauthorized rogue CIs—which integration method is officially recommended by ServiceNow?",
    "options": [
      { "letter": "A", "text": "IntegrationHub ETL utilizing Robust Transform Engine (RTE) frameworks" },
      { "letter": "B", "text": "Direct Table API calls utilizing external REST or SOAP endpoints" },
      { "letter": "C", "text": "Legacy Import Sets coupled with traditional script-based Transform Maps" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow 데이터 연동 표준 거버넌스 가이드라인에 따라, 외부 데이터를 CMDB로 임포트할 때 IRE를 우회(Bypass)하는 설계적 오류를 차단하는 최선의 권장 도구는 'IntegrationHub ETL'입니다. 이 도구는 로코드 기반 마법사를 통해 백엔드에서 순정 IRE API 파이프라인 통과를 네이티브하게 강제하여 중복 생성을 예방합니다. 직접적인 Table API(B)는 IRE를 100% 무시하고 DB에 직접 쓰기 때문에 금기시되며, 레거시 트랜스폼 맵(C)은 수동 스크립팅 누락 시 바이패스 리스크가 존재하므로 오답입니다."
  },
  {
    "id": 161,
    "title": "A Change Manager is evaluating the tactical ROI of aligning the enterprise infrastructure with the Common Service Data Model (CSDM) 4.0 framework. Which of the following options represent direct operational benefits that the Change Management process will gain from this CSDM alignment? (Choose two)",
    "options": [
      { "letter": "A", "text": "The ability to accurately evaluate and visualize the downstream business impact of planned infrastructure changes on logical services." },
      { "letter": "B", "text": "The automated identification and reinforcement of operational blackout windows to restrict schedule conflicts." },
      { "letter": "C", "text": "The capability to dynamically route the change task to the correct assignment group based on the service tier's support ownership metadata." },
      { "letter": "D", "text": "The systematic execution of post-incident root cause analysis to determine the underlying failure origin of change issues." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow CSDM 거버넌스 명세에 따라, 구성 항목들 간의 관계 네트워크가 올바르게 적재되면 변경 관리 프로세스는 하부 자산 변동이 최상위 서비스에 미치는 피해 범위(Business Impact)를 완벽히 예측(A)할 수 있습니다. 동시에, 각 기술 자산 레이어에 매핑된 소유권 정보를 기반으로 변경 티켓을 적절한 담당 그룹으로 동적 라우팅(C)하는 자동화 가치가 실현됩니다. 일정 충돌 제어(B)는 변경 모듈 고유 정책이며, 근본 원인 규명(D)은 문제 관리(Problem)의 영역이므로 오답입니다."
  },
  {
    "id": 162,
    "title": "A Configuration Management Governance team is systematically transitioning from legacy configuration status fields to the unified CSDM Product Lifecycle standard. To define or modify specific granular, sub-state choices mapped under the primary lifecycle phases, which backend database table must the administrator directly access and modify?",
    "options": [
      { "letter": "A", "text": "Life Cycle Mapping ([life_cycle_mapping])" },
      { "letter": "B", "text": "Life Cycle Stage Status ([life_cycle_stage_status])" },
      { "letter": "C", "text": "Life Cycle Stages ([life_cycle_stage])" },
      { "letter": "D", "text": "Life Cycle Controls ([life_cycle_control])" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 거버넌스 표준 아키텍처에 따라, 자산 수명 주기는 'Stage'와 'Stage Status'의 2단계 매트릭스로 제어됩니다. 최상위 단계인 Stage(C) 자체는 시스템 핵심 코드로 고정되어 수정할 수 없으며, 그 하위에 종속되는 세부 선택 값 세트와 관계 규칙을 등록 및 수정할 수 있는 물리 테이블은 'Life Cycle Stage Status [life_cycle_stage_status]'(B)가 유일합니다. 레거시 필드와의 번역 룰만 관리하는 Mapping(A) 테이블은 상태 값 자체를 개조하는 주소지가 아니므로 오답입니다."
  },
  {
    "id": 163,
    "title": "A Configuration Manager is building a business justification to implement and utilize the Store application 'CMDB Data Foundations Dashboard'. Which core architectural benefits directly align with the usage of this specific governance application? (Choose two)",
    "options": [
      { "letter": "A", "text": "It serves as the primary operational engine to systematically detect, merge, and eliminate duplicate records via remediation wizards." },
      { "letter": "B", "text": "It provides time-series telemetry to monitor and track the historical trends of CSDM data alignment scores over time." },
      { "letter": "C", "text": "It delivers remediation playbooks that provide actionable insights to systematically improve configuration data quality and completeness." },
      { "letter": "D", "text": "It integrates with the ITSM framework to fully automate technical change task approval routing and blackout window generation." }
    ],
    "answer": ["B", "C"],
    "explanation": "정답: B, C. ServiceNow 데이터 거버넌스 가이드라인에 따라, CMDB Data Foundations Dashboard는 CSDM 기준에 부합하는 데이터 모델 품질 상태를 시계열 트렌드(B)로 추적하여 변화 과정을 모니터링할 수 있도록 돕습니다. 동시에 문제 해결을 위한 단계별 처방전인 'Remediation Playbook'을 내장하여 실행 가능한 조치 인사이트(C)를 제공합니다. 중복 제거 제어는 De-duplication Dashboard(A)의 고유 권한이며, 변경 승인 자동화(D)는 변경 관리 엔진의 영역이므로 오답입니다."
  },
  {
    "id": 164,
    "title": "A CMDB Administrator is pitching the deployment of the 'CMDB Data Foundations Dashboard' to the infrastructure governance board. Which of the following statements accurately characterize the operational benefits of utilizing this specific store application? (Choose two)",
    "options": [
      { "letter": "A", "text": "It systematically scans and verifies that mission-critical configuration data is valid and properly aligned with CSDM blueprints." },
      { "letter": "B", "text": "It deploys hands-free system automation to independently overwrite and remediate identified configuration risks without human review." },
      { "letter": "C", "text": "It delivers structured, step-by-step playbooks to assist configuration analysts in the proactive manual remediation of data compliance risks." },
      { "letter": "D", "text": "It provisions an open-source development framework enabling administrators to create completely bespoke, custom health metrics from scratch." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow 데이터 컴플라이언스 가이드라인에 따라, CMDB Data Foundations Dashboard는 중요 데이터 아키텍처가 적절하게 설정되어 있는지 유효성을 검증(A)하는 진단 능력이 뛰어납니다. 또한 데이터 오류를 해결할 수 있도록 지원하는 단계별 안내서인 'Remediation Playbook'을 제공하여 수동 조치 프로세스를 보조(C)합니다. 자산의 결함 데이터를 사람이 검토하기도 전에 독단적으로 강제 자동 수정하는 완전 자동화 기능(B)이나 커스텀 지표 확장 프레임워크(D)는 시스템의 설계 스코프를 벗어난 오답입니다."
  },
  {
    "id": 165,
    "title": "An enterprise risk management team needs to audit and track structural regulatory compliance (such as GDPR or HIPAA) across the application portfolio. Within the Common Service Data Model (CSDM) framework, which statement accurately describes the core purpose and architectural role of the Information Object ([cmdb_ci_information_object]) artifact?",
    "options": [
      { "letter": "A", "text": "It genericizes and encapsulates performance telemetry and technical metadata metadata discovered on a logical group of infrastructure Configuration Items." },
      { "letter": "B", "text": "It maps and conceptualizes the logical data taxonomy and sensitive data categories utilized by high-level Business Applications." },
      { "letter": "C", "text": "It catalogs and structures the dynamic payload data structures systematically exchanged between an external API gateway and an active Application Service." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 표준 데이터 모델 아키텍처에 따라, 정보 객체(Information Object)는 비즈니스 애플리케이션(Business Application)이 취급하고 처리하는 민감/규제 데이터의 '논리적 범주(Logical Data Taxonomy)'를 명시하는 메타데이터 자산입니다. 이를 결합함으로써 특정 앱의 보안 위험도와 컴플라이언스 준수 현황(B)을 시각화할 수 있습니다. 일반 하드웨어 CI 성능 묘사(A)나 실시간 API 데이터 통신 규격 정의(C)는 정보 객체의 설계 목적이 아니므로 오답입니다."
  },
  {
    "id": 166,
    "title": "A CMDB Data Owner requires centralized visibility into the ingestion health, payload volume, and transfer success rates of multiple active store integrations. The Platform Owner installs the 'Service Graph Connector Central' plugin to fulfill this. Within which unified workspace interface will the new 'Service Graph Connector Central' telemetry tab be systematically embedded?",
    "options": [
      { "letter": "A", "text": "CMDB Workspace" },
      { "letter": "B", "text": "Service Graph Connector Workspace" },
      { "letter": "C", "text": "Discovery Admin Workspace" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow의 최신 통합 UX 디자인 가이드라인에 따라, 서드파티 연동 파이프라인의 건강 상태를 모니터링하는 'Service Graph Connector Central' 대시보드는 독립된 별도의 워크스페이스(B)를 신설하지 않고, 기존의 중앙 집중식 'CMDB Workspace'(A) 내부의 확장 서브 탭으로 안착되도록 설계되었습니다. 순수 네이티브 네트워크 IP 스캔 운영에 집중하는 Discovery Admin Workspace(C)는 서드파티 SGC 데이터 통합 관제 본산이 아니므로 오답입니다."
  },
  {
    "id": 167,
    "title": "A Regional Configuration Manager needs to isolate and monitor CMDB data quality trends exclusively for data center assets deployed within the Asia-Pacific (APAC) territory. Currently, the CMDB Health Dashboard only renders global enterprise-wide aggregates and breakdown summaries by CI Class. How can the administrator structurally configure the platform to continuously calculate distinct health scores for these regionally relevant CIs?",
    "options": [
      { "letter": "A", "text": "Customize the backend CMDB Health Dashboard evaluator scheduled script jobs to force custom SQL group-by operations by location query variables." },
      { "letter": "B", "text": "Navigate to the global CMDB Health Dashboard settings page and activate the out-of-the-box system toggle titled 'Group scores by region'." },
      { "letter": "C", "text": "Create dedicated CMDB Groups populated with regional infrastructure scope criteria, ensuring the Group Type is strictly designated as 'health'." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 건강도(Health) 아키텍처 표준 가이드라인에 따라, 클래스 단위가 아닌 비즈니스/지리적 컨텍스트(지역, 부서 등)로 건강도 점수를 쪼개어 연산하려면 반드시 'CMDB Group' 프레임워크를 활용해야 합니다. 그룹 생성 시 유형(Type)을 'health'로 지정하면(C), 대시보드 스캔 엔진이 해당 리전 그룹용 스코어카드를 독립 연산하여 표출해 줍니다. 스케줄러 잡 코드 개조(A)는 업그레이드를 파괴하는 오답이며, 단일 토글 스위치(B)는 플랫폼 UI에 실존하지 않는 허구의 옵션이므로 오답입니다."
  },
  {
    "id": 168,
    "title": "Within the central CI Class Manager workspace, a configuration governance lead needs to specify and enforce which external discovery tools or integration feeds are authorized to modify and update specific CI Attributes. Under which native Class Info navigation tab is this data source authority framework configured?",
    "options": [
      { "letter": "A", "text": "Basic Info tab" },
      { "letter": "B", "text": "Identification Rule tab" },
      { "letter": "C", "text": "Reconciliation Rules tab" },
      { "letter": "D", "text": "Pinned Classes folder" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow IRE(식별 및 조정 엔진) 아키텍처 가이드라인에 따라, 다중 수집 출처 간의 속성 필드 업데이트 권한 및 우선순위 통제는 'CI Class Manager' 내부의 'Reconciliation Rules(조정 규칙)' 탭에서 전담 설계합니다. 자산 레코드 간의 동일성 매칭 기준을 수립하는 곳은 Identification Rule 탭(B)이며, 클래스의 레이블이나 테이블 이름을 정의하는 방은 Basic Info 탭(A)이므로 속성 업데이트 권한 맥락에서 모두 오답입니다."
  },
  {
    "id": 169,
    "title": "Within the ServiceNow Identification and Reconciliation Engine (IRE) architecture, which core governance component programmatically specifies and enforces which data sources are officially allowed to update a specific CI class or a targeted set of attributes?",
    "options": [
      { "letter": "A", "text": "Identification Rules" },
      { "letter": "B", "text": "De-duplication Task" },
      { "letter": "C", "text": "IRE Data Source Rule" },
      { "letter": "D", "text": "Reconciliation Rule" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow 데이터 무결성 표준 명세에 따라, 특정 인입 출처가 CMDB 마스터 레코드의 클래스 정보나 세부 속성 필드 세트를 업데이트할 수 있도록 권한을 통제하는 전담 컴포넌트는 'Reconciliation Rule(조정 규칙)'입니다. 인입 자산의 중복 여부 및 신원 확인만 수행하는 것은 Identification Rules(A)이며, 중복 발생 시 발급되는 티켓은 De-duplication Task(B)입니다. C번은 시스템에 존재하지 않는 허구의 용어이므로 오답입니다."
  },
  {
    "id": 170,
    "title": "A Lead Enterprise Architect wants to ensure that a low-confidence secondary integration feed can only update existing asset profiles but is strictly prohibited from creating new records. Which specific Identification and Reconciliation Engine (IRE) governance component can be programmatically configured to block inserts from this specific data source?",
    "options": [
      { "letter": "A", "text": "Identification Rules" },
      { "letter": "B", "text": "De-duplication Task" },
      { "letter": "C", "text": "IRE Data Source Rule" },
      { "letter": "D", "text": "Reconciliation Rule" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow IRE 거버넌스 표준 명세에 따라, 특정 외부 소스가 CMDB 마스터 레코드를 무단으로 최초 생성(Insert)하는 행위를 입구에서 완전히 차단(Block)하는 전담 컴포넌트는 'IRE Data Source Rule [cmdb_data_source_rule]'입니다. 이 규칙을 통해 특정 소스를 'Reconciliation-only(조정 전용)'로 결속시켜 허가되지 않은 신규 생성을 차단할 수 있습니다. 일반적인 Reconciliation Rule(D)은 기존 레코드의 속성 필드 업데이트(Update) 우선순위만 중재할 뿐, 신규 인서트 자체를 거부할 수 없으므로 오답입니다."
  },
  {
    "id": 171,
    "title": "An active governance record is defined in the CI Class Manager as follows: 'Reconciliation Rule = ServiceNow'. When the native ServiceNow Discovery engine subsequently initiates a transaction to modify an existing server attribute, what is the systematic outcome of this evaluation?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow IRE(식별 및 조정) 아키텍처 규칙에 따라, 조정 규칙(Reconciliation Rule)은 특정 소스에게 필드 쓰기 권한을 수여하는 화이트리스트 메커니즘입니다. 지문에서 규칙에 정의된 공인 소스(ServiceNow)와 실제 수정을 시도하는 주체가 완벽히 일치하므로 시스템은 'Allow Update'(A) 처리를 집행합니다. 무단 소스 침입 시에만 B번이 발동하며, Insert(생성)의 거부 및 허가는 이 규칙이 아닌 IRE Data Source Rule의 영역이므로 C와 D는 오답입니다."
  },
  {
    "id": 172,
    "title": "An active configuration governance record is defined in the CI Class Manager as follows: 'Reconciliation Rule = ServiceNow, SCCM'. If an unlisted third-party integration feed named 'Altiris' subsequently attempts to modify an attribute on an existing verified CI, what is the systematic outcome of this evaluation?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow IRE(식별 및 조정) 아키텍처 표준 가이드라인에 따라, 조정 규칙(Reconciliation Rule)은 지정된 데이터 소스 외의 모든 소스를 차단하는 화이트리스트 보안 정책입니다. 규칙에 명시되지 않은 제3의 소스인 Altiris가 기존 자산의 업데이트를 시도할 경우, 시스템은 데이터 보호를 위해 'Do Not Allow Update'(B) 처리를 집행하고 해당 페이로드를 무시합니다. 화이트리스트에 등재된 소스일 때만 A번이 발동하며, 최초 생성 유무를 판단하는 Insert 제어는 이 규칙의 영역이 아니므로 C와 D는 오답입니다."
  },
  {
    "id": 173,
    "title": "An active configuration governance record is defined in the CI Class Manager as follows: 'Reconciliation Rule = ServiceNow'. If an unlisted external discovery tool named 'Altiris' subsequently attempts to initiate an insert transaction for a completely unique, non-existent CI, what is the systematic outcome of this evaluation?",
    "options": [
      { "letter": "A", "text": "Allow Update" },
      { "letter": "B", "text": "Do Not Allow Update" },
      { "letter": "C", "text": "Do Not Allow Insert" },
      { "letter": "D", "text": "Allow Insert" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow IRE 아키텍처 표준 규격에 따라, 조정 규칙(Reconciliation Rule)은 오직 기존 레코드의 속성 필드 수정(Update) 권한만 통제하도록 설계되어 있습니다. 따라서 규칙 화이트리스트에 누락된 외부 소스(Altiris)라 할지라도, 시스템에 존재하지 않는 새로운 자산을 최초 생성(Insert)하려는 트랜잭션은 조정 규칙의 제한을 받지 않고 'Allow Insert'(D) 처리됩니다. 인서트 자체를 차단하려면 IRE Data Source Rule이 별도로 필요하며, 이 조건 하에서는 생성 자체를 거부(C)할 수 없으므로 오답입니다."
  },
  {
    "id": 174,
    "title": "A CMDB Administrator needs to leverage the CMDB 360 dashboard to analyze data lineage and raw source discrepancies across multiple discovery feeds. Which of the following statements is true regarding the architectural activation of the Multisource CMDB?",
    "options": [
      { "letter": "A", "text": "The Multisource CMDB must be explicitly activated by navigating to system properties and setting the specific registry key 'glide.identification_engine.multisource_enabled' to true." },
      { "letter": "B", "text": "The Multisource CMDB architecture is fully active by default on all base systems to track discovery payloads out-of-the-box." },
      { "letter": "C", "text": "The Multisource CMDB engine is programmatically de-activated whenever an administrator installs the standard CMDB CI Class Models store plugin." },
      { "letter": "D", "text": "The Multisource CMDB automatically self-activates on base systems the moment a secondary integration feed is mapped to any hardware table." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB 360(Multisource) 거버넌스 가이드라인에 따라, 소스별 원본 수집 페이로드를 영구 적재하는 멀티소스 데이터 모델은 대량의 스토리지 공간을 요구하므로 순정 상태(Base System)에서 기본 활성화(B, D)되어 있지 않습니다. 반드시 어드민이 관련 핵심 시스템 속성인 'glide.identification_engine.multisource_enabled' 값을 true로 명시적 전환(A)해야 가동됩니다. Class Models 플러그인(C)은 스키마 확장 도구일 뿐이므로 오답입니다."
  },
  {
    "id": 175,
    "title": "When constructing relationships and managing structural integrity within the ServiceNow platform, which architectural category perfectly represents core system records such as 'Users' ([sys_user]), 'Groups' ([sys_user_group]), and 'Locations' ([cmn_location]) referenced by the CMDB?",
    "options": [
      { "letter": "A", "text": "Configuration Management Database (CMDB) configuration items" },
      { "letter": "B", "text": "CI Class Attributes" },
      { "letter": "C", "text": "Foundational Data" },
      { "letter": "D", "text": "CMDB Extended Classes" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 데이터 모델 규격에 따라, 사용자(Users), 그룹(Groups), 위치(Locations) 등은 CMDB에 종속된 자산 객체가 아니며 플랫폼 전역 프로세스가 공유하는 'Foundational Data(기반 데이터)'에 해당합니다. CMDB의 구성 항목(CI)들은 이 기반 데이터들을 참조 필드를 통해 유기적으로 연결하여 컨텍스트를 완성합니다. 자산 저장소 자체(A), 필드 스키마 정의(B), 확장 테이블 분기 구조(D)는 기반 데이터의 정의를 충족하지 못하므로 오답입니다."
  },
  {
    "id": 176,
    "title": "Within the core ServiceNow CMDB taxonomy, which architectural term specifically represents data points that further describe a distinct Configuration Item, such as its name, unique serial number, or active operating system version?",
    "options": [
      { "letter": "A", "text": "Configuration Management Database (CMDB)" },
      { "letter": "B", "text": "Attributes" },
      { "letter": "C", "text": "Foundational Data" },
      { "letter": "D", "text": "Class" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow 플랫폼 표준 명세에 따라, 이름(Name), 시리얼 번호(Serial Number), 운영체제(Operating System)처럼 개별 구성 항목(CI)의 내부 스펙을 구체적으로 묘사하는 데이터 필드 조항들을 'Attributes(속성)'라고 부릅니다. 데이터베이스 전체를 아우르는 용어는 CMDB(A)이며, 외부의 공동 마스터 레코드는 Foundational Data(C), 테이블 단위의 뼈대는 Class(D)에 해당하므로 모두 오답입니다."
  },
  {
    "id": 177,
    "title": "Within the architectural framework of the ServiceNow Configuration Management Database, which term accurately represents a physical database table designed to store a specific type or categorized group of Configuration Items (CIs) that share identical schema attributes?",
    "options": [
      { "letter": "A", "text": "Configuration Management Database (CMDB)" },
      { "letter": "B", "text": "Attributes" },
      { "letter": "C", "text": "Foundational Data" },
      { "letter": "D", "text": "Class" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CMDB 데이터 모델 표준 명세에 따라, 공통된 속성(Attributes) 스펙을 공유하는 특정 자산 유형의 집합을 물리적으로 관리하는 데이터베이스 테이블 단위를 'Class(클래스)'라고 부릅니다. 예를 들어 Windows Server나 IP Switch 등은 독립된 하나의 클래스 테이블로 취급됩니다. 데이터베이스 전체 에코시스템을 뜻하는 CMDB(A), 개별 필드 명세인 Attributes(B), 참조용 조직 데이터인 Foundational Data(C)는 모두 클래스의 정의 영역을 벗어나므로 오답입니다."
  },
  {
    "id": 178,
    "title": "According to the Common Service Data Model (CSDM) framework, a systems engineering squad is requesting a new standardized Service Catalog Item to handle bulk underlying hardware lifecycle changes. Which specific platform persona is responsible for initiating this infrastructure upgrade request and mapping out its technical requirement specifications?",
    "options": [
      { "letter": "A", "text": "Enterprise Architect" },
      { "letter": "B", "text": "Application Service Owners" },
      { "letter": "C", "text": "Technology Service Owners" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CSDM 거버넌스 표준 명세에 따라, 서버나 데이터센터 등 공통 인프라스트럭처의 패치 및 하드웨어 업그레이드를 관장하는 카탈로그 아이템의 요건 정의와 발의 책임은 'Technology Service Owners(기술 서비스 소유자)'의 고유 스코프입니다. 거시적 데이터 모델 청사진만 제시하는 Enterprise Architect(A)나 상위 논리 서비스 단을 운영하며 인프라 서비스의 소비처 역할을 하는 Application Service Owners(B)는 인프라 요건 정의의 주체가 아니므로 오답입니다."
  },
  {
    "id": 179,
    "title": "Within the centralized CMDB Workspace, assigned CI class owners are receiving actionable data validation, attestation, and archival assignments consolidated under their native 'My Work' dashboard tab. Which specific core governance framework tool is programmatically evaluating enterprise policies and generating these lifecycle tasks?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "De-duplication templates" },
      { "letter": "C", "text": "CMDB Health Dashboard" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CMDB 거버넌스 아키텍처 표준 명세에 따라, 자산의 라이프사이클(퇴역, 아카이빙, 실사 등) 정책을 기반으로 조치용 작업 티켓을 생성하고 이를 CMDB Workspace의 My Work 탭으로 배포하는 전담 컴포넌트는 'CMDB Data Manager'입니다. 중복 데이터를 해결하는 De-duplication 시스템(B)이나 데이터 품질 무결성 평가 점수판을 제공하는 CMDB Health Dashboard(C)는 이 특정한 정책 기반 라이프사이클 태스크 파이프라인의 발행처가 아니므로 오답입니다."
  },
  {
    "id": 180,
    "title": "A Lead Configuration Quality Officer is defining continuous monitoring metrics using the 'CMDB Data Foundations Dashboard' store application. Which of the following data quality insights are natively tracked and supported by this specific dashboard application? (Choose all that apply)",
    "options": [
      { "letter": "A", "text": "It provides programmatic telemetry on active operational CIs successfully refreshed or updated within the last 90 days." },
      { "letter": "B", "text": "It delivers precise metric breakdowns for all incoming configuration data successfully processed via the Identification and Reconciliation Engine (IRE)." },
      { "letter": "C", "text": "It structures dedicated reports detailing all orphaned CIs missing essential relational dependencies within the configuration database." },
      { "letter": "D", "text": "It generates failure remediation task sheets for all individual configuration records that completely failed the core CMDB Health Dashboard audit rules." }
    ],
    "answer": ["A", "B", "C"],
    "explanation": "정답: A, B, C. ServiceNow 데이터 거버넌스 표준 아키텍처에 따라, 스토어 전용 앱인 CMDB Data Foundations Dashboard는 최근 90일 이내 데이터 최신성(A), 수집 데이터의 IRE 엔진 통과율(B), 그리고 관계 끊어진 고아 자산 식별(C)을 3대 핵심 메트릭 지표로 관리합니다. 전통적인 플랫폼 순정 기능인 CMDB 헬스 대시보드의 감사 규칙 실패 자산 목록(D)은 이 대시보드가 집계하는 고유 영역이 아니므로 오답입니다."
  },
  {
    "id": 181,
    "title": "An enterprise risk management team needs to audit and track structural regulatory compliance (such as GDPR or HIPAA) across the application portfolio. Within the Common Service Data Model (CSDM) framework, which statement accurately describes the core purpose and architectural role of the Information Object ([cmdb_ci_information_object]) artifact?",
    "options": [
      { "letter": "A", "text": "It genericizes and encapsulates performance telemetry and technical metadata discovered on a logical group of infrastructure Configuration Items." },
      { "letter": "B", "text": "It maps and conceptualizes the logical data taxonomy and sensitive data categories utilized by high-level Business Applications." },
      { "letter": "C", "text": "It catalogs and structures the dynamic payload data structures systematically exchanged between an external API gateway and an active Application Service." }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 표준 데이터 모델 아키텍처에 따라, 정보 객체(Information Object)는 비즈니스 애플리케이션(Business Application)이 취급하고 처리하는 민감/규제 데이터의 '논리적 범주(Logical Data Taxonomy)'를 명시하는 메타데이터 자산입니다. 이를 결합함으로써 특정 앱의 보안 위험도와 컴플라이언스 준수 현황(B)을 시각화할 수 있습니다. 일반 하드웨어 CI 성능 묘사(A)나 실시간 API 데이터 통신 규격 정의(C)는 정보 객체의 설계 목적이 아니므로 오답입니다."
  },
  {
    "id": 182,
    "title": "A CMDB Data Owner requires centralized visibility into the ingestion health, payload volume, and transfer success rates of multiple active store integrations. The Platform Owner installs the 'Service Graph Connector Central' plugin to fulfill this. Within which unified workspace interface will the new 'Service Graph Connector Central' telemetry tab be systematically embedded?",
    "options": [
      { "letter": "A", "text": "CMDB Workspace" },
      { "letter": "B", "text": "Service Graph Connector Workspace" },
      { "letter": "C", "text": "Discovery Admin Workspace" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow의 최신 통합 UX 디자인 가이드라인에 따라, 서드파티 연동 파이프라인의 건강 상태를 모니터링하는 'Service Graph Connector Central' 대시보드는 독립된 별도의 워크스페이스(B)를 신설하지 않고, 기존의 중앙 집중식 'CMDB Workspace'(A) 내부의 확장 서브 탭으로 안착되도록 설계되었습니다. 순수 네이티브 네트워크 IP 스캔 운영에 집중하는 Discovery Admin Workspace(C)는 서드파티 SGC 데이터 통합 관제 본산이 아니므로 오답입니다."
  },
  {
    "id": 183,
    "title": "A Regional Configuration Manager assigned to the APAC territories wants to utilize the central CMDB Health Dashboard to monitor and remediate data quality, but exclusively for CIs physical allocated within their region. How can the administrator systematically isolate and render a dedicated CMDB health score for these regionally relevant CIs?",
    "options": [
      { "letter": "A", "text": "Customize the core CMDB Health Dashboard background scheduled jobs to programmatically group the evaluated metric results by location attributes." },
      { "letter": "B", "text": "Navigate to global CMDB Health Dashboard properties and toggle the native system behavior preference titled 'Group scores by region' to true." },
      { "letter": "C", "text": "Construct a dedicated CMDB Group, explicitly allocate its Group Type as 'Health', and define dynamic query rules to encapsulate CIs by the specified region." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 건강도 거버넌스 규격에 따라, 클래스 계층에 상관없이 특정 책임 도메인(지역, 서비스 등)별로 점수를 분할 진단하는 표준 방법은 'CMDB Groups'를 생성하는 것입니다. 이때 그룹의 속성 분류인 Group Type을 반드시 'Health'로 선언해야 대시보드 필터와 연동되어 지역별 독점 스코어(C)를 산출할 수 있습니다. 백엔드 잡 커스텀(A)이나 존재하지 않는 시스템 글로벌 속성 토글(B)은 표준 아키텍처를 벗어나므로 오답입니다."
  },
  {
    "id": 184,
    "title": "The CMDB Administrator group wants to structurally filter which specific CI classes or asset subsets are evaluated and rendered on the central CMDB Health Dashboard to prevent performance degradation and score skewing. Which native framework feature should the group configure to achieve this target scope exclusion?",
    "options": [
      { "letter": "A", "text": "Reconciliation Rules" },
      { "letter": "B", "text": "Identification Rules" },
      { "letter": "C", "text": "Health Inclusion Rules" },
      { "letter": "D", "text": "Data Refresh Rules" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 데이터 품질 거버넌스 표준 명세에 따라, CMDB Health Dashboard가 매일 밤 스캔하고 표출할 구성 항목 클래스의 범위 및 화이트리스트 조건을 제어하는 전담 컴포넌트는 'Health Inclusion Rules [cmdb_health_inclusion_rule]'입니다. 데이터 소스 간의 필드 수정 권한을 중재하는 Reconciliation Rules(A)나 장비의 중복 신원을 판별하는 Identification Rules(B)는 대시보드 스캔 범위 제어와 무관하며, D번은 플랫폼에 실존하지 않는 가상의 용어이므로 오답입니다."
  },
  {
    "id": 185,
    "title": "A CMDB Configuration Manager is orchestration an automated data cleanup workflow via the CMDB Data Manager. The goal is to enforce corporate 'Delete' and 'Archive' policies for obsolete target server records within the New York datacenter hierarchy. According to ServiceNow data governance standard guardrails, within which specific lifecycle state must these servers reside to be safely processed by these automated purge policies?",
    "options": [
      { "letter": "A", "text": "Missing - Stolen" },
      { "letter": "B", "text": "End of Life - Retired" },
      { "letter": "C", "text": "In any active or inactive lifecycle state interchangeably" },
      { "letter": "D", "text": "Inventory - Available" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CMDB 데이터 정제 거버넌스 표준 명세에 따라, 자산을 시스템 상에서 완전히 삭제(Delete)하거나 아카이브(Archive) 테이블로 격리하는 정책은 데이터 무결성을 보호하기 위해 반드시 해당 자산이 공식 퇴역 상태인 'End of Life - Retired'(B) 상태에 안착해 있을 때만 가동됩니다. 감사 추적이 필요한 도난 자산(A)이나 즉시 서비스 배포가 가능한 가용 재고 자산(D)을 무단 정리할 경우 데이터 오염 및 서비스 장애를 유발하므로 오답이며, C번은 플랫폼 아키텍처 상 허용되지 않는 위험한 접근이므로 오답입니다."
  },
  {
    "id": 186,
    "title": "A Configuration Manager is reviewing legacy infrastructure status values (such as 'install_status' or 'hardware_status') and evaluating how they systematically synchronize with the equivalent CSDM 4.0 'Life cycle stage' and 'Life cycle stage status' fields. Under which native platform interface component can these specific relational transformation rules be reviewed?",
    "options": [
      { "letter": "A", "text": "Life cycle choice list" },
      { "letter": "B", "text": "Life cycle mappings" },
      { "letter": "C", "text": "Life cycle properties" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 표준 라이프사이클 거버넌스 명세에 따라, 레거시 상태 속성 필드 값들과 차세대 CSDM 라이프사이클 단계 및 상태 간의 1:1 상호 데이터 변환 및 양방향 동기화 규칙을 보존하는 전담 테이블 메뉴는 'Life cycle mappings [mn_lifecycle_mapping]'입니다. 단순히 필드의 드롭다운 리스트를 구성하는 Life cycle choice list(A)나 엔진의 전역 활성화 여부 토글만 제어하는 Life cycle properties(C)는 세부 매핑 내역을 검토하는 구역이 아니므로 오답입니다."
  },
  {
    "id": 187,
    "title": "A CMDB Administrator discovers a significant data quality gap where thousands of operational CIs lack a designated 'Support Group'. To remediate this at scale, the administrator wants to enforce a framework where the Support Group is programmatically inherited, populated, and dynamically maintained on the CI records from a centralized logical tier. Which CSDM artifact should be leveraged to native achieve this synchronization?",
    "options": [
      { "letter": "A", "text": "Technology Management Service Offering (Technical Service Offering)" },
      { "letter": "B", "text": "Dynamic CI Group" },
      { "letter": "C", "text": "Technology Management Service (Technical Service)" },
      { "letter": "D", "text": "CI Class Manager" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 거버넌스 데이터 모델 표준 규격에 따라, 개별 인프라 자산(CI)들의 실실적인 운영 담당 그룹(Support Group, Change Group 등)을 중앙 집중식으로 동기화하고 자동 관리하는 본산은 'Technical Service Offering'입니다. 오퍼링 레벨에 지정된 지원 그룹 정보는 하부 관계형 자산들로 자동 전파(A)되도록 플랫폼 아키텍처가 설계되었습니다. 상위 개념 분류단인 Technical Service(C)나 동적 컨테이너인 Dynamic CI Group(B)은 속성 자동 전파 및 유지 기능을 전담하지 않으므로 오답입니다."
  },
  {
    "id": 188,
    "title": "The Change Management team needs to execute a critical operating system patch across hundreds of infrastructure nodes simultaneously. They plan to utilize a Dynamic CI Group ([cmdb_ci_query_based_service]) to structurally target those assets. Which specific field on the Change Request form must be populated with this Dynamic CI Group record to trigger native downstream Affected CI population?",
    "options": [
      { "letter": "A", "text": "Configuration Item" },
      { "letter": "B", "text": "Business Service" },
      { "letter": "C", "text": "Service Offering" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 및 ITSM 아키텍처 표준 명세에 따라, 동적 CI 그룹(Dynamic CI Group)은 데이터 모델 상 cmdb_ci의 자식 테이블이므로 변경 요청서 양식의 메인 자산 필드인 'Configuration Item'(A)에 직접 입력되어야 합니다. 그룹이 입력되면 시스템이 자동으로 하부의 실제 물리 자산들을 확장하여 'Affected CIs' 리스트에 바인딩합니다. 상위 비즈니스 중단 여부 및 SLA 범위를 모니터링하는 Business Service(B)나 Service Offering(C) 필드는 변경의 기술적 대상 자산을 직접 바인딩하는 곳이 아니므로 오답입니다."
  },
  {
    "id": 189,
    "title": "A CMDB Administrator is pitching the deployment of the 'CMDB Data Foundations Dashboard' to the infrastructure governance board. Which of the following statements accurately characterize the operational benefits of utilizing this specific store application? (Choose two)",
    "options": [
      { "letter": "A", "text": "It systematically scans and verifies that mission-critical configuration data is valid and properly aligned with CSDM blueprints." },
      { "letter": "B", "text": "It deploys hands-free system automation to independently overwrite and remediate identified configuration risks without human review." },
      { "letter": "C", "text": "It delivers structured, step-by-step playbooks to assist configuration analysts in the proactive manual remediation of data compliance risks." },
      { "letter": "D", "text": "It provisions an open-source development framework enabling administrators to create completely bespoke, custom health metrics from scratch." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow 데이터 컴플라이언스 가이드라인에 따라, CMDB Data Foundations Dashboard는 중요 데이터 아키텍처가 적절하게 설정되어 있는지 유효성을 검증(A)하는 진단 능력이 뛰어납니다. 또한 데이터 오류를 해결할 수 있도록 지원하는 단계별 안내서인 'Remediation Playbook'을 제공하여 수동 조치 프로세스를 보조(C)합니다. 자산의 결함 데이터를 사람이 검토하기도 전에 독단적으로 강제 자동 수정하는 완전 자동화 기능(B)이나 커스텀 지표 확장 프레임워크(D)는 시스템의 설계 스코프를 벗어난 오답입니다."
  },
  {
    "id": 190,
    "title": "A CMDB Administrator is aligning their configuration infrastructure with CSDM 4.0 data governance best practices using the Life Cycle Control framework. Immediately after clicking the 'Enable Life Cycle Sync' system toggle, which of the following operational actions represents the mandatory next step before full production deployment?",
    "options": [
      { "letter": "A", "text": "Modify and downgrade the normalized CSDM Life Cycle Stage choice records to match custom non-standard legacy status strings." },
      { "letter": "B", "text": "Immediately run the full execution script to 'Activate the CSDM Life Cycle field mappings' across all production hardware tables." },
      { "letter": "C", "text": "Analyze and resolve any incomplete or conflicting field mappings programmatically identified in the system generated Discrepancy Report." }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 라이프사이클 마이그레이션 아키텍처 표준 명세에 따라, Enable Life Cycle Sync를 수행한 직후 시스템은 데이터 검증을 통해 'Discrepancy Report(불일치 리포트)'를 발행합니다. 어드민은 데이터 오염을 예방하기 위해 미완성되거나 모순된 매핑 내역을 먼저 해결(C)해야 합니다. 정합성을 확보하기 전에 성급하게 매핑을 전면 가동(B)하면 심각한 데이터 충돌이 발생하며, 표준 구조를 레거시 수준으로 역변환하는 행위(A) 또한 아키텍처 가이드라인에 위배되므로 오답입니다."
  },
  {
    "id": 191,
    "title": "A CSDM Data Manager is evaluating enterprise metrics to measure how accurately the organizational Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) align with recommended data blueprints. Which specific framework maturity tab within the CSDM Data Foundations Dashboard hosts these precise ITIL operational alignment metrics?",
    "options": [
      { "letter": "A", "text": "Crawl" },
      { "letter": "B", "text": "Walk" },
      { "letter": "C", "text": "Run" },
      { "letter": "D", "text": "Fly" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 성숙도 모델 거버넌스 명세에 따라, 하부 인프라 자산을 엔지니어링 운영 컨텍스트와 결합하는 'Technical Service' 및 'Technical Service Offering'의 유효성 및 준수율 평가지표는 대시보드의 2단계 구역인 'Walk' 탭(B)에서 독점 제공합니다. 상위 비즈니스 서비스 포트폴리오를 다루는 Run(C)이나 전사 리스크 자산을 통제하는 Fly(D), 그리고 기초 자산만 식별하는 Crawl(A) 탭은 기술 서비스 오퍼링 준수율의 핵심 측정 본산이 아니므로 오답입니다."
  },
  {
    "id": 192,
    "title": "A CMDB Administrator is configuring the Staleness metric evaluation threshold within the CMDB Health Dashboard (Correctness Scorecard) to identify abandoned assets. Which native platform infrastructure field is systematically utilized by the health evaluation engine to calculate the duration of record staleness?",
    "options": [
      { "letter": "A", "text": "Last modified on (last_modified)" },
      { "letter": "B", "text": "Created (sys_created_on)" },
      { "letter": "C", "text": "Updated (sys_updated_on)" },
      { "letter": "D", "text": "First discovered (first_discovered)" },
      { "letter": "E", "text": "Most recent discovery (last_discovery)" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow CMDB 건강도 데이터 거버넌스 표준 명세에 따라, Correctness 하부의 Staleness(노후화) 메트릭은 데이터 수집 출처(수동 입력, API, 자동 탐지 등)에 상관없이 해당 CI 레코드가 최종적으로 갱신된 통합 시점을 추적해야 하므로 플랫폼 시스템 필드인 'Updated (sys_updated_on)'(C)를 기준으로 기간을 연산합니다. 오직 자동 탐지 feeds만 대변하는 last_discovery(E)나, 변경 흔적을 대변하지 못하는 생성이력 필드인 sys_created_on(B)은 노후화 계산의 표준 기준 필드가 아니므로 오답입니다."
  },
  {
    "id": 193,
    "title": "A Lead Data Integration Architect is evaluating the core functional characteristics and architectural behaviors of the ServiceNow IntegrationHub ETL store application. Which of the following capabilities accurately define this tool? (Choose two)",
    "options": [
      { "letter": "A", "text": "It programmatically transforms and integrates third-party raw source data into both native CMDB target classes and non-CMDB core platform tables." },
      { "letter": "B", "text": "It independently executes network credential scans to perform live asset discovery and automatically update active configuration items." },
      { "letter": "C", "text": "It natively couples and processes incoming payloads through the Identification and Reconciliation Engine (IRE) to enforce strict data integrity rules." },
      { "letter": "D", "text": "It operates exclusively as the hardcoded out-of-the-box system utility engineered solely for importing Microsoft SCCM or Intune database records." }
    ],
    "answer": ["A", "C"],
    "explanation": "정답: A, C. ServiceNow 데이터 통합 거버넌스 명세에 따라, IntegrationHub ETL은 시각적 매핑 UI를 제공하며 CMDB뿐만 아니라 사용자, 위치 등 일반 Non-CMDB 테이블(A)로의 데이터 적재도 폭넓게 지원합니다. 또한 적재 과정에서 반드시 백엔드 식별 및 조정 엔진(IRE)을 경유(C)하도록 강제하여 중복 자산 방지 및 데이터 무결성을 보장합니다. 스스로 네트워크를 스캔하는 Discovery 엔진(B)이 아니며, 특정 MS 제품 전용 한정 수입 도구(D)도 아니므로 오답입니다."
  },
  {
    "id": 194,
    "title": "A global retail enterprise wants to ensure that any IT incidents impacting revenue-generating, customer-facing checkout application services are handled with the highest operational urgency. According to CSDM data model standards, which architectural entity attribute should be defined to drive business-aware incident prioritization matrices?",
    "options": [
      { "letter": "A", "text": "The operational 'Assignment Group' populated within the underlying hardware CI record." },
      { "letter": "B", "text": "The consolidated list of 'Affected CIs' bound directly inside the active Incident record." },
      { "letter": "C", "text": "The systemic 'Service Classification' code defined on the parent Technical Service node." },
      { "letter": "D", "text": "The governance-driven 'Business Criticality' value assigned on the distinct Service Offering layer." }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CSDM 거버넌스 및 ITSM 연동 표준 명세에 따라, 비즈니스 중단 및 매출 리스크에 맞춰 장애 우선순위를 동적으로 차등화하는 마스터 속성은 서비스 오퍼링 레벨에 존재하는 'Business Criticality' 필드입니다. 플랫폼은 이 값을 참조하여 인시던트의 Impact/Urgency 및 SLA를 상향 조정(D)합니다. 단순 엔지니어 배정 부서(A), 장애 영향 자산 목록(B), 서비스 테이블의 종류를 식별하는 스키마 구분 필드(C)는 비즈니스 가치 기반 우선순위 제어권을 가지지 못하므로 오답입니다."
  },
  {
    "id": 195,
    "title": "A configuration analyst wants to extract a live list of operational infrastructure assets by typing an intuitive conversational sentence, such as 'Show me all production Windows servers located in London'. Within which centralized hub interface can a ServiceNow administrator execute these Natural Language Queries (NLQ) against the CMDB data repository?",
    "options": [
      { "letter": "A", "text": "CMDB Data Manager" },
      { "letter": "B", "text": "CI Class Manager" },
      { "letter": "C", "text": "CMDB Workspace" },
      { "letter": "D", "text": "CMDB Health Dashboard" }
    ],
    "answer": ["C"],
    "explanation": "정답: C. ServiceNow 차세대 UX 및 AI 거버넌스 표준 명세에 따라, 사용자가 복잡한 쿼리 빌더 코딩 없이 일상적인 대화형 언어로 CMDB 자산을 실시간 탐색할 수 있는 'Natural Language Query (NLQ)' 입력 컴포넌트는 통합 운영 허브인 'CMDB Workspace' 메인 화면에 내이티브하게 배치되어 작동합니다(C). 라이프사이클 정책을 다루는 Data Manager(A), 스키마 설정을 다루는 Class Manager(B), 품질 점수만 리포팅하는 Health Dashboard(D)는 이 지능형 동적 NLQ 검색 인터페이스를 호스팅하지 않으므로 오답입니다."
  },
  {
    "id": 196,
    "title": "The CMDB Administrator configured an Identification Rule hierarchy for a hardware class with two distinct entries ordered by priority—Priority 100: Name, Priority 200: IP Address. During data ingestion, Payload CI_One triggers a perfect match on an existing record's Name attribute, while Payload CI_Two triggers a match exclusively on an existing record's IP Address attribute while its Name is entirely different. Which lifecycle outcome is correct?",
    "options": [
      { "letter": "A", "text": "CI_One will successfully execute an update on the matched existing record, whereas CI_Two will fail the weak identifier criteria evaluation and be inserted as a brand new configuration item." },
      { "letter": "B", "text": "CI_One will bypass the rule to be inserted as a new configuration item, while CI_Two will be granted authority to overwrite and update the existing record based on the IP address match." },
      { "letter": "C", "text": "Both incoming payloads systematically satisfy criteria entry rules independently, resulting in both CI_One and CI_Two updating their respective matched existing configuration items." },
      { "letter": "D", "text": "The IRE engine will flag the overlapping attribute telemetry as a conflict constraint, causing both CI_One and CI_Two to be clean inserted as dual new records." }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow IRE(식별 및 조정 엔진)의 표준 순차 평가 매커니즘에 따라, 최상위 식별 자원인 Name이 매칭된 CI_One은 신뢰도가 확보되었으므로 기존 레코드를 안전하게 업데이트(A)합니다. 반면, 하위 종속 속성인 IP 주소만 단독 매칭된 CI_Two는 다른 주요 속성 불일치로 인해 식별 정합성이 불충분하므로 기존 자산 장부를 오염시키지 않기 위해 새로운 CI로 안전하게 격리 분리 삽입(A) 처리됩니다. 따라서 무차별 업데이트나 무차별 신규 생성을 선언한 나머지 선지들은 오답입니다."
  },
  {
    "id": 197,
    "title": "A Configuration Governance Officer needs to enforce a framework where the 'Managed by group' attribute is programmatically populated and synchronized down to a target group or underlying class of infrastructure Configuration Items (CIs). Which two native platform components can be utilized to host and drive this operational group synchronization? [Choose 2 answers]",
    "options": [
      { "letter": "A", "text": "CI Class Manager" },
      { "letter": "B", "text": "Technology Management Services (Technical Services)" },
      { "letter": "C", "text": "Business Service Offerings" },
      { "letter": "D", "text": "Business Services" },
      { "letter": "E", "text": "Technology Management Offerings (Technical Service Offerings)" }
    ],
    "answer": ["A", "E"],
    "explanation": "정답: A, E. ServiceNow 데이터 모델 규격에 따라 개별 인프라 자산의 관리 주체(Managed by group) 속성을 대량 동기화하는 경로는 이원화되어 있습니다. 첫째, 테이블 스키마 차원에서 고정 규칙을 부여하는 'CI Class Manager'(A)가 있으며, 둘째, CSDM 관계선을 통해 하부 종속 자산들로 그룹 컨텍스트를 동적 상속 전파하는 'Technology Management Offerings'(E)가 정답입니다. 구체적 속성이 존재하지 않는 추상적인 Service 단(B)이나, 인프라 엔지니어링 도메인이 아닌 대고객 비즈니스 계층(C, D)은 동기화 원천이 될 수 없으므로 오답입니다."
  },
  {
    "id": 198,
    "title": "Within the common data governance lifecycle of the Common Service Data Model (CSDM) blueprint, which foundational domain is an Enterprise Architect (EA) primarily responsible for governing and planning?",
    "options": [
      { "letter": "A", "text": "Ideation & Strategy" },
      { "letter": "B", "text": "Design & Planning (Design Domain)" },
      { "letter": "C", "text": "Service Delivery" },
      { "letter": "D", "text": "Service Consumption" },
      { "letter": "E", "text": "Build & Integration" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 데이터 모델 거버넌스 표준 명세에 따라, 엔터프라이즈 아키텍트(EA)는 기업의 비즈니스 역량(Business Capabilities)과 비즈니스 애플리케이션(Business Applications) 포트폴리오라는 상위 개념 청사진을 기획하는 'Design' 도메인(B)의 핵심 오너입니다. 프로젝트 기획 프로세스 단어인 Ideation(A)이나 하부 배포 실무를 뜻하는 Build/Delivery(C, E), 그리고 최종 소비 레이어인 Consumption(D)은 CSDM 상 EA의 핵심 데이터 자산 통제 도메인이 아니므로 오답입니다."
  },
  {
    "id": 199,
    "title": "An enterprise configuration committee is evaluating the long-term operational impact of bypassing the Common Service Data Model (CSDM) standards. Which of the following conditions represent direct architectural consequences of not aligning with the public CSDM framework? [Choose 2 answers]",
    "options": [
      { "letter": "A", "text": "The strict technical inability to download or install standard store applications from the ServiceNow Store repository." },
      { "letter": "B", "text": "A severe increase in corporate technical debt fueled by the unchecked proliferation of bespoke custom tables and script workarounds." },
      { "letter": "C", "text": "The immediate physical loss of core historical asset configuration records during standard background data sweeps." },
      { "letter": "D", "text": "Severe structural incompatibility and data misalignments with future out-of-the-box ServiceNow products and major engine releases." }
    ],
    "answer": ["B", "D"],
    "explanation": "정답: B, D. ServiceNow 플랫폼 거버넌스 표준 명세에 따라 CSDM 청사진을 무시하고 임의 커스텀을 남발할 경우, 유지보수 비용을 폭증시키는 'Technical Debt(기술 부채)'(B)가 기하급수적으로 증가합니다. 또한 차세대 릴리스나 신규 고도화 제품군들은 CSDM 스키마의 완벽한 정합성을 전제로 구동되므로 미래 제품과의 'Incompatibility(호환성 상실)'(D) 리스크를 유발합니다. 설치 프로세스 자체를 차단(A)하거나 데이터 물리적 증발(C)을 일으키는 것은 아니므로 오답입니다."
  },
  {
    "id": 200,
    "title": "Within the core structured architecture of the Common Service Data Model (CSDM) blueprint, which foundational domain represents the live operational layer containing deployed service instances (Application Services) and their related, dynamically discoverable, infrastructure components?",
    "options": [
      { "letter": "A", "text": "Service Consumption (Sell / Consume Domain)" },
      { "letter": "B", "text": "Design & Planning (Design Domain)" },
      { "letter": "C", "text": "Ideation & Strategy" },
      { "letter": "D", "text": "Service Delivery (Manage Technical Services Domain)" },
      { "letter": "E", "text": "Build & Integration" }
    ],
    "answer": ["D"],
    "explanation": "정답: D. ServiceNow CSDM 데이터 거버넌스 표준 명세에 따라, 실제 프로덕션 환경에 배포된 서비스 인스턴스(Application Service) 및 이와 연동되어 자동 탐지 엔진(Discovery)에 의해 수집·관리되는 하부 인프라 기술 자산(CIs) 간의 유기적 지형도를 관제하는 본산은 'Manage Technical Services (Service Delivery)' 도메인(D)입니다. 추상적인 앱 청사진만 기획하는 Design(B)이나, 카탈로그 소비를 관장하는 Consumption(A), 그리고 CSDM 도메인이 아닌 프로세스성 명사들(C, E)은 실시간 배포 자산 탐지 도메인을 충족하지 못하므로 오답입니다."
  },
  {
    "id": 201,
    "title": "Within the standardized enterprise blueprint of the Common Service Data Model (CSDM) 4.0, which operational data domain natively hosts and contextualizes external-facing Business Service Offerings and customer engagement entities driven by the Customer Service Management (CSM) application portfolio?",
    "options": [
      { "letter": "A", "text": "Service Delivery (Manage Technical Services Domain)" },
      { "letter": "B", "text": "Service Consumption (Sell / Consume Domain)" },
      { "letter": "C", "text": "Build & Integration" },
      { "letter": "D", "text": "Ideation & Strategy" },
      { "letter": "E", "text": "Design & Planning (Design Domain)" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 거버넌스 표준 명세에 따라, 외부 고객(Customers) 및 비즈니스 사용자와 소통하며 최종 비즈니스 가치와 서비스 계약을 인도·소비하는 영역은 'Sell / Consume (Service Consumption)' 도메인(B)입니다. 따라서 외부 고객 포탈 및 케이스 관리를 전담하는 Customer Service Management(CSM) 솔루션은 이 도메인에 완벽히 매핑됩니다. 엔지니어 중심의 운영 레이어인 Service Delivery(A)나 아키텍처 기획단인 Design(E)은 고객 서비스 소비를 직접 관장하지 않으므로 오답입니다."
  },
  {
    "id": 202,
    "title": "Within the common data governance lifecycle of the Common Service Data Model (CSDM), which distinct service instance type operates as the logical representation of a live deployed application stack and its structural infrastructure dependencies?",
    "options": [
      { "letter": "A", "text": "Business Application [cmdb_ci_business_app]" },
      { "letter": "B", "text": "Application Service [cmdb_ci_service_auto]" },
      { "letter": "C", "text": "Application [cmdb_ci_appl]" },
      { "letter": "D", "text": "Technology Management Service [cmdb_ci_service_technical]" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 운영 거버넌스 표준 명세에 따라, 실제 런타임 환경에 배포된 소프트웨어 스택과 그 하부 인프라 의존성 관계선들을 논리적인 서비스 단위로 묶어 모니터링 및 ITSM 영향도 분석의 교두보 역할을 하는 컴포넌트는 'Application Service [cmdb_ci_service_auto]'입니다. 아키텍처 기획 문서 역할을 하는 Business Application(A)이나 단일 소프트웨어 인스턴스 조각인 Application(C), 그리고 운영 부서의 묶음 분류인 Technical Service(D)는 배포된 스택의 전체 의존성을 논리적으로 대변하는 인스턴스가 아니므로 오답입니다."
  },
  {
    "id": 203,
    "title": "An IT Service Executive wants to deploying a unified interface that allows Service Owners and Product Managers to holistically monitor and collectively manage their business portfolios, technical services, operational offerings, and strategic software products through the full Plan, Build, and Run lifecycle. Which native ServiceNow workspace perfectly fulfills this cross-domain data aggregation?",
    "options": [
      { "letter": "A", "text": "Service Builder" },
      { "letter": "B", "text": "Digital Portfolio Management (DPM)" },
      { "letter": "C", "text": "CMDB Workspace" },
      { "letter": "D", "text": "CI Class Manager" },
      { "letter": "E", "text": "Service Operations Workspace (SOW)" }
    ],
    "answer": ["B"],
    "explanation": "정답: B. ServiceNow CSDM 및 제품 포트폴리오 거버넌스 표준 명세에 따라 기획(Plan), 개발(Build), 운영(Run) 단계를 넘나들며 포트폴리오, 서비스, 오퍼링, 제품의 전 수명주기 건강도를 단일 창으로 통합 모니터링 및 제어하는 독점 워크스페이스는 'Digital Portfolio Management (DPM)'입니다(B). 실시간 장애 관제 및 헬프데스크 운영에 특화된 Service Operations Workspace(E)나 자산 탐지·검색을 위한 CMDB Workspace(C), 그리고 단순 생성기인 Service Builder(A)는 전사 포트폴리오 라이프사이클 통합 분석을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 204,
    "title": "An IT Service Portfolio Manager needs to design and provision multiple CSDM artifacts, including Business Services, Technology Management Services, and their corresponding Offerings. Instead of utilizing legacy row-by-row backend forms and lists, which native step-by-step guided utility should be leveraged to achieve this in a highly streamlined and compliant manner?",
    "options": [
      { "letter": "A", "text": "CMDB Workspace" },
      { "letter": "B", "text": "Service Mapping" },
      { "letter": "C", "text": "Application Service Wizard" },
      { "letter": "D", "text": "CI Class Manager" },
      { "letter": "E", "text": "Service Builder" }
    ],
    "answer": ["E"],
    "explanation": "정답: E. ServiceNow 서비스 카탈로그 및 CSDM 거버넌스 표준 명세에 따라, 비즈니스/기술 서비스 및 오퍼링 개체들을 복잡한 테이블 폼 수동 조작 없이 마법사 기반 UI를 통해 패키지 형태로 신속하게 빌드·연결하는 통합 유틸리티는 'Service Builder'입니다(E). 자산 탐색 중심의 CMDB Workspace(A), 기술적 자산 토폴로지를 스캔하는 Service Mapping(B), 오직 배포판 인스턴스 전용 생성 툴인 Application Service Wizard(C)는 이 포괄적인 서비스 포트폴리오 상품 디자인 능력을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 205,
    "title": "A Configuration Governance Analyst needs to interconnect a live 'Application Service' instance with its corresponding upstream 'Business Application' design record, its operational 'Technology Management Offering', and its customer-facing 'Business Service Offering'. Which native setup workspace or configuration workflow wizard should be leveraged to systematically bind these multi-domain CSDM relationships?",
    "options": [
      { "letter": "A", "text": "Application Service Wizard" },
      { "letter": "B", "text": "Service Builder" },
      { "letter": "C", "text": "CMDB Workspace" },
      { "letter": "D", "text": "IntegrationHub ETL" },
      { "letter": "E", "text": "CI Class Manager" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 관계성 거버넌스 표준 명세에 따라, 실시간 가동 중인 개별 Application Service 레코드를 허브 삼아 상위 비즈니스 애플리케이션(기획), 기술 서비스 오퍼링(운영), 비즈니스 서비스 오퍼링(소비) 간의 다차원 관계선을 일괄 매핑하고 조립하는 전담 구성 워크플로우 헬퍼는 'Application Service Wizard'입니다(A). 서비스 포트폴리오 카탈로그 구조 자체를 빌드하는 Service Builder(B)나 스키마를 설계하는 CI Class Manager(E)는 개별 배포 인스턴스 중심의 CSDM 다차원 관계 결합 기능을 제공하지 않으므로 오답입니다."
  },
  {
    "id": 206,
    "title": "Aligning infrastructure with the Common Service Data Model (CSDM) unlocks native ITSM workflow automations. When an IT operator binds a specific Configuration Item (CI) to a newly initialized ticket, which of the following behavioral routing rules are true within ServiceNow? [Choose 2 answers]",
    "options": [
      { "letter": "A", "text": "The 'Managed by group' defined on the target CI systematically auto-populates the operational Assignment group field on the Incident form." },
      { "letter": "B", "text": "The 'Approval group' mapped within the target CI systematically auto-populates the technical Assignment group field on the Change Request form." },
      { "letter": "C", "text": "The 'Change group' configured on the target CI systematically auto-populates the technical Assignment group field on the Change Request form." },
      { "letter": "D", "text": "The 'Support group' configured on the target CI systematically auto-populates the operational Assignment group field on the Incident form." }
    ],
    "answer": ["C", "D"],
    "explanation": "정답: C, D. ServiceNow 표준 ITSM 및 CSDM 거버넌스 연동 명세에 따라, 실시간 장애를 복구하는 Incident 티켓의 Assignment group은 자산의 수리를 담당하는 'Support group'(D)에서 자동으로 값을 상속받습니다. 반면, 인프라 변경 및 패치 작업을 관리하는 Change Request 티켓의 Assignment group은 자산의 작업 그룹을 대변하는 'Change group'(C) 속성에서 값을 자동으로 위임받아 채워집니다. 자산 데이터 장부 관리자인 Managed by group(A)이나 결재 승인 부서인 Approval group(B)은 티켓의 실무 처리 부서로 자동 배정되지 않으므로 오답입니다."
  },
  {
    "id": 207,
    "title": "When triage operators initialize a new Incident or Change Request record, the main 'Configuration item' field strictly mandates the selection of live, operational Configuration Items (CIs). Which of the following pair satisfies this operational ingestion requirement under CSDM guidelines? [Choose 2 answers]",
    "options": [
      { "letter": "A", "text": "Dynamic CI Group [cmdb_ci_query_based_service]" },
      { "letter": "B", "text": "Application Service [cmdb_ci_service_auto]" },
      { "letter": "C", "text": "Installed Software Discovery Records" },
      { "letter": "D", "text": "Business Application [cmdb_ci_business_app]" }
    ],
    "answer": ["A", "B"],
    "explanation": "정답: A, B. ServiceNow CSDM 및 ITSM 거버넌스 표준 명세에 따라, 실시간 장애 및 변경 작업의 표적이 되는 메인 Configuration item 필드에는 운영 상태 추적 및 지원 그룹 매핑이 가능한 'Operational CIs'가 상주해야 합니다. 따라서 라이브 배포판 인스턴스인 Application Service(B)와 대량 인프라 제어 통로인 Dynamic CI Group(A)이 완벽한 정답입니다. 개념적 기획서에 불과한 Business Application(D)이나 서버 내부의 단순 참조 스캔 데이터인 Installed Software(C)는 독립적인 운영 타깃 CI로 직접 유입될 수 없으므로 오답입니다."
  },
  {
    "id": 208,
    "title": "To establish and sustain a highly successful Configuration Management Data Repository, an organization must focus on the 'Data Foundation Lifecycle' framework. Which of the following components constitute the official 3 pillars of this architectural framework? [Choose 3 answers]",
    "options": [
      { "letter": "A", "text": "Correctness" },
      { "letter": "B", "text": "Insight" },
      { "letter": "C", "text": "Ingest" },
      { "letter": "D", "text": "Govern" },
      { "letter": "E", "text": "Compliance" },
      { "letter": "F", "text": "Completeness" }
    ],
    "answer": ["B", "C", "D"],
    "explanation": "정답: B, C, D. ServiceNow 데이터 거버넌스 라이프사이클 표준 명세에 따라, 데이터 파운데이션을 성취하기 위한 3대 기둥(3 Pillars)은 데이터를 표준 인입하는 'Ingest'(C), 무결성 가드레일 규칙을 강제하는 'Govern'(D), 그리고 파운데이션 대시보드와 플레이북으로 처방을 내리는 'Insight'(B)입니다. 선지에 배치된 Completeness(F), Correctness(A), Compliance(E)는 CMDB Health Dashboard의 품질 측정용 3대 스코어카드(3 Cs) 분류 명칭일 뿐, 파운데이션 수명주기를 관장하는 3대 기둥 프레임워크가 아니므로 오답입니다."
  },
  {
    "id": 209,
    "title": "Which native ServiceNow architectural feature functions as a built-in visualization, analytics, and reporting console specifically engineered to help organizations systematically assess, benchmark, and improve their implementation maturity of the Common Service Data Model (CSDM) based on factory-recommended good practices?",
    "options": [
      { "letter": "A", "text": "Application Service Wizard" },
      { "letter": "B", "text": "CI Class Manager" },
      { "letter": "C", "text": "CMDB Health Dashboard" },
      { "letter": "D", "text": "Service Builder" },
      { "letter": "E", "text": "CSDM Data Foundations Dashboard" }
    ],
    "answer": ["E"],
    "explanation": "정답: E. ServiceNow 데이터 컴플라이언스 및 거버넌스 표준 명세에 따라, 인스턴스 전역의 자산 관계 모델이 CSDM 모범 사례(Good Practices) 규격에 부합하는지 정량 진단하고, Crawl-Walk-Run-Fly 성숙도 탭을 통해 가시성과 개선 플레이북을 독점 제공하는 내장 분석 도구는 'CSDM Data Foundations Dashboard'입니다(E). 자산 자체의 데이터 품질 무결성(3Cs)만 측정하는 CMDB Health Dashboard(C)나, 개별 관계선을 수동 조립하는 Wizard(A), 상품을 생성하는 Builder(D)는 CSDM 포트폴리오 정렬도 진단이라는 고유 목적을 충족하지 못하므로 오답입니다."
  },
  {
    "id": 210,
    "title": "To eliminate the data silos caused by legacy status fields across various infrastructure tables, the Common Service Data Model (CSDM) establishes a unified data schema rule. Which combination of attributes does CSDM explicitly recommend to utilize for governing the standard holistic lifecycle of any Configuration Item (CI)?",
    "options": [
      { "letter": "A", "text": "Life cycle stage and stage status" },
      { "letter": "B", "text": "Hardware status" },
      { "letter": "C", "text": "Install status" },
      { "letter": "D", "text": "Operational status" }
    ],
    "answer": ["A"],
    "explanation": "정답: A. ServiceNow CSDM 라이프사이클 거버넌스 표준 명세에 따라, 플랫폼의 모든 구성 항목(CI) 자산의 탄생부터 퇴역까지 일관된 방식으로 이 단계(Dual-tier) 매트릭스로 관리하도록 권장하는 공식 필드 쌍은 'Life cycle stage'와 'Life cycle stage status'입니다(A). 선지에 제시된 Hardware status(B), Install status(C), Operational status(D)는 과거에 쓰이던 파편화된 레거시 필드들이며, 차세대 마이그레이션 및 동기화 엔진을 통해 표준 필드(A)로 통합 변환되어야 하는 대상이므로 오답입니다."
  }
];
