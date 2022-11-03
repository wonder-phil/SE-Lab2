package c;


import java.util.ArrayList;

import org.restlet.*;
import org.restlet.data.Protocol;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import com.google.gson.Gson; 
import com.google.gson.GsonBuilder;  


public class FirstServerResource extends ServerResource {  
	
   private static int count = 0;
   private static String json_string;
   private static ArrayList<QuestionAnswer> allQuestionsAnswers = null;
   private static GsonBuilder builder = new GsonBuilder();     
   private static Gson gson = builder.create(); 
   
   public static void main(String[] args) throws Exception {  
	   
	   builder.setPrettyPrinting();
	   
	   AllQuestions allQuestions = new AllQuestions();
	   
	   allQuestionsAnswers = allQuestions.getAllQuestionsAnswers();
	   
	  
       // Create the HTTP server and listen on port 8182 
	  new Server(Protocol.HTTP, 8182, FirstServerResource.class).start();    
   }
   
   
   @Get  
   public String toString() {  
	  count++;
	  count = count % allQuestionsAnswers.size();
	  QuestionAnswer questionAnswer = allQuestionsAnswers.get(count);
	  json_string = gson.toJson(questionAnswer);
      return  json_string;  // "Question " + Integer.valueOf(count).toString() + ": " +
   }

}
