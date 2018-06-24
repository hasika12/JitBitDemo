package stepdefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class JitBitStepDefs {
	
	WebDriver driver;
	
	
	@Given("^user is on signin page and clicks on signin$")
	public void user_is_on_signin_page_and_clicks_on_signin() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Sai\\eclipse-workspace\\com.JitBitDemo\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get("https://raja.jitbit.com");
		 driver.findElement(By.xpath("//*[text()='sign in']")).click();
		
	    
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and clicks login button$")
	public void user_enters_and_and_clicks_login_button(String loginid, String password) throws Throwable {
		
		 driver.findElement(By.xpath("//*[@name='Username']")).sendKeys(loginid);
		 Thread.sleep(2000);
		    driver.findElement(By.xpath("//*[@name='Password']")).sendKeys(password);
		    Thread.sleep(2000);
		    driver.findElement(By.xpath("//*[@value='Login']")).click();
		    Thread.sleep(2000);
	    
	}

	@Then("^user clicks on adminstration link and user companies and permissions link successfully$")
	public void user_clicks_on_adminstration_link_and_user_companies_and_permissions_link_successfully() throws Throwable {
		   driver.findElement(By.xpath("//*[text()=' Administration']")).click();
		   Thread.sleep(2000);
		    driver.findElement(By.xpath("//*[contains(text(),'Users, companies')]")).click();
		    Thread.sleep(2000);
	}

	@Then("^user clicks on add user button and enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and clicks on create and continue button$")
	public void user_clicks_on_add_user_button_and_enters_and_and_and_clicks_on_create_and_continue_button(String email, String username, String pwd) throws Throwable {
		driver.findElement(By.xpath("//*[contains(text(),'Add user')]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@name='Email']")).sendKeys(email);
		driver.findElement(By.xpath("//*[@name='Username']")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id='Password']")).sendKeys(pwd);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[text()=' Create and continue']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@value='Save']")).click();
		Thread.sleep(2000);
	}

	@Then("^user clicks on adminstration link clicks on Ticket categories and enters \"([^\"]*)\" and adds new category$")
	public void user_clicks_on_adminstration_link_clicks_on_Ticket_categories_and_enters_and_adds_new_category(String categoryname) throws Throwable {
		driver.findElement(By.xpath("//*[text()=' Administration']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[text()='Ticket categories']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[text()='Add new category']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@name='categoryName']")).sendKeys(categoryname);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id='sectionSelect']/option[text()='Technical']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@name='create']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@value='Save']")).click();
		
		
	}


	
	@Then("^user clicks on Tickets and clicks on new ticket and enters \"([^\"]*)\" and  \"([^\"]*)\" and \"([^\"]*)\" selects priority and clicks on submit$")
	public void user_clicks_on_Tickets_and_clicks_on_new_ticket_and_enters_and_and_selects_priority_and_clicks_on_submit(String emailid, String subject, String problemdetail) throws Throwable {
		
		driver.findElement(By.xpath("//*[text()=' Tickets']")).click();
		Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[text()='+ New ticket']")).click();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("(//*[@class='onoffswitch-label'])[1]")).click();
	    Thread.sleep(2000);
	    
	    driver.findElement(By.xpath("//*[@name='OnBehalfUserId_txt']")).sendKeys(emailid);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@name='Subject']")).sendKeys(subject);
	    driver.switchTo().frame(0);
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@contenteditable='true']")).sendKeys(problemdetail );
	    
	
	    
	    driver.switchTo().defaultContent();
	    Thread.sleep(5000);
	    

	    
	    driver.findElement(By.xpath("//*[starts-with(@value, \"348\")]")).click();
	 
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@name='PriorityID']/option[text()='High']")).click();
	    Thread.sleep(2000);
	    
	    driver.findElement(By.xpath("//*[@value='Submit']")).click();
	    Thread.sleep(2000);
	}


	@Then("^user clicks on Reports and generates the report$")
	public void user_clicks_on_Reports_and_generates_the_report() throws Throwable {
		
		 driver.findElement(By.xpath("//*[text()=' Reports']")).click();
		 
		 Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("//*[text()='Summary']")).click();
		    
		    Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("(//*[@class='ui-icon ui-icon-triangle-1-s'])[1]")).click();
		    
		 Thread.sleep(3000);
		    
		    driver.findElement(By.xpath("//*[@class='ui-icon ui-icon-check']")).click();
		    
		    Thread.sleep(3000);
		    
		    driver.findElement(By.xpath("//*[@name='periodType']/option[text()='Today']")).click();
		    
		    Thread.sleep(3000);
		    
		    driver.findElement(By.xpath("//*[@value='Build']")).click();
		    
		    Thread.sleep(5000);
	    
	}

	@Then("^user again navigates to Administration and deletes user and category$")
	public void user_again_navigates_to_Administration_and_deletes_user_and_category() throws Throwable {
		 driver.findElement(By.xpath("//*[text()=' Administration']")).click();
		 
		 Thread.sleep(2000);
		    driver.findElement(By.xpath("//*[contains(text(),'Users, companies')]")).click();
		    Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("(//*[@type='checkbox'])[4]")).click();
		    Thread.sleep(2000);
		    
		    Actions action = new Actions(driver);
		    action.moveToElement(driver.findElement(By.xpath("//*[@title='Delete selected users']"))).build().perform();
		    driver.findElement(By.xpath("//*[@title='Delete selected users']")).click();
		    
		    Thread.sleep(2000);
		    driver.switchTo().alert().accept();
		    
		    Thread.sleep(2000);
		    
		    driver.switchTo().alert().accept(); 
	}

	@Then("^user clicks on logout link and logsout successfully$")
	public void user_clicks_on_logout_link_and_logsout_successfully() throws Throwable {
	    
		driver.findElement(By.xpath("//*[text()='log out']")).click();
		
		 Thread.sleep(2000);
		driver.quit();
	}

}
