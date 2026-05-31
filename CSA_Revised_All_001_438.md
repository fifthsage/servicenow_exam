# ServiceNow CSA Exam Questions (Revised, Full)

Range: Q1-Q438

### Q1. What is the function of user impersonation?

- A. Testing and visibility
- B. Activate verbose logging
- C. View custom perspectives
- D. Unlock Application master list

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is the function of user impersonation?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q2. Which group of permissions is used to control Application and Module access?

- A. Access Control Rules
- B. UI Policies
- C. Roles
- D. Assignment Rules

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which group of permissions is used to control Application and Module access?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q3. Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)

- A. onSubmit
- B. onUpdate
- C. onCellEdit
- D. onLoad
- E. onEdit
- F. onChange
- G. onSave

**Answer:** A,C,D,F

*해설:* 정답은 **A,C,D,F**입니다. 이 문항은 'Which of the following are a type of client scripts supported in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q4. Which one of the following modules can be used to view field settings for a table?

- A. Tables & Columns
- B. Access Control
- C. Columns and Fields
- D. Tables and Fields

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following modules can be used to view field settings for a table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q5. What are the 5 provided Roles by ServiceNow?

- A. System Administrator: The admin role provides access to all platform features, applications, functions
- C. Fulfiller: Users with the ITIL role may fulfill ITIL activities associated with the ITIL workflow, including
- E. Requester: Also known as Employee Self Service (ESS) users, these users have no roles but can submit

**Answer:** A,C,E

*해설:* 정답은 **A,C,E**입니다. 이 문항은 'What are the 5 provided Roles by ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q6. A Service Catalog may include which of the following components?

- A. Order Guides, Exchange Rates, Calendars
- B. Order Guides, Catalog Items, and Interceptors
- C. Catalog Items, Asset Contracts, Task Surveys
- D. Record Producers, Order Guides, and Catalog Items

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A Service Catalog may include which of the following components?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q7. UI Policy can make fields read-only, mandatory, or hidden

- A. True
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'UI Policy can make fields read-only, mandatory, or hidden.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q8. ServiceNow is a single-instance, multiple tenant architecture?

- A. True
- B. False

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'ServiceNow is a single-instance, multiple tenant architecture?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q9. Which statement is true about business rules?

- A. A business rule must run before a database action occurs
- B. A business rule can be a piece of Javascript
- C. A business rule must not run before a database action occurs
- D. A business rule monitors fields on a form

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which statement is true about business rules?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q10. What are the two aspects to LDAP Integration?

- A. Data Population
- B. Data formatting
- C. Authorization
- D. Authentication

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문항은 'What are the two aspects to LDAP Integration?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 인증(Authentication)은 본인 확인, 인가(Authorization)는 권한 결정입니다. LDAP/SSO는 대표적인 엔터프라이즈 인증 통합 방식입니다.

---

### Q11. What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles. A. User conditions

- B. User info
- C. User Criteria
- D. User permissions

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles. A. User conditions' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q12. Reports can be created from which different places in the platform? (Choose two.)

- A. List column heading
- B. Metrics module
- C. Statistics module
- D. View / Run module

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문항은 'Reports can be created from which different places in the platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q13. Which of the following is used to initiate a flow?

- A. A Trigger
- B. Core Action
- C. A spoke
- D. An Event

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which of the following is used to initiate a flow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q14. A group is stored in which table?

- A. Group[user group]
- B. Group[sys_user]
- C. Group[sys_user_group]
- D. Group[sys_user_group_profile]

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'A group is stored in which table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q15. Which technique is used to get information from a series of referenced fields from different tables?

- A. Table-Walking
- B. Sys_ID Pulling
- C. Dot-Walking
- D. Record-Hopping

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which technique is used to get information from a series of referenced fields from different tables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q16. Configuration will not affect what others see on their forms. A. True

- B. False

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Configuration will not affect what others see on their forms. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q17. What refers to an application or system that accesses a remote service or another computer system, known as a server?

- A. Server
- B. Client
- C. Script
- D. Policies

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What refers to an application or system that accesses a remote service or another computer system, known as a server?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q18. Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)

- A. Banner Image
- B. Record Number Format
- C. Browser Tab Title
- D. System Date Format
- E. Form Header Size

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. 이 문항은 'Which of the following can be customized through the Basic Configuration UI 16 module?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q19. Which tool is used to have conversations with logged-in users in real-time?

- A. Connect Chat
- B. Now Messenger
- C. User Presence
- D. Comments

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which tool is used to have conversations with logged-in users in real-time?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q20. What is the master table that contains a record for each table in the database?

- A. [sys_master_db]
- B. [sys_db_object]
- C. [sys_master_object]
- D. [sys_object_db]

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is the master table that contains a record for each table in the database?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q21. Access Control rules may be defined with which of the following permission requirements? (Choose three.)

- A. Roles
- B. Conditional Expressions
- C. Assignment Rules
- D. Scripts
- E. User Criteria
- F. Groups

**Answer:** A,B,D

*해설:* 정답은 **A,B,D**입니다. 이 문항은 'Access Control rules may be defined with which of the following permission requirements?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q22. UI Action can prompt that an Incident has been successfully submitted. A. True

- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'UI Action can prompt that an Incident has been successfully submitted. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q23. Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?

- A. report
- B. workflow
- C. event
- D. task

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q24. Where can Admins check which release is running on an ServiceNow instance?

- A. Memory Stats module
- B. Stats module
- C. System.upgraded table
- D. Transactions log

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Where can Admins check which release is running on an ServiceNow instance?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q25. What is the purpose of a Related List?

- A. To create a one-to-many relationship
- B. To dot-walk to a core table
- C. To present related fields
- D. To present related records

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is the purpose of a Related List?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q26. Which are valid Service Now User Authentication Methods? (Choose three.)

- A. XML feed
- B. Local database
- C. LDAP
- D. SSO
- E. FTP authentication

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. 이 문항은 'Which are valid Service Now User Authentication Methods?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 인증(Authentication)은 본인 확인, 인가(Authorization)는 권한 결정입니다. LDAP/SSO는 대표적인 엔터프라이즈 인증 통합 방식입니다.

---

### Q27. Data Policy can enforce mandatory data on import. A. True

- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Data Policy can enforce mandatory data on import. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q28. What are the three components of a filter condition?

- A. Table
- B. Value
- C. Field
- D. Operator

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. 이 문항은 'What are the three components of a filter condition?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q29. Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments. A. True

- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q30. What is the difference between UI Policy and UI Action?

- A. UI Action can make fields read-only, mandatory, or hidden. while UI Policy can make a save button

**Answer:** UI Policy는 필드 상태(읽기 전용/필수/숨김)를 제어하고, UI Action은 버튼/링크/컨텍스트 메뉴 동작을 정의합니다.

*해설:* 정답은 **UI Policy는 필드 상태(읽기 전용/필수/숨김)를 제어하고, UI Action은 버튼/링크/컨텍스트 메뉴 동작을 정의합니다.**입니다. 이 문항은 'What is the difference between UI Policy and UI Action?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q31. The baseline Service Catalog homepage contains links to which of the following components?

- A. Record Producers, Order Guides, and Catalog Items
- B. Order Guides, Item Variables, and Workflows
- C. Order Guides, Catalog Items, and Workflows
- D. Record Producers, Order Guides, and Item Variables

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'The baseline Service Catalog homepage contains links to which of the following components?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q32. What is a Dictionary Override?

- A. A Dictionary Override is an incoming customer update in an Update Set which applies to the same
- B. A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT
- C. A Dictionary Override is a task within a workflow that requests an action before the workflow can
- D. A Dictionary Override sets field properties in extended tables

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is a Dictionary Override?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q33. Which type of tables may be extended by other tables, but do not extend another table?

- A. Base Tables
- B. Core Tables
- C. Extended Tables
- D. Custom Tables

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which type of tables may be extended by other tables, but do not extend another table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q34. When working on a form, what is the difference between Insert and Update operations?

- A. Insert creates a new record and Update saves changes, both remain on the form
- B. Insert creates a new record and Update saves changes, both exit the form
- C. Insert saves changes and exits the form, Update saves changes and remains on the form
- D. Insert saves changes and remains on the form, Update saves changes and exits the form

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'When working on a form, what is the difference between Insert and Update operations?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q35. What displays a set of records from a table?

- A. View
- B. Dashboard
- C. Panel
- D. List

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What displays a set of records from a table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q36. When using the Load Data and Transform Map process, what is the Mapping Assist used for?

- A. Mapping fields using the Import Log
- B. Mapping fields using Transform History
- C. Mapping fields using an SLA
- D. Mapping fields using a Field Map

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When using the Load Data and Transform Map process, what is the Mapping Assist used for?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q37. Which one of the following statements describes the purpose of an Service Catalog workflow?

- A. A Service Catalog workflow generates three basic components: item variable types, tasks, and
- B. Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment
- C. A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to
- D. A Service Catalog workflow generates three basic components: item variable types, tasks, and

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which one of the following statements describes the purpose of an Service Catalog workflow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q38. What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?

- A. RITM (Number)>REQ (Number)>PROCUREMENT (Number)
- B. REQ (Number)>RITM (Number)>PROCUREMENT (Number)
- C. REQ (Number)>RITM (Number)>TASK (Number)
- D. FULFILLMENT (Number)>RITM (Number)>TASK (Number)

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q39. What is a characteristic of importing data into ServiceNow?

- A. An existing Transform Map can be used one time on the same import set
- B. Coalesce fields are used only after running Transform
- C. Any user can manage and set up import sets
- D. An existing Transform Map can be used multiple times on the same import set

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is a characteristic of importing data into ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q40. What is (are) best practice(s) regarding users/groups/roles? Choose 2 answers

- A. You should never assign roles to groups. B. You should assign roles to users.
- C. You should assign roles to groups
- D. You should add users to groups

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 이 문항은 'What is (are) best practice(s) regarding users/groups/roles?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q41. What is a formatter? Select one of the following. A. A formatter allows you to configure applications on your instance

- B. A formatter is a form element used to display information that is not a field in the record
- C. A formatter allows you to populate fields automatically
- D. A formatter is a set of conditions applied to a table to help find and work with data

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is a formatter? Select one of the following. A. A formatter allows you to configure applications on your instance' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q42. Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)

- A. Service Processes
- B. User Permissions
- C. Tables and Fields
- D. A Database
- E. The Dependency View

**Answer:** A,C,D,E

*해설:* 정답은 **A,C,D,E**입니다. 이 문항은 'Which of the following concepts are associated with the ServiceNow CMDB?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q43. What is the Import Set Table?

- A. A table where data will be placed, post-transformation
- B. A table that determines relationships
- C. A staging area for imported records
- D. A repository for Update Set information

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the Import Set Table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q44. The display sequence is controlled in a Service Catalog Item using which of the following?

- A. The Default Value field in the Catalog Item form
- B. The Sequence field in the Catalog Item form
- C. The Order field in the Variable form
- D. The Choice field in the Variable form

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'The display sequence is controlled in a Service Catalog Item using which of the following?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q45. A User is stored in which table?

- A. User [sys_user]
- B. User [ sys_user_group]
- C. User [ syst_user_profile]
- D. User [user_profile]

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A User is stored in which table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q46. Which application is used to change the number format per table?

- A. Number Maintenance
- B. System Maintenance
- C. Table Maintenance
- D. Record Maintenance

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which application is used to change the number format per table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q47. What is a Record Producer?

- A. A Record Producer is a type of Catalog Item that is used for Requests, not Services
- B. A Record Producer creates user records
- C. A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests
- D. A Record Producer is a type of a Catalog Item that allows users to create task-based records from the

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is a Record Producer?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q48. Which of the following is true of Service Catalog Items in relation to the Service Catalog?

- A. They run behind the scenes. B. They are the building blocks. C. They are optional. D. They provide options. Answer: B

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which of the following is true of Service Catalog Items in relation to the Service Catalog?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q49. What is a way that you can mark a knowledge article for review?

- A. Flag article
- B. Review
- C. Bookmark
- D. On Hold

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is a way that you can mark a knowledge article for review?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q50. From the User menu, which actions can a user select? (Choose three.)

- A. Send Notifications
- B. Log Out ServiceNow
- C. Elevate Roles
- D. Impersonate Users
- E. Order from Service Catalog
- F. Approve Records

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. 이 문항은 'From the User menu, which actions can a user select?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q51. A REQ number in the Service Catalog represents…

- A. the order number. B. the stage. C. the task to complete. D. the individual item in the order. Answer: A

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A REQ number in the Service Catalog represents…' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q52. Which one of these applications is available to all users?

- A. Change
- B. Incident
- C. Facilities
- D. Self-Service

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which one of these applications is available to all users?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q53. Which of the following allows a user to edit field values in a list without opening the form?

- A. Data Editor
- B. Edit Menu
- C. List Editor
- D. Form Designer

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which of the following allows a user to edit field values in a list without opening the form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q54. Knowledge Base Search results can be sorted by which of the following? (Choose three.)

- A. Most recent update
- B. Popularity
- C. Relevancy
- D. Manager assignment
- E. Number of views

**Answer:** A,C,E

*해설:* 정답은 **A,C,E**입니다. 이 문항은 'Knowledge Base Search results can be sorted by which of the following?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q55. What is the purpose of flagging an article in a knowledge base?

- A. To mark an article to read later. B. Allow a user to submit feedback about an article
- C. Reporting an error

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is the purpose of flagging an article in a knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q56. Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?

- A. The CMDB contains data about tangible and intangible business assets
- B. The CMDB contains the Business Rules that direct the intangible, configurable assets used by a
- C. The CMDB archives all Service Management PaaS equipment metadata and usage statistics
- D. The CMDB contains ITIL process data pertaining to configuration items

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q57. What are the four knowledge workflows available in the ServiceNow base instance?

- A. Approval publish: Request approval from a manager of the knowledge base before moving the article it
- B. Instant Publish: Immediately publishes a draft article without requiring an approval
- C. Instant Retire: Immediately retires a published article without requiring an approval
- D. Retire Knowledge: Moves a knowledge article to the retired state. Answer: A

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What are the four knowledge workflows available in the ServiceNow base instance?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q58. Which are states that you can make a field on a form using UI Policy?

- A. read-only
- B. write-only
- C. Necessary
- D. Mandatory
- E. Empty
- F. Hidden

**Answer:** A,D,F

*해설:* 정답은 **A,D,F**입니다. 이 문항은 'Which are states that you can make a field on a form using UI Policy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q59. As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?

- A. A metric is a report gauge used on homepages to display real-time data
- B. A metric is a time measurement used to report the effectiveness of workflows and SLAs
- C. A metric is used to measure and evaluate the effectiveness of IT service management processes
- D. A metric is a comparative measurement used to report the effectiveness of workflows and SLAs. Answer: C

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q60. Which one of the following statements is a recommendation from ServiceNow about Update Sets?

- A. Avoid using the Default Update set as an Update Set for moving customizations from instance to
- B. Before moving customizations from instance to instance with Update Sets, ensure that both instances
- C. Use the Baseline Update Set to store the contents of items after they are changed the first time
- D. Once an Update Set is closed as “Complete”, change it back to “In Progress” until it is applied to another

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following statements is a recommendation from ServiceNow about Update Sets?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Update Set은 구성 변경사항을 인스턴스 간 이동하는 단위입니다. 기본적으로 데이터 레코드는 포함되지 않으므로 이관 전략을 분리해야 합니다.

---

### Q61. Which configuration allows you to use a script to coalesce data in Import Sets?

- A. Multiple-field coalesce
- B. No coalesce
- C. Conditional coalesce
- D. Single-field coalesce

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which configuration allows you to use a script to coalesce data in Import Sets?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q62. What module in the Service Catalog application does an Administrator access to begin creating a new item?

- A. Maintain Categories
- B. Maintain Items
- C. Content Items
- D. Items

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What module in the Service Catalog application does an Administrator access to begin creating a new item?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q63. What is generated from the Service Catalog once a user places an order for an item or service?

- A. A change request
- B. An Order Guide
- C. A request
- D. An SLA

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is generated from the Service Catalog once a user places an order for an item or service?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q64. Which one statement correctly describes Access Control rule evaluation?

- A. Rules are evaluated using roles. The role with the most permissions evaluates the rules
- B. If more than one rule applies to a row, the older rule is evaluated first
- C. If a row level rule and a field level rule exist, both rules must be true before an operation is allowed
- D. Rules are evaluated from the general to the specific, so a table rule must be active to continue

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which one statement correctly describes Access Control rule evaluation?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q65. Which one of the following statements applies to a set of fields when they are coalesced during an import?

- A. If a match is found using the coalesce fields, the existing record is updated with the information being
- B. If a match is not found using the coalesce fields, the system does not create a Transform Map
- C. If a match is found using the coalesce fields, the system creates a new record
- D. If a match is not found using the coalesce fields, the existing record is updated with the information being

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following statements applies to a set of fields when they are coalesced during an import?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q66. How are Workflows moved between instances?

- A. Workflows are moved using Update Sets
- B. Workflows are moved using Transform Maps
- C. Workflows are moved using Application Sets
- D. Workflows cannot be moved between instances

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'How are Workflows moved between instances?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q67. Tables are made up of which of the following?

- A. records
- B. lists
- C. forms. D. fields

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문항은 'Tables are made up of which of the following?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q68. Which three Variable Types can be added to a Service Catalog Item?

- A. True/False, Multiple Choice, and Ordered
- B. True/False, Checkbox, and Number List
- C. Number List, Single Line Text, and Reference
- D. Multiple Choice, Select Box, and Checkbox

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which three Variable Types can be added to a Service Catalog Item?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q69. Record numbers have to be manually incremented

- A. True
- B. False

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Record numbers have to be manually incremented' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q70. What are the main UI component(s) of the ServiceNow Platform?

- A. Banner Navigator
- B. Banner Frame
- C. Application Frame
- D. Application Navigator
- E. Content Menu
- F. Content Frame

**Answer:** B,D,F

*해설:* 정답은 **B,D,F**입니다. 이 문항은 'What are the main UI component(s) of the ServiceNow Platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q71. Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?

- A. They direct the user to a record producer
- B. They direct the user to a catalog property
- C. They direct the user to a catalog UI policy
- D. They direct the user to a catalog client script

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q72. A knowledge article must be which of the following states to display to a user?

- A. Published
- B. Drafted
- C. Retired
- D. Reviewed

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A knowledge article must be which of the following states to display to a user?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q73. Knowledge articles within a knowledge base are grouped by category. A. True

- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Knowledge articles within a knowledge base are grouped by category. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q74. database live at the Data Center. A. True

- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'database live at the Data Center. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q75. ServiceNow uses what term to describe all the data saved within a particular form?

- A. Fields
- B. Form
- C. Record
- D. Lists

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'ServiceNow uses what term to describe all the data saved within a particular form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q76. Which type of interface enables you to display multiple performance analytics, reporting and other widgets on a single screen?

- A. Form
- B. List
- C. Dashboard
- D. Timeline

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which type of interface enables you to display multiple performance analytics, reporting and other widgets on a single screen?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q77. What is the platform name for the User table?

- A. u_users
- B. sys_users
- C. x_users
- D. sys_user

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is the platform name for the User table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q78. What is a schema map?

- A. A schema map enables administrators to define records from specific tables as trouble sources for
- B. A schema map graphically organizes the visual task boards for the CMDB
- C. A schema map graphically displays the Configuration Items that support a business service
- D. A schema map displays the details of tables and their relationships in a visual manner, allowing

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is a schema map?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q79. A role is recorded in which table?

- A. Role[sys_user]
- B. Role[sys_user_profile]
- C. Role[sys_user_record]
- D. Role[sys_user_role]

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A role is recorded in which table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q80. Which term refers to application menus and modules which you may want to access quickly and often?

- A. Breadcrumb
- B. Favorite
- C. Tag
- D. Bookmark

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which term refers to application menus and modules which you may want to access quickly and often?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q81. Which of the following statements is true when a new table is created by extending another table?

- A. The new table archives the parent table and assumed its roles in the database
- B. The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but
- C. The new table inherits all of the fields of the parent table and can also contain new fields unique to itself
- D. The new table inherits all of the fields, but does not inherit Access Control rules, Client

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which of the following statements is true when a new table is created by extending another table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q82. Which one of the following statements best describes the purpose of an Update Set?

- A. An Update Set allows administrators to group a series of changes into a named set and then move this
- B. By default, an Update Set includes customizations, Business Rules, and homepages
- C. An Update Set is a group of customizations that is moved from Production to Development
- D. By default, the changes included in an Update Set are visible only in the instance to which they are

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following statements best describes the purpose of an Update Set?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q83. Which one of the following statements describes a characteristic of role assignment?

- A. Roles can contain other roles, when you are assigned a role, you inherit all the roles within that role
- B. Users can click on the Personalize Role feature to try different roles
- C. A role is granted to a user by the System Administrator
- D. Each user has a role in the ServiceNow platform

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following statements describes a characteristic of role assignment?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q84. Which would NOT appear in the History section of the Application Navigator?

- A. Records
- B. UI Pages
- C. Lists
- D. Forms

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which would NOT appear in the History section of the Application Navigator?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q85. Business Rules are used to enforce mandatory data on a form. A. True

- B. False

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Business Rules are used to enforce mandatory data on a form. A. True' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q86. Buttons, form links, and context menu items are all examples of what type of functionality?

- A. Business Rule
- B. UI Action
- C. Client Script
- D. UI Policy

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Buttons, form links, and context menu items are all examples of what type of functionality?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q87. How is the Event Log different from the Event Registry?

- A. Event Log contains generated Events, the Event Registry is a table of Event definitions
- B. Event Log is formatted in the Log style, the Event Registry displays different fields
- C. Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were
- D. Event Log is the same as the Event Registry

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'How is the Event Log different from the Event Registry?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q88. Which of the following statement describes the purpose of an Order Guide?

- A. Order Guides restrict the number of items in an order to only one item per request
- B. Order Guide provide a list of guidelines for Administrators on how to set up item variables
- C. Order Guide provide the ability to order multiple, related items as one request
- D. Order Guides take the user directly to the checkout without prompting for information

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which of the following statement describes the purpose of an Order Guide?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q89. For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?

- A. Service Catalog variables can only be used in Record Producers
- B. Service Catalog variables can only be used in Order Guides
- C. Service Catalog variables cannot affect the order price
- D. Service Catalog variables are global by default

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q90. When searching using the App Navigator search field, what can be returned? (Choose four.)

- A. Names of Applications and Modules
- B. Names of Modules
- C. Names of Applications
- D. Favorites
- E. History Records
- F. Titles of Dashboard Gauges

**Answer:** A,B,C,D

*해설:* 정답은 **A,B,C,D**입니다. 이 문항은 'When searching using the App Navigator search field, what can be returned?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q91. There are common types of Interfaces (Numeric Value) 6: There are six common types of interfaces

- A. Homepage: Consists of navigational elements, functional controls, and platform information. B. List: Display records from a data table, as well as allow you to edit the record information using the List
- D. Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a
- F. Timelines: Used to track tasks or projects

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'There are common types of Interfaces (Numeric Value) 6: There are six common types of interfaces' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q92. Which one of the following statements is true about Column Context Menus?

- A. It displays actions such as creating quick reports, configuring the list, and exporting data
- B. It displays actions related to filtering options, assigning tags, and search
- C. It displays actions related to viewing and filtering the entire list
- D. It displays actions such as view form, view related task, and add relationship

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following statements is true about Column Context Menus?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q93. Where would you go in ServiceNow to order services and products offered by various departments?

- A. Service Catalog
- B. Self Service
- C. Service Department
- D. Customer Service

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Where would you go in ServiceNow to order services and products offered by various departments?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q94. What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?

**Answer:** Agent

*해설:* 정답은 **Agent**입니다. 이 문항은 'What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q95. What information does the System Dictionary contain?

- A. The human-readable labels and language settings
- B. The definition for each table and column
- C. The information on how tables relate to each other
- D. The language dictionary used for spell checking

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What information does the System Dictionary contain?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q96. What are the 6 methods available for user authentication?

- A. Local Database: The user name and password in their user record in the instance database. B. Multifactor: The user name and password in the database and passcode sent to the user's mobile device
- C. LDAP: The user name and password are accessed via LDAP in the corporate directory, which has a

**Answer:** A,B,C

*해설:* 정답은 **A,B,C**입니다. 이 문항은 'What are the 6 methods available for user authentication?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 인증(Authentication)은 본인 확인, 인가(Authorization)는 권한 결정입니다. LDAP/SSO는 대표적인 엔터프라이즈 인증 통합 방식입니다.

---

### Q97. In what order should filter elements be specified?

- A. Field, Operator, then Value
- B. Field, Operator, then Condition
- C. Operator, Condition, then Value
- D. Value, Operator, then Field

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'In what order should filter elements be specified?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q98. Table Access Control rules are processed in the following order

- A. any table name (wildcard), parent table name, table name
- B. table name, parent table name, any table name (wildcard)
- C. parent table name, table name, any table name (wildcard)
- D. any table name (wildcard), table name, parent table name

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Table Access Control rules are processed in the following order:' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q99. What are the two pathways to view feedback left on a published article?

- A. Knowledge > articles > My Flagged
- B. Knowledge base > my knowledge > flagged articles
- C. Knowledge > My articles > Flagged
- D. Knowledge > articles > published

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문항은 'What are the two pathways to view feedback left on a published article?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q100. When does the Submit button appear on a form?

- A. When saving an old record
- B. When creating a new record
- C. When changing the reference field in an existing record
- D. When updating an existing record

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'When does the Submit button appear on a form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q101. What needs to be specified, when creating a Business Rule? (Choose four.)

- A. UI action
- B. Table
- C. Fields to update
- D. Who can run
- E. Script to run
- F. Application scope
- G. Update set

**Answer:** A,B,E,F

*해설:* 정답은 **A,B,E,F**입니다. 이 문항은 'What needs to be specified, when creating a Business Rule?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q102. The ServiceNow Virtual Agent provides assistance within a messaging interface. Which capability allows end users to configure virtual Agent to intercept and help resolve submitted incidents?

- A. Incident Auto-Resolution
- B. Ticket Resolver
- C. Virtual Agent Helper
- D. Web Intelligence

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'The ServiceNow Virtual Agent provides assistance within a messaging interface. Which capability allows end users to configure virtual Agent to intercept and help resolve submitted incidents?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q103. What are the three permission requirements that must evaluate to true for an access control rule to apply? Choose 3 answers

- A. Conditions
- B. table. C. Roles
- D. Script
- E. table." F. table.none

**Answer:** C,D,E

*해설:* 정답은 **C,D,E**입니다. 이 문항은 'What are the three permission requirements that must evaluate to true for an access control rule to apply?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q104. Which module is used as the first step for importing data?

- A. Coalesce Data
- B. Transform Data
- C. Import Data
- D. Load Data

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which module is used as the first step for importing data?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q105. What are the steps to retrieve an Update Set?

- A. Verify Update Set is Complete, Retrieve, Preview, Apply
- B. Verify Update Set is Complete, Test Connection, Apply
- C. Verify Update Set is Complete, Test Connection, Commit
- D. Verify Update Set is Complete, Retrieve, Preview, Commit

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What are the steps to retrieve an Update Set?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Update Set은 구성 변경사항을 인스턴스 간 이동하는 단위입니다. 기본적으로 데이터 레코드는 포함되지 않으므로 이관 전략을 분리해야 합니다.

---

### Q106. On a Form header, what is the three bar icon called?

- A. Pancake icon
- B. Additional Actions or Context Menu
- C. Hamburger icon
- D. Cake icon

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'On a Form header, what is the three bar icon called?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q107. Which tool is used for creating dependencies between configuration items in the CMDB?

- A. CI Relationship Editor
- B. CMDB Builder
- C. CI Service Manager
- D. Cl Class Manager

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which tool is used for creating dependencies between configuration items in the CMDB?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q108. What is the purpose of the Event Registry?

- A. The Event Registry lists all Events that have successfully completed within a 24-hour period
- B. The Event Registry is a list of all Events that originate through an integration
- C. The Event Registry is a module that provides Event definitions
- D. The Event Registry is a list of all Events that have successfully completed after being Invoked by a script

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is the purpose of the Event Registry?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q109. Which fields can be configured in reporting to perform arithmetic, coalesce, concatenation, and length?

- A. Sourcing fields
- B. Function fields
- C. Computational fields
- D. Calculation fields

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which fields can be configured in reporting to perform arithmetic, coalesce, concatenation, and length?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q110. What type of field allows you to look up values from one other table?

- A. Reference
- B. Verity
- C. Options
- D. Selections
- E. Dot walk
- F. Lookup

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What type of field allows you to look up values from one other table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q111. When using the Performance Analytics application in the Now Platform, what kind of KPI signals are used to make decisions that statistically support long term workflow stability?

- A. Long-term signals
- B. Non-signals
- C. Anti-signals
- D. Stability signals

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'When using the Performance Analytics application in the Now Platform, what kind of KPI signals are used to make decisions that statistically support long term workflow stability?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q112. Which certificate-based authentication methods can be enabled so that users can log into the Service Portal? (Select all that apply) Select 2 Answers from the below options

- A. Extended Validation Access (EVA)
- B. Organization Verification Card (OVC)
- C. Common Access Card (CAC)
- D. Domain Authentication Card (DAC)
- E. Personal Identify Verification (PIV)

**Answer:** C,E

*해설:* 정답은 **C,E**입니다. 이 문항은 'Which certificate-based authentication methods can be enabled so that users can log into the Service Portal?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 인증(Authentication)은 본인 확인, 인가(Authorization)는 권한 결정입니다. LDAP/SSO는 대표적인 엔터프라이즈 인증 통합 방식입니다.

---

### Q113. How do you make a list filter available to everyone?

- A. Make active, set visibility, and save
- B. Assign a name, set visibility, and save
- C. Assign a group, set visibility, and save
- D. Make active, assign a name, and save

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'How do you make a list filter available to everyone?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q114. Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?

- A. Flows
- B. Action Sequences
- C. Action Sets
- D. Task Flows
- E. Flow Diagrams

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q115. Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non- managers) can submit the order?

- A. Create Record Producer and use the Available For list to specify First Line [sn_first_line] role
- B. Create Catalog Item and use the Not Available list to specify the Manager Group
- C. Create Catalog Item and use the Available For list to specify ITIL [itil] role
- D. Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non- managers) can submit the order?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q116. What icon do you use to change the label on a Favorite?

- A. Clock
- B. Hamburger
- C. Pencil
- D. Three dots
- E. Triangle. F. Star

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What icon do you use to change the label on a Favorite?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q117. What is a role in ServiceNow?

- A. A role is one record m the Role [sys_user_role] table
- B. A role is one record in the Role Iuser_sys_role] table
- C. A role is a persona used In Live Feed Chat
- D. A role Is a set of modules for a particular application

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is a role in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q118. Which icon would you double click, to expand and collapse the list of all Applications and Modules?

- A. Star
- B. Clock
- C. Application
- D. Funnel

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which icon would you double click, to expand and collapse the list of all Applications and Modules?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q119. After finishing your work on High Security Settings, what do you do to return to normal admin security levels?

- A. Select Normal role
- B. Log out and back in
- C. Use System Administration > Normal Security module
- D. Select Global Update Set
- E. End Impersonation

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'After finishing your work on High Security Settings, what do you do to return to normal admin security levels?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q120. What kind of data can Import Sets use to populate tables in ServiceNow?

- A. CSS, SOAP, and Excel
- B. XML. CSV, and Excel
- C. SOAP, REST, and XML
- D. XML, SOAP, and CSS

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What kind of data can Import Sets use to populate tables in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q121. What is a quick way to create a report from a list view?

- A. Click on filter breadcrumb, drag and drop on the Report > Create New module
- B. Click Funnel, define filter conditions, click Create Report
- C. Click Context Menu, select Create Report
- D. Apply filter, right click on column header, select Bar Chart
- E. Apply filter, right click on column header, select Create Report

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is a quick way to create a report from a list view?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q122. While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?

- A. Configure Lists
- B. Show Options
- C. Configure Task
- D. Show Choices
- E. Show Choice List
- F. Configure Options

**Answer:** F

*해설:* 정답은 **F**입니다. 이 문항은 'While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q123. What do you need to do before you can use an Application-based trigger in your flow?

- A. Activate application trigger spoke
- B. Activate trigger security rules
- C. Activate application spoke, and plug-ins as needed
- D. Assign Application trigger role [sn_app_trigger_write] to SME
- E. Activate application plugins only

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What do you need to do before you can use an Application-based trigger in your flow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q124. Which section of the ServiceNow UI allows you to perform a global search?

- A. Application Navigator
- B. Banner frame
- C. List pane
- D. Content frame

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which section of the ServiceNow UI allows you to perform a global search?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q125. What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)

- A. Local Sources (i.e. XML, CSV, Excel)
- B. Implementation Spoke
- C. DataHub
- D. JDBC Connection
- E. Network Server
- F. LDAP Connection

**Answer:** A,C,D,F

*해설:* 정답은 **A,C,D,F**입니다. 이 문항은 'What are different types of Data Sources, which may be imported into ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q126. IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as

- A. an action
- B. a spoke
- C. a connection
- D. an integration step

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q127. The ServiceNow platform includes which types of interfaces? (Choose three.)

- A. Now Mobile Apps
- B. Agent Control Center
- C. Back Office Dashboard
- D. Service Portals
- E. Now Platform® User Interfaces
- F. Field Service Taskboard

**Answer:** A,D,E

*해설:* 정답은 **A,D,E**입니다. 이 문항은 'The ServiceNow platform includes which types of interfaces?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q128. When moving multiple update sets at one time, what might you do to facilitate the move?

- A. Batch
- B. Verify
- C. Test
- D. Preview

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'When moving multiple update sets at one time, what might you do to facilitate the move?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q129. What import utility do you use when the field names on the import set match the name of the fields on the Target table?

- A. Schema Mapping
- B. Automatic Mapping
- C. Mapping Assist
- D. Mapping Dashboard

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What import utility do you use when the field names on the import set match the name of the fields on the Target table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q130. Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?

- A. Select Data Source, Schedule Transform
- B. Load Data, Create Transform Map, Run Transform
- C. Define Data Source, Select Transform Map, Run Transform
- D. Select Import Set, Select Transform Map, Run Transform

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q131. Which tool should be used to populate commonly used fields in a form?

- A. Template
- B. Reference Qualifier
- C. Formatter
- D. Assignment Rule

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which tool should be used to populate commonly used fields in a form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q132. What Is the purpose of the Fitter navigator In the Application Navigator?

- A. Filter applications in order of use
- B. Quickly navigate to applications and modules
- C. Collapse and expand applications
- D. List applications In order of Top Requests

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What Is the purpose of the Fitter navigator In the Application Navigator?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q133. From a form, what would you click to add additional fields to the form? (Choose two.)

- A. Context Menu > Form > Layout
- B. Context Menu > Configure > Form Layout
- C. Context Menu > Configure > Form Design
- D. Right click on header > Add > Field
- E. Context Menu > Form > Designer
- F. Right click on header > Configure > UX Dashboard

**Answer:** B,D

*해설:* 정답은 **B,D**입니다. 이 문항은 'From a form, what would you click to add additional fields to the form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q134. What controls the publishing and retiring process for knowledge articles?

- A. Approval Policies
- B. Approval Definitions
- C. Workflow Designer
- D. Workflows
- E. State Lifecycle

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What controls the publishing and retiring process for knowledge articles?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q135. A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed Incidents where Assignment Group is Network After clicking the Funnel icon, what should the user do?

- A. Define the first condition; click AND button; define second condition; click Run
- B. Define the first condition; click AND button; define second condition; press enter
- C. Define the first condition; click OR button; define second condition; press enter
- D. Define the first condition; click > icon on breadcrumb, define second condition; click Run
- E. Define the first condition; click > icon on breadcrumb, define second condition; press enter

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed Incidents where Assignment Group is Network After clicking the Funnel icon, what should the user do?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q136. Which of the following statements describes how data is organized in a table?

- A. A column is a field in the database and a record is one user
- B. A column is one field and a record is one row
- C. A column is one field and a record is one column
- D. A column contains data from one user and a record is one set of fields

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which of the following statements describes how data is organized in a table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q137. Which plugin allows users to install multiple applications, application-customizations. or plugins at once?

- A. Application Integration and Plugin Delivery (A1PD) SpokeBatch Install
- B. Continuous Integration and Continuous Delivery (CICD) SpokeBatch Install
- C. Multiple Integration and Process Delivery (MIPD) SpokeBatch Install
- D. Quick Integration and Multiple Delivery (QIMD) SpokeBatch Install

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which plugin allows users to install multiple applications, application-customizations. or plugins at once?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q138. Which one of the following is an accurate list of changes that are captured in an Update Set?

- A. Changes made to tables, forms, schedules, and client scripts
- B. Changes made to tables, forms, views, and fields
- C. Changes made to: tables, forms. Business Rules, and data records
- D. Changes made to: tables. forms groups, and configuration items (Cls)

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following is an accurate list of changes that are captured in an Update Set?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q139. A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of "INC" to the company standard IN." What are the next steps to be taken'' A. Go to the Number Maintenance application and change the prefix to "IN" for incident

- B. Create a Business Rule that modifies the prefix before the Insert operation
- C. The prefix of an incident cannot be changed because it is a built-in feature
- D. Submit a Change Request to ServiceNow Technical Support

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of "INC" to the company standard IN." What are the next steps to be taken'' A. Go to the Number Maintenance application and change the prefix to "IN" for incident' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q140. Which tool is used to define relationships between fields in an import set table and a target table?

- A. Transform Schema
- B. Schema Map
- C. Dictionary Map
- D. Transform Map
- E. Field Transformer
- F. Import Designer

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which tool is used to define relationships between fields in an import set table and a target table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q141. Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities’ assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?

- A. Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities’ assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q142. An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?

- A. The Service Desk > My Groups Work list shows active work tasks that are not yet assigned. B. The manager does not have the itil role. C. The manager is not a member of the Service Desk group. D. The manager is not a member of the Network and Hardware groups. E. The Assignment Group manager field is empty. Answer: C

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q143. Which of the following are not included in an Update Set, by default? (Choose four.)

- A. Homepages
- B. Data
- C. Published Workflows
- D. Business Rules
- E. Schedules
- F. Database changes
- G. Related Lists

**Answer:** A,B,E,F

*해설:* 정답은 **A,B,E,F**입니다. 이 문항은 'Which of the following are not included in an Update Set, by default?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q144. How can administrators utilize the same content for different notification channels?

- A. Configure Default notification content
- B. Enable Actionable notification content
- C. Provide Common notification content
- D. Set up Related notification content

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'How can administrators utilize the same content for different notification channels?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q145. Which one of the following statements is true?

- A. When an incident form is saved, all the Work Notes field text is recorded to the Activity Log field
- B. When an incident form is saved, the Work Notes field text is overwritten each time work is logged against
- C. When an incident form is saved, the impact field is calculated by adding the Prion:, and Urgency values
- D. When an Incident form is saved, the Additional Comments field text is cleared and recorded to the Work

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which one of the following statements is true?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q146. When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)

- A. Make sure the latest flows are activated. B. Use the instance Incognito setting to quickly toggle between requester and approver. C. Impersonate the requester to ensure the form works. D. Make sure the requester's user record has a manager specified. E. Create and select your Testing Update Set, before starting the test cases. F. Use your Admin account, so you can approve the items quickly. Answer: D,E,F

**Answer:** D,E,F

*해설:* 정답은 **D,E,F**입니다. 이 문항은 'When testing a catalog item, having a manager approval flows, which of these best practices would you follow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q147. What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?

- A. Task Escalation Clock
- B. Service Level Agreements
- C. Inactivity Monitor
- D. Response Time Clock
- E. Business Time Remaining

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q148. What is the name of the table relationship, where two or more tables are related in a bi- directional relationship, so that the related records are visible from both tables in a related list?

- A. Database View
- B. Many to Many
- C. One to Many
- D. Extended

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is the name of the table relationship, where two or more tables are related in a bi- directional relationship, so that the related records are visible from both tables in a related list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q149. What ServiceNow tables can Administrators define as "destinations" for imported data, when using Transform Maps in the System Import Sets application?

- A. The Task table is the only table that can be a destination for imported data in the Transform Map module
- B. The Incident. Problem. Change, Task, and Service Catalog tables are the only tables that can be a
- C. Only the Incident Problem, and Change tables can be a destination for imported data in the Transform
- D. Any ServiceNow table can be a destination for imported data in the Transform Map module

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What ServiceNow tables can Administrators define as "destinations" for imported data, when using Transform Maps in the System Import Sets application?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q150. When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?

- A. Flow Manager
- B. Flow Designer
- C. Flow Editor
- D. Workflow Editor
- E. Workflow Designer

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q151. A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?

- A. Specify the Dept_Mgr role on the catalog content block
- B. Add the Department Manager group to the catalog item’s user criteria
- C. Add the Department Manager group to the catalog item’s ACL
- D. Only publish the item in the HR service catalog
- E. Use a Dept_Mgr ACL on the HR service catalog

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q152. What is NOT an example of a UI Action?

- A. Search
- B. Form buttons
- C. list Buttons
- D. Related Links

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is NOT an example of a UI Action?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q153. What function do you use to add buttons, links, and context menu items on forms and lists?

- A. UI Policies
- B. UI Settings
- C. UI Actions
- D. UI Config

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What function do you use to add buttons, links, and context menu items on forms and lists?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q154. Where in Flow Designer can users access information about actions that are added to the flow?

- A. Virtual Agent Help
- B. Local Action Help
- C. Help Panel
- D. Flow Assistant

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Where in Flow Designer can users access information about actions that are added to the flow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q155. Which plugin needs to be activated in order to translate the content of a catalog item to multiple languages?

- A. Localization Framework plugin (com.glide.localization_framework)
- B. Translation Framework plugin (com.glide.translation_framework)
- C. Multiple Language Framework plugin (com.glide.multiple.language_framework)
- D. Language Al Framework plugin (com .g I id e. language.ai _framework)

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which plugin needs to be activated in order to translate the content of a catalog item to multiple languages?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q156. Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?

- A. Incident.Major_Incident
- B. incident=>major_incident
- C. incident<=>major_incident
- D. incident||major_incident
- E. incident.major_incident

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q157. ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?

- A. Common Services Data Model (CSDM)
- B. Information Technology Service Management (ITSM)
- C. Configuration Management Database (CMDB)
- D. Information Technology Infrastructure Library (ITIL)

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q158. What is specified in an Access Control rule?

- A. Groups, Conditional Expressions and Workflows
- B. Table Schema, CRUD, and User Authentication
- C. Object and Operation being secured; Permissions required to access the object
- D. security_admin

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is specified in an Access Control rule?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q159. As it reveals to IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?

- A. Knowledge
- B. ServiceNow Wiki
- C. Knowledge Now
- D. SharePoint
- E. Stack Overflow

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'As it reveals to IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q160. Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?

- A. Process Automation > Flow Designer
- B. Process Automation > Flow Administration
- C. Process Automation > Workflow Editor
- D. Process Automation > Process Flow
- E. Process Automation > Active Flows

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q161. What field contains a record’s 32-character, unique identifier?

- A. sn_rec_id
- B. rec_id
- C. u_id
- D. sys_id
- E. sn_gu_id
- F. sn_sys_id
- G. id

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What field contains a record’s 32-character, unique identifier?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q162. Which of the following is used to categorize, flag, and locate records?

- A. Search
- B. Favorites
- C. Tags
- D. Bookmarks

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which of the following is used to categorize, flag, and locate records?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q163. What is a sys_id?

- A. Unique 32-character identifier that is assigned to every record
- B. A client-side Business Rule
- C. A server-side Business Rule
- D. Unique 64-character identifier that is assigned to every record

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is a sys_id?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q164. Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?

- A. Agent Workspace
- B. Chat bot
- C. Virtual Agent
- D. Knowledge Chat
- E. Now Support

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q165. New records, new groups, and modified configuration Items (Cls): what do they have in common?

- A. They are included in an Update Set
- B. They are not captured in an Update Set
- C. They are customizations
- D. They do not have anything in common

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'New records, new groups, and modified configuration Items (Cls): what do they have in common?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q166. What do you call any component that needs to be managed in order to deliver services?

- A. CSDM Items
- B. CMDB
- C. Configuration item
- D. Service Offerings
- E. Asset

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What do you call any component that needs to be managed in order to deliver services?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q167. What are the components that make up a filter condition? (Choose three.)

- A. Operator
- B. Match Criteria
- C. Value
- D. Column
- E. Field

**Answer:** A,C,E

*해설:* 정답은 **A,C,E**입니다. 이 문항은 'What are the components that make up a filter condition?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q168. When designing a flow, how do you reference data from a record, in that flow?

- A. Drag the table icon onto the flow definition
- B. Use the condition builder to specify the desired values
- C. Specify the source table on the data pill related list
- D. Drag the data pill onto the flow definition
- E. Add the table reference using the slush bucket

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When designing a flow, how do you reference data from a record, in that flow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q169. Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?

- A. System Notification > Email > Notifications
- B. Administration > Notification Overview
- C. System Properties > Email > Settings
- D. User Preferences > Email > Notifications
- E. Click Gear > Notifications > New

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q170. On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?

- A. Before, After, Async, Display
- B. Prior to, Synchronous, on Update
- C. Insert, Update, Delete, Query
- D. Before, Synchronous, Scheduled Job, View

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q171. What do you activate when you want to add applications or functionality within your development instance?

- A. App Package
- B. Updated Pack
- C. Patch
- D. Plugin
- E. App Updated Set

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What do you activate when you want to add applications or functionality within your development instance?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q172. What is a no-code approach to control the mandatory or read-only state of a form field?

- A. UI Action
- B. Client Script
- C. UI Script
- D. UI RuIe
- E. UI Policy

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'What is a no-code approach to control the mandatory or read-only state of a form field?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q173. What is the purpose of a Data Policy?

- A. Data Policies enforce security
- B. Data Policies standardize data in Update Sets
- C. Data Policies enforce data consistency
- D. Data Policies apply to lists to standard data

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the purpose of a Data Policy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q174. What would NOT appear in the Application Navigator if “service” is typed into the filter field?

- A. Configuration > Business Services
- B. Self-Service > Knowledge
- C. Service Portal > Widgets
- D. Incident > Assigned to me

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What would NOT appear in the Application Navigator if “service” is typed into the filter field?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q175. Access Control rules may provide access security for which of the following database objects?

- A. For a specific role, group, or user
- B. For a specific row, column, or table
- C. For specific groups
- D. For a specific CMDB Configuration item

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Access Control rules may provide access security for which of the following database objects?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q176. What is a key difference between Reporting and Performance Analytics?

- A. Performance Analytics contains snapshots of data taken over time; Reporting shows

**Answer:** Performance Analytics는 시계열 스냅샷/추세 분석 중심이며, Reporting은 시점 기반 조회 중심입니다.

*해설:* 정답은 **Performance Analytics는 시계열 스냅샷/추세 분석 중심이며, Reporting은 시점 기반 조회 중심입니다.**입니다. 이 문항은 'What is a key difference between Reporting and Performance Analytics?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q177. You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)

- A. Select Fields and Columns module
- B. Right click on form header, select Configure > Form Layout
- C. Click on context menu, select Configure > Form Designer
- D. Select Field Class Manager module

**Answer:** B,C

*해설:* 정답은 **B,C**입니다. 이 문항은 'You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q178. A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?

- A. Have them clear their cache. B. Have them use the gear icon to set the employee’s time zone. C. Recommend they use Chrome, instead of Explorer. D. Use the system properties to correct the instance’s time zone. E. Have them correct the time zone on their computer. Answer: E

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q179. What are two ways to generate an Event? (Choose two.)

- A. Business Rule
- B. Workflow
- C. Log entry
- D. Knowledge article publication

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. 이 문항은 'What are two ways to generate an Event?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q180. When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?

- A. Turn your computer off and on again
- B. Clear browser cache
- C. End Impersonation
- D. Log out and back in

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q181. On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)

- A. Group
- B. Department
- C. My reports
- D. Team
- E. Dashboards
- F. Global
- G. Admin

**Answer:** A,E,F,G

*해설:* 정답은 **A,E,F,G**입니다. 이 문항은 'On the Reports page, what sections allow you to see which reports are visible to different audiences?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q182. Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?

- A. Task [task]
- B. Assignment [assignment]
- C. Service [service]
- D. Workflow [workflow]

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q183. How are local flow variables accessed in the Flow Designer Data panel?

- A. As newly generated icons
- B. As scratchpad variables
- C. As new tabs
- D. As data pills

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'How are local flow variables accessed in the Flow Designer Data panel?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q184. What is an Event in ServiceNow?

- A. An Event is a trigger that has a direct response in the platform
- B. An Event is an indication to the ServiceNow processes that something has occurred
- C. An Event is an indicator that a Priority 1 (P1) Incident has been logged
- D. An Event is a recognized, scheduled occurrence of a process

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is an Event in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q185. What is the primary application used to load data into ServiceNow?

- A. Service Level Management
- B. Configuration
- C. System Import Sets
- D. System Update Sets

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the primary application used to load data into ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q186. In addition to the admin role, which one of the following roles allows a user to add or remove fields from a list?

- A. personal ize.control
- B. personal_list
- C. ul_page_admin
- D. ui_action_admin

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'In addition to the admin role, which one of the following roles allows a user to add or remove fields from a list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q187. What are three security modules often used by the System Administrator? (Choose three.)

- A. System Properties > Security
- B. Utilities > Migrate Security
- C. System Security > Security
- D. Self-Service > My Access
- E. System Security > Access Control (ACL)
- F. Password Management > Security Questions
- G. System Security > High Security Settings

**Answer:** A,E,G

*해설:* 정답은 **A,E,G**입니다. 이 문항은 'What are three security modules often used by the System Administrator?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q188. What is the difference between a Ul Policy and Data Policy?

- A. Data Policies run only after Ul Policies run successfully
- B. Data Policies run regardless of how data is entered Into ServiceNow, while Ul Policies are used for form
- C. Data Policies can be converted into Ul Policies, but Ul Policies can not be converted into Data Policies
- D. Data Policies run when data is entered through the form, by an Import Set or by web services, while Ul

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is the difference between a Ul Policy and Data Policy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q189. What is used frequently to move customizations from one instance to another?

- A. Update Sets
- B. Code Sets
- C. Update Packs
- D. Configuration Logs
- E. Remote Sets
- F. Local Sets
- G. Code Packs

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is used frequently to move customizations from one instance to another?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Update Set은 구성 변경사항을 인스턴스 간 이동하는 단위입니다. 기본적으로 데이터 레코드는 포함되지 않으므로 이관 전략을 분리해야 합니다.

---

### Q190. How is a group defined in ServiceNow?

- A. A group is one record stored in the Group Type [sys_user_group_type] table
- B. A group is one record stored in the Group [sys_user_group] table
- C. A group defines a set of users that share the same location
- D. A group defines a set of users that share the same job title

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'How is a group defined in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q191. When creating a global custom table named “abc”, what is the table name that is automatically assigned by the platform?

- A. snc_abc
- B. abc
- C. u_abc
- D. sys_abc

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'When creating a global custom table named “abc”, what is the table name that is automatically assigned by the platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q192. Which of the following protects applications by identifying and restricting access to available files and data?

- A. Application Configuration
- B. Verbose Log
- C. Access Control Rules
- D. Application Scope

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which of the following protects applications by identifying and restricting access to available files and data?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q193. When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?

- A. Look up their password, so you can login with their account
- B. Initiate a Connect Chat session
- C. Install the Bomgar plug-in
- D. Impersonate the user
- E. Launch a NowChat window

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q194. Which one of the following is NOT a type of Visual Task Board?

- A. Feature
- B. Guided boards
- C. Flexible
- D. Freeform

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which one of the following is NOT a type of Visual Task Board?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q195. Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?

- A. Common Service Data Model (CSDM)
- B. Service Mapping Utility (SMU)
- C. Service Schema Map (SSM)
- D. CMDB Class Manager (CMDBCM)
- E. CI Class Manager (CICM)

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q196. What is the difference between a UI Policy and Data Policy?

- A. Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI
- B. Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies
- C. Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form
- D. Data Policies run only after UI Policies run successfully

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the difference between a UI Policy and Data Policy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q197. Group records are stored in which table?

- A. Group [sn_user_group]
- B. Group [sys_user_group]
- C. Group [s_sys_group]
- D. Group [u_sys_group]

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Group records are stored in which table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q198. What is a Notification?

- A. A new Knowledge article created by a Business Rule
- B. A tool for alerting users that events that concern them have occurred
- C. A message through Connect related to a Change Request
- D. An email file attachment

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is a Notification?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q199. What are examples of Core tables in the ServiceNow platform?

- A. Configuration, Connect, Chat
- B. Team, Party, Awards
- C. User, Task, Incident
- D. Work, Caller, Timecard

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What are examples of Core tables in the ServiceNow platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q200. Which data consistency settings can be achieved using UI Policy? Choose 3 answers

- A. Setting fields to accept the data with ‘n’ number of characters
- B. Setting fields hidden
- C. Setting fields to accept the data in an expected format
- D. Settings fields read-only
- E. Setting fields mandatory

**Answer:** B,D,E

*해설:* 정답은 **B,D,E**입니다. 이 문항은 'Which data consistency settings can be achieved using UI Policy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q201. Which is the most efficient way to move large amounts of data between instances?

- A. Export to Data Package
- B. Export to XML
- C. Update Sets
- D. Export to Zip

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which is the most efficient way to move large amounts of data between instances?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q202. Which module would you use to customize your instances banner image, text and colors? A Homepage Admin > Pages > Branding

- A. System Ul > Ul Pages > Branding
- B. System Properties > Branding
- C. System Properties > Basic Configuration UI16
- D. Service Portal > Portals > Branding

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which module would you use to customize your instances banner image, text and colors? A Homepage Admin > Pages > Branding' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q203. What feature allows, you to limit who is able to contribute or read knowledge within a knowledge base?

- A. Categories
- B. Roles
- C. User Criteria
- D. Groups

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What feature allows, you to limit who is able to contribute or read knowledge within a knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q204. An order for new office equipment has Men placed through the Service Catalog. How would you view the lists of requests after the orders have Men placed?

- A. All > Service Catalog > Open Records > Items
- B. In the Navigation Filter, type 'requests. Let' and press the Enter key. C. All > Tables and Columns > Taste
- D. All > Service Catalog > Requests

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'An order for new office equipment has Men placed through the Service Catalog. How would you view the lists of requests after the orders have Men placed?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q205. On a form header, what icon would you click to access Template features?

- A. Paper clip
- B. More options (...)
- C. Stamp
- D. Context Menu

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'On a form header, what icon would you click to access Template features?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q206. What component causes a flow to run after a record has been created or updated?

- A. Date-based trigger
- B. Record-based trigger
- C. On-change trigger
- D. Application-based trigger
- E. Updated-date trigger

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What component causes a flow to run after a record has been created or updated?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q207. What is the primary objective of the Display Business Rule?

- A. To monitor fields on a form, and provide feedback
- B. To use a shared g_scratchpad object, which can be sent to the client, as part of the form
- C. To set files to mandatory, hidden, and read-only
- D. To define what happens on a form, when a particular fled changes

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What is the primary objective of the Display Business Rule?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q208. What module do you use to access the reports that are available to you?

- A. Report > View /Run
- B. Reports > Homepage
- C. Self-Service>My Reports
- D. Report > Overview

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What module do you use to access the reports that are available to you?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q209. A task worker asks how they can monitor any updates occurring to recands assigned to him, like responses from customers, What do you suggest?

- A. Open an Agent workspace tab for each record he wants to monitor
- B. Select Service Desk > My Work Dashboard
- C. Click on the eyeglass icon to. expand the Monitor frame
- D. On My Work list, select the Activity Stream icon to show a frame with live updates

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A task worker asks how they can monitor any updates occurring to recands assigned to him, like responses from customers, What do you suggest?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q210. When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?

- A. Trigger runtime value
- B. Sequence runtime value
- C. Starting runtime value
- D. Data pill runtime value
- E. Input runtime value

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q211. Which feature can be used to categorize a set of records from a list and make them visible to other users?

- A. Tags
- B. History
- C. Favorites
- D. Activity Formatter

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which feature can be used to categorize a set of records from a list and make them visible to other users?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q212. User records are stored in which table?

- A. User [sys_user]
- B. User [sn_user]
- C. User [u_sys_user]
- D. User [s_user]

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'User records are stored in which table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q213. When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?

- A. On the Iist, locate and right click on the value Hardware, select Show Matching
- B. Click Funnel ten, type Hardware and click enter
- C. On the Category column header, right click and select Show > Hardware
- D. Right dick on magnifier, type Hardware and click enter
- E. On Breadcrumb, click > icon, type Hardware and click enter

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q214. If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?

- A. A server script
- B. A client script
- C. A fix script
- D. A business rule

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q215. Which role(s) are required to impersonate a user? Choose 2 answers

- A. admin
- B. sys_admin
- C. security_admin
- D. sys_user
- E. impersonator

**Answer:** A,E

*해설:* 정답은 **A,E**입니다. 이 문항은 'Which role(s) are required to impersonate a user?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q216. If users would like to locate and assign a task to themselves in the Platform, What action could they perform from the list view to make the assignment? Choose 2 answers

- A. Select the record using the check box, then select the Person icon
- B. Double click on the Assigned to value, type the name of the user, and select the green check
- C. Select the record using the check box then select the Assign To Me UI action on the List Header
- D. Right click on the Task number and select the Assign to me option in the menu
- E. Select the Task number, and select the Assign to me UI action on the form

**Answer:** D,E

*해설:* 정답은 **D,E**입니다. 이 문항은 'If users would like to locate and assign a task to themselves in the Platform, What action could they perform from the list view to make the assignment?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q217. An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with tins newly ordered item? Choose 2 answers

- A. A record of sc_task
- B. A record of sc_req_llem table
- C. A change record
- D. An Incident record
- E. A problem record

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. 이 문항은 'An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with tins newly ordered item?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q218. How would you navigate to the Schema map for a table?

- A. System Dictionary > Show Schema Map; Select Table
- B. System Definition > Tables; Select Table; Go to Related links and click Show Schema Map
- C. System Definition > Show Schema Map; Select Table
- D. System Definition > Dictionary: Select Table; Go to Related links and click Show Schema Map

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'How would you navigate to the Schema map for a table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q219. When an administrator sets a policy that is applied to all data entered into the Platform (UI, Import Sets, or Web Services), where does this policy run by default?

- A. Network
- B. Server
- C. Client
- D. Browser

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'When an administrator sets a policy that is applied to all data entered into the Platform (UI, Import Sets, or Web Services), where does this policy run by default?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q220. When selecting the Target table for an import, which tables can you select? Choose 3 answers

- A. Tables within the global scope
- B. Tables within the existing application scope
- C. Tables outside of ServiceNow
- D. Tables which allow write access to other applications
- E. Related tables, using Dot Walk

**Answer:** A,B,D

*해설:* 정답은 **A,B,D**입니다. 이 문항은 'When selecting the Target table for an import, which tables can you select?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q221. On Access Control Definitions, what are ways you can set the permissions on a Table? Choose 3 answers

- A. Groups
- B. CRUD
- C. Roles
- D. Script that sets the answer variable to true or false
- E. Conditional Expressions

**Answer:** C,D,E

*해설:* 정답은 **C,D,E**입니다. 이 문항은 'On Access Control Definitions, what are ways you can set the permissions on a Table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q222. What are the steps for importing data using an import set?

- A. Select source file; Run automap; Transform data; Clean up target table
- B. Set up LDAP; Test map: Create update set; Run import: Apply update set
- C. Identify source; Import transform map: Run transformer; Verity import
- D. Load the data; Create transform map; Transform data; Clean up import table

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What are the steps for importing data using an import set?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q223. When moving a homepage or dashboard between instances, what must you remember?

- A. Create a separate update set for them
- B. They are automatically added to the update set
- C. Manually add them to the update set
- D. They cannot be moved via update set

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'When moving a homepage or dashboard between instances, what must you remember?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Update Set은 구성 변경사항을 인스턴스 간 이동하는 단위입니다. 기본적으로 데이터 레코드는 포함되지 않으므로 이관 전략을 분리해야 합니다.

---

### Q224. What is the platform name for the Group table?

- A. SyS_USer_group
- B. Sys_group
- C. group
- D. sys_groups

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is the platform name for the Group table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q225. When adding a related list to a form, you choose the related list from the list callector, What is an example of a related list you might see on the list collector? Choose 3 answers

- A. Release Phase==Parent
- B. Catalog Task->Parent
- C. HR Case-=Parent
- D. Problem==Parent
- E. Outage->Task number

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. 이 문항은 'When adding a related list to a form, you choose the related list from the list callector, What is an example of a related list you might see on the list collector? :' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q226. What ServiceNow feature allows you to include data from a secondary related table on a report?

- A. SQL
- B. Dot Walking
- C. Outer Join
- D. Joins

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What ServiceNow feature allows you to include data from a secondary related table on a report?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q227. On the Form header, which icon do you use to access form templates?

- A. Paperclip
- B. Pages
- C. Stamp
- D. More Options {...)

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'On the Form header, which icon do you use to access form templates?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q228. What does ServiceNow recommend as a best practice regarding data imports?

- A. Adjust your Transform maps, after the data is loaded into the target table. B. Use extremely large Import Sets, instead of multiple large Import Sets. C. Create a new Import set table for each new data load. D. Plan time before your import to remove obsolete or inaccurate data. E. Monitor data quality and clean imported data, using the Data Scrub Workspace. Answer: D

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What does ServiceNow recommend as a best practice regarding data imports?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q229. Which type of scripts nun in the browser?

- A. Script include Scripts
- B. Business Rule Scripts
- C. Access Contra! Scripts
- D. Ul Policies and Client Scripts

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which type of scripts nun in the browser?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q230. When building an extended table from a base table, which fields do you need to create? Choose 2 answers

- A. The mandatory fields for the base table. B. The reference fields for the base table. C. The fields that are not in the base table. D. The fields that are specific to the extended table. Answer: C,D

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 이 문항은 'When building an extended table from a base table, which fields do you need to create?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q231. Which is the base table of the configuration management database hierarchy?

- A. cmdb_d
- B. ucmdb
- C. cmdb_ret_Oi
- D. cmdb

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which is the base table of the configuration management database hierarchy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q232. A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: *Requested for*Requested by *Approving manager* Delivery instructions All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?

- A. Create one Variable Set for the four variables; then add that variable set to each of the 80 catalog items. B. Create a Record Producer that contains the four fields: then add to the record producer related list on the

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: *Requested for*Requested by *Approving manager* Delivery instructions All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q233. What is the most common role that has access to almost all platform features, functions, and data?

- A. Security Admin [security_admin]
- B. Sys Admin [sys_admin]
- C. Admin [sn_admin]
- D. System Administrator [admin]
- E. Base Admin [base_admin]

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the most common role that has access to almost all platform features, functions, and data?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q234. If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?

- A. itil users
- B. Any user with an article's permalink
- C. Any active user
- D. No users
- E. Users with kb_user role

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q235. What does Natural Language Query allow you to do on a list?

- A. Automatically select a filter, based on keywords
- B. Filter list by typing in a phrase
- C. Predict the filter desired by the user
- D. Speak to the condition builder
- E. Set list filter, using audible commands

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What does Natural Language Query allow you to do on a list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q236. When a custom table is created, which access control rules are automatically created? Choose 4 answers

- A. delete
- B. create
- C. execute
- D. read
- E. update
- F. write

**Answer:** A,B,D,F

*해설:* 정답은 **A,B,D,F**입니다. 이 문항은 'When a custom table is created, which access control rules are automatically created?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q237. What role enables someone to authorize a request, with no other permissions on the platform?

- A. Approver [approver-user]
- B. Authorize [authorize-user]
- C. Reviewer [reviewer_user]
- D. Approver Group [approval_group]
- E. Verification [verify_user]

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What role enables someone to authorize a request, with no other permissions on the platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q238. What actions art taken to filter a long list of records to show only those which have “email” Short Description?

- A. Click List Magnifier to expand column search. on Short Description type %email. click enter
- B. Click List Magnifier to expand column search, on Short Description, type email, click enter
- C. On Search box. select text, type email, click enter
- D. Click List Magnifier to expand column search, on Short Description type 'email, dick enter

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What actions art taken to filter a long list of records to show only those which have “email” Short Description?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q239. The Report Designer contains different section for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report. A. Properties

- B. Data
- C. Configure
- D. Type
- E. Sources

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'The Report Designer contains different section for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report. A. Properties' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q240. When managing tags, you can adjust who is able to see iL What are the visibility options? Choose 3 answers

- A. Admins
- B. Everyone
- C. Groups and Users
- D. Roles and Permissions
- E. Me

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. 이 문항은 'When managing tags, you can adjust who is able to see iL What are the visibility options?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q241. What setting allows users to view a Knowledge Base article even if the are not logged in?

- A. The View All setting
- B. The Allow role
- C. The ESS role
- D. The Public setting

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What setting allows users to view a Knowledge Base article even if the are not logged in?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q242. In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?

- A. Field Icon
- B. Field Value
- C. Data Pill
- D. Data Element
- E. Data Trigger

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q243. What is the language used for scriptingin ServiceNow?

- A. JavaScript
- B. C++
- C. PHP
- D. Python

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What is the language used for scriptingin ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q244. Which element is used to track items not saved with a field, in a record?

- A. Sidebar
- B. List Editor
- C. Activity formatter
- D. Dictionary

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which element is used to track items not saved with a field, in a record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q245. What actions are taken to filter a long list of records to show only those with the Category of Hardware?

- A. On Breadcrumb, click the > icon, type Hardware and click enter
- B. On the Category column header, right-click and select Show > Hardware
- C. On the list, locate and right-click on the value Hardware, select Show Matching
- D. Right-click on magnifier type Hardware and click enter
- E. Click Funnel icon, type Hardware and click enter

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What actions are taken to filter a long list of records to show only those with the Category of Hardware?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q246. You have heard about a new application released by SericeNow, You want to try it out, to- see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?

- A. Check the latest release notes at docs.servicenow.com. B. Activate the application plug in, on your personal dev instance. C. Search the wiki for the sales demo request form, D. Activate the application plug in, on your company's production instance. Answer: B

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'You have heard about a new application released by SericeNow, You want to try it out, to- see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q247. Which modules can you use to create a new table? Choose 2 answers

- A. Tables & Columns
- B. Schema Map
- C. Dictionary
- D. Tables

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문항은 'Which modules can you use to create a new table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q248. What are examples of Ul Actions, relating to Lists? Choose 4 answers

- A. List Links
- B. List Control
- C. List Buttons
- D. List Context Menu
- E. List Override
- F. List Choices

**Answer:** A,B,C,F

*해설:* 정답은 **A,B,C,F**입니다. 이 문항은 'What are examples of Ul Actions, relating to Lists?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q249. Which field on every record contains a unique identifier for that record?

- A. sys_number
- B. sc_req_item
- C. sys_id
- D. sys_number_id

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which field on every record contains a unique identifier for that record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q250. Which system property is added and set to true in order to see impersonation events in the System Log?

- A. glide user_setting
- B. glide sys all_jmpersonation
- C. glide sys log_jmpersonabon
- D. glide.impersonation_setting
- E. glide sys admin_login

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which system property is added and set to true in order to see impersonation events in the System Log?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q251. When importing spreadsheet data into ServiceNow, what is the first step in the process?

- A. Create Import Set
- B. Run Data Scrubber
- C. Set Coalesce
- D. Define Data Source
- E. Select Import Set

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'When importing spreadsheet data into ServiceNow, what is the first step in the process?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q252. What are the three key tables in an enterprise CMDB? Choose 3 answers. A. omadb_rel_ci

- B. sn_emdb
- C. sn_emdb_ci
- D. Ey omdb
- E. sn_emdb_bak
- F. omdb_ci
- G. emdb_bak

**Answer:** A,D,F

*해설:* 정답은 **A,D,F**입니다. 이 문항은 'What are the three key tables in an enterprise CMDB? . A. omadb_rel_ci' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q253. On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?

- A. Self Service Module
- B. Application Navigator
- C. Service Desk Homepage
- D. Favorites

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q254. When creating a new notification, what must you define? Choose 3 answers

- A. What is the content of the notification
- B. The associated knowledge base
- C. Under what conditions is the notification sent
- D. Who receives the notification
- E. Settings for handling inactive user accounts

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. 이 문항은 'When creating a new notification, what must you define?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q255. What table acts as a staging area for records imported from a data source?

- A. Transform Table
- B. Staging Table
- C. Import Set Row Table
- D. Temp Table

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What table acts as a staging area for records imported from a data source?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q256. On a form, which type of Geld has this icon which can be clicked, 10 S00 a preview of the associated record?

- A. Drilkdown
- B. Lookup
- C. Quickview
- D. Preview
- E. Snapshot
- F. Reference:

**Answer:** F

*해설:* 정답은 **F**입니다. 이 문항은 'On a form, which type of Geld has this icon which can be clicked, 10 S00 a preview of the associated record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q257. Which admin role is required to make changes to High Security Settings?

- A. security _admin
- B. sn_ad_admin
- C. high_sec_admin
- D. admin

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which admin role is required to make changes to High Security Settings?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q258. What action would an administrator perform on a list if they wanted to show the records in groups, based on the Category column? (Choose 2 answers)

- A. On the list Context Menu, select Group By > Category
- B. On the Category column title, select the Context menu > Group By Category
- C. On the Application Navigator, type group.category and press Enter
- D. Select the Group icon, then select Category
- E. On the Filter Menu, select Group By > Category

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문항은 'What action would an administrator perform on a list if they wanted to show the records in groups, based on the Category column?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q259. If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment? (Choose 2 answers)

- A. Select the record using the check box, then select the Person icon
- B. Select the Task number, and select the Assign to me UI action on the form
- C. Right-click on the Task number and select the Assign to me option in the menu
- D. Double-click on the Assigned to value, type the name of the user, and select the green check
- E. Select the record using the check box, then select the Assign To Me UI action on the List Header

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. 이 문항은 'If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q260. What features are available in Knowledge Management, to support continuous improvement on the knowledge articles? Choose 4 answers

- A. Submit KB Errata
- B. Add Comments
- C. CC Click frowning icon
- D. Tag as Helpful
- E. Flag Article
- F. Rate with Stars

**Answer:** B,D,E,F

*해설:* 정답은 **B,D,E,F**입니다. 이 문항은 'What features are available in Knowledge Management, to support continuous improvement on the knowledge articles?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q261. A form displays information about one record at the top, for example a User, Additional records, which are associated with that User, are displayed on tabs at the bottom of the form. What are those tabs called?

- A. Additional Info
- B. More Info
- C. Related Links
- D. Related Lists

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A form displays information about one record at the top, for example a User, Additional records, which are associated with that User, are displayed on tabs at the bottom of the form. What are those tabs called?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q262. A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?

- A. Create New module has a broken link
- B. Known intermittent issue with U115
- C. User should be using Chrome instead of Explorer for their browser
- D. User has read role, but not the write role on the Inventory table
- E. User session has timed out

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q263. You are looking at a list of Active incidents. You want to exclude incidents with the state of Resolved. How might you do that?

- A. On the list of records, locate the right-click on the Resolved value, select Exclude. B. Click Funnel icon, click AND, Select Resolved, is Not State click Run
- C. On state column title, right-click, select Filter Out > Resolved
- D. On Search, select State, type not Resolved, press enter
- E. On the list of records, locate and right-click on the Resolved value, select Filter Out

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'You are looking at a list of Active incidents. You want to exclude incidents with the state of Resolved. How might you do that?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q264. Which application is used primarily to load data into ServiceNow?

- A. Import Hub
- B. System Import Sets
- C. Data Import Configuration
- D. Import Management

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which application is used primarily to load data into ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q265. After you create a new table, what is the best practice regarding the navigation pane? Choose 2 answers

- A. Set the filter condition on the Application Menu
- B. Set the font style on both the Application Menu and the Module
- C. Specify which Roles are able ta see the Module
- D. Specify which Roles are able to see the Application Menu
- E. Create Application Menu with the same name as the table label
- F. Create Module with the plural of the table label

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 이 문항은 'After you create a new table, what is the best practice regarding the navigation pane?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q266. What are advantages of using Flow Designer? (Choose three.)

- A. Supports advanced developers
- B. Enables complicated scripting
- C. Reduces technical debt
- D. Less manual scripting
- E. Smooth integration with 3rd party systems

**Answer:** C,D,E

*해설:* 정답은 **C,D,E**입니다. 이 문항은 'What are advantages of using Flow Designer?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q267. Which tables are available by default in a ServiceNow instance? Choose 3 answers

- A. User
- B. Incident
- C. Item
- D. Issue
- E. Project
- F. Task

**Answer:** A,B,F

*해설:* 정답은 **A,B,F**입니다. 이 문항은 'Which tables are available by default in a ServiceNow instance?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q268. When using Flow Designer what is the Flow Execution initiated by?

- A. A trigger
- B. An existing subflow
- C. Allow logic
- D. An execution data pill

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'When using Flow Designer what is the Flow Execution initiated by?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q269. Which set of steps is used to import spreadsheet data into a ServiceNow table?

- A. Load Data, Create Transform Map, Run Transform
- B. Select Import Set, Select Transform Map, Run Transform
- C. Select Data Source, Schedule Transform
- D. Define Data Source, Select Transform Map, Run Transform

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which set of steps is used to import spreadsheet data into a ServiceNow table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q270. A colleague wants to rearrange the columns on their My Work list. Once the user has navigated to the list where should they navigate to select and arrange the columns?

- A. Click Personalize List
- B. Right click on any column header. Context Menu > Configure > List Layout
- C. Click List Context Menu > Personalize List
- D. Click List Content Menu > Configure > List Layout

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'A colleague wants to rearrange the columns on their My Work list. Once the user has navigated to the list where should they navigate to select and arrange the columns?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q271. A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?

- A. Scheduled Reports, a custom snapshot table, and a Trend report
- B. Scheduled Reports and Excel
- C. Scheduled Reports, a custom snapshot table, and a Projection report
- D. Performance Analytics
- E. Key Performance Indicators

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q272. What component of the ServiceNow infrastructure defines every table and field in the system?

- A. Data Atlas
- B. Table Class Manager
- C. Schema
- D. Dictionary
- E. Field Map

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What component of the ServiceNow infrastructure defines every table and field in the system?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q273. A manager is complaining that they can’t get the data they need on a report because the data resides in two different tables. This data is used for many different reports in their department. You have checked to see if dot-walking will meet the requirement, and it is not possible. What else might you try to help this manager?

- A. Create a custom table
- B. Create a Report Template
- C. Create a Database View
- D. Export the tables to a spreadsheet
- E. Create a Report Source

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'A manager is complaining that they can’t get the data they need on a report because the data resides in two different tables. This data is used for many different reports in their department. You have checked to see if dot-walking will meet the requirement, and it is not possible. What else might you try to help this manager?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q274. Which storefront is a single location for accessing pre-built spokes to quickly integrate with third-party services to build and share content?

- A. Integration Spoke Store
- B. ServiceNow Store
- C. Spoke Store
- D. ServiceNow Spoke Store

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which storefront is a single location for accessing pre-built spokes to quickly integrate with third-party services to build and share content?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q275. When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?

- A. Run Transform
- B. Run Import
- C. Import Dataset
- D. Execute Transform
- E. Schedule Transform

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q276. While testing a Catalog Item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob, Smith, but not for any of the other requesters. What could explain the issue?

- A. There is a business rule, excluding Bob.Smith from any approvals. B. Bob Smith does not have a delegate set up on his account, C. The Bob Smith user account, does not have a manager specified. D. The manager does not have a delegate assigned, E. Bob Smith is a VIP. Answer: A

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'While testing a Catalog Item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob, Smith, but not for any of the other requesters. What could explain the issue?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q277. Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationship?

- A. CSDM Schema
- B. Business Service Map
- C. Dependency View
- D. CI Class Map

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationship?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q278. Which low components allow you to specify when a flow should be run?

- A. Trigger and Condition Pill
- B. Scope and Trigger Condition
- C. Trigger and Condition
- D. Trigger Criteria and Clock
- E. Condition and Table

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which low components allow you to specify when a flow should be run?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q279. What section on a task record is used to see the most recent updates made to a record?

- A. Related List
- B. Activity Stream
- C. Audit Log
- D. Timeline

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What section on a task record is used to see the most recent updates made to a record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q280. What types of entities can receive task assignments, in ServiceNow? Choose 2 answers

- A. Groups
- B. Users
- C. Departments
- D. Teams. Answer: A,B

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. 이 문항은 'What types of entities can receive task assignments, in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q281. You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?

- A. Parent-Child Approvers. B. Approval Chains
- C. Flows
- D. Approval Criteria
- E. Approver Delegates

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q282. You are editing a new incident record and would like the Save" Dutton to be located on the Form header. Which action would need to be taken for that button to appear?

- A. All > System Properties > Ul Properties > Turn on the glide.ui.advanced* property
- B. Context Menu > Form Design > add the Save'' button
- C. All > System Properties > Ul Properties > Turn on the Save" button
- D. Context Menu > Form Layout > add the Save* button. Answer: C

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'You are editing a new incident record and would like the Save" Dutton to be located on the Form header. Which action would need to be taken for that button to appear?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q283. Farm a form, what would you click, to modify the order of the fields on the form? Choose 2 answers

- A. Context Menu > Configure > Form Layout
- B. Context Menu > Form > Layout
- C. Right click on header > Configure > Form Design
- D. Context Menu > Configure > Form Designer
- E. Right click on header > Configure > UX Dashboard

**Answer:** A,C

*해설:* 정답은 **A,C**입니다. 이 문항은 'Farm a form, what would you click, to modify the order of the fields on the form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q284. The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?

- A. service_desk
- B. impersonator
- C. admin
- D. incognito

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q285. After finishing your work on High Security Settings, what is a possible way to return to normal admin security levels?

- A. Use System Administration > Normal Security module
- B. Select Normal role
- C. Log out and back in
- D. Select Global Update Set
- E. End impersonation

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'After finishing your work on High Security Settings, what is a possible way to return to normal admin security levels?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q286. When you are viewing a record, like an incident, how can you detect if someone else is also actively working on the Incident? (Choose 2 answers)

- A. A chat bubble automatically launches, so you can collaborate
- B. An icon appears to the left of fields that have been updated by other users
- C. A notification appears asking the new user to collaborate
- D. The Work notes list contains names of the other users
- E. User presence icon shows initials of users actively viewing the record

**Answer:** B,E

*해설:* 정답은 **B,E**입니다. 이 문항은 'When you are viewing a record, like an incident, how can you detect if someone else is also actively working on the Incident?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q287. Groups are stored in what table?

- A. Group [sys_user_group]
- B. Group [sn_sys_user_group]}
- C. User Group [user_groups]
- D. User Groups [sn_user_groups]
- E. Groups [sys_user_groups]

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Groups are stored in what table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q288. A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role What type of rules (s) would you use to implement this requirement?

- A. Dictionary Design
- B. Field Limiter
- C. UI Policy
- D. UI Design
- E. Form Constraint

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role What type of rules (s) would you use to implement this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q289. Access controls are evaluated in this order: *1. Match object against table ACL* 2, Match the object against field ACL Within step 1 above, what order are the table ACLs evaluated?

- A. Specific to general: Table.Field ACL, Parent Table.Field ACL, *.Field ACL
- B. Bottom to top: Table ACL. Table.Field ACL, Parent Table. Field ACL
- C. General to specific: Table ACL, Table.Field ACL, Parent Table, Field ACL
- D. Top to bottom: Wildcard Table ACL, Parent Table ACL, Table ACL
- E. Specific general: Table ACL, Parent Table ACL, Wildcard (*) ACL

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'Access controls are evaluated in this order: *1. Match object against table ACL* 2, Match the object against field ACL Within step 1 above, what order are the table ACLs evaluated?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q290. When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?

- A. Field Matching
- B. Load Data
- C. Select Data Source
- D. Schedule Transform
- E. Create Transform Map

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q291. What tool is used to import data from various data sources, and map that data into ServiceMow tables?

- A. Import Set
- B. Update Set
- C. Data Pack
- D. Transform Set

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What tool is used to import data from various data sources, and map that data into ServiceMow tables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q292. Which field (or fields) is used as a unique key during imports?

- A. Match Fields
- B. Coalesce Fields
- C. Key Fields
- D. Sys IDs

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which field (or fields) is used as a unique key during imports?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q293. What is the definition of a group?

- A. An escalation pod
- B. A department
- C. A collection of users
- D. A collection of subject matter experts
- E. A team of users

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the definition of a group?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q294. Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?

- A. Requests can contain many items; and Items can be any item from the catalog. B. Vendors can sell multiple products; and products can be sold by multiple vendors. C. A Task can trigger many Workflows; and a Workflow can trigger many Tasks
- D. A Configuration Item can belong to multiple Classes; and Classes can contain multiple Configuration

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q295. What access does a user need to be able to import anicies to a knowledge base?

- A. Can contribute
- B. sn_knowledge_contripute
- C. sn_knowledge_import
- D. Can import

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What access does a user need to be able to import anicies to a knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q296. What Service Catalog feature do you use to organize items into logical groups?

- A. Variable sets
- B. Catalog items
- C. Sections
- D. Categories

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What Service Catalog feature do you use to organize items into logical groups?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q297. The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, files, and legend layout?

- A. Format
- B. Layout
- C. Style
- D. Configure

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, files, and legend layout?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q298. A department manager asks an analyst to build some reports. Where do you recommend the analyst start?

- A. Report Dashboard > Create New
- B. Reports > Getting Started
- C. Performance Analytics > Reports
- D. Self-Service > Reports
- E. Reports > Create New

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'A department manager asks an analyst to build some reports. Where do you recommend the analyst start?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q299. How is a user defined in ServiceNow?

- A. user is a record stored in the User Preference [Sys_user_preference] table
- B. A User is a record stored in the Profile [sys_user_profile] table
- C. A user is 2 field in the LOAP integration
- D. A user is a record stored in the User [sys_user] table

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'How is a user defined in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q300. To apply a UI Policy to all views, which field should be set to true in its definition record?

- A. Inherit
- B. Reverse if false
- C. On lowed
- D. Global

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'To apply a UI Policy to all views, which field should be set to true in its definition record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q301. Which testing framework is used to test ServerNew Applications?

- A. Selenium
- B. Test Driven Framework (TDF)
- C. Junit
- D. Automated test Framework (ATF)

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which testing framework is used to test ServerNew Applications?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q302. Which actions would you take to edit the title on an application menu? (Choose 2 answers)

- A. Select Configuration > Applications, then select the application
- B. Select the form for the Application, then right-click Configure > Form Designer
- C. Select the Application name on the Navigator, then select the pencil icon
- D. Select System Definitions > Application Menus, then select the application
- E. Select System Definition > Dictionary > Application

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 이 문항은 'Which actions would you take to edit the title on an application menu?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q303. One related list, which buttons are commonly used for managing the records on the list? Choose 3 answers

- A. Publish
- B. New
- C. Ada
- D. Manage
- E. Edit

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. 이 문항은 'One related list, which buttons are commonly used for managing the records on the list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q304. Which script can run when a record is displayed, inserted, updated, deleted, or when a table is queried?

- A. Business Rule
- B. Client Script
- C. Record Rule
- D. UI Script
- E. Scheduled Job

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which script can run when a record is displayed, inserted, updated, deleted, or when a table is queried?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q305. What is the result of the order in which access controls are evaluated?

- A. Ensures user has access to the fields in a table, before considering their access to the table
- B. Ensures user can get to work as quickly as possible
- C. Ensures user has access to the application, before evaluating access to a module within the application
- D. Ensures user has access to a table, before evaluating access to a field in the table

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is the result of the order in which access controls are evaluated?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q306. Which best describes a field in a SeniceNow table?

- A. A field is a table cell that stores data
- B. A field is a table row
- C. A field is an item that appears in a menu list
- D. A field is a record in a table

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which best describes a field in a SeniceNow table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q307. On what part of the ServiceNow instance, would you find the option to Impersonate User?

- A. Module
- B. Content Frame
- C. Application Navigator
- D. User Menu

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'On what part of the ServiceNow instance, would you find the option to Impersonate User?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q308. Which helps to visualize configuration items and their relationships?

- A. Transform Map
- B. Schema Map
- C. Tables
- D. Flow Design
- E. Dependency View

**Answer:** E

*해설:* 정답은 **E**입니다. 이 문항은 'Which helps to visualize configuration items and their relationships?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q309. Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?

- A. Add the role Log Write [sn_log_write] to the Impersonator Group
- B. Create user update set for impersonation tracking
- C. Activate the glide.sys.log_impersonation prop
- D. From User icon, select Elevate Roles
- E. On the Impersonator role record, right click and select Create Log

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q310. Which allows the creation of a task-based record from Service Catalog?

- A. Record Producers
- B. UI Builder
- C. Assignment Rule
- D. Flow Designer
- E. UI Actions= Answer: A

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which allows the creation of a task-based record from Service Catalog?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q311. In what order are Access Controls evaluated?

- A. Field-level - mast general to most specific: then Row-level - most specific to most general
- B. Table-level - most specific to most general; then Row-level - most specific to most general
- C. Table-level - most specific to most general; then Field-level « most specific to mast general
- D. Field-level - most specific to most general: then Table-level - most specific to most general

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'In what order are Access Controls evaluated?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q312. Which feature ensures data consistency white importing data using import sets and web services?

- A. Client Script
- B. Ul Policy
- C. Data Policy
- D. CSDM
- E. Business Rule

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which feature ensures data consistency white importing data using import sets and web services?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q313. The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?

- A. Request + Response
- B. Save + Update
- C. Write + Read
- D. Submit + Query
- E. Insert + Verify

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q314. What section on a task record would you use to see the most recent update made to a record?

- A. Timeline
- B. Journal
- C. Audit Log
- D. Activity

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What section on a task record would you use to see the most recent update made to a record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q315. Which action enables personalization in a form for the admin role, only?

- A. Navigate to sys_form_properties.list and set the property glide.ui.enable_personalize_form.admin to

**Answer:** glide.ui.enable_personalize_form.admin=true

*해설:* 정답은 **glide.ui.enable_personalize_form.admin=true**입니다. 이 문항은 'Which action enables personalization in a form for the admin role, only?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q316. If you have the Impersonate role, what type of user are you not able to impersonate?

- A. Customer
- B. VIP
- C. System Administrator
- D. Approver
- E. Catalog User

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'If you have the Impersonate role, what type of user are you not able to impersonate?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q317. When using the Data Pill Picker, use which keys to dot-walk (6 fields in other tables?

- A. Arrows
- B. Plus, Minus
- C. Ctrl c, Ctrl
- D. Ctrl <, Ctrl >
- E. Shift F4, Shit FS

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'When using the Data Pill Picker, use which keys to dot-walk (6 fields in other tables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reference 필드는 다른 테이블 레코드를 참조하며 Dot-Walking으로 참조 테이블의 필드까지 조회/조건에 활용할 수 있습니다.

---

### Q318. Here is an example of the criteria set for a knowledge base: *Companies: ACME North America* Department: HR *Groups: ACME Manager* Match All: Yes In this example, what users would have access to this knowledge base?

- A. Members of the ACME manager group, who are also members of HR Department and part of the ACME
- B. Employees of ACME North America, who are members of HR Department or the ACME Manager group
- C. Users which are members of either ACME North America, or HR Department, or ACME Manager Group
- D. Member of the ACME Manager group, and HR department, regardless of geography

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Here is an example of the criteria set for a knowledge base: *Companies: ACME North America* Department: HR *Groups: ACME Manager* Match All: Yes In this example, what users would have access to this knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q319. Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?

- A. incident .* B. incident.all
- C. incident .!
- D. incident.None

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q320. What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)

- A. Group members can choose their tasks from My Groups Work
- B. Groups can assign tasks to users based on on-call schedules
- C. Site support members can pick tasks, based on Location
- D. Groups can assign tasks to users based on skills
- E. Group members can avoid tasks, which are nearing SLA breach
- F. Groups can assign tasks to users based on availability

**Answer:** B,C,D,F

*해설:* 정답은 **B,C,D,F**입니다. 이 문항은 'What are benefits of assigning work tasks to a group, rather than to an individual?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q321. What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?

- A. Scenario Dashboard
- B. CI Use Case Modeler
- C. CMDB Use Case Modeler
- D. Common Service Data Model (CSDM) product view

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q322. Which framework can automatically populate values for the priority and Category field based on the Short description field value?

- A. UI Policy
- B. Assignment Rule
- C. Action
- D. Predictive intelligence
- E. CSDM

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which framework can automatically populate values for the priority and Category field based on the Short description field value?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q323. What is used to determine user access to knowledge bases or a knowledge article?

- A. sn_kb_read, sn_article_read
- B. Privacy Settings
- C. Read Access Flag
- D. User Criteria

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What is used to determine user access to knowledge bases or a knowledge article?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q324. From a related list, what would a user click for personalize the layout of the columns?

- A. Magnifier
- B. Context Menu
- C. Pencil
- D. Gear

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'From a related list, what would a user click for personalize the layout of the columns?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q325. An IT user calls the service desk because his work needs to be completed on ask records. All he can see a Self Service on his homepage when he logs in to the ServiceNow instance. What issue could explain this? Choose 2 answers

- A. His user account failed LDAP authentication
- B. His user account does not Belong to any groups, which contain the ITIL role
- C. His user account was not approved by his manager
- D. His user account does not have ITIL role
- E. His user account Is not logged in properly

**Answer:** B,E

*해설:* 정답은 **B,E**입니다. 이 문항은 'An IT user calls the service desk because his work needs to be completed on ask records. All he can see a Self Service on his homepage when he logs in to the ServiceNow instance. What issue could explain this?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q326. Which statement correctly describes the differences between a Client Script and a Business Rule?

- A. A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded
- B. A Client Script executes on the server and a Business Rule executes on the client
- C. A Client Script executes on the client and a Business Rule executes on the server
- D. A Client Script executes before a record is loaded and a Business Rule executes after a

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which statement correctly describes the differences between a Client Script and a Business Rule?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q327. Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?

- A. Access List
- B. Can Access
- C. Accessible to
- D. Can Read

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q328. When looking at a long list of records, you want to quickly filler, to show only those which have Shon Description containing email How might you do that?

- A. Click List Magnifier to expand column search, on Short Description, type “email, click enter
- B. Click List Magnifier to expand column search, on Short Description, lype *email, click enter
- C. Click List Magnifier to expand column search, on Short Description, type email, click enter
- D. On Search box, select text, type email, click enter

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'When looking at a long list of records, you want to quickly filler, to show only those which have Shon Description containing email How might you do that?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q329. What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)

- A. Browser tab title
- B. Module text color
- C. Preferred browser
- D. Base theme
- E. Font style
- F. Animation style
- G. Header background color

**Answer:** A,B,D,G,H

*해설:* 정답은 **A,B,D,G,H**입니다. 이 문항은 'What attributes can you manage, using System Properties > Basic Configuration UI16?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q330. What framework can be used to manage the tables and Cis associated with a use case?

- A. Common Service Date Model (CSDM) product view
- B. Scename Dashboard
- C. CMDB Use Case Modelar
- D. CI Use Case Modeler

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What framework can be used to manage the tables and Cis associated with a use case?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q331. What access does a user need to be able to import articles to a knowledge base?

- A. sn_knowledge_import
- B. sn_knowledge contribute
- C. Can contribute
- D. Can import

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What access does a user need to be able to import articles to a knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q332. Which type of ServiceNow script runs on the web browser?

- A. Server script
- B. Local script
- C. Database script
- D. Client script

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which type of ServiceNow script runs on the web browser?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q333. What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)

- A. On list Context Menu, select Group By > Category
- B. On the Filter Menu, select Group By > Category
- C. Click Group On icon, select Category
- D. On Navigator Filter, type tablename.group.category and press enter
- E. On the Category column title, click Context menu > Group By Category

**Answer:** A,E

*해설:* 정답은 **A,E**입니다. 이 문항은 'What would you do, on a list, if you wanted to show the records in groups, based on the column category?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q334. The Employee On-boarding team has asked for a way for managers to order computers, monitors, business Cards, and cell phones for new employees. How would you proceed to meet this requirement?

- A. Create Record Producer
- B. Create Order Guide
- C. Create Requested Item
- D. Create On-boarding Bot

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'The Employee On-boarding team has asked for a way for managers to order computers, monitors, business Cards, and cell phones for new employees. How would you proceed to meet this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q335. Which role can manage multiple knowledge bases?

- A. knowledge_base_admin
- B. kb_admin
- C. sn_kb_admin
- D. knowledge_admin

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which role can manage multiple knowledge bases?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q336. Which one of the following describes the primary operations performed against tables in the Service Now platform?

- A. Create, Rate, Update, Delete
- B. Create, Read, Upload, Delete
- C. Create, Read, Write, Delete
- D. Capture, Rate, Write, Develop

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Which one of the following describes the primary operations performed against tables in the Service Now platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q337. The ServiceNow platform supports a wide variety of plus-and-play application. You can choose from the included workflow or build your own workflow. Which of following these workflows are included in the platform?

- A. Employee Workflows
- B. Infrastructure Workflows
- C. Federal Workflows
- D. Manufacturing Workflows
- E. Customer Workflows
- F. IT Workflows

**Answer:** A,E,F

*해설:* 정답은 **A,E,F**입니다. 이 문항은 'The ServiceNow platform supports a wide variety of plus-and-play application. You can choose from the included workflow or build your own workflow. Which of following these workflows are included in the platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q338. Which tables are children of the Task table and come with the base system? Choose 3 answers

- A. Incident
- B. Problem
- C. Change Request
- D. Config
- E. Dictionary
- F. cmdb

**Answer:** A,B,C

*해설:* 정답은 **A,B,C**입니다. 이 문항은 'Which tables are children of the Task table and come with the base system?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q339. When would you use the following steps? *1, Homepage Admin > Pages* 2. Right click on Homepage record * 3. Select Unioad Portal Page

- A. To publish a Homepage to the Portal
- B. To retire a Homepage
- C. To delete a Homepage
- D. o To add a Homepage to an update set

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When would you use the following steps? *1, Homepage Admin > Pages* 2. Right click on Homepage record * 3. Select Unioad Portal Page' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Update Set은 구성 변경사항을 인스턴스 간 이동하는 단위입니다. 기본적으로 데이터 레코드는 포함되지 않으므로 이관 전략을 분리해야 합니다.

---

### Q340. On a list, what does each row show?

- A. A filter
- B. A record
- C. A table
- D. A field

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'On a list, what does each row show?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q341. ServiceNow contains over 25 different report types. What are some of the types? Choose 5 answers

- A. Pie
- B. Speedometer
- C. Odometer
- D. Thermometer
- E. Horizontal Bar
- F. Semi-Donut
- G. Donut

**Answer:** A,B,E,F,G

*해설:* 정답은 **A,B,E,F,G**입니다. 이 문항은 'ServiceNow contains over 25 different report types. What are some of the types?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q342. A Role is defined as what?

- A. A collection of permissions
- B. A set of user access policies
- C. A Persona in a workflow
- D. A set of access control rules

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A Role is defined as what?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q343. While on an Incident record, how would you add a Tag for "Special Handling" to the record?

- A. Click on the More options (.,.) icon, click Add Tag, type Special Handling, press enter
- B. On the Special Handling field, check the box
- C. On the Tag field, select Special Handling from the choice list
- D. Click on the Context menu, select Add Tag, type Special Handling, press enter

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'While on an Incident record, how would you add a Tag for "Special Handling" to the record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q344. While showing a customer their incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? Choose 2 answers

- A. Right click on Priority and select Configure Dictionary
- B. Right click on Priority and select Configure Display Settings
- C. Right click on Priority and select Configure Label
- D. Right click on Priority and select Configure Column

**Answer:** A,C

*해설:* 정답은 **A,C**입니다. 이 문항은 'While showing a customer their incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q345. Which component of a table contains a piece of data for one record?

- A. Factor
- B. Field
- C. Datapoint
- D. Element
- E. Item

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which component of a table contains a piece of data for one record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q346. Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?

- A. Schema Map
- B. Dependency View
- C. Dependency Map
- D. Database View

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q347. What icon do you use to change the boon and color on a Favorite?

- A. Pencil
- B. Star
- C. Clack
- D. Tringle

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What icon do you use to change the boon and color on a Favorite?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q348. What type of table has a name starting with u_or x_?

- A. Custom table
- B. Parent table
- C. Core table
- D. Base table

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What type of table has a name starting with u_or x_?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q349. What policies are applied to all data entered into the platform (i.e., through a record form (UI), Import Sets, or Web Services)?

- A. Data Policies
- B. Data Integrity Policies
- C. Write Policies
- D. Data Submission Policies

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What policies are applied to all data entered into the platform (i.e., through a record form (UI), Import Sets, or Web Services)?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q350. What are the three key tables in an enterprise CMDO? Choose 3 angwers

- A. sn_cmdt_bak
- B. Sh_emdb_ci
- C. cmap_ret_ci
- D. cmdb_bak
- E. cmdb_ci
- F. sh_eomdb
- G. cmap

**Answer:** C,E,G

*해설:* 정답은 **C,E,G**입니다. 이 문항은 'What are the three key tables in an enterprise CMDO? Choose 3 angwers' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q351. Which SericeNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which Cis supporing that service have active issues?

- A. AL Service Dashboard
- B. Cl Health Dashboard
- C. Dependency View
- D. Event Management Homepage

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which SericeNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which Cis supporing that service have active issues?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q352. You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?

- A. Create Record Producer
- B. Create Catalog Item
- C. Create Order Guide
- D. Create Content Item

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q353. Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?

- A. Agent Assist
- B. Virtual Agent
- C. Now Messenger
- D. Connect Agent

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q354. What are the steps for applying an update set to an instance?

- A. Retrieve, Preview, Commit
- B. Specify, Transform, Apply
- C. Retrieve, Assess, Apply
- D. Get, Test, Push
- E. Pull, Review, Push

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What are the steps for applying an update set to an instance?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q355. ‘Your customer has a Human Resources knowledge base, which is only accessible to members of the Human Resources department. A new procedure regarding employee quarterly reviews needs to be published to the quarterly review category of the HR knowledge base, but should only be visible for HR managers. How would you meet this requirement?

- A. On the Knowledge Base, add User Criteria with a Manager Can Read script to the Can Read list, publish
- B. Add User Criteria for HR Manager Group on the Category’s Can Read list
- C. On the Knowledge Article, add an Access Control for HR Manager Group on the Can Read list, then

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 '‘Your customer has a Human Resources knowledge base, which is only accessible to members of the Human Resources department. A new procedure regarding employee quarterly reviews needs to be published to the quarterly review category of the HR knowledge base, but should only be visible for HR managers. How would you meet this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q356. How would you describe the relationship between the incident and Task table?

- A. Incident table has a many to many relationships with the Task table. B. Incident table has a one to much relationship with the Task table. C. Incident table is extended from task table. D. incident table is related to the Task table via the INC number
- E. incident table is a database view of the Task table

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'How would you describe the relationship between the incident and Task table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q357. What process allows users to create, categorize, review approve and browse important information in a centralized location that is shared oy the entire organization?

- A. Self Service Management
- B. Knowledge Management
- C. Knowledge-Centered Management
- D. Information Portal Management
- E. Business Information Management

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What process allows users to create, categorize, review approve and browse important information in a centralized location that is shared oy the entire organization?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q358. You have an existing customer, who is using workflows for their catalog items. Their existing purchasing policy is to require approval for any request that totals over 31000. However, management wants to change the approval threshold to 31500. Which workflow would you update to make this change?

- A. Services Approval Processing
- B. 6 Services Catalog Item Request
- C. Service Catalog Request
- D. Purchasing Process Flow

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'You have an existing customer, who is using workflows for their catalog items. Their existing purchasing policy is to require approval for any request that totals over 31000. However, management wants to change the approval threshold to 31500. Which workflow would you update to make this change?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q359. What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?

- A. Update sets
- B. Transform maps
- C. System dictionaries
- D. Import sets

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q360. What feature do you use to specify which users are able to access a Service Catalog Item?

- A. Can Read Role
- B. Catalog User Role
- C. Can Order Tab
- D. User Criteria

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What feature do you use to specify which users are able to access a Service Catalog Item?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q361. Security rules are defined to restrict the permission of users from viewing and interacting with data. What are these security rules called?

- A. Role Assignment Rules
- B. CRUD Rules
- C. Scripted User Rules
- D. Access Control Rules
- E. User Authentication Rules

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Security rules are defined to restrict the permission of users from viewing and interacting with data. What are these security rules called?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q362. A subject matter expert routinely receives tasks which have been worked by first level support, before receiving the assignment What could you suggest. to make it easier for the expert to read only the work notes in the Activity log?

- A. Click Context menu > Work Notes View
- B. Click Personalize icon and select Activity Stream
- C. Right click form header > Form Layout > Add Work Notes Section
- D. Click Funnel icon and select only work notes
- E. Click Context menu > History

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'A subject matter expert routinely receives tasks which have been worked by first level support, before receiving the assignment What could you suggest. to make it easier for the expert to read only the work notes in the Activity log?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q363. Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board Interface?

- A. Flow Designer
- B. Process Automation Designer
- C. Process Workflow Designer
- D. Workflow Editor

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board Interface?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q364. What are advantages of using spokes for integrations? Choose 3 answers

- A. Reduces the need for code
- B. Features scale and control mechanisms
- C. Free spokes are available in the ServiceNow Store
- D. Ensures discoverability and reuse
- E. Automated event management

**Answer:** A,D,E

*해설:* 정답은 **A,D,E**입니다. 이 문항은 'What are advantages of using spokes for integrations?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q365. What module enables an administrator to define destinations for imported data on any ServiceNow table?

- A. Field Transform
- B. Transform Map
- C. Schema Map
- D. Import Map

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What module enables an administrator to define destinations for imported data on any ServiceNow table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q366. Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)

- A. One Approval can have many Requests
- B. One Request can have many Requested Items
- C. One Requested Item can have many Approvals
- D. One Requested Item can have many Catalog Tasks
- E. One Cart can have many Requests

**Answer:** B,D,E

*해설:* 정답은 **B,D,E**입니다. 이 문항은 'Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q367. What section on the notes tab, shows the history of the work documented on the record?

- A. Journal
- B. Activity
- C. Diary
- D. Audit Log
- E. Timeline

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What section on the notes tab, shows the history of the work documented on the record?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q368. What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?

- A. Notifications
- B. Alerts
- C. Texts
- D. Events
- E. Emails

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q369. What is the name of the string that display filter criteria?

- A. Topic
- B. Choice
- C. Breadcrump
- D. Menu

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the name of the string that display filter criteria?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q370. A customer requests the following data quality measures be added: *1. Incident numbers should be read-only on all lists and forms, for all users.* 2. Short Description field should be mandatory, on all records, across all applications, on insert. Which type of policy would you use to meet this requirement?

- A. Data policy
- B. Dictionary Design Policy
- C. Data Quality Policy
- D. Field Criteria Policy

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'A customer requests the following data quality measures be added: *1. Incident numbers should be read-only on all lists and forms, for all users.* 2. Short Description field should be mandatory, on all records, across all applications, on insert. Which type of policy would you use to meet this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q371. An administrator creates "customer_table_admin" and "customer_table_user" roles for the newly created "Customer Table". Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?

- A. customer.all
- B. customer .* C. customer.field
- D. customer.none

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'An administrator creates "customer_table_admin" and "customer_table_user" roles for the newly created "Customer Table". Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q372. What are the components that make up a filer condition? Choose 3 answers

- A. Column
- B. Match Criteria
- C. Field
- D. Value
- E. Operator

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What are the components that make up a filer condition?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q373. Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role and the user_critena_admm role plus has permissions to create Items and Services?

- A. item Admin [sn_item_admin]
- B. Sys Admin [sys_admln]
- C. Catalog Admin [catalog_admin]
- D. Catalog Auinor (sn_cataiog_write]

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role and the user_critena_admm role plus has permissions to create Items and Services?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q374. What are the benefits of building flows using Flow Designer? Choose 3 answers

- A. Supports easy integration with 3rd party systems
- B. Provides IDE for complicated scripting
- C. Provides natural-langauge descriptions of flow logic
- D. Supports No-Code application development
- E. Automatically populates SLA records
- F. Provides built-in libraries /API for complex coding

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. 이 문항은 'What are the benefits of building flows using Flow Designer?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q375. As administrator, what must you do to access feature of High Security Settings?

- A. Select Elevate Roles
- B. Add security_admin role to your user account
- C. Impersonate Security Admin
- D. Use System Administrator < Elevate Roles module

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'As administrator, what must you do to access feature of High Security Settings?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Impersonation(사용자 가장)은 관리자가 다른 사용자 권한/화면을 그대로 재현해 문제를 재현하고 접근 권한을 점검하는 기능입니다.

---

### Q376. What are examples of UI Actions relating to forms? Choose 3 answers

- A. Form Context Menu
- B. Form View
- C. Form Buttons
- D. Form Links. E. Form Columns

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. 이 문항은 'What are examples of UI Actions relating to forms?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q377. The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against me data?

- A. Style
- B. Format
- C. Data
- D. Configure
- E. Group by

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against me data?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q378. When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?

- A. Client
- B. Server
- C. Browser
- D. Network

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q379. A customer wants to be able to identify and track components of their infrastructure that support their ecommerce service. What ServiceNow products could support this requirement? Choose 3 answers

- A. Performance Analytics
- B. Configuration Management (CMDB)
- C. Financial Management
- D. Discovery
- E. Service Mapping

**Answer:** B,D,E

*해설:* 정답은 **B,D,E**입니다. 이 문항은 'A customer wants to be able to identify and track components of their infrastructure that support their ecommerce service. What ServiceNow products could support this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q380. On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?

- A. Can Read
- B. Can Write
- C. Can Contribute
- D. Can Author
- E. Cannot Author

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q381. What is the best practice related to using the Default Update Set for moving customizations between instances?

- A. Merge Default update sets before moving between instances
- B. Submit Default update set to application repository
- C. You should not use the Default Update sets for moving between instances
- D. Keep Default update set to maximum of 20 records, for troubleshooting purposes

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What is the best practice related to using the Default Update Set for moving customizations between instances?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Update Set은 구성 변경사항을 인스턴스 간 이동하는 단위입니다. 기본적으로 데이터 레코드는 포함되지 않으므로 이관 전략을 분리해야 합니다.

---

### Q382. Which type of scripts run in the browser?

- A. Policies and Client Scripts
- B. Access Contral Scripts
- C. script Include Scripts
- D. Business Rule Scripts

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'Which type of scripts run in the browser?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q383. How would you distinguish between a Base Class table and a Parent Class table?

- A. Base Class tables always have tables extended from them, Parent tables do not have tables extended

**Answer:** Base Class는 루트 테이블이고, Parent Class는 하위 테이블을 갖는 상위 테이블입니다.

*해설:* 정답은 **Base Class는 루트 테이블이고, Parent Class는 하위 테이블을 갖는 상위 테이블입니다.**입니다. 이 문항은 'How would you distinguish between a Base Class table and a Parent Class table?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q384. On the Cl Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?

- A. Service Tracer
- B. Automapping Utility
- C. Relationships
- D. Transform Map

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'On the Cl Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q385. How would you define an Access Control, to allow a user with iti role to have permission to create incident records?

- A. Name: incident”; Permission: write; Role: itil
- B. Name: incident Any, Operation: write, Permission: itil
- C. Name: incident.*; Operation: write; Permission: itil
- D. Name: incident None, Permission: create: Role: itil
- E. Name: incident. None; Operation: create; Role: itil

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'How would you define an Access Control, to allow a user with iti role to have permission to create incident records?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q386. What options can you see, when you fight click on a Cl, from the Cl dependency view map? Choose 3 answers

- A. View Affected Cis
- B. View Related Tasks
- C. View Recent Outages
- D. View Cases
- E. View Knowledge

**Answer:** A,B,C

*해설:* 정답은 **A,B,C**입니다. 이 문항은 'What options can you see, when you fight click on a Cl, from the Cl dependency view map?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q387. What icon do you use to change the icon and color on a Favorite’?

- A. Star
- B. Triangle
- C. Pencil
- D. Clock

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What icon do you use to change the icon and color on a Favorite’?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q388. You have been asked to configure a form so an employee could a tablet and select the standard accessary options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? Choose 3 answers

- A. Create Catalog item for the tablet, and on the form, add a check box variable for each accessary option. B. Create Catalog item for the tablet, and add a variable set to the form, for the accessary options. C. Create one Catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen

**Answer:** A,B,C

*해설:* 정답은 **A,B,C**입니다. 이 문항은 'You have been asked to configure a form so an employee could a tablet and select the standard accessary options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q389. Which feature helps to automatically allocate a critical, high priority, service request to the appropriate assignment group or team member?

- A. User Policy
- B. UI policy
- C. Predictive Intelligence
- D. Assignment Rule

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'Which feature helps to automatically allocate a critical, high priority, service request to the appropriate assignment group or team member?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q390. A customer wants to use a client script to validate things on a form m order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?

- A. onSubmission()
- B. onSubmit()
- C. onLoad
- D. onUpdate()

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'A customer wants to use a client script to validate things on a form m order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Client Script는 브라우저에서 실행되어 폼 입력 검증, 동적 필드 제어 등 사용자 인터랙션을 담당합니다.

---

### Q391. What type of field has a drop down list, from which you can pick from pre-defined options?

- A. Choice
- B. Picker
- C. Drop down
- D. Option

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What type of field has a drop down list, from which you can pick from pre-defined options?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q392. What are the main components of the Form Design interface? (Choose three.)

- A. Field Layout
- B. Page Header
- C. Field Navigator
- D. Field Picker
- E. Form Layout

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. 이 문항은 'What are the main components of the Form Design interface?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q393. Many actions are included with flow designer, what are some frequently used core actions? Choose 4 answers. A. Wait for Condition

- B. Ask for Approval
- C. Create Record
- D. Wait for Match
- E. Look for Update
- F. Look Up Record

**Answer:** B,C,D,F

*해설:* 정답은 **B,C,D,F**입니다. 이 문항은 'Many actions are included with flow designer, what are some frequently used core actions? . A. Wait for Condition' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Flow Designer는 트리거-조건-액션 기반의 저코드 자동화 도구입니다. Data Pill로 이전 단계의 데이터를 다음 단계에 전달합니다.

---

### Q394. What are the three key tables in an enterprise CMDB? (Choose three.)

- A. cmdb
- B. sn_cmdb_bak
- C. cmdb_rel_ci
- D. sn_cmdb
- E. cmdb_bak
- F. cmdb_ci
- G. sn_cmdb_ci

**Answer:** A,C,F

*해설:* 정답은 **A,C,F**입니다. 이 문항은 'What are the three key tables in an enterprise CMDB?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q395. For your implementation, the following tables. are extended fram each ofher: *Incident table is extended from Task table.* Super Incident table is extended from Incident table, In this situation, which table(s) are P arent, Child and Base tables? Choose 5 answers

- A. Incident table is a Base table
- B. Incident table is. a Parent table
- C. Incident table is a Child table
- D. Super Incident table is a Child table
- E. Super Incident table is a Parent table
- F. Super Incident table is a Base table
- G. Task table is a Base table

**Answer:** B,C,D,G,H

*해설:* 정답은 **B,C,D,G,H**입니다. 이 문항은 'For your implementation, the following tables. are extended fram each ofher: *Incident table is extended from Task table.* Super Incident table is extended from Incident table, In this situation, which table(s) are P arent, Child and Base tables?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q396. What instance resource allows you to access guided tours, information about actions, and instructions an how to use inputs and outputs in your flaw?

- A. Community
- B. Help Panel (question mark icon)
- C. Docs
- D. Wiki

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What instance resource allows you to access guided tours, information about actions, and instructions an how to use inputs and outputs in your flaw?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q397. An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? Choose 2 answers

- A. Their user account failed LDAP authentication
- B. Their user account is not logged in properly
- C. Their user account was not approved by their manager
- D. Their user account does not have itil role
- E. Their user account does not belong to any groups, which contain the itil role

**Answer:** A,C

*해설:* 정답은 **A,C**입니다. 이 문항은 'An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q398. When importing data, what happens to imported rows, if no coalesce field is specified?

- A. All rows are rejected from the import, as coalesce field is required. B. All rows are treated as new records. No existing records are updated. C. Duplicate rows are rejected from the import. D. All rows are treated as new records, but errors will be flagged in the import log. Answer: D

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'When importing data, what happens to imported rows, if no coalesce field is specified?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---

### Q399. A new employee joins the IT deployment and needs to perform work assigned to Network and Hardware groups. How would you set up their access? Choose 3 answers

- A. Add User Account to itll group
- B. Add User Account to ACL
- C. Add User Account to network group
- D. Add User Account to IT Knowledgebase
- E. Create User Account
- F. Add User Account to Hardware group

**Answer:** B,C,F

*해설:* 정답은 **B,C,F**입니다. 이 문항은 'A new employee joins the IT deployment and needs to perform work assigned to Network and Hardware groups. How would you set up their access?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q400. Which path would you take to access the table configuration page from a form?

- A. The Form Context menu > View > Table
- B. The Form Context menu > Configure > Table
- C. The Form Context menu > Configure > Dictionary
- D. The Form Context menu > View > Show Table

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'Which path would you take to access the table configuration page from a form?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q401. What type of query allows you to filter list data using normal words, instead of the condition builder?

- A. Natural Language Query
- B. Alexa Query
- C. Machine Learning Query
- D. Predictive Intelligence Query
- E. Auto-suggest Query

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What type of query allows you to filter list data using normal words, instead of the condition builder?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q402. What action will allow you to personalize layouts of columns in a list?

- A. Click Gear icon > Personalize window options > Select the appropriate columns
- B. Select the column to be personalized > Click Edit icon (Penal) > Choose me options to personage
- C. Context Menu > View > Personalize
- D. Select the column to be personalized and right at the header > Choose the options to personalize

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'What action will allow you to personalize layouts of columns in a list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q403. What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?

- A. Analytics Reports
- B. Performance Analytics
- C. Scheduled Reports
- D. Reporting

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q404. A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role. What type of rules (s) would you use to implement this requirement?

- A. Dictionary Design
- B. Field Limiter
- C. UI Policy
- D. UI Design
- E. Form Constraint

**Answer:** C,E

*해설:* 정답은 **C,E**입니다. 이 문항은 'A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role. What type of rules (s) would you use to implement this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q405. What do you click when you have made modification to your report, and your want to see the results without saving?

- A. Execute
- B. Try ir
- C. Run
- D. Test
- E. Preview

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'What do you click when you have made modification to your report, and your want to see the results without saving?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q406. On a Business Rule, the When salting determines at what point the rule executes. What are the options for specifying that timing?

- A. Insert, Update, Delete. Query
- B. 4G} Before, After, Async, Display
- C. Prior to, Synchronous, on Update
- D. Before, Synchronous, Scheduled Job, View

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'On a Business Rule, the When salting determines at what point the rule executes. What are the options for specifying that timing?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q407. On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?

- A. Attribute
- B. Label
- C. Field
- D. Column
- E. Data Element

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q408. The customer has asked that your change the default layout of the task list. *Number* Task Type *Parent* Short Description *Assignment Group* Assignment * Updated After navigation to the list, where would you click, to meet this requirement?

- A. Right click on any column header, Context menu > Configure > List Layout
- B. Right click List Gear icon > Configure > Columns
- C. Click List Context Menu >Personalize List
- D. Click List Context Menu > Configure Columns

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'The customer has asked that your change the default layout of the task list. *Number* Task Type *Parent* Short Description *Assignment Group* Assignment * Updated After navigation to the list, where would you click, to meet this requirement?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q409. On a filter condition, which component is always a choice list?

- A. Operator
- B. Filter Criteria
- C. Operation
- D. Match Criteria

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'On a filter condition, which component is always a choice list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q410. NO.19 UI Action can prompt that an Incident has been successfully submitted

- (A). True
- (B). False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.19 UI Action can prompt that an Incident has been successfully submitted.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Action은 버튼, 링크, 컨텍스트 메뉴처럼 사용자가 실행하는 동작을 정의합니다.

---

### Q411. NO.22 Business Rules are used to enforce mandatory data on a form

- (A). True
- (B). False

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'NO.22 Business Rules are used to enforce mandatory data on a form.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q412. NO.26 Knowledge articles within a knowledge base are grouped by category

- (A). True
- (B). False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.26 Knowledge articles within a knowledge base are grouped by category.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q413. NO.38 What is the name of the table relationship, where two or more tables are related in a bi_x0002_directional relationship, so that the related records are visible from both tables in a related list?

- (A). Database View
- (B). Many to Many
- (C). One to Many
- (D). Extended

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'NO.38 What is the name of the table relationship, where two or more tables are related in a bi_x0002_directional relationship, so that the related records are visible from both tables in a related list?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q414. NO.44 _______________ is a computer program running as a service; a physical computer dedicated to running one or more services, or a system running a database

**Answer:** Server

*해설:* 정답은 **Server**입니다. 이 문항은 'NO.44 _______________ is a computer program running as a service; a physical computer dedicated to running one or more services, or a system running a database.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q415. NO.54 What Is the purpose of the Filter navigator In the Application Navigator?

- (A). Filter applications in order of use
- (B). Quickly navigate to applications and modules
- (C). Collapse and expand applications
- (D). List applications In order of Top Requests

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'NO.54 What Is the purpose of the Filter navigator In the Application Navigator?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q416. NO.67 When creating a global custom table named "abc", what is the table name that is automatically assigned by the platform?

- (A). snc_abc
- (B). abc
- (C). u_abc
- (D). sys_abc

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'NO.67 When creating a global custom table named "abc", what is the table name that is automatically assigned by the platform?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q417. NO.77 What are the three components of a filter condition? (choose three)

- (A). Table
- (B). Value
- (C). Field
- (D). Operator

**Answer:** BCD

*해설:* 정답은 **BCD**입니다. 이 문항은 'NO.77 What are the three components of a filter condition?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q418

- (A). The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.
- (B). The manager does not have the itil role.
- (C). The manager is not a member of the Service Desk group.
- (D). The manager is not a member of the Network and Hardware groups.
- (E). The Assignment Group manager field is empty.

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 '- (A). The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q419. NO.94 As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?

- (A). Knowledge
- (B). ServiceNow Wiki
- (C). Knowledge Now
- (D). SharePoint
- (E). Stack Overflow

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.94 As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q420. NO.98 Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments

- (A). True
- (B). False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.98 Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q421. NO.113 Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?

- (A). Create Record Producer and use the Available For list to specify First Line [sn_first_line] role
- (B). Create Catalog Item and use the Not Available list to specify the Manager Group
- (C). Create Catalog Item and use the Available For list to specify ITIL [itil] role
- (D). Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'NO.113 Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Role은 권한 묶음입니다. 사용자에게 직접 주기보다 그룹에 역할을 부여하고 사용자를 그룹에 넣는 방식이 운영과 감사에 유리합니다.

---

### Q422. NO.126 Which one of the following statements describes the purpose of a Service Catalog workflow?

- (A). A Service Catalog workflow generates three basic components: item variable types, tasks, and approvals
- (B). Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment processes
- (C). A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to defined users or groups
- (D). A Service Catalog workflow generates three basic components: item variable types, tasks, and notifications

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'NO.126 Which one of the following statements describes the purpose of a Service Catalog workflow?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q423. NO.133 A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of "INC" to the company standard IN." What are the next steps to be taken''

- (A). Go to the Number Maintenance application and change the prefix to "IN" for incident
- (B). Create a Business Rule that modifies the prefix before the Insert operation
- (C). The prefix of an incident cannot be changed because it is a built-in feature
- (D). Submit a Change Request to ServiceNow Technical Support

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.133 A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of "INC" to the company standard IN." What are the next steps to be taken''' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Business Rule은 서버에서 레코드 저장 전/후 로직을 수행해 데이터 무결성과 자동 처리를 담당합니다.

---

### Q424. NO.136 What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles

- (A). User conditions
- (B). User info
- (C). User Criteria
- (D). User permissions

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'NO.136 What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q425. NO.144 What is a formatter? Select one of the following

- (A). A formatter allows you to configure applications on your instance
- (B). A formatter is a form element used to display information that is not a field in the record
- (C). A formatter allows you to populate fields automatically
- (D). A formatter is a set of conditions applied to a table to help find and work with data

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'NO.144 What is a formatter? Select one of the following.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q426. NO.148 What field contains a record's 32-character, unique identifier?

- (A). sn_rec_id
- (B). rec_id
- (C). u_id
- (D). sys_id
- (E). sn_gu_id
- (F). sn_sys_id
- (G). id

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'NO.148 What field contains a record's 32-character, unique identifier?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q427. NO.153 database live at the Data Center

- (A). True
- (B). False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.153 database live at the Data Center.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q428. NO.162 What would NOT appear in the Application Navigator if "service" is typed into the filter field?

- (A). Configuration > Business Services
- (B). Self-Service > Knowledge
- (C). Service Portal > Widgets
- (D). Incident > Assigned to me

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문항은 'NO.162 What would NOT appear in the Application Navigator if "service" is typed into the filter field?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Knowledge는 조직 지식을 문서화해 재사용하는 기능입니다. User Criteria로 읽기/작성 권한을 제어하고 워크플로로 게시 수명주기를 관리합니다.

---

### Q429. NO.165 A REQ number in the Service Catalog represents

- (A). the order number.
- (B). the stage.
- (C). the task to complete.
- (D). the individual item in the order.

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.165 A REQ number in the Service Catalog represents...' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Service Catalog는 사용자가 서비스/품목을 요청하는 창구입니다. Catalog Item은 개별 항목, Record Producer는 특정 테이블 레코드 생성, Order Guide는 여러 항목을 한 번에 주문합니다.

---

### Q430. NO.168 What are the two aspects to LDAP Integration? (2)

- (A). Data Population
- (B). Data formatting
- (C). Authorization
- (D). Authentication

**Answer:** AD

*해설:* 정답은 **AD**입니다. 이 문항은 'NO.168 What are the two aspects to LDAP Integration? (2)' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 인증(Authentication)은 본인 확인, 인가(Authorization)는 권한 결정입니다. LDAP/SSO는 대표적인 엔터프라이즈 인증 통합 방식입니다.

---

### Q431. NO.177 Which are states that you can make a field on a form using UI Policy? (choose three)

- (A). read-only
- (B). write-only
- (C). Necessary
- (D). Mandatory
- (E). Empty
- (F). Hidden

**Answer:** ADF

*해설:* 정답은 **ADF**입니다. 이 문항은 'NO.177 Which are states that you can make a field on a form using UI Policy?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* UI Policy는 폼 화면의 필드 상태(필수/읽기 전용/숨김)를 코드 없이 제어합니다.

---

### Q432. NO.201 Configuration will not affect what others see on their forms

- (A). True
- (B). False

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항은 'NO.201 Configuration will not affect what others see on their forms.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q433. NO.206 Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?

- (A). Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog.
- (B). Create one Catalog Item for Event Room Set Up; then publish to both Catalogs.
- (C). Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities.
- (D). Create one Catalog Item for Event Room Set Up; then use ACLs to control access.

**Answer:** b

*해설:* 정답은 **b**입니다. 이 문항은 'NO.206 Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* ACL(Access Control)은 객체(테이블/필드)와 작업(CRUD)에 대해 역할, 조건, 스크립트를 평가해 접근을 통제합니다.

---

### Q434. NO.210 What are the main UI component(s) of the ServiceNow Platform? (3)

**Answer:** BDF

*해설:* 정답은 **BDF**입니다. 이 문항은 'NO.210 What are the main UI component(s) of the ServiceNow Platform? (3)' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 이 문항은 ServiceNow의 핵심 관리 개념(데이터 구조, 권한, 자동화, 카탈로그, 리포팅) 중 하나를 점검합니다. 정답 암기보다 기능의 목적과 사용 위치를 함께 이해하는 것이 중요합니다.

---

### Q435. NO.234 Data Policy can enforce mandatory data on import

- (A). True
- (B). False

**Answer:** A

*해설:* 정답은 **A**입니다. 이 문항은 'NO.234 Data Policy can enforce mandatory data on import.' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Import Set은 외부 데이터를 임시 적재하고 Transform Map으로 대상 테이블에 변환/적재합니다. Coalesce는 기존 레코드 매칭 키입니다.

---

### Q436. NO.238 Tables are made up of which of the following? (choose two)

- (A). records
- (B). lists
- (C). forms.
- (D). fields

**Answer:** AD

*해설:* 정답은 **AD**입니다. 이 문항은 'NO.238 Tables are made up of which of the following?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* 테이블은 레코드(행)와 필드(열)로 구성되며 Dictionary는 필드 정의를 관리합니다. sys_id는 레코드의 고유 32자 식별자입니다.

---

### Q437. NO.239 There are _____ common types of Interfaces (Numeric Value) 6: There are six common types of interfaces

- (A). Homepage: Consists of navigational elements, functional controls, and platform information.
- (B). List: Display records from a data table, as well as allow you to edit the record information using the List Editor functionally.
- (C). Form: Data is entered into ServiceNow through forms
- (D). Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a single screen.
- (E). Maps: Display ServiceNow data graphically on a Google map
- (F). Timelines: Used to track tasks or projects

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문항은 'NO.239 There are _____ common types of Interfaces (Numeric Value) 6: There are six common types of interfaces' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* Reporting은 현재 데이터 조회 중심, Performance Analytics는 시계열 스냅샷과 추세/예측 분석 중심입니다.

---

### Q438. NO.243 Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)

- A. Discovery
- B. IntegrationHub ETL
- C. Finder
- D. CMDB Plug-in
- E. CMDB Integration Dashboard

**Answer:** AB

*해설:* 정답은 **AB**입니다. 이 문항은 'NO.243 Which ServiceNow products can be used to discover and populate the CMDB?' 이해 여부를 확인합니다. 서비스나우 공식 문서의 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)과 CSA 출제 범위를 기준으로 검토했습니다.

*개념 설명:* CMDB는 서비스 제공에 필요한 구성항목(CI)과 관계를 저장합니다. 영향도 분석, 장애 추적, 변경 관리의 핵심 데이터 원천입니다.

---
