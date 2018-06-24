$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Sai/eclipse-workspace/com.JitBitDemo/Features/JitBit.feature");
formatter.feature({
  "line": 1,
  "name": "Login into JitBit with valid credentials",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into JitBit and add users",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on signin page and clicks on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cloginid\u003e\" and \"\u003cpassword\u003e\" and clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on adminstration link and user companies and permissions link successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on add user button and enters \"\u003cemail\u003e\" and \"\u003cusername\u003e\" and \"\u003cpwd\u003e\" and clicks on create and continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on adminstration link clicks on Ticket categories and enters \"\u003ccategoryname\u003e\" and adds new category",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Tickets and clicks on new ticket and enters \"\u003cemailid\u003e\" and  \"\u003csubject\u003e\" and \"\u003cproblemdetail\u003e\" selects priority and clicks on submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Reports and generates the report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user again navigates to Administration and deletes user and category",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on logout link and logsout successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;",
  "rows": [
    {
      "cells": [
        "loginid",
        "password",
        "email",
        "username",
        "pwd",
        "categoryname",
        "emailid",
        "subject",
        "problemdetail"
      ],
      "line": 15,
      "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;1"
    },
    {
      "cells": [
        "28rajag@gmail.com",
        "Welcome1234",
        "Patrick.chatee@sqa-consulting.com",
        "Patrick",
        "Patrick12",
        "Patrick",
        "Patrick.chatee@sqa-consulting.com",
        "Application Error",
        "Application Crash"
      ],
      "line": 16,
      "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;2"
    },
    {
      "cells": [
        "28rajag@gmail.com",
        "Welcome1234",
        "Richard.Clark@sqa-consulting.com",
        "Richard",
        "Richard12",
        "Richard",
        "Richard.Clark@sqa-consulting.com",
        "System Error",
        "Application Removed"
      ],
      "line": 17,
      "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;3"
    },
    {
      "cells": [
        "28rajag@gmail.com",
        "Welcome1234",
        "Deepak.sharma@sqa-consulting.com",
        "Deepak",
        "Deepak12",
        "Deepak",
        "Deepak.sharma@sqa-consulting.com",
        "App Install Request",
        "Application Not Installed"
      ],
      "line": 18,
      "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;4"
    },
    {
      "cells": [
        "28rajag@gmail.com",
        "Welcome1234",
        "Raj.kumar@sqa-consulting.com",
        "RajKum",
        "Rakkum12",
        "RajKumar",
        "Raj.kumar@sqa-consulting.com",
        "Telephony Issue",
        "Telephony Failed"
      ],
      "line": 19,
      "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;5"
    },
    {
      "cells": [
        "28rajag@gmail.com",
        "Welcome1234",
        "Fayaz.mohammed@sqa-consulting.com",
        "FayazM",
        "Fayazz12",
        "Fayaz",
        "Fayaz.mohammed@sqa-consulting.com",
        "Missing Driver",
        "Driver Failed"
      ],
      "line": 20,
      "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login into JitBit and add users",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on signin page and clicks on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"28rajag@gmail.com\" and \"Welcome1234\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on adminstration link and user companies and permissions link successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on add user button and enters \"Patrick.chatee@sqa-consulting.com\" and \"Patrick\" and \"Patrick12\" and clicks on create and continue button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on adminstration link clicks on Ticket categories and enters \"Patrick\" and adds new category",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Tickets and clicks on new ticket and enters \"Patrick.chatee@sqa-consulting.com\" and  \"Application Error\" and \"Application Crash\" selects priority and clicks on submit",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Reports and generates the report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user again navigates to Administration and deletes user and category",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on logout link and logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "JitBitStepDefs.user_is_on_signin_page_and_clicks_on_signin()"
});
formatter.result({
  "duration": 7460100807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28rajag@gmail.com",
      "offset": 13
    },
    {
      "val": "Welcome1234",
      "offset": 37
    }
  ],
  "location": "JitBitStepDefs.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 3601594828,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_and_user_companies_and_permissions_link_successfully()"
});
formatter.result({
  "duration": 5425381084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patrick.chatee@sqa-consulting.com",
      "offset": 43
    },
    {
      "val": "Patrick",
      "offset": 83
    },
    {
      "val": "Patrick12",
      "offset": 97
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_add_user_button_and_enters_and_and_and_clicks_on_create_and_continue_button(String,String,String)"
});
formatter.result({
  "duration": 18157242554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patrick",
      "offset": 74
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_clicks_on_Ticket_categories_and_enters_and_adds_new_category(String)"
});
formatter.result({
  "duration": 15299980328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patrick.chatee@sqa-consulting.com",
      "offset": 60
    },
    {
      "val": "Application Error",
      "offset": 101
    },
    {
      "val": "Application Crash",
      "offset": 125
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_Tickets_and_clicks_on_new_ticket_and_enters_and_and_selects_priority_and_clicks_on_submit(String,String,String)"
});
formatter.result({
  "duration": 22253441180,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_Reports_and_generates_the_report()"
});
formatter.result({
  "duration": 10457200228,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_again_navigates_to_Administration_and_deletes_user_and_category()"
});
formatter.result({
  "duration": 5395137207,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_logout_link_and_logsout_successfully()"
});
formatter.result({
  "duration": 4253222561,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into JitBit and add users",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on signin page and clicks on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"28rajag@gmail.com\" and \"Welcome1234\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on adminstration link and user companies and permissions link successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on add user button and enters \"Richard.Clark@sqa-consulting.com\" and \"Richard\" and \"Richard12\" and clicks on create and continue button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on adminstration link clicks on Ticket categories and enters \"Richard\" and adds new category",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Tickets and clicks on new ticket and enters \"Richard.Clark@sqa-consulting.com\" and  \"System Error\" and \"Application Removed\" selects priority and clicks on submit",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Reports and generates the report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user again navigates to Administration and deletes user and category",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on logout link and logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "JitBitStepDefs.user_is_on_signin_page_and_clicks_on_signin()"
});
formatter.result({
  "duration": 6688006926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28rajag@gmail.com",
      "offset": 13
    },
    {
      "val": "Welcome1234",
      "offset": 37
    }
  ],
  "location": "JitBitStepDefs.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 3736017507,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_and_user_companies_and_permissions_link_successfully()"
});
formatter.result({
  "duration": 5414634367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Richard.Clark@sqa-consulting.com",
      "offset": 43
    },
    {
      "val": "Richard",
      "offset": 82
    },
    {
      "val": "Richard12",
      "offset": 96
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_add_user_button_and_enters_and_and_and_clicks_on_create_and_continue_button(String,String,String)"
});
formatter.result({
  "duration": 18680524400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Richard",
      "offset": 74
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_clicks_on_Ticket_categories_and_enters_and_adds_new_category(String)"
});
formatter.result({
  "duration": 15266122245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Richard.Clark@sqa-consulting.com",
      "offset": 60
    },
    {
      "val": "System Error",
      "offset": 100
    },
    {
      "val": "Application Removed",
      "offset": 119
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_Tickets_and_clicks_on_new_ticket_and_enters_and_and_selects_priority_and_clicks_on_submit(String,String,String)"
});
formatter.result({
  "duration": 21327383660,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_Reports_and_generates_the_report()"
});
formatter.result({
  "duration": 10709594754,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_again_navigates_to_Administration_and_deletes_user_and_category()"
});
formatter.result({
  "duration": 5511999342,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_logout_link_and_logsout_successfully()"
});
formatter.result({
  "duration": 4220961647,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into JitBit and add users",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on signin page and clicks on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"28rajag@gmail.com\" and \"Welcome1234\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on adminstration link and user companies and permissions link successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on add user button and enters \"Deepak.sharma@sqa-consulting.com\" and \"Deepak\" and \"Deepak12\" and clicks on create and continue button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on adminstration link clicks on Ticket categories and enters \"Deepak\" and adds new category",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Tickets and clicks on new ticket and enters \"Deepak.sharma@sqa-consulting.com\" and  \"App Install Request\" and \"Application Not Installed\" selects priority and clicks on submit",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Reports and generates the report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user again navigates to Administration and deletes user and category",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on logout link and logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "JitBitStepDefs.user_is_on_signin_page_and_clicks_on_signin()"
});
formatter.result({
  "duration": 5917933483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28rajag@gmail.com",
      "offset": 13
    },
    {
      "val": "Welcome1234",
      "offset": 37
    }
  ],
  "location": "JitBitStepDefs.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 3533124632,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_and_user_companies_and_permissions_link_successfully()"
});
formatter.result({
  "duration": 5608862133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepak.sharma@sqa-consulting.com",
      "offset": 43
    },
    {
      "val": "Deepak",
      "offset": 82
    },
    {
      "val": "Deepak12",
      "offset": 95
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_add_user_button_and_enters_and_and_and_clicks_on_create_and_continue_button(String,String,String)"
});
formatter.result({
  "duration": 12978142202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepak",
      "offset": 74
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_clicks_on_Ticket_categories_and_enters_and_adds_new_category(String)"
});
formatter.result({
  "duration": 15079808959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepak.sharma@sqa-consulting.com",
      "offset": 60
    },
    {
      "val": "App Install Request",
      "offset": 100
    },
    {
      "val": "Application Not Installed",
      "offset": 126
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_Tickets_and_clicks_on_new_ticket_and_enters_and_and_selects_priority_and_clicks_on_submit(String,String,String)"
});
formatter.result({
  "duration": 21538430402,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_Reports_and_generates_the_report()"
});
formatter.result({
  "duration": 10655404679,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_again_navigates_to_Administration_and_deletes_user_and_category()"
});
formatter.result({
  "duration": 5599095240,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_logout_link_and_logsout_successfully()"
});
formatter.result({
  "duration": 6801805367,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into JitBit and add users",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on signin page and clicks on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"28rajag@gmail.com\" and \"Welcome1234\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on adminstration link and user companies and permissions link successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on add user button and enters \"Raj.kumar@sqa-consulting.com\" and \"RajKum\" and \"Rakkum12\" and clicks on create and continue button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on adminstration link clicks on Ticket categories and enters \"RajKumar\" and adds new category",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Tickets and clicks on new ticket and enters \"Raj.kumar@sqa-consulting.com\" and  \"Telephony Issue\" and \"Telephony Failed\" selects priority and clicks on submit",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Reports and generates the report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user again navigates to Administration and deletes user and category",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on logout link and logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "JitBitStepDefs.user_is_on_signin_page_and_clicks_on_signin()"
});
formatter.result({
  "duration": 6522875945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28rajag@gmail.com",
      "offset": 13
    },
    {
      "val": "Welcome1234",
      "offset": 37
    }
  ],
  "location": "JitBitStepDefs.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 6177399727,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_and_user_companies_and_permissions_link_successfully()"
});
formatter.result({
  "duration": 5336715958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raj.kumar@sqa-consulting.com",
      "offset": 43
    },
    {
      "val": "RajKum",
      "offset": 78
    },
    {
      "val": "Rakkum12",
      "offset": 91
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_add_user_button_and_enters_and_and_and_clicks_on_create_and_continue_button(String,String,String)"
});
formatter.result({
  "duration": 11683085155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RajKumar",
      "offset": 74
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_clicks_on_Ticket_categories_and_enters_and_adds_new_category(String)"
});
formatter.result({
  "duration": 15069114727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raj.kumar@sqa-consulting.com",
      "offset": 60
    },
    {
      "val": "Telephony Issue",
      "offset": 96
    },
    {
      "val": "Telephony Failed",
      "offset": 118
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_Tickets_and_clicks_on_new_ticket_and_enters_and_and_selects_priority_and_clicks_on_submit(String,String,String)"
});
formatter.result({
  "duration": 21830849667,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_Reports_and_generates_the_report()"
});
formatter.result({
  "duration": 10490818169,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_again_navigates_to_Administration_and_deletes_user_and_category()"
});
formatter.result({
  "duration": 5352574368,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_logout_link_and_logsout_successfully()"
});
formatter.result({
  "duration": 4302908848,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into JitBit and add users",
  "description": "",
  "id": "login-into-jitbit-with-valid-credentials;login-into-jitbit-and-add-users;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on signin page and clicks on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"28rajag@gmail.com\" and \"Welcome1234\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on adminstration link and user companies and permissions link successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on add user button and enters \"Fayaz.mohammed@sqa-consulting.com\" and \"FayazM\" and \"Fayazz12\" and clicks on create and continue button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on adminstration link clicks on Ticket categories and enters \"Fayaz\" and adds new category",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Tickets and clicks on new ticket and enters \"Fayaz.mohammed@sqa-consulting.com\" and  \"Missing Driver\" and \"Driver Failed\" selects priority and clicks on submit",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Reports and generates the report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user again navigates to Administration and deletes user and category",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on logout link and logsout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "JitBitStepDefs.user_is_on_signin_page_and_clicks_on_signin()"
});
formatter.result({
  "duration": 6403064147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28rajag@gmail.com",
      "offset": 13
    },
    {
      "val": "Welcome1234",
      "offset": 37
    }
  ],
  "location": "JitBitStepDefs.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 3604114049,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_and_user_companies_and_permissions_link_successfully()"
});
formatter.result({
  "duration": 5300167231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fayaz.mohammed@sqa-consulting.com",
      "offset": 43
    },
    {
      "val": "FayazM",
      "offset": 83
    },
    {
      "val": "Fayazz12",
      "offset": 96
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_add_user_button_and_enters_and_and_and_clicks_on_create_and_continue_button(String,String,String)"
});
formatter.result({
  "duration": 11473122072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fayaz",
      "offset": 74
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_adminstration_link_clicks_on_Ticket_categories_and_enters_and_adds_new_category(String)"
});
formatter.result({
  "duration": 15041262828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fayaz.mohammed@sqa-consulting.com",
      "offset": 60
    },
    {
      "val": "Missing Driver",
      "offset": 101
    },
    {
      "val": "Driver Failed",
      "offset": 122
    }
  ],
  "location": "JitBitStepDefs.user_clicks_on_Tickets_and_clicks_on_new_ticket_and_enters_and_and_selects_priority_and_clicks_on_submit(String,String,String)"
});
formatter.result({
  "duration": 21397946789,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_Reports_and_generates_the_report()"
});
formatter.result({
  "duration": 11247822017,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_again_navigates_to_Administration_and_deletes_user_and_category()"
});
formatter.result({
  "duration": 5538370367,
  "status": "passed"
});
formatter.match({
  "location": "JitBitStepDefs.user_clicks_on_logout_link_and_logsout_successfully()"
});
formatter.result({
  "duration": 4421845413,
  "status": "passed"
});
});