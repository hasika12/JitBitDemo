package runner;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class sample {
	
	static WebDriver driver;

	public static void main(String[] args) throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Sai\\eclipse-workspace\\com.JitBitDemo\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get("https://raja.jitbit.com");
		 driver.findElement(By.xpath("//*[text()='sign in']")).click();
		 Thread.sleep(2000);
		 
		 driver.findElement(By.xpath("//*[@name='Username']")).sendKeys("28rajag@gmail.com");
		    driver.findElement(By.xpath("//*[@name='Password']")).sendKeys("Welcome1234");
		    driver.findElement(By.xpath("//*[@value='Login']")).click();
		    Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("//*[text()=' Administration']")).click();
		    driver.findElement(By.xpath("//*[contains(text(),'Users, companies')]")).click();
		    Thread.sleep(2000);
		    
		    
			driver.findElement(By.xpath("//*[contains(text(),'Add user')]")).click();
			driver.findElement(By.xpath("//*[@name='Email']")).sendKeys("Patrick.chatee@sqa-consulting.com");
			driver.findElement(By.xpath("//*[@name='Username']")).sendKeys("Patrick");
			driver.findElement(By.xpath("//*[@id='Password']")).sendKeys("Patrick12");
			driver.findElement(By.xpath("//*[text()=' Create and continue']")).click();
			driver.findElement(By.xpath("//*[@name='btnSave']")).click();
			Thread.sleep(2000);
			
			driver.findElement(By.xpath("//*[text()=' Administration']")).click();
			driver.findElement(By.xpath("//*[text()='Ticket categories']")).click();
			driver.findElement(By.xpath("//*[text()='Add new category']")).click();
			driver.findElement(By.xpath("//*[@name='categoryName']")).sendKeys("Patrick");
			driver.findElement(By.xpath("//*[@id='sectionSelect']/option[text()='Technical']")).click();
			Thread.sleep(5000);
			
			driver.findElement(By.xpath("//*[@name='create']")).click();
			driver.findElement(By.xpath("//*[@value='Save']")).click();
			Thread.sleep(2000);
			
			driver.findElement(By.xpath("//*[text()=' Tickets']")).click();
		    driver.findElement(By.xpath("//*[text()='+ New ticket']")).click();
		    driver.findElement(By.xpath("(//*[@class='onoffswitch-label'])[1]")).click();
		    Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("//*[@name='OnBehalfUserId_txt']")).sendKeys("Patrick.chatee@sqa-consulting.com");
		    Thread.sleep(2000);
		    driver.findElement(By.xpath("//*[@name='Subject']")).sendKeys("new Sub");
		    driver.switchTo().frame(0);
		    Thread.sleep(2000);
		    driver.findElement(By.xpath("//*[@contenteditable='true']")).sendKeys("abcd");
		    
		
		    
		    driver.switchTo().defaultContent();
		    Thread.sleep(5000);
		    
		   
		    
		   driver.findElement(By.xpath("//*[@name='CategoryID']/optgroup[@label='Technical']/option[text()='Patrick']")).click();
		    
		    driver.findElement(By.xpath("//*[@name='PriorityID']/option[text()='High']")).click();
		    
		    driver.findElement(By.xpath("//*[@value='Submit']")).click();
		    
		    driver.findElement(By.xpath("//*[text()=' Reports']")).click();
		    
		    driver.findElement(By.xpath("//*[text()='Summary']")).click();
		    
		    driver.findElement(By.xpath("(//*[@class='ui-icon ui-icon-triangle-1-s'])[1]")).click();
		    
		 Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("//*[@class='ui-icon ui-icon-check']")).click();
		    
		    driver.findElement(By.xpath("//*[@name='periodType']/option[text()='Today']")).click();
		    
		    driver.findElement(By.xpath("//*[@value='Build']")).click();
		    
		    Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("//*[text()=' Administration']")).click();
		    driver.findElement(By.xpath("//*[contains(text(),'Users, companies')]")).click();
		    Thread.sleep(2000);
		    
		    driver.findElement(By.xpath("(//*[@type='checkbox'])[4]")).click();
		    Thread.sleep(2000);
		    
		    Actions action = new Actions(driver);
		    action.moveToElement(driver.findElement(By.xpath("//*[@title='Delete selected users']"))).build().perform();
		    driver.findElement(By.xpath("//*[@title='Delete selected users']")).click();
		    
		    
		    driver.switchTo().alert().accept();
		    
		    driver.switchTo().alert().accept(); 
		    
		  
		    driver.findElement(By.xpath("//*[text()=' Administration']")).click();
			driver.findElement(By.xpath("//*[text()='Ticket categories']")).click();
			
			driver.quit();

	}

}
