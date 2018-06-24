Feature: Login into JitBit with valid credentials

Scenario Outline: Login into JitBit and add users
	  Given user is on signin page and clicks on signin
	  Then user enters "<loginid>" and "<password>" and clicks login button
	  Then user clicks on adminstration link and user companies and permissions link successfully
	  Then user clicks on add user button and enters "<email>" and "<username>" and "<pwd>" and clicks on create and continue button
	 Then user clicks on adminstration link clicks on Ticket categories and enters "<categoryname>" and adds new category
	 Then user clicks on Tickets and clicks on new ticket and enters "<emailid>" and  "<subject>" and "<problemdetail>" selects priority and clicks on submit
	 Then user clicks on Reports and generates the report
	 Then user again navigates to Administration and deletes user and category
	 Then user clicks on logout link and logsout successfully
  
  Examples:
               | loginid                            | password           | email                                                                 | username | pwd            |   categoryname       | emailid                                                             | subject                       | problemdetail                |
               | 28rajag@gmail.com | Welcome1234 | Patrick.chatee@sqa-consulting.com  | Patrick      | Patrick12 |   Patrick                     | Patrick.chatee@sqa-consulting.com  | Application Error | Application Crash         |
               | 28rajag@gmail.com | Welcome1234 | Richard.Clark@sqa-consulting.com    | Richard    | Richard12 |   Richard                    | Richard.Clark@sqa-consulting.com    | System Error          | Application Removed |
               | 28rajag@gmail.com | Welcome1234 | Deepak.sharma@sqa-consulting.com | Deepak     | Deepak12 |   Deepak                    | Deepak.sharma@sqa-consulting.com  | App Install Request | Application Not Installed        |
               | 28rajag@gmail.com | Welcome1234 | Raj.kumar@sqa-consulting.com            | RajKum    | Rakkum12 |   RajKumar              | Raj.kumar@sqa-consulting.com            | Telephony Issue          | Telephony Failed |
			   | 28rajag@gmail.com | Welcome1234 | Fayaz.mohammed@sqa-consulting.com    | FayazM    | Fayazz12 |   Fayaz                    | Fayaz.mohammed@sqa-consulting.com    | Missing Driver        |  Driver Failed |