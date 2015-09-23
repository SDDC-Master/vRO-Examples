System.log("Searching for Custom Group:" + customGroupName);

var groupService = cafeHost.createAuthenticationClient().getAuthenticationGroupService();
var criteria = new vCACCAFEGroupSearchCriteria(cafeHost.tenant);

criteria.setGroupType(vCACCAFEType.fromValue("CUSTOM"));
criteria.setCriteria(customGroupName);

var result = groupService.getGroupsByGroupSearchCriteria(criteria);

System.log("Found: ");
System.log(result);

return result[0];