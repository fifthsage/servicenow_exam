# CSA Question Review Progress

Date: 2026-06-22
Workspace: `C:\Users\fifth\Projects\servicenow_exam`
Target file: `CSA/csa_questions.js`

## User Instructions

- Use ServiceNow official documentation Í∏∞Ï??ºÎ°ú `csa_questions.js` Î¨∏Ï†úÎ•??òÎÇò??Í≤ÄÏ¶ùÌïú??
- ?¨Ïö©?êÍ? **"?§Ïùå"**?¥ÎùºÍ≥??òÎ©¥ ?§Ïùå Î≤àÌò∏ Î¨∏Ï†úÎ•?ÏßÑÌñâ?úÎã§.
- Í∞?Î¨∏Ï†úÎßàÎã§ ?ïÏù∏??Í≤?
  1. Î¨∏Ï†úÍ∞Ä Í≥µÏãù Î¨∏ÏÑú Í∏∞Ï??ºÎ°ú ?¨Î∞îÎ•∏Ï?
  2. ?µÎ? ?ïÏãù???¨Î∞îÎ•∏Ï?: ?ºÎîî??Ï≤¥ÌÅ¨Î∞ïÏä§, ?ïÎãµ ??  3. ?¥ÏÑ§???¨Î∞îÎ•∏Ï?
- Î¨∏ÏÑú ÎßÅÌÅ¨???µÎ????¨Ìï®?òÏ? ?äÎäî??
- ?¥ÏÑ§??Î∂Ä?ïÌôï?òÍ±∞???úÌóò Í∏∞Ï???ÎßûÍ≤å Í∞úÏÑ†?????àÏúºÎ©?ÏßÅÏ†ë ?òÏ†ï?¥ÎèÑ ?úÎã§.
- ?ûÏúºÎ°??µÎ??êÎäî **Ï¥?Î¨∏Ï†ú Í∞úÏàò?Ä Í≤ÄÏ¶??ÑÎ£å Î¨∏Ï†ú Í∞úÏàò**Î•??®Íªò ?åÎ†§Ï§Ä??

## Current Progress

- Total questions: 398
- Reviewed through: Question 158
- Next question to review: Question 159

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

120. Q120
    - Summary checked: asks which import utility is used when import set field names match target table field names.
    - Answer kept: `B`
    - Explanation kept; Automatic Mapping auto-links fields when source and target names match.

121. Q121
    - Summary checked: asks the standard steps for importing spreadsheet data into ServiceNow.
    - Answer kept: `D`
    - Explanation kept; the flow is Load Data, then Transform Map, then Run Transform.

122. Q122
    - Summary checked: asks which tool is used to populate commonly used fields in a form.
    - Answer kept: `A`
    - Explanation kept; templates prefill common field values to save time and keep entries consistent.

123. Q123
    - Summary checked: asks the purpose of the Filter navigator in the Application Navigator.
    - Answer changed: `C` -> `B`
    - Explanation revised; the Filter navigator is used to quickly navigate to applications and modules by filtering menu text.

124. Q124
    - Summary checked: asks how to add additional fields to a form.
    - Answer kept: `B, D`
    - Explanation kept; Form Layout and the form header context menu are the standard ways to manage fields on a form.

125. Q125
    - Summary checked: asks what controls the publishing and retiring process for knowledge articles.
    - Answer kept: `C`
    - Explanation kept; knowledge article publishing and retiring are controlled by workflows, designed in Workflow Designer or Flow Designer.

126. Q126
    - Summary checked: asks how to create a set of filter conditions after clicking the Funnel icon.
    - Answer kept: `A`
    - Explanation kept; the standard flow is to define the first condition, add AND, define the second condition, then click Run.

127. Q127
    - Summary checked: asks how data is organized in a table.
    - Answer kept: `B`
    - Explanation kept; a column is one field and a record is one row.

128. Q128
    - Summary checked: asks which plugin allows installing multiple applications, customizations, or plugins at once.
    - Answer kept: `B`
    - Explanation kept; CICD SpokeBatch Install is the keyed batch-install utility in this item.

129. Q129
    - Summary checked: asks which changes are captured in an Update Set.
    - Answer kept: `A`
    - Explanation kept; Update Sets capture configuration changes such as tables, forms, schedules, and client scripts, not data records.
    - Note: option B is partially plausible because views and fields can also be captured, but the keyed answer remains A and the item wording is not clean.

130. Q130
    - Summary checked: asks how to change the Incident number prefix from INC to the company standard IN.
    - Answer kept: `A`
    - Explanation kept; Number Maintenance is where table number prefixes are managed.

131. Q131
    - Summary checked: asks which tool defines relationships between fields in an import set table and a target table.
    - Answer kept: `D`
    - Explanation kept; Transform Map defines the source-to-target field relationships and transformation rules.

132. Q132
    - Summary checked: asks why a manager cannot see tasks on the Service Desk > My Groups Work list.
    - Answer kept: `D`
    - Explanation kept; the list shows work for groups the user is actually a member of, so missing Network and Hardware membership explains the empty list.

133. Q133
    - Summary checked: asks which items are not included in an Update Set by default.
    - Answer kept: `A, B, E, F`
    - Explanation kept; homes, data, schedules, and database changes are excluded by default, while published workflows and business rules are included.

134. Q134
    - Summary checked: asks how administrators can utilize the same content for different notification channels.
    - Answer kept: `C`
    - Explanation kept; Common notification content lets one message source be reused across multiple channels.

135. Q135
    - Summary checked: asks what happens to Work Notes and Additional Comments when an incident form is saved.
    - Answer kept: `D`
    - Explanation kept; journal field text is cleared from the input area and written to the activity log, stored in sys_journal_field.

136. Q136
    - Summary checked: asks which best practices to follow when testing a catalog item with manager approval flow.
    - Answer kept: `A, C, D`
    - Explanation kept; verify the latest flow is active, impersonate the requester, and ensure the requester has a manager specified.

137. Q137
    - Summary checked: asks what feature tracks how long a task has been open so it can be completed within the allotted time.
    - Answer kept: `B`
    - Explanation kept; Service Level Agreements track open time and control timing with start, pause, and stop conditions.

138. Q138
    - Summary checked: asks for the table relationship where related records are visible from both tables in a related list.
    - Answer kept: `B`
    - Explanation kept; this is a Many to Many relationship with a junction table connecting both sides.

139. Q139
    - Summary checked: asks what ServiceNow tables can be destinations for imported data when using Transform Maps.
    - Answer changed: `B` -> `D`
    - Explanation revised; Transform Map destinations are not limited to a short list of tables, and the standard concept is that any appropriate ServiceNow table can be a destination. Option B is truncated and misleading.

140. Q140
    - Summary checked: asks which utility to use to orchestrate business processes across services with little technical user knowledge.
    - Answer changed: `C` -> `B`
    - Explanation revised; the intended utility is Flow Designer, not Flow Editor.

141. Q141
    - Summary checked: asks how to make a service catalog item visible only to managers inside the HR Department.
    - Answer kept: `B`
    - Explanation kept; User Criteria is the standard way to control catalog item visibility by user or group conditions.

142. Q142
    - Summary checked: asks which option is NOT an example of a UI Action.
    - Answer changed: `C` -> `A`
    - Explanation revised; UI Actions are clickable UI elements like buttons, links, and context menu items, while Search is a global search feature rather than a UI Action.

143. Q143
    - Summary checked: asks what function you use to add buttons, links, and context menu items on forms and lists.
    - Answer kept: `C`
    - Explanation kept; UI Actions are used to place clickable actions on forms and lists.

144. Q144
    - Summary checked: asks where in Flow Designer users can access information about actions added to the flow.
    - Answer kept: `C`
    - Explanation kept; the Help Panel provides action details, inputs, outputs, and examples.

145. Q145
    - Summary checked: asks which plugin is needed to translate catalog item content into multiple languages.
    - Answer kept: `A`
    - Explanation kept; Localization Framework is the plugin used for multilingual catalog and portal content.

146. Q146
    - Summary checked: asks what the ACL object name is for a rule specific to the Incident table and the Major Incident field.
    - Answer kept: `E`
    - Explanation kept; ACL object names use the table.field format, so incident.major_incident is correct.

147. Q147
    - Summary checked: asks what resource describes the standard shared service definitions and CMDB framework across ServiceNow products.
    - Answer kept: `A`
    - Explanation kept; this is the Common Services Data Model (CSDM).

148. Q148
    - Summary checked: asks what is specified in an Access Control rule.
    - Answer kept: `C`
    - Explanation kept; ACL rules specify the secured object, the operation, and the permissions required.

149. Q149
    - Summary checked: asks which interface an IT employee would use to browse internal IT documentation like troubleshooting scripts and FAQs.
    - Answer kept: `A`
    - Explanation kept; Knowledge is the standard interface for browsing internal IT documentation and FAQs.

150. Q150
    - Summary checked: asks which module is used to create a new automation of business logic such as approvals, tasks, and notifications.
    - Answer kept: `A`
    - Explanation kept; the module path is Process Automation > Flow Designer.

151. Q151
    - Summary checked: asks which field contains a record's 32-character unique identifier.
    - Answer kept: `D`
    - Explanation kept; sys_id is the 32-character unique identifier for every record.

152. Q152
    - Summary checked: asks what is used to categorize, flag, and locate records.
    - Answer kept: `C`
    - Explanation kept; Tags are used to classify and later locate records.

153. Q153
    - Summary checked: asks what a sys_id is.
    - Answer kept: `A`
    - Explanation kept; sys_id is the unique 32-character identifier assigned to every record.

154. Q154
    - Summary checked: asks which capability assists users via a messaging interface to obtain information, make decisions, and perform common tasks.
    - Answer kept: `C`
    - Explanation kept; Virtual Agent is the conversational automation capability for messaging-based assistance.

155. Q155
    - Summary checked: asks what new records, new groups, and modified configuration items have in common.
    - Answer kept: `A`
    - Explanation kept; this item is keyed as included in an Update Set, even though that conflicts with the usual rule that data records are not captured.
    - Note: the question wording is inconsistent with standard Update Set guidance, so treat the keyed answer as a test-specific exception.

156. Q156
    - Summary checked: asks what any component that needs to be managed to deliver services is called.
    - Answer kept: `C`
    - Explanation kept; this is the definition of a Configuration Item (CI).

157. Q157
    - Summary checked: asks for the components that make up a filter condition.
    - Answer kept: `A, C, E`
    - Explanation kept; a filter condition uses Field, Operator, and Value.

158. Q158
    - Summary checked: asks how to reference data from a record when designing a flow.
    - Answer kept: `D`
    - Explanation kept; Flow Designer uses Data Pills, which are dragged from the data panel into the flow.

## Deduplicated Questions

- Q186 was removed because it duplicated Q178: both asked the difference between UI Policy and Data Policy.

159. Q159
    - Summary checked: asks which module would be used to create a new notification for users affected by network outages.
    - Answer kept: `A`
    - Explanation kept; Notifications are managed in System Notification > Email > Notifications.
160. Q160
    - Summary checked: asks what the timing options are for a Business Rule When setting.
    - Answer kept: `A`
    - Explanation kept; the standard timing options are Before, After, Async, and Display.
161. Q161
    - Summary checked: asks what you activate when you want to add applications or functionality within your development instance.
    - Answer kept: `D`
    - Explanation kept; plugins add optional ServiceNow applications and features.
162. Q162
    - Summary checked: asks what no-code approach controls the mandatory or read-only state of a form field.
    - Answer kept: `E`
    - Explanation kept; UI Policy controls field mandatory and read-only state without scripting.
163. Q163
    - Summary checked: asks what the purpose of a Data Policy is.
    - Answer kept: `C`
    - Explanation kept; Data Policies enforce data consistency and integrity across all entry paths.
164. Q164
    - Summary checked: asks what would not appear in the Application Navigator when "service" is typed into the filter field.
    - Answer kept: `D`
    - Explanation kept; the filter only shows application or module names containing the typed text.
165. Q165
    - Summary checked: asks what database objects Access Control rules may provide access security for.
    - Answer kept: `D`
    - Explanation kept; ACLs control table, row, and column security, and the item remains keyed to the specific CMDB CI example.
166. Q166
    - Summary checked: asks for a key difference between Reporting and Performance Analytics.
    - Answer kept: `A`
    - Explanation kept; Performance Analytics uses time-based snapshots and trends, while Reporting shows current data at run time.
167. Q167
    - Summary checked: asks where to add a field to a form.
    - Answer kept: `B, C`
    - Explanation kept; Form Layout and Form Designer are the two standard ways to add fields to a form.
168. Q168
    - Summary checked: asks how to fix incorrect create date and time display on an Incident list for a new Service Desk employee.
    - Answer kept: `E`
    - Explanation kept; the item currently keys the computer time zone, though the more standard ServiceNow fix is the user gear time zone setting.
169. Q169
    - Summary checked: asks for two ways to generate an Event.
    - Answer kept: `A, B`
    - Explanation kept; Business Rules and Workflows are the two standard event generation methods.
170. Q170
    - Summary checked: asks the best way to return to your own account after impersonating a user for testing.
    - Answer kept: `C`
    - Explanation kept; End Impersonation returns you to your own session.
171. Q171
    - Summary checked: asks which sections on the Reports page let you see reports visible to different audiences.
    - Answer changed: `A, E, F` -> `A, C, D, F`
    - Explanation revised; the audience sections are My reports, Group, Team, and Global. Dashboards is not one of the audience sections.
172. Q172
    - Summary checked: asks which core base table provides standard fields to tables that extend it, including Incident and Problem.
    - Answer kept: `A`
    - Explanation kept; `task` is the base table that supplies common task fields to its extensions.
173. Q173
    - Summary checked: asks how local flow variables appear in the Flow Designer Data panel.
    - Answer kept: D
    - Explanation kept; local flow variables are accessed as data pills.
174. Q174
    - Summary checked: asks what an Event means in ServiceNow.
    - Answer kept: B
    - Explanation kept; an Event is a signal that something has occurred in ServiceNow processes.
175. Q175
    - Summary checked: asks which primary application is used to load data into ServiceNow.
    - Answer kept: C
    - Explanation kept; System Import Sets is the standard app for loading external data into ServiceNow.
176. Q176
    - Summary checked: asks which role besides admin allows a user to add or remove fields from a list.
    - Answer kept: A
    - Explanation kept; personalize.control is the role tied to list field personalization.
177. Q177
    - Summary checked: asks which three security modules are often used by the System Administrator.
    - Answer changed: A, E -> A, C, E
    - Explanation kept; the security modules listed are System Properties > Security, System Security > Security, and System Security > Access Control (ACL).
178. Q178
    - Summary checked: asks the difference between a UI Policy and a Data Policy.
    - Answer kept: D
    - Explanation kept; UI Policies run only on the form UI, while Data Policies enforce rules across form, import set, and web service inputs.
179. Q179
    - Summary checked: asks what is used frequently to move customizations from one instance to another.
    - Answer kept: A
    - Explanation kept; Update Sets are the standard way to move customizations between instances.
180. Q180
    - Summary checked: asks how a group is defined in ServiceNow.
    - Answer kept: B
    - Explanation kept; a group is stored as a record in sys_user_group.
181. Q181
    - Summary checked: asks the automatically assigned table name for a global custom table named abc.
    - Answer kept: C
    - Explanation kept; global custom tables get the u_ prefix.
182. Q182
    - Summary checked: asks which mechanism protects applications by restricting access to available files and data.
    - Answer kept: D
    - Explanation kept; Application Scope isolates app resources and controls cross-app access.
183. Q183
    - Summary checked: asks what to do to see which modules are visible to a user who cannot see modules in the application navigator.
    - Answer kept: D
    - Explanation kept; impersonating the user reproduces their exact visibility and role context.
184. Q184
    - Summary checked: asks which option is not a Visual Task Board type.
    - Answer kept: A
    - Explanation kept; Feature is not a standard VTB type.
185. Q185
    - Summary checked: asks which framework ensures application data maps correctly to CMDB tables.
    - Answer kept: A
    - Explanation kept; CSDM is the framework for aligning service data with CMDB structure.
187. Q187
    - Summary checked: asks which table stores group records.
    - Answer kept: B
    - Explanation kept; group records are stored in sys_user_group.
188. Q188
    - Summary checked: asks what a Notification is in ServiceNow.
    - Answer kept: B
    - Explanation kept; notifications alert users when relevant events occur.
189. Q189
    - Summary checked: asks for examples of core tables in the ServiceNow platform.
    - Answer kept: C
    - Explanation kept; user, task, and incident are standard core tables.
190. Q190
    - Summary checked: asks which data consistency settings can be achieved using a UI Policy.
    - Answer kept: B, D, E
    - Explanation kept; UI Policies can hide, make read-only, and make fields mandatory.
191. Q191
    - Summary checked: asks the most efficient way to move large amounts of data between instances.
    - Answer kept: B
    - Explanation kept; Export to XML is used for moving record data between instances.
192. Q192
    - Summary checked: asks which module customizes the instance banner image, text, and colors.
    - Answer changed: D -> C
    - Explanation revised; Basic Configuration UI16 is the general UI16 branding module, while Service Portal branding is portal-specific.
193. Q193
    - Summary checked: asks which feature limits who can contribute or read knowledge within a knowledge base.
    - Answer kept: C
    - Explanation kept; User Criteria controls knowledge base access.
194. Q194
    - Summary checked: asks how to view the list of requests after a Service Catalog order is placed.
    - Answer kept: A
    - Explanation kept; Open Records > Items is the path used to review requested items after ordering.
195. Q195
    - Summary checked: asks which icon on a form header opens Template features.
    - Answer kept: B
    - Explanation kept; the More options menu exposes template features on the form header.
196. Q196
    - Summary checked: asks what component causes a flow to run after a record is created or updated.
    - Answer kept: B
    - Explanation kept; record-based triggers start flows from record create or update events.
197. Q197
    - Summary checked: asks the primary objective of a Display Business Rule.
    - Answer kept: B
    - Explanation kept; Display Business Rules use g_scratchpad to pass data to the client.
198. Q198
    - Summary checked: asks which module you use to access reports available to you.
    - Answer kept: A
    - Explanation kept; Reports > View / Run is the central report access module.
199. Q199
    - Summary checked: asks how to monitor updates occurring to records assigned to a task worker.
    - Answer kept: D
    - Explanation kept; Activity Stream shows live updates for records in My Work.
200. Q200
    - Summary checked: asks the name of the runtime value generated when a flow runs an action.
    - Answer kept: D
    - Explanation kept; runtime values in Flow Designer are exposed as data pills.
## Resume Instructions

When continuing after reboot:

1. Open `CSA/csa_questions.js`.
2. Continue with question 200.
3. Maintain same response format:
   - Î¨∏Ï†ú???¨Î∞îÎ¶?   - ?µÎ? ?ïÏãù
   - ?¥ÏÑ§???¨Î∞îÎ¶?   - ÏßÑÌñâ ?ÅÌô©: `Ï¥?398Î¨∏Ï†ú Ï§?NÎ¨∏Ï†ú Í≤ÄÏ¶??ÑÎ£å`
4. If modifying explanations, use concise CSA-focused Korean explanations.
5. Avoid including official documentation links in the final response.

