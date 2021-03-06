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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the QueueCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the Create Or Update Queue operation.
 *
 * @member {string} [name] Queue name.
 *
 * @member {string} location location of the resource.
 *
 * @member {string} [lockDuration] The duration of a peek-lock; that is, the
 * amount of time that the message is locked for other receivers. The maximum
 * value for LockDuration is 5 minutes; the default value is 1 minute.
 *
 * @member {date} [accessedAt] Last time a message was sent, or the last time
 * there was a receive request to this queue.
 *
 * @member {string} [autoDeleteOnIdle] the TimeSpan idle interval after which
 * the queue is automatically deleted. The minimum duration is 5 minutes.
 *
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the queue. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 *
 * @member {date} [createdAt] The exact time the message was created.
 *
 * @member {string} [defaultMessageTimeToLive] The default message time to live
 * value. This is the duration after which the message expires, starting from
 * when the message is sent to Service Bus. This is the default value used when
 * TimeToLive is not set on a message itself.
 *
 * @member {string} [duplicateDetectionHistoryTimeWindow] TimeSpan structure
 * that defines the duration of the duplicate detection history. The default
 * value is 10 minutes.
 *
 * @member {boolean} [enableBatchedOperations] A value that indicates whether
 * server-side batched operations are enabled.
 *
 * @member {boolean} [deadLetteringOnMessageExpiration] A value that indicates
 * whether this queue has dead letter support when a message expires.
 *
 * @member {boolean} [enableExpress] A value that indicates whether Express
 * Entities are enabled. An express queue holds a message in memory temporarily
 * before writing it to persistent storage.
 *
 * @member {boolean} [enablePartitioning] A value that indicates whether the
 * queue is to be partitioned across multiple message brokers.
 *
 * @member {boolean} [isAnonymousAccessible] A value that indicates whether the
 * message is accessible anonymously.
 *
 * @member {number} [maxDeliveryCount] The maximum delivery count. A message is
 * automatically deadlettered after this number of deliveries.
 *
 * @member {number} [maxSizeInMegabytes] The maximum size of the queue in
 * megabytes, which is the size of memory allocated for the queue.
 *
 * @member {number} [messageCount] The number of messages in the queue.
 *
 * @member {object} [countDetails]
 *
 * @member {number} [countDetails.activeMessageCount] Number of active messages
 * in the queue, topic, or subscription.
 *
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead lettered.
 *
 * @member {number} [countDetails.scheduledMessageCount] Number of scheduled
 * messages.
 *
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 *
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 *
 * @member {boolean} [requiresDuplicateDetection] A value indicating if this
 * queue requires duplicate detection.
 *
 * @member {boolean} [requiresSession] A value that indicates whether the queue
 * supports the concept of sessions.
 *
 * @member {number} [sizeInBytes] The size of the queue, in bytes.
 *
 * @member {string} [status] Enumerates the possible values for the status of a
 * messaging entity. Possible values include: 'Active', 'Creating', 'Deleting',
 * 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring', 'SendDisabled',
 * 'Unknown'
 *
 * @member {boolean} [supportOrdering] A value that indicates whether the queue
 * supports ordering.
 *
 * @member {date} [updatedAt] The exact time the message was updated.
 *
 */
class QueueCreateOrUpdateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of QueueCreateOrUpdateParameters
   *
   * @returns {object} metadata of QueueCreateOrUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QueueCreateOrUpdateParameters',
      type: {
        name: 'Composite',
        className: 'QueueCreateOrUpdateParameters',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          lockDuration: {
            required: false,
            serializedName: 'properties.lockDuration',
            type: {
              name: 'String'
            }
          },
          accessedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.accessedAt',
            type: {
              name: 'DateTime'
            }
          },
          autoDeleteOnIdle: {
            required: false,
            serializedName: 'properties.autoDeleteOnIdle',
            type: {
              name: 'String'
            }
          },
          entityAvailabilityStatus: {
            required: false,
            serializedName: 'properties.entityAvailabilityStatus',
            type: {
              name: 'Enum',
              allowedValues: [ 'Available', 'Limited', 'Renaming', 'Restoring', 'Unknown' ]
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          defaultMessageTimeToLive: {
            required: false,
            serializedName: 'properties.defaultMessageTimeToLive',
            type: {
              name: 'String'
            }
          },
          duplicateDetectionHistoryTimeWindow: {
            required: false,
            serializedName: 'properties.duplicateDetectionHistoryTimeWindow',
            type: {
              name: 'String'
            }
          },
          enableBatchedOperations: {
            required: false,
            serializedName: 'properties.enableBatchedOperations',
            type: {
              name: 'Boolean'
            }
          },
          deadLetteringOnMessageExpiration: {
            required: false,
            serializedName: 'properties.deadLetteringOnMessageExpiration',
            type: {
              name: 'Boolean'
            }
          },
          enableExpress: {
            required: false,
            serializedName: 'properties.enableExpress',
            type: {
              name: 'Boolean'
            }
          },
          enablePartitioning: {
            required: false,
            serializedName: 'properties.enablePartitioning',
            type: {
              name: 'Boolean'
            }
          },
          isAnonymousAccessible: {
            required: false,
            serializedName: 'properties.isAnonymousAccessible',
            type: {
              name: 'Boolean'
            }
          },
          maxDeliveryCount: {
            required: false,
            serializedName: 'properties.maxDeliveryCount',
            type: {
              name: 'Number'
            }
          },
          maxSizeInMegabytes: {
            required: false,
            serializedName: 'properties.maxSizeInMegabytes',
            type: {
              name: 'Number'
            }
          },
          messageCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.messageCount',
            type: {
              name: 'Number'
            }
          },
          countDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.countDetails',
            type: {
              name: 'Composite',
              className: 'MessageCountDetails'
            }
          },
          requiresDuplicateDetection: {
            required: false,
            serializedName: 'properties.requiresDuplicateDetection',
            type: {
              name: 'Boolean'
            }
          },
          requiresSession: {
            required: false,
            serializedName: 'properties.requiresSession',
            type: {
              name: 'Boolean'
            }
          },
          sizeInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.sizeInBytes',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Active', 'Creating', 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring', 'SendDisabled', 'Unknown' ]
            }
          },
          supportOrdering: {
            required: false,
            serializedName: 'properties.supportOrdering',
            type: {
              name: 'Boolean'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = QueueCreateOrUpdateParameters;
