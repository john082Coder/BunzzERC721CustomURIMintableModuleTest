## Approval
Emitted when owner enables approved to manage the tokenId token.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|approved|address|The address of the approved account|
|tokenId|uint256|The id of the token which has been approved|

## ApprovalForAll
Emitted when owner enables or disables (approved) operator to manage all of its assets.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## RoleAdminChanged
Emitted when newAdminRole is set as role's admin role, replacing previousAdminRole

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been used for finding admin role|
|previousAdminRole|bytes32|The previous admin role|
|newAdminRole|bytes32|The new updated admin role|


## RoleGranted
Emitted when account is granted role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been granted to the account|
|account|address|The address of the account which was granted role|
|sender|address|The address of the account which granted role|

## RoleRevoked
Emitted when account is revoked role.

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been revoked to the account|
|account|address|The address of the account which was revoked role|
|sender|address|The address of the account which revoked role|

## Transfer
Emitted when tokenId token is transferred from from to to.

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the sender account|
|to|address|The address of the receiver account|
|tokenId|uint256|The id of the token which has been transferred|