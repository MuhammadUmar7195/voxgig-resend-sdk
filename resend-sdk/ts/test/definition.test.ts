import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "add_contact_to_segment_response_success",
    "accessor": "AddContactToSegmentResponseSuccess",
    "op": "create",
    "method": "POST",
    "path": "/contacts/{contact_id}/segments/{segment_id}",
    "args": [
      {
        "name": "contact_id",
        "wire": "contact_id",
        "value": "p1"
      },
      {
        "name": "segment_id",
        "wire": "segment_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact_segment",
      "contact_id": "x",
      "segment_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "list",
    "method": "GET",
    "path": "/api-keys",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "x",
          "name": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "last_used_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "remove",
    "method": "DELETE",
    "path": "/api-keys/{api_key_id}",
    "args": [
      {
        "name": "id",
        "wire": "api_key_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "api_key",
      "id": "x",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "audience",
    "accessor": "Audience",
    "op": "create",
    "method": "POST",
    "path": "/audiences",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "audience",
      "name": "Registered Users"
    },
    "idField": "id"
  },
  {
    "entity": "audience",
    "accessor": "Audience",
    "op": "list",
    "method": "GET",
    "path": "/audiences",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "data": [
        {
          "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
          "name": "Registered Users",
          "created_at": "2023-10-06T22:59:55.977Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "audience",
    "accessor": "Audience",
    "op": "load",
    "method": "GET",
    "path": "/audiences/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "audience",
      "name": "Registered Users",
      "created_at": "2023-10-06T22:59:55.977Z"
    },
    "idField": "id"
  },
  {
    "entity": "automation",
    "accessor": "Automation",
    "op": "create",
    "method": "POST",
    "path": "/automations/{automation_id}/stop",
    "action": "stop",
    "args": [
      {
        "name": "id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "automation",
      "id": "x",
      "status": "disabled"
    },
    "idField": "id"
  },
  {
    "entity": "automation",
    "accessor": "Automation",
    "op": "create",
    "method": "POST",
    "path": "/automations",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "object": "automation",
      "id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "automation",
    "accessor": "Automation",
    "op": "list",
    "method": "GET",
    "path": "/automations",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1",
      "status": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "status",
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "name": "x",
          "status": "enabled",
          "created_at": "x",
          "updated_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "automation",
    "accessor": "Automation",
    "op": "load",
    "method": "GET",
    "path": "/automations/{automation_id}",
    "args": [
      {
        "name": "id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "automation",
      "id": "x",
      "name": "x",
      "status": "enabled",
      "created_at": "x",
      "updated_at": "x",
      "steps": [
        {
          "key": "x",
          "type": "trigger",
          "config": {}
        }
      ],
      "connections": [
        {
          "from": "x",
          "to": "x",
          "type": "default"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "automation",
    "accessor": "Automation",
    "op": "remove",
    "method": "DELETE",
    "path": "/automations/{automation_id}",
    "args": [
      {
        "name": "id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "automation",
      "id": "x",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "automation",
    "accessor": "Automation",
    "op": "update",
    "method": "PATCH",
    "path": "/automations/{automation_id}",
    "args": [
      {
        "name": "id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "automation",
      "id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "automation_run",
    "accessor": "AutomationRun",
    "op": "load",
    "method": "GET",
    "path": "/automations/{automation_id}/runs/{run_id}",
    "args": [
      {
        "name": "automation_id",
        "wire": "automation_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "run_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "automation_run",
      "id": "x",
      "status": "running",
      "started_at": "x",
      "completed_at": "x",
      "created_at": "x",
      "steps": [
        {
          "key": "x",
          "type": "trigger",
          "status": "x",
          "started_at": "x",
          "completed_at": "x",
          "created_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "automation_run_list_item",
    "accessor": "AutomationRunListItem",
    "op": "list",
    "method": "GET",
    "path": "/automations/{automation_id}/runs",
    "action": "runs",
    "args": [
      {
        "name": "id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1",
      "status": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "status",
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "status": "running",
          "started_at": "x",
          "completed_at": "x",
          "created_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "broadcast",
    "accessor": "Broadcast",
    "op": "create",
    "method": "POST",
    "path": "/broadcasts/{id}/send",
    "action": "send",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
    },
    "idField": "id"
  },
  {
    "entity": "broadcast",
    "accessor": "Broadcast",
    "op": "list",
    "method": "GET",
    "path": "/broadcasts",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
          "name": "November announcements",
          "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
          "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
          "status": "draft",
          "created_at": "2023-10-06T22:59:55.977Z",
          "scheduled_at": "2023-10-06T22:59:55.977Z",
          "sent_at": "2023-10-06T22:59:55.977Z",
          "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "broadcast",
    "accessor": "Broadcast",
    "op": "load",
    "method": "GET",
    "path": "/broadcasts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "name": "November announcements",
      "audience_id": "x",
      "segment_id": "x",
      "from": "Acme <onboarding@resend.dev>",
      "subject": "Hello World",
      "reply_to": [
        "x"
      ],
      "preview_text": "Here are our announcements",
      "status": "draft",
      "created_at": "2023-10-06T22:59:55.977Z",
      "scheduled_at": "2023-10-06T22:59:55.977Z",
      "sent_at": "2023-10-06T22:59:55.977Z",
      "text": "Hello {{{FIRST_NAME|there}}}!",
      "html": "<p>Hello {{{FIRST_NAME|there}}}!</p>",
      "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
    },
    "idField": "id"
  },
  {
    "entity": "contact",
    "accessor": "Contact",
    "op": "create",
    "method": "POST",
    "path": "/contacts",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "object": "contact",
      "id": "479e3145-dd38-476b-932c-529ceb705947"
    },
    "idField": "id"
  },
  {
    "entity": "contact",
    "accessor": "Contact",
    "op": "list",
    "method": "GET",
    "path": "/contacts",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1",
      "segment_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "segment_id",
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "segment_id",
        "wire": "segment_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "data": [
        {
          "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
          "email": "steve.wozniak@gmail.com",
          "first_name": "Steve",
          "last_name": "Wozniak",
          "created_at": "2023-10-06T23:47:56.678Z",
          "unsubscribed": false
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "contact",
    "accessor": "Contact",
    "op": "load",
    "method": "GET",
    "path": "/contacts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact",
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "first_name": "Steve",
      "last_name": "Wozniak",
      "created_at": "2023-10-06T23:47:56.678Z",
      "unsubscribed": false,
      "properties": {}
    },
    "idField": "id"
  },
  {
    "entity": "contact_property",
    "accessor": "ContactProperty",
    "op": "create",
    "method": "POST",
    "path": "/contact-properties",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "contact_property"
    },
    "idField": "id"
  },
  {
    "entity": "contact_property",
    "accessor": "ContactProperty",
    "op": "list",
    "method": "GET",
    "path": "/contact-properties",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "key": "x",
          "type": "x",
          "fallback_value": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "contact_property",
    "accessor": "ContactProperty",
    "op": "load",
    "method": "GET",
    "path": "/contact-properties/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact_property",
      "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
      "key": "company_name",
      "type": "string",
      "fallback_value": "Acme Corp",
      "created_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "contact_topics_response_success",
    "accessor": "ContactTopicsResponseSuccess",
    "op": "list",
    "method": "GET",
    "path": "/contacts/{contact_id}/topics",
    "action": "topics",
    "args": [
      {
        "name": "id",
        "wire": "contact_id",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "name": "x",
          "description": "x",
          "subscription": "opt_in"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "create_api_key",
    "accessor": "CreateApiKey",
    "op": "create",
    "method": "POST",
    "path": "/api-keys",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "x",
      "token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "create_batch_email",
    "accessor": "CreateBatchEmail",
    "op": "create",
    "method": "POST",
    "path": "/emails/batch",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "Idempotency-Key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data": [
        {
          "id": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "create_broadcast_response_success",
    "accessor": "CreateBroadcastResponseSuccess",
    "op": "create",
    "method": "POST",
    "path": "/broadcasts",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "broadcast"
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "create",
    "method": "POST",
    "path": "/domains/{domain_id}/verify",
    "action": "verify",
    "args": [
      {
        "name": "id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "domain",
      "id": "d91cd9bd-1176-453e-8fc1-35364d380206"
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "create",
    "method": "POST",
    "path": "/domains",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "x",
      "name": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "status": "x",
      "capabilities": {
        "sending": "enabled",
        "receiving": "enabled"
      },
      "records": [
        {
          "record": "SPF",
          "name": "x",
          "type": "MX",
          "ttl": "x",
          "status": "pending",
          "value": "x",
          "priority": 1
        }
      ],
      "region": "x",
      "open_tracking": true,
      "click_tracking": true,
      "tracking_subdomain": "x"
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "list",
    "method": "GET",
    "path": "/domains",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
          "name": "example.com",
          "status": "not_started",
          "created_at": "2023-04-26T20:21:26.347412+00:00",
          "region": "us-east-1",
          "capabilities": {
            "sending": "enabled",
            "receiving": "enabled"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "load",
    "method": "GET",
    "path": "/domains/{domain_id}",
    "args": [
      {
        "name": "id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "domain",
      "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "name": "example.com",
      "status": "not_started",
      "created_at": "2023-04-26T20:21:26.347412+00:00",
      "region": "us-east-1",
      "open_tracking": true,
      "click_tracking": true,
      "tracking_subdomain": "x",
      "capabilities": {
        "sending": "enabled",
        "receiving": "enabled"
      },
      "records": [
        {
          "record": "SPF",
          "name": "x",
          "type": "MX",
          "ttl": "x",
          "status": "pending",
          "value": "x",
          "priority": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "remove",
    "method": "DELETE",
    "path": "/domains/{domain_id}",
    "args": [
      {
        "name": "id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "domain",
      "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "email",
    "accessor": "Email",
    "op": "create",
    "method": "POST",
    "path": "/emails/{email_id}/cancel",
    "action": "cancel",
    "args": [
      {
        "name": "id",
        "wire": "email_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "email",
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "Acme <onboarding@resend.dev>",
      "created_at": "2023-04-03T22:13:42.674981+00:00",
      "subject": "Hello World",
      "html": "Congrats on sending your <strong>first email</strong>!",
      "text": "x",
      "bcc": [
        "x"
      ],
      "cc": [
        "x"
      ],
      "reply_to": [
        "x"
      ],
      "last_event": "delivered"
    },
    "idField": "id"
  },
  {
    "entity": "email",
    "accessor": "Email",
    "op": "create",
    "method": "POST",
    "path": "/emails",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "idempotency_key",
        "wire": "Idempotency-Key",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "email",
    "accessor": "Email",
    "op": "list",
    "method": "GET",
    "path": "/emails",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "object": "email",
          "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
          "to": [
            "delivered@resend.dev"
          ],
          "from": "Acme <onboarding@resend.dev>",
          "created_at": "2023-04-03T22:13:42.674981+00:00",
          "subject": "Hello World",
          "html": "Congrats on sending your <strong>first email</strong>!",
          "text": "x",
          "bcc": [
            "x"
          ],
          "cc": [
            "x"
          ],
          "reply_to": [
            "x"
          ],
          "last_event": "delivered"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "email",
    "accessor": "Email",
    "op": "load",
    "method": "GET",
    "path": "/emails/{email_id}",
    "args": [
      {
        "name": "id",
        "wire": "email_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "email",
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "Acme <onboarding@resend.dev>",
      "created_at": "2023-04-03T22:13:42.674981+00:00",
      "subject": "Hello World",
      "html": "Congrats on sending your <strong>first email</strong>!",
      "text": "x",
      "bcc": [
        "x"
      ],
      "cc": [
        "x"
      ],
      "reply_to": [
        "x"
      ],
      "last_event": "delivered"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "create",
    "method": "POST",
    "path": "/events",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "object": "event",
      "id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "create",
    "method": "POST",
    "path": "/events/send",
    "action": "send",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "object": "event",
      "event": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "list",
    "method": "GET",
    "path": "/events",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "x",
          "name": "x",
          "schema": {},
          "created_at": "x",
          "updated_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "load",
    "method": "GET",
    "path": "/events/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "event",
      "id": "x",
      "name": "x",
      "schema": {},
      "created_at": "x",
      "updated_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "list_attachment",
    "accessor": "ListAttachment",
    "op": "list",
    "method": "GET",
    "path": "/emails/{email_id}/attachments",
    "args": [
      {
        "name": "email_id",
        "wire": "email_id",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "660e8400-e29b-41d4-a716-446655440000",
          "filename": "document.pdf",
          "content_type": "application/pdf",
          "content_id": "img001",
          "content_disposition": "attachment",
          "download_url": "https://cloudfront.example.com/path?Signature=...",
          "expires_at": "2024-10-27T18:30:00.000Z",
          "size": 2048
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_attachment",
    "accessor": "ListAttachment",
    "op": "list",
    "method": "GET",
    "path": "/emails/receiving/{email_id}/attachments",
    "args": [
      {
        "name": "receiving_id",
        "wire": "email_id",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "660e8400-e29b-41d4-a716-446655440000",
          "filename": "document.pdf",
          "content_type": "application/pdf",
          "content_id": "img001",
          "content_disposition": "attachment",
          "download_url": "https://cloudfront.example.com/path?Signature=...",
          "expires_at": "2024-10-27T18:30:00.000Z",
          "size": 2048
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_contact_segments_response_success",
    "accessor": "ListContactSegmentsResponseSuccess",
    "op": "list",
    "method": "GET",
    "path": "/contacts/{contact_id}/segments",
    "args": [
      {
        "name": "contact_id",
        "wire": "contact_id",
        "value": "p1"
      }
    ],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "name": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "log",
    "accessor": "Log",
    "op": "list",
    "method": "GET",
    "path": "/logs",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "endpoint": "x",
          "method": "GET",
          "response_status": 1,
          "user_agent": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "log",
    "accessor": "Log",
    "op": "load",
    "method": "GET",
    "path": "/logs/{log_id}",
    "args": [
      {
        "name": "id",
        "wire": "log_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "log",
      "id": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "endpoint": "x",
      "method": "GET",
      "response_status": 1,
      "user_agent": "x"
    },
    "idField": "id"
  },
  {
    "entity": "received_email",
    "accessor": "ReceivedEmail",
    "op": "list",
    "method": "GET",
    "path": "/emails/receiving",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "550e8400-e29b-41d4-a716-446655440000",
          "to": [
            "delivered@resend.dev"
          ],
          "from": "sender@example.com",
          "subject": "Hello World",
          "message_id": "<message-id@example.com>",
          "bcc": [
            "x"
          ],
          "cc": [
            "x"
          ],
          "reply_to": [
            "x"
          ],
          "created_at": "2023-10-06T23:47:56.678Z",
          "attachments": [
            {
              "id": "x",
              "filename": "x",
              "content_type": "x",
              "content_id": "x",
              "content_disposition": "inline",
              "size": 1
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "received_email",
    "accessor": "ReceivedEmail",
    "op": "load",
    "method": "GET",
    "path": "/emails/receiving/{email_id}",
    "args": [
      {
        "name": "email_id",
        "wire": "email_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "email",
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "sender@example.com",
      "subject": "Hello World",
      "message_id": "<message-id@example.com>",
      "bcc": [],
      "cc": [],
      "reply_to": [],
      "html": "<p>Email content</p>",
      "text": "Email content",
      "headers": {
        "X-Custom-Header": "value"
      },
      "created_at": "2023-10-06:23:47:56.678Z",
      "attachments": [
        {
          "id": "x",
          "filename": "x",
          "content_type": "x",
          "content_id": "x",
          "content_disposition": "inline",
          "size": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "remove_audience_response_success",
    "accessor": "RemoveAudienceResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/audiences/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "audience",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_broadcast_response_success",
    "accessor": "RemoveBroadcastResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/broadcasts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "broadcast",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_contact_from_segment_response_success",
    "accessor": "RemoveContactFromSegmentResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/contacts/{contact_id}/segments/{segment_id}",
    "args": [
      {
        "name": "contact_id",
        "wire": "contact_id",
        "value": "p1"
      },
      {
        "name": "segment_id",
        "wire": "segment_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact_segment",
      "contact_id": "x",
      "segment_id": "x",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_contact_property_response_success",
    "accessor": "RemoveContactPropertyResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/contact-properties/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "contact_property",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_contact_response_success",
    "accessor": "RemoveContactResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/contacts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact",
      "id": "520784e2-887d-4c25-b53c-4ad46ad38100",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_event",
    "accessor": "RemoveEvent",
    "op": "remove",
    "method": "DELETE",
    "path": "/events/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "event",
      "id": "x",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_segment_response_success",
    "accessor": "RemoveSegmentResponseSuccess",
    "op": "create",
    "method": "POST",
    "path": "/segments",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "segment"
    },
    "idField": "id"
  },
  {
    "entity": "remove_segment_response_success",
    "accessor": "RemoveSegmentResponseSuccess",
    "op": "list",
    "method": "GET",
    "path": "/segments",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "name": "x",
          "audience_id": "x",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "remove_segment_response_success",
    "accessor": "RemoveSegmentResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/segments/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "segment",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_template_response_success",
    "accessor": "RemoveTemplateResponseSuccess",
    "op": "create",
    "method": "POST",
    "path": "/templates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "x",
      "object": "template"
    },
    "idField": "id"
  },
  {
    "entity": "remove_template_response_success",
    "accessor": "RemoveTemplateResponseSuccess",
    "op": "list",
    "method": "GET",
    "path": "/templates",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "data": [
        {
          "id": "x",
          "name": "x",
          "status": "draft",
          "published_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z",
          "alias": "x"
        }
      ],
      "has_more": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_template_response_success",
    "accessor": "RemoveTemplateResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "template",
      "id": "x",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "remove_topic_response_success",
    "accessor": "RemoveTopicResponseSuccess",
    "op": "create",
    "method": "POST",
    "path": "/topics",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "topic"
    },
    "idField": "id"
  },
  {
    "entity": "remove_topic_response_success",
    "accessor": "RemoveTopicResponseSuccess",
    "op": "list",
    "method": "GET",
    "path": "/topics",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": true,
      "data": [
        {
          "id": "x",
          "name": "x",
          "description": "x",
          "default_subscription": "opt_in",
          "visibility": "public",
          "created_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "remove_topic_response_success",
    "accessor": "RemoveTopicResponseSuccess",
    "op": "remove",
    "method": "DELETE",
    "path": "/topics/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "topic",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "retrieved_attachment",
    "accessor": "RetrievedAttachment",
    "op": "load",
    "method": "GET",
    "path": "/emails/{email_id}/attachments/{attachment_id}",
    "args": [
      {
        "name": "email_id",
        "wire": "email_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "attachment_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "attachment",
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "filename": "document.pdf",
      "content_type": "application/pdf",
      "content_id": "img001",
      "content_disposition": "attachment",
      "download_url": "https://cloudfront.example.com/path?Signature=...",
      "expires_at": "2024-10-27T18:30:00.000Z",
      "size": 2048
    },
    "idField": "id"
  },
  {
    "entity": "retrieved_attachment",
    "accessor": "RetrievedAttachment",
    "op": "load",
    "method": "GET",
    "path": "/emails/receiving/{email_id}/attachments/{attachment_id}",
    "args": [
      {
        "name": "id",
        "wire": "attachment_id",
        "value": "p1"
      },
      {
        "name": "receiving_id",
        "wire": "email_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "attachment",
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "filename": "document.pdf",
      "content_type": "application/pdf",
      "content_id": "img001",
      "content_disposition": "attachment",
      "download_url": "https://cloudfront.example.com/path?Signature=...",
      "expires_at": "2024-10-27T18:30:00.000Z",
      "size": 2048
    },
    "idField": "id"
  },
  {
    "entity": "segment",
    "accessor": "Segment",
    "op": "load",
    "method": "GET",
    "path": "/segments/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "segment",
      "name": "Active Users",
      "audience_id": "x",
      "filter": {},
      "created_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "template",
    "accessor": "Template",
    "op": "create",
    "method": "POST",
    "path": "/templates/{id}/duplicate",
    "action": "duplicate",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "object": "template"
    },
    "idField": "id"
  },
  {
    "entity": "template",
    "accessor": "Template",
    "op": "create",
    "method": "POST",
    "path": "/templates/{id}/publish",
    "action": "publish",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "object": "template"
    },
    "idField": "id"
  },
  {
    "entity": "template",
    "accessor": "Template",
    "op": "load",
    "method": "GET",
    "path": "/templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "template",
      "id": "x",
      "current_version_id": "x",
      "name": "x",
      "alias": "x",
      "from": "x",
      "subject": "x",
      "reply_to": [
        "x"
      ],
      "html": "x",
      "text": "x",
      "variables": [
        {
          "id": "x",
          "key": "x",
          "type": "string",
          "fallback_value": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      ],
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "status": "draft",
      "published_at": "2026-01-01T00:00:00Z",
      "has_unpublished_versions": true
    },
    "idField": "id"
  },
  {
    "entity": "topic",
    "accessor": "Topic",
    "op": "load",
    "method": "GET",
    "path": "/topics/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "topic",
      "name": "Newsletter",
      "description": "x",
      "default_subscription": "opt_in",
      "visibility": "public",
      "created_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "update_broadcast_response_success",
    "accessor": "UpdateBroadcastResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/broadcasts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "broadcast"
    },
    "idField": "id"
  },
  {
    "entity": "update_contact_property_response_success",
    "accessor": "UpdateContactPropertyResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/contact-properties/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "contact_property"
    },
    "idField": "id"
  },
  {
    "entity": "update_contact_response_success",
    "accessor": "UpdateContactResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/contacts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact",
      "id": "479e3145-dd38-476b-932c-529ceb705947"
    },
    "idField": "id"
  },
  {
    "entity": "update_contact_topics_response_success",
    "accessor": "UpdateContactTopicsResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/contacts/{contact_id}/topics",
    "args": [
      {
        "name": "contact_id",
        "wire": "contact_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "contact_topics",
      "contact_id": "x",
      "topics": [
        {
          "id": "x",
          "subscription": "opt_in"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "update_domain_response_success",
    "accessor": "UpdateDomainResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/domains/{domain_id}",
    "args": [
      {
        "name": "domain_id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "object": "domain"
    },
    "idField": "id"
  },
  {
    "entity": "update_email_option",
    "accessor": "UpdateEmailOption",
    "op": "update",
    "method": "PATCH",
    "path": "/emails/{email_id}",
    "args": [
      {
        "name": "email_id",
        "wire": "email_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "scheduled_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "update_event",
    "accessor": "UpdateEvent",
    "op": "update",
    "method": "PATCH",
    "path": "/events/{identifier}",
    "args": [
      {
        "name": "id",
        "wire": "identifier",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "event",
      "id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "update_template_response_success",
    "accessor": "UpdateTemplateResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "x",
      "object": "template"
    },
    "idField": "id"
  },
  {
    "entity": "update_topic_response_success",
    "accessor": "UpdateTopicResponseSuccess",
    "op": "update",
    "method": "PATCH",
    "path": "/topics/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "object": "topic"
    },
    "idField": "id"
  },
  {
    "entity": "update_webhook",
    "accessor": "UpdateWebhook",
    "op": "create",
    "method": "POST",
    "path": "/webhooks",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "object": "webhook",
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "signing_secret": "whsec_..."
    },
    "idField": "id"
  },
  {
    "entity": "update_webhook",
    "accessor": "UpdateWebhook",
    "op": "list",
    "method": "GET",
    "path": "/webhooks",
    "args": [],
    "select": {
      "after": "v1",
      "before": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "after",
      "before"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "before",
        "wire": "before"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "list",
      "has_more": false,
      "data": [
        {
          "id": "479e3145-dd38-476b-932c-529ceb705947",
          "endpoint": "https://webhook.example.com/handler",
          "events": [
            "email.sent"
          ],
          "status": "enabled",
          "created_at": "2023-10-06T23:47:56.678Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "update_webhook",
    "accessor": "UpdateWebhook",
    "op": "update",
    "method": "PATCH",
    "path": "/webhooks/{webhook_id}",
    "args": [
      {
        "name": "id",
        "wire": "webhook_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "webhook",
      "id": "479e3145-dd38-476b-932c-529ceb705947"
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "load",
    "method": "GET",
    "path": "/webhooks/{webhook_id}",
    "args": [
      {
        "name": "id",
        "wire": "webhook_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "webhook",
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "endpoint": "https://webhook.example.com/handler",
      "events": [
        "email.sent",
        "email.delivered"
      ],
      "status": "enabled",
      "created_at": "2023-10-06T23:47:56.678Z",
      "signing_secret": "whsec_..."
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "remove",
    "method": "DELETE",
    "path": "/webhooks/{webhook_id}",
    "args": [
      {
        "name": "id",
        "wire": "webhook_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "object": "webhook",
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "deleted": true
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
