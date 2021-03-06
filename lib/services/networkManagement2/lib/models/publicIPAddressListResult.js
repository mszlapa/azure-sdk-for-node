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
 * Initializes a new instance of the PublicIPAddressListResult class.
 * @constructor
 * Response for ListPublicIpAddresses API service call.
 *
 * @member {string} [nextLink] The URL to get the next set of results.
 *
 */
class PublicIPAddressListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PublicIPAddressListResult
   *
   * @returns {object} metadata of PublicIPAddressListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublicIPAddressListResult',
      type: {
        name: 'Composite',
        className: 'PublicIPAddressListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PublicIPAddressElementType',
                  type: {
                    name: 'Composite',
                    className: 'PublicIPAddress'
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

module.exports = PublicIPAddressListResult;
