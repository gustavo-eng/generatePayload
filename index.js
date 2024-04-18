const data = {
    "applicationId": "6153464102e860000897db06",
    "applicationName": "Transformer Fleet Management (dev)",
    "data": {
      "attribute_00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002": 132421,
      "attribute_000000000000000000001": 789
    },
    "flowId": "661ff6ab17955936fdc4d177",
    "flowName": "testApplicationPayloadSymulation",
    "flowVersion": "develop",
    "globals": {
      "appType": "WEGNOLOGY_WTFM",
      "awsCredentials": {
        "us-east-1": {
          "dynamodb-default-access": {
            "accessKey": "AKIAYCFJDADZEDEZ4AU3",
            "accessSecret": "*****REDACTED*****"
          }
        }
      },
      "awsResources": {
        "dynamodb": {
          "tables": {
            "audit": "audit-resources"
          }
        }
      },
      "co2EmissionComparison": {
        "cars": 4.49,
        "co2": 0.027,
        "source_cars": "https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references",
        "source_cars_title": "Environmental Protection Agency (EPA)",
        "source_co2": "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/sirene/dados-e-ferramentas/fatores-de-emissao/arquivo/Despacho_2022_jandez_corrigidojulho2022_1.xlsx",
        "source_co2_title": "Ministério da Ciência, Tecnologia e Inovação",
        "source_trees": "https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references",
        "source_trees_title": "Environmental Protection Agency (EPA)",
        "trees": 0.06
      },
      "dashboards": {
        "dry_transformer": {
          "dashId": "5e7e19328e2af20007ed965f",
          "defaultAtributes": {
            "averageLoad": {
              "label": "Carga",
              "round": 1,
              "unit": "%"
            },
            "averagePowerFactor": {
              "label": "Fator de potência",
              "round": 4,
              "unit": " "
            },
            "yield": {
              "label": "Eficiência",
              "round": 4,
              "unit": " "
            }
          }
        },
        "oil_transformer": {
          "dashId": "5e7c979b95be4d00079b808d",
          "defaultAtributes": {
            "averageLoad": {
              "label": "Carga",
              "round": 1,
              "unit": "%"
            },
            "averagePowerFactor": {
              "label": "Fator de potência",
              "round": 4,
              "unit": " "
            },
            "topOilTemperature": {
              "label": "Temp. topo de óleo",
              "round": 1,
              "unit": "ºC"
            },
            "yield": {
              "label": "Eficiência",
              "round": 4,
              "unit": " "
            }
          }
        }
      },
      "deviceIO300Files": {
        "accessKey": "afae6214-90ad-45f9-9d0b-6cc46e904067",
        "accessSecret": "*****REDACTED*****"
      },
      "dynamicRegister": {
        "path": "/dynamicRegister"
      },
      "edgeEventApiKey": "*****REDACTED*****",
      "env": "dev",
      "eventsDash": "63f7bd8e55514dcc9dda60d3",
      "filesRoot": "files.wnology.io",
      "gaTrackingCode": "UA-159175158-5",
      "googleSEO": "WpKI3C3froFm5UqVyhg7RXLD1-Dzn2Ah0XGc4Z1VLDo",
      "guides": {
        "cyber_security": "guides/cyber-security_pt-BR.pdf",
        "manual": "guides/Manual TFM_v1.1.pdf",
        "manual_scan": "guides/Manual do Usuário WCD-IO300.pdf",
        "self_training": "guides/self_training_trackTFM_pt_br_V.1.1.pdf"
      },
      "ignoreEdges": [
        "00:01:c0:26:13:83",
        "00:01:c0:27:f1:8a",
        "00:01:c0:2a:ff:a2",
        "00:01:c0:27:f2:73",
        "38:31:ac:02:51:01",
        "38:31:ac:02:51:06",
        "38:31:ac:06:00:11",
        "38:31:ac:30:00:25",
        "38:31:ac:02:51:c8"
      ],
      "jwtSecret": "*****REDACTED*****",
      "limits": {
        "favoritesQuantity": 100
      },
      "logoForEmail": "email_icon.png",
      "models": {
        "group_plant": {
          "dashboards": {
            "default": [
              {
                "id": "5ef213f8caefb10007402aee",
                "language": "pt-BR"
              },
              {
                "id": "5ef213f8caefb10007402aef",
                "language": "en-US"
              }
            ],
            "others": [
              {
                "language": "pt-BR",
                "value": [
                  {
                    "id": "5ef213f8caefb10007402aee",
                    "label": "KPI's"
                  },
                  {
                    "id": "5ef213f8caefb10007402ad4",
                    "label": "Status Ativos"
                  }
                ]
              },
              {
                "language": "en-US",
                "value": [
                  {
                    "id": "5ef213f8caefb10007402aef",
                    "label": "KPI's"
                  },
                  {
                    "id": "5ef213f8caefb10007402aed",
                    "label": "Assets Status"
                  }
                ]
              }
            ],
            "parents": [
            ]
          },
          "defaultAttributes": {
          },
          "label": {
            "en-US": "Plant",
            "pt-BR": "Planta"
          }
        },
        "industrial_dry_transformer": {
          "dashboards": {
            "default": [
              {
                "id": "5e7e19328e2af20007ed965f",
                "language": "pt-BR"
              },
              {
                "id": "5e7e19328e2af20007ed965f",
                "language": "en-US"
              }
            ],
            "others": [
              {
                "language": "pt-BR",
                "value": [
                  {
                    "id": "5e7e19328e2af20007ed965f",
                    "label": "Ativo"
                  },
                  {
                    "id": "5f89d509e30a880007fef91e",
                    "label": "Vida Útil"
                  },
                  {
                    "id": "5f89ee6239e4800006c48edc",
                    "label": "Gestão de Energia"
                  },
                  {
                    "id": "6153464402e860000897de51",
                    "label": "Edição de Dispositivo"
                  },
                  {
                    "id": "6153464402e860000897de46",
                    "label": "Manutenção"
                  }
                ]
              },
              {
                "language": "en-US",
                "value": [
                  {
                    "id": "5ef213f8caefb10007402adf",
                    "label": "Asset"
                  },
                  {
                    "id": "5f89d509e30a880007fef91e",
                    "label": "Lifespan"
                  },
                  {
                    "id": "5f89ee6239e4800006c48edc",
                    "label": "Energy Management"
                  },
                  {
                    "id": "6153464402e860000897de45",
                    "label": "Maintenance"
                  }
                ]
              }
            ],
            "parents": [
            ],
            "parents2": [
            ]
          },
          "defaultAttributes": {
          },
          "label": {
            "en-US": "Industrial dry type transformer",
            "pt-BR": "Transformador industrial tipo seco"
          }
        },
        "industrial_oil_transformer": {
          "dashboards": {
            "default": [
              {
                "id": "5e7c979b95be4d00079b808d",
                "language": "pt-BR"
              },
              {
                "id": "5e7c979b95be4d00079b808d",
                "language": "en-US"
              }
            ],
            "others": [
              {
                "language": "pt-BR",
                "value": [
                  {
                    "id": "5e7c979b95be4d00079b808d",
                    "label": "Ativo"
                  },
                  {
                    "id": "specialist",
                    "label": "Specialist"
                  },
                  {
                    "id": "oil",
                    "label": "Manutenção"
                  },
                  {
                    "id": "6153464402e860000897de50",
                    "label": "Edição de Dispositivo"
                  }
                ]
              },
              {
                "language": "en-US",
                "value": [
                  {
                    "id": "5e7c979b95be4d00079b808d",
                    "label": "Asset"
                  },
                  {
                    "id": "5f88955792505000063a6b2d",
                    "label": "Lifespan"
                  },
                  {
                    "id": "5f89ee6239e4800006c48edc",
                    "label": "Energy Management"
                  },
                  {
                    "id": "5f884c51e30a880007fef4fc",
                    "label": "Oil Analysis"
                  },
                  {
                    "id": "5f8878e792505000063a6ac2",
                    "label": "Gas Analysis"
                  },
                  {
                    "id": "5ef3739632ebf6000667dbfd",
                    "label": "Fault Recognition"
                  },
                  {
                    "id": "oil",
                    "label": "Maintenance"
                  }
                ]
              }
            ],
            "parents": [
            ],
            "parents2": [
            ]
          },
          "defaultAttributes": {
          },
          "label": {
            "en-US": "Industrial oil transformer",
            "pt-BR": "Transformador industrial a óleo"
          }
        },
        "power_oil_transformer": {
          "dashboards": {
            "default": [
              {
                "id": "5e7c979b95be4d00079b808d",
                "language": "pt-BR"
              },
              {
                "id": "5e7c979b95be4d00079b808d",
                "language": "en-US"
              }
            ],
            "others": [
              {
                "language": "pt-BR",
                "value": [
                  {
                    "id": "5e7c979b95be4d00079b808d",
                    "label": "Ativo"
                  },
                  {
                    "id": "specialist",
                    "label": "Specialist"
                  },
                  {
                    "id": "oil",
                    "label": "Manutenção"
                  },
                  {
                    "id": "5f85ae6e92505000063a6017",
                    "label": "Edição de Dispositivo"
                  }
                ]
              },
              {
                "language": "en-US",
                "value": [
                  {
                    "id": "5e7c979b95be4d00079b808d",
                    "label": "Asset"
                  },
                  {
                    "id": "5f88955792505000063a6b2d",
                    "label": "Lifespan"
                  },
                  {
                    "id": "5f89ee6239e4800006c48edc",
                    "label": "Energy Management"
                  },
                  {
                    "id": "5f884c51e30a880007fef4fc",
                    "label": "Oil Analysis"
                  },
                  {
                    "id": "5f8878e792505000063a6ac2",
                    "label": "Gas Analysis"
                  },
                  {
                    "id": "5ef3739632ebf6000667dbfd",
                    "label": "Fault Recognition"
                  },
                  {
                    "id": "oil",
                    "label": "Maintenance"
                  }
                ]
              }
            ],
            "parents": [
            ],
            "parents2": [
            ]
          },
          "defaultAttributes": {
          },
          "label": {
            "en-US": "Power transformer",
            "pt-BR": "Transformador de potência"
          }
        },
        "smartgrid_oil_transformer": {
          "dashboards": {
            "default": [
              {
                "id": "5e7c979b95be4d00079b808d",
                "language": "pt-BR"
              },
              {
                "id": "5e7c979b95be4d00079b808d",
                "language": "en-US"
              }
            ],
            "others": [
              {
                "language": "pt-BR",
                "value": [
                  {
                    "id": "5e7c979b95be4d00079b808d",
                    "label": "Ativo"
                  },
                  {
                    "id": "specialist",
                    "label": "Specialist"
                  },
                  {
                    "id": "oil",
                    "label": "Manutenção"
                  },
                  {
                    "id": "5f85ae6e92505000063a6017",
                    "label": "Edição de Dispositivo"
                  }
                ]
              },
              {
                "language": "en-US",
                "value": [
                  {
                    "id": "5e7c979b95be4d00079b808d",
                    "label": "Asset"
                  },
                  {
                    "id": "5f88955792505000063a6b2d",
                    "label": "Lifespan"
                  },
                  {
                    "id": "5f89ee6239e4800006c48edc",
                    "label": "Energy Management"
                  },
                  {
                    "id": "5f884c51e30a880007fef4fc",
                    "label": "Oil Analysis"
                  },
                  {
                    "id": "5f8878e792505000063a6ac2",
                    "label": "Gas Analysis"
                  },
                  {
                    "id": "5ef3739632ebf6000667dbfd",
                    "label": "Fault Recognition"
                  },
                  {
                    "id": "oil",
                    "label": "Maintenance"
                  }
                ]
              }
            ],
            "parents": [
            ],
            "parents2": [
            ]
          },
          "defaultAttributes": {
          },
          "label": {
            "en-US": "SmartGrid transformer",
            "pt-BR": "Transformador de distribuição SmartGrid"
          }
        }
      },
      "resources": {
        "dashboard_specialist_fleet": "63ea6aa3fab74a506e35b38b",
        "dataTable_conversionFactor": "64b15898f364340455802c72",
        "dataTable_dashboardController": "6448293e7a84fd3a80998a8f",
        "dataTable_dashboardController_dev": "6448293e7a84fd3a80998a8f",
        "dataTable_exchangeHistoric": "6153464102e860000897dc8f",
        "dataTable_exchangeUse": "6153464102e860000897dc90",
        "dataTable_feedbackLog": "627be32cf4acef333ed16c38",
        "dataTable_maintenances": "6153464102e860000897dc88",
        "dataTable_products": "6433763526c0547e64926ed3",
        "dataTable_productsRelations": "64ee88539be86b63fa25996c",
        "experienceGroup_exchange": "6153464502e860000897de81",
        "flow_exchangeServices": "6153464802e860000897e5c3",
        "maps": {
          "nominatim": "https://nominatim.openstreetmap.org"
        },
        "paths": {
          "languages": "dashboard/languages"
        },
        "tables": {
          "DashboardsControllerDevelop": "63e10df9d6bb0869e12c71eb",
          "chromatographyGasTable": "62bc3c09cca5c51d869d5cf0",
          "exports": "655274bf88c5b1bd8451a282",
          "favorites": "6511684256a01ad21ed44457",
          "genericRegisterFiles": "64ec8880f1fda56fcc642dde",
          "options": "64ee238d9be86b63fa2587a8",
          "physicalchemicalOilTable": "625069e753e0c8382d6b9a04",
          "thresholdsConfiguration": "64d0d91a25242429ca95c1a8"
        }
      },
      "sendGridApiKey": "*****REDACTED*****",
      "slackConfig": {
        "channel": "#witm-errors-log",
        "webhookUrl": "TPBUW9W65/B0105UQ4VHN/U5PCOIpjxB9UnpEsWl80Gitu"
      },
      "slug": "tfm-develop.wnology.io/",
      "stateFlags": {
        "TR4-001": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-026": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-027": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-028": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-030": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-033": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-035": {
          "alertFlag": false,
          "tripFlag": false
        },
        "TR4-036": {
          "alertFlag": false,
          "tripFlag": false
        }
      },
      "subscriptionApi": {
        "appKey": "38a8637e-39d7-46cd-9bca-a1eab396af70",
        "appSecret": "*****REDACTED*****",
        "host": "https://subscription-api-dev.weg.net"
      },
      "subscriptionHostName": "https://subscription-api-dev.weg.net",
      "thingsboardCredentials": {
        "app": "WTD",
        "host": "https://ec2-44-199-72-25.compute-1.amazonaws.com",
        "password": "*****REDACTED*****",
        "timeout": 10,
        "username": "integration_user@weg.net"
      },
      "wdnIntegration": {
        "applicationId": "614898252f7175000677de74",
        "dataTables": {
          "ApplicationUsers": "64bebaa3a167ad11fe81959f",
          "UserPlants": "64bebaa3a167ad11fe8195a6"
        },
        "integrationApiToken": "*****REDACTED*****",
        "thisAppId": "transformer-fleet-management-develop",
        "webhooks": {
          "firebaseNotify": "https://triggers.app.wnology.io/webhooks/ldeZKMvzIeMeBQ2AbfGn_RP96KygceF8DeyUNMGT"
        }
      }
    },
    "relayId": "64c421c1019c6db405aa8081",
    "relayType": "user",
    "time": "2024-04-17T17:15:32.850Z",
    "triggerId": "661ff6ab17955936fdc4d177-nUOO1ODYTK",
    "triggerType": "virtualButton",
    "working": {
      "_etag": "\"306-0QBrbL98ZD5uUZUEe2Lp3KpkB6c\"",
      "ancestorIds": [
        "6153464102e860000897dc63",
        "6153464102e860000897dc5d"
      ],
      "applicationId": "6153464102e860000897db06",
      "attributes": [
        {
          "attributeTags": {
          },
          "dataType": "number",
          "name": "attribute_000000000000000000001"
        }, 
        {
          "attributeTags": {
          },
          "dataType": "number",
          "name": "attribute_00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002"
        }
      ],
      "connectionInfo": {
        "connected": null
      },
      "creationDate": "2024-04-17T16:10:37.337Z",
      "deviceClass": "floating",
      "deviceId": "661ff47d0259bd6c3cdf8f01",
      "id": "661ff47d0259bd6c3cdf8f01",
      "lastUpdated": "2024-04-17T16:18:26.062Z",
      "name": "testPayloadSymulation",
      "parentId": "6153464102e860000897dc5d",
      "tags": [
        {
          "key": "tag1",
          "value": "00001"
        }
      ]
    }
  }

  //console.log('data')
  //console.log(data.data)
  /*
  Object.keys(data.data).forEach(key => {
    console.log(key) // print somente o nome dos atributos 
  })
  */
  //console.log('data.working')
  Object.keys(data.working.attributes).forEach(key => {
    console.log('tipo do atributo ', data.working.attributes[key].dataType)
    console.log('Nome do atributo ', data.working.attributes[key].name)
    console.log('====================================')
  })

