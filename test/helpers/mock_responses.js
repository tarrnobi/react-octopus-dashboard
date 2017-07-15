import utils from '../../lib/utils/utils'

function mock_response(body){
  var response = {
    statusCode: 200,
    statusMessage: 'OK',
    body: body

  }

  return response
}
function mock_fail_response(id){
  var response = {
    statusCode: 404,
    statusMessage: 'Not Found',
    body: {
            ErrorMessage: "The resource '{0}' was not found".format(id)
          }
  }

  return response
}

const project_group_response = [
  {
    Id: 'ProjectGroups-1',
    Name: 'All Projects',
    Description: null,
  },
  {
    Id: 'ProjectGroups-23',
    Name: 'Group 1',
    Description: null,
  },
  {
    Id: 'ProjectGroups-22',
    Name: 'Group 2',
  }
]

const project_response = [
  {
    Id: 'Projects-45',
    Name: 'DEV_Project_1',
    ProjectGroupId: 'ProjectGroups-23'
  },
  {
    Id: 'Projects-44',
    Name:'DEV_Project_2',
    ProjectGroupId: 'ProjectGroups-22',
  },
  {
    Id: 'Projects-43',
    Name: 'DEV_Project_3',
    ProjectGroupId: 'ProjectGroups-21',
  }
]

const tenant_response = [
  {
    Id: 'Tenants-21',
    Name: 'Brendan',
    TenantTags: ['teams/A-Team'],
    "ProjectEnvironments": {
      "Projects-45": [
        "Environments-1",
        "Environments-2"
      ],
      "Projects-44": [
        "Environments-2"
      ],
    }
  },
  {
    Id: 'Tenants-20',
    Name: 'Joseph',
    TenantTags: ['teams/B-Team'],
    "ProjectEnvironments": {
      "Projects-43": [
        "Environments-1",
        "Environments-2"
      ]
    }
  },

]

const environment_response = [
  {
    Id: 'Environments-1',
    Name: 'Local_DEV',
    SortOrder: 0
  },
  {
    Id: 'Environments-2',
    Name: 'DEV',
    SortOrder: 1
  },
  {
    Id: 'Environments-3',
    Name: 'QA',
    SortOrder: 2
  },
  {
    Id: 'Environments-4',
    Name: 'PRE-PROD',
    SortOrder: 3
  },
  {
    Id: 'Environments-5',
    Name: 'PROD',
    SortOrder: 4
  },


]

const deployment_response = {
  "ItemType": "Deployment",
  "IsStale": false,
  "TotalResults": 86,
  "ItemsPerPage": 30,
  "Items": [
    {
      "Id": "Deployments-216",
      "ReleaseId": "Releases-182",
      "EnvironmentId": "Environments-2",
      "TenantId": "Tenants-21",
      "ProjectId": "Projects-45",
      "ChannelId": "Channels-43",
      "Name": "Deploy to DEV for Brendan",
      "Created": "2017-07-06T09:11:03.399+00:00",
      "Links": {}
    },
    {
      "Id": "Deployments-215",
      "ReleaseId": "Releases-179",
      "EnvironmentId": "Environments-3",
      "TenantId": "Tenants-61",
      "ProjectId": "Projects-45",
      "ChannelId": "Channels-43",
      "Name": "Deploy to qa for Brendan",
      "Created": "2017-07-05T14:17:27.479+00:00",
      "Links": {}
    },
    {
      "Id": "Deployments-214",
      "ReleaseId": "Releases-178",
      "EnvironmentId": "Environments-2",
      "TenantId": "Tenants-20",
      "ProjectId": "Projects-45",
      "ChannelId": "Channels-43",
      "Name": "Deploy to DEV for Joseph",
      "Created": "2017-07-05T10:01:18.860+00:00",
      "Links": {}
    }
  ]
}
const release_response = {
  "ItemType": "Release",
  "IsStale": false,
  "TotalResults": 117,
  "ItemsPerPage": 30,
  "Items": [
    {
      "Id": "Releases-252",
      "Assembled": "2017-07-13T10:22:42.666+00:00",
      "ProjectId": "Projects-43",
      "ChannelId": "Channels-43",
      "Version": "2.9.2.513",
    },
    {
      "Id": "Releases-251",
      "Assembled": "2017-07-13T09:40:15.461+00:00",
      "ProjectId": "Projects-44",
      "ChannelId": "Channels-44",
      "Version": "2.9.1.97",
    },
    {
      "Id": "Releases-250",
      "Assembled": "2017-07-12T16:41:47.638+00:00",
      "ProjectId": "Projects-62",
      "ChannelId": "Channels-62",
      "Version": "2.9.1.10",
    }
  ]
}

const task_response = {
  "Id": "ServerTasks-3628",
  "Name": "Deploy",
  "Description": "Deploy MASTER_SalesPlanner_E2_DACPAC release 2.9.2.3 to DEV for Corby",
  "Arguments": {
    "DeploymentId": "Deployments-275"
  },
  "State": "Failed",
  "Completed": "Friday, July 14, 2017 4:22 PM",
  "CompletedTime": "2017-07-14T16:22:50.435+00:00",
  "ServerNode": "SUPERSERVER",
  "Duration": "4 seconds",
  "ErrorMessage": "The deployment failed because one or more steps failed. Please see the deployment log for details.",
  "IsCompleted": true,
  "FinishedSuccessfully": false,
}

exports.project_group_response = project_group_response
exports.project_response       = project_response
exports.tenant_response        = tenant_response
exports.environment_response   = environment_response
exports.deployment_response    = deployment_response
exports.release_response       = release_response
exports.task_response          = task_response
exports.mock_response          = mock_response
exports.mock_fail_response     = mock_fail_response
