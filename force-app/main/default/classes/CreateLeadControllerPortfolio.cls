public with sharing class CreateLeadControllerPortfolio {
    @AuraEnabled
    public static Lead createLead(String firstName, String lastName, String company, String email, String description){
        Lead ld = new Lead();
        ld.FirstName= firstName;
        ld.LastName = lastName;
        ld.Company = company;
        ld.Email = email;
        ld.Description = description;
        try {
            insert ld;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return ld;
    }
}