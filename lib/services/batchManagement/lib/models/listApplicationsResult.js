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
 * Initializes a new instance of the ListApplicationsResult class.
 * @constructor
 * Response to an ApplicationOperations.ListApplications request.
 *
 * @member {string} [nextLink] The URL to get the next set of results.
 *
 */
class ListApplicationsResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ListApplicationsResult
   *
   * @returns {object} metadata of ListApplicationsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListApplicationsResult',
      type: {
        name: 'Composite',
        className: 'ListApplicationsResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Application'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListApplicationsResult;
