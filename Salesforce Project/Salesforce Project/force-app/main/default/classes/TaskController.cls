public class TaskController {

    @AuraEnabled
    public static Integer getTasksCount(Date startDate, Date endDate){
        if(startDate != null && endDate != null){
            return [SELECT COUNT() FROM Task WHERE ActivityDate >: startDate AND ActivityDate <: endDate];
        } else {
            return [SELECT COUNT() FROM Task];
        }
    }

    @AuraEnabled(cacheable = true)
    public static List<Task> getAllTasks(Integer offsetRange, Date startDate, Date endDate){
        if(startDate != null && endDate != null){
            return getFilteredTask(startDate, endDate, offsetRange);
        } else {
            if(offsetRange == null){
                List<Task> tasks = [SELECT Id, Subject, ActivityDate, Status, Priority, OwnerId, Owner.Name FROM Task ORDER BY ActivityDate limit 10];
                return tasks;
    
            }else{
                List<Task> tasks = [SELECT Id, Subject, ActivityDate, Status, Priority, OwnerId, Owner.Name FROM Task ORDER BY ActivityDate limit 10 OFFSET :offsetRange];
                return tasks;
            }
        }
       
    }

    @AuraEnabled
    public static void deleteTask(Task objtask){
        try {
            delete objtask;
        } 
        catch (Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
    @AuraEnabled
    public static Task okTask(String Subject, Date ActivityDate, String Status, String Priority, String OwnerId){
        try{
            Task t = new Task();
        t.Subject = Subject;
        t.ActivityDate = ActivityDate;
        t.Status = Status;
        t.Priority = Priority;
        t.OwnerId = Id.valueOf(OwnerId);
    
        Insert t;
        return t;
        }
        catch(Exception ex){
            System.debug('An Exception: ' + ex.getMessage());
            return null;
        }
    }
    @AuraEnabled
    public static List<String> getTaskStatus(){

        List<String> pickListValuesList= new List<String>();
        Schema.DescribeFieldResult fieldResult = Task.Status.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry pickListVal : ple){
         pickListValuesList.add(pickListVal.getLabel());
        }     
        return pickListValuesList;
    }
    @AuraEnabled
    public static List<String> getTaskPriority(){

        List<String> pickListValuesList= new List<String>();
        Schema.DescribeFieldResult fieldResult = Task.Priority.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry pickListVal : ple){
         pickListValuesList.add(pickListVal.getLabel());
        }     
        return pickListValuesList;
    }
    @AuraEnabled
    public static List<User> getActiveUser(){
        List<User> users = [SELECT Id, Name FROM User];
        return users;
    }
    @AuraEnabled
        public static List<Task> getFilteredTask(Date startDate, Date endDate, Integer offsetRange){
            if(offsetRange == null){
                List<Task> filteredTasks = [SELECT Id, Subject, ActivityDate, Status, Priority, OwnerId, Owner.Name FROM Task WHERE ActivityDate >: startDate AND ActivityDate <: endDate  ORDER BY ActivityDate limit 10];
                return filteredTasks;
    
            }else{
                List<Task> filteredTasks = [SELECT Id, Subject, ActivityDate, Status, Priority, OwnerId, Owner.Name FROM Task WHERE  ActivityDate >: startDate AND ActivityDate <:endDate  ORDER BY ActivityDate limit 10 OFFSET :offsetRange];
                return filteredTasks;
            }
        }
}