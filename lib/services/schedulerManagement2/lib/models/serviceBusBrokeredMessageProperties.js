/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceBusBrokeredMessageProperties class.
 * @constructor
 * @member {string} [contentType] Gets or sets the content type.
 *
 * @member {string} [correlationId] Gets or sets the correlation ID.
 *
 * @member {boolean} [forcePersistence] Gets or sets the force persistence.
 *
 * @member {string} [label] Gets or sets the label.
 *
 * @member {string} [messageId] Gets or sets the message ID.
 *
 * @member {string} [partitionKey] Gets or sets the partition key.
 *
 * @member {string} [replyTo] Gets or sets the reply to.
 *
 * @member {string} [replyToSessionId] Gets or sets the reply to session ID.
 *
 * @member {date} [scheduledEnqueueTimeUtc] Gets or sets the scheduled enqueue
 * time UTC.
 *
 * @member {string} [sessionId] Gets or sets the session ID.
 *
 * @member {moment.duration} [timeToLive] Gets or sets the time to live.
 *
 * @member {string} [to] Gets or sets the to.
 *
 * @member {string} [viaPartitionKey] Gets or sets the via partition key.
 *
 */
class ServiceBusBrokeredMessageProperties {
  constructor() {
  }

  /**
   * Defines the metadata of ServiceBusBrokeredMessageProperties
   *
   * @returns {object} metadata of ServiceBusBrokeredMessageProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceBusBrokeredMessageProperties',
      type: {
        name: 'Composite',
        className: 'ServiceBusBrokeredMessageProperties',
        modelProperties: {
          contentType: {
            required: false,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          },
          correlationId: {
            required: false,
            serializedName: 'correlationId',
            type: {
              name: 'String'
            }
          },
          forcePersistence: {
            required: false,
            serializedName: 'forcePersistence',
            type: {
              name: 'Boolean'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          messageId: {
            required: false,
            serializedName: 'messageId',
            type: {
              name: 'String'
            }
          },
          partitionKey: {
            required: false,
            serializedName: 'partitionKey',
            type: {
              name: 'String'
            }
          },
          replyTo: {
            required: false,
            serializedName: 'replyTo',
            type: {
              name: 'String'
            }
          },
          replyToSessionId: {
            required: false,
            serializedName: 'replyToSessionId',
            type: {
              name: 'String'
            }
          },
          scheduledEnqueueTimeUtc: {
            required: false,
            serializedName: 'scheduledEnqueueTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          sessionId: {
            required: false,
            serializedName: 'sessionId',
            type: {
              name: 'String'
            }
          },
          timeToLive: {
            required: false,
            serializedName: 'timeToLive',
            type: {
              name: 'TimeSpan'
            }
          },
          to: {
            required: false,
            serializedName: 'to',
            type: {
              name: 'String'
            }
          },
          viaPartitionKey: {
            required: false,
            serializedName: 'viaPartitionKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceBusBrokeredMessageProperties;
