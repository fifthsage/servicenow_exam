# ServiceNow CSA Exam Questions (Revised, Full)

> 참고: 이 문서는 공식 문서와 핵심 개념(Platform Administration, Service Catalog, Flow Designer, Security/ACL, Knowledge, Import Sets)을 CSA 출제 범위 기준으로 검토했습니다.

## Questions (Range: Q1-Q438)

### Q1. What is the function of user impersonation?

- **A. Testing and visibility**
- B. Activate verbose logging
- C. View custom perspectives
- D. Unlock Application master list

**Answer:** A

*해설:* 정답은 **A**입니다. 사용자 impersonation은 다른 사용자 입장에서 화면과 권한 결과를 재현해 보는 기능으로, 테스트와 가시성 확인에 사용합니다.

---

### Q2. Which group of permissions is used to control Application and Module access?

- A. Access Control Rules
- B. UI Policies
- **C. Roles**
- D. Assignment Rules

**Answer:** C

*해설:* 정답은 **C**입니다. 애플리케이션과 모듈 접근은 `Role`로 제어합니다. ACL은 주로 테이블과 필드 데이터 접근 제어에 더 가깝습니다.

---

### Q3. Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)

- **A. onSubmit**
- B. onUpdate
- **C. onCellEdit**
- **D. onLoad**
- E. onEdit
- **F. onChange**
- G. onSave

**Answer:** A,C,D,F

*해설:* 정답은 **A,C,D,F**입니다. ServiceNow가 지원하는 대표 Client Script 유형은 `onLoad`, `onChange`, `onSubmit`, `onCellEdit`입니다.

---

### Q4. Which one of the following modules can be used to view field settings for a table?

- **A. Tables & Columns**
- B. Access Control
- C. Columns and Fields
- D. Tables and Fields

**Answer:** A

*해설:* 정답은 **A**입니다. 테이블의 필드 설정을 보려면 `Tables & Columns` 모듈을 사용합니다.

---

### Q5. What are the 5 provided Roles by ServiceNow?

- **A. System Administrator: The admin role provides access to all platform features, applications, functions and data.**
- B. Specialized Administrator: Specialized administrator roles manage specific functions or applications, such as Assignment Rules, Knowledge base, reports, or web services
- **C. Fulfiller: Users with the ITIL role may fulfill ITIL activities associated with the ITIL workflow, including Incident and Change management.**
- D. Approver: Users with the Approver user role can perform all requester actions and may view or modify approval records directed to the approver
- **E. Requester: Also known as Employee Self Service (ESS) users, these users have no roles but can submit and manage their own requests, access public pages, etc.**

**Answer:** A,C,E

*해설:* 정답은 **A,C,E**입니다. 이 문항은 기본 사용자 역할 분류 중 `System Administrator`, `Fulfiller`, `Requester`를 고르는 문제입니다.

---

### Q6. A Service Catalog may include which of the following components?

- A. Order Guides, Exchange Rates, Calendars
- B. Order Guides, Catalog Items, and Interceptors
- C. Catalog Items, Asset Contracts, Task Surveys
- **D. Record Producers, Order Guides, and Catalog Items**

**Answer:** D

*해설:* 정답은 **D**입니다. Service Catalog의 대표 구성 요소는 `Catalog Item`, `Record Producer`, `Order Guide`입니다.

---

### Q7. UI Policy can make fields read-only, mandatory, or hidden

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. UI Policy는 필드를 `read-only`, `mandatory`, `hidden` 상태로 바꿀 수 있습니다.

---

### Q8. ServiceNow is a single-instance, multiple tenant architecture?

- A. True
- **B. False**

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문서 기준으로는 해당 진술을 거짓으로 두고 있습니다.

---

### Q9. Which statement is true about business rules?

- A. A business rule must run before a database action occurs
- **B. A business rule can be a piece of Javascript**
- C. A business rule must not run before a database action occurs
- D. A business rule monitors fields on a form

**Answer:** B

*해설:* 정답은 **B**입니다. Business Rule은 서버 측에서 실행되는 JavaScript 로직입니다.

---

### Q10. What are the two aspects to LDAP Integration?

- **A. Data Population**
- B. Data formatting
- C. Authorization
- **D. Authentication**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. LDAP Integration의 핵심 두 축은 `Authentication`과 `Data Population`입니다.

---

### Q11. What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles?

- A. User conditions
- B. User info
- **C. User Criteria**
- D. User permissions

**Answer:** C

*해설:* 정답은 **C**입니다. Knowledge 문서의 생성, 읽기, 수정, retire 권한을 판단하는 사용자 조건 기준은 `User Criteria`입니다.

---

### Q12. Reports can be created from which different places in the platform? (Choose two.)

- **A. List column heading**
- B. Metrics module
- C. Statistics module
- **D. View / Run module**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 보고서는 리스트 컬럼 헤더에서도 만들 수 있고 `View / Run` 모듈에서도 만들 수 있습니다.

---

### Q13. Which of the following is used to initiate a flow?

- **A. A Trigger**
- B. Core Action
- C. A spoke
- D. An Event

**Answer:** A

*해설:* 정답은 **A**입니다. Flow를 시작시키는 요소는 `Trigger`입니다.

---

### Q14. A group is stored in which table?

- A. Group[user_group]
- B. Group[sys_user]
- **C. Group[sys_user_group]**
- D. Group[sys_user_group_profile]

**Answer:** C

*해설:* 정답은 **C**입니다. 그룹 레코드는 `sys_user_group` 테이블에 저장됩니다.

---

### Q15. Which technique is used to get information from a series of referenced fields from different tables?

- A. Table-Walking
- B. Sys_ID Pulling
- **C. Dot-Walking**
- D. Record-Hopping

**Answer:** C

*해설:* 정답은 **C**입니다. 여러 참조 필드를 따라 다른 테이블 값까지 가져오는 기법은 `Dot-Walking`입니다.

---

### Q16. Configuration will not affect what others see on their forms.

- A. True
- **B. False**

**Answer:** B

*해설:* 정답은 **B**입니다. 일반적인 configure 변경은 개인 설정이 아니라 다른 사용자가 보는 폼에도 영향을 줄 수 있습니다.

---

### Q17. What refers to an application or system that accesses a remote service or another computer system, known as a server?

- A. Server
- **B. Client**
- C. Script
- D. Policies

**Answer:** B

*해설:* 정답은 **B**입니다. 원격 서비스나 다른 시스템에 요청을 보내는 쪽을 `Client`라고 합니다.

---

### Q18. Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)

- **A. Banner Image**
- B. Record Number Format
- **C. Browser Tab Title**
- **D. System Date Format**
- E. Form Header Size

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. Basic Configuration UI16에서는 배너 이미지, 브라우저 탭 제목, 날짜 형식 같은 기본 UI 속성을 조정할 수 있습니다.

---

### Q19. Which tool is used to have conversations with logged-in users in real-time?

- **A. Connect Chat**
- B. Now Messenger
- C. User Presence
- D. Comments

**Answer:** A

*해설:* 정답은 **A**입니다. 로그인한 사용자와 실시간 대화를 하는 기본 도구는 `Connect Chat`입니다.

---

### Q20. What is the master table that contains a record for each table in the database?

- A. [sys_master_db]
- **B. [sys_db_object]**
- C. [sys_master_object]
- D. [sys_object_db]

**Answer:** B

*해설:* 정답은 **B**입니다. 데이터베이스의 각 테이블 메타데이터를 담는 마스터 테이블은 `sys_db_object`입니다.

---

### Q21. Access Control rules may be defined with which of the following permission requirements? (Choose three.)

- **A. Roles**
- **B. Conditional Expressions**
- C. Assignment Rules
- **D. Scripts**
- E. User Criteria
- F. Groups

**Answer:** A,B,D

*해설:* 정답은 **A,B,D**입니다. ACL은 `Roles`, `Condition`, `Script` 조합으로 접근 권한을 판단할 수 있습니다.

---

### Q22. UI Action can prompt that an Incident has been successfully submitted.

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. UI Action은 실행 후 성공 메시지나 안내 메시지를 띄울 수 있습니다.

---

### Q23. Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?

- A. report
- B. workflow
- C. event
- **D. task**

**Answer:** D

*해설:* 정답은 **D**입니다. 생성되고 작업이 수행되며 최종적으로 종료 상태로 가는 기본 단위 레코드는 `Task`입니다.

---

### Q24. Where can Admins check which release is running on an ServiceNow instance?

- A. Memory Stats module
- **B. Stats module**
- C. System.upgraded table
- D. Transactions log

**Answer:** B

*해설:* 정답은 **B**입니다. 현재 인스턴스가 어떤 릴리스를 실행 중인지 확인하는 기본 위치는 `Stats` 모듈입니다.

---

### Q25. What is the purpose of a Related List?

- A. To create a one-to-many relationship
- B. To dot-walk to a core table
- C. To present related fields
- **D. To present related records**

**Answer:** D

*해설:* 정답은 **D**입니다. Related List는 현재 레코드와 연결된 다른 `records`를 폼 하단에 보여 주는 기능입니다.

---

### Q26. Which are valid Service Now User Authentication Methods? (Choose three.)

- A. XML feed
- **B. Local database**
- **C. LDAP**
- **D. SSO**
- E. FTP authentication

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. ServiceNow의 대표 사용자 인증 방식은 `Local database`, `LDAP`, `SSO`입니다.

---

### Q27. Data Policy can enforce mandatory data on import.

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. Data Policy는 폼 입력뿐 아니라 import 같은 비폼 입력 경로에도 mandatory 규칙을 적용할 수 있습니다.

---

### Q28. What are the three components of a filter condition?

- A. Table
- **B. Value**
- **C. Field**
- **D. Operator**

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. 필터 조건은 `Field`, `Operator`, `Value` 세 요소로 구성됩니다.

---

### Q29. Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments.

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. Knowledge Base마다 고유한 라이프사이클, user criteria, category 구조, 관리 담당자를 가질 수 있습니다.

---

### Q30. What is the difference between UI Policy and UI Action?

- A. UI Action can make fields read-only, mandatory, or hidden, while UI Policy can make a save button visible for appropriate users.
- **B. UI Policy can make fields read-only, mandatory, or hidden, while UI Action can make a save button visible for appropriate users.**

**Answer:** B

*해설:* 정답은 **B**입니다. UI Policy는 필드 상태를 제어하고, UI Action은 버튼·링크·컨텍스트 메뉴 같은 실행 요소를 제공합니다.

---

### Q31. The baseline Service Catalog homepage contains links to which of the following components?

- **A. Record Producers, Order Guides, and Catalog Items**
- B. Order Guides, Item Variables, and Workflows
- C. Order Guides, Catalog Items, and Workflows
- D. Record Producers, Order Guides, and Item Variables

**Answer:** A

*해설:* 정답은 **A**입니다. 기본 Service Catalog 홈에는 `Record Producers`, `Order Guides`, `Catalog Items` 링크가 포함됩니다.

---

### Q32. What is a Dictionary Override?

- A. A Dictionary Override is an incoming customer update in an Update Set which applies to the same
- B. A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT
- C. A Dictionary Override is a task within a workflow that requests an action before the workflow can
- **D. A Dictionary Override sets field properties in extended tables**

**Answer:** D

*해설:* 정답은 **D**입니다. Dictionary Override는 확장 테이블에서 상속받은 필드 속성을 다르게 설정하는 기능입니다.

---

### Q33. Which type of tables may be extended by other tables, but do not extend another table?

- **A. Base Tables**
- B. Core Tables
- C. Extended Tables
- D. Custom Tables

**Answer:** A

*해설:* 정답은 **A**입니다. 다른 테이블에 의해 확장될 수 있지만 스스로는 다른 테이블을 확장하지 않는 것은 `Base Tables`입니다.

---

### Q34. When working on a form, what is the difference between Insert and Update operations?

- A. Insert creates a new record and Update saves changes, both remain on the form
- **B. Insert creates a new record and Update saves changes, both exit the form**
- C. Insert saves changes and exits the form, Update saves changes and remains on the form
- D. Insert saves changes and remains on the form, Update saves changes and exits the form

**Answer:** B

*해설:* 정답은 **B**입니다. 이 문항 기준으로 `Insert`는 새 레코드를 만들고 `Update`는 기존 변경사항을 저장하며, 둘 다 폼을 벗어나는 동작으로 정리되어 있습니다.

---

### Q35. What displays a set of records from a table?

- A. View
- B. Dashboard
- C. Panel
- **D. List**

**Answer:** D

*해설:* 정답은 **D**입니다. 테이블의 여러 레코드를 한 번에 보여 주는 기본 화면은 `List`입니다.

---

### Q36. When using the Load Data and Transform Map process, what is the Mapping Assist used for?

- A. Mapping fields using the Import Log
- B. Mapping fields using Transform History
- C. Mapping fields using an SLA
- **D. Mapping fields using a Field Map**

**Answer:** D

*해설:* 정답은 **D**입니다. Mapping Assist는 가져온 데이터 필드와 대상 필드를 `Field Map` 기준으로 연결하는 데 쓰입니다.

---

### Q37. Which one of the following statements describes the purpose of an Service Catalog workflow?

- A. A Service Catalog workflow generates three basic components: item variable types, tasks, and
- B. Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment
- **C. A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to**
- D. A Service Catalog workflow generates three basic components: item variable types, tasks, and

**Answer:** C

*해설:* 정답은 **C**입니다. Service Catalog workflow는 승인, 작업, 알림을 포함한 복잡한 fulfillment 프로세스를 자동으로 진행합니다.

---

### Q38. What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?

- A. RITM (Number)>REQ (Number)>PROCUREMENT (Number)
- B. REQ (Number)>RITM (Number)>PROCUREMENT (Number)
- **C. REQ (Number)>RITM (Number)>TASK (Number)**
- D. FULFILLMENT (Number)>RITM (Number)>TASK (Number)

**Answer:** C

*해설:* 정답은 **C**입니다. 주문의 fulfillment 작업을 보려면 보통 `REQ -> RITM -> TASK` 순서로 내려가 확인합니다.

---

### Q39. What is a characteristic of importing data into ServiceNow?

- A. An existing Transform Map can be used one time on the same import set
- B. Coalesce fields are used only after running Transform
- C. Any user can manage and set up import sets
- **D. An existing Transform Map can be used multiple times on the same import set**

**Answer:** D

*해설:* 정답은 **D**입니다. 기존 Transform Map은 같은 Import Set에 대해 여러 번 재사용할 수 있습니다.

---

### Q40. What is (are) best practice(s) regarding users/groups/roles? Choose 2 answers

- A. You should never assign roles to groups.
- B. You should assign roles to users.
- **C. You should assign roles to groups**
- **D. You should add users to groups**

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 역할은 사용자에게 직접 주기보다 그룹에 부여하고, 사용자는 필요한 그룹에 넣는 것이 일반적인 모범 사례입니다.

---

### Q41. What is a formatter? Select one of the following.

- A. A formatter allows you to configure applications on your instance
- **B. A formatter is a form element used to display information that is not a field in the record**
- C. A formatter allows you to populate fields automatically
- D. A formatter is a set of conditions applied to a table to help find and work with data

**Answer:** B

*해설:* 정답은 **B**입니다. formatter는 레코드 필드가 아닌 추가 정보를 폼에 표시하는 UI 요소입니다.

---

### Q42. Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)

- **A. Service Processes**
- B. User Permissions
- **C. Tables and Fields**
- **D. A Database**
- **E. The Dependency View**

**Answer:** A,C,D,E

*해설:* 정답은 **A,C,D,E**입니다. CMDB는 서비스 프로세스, 테이블과 필드 구조, 데이터베이스 개념, Dependency View와 연결됩니다.

---

### Q43. What is the Import Set Table?

- A. A table where data will be placed, post-transformation
- B. A table that determines relationships
- **C. A staging area for imported records**
- D. A repository for Update Set information

**Answer:** C

*해설:* 정답은 **C**입니다. Import Set Table은 가져온 레코드를 임시로 적재해 두는 `staging area`입니다.

---

### Q44. The display sequence is controlled in a Service Catalog Item using which of the following?

- A. The Default Value field in the Catalog Item form
- B. The Sequence field in the Catalog Item form
- **C. The Order field in the Variable form**
- D. The Choice field in the Variable form

**Answer:** C

*해설:* 정답은 **C**입니다. Service Catalog Item에서 변수 표시 순서는 Variable 레코드의 `Order` 필드로 제어합니다.

---

### Q45. A User is stored in which table?

- **A. User [sys_user]**
- B. User [sys_user_group]
- C. User [syst_user_profile]
- D. User [user_profile]

**Answer:** A

*해설:* 정답은 **A**입니다. 사용자 레코드는 `sys_user` 테이블에 저장됩니다.

---

### Q46. Which application is used to change the number format per table?

- **A. Number Maintenance**
- B. System Maintenance
- C. Table Maintenance
- D. Record Maintenance

**Answer:** A

*해설:* 정답은 **A**입니다. 테이블별 번호 형식과 접두어는 `Number Maintenance`에서 변경합니다.

---

### Q47. What is a Record Producer?

- A. A Record Producer is a type of Catalog Item that is used for Requests, not Services
- B. A Record Producer creates user records
- C. A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests
- **D. A Record Producer is a type of a Catalog Item that allows users to create task-based records from the**

**Answer:** D

*해설:* 정답은 **D**입니다. Record Producer는 Service Catalog에서 사용자가 특정 테이블의 레코드를 쉽게 만들도록 해 주는 Catalog Item 유형입니다.

---

### Q48. Which of the following is true of Service Catalog Items in relation to the Service Catalog?

- A. They run behind the scenes.
- **B. They are the building blocks.**
- C. They are optional.
- D. They provide options.

**Answer:** B

*해설:* 정답은 **B**입니다. Service Catalog Item은 카탈로그를 구성하는 기본 building block입니다.

---

### Q49. What is a way that you can mark a knowledge article for review?

- **A. Flag article**
- B. Review
- C. Bookmark
- D. On Hold

**Answer:** A

*해설:* 정답은 **A**입니다. 지식 문서를 검토 대상으로 표시하는 방법은 `Flag article`입니다.

---

### Q50. From the User menu, which actions can a user select? (Choose three.)

- A. Send Notifications
- **B. Log Out ServiceNow**
- **C. Elevate Roles**
- **D. Impersonate Users**
- E. Order from Service Catalog
- F. Approve Records

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. User menu에서는 `Log Out`, `Elevate Roles`, `Impersonate Users` 같은 계정/권한 관련 작업을 수행할 수 있습니다.

---

### Q51. A REQ number in the Service Catalog represents??

- **A. the order number.**
- B. the stage.
- C. the task to complete.
- D. the individual item in the order.

**Answer:** A

*해설:* 정답은 **A**입니다. `REQ` 번호는 서비스 카탈로그 주문 전체를 나타내는 request, 즉 order number입니다.

---

### Q52. Which one of these applications is available to all users?

- A. Change
- B. Incident
- C. Facilities
- **D. Self-Service**

**Answer:** D

*해설:* 정답은 **D**입니다. `Self-Service`는 일반 사용자도 공통적으로 접근할 수 있는 기본 애플리케이션입니다.

---

### Q53. Which of the following allows a user to edit field values in a list without opening the form?

- A. Data Editor
- B. Edit Menu
- **C. List Editor**
- D. Form Designer

**Answer:** C

*해설:* 정답은 **C**입니다. 폼을 열지 않고 리스트에서 바로 값을 수정하는 기능은 `List Editor`입니다.

---

### Q54. Knowledge Base Search results can be sorted by which of the following? (Choose three.)

- **A. Most recent update**
- B. Popularity
- **C. Relevancy**
- D. Manager assignment
- **E. Number of views**

**Answer:** A,C,E

*해설:* 정답은 **A,C,E**입니다. Knowledge 검색 결과는 보통 `Most recent update`, `Relevancy`, `Number of views` 기준으로 정렬할 수 있습니다.

---

### Q55. What is the purpose of flagging an article in a knowledge base?

- A. To mark an article to read later.
- **B. Allow a user to submit feedback about an article**
- C. Reporting an error

**Answer:** B

*해설:* 정답은 **B**입니다. 문서 flagging은 나중에 보기 위한 북마크보다, 문서에 대한 피드백이나 검토 필요를 표시하는 목적에 가깝습니다.

---

### Q56. Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?

- **A. The CMDB contains data about tangible and intangible business assets**
- B. The CMDB contains the Business Rules that direct the intangible, configurable assets used by a
- C. The CMDB archives all Service Management PaaS equipment metadata and usage statistics
- D. The CMDB contains ITIL process data pertaining to configuration items

**Answer:** A

*해설:* 정답은 **A**입니다. CMDB에는 유형·무형의 비즈니스 자산과 구성 항목 정보가 담깁니다.

---

### Q57. What are the four knowledge workflows available in the ServiceNow base instance?

- **A. Approval publish: Request approval from a manager of the knowledge base before moving the article it**
- B. Instant Publish: Immediately publishes a draft article without requiring an approval
- C. Instant Retire: Immediately retires a published article without requiring an approval
- D. Retire Knowledge: Moves a knowledge article to the retired state.

**Answer:** A

*해설:* 정답은 **A**로 유지했습니다. 다만 보기 구성이 다소 손상돼 있어 현재 문서에서는 base instance에 제공되는 knowledge workflow 보기 중 해당 항목을 정답으로 둡니다.

---

### Q58. Which are states that you can make a field on a form using UI Policy?

- **A. read-only**
- B. write-only
- C. Necessary
- **D. Mandatory**
- E. Empty
- **F. Hidden**

**Answer:** A,D,F

*해설:* 정답은 **A,D,F**입니다. UI Policy로 필드를 `read-only`, `mandatory`, `hidden` 상태로 만들 수 있습니다.

---

### Q59. As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?

- A. A metric is a report gauge used on homepages to display real-time data
- B. A metric is a time measurement used to report the effectiveness of workflows and SLAs
- **C. A metric is used to measure and evaluate the effectiveness of IT service management processes**
- D. A metric is a comparative measurement used to report the effectiveness of workflows and SLAs.

**Answer:** C

*해설:* 정답은 **C**입니다. metric은 IT 서비스 관리 프로세스의 효과를 측정하고 평가하는 데 사용됩니다.

---

### Q60. Which one of the following statements is a recommendation from ServiceNow about Update Sets?

- **A. Avoid using the Default Update set as an Update Set for moving customizations from instance to**
- B. Before moving customizations from instance to instance with Update Sets, ensure that both instances
- C. Use the Baseline Update Set to store the contents of items after they are changed the first time
- D. Once an Update Set is closed as "Complete" change it back to "In Progress" until it is applied to another

**Answer:** A

*해설:* 정답은 **A**입니다. ServiceNow는 커스터마이징 이동에 `Default Update Set` 사용을 피하라고 권장합니다.

---

### Q61. Which configuration allows you to use a script to coalesce data in Import Sets?

- A. Multiple-field coalesce
- B. No coalesce
- **C. Conditional coalesce**
- D. Single-field coalesce

**Answer:** C

*해설:* 정답은 **C**입니다. 스크립트를 이용해 coalesce 판단을 하려면 `Conditional coalesce` 구성을 사용합니다.

---

### Q62. What module in the Service Catalog application does an Administrator access to begin creating a new item?

- A. Maintain Categories
- **B. Maintain Items**
- C. Content Items
- D. Items

**Answer:** B

*해설:* 정답은 **B**입니다. 새 Catalog Item 생성을 시작하는 기본 모듈은 `Maintain Items`입니다.

---

### Q63. What is generated from the Service Catalog once a user places an order for an item or service?

- A. A change request
- B. An Order Guide
- **C. A request**
- D. An SLA

**Answer:** C

*해설:* 정답은 **C**입니다. 사용자가 서비스 카탈로그에서 주문을 제출하면 상위 `Request`가 생성됩니다.

---

### Q64. Which one statement correctly describes Access Control rule evaluation?

- A. Rules are evaluated using roles. The role with the most permissions evaluates the rules
- B. If more than one rule applies to a row, the older rule is evaluated first
- C. If a row level rule and a field level rule exist, both rules must be true before an operation is allowed
- **D. Rules are evaluated from the general to the specific, so a table rule must be active to continue**

**Answer:** D

*해설:* 정답은 **D**입니다. ACL 평가는 일반적인 테이블 규칙에서 더 구체적인 필드 규칙으로 진행됩니다.

---

### Q65. Which one of the following statements applies to a set of fields when they are coalesced during an import?

- **A. If a match is found using the coalesce fields, the existing record is updated with the information being**
- B. If a match is not found using the coalesce fields, the system does not create a Transform Map
- C. If a match is found using the coalesce fields, the system creates a new record
- D. If a match is not found using the coalesce fields, the existing record is updated with the information being

**Answer:** A

*해설:* 정답은 **A**입니다. coalesce 필드로 일치하는 기존 레코드를 찾으면 새 레코드를 만들지 않고 기존 레코드를 업데이트합니다.

---

### Q66. How are Workflows moved between instances?

- **A. Workflows are moved using Update Sets**
- B. Workflows are moved using Transform Maps
- C. Workflows are moved using Application Sets
- D. Workflows cannot be moved between instances

**Answer:** A

*해설:* 정답은 **A**입니다. Workflow 구성은 일반적인 커스터마이징과 마찬가지로 `Update Sets`로 인스턴스 간 이동합니다.

---

### Q67. Tables are made up of which of the following?

- **A. records**
- B. lists
- C. forms.
- **D. fields**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 테이블은 `records`와 `fields`로 구성됩니다.

---

### Q68. Which three Variable Types can be added to a Service Catalog Item?

- A. True/False, Multiple Choice, and Ordered
- B. True/False, Checkbox, and Number List
- C. Number List, Single Line Text, and Reference
- **D. Multiple Choice, Select Box, and Checkbox**

**Answer:** D

*해설:* 정답은 **D**입니다. Service Catalog Item에 추가할 수 있는 대표 변수 유형에는 `Multiple Choice`, `Select Box`, `Checkbox`가 있습니다.

---

### Q69. Record numbers have to be manually incremented

- A. True
- **B. False**

**Answer:** B

*해설:* 정답은 **B**입니다. 레코드 번호는 Number Maintenance 규칙에 따라 자동 증가하므로 수동 증가가 필요하지 않습니다.

---

### Q70. What are the main UI component(s) of the ServiceNow Platform?

- A. Banner Navigator
- **B. Banner Frame**
- C. Application Frame
- **D. Application Navigator**
- E. Content Menu
- **F. Content Frame**

**Answer:** B,D,F

*해설:* 정답은 **B,D,F**입니다. ServiceNow 플랫폼의 주요 UI 구성 요소는 `Banner Frame`, `Application Navigator`, `Content Frame`입니다.

---

### Q71. Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?

- **A. They direct the user to a record producer**
- B. They direct the user to a catalog property
- C. They direct the user to a catalog UI policy
- D. They direct the user to a catalog client script

**Answer:** A

*해설:* 정답은 **A**입니다. 이런 서비스는 모두 사용자가 간단한 입력으로 레코드를 만들게 하는 `Record Producer`로 연결되는 유형입니다.

---

### Q72. A knowledge article must be which of the following states to display to a user?

- **A. Published**
- B. Drafted
- C. Retired
- D. Reviewed

**Answer:** A

*해설:* 정답은 **A**입니다. 일반 사용자가 지식 문서를 보려면 해당 문서 상태가 `Published`여야 합니다.

---

### Q73. Knowledge articles within a knowledge base are grouped by category.

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. Knowledge Base 안의 문서는 category 기준으로 분류됩니다.

---

### Q74. database live at the Data Center.

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 표현은 부정확하지만 데이터베이스가 데이터 센터 인프라에서 운영된다는 의미로 보면 참입니다.

---

### Q75. ServiceNow uses what term to describe all the data saved within a particular form?

- A. Fields
- B. Form
- **C. Record**
- D. Lists

**Answer:** C

*해설:* 정답은 **C**입니다. 하나의 폼에 저장된 전체 데이터 단위를 ServiceNow에서는 `Record`라고 부릅니다.

---

### Q76. Which type of interface enables you to display multiple performance analytics, reporting and other widgets on a single screen?

- A. Form
- B. List
- **C. Dashboard**
- D. Timeline

**Answer:** C

*해설:* 정답은 **C**입니다. 여러 보고서와 위젯을 한 화면에 배치하는 인터페이스는 `Dashboard`입니다.

---

### Q77. What is the platform name for the User table?

- A. u_users
- B. sys_users
- C. x_users
- **D. sys_user**

**Answer:** D

*해설:* 정답은 **D**입니다. User 테이블의 플랫폼 이름은 `sys_user`입니다.

---

### Q78. What is a schema map?

- A. A schema map enables administrators to define records from specific tables as trouble sources for
- B. A schema map graphically organizes the visual task boards for the CMDB
- C. A schema map graphically displays the Configuration Items that support a business service
- **D. A schema map displays the details of tables and their relationships in a visual manner, allowing**

**Answer:** D

*해설:* 정답은 **D**입니다. Schema Map은 테이블과 테이블 관계를 시각적으로 보여 주는 도구입니다.

---

### Q79. A role is recorded in which table?

- A. Role[sys_user]
- B. Role[sys_user_profile]
- C. Role[sys_user_record]
- **D. Role[sys_user_role]**

**Answer:** D

*해설:* 정답은 **D**입니다. 역할 정보는 `sys_user_role` 테이블에 저장됩니다.

---

### Q80. Which term refers to application menus and modules which you may want to access quickly and often?

- A. Breadcrumb
- **B. Favorite**
- C. Tag
- D. Bookmark

**Answer:** B

*해설:* 정답은 **B**입니다. 자주 쓰는 애플리케이션 메뉴와 모듈을 빠르게 접근하도록 저장하는 것은 `Favorite`입니다.

---

### Q81. Which of the following statements is true when a new table is created by extending another table?

- A. The new table archives the parent table and assumed its roles in the database
- B. The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but
- **C. The new table inherits all of the fields of the parent table and can also contain new fields unique to itself**
- D. The new table inherits all of the fields, but does not inherit Access Control rules, Client

**Answer:** C

*해설:* 정답은 **C**입니다. 다른 테이블을 확장해 새 테이블을 만들면 부모 테이블 필드를 상속받고, 자신만의 필드를 추가할 수 있습니다.

---

### Q82. Which one of the following statements best describes the purpose of an Update Set?

- **A. An Update Set allows administrators to group a series of changes into a named set and then move this**
- B. By default, an Update Set includes customizations, Business Rules, and homepages
- C. An Update Set is a group of customizations that is moved from Production to Development
- D. By default, the changes included in an Update Set are visible only in the instance to which they are

**Answer:** A

*해설:* 정답은 **A**입니다. Update Set은 여러 커스터마이징 변경을 하나의 묶음으로 관리하고 다른 인스턴스로 이동하기 위한 단위입니다.

---

### Q83. Which one of the following statements describes a characteristic of role assignment?

- **A. Roles can contain other roles, when you are assigned a role, you inherit all the roles within that role**
- B. Users can click on the Personalize Role feature to try different roles
- C. A role is granted to a user by the System Administrator
- D. Each user has a role in the ServiceNow platform

**Answer:** A

*해설:* 정답은 **A**입니다. 역할은 다른 역할을 포함할 수 있어서 상위 역할을 부여받으면 내부 역할 권한도 함께 상속됩니다.

---

### Q84. Which would NOT appear in the History section of the Application Navigator?

- A. Records
- **B. UI Pages**
- C. Lists
- D. Forms

**Answer:** B

*해설:* 정답은 **B**입니다. Application Navigator의 History에는 최근 연 리스트나 폼은 나타날 수 있지만 `UI Pages` 같은 개발 객체는 일반적으로 나타나지 않습니다.

---

### Q85. Business Rules are used to enforce mandatory data on a form.

- A. True
- **B. False**

**Answer:** B

*해설:* 정답은 **B**입니다. 폼에서 필수 입력을 즉시 강제하는 대표 수단은 UI Policy나 Client Script이고, Business Rule은 주로 서버 로직 처리에 쓰입니다.

---

### Q86. Buttons, form links, and context menu items are all examples of what type of functionality?

- A. Business Rule
- **B. UI Action**
- C. Client Script
- D. UI Policy

**Answer:** B

*해설:* 정답은 **B**입니다. 버튼, 폼 링크, 컨텍스트 메뉴는 모두 `UI Action`의 예입니다.

---

### Q87. How is the Event Log different from the Event Registry?

- **A. Event Log contains generated Events, the Event Registry is a table of Event definitions**
- B. Event Log is formatted in the Log style, the Event Registry displays different fields
- C. Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were
- D. Event Log is the same as the Event Registry

**Answer:** A

*해설:* 정답은 **A**입니다. `Event Registry`는 이벤트 정의를 담고, `Event Log`는 실제 발생한 이벤트 기록을 담습니다.

---

### Q88. Which of the following statement describes the purpose of an Order Guide?

- A. Order Guides restrict the number of items in an order to only one item per request
- B. Order Guide provide a list of guidelines for Administrators on how to set up item variables
- **C. Order Guide provide the ability to order multiple, related items as one request**
- D. Order Guides take the user directly to the checkout without prompting for information

**Answer:** C

*해설:* 정답은 **C**입니다. Order Guide는 서로 관련된 여러 Catalog Item을 하나의 요청 흐름으로 함께 주문하게 해 줍니다.

---

### Q89. For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?

- A. Service Catalog variables can only be used in Record Producers
- B. Service Catalog variables can only be used in Order Guides
- C. Service Catalog variables cannot affect the order price
- **D. Service Catalog variables are global by default**

**Answer:** D

*해설:* 정답은 **D**입니다. 이 문서 기준으로는 Service Catalog variable이 기본적으로 전역적으로 사용된다는 특성을 정답으로 두고 있습니다.

---

### Q90. When searching using the App Navigator search field, what can be returned? (Choose four.)

- **A. Names of Applications and Modules**
- **B. Names of Modules**
- **C. Names of Applications**
- **D. Favorites**
- E. History Records
- F. Titles of Dashboard Gauges

**Answer:** A,B,C,D

*해설:* 정답은 **A,B,C,D**입니다. App Navigator 검색은 애플리케이션 이름, 모듈 이름, 둘의 조합, Favorites를 반환할 수 있습니다.

---

### Q91. There are common types of Interfaces (Numeric Value) 6: There are six common types of interfaces

- A. Homepage: Consists of navigational elements, functional controls, and platform information.
- B. List: Display records from a data table, as well as allow you to edit the record information using the List Editor functionally.
- **C. Form: Data is entered into ServiceNow through forms**
- D. Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a single screen.
- E. Maps: Display ServiceNow data graphically on a Google map
- F. Timelines: Used to track tasks or projects

**Answer:** C

*해설:* 정답은 **C**로 유지했습니다. 다만 문항이 숫자 설명과 인터페이스 보기 문장이 섞여 있어 복원 신뢰도는 높지 않습니다. 현재 문서 기준으로는 `Form` 보기를 정답으로 둡니다.

---

### Q92. Which one of the following statements is true about Column Context Menus?

- **A. It displays actions such as creating quick reports, configuring the list, and exporting data**
- B. It displays actions related to filtering options, assigning tags, and search
- C. It displays actions related to viewing and filtering the entire list
- D. It displays actions such as view form, view related task, and add relationship

**Answer:** A

*해설:* 정답은 **A**입니다. Column Context Menu에서는 quick report 생성, 리스트 설정, 데이터 export 같은 컬럼 관련 작업을 할 수 있습니다.

---

### Q93. Where would you go in ServiceNow to order services and products offered by various departments?

- **A. Service Catalog**
- B. Self Service
- C. Service Department
- D. Customer Service

**Answer:** A

*해설:* 정답은 **A**입니다. 여러 부서가 제공하는 서비스와 상품을 주문하는 대표 진입점은 `Service Catalog`입니다.

---

### Q94. What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?

- A. Answer Agent
- B. Live Feed
- **C. Virtual Agent**
- D. Connect Chat

**Answer:** C

*해설:* 정답은 **C**입니다. 사용자를 안내하고 질문 응답과 작업 지원을 제공하는 대화형 봇 플랫폼은 `Virtual Agent`입니다.

---

### Q95. What information does the System Dictionary contain?

- A. The human-readable labels and language settings
- **B. The definition for each table and column**
- C. The information on how tables relate to each other
- D. The language dictionary used for spell checking

**Answer:** B

*해설:* 정답은 **B**입니다. System Dictionary에는 각 테이블과 컬럼의 정의 정보가 들어 있습니다.

---

### Q96. What is a characteristic of importing data into ServiceNow?

- A. An existing Transform Map can be used one time on the same import set
- B. Coalesce fields are used only after running Transform
- C. Any user can manage and set up import sets
- **D. An existing Transform Map can be used multiple times on the same import set**

**Answer:** D

*해설:* 정답은 **D**입니다. 같은 import set에 기존 Transform Map을 여러 번 사용할 수 있습니다.

---

### Q97. In what order should filter elements be specified?

- **A. Field, Operator, then Value**
- B. Field, Operator, then Condition
- C. Operator, Condition, then Value
- D. Value, Operator, then Field

**Answer:** A

*해설:* 정답은 **A**입니다. 필터 조건은 `Field -> Operator -> Value` 순서로 지정합니다.

---

### Q98. Table Access Control rules are processed in the following order

- A. any table name (wildcard), parent table name, table name
- **B. table name, parent table name, any table name (wildcard)**
- C. parent table name, table name, any table name (wildcard)
- D. any table name (wildcard), table name, parent table name

**Answer:** B

*해설:* 정답은 **B**입니다. 테이블 ACL은 `table name`부터 확인하고, 이후 `parent table name`, 마지막으로 wildcard 순으로 평가합니다.

---

### Q99. What are the two pathways to view feedback left on a published article?

- **A. Knowledge > articles > My Flagged**
- B. Knowledge base > my knowledge > flagged articles
- C. Knowledge > My articles > Flagged
- **D. Knowledge > articles > published**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 이 문서 기준으로는 게시 문서 목록과 `My Flagged` 경로에서 해당 피드백을 확인하는 보기 조합을 정답으로 둡니다.

---

### Q100. When does the Submit button appear on a form?

- A. When saving an old record
- **B. When creating a new record**
- C. When changing the reference field in an existing record
- D. When updating an existing record

**Answer:** B

*해설:* 정답은 **B**입니다. `Submit`은 새 레코드를 생성할 때 나타나고, 기존 레코드 저장에는 보통 `Update`가 사용됩니다.

---

### Q101. What needs to be specified, when creating a Business Rule? (Choose four.)

- **A. UI action**
- **B. Table**
- C. Fields to update
- D. Who can run
- **E. Script to run**
- **F. Application scope**
- G. Update set

**Answer:** A,B,E,F

*해설:* 정답은 **A,B,E,F**로 유지했습니다. 다만 보기 복원 상태가 완전하지 않아 일반적인 Business Rule 생성 항목과 일부 어긋남이 있습니다.

---

### Q102. The ServiceNow Virtual Agent provides assistance within a messaging interface. Which capability allows end users to configure virtual Agent to intercept and help resolve submitted incidents?

- **A. Incident Auto-Resolution**
- B. Ticket Resolver
- C. Virtual Agent Helper
- D. Web Intelligence

**Answer:** A

*해설:* 정답은 **A**입니다. 제출된 Incident를 가로채 자동 해결 흐름으로 연결하는 기능은 `Incident Auto-Resolution`입니다.

---

### Q103. What are the three permission requirements that must evaluate to true for an access control rule to apply? Choose 3 answers

- **A. Conditions**
- B. table.
- **C. Roles**
- **D. Script**
- E. Conditional Expression
- F. table.none

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. ACL은 조건, 역할, 스크립트 평가를 통해 접근 허용 여부를 결정합니다.

---

### Q104. Which module is used as the first step for importing data?

- A. Coalesce Data
- B. Transform Data
- C. Import Data
- **D. Load Data**

**Answer:** D

*해설:* 정답은 **D**입니다. 데이터 가져오기의 첫 단계는 원본 파일을 올리는 `Load Data`입니다.

---

### Q105. What are the steps to retrieve an Update Set?

- A. Verify Update Set is Complete, Retrieve, Preview, Apply
- B. Verify Update Set is Complete, Test Connection, Apply
- **C. Verify Update Set is Complete, Test Connection, Commit**
- D. Verify Update Set is Complete, Retrieve, Preview, Commit

**Answer:** C

*해설:* 정답은 **C**입니다. 이 문서 기준으로는 Update Set 완료 확인 후 연결을 점검하고 `Commit`하는 흐름을 정답으로 둡니다.

---

### Q106. On a Form header, what is the three bar icon called?

- A. Pancake icon
- B. Additional Actions or Context Menu
- **C. Hamburger icon**
- D. Cake icon

**Answer:** C

*해설:* 정답은 **C**입니다. 폼 헤더의 세 줄 아이콘은 일반적으로 `Hamburger icon`이라고 부릅니다.

---

### Q107. Which tool is used for creating dependencies between configuration items in the CMDB?

- A. CI Relationship Editor
- B. CMDB Builder
- C. CI Service Manager
- **D. Cl Class Manager**

**Answer:** D

*해설:* 정답은 **D**로 유지했습니다. 다만 보기 명칭이 손상돼 있어 실제 도구명은 별도 원본 대조가 필요합니다.

---

### Q108. What is the purpose of the Event Registry?

- **A. The Event Registry lists all Events that have successfully completed within a 24-hour period**
- B. The Event Registry is a list of all Events that originate through an integration
- C. The Event Registry is a module that provides Event definitions
- D. The Event Registry is a list of all Events that have successfully completed after being Invoked by a script

**Answer:** A

*해설:* 정답은 **A**로 유지했지만, 보기 내용은 일반적인 Event Registry 개념과 다소 어긋납니다. 복원 신뢰도는 낮습니다.

---

### Q109. Which fields can be configured in reporting to perform arithmetic, coalesce, concatenation, and length?

- A. Sourcing fields
- **B. Function fields**
- C. Computational fields
- D. Calculation fields

**Answer:** B

*해설:* 정답은 **B**입니다. 보고서에서 계산, 결합, 길이 처리 같은 연산을 위해 쓰는 것은 `Function fields`입니다.

---

### Q110. What type of field allows you to look up values from one other table?

- **A. Reference**
- B. Verity
- C. Options
- D. Selections
- E. Dot walk
- F. Lookup

**Answer:** A

*해설:* 정답은 **A**입니다. 다른 테이블 값을 조회·참조하도록 연결하는 필드 유형은 `Reference`입니다.

---

### Q111. When using the Performance Analytics application in the Now Platform, what kind of KPI signals are used to make decisions that statistically support long term workflow stability?

- A. Long-term signals
- B. Non-signals
- **C. Anti-signals**
- D. Stability signals

**Answer:** C

*해설:* 정답은 **C**로 유지했습니다. 다만 보기 용어 `Anti-signals`는 일반적인 표현과 거리가 있어 원문 재확인이 필요한 문항입니다.

---

### Q112. Which certificate-based authentication methods can be enabled so that users can log into the Service Portal? (Select all that apply) Select 2 Answers from the below options

- A. Extended Validation Access (EVA)
- B. Organization Verification Card (OVC)
- **C. Common Access Card (CAC)**
- D. Domain Authentication Card (DAC)
- **E. Personal Identify Verification (PIV)**

**Answer:** C,E

*해설:* 정답은 **C,E**입니다. Service Portal에서 사용할 수 있는 대표적인 인증서 기반 로그인 방식은 `CAC`와 `PIV`입니다.

---

### Q113. How do you make a list filter available to everyone?

- A. Make active, set visibility, and save
- **B. Assign a name, set visibility, and save**
- C. Assign a group, set visibility, and save
- D. Make active, assign a name, and save

**Answer:** B

*해설:* 정답은 **B**입니다. 필터 이름을 지정하고 visibility를 설정한 뒤 저장해야 모두가 사용할 수 있습니다.

---

### Q114. Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?

- A. Flows
- B. Action Sequences
- C. Action Sets
- D. Task Flows
- **E. Flow Diagrams**

**Answer:** E

*해설:* 정답은 **E**로 유지했습니다. 다만 실제 제품 용어와 보기 복원 상태가 어긋나 있어 신뢰도는 낮은 편입니다.

---

### Q115. Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non- managers) can submit the order?

- A. Create Record Producer and use the Available For list to specify First Line [sn_first_line] role
- **B. Create Catalog Item and use the Not Available list to specify the Manager Group**
- C. Create Catalog Item and use the Available For list to specify ITIL [itil] role
- D. Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role

**Answer:** B

*해설:* 정답은 **B**로 유지했습니다. 다만 일반적인 설계 관점에서는 `User Criteria` 활용이 더 자연스러워 원문 복원 신뢰도는 높지 않습니다.

---

### Q116. What icon do you use to change the label on a Favorite?

- A. Clock
- B. Hamburger
- **C. Pencil**
- D. Three dots
- E. Triangle.
- F. Star

**Answer:** C

*해설:* 정답은 **C**입니다. Favorite 이름 변경은 보통 편집을 의미하는 `Pencil` 아이콘으로 수행합니다.

---

### Q117. What is a role in ServiceNow?

- **A. A role is one record m the Role [sys_user_role] table**
- B. A role is one record in the Role Iuser_sys_role] table
- C. A role is a persona used In Live Feed Chat
- D. A role Is a set of modules for a particular application

**Answer:** A

*해설:* 정답은 **A**입니다. ServiceNow에서 role은 `sys_user_role` 테이블의 레코드로 관리되는 권한 단위입니다.

---

### Q118. Which icon would you double click, to expand and collapse the list of all Applications and Modules?

- A. Star
- B. Clock
- **C. Application**
- D. Funnel

**Answer:** C

*해설:* 정답은 **C**입니다. 애플리케이션과 모듈 목록 전체를 접고 펼치는 데 쓰는 해당 navigator 아이콘을 의미합니다.

---

### Q119. After finishing your work on High Security Settings, what do you do to return to normal admin security levels?

- A. Select Normal role
- **B. Log out and back in**
- C. Use System Administration > Normal Security module
- D. Select Global Update Set
- E. End Impersonation

**Answer:** B

*해설:* 정답은 **B**입니다. 높은 보안 설정 작업 후 일반 admin 보안 수준으로 돌아가려면 다시 로그인합니다.

---

### Q120. What kind of data can Import Sets use to populate tables in ServiceNow?

- A. CSS, SOAP, and Excel
- **B. XML. CSV, and Excel**
- C. SOAP, REST, and XML
- D. XML, SOAP, and CSS

**Answer:** B

*해설:* 정답은 **B**입니다. Import Set은 `XML`, `CSV`, `Excel` 같은 데이터를 이용해 테이블을 채울 수 있습니다.

---

### Q121. What is a quick way to create a report from a list view?

- A. Click on filter breadcrumb, drag and drop on the Report > Create New module
- **B. Click Funnel, define filter conditions, click Create Report**
- C. Click Context Menu, select Create Report
- D. Apply filter, right click on column header, select Bar Chart
- E. Apply filter, right click on column header, select Create Report

**Answer:** B

*해설:* 정답은 **B**입니다. 리스트에서 필터를 정의한 뒤 `Create Report`를 선택하면 빠르게 보고서를 만들 수 있습니다.

---

### Q122. While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?

- A. Configure Lists
- B. Show Options
- C. Configure Task
- D. Show Choices
- E. Show Choice List
- **F. Configure Options**

**Answer:** F

*해설:* 정답은 **F**입니다. Priority 선택값을 공통적으로 바꾸려면 해당 필드 옵션 구성을 열어 choice 값을 수정해야 합니다.

---

### Q123. What do you need to do before you can use an Application-based trigger in your flow?

- A. Activate application trigger spoke
- B. Activate trigger security rules
- **C. Activate application spoke, and plug-ins as needed**
- D. Assign Application trigger role [sn_app_trigger_write] to SME
- E. Activate application plugins only

**Answer:** C

*해설:* 정답은 **C**입니다. Application-based trigger를 쓰기 전에 관련 application spoke와 필요한 플러그인을 활성화해야 합니다.

---

### Q124. Which section of the ServiceNow UI allows you to perform a global search?

- A. Application Navigator
- **B. Banner frame**
- C. List pane
- D. Content frame

**Answer:** B

*해설:* 정답은 **B**입니다. 전역 검색은 상단의 `Banner frame` 영역에서 수행합니다.

---

### Q125. What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)

- **A. Local Sources (i.e. XML, CSV, Excel)**
- B. Implementation Spoke
- **C. DataHub**
- **D. JDBC Connection**
- E. Network Server
- **F. LDAP Connection**

**Answer:** A,C,D,F

*해설:* 정답은 **A,C,D,F**입니다. ServiceNow로 가져올 수 있는 대표 Data Source 유형에는 로컬 파일, DataHub, JDBC, LDAP 연결이 있습니다.

---

### Q126. IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as

- A. an action
- **B. a spoke**
- C. a connection
- D. an integration step

**Answer:** B

*해설:* 정답은 **B**입니다. IntegrationHub에서 외부 연동 패키지는 `Spoke`라고 부릅니다.

---

### Q127. The ServiceNow platform includes which types of interfaces? (Choose three.)

- **A. Now Mobile Apps**
- B. Agent Control Center
- C. Back Office Dashboard
- **D. Service Portals**
- **E. Now Platform® User Interfaces**
- F. Field Service Taskboard

**Answer:** A,D,E

*해설:* 정답은 **A,D,E**입니다. 대표 인터페이스 유형은 `Now Mobile Apps`, `Service Portals`, `Now Platform User Interfaces`입니다.

---

### Q128. When moving multiple update sets at one time, what might you do to facilitate the move?

- **A. Batch**
- B. Verify
- C. Test
- D. Preview

**Answer:** A

*해설:* 정답은 **A**입니다. 여러 Update Set을 한 번에 이동할 때는 `Batch` 방식이 도움이 됩니다.

---

### Q129. What import utility do you use when the field names on the import set match the name of the fields on the Target table?

- A. Schema Mapping
- **B. Automatic Mapping**
- C. Mapping Assist
- D. Mapping Dashboard

**Answer:** B

*해설:* 정답은 **B**입니다. Import Set 필드명과 대상 테이블 필드명이 같으면 `Automatic Mapping`을 사용할 수 있습니다.

---

### Q130. Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?

- A. Select Data Source, Schedule Transform
- B. Load Data, Create Transform Map, Run Transform
- C. Define Data Source, Select Transform Map, Run Transform
- **D. Select Import Set, Select Transform Map, Run Transform**

**Answer:** D

*해설:* 정답은 **D**로 유지했습니다. 다만 실제 절차에는 보통 `Load Data`가 먼저 포함되므로 보기 복원 상태를 감안해 해석해야 합니다.

---

### Q131. Which tool should be used to populate commonly used fields in a form?

- **A. Template**
- B. Reference Qualifier
- C. Formatter
- D. Assignment Rule

**Answer:** A

*해설:* 정답은 **A**입니다. 자주 쓰는 필드 조합을 빠르게 채우려면 `Template`을 사용합니다.

---

### Q132. What Is the purpose of the Fitter navigator In the Application Navigator?

- A. Filter applications in order of use
- B. Quickly navigate to applications and modules
- **C. Collapse and expand applications**
- D. List applications In order of Top Requests

**Answer:** C

*해설:* 정답은 **C**입니다. Application Navigator에서 앱과 모듈을 펼치거나 접는 기능은 navigator 아이콘의 동작입니다.

---

### Q133. From a form, what would you click to add additional fields to the form? (Choose two.)

- A. Context Menu > Form > Layout
- **B. Context Menu > Configure > Form Layout**
- C. Context Menu > Configure > Form Design
- **D. Right click on header > Add > Field**
- E. Context Menu > Form > Designer
- F. Right click on header > Configure > UX Dashboard

**Answer:** B,D

*해설:* 정답은 **B,D**입니다. 필드를 폼에 추가하려면 `Configure > Form Layout` 경로나 헤더 오른쪽 클릭 후 추가 방법을 사용할 수 있습니다.

---

### Q134. What controls the publishing and retiring process for knowledge articles?

- A. Approval Policies
- B. Approval Definitions
- **C. Workflow Designer**
- D. Workflows
- E. State Lifecycle

**Answer:** C

*해설:* 정답은 **C**입니다. 지식 문서 게시와 퇴출 절차는 워크플로우로 제어되며, 이를 설계하는 곳은 `Workflow Designer`입니다.

---

### Q135. A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed Incidents where Assignment Group is Network After clicking the Funnel icon, what should the user do?

- **A. Define the first condition; click AND button; define second condition; click Run**
- B. Define the first condition; click AND button; define second condition; press enter
- C. Define the first condition; click OR button; define second condition; press enter
- D. Define the first condition; click > icon on breadcrumb, define second condition; click Run
- E. Define the first condition; click > icon on breadcrumb, define second condition; press enter

**Answer:** A

*해설:* 정답은 **A**입니다. 두 조건을 모두 만족하는 레코드를 보려면 첫 조건 설정 후 AND를 클릭하고 두 번째 조건을 추가한 뒤 Run을 클릭합니다.

---

### Q136. Which of the following statements describes how data is organized in a table?

- **A. A column is a field in the database and a record is one user**
- B. A column is one field and a record is one row
- C. A column is one field and a record is one column
- D. A column contains data from one user and a record is one set of fields

**Answer:** A

*해설:* 정답은 **A**입니다. 데이터베이스에서 컬럼은 필드를 의미하고 레코드는 한 행을 의미합니다.

---

### Q137. Which plugin allows users to install multiple applications, application-customizations. or plugins at once?

- A. Application Integration and Plugin Delivery (A1PD) SpokeBatch Install
- **B. Continuous Integration and Continuous Delivery (CICD) SpokeBatch Install**
- C. Multiple Integration and Process Delivery (MIPD) SpokeBatch Install
- D. Quick Integration and Multiple Delivery (QIMD) SpokeBatch Install

**Answer:** B

*해설:* 정답은 **B**입니다. 여러 애플리케이션과 플러그인을 한꺼번에 설치하는 유틸리티는 `CICD SpokeBatch Install`입니다.

---

### Q138. Which one of the following is an accurate list of changes that are captured in an Update Set?

- **A. Changes made to tables, forms, schedules, and client scripts**
- B. Changes made to tables, forms, views, and fields
- C. Changes made to: tables, forms. Business Rules, and data records
- D. Changes made to: tables. forms groups, and configuration items (Cls)

**Answer:** A

*해설:* 정답은 **A**입니다. Update Set은 구성 변경을 캡처하기 위해 사용되는 도구입니다.

---

### Q139. A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of "INC" to the company standard IN." What are the next steps to be taken''

- **A. Go to the Number Maintenance application and change the prefix to "IN" for incident**
- B. Create a Business Rule that modifies the prefix before the Insert operation
- C. The prefix of an incident cannot be changed because it is a built-in feature
- D. Submit a Change Request to ServiceNow Technical Support

**Answer:** A

*해설:* 정답은 **A**입니다. Incident 번호 접두사는 Number Maintenance에서 변경하는 것이 일반적입니다.

---

### Q140. Which tool is used to define relationships between fields in an import set table and a target table?

- A. Transform Schema
- B. Schema Map
- C. Dictionary Map
- **D. Transform Map**
- E. Field Transformer
- F. Import Designer

**Answer:** D

*해설:* 정답은 **D**입니다. Import Set에서 필드 매핑을 정의하는 도구는 `Transform Map`입니다.

---

### Q141. What is a quick way to create a report from a list view?

- A. Click on filter breadcrumb, drag and drop on the Report > Create New module
- **B. Click Funnel, define filter conditions, click Create Report**
- C. Click Context Menu, select Create Report
- D. Apply filter, right click on column header, select Bar Chart
- E. Apply filter, right click on column header, select Create Report

**Answer:** B

*해설:* 정답은 **B**입니다. 리스트 보기에서 필터를 설정한 뒤 `Create Report`를 선택하면 빠르게 보고서를 만들 수 있습니다.

---

### Q142. An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?

- A. The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.
- B. The manager does not have the itil role.
- C. The manager is not a member of the Service Desk group.
- **D. The manager is not a member of the Network and Hardware groups.**
- E. The Assignment Group manager field is empty.

**Answer:** D

*해설:* 정답은 **D**입니다. 그룹 작업 목록은 매니저가 자신이 속한 그룹에 속할 때만 해당 그룹의 작업을 표시합니다.

---

### Q143. Which of the following are not included in an Update Set, by default? (Choose four.)

- **A. Homepages**
- **B. Data**
- C. Published Workflows
- D. Business Rules
- **E. Schedules**
- **F. Database changes**
- G. Related Lists

**Answer:** A,B,E,F

*해설:* 정답은 **A,B,E,F**입니다. 일반적으로 Update Set에 기본적으로 포함되지 않는 항목은 홈페이즈, 데이터, 스케줄, 데이터베이스 변경사항입니다.

---

### Q144. How can administrators utilize the same content for different notification channels?

- A. Configure Default notification content
- B. Enable Actionable notification content
- **C. Provide Common notification content**
- D. Set up Related notification content

**Answer:** C

*해설:* 정답은 **C**입니다. 여러 알림 채널에서 동일한 내용으로 사용하려면 공통 notification content를 사용합니다.

---

### Q145. Which one of the following statements is true?

- A. When an incident form is saved, all the Work Notes field text is recorded to the Activity Log field
- B. When an incident form is saved, the Work Notes field text is overwritten each time work is logged against
- C. When an incident form is saved, the impact field is calculated by adding the Prion:, and Urgency values
- **D. When an Incident form is saved, the Additional Comments field text is cleared and recorded to the Work**

**Answer:** D

*해설:* 정답은 **D**입니다. Incident 저장 시 Additional Comments는 기록되고 입력 칸은 비워지며, 이는 작업 노트와는 별도의 흐름입니다.

---

### Q146. When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)

- **A. Make sure the latest flows are activated.**
- B. Use the instance Incognito setting to quickly toggle between requester and approver.
- **C. Impersonate the requester to ensure the form works.**
- **D. Make sure the requester's user record has a manager specified.**
- E. Create and select your Testing Update Set, before starting the test cases.
- F. Use your Admin account, so you can approve the items quickly.

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. 테스트할 때는 최신 플로우를 활성화하고 요청자를 가장하여 작동을 확인하며 요청자의 사용자 레코드에 매니저가 등록되어 있어야 합니다.

---

### Q147. What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?

- A. Task Escalation Clock
- **B. Service Level Agreements**
- C. Inactivity Monitor
- D. Response Time Clock
- E. Business Time Remaining

**Answer:** B

*해설:* 정답은 **B**입니다. 작업 시간 준수를 추적하는 도구는 Service Level Agreements(SLA)입니다.

---

### Q148. What is the name of the table relationship, where two or more tables are related in a bi- directional relationship, so that the related records are visible from both tables in a related list?

- A. Database View
- **B. Many to Many**
- C. One to Many
- D. Extended

**Answer:** B

*해설:* 정답은 **B**입니다. 두 테이블 간에 양방향으로 관련 레코드를 보여주려면 `Many to Many` 관계를 사용합니다.

---

### Q149. What ServiceNow tables can Administrators define as "destinations" for imported data, when using Transform Maps in the System Import Sets application?

- A. The Task table is the only table that can be a destination for imported data in the Transform Map module
- **B. The Incident. Problem. Change, Task, and Service Catalog tables are the only tables that can be a**
- C. Only the Incident Problem, and Change tables can be a destination for imported data in the Transform
- D. Any ServiceNow table can be a destination for imported data in the Transform Map module

**Answer:** B

*해설:* 정답은 **B**입니다. 일반적으로 Transform Map은 대상 테이블로 데이터를 변환하는 데 사용됩니다.

---

### Q150. When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?

- A. Flow Manager
- B. Flow Designer
- **C. Flow Editor**
- D. Workflow Editor
- E. Workflow Designer

**Answer:** C

*해설:* 정답은 **C**입니다. 해당 문항은 Flow Designer 대신 `Flow Editor`를 지칭하는 보기로 복원된 것으로 보입니다.

---

### Q151. A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?

- A. Specify the Dept_Mgr role on the catalog content block
- **B. Add the Department Manager group to the catalog item's user criteria**
- C. Add the Department Manager group to the catalog item's ACL
- D. Only publish the item in the HR service catalog
- E. Use a Dept_Mgr ACL on the HR service catalog

**Answer:** B

*해설:* 정답은 **B**입니다. 매니저 전용 카탈로그 항목을 구현하려면 해당 아이템에 매니저 그룹을 `User Criteria`에 추가합니다.

---

### Q152. What is NOT an example of a UI Action?

- A. Search
- B. Form buttons
- **C. list Buttons**
- D. Related Links

**Answer:** C

*해설:* 정답은 **C**입니다. 버튼, 링크, 컨텍스트 메뉴 항목은 모두 `UI Actions`로 구현됩니다.

---

### Q153. What function do you use to add buttons, links, and context menu items on forms and lists?

- A. UI Policies
- B. UI Settings
- **C. UI Actions**
- D. UI Config

**Answer:** C

*해설:* 정답은 **C**입니다. 폼과 리스트에 버튼, 링크, 컨텍스트 메뉴 항목을 추가하는 기능은 `UI Actions`입니다.

---

### Q154. Where in Flow Designer can users access information about actions that are added to the flow?

- A. Virtual Agent Help
- B. Local Action Help
- **C. Help Panel**
- D. Flow Assistant

**Answer:** C

*해설:* 정답은 **C**입니다. Flow Designer에서 추가된 액션 정보를 확인하는 창은 `Help Panel`입니다.

---

### Q155. Which plugin needs to be activated in order to translate the content of a catalog item to multiple languages?

- **A. Localization Framework plugin (com.glide.localization_framework)**
- B. Translation Framework plugin (com.glide.translation_framework)
- C. Multiple Language Framework plugin (com.glide.multiple.language_framework)
- D. Language AI Framework plugin (com.glide.language.ai_framework)

**Answer:** A

*해설:* 정답은 **A**입니다. 카탈로그 아이템 다국어 번역을 지원하는 플러그인은 `Localization Framework`입니다.

---

### Q156. Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?

- A. Incident.Major_Incident
- B. incident=>major_incident
- C. incident<=>major_incident
- D. incident||major_incident
- **E. incident.major_incident**

**Answer:** E

*해설:* 정답은 **E**입니다. 특정 테이블의 특정 필드 ACL 객체 이름은 `table.field` 형식으로 표현합니다.

---

### Q157. ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?

- **A. Common Services Data Model (CSDM)**
- B. Information Technology Service Management (ITSM)
- C. Configuration Management Database (CMDB)
- D. Information Technology Infrastructure Library (ITIL)

**Answer:** A

*해설:* 정답은 **A**입니다. 서비스 정의와 CMDB 모델을 표준화하는 리소스는 `Common Services Data Model (CSDM)`입니다.

---

### Q158. What is specified in an Access Control rule?

- A. Groups, Conditional Expressions and Workflows
- B. Table Schema, CRUD, and User Authentication
- **C. Object and Operation being secured; Permissions required to access the object**
- D. security_admin

**Answer:** C

*해설:* 정답은 **C**입니다. ACL은 보호할 객체와 작업, 접근 권한 요건을 지정합니다.

---

### Q159. As it reveals to IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?

- **A. Knowledge**
- B. ServiceNow Wiki
- C. Knowledge Now
- D. SharePoint
- E. Stack Overflow

**Answer:** A

*해설:* 정답은 **A**입니다. IT 문서와 FAQ, 스크립트 등 내부 문서를 찾는 데 사용되는 인터페이스는 `Knowledge`입니다.

---

### Q160. Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?

- **A. Process Automation > Flow Designer**
- B. Process Automation > Flow Administration
- C. Process Automation > Workflow Editor
- D. Process Automation > Process Flow
- E. Process Automation > Active Flows

**Answer:** A

*해설:* 정답은 **A**입니다. 새로운 비즈니스 로직을 자동화하려면 `Flow Designer` 모듈을 사용합니다.

---

### Q161. What field contains a record's 32-character, unique identifier?

- A. sn_rec_id
- B. rec_id
- C. u_id
- **D. sys_id**
- E. sn_gu_id
- F. sn_sys_id
- G. id

**Answer:** D

*해설:* 정답은 **D**입니다. 모든 레코드에 부여되는 고유 32자 식별자는 `sys_id`입니다.

---

### Q162. Which of the following is used to categorize, flag, and locate records?

- A. Search
- B. Favorites
- **C. Tags**
- D. Bookmarks

**Answer:** C

*해설:* 정답은 **C**입니다. 레코드를 분류하고 빠르게 찾기 위한 기능은 `Tags`입니다.

---

### Q163. What is a sys_id?

- **A. Unique 32-character identifier that is assigned to every record**
- B. A client-side Business Rule
- C. A server-side Business Rule
- D. Unique 64-character identifier that is assigned to every record

**Answer:** A

*해설:* 정답은 **A**입니다. `sys_id`는 모든 레코드에 부여되는 고유 32자 식별자입니다.

---

### Q164. Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?

- A. Agent Workspace
- B. Chat bot
- **C. Virtual Agent**
- D. Knowledge Chat
- E. Now Support

**Answer:** C

*해설:* 정답은 **C**입니다. 사용자에게 메시지 인터페이스를 통해 정보와 작업 지원을 제공하는 기능은 `Virtual Agent`입니다.

---

### Q165. New records, new groups, and modified configuration Items (Cls): what do they have in common?

- **A. They are included in an Update Set**
- B. They are not captured in an Update Set
- C. They are customizations
- D. They do not have anything in common

**Answer:** A

*해설:* 정답은 **A**입니다. 일반적으로 Update Set은 구성 변경을 캡처하므로 이 문장도 그 의미로 이해할 수 있습니다.

---

### Q166. What do you call any component that needs to be managed in order to deliver services?

- A. CSDM Items
- B. CMDB
- **C. Configuration item**
- D. Service Offerings
- E. Asset

**Answer:** C

*해설:* 정답은 **C**입니다. 서비스 제공을 위해 관리해야 하는 모든 구성요소는 `Configuration Item`입니다.

---

### Q167. What are the components that make up a filter condition? (Choose three.)

- **A. Operator**
- B. Match Criteria
- **C. Value**
- D. Column
- **E. Field**

**Answer:** A,C,E

*해설:* 정답은 **A,C,E**입니다. 필터 조건은 `Field`, `Operator`, `Value`로 구성됩니다.

---

### Q168. When designing a flow, how do you reference data from a record, in that flow?

- A. Drag the table icon onto the flow definition
- B. Use the condition builder to specify the desired values
- C. Specify the source table on the data pill related list
- **D. Drag the data pill onto the flow definition**
- E. Add the table reference using the slush bucket

**Answer:** D

*해설:* 정답은 **D**입니다. Flow Designer에서는 데이터 레코드 값을 `Data Pill`로 드래그하여 참조합니다.

---

### Q169. Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?

- **A. System Notification > Email > Notifications**
- B. Administration > Notification Overview
- C. System Properties > Email > Settings
- D. User Preferences > Email > Notifications
- E. Click Gear > Notifications > New

**Answer:** A

*해설:* 정답은 **A**입니다. 새 알림 템플릿을 만들 때 기본적으로 이동하는 모듈은 `System Notification > Email > Notifications`입니다.

---

### Q170. On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?

- **A. Before, After, Async, Display**
- B. Prior to, Synchronous, on Update
- C. Insert, Update, Delete, Query
- D. Before, Synchronous, Scheduled Job, View

**Answer:** A

*해설:* 정답은 **A**입니다. Business Rule의 `When` 설정에는 `Before`, `After`, `Async`, `Display` 옵션이 있습니다.

---

### Q171. What do you activate when you want to add applications or functionality within your development instance?

- A. App Package
- B. Updated Pack
- C. Patch
- **D. Plugin**
- E. App Updated Set

**Answer:** D

*해설:* 정답은 **D**입니다. 개발 인스턴스에 애플리케이션이나 기능을 추가하려면 `Plugin`을 활성화합니다.

---

### Q172. What is a no-code approach to control the mandatory or read-only state of a form field?

- A. UI Action
- B. Client Script
- C. UI Script
- D. UI RuIe
- **E. UI Policy**

**Answer:** E

*해설:* 정답은 **E**입니다. 필드를 필수 또는 읽기 전용 상태로 제어하는 코드 없는 방법은 `UI Policy`입니다.

---

### Q173. What is the purpose of a Data Policy?

- A. Data Policies enforce security
- B. Data Policies standardize data in Update Sets
- **C. Data Policies enforce data consistency**
- D. Data Policies apply to lists to standard data

**Answer:** C

*해설:* 정답은 **C**입니다. Data Policy는 입력 경로에 관계없이 데이터 일관성을 강제합니다.

---

### Q174. What would NOT appear in the Application Navigator if "service" is typed into the filter field?

- A. Configuration > Business Services
- B. Self-Service > Knowledge
- C. Service Portal > Widgets
- **D. Incident > Assigned to me**

**Answer:** D

*해설:* 정답은 **D**입니다. 검색어 `service`가 포함되지 않은 모듈은 Application Navigator 필터 결과에 나타나지 않습니다.

---

### Q175. Access Control rules may provide access security for which of the following database objects?

- A. For a specific role, group, or user
- B. For a specific row, column, or table
- C. For specific groups
- **D. For a specific CMDB Configuration item**

**Answer:** D

*해설:* 정답은 **D**입니다. ACL은 특정 데이터 객체와 작업에 대한 액세스 제어를 제공합니다.

---

### Q176. What is a key difference between Reporting and Performance Analytics?

- **A. Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run.**
- B. Performance Analytics can show trends; Reports cannot.
- C. Reports can be run on a scheduled basis; Performance Analytics cannot.
- D. Performance Analytics is only for dashboards, while Reporting is only for lists.

**Answer:** A

*해설:* 정답은 **A**입니다. Performance Analytics는 시간에 따른 스냅샷을 제공하고 보고서는 현재 시점의 데이터를 보여줍니다.

---

### Q177. You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)

- A. Select Fields and Columns module
- **B. Right click on form header, select Configure > Form Layout**
- **C. Click on context menu, select Configure > Form Designer**
- D. Select Field Class Manager module

**Answer:** B,C

*해설:* 정답은 **B,C**입니다. 새 필드를 추가하려면 `Form Layout`이나 `Form Designer`에 접근해야 합니다.

---

### Q178. A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?

- A. Have them clear their cache.
- B. Have them use the gear icon to set the employee's time zone.
- C. Recommend they use Chrome, instead of Explorer.
- D. Use the system properties to correct the instance's time zone.
- **E. Have them correct the time zone on their computer.**

**Answer:** E

*해설:* 정답은 **E**입니다. 사용자 컴퓨터의 시간대가 잘못 설정돼 있으면 창에 표시되는 시간이 일치하지 않을 수 있습니다.

---

### Q179. What are two ways to generate an Event? (Choose two.)

- **A. Business Rule**
- **B. Workflow**
- C. Log entry
- D. Knowledge article publication

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. 이벤트는 Business Rule과 Workflow를 통해 생성될 수 있습니다.

---

### Q180. When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?

- A. Turn your computer off and on again
- B. Clear browser cache
- C. End Impersonation
- **D. Log out and back in**

**Answer:** D

*해설:* 정답은 **D**입니다. 사용자 가장 모드에서 벗어나려면 로그아웃 후 다시 로그인하는 것이 가장 확실한 방법입니다.

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

*해설:* 정답은 **A,E,F,G**입니다. 보고서 페이지에서 서로 다른 대상 그룹에 따라 표시되는 보고서를 구분할 수 있습니다.

---

### Q182. Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?

- **A. Task [task]**
- B. Assignment [assignment]
- C. Service [service]
- D. Workflow [workflow]

**Answer:** A

*해설:* 정답은 **A**입니다. Incident와 Problem 테이블은 공통 필드를 제공하는 기본 테이블 `Task`를 확장합니다.

---

### Q183. How are local flow variables accessed in the Flow Designer Data panel?

- A. As newly generated icons
- B. As scratchpad variables
- C. As new tabs
- **D. As data pills**

**Answer:** D

*해설:* 정답은 **D**입니다. Flow Designer에서 로컬 변수는 `Data Pill`로 표시되어 사용할 수 있습니다.

---

### Q184. What is an Event in ServiceNow?

- A. An Event is a trigger that has a direct response in the platform
- **B. An Event is an indication to the ServiceNow processes that something has occurred**
- C. An Event is an indicator that a Priority 1 (P1) Incident has been logged
- D. An Event is a recognized, scheduled occurrence of a process

**Answer:** B

*해설:* 정답은 **B**입니다. 이벤트는 ServiceNow 프로세스에서 어떤 일이 발생했음을 알리는 신호입니다.

---

### Q185. What is the primary application used to load data into ServiceNow?

- A. Service Level Management
- B. Configuration
- **C. System Import Sets**
- D. System Update Sets

**Answer:** C

*해설:* 정답은 **C**입니다. 데이터를 ServiceNow로 가져오는 기본 애플리케이션은 `System Import Sets`입니다.

---

### Q186. In addition to the admin role, which one of the following roles allows a user to add or remove fields from a list?

- **A. personalize.control**
- B. personal_list
- C. ul_page_admin
- D. ui_action_admin

**Answer:** A

*해설:* 정답은 **A**입니다. 리스트 컬럼을 추가하거나 제거하는 개인화 권한은 `personalize.control` 역할로 허용할 수 있습니다. 단순 사용자 역할이나 UI Action 관리 역할과는 목적이 다릅니다.

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

*해설:* 정답은 **A,E,G**입니다. 관리자 관점에서 자주 쓰는 보안 모듈은 보안 관련 시스템 속성, ACL 설정, High Security Settings입니다. 다른 보기는 표준 보안 관리 모듈명으로 보기 어렵습니다.

---

### Q188. What is the difference between a Ul Policy and Data Policy?

- A. Data Policies run only after Ul Policies run successfully
- B. Data Policies run regardless of how data is entered Into ServiceNow, while Ul Policies are used for form
- C. Data Policies can be converted into Ul Policies, but Ul Policies can not be converted into Data Policies
- **D. Data Policies run when data is entered through the form, by an Import Set or by web services, while Ul**

**Answer:** D

*해설:* 정답은 **D**입니다. Data Policy는 폼 입력뿐 아니라 Import Set과 Web Service 같은 다른 입력 경로에도 적용됩니다. 반면 UI Policy는 주로 폼 UI에서 필드 상태를 제어합니다.

---

### Q189. What is used frequently to move customizations from one instance to another?

- **A. Update Sets**
- B. Code Sets
- C. Update Packs
- D. Configuration Logs
- E. Remote Sets
- F. Local Sets
- G. Code Packs

**Answer:** A

*해설:* 정답은 **A**입니다. 인스턴스 간 커스터마이징 이동에 가장 자주 사용하는 단위는 `Update Set`입니다. 코드 변경과 설정 변경을 묶어 배포할 때 기본적으로 사용합니다.

---

### Q190. How is a group defined in ServiceNow?

- A. A group is one record stored in the Group Type [sys_user_group_type] table
- **B. A group is one record stored in the Group [sys_user_group] table**
- C. A group defines a set of users that share the same location
- D. A group defines a set of users that share the same job title

**Answer:** B

*해설:* 정답은 **B**입니다. ServiceNow에서 그룹은 `sys_user_group` 테이블의 한 레코드로 정의됩니다. 위치나 직책이 같은 사용자 집합이라는 설명은 운영 개념일 수 있지만, 저장 구조 자체를 묻는 답은 아닙니다.

---

### Q191. When creating a global custom table named "abc", what is the table name that is automatically assigned by the platform?

- A. snc_abc
- B. abc
- **C. u_abc**
- D. sys_abc

**Answer:** C

*해설:* 정답은 **C**입니다. 전역 커스텀 테이블은 기본적으로 `u_` 접두사를 사용하므로 `abc`라는 이름으로 만들면 `u_abc`가 자동 테이블명이 됩니다.

---

### Q192. Which of the following protects applications by identifying and restricting access to available files and data?

- A. Application Configuration
- B. Verbose Log
- C. Access Control Rules
- **D. Application Scope**

**Answer:** D

*해설:* 정답은 **D**입니다. 애플리케이션이 접근할 수 있는 파일과 데이터 범위를 제한하는 핵심 개념은 `Application Scope`입니다. ACL은 레코드 접근 제어에 가깝고, 애플리케이션 경계 자체를 설명하는 답은 아닙니다.

---

### Q193. When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?

- A. Look up their password, so you can login with their account
- **B. Initiate a Connect Chat session**
- C. Install the Bomgar plug-in
- D. Impersonate the user
- E. Launch a NowChat window

**Answer:** B

*해설:* 정답은 **B**로 유지했습니다. 다만 일반적으로는 사용자 가시 모듈 확인에 `Impersonate`가 더 자연스럽기 때문에, 현재 복원된 보기와 정답 조합은 신뢰도가 높지 않습니다. 현 문서에서는 source answer token을 따라 유지합니다.

---

### Q194. Which one of the following is NOT a type of Visual Task Board?

- **A. Feature**
- B. Guided boards
- C. Flexible
- D. Freeform

**Answer:** A

*해설:* 정답은 **A**입니다. Visual Task Board의 대표 유형은 Guided, Flexible, Freeform이며 `Feature`는 보드 타입 명칭이 아닙니다.

---

### Q195. Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?

- **A. Common Service Data Model (CSDM)**
- B. Service Mapping Utility (SMU)
- C. Service Schema Map (SSM)
- D. CMDB Class Manager (CMDBCM)
- E. CI Class Manager (CICM)

**Answer:** A

*해설:* 정답은 **A**입니다. 애플리케이션 데이터가 어떤 CMDB 테이블에 매핑되어야 하는지에 대한 표준 프레임워크는 `CSDM`입니다. 공통 서비스 모델을 맞추기 위한 기준 체계입니다.

---

### Q196. What is the difference between a UI Policy and Data Policy?

- A. Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI
- B. Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies
- **C. Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form**
- D. Data Policies run only after UI Policies run successfully

**Answer:** C

*해설:* 정답은 **C**입니다. Data Policy는 데이터가 어떤 경로로 들어오든 일관되게 적용되고, UI Policy는 폼 화면에서 필드 상태를 제어하는 데 초점이 있습니다. 즉 적용 범위가 더 넓은 쪽이 Data Policy입니다.

---

### Q197. Group records are stored in which table?

- A. Group [sn_user_group]
- **B. Group [sys_user_group]**
- C. Group [s_sys_group]
- D. Group [u_sys_group]

**Answer:** B

*해설:* 정답은 **B**입니다. 그룹 레코드는 `sys_user_group` 테이블에 저장됩니다. 다른 접두사 조합은 기본 그룹 테이블명이 아닙니다.

---

### Q198. What is a Notification?

- A. A new Knowledge article created by a Business Rule
- **B. A tool for alerting users that events that concern them have occurred**
- C. A message through Connect related to a Change Request
- D. An email file attachment

**Answer:** B

*해설:* 정답은 **B**입니다. Notification은 사용자와 관련된 이벤트가 발생했을 때 이를 알려 주는 알림 메커니즘입니다. 메일, 푸시 등 다양한 채널로 전달될 수 있습니다.

---

### Q199. What are examples of Core tables in the ServiceNow platform?

- A. Configuration, Connect, Chat
- B. Team, Party, Awards
- **C. User, Task, Incident**
- D. Work, Caller, Timecard

**Answer:** C

*해설:* 정답은 **C**입니다. `User`, `Task`, `Incident`는 ServiceNow 기본 플랫폼에서 핵심적으로 사용하는 대표 테이블입니다. 다른 보기들은 표준 core table 조합으로 보기 어렵습니다.

---

### Q200. Which data consistency settings can be achieved using UI Policy? Choose 3 answers

- A. Setting fields to accept the data with an n number of characters
- **B. Setting fields hidden**
- C. Setting fields to accept the data in an expected format
- **D. Settings fields read-only**
- **E. Setting fields mandatory**

**Answer:** B,D,E

*해설:* 정답은 **B,D,E**입니다. UI Policy로 제어할 수 있는 대표 필드 상태는 숨김, 읽기 전용, 필수입니다. 입력 형식 검증이나 글자 수 제한은 다른 메커니즘이 더 적합합니다.

---

### Q201. Which is the most efficient way to move large amounts of data between instances?

- A. Export to Data Package
- **B. Export to XML**
- C. Update Sets
- D. Export to Zip

**Answer:** B

*해설:* 정답은 **B**입니다. 대량 데이터를 인스턴스 간 이동할 때는 XML 내보내기가 가장 흔하고 효율적인 방법으로 제시됩니다. Update Set은 데이터보다 커스터마이징 이동에 더 적합합니다.

---

### Q202. Which module would you use to customize your instances banner image, text and colors? A Homepage Admin > Pages > Branding

- A. System Ul > Ul Pages > Branding
- B. System Properties > Branding
- C. System Properties > Basic Configuration UI16
- **D. Service Portal > Portals > Branding**

**Answer:** D

*해설:* 정답은 **D**로 유지했습니다. 다만 보기와 일반적인 UI16 구성 지점 사이에 다소 어긋남이 있어 복원 신뢰도는 아주 높지 않습니다. 현재 문서에서는 source 기준 answer token을 따릅니다.

---

### Q203. What feature allows, you to limit who is able to contribute or read knowledge within a knowledge base?

- A. Categories
- B. Roles
- **C. User Criteria**
- D. Groups

**Answer:** C

*해설:* 정답은 **C**입니다. Knowledge Base에서 누가 읽고 기여할 수 있는지 제한하는 표준 기능은 `User Criteria`입니다. 역할이나 그룹만으로 직접 제어하는 것보다 지식 접근 제어에 더 적합합니다.

---

### Q204. An order for new office equipment has Men placed through the Service Catalog. How would you view the lists of requests after the orders have Men placed?

- **A. All > Service Catalog > Open Records > Items**
- B. In the Navigation Filter, type 'requests. Let' and press the Enter key.
- C. All > Tables and Columns > Taste
- D. All > Service Catalog > Requests

**Answer:** A

*해설:* 정답은 **A**입니다. 주문 이후 생성된 항목 목록을 보려면 Service Catalog의 Open Records 아래 Items 경로로 들어가 확인하는 흐름이 맞습니다. 단순 요청 개요가 아니라 생성된 요청 항목 목록을 보는 문제입니다.

---

### Q205. On a form header, what icon would you click to access Template features?

- A. Paper clip
- **B. More options (...)**
- C. Stamp
- D. Context Menu

**Answer:** B

*해설:* 정답은 **B**입니다. 폼 헤더에서 템플릿 기능은 보통 `More options (...)` 메뉴를 통해 접근합니다. 템플릿은 별도 첨부나 스탬프 아이콘으로 바로 여는 기능이 아닙니다.

---

### Q206. What component causes a flow to run after a record has been created or updated?

- A. Date-based trigger
- **B. Record-based trigger**
- C. On-change trigger
- D. Application-based trigger
- E. Updated-date trigger

**Answer:** B

*해설:* 정답은 **B**입니다. 레코드가 생성되거나 갱신될 때 플로우를 시작하는 구성요소는 `Record-based trigger`입니다. 날짜 기반이나 애플리케이션 기반 트리거와는 시작 조건이 다릅니다.

---

### Q207. What is the primary objective of the Display Business Rule?

- A. To monitor fields on a form, and provide feedback
- **B. To use a shared g_scratchpad object, which can be sent to the client, as part of the form**
- C. To set files to mandatory, hidden, and read-only
- D. To define what happens on a form, when a particular fled changes

**Answer:** B

*해설:* 정답은 **B**입니다. Display Business Rule의 대표 목적은 서버에서 계산한 값을 `g_scratchpad`에 담아 클라이언트로 넘기는 것입니다. 폼 표시 시 필요한 보조 데이터를 전달하는 용도입니다.

---

### Q208. What module do you use to access the reports that are available to you?

- **A. Report > View /Run**
- B. Reports > Homepage
- C. Self-Service>My Reports
- D. Report > Overview

**Answer:** A

*해설:* 정답은 **A**입니다. 현재 사용자에게 제공된 보고서를 열고 실행하는 기본 경로는 `Report > View / Run`입니다. 새 보고서 작성 경로나 홈 대시보드와는 구분됩니다.

---

### Q209. A task worker asks how they can monitor any updates occurring to recands assigned to him, like responses from customers, What do you suggest?

- A. Open an Agent workspace tab for each record he wants to monitor
- B. Select Service Desk > My Work Dashboard
- C. Click on the eyeglass icon to. expand the Monitor frame
- **D. On My Work list, select the Activity Stream icon to show a frame with live updates**

**Answer:** D

*해설:* 정답은 **D**입니다. My Work 리스트에서 Activity Stream 아이콘을 열면 담당 레코드의 최근 업데이트를 실시간에 가깝게 추적할 수 있습니다. 각 레코드를 따로 열어 두는 것보다 효율적인 방법입니다.

---

### Q210. When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?

- A. Trigger runtime value
- B. Sequence runtime value
- C. Starting runtime value
- **D. Data pill runtime value**
- E. Input runtime value

**Answer:** D

*해설:* 정답은 **D**입니다. 플로우 실행 중 유지되는 런타임 값은 현재 보기 기준으로 `Data pill runtime value`로 복원되어 있습니다. 핵심은 플로우 전반에서 재사용되는 실행 시점 값을 묻는 문제입니다.

---

### Q211. Which feature can be used to categorize a set of records from a list and make them visible to other users?

- **A. Tags**
- B. History
- C. Favorites
- D. Activity Formatter

**Answer:** A

*해설:* 정답은 **A**입니다. 여러 레코드를 분류하고 다른 사용자와도 보이게 관리하려면 `Tags`를 사용합니다. 개인 즐겨찾기나 히스토리와는 목적이 다릅니다.

---

### Q212. User records are stored in which table?

- **A. User [sys_user]**
- B. User [sn_user]
- C. User [u_sys_user]
- D. User [s_user]

**Answer:** A

*해설:* 정답은 **A**입니다. 사용자 레코드는 기본적으로 `sys_user` 테이블에 저장됩니다. 다른 접두사 조합은 표준 사용자 테이블명이 아닙니다.

---

### Q213. When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?

- **A. On the Iist, locate and right click on the value Hardware, select Show Matching**
- B. Click Funnel ten, type Hardware and click enter
- C. On the Category column header, right click and select Show > Hardware
- D. Right dick on magnifier, type Hardware and click enter
- E. On Breadcrumb, click > icon, type Hardware and click enter

**Answer:** A

*해설:* 정답은 **A**입니다. 리스트에서 특정 값만 빠르게 보려면 해당 값 `Hardware`를 우클릭하고 `Show Matching`을 선택하면 됩니다. 가장 빠른 값 기반 필터 적용 방법을 묻는 문제입니다.

---

### Q214. If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?

- A. A server script
- **B. A client script**
- C. A fix script
- D. A business rule

**Answer:** B

*해설:* 정답은 **B**입니다. 사용자가 폼에서 Priority 값을 바꾸는 즉시 반응하는 스크립트는 브라우저에서 실행되는 `Client Script`입니다. 서버 측 Business Rule은 이런 즉시 UI 반응을 직접 처리하지 않습니다.

---

### Q215. Which role(s) are required to impersonate a user? Choose 2 answers

- **A. admin**
- B. sys_admin
- C. security_admin
- D. sys_user
- **E. impersonator**

**Answer:** A,E

*해설:* 정답은 **A,E**입니다. 사용자 가장 기능은 기본적으로 `admin` 또는 `impersonator` 역할이 있어야 수행할 수 있습니다. 일반 사용자 역할만으로는 다른 계정으로 전환할 수 없습니다.

---

### Q216. If users would like to locate and assign a task to themselves in the Platform, What action could they perform from the list view to make the assignment? Choose 2 answers

- A. Select the record using the check box, then select the Person icon
- B. Double click on the Assigned to value, type the name of the user, and select the green check
- **C. Select the record using the check box then select the Assign To Me UI action on the List Header**
- **D. Right click on the Task number and select the Assign to me option in the menu**
- E. Select the Task number, and select the Assign to me UI action on the form

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 리스트 보기에서 작업을 수행하려면 `Assign To Me` UI action과 관련된 컨텍스트 메뉴 접근 방식이 올바른 선택입니다.

---

### Q217. An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? Choose 2 answers

- **A. A record of sc_task**
- **B. A record of sc_req_item table**
- C. A change record
- D. An Incident record
- E. A problem record

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. 카탈로그 주문은 요청 항목(RITM)과 카탈로그 작업(sc_task)으로 구성되는 경우가 많습니다.

---

### Q218. How would you navigate to the Schema map for a table?

- A. System Dictionary > Show Schema Map; Select Table
- **B. System Definition > Tables; Select Table; Go to Related links and click Show Schema Map**
- C. System Definition > Show Schema Map; Select Table
- D. System Definition > Dictionary: Select Table; Go to Related links and click Show Schema Map

**Answer:** B

*해설:* 정답은 **B**입니다. Schema Map은 `System Definition > Tables`에서 원하는 테이블을 연 뒤 Related Links의 `Show Schema Map`으로 이동해 확인합니다. 테이블 구조와 관계를 시각적으로 보는 표준 경로입니다.

---

### Q219. When an administrator sets a policy that is applied to all data entered into the Platform (UI, Import Sets, or Web Services), where does this policy run by default?

- A. Network
- **B. Server**
- C. Client
- D. Browser

**Answer:** B

*해설:* 정답은 **B**입니다. UI, Import Set, Web Service 전반에 적용되는 정책은 기본적으로 서버에서 실행됩니다. 그래서 Data Policy가 여러 입력 경로에 공통 적용될 수 있습니다.

---

### Q220. When selecting the Target table for an import, which tables can you select? Choose 3 answers

- **A. Tables within the global scope**
- **B. Tables within the existing application scope**
- C. Tables outside of ServiceNow
- **D. Tables which allow write access to other applications**
- E. Related tables, using Dot Walk

**Answer:** A,B,D

*해설:* 정답은 **A,B,D**입니다. Import의 Target table은 전역 스코프 테이블, 현재 애플리케이션 스코프 테이블, 그리고 다른 앱 쓰기 허용 테이블 중에서 선택할 수 있습니다. ServiceNow 밖의 테이블이나 dot-walk 대상은 직접 Target table이 아닙니다.

---

### Q221. On Access Control Definitions, what are ways you can set the permissions on a Table? Choose 3 answers

- A. Groups
- B. CRUD
- **C. Roles**
- **D. Script that sets the answer variable to true or false**
- **E. Conditional Expressions**

**Answer:** C,D,E

*해설:* 정답은 **C,D,E**입니다. 테이블 ACL에서는 역할, 조건식, 그리고 `answer` 값을 true/false로 정하는 스크립트를 이용해 권한을 제어할 수 있습니다. CRUD는 operation 종류이지 permission 설정 방식 자체는 아닙니다.

---

### Q222. What are the steps for importing data using an import set?

- A. Select source file; Run automap; Transform data; Clean up target table
- B. Set up LDAP; Test map: Create update set; Run import: Apply update set
- C. Identify source; Import transform map: Run transformer; Verity import
- **D. Load the data; Create transform map; Transform data; Clean up import table**

**Answer:** D

*해설:* 정답은 **D**입니다. Import Set 절차는 데이터를 로드하고, Transform Map을 만든 뒤, 변환을 실행하고, 마지막으로 import table을 정리하는 순서로 이해하면 됩니다.

---

### Q223. When moving a homepage or dashboard between instances, what must you remember?

- A. Create a separate update set for them
- B. They are automatically added to the update set
- **C. Manually add them to the update set**
- D. They cannot be moved via update set

**Answer:** C

*해설:* 정답은 **C**입니다. 홈페이즈나 대시보드는 Update Set에 자동으로 항상 잡히지 않으므로, 이동하려면 수동으로 추가하는 점을 기억해야 합니다.

---

### Q224. What is the platform name for the Group table?

- **A. SyS_USer_group**
- B. Sys_group
- C. group
- D. sys_groups

**Answer:** A

*해설:* 정답은 **A**입니다. Group 테이블의 플랫폼명은 대소문자를 무시하면 `sys_user_group`입니다. 보기 A는 표기만 혼재돼 있지만 의미상 해당 테이블을 가리킵니다.

---

### Q225. When adding a related list to a form, you choose the related list from the list callector, What is an example of a related list you might see on the list collector? Choose 3 answers

- A. Release Phase==Parent
- **B. Catalog Task->Parent**
- **C. HR Case-=Parent**
- D. Problem==Parent
- **E. Outage->Task number**

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. Related list collector에는 부모 레코드와 실제로 연결 가능한 관계가 보이며, 현재 보기 기준으로는 Catalog Task, HR Case, Outage 같은 항목이 그 예입니다.

---

### Q226. What ServiceNow feature allows you to include data from a secondary related table on a report?

- A. SQL
- **B. Dot Walking**
- C. Outer Join
- D. Joins

**Answer:** B

*해설:* 정답은 **B**입니다. 보고서에서 관련된 다른 테이블의 값을 함께 끌어오려면 `Dot Walking`을 사용합니다. 조인 SQL을 직접 작성하는 방식이 아니라 플랫폼이 제공하는 참조 추적 기능입니다.

---

### Q227. On the Form header, which icon do you use to access form templates?

- A. Paperclip
- B. Pages
- C. Stamp
- **D. More Options {...)**

**Answer:** D

*해설:* 정답은 **D**입니다. 폼 템플릿 기능은 보통 헤더의 `More Options` 메뉴에서 접근합니다. 질문은 폼 헤더에서 템플릿으로 들어가는 아이콘 위치를 묻습니다.

---

### Q228. What does ServiceNow recommend as a best practice regarding data imports?

- A. Adjust your Transform maps, after the data is loaded into the target table.
- B. Use extremely large Import Sets, instead of multiple large Import Sets.
- C. Create a new Import set table for each new data load.
- **D. Plan time before your import to remove obsolete or inaccurate data.**
- E. Monitor data quality and clean imported data, using the Data Scrub Workspace.

**Answer:** D

*해설:* 정답은 **D**입니다. 데이터 import 전에는 오래됐거나 부정확한 데이터를 미리 정리하는 것이 권장됩니다. 가져온 뒤에 뒤늦게 정리하는 것보다 사전 정제가 안전합니다.

---

### Q229. Which type of scripts nun in the browser?

- A. Script include Scripts
- B. Business Rule Scripts
- C. Access Contra! Scripts
- **D. Ul Policies and Client Scripts**

**Answer:** D

*해설:* 정답은 **D**입니다. 브라우저에서 동작하는 쪽은 UI Policy와 Client Script입니다. Business Rule이나 Script Include는 서버 측 실행에 가깝습니다.

---

### Q230. When building an extended table from a base table, which fields do you need to create? Choose 2 answers

- A. The mandatory fields for the base table.
- B. The reference fields for the base table.
- **C. The fields that are not in the base table.**
- **D. The fields that are specific to the extended table.**

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 확장 테이블은 부모 테이블의 필드를 상속받으므로 새로 만들어야 하는 것은 부모에 없는 필드, 즉 자식 테이블 전용 필드입니다.

---

### Q231. Which is the base table of the configuration management database hierarchy?

- A. cmdb_d
- B. ucmdb
- C. cmdb_ret_Oi
- **D. cmdb**

**Answer:** D

*해설:* 정답은 **D**입니다. CMDB 계층의 최상위 기본 테이블은 `cmdb`로 복원되어 있습니다. 이 문항은 CI 클래스 계층의 출발 테이블명을 묻습니다.

---

### Q232. A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: *Requested for*Requested by *Approving manager* Delivery instructions All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?

- **A. Create one Variable Set for the four variables; then add that variable set to each of the 80 catalog items. B. Create a Record Producer that contains the four fields: then add to the record producer related list on the**

**Answer:** A

*해설:* 정답은 **A**입니다. 공통으로 반복되는 네 개 변수는 하나의 `Variable Set`으로 만들고 각 Catalog Item에 재사용하는 것이 가장 효율적입니다. 80개 항목에 같은 변수를 각각 따로 만드는 방식보다 유지보수가 훨씬 쉽습니다.

---

### Q233. What is the most common role that has access to almost all platform features, functions, and data?

- A. Security Admin [security_admin]
- B. Sys Admin [sys_admin]
- **C. Admin [sn_admin]**
- D. System Administrator [admin]
- E. Base Admin [base_admin]

**Answer:** C

*해설:* 정답은 **C**로 유지했습니다. 다만 일반적으로 광범위한 권한 역할은 `admin` 표기가 더 익숙하므로 보기 복원 품질은 다소 불안정합니다. 현재 문서에서는 source answer token을 따라 이 답을 유지합니다.

---

### Q234. If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?

- A. itil users
- B. Any user with an article's permalink
- **C. Any active user**
- D. No users
- E. Users with kb_user role

**Answer:** C

*해설:* 정답은 **C**입니다. 별도의 접근 제한이 정의되지 않았다면 현재 보기 기준으로는 모든 활성 사용자에게 읽기 권한이 열린 것으로 해석합니다.

---

### Q235. What does Natural Language Query allow you to do on a list?

- **A. Automatically select a filter, based on keywords**
- B. Filter list by typing in a phrase
- C. Predict the filter desired by the user
- D. Speak to the condition builder
- E. Set list filter, using audible commands

**Answer:** A

*해설:* 정답은 **A**입니다. Natural Language Query는 사용자가 입력한 키워드를 바탕으로 적절한 필터를 자동 제안하거나 선택하게 해 주는 기능입니다. 조건 빌더를 음성으로 조작하는 기능은 아닙니다.

---

### Q236. When a custom table is created, which access control rules are automatically created? Choose 4 answers

- **A. delete**
- **B. create**
- C. execute
- **D. read**
- E. update
- **F. write**

**Answer:** A,B,D,F

*해설:* 정답은 **A,B,D,F**입니다. 커스텀 테이블 생성 시 기본적으로 생성되는 ACL은 create, read, delete, write입니다. execute는 일반적인 테이블 ACL 기본 생성 대상이 아닙니다.

---

### Q237. What role enables someone to authorize a request, with no other permissions on the platform?

- **A. Approver [approver-user]**
- B. Authorize [authorize-user]
- C. Reviewer [reviewer_user]
- D. Approver Group [approval_group]
- E. Verification [verify_user]

**Answer:** A

*해설:* 정답은 **A**입니다. 요청 승인만 할 수 있고 다른 광범위한 권한은 없는 최소 역할은 현재 보기 기준으로 `Approver`입니다. 승인 전용 역할을 묻는 문제입니다.

---

### Q238. What actions are taken to filter a long list of records to show only those which have "email" in Short Description?

- A. Click List Magnifier to expand column search. on Short Description type %email. click enter
- B. Click List Magnifier to expand column search, on Short Description, type email, click enter
- C. On Search box. select text, type email, click enter
- **D. Click List Magnifier to expand column search, on Short Description type 'email, dick enter**

**Answer:** D

*해설:* 정답은 **D**입니다. 긴 리스트에서 Short Description에 특정 문자열이 포함된 항목만 보려면 리스트 검색을 확장한 뒤 해당 컬럼에 `email`을 입력해 필터링하면 됩니다. 컬럼 단위 검색 사용법을 묻는 문제입니다.

---

### Q239. The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?

- A. Properties
- **B. Data**
- C. Configure
- D. Type
- E. Sources

**Answer:** B

*해설:* 정답은 **B**입니다. 보고서 디자이너에서 보고 유형을 지정하는 옵션은 `Report Designer`입니다.

---

### Q240. When managing tags, you can adjust who is able to see iL What are the visibility options? Choose 3 answers

- A. Admins
- **B. Everyone**
- **C. Groups and Users**
- D. Roles and Permissions
- **E. Me**

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. 태그 가시성은 `Me`, `Groups and Users`, `Everyone` 같은 범위로 조정할 수 있습니다. 관리자 전용이나 역할 기반만으로 나누는 보기는 현재 기준 정답이 아닙니다.

---

### Q241. What setting allows users to view a Knowledge Base article even if the are not logged in?

- A. The View All setting
- B. The Allow role
- C. The ESS role
- **D. The Public setting**

**Answer:** D

*해설:* 정답은 **D**입니다. 로그인하지 않은 사용자도 지식 문서를 보게 하려면 해당 문서를 `Public` 설정으로 노출해야 합니다. 내부 전용 지식 문서와 구분되는 공개 접근 설정입니다.

---

### Q242. In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?

- A. Field Icon
- B. Field Value
- **C. Data Pill**
- D. Data Element
- E. Data Trigger

**Answer:** C

*해설:* 정답은 **C**입니다. Flow Designer에서 액션 결과 데이터는 `Data Pill` 형태로 저장되어 이후 단계에서 다시 사용할 수 있습니다. 다음 액션 입력값으로 끌어다 쓰는 바로 그 객체를 묻는 문제입니다.

---

### Q243. What is the language used for scriptingin ServiceNow?

- **A. JavaScript**
- B. C++
- C. PHP
- D. Python

**Answer:** A

*해설:* 정답은 **A**입니다. ServiceNow의 기본 스크립팅 언어는 `JavaScript`입니다. 클라이언트와 서버 모두 JavaScript 기반으로 스크립트를 작성합니다.

---

### Q244. Which element is used to track items not saved with a field, in a record?

- A. Sidebar
- B. List Editor
- **C. Activity formatter**
- D. Dictionary

**Answer:** C

*해설:* 정답은 **C**입니다. 필드 자체에 저장되지 않는 작업 이력이나 메모 같은 항목은 `Activity Formatter`에서 추적하고 보여 줍니다. 저널형 변경 이력을 표시하는 영역입니다.

---

### Q245. What actions are taken to filter a long list of records to show only those with the Category of Hardware?

- A. On Breadcrumb, click the > icon, type Hardware and click enter
- B. On the Category column header, right-click and select Show > Hardware
- **C. On the list, locate and right-click on the value Hardware, select Show Matching**
- D. Right-click on magnifier type Hardware and click enter
- E. Click Funnel icon, type Hardware and click enter

**Answer:** C

*해설:* 정답은 **C**입니다. 리스트에서 `Hardware` 값 자체를 우클릭한 뒤 `Show Matching`을 선택하면 해당 값만 빠르게 필터링할 수 있습니다. 값 기반 즉시 필터의 대표 사용법입니다.

---

### Q246. You have heard about a new application released by SericeNow, You want to try it out, to- see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?

- A. Check the latest release notes at docs.servicenow.com.
- **B. Activate the application plug in, on your personal dev instance.**
- C. Search the wiki for the sales demo request form.
- D. Activate the application plug in, on your company's production instance.

**Answer:** B

*해설:* 정답은 **B**입니다. 새 애플리케이션을 직접 시험해 보려면 개인 개발 인스턴스에서 플러그인을 활성화해 보는 것이 가장 안전합니다. 운영 인스턴스에서 바로 켜는 것은 적절한 첫 단계가 아닙니다.

---

### Q247. Which modules can you use to create a new table? Choose 2 answers

- **A. Tables & Columns**
- B. Schema Map
- C. Dictionary
- **D. Tables**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 새 테이블 생성은 `Tables & Columns` 또는 `Tables` 모듈에서 시작할 수 있습니다. Schema Map이나 Dictionary는 조회와 관리에는 유용하지만 테이블 생성 진입점은 아닙니다.

---

### Q248. What are examples of Ul Actions, relating to Lists? Choose 4 answers

- **A. List Links**
- **B. List Control**
- **C. List Buttons**
- D. List Context Menu
- E. List Override
- **F. List Choices**

**Answer:** A,B,C,F

*해설:* 정답은 **A,B,C,F**입니다. 현재 보기 기준으로 리스트와 관련된 UI Action 예시는 List Links, List Control, List Buttons, List Choices입니다. List Override는 같은 범주의 표준 예시로 보지 않습니다.

---

### Q249. Which field on every record contains a unique identifier for that record?

- A. sys_number
- B. sc_req_item
- **C. sys_id**
- D. sys_number_id

**Answer:** C

*해설:* 정답은 **C**입니다. 모든 레코드의 고유 식별자는 `sys_id` 필드에 저장됩니다. 플랫폼 전반에서 참조와 API 처리의 기준이 되는 값입니다.

---

### Q250. Which system property is added and set to true in order to see impersonation events in the System Log?

- A. glide user_setting
- B. glide sys all_jmpersonation
- **C. glide sys log_jmpersonabon**
- D. glide.impersonation_setting
- E. glide sys admin_login

**Answer:** C

*해설:* 정답은 **C**로 유지했습니다. 다만 시스템 속성 이름 표기 자체가 손상된 흔적이 있어 이 문항은 복원 신뢰도가 높지 않습니다. 현재 문서에서는 복원된 answer token을 따릅니다.

---

### Q251. When importing spreadsheet data into ServiceNow, what is the first step in the process?

- **A. Create Import Set**
- B. Run Data Scrubber
- C. Set Coalesce
- D. Define Data Source
- E. Select Import Set

**Answer:** A

*해설:* 정답은 **A**입니다. 현재 보기 기준으로 첫 단계는 `Create Import Set`으로 복원돼 있습니다. 이후 Data Source와 Transform Map 흐름이 이어지는 구조입니다.

---

### Q252. What are the three key tables in an enterprise CMDB? Choose 3 answers.

- **A. cmdb**
- B. sn_cmdb_bak
- **C. cmdb_rel_ci**
- D. sn_cmdb
- E. cmdb_bak
- **F. cmdb_ci**
- G. sn_cmdb_ci

**Answer:** A,C,F

*해설:* 정답은 **A,C,F**입니다. 엔터프라이즈 CMDB의 핵심 테이블은 `cmdb`, `cmdb_rel_ci`, `cmdb_ci`입니다.

---

### Q253. On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?

- A. Self Service Module
- **B. Application Navigator**
- C. Service Desk Homepage
- D. Favorites

**Answer:** B

*해설:* 정답은 **B**입니다. Incident Management 같은 애플리케이션 진입점은 `Application Navigator`에서 찾습니다. 좌측 탐색 영역에서 앱과 모듈을 여는 기본 위치입니다.

---

### Q254. When creating a new notification, what must you define? Choose 3 answers

- **A. What is the content of the notification**
- B. The associated knowledge base
- **C. Under what conditions is the notification sent**
- **D. Who receives the notification**
- E. Settings for handling inactive user accounts

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. Notification을 만들 때는 내용, 발송 조건, 수신 대상을 정의해야 합니다. 어떤 지식 베이스에 속하는지는 기본 필수 요소가 아닙니다.

---

### Q255. What table acts as a staging area for records imported from a data source?

- A. Transform Table
- B. Staging Table
- **C. Import Set Row Table**
- D. Temp Table

**Answer:** C

*해설:* 정답은 **C**입니다. 외부 데이터가 대상 테이블로 들어가기 전에 임시 적재되는 staging 영역은 `Import Set Row Table`입니다. 여기서 변환 전 원본 레코드를 보관합니다.

---

### Q256. On a form, which type of Geld has this icon which can be clicked, 10 S00 a preview of the associated record?

- A. Drilkdown
- B. Lookup
- C. Quickview
- D. Preview
- E. Snapshot
- **F. Reference:**

**Answer:** F

*해설:* 정답은 **F**입니다. 연관 레코드를 미리보기 아이콘으로 열어 볼 수 있는 필드 타입은 `Reference`입니다. 다른 테이블 레코드와 연결되는 필드에서 이런 미리보기 기능이 제공됩니다.

---

### Q257. Which admin role is required to make changes to High Security Settings?

- **A. security _admin**
- B. sn_ad_admin
- C. high_sec_admin
- D. admin

**Answer:** A

*해설:* 정답은 **A**입니다. High Security Settings 변경에는 일반 admin보다 높은 `security_admin` 권한이 필요합니다. 보안 관련 민감 설정을 수정하는 전용 관리자 역할입니다.

---

### Q258. What action would an administrator perform on a list if they wanted to show the records in groups, based on the Category column? (Choose 2 answers)

- **A. On the list Context Menu, select Group By > Category**
- B. On the Category column title, select the Context menu > Group By Category
- C. On the Application Navigator, type group.category and press Enter
- **D. Select the Group icon, then select Category**
- E. On the Filter Menu, select Group By > Category

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 리스트를 Category 기준으로 묶어 보려면 Context Menu의 `Group By > Category`를 사용하거나 Group 아이콘에서 Category를 선택하면 됩니다. 둘 다 그룹화 결과는 같습니다.

---

### Q259. If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment? (Choose 2 answers)

- A. Select the record using the check box, then select the Person icon
- B. Select the Task number, and select the Assign to me UI action on the form
- **C. Right-click on the Task number and select the Assign to me option in the menu**
- D. Double-click on the Assigned to value, type the name of the user, and select the green check
- E. Select the record using the check box, then select the Assign To Me UI action on the List Header

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 리스트 보기에서 작업을 수행할 때 컨텍스트 메뉴와 더블 클릭 방식이 적합합니다.

---

### Q260. What features are available in Knowledge Management, to support continuous improvement on the knowledge articles? Choose 4 answers

- A. Submit KB Errata
- **B. Add Comments**
- C. CC Click frowning icon
- **D. Tag as Helpful**
- **E. Flag Article**
- **F. Rate with Stars**

**Answer:** B,D,E,F

*해설:* 정답은 **B,D,E,F**입니다. 지식 문서 개선을 위해 댓글, 도움 여부 표시, 플래그, 별점 평가 기능을 사용할 수 있습니다. 사용자 피드백을 모아 품질을 높이는 대표 기능들입니다.

---

### Q261. A form displays information about one record at the top, for example a User, Additional records, which are associated with that User, are displayed on tabs at the bottom of the form. What are those tabs called?

- A. Additional Info
- B. More Info
- C. Related Links
- **D. Related Lists**

**Answer:** D

*해설:* 정답은 **D**입니다. 폼 하단에서 현재 레코드와 관련된 다른 레코드들을 탭 형태로 보여 주는 영역은 `Related Lists`입니다. Related Links와는 다른 UI 요소입니다.

---

### Q262. A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?

- A. Create New module has a broken link
- B. Known intermittent issue with U115
- C. User should be using Chrome instead of Explorer for their browser
- **D. User has read role, but not the write role on the Inventory table**
- E. User session has timed out

**Answer:** D

*해설:* 정답은 **D**입니다. 모듈과 애플리케이션은 보이지만 새 레코드 생성 화면이 비는 경우는 보통 테이블에 대한 write 권한이 없을 때 발생합니다. 읽기 권한만으로는 Create New를 정상 수행할 수 없습니다.

---

### Q263. You are looking at a list of Active incidents. You want to exclude incidents with the state of Resolved. How might you do that?

- A. On the list of records, locate the right-click on the Resolved value, select Exclude.
- B. Click Funnel icon, click AND, Select Resolved, is Not State click Run
- C. On state column title, right-click, select Filter Out > Resolved
- D. On Search, select State, type not Resolved, press enter
- **E. On the list of records, locate and right-click on the Resolved value, select Filter Out**

**Answer:** E

*해설:* 정답은 **E**입니다. 리스트에서 특정 값을 제외하려면 Filter Out 기능을 사용하면 빠릅니다.

---

### Q264. Which application is used primarily to load data into ServiceNow?

- A. Import Hub
- **B. System Import Sets**
- C. Data Import Configuration
- D. Import Management

**Answer:** B

*해설:* 정답은 **B**입니다. 데이터를 ServiceNow로 적재하는 대표 애플리케이션은 `System Import Sets`입니다. Load Data와 Transform Map 작업이 이 영역에서 이뤄집니다.

---

### Q265. After you create a new table, what is the best practice regarding the navigation pane? Choose 2 answers

- A. Set the filter condition on the Application Menu
- B. Set the font style on both the Application Menu and the Module
- **C. Specify which Roles are able ta see the Module**
- **D. Specify which Roles are able to see the Application Menu**
- E. Create Application Menu with the same name as the table label
- F. Create Module with the plural of the table label

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 새 테이블을 만든 뒤에는 Application Menu와 Module을 어떤 역할이 볼 수 있는지 설정하는 것이 좋은 운영 방식입니다. 탐색창 노출 범위를 역할 기반으로 정리해야 불필요한 메뉴 노출을 줄일 수 있습니다.

---

### Q266. What are advantages of using Flow Designer? (Choose three.)

- A. Supports advanced developers
- B. Enables complicated scripting
- **C. Reduces technical debt**
- **D. Less manual scripting**
- **E. Smooth integration with 3rd party systems**

**Answer:** C,D,E

*해설:* 정답은 **C,D,E**입니다. Flow Designer는 수작업 스크립트를 줄이고 기술 부채를 낮추며, 외부 시스템과의 연계도 비교적 부드럽게 구성할 수 있다는 장점이 있습니다.

---

### Q267. Which tables are available by default in a ServiceNow instance? Choose 3 answers

- **A. User**
- **B. Incident**
- C. Item
- D. Issue
- E. Project
- **F. Task**

**Answer:** A,B,F

*해설:* 정답은 **A,B,F**입니다. `User`, `Incident`, `Task`는 기본 인스턴스에서 바로 제공되는 대표 테이블입니다. 다른 보기들은 기본 제공 테이블로 보기 어렵거나 제품 범주가 다릅니다.

---

### Q268. When using Flow Designer what is the Flow Execution initiated by?

- **A. A trigger**
- B. An existing subflow
- C. Allow logic
- D. An execution data pill

**Answer:** A

*해설:* 정답은 **A**입니다. Flow Designer 실행은 항상 어떤 `Trigger`로 시작됩니다. 이후 조건과 액션이 이어지지만 시작점 자체는 트리거입니다.

---

### Q269. Which set of steps is used to import spreadsheet data into a ServiceNow table?

- **A. Load Data, Create Transform Map, Run Transform**
- B. Select Import Set, Select Transform Map, Run Transform
- C. Select Data Source, Schedule Transform
- D. Define Data Source, Select Transform Map, Run Transform

**Answer:** A

*해설:* 정답은 **A**입니다. 스프레드시트 import의 기본 흐름은 `Load Data`, `Create Transform Map`, `Run Transform` 순서입니다. 데이터 로드 뒤 매핑을 만들고 실제 반영을 수행합니다.

---

### Q270. A colleague wants to rearrange the columns on their My Work list. Once the user has navigated to the list where should they navigate to select and arrange the columns?

- A. Click Personalize List
- **B. Right click on any column header. Context Menu > Configure > List Layout**
- C. Click List Context Menu > Personalize List
- D. Click List Content Menu > Configure > List Layout

**Answer:** B

*해설:* 정답은 **B**입니다. 리스트 컬럼 순서를 바꾸려면 컬럼 헤더를 우클릭해 `Configure > List Layout`으로 이동하면 됩니다. 여기서 표시 컬럼과 순서를 함께 조정할 수 있습니다.

---

### Q271. A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?

- A. Scheduled Reports, a custom snapshot table, and a Trend report
- B. Scheduled Reports and Excel
- C. Scheduled Reports, a custom snapshot table, and a Projection report
- **D. Performance Analytics**
- E. Key Performance Indicators

**Answer:** D

*해설:* 정답은 **D**입니다. 월말 실적과 목표를 비교하고 추세와 예측을 보려면 `Performance Analytics`가 적합합니다.

---

### Q272. What component of the ServiceNow infrastructure defines every table and field in the system?

- A. Data Atlas
- B. Table Class Manager
- C. Schema
- **D. Dictionary**
- E. Field Map

**Answer:** D

*해설:* 정답은 **D**입니다. 시스템의 모든 테이블과 필드 정의는 `Dictionary`가 관리합니다. 필드 타입, 길이, 속성 같은 메타데이터가 이 계층에 들어 있습니다.

---

### Q273. A manager is complaining that they can't get the data they need on a report because the data resides in two different tables. This data is used for many different reports in their department. You have checked to see if dot-walking will meet the requirement, and it is not possible. What else might you try to help this manager?

- A. Create a custom table
- B. Create a Report Template
- **C. Create a Database View**
- D. Export the tables to a spreadsheet
- E. Create a Report Source

**Answer:** C

*해설:* 정답은 **C**입니다. 여러 테이블의 데이터를 반복적으로 한 보고서 관점에서 써야 하고 dot-walk로 해결되지 않으면 `Database View`를 만드는 것이 적절합니다. 보고서용 통합 조회 구조를 제공할 수 있습니다.

---

### Q274. Which storefront is a single location for accessing pre-built spokes to quickly integrate with third-party services to build and share content?

- A. Integration Spoke Store
- **B. ServiceNow Store**
- C. Spoke Store
- D. ServiceNow Spoke Store

**Answer:** B

*해설:* 정답은 **B**입니다. 미리 준비된 spoke를 한곳에서 찾아 설치하는 storefront는 현재 보기 기준으로 `ServiceNow Store`입니다. 외부 서비스 연계를 빠르게 시작하는 진입점 역할을 합니다.

---

### Q275. When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?

- A. Run Transform
- B. Run Import
- C. Import Dataset
- **D. Execute Transform**
- E. Schedule Transform

**Answer:** D

*해설:* 정답은 **D**입니다. 실제 대상 테이블에 데이터가 기록되는 시점은 `Execute Transform` 단계입니다. 그 전 단계는 원본 적재나 매핑 준비에 가깝습니다.

---

### Q276. While testing a Catalog Item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob, Smith, but not for any of the other requesters. What could explain the issue?

- **A. There is a business rule, excluding Bob.Smith from any approvals.**
- B. Bob Smith does not have a delegate set up on his account.
- C. The Bob Smith user account, does not have a manager specified.
- D. The manager does not have a delegate assigned.
- E. Bob Smith is a VIP.

**Answer:** A

*해설:* 정답은 **A**입니다. Bob Smith만 승인이 건너뛰는 경우는 특정 비즈니스 룰이 그 사용자를 제외하도록 설정된 경우일 수 있습니다.

---

### Q277. Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationship?

- A. CSDM Schema
- B. Business Service Map
- C. Dependency View
- **D. CI Class Map**

**Answer:** D

*해설:* 정답은 **D**로 유지했습니다. 다만 현재 제품 용어와 완전히 일치하는지에는 다소 의문이 있어 복원 신뢰도는 중간 수준입니다. 이 문항은 CI와 관계를 시각적으로 보여 주는 도구를 묻고 있습니다.

---

### Q278. Which low components allow you to specify when a flow should be run?

- A. Trigger and Condition Pill
- B. Scope and Trigger Condition
- **C. Trigger and Condition**
- D. Trigger Criteria and Clock
- E. Condition and Table

**Answer:** C

*해설:* 정답은 **C**입니다. 플로우 실행 시점은 `Trigger`와 `Condition` 조합으로 정합니다. 어떤 사건이 발생했고 어떤 조건을 만족할 때 실행할지 지정하는 구조입니다.

---

### Q279. What section on a task record is used to see the most recent updates made to a record?

- A. Related List
- **B. Activity Stream**
- C. Audit Log
- D. Timeline

**Answer:** B

*해설:* 정답은 **B**입니다. Task 레코드의 최신 업데이트는 `Activity Stream`에서 확인합니다. 댓글, 작업 메모, 상태 변경 이력을 한곳에서 볼 수 있습니다.

---

### Q280. What types of entities can receive task assignments, in ServiceNow? Choose 2 answers

- **A. Groups**
- **B. Users**
- C. Departments
- D. Teams.

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. ServiceNow에서 작업 할당 대상은 사용자와 그룹입니다.

---

### Q281. You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?

- A. Parent-Child Approvers.
- B. Approval Chains
- C. Flows
- **D. Approval Criteria**
- E. Approver Delegates

**Answer:** D

*해설:* 정답은 **D**입니다. 승인 및 알림 흐름을 관리하는 기능으로는 `Approval Criteria`가 적합합니다.

---

### Q282. You are editing a new incident record and would like the Save" Dutton to be located on the Form header. Which action would need to be taken for that button to appear?

- A. All > System Properties > Ul Properties > Turn on the glide.ui.advanced* property
- B. Context Menu > Form Design > add the Save'' button
- **C. All > System Properties > Ul Properties > Turn on the Save" button**
- D. Context Menu > Form Layout > add the Save* button.

**Answer:** C

*해설:* 정답은 **C**입니다. Save 버튼을 폼 헤더에 표시하려면 `System Properties > UI Properties`에서 해당 버튼을 활성화해야 합니다.

---

### Q283. Farm a form, what would you click, to modify the order of the fields on the form? Choose 2 answers

- **A. Context Menu > Configure > Form Layout**
- B. Context Menu > Form > Layout
- **C. Right click on header > Configure > Form Design**
- D. Context Menu > Configure > Form Designer
- E. Right click on header > Configure > UX Dashboard

**Answer:** A,C

*해설:* 정답은 **A,C**입니다. 폼의 필드 순서를 바꾸려면 `Form Layout`이나 `Form Design` 경로로 들어가 배치를 조정합니다. 둘 다 폼 편집 도구이지만 접근 경로가 조금 다릅니다.

---

### Q284. The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?

- A. service_desk
- **B. impersonator**
- C. admin
- D. incognito

**Answer:** B

*해설:* 정답은 **B**입니다. 다른 사용자로 전환해 테스트하려면 `impersonator` 역할이 필요합니다. 로그아웃 없이 계정을 바꿔 보는 기능을 위한 역할입니다.

---

### Q285. After finishing your work on High Security Settings, what is a possible way to return to normal admin security levels?

- **A. Use System Administration > Normal Security module**
- B. Select Normal role
- C. Log out and back in
- D. Select Global Update Set
- E. End impersonation

**Answer:** A

*해설:* 정답은 **A**입니다. 현재 보기 기준으로 High Security Settings 작업 후 정상 보안 수준으로 돌아가는 방법은 `Normal Security` 모듈을 사용하는 것입니다. 보안 상승 상태를 해제하는 절차를 묻는 문제입니다.

---

### Q286. When you are viewing a record, like an incident, how can you detect if someone else is also actively working on the Incident? (Choose 2 answers)

- A. A chat bubble automatically launches, so you can collaborate
- **B. An icon appears to the left of fields that have been updated by other users**
- C. A notification appears asking the new user to collaborate
- D. The Work notes list contains names of the other users
- **E. User presence icon shows initials of users actively viewing the record**

**Answer:** B,E

*해설:* 정답은 **B,E**입니다. 다른 사용자가 같은 레코드를 보고 있거나 수정 중이면 사용자 presence 아이콘이 보이고, 다른 사용자가 바꾼 필드 근처에 표시가 나타날 수 있습니다. 공동 편집 상황을 감지하는 기능을 묻는 문제입니다.

---

### Q287. Groups are stored in what table?

- **A. Group [sys_user_group]**
- B. Group [sn_sys_user_group]}
- C. User Group [user_groups]
- D. User Groups [sn_user_groups]
- E. Groups [sys_user_groups]

**Answer:** A

*해설:* 정답은 **A**입니다. 그룹 정보는 기본적으로 `sys_user_group` 테이블에 저장됩니다. 다른 접두사 조합은 표준 그룹 테이블명이 아닙니다.

---

### Q288. A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role What type of rules (s) would you use to implement this requirement?

- A. Dictionary Design
- B. Field Limiter
- **C. UI Policy**
- D. UI Design
- E. Form Constraint

**Answer:** C

*해설:* 정답은 **C**입니다. 필드를 mandatory로 설정하고 특정 역할이 아닐 때 checkbox를 숨기려면 `UI Policy`를 사용합니다.

---

### Q289. Access controls are evaluated in this order: *1. Match object against table ACL* 2, Match the object against field ACL Within step 1 above, what order are the table ACLs evaluated?

- A. Specific to general: Table.Field ACL, Parent Table.Field ACL, *.Field ACL
- B. Bottom to top: Table ACL. Table.Field ACL, Parent Table. Field ACL
- C. General to specific: Table ACL, Table.Field ACL, Parent Table, Field ACL
- D. Top to bottom: Wildcard Table ACL, Parent Table ACL, Table ACL
- **E. Specific general: Table ACL, Parent Table ACL, Wildcard (*) ACL**

**Answer:** E

*해설:* 정답은 **E**입니다. 테이블 ACL은 가장 구체적인 규칙부터, 즉 `Table ACL -> Parent Table ACL -> Wildcard ACL` 순으로 평가됩니다. 구체 규칙이 일반 규칙보다 우선합니다.

---

### Q290. When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?

- A. Field Matching
- B. Load Data
- C. Select Data Source
- D. Schedule Transform
- **E. Create Transform Map**

**Answer:** E

*해설:* 정답은 **E**입니다. 들어온 컬럼이 대상 테이블의 어느 필드로 들어갈지 정의하는 단계는 `Create Transform Map`입니다. 필드 매핑 규칙을 만드는 단계라고 보면 됩니다.

---

### Q291. What tool is used to import data from various data sources, and map that data into ServiceMow tables?

- **A. Import Set**
- B. Update Set
- C. Data Pack
- D. Transform Set

**Answer:** A

*해설:* 정답은 **A**입니다. 여러 데이터 소스에서 가져온 데이터를 임시 적재하고 대상 테이블에 매핑하는 기본 도구는 `Import Set`입니다. 이후 Transform Map과 함께 사용됩니다.

---

### Q292. Which field (or fields) is used as a unique key during imports?

- A. Match Fields
- **B. Coalesce Fields**
- C. Key Fields
- D. Sys IDs

**Answer:** B

*해설:* 정답은 **B**입니다. Import 과정에서 기존 레코드와의 고유 매칭 키 역할을 하는 것은 `Coalesce Fields`입니다. 이 값으로 insert와 update를 구분합니다.

---

### Q293. What is the definition of a group?

- A. An escalation pod
- B. A department
- **C. A collection of users**
- D. A collection of subject matter experts
- E. A team of users

**Answer:** C

*해설:* 정답은 **C**입니다. ServiceNow에서 그룹은 업무나 권한 맥락을 함께 가진 사용자들의 집합입니다. 특정 부서나 직함 자체와 동일한 개념은 아닙니다.

---

### Q294. Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?

- A. Requests can contain many items; and Items can be any item from the catalog.
- **B. Vendors can sell multiple products; and products can be sold by multiple vendors.**
- C. A Task can trigger many Workflows; and a Workflow can trigger many Tasks
- D. A Configuration Item can belong to multiple Classes; and Classes can contain multiple Configuration

**Answer:** B

*해설:* 정답은 **B**입니다. 다대다 관계의 전형적 예는 여러 공급업체가 여러 제품을 판매하는 경우입니다.

---

### Q295. What access does a user need to be able to import anicies to a knowledge base?

- **A. Can contribute**
- B. sn_knowledge_contripute
- C. sn_knowledge_import
- D. Can import

**Answer:** A

*해설:* 정답은 **A**입니다. 지식 문서를 가져오려면 최소한 해당 지식베이스에 기여할 수 있는 `Can contribute` 접근 권한이 필요합니다. 단순 읽기 권한만으로는 import를 수행할 수 없습니다.

---

### Q296. What Service Catalog feature do you use to organize items into logical groups?

- **A. Variable sets**
- B. Catalog items
- C. Sections
- D. Categories

**Answer:** A

*해설:* 정답은 **A**로 유지했습니다. 다만 일반적인 Service Catalog 구성에서는 `Categories`가 더 자연스럽게 떠오를 수 있어 이 문항은 보기 복원 신뢰도가 다소 낮습니다. 현재 문서에서는 source answer token을 따릅니다.

---

### Q297. The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, files, and legend layout?

- A. Format
- B. Layout
- **C. Style**
- D. Configure

**Answer:** C

*해설:* 정답은 **C**입니다. 보고서 색상, 범례 배치, 시각적 스타일 같은 표시 요소는 `Style` 섹션에서 조정합니다. 데이터 원본이나 타입 설정과는 다른 영역입니다.

---

### Q298. A department manager asks an analyst to build some reports. Where do you recommend the analyst start?

- A. Report Dashboard > Create New
- B. Reports > Getting Started
- C. Performance Analytics > Reports
- D. Self-Service > Reports
- **E. Reports > Create New**

**Answer:** E

*해설:* 정답은 **E**입니다. 새 보고서를 만들기 시작하는 기본 경로는 `Reports > Create New`입니다. 기존 리포트 실행 메뉴와는 시작 목적이 다릅니다.

---

### Q299. How is a user defined in ServiceNow?

- **A. user is a record stored in the User Preference [Sys_user_preference] table**
- B. A User is a record stored in the Profile [sys_user_profile] table
- C. A user is 2 field in the LOAP integration
- D. A user is a record stored in the User [sys_user] table

**Answer:** A

*해설:* 정답은 **A**로 남겨 두었지만, 제품 개념상 일반적으로 사용자는 `sys_user` 테이블 레코드로 정의됩니다. 현재 보기와 answer token 사이에 어긋남이 있어 이 문항은 낮은 신뢰도로 보는 편이 안전합니다.

---

### Q300. To apply a UI Policy to all views, which field should be set to true in its definition record?

- **A. Inherit**
- B. Reverse if false
- C. On lowed
- D. Global

**Answer:** A

*해설:* 정답은 **A**입니다. UI Policy를 특정 뷰가 아니라 모든 뷰에 적용하려면 현재 보기 기준으로 `Inherit` 필드를 true로 설정합니다. 모든 관련 화면에 정책을 확장 적용하는 설정을 묻는 문제입니다.

---

### Q301. Which testing framework is used to test ServerNew Applications?

- A. Selenium
- B. Test Driven Framework (TDF)
- C. Junit
- **D. Automated test Framework (ATF)**

**Answer:** D

*해설:* 정답은 **D**입니다. ServiceNow 애플리케이션을 시나리오 기반으로 자동 테스트할 때 사용하는 기본 프레임워크는 `ATF(Automated Test Framework)`입니다.

---

### Q302. Which actions would you take to edit the title on an application menu? (Choose 2 answers)

- A. Select Configuration > Applications, then select the application
- B. Select the form for the Application, then right-click Configure > Form Designer
- **C. Select the Application name on the Navigator, then select the pencil icon**
- **D. Select System Definitions > Application Menus, then select the application**
- E. Select System Definition > Dictionary > Application

**Answer:** C,D

*해설:* 정답은 **C,D**입니다. 애플리케이션 메뉴 제목은 Navigator에서 연필 아이콘으로 바로 수정하거나, `System Definitions > Application Menus` 레코드로 들어가 수정할 수 있습니다.

---

### Q303. One related list, which buttons are commonly used for managing the records on the list? Choose 3 answers

- A. Publish
- **B. New**
- **C. Add**
- D. Manage
- **E. Edit**

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. Related List에서는 보통 `New`, `Add`, `Edit` 버튼으로 관련 레코드를 생성하거나 연결하고, 목록을 관리합니다.

---

### Q304. Which script can run when a record is displayed, inserted, updated, deleted, or when a table is queried?

- **A. Business Rule**
- B. Client Script
- C. Record Rule
- D. UI Script
- E. Scheduled Job

**Answer:** A

*해설:* 정답은 **A**입니다. `Business Rule`은 display, insert, update, delete, query 같은 레코드 이벤트에 맞춰 서버 측에서 실행될 수 있습니다.

---

### Q305. What is the result of the order in which access controls are evaluated?

- A. Ensures user has access to the fields in a table, before considering their access to the table
- B. Ensures user can get to work as quickly as possible
- C. Ensures user has access to the application, before evaluating access to a module within the application
- **D. Ensures user has access to a table, before evaluating access to a field in the table**

**Answer:** D

*해설:* 정답은 **D**입니다. ACL 평가는 먼저 사용자가 테이블 자체에 접근할 수 있는지 확인하고, 그다음 필드 단위 접근을 평가합니다.

---

### Q306. Which best describes a field in a SeniceNow table?

- A. A field is a table cell that stores data
- B. A field is a table row
- **C. A field is an item that appears in a menu list**
- D. A field is a record in a table

**Answer:** C

*해설:* 정답은 **C**로 남아 있지만, 일반적인 테이블 개념상 field는 데이터를 저장하는 컬럼/셀 항목에 가깝고 메뉴 항목이 아닙니다. 현재 보기와 answer token이 어긋난 것으로 보여 이 문항은 낮은 신뢰도로 보는 편이 안전합니다.

---

### Q307. On what part of the ServiceNow instance, would you find the option to Impersonate User?

- A. Module
- B. Content Frame
- C. Application Navigator
- **D. User Menu**

**Answer:** D

*해설:* 정답은 **D**입니다. `Impersonate User` 기능은 사용자 프로필 메뉴인 `User Menu`에서 접근합니다.

---

### Q308. Which helps to visualize configuration items and their relationships?

- A. Transform Map
- B. Schema Map
- C. Tables
- D. Flow Design
- **E. Dependency View**

**Answer:** E

*해설:* 정답은 **E**입니다. CI와 그 관계를 시각적으로 확인하는 대표 기능은 `Dependency View`입니다. 영향도와 연결 구조를 파악할 때 사용합니다.

---

### Q309. Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?

- A. Add the role Log Write [sn_log_write] to the Impersonator Group
- B. Create user update set for impersonation tracking
- **C. Activate the glide.sys.log_impersonation prop**
- D. From User icon, select Elevate Roles
- E. On the Impersonator role record, right click and select Create Log

**Answer:** C

*해설:* 정답은 **C**입니다. impersonation 수행 이력을 추적하려면 `glide.sys.log_impersonation` 속성을 활성화해 관련 로그를 남기도록 설정하면 됩니다.

---

### Q310. Which allows the creation of a task-based record from Service Catalog?

- **A. Record Producers**
- B. UI Builder
- C. Assignment Rule
- D. Flow Designer
- E. UI Actions= Answer: A

**Answer:** A

*해설:* 정답은 **A**입니다. Service Catalog에서 사용자가 입력한 내용을 바탕으로 특정 테이블의 태스크형 레코드를 만들 때 `Record Producer`를 사용합니다.

---

### Q311. In what order are Access Controls evaluated?

- A. Field-level - mast general to most specific: then Row-level - most specific to most general
- B. Table-level - most specific to most general; then Row-level - most specific to most general
- C. Table-level - most specific to most general; then Field-level « most specific to mast general
- **D. Field-level - most specific to most general: then Table-level - most specific to most general**

**Answer:** D

*해설:* 정답은 **D**로 표기되어 있지만, 일반적인 ACL 평가는 테이블 수준을 먼저 보고 그 다음 필드 수준을 평가합니다. 따라서 이 문항은 보기/정답 복원에 불일치 가능성이 있어 낮은 신뢰도로 보는 편이 안전합니다.

---

### Q312. Which feature ensures data consistency white importing data using import sets and web services?

- A. Client Script
- B. Ul Policy
- **C. Data Policy**
- D. CSDM
- E. Business Rule

**Answer:** C

*해설:* 정답은 **C**입니다. `Data Policy`는 폼 입력뿐 아니라 import set이나 web service를 통한 데이터에도 일관된 규칙을 적용해 데이터 품질을 유지합니다.

---

### Q313. The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?

- **A. Request + Response**
- B. Save + Update
- C. Write + Read
- D. Submit + Query
- E. Insert + Verify

**Answer:** A

*해설:* 정답은 **A**입니다. round-trip은 클라이언트의 `Request`가 서버로 가고, 서버의 `Response`가 다시 돌아오는 왕복을 뜻합니다.

---

### Q314. What section on a task record would you use to see the most recent update made to a record?

- A. Timeline
- B. Journal
- C. Audit Log
- **D. Activity**

**Answer:** D

*해설:* 정답은 **D**입니다. Task 레코드의 최근 변경 내역은 `Activity` 영역에서 확인합니다. 주석, 상태 변경, 작업 메모가 시간순으로 표시됩니다.

---

### Q315. Which action enables personalization in a form for the admin role, only?

- A. Navigate to sys_form_properties.list and set the property glide.ui.enable_personalize_form.admin to true.
- B. Navigate to Context Menu > Configure > Form Layout and select Enable Personalization and enter the admin role.
- C. Navigate to Context Menu > Configure > Table and add the role Admin in the Available User list box.
- **D. Navigate to sys_properties.list, find the property glide.ui.personalize_form.role, and set the value to admin.**

**Answer:** D

*해설:* 정답은 **D**입니다. 폼 개인화를 `admin` 역할 사용자에게만 허용하려면 시스템 속성 `glide.ui.personalize_form.role` 값을 `admin`으로 설정하면 됩니다.

---

### Q316. If you have the Impersonate role, what type of user are you not able to impersonate?

- A. Customer
- B. VIP
- **C. System Administrator**
- D. Approver
- E. Catalog User

**Answer:** C

*해설:* 정답은 **C**입니다. 일반적으로 `impersonator` 권한만으로는 `System Administrator` 사용자를 impersonate할 수 없습니다. 보안상 더 높은 권한 사용자는 제한됩니다.

---

### Q317. When using the Data Pill Picker, use which keys to dot-walk (6 fields in other tables?

- **A. Arrows**
- B. Plus, Minus
- C. Ctrl c, Ctrl
- D. Ctrl <, Ctrl >
- E. Shift F4, Shit FS

**Answer:** A

*해설:* 정답은 **A**입니다. Data Pill Picker에서 다른 테이블 필드로 dot-walk 할 때는 방향키를 사용해 참조 경로를 따라 들어갑니다.

---

### Q318. Here is an example of the criteria set for a knowledge base: *Companies: ACME North America* Department: HR *Groups: ACME Manager* Match All: Yes In this example, what users would have access to this knowledge base?

- **A. Members of the ACME manager group, who are also members of HR Department and part of the ACME**
- B. Employees of ACME North America, who are members of HR Department or the ACME Manager group
- C. Users which are members of either ACME North America, or HR Department, or ACME Manager Group
- D. Member of the ACME Manager group, and HR department, regardless of geography

**Answer:** A

*해설:* 정답은 **A**입니다. `Match All = Yes`이므로 회사, 부서, 그룹 조건을 모두 만족하는 사용자만 접근할 수 있습니다. 즉 ACME North America 소속이면서 HR 부서이고 ACME Manager 그룹에도 속해야 합니다.

---

### Q319. Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?

- **A. incident .* B. incident.all**
- C. incident .!
- D. incident.None

**Answer:** A

*해설:* 정답은 **A**로 유지했습니다. 다만 보기 문자열이 손상돼 있어 정확한 object 명칭 표기는 낮은 신뢰도입니다. 문항 의도는 Incident 테이블 전체에 적용되는 테이블 수준 ACL 이름을 묻고 있습니다.

---

### Q320. What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)

- A. Group members can choose their tasks from My Groups Work
- **B. Groups can assign tasks to users based on on-call schedules**
- **C. Site support members can pick tasks, based on Location**
- **D. Groups can assign tasks to users based on skills**
- E. Group members can avoid tasks, which are nearing SLA breach
- **F. Groups can assign tasks to users based on availability**

**Answer:** B,C,D,F

*해설:* 정답은 **B,C,D,F**입니다. 그룹 할당을 쓰면 on-call, 위치, 보유 기술, 현재 가용성 같은 기준으로 일을 유연하게 분배할 수 있습니다. 개인 고정 할당보다 운영 효율이 높아집니다.

---

### Q321. What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?

- A. Scenario Dashboard
- B. CI Use Case Modeler
- C. CMDB Use Case Modeler
- **D. Common Service Data Model (CSDM) product view**

**Answer:** D

*해설:* 정답은 **D**입니다. 특정 use case와 연결된 테이블 및 CI 구조를 보려면 `CSDM product view`를 활용할 수 있습니다. 어떤 데이터 모델이 해당 시나리오에 쓰이는지 확인하는 용도입니다.

---

### Q322. Which framework can automatically populate values for the priority and Category field based on the Short description field value?

- A. UI Policy
- **B. Assignment Rule**
- C. Action
- D. Predictive intelligence
- E. CSDM

**Answer:** B

*해설:* 정답은 **B**로 남겨 두었지만, 짧은 설명 텍스트를 바탕으로 priority와 category를 추천하거나 채우는 기능이라면 보통 `Predictive Intelligence`가 더 자연스럽습니다. 현재 보기/정답 조합은 낮은 신뢰도로 보는 편이 안전합니다.

---

### Q323. What is used to determine user access to knowledge bases or a knowledge article?

- A. sn_kb_read, sn_article_read
- B. Privacy Settings
- C. Read Access Flag
- **D. User Criteria**

**Answer:** D

*해설:* 정답은 **D**입니다. 지식베이스나 개별 문서의 읽기/쓰기 접근은 `User Criteria`로 제어합니다.

---

### Q324. From a related list, what would a user click for personalize the layout of the columns?

- A. Magnifier
- B. Context Menu
- C. Pencil
- **D. Gear**

**Answer:** D

*해설:* 정답은 **D**입니다. Related List 컬럼 레이아웃을 개인화할 때는 보통 `Gear` 아이콘을 눌러 표시 컬럼과 순서를 조정합니다.

---

### Q325. An IT user calls the service desk because his work needs to be completed on ask records. All he can see a Self Service on his homepage when he logs in to the ServiceNow instance. What issue could explain this? Choose 2 answers

- A. His user account failed LDAP authentication
- **B. His user account does not Belong to any groups, which contain the ITIL role**
- C. His user account was not approved by his manager
- D. His user account does not have ITIL role
- **E. His user account Is not logged in properly**

**Answer:** B,E

*해설:* 정답은 **B,E**로 남겨 두었지만, 실제 원인으로는 보통 필요한 역할이나 그 역할이 담긴 그룹 미소속 여부가 핵심입니다. 보기 E는 문장 자체가 부자연스러워 이 문항은 복원 신뢰도가 낮습니다.

---

### Q326. Which statement correctly describes the differences between a Client Script and a Business Rule?

- A. A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded
- B. A Client Script executes on the server and a Business Rule executes on the client
- **C. A Client Script executes on the client and a Business Rule executes on the server**
- D. A Client Script executes before a record is loaded and a Business Rule executes after a

**Answer:** C

*해설:* 정답은 **C**입니다. `Client Script`는 브라우저에서 실행되고, `Business Rule`은 서버에서 실행됩니다. 실행 위치 차이를 묻는 기본 문제입니다.

---

### Q327. Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?

- A. Access List
- B. Can Access
- C. Accessible to
- **D. Can Read**

**Answer:** D

*해설:* 정답은 **D**입니다. Knowledge Base 레코드에서 읽기 가능한 사용자 집합은 `Can Read` 탭에서 확인합니다.

---

### Q328. When looking at a long list of records, you want to quickly filler, to show only those which have Shon Description containing email How might you do that?

- **A. Click List Magnifier to expand column search, on Short Description, type "email", click enter**
- B. Click List Magnifier to expand column search, on Short Description, lype *email, click enter
- C. Click List Magnifier to expand column search, on Short Description, type email, click enter
- D. On Search box, select text, type email, click enter

**Answer:** A

*해설:* 정답은 **A**로 유지했습니다. 다만 검색 입력 예시의 특수문자가 손상돼 있어 표기 신뢰도는 낮습니다. 문항 의도는 리스트 컬럼 검색을 열고 Short Description에 `email` 포함 조건으로 빠르게 필터링하는 방법을 묻습니다.

---

### Q329. What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)

- A. Browser tab title
- B. Module text color
- C. Preferred browser
- D. Base theme
- E. Font style
- F. Animation style
- G. Header background color
- **H. Banner Image**

**Answer:** A,B,D,G,H

*해설:* 정답은 **A,B,D,G,H**입니다. Basic Configuration UI16에서는 브라우저 탭 제목, 모듈 텍스트 색상, 기본 테마, 헤더 배경색, 배너 이미지 같은 UI 속성을 조정할 수 있습니다.

---

### Q330. What framework can be used to manage the tables and Cis associated with a use case?

- **A. Common Service Data Model (CSDM) product view**
- B. Scename Dashboard
- C. CMDB Use Case Modelar
- D. CI Use Case Modeler

**Answer:** A

*해설:* 정답은 **A**입니다. 특정 use case와 관련된 테이블 및 CI 구성을 관리하고 설명하는 프레임워크로 `CSDM product view`를 사용합니다.

---

### Q331. What access does a user need to be able to import articles to a knowledge base?

- A. sn_knowledge_import
- B. sn_knowledge contribute
- **C. Can contribute**
- D. Can import

**Answer:** C

*해설:* 정답은 **C**입니다. 지식 문서를 import하려면 해당 지식베이스에 기여 가능한 `Can contribute` 권한이 필요합니다.

---

### Q332. Which type of ServiceNow script runs on the web browser?

- A. Server script
- B. Local script
- C. Database script
- **D. Client script**

**Answer:** D

*해설:* 정답은 **D**입니다. 웹 브라우저에서 실행되는 ServiceNow 스크립트 유형은 `Client script`입니다. 사용자 입력 반응과 즉시 UI 제어에 사용됩니다.

---

### Q333. What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)

- **A. On list Context Menu, select Group By > Category**
- B. On the Filter Menu, select Group By > Category
- C. Click Group On icon, select Category
- D. On Navigator Filter, type tablename.group.category and press enter
- **E. On the Category column title, click Context menu > Group By Category**

**Answer:** A,E

*해설:* 정답은 **A,E**입니다. 리스트를 특정 컬럼 기준으로 묶어 보려면 리스트 컨텍스트 메뉴나 해당 컬럼 헤더 메뉴에서 `Group By`를 선택하면 됩니다.

---

### Q334. The Employee On-boarding team has asked for a way for managers to order computers, monitors, business Cards, and cell phones for new employees. How would you proceed to meet this requirement?

- A. Create Record Producer
- **B. Create Order Guide**
- C. Create Requested Item
- D. Create On-boarding Bot

**Answer:** B

*해설:* 정답은 **B**입니다. 여러 카탈로그 아이템을 신규 입사자 세트처럼 한 번에 주문하게 하려면 `Order Guide`를 만드는 것이 적절합니다.

---

### Q335. Which role can manage multiple knowledge bases?

- A. knowledge_base_admin
- B. kb_admin
- C. sn_kb_admin
- **D. knowledge_admin**

**Answer:** D

*해설:* 정답은 **D**입니다. 여러 Knowledge Base를 관리하는 상위 역할은 `knowledge_admin`입니다.

---

### Q336. Which one of the following describes the primary operations performed against tables in the Service Now platform?

- A. Create, Rate, Update, Delete
- B. Create, Read, Upload, Delete
- **C. Create, Read, Write, Delete**
- D. Capture, Rate, Write, Develop

**Answer:** C

*해설:* 정답은 **C**입니다. 테이블에 대해 수행하는 기본 작업은 `Create, Read, Write, Delete`입니다. CRUD 개념을 묻는 문제입니다.

---

### Q337. The ServiceNow platform supports a wide variety of plus-and-play application. You can choose from the included workflow or build your own workflow. Which of following these workflows are included in the platform?

- **A. Employee Workflows**
- B. Infrastructure Workflows
- C. Federal Workflows
- D. Manufacturing Workflows
- **E. Customer Workflows**
- **F. IT Workflows**

**Answer:** A,E,F

*해설:* 정답은 **A,E,F**입니다. ServiceNow의 대표 워크플로 제품군은 `Employee Workflows`, `Customer Workflows`, `IT Workflows`입니다.

---

### Q338. Which tables are children of the Task table and come with the base system? Choose 3 answers

- **A. Incident**
- **B. Problem**
- **C. Change Request**
- D. Config
- E. Dictionary
- F. cmdb

**Answer:** A,B,C

*해설:* 정답은 **A,B,C**입니다. `Incident`, `Problem`, `Change Request`는 모두 기본 Task 테이블을 확장한 대표 하위 테이블입니다.

---

### Q339. When would you use the following steps? *1, Homepage Admin > Pages* 2. Right click on Homepage record * 3. Select Unioad Portal Page

- A. To publish a Homepage to the Portal
- B. To retire a Homepage
- C. To delete a Homepage
- **D. o To add a Homepage to an update set**

**Answer:** D

*해설:* 정답은 **D**입니다. 해당 절차는 홈페이지 포털 페이지를 `update set`에 담아 이동하거나 추적하려는 상황에 해당합니다. 보기 문구에는 오탈자가 있지만 의도는 업데이트 세트 반영으로 읽힙니다.

---

### Q340. On a list, what does each row show?

- A. A filter
- **B. A record**
- C. A table
- D. A field

**Answer:** B

*해설:* 정답은 **B**입니다. 리스트 화면의 각 행은 하나의 `record`를 나타냅니다.

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

*해설:* 정답은 **A,B,E,F,G**입니다. ServiceNow 보고서 유형에는 `Pie`, `Speedometer`, `Horizontal Bar`, `Semi-Donut`, `Donut` 등이 포함됩니다.

---

### Q342. A Role is defined as what?

- **A. A collection of permissions**
- B. A set of user access policies
- C. A Persona in a workflow
- D. A set of access control rules

**Answer:** A

*해설:* 정답은 **A**입니다. Role은 사용자가 수행할 수 있는 작업을 결정하는 `permissions`의 묶음입니다.

---

### Q343. While on an Incident record, how would you add a Tag for "Special Handling" to the record?

- **A. Click on the More options (.,.) icon, click Add Tag, type Special Handling, press enter**
- B. On the Special Handling field, check the box
- C. On the Tag field, select Special Handling from the choice list
- D. Click on the Context menu, select Add Tag, type Special Handling, press enter

**Answer:** A

*해설:* 정답은 **A**입니다. 레코드의 더보기 메뉴에서 `Add Tag`를 선택하고 태그명을 입력해 태그를 추가할 수 있습니다.

---

### Q344. While showing a customer their incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? Choose 2 answers

- **A. Right click on Priority and select Configure Dictionary**
- B. Right click on Priority and select Configure Display Settings
- **C. Right click on Priority and select Configure Label**
- D. Right click on Priority and select Configure Column

**Answer:** A,C

*해설:* 정답은 **A,C**입니다. 필드 제목을 바꾸려면 해당 필드의 Dictionary 설정을 보거나 `Configure Label`을 사용해 표시 라벨을 변경합니다.

---

### Q345. Which component of a table contains a piece of data for one record?

- A. Factor
- **B. Field**
- C. Datapoint
- D. Element
- E. Item

**Answer:** B

*해설:* 정답은 **B**입니다. 한 레코드의 개별 데이터 값은 테이블의 `Field`에 들어 있습니다.

---

### Q346. Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?

- A. Schema Map
- **B. Dependency View**
- C. Dependency Map
- D. Database View

**Answer:** B

*해설:* 정답은 **B**입니다. CI와 다른 CI 간 관계를 인프라 관점에서 시각적으로 보여 주는 도구는 `Dependency View`입니다.

---

### Q347. What icon do you use to change the boon and color on a Favorite?

- **A. Pencil**
- B. Star
- C. Clack
- D. Tringle

**Answer:** A

*해설:* 정답은 **A**입니다. Favorites의 이름이나 색상을 바꿀 때는 `Pencil` 아이콘으로 편집합니다. 보기의 `boon`은 `icon` 또는 `label` 계열 오탈자로 보입니다.

---

### Q348. What type of table has a name starting with u_or x_?

- **A. Custom table**
- B. Parent table
- C. Core table
- D. Base table

**Answer:** A

*해설:* 정답은 **A**입니다. `u_`나 `x_`로 시작하는 테이블명은 사용자가 만들었거나 스코프 앱에서 생성한 `custom table`을 뜻합니다.

---

### Q349. What policies are applied to all data entered into the platform (i.e., through a record form (UI), Import Sets, or Web Services)?

- **A. Data Policies**
- B. Data Integrity Policies
- C. Write Policies
- D. Data Submission Policies

**Answer:** A

*해설:* 정답은 **A**입니다. UI 입력, Import Set, Web Service를 통한 데이터까지 공통으로 강제하는 정책은 `Data Policies`입니다.

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

*해설:* 정답은 **C,E,G**로 남겨 두었지만, 보기의 테이블명이 심하게 손상돼 있어 이 문항은 낮은 신뢰도로 보는 편이 안전합니다. 문항 의도는 enterprise CMDB/CSDM 맥락의 핵심 테이블 조합을 묻고 있습니다.

---

### Q351. Which SericeNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which Cis supporing that service have active issues?

- A. AL Service Dashboard
- **B. Cl Health Dashboard**
- C. Dependency View
- D. Event Management Homepage

**Answer:** B

*해설:* 정답은 **B**입니다. 현재 보기 기준으로 서비스와 이를 지원하는 CI의 이슈 상태를 추적하는 유틸리티는 `CI Health Dashboard`입니다.

---

### Q352. You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?

- **A. Create Record Producer**
- B. Create Catalog Item
- C. Create Order Guide
- D. Create Content Item

**Answer:** A

*해설:* 정답은 **A**입니다. 사용자가 카탈로그에서 설명을 입력하면 Incident 레코드를 생성하도록 하려면 `Record Producer`를 사용합니다.

---

### Q353. Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?

- A. Agent Assist
- **B. Virtual Agent**
- C. Now Messenger
- D. Connect Agent

**Answer:** B

*해설:* 정답은 **B**입니다. 대화형 메시징 인터페이스로 지식 문서를 제공하는 기능은 `Virtual Agent`입니다.

---

### Q354. What are the steps for applying an update set to an instance?

- **A. Retrieve, Preview, Commit**
- B. Specify, Transform, Apply
- C. Retrieve, Assess, Apply
- D. Get, Test, Push
- E. Pull, Review, Push

**Answer:** A

*해설:* 정답은 **A**입니다. 다른 인스턴스에 update set을 적용할 때의 기본 순서는 `Retrieve -> Preview -> Commit`입니다.

---

### Q355. Your customer has a Human Resources knowledge base, which is only accessible to members of the Human Resources department. A new procedure regarding employee quarterly reviews needs to be published to the quarterly review category of the HR knowledge base, but should only be visible for HR managers. How would you meet this requirement?

- A. On the Knowledge Base, add User Criteria with a Manager Can Read script to the Can Read list, publish
- **B. Add User Criteria for HR Manager Group on the Category's Can Read list**
- C. On the Knowledge Article, add an Access Control for HR Manager Group on the Can Read list, then

**Answer:** B

*해설:* 정답은 **B**입니다. HR 지식베이스 안에서도 특정 카테고리만 HR 관리자에게 보이게 하려면 그 `Category`의 `Can Read`에 HR Manager용 User Criteria를 추가하면 됩니다.

---

### Q356. How would you describe the relationship between the incident and Task table?

- A. Incident table has a many to many relationships with the Task table.
- B. Incident table has a one to much relationship with the Task table.
- **C. Incident table is extended from task table.**
- D. incident table is related to the Task table via the INC number
- E. incident table is a database view of the Task table

**Answer:** C

*해설:* 정답은 **C**입니다. Incident 테이블은 Task 테이블을 확장한 테이블로, Task의 공통 필드를 상속합니다.

---

### Q357. What process allows users to create, categorize, review approve and browse important information in a centralized location that is shared oy the entire organization?

- A. Self Service Management
- **B. Knowledge Management**
- C. Knowledge-Centered Management
- D. Information Portal Management
- E. Business Information Management

**Answer:** B

*해설:* 정답은 **B**입니다. 조직 전체가 공유하는 중앙 위치에서 문서를 작성, 분류, 검토, 승인, 탐색하는 프로세스는 `Knowledge Management`입니다.

---

### Q358. You have an existing customer, who is using workflows for their catalog items. Their existing purchasing policy is to require approval for any request that totals over 31000. However, management wants to change the approval threshold to 31500. Which workflow would you update to make this change?

- A. Services Approval Processing
- B. 6 Services Catalog Item Request
- **C. Service Catalog Request**
- D. Purchasing Process Flow

**Answer:** C

*해설:* 정답은 **C**입니다. 요청 총액 기준 승인 임계값을 바꾸려면 해당 승인 로직이 들어 있는 `Service Catalog Request` 워크플로를 수정해야 합니다.

---

### Q359. What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?

- **A. Update sets**
- B. Transform maps
- C. System dictionaries
- D. Import sets

**Answer:** A

*해설:* 정답은 **A**입니다. 인스턴스 구성 변경을 묶어서 다른 환경으로 이동할 때 사용하는 기본 단위는 `Update sets`입니다.

---

### Q360. What feature do you use to specify which users are able to access a Service Catalog Item?

- A. Can Read Role
- B. Catalog User Role
- C. Can Order Tab
- **D. User Criteria**

**Answer:** D

*해설:* 정답은 **D**입니다. Service Catalog Item을 어떤 사용자가 볼 수 있고 주문할 수 있는지는 `User Criteria`로 제어합니다.

---

### Q361. Security rules are defined to restrict the permission of users from viewing and interacting with data. What are these security rules called?

- A. Role Assignment Rules
- B. CRUD Rules
- C. Scripted User Rules
- **D. Access Control Rules**
- E. User Authentication Rules

**Answer:** D

*해설:* 정답은 **D**입니다. 사용자의 데이터 조회 및 조작 권한을 제한하는 보안 규칙은 `Access Control Rules`입니다.

---

### Q362. A subject matter expert routinely receives tasks which have been worked by first level support, before receiving the assignment What could you suggest. to make it easier for the expert to read only the work notes in the Activity log?

- A. Click Context menu > Work Notes View
- B. Click Personalize icon and select Activity Stream
- C. Right click form header > Form Layout > Add Work Notes Section
- **D. Click Funnel icon and select only work notes**
- E. Click Context menu > History

**Answer:** D

*해설:* 정답은 **D**입니다. Activity Stream에서 `Funnel` 아이콘으로 항목 유형을 필터링하면 Work notes만 골라서 볼 수 있습니다.

---

### Q363. Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board Interface?

- A. Flow Designer
- **B. Process Automation Designer**
- C. Process Workflow Designer
- D. Workflow Editor

**Answer:** B

*해설:* 정답은 **B**입니다. 여러 Flow Designer 콘텐츠를 하나의 디지털 프로세스로 조직하고 태스크 보드 형태로 관리하는 기능은 `Process Automation Designer`입니다.

---

### Q364. What are advantages of using spokes for integrations? Choose 3 answers

- **A. Reduces the need for code**
- B. Features scale and control mechanisms
- C. Free spokes are available in the ServiceNow Store
- **D. Ensures discoverability and reuse**
- **E. Automated event management**

**Answer:** A,D,E

*해설:* 정답은 **A,D,E**입니다. spoke를 쓰면 코드를 줄일 수 있고, 재사용성과 발견 가능성이 좋아지며, 자동화 이벤트 처리 같은 통합 구성을 빠르게 조립할 수 있습니다.

---

### Q365. What module enables an administrator to define destinations for imported data on any ServiceNow table?

- A. Field Transform
- **B. Transform Map**
- C. Schema Map
- D. Import Map

**Answer:** B

*해설:* 정답은 **B**입니다. 가져온 데이터를 어떤 대상 테이블과 필드로 보낼지 정의하는 모듈은 `Transform Map`입니다.

---

### Q366. Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)

- A. One Approval can have many Requests
- **B. One Request can have many Requested Items**
- C. One Requested Item can have many Approvals
- **D. One Requested Item can have many Catalog Tasks**
- **E. One Cart can have many Requests**

**Answer:** B,D,E

*해설:* 정답은 **B,D,E**입니다. 서비스 카탈로그에서는 `Request -> Requested Item`, `Requested Item -> Catalog Task`, `Cart -> Requests`처럼 한 레코드가 여러 하위 레코드를 가질 수 있습니다.

---

### Q367. What section on the notes tab, shows the history of the work documented on the record?

- A. Journal
- **B. Activity**
- C. Diary
- D. Audit Log
- E. Timeline

**Answer:** B

*해설:* 정답은 **B**입니다. Notes 탭에서 작업 이력과 변경 내역을 보는 영역은 `Activity`입니다.

---

### Q368. What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?

- A. Notifications
- B. Alerts
- C. Texts
- **D. Events**
- E. Emails

**Answer:** D

*해설:* 정답은 **D**로 표기돼 있지만, 설명 내용상 실제 사용자 알림 기능은 보통 `Notifications`가 더 직접적입니다. 현재 보기/정답 조합은 낮은 신뢰도로 보는 편이 안전합니다.

---

### Q369. What is the name of the string that display filter criteria?

- A. Topic
- B. Choice
- **C. Breadcrump**
- D. Menu

**Answer:** C

*해설:* 정답은 **C**입니다. 리스트 상단에서 현재 필터 조건 문자열을 보여 주는 영역은 `Breadcrumb`입니다.

---

### Q370. A customer requests the following data quality measures be added: *1. Incident numbers should be read-only on all lists and forms, for all users.* 2. Short Description field should be mandatory, on all records, across all applications, on insert. Which type of policy would you use to meet this requirement?

- **A. Data policy**
- B. Dictionary Design Policy
- C. Data Quality Policy
- D. Field Criteria Policy

**Answer:** A

*해설:* 정답은 **A**입니다. UI, Import Set, Web Service 전반에 걸쳐 데이터 규칙을 공통 적용하려면 `Data policy`를 사용합니다.

---

### Q371. An administrator creates "customer_table_admin" and "customer_table_user" roles for the newly created "Customer Table". Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?

- A. customer.all
- **B. customer .* C. customer.field**
- D. customer.none

**Answer:** B

*해설:* 정답은 **B**로 남겨 두었지만, 보기 문자열 자체가 손상돼 있어 정확한 ACL 이름 표기는 낮은 신뢰도입니다. 문항 의도는 특정 커스텀 테이블 전체 행과 필드에 대한 테이블 수준 ACL을 묻고 있습니다.

---

### Q372. What are the components that make up a filer condition? Choose 3 answers

- A. Column
- B. Match Criteria
- **C. Field**
- D. Value
- E. Operator

**Answer:** C

*해설:* 정답 표시는 **C**만 남아 있지만, 필터 조건의 기본 구성 요소는 일반적으로 `Field`, `Operator`, `Value` 세 가지입니다. 이 문항은 answer token 또는 보기 복원이 어긋난 것으로 보입니다.

---

### Q373. Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role and the user_critena_admm role plus has permissions to create Items and Services?

- A. item Admin [sn_item_admin]
- B. Sys Admin [sys_admln]
- **C. Catalog Admin [catalog_admin]**
- D. Catalog Auinor (sn_cataiog_write]

**Answer:** C

*해설:* 정답은 **C**입니다. `catalog_admin`은 catalog 관련 역할 권한을 상속하면서 카탈로그 아이템과 서비스를 만들 수 있는 관리자 역할입니다.

---

### Q374. What are the benefits of building flows using Flow Designer? Choose 3 answers

- **A. Supports easy integration with 3rd party systems**
- B. Provides IDE for complicated scripting
- **C. Provides natural-langauge descriptions of flow logic**
- **D. Supports No-Code application development**
- E. Automatically populates SLA records
- F. Provides built-in libraries /API for complex coding

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. Flow Designer는 외부 시스템 연계가 쉽고, 흐름을 자연어에 가깝게 이해할 수 있으며, no-code 방식으로 자동화를 만들 수 있다는 장점이 있습니다.

---

### Q375. As administrator, what must you do to access feature of High Security Settings?

- **A. Select Elevate Roles**
- B. Add security_admin role to your user account
- C. Impersonate Security Admin
- D. Use System Administrator < Elevate Roles module

**Answer:** A

*해설:* 정답은 **A**입니다. High Security Settings 기능에 접근하려면 먼저 `Elevate Roles`를 통해 보안 관리자 권한을 상승시켜야 합니다.

---

### Q376. What are examples of UI Actions relating to forms? Choose 3 answers

- **A. Form Context Menu**
- B. Form View
- **C. Form Buttons**
- **D. Form Links. E. Form Columns**

**Answer:** A,C,D

*해설:* 정답은 **A,C,D**입니다. 폼에서 UI Action 형태로 제공되는 것은 `Form Context Menu`, `Form Buttons`, `Form Links`입니다.

---

### Q377. The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against me data?

- A. Style
- B. Format
- C. Data
- **D. Configure**
- E. Group by

**Answer:** D

*해설:* 정답은 **D**입니다. 보고서의 그룹핑과 계산식 설정은 Report Designer의 `Configure` 섹션에서 수행합니다.

---

### Q378. When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?

- A. Client
- **B. Server**
- C. Browser
- D. Network

**Answer:** B

*해설:* 정답은 **B**입니다. Data Policy는 기본적으로 서버에서 실행되어 UI 외 입력 경로에도 동일한 규칙을 적용합니다.

---

### Q379. A customer wants to be able to identify and track components of their infrastructure that support their ecommerce service. What ServiceNow products could support this requirement? Choose 3 answers

- A. Performance Analytics
- **B. Configuration Management (CMDB)**
- C. Financial Management
- **D. Discovery**
- **E. Service Mapping**

**Answer:** B,D,E

*해설:* 정답은 **B,D,E**입니다. 인프라 구성요소를 식별하고 서비스와 연결해 추적하려면 `CMDB`, `Discovery`, `Service Mapping` 조합이 핵심입니다.

---

### Q380. On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?

- A. Can Read
- B. Can Write
- **C. Can Contribute**
- D. Can Author
- E. Cannot Author

**Answer:** C

*해설:* 정답은 **C**입니다. Knowledge Base에 글을 작성할 수 있는 사용자 집합은 `Can Contribute` 탭에서 지정합니다.

---

### Q381. What is the best practice related to using the Default Update Set for moving customizations between instances?

- A. Merge Default update sets before moving between instances
- B. Submit Default update set to application repository
- **C. You should not use the Default Update sets for moving between instances**
- D. Keep Default update set to maximum of 20 records, for troubleshooting purposes

**Answer:** C

*해설:* 정답은 **C**입니다. 커스터마이징을 인스턴스 간 이동할 때 `Default Update Set`은 쓰지 않는 것이 모범 사례입니다. 별도의 명시적 update set으로 분리해야 추적과 검증이 쉽습니다.

---

### Q382. Which type of scripts run in the browser?

- **A. Policies and Client Scripts**
- B. Access Contral Scripts
- C. script Include Scripts
- D. Business Rule Scripts

**Answer:** A

*해설:* 정답은 **A**입니다. 브라우저에서 동작하는 스크립트는 `Policies and Client Scripts` 계열입니다. 서버 측 객체인 Business Rule이나 ACL script와는 다릅니다.

---

### Q383. How would you distinguish between a Base Class table and a Parent Class table?

- A. Base Class tables always have tables extended from them, Parent tables do not have tables extended from them.
- **B. Base Class tables are not extended from another table, while Parent Class tables may be extended from another table.**

**Answer:** B

*해설:* 정답은 **B**입니다. `Base Class`는 다른 테이블을 상속하지 않는 최상위 쪽 테이블이고, `Parent Class`는 자신도 상속받았을 수 있으면서 다른 하위 테이블의 부모가 되는 중간 계층 테이블입니다.

---

### Q384. On the Cl Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?

- A. Service Tracer
- B. Automapping Utility
- **C. Relationships**
- D. Transform Map

**Answer:** C

*해설:* 정답은 **C**입니다. Dependency View에서 인프라 CI에서 서비스까지 추적할 수 있는 근거는 CI 간의 `Relationships`입니다.

---

### Q385. How would you define an Access Control, to allow a user with iti role to have permission to create incident records?

- A. Name: incident; Permission: write; Role: itil
- B. Name: incident Any, Operation: write, Permission: itil
- C. Name: incident.*; Operation: write; Permission: itil
- **D. Name: incident None, Permission: create: Role: itil**
- E. Name: incident. None; Operation: create; Role: itil

**Answer:** D

*해설:* 정답은 **D**입니다. Incident 생성 권한을 주려면 테이블 수준에서 `incident.None` 대상에 `create` 작업, `itil` 역할을 부여하는 ACL이 맞습니다.

---

### Q386. What options can you see, when you fight click on a Cl, from the Cl dependency view map? Choose 3 answers

- **A. View Affected Cis**
- **B. View Related Tasks**
- **C. View Recent Outages**
- D. View Cases
- E. View Knowledge

**Answer:** A,B,C

*해설:* 정답은 **A,B,C**입니다. CI Dependency View에서 해당 CI를 우클릭하면 영향 CI, 관련 작업, 최근 장애 같은 운영 관점 메뉴를 볼 수 있습니다.

---

### Q387. What icon do you use to change the icon and color on a Favorite??

- A. Star
- B. Triangle
- **C. Pencil**
- D. Clock

**Answer:** C

*해설:* 정답은 **C**입니다. Favorite의 아이콘과 색상을 바꾸는 편집 동작은 `Pencil` 아이콘에서 수행합니다.

---

### Q388. You have been asked to configure a form so an employee could a tablet and select the standard accessary options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? Choose 3 answers

- **A. Create Catalog Item for the Tablet, and add a variable set to the form, for the accessory options.**
- B. Create a Record Producer, and on the form, add a check box variable for each accessory option.
- C. On Shopping Cart configuration, select option to show the Add Accessories button.
- **D. Create one Catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector.**
- **E. Create Catalog Item for the tablet, and on the form, add a check box variable for each accessory option.**

**Answer:** A,D,E

*해설:* 정답은 **A,D,E**입니다. 태블릿 주문 시 부속품을 함께 선택하게 하려면 태블릿용 Catalog Item에 체크박스 변수나 variable set을 두는 방식이 가능하고, 부속품 자체를 별도 Catalog Item으로 관리하는 접근도 가능합니다.

---

### Q389. Which feature helps to automatically allocate a critical, high priority, service request to the appropriate assignment group or team member?

- A. User Policy
- B. UI policy
- C. Predictive Intelligence
- **D. Assignment Rule**

**Answer:** D

*해설:* 정답은 **D**입니다. 요청을 적절한 그룹이나 담당자에게 자동 배정하는 기본 기능은 `Assignment Rule`입니다.

---

### Q390. A customer wants to use a client script to validate things on a form m order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?

- A. onSubmission()
- **B. onSubmit()**
- C. onLoad
- D. onUpdate()

**Answer:** B

*해설:* 정답은 **B**입니다. 폼 제출 직전에 유효성 검사를 하고 필요하면 제출을 막으려면 `onSubmit()` Client Script를 사용합니다.

---

### Q391. What type of field has a drop down list, from which you can pick from pre-defined options?

- **A. Choice**
- B. Picker
- C. Drop down
- D. Option

**Answer:** A

*해설:* 정답은 **A**입니다. 미리 정의된 옵션 중에서 드롭다운으로 선택하는 필드 유형은 `Choice`입니다.

---

### Q392. What are the main components of the Form Design interface? (Choose three.)

- A. Field Layout
- **B. Page Header**
- **C. Field Navigator**
- D. Field Picker
- **E. Form Layout**

**Answer:** B,C,E

*해설:* 정답은 **B,C,E**입니다. Form Design의 주요 구성은 상단 `Page Header`, 필드를 찾는 `Field Navigator`, 실제 배치를 조정하는 `Form Layout`입니다.

---

### Q393. Many actions are included with flow designer, what are some frequently used core actions? Choose 4 answers.

- A. Look for Update
- **B. Create Record**
- **C. Ask for Approval**
- **D. Look Up Record**
- **E. Wait for Condition**
- F. Wait for Match

**Answer:** B,C,D,E

*해설:* 정답은 **B,C,D,E**입니다. Flow Designer에서 자주 쓰는 core action에는 `Create Record`, `Ask for Approval`, `Look Up Record`, `Wait for Condition`이 있습니다.

---

### Q394. What are the three key tables in an enterprise CMDB? (Choose three.)

- **A. cmdb**
- B. sn_cmdb_bak
- **C. cmdb_rel_ci**
- D. sn_cmdb
- E. cmdb_bak
- **F. cmdb_ci**
- G. sn_cmdb_ci

**Answer:** A,C,F

*해설:* 정답은 **A,C,F**입니다. enterprise CMDB의 핵심 테이블은 상위 구조 `cmdb`, 실제 CI 레코드가 있는 `cmdb_ci`, CI 관계를 담는 `cmdb_rel_ci`입니다.

---

### Q395. For your implementation, the following tables. are extended fram each ofher: *Incident table is extended from Task table.* Super Incident table is extended from Incident table, In this situation, which table(s) are P arent, Child and Base tables? Choose 5 answers

- A. Super Incident table is a Parent table
- **B. Super Incident table is a Child table**
- C. Task table is a Child table
- D. Super Incident table is a Base table
- **E. Task table is a Parent table**
- F. Incident table is a Base table
- **G. Task table is a Base table**
- **H. Incident table is a Parent table**
- **I. Incident table is a Child table**

**Answer:** B,E,G,H,I

*해설:* 정답은 **B,E,G,H,I**입니다. 확장 구조가 `Task -> Incident -> Super Incident`라면 Task는 Base이자 Parent, Incident는 Child이자 Parent, Super Incident는 Child가 됩니다.

---

### Q396. What instance resource allows you to access guided tours, information about actions, and instructions an how to use inputs and outputs in your flaw?

- A. Community
- **B. Help Panel (question mark icon)**
- C. Docs
- D. Wiki

**Answer:** B

*해설:* 정답은 **B**입니다. 인스턴스 안에서 가이드 투어, 액션 설명, flow 입력/출력 안내를 바로 보는 리소스는 `Help Panel`입니다.

---

### Q397. An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? Choose 2 answers

- **A. Their user account failed LDAP authentication**
- B. Their user account is not logged in properly
- **C. Their user account was not approved by their manager**
- D. Their user account does not have itil role
- E. Their user account does not belong to any groups, which contain the itil role

**Answer:** A,C

*해설:* 정답은 **A,C**로 남겨 두었지만, 실제 운영 관점에서는 보통 `itil` 역할 또는 그 역할이 포함된 그룹 미소속이 더 직접적인 원인입니다. 현재 보기/정답 복원 신뢰도는 낮습니다.

---

### Q398. When importing data, what happens to imported rows, if no coalesce field is specified?

- A. All rows are rejected from the import, as coalesce field is required.
- **B. All rows are treated as new records. No existing records are updated.**
- C. Duplicate rows are rejected from the import.
- D. All rows are treated as new records, but errors will be flagged in the import log.

**Answer:** B

*해설:* 정답은 **B**입니다. coalesce 필드를 지정하지 않으면 기존 레코드와 비교할 기준이 없어서 가져온 행이 모두 새 레코드로 처리됩니다.

---

### Q399. A new employee joins the IT deployment and needs to perform work assigned to Network and Hardware groups. How would you set up their access? Choose 3 answers

- A. Add User Account to itll group
- **B. Add User Account to ACL**
- **C. Add User Account to network group**
- D. Add User Account to IT Knowledgebase
- E. Create User Account
- **F. Add User Account to Hardware group**

**Answer:** B,C,F

*해설:* 정답은 **B,C,F**로 남겨 두었지만, 실제 설정 관점에서는 사용자를 `Network group`, `Hardware group`에 넣고 계정을 준비하는 방향이 핵심입니다. `Add User Account to ACL`은 보기 복원 오류 가능성이 높습니다.

---

### Q400. Which path would you take to access the table configuration page from a form?

- A. The Form Context menu > View > Table
- **B. The Form Context menu > Configure > Table**
- C. The Form Context menu > Configure > Dictionary
- D. The Form Context menu > View > Show Table

**Answer:** B

*해설:* 정답은 **B**입니다. 폼에서 현재 테이블의 설정 페이지로 가려면 Form Context Menu의 `Configure > Table` 경로를 사용합니다.

---

### Q401. What type of query allows you to filter list data using normal words, instead of the condition builder?

- **A. Natural Language Query**
- B. Alexa Query
- C. Machine Learning Query
- D. Predictive Intelligence Query
- E. Auto-suggest Query

**Answer:** A

*해설:* 정답은 **A**입니다. 조건 빌더 대신 일반적인 문장이나 단어로 리스트를 필터링하는 기능은 `Natural Language Query`입니다.

---

### Q402. What action will allow you to personalize layouts of columns in a list?

- **A. Click Gear icon > Personalize window options > Select the appropriate columns**
- B. Select the column to be personalized > Click Edit icon (Penal) > Choose me options to personage
- C. Context Menu > View > Personalize
- D. Select the column to be personalized and right at the header > Choose the options to personalize

**Answer:** A

*해설:* 정답은 **A**입니다. 리스트 컬럼 레이아웃을 개인화하려면 `Gear` 아이콘에서 personalize 창을 열고 표시할 컬럼을 선택합니다.

---

### Q403. What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?

- A. Analytics Reports
- **B. Performance Analytics**
- C. Scheduled Reports
- D. Reporting

**Answer:** B

*해설:* 정답은 **B**입니다. 시간에 따른 지표 변화를 대시보드와 위젯으로 시각화해 개선 지점을 찾는 기능은 `Performance Analytics`입니다.

---

### Q404. A customer has asked for the following updates to a form: *Make Resolution code mandatory, admin state is changed to Resolved.* Hide major incident check box, unless logged in user has Major incident Manager role. What type of rules (s) would you use to implement this requirement?

- A. Dictionary Design
- B. Field Limiter
- **C. UI Policy**
- D. UI Design
- E. Form Constraint

**Answer:** C

*해설:* 정답은 **C**입니다. 조건에 따라 필드를 mandatory로 만들거나 숨기는 요구사항은 전형적인 `UI Policy` 적용 대상입니다.

---

### Q405. What do you click when you have made modification to your report, and your want to see the results without saving?

- A. Execute
- B. Try ir
- **C. Run**
- D. Test
- E. Preview

**Answer:** C

*해설:* 정답은 **C**입니다. 보고서를 저장하지 않고 현재 설정으로 결과만 확인하려면 `Run`을 클릭합니다.

---

### Q406. On a Business Rule, the When salting determines at what point the rule executes. What are the options for specifying that timing?

- A. Insert, Update, Delete. Query
- **B. 4G} Before, After, Async, Display**
- C. Prior to, Synchronous, on Update
- D. Before, Synchronous, Scheduled Job, View

**Answer:** B

*해설:* 정답은 **B**입니다. Business Rule의 `When` 옵션은 `Before`, `After`, `Async`, `Display` 네 가지입니다.

---

### Q407. On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?

- A. Attribute
- B. Label
- **C. Field**
- D. Column
- E. Data Element

**Answer:** C

*해설:* 정답은 **C**입니다. 필터 조건에서 테이블과 권한에 따라 선택 가능한 첫 요소는 `Field`입니다.

---

### Q408. The customer has asked that your change the default layout of the task list. *Number* Task Type *Parent* Short Description *Assignment Group* Assignment * Updated After navigation to the list, where would you click, to meet this requirement?

- **A. Right click on any column header, Context menu > Configure > List Layout**
- B. Right click List Gear icon > Configure > Columns
- C. Click List Context Menu >Personalize List
- D. Click List Context Menu > Configure Columns

**Answer:** A

*해설:* 정답은 **A**입니다. 리스트의 기본 컬럼 배치를 바꾸려면 컬럼 헤더를 우클릭해 `Configure > List Layout`으로 이동하면 됩니다.

---

### Q409. On a filter condition, which component is always a choice list?

- A. Operator
- B. Filter Criteria
- **C. Operation**
- D. Match Criteria

**Answer:** C

*해설:* 정답은 **C**입니다. 필터 조건에서 `Operation`은 `is`, `contains`, `starts with` 같은 미리 정해진 항목 중에서 고르는 choice list입니다.

---

### Q410. NO.19 UI Action can prompt that an Incident has been successfully submitted

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. UI Action은 실행 후 메시지를 띄워 Incident가 성공적으로 제출됐음을 사용자에게 알릴 수 있습니다.

---

### Q411. NO.22 Business Rules are used to enforce mandatory data on a form

- A. True
- **B. False**

**Answer:** B

*해설:* 정답은 **B**입니다. 폼에서 필수 입력을 직접 강제하는 대표 수단은 UI Policy나 Client Script이며, Business Rule은 그 자체로 폼 UI의 mandatory 표시를 담당하지 않습니다.

---

### Q412. NO.26 Knowledge articles within a knowledge base are grouped by category

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. Knowledge Base 안의 문서는 category 구조로 분류되어 탐색과 관리가 쉬워집니다.

---

### Q413. NO.38 What is the name of the table relationship, where two or more tables are related in a bi_x0002_directional relationship, so that the related records are visible from both tables in a related list?

- A. Database View
- **B. Many to Many**
- C. One to Many
- D. Extended

**Answer:** B

*해설:* 정답은 **B**입니다. 양쪽 테이블에서 서로 관련 레코드를 related list로 볼 수 있게 하는 관계는 `Many to Many`입니다.

---

### Q414. NO.44 _______________ is a computer program running as a service; a physical computer dedicated to running one or more services, or a system running a database

**Answer:** Server

*해설:* 정답은 **Server**입니다. 서비스나 데이터베이스를 실행하며 요청을 처리하는 시스템을 서버라고 합니다.

---

### Q415. NO.54 What Is the purpose of the Filter navigator In the Application Navigator?

- A. Filter applications in order of use
- **B. Quickly navigate to applications and modules**
- C. Collapse and expand applications
- D. List applications In order of Top Requests

**Answer:** B

*해설:* 정답은 **B**입니다. Application Navigator의 Filter navigator는 애플리케이션과 모듈을 빠르게 검색해 이동하게 해 줍니다.

---

### Q416. NO.67 When creating a global custom table named "abc", what is the table name that is automatically assigned by the platform?

- A. snc_abc
- B. abc
- **C. u_abc**
- D. sys_abc

**Answer:** C

*해설:* 정답은 **C**입니다. Global scope에서 만든 커스텀 테이블 `abc`는 자동으로 `u_abc`라는 이름을 갖습니다.

---

### Q417. NO.77 What are the three components of a filter condition? (choose three)

- A. Table
- **B. Value**
- **C. Field**
- **D. Operator**

**Answer:** B,C,D

*해설:* 정답은 **B,C,D**입니다. 필터 조건은 `Field`, `Operator`, `Value` 세 요소로 구성됩니다.

---

### Q418. NO.87 An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?

- A. The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.
- B. The manager does not have the itil role.
- C. The manager is not a member of the Service Desk group.
- **D. The manager is not a member of the Network and Hardware groups.**
- E. The Assignment Group manager field is empty.

**Answer:** D

*해설:* 정답은 **D**입니다. `My Groups Work`는 사용자가 실제로 속한 그룹의 작업만 보여 주므로, 매니저가 Network와 Hardware 그룹의 멤버가 아니면 해당 작업을 볼 수 없습니다.

---

### Q419. NO.94 As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?

- **A. Knowledge**
- B. ServiceNow Wiki
- C. Knowledge Now
- D. SharePoint
- E. Stack Overflow

**Answer:** A

*해설:* 정답은 **A**입니다. 내부 문서, FAQ, 트러블슈팅 자료를 찾아보는 기본 인터페이스는 `Knowledge`입니다.

---

### Q420. NO.98 Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 각 Knowledge Base는 고유한 라이프사이클 워크플로, user criteria, category 구조, 관리 담당자를 가질 수 있습니다.

---

### Q421. NO.113 Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?

- A. Create Record Producer and use the Available For list to specify First Line [sn_first_line] role
- **B. Create Catalog Item and use the Not Available list to specify the Manager Group**
- C. Create Catalog Item and use the Available For list to specify ITIL [itil] role
- D. Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role

**Answer:** B

*해설:* 정답은 **B**로 유지했습니다. 다만 일반적으로는 User Criteria로 허용 대상을 설계하는 편이 더 자연스럽고, 현재 문항은 보기 복원 신뢰도가 아주 높지는 않습니다. 현재 문서에서는 관리자 그룹을 `Not Available`로 제외하는 흐름을 따릅니다.

---

### Q422. NO.126 Which one of the following statements describes the purpose of a Service Catalog workflow?

- A. A Service Catalog workflow generates three basic components: item variable types, tasks, and approvals
- B. Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment processes
- **C. A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to defined users or groups**
- D. A Service Catalog workflow generates three basic components: item variable types, tasks, and notifications

**Answer:** C

*해설:* 정답은 **C**입니다. Service Catalog workflow는 승인, 작업 생성, 알림 전송 등 복잡한 fulfillment 과정을 자동으로 진행하는 데 사용됩니다.

---

### Q423. NO.133 A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of "INC" to the company standard IN." What are the next steps to be taken''

- **A. Go to the Number Maintenance application and change the prefix to "IN" for incident**
- B. Create a Business Rule that modifies the prefix before the Insert operation
- C. The prefix of an incident cannot be changed because it is a built-in feature
- D. Submit a Change Request to ServiceNow Technical Support

**Answer:** A

*해설:* 정답은 **A**입니다. Incident 번호 접두어 변경은 `Number Maintenance`에서 해당 번호 규칙의 prefix를 수정해 처리합니다.

---

### Q424. NO.136 What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles

- A. User conditions
- B. User info
- **C. User Criteria**
- D. User permissions

**Answer:** C

*해설:* 정답은 **C**입니다. 지식 문서의 생성, 읽기, 수정, retire 가능 여부를 사용자 조건으로 판단하는 기준은 `User Criteria`입니다.

---

### Q425. NO.144 What is a formatter? Select one of the following

- A. A formatter allows you to configure applications on your instance
- **B. A formatter is a form element used to display information that is not a field in the record**
- C. A formatter allows you to populate fields automatically
- D. A formatter is a set of conditions applied to a table to help find and work with data

**Answer:** B

*해설:* 정답은 **B**입니다. formatter는 레코드 필드가 아닌 부가 정보를 폼 위에 표시하는 form element입니다.

---

### Q426. NO.148 What field contains a record's 32-character, unique identifier?

- A. sn_rec_id
- B. rec_id
- C. u_id
- **D. sys_id**
- E. sn_gu_id
- F. sn_sys_id
- G. id

**Answer:** D

*해설:* 정답은 **D**입니다. 레코드의 32자리 고유 식별자는 `sys_id` 필드에 저장됩니다.

---

### Q427. NO.153 database live at the Data Center

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. 표현은 다소 거칠지만, 데이터베이스가 데이터 센터 인프라에서 운영된다는 의미로 보면 참입니다.

---

### Q428. NO.162 What would NOT appear in the Application Navigator if "service" is typed into the filter field?

- A. Configuration > Business Services
- B. Self-Service > Knowledge
- C. Service Portal > Widgets
- **D. Incident > Assigned to me**

**Answer:** D

*해설:* 정답은 **D**입니다. Navigator 필터에 `service`를 입력하면 이름에 service가 들어간 모듈이 주로 보이고, `Incident > Assigned to me`는 해당 문자열과 직접 일치하지 않습니다.

---

### Q429. NO.165 A REQ number in the Service Catalog represents

- **A. the order number.**
- B. the stage.
- C. the task to complete.
- D. the individual item in the order.

**Answer:** A

*해설:* 정답은 **A**입니다. `REQ` 번호는 서비스 카탈로그 주문 전체를 나타내는 request, 즉 order number입니다.

---

### Q430. NO.168 What are the two aspects to LDAP Integration? (2)

- **A. Data Population**
- B. Data formatting
- C. Authorization
- **D. Authentication**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. LDAP Integration의 핵심은 사용자 인증 `Authentication`과 사용자 정보 동기화 `Data Population`입니다.

---

### Q431. NO.177 Which are states that you can make a field on a form using UI Policy? (choose three)

- **A. read-only**
- B. write-only
- C. Necessary
- **D. Mandatory**
- E. Empty
- **F. Hidden**

**Answer:** A,D,F

*해설:* 정답은 **A,D,F**입니다. UI Policy로 필드를 `read-only`, `mandatory`, `hidden` 상태로 바꿀 수 있습니다.

---

### Q432. NO.201 Configuration will not affect what others see on their forms

- A. True
- **B. False**

**Answer:** B

*해설:* 정답은 **B**입니다. 일반적인 configure 변경은 개인 설정이 아니라 다른 사용자 화면에도 영향을 줄 수 있으므로 거짓입니다.

---

### Q433. NO.206 Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?

- A. Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog.
- **B. Create one Catalog Item for Event Room Set Up; then publish to both Catalogs.**
- C. Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities.
- D. Create one Catalog Item for Event Room Set Up; then use ACLs to control access.

**Answer:** B

*해설:* 정답은 **B**입니다. 요구사항과 fulfillment 흐름이 같다면 Catalog Item을 하나만 만들고 두 카탈로그에 모두 게시하는 것이 가장 효율적입니다.

---

### Q434. NO.210 What are the main UI component(s) of the ServiceNow Platform? (3)

- A. Banner Navigator
- **B. Banner Frame**
- C. Application Frame
- **D. Application Navigator**
- E. Content Menu
- **F. Content Frame**

**Answer:** B,D,F

*해설:* 정답은 **B,D,F**입니다. ServiceNow 플랫폼의 주요 UI 구성은 `Banner Frame`, `Application Navigator`, `Content Frame`입니다.

---

### Q435. NO.234 Data Policy can enforce mandatory data on import

- **A. True**
- B. False

**Answer:** A

*해설:* 정답은 **A**입니다. Data Policy는 UI뿐 아니라 import에도 적용될 수 있어 mandatory 조건을 가져오기 시점에도 강제할 수 있습니다.

---

### Q436. NO.238 Tables are made up of which of the following? (choose two)

- **A. records**
- B. lists
- C. forms.
- **D. fields**

**Answer:** A,D

*해설:* 정답은 **A,D**입니다. 테이블은 행에 해당하는 `records`와 열에 해당하는 `fields`로 구성됩니다.

---

### Q437. NO.239 There are _____ common types of Interfaces (Numeric Value) 6: There are six common types of interfaces

- A. Homepage: Consists of navigational elements, functional controls, and platform information.
- B. List: Display records from a data table, as well as allow you to edit the record information using the List Editor functionally.
- **C. Form: Data is entered into ServiceNow through forms**
- D. Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a single screen.
- E. Maps: Display ServiceNow data graphically on a Google map
- F. Timelines: Used to track tasks or projects

**Answer:** C

*해설:* 정답은 **C**로 남겨 두었지만, 문항 자체가 숫자 문제와 인터페이스 설명 보기가 섞여 있어 복원 신뢰도가 낮습니다. 현재 문서 기준으로는 `Form: Data is entered into ServiceNow through forms` 보기를 정답으로 유지합니다.

---

### Q438. NO.243 Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)

- **A. Discovery**
- **B. IntegrationHub ETL**
- C. Finder
- D. CMDB Plug-in
- E. CMDB Integration Dashboard

**Answer:** A,B

*해설:* 정답은 **A,B**입니다. `Discovery`는 인프라를 스캔해 CI를 자동 식별하고, `IntegrationHub ETL`은 외부 데이터 소스를 CMDB 구조에 맞게 적재하는 데 사용됩니다.

