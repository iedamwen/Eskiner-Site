public with sharing class GetAllCases {
    @AuraEnabled(cacheable=true)
    
    public static List<Case> getAllCases(String accountId) {
        this.acnt= (Account)controller.getRecord();
        Account acc = [Select id FROM Account where id =: acnt.id];
    }
}
