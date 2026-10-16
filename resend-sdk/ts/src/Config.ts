
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Resend',
        slug: "resend",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://api.resend.com",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        add_contact_to_segment_response_success: {
        },
  
        api_key: {
        },
  
        audience: {
        },
  
        automation: {
        },
  
        automation_run: {
        },
  
        automation_run_list_item: {
        },
  
        broadcast: {
        },
  
        contact: {
        },
  
        contact_property: {
        },
  
        contact_topics_response_success: {
        },
  
        create_api_key: {
        },
  
        create_batch_email: {
        },
  
        create_broadcast_response_success: {
        },
  
        domain: {
        },
  
        email: {
        },
  
        event: {
        },
  
        list_attachment: {
        },
  
        list_contact_segments_response_success: {
        },
  
        log: {
        },
  
        received_email: {
        },
  
        remove_audience_response_success: {
        },
  
        remove_broadcast_response_success: {
        },
  
        remove_contact_from_segment_response_success: {
        },
  
        remove_contact_property_response_success: {
        },
  
        remove_contact_response_success: {
        },
  
        remove_event: {
        },
  
        remove_segment_response_success: {
        },
  
        remove_template_response_success: {
        },
  
        remove_topic_response_success: {
        },
  
        retrieved_attachment: {
        },
  
        segment: {
        },
  
        template: {
        },
  
        topic: {
        },
  
        update_broadcast_response_success: {
        },
  
        update_contact_property_response_success: {
        },
  
        update_contact_response_success: {
        },
  
        update_contact_topics_response_success: {
        },
  
        update_domain_response_success: {
        },
  
        update_email_option: {
        },
  
        update_event: {
        },
  
        update_template_response_success: {
        },
  
        update_topic_response_success: {
        },
  
        update_webhook: {
        },
  
        webhook: {
        },
  
    }
  }


  entity = {
    "add_contact_to_segment_response_success": {
      "fields": [
        {
          "name": "contact_id",
          "title": "Contact Id",
          "type": "`$STRING`",
          "short": "The ID of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": "`$STRING`",
          "short": "The ID of the segment."
        }
      ],
      "name": "add_contact_to_segment_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contacts/{contact_id}/segments/{segment_id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "segments"
                },
                {
                  "var": "segment_id"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "segments",
                "{segment_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "segment_id",
                    "orig": "segment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id",
                  "segment_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact",
            "$.main.kit.entity.segment"
          ]
        ]
      }
    },
    "api_key": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the API key was created.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the API key."
        },
        {
          "name": "last_used_at",
          "title": "Last Used At",
          "type": "`$STRING`",
          "short": "The date and time the API key was last used.",
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the API key."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api_key",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api-keys",
              "segments": [
                {
                  "lit": "api-keys"
                }
              ],
              "parts": [
                "api-keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/api-keys/{api_key_id}",
              "segments": [
                {
                  "lit": "api-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "api_key_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "api_key_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "audience": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date that the object was created.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the audience."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the audience."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object of the audience."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "audience",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/audiences",
              "segments": [
                {
                  "lit": "audiences"
                }
              ],
              "parts": [
                "audiences"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/audiences",
              "segments": [
                {
                  "lit": "audiences"
                }
              ],
              "parts": [
                "audiences"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/audiences/{id}",
              "segments": [
                {
                  "lit": "audiences"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "audiences",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "automation": {
      "fields": [
        {
          "name": "connections",
          "title": "Connections",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "The connections between steps in the active version of the automation."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the automation was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the automation."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the automation."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The current status of the automation."
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "The steps in the active version of the automation."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "The date and time the automation was last updated."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "automation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/automations/{automation_id}/stop",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "stop"
                }
              ],
              "parts": [
                "automations",
                "{id}",
                "stop"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "stop",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/automations",
              "segments": [
                {
                  "lit": "automations"
                }
              ],
              "parts": [
                "automations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations",
              "segments": [
                {
                  "lit": "automations"
                }
              ],
              "parts": [
                "automations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations/{automation_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/automations/{automation_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/automations/{automation_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "automation_run": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": "`$STRING`",
          "short": "The date and time the run completed."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the run was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the automation run."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`",
          "short": "The date and time the run started."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The current status of the automation run."
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`",
          "short": "The steps executed in this run, sorted in graph order."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "automation_run",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations/{automation_id}/runs/{run_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "automation_id"
                },
                {
                  "lit": "runs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{automation_id}",
                "runs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "run_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "automation_id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "run_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "automation_id",
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.automation"
          ]
        ]
      }
    },
    "automation_run_list_item": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": "`$STRING`",
          "short": "The date and time the run completed."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the run was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the automation run."
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`",
          "short": "The date and time the run started."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The current status of the automation run."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "automation_run_list_item",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations/{automation_id}/runs",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "runs"
                }
              ],
              "parts": [
                "automations",
                "{id}",
                "runs"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  }
                ]
              },
              "select": {
                "$action": "runs",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "broadcast": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "Deprecated: use `segment_id` instead.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the broadcast was created.",
          "format": "date-time"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "The email address of the sender."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the broadcast content."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the broadcast."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the broadcast."
        },
        {
          "name": "preview_text",
          "title": "Preview Text",
          "type": "`$STRING`",
          "short": "The preview text of the email."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the broadcast is scheduled to be sent.",
          "format": "date-time"
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": "`$STRING`",
          "short": "Unique identifier of the segment this broadcast will be sent to."
        },
        {
          "name": "sent_at",
          "title": "Sent At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the broadcast was sent.",
          "format": "date-time"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the broadcast."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "The subject line of the email."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the broadcast content."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": "`$STRING`",
          "short": "The topic ID that the broadcast is scoped to."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "broadcast",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/broadcasts/{id}/send",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "send"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}",
                "send"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "send",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/broadcasts",
              "segments": [
                {
                  "lit": "broadcasts"
                }
              ],
              "parts": [
                "broadcasts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/broadcasts/{id}",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "Unique identifier of the audience to which the contact belongs.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact was created.",
          "format": "date-time"
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Email address of the contact."
        },
        {
          "name": "first_name",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "First name of the contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the contact."
        },
        {
          "name": "last_name",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "Last name of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "properties",
          "title": "Properties",
          "type": "`$OBJECT`",
          "short": "A map of custom property keys and values."
        },
        {
          "name": "segments",
          "title": "Segments",
          "type": "`$ARRAY`",
          "short": "Array of segment IDs to add the contact to."
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "short": "Array of topic subscriptions for the contact."
        },
        {
          "name": "unsubscribed",
          "title": "Unsubscribed",
          "type": "`$BOOLEAN`",
          "short": "Indicates if the contact is unsubscribed."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contacts",
              "segments": [
                {
                  "lit": "contacts"
                }
              ],
              "parts": [
                "contacts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts",
              "segments": [
                {
                  "lit": "contacts"
                }
              ],
              "parts": [
                "contacts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "segment_id",
                    "orig": "segment_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact_property": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact property was created.",
          "format": "date-time"
        },
        {
          "name": "fallback_value",
          "title": "Fallback Value",
          "type": "`$ANY`",
          "short": "The default value when the property is not set for a contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the contact property."
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The property key."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The property type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact_property",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contact-properties",
              "segments": [
                {
                  "lit": "contact-properties"
                }
              ],
              "parts": [
                "contact-properties"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contact-properties",
              "segments": [
                {
                  "lit": "contact-properties"
                }
              ],
              "parts": [
                "contact-properties"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contact-properties/{id}",
              "segments": [
                {
                  "lit": "contact-properties"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contact-properties",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact_topics_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact_topics_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/{contact_id}/topics",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "contacts",
                "{id}",
                "topics"
              ],
              "rename": {
                "param": {
                  "contact_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "topics",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_api_key": {
      "fields": [
        {
          "name": "domain_id",
          "title": "Domain Id",
          "type": "`$STRING`",
          "short": "Restrict an API key to send emails only from a specific domain."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The API key name."
        },
        {
          "name": "permission",
          "title": "Permission",
          "type": "`$STRING`",
          "short": "The API key can have full access to Resend’s API or be only restricted to send emails."
        }
      ],
      "name": "create_api_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/api-keys",
              "segments": [
                {
                  "lit": "api-keys"
                }
              ],
              "parts": [
                "api-keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_batch_email": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "send_emails",
          "title": "Send Emails",
          "type": "`$ARRAY`"
        }
      ],
      "name": "create_batch_email",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails/batch",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "batch"
                }
              ],
              "parts": [
                "emails",
                "batch"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata.send_emails`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "Idempotency-Key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_broadcast_response_success": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "Use `segment_id` instead.",
          "deprecated": true
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "req": true,
          "short": "The email address of the sender."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the message."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the broadcast."
        },
        {
          "name": "preview_text",
          "title": "Preview Text",
          "type": "`$STRING`",
          "short": "The preview text of the email."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Schedule time to send the broadcast."
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the segment this broadcast will be sent to."
        },
        {
          "name": "send",
          "title": "Send",
          "type": "`$BOOLEAN`",
          "short": "Whether to send the broadcast immediately or keep it as a draft."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "req": true,
          "short": "The subject line of the email."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the message."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": "`$STRING`",
          "short": "The topic ID that the broadcast will be scoped to."
        }
      ],
      "name": "create_broadcast_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/broadcasts",
              "segments": [
                {
                  "lit": "broadcasts"
                }
              ],
              "parts": [
                "broadcasts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "domain": {
      "fields": [
        {
          "name": "capabilities",
          "title": "Capabilities",
          "type": "`$OBJECT`",
          "short": "Configure the domain capabilities for sending and receiving emails."
        },
        {
          "name": "click_tracking",
          "title": "Click Tracking",
          "type": "`$BOOLEAN`",
          "short": "Whether click tracking is enabled for this domain."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the domain was created.",
          "format": "date-time"
        },
        {
          "name": "custom_return_path",
          "title": "Custom Return Path",
          "type": "`$STRING`",
          "short": "For advanced use cases, choose a subdomain for the Return-Path address."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the domain."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the domain."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "open_tracking",
          "title": "Open Tracking",
          "type": "`$BOOLEAN`",
          "short": "Whether open tracking is enabled for this domain."
        },
        {
          "name": "records",
          "title": "Records",
          "type": "`$ARRAY`"
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`",
          "short": "The region where the domain is hosted."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the domain."
        },
        {
          "name": "tls",
          "title": "Tls",
          "type": "`$STRING`",
          "short": "TLS mode."
        },
        {
          "name": "tracking_subdomain",
          "title": "Tracking Subdomain",
          "type": "`$STRING`",
          "short": "The subdomain used for click and open tracking."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/domains/{domain_id}/verify",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "verify"
                }
              ],
              "parts": [
                "domains",
                "{id}",
                "verify"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "verify",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/domains",
              "segments": [
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/domains",
              "segments": [
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/domains/{domain_id}",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/domains/{domain_id}",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "email": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`"
        },
        {
          "name": "bcc",
          "title": "Bcc",
          "type": "`$ARRAY`",
          "short": "The email addresses of the blind carbon copy recipients."
        },
        {
          "name": "cc",
          "title": "Cc",
          "type": "`$ARRAY`",
          "short": "The email addresses of the carbon copy recipients."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the email was created.",
          "format": "date-time"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The email address of the sender."
        },
        {
          "name": "headers",
          "title": "Headers",
          "type": "`$OBJECT`",
          "short": "Custom headers to add to the email."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML body of the email."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the email."
        },
        {
          "name": "last_event",
          "title": "Last Event",
          "type": "`$STRING`",
          "short": "The status of the email."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Schedule email to be sent later."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The subject line of the email."
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "template",
          "title": "Template",
          "type": "`$ANY`"
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text body of the email."
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ANY`"
            }
          },
          "short": "Recipient email address."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": "`$STRING`",
          "short": "The topic ID to scope the email to."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "email",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails/{email_id}/cancel",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "cancel"
                }
              ],
              "parts": [
                "emails",
                "{id}",
                "cancel"
              ],
              "rename": {
                "param": {
                  "email_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "cancel",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails",
              "segments": [
                {
                  "lit": "emails"
                }
              ],
              "parts": [
                "emails"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "Idempotency-Key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails",
              "segments": [
                {
                  "lit": "emails"
                }
              ],
              "parts": [
                "emails"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/{email_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "emails",
                "{id}"
              ],
              "rename": {
                "param": {
                  "email_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "event": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the event was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The event ID.",
          "format": "uuid"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The event name."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "schema",
          "title": "Schema",
          "type": "`$OBJECT`",
          "short": "A flat key/type map defining the event payload schema."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "The date and time the event was last updated."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "event",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/events",
              "segments": [
                {
                  "lit": "events"
                }
              ],
              "parts": [
                "events"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/events/send",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "lit": "send"
                }
              ],
              "parts": [
                "events",
                "send"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "send"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/events",
              "segments": [
                {
                  "lit": "events"
                }
              ],
              "parts": [
                "events"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/events/{identifier}",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list_attachment": {
      "fields": [
        {
          "name": "content_disposition",
          "title": "Content Disposition",
          "type": "`$STRING`",
          "short": "How the attachment should be displayed."
        },
        {
          "name": "content_id",
          "title": "Content Id",
          "type": "`$STRING`",
          "short": "The content ID for inline attachments."
        },
        {
          "name": "content_type",
          "title": "Content Type",
          "type": "`$STRING`",
          "short": "The MIME type of the attachment."
        },
        {
          "name": "download_url",
          "title": "Download Url",
          "type": "`$STRING`",
          "short": "Signed URL to download the attachment content."
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "Timestamp when the download URL expires.",
          "format": "date-time"
        },
        {
          "name": "filename",
          "title": "Filename",
          "type": "`$STRING`",
          "short": "The filename of the attachment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the attachment.",
          "format": "uuid"
        },
        {
          "name": "size",
          "title": "Size",
          "type": "`$INTEGER`",
          "short": "Size of the attachment in bytes."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_attachment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/{email_id}/attachments",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "email_id"
                },
                {
                  "lit": "attachments"
                }
              ],
              "parts": [
                "emails",
                "{email_id}",
                "attachments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving/{email_id}/attachments",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                },
                {
                  "var": "receiving_id"
                },
                {
                  "lit": "attachments"
                }
              ],
              "parts": [
                "emails",
                "receiving",
                "{receiving_id}",
                "attachments"
              ],
              "rename": {
                "param": {
                  "email_id": "receiving_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "receiving_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "receiving_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.email"
          ]
        ]
      }
    },
    "list_contact_segments_response_success": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact was added to the segment.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the segment."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_contact_segments_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/{contact_id}/segments",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "segments"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "segments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact"
          ]
        ]
      }
    },
    "log": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date the log was created.",
          "format": "date-time"
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$STRING`",
          "short": "The API endpoint that was called."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The log ID.",
          "format": "uuid"
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`",
          "short": "The HTTP method used."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "request_body",
          "title": "Request Body",
          "type": "`$ANY`",
          "short": "The request body sent to the API."
        },
        {
          "name": "response_body",
          "title": "Response Body",
          "type": "`$ANY`",
          "short": "The response body returned by the API."
        },
        {
          "name": "response_status",
          "title": "Response Status",
          "type": "`$INTEGER`",
          "short": "The HTTP status code of the response."
        },
        {
          "name": "user_agent",
          "title": "User Agent",
          "type": "`$STRING`",
          "short": "The user agent of the request."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "log",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/logs",
              "segments": [
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "logs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/logs/{log_id}",
              "segments": [
                {
                  "lit": "logs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "logs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "log_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "log_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "received_email": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`",
          "short": "Array of attachments."
        },
        {
          "name": "bcc",
          "title": "Bcc",
          "type": "`$ARRAY`",
          "short": "The BCC recipients."
        },
        {
          "name": "cc",
          "title": "Cc",
          "type": "`$ARRAY`",
          "short": "The CC recipients."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp when the email was received.",
          "format": "date-time"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "The sender email address."
        },
        {
          "name": "headers",
          "title": "Headers",
          "type": "`$OBJECT`",
          "short": "The email headers."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML content of the email."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the received email.",
          "format": "uuid"
        },
        {
          "name": "message_id",
          "title": "Message Id",
          "type": "`$STRING`",
          "short": "The unique message ID from the email headers."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The reply-to addresses."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "The email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text content of the email."
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ARRAY`",
          "short": "The recipient email addresses."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "received_email",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                }
              ],
              "parts": [
                "emails",
                "receiving"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving/{email_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                },
                {
                  "var": "email_id"
                }
              ],
              "parts": [
                "emails",
                "receiving",
                "{email_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_audience_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_audience_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/audiences/{id}",
              "segments": [
                {
                  "lit": "audiences"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "audiences",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_broadcast_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_broadcast_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/broadcasts/{id}",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_contact_from_segment_response_success": {
      "fields": [],
      "name": "remove_contact_from_segment_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/contacts/{contact_id}/segments/{segment_id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "segments"
                },
                {
                  "var": "segment_id"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "segments",
                "{segment_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "segment_id",
                    "orig": "segment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id",
                  "segment_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact",
            "$.main.kit.entity.segment"
          ]
        ]
      }
    },
    "remove_contact_property_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_contact_property_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/contact-properties/{id}",
              "segments": [
                {
                  "lit": "contact-properties"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contact-properties",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_contact_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_contact_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/contacts/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_event": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_event",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/events/{identifier}",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_segment_response_success": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "The ID of the audience this segment belongs to.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the segment was created.",
          "format": "date-time"
        },
        {
          "name": "filter",
          "title": "Filter",
          "type": "`$OBJECT`",
          "short": "Filter conditions for the segment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The name of the segment."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_segment_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/segments",
              "segments": [
                {
                  "lit": "segments"
                }
              ],
              "parts": [
                "segments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/segments",
              "segments": [
                {
                  "lit": "segments"
                }
              ],
              "parts": [
                "segments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/segments/{id}",
              "segments": [
                {
                  "lit": "segments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "segments",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_template_response_success": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "short": "The alias of the template."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was created.",
          "format": "date-time"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Sender email address."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "req": true,
          "short": "The HTML version of the template."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the template."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The name of the template."
        },
        {
          "name": "published_at",
          "title": "Published At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was published.",
          "format": "date-time"
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "Reply-to email addresses."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The publication status of the template."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the template."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was last updated.",
          "format": "date-time"
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_template_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/templates",
              "segments": [
                {
                  "lit": "templates"
                }
              ],
              "parts": [
                "templates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/templates",
              "segments": [
                {
                  "lit": "templates"
                }
              ],
              "parts": [
                "templates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/templates/{id}",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "templates",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_topic_response_success": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the topic was created.",
          "format": "date-time"
        },
        {
          "name": "default_subscription",
          "title": "Default Subscription",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The default subscription status for the topic."
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A description of the topic."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the topic."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The name of the topic."
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "The visibility of the topic."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_topic_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/topics",
              "segments": [
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/topics",
              "segments": [
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/topics/{id}",
              "segments": [
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "topics",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "retrieved_attachment": {
      "fields": [
        {
          "name": "content_disposition",
          "title": "Content Disposition",
          "type": "`$STRING`",
          "short": "How the attachment should be displayed."
        },
        {
          "name": "content_id",
          "title": "Content Id",
          "type": "`$STRING`",
          "short": "The content ID for inline attachments."
        },
        {
          "name": "content_type",
          "title": "Content Type",
          "type": "`$STRING`",
          "short": "The MIME type of the attachment."
        },
        {
          "name": "download_url",
          "title": "Download Url",
          "type": "`$STRING`",
          "short": "Signed URL to download the attachment content."
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "Timestamp when the download URL expires.",
          "format": "date-time"
        },
        {
          "name": "filename",
          "title": "Filename",
          "type": "`$STRING`",
          "short": "The filename of the attachment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the attachment.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "size",
          "title": "Size",
          "type": "`$INTEGER`",
          "short": "Size of the attachment in bytes."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "retrieved_attachment",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/{email_id}/attachments/{attachment_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "email_id"
                },
                {
                  "lit": "attachments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "emails",
                "{email_id}",
                "attachments",
                "{id}"
              ],
              "rename": {
                "param": {
                  "attachment_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "attachment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id",
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving/{email_id}/attachments/{attachment_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                },
                {
                  "var": "receiving_id"
                },
                {
                  "lit": "attachments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "emails",
                "receiving",
                "{receiving_id}",
                "attachments",
                "{id}"
              ],
              "rename": {
                "param": {
                  "attachment_id": "id",
                  "email_id": "receiving_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "attachment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "receiving_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "receiving_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.email"
          ]
        ]
      }
    },
    "segment": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "The ID of the audience this segment belongs to.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the segment was created.",
          "format": "date-time"
        },
        {
          "name": "filter",
          "title": "Filter",
          "type": "`$OBJECT`",
          "short": "Filter conditions for the segment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the segment."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "segment",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/segments/{id}",
              "segments": [
                {
                  "lit": "segments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "segments",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "template": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "short": "The alias of the template."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was created.",
          "format": "date-time"
        },
        {
          "name": "current_version_id",
          "title": "Current Version Id",
          "type": "`$STRING`",
          "short": "The ID of the current version of the template."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Sender email address."
        },
        {
          "name": "has_unpublished_versions",
          "title": "Has Unpublished Versions",
          "type": "`$BOOLEAN`",
          "short": "Indicates whether the template has unpublished versions."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the template."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the template."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the template."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "published_at",
          "title": "Published At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was published.",
          "format": "date-time"
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "Reply-to email addresses."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The publication status of the template."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the template."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was last updated.",
          "format": "date-time"
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "template",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/templates/{id}/duplicate",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "templates",
                "{id}",
                "duplicate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "duplicate",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/templates/{id}/publish",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "publish"
                }
              ],
              "parts": [
                "templates",
                "{id}",
                "publish"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "publish",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/templates/{id}",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "templates",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "topic": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the topic was created.",
          "format": "date-time"
        },
        {
          "name": "default_subscription",
          "title": "Default Subscription",
          "type": "`$STRING`",
          "short": "The default subscription status for the topic."
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A description of the topic."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the topic."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the topic."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "The visibility of the topic."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "topic",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/topics/{id}",
              "segments": [
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "topics",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_broadcast_response_success": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "Use `segment_id` instead.",
          "deprecated": true
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "The email address of the sender."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the message."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the broadcast."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the broadcast."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type of the response."
        },
        {
          "name": "preview_text",
          "title": "Preview Text",
          "type": "`$STRING`",
          "short": "The preview text of the email."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": "`$STRING`",
          "short": "Unique identifier of the segment this broadcast will be sent to."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "The subject line of the email."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the message."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": "`$STRING`",
          "short": "The topic ID that the broadcast will be scoped to."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_broadcast_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/broadcasts/{id}",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_contact_property_response_success": {
      "fields": [
        {
          "name": "fallback_value",
          "title": "Fallback Value",
          "type": "`$ANY`",
          "short": "The default value to use when the property is not set for a contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the contact property."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_contact_property_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/contact-properties/{id}",
              "segments": [
                {
                  "lit": "contact-properties"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contact-properties",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_contact_response_success": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address of the contact."
        },
        {
          "name": "first_name",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "First name of the contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the updated contact."
        },
        {
          "name": "last_name",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "Last name of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "properties",
          "title": "Properties",
          "type": "`$OBJECT`",
          "short": "A map of custom property keys and values to update."
        },
        {
          "name": "unsubscribed",
          "title": "Unsubscribed",
          "type": "`$BOOLEAN`",
          "short": "The Contact's global subscription status."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_contact_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/contacts/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_contact_topics_response_success": {
      "fields": [
        {
          "name": "contact_id",
          "title": "Contact Id",
          "type": "`$STRING`",
          "short": "The ID of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "op": {
            "update": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "Array of updated topic subscriptions."
        }
      ],
      "name": "update_contact_topics_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/contacts/{contact_id}/topics",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact"
          ]
        ]
      }
    },
    "update_domain_response_success": {
      "fields": [
        {
          "name": "capabilities",
          "title": "Capabilities",
          "type": "`$OBJECT`",
          "short": "Configure the domain capabilities for sending and receiving emails."
        },
        {
          "name": "click_tracking",
          "title": "Click Tracking",
          "type": "`$BOOLEAN`",
          "short": "Track clicks within the body of each HTML email."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the updated domain."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type representing the updated domain."
        },
        {
          "name": "open_tracking",
          "title": "Open Tracking",
          "type": "`$BOOLEAN`",
          "short": "Track the open rate of each email."
        },
        {
          "name": "tls",
          "title": "Tls",
          "type": "`$STRING`",
          "short": "enforced | opportunistic."
        },
        {
          "name": "tracking_subdomain",
          "title": "Tracking Subdomain",
          "type": "`$STRING`",
          "short": "The subdomain to use for click and open tracking."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_domain_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/domains/{domain_id}",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                }
              ],
              "parts": [
                "domains",
                "{domain_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "domain_id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "domain_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.domain"
          ]
        ]
      }
    },
    "update_email_option": {
      "fields": [
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Schedule email to be sent later."
        }
      ],
      "name": "update_email_option",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/emails/{email_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "email_id"
                }
              ],
              "parts": [
                "emails",
                "{email_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.email"
          ]
        ]
      }
    },
    "update_event": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the updated event.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "schema",
          "title": "Schema",
          "type": "`$OBJECT`",
          "req": true,
          "short": "A flat key/type map defining the event payload schema."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_event",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/events/{identifier}",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_template_response_success": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "short": "The alias of the template."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Sender email address."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the template."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the template."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the template."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type of the response."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "Reply-to email addresses."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the template."
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_template_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/templates/{id}",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "templates",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_topic_response_success": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A description of the topic."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the topic."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the topic."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "The visibility of the topic."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_topic_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/topics/{id}",
              "segments": [
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "topics",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_webhook": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the webhook was created.",
          "format": "date-time"
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "The URL where webhook events will be sent."
        },
        {
          "name": "events",
          "title": "Events",
          "type": "`$ARRAY`",
          "req": true,
          "op": {
            "list": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "short": "Array of event types to subscribe to."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the updated webhook.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the webhook."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_webhook",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/webhooks",
              "segments": [
                {
                  "lit": "webhooks"
                }
              ],
              "parts": [
                "webhooks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks",
              "segments": [
                {
                  "lit": "webhooks"
                }
              ],
              "parts": [
                "webhooks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/webhooks/{webhook_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the webhook was created.",
          "format": "date-time"
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$STRING`",
          "short": "The URL where webhook events are sent."
        },
        {
          "name": "events",
          "title": "Events",
          "type": "`$ARRAY`",
          "short": "Array of event types subscribed to."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the webhook.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "signing_secret",
          "title": "Signing Secret",
          "type": "`$STRING`",
          "short": "The secret key used to verify webhook payloads."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the webhook."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "webhook",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/{webhook_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/webhooks/{webhook_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

