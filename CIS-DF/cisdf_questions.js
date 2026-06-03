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
    "explanation": "정답: D. Business Application, Information Object, Capability는 CSDM의 설계 레이어 자산이므로 Design & Planning 도메인으로 분류합니다."
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
    "explanation": "정답: A. IntegrationHub ETL은 IRE를 전제로 데이터 식별·조정을 수행하므로 중복 생성과 비인가 레코드 유입 위험을 줄이는 권장 적재 방식입니다."
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
    "explanation": "정답: A, C. Playbook은 품질 저하의 downstream impact를 가시화하고, 개선 가능한 remediation option을 제시해 실행 가능한 거버넌스 조치를 돕습니다."
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
    "explanation": "정답: B. 해당 대시보드는 기본 활성 기능이 아니라 ServiceNow Store에서 설치하는 무료 애플리케이션입니다."
  },
  {
    "id": 5,
    "title": "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "Reconciliation Rules"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "CMDB 360/Multisource CMDB"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. Dynamic Reconciliation은 CMDB 360/Multisource 기능에서 제공되므로 먼저 해당 기능 세트를 활성화해야 합니다."
  },
  {
    "id": 6,
    "title": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      {
        "letter": "A",
        "text": "Many-to-one"
      },
      {
        "letter": "B",
        "text": "Many-to-many"
      },
      {
        "letter": "C",
        "text": "One-to-many"
      },
      {
        "letter": "D",
        "text": "One-to-one"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 조건이 서버 1대가 여러 애플리케이션을 호스팅하는 구조이므로 Application Server 기준 관계는 One-to-many입니다."
  },
  {
    "id": 7,
    "title": "A Data Center Manager is defining the relationship between Application Servers and Applications in the CMDB. The company environment has the following characteristics: Multiple Application Servers, Each server can host multiple Applications, Each Application can run on multiple servers. Which describes the relationship?",
    "options": [
      {
        "letter": "A",
        "text": "One-to-one"
      },
      {
        "letter": "B",
        "text": "One-to-many"
      },
      {
        "letter": "C",
        "text": "Many-to-one"
      },
      {
        "letter": "D",
        "text": "Many-to-many"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 서버와 애플리케이션이 서로 다수와 연결되는 조건이므로 관계 유형은 Many-to-many가 정확합니다."
  },
  {
    "id": 8,
    "title": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Enterprise Architect"
      },
      {
        "letter": "B",
        "text": "Application Service Owners"
      },
      {
        "letter": "C",
        "text": "Technology Service Owners"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 인프라 업그레이드 요청은 기술 서비스 운영 책임 범위이므로 요구사항 시작·정의 역할은 Technology Service Owner에 해당합니다."
  },
  {
    "id": 9,
    "title": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "Allows for additional stratification of Technical team's support structure"
      },
      {
        "letter": "B",
        "text": "Improves the implementation velocity of APM Foundation"
      },
      {
        "letter": "C",
        "text": "Enables impact assessments for incident, problem, and change on Business Services"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CSDM Walk 정렬의 대표 가치가 서비스 영향도 분석이므로 Incident·Problem·Change에 대한 Business Service impact assessment가 가능해집니다."
  },
  {
    "id": 10,
    "title": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      {
        "letter": "A",
        "text": "Completeness"
      },
      {
        "letter": "B",
        "text": "Correctness"
      },
      {
        "letter": "C",
        "text": "Compliance"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Stale CI는 데이터 최신성과 정확성 문제이므로 CMDB Health의 Correctness scorecard에서 관리합니다."
  },
  {
    "id": 11,
    "title": "Which field on Incident form is automatically populated after a CI is selected that reference an appropriate support group?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment Group"
      },
      {
        "letter": "B",
        "text": "Support Group"
      },
      {
        "letter": "C",
        "text": "Approval Group"
      },
      {
        "letter": "D",
        "text": "Managed by Group"
      },
      {
        "letter": "E",
        "text": "Change Group"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Incident에서 CI 선택 시 관련 지원 정보가 라우팅에 반영되어 Assignment Group이 자동 설정됩니다."
  },
  {
    "id": 12,
    "title": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      {
        "letter": "A",
        "text": "All"
      },
      {
        "letter": "B",
        "text": "Child"
      },
      {
        "letter": "C",
        "text": "Added"
      },
      {
        "letter": "D",
        "text": "Derived"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Attributes의 Added 탭은 해당 클래스에 직접 추가된 필드만 보여주므로 클래스 고유 속성 식별에 적합합니다."
  },
  {
    "id": 13,
    "title": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    "options": [
      {
        "letter": "A",
        "text": "Create a business rule"
      },
      {
        "letter": "B",
        "text": "Create a scheduled job"
      },
      {
        "letter": "C",
        "text": "Create an archive policy"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 장기간 미갱신 CI 정리는 Data Manager의 Archive Policy로 수명주기 기반 보관·정리 규칙을 자동화하는 것이 표준입니다."
  },
  {
    "id": 14,
    "title": "A CMDB Administrator installs a Service Graph Connector. They customize a script transform... What happens to the customized script transform during the upgrade?",
    "options": [
      {
        "letter": "A",
        "text": "The upgrade stops and reports an error."
      },
      {
        "letter": "B",
        "text": "A skipped change is created and no change is made to the script transform definition."
      },
      {
        "letter": "C",
        "text": "The Service Graph Connector upgrade refuses to start."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Store 앱 업그레이드에서 커스터마이즈 충돌은 skipped change로 분리되며, 기존 커스텀 스크립트 정의를 자동 덮어쓰지 않습니다."
  },
  {
    "id": 15,
    "title": "In the Create Reconciliation Rule wizard for CMDB 360 / Multisource CMDB, which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Most Reported"
      },
      {
        "letter": "B",
        "text": "Last Created"
      },
      {
        "letter": "C",
        "text": "Last Updated"
      },
      {
        "letter": "D",
        "text": "Smallest Value"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: A, C, D. Dynamic Rule Type으로 제공되는 값은 Most Reported·Last Updated·Smallest Value이며 Last Created는 기본 제공 항목이 아닙니다."
  },
  {
    "id": 16,
    "title": "A CMDB Administrator needs to clean up duplicate CIs in the CMDB. What is the preferred way to manage this task?",
    "options": [
      {
        "letter": "A",
        "text": "The De-duplication Dashboard on the CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "My Tasks in the Application Navigator"
      },
      {
        "letter": "C",
        "text": "The De-duplication Task module"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 중복 정리는 CMDB Workspace의 De-duplication Dashboard가 분석과 처리 흐름을 통합 제공하므로 우선 선택하는 방식이 권장됩니다."
  },
  {
    "id": 17,
    "title": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      {
        "letter": "A",
        "text": "data_classification_admin and personalize_dictionary"
      },
      {
        "letter": "B",
        "text": "cmdb_inst_admin and personalize_form"
      },
      {
        "letter": "C",
        "text": "itil_admin and personalize_form"
      },
      {
        "letter": "D",
        "text": "sn_cmdb_admin and personalize_dictionary"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 신규 CI 클래스 추가의 최소 권한 조합은 sn_cmdb_admin과 personalize_dictionary입니다."
  },
  {
    "id": 18,
    "title": "What is the relationship between an application and a server?",
    "options": [
      {
        "letter": "A",
        "text": "Application > Runs on :: Runs > Server"
      },
      {
        "letter": "B",
        "text": "Application > Runs :: Runs on > Server"
      },
      {
        "letter": "C",
        "text": "Application > Used by :: Uses > Server"
      },
      {
        "letter": "D",
        "text": "Application > Uses :: Used by > Server"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 표준 관계 표현에서 애플리케이션은 서버에서 실행되므로 Application runs on Server 관계가 정확합니다."
  },
  {
    "id": 19,
    "title": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    "options": [
      {
        "letter": "A",
        "text": "Managed By Group"
      },
      {
        "letter": "B",
        "text": "Approval Group"
      },
      {
        "letter": "C",
        "text": "Support Group"
      },
      {
        "letter": "D",
        "text": "Change Group"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CI Class Manager 소유권 기준을 Data Manager 정책에 일치시키려면 그룹 참조 필드를 Managed by Group으로 설정해야 합니다."
  },
  {
    "id": 20,
    "title": "Which of the following is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "Automates the enforcement of relationship rules between CIs in the CMDB"
      },
      {
        "letter": "B",
        "text": "Encrypts archived records for enhanced security"
      },
      {
        "letter": "C",
        "text": "Automates the archival and deletion of records based on retention policies"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB Data Manager 핵심 목적은 보존 정책 기반 아카이브·삭제 자동화로 데이터 볼륨과 수명주기를 통제하는 것입니다."
  },
  {
    "id": 21,
    "title": "A CMDB Administrator wants to run the Service Have Owners Identified playbook to remediate issues shown in the CMDB Data Foundations Dashboard. Which remediation playbooks would be used? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Fix Data"
      },
      {
        "letter": "B",
        "text": "Govern Data"
      },
      {
        "letter": "C",
        "text": "Report Data"
      },
      {
        "letter": "D",
        "text": "Analyze Data"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "정답: A, B, D. 소유자 식별 이슈는 Fix Data·Govern Data·Analyze Data 플레이북으로 원인 분석과 보정이 가능하며 Report Data는 실행 조치보다 보고 목적입니다."
  },
  {
    "id": 22,
    "title": "A CMDB Administrator needs to import external data into the CMDB. The administrator wants to reduce the risk of creating duplicates and prevent unauthorized records from being created if the Identification and Reconciliation API is bypassed. What is the recommended method?",
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
    "explanation": "정답: A. IRE 기반 식별·조정 흐름을 전제로 중복과 비인가 생성 위험을 낮추려면 IntegrationHub ETL을 사용하는 것이 권장됩니다."
  },
  {
    "id": 23,
    "title": "A Change Manager wants to gain value from CSDM (Common Service Data Model). How will the Change Management process benefit from CSDM? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Understand the impact of the change on services"
      },
      {
        "letter": "B",
        "text": "Identify blackout windows for the change"
      },
      {
        "letter": "C",
        "text": "Route the change dynamically"
      },
      {
        "letter": "D",
        "text": "Determine the root cause of the change issue"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. CSDM 정렬 시 변경 영향 서비스 파악이 쉬워지고 서비스 구조를 활용한 Change 라우팅 자동화가 가능해집니다."
  },
  {
    "id": 24,
    "title": "A Configuration Management Governance team is transitioning from using legacy CMDB status fields to the CSDM Life Cycle Status field. Which table can be modified?",
    "options": [
      {
        "letter": "A",
        "text": "Life Cycle Mapping (life_cycle_mapping)"
      },
      {
        "letter": "B",
        "text": "Life Cycle Stage Status (life_cycle_stage_status)"
      },
      {
        "letter": "C",
        "text": "Life Cycle Stages (life_cycle_stage)"
      },
      {
        "letter": "D",
        "text": "Life Cycle Controls (life_cycle_control)"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 레거시 상태를 CSDM Life Cycle 상태로 운영할 때 실제 상태 값 관리는 life_cycle_stage_status 테이블에서 수행합니다."
  },
  {
    "id": 25,
    "title": "The Configuration Manager is preparing a justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "It helps detect and eliminate duplicate records in the CMDB."
      },
      {
        "letter": "B",
        "text": "It enables monitoring and tracking of CMDB health over time."
      },
      {
        "letter": "C",
        "text": "It provides actionable insights to improve data quality and completeness."
      },
      {
        "letter": "D",
        "text": "It automates the approval process for Change Management."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "정답: B, C. Data Foundations Dashboard는 품질 추세 모니터링과 개선 액션 제시에 강점이 있으며 Change 승인 프로세스 자동화 도구는 아닙니다."
  },
  {
    "id": 26,
    "title": "Where can a CMDB 360 / Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      {
        "letter": "A",
        "text": "Saved queries window on the CMDB 360 tab"
      },
      {
        "letter": "B",
        "text": "CMDB Query Builder"
      },
      {
        "letter": "C",
        "text": "Coverage window on the CMDB 360 tab"
      },
      {
        "letter": "D",
        "text": "Saved queries window on the Insights tab"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CMDB 360/Multisource Saved Query 생성·조회 위치는 CMDB Workspace의 CMDB 360 탭 Saved queries 영역입니다."
  },
  {
    "id": 27,
    "title": "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Add a new class under an appropriate parent class"
      },
      {
        "letter": "B",
        "text": "Modify an existing class"
      },
      {
        "letter": "C",
        "text": "Install or update the CMDB CI Class Models store application, and verify the class does not already exist"
      },
      {
        "letter": "D",
        "text": "Delete an unused class, and replace it with the new one"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. 신규 클래스는 적절한 부모 CI 클래스 확장을 우선하고, 생성 전 CI Class Models 앱에서 기존 클래스 존재 여부를 확인하는 것이 모범 사례입니다."
  },
  {
    "id": 28,
    "title": "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    "options": [
      {
        "letter": "A",
        "text": "Assign an order to each data source in the identification rules"
      },
      {
        "letter": "B",
        "text": "Configure data refresh rules with a specific time period"
      },
      {
        "letter": "C",
        "text": "Assign a priority to each data source in the reconciliation rules"
      },
      {
        "letter": "D",
        "text": "Manually run the data source updates in the correct order"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 동일 클래스·속성에 다중 소스가 쓰는 환경에서는 Reconciliation Rule의 소스 우선순위로 authoritative source를 지정해야 합니다."
  },
  {
    "id": 29,
    "title": "When ingesting data into the CMDB using Import Sets and Transform Maps, which type of script is added to ensure the data is processed through the Identification and Reconciliation Engine (IRE)?",
    "options": [
      {
        "letter": "A",
        "text": "onStart"
      },
      {
        "letter": "B",
        "text": "onAfter"
      },
      {
        "letter": "C",
        "text": "onComplete"
      },
      {
        "letter": "D",
        "text": "onBefore"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. Import Set+Transform Map에서 IRE 처리를 강제하려면 onBefore 스크립트에서 CMDBTransformUtil 호출 등 식별·조정 흐름을 연결해야 합니다."
  },
  {
    "id": 30,
    "title": "What ensures that data volume in the CMDB is manageable?",
    "options": [
      {
        "letter": "A",
        "text": "Scheduled Jobs"
      },
      {
        "letter": "B",
        "text": "Business Rules"
      },
      {
        "letter": "C",
        "text": "Archive Policies"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB 데이터 볼륨을 지속 가능하게 관리하려면 비활성·만료 레코드 수명주기를 제어하는 Archive Policy가 핵심입니다."
  },
  {
    "id": 31,
    "title": "A configuration manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "CMDB Workspace"
      },
      {
        "letter": "C",
        "text": "CI Class Manager"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Unified Map은 CMDB Workspace 기능으로 제공되므로 접근 경로도 CMDB Workspace가 맞습니다."
  },
  {
    "id": 32,
    "title": "A service owner is using the Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Managed by group"
      },
      {
        "letter": "B",
        "text": "Discovery source"
      },
      {
        "letter": "C",
        "text": "Business criticality"
      },
      {
        "letter": "D",
        "text": "CI type"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: B, D. Unified Map 필터에서 Discovery source와 CI type으로 범위를 줄이면 서비스 구성 분석 시 노이즈를 효과적으로 줄일 수 있습니다."
  },
  {
    "id": 33,
    "title": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      {
        "letter": "A",
        "text": "Compliance"
      },
      {
        "letter": "B",
        "text": "Audit"
      },
      {
        "letter": "C",
        "text": "Certification"
      },
      {
        "letter": "D",
        "text": "Attestation"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Certification 정책은 담당자에게 CI 속성 검증·수정 태스크를 부여해 데이터 정확성을 유지하게 합니다."
  },
  {
    "id": 34,
    "title": "CMDB class owners are receiving tasks under the My Work tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "De-duplication templates"
      },
      {
        "letter": "C",
        "text": "CMDB Health Dashboard"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CMDB Workspace My Work에 보이는 정책성 작업은 CMDB Data Manager에서 생성되는 태스크입니다."
  },
  {
    "id": 35,
    "title": "A CMDB Administrator reviewing the CMDB Data Foundations Dashboard notices the unique locations results percentage is low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Retain the location that matches the organization standard naming convention and delete the duplicate without further validation"
      },
      {
        "letter": "B",
        "text": "Use the Duplicate CI Remediator to merge the duplicate location records"
      },
      {
        "letter": "C",
        "text": "Keep both locations as either can be used as valid alternate locations"
      },
      {
        "letter": "D",
        "text": "Review both locations, update CI with the correct location and delete the duplicate location"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 위치 중복은 플레이북 절차대로 정합한 위치를 검증한 뒤 CI 참조를 교정하고 중복 Location 레코드를 정리해야 합니다."
  },
  {
    "id": 36,
    "title": "A CMDB administrator is reviewing the health of the CMDB and notices a large percentage of hardware CIs are missing serial numbers. The administrator contacts ServiceNow support and would like to know which structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue. Which option is correct?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Foundations Dashboard playbooks"
      },
      {
        "letter": "B",
        "text": "CSDM Data Foundations Dashboard playbooks"
      },
      {
        "letter": "C",
        "text": "CSDM Now Create playbooks"
      },
      {
        "letter": "D",
        "text": "CMDB Health Dashboard playbooks"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CMDB Data Foundations Dashboard playbook은 serial number 누락 같은 품질 이슈를 원인 분석부터 조치까지 구조적으로 안내합니다."
  },
  {
    "id": 37,
    "title": "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to ensure lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store that will be used to satisfy these audits?",
    "options": [
      {
        "letter": "A",
        "text": "Business Applications and Information Objects"
      },
      {
        "letter": "B",
        "text": "Customer Service Offerings and Databases"
      },
      {
        "letter": "C",
        "text": "Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. PII·PCI 등 규제 데이터 맥락은 CSDM Design 영역의 Business Application과 Information Object에 정의해 감사 근거를 확보합니다."
  },
  {
    "id": 38,
    "title": "The following reconciliation rules were configured for ServiceNow, Altiris, and SCCM... Which statements are true? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Data collected with a discovery source of SCCM can update any record in the Windows server table because it has the highest priority number"
      },
      {
        "letter": "B",
        "text": "Data collected with a discovery source of ServiceNow can insert new records into the Windows server table but cannot update records created by Altiris and SCCM"
      },
      {
        "letter": "C",
        "text": "Data collected with a discovery source of SCCM can be inserted as new records in the Windows server table"
      },
      {
        "letter": "D",
        "text": "Data collected with a discovery source of Altiris can update records inserted by SCCM in the Windows server table"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: C, D. SCCM은 신규 삽입이 가능하며, 더 높은 우선순위 소스인 Altiris는 SCCM 생성 레코드 속성을 업데이트할 수 있습니다."
  },
  {
    "id": 39,
    "title": "A CMDB administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundations Dashboard. Which benefits supports the decision to continually monitor the results on this dashboard? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Provides metrics on active CIs updated in the last 90 days"
      },
      {
        "letter": "B",
        "text": "Provides metrics for CIs processed by the IRE"
      },
      {
        "letter": "C",
        "text": "Reports on all orphan CIs in the CMDB"
      },
      {
        "letter": "D",
        "text": "Provides a list of all CIs that failed health audits"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "정답: A, B, C. Data Foundations Dashboard는 최근 갱신 추세, IRE 처리 관점, orphan CI 탐지 지표를 통해 지속 모니터링 가치를 제공합니다."
  },
  {
    "id": 40,
    "title": "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule = lowest value for the field Disk space GB. The Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule = most reported for the same field. Which value will be written to the disk space in GB field for the Windows Server CI?",
    "options": [
      {
        "letter": "A",
        "text": "75"
      },
      {
        "letter": "B",
        "text": "50"
      },
      {
        "letter": "C",
        "text": "180"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 동적 조정은 하위 클래스 규칙이 상위 클래스보다 우선하므로 Windows Server CI에는 하위 규칙 결과값인 75가 기록됩니다."
  },
  {
    "id": 41,
    "title": "A Configuration Management Process Owner needs to configure Data Manager so that policy tasks are correctly assigned and aligned with the group attribute assigned to a CI class in CI Class Manager. Which field is the recommended field to be used for a policy task assignment?",
    "options": [
      {
        "letter": "A",
        "text": "Change group"
      },
      {
        "letter": "B",
        "text": "Approval group"
      },
      {
        "letter": "C",
        "text": "Managed by group"
      },
      {
        "letter": "D",
        "text": "Support group"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CI 클래스 소유 책임과 Data Manager 태스크 할당을 일치시키려면 Managed by group 필드를 기준으로 설정하는 것이 권장됩니다."
  },
  {
    "id": 42,
    "title": "A company wants to track regulatory compliance in the CSDM (Common Service Data Model) framework. ServiceNow provides an artifact type called an Information Object. What is the purpose of an Information Object?",
    "options": [
      {
        "letter": "A",
        "text": "It describes data in general on a group of Configuration Items"
      },
      {
        "letter": "B",
        "text": "It describes the logical data used by Business Applications"
      },
      {
        "letter": "C",
        "text": "It describes data exchanged between an API interface and an Application"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Information Object는 Business Application이 사용하는 논리적 데이터와 규제 연관 맥락을 표현하는 CSDM 아티팩트입니다."
  },
  {
    "id": 43,
    "title": "A CMDB Administrator has been asked to establish configuration management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs"
      },
      {
        "letter": "B",
        "text": "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
      },
      {
        "letter": "C",
        "text": "Relying on automated discovery tools to maintain and update CMDB records"
      },
      {
        "letter": "D",
        "text": "Establishing clear governance and continuously monitoring CMDB health"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 기능성 CMDB 운영의 핵심은 데이터 양 확대가 아니라 명확한 거버넌스와 지속적인 Health 모니터링입니다."
  },
  {
    "id": 44,
    "title": "A CMDB Data Owner wants better insights into the different data sources that populate the CMDB. The Platform Owner installs the Service Graph Connector Central plugin. After installing the plugin, which workspace will have the new Service Graph Connector Central tab available?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "Service Graph Connector Workspace"
      },
      {
        "letter": "C",
        "text": "Discovery Admin Workspace"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Service Graph Connector Central 플러그인 설치 후 관련 탭은 CMDB Workspace에 노출됩니다."
  },
  {
    "id": 45,
    "title": "A CMDB Manager wants to start adding CSDM Design & Planning (Design) domain components into the CMDB. Who is involved in this exercise? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Business Relationship Manager"
      },
      {
        "letter": "B",
        "text": "Enterprise Architect"
      },
      {
        "letter": "C",
        "text": "Application Owner"
      },
      {
        "letter": "D",
        "text": "Application Service Owner"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: A, B. CSDM Design & Planning 데이터는 비즈니스·엔터프라이즈 정합이 중요하므로 Business Relationship Manager와 Enterprise Architect 참여가 핵심입니다."
  },
  {
    "id": 46,
    "title": "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve CMDB data quality for that region. Currently, the dashboard only shows overall score and scores grouped by CI Class. How can the Configuration Manager get a CMDB health score for regionally relevant CIs?",
    "options": [
      {
        "letter": "A",
        "text": "Customize the CMDB Health Dashboard scheduled jobs to group results by region"
      },
      {
        "letter": "B",
        "text": "On CMDB health settings, activate the option Group scores by region"
      },
      {
        "letter": "C",
        "text": "Create CMDB groups with type Health, by region"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 지역 단위 Health 점수를 얻으려면 region 기준 CMDB Group을 Health 타입으로 구성해 스코프를 분리해야 합니다."
  },
  {
    "id": 47,
    "title": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Audit Business Rule"
      },
      {
        "letter": "B",
        "text": "CMDB Workspace"
      },
      {
        "letter": "C",
        "text": "Data Quality Scheduled Job"
      },
      {
        "letter": "D",
        "text": "Data Quality Business Rule"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. CI 데이터 품질 운영은 CMDB Workspace에서 Health·Data Manager·De-duplication 기능을 통합 활용하는 방식이 표준입니다."
  },
  {
    "id": 48,
    "title": "A CMDB CI Class Owner responsible for Windows Servers needs to frequently manage the Windows Server CI Class. Which CI Class Manager feature will help the CI Class Owner streamline access to this class?",
    "options": [
      {
        "letter": "A",
        "text": "CI Favorites"
      },
      {
        "letter": "B",
        "text": "Pinned Classes"
      },
      {
        "letter": "C",
        "text": "Search CI Classes"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 반복 관리 클래스 접근을 단축하려면 CI Class Manager의 Pinned Classes를 활용해 탐색 비용을 줄이는 것이 효과적입니다."
  },
  {
    "id": 49,
    "title": "The CMDB Administrator group wants to filter which CI classes appear on the CMDB Health Dashboard. This ensures that only relevant and manageable CI data is included, excluding classes that are not ready for management. Which feature can the group use to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Reconciliation Rules"
      },
      {
        "letter": "B",
        "text": "Identification Rules"
      },
      {
        "letter": "C",
        "text": "Health Inclusion Rules"
      },
      {
        "letter": "D",
        "text": "Data Refresh Rules"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB Health Dashboard 관리 대상 클래스 범위는 Health Inclusion Rules로 포함·제외 기준을 정의합니다."
  },
  {
    "id": 50,
    "title": "A configuration management team wants to prevent duplicate server records in the CMDB to avoid confusion. Server records are processed by the Identification and Reconciliation Engine (IRE), which uses identification rules to determine whether a CI already exists. Where are these identification rules configured?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "CMDB CI Class Manager"
      },
      {
        "letter": "C",
        "text": "CMDB Health Dashboard"
      },
      {
        "letter": "D",
        "text": "CMDB Data Manager"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. IRE 식별 규칙은 클래스 단위로 관리되며 CMDB CI Class Manager에서 해당 클래스 Identification Rule을 설정합니다."
  },
  {
    "id": 51,
    "title": "A CMDB Configuration Manager plans to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these policies?",
    "options": [
      {
        "letter": "A",
        "text": "Missing or Stolen"
      },
      {
        "letter": "B",
        "text": "End of Life or Retired"
      },
      {
        "letter": "C",
        "text": "In any lifecycle state"
      },
      {
        "letter": "D",
        "text": "Inventory or Available"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Data Manager의 삭제·아카이브 정책은 일반적으로 End of Life 또는 Retired 상태 CI를 대상으로 적용됩니다."
  },
  {
    "id": 52,
    "title": "A configuration manager is reviewing the lifecycle of Configuration Items (CIs) to ensure data accuracy, data consistency and data relevance. The manager reviews legacy status values and their equivalent CSDM lifecycle stage and lifecycle stage status values. Where can these mappings be reviewed?",
    "options": [
      {
        "letter": "A",
        "text": "Life cycle choice list"
      },
      {
        "letter": "B",
        "text": "Life cycle mappings"
      },
      {
        "letter": "C",
        "text": "Life cycle properties"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 레거시 상태와 CSDM Life cycle stage·stage status 매핑은 Life cycle mappings에서 확인합니다."
  },
  {
    "id": 53,
    "title": "A CMDB administrator notices that many Configuration Items (CIs) do not have a Support Group populated. The administrator wants the Support Group to be automatically populated and maintained on the CI record. Which option should be used to achieve this?",
    "options": [
      {
        "letter": "A",
        "text": "Technology Management Service Offering (Technical Service Offering)"
      },
      {
        "letter": "B",
        "text": "Dynamic CI Group"
      },
      {
        "letter": "C",
        "text": "Technology Management Service (Technical Service)"
      },
      {
        "letter": "D",
        "text": "CI Class Manager"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CI Support Group 자동 유지에는 Technology Management Service Offering 연결을 통해 운영 소유·지원 정보를 전파하는 방식이 권장됩니다."
  },
  {
    "id": 54,
    "title": "A manager needs guidance on how to correctly establish relationships between infrastructure CIs, Technology Management Offerings (Technical Service Offerings) and Application Services within the CMDB. Which CSDM domain provides the guidance for defining these relationships?",
    "options": [
      {
        "letter": "A",
        "text": "Service Consumption (Sell or Consume)"
      },
      {
        "letter": "B",
        "text": "Foundation"
      },
      {
        "letter": "C",
        "text": "Design and Planning (Design)"
      },
      {
        "letter": "D",
        "text": "Build and Integration (Build)"
      },
      {
        "letter": "E",
        "text": "Service Delivery (Manage Technical Services)"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: E. 인프라 CI, Technical Service Offering, Application Service 관계 가이드는 CSDM Service Delivery 도메인 범위입니다."
  },
  {
    "id": 55,
    "title": "The Change Management team wants to implement a change across multiple Configuration Items (CIs) simultaneously. They plan to use a Dynamic CI Group to target those CIs. Which field on the Change Request form must be populated with the Dynamic CI Group?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration Item"
      },
      {
        "letter": "B",
        "text": "Business Service"
      },
      {
        "letter": "C",
        "text": "Service Offering"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Dynamic CI Group 기반 변경 대상 지정은 Change Request의 Configuration Item 필드로 연결해 관리합니다."
  },
  {
    "id": 56,
    "title": "A configuration manager needs to enable a CMDB Data Manager policy that will remove records from a CI class and still allow the ability to restore the records within a specified period. Which policy type should the configuration manager create?",
    "options": [
      {
        "letter": "A",
        "text": "Delete"
      },
      {
        "letter": "B",
        "text": "Archive"
      },
      {
        "letter": "C",
        "text": "Certification"
      },
      {
        "letter": "D",
        "text": "Retire"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 일정 기간 복구 가능성을 유지하려면 즉시 삭제보다 Archive 정책을 사용해야 합니다."
  },
  {
    "id": 57,
    "title": "A CMDB administrator is using the Duplicate CI Remediator to resolve duplicate Configuration Items. In the first step of the wizard, a Main CI must be selected. Which attributes can be used to identify the Main CI? (Choose multiple)",
    "options": [
      {
        "letter": "A",
        "text": "Oldest Created"
      },
      {
        "letter": "B",
        "text": "Least Related Items"
      },
      {
        "letter": "C",
        "text": "Most Related Items"
      },
      {
        "letter": "D",
        "text": "Newest Created"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. Duplicate CI Remediator의 Main CI 선정은 Oldest Created와 Most Related Items 기준을 사용해 참조 손실 위험을 줄입니다."
  },
  {
    "id": 58,
    "title": "An organization is using CMDB Query Builder to find Application Services that have a database with incidents and all infrastructure related to those application services. Which steps are required to build this query? (Choose multiple)",
    "options": [
      {
        "letter": "A",
        "text": "Use a CMDB Query to include application services and their related infrastructure"
      },
      {
        "letter": "B",
        "text": "Use a Service Mapping query to find all incidents related to the database"
      },
      {
        "letter": "C",
        "text": "Add a non-CMDB table to the query"
      },
      {
        "letter": "D",
        "text": "Use a Service Mapping query to include non-CMDB tables like the incident table"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. 앱 서비스와 인프라 관계는 CMDB Query로 구성하고 Incident 연계를 위해 non-CMDB 테이블을 추가해야 요구 분석 조건을 충족합니다."
  },
  {
    "id": 59,
    "title": "A platform data owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The data owner knows the best option is to include CMDB 360 Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360 Multisource CMDB. What can the data owner do in this case?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB 360 / Multisource is a platform product that can be used immediately."
      },
      {
        "letter": "B",
        "text": "ITOM Discovery needs to be purchased to take advantage of the multisource IRE rules."
      },
      {
        "letter": "C",
        "text": "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 be enabled."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB 360 라이선스가 없어도 IRE 기본 Reconciliation Rule에서 discovery source 우선순위 통제는 사용할 수 있습니다."
  },
  {
    "id": 60,
    "title": "What is the difference between data certification and attestation policies when managing a CI?",
    "options": [
      {
        "letter": "A",
        "text": "Attestation can be scheduled while data certification cannot be scheduled."
      },
      {
        "letter": "B",
        "text": "Attestation requires correcting specific attributes of a CI while data certification tracks acknowledgement the CI still exists."
      },
      {
        "letter": "C",
        "text": "Attestation tracks acknowledgement the CI still exists while data certification require validating specific attributes of a CI."
      },
      {
        "letter": "D",
        "text": "Attestation can be assigned to a group or an individual while data certification can only be assigned to an individual."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Attestation은 CI 존재 여부 확인, Certification은 CI 속성값 정확성 검증·보정 절차라는 점이 핵심 차이입니다."
  },
  {
    "id": 61,
    "title": "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the administrator take to meet this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Use the CSDM Data Foundations Dashboard."
      },
      {
        "letter": "B",
        "text": "Use the default configured CMDB Health Dashboard."
      },
      {
        "letter": "C",
        "text": "Start the ServiceNow Health Scan."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CSDM 정렬과 품질 개선 목적에는 CSDM Data Foundations Dashboard가 전용 지표와 개선 포인트를 제공합니다."
  },
  {
    "id": 62,
    "title": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's correctness scorecard for the Server class, which consists of a total of 60000 servers in the CMDB. For the duplicate metric, it shows healthy CIs are evaluated as 59000 of 60000. For the orphan metric, it shows healthy CIs are evaluated as 45000 of 50000. Which configuration explains the difference in the scope of Server CIs 60000 versus 50000 evaluated between the two metrics?",
    "options": [
      {
        "letter": "A",
        "text": "The orphan metric has a CMDB group configured for the server class."
      },
      {
        "letter": "B",
        "text": "The duplicate metric has a health inclusion rule configured for the server class."
      },
      {
        "letter": "C",
        "text": "The orphan metric has a health inclusion rule configured for the server class."
      },
      {
        "letter": "D",
        "text": "The duplicate metric has a CMDB group configured for the server class."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 동일 클래스에서 메트릭별 평가 모수가 다르면 해당 메트릭에 별도 Health Inclusion Rule이 적용된 것으로 해석합니다."
  },
  {
    "id": 63,
    "title": "Scenario: 1. Healthcare provider has a critical incident. 2. The incident affects the patient management system. 3. We need to determine which users are impacted. Which CSDM related data should be used to determine impacted users?",
    "options": [
      {
        "letter": "A",
        "text": "Service Offerings by Department or Location."
      },
      {
        "letter": "B",
        "text": "Affected CIs that is within bracket Task_CI related list."
      },
      {
        "letter": "C",
        "text": "Application Server Environment attribute."
      },
      {
        "letter": "D",
        "text": "Incident history of similar CIs."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 영향 사용자 식별은 부서·위치 기준 Service Offering 맥락이 가장 직접적이며 CI 이력만으로는 사용자 집단 식별이 어렵습니다."
  },
  {
    "id": 64,
    "title": "An Asset Manager wants to ensure that asset records and CI records remain synchronized automatically. How does the manager do this? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Ensure that the business rule to update asset fields on change on the CI table is active."
      },
      {
        "letter": "B",
        "text": "Ensure that scheduled jobs are run during off business hours to ensure sync happens."
      },
      {
        "letter": "C",
        "text": "Ensure that the business rule to update CI fields on change on the asset table is active."
      },
      {
        "letter": "D",
        "text": "Ensure one-to-one physical mapping between Asset and CI."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. Asset-CI 자동 동기화는 Asset→CI, CI→Asset 양방향 비즈니스 룰이 모두 활성화되어야 일관성이 유지됩니다."
  },
  {
    "id": 65,
    "title": "An organization needs to maintain non-discoverable attributes such as warranty expiration dates for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      {
        "letter": "A",
        "text": "Use the CMDB Reconciliation Engine to update the attributes."
      },
      {
        "letter": "B",
        "text": "Use a scheduled data import to update the attributes from an external source."
      },
      {
        "letter": "C",
        "text": "Create a new CI class specifically for non-discoverable attributes."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 보증 만료일 같은 non-discoverable 속성은 외부 권위 데이터 소스 정기 Import로 보강하는 방식이 표준입니다."
  },
  {
    "id": 66,
    "title": "A configuration management process owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align the best practice, minimize the cost of future work (technical debt), and ensure compliance with future upgrades. Which solution accomplishes this? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Repurposing a base CI class and rename attributes as required."
      },
      {
        "letter": "B",
        "text": "Extending an existing asset class table to accommodate the custom CI class attributes."
      },
      {
        "letter": "C",
        "text": "Extending an existing CI class table to accommodate the custom CI class attributes."
      },
      {
        "letter": "D",
        "text": "Installing or upgrading the CMDB CI Class Models store application to find a suitable existing CI class accommodating any new attributes."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: C, D. 업그레이드 안정성과 기술부채 최소화를 위해 기존 CI 클래스 확장을 우선하고, 사전 단계에서 CI Class Models로 표준 클래스 존재 여부를 확인해야 합니다."
  },
  {
    "id": 67,
    "title": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard compliance scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Technical Service Offerings, Dynamic CI Groups, CMDB Groups."
      },
      {
        "letter": "B",
        "text": "Certification Filter, Certification Template, Audit."
      },
      {
        "letter": "C",
        "text": "Stale, Orphan, Duplicate."
      },
      {
        "letter": "D",
        "text": "Certification Policies, Data Filters, Scheduled Jobs."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Compliance scorecard에 의미 있는 결과를 반영하려면 Certification Filter·Certification Template·Audit 구성을 완성해야 합니다."
  },
  {
    "id": 68,
    "title": "The Apache Web Server identification rule is configured with the following criterion attributes: 1. Class, 2. Configuration File, 3. Version. Yesterday an Apache web server CI was discovered as part of Service Mapping. Today the application owner upgraded Apache to a different version and restarted the service. What will happen in the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "The Apache Web Server CI will be reclassified as a Web Server CI."
      },
      {
        "letter": "B",
        "text": "A duplication error will occur."
      },
      {
        "letter": "C",
        "text": "A new Apache Web Server CI will be created."
      },
      {
        "letter": "D",
        "text": "The existing Apache Web Server CI will be reconciled and its version will be updated."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 식별 기준에 Version이 포함되면 버전 변경 시 동일성 매칭 실패로 기존 CI 대신 신규 Apache Web Server CI가 생성될 수 있습니다."
  },
  {
    "id": 69,
    "title": "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Servers in the data center."
      },
      {
        "letter": "B",
        "text": "Devices in secure environments."
      },
      {
        "letter": "C",
        "text": "Network devices in the DMZ."
      },
      {
        "letter": "D",
        "text": "Devices that intermittently connect to the network."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: B, D. ACC는 보안 제약 환경이나 간헐 접속 단말처럼 agentless 방식이 어려운 대상의 인벤토리 수집에 유리합니다."
  },
  {
    "id": 70,
    "title": "A CMDB Administrator is implementing a vulnerability response or security incident response solution and needs to ensure that customers have enough context to estimate risk and take priorities. Which CSDM Data Foundations Dashboard playbook helps with this?",
    "options": [
      {
        "letter": "A",
        "text": "Locations without a parent location."
      },
      {
        "letter": "B",
        "text": "Name Product Models without Product Owners."
      },
      {
        "letter": "C",
        "text": "Application Services with Business Application Relations."
      },
      {
        "letter": "D",
        "text": "Percentage of custom status values for CI Life Cycle Stages."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 취약점·보안 사고 우선순위 산정에는 기술 CI와 비즈니스 맥락 연결이 중요하므로 Application Service-Business Application 관계 개선 플레이북이 핵심입니다."
  },
  {
    "id": 71,
    "title": "Which are values of CMDB? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Strengthening operational resiliency."
      },
      {
        "letter": "B",
        "text": "Streamlining incident and change management."
      },
      {
        "letter": "C",
        "text": "Automating maintenance for CI relationships."
      },
      {
        "letter": "D",
        "text": "Collecting and managing financial data."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: A, B. CMDB의 본질적 가치는 운영 복원력 강화와 Incident/Change 의사결정 가속이며, 재무 데이터 수집 자체는 CMDB의 1차 목적이 아닙니다."
  },
  {
    "id": 72,
    "title": "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed several use cases that they expect to cover. Which use case requires Information Objects?",
    "options": [
      {
        "letter": "A",
        "text": "The event operations team wants to automate their events into incidents for operational actions."
      },
      {
        "letter": "B",
        "text": "The asset management team wants to understand the asset life cycle compliance in a business application context."
      },
      {
        "letter": "C",
        "text": "The SecOps team wants to understand the operational risk in the business application context."
      },
      {
        "letter": "D",
        "text": "The business service management team wants to understand the operational impact for their customer portals."
      },
      {
        "letter": "E",
        "text": "The customer service team wants to onboard proactive case management."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. SecOps가 비즈니스 애플리케이션 문맥의 운영 리스크를 보려면 어떤 데이터가 처리되는지 정의하는 Information Object가 필요합니다."
  },
  {
    "id": 73,
    "title": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are the benefits of using this application? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Checks that important data is valid and properly configured."
      },
      {
        "letter": "B",
        "text": "Uses automation to remediate potential risks."
      },
      {
        "letter": "C",
        "text": "Provides playbooks to assist in the remediation of potential risks."
      },
      {
        "letter": "D",
        "text": "Has a framework to create custom metrics for the CMDB."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. Data Foundations Dashboard는 데이터 유효성/구성 상태를 점검하고, 자동 수정이 아니라 Playbook 기반 개선 경로를 제공합니다."
  },
  {
    "id": 74,
    "title": "A Business Relationship Manager (BRM) wants to implement Service Portfolio Management (SPM) in order to present service offerings to business consumers. Which Common Service Data Model (CSDM) domain best aligns with this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Build and Integration (Build)"
      },
      {
        "letter": "B",
        "text": "Service Consumption (Sell/Consume)"
      },
      {
        "letter": "C",
        "text": "Design and Planning (Design)"
      },
      {
        "letter": "D",
        "text": "Service Delivery"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 비즈니스 소비자에게 Service Offering을 제시하는 SPM 맥락은 CSDM의 Service Consumption(Sell/Consume) 도메인과 정렬됩니다."
  },
  {
    "id": 75,
    "title": "A retail organization wants to ensure that incidents affecting customer-facing services are resolved quickly to avoid revenue loss. Which CSDM attribute should be used to prioritize these services?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment Group on the CI record"
      },
      {
        "letter": "B",
        "text": "Affected CIs in the Incident record"
      },
      {
        "letter": "C",
        "text": "Service Classification in the Technical Service"
      },
      {
        "letter": "D",
        "text": "Business Criticality in the Service Offering"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 고객 대면 서비스 우선 처리 기준은 서비스의 비즈니스 중요도를 반영해야 하므로 Service Offering의 Business Criticality가 가장 적합합니다."
  },
  {
    "id": 76,
    "title": "Where can a ServiceNow administrator perform Natural Language Queries (NLQ) when working with CMDB data?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "CI Class Manager"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "CMDB Health Dashboard"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB 데이터에 대한 NLQ 기능은 CMDB Workspace에서 활용하도록 제공됩니다."
  },
  {
    "id": 77,
    "title": "A CMDB Administrator needs to prevent duplicate CI creation when Import Sets load data into the CMDB from vendor shipment files containing CI information. What is the best approach?",
    "options": [
      {
        "letter": "A",
        "text": "Create comparison rules in the IRE."
      },
      {
        "letter": "B",
        "text": "Use the CMDBTransformUtil API in the transform script."
      },
      {
        "letter": "C",
        "text": "Set the system property to utilize the IRE within transform maps."
      },
      {
        "letter": "D",
        "text": "Set the coalesce on two mappings within the transform map."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Import Set 적재 시 중복 방지를 위해 Transform 단계에서 CMDBTransformUtil을 호출해 IRE 경유 처리를 강제하는 것이 모범 방식입니다."
  },
  {
    "id": 78,
    "title": "A CMDB Administrator is configuring an Identification Rule using CI Class Manager for the Tomcat class. The rule currently uses the following criteria attributes: Class and Install Directory. If no match is found using the Tomcat identification rule, which Identifier Entry configuration option must be enabled so that the Application identification rule (parent class) is attempted for matching?",
    "options": [
      {
        "letter": "A",
        "text": "Applies to"
      },
      {
        "letter": "B",
        "text": "Independent"
      },
      {
        "letter": "C",
        "text": "Allow fallback to parent's rules"
      },
      {
        "letter": "D",
        "text": "Criterion attributes"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 자식 클래스 식별 실패 시 부모 클래스 식별 규칙을 이어서 시도하려면 Identifier Entry에서 부모 규칙 fallback 허용 옵션을 켜야 합니다."
  },
  {
    "id": 79,
    "title": "An organization is using CMDB Query Builder to identify Application Services. Those services contain a Database. The database has Incidents. The query should also return all infrastructure related to those Application Services. Which steps should be used to build this query? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Add a non-CMDB table to the query."
      },
      {
        "letter": "B",
        "text": "Use a Service Mapping Query to include non-CMDB tables like the Incident table."
      },
      {
        "letter": "C",
        "text": "Use a Service Mapping Query to find all incidents related to the database."
      },
      {
        "letter": "D",
        "text": "Use a CMDB Query to include application services and their related infrastructure."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: A, D. 애플리케이션 서비스와 인프라 관계는 CMDB Query로 가져오고, Incident 같은 비CMDB 데이터 연결을 위해 non-CMDB 테이블 추가가 필요합니다."
  },
  {
    "id": 80,
    "title": "A CMDB Administrator is starting the process of populating the CMDB and wants to ensure that data that is no longer useful or applicable is removed from the CMDB. Which governance management tool in ServiceNow is used to manage the lifecycle of CI data and remove outdated or unnecessary records?",
    "options": [
      {
        "letter": "A",
        "text": "CI Class Manager"
      },
      {
        "letter": "B",
        "text": "CMDB and CSDM Data Foundations Dashboard"
      },
      {
        "letter": "C",
        "text": "CMDB Health Dashboard"
      },
      {
        "letter": "D",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "E",
        "text": "De-duplication Template"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 불필요/노후 CI 정리와 수명주기 통제는 CMDB Data Manager의 정책(archive/delete/certification 등)으로 수행합니다."
  },
  {
    "id": 81,
    "title": "Which actions can be initiated from the CMDB Workspace? (Choose three)",
    "options": [
      {
        "letter": "A",
        "text": "Execute ServiceNow Discovery"
      },
      {
        "letter": "B",
        "text": "Create a CMDB Data Manager certification policy"
      },
      {
        "letter": "C",
        "text": "Remediate duplicate CI records"
      },
      {
        "letter": "D",
        "text": "Create a new CMDB class"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: B, C, D. CMDB Workspace에서는 Data Manager 정책 생성, 중복 CI 정리, 클래스 관리 작업을 수행할 수 있으며 Discovery 실행은 별도 운영 흐름입니다."
  },
  {
    "id": 82,
    "title": "A CMDB Administrator group wants to set up a process to receive task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be used to configure recommended fields and generate tasks when those fields are missing?",
    "options": [
      {
        "letter": "A",
        "text": "Technical Service Offerings and Dynamic CI Groups"
      },
      {
        "letter": "B",
        "text": "CMDB Workspace and Scheduled Jobs"
      },
      {
        "letter": "C",
        "text": "Dynamic CI Groups and CMDB Groups"
      },
      {
        "letter": "D",
        "text": "CI Class Manager and Health Preferences"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 권장 필드 정의는 CI Class Manager에서, 누락값 기반 건강도/태스크 생성 제어는 Health Preferences에서 설정해 운영할 수 있습니다."
  },
  {
    "id": 83,
    "title": "The CMDB Configuration Management team has developed a healthy and trusted CMDB by integrating discovered infrastructure data, referencing non-discoverable data (such as change and support group information), and making the CMDB service-aware using Service Mapping. How will these improvements enhance the Change Management process? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Automatically schedules and deploys changes without human review or approval."
      },
      {
        "letter": "B",
        "text": "Provides insight into the potential impact of the change."
      },
      {
        "letter": "C",
        "text": "Ensures that no changes result in service downtime, regardless of planning or execution."
      },
      {
        "letter": "D",
        "text": "Enables auto population of the assignment group field to dynamically route changes."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: B, D. 서비스 인지형 CMDB는 변경 영향도 분석을 정확히 하고, 소유/지원 그룹 정보 기반으로 Assignment Group 자동 채움 등 동적 라우팅을 개선합니다."
  },
  {
    "id": 84,
    "title": "A CMDB Administrator wants to align their CMDB with CSDM life cycle best practices by using Life Cycle field mappings. After clicking Enable Life Cycle Sync, what should be the next step?",
    "options": [
      {
        "letter": "A",
        "text": "Fix the incorrect values in the Life Cycle Stage to match legacy values."
      },
      {
        "letter": "B",
        "text": "Activate the CSDM Life Cycle field mappings."
      },
      {
        "letter": "C",
        "text": "Resolve any incomplete field mappings identified in the Discrepancy Report."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Life Cycle Sync 활성화 후에는 먼저 Discrepancy Report의 미완성 매핑을 해소해 레거시 값과 CSDM 표준 단계 간 정합성을 맞춰야 합니다."
  },
  {
    "id": 85,
    "title": "A CSDM Data Manager wants to view metrics that measure how well Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) align with CSDM best practices. Which tab in the CSDM Data Foundations Dashboard provides these metrics?",
    "options": [
      {
        "letter": "A",
        "text": "Crawl"
      },
      {
        "letter": "B",
        "text": "Walk"
      },
      {
        "letter": "C",
        "text": "Fly"
      },
      {
        "letter": "D",
        "text": "Run"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Technical Service와 Technical Service Offering 정렬 품질은 CSDM 성숙도 기준에서 Walk 단계 지표로 주로 측정됩니다."
  },
  {
    "id": 86,
    "title": "What are the characteristics or functions of ServiceNow IntegrationHub ETL? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Integrates third-party data into the CMDB or into non-CMDB tables."
      },
      {
        "letter": "B",
        "text": "Performs discovery data collection and updates the CMDB."
      },
      {
        "letter": "C",
        "text": "Uses the IRE to process and integrate data."
      },
      {
        "letter": "D",
        "text": "Imports Microsoft SCCM / Intune data into the CMDB."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. IntegrationHub ETL은 외부 데이터를 CMDB 또는 비CMDB 테이블로 통합할 수 있고, CMDB 적재 시 IRE 처리 흐름을 활용해 정합성을 유지합니다."
  },
  {
    "id": 87,
    "title": "A CMDB Administrator wants to use the Staleness metric from the CMDB Health Dashboard (Correctness Scorecard). Which field is used to calculate the duration of staleness?",
    "options": [
      {
        "letter": "A",
        "text": "Last modified on (last_modified)"
      },
      {
        "letter": "B",
        "text": "Created (sys_created_on)"
      },
      {
        "letter": "C",
        "text": "Updated (sys_updated_on)"
      },
      {
        "letter": "D",
        "text": "First discovered (first_discovered)"
      },
      {
        "letter": "E",
        "text": "Most recent discovery (last_discovery)"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Staleness 계산은 마지막 업데이트 시점을 기준으로 하므로 sys_updated_on(Updated) 필드가 핵심 기준값입니다."
  },
  {
    "id": 88,
    "title": "A CMDB Data Manager needs to create, publish, and manage CMDB Data Manager policies to automate and govern CI lifecycle operations. Where can this be done in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Workspace - CMDB 360 tab"
      },
      {
        "letter": "B",
        "text": "Service Operations Workspace"
      },
      {
        "letter": "C",
        "text": "CI Class Manager"
      },
      {
        "letter": "D",
        "text": "CMDB Workspace - Management tab"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. CMDB Data Manager 정책의 작성/게시/운영 관리는 CMDB Workspace의 Management 탭에서 수행합니다."
  },
  {
    "id": 89,
    "title": "A platform data owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The data owner knows the best option is to include CMDB 360 Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360 Multisource CMDB. What can the data owner do in this case?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB 360 Multisource is a platform product that can be used immediately."
      },
      {
        "letter": "B",
        "text": "ITOM Discovery needs to be purchased to take advantage of the multisource IRE rules."
      },
      {
        "letter": "C",
        "text": "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 be enabled."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB 360 라이선스 없이도 IRE Reconciliation Rule 자체는 discovery source를 기준으로 계속 적용할 수 있습니다."
  },
  {
    "id": 90,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field, while the Windows Server class uses a rule that selects the most reported value. Based on the RAM values available from different discovery sources in the Multisource CMDB for a given Server, which RAM value will ultimately be written to the CMDB for that Server record? • Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020",
    "options": [
      {
        "letter": "A",
        "text": "6020"
      },
      {
        "letter": "B",
        "text": "2048"
      },
      {
        "letter": "C",
        "text": "4096"
      },
      {
        "letter": "D",
        "text": "1024"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 이 문항은 Server 클래스 규칙 기준으로 판단하므로 동적 규칙인 largest value가 적용되어 6020이 최종 반영됩니다."
  },
  {
    "id": 91,
    "title": "The Server class uses a dynamic reconciliation rule that selects the largest value for the RAM field, while the Windows Server class uses a rule that selects the most reported value. Based on the RAM values available from different discovery sources in the Multisource CMDB for a given Windows Server, which RAM value will ultimately be written to the CMDB for that Windows Server record? • Tivoli RAM: 4096 | ServiceNow RAM: 4096 | LANDesk RAM: 2048 | Altiris RAM: 6020",
    "options": [
      {
        "letter": "A",
        "text": "6020"
      },
      {
        "letter": "B",
        "text": "2048"
      },
      {
        "letter": "C",
        "text": "4096"
      },
      {
        "letter": "D",
        "text": "1024"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 이 문항은 Windows Server 하위 클래스 기준이므로 하위 클래스 동적 규칙인 most reported가 우선 적용되어 4096이 반영됩니다."
  },
  {
    "id": 92,
    "title": "Based on the reconciliation rule setting: Reconciliation Rule=ServiceNow. If ServiceNow attempts update, what is the expected outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Reconciliation Rule에 ServiceNow가 허용 소스로 지정되어 있으므로 ServiceNow의 업데이트 시도는 허용됩니다."
  },
  {
    "id": 93,
    "title": "Based on the reconciliation rule setting: Reconciliation Rule=ServiceNow, SCCM. If Altiris attempts update, what is the expected outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 허용 소스가 ServiceNow, SCCM으로 제한된 규칙에서는 Altiris 업데이트는 권한이 없어 차단됩니다."
  },
  {
    "id": 94,
    "title": "Based on the reconciliation rule setting: Reconciliation Rule=ServiceNow. If Altiris attempts update, what is the expected outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Reconciliation Rule이 ServiceNow 단일 소스인 경우 Altiris의 업데이트는 권위 소스가 아니므로 불가합니다."
  },
  {
    "id": 95,
    "title": "Based on the reconciliation rule setting: Reconciliation Rule=ServiceNow. If Altiris attempts insert, what is the expected outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 이 설정은 업데이트 권한 통제와 별개로 신규 삽입은 허용되는 시나리오이므로 Altiris insert는 가능으로 해석합니다."
  },
  {
    "id": 96,
    "title": "Which of the following correctly describes the Configuration Management Database (CMDB)?",
    "options": [
      {
        "letter": "A",
        "text": "A database used to store configuration records throughout their lifecycle"
      },
      {
        "letter": "B",
        "text": "Information that further describes a CI such as a name, serial number, or operating system"
      },
      {
        "letter": "C",
        "text": "Users, groups, locations"
      },
      {
        "letter": "D",
        "text": "A table that contains a specific type or group of CIs that share common attributes"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CMDB는 CI를 수명주기 전반에서 저장/관리하는 구성 데이터베이스이며, 나머지 보기는 속성/기초데이터/클래스 정의를 설명합니다."
  },
  {
    "id": 97,
    "title": "Which of the following correctly describes Attributes in the context of CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "A database used to store configuration records throughout their lifecycle"
      },
      {
        "letter": "B",
        "text": "Information that further describes a CI such as a name, serial number, or operating system"
      },
      {
        "letter": "C",
        "text": "Users, groups, locations"
      },
      {
        "letter": "D",
        "text": "A table that contains a specific type or group of CIs that share common attributes"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Attributes는 CI를 설명하는 필드 값(예: 이름, 시리얼, OS)으로, CI 자체나 클래스 개념과 구분됩니다."
  },
  {
    "id": 98,
    "title": "Which of the following correctly describes Foundational Data in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "A database used to store configuration records throughout their lifecycle"
      },
      {
        "letter": "B",
        "text": "Information that further describes a CI such as a name, serial number, or operating system"
      },
      {
        "letter": "C",
        "text": "Users, groups, locations"
      },
      {
        "letter": "D",
        "text": "A table that contains a specific type or group of CIs that share common attributes"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Foundational Data는 사용자/그룹/위치처럼 CMDB와 ITSM 전반에서 참조되는 공통 기준 데이터입니다."
  },
  {
    "id": 99,
    "title": "Which of the following correctly describes a Class in the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "A database used to store configuration records throughout their lifecycle"
      },
      {
        "letter": "B",
        "text": "Information that further describes a CI such as a name, serial number, or operating system"
      },
      {
        "letter": "C",
        "text": "Users, groups, locations"
      },
      {
        "letter": "D",
        "text": "A table that contains a specific type or group of CIs that share common attributes"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. Class는 공통 속성을 공유하는 CI 집합을 담는 테이블 단위 개념입니다."
  },
  {
    "id": 100,
    "title": "The following identification rule for a CI class has been defined. Two new CI records are imported into the system. CI one: The name of this CI record matches the name of an existing CI record in the CMDB. CI two: The IP address of this CI record matches the address of an existing CI record in the CMDB. Which outcome is correct based on the identification rule and the imported CI records?",
    "options": [
      {
        "letter": "A",
        "text": "CI one will update the existing CI and CI two will be inserted as a new CI"
      },
      {
        "letter": "B",
        "text": "CI one will be inserted as a new CI and CI two will update the existing CI"
      },
      {
        "letter": "C",
        "text": "Both CI one and CI two will update existing CIs"
      },
      {
        "letter": "D",
        "text": "Both CI one and CI two will be inserted as new CIs"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 식별 규칙이 이름 매치를 인정하고 IP 매치는 불충분한 조건이라면 CI one은 기존 레코드 업데이트, CI two는 신규 삽입으로 처리됩니다."
  },
  {
    "id": 101,
    "title": "A CMDB Administrator installs a Service Graph Connector (SGC) and then customizes the mappings provided with the connector. What is the consequence of customizing the mappings?",
    "options": [
      {
        "letter": "A",
        "text": "Fields populated by a customization will have a special tag associated with them in the CMDB."
      },
      {
        "letter": "B",
        "text": "The customized mappings are not supported by ServiceNow and the customer is responsible for supporting their own customized SGC."
      },
      {
        "letter": "C",
        "text": "The customization will prevent the SGC from executing without an approval record attached."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. SGC 기본 매핑을 커스터마이즈하면 표준 지원 범위를 벗어나 고객이 해당 커스텀 유지보수 책임을 부담하게 됩니다."
  },
  {
    "id": 102,
    "title": "An organization uses multiple data sources to update its CMDB and each data source has a different priority level. A high priority data source updates server records weekly. However, due to an integration issue, this high priority source stops updating the records. Which configuration allow a lower priority data source to update the records after a specified period of inactivity from the higher priority source?",
    "options": [
      {
        "letter": "A",
        "text": "Data Refresh Rule"
      },
      {
        "letter": "B",
        "text": "Health Inclusion Rules"
      },
      {
        "letter": "C",
        "text": "Identification Rules"
      },
      {
        "letter": "D",
        "text": "Reconciliation Rules"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 상위 우선순위 소스가 일정 기간 갱신하지 못할 때 하위 소스 업데이트를 허용하는 제어는 Data Refresh Rule로 구현합니다."
  },
  {
    "id": 103,
    "title": "A CMDB Configuration Manager creates a data filter for a certification policy in CMDB Data Manager with the following configuration: Table: Server [cmdb_ci_server], Filter Condition: Operating System contains Server OR Operating System contains Linux. Which operating systems will be affected by this policy? (Choose multiple)",
    "options": [
      {
        "letter": "A",
        "text": "AIX"
      },
      {
        "letter": "B",
        "text": "Windows Server 2022 Datacenter"
      },
      {
        "letter": "C",
        "text": "Linux CentOS"
      },
      {
        "letter": "D",
        "text": "Windows 2019 Datacenter"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: B, C, D. 조건이 OS에 'Server' 또는 'Linux' 포함이므로 Windows Server 계열과 Linux 계열은 포함되고 AIX는 조건에 직접 부합하지 않습니다."
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
    "title": "A CMDB Administrator understands that the CMDB Data Foundations Dashboard is used to monitor and improve CMDB data quality. What is the benefit of using the CMDB Data Foundations Dashboard?",
    "options": [
      {
        "letter": "A",
        "text": "Provides the ability to configure health related metrics"
      },
      {
        "letter": "B",
        "text": "Provides key health related metrics to make decisions"
      },
      {
        "letter": "C",
        "text": "Provides the ability to resolve certification policy tasks"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. CMDB Data Foundations Dashboard의 핵심 가치는 의사결정에 쓰이는 품질/운영 지표 가시화이며, 지표 정의 설정 자체는 주 기능이 아닙니다."
  },
  {
    "id": 106,
    "title": "The CMDB Configuration Management team wants to manage de-duplication tasks that are generated when data is ingested into the CMDB through the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    "options": [
      {
        "letter": "A",
        "text": "Import Action tile under the Home tab"
      },
      {
        "letter": "B",
        "text": "Total Status tile under the My Work tab"
      },
      {
        "letter": "C",
        "text": "CMDB Feature Adoption tile under the Insights tab"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. IRE에서 생성된 중복 정리 작업은 CMDB Workspace의 My Work 영역에서 상태 타일을 통해 추적/처리합니다."
  },
  {
    "id": 107,
    "title": "A CMDB Administrator is configuring group ownership values from two sources. CI Class Manager Managed by Group = Enterprise IT Services. Technical Service Offering Managed by Group = Windows Support. Change Group = Change Management Team. For CIs of this class, what will be the final Managed by Group value?",
    "options": [
      {
        "letter": "A",
        "text": "Enterprise IT Services"
      },
      {
        "letter": "B",
        "text": "Change Management Team"
      },
      {
        "letter": "C",
        "text": "Windows Support"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CSDM 정렬 운영에서는 Technical Service Offering의 Managed by Group이 CI 운영 소유값으로 반영되는 우선 소스로 사용됩니다."
  },
  {
    "id": 108,
    "title": "A CMDB Administrator is configuring IRE (Identification and Reconciliation Engine) rules. While working in CI Class Manager, they see the Health Inclusion Rules tab for a CI class. How are these rules used by the IRE?",
    "options": [
      {
        "letter": "A",
        "text": "To narrow the scope of CIs included in the identification process"
      },
      {
        "letter": "B",
        "text": "To reduce the data ingested into the CMDB"
      },
      {
        "letter": "C",
        "text": "To reconcile specific attributes based on data sources"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Health Inclusion Rules는 어떤 CI 집합을 규칙 평가 대상으로 볼지 스코프를 좁히는 데 쓰이며, 식별 대상 범위 관리 맥락으로 이해할 수 있습니다."
  },
  {
    "id": 109,
    "title": "A ServiceNow administrator needs to create custom CMDB classes and wants to follow ServiceNow based practices for table naming to avoid technical debt. What should be the starting prefix for all custom CMDB tables?",
    "options": [
      {
        "letter": "A",
        "text": "cmdb_ci_"
      },
      {
        "letter": "B",
        "text": "u_cmdb_ci_"
      },
      {
        "letter": "C",
        "text": "u_ci_cmdb_"
      },
      {
        "letter": "D",
        "text": "ci_cmdb_"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 커스텀 테이블은 업데이트 충돌과 기술부채를 줄이기 위해 사용자 정의 접두사 u_를 사용하며, CMDB 클래스는 u_cmdb_ci_ 패턴이 권장됩니다."
  },
  {
    "id": 110,
    "title": "A Configuration Manager needs to view and update identification rules for a specific CI class in the CMDB. Where can these existing identification rules be viewed and configured? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "API Integrations"
      },
      {
        "letter": "B",
        "text": "IRE Application"
      },
      {
        "letter": "C",
        "text": "CI Class Manager"
      },
      {
        "letter": "D",
        "text": "CI Identifiers Module"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: C, D. 클래스별 식별 규칙은 CI Class Manager에서 관리하고, CI Identifiers 모듈에서도 식별자 항목을 직접 조회/수정할 수 있습니다."
  },
  {
    "id": 111,
    "title": "From the CMDB Workspace, to identify active incidents or problems related to a selected CI, which panel provides visibility and details of these related records?",
    "options": [
      {
        "letter": "A",
        "text": "Overview"
      },
      {
        "letter": "B",
        "text": "Application Services"
      },
      {
        "letter": "C",
        "text": "Related Items"
      },
      {
        "letter": "D",
        "text": "Attributes"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 선택 CI와 연관된 Incident/Problem 같은 운영 레코드는 CMDB Workspace의 Related Items 패널에서 확인하는 것이 표준 흐름입니다."
  },
  {
    "id": 112,
    "title": "A CMDB Administrator wants to identify CIs and CI classes that are missing required or key data. Which CMDB Health Dashboard scorecard should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Compliance"
      },
      {
        "letter": "B",
        "text": "Correctness"
      },
      {
        "letter": "C",
        "text": "Completeness"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 필수/핵심 데이터 누락 여부는 값 채워짐 수준을 보는 Completeness 스코어카드에서 진단합니다."
  },
  {
    "id": 113,
    "title": "A platform owner is aligning CIs with CSDM and needs to map product online monitoring systems. Which CSDM domain should the platform owner use?",
    "options": [
      {
        "letter": "A",
        "text": "Service Delivery (Manage Technical Services)"
      },
      {
        "letter": "B",
        "text": "Foundation"
      },
      {
        "letter": "C",
        "text": "Build and Integration (Build)"
      },
      {
        "letter": "D",
        "text": "Service Consumption (Sell or Consume)"
      },
      {
        "letter": "E",
        "text": "Design and Planning (Design)"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 온라인 모니터링 시스템 같은 기술 운영 컴포넌트를 CSDM에 매핑할 때는 Service Delivery(Manage Technical Services) 도메인이 맞습니다."
  },
  {
    "id": 114,
    "title": "In the CI Class Manager, where do you go to configure a rule to uniquely identify CIs?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rule tab"
      },
      {
        "letter": "B",
        "text": "Reconciliation Rules tab"
      },
      {
        "letter": "C",
        "text": "Basic Info tab"
      },
      {
        "letter": "D",
        "text": "Pinned Classes"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CI를 유일하게 식별하는 규칙 정의는 CI Class Manager의 Identification Rule 탭에서 수행합니다."
  },
  {
    "id": 115,
    "title": "In the CI Class Manager, what feature allows for easy navigation back to a frequently accessed class?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rule tab"
      },
      {
        "letter": "B",
        "text": "Reconciliation Rules tab"
      },
      {
        "letter": "C",
        "text": "Basic Info tab"
      },
      {
        "letter": "D",
        "text": "Pinned Classes"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 자주 접근하는 클래스로 빠르게 돌아가려면 Pinned Classes 기능으로 탐색 경로를 고정하는 것이 가장 효율적입니다."
  },
  {
    "id": 116,
    "title": "In the CI Class Manager, where do you configure data sources authorized to update CI Attributes?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rule tab"
      },
      {
        "letter": "B",
        "text": "Reconciliation Rules tab"
      },
      {
        "letter": "C",
        "text": "Basic Info tab"
      },
      {
        "letter": "D",
        "text": "Pinned Classes"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 어떤 데이터 소스가 CI 속성을 업데이트할 수 있는지의 권한/우선순위 제어는 Reconciliation Rules 탭에서 설정합니다."
  },
  {
    "id": 117,
    "title": "In the CI Class Manager, where do you configure an icon for a specific class?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rule tab"
      },
      {
        "letter": "B",
        "text": "Reconciliation Rules tab"
      },
      {
        "letter": "C",
        "text": "Basic Info tab"
      },
      {
        "letter": "D",
        "text": "Pinned Classes"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 클래스 아이콘 같은 시각/기본 정보는 CI Class Manager의 Basic Info 탭에서 관리합니다."
  },
  {
    "id": 118,
    "title": "What is generated if two or more identical CIs are found in the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rules"
      },
      {
        "letter": "B",
        "text": "De-duplication Task"
      },
      {
        "letter": "C",
        "text": "Reconciliation Rule"
      },
      {
        "letter": "D",
        "text": "IRE Data Source Rule"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. IRE 식별 과정에서 동일 CI가 2개 이상 매치되면 자동 업데이트를 중단하고 De-duplication Task를 생성합니다."
  },
  {
    "id": 119,
    "title": "The Change Management team wants to implement a change across multiple Configuration Items (CIs) simultaneously. They plan to use a Dynamic CI Group to target those CIs. Which field on the Change Request form must be populated with the Dynamic CI Group?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration Item"
      },
      {
        "letter": "B",
        "text": "Business Service"
      },
      {
        "letter": "C",
        "text": "Service Offering"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Dynamic CI Group 기반 일괄 변경 대상 지정은 Change Request의 Configuration Item 필드에 해당 그룹을 지정하는 방식으로 처리합니다."
  },
  {
    "id": 120,
    "title": "A CMDB Administrator is using the Duplicate CI Remediator to resolve duplicate Configuration Items. In the first step of the wizard, a Main CI must be selected. Which attributes can be used to identify the Main CI? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Oldest Created"
      },
      {
        "letter": "B",
        "text": "Least Related Items"
      },
      {
        "letter": "C",
        "text": "Most Related Items"
      },
      {
        "letter": "D",
        "text": "Newest Created"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. 메인 CI 선정 시 오래된 기준(Oldest Created)과 관계가 많은 기준(Most Related Items)을 쓰면 참조 연속성을 보존하며 정리할 수 있습니다."
  },
  {
    "id": 121,
    "title": "An organization is using CMDB Query Builder to find: Application services that have a database with incidents and all infrastructure related to those application services. Which steps are required to build this query? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Use a CMDB Query to include application services and their related infrastructure"
      },
      {
        "letter": "B",
        "text": "Use a Service Mapping Query to find all incidents related to the database"
      },
      {
        "letter": "C",
        "text": "Add a non-CMDB table to the query"
      },
      {
        "letter": "D",
        "text": "Use a Service Mapping Query to include non-CMDB tables like the Incident table"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. 애플리케이션 서비스-인프라 관계는 CMDB Query로 구성하고, Incident 같은 비CMDB 데이터를 함께 보려면 non-CMDB 테이블 추가가 필요합니다."
  },
  {
    "id": 122,
    "title": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are the benefits of using this application? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Checks that important data is valid and properly configured"
      },
      {
        "letter": "B",
        "text": "Uses automation to remediate potential risks"
      },
      {
        "letter": "C",
        "text": "Provides playbooks to assist in the remediation of potential risks"
      },
      {
        "letter": "D",
        "text": "Has a framework to create custom metrics for the CMD"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. Data Foundations Dashboard는 데이터 유효성/구성 품질을 점검하고, 자동 수정보다 Playbook 기반의 개선 가이드를 제공합니다."
  },
  {
    "id": 123,
    "title": "A Business Relationship Manager (BRM) wants to implement Service Portfolio Management (SPM) in order to present service offerings to business consumers. Which Common Service Data Model (CSDM) domain best aligns with this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Build and Integration (Build)"
      },
      {
        "letter": "B",
        "text": "Service Consumption (Sell/Consume)"
      },
      {
        "letter": "C",
        "text": "Design and Planning (Design)"
      },
      {
        "letter": "D",
        "text": "Service Delivery"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 비즈니스 소비자에게 서비스 오퍼링을 제공하는 SPM 맥락은 CSDM의 Service Consumption(Sell/Consume) 도메인에 해당합니다."
  },
  {
    "id": 124,
    "title": "A retail organization wants to ensure that incidents affecting customer-facing services are resolved quickly to avoid revenue loss. Which CSDM attribute should be used to prioritize these services?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment Group on the CI record"
      },
      {
        "letter": "B",
        "text": "Affected CIs in the Incident record"
      },
      {
        "letter": "C",
        "text": "Service Classification in the Technical Service"
      },
      {
        "letter": "D",
        "text": "Business Criticality in the Service Offering"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 고객 영향 서비스의 우선순위는 기술 속성보다 비즈니스 영향도를 반영하는 Service Offering의 Business Criticality로 결정하는 것이 적절합니다."
  },
  {
    "id": 125,
    "title": "Where can a ServiceNow administrator perform Natural Language Queries (NLQ) when working with CMDB data?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "CI Class Manager"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "CMDB Health Dashboard"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB 데이터에 대한 자연어 질의(NLQ)는 CMDB Workspace에서 수행합니다."
  },
  {
    "id": 126,
    "title": "A CMDB Administrator needs to prevent duplicate CI creation when Import Sets load data into the CMDB from vendor shipment files containing CI information. What is the best approach?",
    "options": [
      {
        "letter": "A",
        "text": "Create comparison rules in the IRE"
      },
      {
        "letter": "B",
        "text": "Use the CMDBTransformUtil API in the transform script"
      },
      {
        "letter": "C",
        "text": "Set the system property to utilize the IRE within transform maps"
      },
      {
        "letter": "D",
        "text": "Set the coalesce on two mappings within the transform map"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Import Set 적재 시 중복 생성을 막으려면 Transform 단계에서 CMDBTransformUtil을 사용해 IRE 경유 처리를 적용하는 것이 모범 사례입니다."
  },
  {
    "id": 127,
    "title": "A CMDB Administrator notices that Configuration Items (CIs) do not have a Support Group populated. How can the Support Group be automatically populated and maintained on the CI record according to CSDM practices?",
    "options": [
      {
        "letter": "A",
        "text": "Dynamic CI Group"
      },
      {
        "letter": "B",
        "text": "Technology Management Service (Technical Service)"
      },
      {
        "letter": "C",
        "text": "CI Class Manager"
      },
      {
        "letter": "D",
        "text": "Technology Management Service Offering (Technical Service Offering)"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. CSDM 관점에서 CI의 운영 지원 그룹 자동 정합은 Technology Management Service Offering 관계를 통해 Managed/Support 그룹을 동기화하는 방식이 권장됩니다."
  },
  {
    "id": 128,
    "title": "An organization is using CMDB Query Builder to identify Application Services those services contain a Database. The database has Incidents. The query should also return all infrastructure related to those Application Services. Which steps should be used to build this query? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Add a non-CMDB table to the query"
      },
      {
        "letter": "B",
        "text": "Use a Service Mapping Query to include non-CMDB tables like the Incident table"
      },
      {
        "letter": "C",
        "text": "Use a Service Mapping Query to find all incidents related to the database"
      },
      {
        "letter": "D",
        "text": "Use a CMDB Query to include application services and their related infrastructure"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "정답: A, D. 이 유형은 121번과 동일하게 CMDB 관계는 CMDB Query로, Incident 연계는 non-CMDB 테이블 추가로 해결합니다."
  },
  {
    "id": 129,
    "title": "A CMDB Administrator is starting the process of populating the CMDB and wants to ensure that data that is no longer useful or applicable is removed from the CMDB. Which governance management tool in ServiceNow is used to manage the lifecycle of CI data and remove outdated or unnecessary records?",
    "options": [
      {
        "letter": "A",
        "text": "CI Class Manager"
      },
      {
        "letter": "B",
        "text": "CMDB and CSDM Data Foundations Dashboard"
      },
      {
        "letter": "C",
        "text": "CMDB Health Dashboard"
      },
      {
        "letter": "D",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "E",
        "text": "De-duplication Template"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. CI 데이터의 수명주기 관리와 불필요 레코드 제거는 CMDB Data Manager 정책으로 통제합니다."
  },
  {
    "id": 130,
    "title": "Which actions can be initiated from the CMDB Workspace? (Choose three)",
    "options": [
      {
        "letter": "A",
        "text": "Execute ServiceNow Discovery"
      },
      {
        "letter": "B",
        "text": "Create a CMDB Data Manager certification policy"
      },
      {
        "letter": "C",
        "text": "Remediate duplicate CI records"
      },
      {
        "letter": "D",
        "text": "Create a new CMDB class"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: B, C, D. CMDB Workspace에서는 Data Manager 정책 생성, 중복 CI 정리, 클래스 관리를 수행할 수 있으며 Discovery 실행은 별도 영역입니다."
  },
  {
    "id": 131,
    "title": "A CMDB Administrator group wants to set up a process to receive task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be used to: Configure recommended fields and Generate tasks when those fields are missing?",
    "options": [
      {
        "letter": "A",
        "text": "Technical Service Offerings and Dynamic CI Groups"
      },
      {
        "letter": "B",
        "text": "CMDB Workspace and Scheduled Jobs"
      },
      {
        "letter": "C",
        "text": "Dynamic CI Groups and CMDB Groups"
      },
      {
        "letter": "D",
        "text": "CI Class Manager and Health Preferences"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 권장 필드 구성은 CI Class Manager에서, 누락값 기반 모니터링/태스크 트리거는 Health Preferences에서 설정합니다."
  },
  {
    "id": 132,
    "title": "The CMDB Configuration Management team has developed a healthy and trusted CMDB by: Integrating discovered infrastructure data, Referencing non-discoverable data (such as change and support group information), and Making the CMDB service-aware using Service Mapping. How will these improvements enhance the Change Management process? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Automatically schedules and deploys changes without human review or approval"
      },
      {
        "letter": "B",
        "text": "Provides insight into the potential impact of the change"
      },
      {
        "letter": "C",
        "text": "Ensures that no changes result in service downtime, regardless of planning or execution"
      },
      {
        "letter": "D",
        "text": "Enables auto population of the assignment group field to dynamically route changes"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: B, D. 서비스 인지형 CMDB는 변경 영향도 분석을 강화하고, 지원 그룹 정보로 Assignment Group 자동 채움 등 동적 라우팅을 개선합니다."
  },
  {
    "id": 133,
    "title": "A CMDB Administrator wants to align their CMDB with CSDM life cycle best practices by using Life Cycle field mappings. After clicking Enable Life Cycle Sync, what should be the next step?",
    "options": [
      {
        "letter": "A",
        "text": "Fix the incorrect values in the Life Cycle Stage to match legacy values"
      },
      {
        "letter": "B",
        "text": "Activate the CSDM Life Cycle field mappings"
      },
      {
        "letter": "C",
        "text": "Resolve any incomplete field mappings identified in the Discrepancy Report"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Life Cycle Sync 활성화 후에는 우선 Discrepancy Report의 불완전 매핑을 해소해 레거시 상태와 CSDM 표준 단계의 정합을 맞춰야 합니다."
  },
  {
    "id": 134,
    "title": "A CSDM Data Manager wants to view metrics that measure how well Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) align with CSDM best practices. Which tab in the CSDM Data Foundations Dashboard provides these metrics?",
    "options": [
      {
        "letter": "A",
        "text": "Crawl"
      },
      {
        "letter": "B",
        "text": "Walk"
      },
      {
        "letter": "C",
        "text": "Fly"
      },
      {
        "letter": "D",
        "text": "Run"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Technical Service와 Technical Service Offering 정렬 정도는 CSDM Data Foundations의 Walk 탭 지표로 확인합니다."
  },
  {
    "id": 135,
    "title": "What are the characteristics or functions of ServiceNow IntegrationHub ETL? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Integrates third-party data into the CMDB or into non-CMDB tables"
      },
      {
        "letter": "B",
        "text": "Performs discovery data collection and updates the CMDB"
      },
      {
        "letter": "C",
        "text": "Uses the IRE to process and integrate data"
      },
      {
        "letter": "D",
        "text": "Imports Microsoft SCCM / Intune data into the CMDB"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. IntegrationHub ETL은 외부 데이터를 CMDB/비CMDB로 통합하며, CMDB 적재 시 IRE를 통해 식별/조정 규칙을 적용할 수 있습니다."
  },
  {
    "id": 136,
    "title": "A CMDB Administrator wants to use the Staleness metric from the CMDB Health Dashboard (Correctness Scorecard). Which field is used to calculate the duration of staleness?",
    "options": [
      {
        "letter": "A",
        "text": "Last modified on (last_modified)"
      },
      {
        "letter": "B",
        "text": "Created (sys_created_on)"
      },
      {
        "letter": "C",
        "text": "Updated (sys_updated_on)"
      },
      {
        "letter": "D",
        "text": "First discovered (first_discovered)"
      },
      {
        "letter": "E",
        "text": "Most recent discovery (last_discovery)"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Staleness는 마지막 갱신 시점 기준으로 산정되므로 sys_updated_on 필드를 사용합니다."
  },
  {
    "id": 137,
    "title": "A Manager needs guidance on how to correctly establish relationships between infrastructure CIs, Technology Management Offerings (Technical Service Offerings) and Application Services within the CMDB. Which CSDM domain provides the guidance for defining these relationships?",
    "options": [
      {
        "letter": "A",
        "text": "Service Consumption (Sell or Consume)"
      },
      {
        "letter": "B",
        "text": "Foundation"
      },
      {
        "letter": "C",
        "text": "Design and Planning (Design)"
      },
      {
        "letter": "D",
        "text": "Build and Integration (Build)"
      },
      {
        "letter": "E",
        "text": "Service Delivery (Manage Technical Services)"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: E. 인프라 CI, Technical Service Offering, Application Service 간 운영 관계 가이드는 Service Delivery(Manage Technical Services) 도메인에서 다룹니다."
  },
  {
    "id": 138,
    "title": "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CIs. Which groups are synchronized to CIs from the offering that has a relationship to a Dynamic CI Group? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Owned by Group"
      },
      {
        "letter": "B",
        "text": "Managed by Group"
      },
      {
        "letter": "C",
        "text": "Approval Group"
      },
      {
        "letter": "D",
        "text": "Support Group"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: B, D. Dynamic CI Group과 연결된 Technical Service Offering에서 CI로 동기화되는 핵심 운영 그룹은 Managed by Group과 Support Group입니다."
  },
  {
    "id": 139,
    "title": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's correctness scorecard for the Server class, which consists of a total of 60000 servers in the CMDB. For the duplicate metric, it shows healthy CIs are evaluated as 59000 of 60000. For the orphan metric, it shows healthy CIs are evaluated as 45000 of 50000. Which configuration explains the difference in the scope of Server CIs 60000 versus 50000 evaluated between the two metrics?",
    "options": [
      {
        "letter": "A",
        "text": "The orphan metric has a CMDB group configured for the server class"
      },
      {
        "letter": "B",
        "text": "The duplicate metric has a health inclusion rule configured for the server class"
      },
      {
        "letter": "C",
        "text": "The orphan metric has a health inclusion rule configured for the server class"
      },
      {
        "letter": "D",
        "text": "The duplicate metric has a CMDB group configured for the server class"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 메트릭별 평가 모수가 다를 때는 해당 메트릭에 별도 Health Inclusion Rule이 적용된 경우가 대표적이며, 여기서는 orphan 메트릭이 그 사례입니다."
  },
  {
    "id": 140,
    "title": "A platform owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM framework. They need to map incoming systems to the appropriate CSDM domain. Which CSDM domain should the platform owner use?",
    "options": [
      {
        "letter": "A",
        "text": "Service Delivery or Manage Technical"
      },
      {
        "letter": "B",
        "text": "Foundation"
      },
      {
        "letter": "C",
        "text": "Build and Integration"
      },
      {
        "letter": "D",
        "text": "Design and Planning"
      },
      {
        "letter": "E",
        "text": "Service Consumption"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 제조업 시나리오라도 'incoming systems'를 기술 운영 관점에서 매핑할 때는 Service Delivery(Manage Technical Services) 도메인을 사용합니다."
  },
  {
    "id": 141,
    "title": "What is the difference between data certification and attestation policies when managing a CI?",
    "options": [
      {
        "letter": "A",
        "text": "Attestation can be scheduled while data certification cannot be scheduled"
      },
      {
        "letter": "B",
        "text": "Attestation requires correcting specific attributes of a CI while data certification tracks acknowledgement the CI still exists"
      },
      {
        "letter": "C",
        "text": "Attestation tracks acknowledgement the CI still exists while data certification require validating specific attributes of a CI"
      },
      {
        "letter": "D",
        "text": "Attestation can be assigned to a group or an individual while data certification can only be assigned to an individual"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Attestation은 CI 존재/유효성 확인, Data Certification은 CI 속성값의 정확성 검증과 보정을 목적으로 합니다."
  },
  {
    "id": 142,
    "title": "A CMDB administrator is implementing a vulnerability response or security incident response solution and needs to ensure that customers have enough context to estimate risk and take priorities. Which CSDM Data Foundations Dashboard playbook helps with this?",
    "options": [
      {
        "letter": "A",
        "text": "Locations without a parent location"
      },
      {
        "letter": "B",
        "text": "Name Product Models without Product Owners"
      },
      {
        "letter": "C",
        "text": "Application Services with Business Application Relations"
      },
      {
        "letter": "D",
        "text": "Percentage of custom status values for CI Life Cycle Stages"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 보안 우선순위 산정을 위해서는 기술 CI와 비즈니스 맥락 연결이 필요하므로 Application Service-Business Application 관계 품질 개선 플레이북이 핵심입니다."
  },
  {
    "id": 143,
    "title": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard compliance scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Technical Service Offerings, Dynamic CI Groups, CMDB Groups"
      },
      {
        "letter": "B",
        "text": "Certification Filter, Certification Template, Audit"
      },
      {
        "letter": "C",
        "text": "Stale, Orphan, Duplicate"
      },
      {
        "letter": "D",
        "text": "Certification Policies, Data Filters, Scheduled Jobs"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Compliance scorecard에 패치 준수 결과를 의미 있게 반영하려면 Certification Filter, Template, Audit 구성이 선행되어야 합니다."
  },
  {
    "id": 144,
    "title": "CMDB class owners are seeking tasks assigned to them in the My Work tab within CMDB Workspace. Which CMDB management tool is responsible for generating these tasks?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Health Dashboard"
      },
      {
        "letter": "B",
        "text": "De-duplication templates"
      },
      {
        "letter": "C",
        "text": "CMDB Data Manager"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB Workspace의 My Work에 생성되는 소유자/정비 태스크는 CMDB Data Manager가 정책 기반으로 발행합니다."
  },
  {
    "id": 145,
    "title": "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "Reconciliation Rules"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "CMDB 360/Multisource CMDB"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. Dynamic Reconciliation Rule은 CMDB 360/Multisource CMDB 기능이 활성화되어야 사용할 수 있습니다."
  },
  {
    "id": 146,
    "title": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      {
        "letter": "A",
        "text": "Many-to-one"
      },
      {
        "letter": "B",
        "text": "Many-to-many"
      },
      {
        "letter": "C",
        "text": "One-to-many"
      },
      {
        "letter": "D",
        "text": "One-to-one"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 서버 한 대가 여러 애플리케이션을 호스팅하는 조건에서는 Application Server 기준 One-to-many 관계입니다."
  },
  {
    "id": 147,
    "title": "A Data Center Manager is defining the relationship between Application Servers and Applications in the CMDB. The company environment has the following characteristics: Multiple Application Servers, Each server can host multiple Applications, Each Application can run on multiple servers for load balancing and redundancy. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    "options": [
      {
        "letter": "A",
        "text": "One-to-one"
      },
      {
        "letter": "B",
        "text": "One-to-many"
      },
      {
        "letter": "C",
        "text": "Many-to-one"
      },
      {
        "letter": "D",
        "text": "Many-to-many"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 서버도 여러 앱을 담고 앱도 여러 서버에 배치되는 이중화 구조이므로 Many-to-many 관계가 맞습니다."
  },
  {
    "id": 148,
    "title": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Enterprise Architect"
      },
      {
        "letter": "B",
        "text": "Application Service Owners"
      },
      {
        "letter": "C",
        "text": "Technology Service Owners"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 인프라 업그레이드 요청의 요구사항 정의와 요청 주도 역할은 CSDM 운영 맥락에서 Technology Service Owner가 담당합니다."
  },
  {
    "id": 149,
    "title": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      {
        "letter": "A",
        "text": "Completeness"
      },
      {
        "letter": "B",
        "text": "Correctness"
      },
      {
        "letter": "C",
        "text": "Compliance"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Stale CI는 최신성/정확성 문제이므로 CMDB Health의 Correctness 스코어카드에서 확인합니다."
  },
  {
    "id": 150,
    "title": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on Incident form is automatically populated after a CI is selected that reference an appropriate support group?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment Group"
      },
      {
        "letter": "B",
        "text": "Support Group"
      },
      {
        "letter": "C",
        "text": "Approval Group"
      },
      {
        "letter": "D",
        "text": "Managed by Group"
      },
      {
        "letter": "E",
        "text": "Change Group"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CI에 적절한 지원 그룹 연계가 있으면 Incident에서 CI 선택 시 Assignment Group이 자동으로 채워져 라우팅 정확도를 높입니다."
  },
  {
    "id": 151,
    "title": "A CMDB Administrator installs a Service Graph Connector. They customize a script transform provided by the connector. Later, the Service Graph Connector is upgraded and the default script transform definition is updated. What happens to the customized script transform during the upgrade?",
    "options": [
      {
        "letter": "A",
        "text": "The upgrade stops and reports an error."
      },
      {
        "letter": "B",
        "text": "A skipped change is created and no change is made to the script transform definition."
      },
      {
        "letter": "C",
        "text": "The Service Graph Connector upgrade refuses to start."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. SGC 기본 스크립트 변환을 커스터마이즈한 상태에서 업그레이드 충돌이 나면 skipped change가 생성되고 커스텀 정의는 자동 덮어쓰지 않습니다."
  },
  {
    "id": 152,
    "title": "In the Create Reconciliation Rule wizard for CMDB 360 / Multisource CMDB, which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Most Reported"
      },
      {
        "letter": "B",
        "text": "Last Created"
      },
      {
        "letter": "C",
        "text": "Last Updated"
      },
      {
        "letter": "D",
        "text": "Smallest Value"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explanation": "정답: A, C, D. Dynamic Rule Types에는 Most Reported, Last Updated, Smallest Value가 포함되며 Last Created는 기본 제공 동적 타입이 아닙니다."
  },
  {
    "id": 153,
    "title": "A CMDB Administrator needs to clean up duplicate CIs in the CMDB. What is the preferred way to manage this task?",
    "options": [
      {
        "letter": "A",
        "text": "The De-duplication Dashboard on the CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "My Tasks in the Application Navigator"
      },
      {
        "letter": "C",
        "text": "The De-duplication Task module"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 중복 CI 정리는 CMDB Workspace의 De-duplication Dashboard를 중심으로 관리하는 것이 분석/처리 흐름 측면에서 가장 효율적입니다."
  },
  {
    "id": 154,
    "title": "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
    "options": [
      {
        "letter": "A",
        "text": "To understand the business impact of CIs"
      },
      {
        "letter": "B",
        "text": "To understand the physical location of CIs"
      },
      {
        "letter": "C",
        "text": "To identify which devices will go offline first"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Application Service 매핑은 변경 대상 CI가 비즈니스 서비스에 미치는 영향을 드러내므로 Change 영향 분석 품질을 높입니다."
  },
  {
    "id": 155,
    "title": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "CI Class Manager"
      },
      {
        "letter": "C",
        "text": "System Properties"
      },
      {
        "letter": "D",
        "text": "CMDB Workspace"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Incident 같은 참조 필드에 노출할 Principal Class 지정은 CI Class Manager에서 클래스 속성으로 관리합니다."
  },
  {
    "id": 156,
    "title": "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      {
        "letter": "A",
        "text": "Create a business rule on the computer table"
      },
      {
        "letter": "B",
        "text": "Use the AssetCI Field Mapping module"
      },
      {
        "letter": "C",
        "text": "Hide the Asset field and dot-walk to the CI field"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. CI와 Asset 간 필드 동기화를 자동화하려면 AssetCI Field Mapping 모듈로 매핑 규칙을 설정하는 방식이 표준입니다."
  },
  {
    "id": 157,
    "title": "What is the relationship between an application and a server?",
    "options": [
      {
        "letter": "A",
        "text": "Application > Runs on :: Runs > Server"
      },
      {
        "letter": "B",
        "text": "Application > Runs :: Runs on > Server"
      },
      {
        "letter": "C",
        "text": "Application > Used by :: Uses > Server"
      },
      {
        "letter": "D",
        "text": "Application > Uses :: Used by > Server"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 표준 관계 표현은 Application runs on Server이며, 역방향으로 Server runs Application 관계로 읽습니다."
  },
  {
    "id": 158,
    "title": "Which of the following is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      {
        "letter": "A",
        "text": "Automates the enforcement of relationship rules between CIs in the CMDB"
      },
      {
        "letter": "B",
        "text": "Encrypts archived records for enhanced security"
      },
      {
        "letter": "C",
        "text": "Automates the archival and deletion of records based on retention policies"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB Data Manager의 핵심 목적은 보존 정책 기반 아카이브/삭제 자동화로 데이터 볼륨과 수명주기를 관리하는 것입니다."
  },
  {
    "id": 159,
    "title": "A CMDB Administrator wants to run the Service Have Owners Identified playbook to remediate issues shown in the CMDB Data Foundations Dashboard. Which remediation playbooks would be used? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Fix Data"
      },
      {
        "letter": "B",
        "text": "Govern Data"
      },
      {
        "letter": "C",
        "text": "Report Data"
      },
      {
        "letter": "D",
        "text": "Analyze Data"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "정답: A, B, D. Service Have Owners Identified 이슈 보정에는 Fix Data, Govern Data, Analyze Data 플레이북이 활용되며 Report Data는 분석/개선 실행 플레이북이 아닙니다."
  },
  {
    "id": 160,
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
    "explanation": "정답: A. 중복 위험과 비인가 생성 통제를 위해서는 IRE 처리 경로를 잘 활용하는 IntegrationHub ETL이 권장됩니다."
  },
  {
    "id": 161,
    "title": "A Change Manager wants to gain value from CSDM (Common Service Data Model). How will the Change Management process benefit from CSDM? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Understand the impact of the change on services"
      },
      {
        "letter": "B",
        "text": "Identify blackout windows for the change"
      },
      {
        "letter": "C",
        "text": "Route the change dynamically"
      },
      {
        "letter": "D",
        "text": "Determine the root cause of the change issue"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. CSDM 정렬은 변경 영향 서비스를 명확히 파악하게 해주고, 서비스/소유 구조 기반으로 변경 라우팅 자동화에도 도움을 줍니다."
  },
  {
    "id": 162,
    "title": "A Configuration Management Governance team is transitioning from using legacy CMDB status fields to the CSDM Life Cycle Status field. Which table can be modified?",
    "options": [
      {
        "letter": "A",
        "text": "Life Cycle Mapping (life_cycle_mapping)"
      },
      {
        "letter": "B",
        "text": "Life Cycle Stage Status (life_cycle_stage_status)"
      },
      {
        "letter": "C",
        "text": "Life Cycle Stages (life_cycle_stage)"
      },
      {
        "letter": "D",
        "text": "Life Cycle Controls (life_cycle_control)"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 레거시 상태를 CSDM Life Cycle 체계로 전환할 때 실제 stage status 값 관리는 life_cycle_stage_status 테이블에서 수행합니다."
  },
  {
    "id": 163,
    "title": "The Configuration Manager is preparing a justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "It helps detect and eliminate duplicate records in the CMDB."
      },
      {
        "letter": "B",
        "text": "It enables monitoring and tracking of CMDB health over time."
      },
      {
        "letter": "C",
        "text": "It provides actionable insights to improve data quality and completeness."
      },
      {
        "letter": "D",
        "text": "It automates the approval process for Change Management."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "정답: B, C. Data Foundations Dashboard는 CMDB 상태 추세 모니터링과 실행 가능한 품질 개선 인사이트 제공에 강점이 있으며 Change 승인 자동화 도구는 아닙니다."
  },
  {
    "id": 164,
    "title": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are the benefits of using this application? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Checks that important data is valid and properly configured"
      },
      {
        "letter": "B",
        "text": "Uses automation to remediate potential risks"
      },
      {
        "letter": "C",
        "text": "Provides playbooks to assist in the remediation of potential risks"
      },
      {
        "letter": "D",
        "text": "Has a framework to create custom metrics for the CMD"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. 이 앱의 가치는 중요 데이터 유효성 검증과 Playbook 기반 리스크 완화 가이드 제공이며, 자동 치유 엔진 자체는 아닙니다."
  },
  {
    "id": 165,
    "title": "A company wants to track regulatory compliance. In the CSDM (Common Service Data Model) framework, ServiceNow provides an artifact type called an Information Object. What is the purpose of an Information Object?",
    "options": [
      {
        "letter": "A",
        "text": "It describes data in general on a group of Configuration Items."
      },
      {
        "letter": "B",
        "text": "It describes the logical data used by Business Applications."
      },
      {
        "letter": "C",
        "text": "It describes data exchanged between an API interface and an Application."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Information Object는 Business Application이 다루는 논리 데이터(예: 규제/민감정보 맥락)를 기술하는 CSDM 아티팩트입니다."
  },
  {
    "id": 166,
    "title": "A CMDB Data Owner wants better insights into the different data sources that populate the CMDB. The Platform Owner installs the Service Graph Connector Central plugin. After installing the plugin, which workspace will have the new \"Service Graph Connector Central\" tab available?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "Service Graph Connector Workspace"
      },
      {
        "letter": "C",
        "text": "Discovery Admin Workspace"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Service Graph Connector Central 플러그인 설치 후 관련 탭은 CMDB Workspace에서 소스 가시성/관리 목적으로 노출됩니다."
  },
  {
    "id": 167,
    "title": "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve CMDB data quality for that region. Currently, the dashboard only shows: Overall score, Scores grouped by CI Class. How can the Configuration Manager get a CMDB health score for regionally relevant CIs?",
    "options": [
      {
        "letter": "A",
        "text": "Customize the CMDB Health Dashboard scheduled jobs to group results by region"
      },
      {
        "letter": "B",
        "text": "On CMDB health settings, activate the option Group scores by region"
      },
      {
        "letter": "C",
        "text": "Create CMDB groups with type health, by region"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 지역별 건강도 점수는 Health 타입 CMDB Group을 지역 단위로 구성해 해당 그룹 스코프로 집계하는 방식이 권장됩니다."
  },
  {
    "id": 168,
    "title": "In the CI Class Manager, where do you configure data sources authorized to update CI Attributes?",
    "options": [
      {
        "letter": "A",
        "text": "Basic Info tab"
      },
      {
        "letter": "B",
        "text": "Identification Rule tab"
      },
      {
        "letter": "C",
        "text": "Reconciliation Rules tab"
      },
      {
        "letter": "D",
        "text": "Pinned Classes"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 속성 업데이트 권한 데이터 소스 설정은 CI Class Manager의 Reconciliation Rules 탭에서 관리합니다."
  },
  {
    "id": 169,
    "title": "Which component specifies which data sources are allowed to update a CI class or set of attributes?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rules"
      },
      {
        "letter": "B",
        "text": "De-duplication Task"
      },
      {
        "letter": "C",
        "text": "IRE Data Source Rule"
      },
      {
        "letter": "D",
        "text": "Reconciliation Rule"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 특정 CI 클래스/속성에 대해 어떤 소스가 업데이트 가능한지 결정하는 핵심 메커니즘은 Reconciliation Rule입니다."
  },
  {
    "id": 170,
    "title": "Which component can be configured to block inserts from a specific data source?",
    "options": [
      {
        "letter": "A",
        "text": "Identification Rules"
      },
      {
        "letter": "B",
        "text": "De-duplication Task"
      },
      {
        "letter": "C",
        "text": "IRE Data Source Rule"
      },
      {
        "letter": "D",
        "text": "Reconciliation Rule"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 특정 소스의 insert 자체를 차단하는 제어는 IRE Data Source Rule 수준에서 설정합니다."
  },
  {
    "id": 171,
    "title": "Based on the rule: Reconciliation Rule=ServiceNow. If ServiceNow attempts an update, what is the outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Reconciliation Rule에 ServiceNow가 허용 소스로 정의되어 있으면 ServiceNow update는 정상 허용됩니다."
  },
  {
    "id": 172,
    "title": "Based on the rule: Reconciliation Rule=ServiceNow, SCCM. If Altiris attempts an update, what is the outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 허용 업데이트 소스가 ServiceNow, SCCM일 때 Altiris 업데이트는 비허용 소스이므로 차단됩니다."
  },
  {
    "id": 173,
    "title": "Based on the rule: Reconciliation Rule=ServiceNow. If Altiris attempts an insert, what is the outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Allow Update"
      },
      {
        "letter": "B",
        "text": "Do Not Allow Update"
      },
      {
        "letter": "C",
        "text": "Do Not Allow Insert"
      },
      {
        "letter": "D",
        "text": "Allow Insert"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 해당 규칙 맥락에서는 Altiris의 insert는 허용되고 update 권한만 제한되는 시나리오로 해석합니다."
  },
  {
    "id": 174,
    "title": "Which of the following is true with respect to the Multisource CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "Activate the Multisource CMDB by setting the property glide.identification_engine.multisource_enabled, to true..."
      },
      {
        "letter": "B",
        "text": "Is active by default on base systems"
      },
      {
        "letter": "C",
        "text": "De-activate the Multisource CMDB by installing the CMDB CI Class Models plugin"
      },
      {
        "letter": "D",
        "text": "Must be activated on base systems automatically"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Multisource CMDB는 관련 시스템 속성(glide.identification_engine.multisource_enabled)을 true로 설정해 활성화하는 방식입니다."
  },
  {
    "id": 175,
    "title": "What represents \"Users, groups, locations\" in the context of the CMDB?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration Management Database (CMDB)"
      },
      {
        "letter": "B",
        "text": "Attributes"
      },
      {
        "letter": "C",
        "text": "Foundational Data"
      },
      {
        "letter": "D",
        "text": "Class"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 사용자/그룹/위치는 CMDB 자체 객체라기보다 여러 프로세스가 공통 참조하는 Foundational Data에 해당합니다."
  },
  {
    "id": 176,
    "title": "What represents \"Information that further describes a CI such as a name, serial number, or operating system\"?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration Management Database (CMDB)"
      },
      {
        "letter": "B",
        "text": "Attributes"
      },
      {
        "letter": "C",
        "text": "Foundational Data"
      },
      {
        "letter": "D",
        "text": "Class"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 이름, 시리얼, OS처럼 CI를 설명하는 개별 데이터 항목은 Attributes입니다."
  },
  {
    "id": 177,
    "title": "What represents \"A table that contains a specific type or group of CIs that share common attributes\"?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration Management Database (CMDB)"
      },
      {
        "letter": "B",
        "text": "Attributes"
      },
      {
        "letter": "C",
        "text": "Foundational Data"
      },
      {
        "letter": "D",
        "text": "Class"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 공통 속성을 공유하는 CI 유형 집합을 담는 테이블 개념은 Class입니다."
  },
  {
    "id": 178,
    "title": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Enterprise Architect"
      },
      {
        "letter": "B",
        "text": "Application Service Owners"
      },
      {
        "letter": "C",
        "text": "Technology Service Owners"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 인프라 업그레이드 요청의 요구사항 정의/요청 시작 역할은 Technology Service Owner에 해당합니다."
  },
  {
    "id": 179,
    "title": "CMDB class owners are receiving tasks under the My Work tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "De-duplication templates"
      },
      {
        "letter": "C",
        "text": "CMDB Health Dashboard"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CMDB Workspace의 My Work에 올라오는 운영/정비 태스크는 CMDB Data Manager 정책 실행 결과로 생성됩니다."
  },
  {
    "id": 180,
    "title": "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundation Dashboard. Which benefits support the decision to continually monitor the results on this dashboard? (Choose all that apply)",
    "options": [
      {
        "letter": "A",
        "text": "Provides metrics on active CIs updated in the last 90 days"
      },
      {
        "letter": "B",
        "text": "Provides metrics for CIs processed by the IRE"
      },
      {
        "letter": "C",
        "text": "Reports on all orphan CIs in the CMDB"
      },
      {
        "letter": "D",
        "text": "Provides a list of all CIs that failed health audits"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "정답: A, B, C. Data Foundations Dashboard는 최근 활성 CI 갱신 지표, IRE 처리 지표, orphan 관련 지표 등 운영 가시성을 제공해 지속 모니터링 가치가 큽니다."
  },
  {
    "id": 181,
    "title": "A company wants to track regulatory compliance in the CSDM framework. ServiceNow provides an artifact type called an Information Object. What is the purpose of an Information Object?",
    "options": [
      {
        "letter": "A",
        "text": "It describes data in general on a group of Configuration Items."
      },
      {
        "letter": "B",
        "text": "It describes the logical data used by Business Applications."
      },
      {
        "letter": "C",
        "text": "It describes data exchanged between an API interface and an Application."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Information Object는 Business Application이 어떤 논리 데이터를 다루는지 정의해 규제/리스크 맥락 분석에 쓰입니다."
  },
  {
    "id": 182,
    "title": "A CMDB Data Owner wants better insights into the different data sources that populate the CMDB. After installing the Service Graph Connector Central plugin, which workspace will have the new \"Service Graph Connector Central\" tab available?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "Service Graph Connector Workspace"
      },
      {
        "letter": "C",
        "text": "Discovery Admin Workspace"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Service Graph Connector Central 탭은 CMDB Workspace에 추가되어 소스별 CMDB 유입 가시성을 제공합니다."
  },
  {
    "id": 183,
    "title": "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve CMDB data quality for that region. How can the Configuration Manager get a CMDB health score for regionally relevant CIs?",
    "options": [
      {
        "letter": "A",
        "text": "Customize the CMDB Health Dashboard scheduled jobs to group results by region"
      },
      {
        "letter": "B",
        "text": "On CMDB health settings, activate the option Group scores by region"
      },
      {
        "letter": "C",
        "text": "Create CMDB groups with type health, by region"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. 지역별 건강도 산출은 Health 타입 CMDB Group을 지역 단위로 만들어 해당 그룹 기준으로 점수를 보는 방식이 맞습니다."
  },
  {
    "id": 184,
    "title": "The CMDB Administrator group wants to filter which CI classes appear on the CMDB Health Dashboard. Which feature can the group use to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Reconciliation Rules"
      },
      {
        "letter": "B",
        "text": "Identification Rules"
      },
      {
        "letter": "C",
        "text": "Health Inclusion Rules"
      },
      {
        "letter": "D",
        "text": "Data Refresh Rules"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB Health Dashboard에 표시할 클래스 범위 제어는 Health Inclusion Rules로 설정합니다."
  },
  {
    "id": 185,
    "title": "A CMDB Configuration Manager plans to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these policies?",
    "options": [
      {
        "letter": "A",
        "text": "Missing - Stolen"
      },
      {
        "letter": "B",
        "text": "End of Life - Retired"
      },
      {
        "letter": "C",
        "text": "In any lifecycle state"
      },
      {
        "letter": "D",
        "text": "Inventory - Available"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Data Manager의 삭제/아카이브 정책은 일반적으로 End of Life 또는 Retired 상태 CI를 대상으로 적용합니다."
  },
  {
    "id": 186,
    "title": "A Configuration Manager is reviewing legacy status values and their equivalent CSDM lifecycle stage and lifecycle stage status values. Where can these mappings be reviewed?",
    "options": [
      {
        "letter": "A",
        "text": "Life cycle choice list"
      },
      {
        "letter": "B",
        "text": "Life cycle mappings"
      },
      {
        "letter": "C",
        "text": "Life cycle properties"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 레거시 상태값과 CSDM lifecycle stage/stage status의 대응은 Life cycle mappings에서 검토합니다."
  },
  {
    "id": 187,
    "title": "A CMDB Administrator notices that many Configuration Items (CIs) do not have a Support Group populated. The administrator wants the Support Group to be automatically populated and maintained on the CI record. Which option should be used to achieve this?",
    "options": [
      {
        "letter": "A",
        "text": "Technology Management Service Offering (Technical Service Offering)"
      },
      {
        "letter": "B",
        "text": "Dynamic CI Group"
      },
      {
        "letter": "C",
        "text": "Technology Management Service (Technical Service)"
      },
      {
        "letter": "D",
        "text": "CI Class Manager"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CI Support Group 자동 유지에는 Technology Management Service Offering 연결을 활용해 운영 그룹 정보를 동기화하는 방식이 권장됩니다."
  },
  {
    "id": 188,
    "title": "The Change Management team wants to implement a change across multiple Configuration Items (CIs) simultaneously. They plan to use a Dynamic CI Group to target those CIs. Which field on the Change Request form must be populated with the Dynamic CI Group?",
    "options": [
      {
        "letter": "A",
        "text": "Configuration Item"
      },
      {
        "letter": "B",
        "text": "Business Service"
      },
      {
        "letter": "C",
        "text": "Service Offering"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Dynamic CI Group 기반 다중 CI 변경은 Change Request의 Configuration Item 필드에 그룹을 지정해 처리합니다."
  },
  {
    "id": 189,
    "title": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are the benefits of using this application? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Checks that important data is valid and properly configured"
      },
      {
        "letter": "B",
        "text": "Uses automation to remediate potential risks"
      },
      {
        "letter": "C",
        "text": "Provides playbooks to assist in the remediation of potential risks"
      },
      {
        "letter": "D",
        "text": "Has a framework to create custom metrics for the CMD"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. Data Foundations Dashboard는 중요 데이터 유효성 점검과 개선 Playbook 제공이 핵심이며 자동 치유 엔진은 아닙니다."
  },
  {
    "id": 190,
    "title": "A CMDB Administrator wants to align their CMDB with CSDM life cycle best practices by using Life Cycle field mappings. After clicking Enable Life Cycle Sync, what should be the next step?",
    "options": [
      {
        "letter": "A",
        "text": "Fix the incorrect values in the Life Cycle Stage to match legacy values"
      },
      {
        "letter": "B",
        "text": "Activate the CSDM Life Cycle field mappings"
      },
      {
        "letter": "C",
        "text": "Resolve any incomplete field mappings identified in the Discrepancy Report"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Life Cycle Sync 이후에는 먼저 Discrepancy Report의 미완성 매핑을 해결해 정합성을 확보해야 합니다."
  },
  {
    "id": 191,
    "title": "A CSDM Data Manager wants to view metrics that measure how well Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) align with CSDM best practices. Which tab in the CSDM Data Foundations Dashboard provides these metrics?",
    "options": [
      {
        "letter": "A",
        "text": "Crawl"
      },
      {
        "letter": "B",
        "text": "Walk"
      },
      {
        "letter": "C",
        "text": "Fly"
      },
      {
        "letter": "D",
        "text": "Run"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Technical Service/Offering 정렬 지표는 CSDM Data Foundations Dashboard의 Walk 탭에서 확인합니다."
  },
  {
    "id": 192,
    "title": "A CMDB Administrator wants to use the Staleness metric from the CMDB Health Dashboard (Correctness Scorecard). Which field is used to calculate the duration of staleness?",
    "options": [
      {
        "letter": "A",
        "text": "Last modified on (last_modified)"
      },
      {
        "letter": "B",
        "text": "Created (sys_created_on)"
      },
      {
        "letter": "C",
        "text": "Updated (sys_updated_on)"
      },
      {
        "letter": "D",
        "text": "First discovered (first_discovered)"
      },
      {
        "letter": "E",
        "text": "Most recent discovery (last_discovery)"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. Staleness는 마지막 업데이트 시점 기준으로 계산되므로 sys_updated_on 필드가 기준값입니다."
  },
  {
    "id": 193,
    "title": "What are the characteristics or functions of ServiceNow IntegrationHub ETL? (Choose two)",
    "options": [
      {
        "letter": "A",
        "text": "Integrates third-party data into the CMDB or into non-CMDB tables"
      },
      {
        "letter": "B",
        "text": "Performs discovery data collection and updates the CMDB"
      },
      {
        "letter": "C",
        "text": "Uses the IRE to process and integrate data"
      },
      {
        "letter": "D",
        "text": "Imports Microsoft SCCM / Intune data into the CMDB"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "정답: A, C. IntegrationHub ETL은 외부 데이터 통합에 사용되며 CMDB 적재 시 IRE 식별/조정 흐름을 적용할 수 있습니다."
  },
  {
    "id": 194,
    "title": "A retail organization wants to ensure that incidents affecting customer-facing services are resolved quickly to avoid revenue loss. Which CSDM attribute should be used to prioritize these services?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment Group on the CI record"
      },
      {
        "letter": "B",
        "text": "Affected CIs in the Incident record"
      },
      {
        "letter": "C",
        "text": "Service Classification in the Technical Service"
      },
      {
        "letter": "D",
        "text": "Business Criticality in the Service Offering"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 고객 대면 서비스 우선순위는 운영팀 배정정보보다 Service Offering의 Business Criticality로 정하는 것이 CSDM 취지에 맞습니다."
  },
  {
    "id": 195,
    "title": "Where can a ServiceNow administrator perform Natural Language Queries (NLQ) when working with CMDB data?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Data Manager"
      },
      {
        "letter": "B",
        "text": "CI Class Manager"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "CMDB Health Dashboard"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "정답: C. CMDB 자연어 질의(NLQ)는 CMDB Workspace에서 수행하도록 제공됩니다."
  },
  {
    "id": 196,
    "title": "The following identification rule for a CI class has been defined. CI one: name matches existing CI. CI two: IP address matches existing CI. What outcome is correct?",
    "options": [
      {
        "letter": "A",
        "text": "CI one will update the existing CI and CI two will be inserted as a new CI"
      },
      {
        "letter": "B",
        "text": "CI one will be inserted as a new CI and CI two will update the existing CI"
      },
      {
        "letter": "C",
        "text": "Both CI one and CI two will update existing CIs"
      },
      {
        "letter": "D",
        "text": "Both CI one and CI two will be inserted as new CIs"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. 식별 규칙 조건에서 name 매치는 기존 CI 업데이트를 유도하고, IP 기준은 조건 불충분으로 신규 삽입 시나리오가 됩니다."
  },
  {
    "id": 197,
    "title": "From which of the following can the Managed by group be configured and synchronized to the underlying group or class of Configuration items (CIs)? [Choose 2 answers]",
    "options": [
      {
        "letter": "A",
        "text": "CI Class Manager"
      },
      {
        "letter": "B",
        "text": "Technology Management Services"
      },
      {
        "letter": "C",
        "text": "Business Service Offerings"
      },
      {
        "letter": "D",
        "text": "Business Services"
      },
      {
        "letter": "E",
        "text": "Technology Management Offerings"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "정답: A, E. Managed by Group은 CI Class Manager와 Technology Management Offering에서 설정/동기화해 클래스 및 구성원 CI 운영 소유를 정렬할 수 있습니다."
  },
  {
    "id": 198,
    "title": "Which CSDM domain is an enterprise architect involved in?",
    "options": [
      {
        "letter": "A",
        "text": "Ideation & Strategy"
      },
      {
        "letter": "B",
        "text": "Design & Planning"
      },
      {
        "letter": "C",
        "text": "Service Delivery"
      },
      {
        "letter": "D",
        "text": "Service Consumption"
      },
      {
        "letter": "E",
        "text": "Build & Integration"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Enterprise Architect는 비즈니스/애플리케이션 구조 설계 관점을 담당하므로 CSDM의 Design & Planning 도메인 참여가 핵심입니다."
  },
  {
    "id": 199,
    "title": "In ServiceNow, which of the following are potential consequences of not aligning with the Common Service Data Model (CSDM)? [Choose 2 answers]",
    "options": [
      {
        "letter": "A",
        "text": "Inability to install ServiceNow store applications"
      },
      {
        "letter": "B",
        "text": "Increased technical debt"
      },
      {
        "letter": "C",
        "text": "Potential loss of data"
      },
      {
        "letter": "D",
        "text": "Incompatibility with future ServiceNow products"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "정답: B, D. CSDM 비정렬 상태는 커스텀 난립으로 기술부채를 키우고, 향후 제품/앱 정합성 저하로 확장성과 업그레이드 호환성 위험을 높입니다."
  },
  {
    "id": 200,
    "title": "Which CSDM domain represents deployed service instances and their related, discoverable, components?",
    "options": [
      {
        "letter": "A",
        "text": "Service Consumption"
      },
      {
        "letter": "B",
        "text": "Design & Planning"
      },
      {
        "letter": "C",
        "text": "Ideation & Strategy"
      },
      {
        "letter": "D",
        "text": "Service Delivery (Manage Technical Services)"
      },
      {
        "letter": "E",
        "text": "Build & Integration"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "정답: D. 배포된 서비스 인스턴스와 탐지 가능한 기술 컴포넌트 관계는 Service Delivery(Manage Technical Services) 도메인에서 관리합니다."
  },
  {
    "id": 201,
    "title": "Which CSDM domain is Customer Service Management part of?",
    "options": [
      {
        "letter": "A",
        "text": "Service Delivery"
      },
      {
        "letter": "B",
        "text": "Service Consumption"
      },
      {
        "letter": "C",
        "text": "Build & Integration"
      },
      {
        "letter": "D",
        "text": "Ideation & Strategy"
      },
      {
        "letter": "E",
        "text": "Design & Planning"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Customer Service Management는 소비자/고객에게 제공되는 서비스 관점이므로 CSDM Service Consumption 도메인에 속합니다."
  },
  {
    "id": 202,
    "title": "Which is a service instance type that is a logical representation of a deployed application stack and its dependencies?",
    "options": [
      {
        "letter": "A",
        "text": "Business Application [cmdb_ci_business_app]"
      },
      {
        "letter": "B",
        "text": "Application Service [cmdb_ci_service_auto]"
      },
      {
        "letter": "C",
        "text": "Application [cmdb_ci_appl]"
      },
      {
        "letter": "D",
        "text": "Technology Management Service [cmdb_ci_service_technical]"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. Application Service는 배포된 애플리케이션 스택과 그 의존성을 논리적으로 표현하는 대표 서비스 인스턴스 타입입니다."
  },
  {
    "id": 203,
    "title": "Which of the following provides a unified workspace that allows owners to holistically view and collectively manage their portfolios, services, offerings, and products through the full lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Service Builder"
      },
      {
        "letter": "B",
        "text": "Digital Portfolio Management"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "CI Class Manager"
      },
      {
        "letter": "E",
        "text": "Service Operations Workspace"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "정답: B. 포트폴리오/서비스/오퍼링/제품을 라이프사이클 전반에서 통합 관리하는 워크스페이스 성격은 Digital Portfolio Management에 해당합니다."
  },
  {
    "id": 204,
    "title": "Business Services, Technology Management Services, Business Service Offerings, and Technology Management Offerings can be created using forms and lists or in a more streamlined manner using which of the following?",
    "options": [
      {
        "letter": "A",
        "text": "CMDB Workspace"
      },
      {
        "letter": "B",
        "text": "Service Mapping"
      },
      {
        "letter": "C",
        "text": "Application Service Wizard"
      },
      {
        "letter": "D",
        "text": "CI Class Manager"
      },
      {
        "letter": "E",
        "text": "Service Builder"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: E. Business/Technology Service와 Offerings를 폼/리스트보다 간결하게 생성·연결하는 전용 도구는 Service Builder입니다."
  },
  {
    "id": 205,
    "title": "Which feature can be used to relate an application service/service instance with a technology management offering, business service offering, and/or a business application?",
    "options": [
      {
        "letter": "A",
        "text": "Application Service Wizard"
      },
      {
        "letter": "B",
        "text": "Service Builder"
      },
      {
        "letter": "C",
        "text": "CMDB Workspace"
      },
      {
        "letter": "D",
        "text": "IntegrationHub ETL"
      },
      {
        "letter": "E",
        "text": "CI Class Manager"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. Application Service Wizard는 서비스 인스턴스를 Business Application, Tech Offering, Business Offering과 관계 맺도록 돕는 구성 워크플로입니다."
  },
  {
    "id": 206,
    "title": "Aligning to the Common Service Data Model (CSDM) allows for auto population of the assignment group field on new incident and change request records. Which of the following are true when creating a new Incident or Change Request in ServiceNow? [Choose 2 answers]",
    "options": [
      {
        "letter": "A",
        "text": "Managed by group on the selected CI auto-populates the assignment group field on the incident form."
      },
      {
        "letter": "B",
        "text": "Approval group on the selected CI auto-populates the assignment group field on the change request form."
      },
      {
        "letter": "C",
        "text": "Change group on the selected CI auto-populates the assignment group field on the change request form."
      },
      {
        "letter": "D",
        "text": "Support group on the selected CI auto-populates the assignment group field on the incident form."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "정답: C, D. CSDM 정렬 시 Change는 CI의 Change group, Incident는 CI의 Support group을 기반으로 Assignment Group 자동 채움이 가능합니다."
  },
  {
    "id": 207,
    "title": "Which of the following are operational Configuration Items (CIs) that can be selected and populated in the Configuration item field on an Incident or Change Request record? [Choose 2 answers]",
    "options": [
      {
        "letter": "A",
        "text": "Dynamic CI Group"
      },
      {
        "letter": "B",
        "text": "Application Service"
      },
      {
        "letter": "C",
        "text": "Installed Software"
      },
      {
        "letter": "D",
        "text": "Business Application"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "정답: A, B. Incident/Change의 Configuration Item 필드에는 운영 대상 CI가 들어가며 Dynamic CI Group과 Application Service가 대표적입니다. Business Application은 설계 관점 객체라 직접 운영 CI로 쓰지 않습니다."
  },
  {
    "id": 208,
    "title": "What are the 3 pillars to focus on to achieve a successful data foundation? [Choose 3 answers]",
    "options": [
      {
        "letter": "A",
        "text": "Correctness"
      },
      {
        "letter": "B",
        "text": "Insight"
      },
      {
        "letter": "C",
        "text": "Ingest"
      },
      {
        "letter": "D",
        "text": "Govern"
      },
      {
        "letter": "E",
        "text": "Compliance"
      },
      {
        "letter": "F",
        "text": "Completeness"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "정답: B, C, D. 성공적인 데이터 파운데이션의 3축은 Ingest(유입), Govern(통제), Insight(가시화/개선)입니다."
  },
  {
    "id": 209,
    "title": "Which ServiceNow feature is a built-in visualization and reporting tool that helps organizations assess and improve their implementation of the Common Service Data Model (CSDM) based on ServiceNow suggested good practices?",
    "options": [
      {
        "letter": "A",
        "text": "Application Service Wizard"
      },
      {
        "letter": "B",
        "text": "CI Class Manager"
      },
      {
        "letter": "C",
        "text": "CMDB Health Dashboard"
      },
      {
        "letter": "D",
        "text": "Service Builder"
      },
      {
        "letter": "E",
        "text": "CSDM Data Foundations Dashboard"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": "정답: E. CSDM 구현 정렬 수준을 모범사례 기준으로 시각화/리포팅해 개선을 유도하는 내장 도구는 CSDM Data Foundations Dashboard입니다."
  },
  {
    "id": 210,
    "title": "Which field(s) does CSDM recommend to use to manage the life cycle of a Configuration item (CI)?",
    "options": [
      {
        "letter": "A",
        "text": "Life cycle stage and stage status"
      },
      {
        "letter": "B",
        "text": "Hardware status"
      },
      {
        "letter": "C",
        "text": "Install status"
      },
      {
        "letter": "D",
        "text": "Operational status"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "정답: A. CSDM은 CI 수명주기 관리를 위해 레거시 단일 상태필드보다 Life cycle stage와 stage status 조합 사용을 권장합니다."
  }
];
