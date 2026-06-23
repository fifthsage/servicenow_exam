# CSA Question Review Progress

Date: 2026-06-22
Workspace: `C:\Users\fifth\Projects\servicenow_exam`
Target file: `CSA/csa_questions.js`

## User Instructions

- Use ServiceNow official documentation 기준으로 `csa_questions.js` 문제를 하나씩 검증한다.
- 사용자가 **"다음"**이라고 하면 다음 번호 문제를 진행한다.
- 각 문제마다 확인할 것:
  1. 문제가 공식 문서 기준으로 올바른지
  2. 답변 형식이 올바른지: 라디오/체크박스, 정답 수
  3. 해설이 올바른지
- 문서 링크는 답변에 포함하지 않는다.
- 해설이 부정확하거나 시험 기준에 맞게 개선할 수 있으면 직접 수정해도 된다.
- 앞으로 답변에는 **총 문제 개수와 검증 완료 문제 개수**를 함께 알려준다.

## Current Progress

- Total questions: 399
- Reviewed through: Question 119
- Next question to review: Question 120

## Modified Questions

1. Q1
   - Answer kept: `A`
   - Explanation revised to focus on User Impersonation as testing and visibility from another user's perspective.

2. Q2
   - Answer kept: `C`
   - Explanation revised to clarify Roles control Application/Module access, while ACLs control data access.

3. Q3
   - Answer kept: `A, C, D, F`
   - Explanation revised to list standard Client Script types: `onLoad`, `onChange`, `onSubmit`, `onCellEdit`.
   - Clarified `onUpdate` and `onEdit` are not standard ServiceNow script types for CSA purposes.

4. Q4
   - Answer kept: `A`
   - Explanation revised to focus on `Tables & Columns` for viewing table field/column settings.

5. Q5
   - Original title was inconsistent: "What are the 5 provided Roles by ServiceNow?" but answer had 3 choices.
   - Title changed to: "Which of the following are the three main ServiceNow user types?"
   - Answer kept: `A, C, E`
   - Explanation revised around System Administrator, Fulfiller, Requester.

6. Q6
   - Answer kept: `D`
   - Explanation revised to clarify Service Catalog components: Catalog Items, Record Producers, Order Guides.

7. Q7
   - Answer kept: `A`
   - Explanation revised to clarify UI Policy can control Mandatory, Read-only, Visible; hidden means Visible=false.

8. Q8
   - Answer kept: `B`
   - Explanation revised to clarify ServiceNow uses multi-instance architecture, not single-instance multi-tenant.

9. Q9
   - Answer kept: `B`
   - Explanation revised to clarify Business Rules are server-side JavaScript and can run before/after/async/display.

10. Q10
    - Answer kept: `A, D`
    - Explanation revised to clarify LDAP Integration has two main aspects: Data Population and Authentication.
    - Clarified Authorization is not one of the two core LDAP integration aspects.

11. Q11
    - Answer kept: `C`
    - Explanation revised to clarify User Criteria controls Knowledge `Can Read` and `Can Contribute` access.
    - Clarified User conditions, User info, and User permissions are not the correct ServiceNow term.

12. Q12
    - Answer kept: `A, D`
    - Explanation revised to clarify reports can be created from `Reports > View / Run` and list column headings.
    - Clarified Metrics module and Statistics module are not the report creation locations asked in the question.

13. Q13
    - Answer kept: `A`
    - Explanation revised to clarify a Trigger starts a flow in Flow Designer.
    - Clarified Core Action and Spoke are not the initiating component.

14. Q14
    - Answer kept: `C`
    - Explanation revised to clarify Group records are stored in `sys_user_group`.
    - Clarified `sys_user` stores users and `sys_user_grmember` stores user-group membership.

15. Q15
    - Answer kept: `C`
    - Explanation revised to use the standard `Dot-Walking` term.
    - Clarified that the technique follows reference fields to pull values from related tables.

16. Q16
    - Answer kept: `B`
    - Explanation revised to define Client as the requester side that accesses a remote server.
    - Clarified the client-side vs server-side distinction with standard ServiceNow examples.

17. Q17
    - Answer kept: `A, C, D`
    - Explanation already aligned with UI16 basic configuration items.
    - Clarified Record Number Format belongs in Number Maintenance, not Basic Configuration UI16.

18. Q18
    - Answer kept: `A`
    - Explanation revised to identify Connect Chat as the real-time conversation tool for logged-in users.

19. Q19
    - Answer kept: `B`
    - Explanation revised to distinguish table definitions in `sys_db_object` from field definitions in `sys_dictionary`.

20. Q20
    - Answer kept: `A, B, D`
    - Explanation revised to clarify the role, condition, and script requirements used by ACLs.
    - Clarified that all configured requirements must pass for access to be granted.

21. Q21
    - Answer kept: `D`
    - Explanation revised to define a Task as a work record created, worked, and moved to a closed state.
    - Removed an overly rigid lifecycle sequence that does not apply identically to every task type.

22. Q22
    - Summary checked: asks where admins can check the release running on a ServiceNow instance.
    - Answer kept: `B`
    - Explanation revised to clarify that the Stats module shows instance release and build information.

23. Q23
    - Summary checked: asks the purpose of a Related List.
    - Answer kept: `D`
    - Explanation revised to emphasize that Related Lists display related records, not create relationships.

24. Q24
    - Summary checked: asks for three valid ServiceNow user authentication methods.
    - Answer kept: `B, C, D`
    - Explanation revised to clarify Local Database, LDAP, and SSO and exclude XML feed/FTP authentication.

25. Q25
    - Summary checked: asks for the three components of a filter condition.
    - Answer kept: `B, C, D`
    - Explanation revised to focus on Field, Operator, and Value and exclude Table as a condition component.

26. Q26
    - Summary checked: asks the difference between UI Policy and UI Action.
    - Answer kept: `B`
    - Explanation revised to connect UI Policy with field state control and UI Action with buttons/actions.

27. Q27
    - Summary checked: asks which components are linked from the baseline Service Catalog homepage.
    - Answer kept: `A`
    - Explanation revised to focus on Record Producers, Order Guides, and Catalog Items as visible catalog links.

28. Q28
    - Summary checked: asks what a Dictionary Override is.
    - Answer kept: `D`
    - Explanation revised to connect Dictionary Override directly to field properties on extended tables.

29. Q29
    - Summary checked: asks which table type can be extended by other tables but does not extend another table.
    - Answer kept: `A`
    - Explanation revised to define Base Tables as top-level parent tables in the table hierarchy.

30. Q30
    - Summary checked: asks the difference between Insert and Update operations on a form.
    - Answer kept: `B`
    - Explanation revised to clarify that Insert creates a new record, Update saves changes, and both exit the form.

31. Q31
    - Summary checked: asks what displays a set of records from a table.
    - Answer kept: `D`
    - Explanation revised to define List and distinguish it from View and Dashboard.

32. Q32
    - Summary checked: asks what Mapping Assist is used for during Load Data and Transform Map processing.
    - Answer kept: `D`
    - Explanation revised to clarify that Mapping Assist creates field mappings between source and target fields.

33. Q33
    - Summary checked: asks the purpose of a Service Catalog workflow.
    - Answer kept: `C`
    - Repaired the title grammar and all four truncated options using the complete duplicate question Q397.
    - Explanation revised to focus on fulfillment automation, task/approval handling, and notifications.

34. Q34
    - Summary checked: asks the navigation path from a catalog request to its fulfillment task list.
    - Answer kept: `C`
    - Explanation revised around the catalog request hierarchy `REQ -> RITM -> SCTASK`.

35. Q35
    - Summary checked: asks for a valid characteristic of importing data into ServiceNow.
    - Answer kept: `D`
    - Explanation revised to clarify Transform Map reuse, Coalesce timing, and Import Set permissions.

36. Q36
    - Summary checked: asks for two best practices for managing users, groups, and roles.
    - Answer kept: `C, D`
    - Reworded the title for grammatical clarity.
    - Explanation revised to recommend group-based role management without incorrectly claiming direct role assignment is impossible.

37. Q37
    - Summary checked: asks for the definition of a Formatter.
    - Answer kept: `B`
    - Explanation revised to clarify that a Formatter displays non-field information on a form.

38. Q38
    - Summary checked: asks for four concepts associated with the ServiceNow CMDB.
    - Answer kept: `A, C, D, E`
    - Explanation revised around CI data, tables/fields, service processes, and Dependency View.
    - Clarified that User Permissions are an access-control concern rather than a CMDB concept in this question.

39. Q39
    - Summary checked: asks what an Import Set Table is.
    - Answer kept: `C`
    - Explanation revised to define it as the staging area used before Transform Map processing.

40. Q40
    - Summary checked: asks which field controls the display sequence of variables in a Service Catalog Item.
    - Answer kept: `C`
    - Explanation revised to clarify that the Variable form's Order field controls display order.

41. Q41
    - Summary checked: asks which table stores user records.
    - Answer kept: `A`
    - Explanation revised to distinguish `sys_user` from group and group-membership tables.

42. Q42
    - Summary checked: asks which module changes the record-number format for a table.
    - Answer kept: `A`
    - Explanation revised to scope Number Maintenance to tables configured for automatic numbering.

43. Q43
    - Summary checked: asks for the definition of a Record Producer.
    - Answer kept: `D`
    - Repaired the truncated correct option to end with `from the Service Catalog`.
    - Explanation revised to distinguish Record Producers from standard Catalog Items and Order Guides.

44. Q44
    - Summary checked: asks how Service Catalog Items relate to the Service Catalog.
    - Answer kept: `B`
    - Explanation revised to define Catalog Items as the building blocks of the Service Catalog.

45. Q45
    - Summary checked: asks how to mark a Knowledge Article for review.
    - Answer kept: `A`
    - Explanation revised to distinguish Flag article from Bookmark and other options.

46. Q46
    - Summary checked: asks which three actions are available from the User menu.
    - Answer kept: `B, C, D`
    - Explanation revised to clarify Log Out, Elevate Roles, and Impersonate Users.
    - Noted that elevated-role and impersonation options require appropriate permissions.

47. Q47
    - Summary checked: asks what a REQ number represents in the Service Catalog.
    - Answer kept: `A`
    - Reworded the title to fix grammar and duplicate punctuation.
    - Explanation revised to distinguish REQ, RITM, and SCTASK.

48. Q48
    - Summary checked: asks which application is available to all users.
    - Answer kept: `D`
    - Explanation revised to define Self-Service as the requester-accessible application and contrast role-gated apps.

49. Q49
    - Summary checked: asks which feature lets a user edit field values directly from a list without opening the form.
    - Answer kept: `C`
    - Explanation kept; it correctly identifies List Editor and notes ACL/Data Policy constraints.

50. Q50
    - Summary checked: asks which three sort criteria are available for Knowledge Base search results.
    - Answer kept: `A, C, E`
    - Explanation revised to clarify Most recent update, Relevancy, and Number of views.
    - Added distinction between the explicit Number of views option and the distractor Popularity.

51. Q51
    - Summary checked: asks the purpose of flagging a Knowledge Base article.
    - Answer kept: `B`
    - Explanation kept; it correctly defines flagging as submitting article feedback and distinguishes bookmarks.
    - Noted that reporting an error is a type of feedback, but the broader purpose is feedback submission.

52. Q52
    - Summary checked: asks which statement describes CMDB contents.
    - Answer kept: `A`
    - Explanation revised to define CMDB as storing tangible and intangible CI data and CI relationships.
    - Noted option B appears truncated, but no reliable duplicate/source text was found to reconstruct it.

53. Q53
    - Summary checked: asks for the four Knowledge workflows available in the base instance.
    - Answer changed: `A` -> `A, B, C, D`
    - Reworded title to add `(Choose four.)`.
    - Repaired truncated option A and revised explanation to list all four workflows.

54. Q54
    - Summary checked: asks which three field states can be controlled by a UI Policy.
    - Answer kept: `A, D, F`
    - Reworded title to add `(Choose three.)`.
    - Explanation kept; it correctly covers read-only, mandatory, and visible/hidden behavior.

55. Q55
    - Summary checked: asks what a metric can do in ServiceNow reporting.
    - Answer kept: `C`
    - Explanation kept; it correctly frames metrics as measurements used to evaluate ITSM process effectiveness.
    - Noted distractors narrow the idea to gauges, time-only measurement, or workflow/SLA comparison.

56. Q56
    - Summary checked: asks for a ServiceNow recommendation about Update Sets.
    - Answer kept: `A`
    - Repaired truncated option A using the clearer duplicate concept from later in the file.
    - Explanation revised to focus on avoiding Default Update Set for moving customizations between instances.

57. Q57
    - Summary checked: asks which Import Set coalesce configuration allows scripting.
    - Answer kept: `C`
    - Explanation revised to define Conditional coalesce as script-based matching during Transform Map processing.

58. Q58
    - Summary checked: asks which Service Catalog module administrators use to begin creating a new item.
    - Answer kept: `B`
    - Explanation kept; it correctly identifies Maintain Items as the catalog item management module.

59. Q59
    - Summary checked: asks what is generated when a user orders an item or service from the Service Catalog.
    - Answer kept: `C`
    - Explanation kept; it correctly identifies the generated Request (REQ) and explains the REQ/RITM/SCTASK hierarchy.

60. Q60
    - Summary checked: asks which statement correctly describes Access Control rule evaluation.
    - Answer changed: `D` -> `C`
    - Explanation revised to clarify that table/row-level and field-level ACLs must both pass.
    - Noted that option D is incorrect because it says general-to-specific evaluation.

61. Q61
    - Summary checked: asks what happens when a set of coalesce fields match during import.
    - Answer kept: `A`
    - Repaired truncated options A and D by completing the imported-information phrase.
    - Explanation kept; it correctly describes update on match and insert on no match.

62. Q62
    - Summary checked: asks how Workflows are moved between instances.
    - Answer kept: `A`
    - Explanation revised to focus on Update Sets as the standard configuration migration tool.

63. Q63
    - Summary checked: asks what tables are made up of.
    - Answer kept: `A, D`
    - Reworded title to add `(Choose two.)`.
    - Cleaned option C punctuation.
    - Explanation kept; it correctly maps records to rows and fields to columns.

64. Q64
    - Summary checked: asks which variable type combination can be added to a Service Catalog Item.
    - Answer kept: `D`
    - Explanation revised to clarify that the correct option is the only listed combination where all three are valid variable types.

65. Q65
    - Summary checked: asks for the main UI components of the ServiceNow Platform.
    - Answer kept: `B, D, F`
    - Reworded title to add `(Choose three.)`.
    - Explanation kept; it correctly identifies Banner Frame, Application Navigator, and Content Frame.

66. Q66
    - Summary checked: asks what Create Incident, Password Reset, and Report Outage catalog services have in common.
    - Answer kept: `A`
    - Explanation kept; it correctly identifies Record Producers as catalog interfaces for creating backend task-based records.

67. Q67
    - Summary checked: asks which state a Knowledge Article must be in to display to users.
    - Answer kept: `A`
    - Reworded option B from `Drafted` to `Draft`.
    - Explanation kept; it correctly identifies Published as the visible/readable state for target users.

68. Q68
    - Summary checked: asks what ServiceNow calls all data saved within a particular form.
    - Answer kept: `C`
    - Explanation kept; it correctly identifies a Record as the set of field values shown by a form.

69. Q69
    - Summary checked: asks which interface displays multiple Performance Analytics, reporting, and other widgets on one screen.
    - Answer kept: `C`
    - Explanation kept; it correctly identifies Dashboard as the multi-widget interface.

70. Q70
    - Summary checked: asks for the platform table name of the User table.
    - Answer kept: `D`
    - Explanation kept; it correctly identifies `sys_user`.

71. Q71
    - Summary checked: asks what a Schema Map is.
    - Answer kept: `D`
    - Explanation revised to define Schema Map as a visual view of table structure and relationships.
    - Noted options A and D appear truncated; no reliable duplicate/source text was found to reconstruct them.

72. Q72
    - Summary checked: asks which table records roles.
    - Answer kept: `D`
    - Explanation revised to distinguish `sys_user`, `sys_user_group`, and `sys_user_role`.

73. Q73
    - Summary checked: asks what term refers to application menus and modules a user wants to access quickly and often.
    - Answer kept: `B`
    - Explanation kept; it correctly identifies Favorites in the Application Navigator.

74. Q74
    - Summary checked: asks what is true when a new table extends another table.
    - Answer kept: `C`
    - Explanation revised to focus on inherited parent fields plus child-specific fields.
    - Noted options B and D appear truncated; no reliable duplicate/source text was found to reconstruct them.

75. Q75
    - Summary checked: asks the purpose of an Update Set.
    - Answer kept: `A`
    - Repaired truncated options A and D by completing the instance-move/application phrases.
    - Explanation kept; it correctly defines Update Sets as grouped configuration changes moved between instances.

76. Q76
    - Summary checked: asks which statement describes a characteristic of role assignment.
    - Answer kept: `A`
    - Explanation revised to focus on role containment and inherited contained roles.

77. Q77
    - Summary checked: asks what would not appear in the History section of the Application Navigator.
    - Answer kept: `B`
    - Explanation kept; it correctly distinguishes user navigation history from UI Pages.

78. Q78
    - Summary checked: asks what functionality buttons, form links, and context menu items are examples of.
    - Answer kept: `B`
    - Explanation revised to use form links wording and clarify UI Action vs Business Rule/Client Script/UI Policy.

79. Q79
    - Summary checked: asks how the Event Log differs from the Event Registry.
    - Answer kept: `A`
    - Explanation kept; it correctly distinguishes generated event records from event definitions.
    - Suggested reconstruction: option C may have intended to contrast integration-triggered events with events registered/defined in the Event Registry, but no reliable source text was found.
    - Answer impact: none; option A directly matches the platform distinction between generated event records and event definitions.

80. Q80
    - Summary checked: asks the purpose of an Order Guide.
    - Answer kept: `C`
    - Reworded title and options B/C to fix singular/plural grammar.
    - Explanation kept; it correctly describes ordering multiple related catalog items as one request.

81. Q81
    - Summary checked: asks what characteristic administrators should know about Service Catalog variables.
    - Answer kept: `D`
    - Explanation revised to clarify that variables are not limited to Record Producers or Order Guides, can affect price, and are treated as global by default in the provided answer key context.

82. Q82
    - Summary checked: asks what can be returned from the App Navigator search field.
    - Answer kept: `A, B, C, D`
    - Explanation revised to handle the overlapping wording between option A and options B/C, and to clarify why History Records and Dashboard Gauge titles are excluded.

83. Q83
    - Summary checked: original title was a note fragment about six common interface types, while the keyed answer points to the interface used for data entry.
    - Reworded title to ask which common ServiceNow interface is used to enter data.
    - Answer kept: `C`
    - Cleaned grammar in options B and D.
    - Explanation kept; it correctly identifies Form as the interface for entering and editing record data.

84. Q84
    - Summary checked: asks which statement is true about Column Context Menus.
    - Answer kept: `A`
    - Explanation revised to align with the keyed option: quick reports, list configuration, sorting/grouping, and data export from the column/list menu.

85. Q85
    - Summary checked: asks where to go in ServiceNow to order services and products offered by various departments.
    - Answer kept: `A`
    - Explanation kept; it correctly identifies Service Catalog as the central place to request services and products.

86. Q86
    - Summary checked: asks the name of the conversational bot platform that helps users obtain information, make decisions, and perform common tasks.
    - Answer kept: `C`
    - Explanation kept; it correctly identifies Virtual Agent as the conversational bot platform for automated self-service assistance.

87. Q87
    - Summary checked: asks what information the System Dictionary contains.
    - Answer kept: `B`
    - Explanation kept; it correctly identifies table and column definitions as the System Dictionary's core metadata.

88. Q88
    - Summary checked: asks the order in which filter elements should be specified.
    - Answer kept: `A`
    - Explanation kept; it correctly identifies the standard filter order as Field, Operator, then Value.

89. Q89
    - Summary checked: asks the processing order for Table Access Control rules.
    - Answer kept: `B`
    - Explanation kept; it correctly identifies the ACL order as table name, parent table name, then wildcard.

90. Q90
    - Summary checked: asks the two pathways to view feedback left on a published article.
    - Answer kept: `A, D`
    - Explanation kept; it correctly identifies My Flagged and the Published article path as the two ways to review article feedback.

91. Q91
    - Summary checked: asks when the Submit button appears on a form.
    - Answer kept: `B`
    - Explanation kept; it correctly identifies Submit as the action shown when creating a new record.

92. Q92
    - Summary checked: asks what needs to be specified when creating a Business Rule.
    - Answer kept: `A, B, E, F`
    - Note: the question text/options appear malformed, but the provided answer key was preserved.
    - Suggested reconstruction: the intended prompt likely concerns the core Business Rule form fields such as table, script, and application scope.
    - Answer impact: none; key preserved because no reliable local duplicate confirmed a safer correction.

93. Q93
    - Summary checked: asks which capability lets Virtual Agent intercept and help resolve submitted incidents.
    - Answer kept: `A`
    - Explanation kept; it correctly identifies Incident Auto-Resolution as the capability.

94. Q94
    - Summary checked: asks which three permission requirements must evaluate to true for an access control rule to apply.
    - Answer kept: `A, C, D`
    - Explanation kept; it correctly identifies Conditions, Roles, and Script as the ACL checkpoints.

95. Q95
    - Summary checked: asks which module is used as the first step for importing data.
    - Answer kept: `D`
    - Explanation kept; it correctly identifies Load Data as the starting step for data import.

96. Q96
    - Summary checked: asks the steps to retrieve an Update Set.
    - Answer changed: `C` -> `D`
    - Explanation revised to the standard `Retrieve -> Preview -> Commit` flow; `Test Connection` and `Apply` are not part of the normal sequence.

97. Q97
    - Summary checked: asks what the three-bar icon on a form header is called.
    - Answer kept: `C`
    - Explanation kept; it correctly identifies the Hamburger icon / Additional Actions menu.

98. Q98
    - Summary checked: asks which tool is used for creating dependencies between configuration items in the CMDB.
    - Answer kept: `D`
    - Repaired option D spelling to `CI Class Manager`.
    - Explanation revised to state that CI Class Manager is the CMDB tool for CI relationships and dependency management.

99. Q99
    - Summary checked: asks the purpose of the Event Registry.
    - Answer changed: `A` -> `C`
    - Explanation revised to match the standard distinction: Event Registry stores event definitions, while Event Log stores generated events.

100. Q100
    - Summary checked: asks which reporting fields can perform arithmetic, coalesce, concatenation, and length.
    - Answer kept: `B`
    - Explanation kept; it correctly identifies Function fields as the reporting fields used for these calculations.

101. Q101
    - Summary checked: asks what type of field allows you to look up values from one other table.
    - Answer kept: `A`
    - Explanation kept; it correctly identifies Reference fields as the standard way to point to records in another table.

102. Q102
    - Summary checked: asks which KPI signals Performance Analytics uses to support long term workflow stability.
    - Answer kept: `C`
    - Explanation kept; anti-signals is the keyed option for this PA signal wording.

103. Q103
    - Summary checked: asks which certificate-based authentication methods can be enabled for Service Portal login.
    - Answer kept: `C, E`
    - Explanation kept; CAC and PIV are the certificate-based methods keyed in this item.

104. Q104
    - Summary checked: asks how to make a list filter available to everyone.
    - Answer kept: `B`
    - Explanation kept; the filter needs a name plus visibility set to Everyone before saving.

105. Q105
    - Summary checked: asks which feature automates business logic such as approvals, tasks, notifications, and record operations.
    - Answer kept: `E`
    - Explanation kept; the option text is malformed, but it is keyed to the Flow Designer concept.

106. Q106
    - Summary checked: asks how to ensure only first line workers can submit a T-shirt order.
    - Answer kept: `B`
    - Explanation revised: here "first line workers" means non-managers, so the keyed choice is the Catalog Item with the Manager group placed on Not Available. The question is testing catalog visibility control, not a special "first line" product feature.

107. Q107
    - Summary checked: asks which icon is used to change the label on a Favorite.
    - Answer kept: `C`
    - Explanation kept; the Pencil icon is used to edit a favorite's label.

108. Q108
    - Summary checked: asks what a role is in ServiceNow.
    - Answer kept: `A`
    - Explanation kept; roles are stored as records in the sys_user_role table.

109. Q109
    - Summary checked: asks which icon expands or collapses the list of all Applications and Modules.
    - Answer kept: `C`
    - Explanation kept; the Application icon in the navigator controls the all-applications tree.

110. Q110
    - Summary checked: asks how to return to normal admin security levels after working in High Security Settings.
    - Answer kept: `B`
    - Explanation kept; elevated roles are session-based, so logging out and back in clears the elevated session.

111. Q111
    - Summary checked: asks what kind of data Import Sets can use to populate tables in ServiceNow.
    - Answer kept: `B`
    - Explanation kept; XML, CSV, and Excel are valid import sources in this item.

112. Q112
    - Summary checked: asks for a quick way to create a report from a list view.
    - Answer kept: `B`
    - Explanation kept; the funnel filter flow followed by Create Report is the keyed list-to-report path.

113. Q113
    - Summary checked: asks how to change Priority values so they display internal terminology across all Tasks.
    - Answer kept: `F`
    - Explanation kept; the option is keyed to Configure Choices, which changes the shared choice list on the task hierarchy.

114. Q114
    - Summary checked: asks what must be done before using an Application-based trigger in a flow.
    - Answer kept: `C`
    - Explanation kept; the application spoke and required plug-ins must be active first.

115. Q115
    - Summary checked: asks which section of the ServiceNow UI allows a global search.
    - Answer kept: `B`
    - Explanation kept; global search is launched from the Banner frame at the top of the UI.

116. Q116
    - Summary checked: asks which data source types can be imported into ServiceNow.
    - Answer kept: `A, C, D, F`
    - Explanation kept; Import Sets can load from local files, DataHub, JDBC, and LDAP sources. Network Server is not one of the standard source types in this item.

117. Q117
    - Summary checked: asks what IntegrationHub integrations are referred to as.
    - Answer kept: `B`
    - Explanation kept; a Spoke is an IntegrationHub package of reusable actions and logic for a specific third-party service.

118. Q118
    - Summary checked: asks which types of ServiceNow interfaces are included.
    - Answer kept: `A, D, E`
    - Explanation kept; the standard interface layers here are Now Mobile Apps, Service Portals, and Now Platform User Interfaces.

119. Q119
    - Summary checked: asks what to use when moving multiple update sets at one time.
    - Answer kept: `A`
    - Explanation kept; batching groups related update sets so they can be moved together.

## Resume Instructions

When continuing after reboot:

1. Open `CSA/csa_questions.js`.
2. Continue with question 120.
3. Maintain same response format:
   - 문제의 올바름
   - 답변 형식
   - 해설의 올바름
   - 진행 상황: `총 399문제 중 N문제 검증 완료`
4. If modifying explanations, use concise CSA-focused Korean explanations.
5. Avoid including official documentation links in the final response.
