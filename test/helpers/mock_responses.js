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
  },
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

exports.project_group_response = project_group_response
exports.project_response       = project_response
exports.tenant_response        = tenant_response
exports.environment_response   = environment_response
exports.mock_response          = mock_response
exports.mock_fail_response     = mock_fail_response
