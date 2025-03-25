package com.losolved;

import java.io.FileWriter;
import java.io.IOException;
import java.time.Duration;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;

public class CourseAutomation { 

    public static void main(String[] args) {
        
        ChromeOptions options = new ChromeOptions();
        options.setExperimentalOption("debuggerAddress", "localhost:9222"); // Use the port you specified

        TreeSet<String> sections = new TreeSet<>();
        sections.add("Seção 4: IAM & AWS CLI");
        sections.add("Seção 5: EC2 Fundamentals");
        sections.add("Seção 6: EC2 Instance Storage");
        sections.add("Seção 7: AWS Fundamentals: ELB + ASG");
        sections.add("Seção 8: AWS Fundamentals: RDS + Aurora + ElasticCache");
        sections.add("Seção 9: Route 53");
        sections.add("Seção 10: VPC Fundamentals");
        sections.add("Seção 11: Amazon S3 Introduction");
        sections.add("Seção 12: AWS CLI, SDK, IAM Roles & Policies");
        sections.add("Seção 13: Advanced Amazon S3");
        sections.add("Seção 14: Amazon S3 Security");
        sections.add("Seção 15: CloudFront");
        sections.add("Seção 16: ECS, ECR & Fargate - Docker in AWS");
        sections.add("Seção 17: AWS Elastic Beanstalk");
        sections.add("Seção 18: AWS CloudFormation");
        sections.add("Seção 19: AWS Integration & Messaging: SQS, SNS & Kinesis");
        sections.add("Seção 20: AWS Monitoring & Audit: CloudWatch, X-Ray and CloudTrail");
        sections.add("Seção 21: AWS Serverless: Lambda");
        sections.add("Seção 22: AWS Serverless: DynamoDB");
        sections.add("Seção 23: AWS Serverless: API Gateway");
        sections.add("Seção 24: AWS CICD: CodeCommit, CodePipeline, CodeBuild, CodeDeploy");
        sections.add("Seção 25: AWS Serverless: SAM - Serverless Application Model");
        sections.add("Seção 26: Cloud Development Kit (CDK)");
        sections.add("Seção 27: Cognito: Cognito User Pools, Cognito Identity Pools & Cognito Sync");
        sections.add("Seção 28: Other Serverless: Step Functions & AppSync");
        sections.add("Seção 29: Advanced Identity");

        WebDriver driver = new ChromeDriver(options);
        sections.forEach(section -> {processSection(driver, section);});
        driver.quit();

    }
    

    private static void processSection(WebDriver driver, String section) {
        try {
            // Open a new tab
            JavascriptExecutor js = (JavascriptExecutor) driver;
           
            // Decrease the zoom level to make more elements visible
            js.executeScript("document.body.style.zoom='33%'");
            
            // Replace with the actual URL
            WebElement sectionElement = driver.findElement(By.xpath("//span[contains(text(), '" + section + "')]"));
            sectionElement.click();
            
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));

            // Click on each video and get the transcription
            List<WebElement> listItems = driver.findElements(By.cssSelector(".ud-accordion-panel-content .ud-unstyled-list .curriculum-item-link--curriculum-item--OVP5S"));

            // Iterate over the list items and perform actions
            for (int i = 0; i < listItems.size(); i++) {
                // Re-locate the listItem element to avoid stale element reference error
                WebElement listItem = driver.findElements(By.cssSelector(".ud-accordion-panel-content .ud-unstyled-list .curriculum-item-link--curriculum-item--OVP5S")).get(i);
                listItem.click();
                
                // Check if the element is a quiz
                List<WebElement> quizElements = driver.findElements(By.cssSelector(".quiz-page-content"));
                if (!quizElements.isEmpty() && quizElements.get(0).isDisplayed()) {
                    continue; // Skip this iteration if it's a quiz
                }

                driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

                WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
                wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//video"))); 

                // Simulate moving the mouse over the video to make the transcription button appear
                WebElement video = driver.findElement(By.xpath("//video")); // Adjust the selector
                Actions actions = new Actions(driver);
                actions.moveToElement(video).pause(1000).perform();
      
                // Click on the transcription button
                WebElement transcriptionButton = driver.findElement(By.cssSelector("button[data-purpose='transcript-toggle']")); // Adjust the selector
                transcriptionButton.click();
                wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[data-purpose='transcript-panel']"))); // Adjust the selector

                // Get the transcription text
                List<WebElement> transcriptionElements = driver.findElements(By.cssSelector("div.transcript--cue-container--Vuwj6 p[data-purpose='transcript-cue'] span[data-purpose='cue-text']"));
                StringBuilder transcription = new StringBuilder();
                for (WebElement element : transcriptionElements) {
                    transcription.append(element.getText()).append("\n");
                }

                // Save the transcription to a file
                try (FileWriter writer = new FileWriter("/home/diego/workspace/oneshotprep/transcriptions/" + section + ".txt", true)) {
                    writer.write(transcription.toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
                video = driver.findElement(By.xpath("//video")); 
                // Close the transcription panel
                actions.moveToElement(video).pause(1000).perform(); // Not Possible to find the element in this section
                transcriptionButton = driver.findElement(By.cssSelector("button[data-purpose='transcript-toggle']"));
                transcriptionButton.click();
            }

            // Re-locate the section element to avoid stale element reference error
            sectionElement = driver.findElement(By.xpath("//span[contains(text(), '" + section + "')]"));
            sectionElement.click();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
